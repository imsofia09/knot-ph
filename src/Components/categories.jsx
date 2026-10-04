import React from "react";
import { Link } from "react-router-dom";

const categories = [
  {
    name: "Crochet Flowers",
    icon: "🌸",
    bg: "bg-[#FCE7F3]",
  },
  {
    name: "Bags & Pouches",
    icon: "👜",
    bg: "bg-[#F0E5FF]",
  },
  {
    name: "Plushies",
    icon: "🧸",
    bg: "bg-[#FFF38A]",
  },
  {
    name: "Accessories",
    icon: "🎀",
    bg: "bg-[#DDFBE8]",
  },
  {
    name: "Keychains",
    icon: "🔑",
    bg: "bg-[#FFE4EC]",
  },
  {
    name: "Hair Accessories",
    icon: "🎀",
    bg: "bg-[#E7F4FF]",
  },
  {
    name: "Home Decor",
    icon: "🏠",
    bg: "bg-[#FFF0D9]",
  },
  {
    name: "Custom Orders",
    icon: "✨",
    bg: "bg-[#EDE7FF]",
  },
];

function Categories() {
  return (
    <section className="min-h-screen bg-white px-6 py-12 md:px-10 lg:px-16">

      {/* Header */}
      <div className="mb-10 flex items-end justify-between">
        <div>
          <p className="mb-2 text-sm font-bold uppercase tracking-wide text-[#F43F9E]">
            SHOP BY CATEGORY
          </p>

          <h1 className="text-3xl font-bold text-[#142B4A] md:text-4xl">
            Find your favorite
          </h1>
        </div>

        <Link
          to="/"
          className="text-sm font-medium text-[#F43F9E] transition hover:text-[#DB2777]"
        >
          ← Back to home
        </Link>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <Link
            key={category.name}
            to={`/category/${category.name
              .toLowerCase()
              .replace(/ & /g, "-")
              .replace(/\s+/g, "-")}`}
            className="group"
          >
            {/* Image/Icon Box */}
            <div
              className={`flex h-56 items-center justify-center rounded-[20px] ${category.bg} transition duration-300 group-hover:-translate-y-1 group-hover:shadow-lg`}
            >
              <span className="text-7xl transition duration-300 group-hover:scale-110">
                {category.icon}
              </span>
            </div>

            {/* Category Name */}
            <h2 className="mt-4 text-lg font-bold text-[#142B4A] transition group-hover:text-[#F43F9E]">
              {category.name}
            </h2>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Categories;