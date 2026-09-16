import { Link } from "react-router-dom"

function Donate() {
  return (
    <main className="bg-white">

      {/* Header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700 px-6 py-24 text-center text-white">

        <div className="absolute -left-20 top-10 h-64 w-64 animate-float rounded-full bg-yellow-400/10 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-72 w-72 animate-float rounded-full bg-white/10 blur-3xl" />

        <div className="relative mx-auto max-w-3xl animate-fade-up">

          <div className="text-5xl animate-float">💛</div>

          <p className="mt-6 font-semibold uppercase tracking-[0.2em] text-yellow-400">
            Support Our Cause
          </p>

          <h1 className="mt-3 text-4xl font-bold md:text-5xl">
            Your Support Can Make a Difference
          </h1>

          <p className="mt-6 text-lg leading-8 text-blue-100">
            Join us in our mission to serve humanity with love, care,
            and compassion.
          </p>

        </div>
      </section>


      {/* Donation Information */}
      <section className="px-6 py-20">

        <div className="mx-auto max-w-4xl">

          <div className="rounded-3xl border border-slate-100 bg-slate-50 p-8 shadow-sm md:p-12 animate-fade-up">

            <div className="text-center">

              <p className="font-semibold uppercase tracking-widest text-yellow-500">
                Make an Impact
              </p>

              <h2 className="mt-3 text-3xl font-bold text-blue-950">
                Donate to Support Our Cause
              </h2>

              <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-600">
                Your donation will support the mission and objectives of
                Selly Compassionate Care Foundation.
              </p>

            </div>


            {/* Payment Details Placeholder */}
            <div className="mt-10 rounded-2xl bg-white p-6 text-center shadow-sm">

              <div className="text-4xl">🏦</div>

              <h3 className="mt-4 text-xl font-bold text-blue-950">
                Donation Details
              </h3>

              <p className="mt-3 text-slate-500">
                Donation and payment details will be provided here.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* Other Ways */}
      <section className="bg-slate-50 px-6 py-20">

        <div className="mx-auto max-w-5xl text-center animate-fade-up">

          <p className="font-semibold uppercase tracking-widest text-yellow-500">
            More Ways to Help
          </p>

          <h2 className="mt-3 text-3xl font-bold text-blue-950">
            You can make a difference in other ways too
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">

            <div className="hover-lift rounded-2xl bg-white p-7 shadow-sm">
              <div className="text-4xl">🤝</div>

              <h3 className="mt-4 text-xl font-bold text-blue-950">
                Volunteer
              </h3>

              <p className="mt-3 text-slate-600">
                Volunteer your time and skills to support our work.
              </p>

              <Link
                to="/get-involved"
                className="mt-5 inline-block font-semibold text-blue-900 hover:text-yellow-600"
              >
                Learn More →
              </Link>
            </div>


            <div className="hover-lift rounded-2xl bg-white p-7 shadow-sm">
              <div className="text-4xl">📢</div>

              <h3 className="mt-4 text-xl font-bold text-blue-950">
                Spread the Word
              </h3>

              <p className="mt-3 text-slate-600">
                Share our mission and help more people discover our work.
              </p>

              <Link
                to="/about"
                className="mt-5 inline-block font-semibold text-blue-900 hover:text-yellow-600"
              >
                Learn More →
              </Link>
            </div>

          </div>

        </div>
      </section>


      {/* CTA */}
      <section className="bg-blue-950 px-6 py-20 text-center text-white">

        <div className="mx-auto max-w-3xl animate-fade-up">

          <h2 className="text-3xl font-bold md:text-4xl">
            Serving Humanity with Love and Care, Every Step
          </h2>

          <p className="mt-5 text-blue-100">
            Together, we can make a difference.
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-block rounded-full bg-yellow-400 px-7 py-3 font-semibold text-blue-950 transition hover:-translate-y-1 hover:bg-yellow-300"
          >
            Contact Us →
          </Link>

        </div>

      </section>

    </main>
  )
}

export default Donate