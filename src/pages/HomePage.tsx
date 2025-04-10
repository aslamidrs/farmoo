import React from "react";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { useNavigate } from "react-router-dom";
import { Avatar } from "../components/ui/Avatar";
import { Badge } from "../components/ui/Badge";
import { Spinner } from "../components/ui/Spinner";
import { Modal } from "../components/ui/Modal";
import { ChevronDown, Home, Plus, User } from "lucide-react";
import { motion } from "framer-motion";

export const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Sticky Header with Searchbar */}
      <header className="sticky top-0 bg-white border-b shadow-sm p-4 z-10 flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">Pashumart</h1>
          <Avatar initials="PM" />
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Search animals, services..."
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <ChevronDown
            className="absolute right-3 top-2.5 text-gray-400"
            size={20}
          />
        </div>
      </header>

      {/* Scrollable Main */}
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

      {/* Sticky Footer with Navigation */}
      <footer className="sticky bottom-0 bg-white border-t shadow-inner p-2 flex justify-around text-xs">
        <button
          onClick={() => navigate("/home")}
          className="flex flex-col items-center text-blue-600"
        >
          <Home size={20} />
          <span>Home</span>
        </button>
        <button
          onClick={() => navigate("/add-animal")}
          className="flex flex-col items-center"
        >
          <Plus size={20} />
          <span>Add</span>
        </button>
        <button
          onClick={() => navigate("/profile")}
          className="flex flex-col items-center"
        >
          <User size={20} />
          <span>Profile</span>
        </button>
      </footer>

      {/* Optional Modal */}
      <Modal isOpen={false} title="Sample Modal" onClose={() => {}}>
        <p>This is a reusable modal component.</p>
      </Modal>
    </div>
  );
};
