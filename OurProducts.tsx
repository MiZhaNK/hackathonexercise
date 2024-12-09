export default function OurProducts() {
  const products = [
    { id: 1, name: "Library Stool Chair", price: "$100", img: "/chair1.jpg" },
    { id: 2, name: "Library Stool Chair", price: "$120", img: "/chair2.jpg" },
    { id: 3, name: "Library Stool Chair", price: "$300", img: "/chair3.jpg" },
    { id: 4, name: "Library Stool Chair", price: "$90", img: "/chair4.jpg" },
    { id: 5, name: "Library Stool Chair", price: "$150", img: "/library stool chair.jpg" },
    { id: 6, name: "Library Stool Chair", price: "$110", img: "/library stool chair2.jpg" },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">
        Our Products
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 px-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-lg shadow hover:shadow-lg"
          >
            <img
              src={product.img}
              alt={product.name}
              className="w-6000 h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
            <p className="text-gray-600 mb-2">{product.price}</p>
            <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
