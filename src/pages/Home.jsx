import { Link } from "react-router-dom"

function Home() {
  return (
    <main>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700 text-white">

        {/* Animated background circles */}
        <div className="absolute -left-20 top-20 h-72 w-72 animate-float rounded-full bg-yellow-400/10 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-80 w-80 animate-float rounded-full bg-white/10 blur-3xl" />

        <div className="relative mx-auto grid min-h-[650px] max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2">

          {/* Hero Text */}
          <div className="animate-fade-up">

            <p className="mb-4 font-semibold uppercase tracking-[0.2em] text-yellow-400">
              Selly Compassionate Care Foundation
            </p>

            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Serving humanity with
              <span className="text-yellow-400"> love and care.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Supporting indigent and vulnerable women, children, youth,
              and the elderly with care, support, and opportunities for
              growth.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <Link
                to="/get-involved"
                className="rounded-full bg-yellow-400 px-6 py-3 font-semibold text-blue-950 transition hover:-translate-y-1 hover:bg-yellow-300"
              >
                Join the Movement
              </Link>

              <Link
                to="/about"
                className="rounded-full border border-white/30 px-6 py-3 font-semibold text-white transition hover:-translate-y-1 hover:bg-white/10"
              >
                Learn More
              </Link>

            </div>
          </div>

          {/* Hero Visual */}
          <div className="flex justify-center animate-fade-in">

            <div className="relative flex h-72 w-72 items-center justify-center rounded-full border border-white/20 bg-white/10 shadow-2xl backdrop-blur-md animate-pulse md:h-96 md:w-96">

              <div className="absolute inset-4 rounded-full border border-yellow-400/30" />

              <div className="text-center">
                <div className="text-6xl">❤️</div>

                <h2 className="mt-4 text-2xl font-bold">
                  Compassion in Action
                </h2>

                <p className="mt-2 px-10 text-sm text-blue-100">
                  Supporting those who need it most.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>


      {/* Who We Serve */}
      <section className="bg-white px-6 py-20">

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-2xl text-center animate-fade-up">

            <p className="font-semibold uppercase tracking-widest text-yellow-500">
              Who We Serve
            </p>

            <h2 className="mt-3 text-3xl font-bold text-blue-950 md:text-4xl">
              Caring for those who need it most
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Our work focuses on supporting vulnerable members of society
              and helping create opportunities for a better future.
            </p>

          </div>


          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {[
              ["👩🏽", "Women", "Empowerment, education, vocational training, and economic support."],
              ["🧒🏽", "Children", "Care, food, healthcare, shelter, clothing, and educational support."],
              ["🧑🏽", "Youth", "Education, skills training, mentorship, and leadership development."],
              ["👵🏽", "Elderly", "Medical care, emotional support, and meaningful social interaction."],
            ].map(([icon, title, text], index) => (

              <div
                key={title}
                className="hover-lift rounded-2xl border border-slate-100 bg-slate-50 p-6 shadow-sm animate-fade-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-4xl">{icon}</div>

                <h3 className="mt-4 text-xl font-bold text-blue-950">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {text}
                </p>
              </div>

            ))}

          </div>

        </div>
      </section>


      {/* Mission */}
      <section className="bg-slate-50 px-6 py-20">

        <div className="mx-auto max-w-5xl text-center animate-fade-up">

          <p className="font-semibold uppercase tracking-widest text-yellow-500">
            Our Mission
          </p>

          <h2 className="mt-3 text-3xl font-bold text-blue-950 md:text-4xl">
            Empowering lives. Restoring dignity.
          </h2>

          <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-slate-600">
            Selly Compassionate Care Foundation is dedicated to providing
            comprehensive care, support, and empowerment to indigent and
            vulnerable women, children, youth, and the elderly, promoting
            their overall well-being, dignity, and self-sufficiency.
          </p>

        </div>
      </section>


      {/* Join the Movement */}
      <section className="bg-blue-950 px-6 py-20 text-center text-white">

        <div className="mx-auto max-w-3xl animate-fade-up">

          <p className="font-semibold uppercase tracking-widest text-yellow-400">
            Join the Movement
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Together, we can make a difference.
          </h2>

          <p className="mt-5 leading-7 text-blue-100">
            Join us in our mission to serve humanity with love, care,
            and compassion.
          </p>

          <Link
            to="/get-involved"
            className="mt-8 inline-block rounded-full bg-yellow-400 px-7 py-3 font-semibold text-blue-950 transition hover:-translate-y-1 hover:bg-yellow-300"
          >
            Get Involved →
          </Link>

        </div>
      </section>

    </main>
  )
}

export default Home