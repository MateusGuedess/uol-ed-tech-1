import { Collaborator } from "@/types/Collaborator";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import Image from "next/image";

export const columns: ColumnDef<Collaborator>[] = [
  {
    accessorKey: "photo_url",
    header: () => <div className="text-center flex items-center">Photo</div>,
    cell: ({ row }) => {
      return (
        <Image
          className="rounded-[50px] w-[40px] h-[40px]"
          src={
            row.getValue("photo_url") === "./assets/avatar.png"
              ? "/profile.jpeg"
              : row.getValue("photo_url")
          }
          alt={row.getValue("name")}
          width={40}
          height={40}
        />
      );
    },
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <div className="text-center flex items-center">
          Name
          <ArrowUpDown
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="ml-2 h-4 w-4 hover:cursor-pointer"
          />
        </div>
      );
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "job_title",
    header: ({ column }) => (
      <div className="text-center flex items-center">
        Job Title
        <ArrowUpDown
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="ml-2 h-4 w-4 hover:cursor-pointer"
        />
      </div>
    ),
    cell: ({ row }) => {
      return (
        <div className="text-left font-medium">{row.getValue("job_title")}</div>
      );
    },
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <div className="text-center flex items-center ">
        email
        <ArrowUpDown
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="ml-2 h-4 w-4 hover:cursor-pointer"
        />
      </div>
    ),
    cell: ({ row }) => {
      return (
        <div className="text-left font-medium">{row.getValue("email")}</div>
      );
    },
  },
];
