import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="bg-gray-100  ">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="https://storage.googleapis.com/a1aa/image/3yQkiRbFwKQw6qiIu-g2ZUaRXKMW82MSluD5h-kHFQA.jpg"
              alt="Logo"
              className="h-10"
              width="50"
              height="50"
            />
            <span className="ml-2 text-xl font-bold">Frame</span>
          </div>
          <div className="flex items-center space-x-4">
            <nav className="hidden md:flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Home
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                My Courses
              </a>
            </nav>
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="border rounded-full py-2 px-4 pl-10"
              />
              <i className="fas fa-search absolute left-3 top-2.5 text-gray-400"></i>
            </div>
            <div className="flex items-center space-x-2">
              <img
                src="https://storage.googleapis.com/a1aa/image/qt2T-3YbeJ55dSqYOZzdG6jXHDjBBb1079BdpDeEfZM.jpg"
                alt="User Avatar"
                className="h-10 w-10 rounded-full"
                width="40"
                height="40"
              />
              <span className="text-gray-600">Elise Moreno</span>
            </div>
          </div>
        </div>
      </header>
      {/* Hero Section */}
      <section className="bg-purple-100 py-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <p className="text-gray-600">
              By Themeatbrains in{' '}
              <span className="text-green-500">Inspiration</span>
            </p>
            <h1 className="text-4xl font-bold text-gray-800 mt-2">
              Studying Online is now much easier
            </h1>
            <p className="text-gray-600 mt-4">
              ITEL is an interesting platform that will teach you in more an
              interactive way
            </p>
            <button className="mt-6 bg-green-500 text-white py-2 px-4 rounded-full">
              Start learning now
            </button>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              src="https://storage.googleapis.com/a1aa/image/DpdmPeCT6aPWcQfOx4eNrOIdL1CcxP6uFTbd4nA8cZ4.jpg"
              alt="Studying Online"
              className="rounded-lg shadow-lg"
              width="500"
              height="300"
            />
          </div>
        </div>
      </section>
      {/* Next Lesson Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800">
            Welcome back, ready for your next lesson?
          </h2>
          <a href="#" className="text-green-500">
            View History
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://storage.googleapis.com/a1aa/image/EGUgs-hlwxt3bo2tm_s31rkwvcsyC_sdjLIjpMOqGSc.jpg"
              alt="Web Design"
              className="w-full h-48 object-cover"
              width="300"
              height="200"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800">Web Design</h3>
              <div className="flex items-center mt-2">
                <img
                  src="https://storage.googleapis.com/a1aa/image/1dAz_uHnhCdMOrce89N6VrXbj_4ATnaVfktVXktzJJs.jpg"
                  alt="Elise Moreno"
                  className="h-8 w-8 rounded-full"
                  width="40"
                  height="40"
                />
                <span className="ml-2 text-gray-600">Elise Moreno</span>
              </div>
              <p className="text-gray-500 mt-2">Lesson 1 of 7</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://storage.googleapis.com/a1aa/image/SbkDf8a94m_RqcJwXxzsLjOghvnNjhFREu2B1ImJWhk.jpg"
              alt="Git and Github"
              className="w-full h-48 object-cover"
              width="300"
              height="200"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800">Git and Github</h3>
              <div className="flex items-center mt-2">
                <img
                  src="https://storage.googleapis.com/a1aa/image/1dAz_uHnhCdMOrce89N6VrXbj_4ATnaVfktVXktzJJs.jpg"
                  alt="Elise Moreno"
                  className="h-8 w-8 rounded-full"
                  width="40"
                  height="40"
                />
                <span className="ml-2 text-gray-600">Elise Moreno</span>
              </div>
              <p className="text-gray-500 mt-2">Lesson 3 of 7</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://storage.googleapis.com/a1aa/image/8-Awz4jj1yh86k5F4ZHs51P0VfUWjmfl1p5rN4nm_s0.jpg"
              alt="Font-End Learning"
              className="w-full h-48 object-cover"
              width="300"
              height="200"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800">
                Font-End Learning
              </h3>
              <div className="flex items-center mt-2">
                <img
                  src="https://storage.googleapis.com/a1aa/image/1dAz_uHnhCdMOrce89N6VrXbj_4ATnaVfktVXktzJJs.jpg"
                  alt="Elise Moreno"
                  className="h-8 w-8 rounded-full"
                  width="40"
                  height="40"
                />
                <span className="ml-2 text-gray-600">Elise Moreno</span>
              </div>
              <p className="text-gray-500 mt-2">Lesson 5 of 7</p>
            </div>
          </div>
        </div>
      </section>
      {/* Top Category Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-800">
          Choice favourite course from top category
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center">
              <i className="fas fa-paint-brush text-green-500 text-2xl"></i>
              <h3 className="ml-4 text-lg font-bold text-gray-800">
                UI/UX Design
              </h3>
            </div>
            <p className="text-gray-600 mt-4">
              Learn about color theory, typography, and more to create stunning
              user interfaces.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center">
              <i className="fas fa-code text-blue-500 text-2xl"></i>
              <h3 className="ml-4 text-lg font-bold text-gray-800">
                Web Development
              </h3>
            </div>
            <p className="text-gray-600 mt-4">
              Learn about HTML, CSS, JavaScript, and more to build responsive
              websites.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center">
              <i className="fas fa-laptop-code text-purple-500 text-2xl"></i>
              <h3 className="ml-4 text-lg font-bold text-gray-800">
                Software Engineering
              </h3>
            </div>
            <p className="text-gray-600 mt-4">
              Learn about software development, testing, and more to build
              robust applications.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center">
              <i className="fas fa-lightbulb text-green-500 text-2xl"></i>
              <h3 className="ml-4 text-lg font-bold text-gray-800">
                Tech Entrepreneurship
              </h3>
            </div>
            <p className="text-gray-600 mt-4">
              Learn about starting and running a tech business, from idea to
              execution.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center">
              <i className="fas fa-chart-line text-yellow-500 text-2xl"></i>
              <h3 className="ml-4 text-lg font-bold text-gray-800">
                Digital Marketing & SEO
              </h3>
            </div>
            <p className="text-gray-600 mt-4">
              Learn about digital marketing strategies, SEO techniques, and more
              to grow your online presence.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center">
              <i className="fas fa-brain text-red-500 text-2xl"></i>
              <h3 className="ml-4 text-lg font-bold text-gray-800">
                Computer Vision & AI
              </h3>
            </div>
            <p className="text-gray-600 mt-4">
              Learn about computer vision, machine learning, and more to build
              intelligent systems.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center">
              <i className="fas fa-gamepad text-gray-500 text-2xl"></i>
              <h3 className="ml-4 text-lg font-bold text-gray-800">
                Game Development
              </h3>
            </div>
            <p className="text-gray-600 mt-4">
              Learn about game design, programming, and more to create engaging
              games.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center">
              <i className="fas fa-project-diagram text-blue-500 text-2xl"></i>
              <h3 className="ml-4 text-lg font-bold text-gray-800">
                IT Project Management
              </h3>
            </div>
            <p className="text-gray-600 mt-4">
              Learn about project management methodologies, tools, and more to
              lead successful IT projects.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto p-4">
        {/* Recommended for you section */}
        <div className="bg-blue-100 p-6 rounded-lg mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Recommended for you</h2>
            <a className="text-teal-500" href="#">
              See all
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img
                alt="A person studying with a laptop"
                className="rounded-t-lg mb-4"
                height="400"
                src="https://storage.googleapis.com/a1aa/image/w5Z6W788YJ4q3lsoRQICr0JJ5RT6KHJ09VL0BJdrtNI.jpg"
                width="600"
              />
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-500">Design</span>
                <span className="text-sm text-gray-500">3 Months</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">
                AWS Certified solutions Architect
              </h3>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <img
                    alt="Instructor's profile picture"
                    className="w-8 h-8 rounded-full mr-2"
                    height="100"
                    src="https://storage.googleapis.com/a1aa/image/zBpDmmJ3ONIqJ7KpIbEKwuYGL5ovj8QQp-y9PsJmy4U.jpg"
                    width="100"
                  />
                  <span className="text-gray-700">Lina</span>
                </div>
                <span className="text-teal-500 font-semibold">$80</span>
              </div>
            </div>
            {/* Repeat the card structure for other cards */}
            {/* Card 2 */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img
                alt="A person studying with a laptop"
                className="rounded-t-lg mb-4"
                height="400"
                src="https://storage.googleapis.com/a1aa/image/w5Z6W788YJ4q3lsoRQICr0JJ5RT6KHJ09VL0BJdrtNI.jpg"
                width="600"
              />
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-500">Design</span>
                <span className="text-sm text-gray-500">3 Months</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">
                AWS Certified solutions Architect
              </h3>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <img
                    alt="Instructor's profile picture"
                    className="w-8 h-8 rounded-full mr-2"
                    height="100"
                    src="https://storage.googleapis.com/a1aa/image/zBpDmmJ3ONIqJ7KpIbEKwuYGL5ovj8QQp-y9PsJmy4U.jpg"
                    width="100"
                  />
                  <span className="text-gray-700">Lina</span>
                </div>
                <span className="text-teal-500 font-semibold">$80</span>
              </div>
            </div>
            {/* Card 3 */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img
                alt="A person studying with a laptop"
                className="rounded-t-lg mb-4"
                height="400"
                src="https://storage.googleapis.com/a1aa/image/w5Z6W788YJ4q3lsoRQICr0JJ5RT6KHJ09VL0BJdrtNI.jpg"
                width="600"
              />
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-500">Design</span>
                <span className="text-sm text-gray-500">3 Months</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">
                AWS Certified solutions Architect
              </h3>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <img
                    alt="Instructor's profile picture"
                    className="w-8 h-8 rounded-full mr-2"
                    height="100"
                    src="https://storage.googleapis.com/a1aa/image/zBpDmmJ3ONIqJ7KpIbEKwuYGL5ovj8QQp-y9PsJmy4U.jpg"
                    width="100"
                  />
                  <span className="text-gray-700">Lina</span>
                </div>
                <span className="text-teal-500 font-semibold">$80</span>
              </div>
            </div>
            {/* Card 4 */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img
                alt="A person studying with a laptop"
                className="rounded-t-lg mb-4"
                height="400"
                src="https://storage.googleapis.com/a1aa/image/w5Z6W788YJ4q3lsoRQICr0JJ5RT6KHJ09VL0BJdrtNI.jpg"
                width="600"
              />
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-500">Design</span>
                <span className="text-sm text-gray-500">3 Months</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">
                AWS Certified solutions Architect
              </h3>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <img
                    alt="Instructor's profile picture"
                    className="w-8 h-8 rounded-full mr-2"
                    height="100"
                    src="https://storage.googleapis.com/a1aa/image/zBpDmmJ3ONIqJ7KpIbEKwuYGL5ovj8QQp-y9PsJmy4U.jpg"
                    width="100"
                  />
                  <span className="text-gray-700">Lina</span>
                </div>
                <span className="text-teal-500 font-semibold">$80</span>
              </div>
            </div>
          </div>
        </div>
        {/* Get choice of your course section */}
        <div className="bg-white p-6 rounded-lg mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Get choice of your course</h2>
            <a className="text-teal-500" href="#">
              See all
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img
                alt="A person studying with a laptop"
                className="rounded-t-lg mb-4"
                height="400"
                src="https://storage.googleapis.com/a1aa/image/w5Z6W788YJ4q3lsoRQICr0JJ5RT6KHJ09VL0BJdrtNI.jpg"
                width="600"
              />
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-500">Design</span>
                <span className="text-sm text-gray-500">3 Months</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">
                AWS Certified solutions Architect
              </h3>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <img
                    alt="Instructor's profile picture"
                    className="w-8 h-8 rounded-full mr-2"
                    height="100"
                    src="https://storage.googleapis.com/a1aa/image/zBpDmmJ3ONIqJ7KpIbEKwuYGL5ovj8QQp-y9PsJmy4U.jpg"
                    width="100"
                  />
                  <span className="text-gray-700">Lina</span>
                </div>
                <span className="text-teal-500 font-semibold">$80</span>
              </div>
            </div>
            {/* Repeat the card structure for other cards */}
            {/* Card 2 */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img
                alt="A person studying with a laptop"
                className="rounded-t-lg mb-4"
                height="400"
                src="https://storage.googleapis.com/a1aa/image/w5Z6W788YJ4q3lsoRQICr0JJ5RT6KHJ09VL0BJdrtNI.jpg"
                width="600"
              />
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-500">Design</span>
                <span className="text-sm text-gray-500">3 Months</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">
                AWS Certified solutions Architect
              </h3>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <img
                    alt="Instructor's profile picture"
                    className="w-8 h-8 rounded-full mr-2"
                    height="100"
                    src="https://storage.googleapis.com/a1aa/image/zBpDmmJ3ONIqJ7KpIbEKwuYGL5ovj8QQp-y9PsJmy4U.jpg"
                    width="100"
                  />
                  <span className="text-gray-700">Lina</span>
                </div>
                <span className="text-teal-500 font-semibold">$80</span>
              </div>
            </div>
            {/* Card 3 */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img
                alt="A person studying with a laptop"
                className="rounded-t-lg mb-4"
                height="400"
                src="https://storage.googleapis.com/a1aa/image/w5Z6W788YJ4q3lsoRQICr0JJ5RT6KHJ09VL0BJdrtNI.jpg"
                width="600"
              />
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-500">Design</span>
                <span className="text-sm text-gray-500">3 Months</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">
                AWS Certified solutions Architect
              </h3>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <img
                    alt="Instructor's profile picture"
                    className="w-8 h-8 rounded-full mr-2"
                    height="100"
                    src="https://storage.googleapis.com/a1aa/image/zBpDmmJ3ONIqJ7KpIbEKwuYGL5ovj8QQp-y9PsJmy4U.jpg"
                    width="100"
                  />
                  <span className="text-gray-700">Lina</span>
                </div>
                <span className="text-teal-500 font-semibold">$80</span>
              </div>
            </div>
            {/* Card 4 */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img
                alt="A person studying with a laptop"
                className="rounded-t-lg mb-4"
                height="400"
                src="https://storage.googleapis.com/a1aa/image/w5Z6W788YJ4q3lsoRQICr0JJ5RT6KHJ09VL0BJdrtNI.jpg"
                width="600"
              />
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-500">Design</span>
                <span className="text-sm text-gray-500">3 Months</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">
                AWS Certified solutions Architect
              </h3>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <img
                    alt="Instructor's profile picture"
                    className="w-8 h-8 rounded-full mr-2"
                    height="100"
                    src="https://storage.googleapis.com/a1aa/image/zBpDmmJ3ONIqJ7KpIbEKwuYGL5ovj8QQp-y9PsJmy4U.jpg"
                    width="100"
                  />
                  <span className="text-gray-700">Lina</span>
                </div>
                <span className="text-teal-500 font-semibold">$80</span>
              </div>
            </div>
          </div>
        </div>
        {/* Online coaching section */}
        <div className="bg-indigo-900 text-white p-8 rounded-lg text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Online coaching lessons for remote learning.
          </h2>
          <p className="mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor Lorem ipsum dolor sitamet, consectetur adipiscing
            elit, sed do eiusmod tempor
          </p>
          <a className="bg-teal-500 text-white py-2 px-4 rounded-full" href="#">
            Start learning now
          </a>
        </div>
      </div>



      <div className="container mx-auto px-4 py-8">
        {/* Section 1 */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">The course in personal development</h2>
            <a className="text-teal-500" href="#">See all</a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://storage.googleapis.com/a1aa/image/0icL3J1fJo85d9xPs_ZG-ebOQKkZcjUkbFGcg3KmQVE.jpg"
                alt="Course image"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">AWS Certified solutions Architect</h3>
                <p className="text-gray-600 text-sm mt-2">
                  Learn from global experts and get certified. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <div className="flex items-center mt-4">
                  <img
                    src="https://storage.googleapis.com/a1aa/image/EAQTjTUrzITjcfTuJTftsArdrcsgjIc-_182aenWc54.jpg"
                    alt="Instructor image"
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="ml-2 text-gray-700">Uke</span>
                  <span className="ml-auto text-teal-500 font-semibold">$50</span>
                </div>
              </div>
            </div>
            {/* Repeat the above card structure for other cards */}
          </div>
        </div>
        {/* Section 2 */}
        <div className="mb-8 bg-blue-50 p-6 rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Student are viewing</h2>
            <a className="text-teal-500" href="#">See all</a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://storage.googleapis.com/a1aa/image/0icL3J1fJo85d9xPs_ZG-ebOQKkZcjUkbFGcg3KmQVE.jpg"
                alt="Course image"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">AWS Certified solutions Architect</h3>
                <p className="text-gray-600 text-sm mt-2">
                  Learn from global experts and get certified. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <div className="flex items-center mt-4">
                  <img
                    src="https://storage.googleapis.com/a1aa/image/EAQTjTUrzITjcfTuJTftsArdrcsgjIc-_182aenWc54.jpg"
                    alt="Instructor image"
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="ml-2 text-gray-700">Uke</span>
                  <span className="ml-auto text-teal-500 font-semibold">$50</span>
                </div>
              </div>
            </div>
            {/* Repeat the above card structure for other cards */}
          </div>
        </div>
        {/* Footer */}
        <footer className="bg-gray-900 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center mb-6">
              <div className="flex items-center mb-4 md:mb-0">
                <img
                  src="https://storage.googleapis.com/a1aa/image/19K5oy8w17XDWMHPm1CxBSwYKyfKVc7bnBM1Yto3BIc.jpg"
                  alt="Logo"
                  className="w-10 h-10"
                />
                <span className="ml-2 text-lg font-semibold">Virtual Class for Zoom</span>
              </div>
              <div className="flex items-center">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="px-4 py-2 rounded-l-lg focus:outline-none"
                />
                <button className="bg-teal-500 text-white px-4 py-2 rounded-r-lg">Subscribe</button>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center text-sm">
              <div className="flex space-x-4 mb-4 md:mb-0">
                <a href="#" className="hover:underline">Careers</a>
                <a href="#" className="hover:underline">Privacy Policy</a>
                <a href="#" className="hover:underline">Terms &amp; Conditions</a>
              </div>
              <div>© 2023 Class Technologies Inc.</div>
            </div>
          </div>
        </footer>
      </div>
    </div>




    
  );
};

export default App;