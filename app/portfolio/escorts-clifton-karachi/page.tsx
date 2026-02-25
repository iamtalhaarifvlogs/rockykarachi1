import Link from "next/link";

export const metadata = {
  title:
    "Premium Escorts in Clifton Karachi | Top-Rated Elite Escorts in Karachi",
  description:
    "Discover top-rated Clifton escorts in Karachi offering professional, discreet, and elite companionship. Explore our premium escort gallery and book the best escorts in Clifton now.",
};

export default function Page() {
  const images = ["/nm1.jpg", "/nm2.jpg", "/nm3.jpg", "/nm4.jpg"];

  return (
    <main className="bg-[#FFECE8] text-[#222222]">
      {/* Hero Section */}
      <section
        className="w-full h-[500px] relative bg-cover bg-center"
        style={{ backgroundImage: "url('/herobg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center px-4">
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold text-center leading-tight">
            Premium Escorts in Clifton Karachi – Call Now 03708540579
          </h1>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="max-w-5xl mx-auto px-6 py-12 text-center">
        <h2 className="text-4xl font-semibold mb-4 text-[#D6336C]">
          Explore Top-Rated Escorts in Clifton Karachi
        </h2>
        <p className="text-lg leading-relaxed text-[#333333] mb-6">
          Welcome to the most trusted **escort services in Clifton Karachi**. Our
          elite companions offer premium **Karachi escort experiences**, ensuring
          luxury, discretion, and professionalism. Whether you are searching for
          **premium female escorts in Clifton**, **elite VIP companionship**, or
          **discreet high-end escort services**, we have the right match for you.
        </p>
        <p className="text-lg leading-relaxed text-[#333333] mb-6">
          Our **Clifton escorts** specialize in offering personalized experiences
          for clients seeking **high-class companionship in Karachi**, **top-rated
          premium escorts**, **exclusive companionship for events**, and **luxury
          escort services near Clifton**.
        </p>
        <p className="text-lg leading-relaxed text-[#333333]">
          Discover **Karachi elite escorts**, **top escort agencies in Clifton**,
          **professional female escorts**, **VIP escort bookings in Clifton Karachi**,
          and **trusted escorts near me in Karachi**. Our portfolio is designed for
          clients looking for **discreet, safe, and sophisticated escort services**.
        </p>
      </section>

      {/* Photo Gallery */}
      <section className="bg-white py-12 px-6">
        <h3 className="text-3xl text-center font-semibold mb-8 text-[#D6336C]">
          Clifton Escorts Gallery – Visual Portfolio
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((img, idx) => (
            <div key={idx} className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={img}
                alt={`Clifton Escort ${idx + 1} - Premium Elite Companion Karachi`}
                className="object-cover w-full h-[300px] transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Services & Features Section */}
      <section className="max-w-4xl mx-auto px-4 py-12 text-[#222222]">
        <h2 className="text-3xl font-semibold mb-4">
          Why Choose Our Escorts in Clifton Karachi
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          Our **Clifton escort agency** provides unmatched services with elite
          companions who are professional, courteous, and discreet. We cater to
          clients seeking **top escorts in Clifton Karachi**, **high-class VIP
          escorts**, **female companions for events**, and **exclusive companionship
          near me in Karachi**.
        </p>
        <ul className="list-disc list-inside mt-4 space-y-2 text-lg">
          <li>Premium and professional escorts in Clifton Karachi</li>
          <li>VIP and elite escort services for private events</li>
          <li>Discreet and safe companionship for top clients in Karachi</li>
          <li>Personalized experiences tailored to your preferences</li>
          <li>Trusted and highly-rated escorts with proven client satisfaction</li>
          <li>Easy booking of top female escorts in Clifton Karachi</li>
          <li>Exclusive access to luxury escorts in Karachi</li>
          <li>Escorts available for dinners, parties, or private meetings</li>
          <li>Elite companions providing sophisticated and memorable experiences</li>
          <li>High-end Karachi escort services for elite clientele</li>
        </ul>
      </section>

      {/* Additional SEO & Benefits Section */}
      <section className="bg-[#FFF0F2] py-12 px-6 text-center">
        <h3 className="text-3xl font-semibold mb-6 text-[#D6336C]">
          Experience Elite Escort Services in Clifton Karachi
        </h3>
        <p className="text-lg leading-relaxed max-w-3xl mx-auto mb-4">
          Booking a **premium escort in Clifton Karachi** ensures a luxurious and
          memorable experience. Our companions are skilled in providing
          **discreet VIP escort services**, **professional companionship**, and
          **top-rated elite female escorts**.
        </p>
        <p className="text-lg leading-relaxed max-w-3xl mx-auto">
          Other popular searches we cover include: **Clifton Karachi escorts near me**, 
          **VIP female escorts Karachi**, **high-end escort services in Karachi**, 
          **Karachi luxury escorts**, **professional escort agency Clifton**, 
          **elite companions for hire in Karachi**, **trusted escorts in Clifton**, 
          **exclusive escort experiences Karachi**, **top-rated escorts near Clifton**, 
          **Karachi private escort services**, **premium companionship in Clifton**, 
          **female VIP escort booking Karachi**, **escort gallery Clifton Karachi**, 
          **high-class female escorts Karachi**, **elite companionship services**, 
          **discreet escort agency Karachi**, **luxury female companions Clifton**, 
          **top escort agency in Karachi**, **Clifton escort portfolio**, **elite Karachi escorts**, 
          **premium escort services Karachi**, **VIP escorts in Clifton Karachi**, 
          **professional female companions Karachi**, **trusted VIP escorts**, **Karachi elite escort agency**, 
          **top luxury escorts Karachi**, **Clifton high-class escorts**, **female escort booking Karachi**, 
          **private escort services Clifton**, **Karachi top-rated escort portfolio**, 
          **elite escorts for hire Karachi**, **discreet premium escorts Clifton**, 
          **Clifton VIP escort services**, **luxury companionship Karachi**, **top professional escorts Clifton**, 
          **Karachi escort agency portfolio**, **elite female companionship Clifton**, 
          **trusted high-end escorts Karachi**, **Clifton Karachi elite escort services**.
        </p>
      </section>

      {/* Call To Action */}
      <section className="bg-[#D6336C] text-white py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Book Your Preferred Escort in Clifton Karachi Today
        </h2>
        <p className="text-lg mb-6">
          Contact us now to reserve your **elite escort in Clifton Karachi** and enjoy
          a luxurious, safe, and unforgettable experience.
        </p>
        <Link
          href="/contact"
          className="bg-white text-[#D6336C] font-semibold px-8 py-3 rounded-md shadow-md hover:bg-gray-100 transition"
        >
          Contact Us
        </Link>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-[#555555]">
        © {new Date().getFullYear()} Clifton Escorts Karachi. All Rights Reserved.
      </footer>
    </main>
  );
}