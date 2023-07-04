"use client";

import baseUrl from "@/api";
import { Button, Input } from "@/components";
import { HistoryContext } from "@/context/historyContext";
import { UsersContext } from "@/context/usersContexts";
import { Collaborator } from "@/types/Collaborator";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useContext, useState } from "react";
import { useQuery } from "react-query";

async function getUserComments(id: string) {
  const res = await fetch(
    `https://qr-challenge.herokuapp.com/api/v1/users/${id}/comments`
  );
  const comments = await res.json();
  return comments;
}

async function postComment(id: string, value: string) {
  const res = await baseUrl(
    `https://qr-challenge.herokuapp.com/api/v1/comments`,
    {
      method: "POST",
      data: {
        comment: {
          user_id: Number(id),
          value: value,
        },
      },
    }
  );
  const comment = await res.data;
  return comment;
}

async function addOrUpdateUser(
  id: string,
  { name, email, job_title, admission_date, photo_url }: Partial<Collaborator>
) {
  const res = await baseUrl(
    `https://qr-challenge.herokuapp.com/api/v1/users/${id}`,
    {
      method: "PUT",
      data: {
        name: name,
        email: email,
        job_title: job_title,
        admission_date: admission_date,
        photo_url: photo_url,
      },
    }
  );
  const comment = await res.data;
  return comment;
}

function User() {
  const { id } = useParams();
  const { users } = useContext(UsersContext);
  const { setHistory } = useContext(HistoryContext);
  const [comment, setComment] = useState<string>("");
  const { data, refetch } = useQuery({
    queryKey: ["comments"],
    queryFn: () => getUserComments(id),
  });

  const { data: commentData, refetch: RefetchComment } = useQuery({
    queryKey: ["postComment"],
    queryFn: () => postComment(id, comment),
    enabled: false,
    onSuccess: () =>
      setHistory((prevState) => [
        ...prevState,
        {
          id: id,
          action: "Comment",
          comment: comment,
        },
      ]),
  });
  const [user] = users.filter((item) => item?.id == Number(id));
  const [form, setForm] = useState({
    name: user?.name ?? "",
    email: user?.email ?? "",
    admission_date: user?.admission_date ?? "",
    job_title: user?.job_title ?? "",
    cpf: user?.cpf ?? "",
  });

  const { data: dataUser, refetch: putUser } = useQuery({
    queryKey: ["updateUser"],
    queryFn: () => addOrUpdateUser(id, form),
    enabled: false,
    onSuccess: () =>
      setHistory((prevState) => [
        ...prevState,
        {
          id: id,
          action: id != "create" ? "Update user" : "New user added",
        },
      ]),
  });

  const { name, email, admission_date, job_title, cpf } = form;

  function handleComment() {
    setHistory((prevState) => [
      ...prevState,
      {
        action: "Comment",
        comment: comment,
      },
    ]);

    RefetchComment();
  }

  function handleSubmit(e: any) {
    e.preventDefault();

    putUser();
  }

  return (
    <div className="w-full h-full mx-[20px] mt-[45px] flex flex-col">
      <div className="flex">
        <div className="flex-none w-[100px] h-[100px] relative">
          <Image
            className="rounded-3xl"
            src={user?.photo_url ?? "/profile.jpeg"}
            fill={true}
            alt="#"
            sizes="100%"
            priority={false}
          />
        </div>
        <div className="flex w-[300px] flex-col flex-1 mx-[30px]">
          <form onSubmit={handleSubmit} className="flex w-full flex-col">
            <label className="mt-[15px]" htmlFor="name">
              Name:
            </label>
            <Input
              onChange={(e) =>
                setForm((prevState) => ({ ...prevState, name: e.target.value }))
              }
              value={name}
              type="text"
              id="name"
            />

            <label className="mt-[15px]" htmlFor="email">
              E-mail:
            </label>
            <Input
              onChange={(e) =>
                setForm((prevState) => ({
                  ...prevState,
                  email: e.target.value,
                }))
              }
              value={email}
              type="text"
              id="email"
            />

            <label className="mt-[15px]" htmlFor="cpf">
              CPF:
            </label>
            <Input
              onChange={(e) =>
                setForm((prevState) => ({ ...prevState, cpf: e.target.value }))
              }
              value={cpf}
              type="text"
              id="cpf"
            />

            <label className="mt-[15px]" htmlFor="admission_date">
              Admission Date:
            </label>
            <Input
              onChange={(e) =>
                setForm((prevState) => ({
                  ...prevState,
                  admission_date: e.target.value,
                }))
              }
              value={admission_date}
              type="text"
              id="admission_date"
            />

            <label className="mt-[15px]" htmlFor="job_title">
              Job Title:
            </label>
            <Input
              onChange={(e) =>
                setForm((prevState) => ({
                  ...prevState,
                  job_title: e.target.value,
                }))
              }
              value={job_title}
              type="text"
              id="job_title"
            />

            <Button
              type="submit"
              className="self-start mt-[15px] flex items-center justify-center w-[150px] h-[35px]  bg-[#a29bfe] rounded-2xl text-[#fff] font-bold cursor-pointer"
            >
              {id !== "create" ? "Update" : "Create"}
            </Button>
          </form>
          {id !== "create" && (
            <>
              <div className="flex mt-[20px] flex-col">
                <textarea
                  className="h-[10em] w-[100%] border-[1px] border-inherit px-[10px] py-[10px]"
                  placeholder="Make an comment"
                  onChange={(e) => setComment(e.target.value)}
                ></textarea>
                <Button
                  onClick={() => handleComment()}
                  className="self-start mt-[15px] flex items-center justify-center w-[150px] h-[35px]  bg-[#a29bfe] rounded-2xl text-[#fff] font-bold cursor-pointer"
                >
                  Send
                </Button>
              </div>
              <div className="mt-[20px]">
                {data?.comments?.map((comment: any) => (
                  <div
                    className=" mt-[20px] flex items-start"
                    key={comment?.id}
                  >
                    <div className="relative w-[60px] h-[60px] rounded-2xl">
                      <Image
                        src={comment?.user?.photo_url}
                        fill={true}
                        sizes="100%"
                        alt={comment?.user?.name}
                      />
                    </div>
                    <div className="flex flex-col ml-[20px]">
                      <p className="text-[16px]">{comment?.user?.name}</p>
                      <p className="text-[12px]">{comment?.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default User;
