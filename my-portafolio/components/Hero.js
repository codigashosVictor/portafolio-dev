export default function Hero() {
  return (
    <section
      id="home"
      className="flex items-center justify-center h-screen bg-cover bg-center bg-hero-pattern"
    >
      <div className="text-center text-white animate-fadeIn">
        <h2 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
          Hi 👋, I'm Victor Gutierrez, I'm a Full-Stack Developer
        </h2>
        <p className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-2xl font-extrabold text-transparent">
          I build responsive and modern web applications
        </p>
      </div>
    </section>
  );
}
