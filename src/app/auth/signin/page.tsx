"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

function SignIn() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  const handleFormState = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem("authUOL", JSON.stringify(true));
    router.push("/");
  };
  return (
    <div className="w-full h-full">
      <div className="w-full h-full flex justify-center items-center relative">
        <AnimatePresence>
          <motion.div
            initial={{ top: "-50%" }}
            animate={{ top: "inherit" }}
            exit={{ top: "150%" }}
            transition={{
              duration: 1,
            }}
            className=" w-30 h-[400px] absolute  border-[1px]  border-black rounded-lg py-[30px] px-[20px]"
          >
            <form className="flex flex-col" onSubmit={handleFormState}>
              <p className="text-black font-bold text-[28px]">
                Log into your{" "}
                <p className="text-[#a29bfe] font-bold">account</p>
              </p>

              <p className="mt-[20px] text-[14px] text-[lightgrey]">
                You don't have an account?
                <Link className="text-[#a29bfe] font-bold" href="#">
                  Create one
                </Link>
              </p>
              <label
                className="mt-[20px] text-[12px] font-bold text-[#959595]"
                htmlFor="name"
              >
                E-mail:
              </label>
              <Input
                type="text"
                name="email"
                value={email}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
                id="name"
                className="mt-[10px]"
              />
              <label
                className="mt-[20px] text-[12px] font-bold text-[#959595]"
                htmlFor="password"
              >
                Password:
              </label>
              <Input
                type="text"
                name="password"
                id="password"
                value={password}
                className="focus:ring-0 ring-0 border-[#a29bfe]"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.target.value)
                }
              />
              <Button
                className="w-full h-[35px] mt-[15px] bg-[#a29bfe] rounded-2xl text-[#fff] font-bold cursor-pointer"
                type="submit"
              >
                Sign In
              </Button>
            </form>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default SignIn;
