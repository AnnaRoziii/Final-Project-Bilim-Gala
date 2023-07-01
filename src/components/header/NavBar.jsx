import { Link, Button } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import React from "react";

function NavBar({ navStyle }) {
  const navItems = [
        { linkname: 'Home', href: '/' },
        { linkname: 'News', href: '/news' },
        { linkname: 'Tutors', href: '/tutors' },
        { linkname: 'Clubs', href: '/clubs' },
        { linkname: 'Interview', href: '/interviews' },
      ];
  return (
    <>
      {navItems.map((navItem) => (
        <Link
          variant="body1"
          href={navItem.href}
          underline="none"
          color="secondary"
          key={uuidv4()}
          style={navStyle}
        >
          {navItem.linkname}
        </Link>
      ))}
      <Button variant="button" color="custom" href="/register" >
       Register 
    </Button>
    </>
  );
}
export default NavBar;




