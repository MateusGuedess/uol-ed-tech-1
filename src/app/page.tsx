"use client";
import { History } from "@/components";
import { DataTable } from "@/components/DataTable";
import { data } from "@/components/DataTable/collaboratorMock";

export default function Home() {
  return (
    <main className="flex h-full w-full flex justify-between">
      <DataTable data={data} />
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
