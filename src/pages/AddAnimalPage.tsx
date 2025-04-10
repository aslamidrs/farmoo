import React from "react";
import { Card } from "../components/ui/Card";
import { Input } from "../components/ui/Input";
import { Select } from "../components/ui/Select";
import { TextArea } from "../components/ui/TextArea";
import { Label } from "../components/ui/Label";
import { Button } from "../components/ui/Button";

export const AddAnimalPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <Card>
        <h2 className="text-2xl font-bold mb-6 text-center">
          Add Animal Details
        </h2>
        <form className="space-y-4">
          <div>
            <Label htmlFor="name" text="Animal Name" />
            <Input
              id="name"
              name="name"
              placeholder="Enter animal name"
              required
            />
          </div>
          <div>
            <Label htmlFor="type" text="Animal Type" />
            <Input
              id="type"
              name="type"
              placeholder="e.g., Cow, Buffalo"
              required
            />
          </div>
          <div>
            <Label htmlFor="gender" text="Gender" />
            <Select
              id="gender"
              name="gender"
              options={[
                { label: "Select Gender", value: "" },
                { label: "Male", value: "male" },
                { label: "Female", value: "female" },
              ]}
              required
            />
          </div>
          <div>
            <Label htmlFor="notes" text="Notes" />
            <TextArea
              id="notes"
              name="notes"
              placeholder="Health, growth, or vaccination notes..."
              rows={4}
            />
          </div>
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </Card>
    </div>
  );
};
