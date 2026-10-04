import { Search, ShoppingBag, Heart, ArrowRight, Truck, Gift } from "lucide-react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import {Link} from 'react-router-dom';


function App() {
   const [showAllCategories, setShowAllCategories] = useState(false);
  
  return (

    <div className="min-h-screen bg--ivory text-gray-800">

      {/* NAVBAR */}
      <nav className="bg-ivory border-b border-pink-100 relative">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <div className="text-2xl font-bold text-rose">
            Knots PH
          </div>

          <div className="hidden md:flex gap-8 text-sm font-medium items-center">
            <a href="#" className="text-mauve font-bold">Home</a>
            <a href="#" className="hover:text-mauve transition">Shop</a>
            <a href="#" className="hover:text-mauve transition">Collections</a>
            <a href="#" className="hover:text-mauve transition">About</a>
            <a href="#" className="hover:text-mauve transition">Contact</a>
          </div>

          
          

          <div className="flex items-center gap-4">
            {/* Search Bar */}
          <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 w-64">
            <Search className="w-5 h-5 text-gray-500 mr-2" />

            <input
              type="text"
              placeholder="Search products..."
              className="w-full outline-none bg-transparent text-sm"
            />
          </div>
            <Heart className="w-5 h-5 cursor-pointer hover:text-mauve" />
            <ShoppingBag className="w-5 h-5 cursor-pointer hover:text-mauve" />
          </div>

        </div>
      </nav>


      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="bg-pink-100 rounded-3xl overflow-hidden">

          <div className="grid md:grid-cols-2 items-center">

            <div className="p-10 md:p-16">
              <p className="text-blush font-semibold mb-3">
                HANDMADE WITH LOVE ♡
              </p>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-800">
                Cute things,
                <br />
                <span className="text-pink-300">
                  made by hand.
                </span>
              </h1>

              <p className="mt-6 text-blue-950 max-w-md">
                Discover handmade crochet pieces created with love,
                care, and a little bit of yarn magic.
              </p>

              <button className="mt-8 bg-pink-400 hover:bg-pink-200 text- px-7 py-3 rounded-full font-semibold flex items-center gap-2 transition">
                Shop Collection
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="h-80 md:h-full min-h-[400px] bg-pink-200 flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl mb-4">🧶</div>
                <p className="text-pink-600 font-medium">
                  handmade • cozy • cute
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* FEATURES */}
      <section className="max-w-7xl mx-auto px-6 pb-16">

        <div className="grid md:grid-cols-3 gap-5">

          <div className="bg-white rounded-2xl p-6 flex gap-4 items-center">
            <div className="bg-pink-100 p-3 rounded-full">
              <Heart className="text-pink-500" />
            </div>
            <div>
              <h3 className="font-bold">Made With Love</h3>
              <p className="text-sm text-blue-950">
                Handmade just for you
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 flex gap-4 items-center">
            <div className="bg-pink-100 p-3 rounded-full">
              <Truck className="text-pink-500" />
            </div>
            <div>
              <h3 className="font-bold">Easy Delivery</h3>
              <p className="text-sm text-blue-950">
                Delivered to your doorstep
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 flex gap-4 items-center">
            <div className="bg-pink-100 p-3 rounded-full">
              <Gift className="text-pink-500" />
            </div>
            <div>
              <h3 className="font-bold">Perfect Gifts</h3>
              <p className="text-sm text-blue-950">
                Something special for everyone
              </p>
            </div>
          </div>

        </div>
      </section>


      {/* CATEGORIES */}
      <section className="bg-white py-16">

        <div className="max-w-7xl mx-auto px-6">

          <div className="flex justify-between items-end mb-8">
            <div>
              <p className="text-pink-500 font-semibold">
                SHOP BY CATEGORY
              </p>
              <h2 className="text-3xl font-bold mt-1">
                Find your favorite
              </h2>
            </div>

          
           <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setShowAllCategories(true);
            }}
            className="text-pink-500 font-medium hover:text-pink-600 transition"
          >
            View all →
          </a>

          {showAllCategories && (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4"
    onClick={() => setShowAllCategories(false)}
  >
    <div
      className="relative w-full max-w-3xl rounded-3xl bg-white p-6 shadow-2xl"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Close Button */}
      <button
        onClick={() => setShowAllCategories(false)}
        className="absolute right-5 top-4 text-2xl text-gray-400 hover:text-pink-500"
      >
        ×
      </button>

      {/* Header */}
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold text-gray-800">
          Our Categories 🧶
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Choose your favorite handmade goodies ♡
        </p>
      </div>

      {/* Categories */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {[
          ["🌸", "Crochet Flowers", "bg-pink-100"],
          ["👜", "Crochet Bags", "bg-purple-100"],
          ["🧸", "Amigurumi", "bg-yellow-100"],
          ["🎀", "Accessories", "bg-rose-100"],
          ["👒", "Crochet Hats", "bg-blue-100"],
          ["🧣", "Scarves", "bg-green-100"],
          ["💐", "Bouquets", "bg-pink-100"],
          ["🏠", "Home Decor", "bg-orange-100"],
          ["🐰", "Plushies", "bg-purple-100"],
          ["💍", "Jewelry", "bg-yellow-100"],
          ["👶", "Baby Items", "bg-blue-100"],
          ["✨", "Custom Orders", "bg-rose-100"],
        ].map(([icon, name, bg]) => (
          <button
            key={name}
            className={`group flex flex-col items-center justify-center rounded-2xl ${bg} p-5 transition duration-300 hover:-translate-y-1 hover:shadow-md`}
          >
            <span className="mb-2 text-4xl transition-transform group-hover:scale-110">
              {icon}
            </span>

            <span className="text-center text-sm font-semibold text-gray-700">
              {name}
            </span>
          </button>
        ))}
      </div>

      {/* Close */}
      <div className="mt-6 text-center">
        <button
          onClick={() => setShowAllCategories(false)}
          className="rounded-full bg-pink-500 px-6 py-2 text-sm font-medium text-white transition hover:bg-pink-600"
        >
          Close
        </button>
      </div>
    </div>
  </div>
)}
      </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">


            <div className="group cursor-pointer">
              <div className="bg-pink-100 rounded-2xl h-48 flex items-center justify-center text-6xl group-hover:bg-pink-200 transition">
                🌸
              </div>
              <h3 className="font-semibold mt-3">
                Crochet Flowers
              </h3>
            </div>

            <div className="group cursor-pointer">
              <div className="bg-purple-100 rounded-2xl h-48 flex items-center justify-center text-6xl group-hover:bg-purple-200 transition">
                👜
              </div>
              <h3 className="font-semibold mt-3">
                Bags & Pouches
              </h3>
            </div>

            <div className="group cursor-pointer">
              <div className="bg-yellow-100 rounded-2xl h-48 flex items-center justify-center text-6xl group-hover:bg-yellow-200 transition">
                🧸
              </div>
              <h3 className="font-semibold mt-3">
                Plushies
              </h3>
            </div>

            <div className="group cursor-pointer">
              <div className="bg-green-100 rounded-2xl h-48 flex items-center justify-center text-6xl group-hover:bg-green-200 transition">
                🎀
              </div>
              <h3 className="font-semibold mt-3">
                Accessories
              </h3>
            </div>

          </div>
        </div>
      </section>


      {/* PRODUCTS */}
      <section className="py-16 bg-pink-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-10">
            <p className="text-pink-500 font-semibold">
              OUR FAVORITES
            </p>

            <h2 className="text-3xl font-bold">
              Best Sellers
            </h2>
          </div>


          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

            {[
              ["🌷", "Crochet Tulip", "₱350"],
              ["🌹", "Crochet Rose", "₱400"],
              ["🧸", "Mini Plushie", "₱450"],
              ["🎀", "Crochet Ribbon", "₱250"],
            ].map(([image, name, price]) => (

              <div
                key={name}
                className="bg-white rounded-2xl overflow-hidden group"
              >

                <div className="h-56 bg-pink-100 flex items-center justify-center text-7xl group-hover:scale-105 transition">
                  {image}
                </div>

                <div className="p-4">
                  <div className="flex justify-between">
                    <h3 className="font-semibold">
                      {name}
                    </h3>

                    <Heart className="w-5 h-5 text-gray-400 hover:text-pink-500 cursor-pointer" />
                  </div>

                  <p className="text-pink-500 font-bold mt-2">
                    {price}
                  </p>

                  <button className="w-full mt-4 border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white py-2 rounded-full transition">
                    Add to Cart
                  </button>
                </div>

              </div>

            ))}

          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="py-20 bg-pink-400 text-ivory text-center">

        <div className="max-w-2xl mx-auto px-6">

          <h2 className="text-4xl font-bold">
            Made especially for you ♡
          </h2>

          <p className="mt-4 text-pink-100">
            Looking for something unique?
            Let us create a custom crochet piece just for you.
          </p>

          <button className="mt-8 bg-white text-pink-500 px-8 py-3 rounded-full font-semibold hover:bg-pink-50 transition">
            Custom Order
          </button>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-10">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-3 gap-8">

            <div>
              <h2 className="text-2xl font-bold text-pink-400">
                Knot PH
              </h2>
              <p className="text-gray-400 mt-3">
                Handmade crochet pieces made with love.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-3">
                Quick Links
              </h3>
              <div className="space-y-2 text-gray-400">
                <p>Shop</p>
                <p>About Us</p>
                <p>Contact</p>
                <p>FAQs</p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3">
                Follow Us
              </h3>
              <p className="text-gray-400">
                Instagram • Facebook • TikTok
              </p>
            </div>

          </div>

          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500 text-sm">
            © 2026 Knot PH. All rights reserved.
          </div>

        </div>

      </footer>

    </div>
  );
}

export default App;