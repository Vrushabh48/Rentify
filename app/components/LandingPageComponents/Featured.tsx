export default function Featured() {
  return (
    <div>
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">
            Featured Categories
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 p-5">
            {/* Film & Photography */}
            <div className="relative group">
              <img
                src="https://i0.wp.com/casualphotophile.com/wp-content/uploads/2021/01/cameras-dario.jpg?fit=1920%2C1080&ssl=1"
                alt="Film & Photography"
                className="w-full h-56 object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-semibold text-white">Film & Photography</h3>
              </div>
            </div>

            {/* Electronics */}
            <div className="relative group">
              <img
                src="https://c8.alamy.com/comp/WXYTBE/set-of-kitchen-appliance-electronics-for-home-WXYTBE.jpg"
                alt="Electronics"
                className="w-full h-56 object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-semibold text-white">Electronics</h3>
              </div>
            </div>

            {/* Furniture */}
            <div className="relative group">
              <img
                src="https://shagunarts.com/media/wysiwyg/ssa-1214-a_1.jpg"
                alt="Furniture"
                className="w-full h-56 object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-semibold text-white">Furniture</h3>
              </div>
            </div>

            {/* Equipments */}
            <div className="relative group">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEfORknOrz2Ng3KjU5AVfEm0XhXiUOeomefkC4aaQFxdWLEc1dZwiJmEeZQNfNyq_luWo&usqp=CAU"
                alt="Equipments"
                className="w-full h-56 object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-semibold text-white">Equipments</h3>
              </div>
            </div>
          </div>
          <a
            href="#"
            className="mt-12 inline-block px-8 py-3 bg-teal-500 text-white rounded-full font-semibold text-lg hover:bg-teal-600 transition duration-300"
          >
            View All Categories
          </a>
        </div>
      </section>
    </div>
  );
}
