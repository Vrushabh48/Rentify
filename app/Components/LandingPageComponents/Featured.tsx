

export default function Featured(){
    return(
        <div>
            <section className="py-12 bg-white">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-3xl font-semibold text-gray-800 mb-8">Featured Categories</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      
      {/**<!-- Film & Photography Category --> */}
      <div className="relative">
        <img src="film-photography.jpg" alt="Film & Photography" className="w-full h-56 object-cover rounded-lg shadow-lg" />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
          <h3 className="text-xl font-semibold">Film & Photography</h3>
        </div>
      </div>

      {/**<!-- Electronics Category --> */}
      <div className="relative">
        <img src="electronics.jpg" alt="Electronics" className="w-full h-56 object-cover rounded-lg shadow-lg" />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
          <h3 className="text-xl font-semibold">Electronics</h3>
          <p className="text-sm">Laptop, Refrigerator, Sewing Machines and much more</p>
        </div>
      </div>

      {/**<!-- Houses Category --> */}
      <div className="relative">
        <img src="houses.jpg" alt="Houses" className="w-full h-56 object-cover rounded-lg shadow-lg" />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
          <h3 className="text-xl font-semibold">Houses</h3>
        </div>
      </div>

      {/**<!-- Clothes Category --> */}
      <div className="relative">
        <img src="clothes.jpg" alt="Clothes" className="w-full h-56 object-cover rounded-lg shadow-lg"/>
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
          <h3 className="text-xl font-semibold">Clothes</h3>
        </div>
      </div>

    </div>
    <a href="#" className="mt-6 inline-block px-6 py-3 bg-teal-500 text-white rounded-full font-semibold text-lg hover:bg-teal-600">View All Categories</a>
  </div>
</section>

        </div>
    )
}