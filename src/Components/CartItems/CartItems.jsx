import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";

const CartItems = () => {
  const { getTotalCartAmount,all_products = [], cartItems = {}, removeFromCart } = useContext(ShopContext);

  if (all_products.length === 0) {
    return <div className="cartitems">No products available</div>;
  }

  const cartProductElements = all_products
    .filter((product) => cartItems[product.id] > 0)
    .map((product) => (
      <div key={product.id}>
        <div className="cartitems-format cartitems-format-main">
          <img src={product.image} alt={product.name} className="carticon-product-icon" />
          <p>{product.name}</p>
          <p>R{product.new_price.toFixed(2)}</p>
          <button className="cartitems-quantity">{cartItems[product.id]}</button>
          <p>R{(product.new_price * cartItems[product.id]).toFixed(2)}</p>
          <img 
            src={remove_icon} 
            onClick={() => removeFromCart(product.id)} 
            alt="Remove" 
            className="cart-remove-icon"
          />
        </div>
        <hr />
      </div>
    ));

  const subtotal = all_products.reduce((sum, product) => {
    return sum + (cartItems[product.id] || 0) * product.new_price;
  }, 0).toFixed(2);

  const deliveryFee = 50.00; // You can set your delivery fee here
  const total = (parseFloat(subtotal) + deliveryFee).toFixed(2);

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {cartProductElements.length > 0 ? (
        <>
          {cartProductElements}
          <div className="cart-summary">
            <div className="cart-summary-item">
              <p>Subtotal:</p>
              <p>R{subtotal}</p>
            </div>
            <div className="cart-summary-item">
              <p>Delivery Fee:</p>
              <p>R{deliveryFee.toFixed(2)}</p>
            </div>
            <div className="cart-summary-item">
              <p>Total:</p>
              <p>R{total}</p>
            </div>
          </div>
          <button className="checkout-button">Proceed to Checkout</button>
        </>
      ) : (
        <div>No products in the cart</div>
      )}
    </div>
  );
};

export default CartItems;
