import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { RegisterUser } from "../authService"
import { useNavigate } from "react-router-dom"


export function SignupForm() {
 const [firstName,setFirstName] = useState("")
 const [lastName,setLastName] = useState("")
 const [email,setEmail] = useState("")
 const [phone,setPhoneNumber] = useState<number>(0)
 const [password,setPassword] = useState("")
 const [confirmPassword,setConfirmPassword] = useState("")
 const [message,setMessage] = useState("")

 const navigate = useNavigate()

 const handleRegister = async(e:React.FormEvent) => {
  e.preventDefault()
  try {
    const user = await RegisterUser(firstName,lastName,email,phone,password,confirmPassword)
    setMessage(`Welcome, ${user.name}`)
    console.log(message);
    navigate("/")
 } catch(err) {
    setMessage('Registration failed,Try again')
    console.log(err)
 }

}

  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-xl text-center">Create an Account</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleRegister} className="grid gap-6">
            <div className="grid gap-2">
              <Label htmlFor="fname">First Name</Label>
              <Input id="fname" type="text" onChange={e => setFirstName(e.target.value)} required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="lname">Last Name</Label>
              <Input id="lname" type="text" onChange={e => setLastName(e.target.value)} required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" onChange={e => setEmail(e.target.value)} required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phonenum">Phone Number</Label>
              <Input id="phonenum" type="tel" pattern="[0-9]{11}" onChange={e => setPhoneNumber(Number(e.target.value))} required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" onChange={e => setPassword(e.target.value)} required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="confirm">Confirm Password</Label>
              <Input id="confirm" type="password" onChange={e => setConfirmPassword(e.target.value)} required />
            </div>
            <Button type="submit" className="w-full">
              Create An Account
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
