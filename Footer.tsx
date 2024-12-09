export default function Footer() {
    return (
      <footer className="py-8 bg-gray-800 text-gray-200">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Column 1 */}
            <div>
              <h3 className="text-lg font-bold mb-4">Company</h3>
              <ul>
                <li><a href="#" className="hover:text-blue-500">About Us</a></li>
                <li><a href="#" className="hover:text-blue-500">Careers</a></li>
                <li><a href="#" className="hover:text-blue-500">Contact</a></li>
              </ul>
            </div>
  
            {/* Column 2 */}
            <div>
              <h3 className="text-lg font-bold mb-4">Support</h3>
              <ul>
                <li><a href="#" className="hover:text-blue-500">FAQs</a></li>
                <li><a href="#" className="hover:text-blue-500">Shipping</a></li>
                <li><a href="#" className="hover:text-blue-500">Returns</a></li>
              </ul>
            </div>
  
            {/* Column 3 */}
            <div>
              <h3 className="text-lg font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-blue-500">Facebook</a>
                <a href="#" className="hover:text-blue-500">Instagram</a>
                <a href="#" className="hover:text-blue-500">Twitter</a>
              </div>
            </div>
          </div>
          <p className="mt-8 text-center text-sm">
            &copy; 2024 Your Company. All rights reserved.
          </p>
        </div>
      </footer>
    );
  }
  