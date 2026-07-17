"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export interface Employee {
  id: number;
  name: string;
  email: string;
  department: string;
  role: string;
  status: "Active" | "Inactive";
}

interface EmployeeContextType {
  employees: Employee[];
  addEmployee: (employee: Employee) => void;
  updateEmployee: (employee: Employee) => void;
  deleteEmployee: (id: number) => void;
}

const EmployeeContext = createContext<EmployeeContextType | undefined>(
  undefined
);

const initialEmployees: Employee[] = [
  {
    id: 1,
    name: "Ahmed Khan",
    email: "ahmed@gmail.com",
    department: "Development",
    role: "Frontend Developer",
    status: "Active",
  },
  {
    id: 2,
    name: "Ali Raza",
    email: "ali@gmail.com",
    department: "Design",
    role: "UI Designer",
    status: "Active",
  },
  {
    id: 3,
    name: "Sara Ahmed",
    email: "sara@gmail.com",
    department: "HR",
    role: "HR Manager",
    status: "Inactive",
  },
  {
    id: 4,
    name: "Usman Malik",
    email: "usman@gmail.com",
    department: "Marketing",
    role: "Marketing Executive",
    status: "Active",
  },
];

export function EmployeeProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [employees, setEmployees] =
    useState<Employee[]>(initialEmployees);

  const addEmployee = (employee: Employee) => {
    setEmployees((prev) => [...prev, employee]);
  };

  const updateEmployee = (employee: Employee) => {
    setEmployees((prev) =>
      prev.map((emp) =>
        emp.id === employee.id ? employee : emp
      )
    );
  };

  const deleteEmployee = (id: number) => {
    setEmployees((prev) =>
      prev.filter((emp) => emp.id !== id)
    );
  };

  return (
    <EmployeeContext.Provider
      value={{
        employees,
        addEmployee,
        updateEmployee,
        deleteEmployee,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
}

export function useEmployee() {
  const context = useContext(EmployeeContext);

  if (!context) {
    throw new Error(
      "useEmployee must be used inside EmployeeProvider"
    );
  }

  return context;
}