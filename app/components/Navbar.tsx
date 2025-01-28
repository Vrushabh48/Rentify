"use client"
import { useRouter } from "next/navigation"
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();

    return (
        <nav className="bg-blue-700 text-white p-4 fixed w-full z-10 shadow-md">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold cursor-pointer" onClick={() => router.push("/home")}>Rentify</h1>
                <div className="hidden md:flex gap-6">
                    <button
                        className="px-4 py-2 hover:bg-blue-500 rounded"
                        onClick={() => router.push("/profile")}
                    >
                        Manage Profile
                    </button>
                    <button
                        className="px-4 py-2 hover:bg-blue-500 rounded"
                        onClick={() => router.push("/products")}
                    >
                        Explore Products
                    </button>
                    <button
                        className="px-4 py-2 hover:bg-blue-500 rounded"
                        onClick={() => router.push("/approvalrequests")}
                    >
                        Approval Requests
                    </button>
                    <button
                        className="px-4 py-2 hover:bg-blue-500 rounded"
                        onClick={() => router.push("/status")}
                    >
                        Status
                    </button>
                    <button
                        className="px-4 py-2 hover:bg-blue-500 rounded"
                        onClick={() => router.push("/products/rentedproducts")}
                    >
                        My Rented Products
                    </button>
                    <button
                        className="px-4 py-2 hover:bg-blue-500 rounded"
                        onClick={() => router.push("/addProduct")}
                    >
                        Add a Product
                    </button>
                </div>
                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden flex flex-col bg-blue-600 p-4 mt-2 rounded-lg shadow-lg">
                    <button
                        className="py-2 hover:bg-blue-500 rounded text-left"
                        onClick={() => { setIsMenuOpen(false); router.push("/profile") }}
                    >
                        Manage Profile
                    </button>
                    <button
                        className="py-2 hover:bg-blue-500 rounded text-left"
                        onClick={() => { setIsMenuOpen(false); router.push("/products") }}
                    >
                        Explore Products
                    </button>
                    <button
                        className="py-2 hover:bg-blue-500 rounded text-left"
                        onClick={() => { setIsMenuOpen(false); router.push("/approvalrequests") }}
                    >
                        Approval Requests
                    </button>
                </div>
            )}
        </nav>
    );
}