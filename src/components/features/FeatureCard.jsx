function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800 hover:border-blue-500 transition-all duration-300 hover:-translate-y-2">

      <div className="mb-5">
        <Icon
          size={42}
          className="text-blue-500"
        />
      </div>

      <h3 className="text-xl font-semibold text-white">
        {title}
      </h3>

      <p className="text-gray-400 mt-3 leading-7">
        {description}
      </p>

    </div>
  );
}

export default FeatureCard;