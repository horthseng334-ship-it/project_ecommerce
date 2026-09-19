import React from "react";
import { Link } from "react-router-dom";
import { FaMinus, FaPlus, FaTrash, FaArrowLeft } from "react-icons/fa";
import { useCart } from "../context/CartContext.jsx";

const CartPage = () => {
  const { cart, setCart } = useCart();

  // Count quantity of each product
  const getQuantity = (id) => {
    return cart.filter((item) => item.id === id).length;
  };

  // Remove one quantity
  const decreaseQuantity = (id) => {
    const index = cart.findIndex((item) => item.id === id);

    if (index !== -1) {
      const newCart = [...cart];
      newCart.splice(index, 1);
      setCart(newCart);
    }
  };

  // Add one quantity
  const increaseQuantity = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // Remove all of a product
  const removeProduct = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Unique products
  const uniqueProducts = cart.filter(
    (product, index, self) =>
      index === self.findIndex((item) => item.id === product.id)
  );

  // Total price
  const subtotal = cart.reduce((total, item) => total + item.price, 0);

  const shipping = subtotal > 50 || subtotal === 0 ? 0 : 5;

  const total = subtotal + shipping;

  // Empty cart
  if (cart.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4">
        <div className="text-6xl mb-5">🛒</div>

        <h1 className="text-3xl font-bold text-gray-800 mb-3">
          Your Cart is Empty
        </h1>

        <p className="text-gray-500 mb-6">
          Looks like you haven't added any skincare products yet.
        </p>

        <Link
          to="/shop"
          className="bg-pink-400 hover:bg-pink-500 text-white px-6 py-3 rounded-lg transition"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-pink-50 min-h-screen py-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Shopping Cart
          </h1>

          <p className="text-gray-500 mt-2">
            {cart.length} {cart.length === 1 ? "item" : "items"} in your cart
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Products */}
          <div className="lg:col-span-2 space-y-4">

            {uniqueProducts.map((product) => {
              const quantity = getQuantity(product.id);

              return (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl p-4 md:p-6 shadow-sm flex flex-col sm:flex-row gap-5"
                >

                  {/* Image */}
                  <Link
                    to={`/product/${product.id}`}
                    className="w-full sm:w-32 h-32 shrink-0 overflow-hidden rounded-xl bg-gray-100"
                  >
                    <img
                      src={product.image[0]}
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-105 transition duration-300"
                    />
                  </Link>

                  {/* Product information */}
                  <div className="flex-1 flex flex-col justify-between">

                    <div>
                      <div className="flex justify-between gap-4">
                        <div>
                          <p className="text-sm text-pink-400 font-medium">
                            {product.brand}
                          </p>

                          <h2 className="text-lg font-semibold text-gray-800 mt-1">
                            {product.name}
                          </h2>
                        </div>

                        {/* Remove */}
                        <button
                          onClick={() => removeProduct(product.id)}
                          className="text-gray-400 hover:text-red-500 transition"
                          title="Remove product"
                        >
                          <FaTrash />
                        </button>
                      </div>

                      <p className="text-gray-500 text-sm mt-2">
                        ${product.price.toFixed(2)} each
                      </p>
                    </div>

                    {/* Bottom */}
                    <div className="flex items-center justify-between mt-5">

                      {/* Quantity */}
                      <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">

                        <button
                          onClick={() => decreaseQuantity(product.id)}
                          className="px-3 py-2 hover:bg-pink-50 text-gray-600"
                        >
                          <FaMinus size={12} />
                        </button>

                        <span className="px-4 font-medium">
                          {quantity}
                        </span>

                        <button
                          onClick={() => increaseQuantity(product)}
                          className="px-3 py-2 hover:bg-pink-50 text-gray-600"
                        >
                          <FaPlus size={12} />
                        </button>

                      </div>

                      {/* Product total */}
                      <p className="text-lg font-bold text-pink-500">
                        ${(product.price * quantity).toFixed(2)}
                      </p>

                    </div>
                  </div>
                </div>
              );
            })}

            {/* Continue shopping */}
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 text-pink-500 hover:text-pink-600 font-medium mt-3"
            >
              <FaArrowLeft size={13} />
              Continue Shopping
            </Link>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">

            <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-24">

              <h2 className="text-xl font-bold text-gray-800 mb-6">
                Order Summary
              </h2>

              <div className="space-y-4">

                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>
                    {shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}
                  </span>
                </div>

                <div className="border-t pt-4 flex justify-between">
                  <span className="text-lg font-bold text-gray-800">
                    Total
                  </span>

                  <span className="text-xl font-bold text-pink-500">
                    ${total.toFixed(2)}
                  </span>
                </div>

              </div>

              {/* Checkout */}
              <button
                className="w-full mt-6 bg-pink-400 hover:bg-pink-500 text-white py-3 rounded-xl font-semibold transition"
                onClick={() => alert("Checkout coming soon!")}
              >
                Proceed to Checkout
              </button>

              <p className="text-center text-xs text-gray-400 mt-4">
                Free shipping on orders over $50
              </p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;