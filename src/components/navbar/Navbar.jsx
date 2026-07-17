import navbarLinks from "../../data/navbarLinks";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-5 bg-black text-white">

      {/* Logo */}
      <div>
        <h1 className="text-2xl font-bold">SafarSaathi</h1>
      </div>

      {/* Navigation Links */}
      <div className="flex gap-8">
        {navbarLinks.map((item) => (
          <a key={item.id} href={item.path}>
            {item.title}
          </a>
        ))}
      </div>

      {/* Button */}
      <div>
        <button className="bg-blue-600 px-5 py-2 rounded-lg hover:bg-blue-700">
          Get Started
        </button>
      </div>

    </nav>
  );
}

export default Navbar;