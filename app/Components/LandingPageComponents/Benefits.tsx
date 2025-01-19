export default function Benefit(){
    return(
        <div>
            <section className="bg-white py-12">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-3xl font-semibold text-gray-800 mb-8">Why Choose Rentify?</h2>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
      
      {/**<!-- Access More --> */}
      <div className="flex flex-col items-center text-gray-700">
        <div className="mb-4 w-12 h-12 flex items-center justify-center bg-green-100 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-green-600">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </div>
        <h3 className="text-xl font-medium mb-2">Access More</h3>
        <p className="text-base">Pursue passions. Get things done.</p>
      </div>

      {/**<!-- Help The Planet --> */}
      <div className="flex flex-col items-center text-gray-700">
        <div className="mb-4 w-12 h-12 flex items-center justify-center bg-green-100 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-green-600">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2v6m0 0l2-2m-2 2l-2-2m0 6v6m0 0l2-2m-2 2l-2-2"></path>
          </svg>
        </div>
        <h3 className="text-xl font-medium mb-2">Help The Planet</h3>
        <p className="text-base">Live lighter. Reduce waste.</p>
      </div>

      {/*<!-- Save Money -->*/}
      <div className="flex flex-col items-center text-gray-700">
        <div className="mb-4 w-12 h-12 flex items-center justify-center bg-green-100 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-green-600">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zM12 3v2m0 4h2m-4 0H8m0 4h4m-1 4v2m0 2h-2m4 0h-2m-4 0H8"></path>
          </svg>
        </div>
        <h3 className="text-xl font-medium mb-2">Save Money</h3>
        <p className="text-base">Buy less. Rent for a fraction of cost.</p>
      </div>

    </div>
  </div>
</section>

        </div>
    )
}