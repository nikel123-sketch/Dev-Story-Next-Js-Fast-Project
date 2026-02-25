import React from 'react';

const ProductDetailsById = async({params}) => {
    const {id} = await params;
   
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
    const storys=products.find(story=>story.id==id)
    if(!storys){
        return <div>story is not found</div>
    }

    return (
      <div>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-6">
          <div className="max-w-4xl w-full bg-slate-900/70 backdrop-blur-xl border border-slate-700 rounded-3xl shadow-2xl overflow-hidden hover:shadow-blue-500/20 transition-all duration-500">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image Section */}
              <div className="bg-slate-800 flex items-center justify-center p-8">
                <img
                  src={storys.image}
                  alt={storys.name}
                  className="w-full max-w-sm rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Details Section */}
              <div className="p-8 flex flex-col justify-between">
                <div>
                  <span className="inline-block px-3 py-1 text-xs font-semibold bg-blue-600/20 text-blue-400 rounded-full mb-3">
                    {storys.category}
                  </span>

                  <h1 className="text-3xl font-bold text-white mb-3">
                    {storys.name}
                  </h1>

                  <p className="text-slate-400 mb-6 leading-relaxed">
                    {storys.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    <p className="text-lg text-slate-300">
                      💰 Price:
                      <span className="text-green-400 font-semibold ml-2">
                        ${storys.price}
                      </span>
                    </p>

                    <p className="text-lg text-slate-300">
                      ⭐ Rating:
                      <span className="text-yellow-400 font-semibold ml-2">
                        {storys.rating}
                      </span>
                    </p>

                    <p className="text-lg text-slate-300">
                      📦 Stock:
                      <span className="text-blue-400 font-semibold ml-2">
                        {storys.stock}
                      </span>
                    </p>
                  </div>
                </div>

                {/* Button Section */}
                <div className="flex gap-4">
                  <button className="flex-1 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-blue-500/30 transition-all duration-300">
                    Add to Cart
                  </button>

                  <button className="flex-1 border border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white py-3 rounded-xl transition-all duration-300">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ProductDetailsById;