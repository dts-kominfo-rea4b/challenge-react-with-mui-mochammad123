// Kalian bisa menambahkan CSS di src/components/Header.css
// atau langsung tambahkan dengan sx={{}}
import React from "react";

// Header berisi judul dan subtitle
// Judul: Call a Friend
// Subtitle: Your friendly contact app
const Header = () => {
  return (
    <>
      <header>
        <h1>Call a Friend</h1>
      </header>
      <p>Your friendly contact app</p>
    </>
  );
};

export default Header;
