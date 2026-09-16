import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer className="mt-20 bg-blue-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">

        <div className="grid gap-10 md:grid-cols-3">

          {/* Foundation */}
          <div>
            <h2 className="text-xl font-bold">
              Selly Compassionate Care Foundation
            </h2>

            <p className="mt-4 text-sm leading-6 text-slate-300">
              Serving Humanity with Love and Care, Every Step.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-semibold text-yellow-400">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-sm text-slate-300">
              <Link to="/" className="hover:text-white">Home</Link>
              <Link to="/about" className="hover:text-white">About</Link>
              <Link to="/programs" className="hover:text-white">Programs</Link>
              <Link to="/get-involved" className="hover:text-white">
                Get Involved
              </Link>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-4 font-semibold text-yellow-400">
              Support Our Mission
            </h3>

            <p className="text-sm leading-6 text-slate-300">
              Join us in serving humanity with love, care, and compassion.
            </p>

            <Link
              to="/donate"
              className="mt-5 inline-block rounded-full bg-yellow-400 px-5 py-2.5 font-semibold text-blue-950 transition hover:-translate-y-1 hover:bg-yellow-300"
            >
              Donate
            </Link>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-blue-900 pt-6 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} Selly Compassionate Care Foundation
          (Incorporated). All rights reserved.
        </div>

      </div>
    </footer>
  )
}

export default Footer