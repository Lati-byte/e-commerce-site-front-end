// ShopCategory.jsx
import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Item/Item";

const ShopCategory = (props) => {
  const { all_products } = useContext(ShopContext);

  // Debug: Check the products and category
  console.log("All Products:", all_products);
  console.log("Selected Category:", props.category);

  

  return (
    <div className="shop-category">
      <img className="shopcategory-banner" src={props.banner} alt="banner" />
      <div className="shopcategory-indexsort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          <p>Sort by</p>
          <img src={dropdown_icon} alt="sort" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_products.map((item, i) => {
          if (props.category === item.category) {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            
           } else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
         Explore more
      </div>
    </div>
  );
};


export default ShopCategory;
