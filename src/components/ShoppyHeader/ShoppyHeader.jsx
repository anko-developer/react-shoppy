import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
import { BsFillPencilFill } from "react-icons/bs";
import { login, logout, onUserStateChange } from "../../api/firebase";
import User from "../User/User";

export default function ShoppyHeader() {
  const [user, setUser] = useState();

  useEffect(() => {
    // onUserStateChange(setUser);
    onUserStateChange((user) => {
      console.log(user);
      setUser(user);
    });
  }, []);
  return (
    <header className="flex justify-between border-b border-gray-300 p-2">
      <Link to="/" className="flex items-center text-4xl text-brand">
        <FaShoppingBag />
        <h1>Shoppy</h1>
      </Link>
      <nav className="flex items-center gap-4 font-semibold">
        <Link to="/products">Products</Link>
        <Link to="/carts">Carts</Link>
        <Link to="/products/new" className="text-2xl">
          <BsFillPencilFill />
        </Link>
        {user && <User user={user} />}
        {!user && <button onClick={login}>Login</button>}
        {user && <button onClick={logout}>Logout</button>}
      </nav>
    </header>
  );
}
