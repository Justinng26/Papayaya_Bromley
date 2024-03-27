"use client";

import { useState, useEffect } from "react";
import { filters } from "../data/data";
import "../styles/menu.css";
import SectionTitle from "../components/SectionTitle";
import MenuItem from "../components/MenuItem";
import Preloader from "../components/Preloader";
const itemsPerPage = 8;
export default function Menu() {
  const [data, setData] = useState([]);
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

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

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleFilterActive = (id: number) => {
    filters.map((filter) => {
      filter.active = false;
      if (filter.id === id) filter.active = true;
      return filter; // Add return statement here
    });
  };
  const handleFilterChange = (id: number, category: string) => {
    handleFilterActive(id);
    if (category === "all") {
      setItems(data);
    } else {
      setItems(
        data.filter((item: { category: string }) => item.category === category)
      );
    }
  };

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
          ) : currentItems.length > 0 ? (
            currentItems.map(
              (item: {
                id: number;
                name: string;
                preview: string;
                price: number;
              }) => <MenuItem key={item.id} item={item} />
            )
          ) : (
            <Preloader />
          )}
        </div>

        {/* Left arrow */}
        <div className="pagination">
          {currentPage > 1 && (
            <button
              className="bi bi-arrow-left"
              onClick={() => handlePageChange(currentPage - 1)}
            ></button>
          )}

          {/* Right arrow */}
          {currentPage < totalPages && (
            <button
              className="bi bi-arrow-right"
              onClick={() => handlePageChange(currentPage + 1)}
            ></button>
          )}
        </div>
      </div>
    </section>
  );
}
