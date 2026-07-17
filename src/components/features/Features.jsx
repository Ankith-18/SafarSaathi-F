import featuresData from "../../data/featuresData";
import FeatureCard from "./FeatureCard";

function Features() {
  return (
    <section
      id="features"
      className="bg-black py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-white">
          Why Choose
          <span className="text-blue-500">
            {" "}SafarSaathi?
          </span>
        </h2>

        <p className="text-gray-400 text-center mt-5 max-w-2xl mx-auto">
          Everything you need to plan,
          organize and enjoy unforgettable journeys.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {featuresData.map((feature) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default Features;