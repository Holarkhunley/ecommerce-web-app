import { LoginForm } from "@/components/login-form";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      {/* 👇 Add width limit and center the form */}
      <LoginForm className="w-full max-w-md" />
    </div>
  );
}
