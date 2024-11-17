// components/Skills.js
export default function Skills() {
  const skills = [
    {
      name: "JavaScript",
      icon: "/javascript.svg",
      style:
        "inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out",
    },
    {
      name: "React",
      icon: "/react.svg",
      style:
        "inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out",
    },
    {
      name: "Node.js",
      icon: "/nodejs.svg",
      style:
        "inline-flex text-center text-gray-700 py-1 px-3 rounded-full bg-green-500 hover:bg-green-600 transition duration-150 ease-in-out",
    },
    {
      name: "SQL",
      icon: "/sql.svg",
      style:
        "inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition duration-150 ease-in-out",
    },
    {
      name: "Tailwind CSS",
      icon: "/tailwindcss.svg",
      style:
        "inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-indigo-500 hover:bg-indigo-600 transition duration-150 ease-in-out",
    },
    {
      name: "C# ASP.NET MVC5",
      icon: "/express.svg",
      style:
        "inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-pink-500 hover:bg-pink-600 transition duration-150 ease-in-out",
    },
    {
      name: "Python",
      icon: "/mongodb.svg",
      style:
        "inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-gray-700 hover:bg-gray-800 transition duration-150 ease-in-out",
    },
    {
      name: "Boooststrap",
      icon: "/aws.svg",
      style:
        "inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-800 hover:bg-purple-900 transition duration-150 ease-in-out",
    },
    {
      name: "MQTT",
      icon: "/nextjs.svg",
      style:
        "inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-700 hover:bg-blue-800 transition duration-150 ease-in-out",
    },
    {
      name: "AS400",
      icon: "/docker.svg",
      style:
        "inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-green-700 hover:bg-green-800 transition duration-150 ease-in-out",
    },
    {
      name: "AWS Amplify",
      icon: "/aws-amplify.svg",
      style:
        "inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-red-500 hover:bg-red-600 transition duration-150 ease-in-out",
    },
    {
      name: "Firebase",
      icon: "/firebase.svg",
      style:
        "inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-orange-500 hover:bg-orange-600 transition duration-150 ease-in-out",
    },
    {
      name: "TypeScript",
      icon: "/typescript.svg",
      style:
        "inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-700 hover:bg-purple-800 transition duration-150 ease-in-out",
    },
    {
      name: "NextAuth.js",
      icon: "/nextauthjs.svg",
      style:
        "inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-700 hover:bg-blue-800 transition duration-150 ease-in-out",
    },
    {
      name: "SvelteKit",
      icon: "/sveltekit.svg",
      style:
        "inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-700 hover:bg-purple-800 transition duration-150 ease-in-out",
    },
  ];
  return (
    <section id="skills" className="p-10 text-center">
      <div className="mb-3">
        <ul className="flex flex-wrap text-xs font-medium -m-1">
          {skills.map((skill) => (
            <li className="m-1">
              <a className={skill.style} href="#0">
                {skill.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
