"use client";
import "./style.scss";
import {
  ChevronLeft,
  ChevronsLeft,
  ChevronRight,
  ChevronsRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

export default function Pagni() {
  const [page, setPage] = useState(1);
  console.log(page);
  return (
    <div className="wrp">
      <div className="rows">
        <p className="text-nowrap w-fit text-slate-500">Rows per page</p>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder={"1"} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="1">1</SelectItem>
              <SelectItem value="2">2</SelectItem>
              <SelectItem value="3">3</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <p>Page {page} of 1</p>
      <div className="buttons">
        <Button
          onClick={() => setPage(1)}
          disabled={page == 1 ? true : false}
          variant={"outline"}
        >
          <ChevronsLeft color="#5e5e61" />
        </Button>
        <Button
          onClick={() => setPage(prev => prev > 1 ? prev - 1 : prev )}
          disabled={page == 1 ? true : false}
          variant={"outline"}
        >
          <ChevronLeft color="#5e5e61" />
        </Button>
        <Button
          onClick={() => setPage(prev => prev < 10 ? prev + 1 : prev )}
          disabled={page == 10 ? true : false}
          variant={"outline"}
        >
          <ChevronRight color="#5e5e61" />
        </Button>
        <Button
          onClick={() => setPage(10)}
          disabled={page == 10 ? true : false}
          variant={"outline"}
        >
          <ChevronsRight color="#5e5e61" />
        </Button>
      </div>
    </div>
  );
}
