"use client";
import Link from "next/link";
import stl from "./style.module.scss";
import { usePathname } from "next/navigation";
export const Navbar = () => {
  const data = [
    { title: "Dashboard", path: "http://localhost:3000/dashboard" },
    { title: "Files", path: "http://localhost:3000/files" },
    { title: "Settings", path: "http://localhost:3000/settings" },
    { title: "Account", path: "http://localhost:3000/account" },
  ];
  let pathname = usePathname();

  return (
    <nav>
      <ul className={stl.list}>
        {data.map((item, index) => {
          const isActive = pathname.includes(item.title.toLowerCase());

          return (
            <li className={isActive ? stl.active : ""} key={index}>
              {" "}
              <Link className={item.class} href={item.path}>
                {" "}
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
