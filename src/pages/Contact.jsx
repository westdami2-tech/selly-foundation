import { useState } from "react"

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="bg-white">

      {/* Header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700 px-6 py-24 text-center text-white">

        <div className="absolute -left-20 top-10 h-64 w-64 animate-float rounded-full bg-yellow-400/10 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-72 w-72 animate-float rounded-full bg-white/10 blur-3xl" />

        <div className="relative mx-auto max-w-3xl animate-fade-up">

          <p className="font-semibold uppercase tracking-[0.2em] text-yellow-400">
            Contact Us
          </p>

          <h1 className="mt-3 text-4xl font-bold md:text-5xl">
            We'd Love to Hear From You
          </h1>

          <p className="mt-6 text-lg leading-8 text-blue-100">
            Have a question, want to volunteer, or would like to support
            our mission? Get in touch with us.
          </p>

        </div>
      </section>


      {/* Contact Content */}
      <section className="px-6 py-20">

        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">

          {/* Contact Information */}
          <div className="animate-fade-up">

            <p className="font-semibold uppercase tracking-widest text-yellow-500">
              Get In Touch
            </p>

            <h2 className="mt-3 text-3xl font-bold text-blue-950">
              Let's connect
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Whether you want to learn more about our work, volunteer,
              support our cause, or partner with us, we'd be happy to
              hear from you.
            </p>

            <div className="mt-8 space-y-4">

              <div className="hover-lift rounded-2xl bg-slate-50 p-5">
                <p className="text-sm font-semibold text-yellow-600">
                  Email
                </p>
                <p className="mt-1 text-slate-500">
                  Contact details coming soon
                </p>
              </div>

              <div className="hover-lift rounded-2xl bg-slate-50 p-5">
                <p className="text-sm font-semibold text-yellow-600">
                  Phone
                </p>
                <p className="mt-1 text-slate-500">
                  Contact details coming soon
                </p>
              </div>

              <div className="hover-lift rounded-2xl bg-slate-50 p-5">
                <p className="text-sm font-semibold text-yellow-600">
                  Location
                </p>
                <p className="mt-1 text-slate-500">
                  Location details coming soon
                </p>
              </div>

            </div>
          </div>


          {/* Contact Form */}
          <div className="rounded-3xl border border-slate-100 bg-slate-50 p-7 shadow-sm animate-fade-up">

            <h2 className="text-2xl font-bold text-blue-950">
              Send Us a Message
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Fill in the form below and we'll get back to you.
            </p>

            <form onSubmit={handleSubmit} className="mt-7 space-y-5">

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Name
                </label>

                <input
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-yellow-400"
                />
              </div>


              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Email
                </label>

                <input
                  type="email"
                  required
                  placeholder="Your email"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-yellow-400"
                />
              </div>


              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Message
                </label>

                <textarea
                  required
                  rows="5"
                  placeholder="How can we help?"
                  className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-yellow-400"
                />
              </div>


              <button
                type="submit"
                className="w-full rounded-full bg-blue-950 px-6 py-3 font-semibold text-white transition hover:-translate-y-1 hover:bg-blue-900"
              >
                Send Message →
              </button>

              {submitted && (
                <p className="rounded-xl bg-green-50 p-3 text-center text-sm font-medium text-green-700 animate-fade-in">
                  Thanks for reaching out. Your message has been received.
                </p>
              )}

            </form>

          </div>

        </div>
      </section>


      {/* CTA */}
      <section className="bg-blue-950 px-6 py-20 text-center text-white">

        <div className="mx-auto max-w-3xl animate-fade-up">

          <h2 className="text-3xl font-bold md:text-4xl">
            Serving Humanity with Love and Care, Every Step
          </h2>

          <p className="mt-5 leading-7 text-blue-100">
            Together, we can make a difference.
          </p>

        </div>

      </section>

    </main>
  )
}

export default Contact