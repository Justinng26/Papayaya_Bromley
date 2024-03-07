"use client";

import { useState, useEffect } from "react";
import "../styles/menu.css";

export default function Menu() {
  const [data, setData] = useState([]);
  const [items, setItems] = useState([]);

  const getMenuData = () => {
    fetch("http://localhost:3000/api/menu")
      .then((res) => res.json())
      .then((menu) => setData(menu))
      .catch((err) => console.log(err.message));
  };

  // This useEffect hook will run once when the component mounts and is responsible for fetching the menu data from the server.
  useEffect(() => {
    getMenuData();
  }, []);

  // This useEffect hook will run when the data state changes and is responsible for setting the items state to the menu data.
  useEffect(() => {
    setItems(data);
  }, [data]);
  return <div>Menu</div>;
}
