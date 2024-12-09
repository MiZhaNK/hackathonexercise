export default function CartPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-teal-600">Comforty</h1>
          <nav className="space-x-6">
            <a href="/" className="text-gray-700 hover:text-teal-600">Home</a>
            <a href="/shop" className="text-gray-700 hover:text-teal-600">Shop</a>
            <a href="/cart" className="text-teal-600 font-bold">Cart</a>
            <a href="/about" className="text-gray-700 hover:text-teal-600">About</a>
          </nav>
        </div>
      </header>

      {/* Cart Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-teal-600 text-center mb-8">Your Shopping Cart</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Cart Item */}
          <div className="flex items-center bg-white p-4 shadow-md rounded-lg">
            <img src="/chair3.jpg" alt="Cart Item" width={100} height={100} className="rounded" />
            <div className="ml-4">
              <h3 className="font-semibold text-gray-800">The Cozy Chair</h3>
              <p className="text-gray-600">$79.00</p>
            </div>
            <div className="ml-auto">
              <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">Remove</button>
            </div>
          </div>
          {/* Repeat for more items */}
        </div>
        <div className="mt-8 text-center">
          <button className="px-6 py-3 bg-teal-600 text-white rounded-md hover:bg-teal-700">Proceed to Checkout</button>
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
