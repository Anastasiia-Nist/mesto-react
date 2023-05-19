import React from "react";
function Header({src, alt}) {
  return (
    <header className="header">
      <img className="header__logo" src={src} alt={alt} />
    </header>
  );
}
export default Header;
