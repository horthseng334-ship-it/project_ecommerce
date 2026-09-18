import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../contect/CartContext";

function CartPage() {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    cartTotal,
  } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">
          Your Cart is Empty
        </h1>

        <Link
          to="/shop"
          className="bg-pink-500 text-white px-6 py-3 rounded-lg"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">

      <h1 className="text-3xl font-bold mb-8">
        Shopping Cart
      </h1>

      <div className="grid lg:grid-cols-3 gap-8">

        {/* Products */}
        <div className="lg:col-span-2 space-y-4">

          {cart.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 bg-white p-4 rounded-xl shadow"
            >

              <img
                src={item.image[0]}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-lg"
              />

              <div className="flex-1">

                <h2 className="font-bold">
                  {item.name}
                </h2>

                <p className="text-pink-500">
                  ${item.price}
                </p>

                <div className="flex items-center gap-3 mt-3">

                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="border px-3 py-1 rounded"
                  >
                    -
                  </button>

                  <span>
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="border px-3 py-1 rounded"
                  >
                    +
                  </button>

                </div>

              </div>

              <div className="text-right">

                <p className="font-bold">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 mt-3"
                >
                  Remove
                </button>

              </div>

            </div>
          ))}

        </div>

        {/* Summary */}
        <div className="bg-pink-50 p-6 rounded-xl h-fit">

          <h2 className="text-2xl font-bold mb-6">
            Order Summary
          </h2>

          <div className="flex justify-between mb-4">
            <span>Subtotal</span>
            <span>${cartTotal.toFixed(2)}</span>
          </div>

          <div className="flex justify-between mb-4">
            <span>Shipping</span>
            <span>Free</span>
          </div>

          <hr className="mb-4" />

          <div className="flex justify-between text-xl font-bold">
            <span>Total</span>
            <span>${cartTotal.toFixed(2)}</span>
          </div>

          <button className="w-full bg-pink-500 text-white py-3 rounded-lg mt-6">
            Checkout
          </button>

        </div>

      </div>
    </div>
  );
}

export default CartPage;