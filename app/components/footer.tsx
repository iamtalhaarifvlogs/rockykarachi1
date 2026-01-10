export default function Footer() {
  return (
    <footer className="bg-black border-t border-yellow-500/30">
      <div className="container mx-auto px-4 py-10 text-center">
        <p className="text-yellow-500 font-semibold text-lg mb-2">
          Rocky Escorts Karachi
        </p>

        <p className="text-gray-400 mb-2">
          Call / WhatsApp: <span className="text-yellow-400">03708540579</span>
        </p>

        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Rocky Escorts Karachi. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
