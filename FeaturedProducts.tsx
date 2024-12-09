export default function FeaturedProducts() {
    const products = [
      { id: 1, name: "Wing Chair", price: "$50", img: "/chair1.jpg" },
      { id: 2, name: "Wooden Chair", price: "$60", img: "/chair2.jpg" },
      { id: 3, name: "Desk Chair", price: "$70", img: "/chair3.jpg" },
      { id: 4, name: "Camping Chair", price: "$80", img: "/chair4.jpg" },
    ];
  
    return (
      <section className="py-12 bg-gray-100">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded-lg shadow hover:shadow-lg flex flex-col items-center"
            >
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-bold text-gray-800 text-center">
                {product.name}
              </h3>
              <p className="text-gray-600 text-center">{product.price}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  