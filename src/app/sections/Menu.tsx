"use client";

import { useState, useEffect } from "react";
import { filters } from "../data/data";
import "../styles/menu.css";
import SectionTitle from "../components/SectionTitle";
import MenuItem from "../components/MenuItem";
import Preloader from "../components/Preloader";

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

  const handleFilterChange = (id: number, category: string) => {};

  return (
    <section id="menu" className="menu section-bg">
      <div className="container" data-aos="fade-up">
        <SectionTitle title=" OurMenu" subtitle="Check Our Tasty Menu" />

        <div className="row" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="menu-filters">
              {filters.map((filter) => (
                <li
                  key={filter.id}
                  className={`${filter.active ? "filter-active" : undefined}`}
                  onClick={() => handleFilterChange(filter.id, filter.category)}
                >
                  {filter.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="row menu-container"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {!items ? (
            <Preloader />
          ) : items.length > 0 ? (
            items.map(
              (item: {
                id: number;
                name: string;
                // preview: string;
                price: number;
              }) => <MenuItem key={item.id} item={item} />
            )
          ) : (
            <Preloader />
          )}
        </div>
      </div>
    </section>
  );
}
