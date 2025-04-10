import React from "react";
import { Button } from "../components/ui/Button";

export const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-4">
      <h1 className="text-4xl font-bold mb-4">Welcome to Pashumart</h1>
      <p className="mb-6 text-gray-600 max-w-xl">
        Empowering livestock management through smart solutions — track breeding
        cycles, vaccination records, health, growth, and more.
      </p>
      <div className="flex gap-4">
        <Button>Login</Button>
        <Button variant="secondary">Register</Button>
      </div>
    </div>
  );
};
