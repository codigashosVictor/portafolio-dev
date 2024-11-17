// components/Skills.js
export default function Skills() {
  return (
    <section id="skills" className="p-10 text-center">
      <h2 className="text-3xl font-bold mb-4">Habilidades</h2>
      <div className="flex flex-wrap justify-center space-x-2 space-y-2">
        {["JavaScript", "React", "Node.js", "SQL", "Tailwind CSS"].map(
          (skill) => (
            <span key={skill} className="px-4 py-2 bg-gray-900 rounded">
              {skill}
            </span>
          )
        )}
      </div>
    </section>
  );
}
