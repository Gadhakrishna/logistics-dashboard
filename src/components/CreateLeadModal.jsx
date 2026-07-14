import { useState } from "react";

export default function CreateLeadModal({ open, onClose }) {
  const [formData, setFormData] = useState({
    contact_name: "",
    company_name: "",
    email: "",
    phone: "",
    enquiry_details: "",
    status: "NEW",
    next_follow_up: "",
    next_action: "",
    interaction_note: "",
  });

  if (!open) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(formData);

      // Backend Integration
      // await fetch("http://127.0.0.1:8000/api/leads/", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(formData),
      // });

      alert("Lead created successfully.");

      onClose();

    } catch (error) {
      alert("Failed to create lead.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 p-4">

      <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl p-6 max-h-[90vh] overflow-y-auto">

        <div className="flex justify-between items-center mb-6">

          <h2 className="text-2xl font-bold">
            Create Lead
          </h2>

          <button
            onClick={onClose}
            className="text-2xl font-bold"
          >
            ×
          </button>

        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >

          <input
            type="text"
            name="contact_name"
            placeholder="Contact Name"
            value={formData.contact_name}
            onChange={handleChange}
            className="border rounded-lg p-3"
            required
          />

          <input
            type="text"
            name="company_name"
            placeholder="Company Name"
            value={formData.company_name}
            onChange={handleChange}
            className="border rounded-lg p-3"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border rounded-lg p-3"
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="border rounded-lg p-3"
          />

          <textarea
            name="enquiry_details"
            placeholder="Enquiry Details"
            value={formData.enquiry_details}
            onChange={handleChange}
            className="border rounded-lg p-3 md:col-span-2"
            rows="3"
          />

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="border rounded-lg p-3"
          >
            <option value="NEW">New</option>
            <option value="QUALIFIED">Qualified</option>
            <option value="WON">Won</option>
            <option value="LOST">Lost</option>
          </select>

          <input
            type="date"
            name="next_follow_up"
            value={formData.next_follow_up}
            onChange={handleChange}
            className="border rounded-lg p-3"
          />

          <input
            type="text"
            name="next_action"
            placeholder="Next Action"
            value={formData.next_action}
            onChange={handleChange}
            className="border rounded-lg p-3 md:col-span-2"
          />

          <textarea
            name="interaction_note"
            placeholder="Interaction Note"
            value={formData.interaction_note}
            onChange={handleChange}
            className="border rounded-lg p-3 md:col-span-2"
            rows="3"
          />

          <div className="md:col-span-2 flex justify-end gap-3">

            <button
              type="button"
              onClick={onClose}
              className="px-5 py-3 rounded-lg border"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg"
            >
              Save Lead
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}