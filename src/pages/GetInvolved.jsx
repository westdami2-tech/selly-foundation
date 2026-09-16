import { Link } from "react-router-dom"

function GetInvolved() {
  const ways = [
    {
      icon: "💛",
      title: "Donate",
      text: "Donate to support our cause and help us provide essential care, support, and opportunities.",
      button: "Donate Now",
      link: "/donate",
    },
    {
      icon: "🤝",
      title: "Volunteer",
      text: "Volunteer your time and skills to support the work of Selly Compassionate Care Foundation.",
      button: "Contact Us",
      link: "/contact",
    },
    {
      icon: "📢",
      title: "Spread the Word",
      text: "Share our mission with others and help more people learn about the work we do.",
      button: "Learn More",
      link: "/about",
    },
  ]

  return (
    <main className="bg-white">

      {/* Header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700 px-6 py-24 text-center text-white">

        <div className="absolute -left-20 top-10 h-64 w-64 animate-float rounded-full bg-yellow-400/10 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-72 w-72 animate-float rounded-full bg-white/10 blur-3xl" />

        <div className="relative mx-auto max-w-3xl animate-fade-up">

          <p className="font-semibold uppercase tracking-[0.2em] text-yellow-400">
            Get Involved
          </p>

          <h1 className="mt-3 text-4xl font-bold md:text-5xl">
            Be Part of the Movement
          </h1>

          <p className="mt-6 text-lg leading-8 text-blue-100">
            Join us in our mission to serve humanity with love, care,
            and compassion.
          </p>

        </div>
      </section>


      {/* Ways to Get Involved */}
      <section className="px-6 py-20">

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-2xl text-center animate-fade-up">

            <p className="font-semibold uppercase tracking-widest text-yellow-500">
              Make a Difference
            </p>

            <h2 className="mt-3 text-3xl font-bold text-blue-950 md:text-4xl">
              There are many ways to help
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Whether you give, volunteer, or simply share our message,
              your support can help us reach more vulnerable people.
            </p>

          </div>


          <div className="mt-12 grid gap-8 md:grid-cols-3">

            {ways.map((way, index) => (
              <div
                key={way.title}
                className="hover-lift rounded-2xl border border-slate-100 bg-slate-50 p-8 text-center shadow-sm animate-fade-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-yellow-400 text-3xl">
                  {way.icon}
                </div>

                <h3 className="mt-6 text-2xl font-bold text-blue-950">
                  {way.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {way.text}
                </p>

                <Link
                  to={way.link}
                  className="mt-7 inline-block rounded-full bg-blue-950 px-6 py-3 font-semibold text-white transition hover:-translate-y-1 hover:bg-blue-900"
                >
                  {way.button} →
                </Link>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* Final CTA */}
      <section className="bg-blue-950 px-6 py-20 text-center text-white">

        <div className="mx-auto max-w-3xl animate-fade-up">

          <div className="text-5xl">❤️</div>

          <h2 className="mt-5 text-3xl font-bold md:text-4xl">
            Together, we can make a difference!
          </h2>

          <p className="mt-5 leading-7 text-blue-100">
            Join us in serving humanity with love, care, and compassion.
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-block rounded-full bg-yellow-400 px-7 py-3 font-semibold text-blue-950 transition hover:-translate-y-1 hover:bg-yellow-300"
          >
            Get Started →
          </Link>

        </div>

      </section>

    </main>
  )
}

export default GetInvolved