import React from "react";

const NavbarNames = [
  { SiteName: "Home", url: "/" },
  { SiteName: "Random", url: "/Random" },
  { SiteName: "Instagram", url: "/Instagram" },
];

const Navbar = () => {
  return (
    <>
      <div>
        <ul className="flex w-full items-start justify-start gap-10 bg-white p-4 text-black">
          {NavbarNames.map((navbar, key) => (
            <a href={navbar.url}>
              <li key={key}>{navbar.SiteName}</li>
            </a>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
