import { useState } from "react"
import { Link, useLocation } from "react-router-dom"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Programs", path: "/programs" },
    { name: "Get Involved", path: "/get-involved" },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo / Foundation Name */}
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="max-w-[220px] text-lg font-bold leading-tight text-blue-950 transition hover:text-blue-700"
        >
          Selly Compassionate Care Foundation
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 md:flex">

          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative py-2 font-medium transition ${
                location.pathname === link.path
                  ? "text-blue-950"
                  : "text-slate-600 hover:text-blue-900"
              }`}
            >
              {link.name}

              {location.pathname === link.path && (
                <span className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-yellow-400" />
              )}
            </Link>
          ))}

          {/* Donate */}
          <Link
            to="/donate"
            className="rounded-full bg-yellow-400 px-5 py-2.5 font-semibold text-blue-950 transition hover:-translate-y-0.5 hover:bg-yellow-300"
          >
            Donate
          </Link>

          {/* Contact */}
          <Link
            to="/contact"
            className="rounded-full bg-blue-950 px-5 py-2.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-900"
          >
            Contact Us
          </Link>

        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl text-blue-950 md:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-slate-100 bg-white px-6 py-5 md:hidden animate-fade-in">

          <div className="flex flex-col gap-2">

            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={`rounded-lg px-4 py-3 font-medium transition ${
                  location.pathname === link.path
                    ? "bg-blue-50 text-blue-950"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <Link
              to="/donate"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-full bg-yellow-400 px-5 py-3 text-center font-semibold text-blue-950 transition hover:bg-yellow-300"
            >
              Donate
            </Link>

            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="rounded-full bg-blue-950 px-5 py-3 text-center font-semibold text-white transition hover:bg-blue-900"
            >
              Contact Us
            </Link>

          </div>

        </div>
      )}
    </nav>
  )
}

export default Navbar