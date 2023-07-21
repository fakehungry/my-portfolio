import React from "react";
import Link from "next/link";
import { DropdownContainer } from "./Dropdown.style";

type Link = {
  name: string;
  url?: string;
};

export interface DropdownProps {
  title: string | React.ReactNode;
  links: Link[];
}

const Dropdown = ({ title, links }: DropdownProps) => {
  return (
    <DropdownContainer>
      <div className="title">{title}</div>
      <div className="content">
        {links.map((link, index) => {
          return (
            <Link href={link.url || "#"} key={index}>
              {link.name}
            </Link>
          );
        })}
      </div>
    </DropdownContainer>
  );
};

export default React.memo(Dropdown);
