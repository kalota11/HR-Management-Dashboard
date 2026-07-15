"use client";

import { X } from "lucide-react";
import { useEffect, useState } from "react";

interface Department {
  id: number;
  name: string;
  manager: string;
  employees: number;
  status: string;
}

interface AddDepartmentModalProps {
  onClose: () => void;
  addDepartment: (data: { name: string; manager: string }) => void;
  editData: Department | null;
}

export default function AddDepartmentModal({
  onClose,
  addDepartment,
  editData,
}: AddDepartmentModalProps) {
  const [name, setName] = useState(editData?.name ?? "");
  const [manager, setManager] = useState(editData?.manager ?? "");
  const [errors, setErrors] = useState<{ name?: string; manager?: string }>({});

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  const validate = () => {
    const newErrors: { name?: string; manager?: string } = {};
    if (!name.trim()) newErrors.name = "Department name is required";
    if (!manager.trim()) newErrors.manager = "Manager name is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    addDepartment({ name: name.trim(), manager: manager.trim() });
  };

  return (
    <div
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        <h2 className="text-xl font-bold text-[#0000ff] mb-1">
          {editData ? "Edit Department" : "Add Department"}
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          {editData
            ? "Update the department details below."
            : "Fill in the details to create a new department."}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Department Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Marketing"
              className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0000ff] focus:border-transparent ${
                errors.name ? "border-red-400" : "border-blue-200"
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Manager
            </label>
            <input
              value={manager}
              onChange={(e) => setManager(e.target.value)}
              placeholder="e.g. Ayesha Malik"
              className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0000ff] focus:border-transparent ${
                errors.manager ? "border-red-400" : "border-blue-200"
              }`}
            />
            {errors.manager && (
              <p className="text-red-500 text-xs mt-1">{errors.manager}</p>
            )}
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 border border-blue-200 text-gray-600 hover:bg-gray-50 transition-colors py-3 rounded-xl text-sm font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 bg-[#0000ff] hover:bg-blue-700 transition-colors text-white py-3 rounded-xl text-sm font-medium"
            >
              {editData ? "Save Changes" : "Add Department"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}