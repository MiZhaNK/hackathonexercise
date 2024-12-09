import Link from 'next/link';  // Import Link from Next.js

export default function Hero() {
  return (
    <section className="flex items-center justify-between px-8 py-16 bg-gray-100">
      {/* Text Content */}
      <div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Best Furniture Collection <br /> For Your Interior
        </h1>
        <p className="text-gray-600 mb-6">
          Discover the best designs to make your home more beautiful.
        </p>

        {/* Wrap the button with Link to navigate to products page */}
        <Link href="/products">
          <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600">
            Shop Now
          </button>
        </Link>
      </div>

      {/* Image */}
      <div>
        <img
          src="pic1.png"
          alt="Featured Chair"
          className="w-[434px] h-[584px] top-[115px] left-[115px] gap: 0px opacity: 0px"
        />
      </div>
    </section>
  );
}
