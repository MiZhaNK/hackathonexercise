import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold text-teal-600">Comforty</div>

        {/* Navigation Links */}
        <nav className="space-x-6">
          <Link href="/" className="text-gray-700 hover:text-teal-600">Home</Link>
          <Link href="/products" className="text-gray-700 hover:text-teal-600">Shop</Link>
          <Link href="/about" className="text-gray-700 hover:text-teal-600">About</Link>
          <Link href="/faq" className="text-gray-700 hover:text-teal-600">FAQ</Link>
          <Link href="/cart" className="text-gray-700 hover:text-teal-600">Cart</Link>
        </nav>

        {/* Contact Information */}
        <p className="text-gray-500 hidden md:block">Contact: (800) 555-0111</p>
      </div>
    </header>
  );
}

