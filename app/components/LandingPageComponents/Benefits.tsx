export default function Benefit() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto text-center px-4 sm:px-6">
        <h2 className="text-3xl font-semibold text-gray-800 mb-12">Why Choose Rentify?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">

          {/* Access More */}
          <div className="flex flex-col items-center text-gray-700 transition-transform transform hover:scale-105">
            <div className="mb-4 w-16 h-16 flex items-center justify-center bg-green-100 rounded-full">
              <svg className="w-8 h-8 text-green-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-2">Access More</h3>
            <p className="text-base text-gray-600">Pursue passions. Get things done.</p>
          </div>

          {/* Help The Planet */}
          <div className="flex flex-col items-center text-gray-700 transition-transform transform hover:scale-105">
            <div className="mb-4 w-16 h-16 flex items-center justify-center bg-green-100 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-globe-americas w-8 h-8 text-green-600" viewBox="0 0 16 16">
                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484q-.121.12-.242.234c-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z"/>
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-2">Help The Planet</h3>
            <p className="text-base text-gray-600">Live lighter. Reduce waste.</p>
          </div>

          {/* Save Money */}
          <div className="flex flex-col items-center text-gray-700 transition-transform transform hover:scale-105">
            <div className="mb-4 w-16 h-16 flex items-center justify-center bg-green-100 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-cash-coin w-8 h-8 text-green-600" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8m5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0"/>
                <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195z"/>
                <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083q.088-.517.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1z"/>
                <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 6 6 0 0 1 3.13-1.567"/>
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-2">Save Money</h3>
            <p className="text-base text-gray-600">Buy less. Rent for a fraction of cost.</p>
          </div>

        </div>
      </div>
    </section>
  );
}
