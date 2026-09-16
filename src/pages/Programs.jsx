function Programs() {
  const objectives = [
    {
      number: "01",
      title: "Indigent Women's Empowerment",
      text: "Provide educational support, vocational training, and economic empowerment programs to promote self-sufficiency.",
    },
    {
      number: "02",
      title: "Vulnerable Children's Care",
      text: "Offer food, shelter, clothing, healthcare, and educational support to orphaned, abandoned, or exploited children.",
    },
    {
      number: "03",
      title: "Youth Development",
      text: "Implement programs focusing on education, skills training, mentorship, and leadership development to empower disadvantaged youth.",
    },
    {
      number: "04",
      title: "Elderly Care",
      text: "Provide medical care, emotional support, and social interaction to vulnerable elderly individuals, promoting their dignity and well-being.",
    },
    {
      number: "05",
      title: "Health and Well-being",
      text: "Offer medical care, counseling, and health education to indigent and vulnerable women, children, youth, and the elderly.",
    },
    {
      number: "06",
      title: "Advocacy and Social Justice",
      text: "Advocate for the rights and interests of indigent and vulnerable populations, promoting social justice and equality.",
    },
    {
      number: "07",
      title: "Community Capacity Building",
      text: "Strengthen community resilience by building partnerships, providing training, and supporting community-led initiatives.",
    },
    {
      number: "08",
      title: "Psychological Support",
      text: "Offer counseling, therapy, and emotional support to help indigent and vulnerable women, children, youth, and the elderly cope with trauma and adversity.",
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
            What We Do
          </p>

          <h1 className="mt-3 text-4xl font-bold md:text-5xl">
            Our Programs & Objectives
          </h1>

          <p className="mt-6 text-lg leading-8 text-blue-100">
            Our work is focused on providing care, support, empowerment,
            and opportunities for vulnerable members of society.
          </p>

        </div>
      </section>


      {/* Objectives */}
      <section className="px-6 py-20">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-6 md:grid-cols-2">

            {objectives.map((objective, index) => (
              <article
                key={objective.number}
                className="hover-lift group rounded-2xl border border-slate-100 bg-slate-50 p-7 shadow-sm animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >

                <div className="flex items-start gap-5">

                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-yellow-400 font-bold text-blue-950">
                    {objective.number}
                  </span>

                  <div>
                    <h2 className="text-xl font-bold text-blue-950">
                      {objective.title}
                    </h2>

                    <p className="mt-3 leading-7 text-slate-600">
                      {objective.text}
                    </p>
                  </div>

                </div>

              </article>
            ))}

          </div>

        </div>
      </section>


      {/* CTA */}
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

        </div>

      </section>

    </main>
  )
}

export default Programs