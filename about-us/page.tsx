import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AboutUs() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main>
        {/* About Us Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
            {/* Left Column */}
            <div className="bg-teal-700 text-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold mb-4">About Us - Comforty</h2>
              <p className="mb-6">
                At Comforty, we believe the right chair can transform your space
                and elevate your comfort. Specializing in ergonomic design,
                premium materials, and modern aesthetics, we craft chairs that
                seamlessly blend style with functionality.
              </p>
              <button className="bg-white text-teal-700 px-6 py-3 font-semibold rounded hover:bg-gray-100">
                View Collection
              </button>
            </div>

            {/* Right Column */}
            <div>
              <img
                src="/public/chair1.jpg"
                alt="Chair"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Brand Differentiation Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
              What Makes Our Brand Different
            </h2>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="p-6 border rounded shadow">
                <h3 className="text-lg font-semibold text-teal-600 mb-2">
                  Next Day as Standard
                </h3>
                <p className="text-gray-600">
                  Order before 2pm and get your order the next day as standard.
                </p>
              </div>
              <div className="p-6 border rounded shadow">
                <h3 className="text-lg font-semibold text-teal-600 mb-2">
                  Made by True Artisans
                </h3>
                <p className="text-gray-600">
                  Handcrafted goods made with real passion and craftsmanship.
                </p>
              </div>
              <div className="p-6 border rounded shadow">
                <h3 className="text-lg font-semibold text-teal-600 mb-2">
                  Unbeatable Prices
                </h3>
                <p className="text-gray-600">
                  For our materials and quality, you won’t find better prices
                  anywhere.
                </p>
              </div>
              <div className="p-6 border rounded shadow">
                <h3 className="text-lg font-semibold text-teal-600 mb-2">
                  Recycled Packaging
                </h3>
                <p className="text-gray-600">
                  We use 100% recycled materials to make our footprint more
                  manageable.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Products Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
              Our Popular Products
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <img
                  src="/images/sofa.jpg"
                  alt="Sofa"
                  className="rounded-lg shadow-lg mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-800">
                  The Poplar Suede Sofa
                </h3>
                <p className="text-teal-600">$99.00</p>
              </div>
              <div className="text-center">
                <img
                  src="/images/chair1.jpg"
                  alt="Chair 1"
                  className="rounded-lg shadow-lg mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-800">
                  The Dandy Chair
                </h3>
                <p className="text-teal-600">$90.00</p>
              </div>
              <div className="text-center">
                <img
                  src="/images/chair2.jpg"
                  alt="Chair 2"
                  className="rounded-lg shadow-lg mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-800">
                  The Dandy Chair
                </h3>
                <p className="text-teal-600">$90.00</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
