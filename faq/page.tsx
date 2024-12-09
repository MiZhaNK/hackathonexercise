export default function FAQPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-teal-600">Comforty</h1>
          <nav className="space-x-6">
            <a href="/" className="text-gray-700 hover:text-teal-600">Home</a>
            <a href="/shop" className="text-gray-700 hover:text-teal-600">Shop</a>
            <a href="/faq" className="text-teal-600 font-bold">FAQ</a>
            <a href="/about" className="text-gray-700 hover:text-teal-600">About</a>
          </nav>
        </div>
      </header>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-teal-600 text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {/* Question 1 */}
          <div className="bg-white p-4 shadow-md rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2">What is Comforty?</h3>
            <p className="text-gray-600">Comforty is a brand specializing in ergonomic and modern furniture designed to transform your living space.</p>
          </div>
          {/* Question 2 */}
          <div className="bg-white p-4 shadow-md rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2">What is your return policy?</h3>
            <p className="text-gray-600">We offer a 30-day return policy on all items. Please ensure items are in their original condition.</p>
          </div>
          {/* Question 3 */}
          <div className="bg-white p-4 shadow-md rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2">How do I track my order?</h3>
            <p className="text-gray-600">Once your order is shipped, we will provide a tracking link via email for you to track your package.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-200 py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between">
          <div>
            <h3 className="text-lg font-bold text-white">Comforty</h3>
            <p className="text-gray-400">Creating modern, comfortable designs for every home.</p>
          </div>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Help & Support</a></li>
            <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          </ul>
          <div>
            <h4 className="font-bold">Subscribe</h4>
            <input type="email" placeholder="Your email" className="px-4 py-2 rounded-md text-gray-800" />
            <button className="px-4 py-2 bg-teal-600 text-white rounded-md ml-2 hover:bg-teal-700">Subscribe</button>
          </div>
        </div>
      </footer>
    </div>
  );
}
