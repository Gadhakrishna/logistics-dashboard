import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import LeadDrawer from "../components/LeadDrawer";

const lead = {
  name: "Rahul Sharma",
  company: "ABC Logistics",
  service: "Freight",
  phone: "9876543210",
  email: "rahul@test.com",
  owner: "Gadha",
  status: "New",
  followup: "2026-07-20",
  notes: "Sample lead",
};

test("shows lead details", () => {
  render(<LeadDrawer lead={lead} onClose={() => {}} />);

  expect(screen.getByText("Rahul Sharma")).toBeInTheDocument();
});