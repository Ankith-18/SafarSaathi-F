function Hero() {
  return (
    <section className="min-h-screen bg-black text-white flex flex-col justify-center items-center text-center">
      <h1 className="text-6xl font-bold text-blue-500">
        Travel Together.
      </h1>

      <h1 className="text-6xl font-bold">
        Travel Smarter.
      </h1>

      <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
        Powered by AI.
      </h2>

      <p className="mt-6 max-w-xl text-gray-300">
        AI-powered travel companion that helps you plan trips,
        discover amazing places, and connect with fellow travelers.
      </p>

      <div className="mt-8 flex gap-4">
        <button className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700">
          Get Started
        </button>

        <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black">
          Learn More
        </button>
      </div>
    </section>
  );
}

export default Hero;