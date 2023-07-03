"use client";
import { History } from "@/components";
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
  return (
    <main className="flex h-full w-full flex justify-between">
      {/* <DataTable data={data} /> */}
      <History.Root className="w-[300px] mx-5">
        <History.Title title="Atividades" />
        <History.Content action="Foto Atualizada" photo="" title="" date="" />
        <History.Content action="Nome Atualizado" photo="" title="" date="" />
        <History.Content
          action="Comentário"
          photo=""
          title=""
          comment="teste teste teste"
          date=""
        />
      </History.Root>
    </main>
  );
}
