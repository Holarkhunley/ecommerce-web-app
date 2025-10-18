
import { SignupForm } from "@/components/signup-form";

export default function SignUpPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      {/* 👇 Add width limit and center the form */}
      <SignupForm  />
    </div>
  );
}
