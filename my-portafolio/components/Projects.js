// components/Projects.js
export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-10">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Project Card */}
          <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300">
            <img src="/project1.png" alt="Project 1" className="rounded-t-lg" />
            <div className="p-6">
              <h3 className="text-xl font-semibold">Project 1</h3>
              <p className="text-gray-600">A description of the project.</p>
            </div>
          </div>
          {/* Repeat for other projects */}
        </div>
      </div>
    </section>
  );
}
