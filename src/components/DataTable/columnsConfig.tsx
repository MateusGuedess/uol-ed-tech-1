import { Collaborator } from "@/types/Collaborator";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

export const columns: ColumnDef<Collaborator>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <div
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="text-center flex items-center"
        >
          Nome
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </div>
      );
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "position",
    header: ({ column }) => (
      <div
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="text-center flex items-center"
      >
        Position
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </div>
    ),
    cell: ({ row }) => {
      return (
        <div className="text-left font-medium">{row.getValue("position")}</div>
      );
    },
  },
  {
    accessorKey: "cpf",
    header: ({ column }) => (
      <div
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="text-center flex items-center"
      >
        CPF
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </div>
    ),
    cell: ({ row }) => {
      return <div className="text-left font-medium">{row.getValue("cpf")}</div>;
    },
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <div
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="text-center flex items-center"
      >
        email
      </div>
    ),
    cell: ({ row }) => {
      return (
        <div className="text-left font-medium">{row.getValue("email")}</div>
      );
    },
  },
];
