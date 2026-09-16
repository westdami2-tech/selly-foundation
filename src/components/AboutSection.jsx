function AboutSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="max-w-3xl">
          <p className="text-yellow-500 font-semibold mb-3">
            ABOUT US
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-blue-950">
            Serving humanity with love and care.
          </h2>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            Selly Compassionate Care Foundation is a nonprofit organization
            dedicated to providing compassionate care and support to the most
            vulnerable members of our society.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">

          {/* Mission */}
          <div className="bg-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-blue-950">
              Our Mission
            </h3>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Selly Compassionate Care Foundation is dedicated to providing
              comprehensive care, support, and empowerment to indigent and
              vulnerable women, children, youth, and the elderly, promoting
              their overall well-being, dignity, and self-sufficiency.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-yellow-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-blue-950">
              Our Vision
            </h3>

            <p className="mt-4 text-gray-600 leading-relaxed">
              To create a society where everyone has access to:
            </p>

            <ul className="mt-4 space-y-2 text-gray-600">
              <li>• Basic necessities</li>
              <li>• Emotional support</li>
              <li>• Opportunities for growth and development</li>
            </ul>
          </div>

        </div>

        {/* Aim */}
        <div className="mt-6 bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-blue-950">
            Our Aim
          </h3>

          <p className="mt-4 text-gray-600 leading-relaxed max-w-4xl">
            To alleviate deprivation, distress, and inequality among indigent
            and vulnerable women, children, youth, and the elderly by providing
            access to essential services, resources, and opportunities.
          </p>
        </div>

      </div>
    </section>
  )
}

export default AboutSection