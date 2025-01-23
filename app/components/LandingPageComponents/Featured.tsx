

export default function Featured(){
    return(
        <div>
            <section className="py-12 bg-white">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-3xl font-semibold text-gray-800 mb-8">Featured Categories</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 lg:m-0 m-12">
      
      {/**<!-- Film & Photography Category --> */}
      <div className="relative hover:scale-105">
        <img src="https://i0.wp.com/casualphotophile.com/wp-content/uploads/2021/01/cameras-dario.jpg?fit=1920%2C1080&ssl=1" alt="Film & Photography" className="w-full h-56 object-cover rounded-lg shadow-lg" />
        <div className="absolute bottom-0 left-0 right-0 bg-black text-white p-4">
          <h3 className="text-xl font-semibold">Film & Photography</h3>
        </div>
      </div>

      {/**<!-- Electronics Category --> */}
      <div className="relative hover:scale-105">
        <img src="https://c8.alamy.com/comp/WXYTBE/set-of-kitchen-appliance-electronics-for-home-WXYTBE.jpg" alt="Electronics" className="w-full h-56 object-cover rounded-lg shadow-lg" />
        <div className="absolute bottom-0 left-0 right-0 bg-black text-white p-4">
          <h3 className="text-xl font-semibold">Electronics</h3>
        </div>
      </div>

      {/**<!-- Houses Category --> */}
      <div className="relative hover:scale-105">
        <img src="https://shagunarts.com/media/wysiwyg/ssa-1214-a_1.jpg" alt="Houses" className="w-full h-56 object-cover rounded-lg shadow-lg" />
        <div className="absolute bottom-0 left-0 right-0 bg-black text-white p-4">
          <h3 className="text-xl font-semibold">Furniture</h3>
        </div>
      </div>

      {/**<!-- Clothes Category --> */}
      <div className="relative hover:scale-105">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEfORknOrz2Ng3KjU5AVfEm0XhXiUOeomefkC4aaQFxdWLEc1dZwiJmEeZQNfNyq_luWo&usqp=CAU" alt="Clothes" className="w-full h-56 object-cover rounded-lg shadow-lg"/>
        <div className="absolute bottom-0 left-0 right-0 bg-black text-white p-4">
          <h3 className="text-xl font-semibold">Equipments</h3>
        </div>
      </div>

    </div>
    <a href="#" className="mt-6 inline-block px-6 py-3 bg-teal-500 text-white rounded-full font-semibold text-lg hover:bg-teal-600">View All Categories</a>
  </div>
</section>

        </div>
    )
}