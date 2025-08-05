import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import Button from "../ui/Button";
import Input from "../ui/Input";
import Label from "../ui/Label";
import { Mail, Lock } from "lucide-react";

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    // --- Validation ---
    if (!email || !password) {
      setError("Please enter both email and password.");
      setIsLoading(false);
      return;
    }

    // --- Mock API Call ---
    setTimeout(() => {
      console.log("Simulating login for:", email);
      // In a real app, this data would come from your API response
      const mockUser = {
        id: "user123",
        name: "John Doe",
        email: email,
        phone: "+237123456789",
      };
      login(mockUser);
      setIsLoading(false);
      navigate("/history"); // Redirect to a protected page on success
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <p className="bg-red-100 text-red-700 p-3 rounded-lg text-center">
          {error}
        </p>
      )}

      <div>
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          icon={<Mail size={18} />}
          required
        />
      </div>

      <div>
        <div className="flex justify-between items-center">
          <Label htmlFor="password">Password</Label>
          <Link to="#" className="text-sm text-emerald-600 hover:underline">
            Forgot Password?
          </Link>
        </div>
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="••••••••"
          icon={<Lock size={18} />}
          required
        />
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full"
        isLoading={isLoading}
        disabled={isLoading}
      >
        {isLoading ? "Logging in..." : "Login"}
      </Button>
    </form>
  );
};

export default LoginForm;
