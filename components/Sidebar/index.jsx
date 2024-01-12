"use client";
import Link from "next/link";
import { data, section } from "./data";
import "./style.scss";
import { usePathname } from "next/navigation";


function Sidebar() {
  // let router = window.location.pathname;
  let pathname = usePathname();
  return (
    <div className="sidebar">
      <ul className="department">
        <li className="bold">Department</li>
        {data.map((item, index) => {
          const isActive = pathname.includes(item.title.toLowerCase());
          return (
            <li key={index}>
              {" "}
              <Link
                className={isActive ? `active ${item.class}` : item.class}
                href={"/dashboard/" + item.title.toLowerCase()}
              >
                {" "}
                {item.icon}
                {item.title}
              </Link>
            </li>
          );
        })}{" "}
      </ul>
      <ul className="department">
        <li className="bold">Section</li>
        {section.map((item, index) => {
          const isActive = pathname.endsWith(item.path);
          const path = pathname.split("/").slice(0, -1).join("/");
          console.log(path);
          return (
            <li key={index}>
              {" "}
              <Link
                className={isActive ? `active ${item.class}` : item.class}
                href={path + "/" + item.path}
              >
                {" "}
                {item.icon} {item.title}
              </Link>
            </li>
          );
        })}{" "}
      </ul>
    </div>
  );
}

export default Sidebar;
