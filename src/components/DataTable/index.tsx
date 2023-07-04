"use client";
import { Input } from "@/components";
import {
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import baseUrl from "@/api";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { HistoryContext } from "@/context/historyContext";
import { UsersContext } from "@/context/usersContexts";
import { Collaborator } from "@/types/Collaborator";
import { ArrowLeft, ArrowRight, Edit, Trash2 } from "lucide-react";
import Link from "next/link";
import { useContext, useState } from "react";
import { useMutation } from "react-query";
import { columns } from "./columnsConfig";

interface IDataTable {
  data: Collaborator[];
}

async function deleteUser(id: string) {
  const res = await baseUrl(
    `https://qr-challenge.herokuapp.com/api/v1/users/${id}`,
    {
      method: "DELETE",
    }
  );
  const comment = await res.data;
  return comment;
}

export function DataTable({ data }: IDataTable) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});
  const { setHistory } = useContext(HistoryContext);
  const { refetch } = useContext(UsersContext);

  const { mutate: deletecollaborator } = useMutation(
    (id: string) => deleteUser(id),
    {
      onSuccess: ({ user }) => {
        refetch();
        setHistory((prevState) => [
          ...prevState,
          {
            id: user?.id,
            action: "Delete User",
          },
        ]);
      },
    }
  );

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      globalFilter,
    },
  });

  return (
    <div className="w-full mx-[15px]">
      <div className="flex items-center justify-between py-4">
        <Input
          placeholder="Filter emails..."
          value={globalFilter ?? ""}
          onChange={(e) => setGlobalFilter(String(e.target.value))}
          className="focus:ring-0 ring-0 border-[#a29bfe] rounded-lg px-[10px]"
        />
        <Link
          href="/user/new"
          className=" flex items-center justify-center w-[150px] h-[35px]  bg-[#a29bfe] rounded-2xl text-[#fff] font-bold cursor-pointer"
        >
          Criar
        </Link>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                  <TableCell>
                    <div className="flex text-left font-medium">
                      <Trash2
                        size={16}
                        className="hover:cursor-pointer mr-[15px]"
                        onClick={() =>
                          deletecollaborator(row?.original?.id.toString())
                        }
                      />
                      <Link href={`user/${row?.original?.id}`}>
                        <Edit size={16} />
                      </Link>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className=" flex items-center space-x-2">
          {table.getCanPreviousPage() && (
            <ArrowLeft
              className="hover:cursor-pointer"
              onClick={() => table.previousPage()}
            />
          )}
          {table.getCanNextPage() && (
            <ArrowRight
              className="hover:cursor-pointer"
              onClick={() => table.nextPage()}
            />
          )}
        </div>
      </div>
    </div>
  );
}
