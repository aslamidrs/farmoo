import React from "react";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { Card } from "../components/ui/Card";

export const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card>
        <h2 className="text-2xl font-bold mb-4">Login to Pashumart</h2>
        <form className="space-y-4">
          <Input placeholder="Email" type="email" required />
          <Input placeholder="Password" type="password" required />
          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
      </Card>
    </div>
  );
};
