import Header from './components/Header';
import Hero from './components/Hero';
import BrandLogos from './components/BrandLogos';
import FeaturedProducts from './components/FeaturedProducts';
import TopCategories from './components/TopCategories';
import HotProducts from './components/HotProducts';
import OurProducts from './components/OurProducts';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <main>
        <Hero />

        {/* Brand Logos Section */}
        <section className="py-8 bg-gray-100">
          <div className="container mx-auto px-4">
            <BrandLogos />
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-8">Featured Products</h2>
            <FeaturedProducts />
          </div>
        </section>

        {/* Top Categories Section */}
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-8">Top Categories</h2>
            <TopCategories />
          </div>
        </section>

        {/* Hot Products Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-8">Explore Popular Styles</h2>
            <HotProducts />
          </div>
        </section>

        {/* Our Products Section */}
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-8">Our Products</h2>
            <OurProducts />
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
