import React from "react";
import Link from "next/link";
import { DropdownContainer } from "./Dropdown.style";

type Link = {
  name: string;
  url?: string;
};

export interface DropdownProps {
  children: string | React.ReactNode;
  links: Link[];
}

const Dropdown = ({ children, links }: DropdownProps) => {
  return (
    <DropdownContainer>
      <div className="children">{children}</div>
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
