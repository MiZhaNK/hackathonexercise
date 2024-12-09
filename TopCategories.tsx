export default function TopCategories() {
    const categories = [
      { id: 1, name: "Wing Chair", img: "/wing-chair.jpg" },
      { id: 2, name: "Wooden Chair", img: "/stool Chair.jpg" },
      { id: 3, name: "Desk Chair", img: "/desk chair.png" },
      { id: 4, name: "Camping Chair", img: "/camping-chair.jpg" },
    ];
  
    return (
      <section className="py-12 bg-white">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">
          Top Categories
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-8">
          {categories.map((category) => (
            <div key={category.id} className="group">
              <div className="overflow-hidden rounded-lg shadow">
                <img
                  src={category.img}
                  alt={category.name}
                  className="w-600 h-50 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-4 text-lg font-bold text-center text-gray-800">
                {category.name}
              </h3>
            </div>
          ))}
        </div>
      </section>
    );
  }
