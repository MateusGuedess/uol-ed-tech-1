"use client";
import { DataTable } from "@/components/DataTable";
import { UsersContext } from "@/context/usersContexts";
import { useContext } from "react";

export default function Home() {
  const { users } = useContext(UsersContext);

  return (
    <main className="flex h-full w-full flex justify-between">
      <DataTable data={users} />
    </main>
  );
}
