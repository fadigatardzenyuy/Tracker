const App = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="bg-blue-600 text-white py-4 px-8 shadow">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold">MySite</h1>
          <nav className="space-x-6">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-4">
        <h2 className="text-5xl font-bold mb-6">Welcome to MySite</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-xl">
          A modern landing page built with React, Tailwind CSS, and TypeScript. Clean, fast, and responsive.
        </p>
        <a
          href="#"
          className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700 transition"
        >
          Get Started
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-6 mt-auto text-center text-sm text-gray-500">
        © 2025 MySite. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
