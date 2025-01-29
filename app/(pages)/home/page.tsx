"use client"
import Navbar from "@/app/components/Navbar";
import Image from "next/image";

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-800 font-sans overflow-x-hidden">
            <Navbar />
            <header className="text-center py-28">
                <h1 className="text-4xl font-bold text-blue-700 mb-4">Welcome to Rentify</h1>
                <p className="text-lg text-gray-600 mb-4">Your go-to platform for renting the things you need</p>
                <p className="text-sm text-gray-500 mb-6">Rent smarter, not harder</p>
            </header>

            <section className="py-16 px-6 bg-white">
                <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">Why Rent in Today&apos;s World?</h2>
                <div className="flex flex-wrap justify-center gap-6">
                    <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
                        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                            <Image src="https://www.idfcfirstbank.com/content/dam/idfcfirstbank/images/blog/15-useful-tips-to-save-money-for-later-use-in-life-717x404.jpg" alt="Save Money" className="w-full h-48 object-cover rounded-t-lg"/>
                            <h3 className="text-xl font-semibold text-blue-700 mt-4">Save Money, Rent Smarter</h3>
                            <p className="text-gray-700 mt-2">Renting allows you to access high-quality products without the high upfront cost. Save your money for what truly matters.</p>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
                        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                            <Image src="https://media.istockphoto.com/id/1435661969/photo/close-up-of-children-holding-a-planet-at-the-beach.jpg?s=612x612&w=0&k=20&c=TuZTL8KEdqNQxS5nlsH5i1tTOKNWopj2dHWkm9yk2uo=" alt="Eco-Friendly" className="w-full h-48 object-cover rounded-t-lg"/>
                            <h3 className="text-xl font-semibold text-blue-700 mt-4">Eco-Friendly Living</h3>
                            <p className="text-gray-700 mt-2">By renting, you contribute to a more sustainable world, reusing and reducing waste for a greener future.</p>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
                        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                            <Image src="https://images.yourstory.com/cs/2/f02aced0d86311e98e0865c1f0fe59a2/rental-economy-1640164938054.png?mode=crop&crop=faces&ar=2%3A1&format=auto&w=1920&q=75" alt="Flexibility" className="w-full h-48 object-cover rounded-t-lg"/>
                            <h3 className="text-xl font-semibold text-blue-700 mt-4">Ultimate Flexibility</h3>
                            <p className="text-gray-700 mt-2">Rent products on a short-term or long-term basis, based on your needs. Rent when you need it, and return when you&apos;re done.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/**Features Section */}
            <section className="bg-blue-50 py-16 px-6">
                <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">Features of Rentify</h2>
                <div className="flex flex-wrap justify-center gap-6">
                    <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold text-blue-700">Wide Range of Products</h3>
                            <p className="text-gray-700 mt-2">From electronics to furniture, Rentify offers a diverse catalog of products for all your needs.</p>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold text-blue-700">Effortless Approval Process</h3>
                            <p className="text-gray-700 mt-2">Our streamlined approval request system ensures quick and efficient rentals, giving you peace of mind.</p>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold text-blue-700">Secure Payments</h3>
                            <p className="text-gray-700 mt-2">Enjoy seamless and secure payment options, with top-notch encryption for your safety.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/**How it works Section */}
            <section className="py-16 px-6">
                <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">How Rentify Works</h2>
                <div className="flex flex-wrap justify-center gap-6">
                    <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
                        <div className="bg-blue-700 text-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold">Step 1: Browse Products</h3>
                            <p className="mt-2">Explore our wide range of rental products and select the one you need.</p>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
                        <div className="bg-blue-700 text-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold">Step 2: Submit Approval Request</h3>
                            <p className="mt-2">Once you&apos;ve found the product, submit an approval request for a smooth rental process.</p>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
                        <div className="bg-blue-700 text-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold">Step 3: Make Payment & Rent</h3>
                            <p className="mt-2">Once approved, make your payment securely and start enjoying your rental item.</p>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="text-center py-8 bg-blue-700 text-white">
                <p>&copy; 2025 Rentify. All rights reserved.</p>
            </footer>
        </div>
    );
}
