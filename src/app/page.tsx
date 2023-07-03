"use client";
import { DataTable } from "@/components/DataTable";
import { Collaborator } from "@/types/Collaborator";
import { useQuery } from "react-query";

async function getUsers() {
  const res = await fetch("https://qr-challenge.herokuapp.com/api/v1/users");
  const colaborators = (await res.json()) as Collaborator[];
  return colaborators;
}

export default function Home() {
  const { data, isLoading, isFetching, error } = useQuery({
    queryKey: ["hydrate-users"],
    queryFn: () => getUsers(),
  });
  console.log("DATA: ", data);

  if (isLoading) return "Loading...";

  const users: Collaborator[] = data?.users;
  return (
    <main className="flex h-full w-full flex justify-between">
      <DataTable data={users} />
    </main>
  );
}
