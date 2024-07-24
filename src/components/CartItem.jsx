import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeItemFromCart,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} from "../redux/slices/CartSlice";

const CartItem = ({handleClick}) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const calculateTotalAmount = () => {
    let totalAmount = 0;
    cartItems.forEach((item) => {
      totalAmount += item.price * item.quantity;
    });
    return totalAmount;
  };

  const calculateTotalCost = (item) => {
    let totalCost = 0;
    totalCost = item.price * item.quantity;
    return totalCost;
  };

  const handleRemove = (plant) => {
    dispatch(removeItemFromCart(plant));
  };

  const handleIncrement = (item) => {
    dispatch(increaseItemQuantity(item));
  };

  const handleDecrement = (item) => {
    dispatch(decreaseItemQuantity(item));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleCheckoutShopping = (e) => {
    console.log("Functionality to be added for future reference");
  };

  return (
    <div className="cart-container">
      <h2 style={{ color: "black", fontSize: "48px" }}>
        Total Cart Amount: $ {calculateTotalAmount()}
      </h2>

      <ul>
        {cartItems.map((item) => (
          <li className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} />
            <div className="cart-item-details">
              <p className="cart-item-name">{item.name}</p>
              <p className="cart-item-cost">{item.cost}</p>
              <div className="cart-item-quantity">
                <button
                  className="cart-item-button cart-item-button-dec"
                  onClick={() => handleDecrement(item.name)}
                >
                  -
                </button>
                <span className="cart-item-quantity-value">
                  {item.quantity}
                </span>
                <button
                  className="cart-item-button cart-item-button-inc"
                  onClick={() => handleIncrement(item.name)}
                >
                  +
                </button>
              </div>
              <div className="cart-item-total">
                Total: ${calculateTotalCost(item)}
              </div>
              <button
                className="cart-item-delete"
                onClick={() => handleRemove(item.name)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div
        style={{ marginTop: "20px", color: "black" }}
        className="total_cart_amount"
      ></div>
      <div className="continue_shopping_btn">
        <button
          className="get-started-button"
          onClick={(e) => handleClick()}
        >
          Continue Shopping
        </button>
        <br />
        <button
          className="get-started-button1"
          onClick={(e) => handleCheckoutShopping(e)}
        >
          Checkout
        </button>
      </div>
      <div>
        <button
          className="get-started-button"
          style={{ color: "black" }}
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default CartItem;
