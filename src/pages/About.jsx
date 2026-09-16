function About() {
  return (
    <main className="bg-white">

      {/* Header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700 px-6 py-24 text-center text-white">

        <div className="absolute -left-20 top-10 h-64 w-64 animate-float rounded-full bg-yellow-400/10 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-72 w-72 animate-float rounded-full bg-white/10 blur-3xl" />

        <div className="relative mx-auto max-w-3xl animate-fade-up">

          <p className="font-semibold uppercase tracking-[0.2em] text-yellow-400">
            About Us
          </p>

          <h1 className="mt-3 text-4xl font-bold md:text-5xl">
            Selly Compassionate Care Foundation
          </h1>

          <p className="mt-6 text-lg leading-8 text-blue-100">
            Serving Humanity with Love and Care, Every Step
          </p>

        </div>
      </section>


      {/* Introduction */}
      <section className="px-6 py-20">

        <div className="mx-auto max-w-4xl animate-fade-up">

          <p className="font-semibold uppercase tracking-widest text-yellow-500">
            Who We Are
          </p>

          <h2 className="mt-3 text-3xl font-bold text-blue-950">
            Introducing Selly Compassionate Care Foundation (Incorporated)
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            We are thrilled to announce the launch of Selly Compassionate
            Care Foundation, a nonprofit organization dedicated to providing
            compassionate care and support to the most vulnerable members
            of our society.
          </p>

        </div>
      </section>


      {/* Mission & Vision */}
      <section className="bg-slate-50 px-6 py-20">

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">

          {/* Mission */}
          <div className="hover-lift rounded-2xl bg-white p-8 shadow-sm animate-fade-up">

            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-yellow-400 text-2xl">
              🎯
            </div>

            <h2 className="text-2xl font-bold text-blue-950">
              Our Mission Statement
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Selly Compassionate Care Foundation is dedicated to providing
              comprehensive care, support, and empowerment to indigent and
              vulnerable women, children, youth, and the elderly, promoting
              their overall well-being, dignity, and self-sufficiency.
            </p>

          </div>


          {/* Vision */}
          <div
            className="hover-lift rounded-2xl bg-white p-8 shadow-sm animate-fade-up"
            style={{ animationDelay: "150ms" }}
          >

            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-yellow-400 text-2xl">
              👁️
            </div>

            <h2 className="text-2xl font-bold text-blue-950">
              Our Vision
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              To create a society where everyone has access to:
            </p>

            <ul className="mt-4 space-y-3 text-slate-600">
              <li>• Basic necessities</li>
              <li>• Emotional support</li>
              <li>• Opportunities for growth and development</li>
            </ul>

          </div>

        </div>
      </section>


      {/* Aim */}
      <section className="px-6 py-20">

        <div className="mx-auto max-w-4xl rounded-3xl bg-blue-950 p-8 text-white shadow-xl md:p-12 animate-fade-up">

          <p className="font-semibold uppercase tracking-widest text-yellow-400">
            Our Aim
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Creating access to essential support and opportunities
          </h2>

          <p className="mt-6 text-lg leading-8 text-blue-100">
            To alleviate deprivation, distress, and inequality among
            indigent and vulnerable women, children, youth, and the elderly
            by providing access to essential services, resources, and
            opportunities.
          </p>

        </div>

      </section>

    </main>
  )
}

export default About