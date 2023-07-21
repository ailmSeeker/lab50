import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  let counter = 110;

  const names = links.map((name) => {
    counter= counter + 1;
    return <a key={counter} href={`#${name}`}>{name}</a>;
  });

  return (
    <nav>
      {names} 
    </nav>
  );
}

export default NavBar;
