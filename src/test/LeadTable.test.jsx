import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import LeadTable from "../components/LeadTable";

const mockLeads = [
  {
    id: 1,
    name: "Rahul Sharma",
    company: "ABC Logistics",
    service: "Freight",
    status: "New",
    owner: "Gadha",
    followup: "2026-07-20",
  },
];

test("renders lead name", () => {
  render(<LeadTable leads={mockLeads} onView={() => {}} />);

  expect(screen.getByText("Rahul Sharma")).toBeInTheDocument();
});