import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../ui/Button";
import Input from "../ui/Input";
import Label from "../ui/Label";
import { User, Mail, Phone, Lock } from "lucide-react";

const RegisterForm: React.FC = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");

    // --- Validation ---
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      setIsLoading(false);
      return;
    }

    // --- Mock API Call ---
    setTimeout(() => {
      console.log("Simulating registration with data:", { name, email, phone });
      alert("Registration successful! You can now log in.");
      setIsLoading(false);
      navigate("/login");
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
        <Label htmlFor="name">Full Name</Label>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="John Doe"
          icon={<User size={18} />}
          required
        />
      </div>

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
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder="+237..."
          icon={<Phone size={18} />}
          required
        />
      </div>

      <div>
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="Minimum 6 characters"
          icon={<Lock size={18} />}
          required
          minLength={6}
        />
      </div>

      <div>
        <Label htmlFor="confirmPassword">Confirm Password</Label>
        <Input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          placeholder="Re-enter your password"
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
        {isLoading ? "Creating Account..." : "Create Account"}
      </Button>
    </form>
  );
};

export default RegisterForm;
