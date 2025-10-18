


import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState, useContext, useEffect } from "react";
import { LoginUser } from "../authService.ts";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext.tsx";
import { Alert, AlertDescription, AlertTitle } from "./components/ui/alert.tsx";

export function LoginForm({ className, ...props }: React.ComponentPropsWithoutRef<"div">) {
  const { logoutSuspended, error, setError, setUser } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Redirect if account suspended
  useEffect(() => {
    if (error === "Your account has been suspended") {
      navigate("/login");
    }
  }, [error, navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const user = await LoginUser(email, password);

      // Save user in context AND localStorage
      setUser(user);
      localStorage.setItem("user", JSON.stringify(user));

      if (user.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }
    } catch (err: any) {
      if (err.response && err.response.status === 403) {
        logoutSuspended(); // sets error, triggers useEffect redirect
      } else {
        setError(err.response?.data?.message || "Login failed");
      }
    }
  };

  return (
    <div className={cn("flex flex-col gap-2", className)} {...props}>
      {error && (
        <Alert variant="destructive">
          <AlertTitle>Login Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Welcome back</CardTitle>
          <CardDescription>Login with your Apple or Google account</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin}>
            <div className="grid gap-6">
              <div className="flex flex-col gap-4">
                <Button variant="outline" className="w-full">Login with Apple</Button>
                <Button variant="outline" className="w-full">Login with Google</Button>
              </div>
              <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                <span className="relative z-10 bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
              <div className="grid gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="m@example.com" required onChange={e => setEmail(e.target.value)} />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                    <a href="#" className="ml-auto text-sm underline-offset-4 no-underline hover:underline">Forgot your password?</a>
                  </div>
                  <Input id="password" type="password" required onChange={e => setPassword(e.target.value)} />
                </div>
                <Button type="submit" className="w-full">Login</Button>
              </div>
              <div className="text-center text-sm">
                Don&apos;t have an account? <a href="/signup" className="underline underline-offset-4 text-sm">Sign up</a>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
      <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary">
        By clicking continue, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  );
}
