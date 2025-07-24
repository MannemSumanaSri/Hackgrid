// app/page.tsx
import Link from 'next/link'; // Import Link for navigation

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white p-4">
      {/* Main content area */}
      <div className="bg-white text-gray-800 p-8 rounded-lg shadow-xl text-center max-w-2xl w-full">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to Hackgrid!
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Your ultimate platform for learning and teaching.
          Discover a world of courses or share your expertise.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <Link href="/sign-up" passHref>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105">
              Get Started (Sign Up)
            </button>
          </Link>
          <Link href="/sign-in" passHref>
            <button className="bg-purple-700 hover:bg-purple-800 text-white font-semibold py-3 px-6 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105">
              Already a Member? Sign In
            </button>
          </Link>
        </div>

        {/* Optional: Explore Courses section */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-semibold mb-4">Explore Our Courses</h2>
          <p className="text-md text-gray-600 mb-6">
            Dive into a variety of subjects designed to boost your skills.
          </p>
          <Link href="/search" passHref>
            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-5 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105">
              Browse Courses
            </button>
          </Link>
        </div>
      </div>

      {/* Footer or additional information */}
      <footer className="mt-12 text-center text-sm text-white text-opacity-80">
        &copy; {new Date().getFullYear()} Hackgrid. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;