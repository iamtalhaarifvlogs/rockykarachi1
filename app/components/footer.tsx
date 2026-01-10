export default function Footer() {
  return (
    <footer className="border-t border-yellow-500 bg-black mt-16">
      <div className="container mx-auto px-4 py-8 text-center text-gray-400">
        <p className="text-yellow-500 font-semibold mb-2">
          Rocky Escorts Karachi – Premium Escort Services
        </p>

        <p className="mb-2">
          Call / WhatsApp: <span className="text-yellow-400">03708540579</span>
        </p>

        <p className="text-sm">
          © {new Date().getFullYear()} Rocky Escorts Karachi. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

