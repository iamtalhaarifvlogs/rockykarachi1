import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-yellow-500 bg-black">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold text-yellow-500"
        >
          Rocky Escorts Karachi
        </Link>

        <nav className="space-x-6 text-gray-300">
          <Link href="/" className="hover:text-yellow-400">
            Home
          </Link>
          <Link href="/#services" className="hover:text-yellow-400">
            Services
          </Link>
          <Link href="/#contact" className="hover:text-yellow-400">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

