"use client";

import { X } from "lucide-react";
import { useEffect, useState } from "react";

export interface Role {
  id: number;
  name: string;
  description: string;
  users: number;
  permissions: number;
  status: string;
}

interface Props {
  open: boolean;
  onClose: () => void;
  saveRole: (role: Role) => void;
  editRole?: Role | null;
}

const emptyForm = {
  name: "",
  description: "",
  permissions: 0,
  status: "Active",
};

export default function RoleModal({
  open,
  onClose,
  saveRole,
  editRole,
}: Props) {
  const [formData, setFormData] = useState(emptyForm);

  useEffect(() => {
    if (editRole) {
      setFormData({
        name: editRole.name,
        description: editRole.description,
        permissions: editRole.permissions,
        status: editRole.status,
      });
    } else {
      setFormData(emptyForm);
    }
  }, [editRole, open]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.name === "permissions"
          ? Number(e.target.value)
          : e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    saveRole({
      id: editRole ? editRole.id : Date.now(),
      users: editRole ? editRole.users : 0,
      ...formData,
    });

    setFormData(emptyForm);
    onClose();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-2xl w-full max-w-lg p-6 shadow-xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">
            {editRole ? "Edit Role" : "Add New Role"}
          </h2>

          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Role Name"
            required
            className="w-full border rounded-xl px-4 py-3 outline-none"
          />

          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
            rows={3}
            required
            className="w-full border rounded-xl px-4 py-3 outline-none resize-none"
          />

          <input
            type="number"
            min={0}
            name="permissions"
            value={formData.permissions}
            onChange={handleChange}
            placeholder="Permissions Count"
            required
            className="w-full border rounded-xl px-4 py-3 outline-none"
          />

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-3 outline-none"
          >
            <option>Active</option>
            <option>Inactive</option>
          </select>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 border py-3 rounded-xl"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="flex-1 bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700"
            >
              {editRole ? "Save Changes" : "Add Role"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}