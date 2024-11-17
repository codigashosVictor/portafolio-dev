import Skills from "./Skills.js";
export default function Hero() {
  return (
    <section className="flex flex-col justify-center antialiased bg-gray-900 text-gray-200 min-h-screen">
      <div className="max-w-6xl mx-auto p-4 sm:px-6 h-full">
        <article className="max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
          <a className="relative block group" href="#0">
            <div
              className="absolute inset-0 bg-gray-800 hidden md:block transform md:translate-y-2 md:translate-x-4 xl:translate-y-4 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out pointer-events-none"
              aria-hidden="true"
            ></div>
            <figure className="relative h-0 pb-[56.25%] md:pb-[75%] lg:pb-[56.25%] overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out">
              <img
                className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out brightness-50 hover:brightness-100"
                src="/img/315429975_2204760376363161_3328159286036196521_n.jpg"
                width="540"
                height="303"
                alt="Victor G."
              />
            </figure>
          </a>
          <div>
            <header>
              <Skills />
              <h3 className="text-2xl lg:text-3xl font-bold leading-tight mb-2">
                <a
                  className="hover:text-gray-100 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Hi 👋, I'm Victor Gutierrez
                </a>
              </h3>
            </header>
            <p className="text-lg text-gray-400 flex-grow">
              I'm a Full-Stack Developer, I build responsive and modern web
              applications
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
