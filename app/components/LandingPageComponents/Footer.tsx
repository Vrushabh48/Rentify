

export default function Footer() {
  return (
    <div>
      <footer className="bg-gray-100 py-10">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 text-gray-800 lg:m-0 px-6 md:px-12">
          {/* Logo and Contact */}
          <div className="space-y-3">
            <img
              src="https://www.rentify.io/images/logo/rentify.svg"
              alt="Rentify Logo"
              className="w-20 h-20"
            />
            <p>(123) 456-7895</p>
            <p>
              <a
                href="mailto:info@rentify.com"
                className="text-blue-500 hover:underline"
              >
                info@rentify.com
              </a>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-yellow-600 mb-3">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline text-gray-600">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-gray-600">
                  Browse
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-gray-600">
                  List an item
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-gray-600">
                  Profile
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold text-yellow-600 mb-3">
              Categories
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline text-gray-600">
                  AV Equipment
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-gray-600">
                  Bikes
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-gray-600">
                  Cameras
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-gray-600">
                  Motorhomes
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-gray-600">
                  Learn More
                </a>
              </li>
            </ul>
          </div>

          {/* Getting Started and Support */}
          <div>
            <h4 className="text-lg font-semibold text-yellow-600 mb-3">
              Getting Started
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline text-gray-600">
                  Register
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-gray-600">
                  Listing Your Item
                </a>
              </li>
            </ul>
            <h4 className="text-lg font-semibold text-yellow-600 mt-5 mb-3">
              Support
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline text-gray-600">
                  Help Desk
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-gray-600">
                  Feature Requests
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-yellow-600">
              Social Media
            </h4>
            <div className="flex items-center space-x-4">
              <a href="#">
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/018/930/698/small/facebook-logo-facebook-icon-transparent-free-png.png"
                  alt="Facebook Logo"
                  className="w-6 h-6"
                />
              </a>
              <a href="#">
                <img
                  src="https://w7.pngwing.com/pngs/782/574/png-transparent-x-com-logo-twitter-rebranding-tech-companies-thumbnail.png"
                  alt="Twitter Logo"
                  className="w-6 h-6"
                />
              </a>
              <a href="#">
                <img
                  src="https://img.freepik.com/premium-vector/instagram-vector-logo-icon-social-media-logotype_901408-395.jpg?semt=ais_hybrid"
                  alt="Instagram Logo"
                  className="w-6 h-6"
                />
              </a>
              <a href="#">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfRQj_W8078FCL2-vDL5oWTJIVLhz8OH5g-A&s"
                  alt="LinkedIn Logo"
                  className="w-6 h-6"
                />
              </a>
            </div>
            <button className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition">
              List My Asset
            </button>
          </div>
        </div>
        <p className="text-center text-gray-500 text-sm mt-8">
          © {new Date().getFullYear()} Made by Vrushabh Patil
        </p>
      </footer>
    </div>
  );
}
