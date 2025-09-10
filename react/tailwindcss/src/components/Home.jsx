export default function HomePage() {
  return (
    <div className="container mx-auto p-4">
      
      {/* Header */}
      <header className="flex flex-col sm:flex-row justify-between items-center mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold">My Website</h1>
        <nav className="flex gap-4 mt-4 sm:mt-0">
          <a href="#" className="text-blue-600 hover:underline">Home</a>
          <a href="#" className="text-blue-600 hover:underline">About</a>
          <a href="#" className="text-blue-600 hover:underline">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center gap-6 mb-12">
        <div className="flex-1">
          <h2 className="text-xl md:text-3xl font-semibold mb-4">
            Welcome to our site
          </h2>
          <p className="text-sm md:text-base text-gray-700">
            This is a responsive website using Tailwind CSS. Resize the window to see changes.
          </p>
        </div>
        <img src="https://picsum.photos/400/300" alt="Hero" className="w-full md:w-1/2 rounded-lg shadow-lg"/>
      </section>

      {/* Cards Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-blue-100 p-4 rounded-lg">Card 1</div>
        <div className="bg-blue-100 p-4 rounded-lg">Card 2</div>
        <div className="bg-blue-100 p-4 rounded-lg">Card 3</div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 mt-12">
        &copy; 2025 My Website. All rights reserved.
      </footer>

    </div>
  );
}
