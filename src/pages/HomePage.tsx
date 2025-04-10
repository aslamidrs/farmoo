import React from "react";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { useNavigate } from "react-router-dom";
import { Badge } from "../components/ui/Badge";
import { Spinner } from "../components/ui/Spinner";

import { motion } from "framer-motion";

export const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
      <main className="flex-1 overflow-y-auto p-4 bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <Badge text="Logged in" type="success" />
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <h2 className="text-xl font-semibold mb-2">Add Animal</h2>
            <p className="mb-4 text-gray-600">
              Add new livestock details like name, type, and gender.
            </p>
            <Button onClick={() => navigate("/add-animal")}>Go</Button>
          </Card>
          <Card>
            <h2 className="text-xl font-semibold mb-2">Track Breeding</h2>
            <p className="mb-4 text-gray-600">
              Monitor and manage animal breeding cycles for better yield.
            </p>
            <Button disabled>Coming Soon</Button>
          </Card>
          <Card>
            <h2 className="text-xl font-semibold mb-2">Vaccination Records</h2>
            <p className="mb-4 text-gray-600">
              Log and track vaccination schedules and updates.
            </p>
            <Button disabled>Coming Soon</Button>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <Spinner />
        </div>
      </main>
  );
};
