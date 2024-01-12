// import { CheckedList } from "@/app/assets/icons";
import {
  Box,
  FileHeart,
  Goal,
  Library,
  ListChecks,
  PenTool,
  ServerCog,
  Square,
  SquareCode,
  Users,
} from "lucide-react";

export const data = [
  {
    title: "Design",
    class: "ordinary",
    icon: <PenTool />,
  },
  {
    title: "Frontend",
    class: "ordinary",
    icon: <SquareCode />,
  },
  {
    title: "Backend",
    class: "ordinary",
    icon: <ServerCog />,
  },
];
export let section = [
  {
    path: "/team",
    title: "Team",

    class: "ordinary",
    icon: <Users />,
  },
  {
    path: "/system",
    title: "System",
    class: "ordinary",
    icon: <Box />,
  },
  {
    path: "/training",
    title: "Training",
    class: "ordinary",
    icon: <Goal />,
  },
  {
    path: "/healthCheck",
    title: "Health check",
    class: "ordinary",
    icon: <FileHeart />,
  },
  {
    path: "/matrix",
    title: "Matrix",
    class: "ordinary",
    icon: <ListChecks />,
  },
  {
    path: "/vision",
    title: "Vision",
    class: "ordinary",
    icon: <Library />,
  },
  {
    path: "/plan",
    title: "Plan",
    class: "ordinary",
    icon: <Library />,
  },
];
