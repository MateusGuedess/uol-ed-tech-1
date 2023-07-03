import Image from "next/image";
import Link from "next/link";
import Button from "../Button";

function Header() {
  return (
    <header className="flex items-center h-[50px] bg-gradient-to-l  from-indigo-500 to-white">
      <nav className="flex items-center justify-between w-[92%] mx-auto">
        <div>
          <Image
            width={25}
            height={25}
            src={"/coffe-cup.png"}
            alt="Coffe Cup"
          />
        </div>
        <div className="">
          <ul>
            <li>
              <Link href="/home" className="hover:text-gray-500">
                Home
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <Button className="  hover:bg-[#c0bcfa] w-[125px] h-[35px] bg-[#a29bfe] rounded-2xl text-[#fff] font-bold cursor-pointer">
            Sign Out
          </Button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
