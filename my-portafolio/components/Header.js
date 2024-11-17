// components/Header.js
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-5 bg-gray-800 text-white">
      <h1 className="text-2xl font-bold">My Portfolio</h1>
      <nav className="space-x-4">
        <Link href="#about" className="hover:text-blue-400 transition">
          About
        </Link>
        <Link href="#skills" className="hover:text-blue-400 transition">
          Skills
        </Link>
        <Link href="#projects" className="hover:text-blue-400 transition">
          Projects
        </Link>
        <Link href="#contact" className="hover:text-blue-400 transition">
          Contact
        </Link>
      </nav>
    </header>
  );
}
