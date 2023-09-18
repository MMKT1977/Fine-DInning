import React from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";
// import logo from "./logo.JPG";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

const FoodList = () => {
  const [menuItems, setMenuItems] = React.useState(items);
  const [activeCategory, setActiveCategory] = React.useState("");
  const [categories] = React.useState(allCategories);

  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <section id="food-list" className="food-list section">
      <div className="title">
        {/* <img src={logo} alt="logo" className="logo" /> */}
        <h2>Food List</h2>
        <div className="underline"></div>
      </div>
      <Categories
        categories={categories}
        activeCategory={activeCategory}
        filterItems={filterItems}
      />
      <Menu items={menuItems} />
    </section>
  );
};

export default FoodList;