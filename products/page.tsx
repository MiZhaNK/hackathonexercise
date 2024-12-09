import Header from '../components/Header';

export default function ProductsPage() {
  return (
    <div className="bg-white"> {/* Set the whole background to white */}
      {/* Header Section */}
      <Header />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-6">All Products</h1>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Example Product */}
          {Array.from({ length: 12 }).map((_, idx) => (
            <div
              key={idx}
              className="border rounded-lg shadow-sm overflow-hidden"
            >
              {/* Product Image */}
              <img
                src={`/productsimgs/product-${idx + 1}.jpg`} // Corrected image path
                alt="Product Image"
                className="w-full h-40 object-cover"
              />
              {/* Product Details */}
              <div className="p-4">
                <span className="text-sm bg-green-200 text-green-800 px-2 py-1 rounded-full">
                  New
                </span>
                <h2 className="text-lg font-semibold mt-2">
                  Library Stool Chair
                </h2>
                <p className="text-teal-600 font-bold mt-1">$30</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Newsletter Section */}
      <section className="w-[760px] h-[165px] mx-auto py-10 text-center">
        <h2 className="text-2xl font-bold text-black mb-4">
          Or subscribe to the newsletter
        </h2>
        <form className="flex justify-center items-center gap-4">
          <input
            type="email"
            placeholder="Email Address..."
            className="w-[643px] h-[32px] px-4 py-2 rounded-md border"
          />
          <button className="bg-teal-600 text-white px-6 py-2 rounded-md">
            Submit
          </button>
        </form>
      </section>

      {/* Instagram Section */}
      <section className="bg-[#1E28320D] py-10 text-center">
        <h2 className="text-2xl font-bold mb-4 text-black">
          Follow products and discounts on Instagram
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {Array.from({ length: 6 }).map((_, idx) => (
            <div
              key={idx}
              className="w-[200px] h-[200px] bg-gray-300 rounded-lg overflow-hidden"
            >
              <img
                src={`/instagramimages/instagram-image-${idx + 1}.jpg`} // Corrected image path
                alt={`Instagram ${idx + 1}`} // Corrected alt text
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-gray-300 py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Comforty - Designed by Mujahid Shaikh</p>
          <p>Terms & Conditions | Help & Support</p>
        </div>
      </footer>
    </div>
  );
}
