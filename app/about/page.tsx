"use client"

export default function AboutPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-800">About Morocco Immersion</h1>
      
      <p className="text-lg text-gray-700 mb-6">
        Welcome to Morocco – a land of stunning contrasts, rich heritage, and unforgettable journeys. From the Atlantic coastline to the golden Sahara, our tours are designed to immerse you in the heart of Moroccan culture and landscapes.
      </p>

      <div className="space-y-4 text-gray-800">
        <p><strong>Day 1:</strong> Arrival in Casablanca. Settle into your hotel and explore the magnificent Hassan II Mosque overlooking the Atlantic Ocean.</p>
        <p><strong>Day 2:</strong> Travel from Casablanca to Rabat and onward to Fes, with stops at key imperial landmarks.</p>
        <p><strong>Day 3:</strong> Discover the ancient Fes Medina – a vibrant maze of souks, artisan quarters, and historical treasures.</p>
        <p><strong>Day 4:</strong> Drive through the Atlas Mountains to magical Marrakech.</p>
        <p><strong>Day 5:</strong> Explore Marrakech – visit Bahia Palace, Jemaa el-Fna, souks, gardens, and more.</p>
        <p><strong>Day 6:</strong> Return to Casablanca for departure, filled with lasting memories of Morocco.</p>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">Why Choose Us?</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Expert local guides passionate about Morocco's heritage</li>
          <li>Immersive experiences in imperial cities and the Sahara</li>
          <li>Comfortable, curated itineraries with flexibility</li>
          <li>Authentic food, culture, and storytelling</li>
        </ul>
      </div>

      <div className="mt-10 text-center">
        <p className="text-sm text-gray-500">Need help planning? Contact us anytime at <a className="text-blue-600" href="mailto:Contact@bravodriver.ma">Contact@bravodriver.ma</a></p>
        <p className="text-sm text-gray-500">Visit: <a className="text-blue-600" href="http://www.bravodriver.ma" target="_blank">www.bravodriver.ma</a></p>
      </div>
    </section>
  );
}
