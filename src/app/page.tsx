"use client";
import { History } from "@/components";
import { DataTable } from "@/components/DataTable";

export default function Home() {
  return (
    <main className="flex h-full w-full flex justify-between">
      <DataTable />
      <History.Root className="w-[300px] mx-5">
        <History.Title title="Atividades" />
        <History.Content action="Foto Atualizada" photo="" title="" />
        <History.Content action="Nome Atualizado" photo="" title="" />
        <History.Content action="Comentário" photo="" title="" comment="" />
      </History.Root>
    </main>
  );
}
