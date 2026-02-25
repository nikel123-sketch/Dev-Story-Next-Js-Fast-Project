"use client";
import Title from "@/components/Title/Title";
import Link from "next/link";
import React from "react";

const StoriesPage = () => {
  const products = [
    {
      id: 1,
      name: "Wireless Headphone",
      price: 59.99,
      image: "https://example.com/images/headphone.jpg",
      category: "Electronics",
      description: "High quality wireless headphone with noise cancellation.",
      stock: 25,
      rating: 4.5,
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 99.99,
      image: "https://example.com/images/smartwatch.jpg",
      category: "Electronics",
      description: "Track your fitness, calls, and notifications.",
      stock: 15,
      rating: 4.3,
    },
    {
      id: 3,
      name: "Gaming Mouse",
      price: 29.99,
      image: "https://example.com/images/mouse.jpg",
      category: "Accessories",
      description: "RGB gaming mouse with high precision sensor.",
      stock: 40,
      rating: 4.6,
    },
    {
      id: 4,
      name: "Bluetooth Speaker",
      price: 45.0,
      image: "https://example.com/images/speaker.jpg",
      category: "Audio",
      description: "Portable speaker with powerful bass.",
      stock: 30,
      rating: 4.4,
    },
    {
      id: 5,
      name: "Laptop Backpack",
      price: 39.99,
      image: "https://example.com/images/backpack.jpg",
      category: "Fashion",
      description: "Waterproof backpack for laptop and daily use.",
      stock: 20,
      rating: 4.7,
    },
  ];

  return (
    <div className="p-10">
      <Title>Our Products</Title>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-xl rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-6 text-black">
              {/* All text inside card is now black */}
              <h3 className="text-xl font-bold mb-2">{product.name}</h3>
              <p className="mb-2">{product.description}</p>
              <p className="font-semibold text-lg mb-2">${product.price}</p>
              <p className="mb-2 text-yellow-500">
                {"⭐".repeat(Math.floor(product.rating))} ({product.rating})
              </p>
              <div className="flex gap-3">
                <Link
                  href={`/StoriesPage/${product.id}`}
                  className="btn bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white w-full py-2 rounded-xl hover:scale-105 transition-transform duration-300"
                >
                  product story
                </Link>
                <button className="btn bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white w-full py-2 rounded-xl hover:scale-105 transition-transform duration-300">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoriesPage;
