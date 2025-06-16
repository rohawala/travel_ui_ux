"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { tripsData } from "../data/tripsData";

const TripsPage = () => {
  const [filters, setFilters] = useState({
    destination: [],
    type: [],
    difficulty: [],
    tag: [],
  });
  const [sortBy, setSortBy] = useState("latest");
  const [visibleCount, setVisibleCount] = useState(5);
  const [filteredTrips, setFilteredTrips] = useState([]);

  useEffect(() => {
    let filtered = tripsData.filter((trip) => {
      const destMatch = !filters.destination.length || filters.destination.includes(trip.destination);
      const typeMatch = !filters.type.length || filters.type.includes(trip.type);
      const diffMatch = !filters.difficulty.length || filters.difficulty.includes(trip.difficulty);
      const tagMatch = !filters.tag.length || filters.tag.some(tag => trip.tags.includes(tag));
      return destMatch && typeMatch && diffMatch && tagMatch;
    });

    if (sortBy === "duration") {
      filtered.sort((a, b) => a.duration - b.duration);
    } else if (sortBy === "price") {
      filtered.sort((a, b) => (a.price || 0) - (b.price || 0));
    }

    setFilteredTrips(filtered);
  }, [filters, sortBy]);

  const handleCheckbox = (field, value) => {
    setFilters(prev => {
      const updated = prev[field].includes(value)
        ? prev[field].filter(v => v !== value)
        : [...prev[field], value];
      return { ...prev, [field]: updated };
    });
  };

  return (
    <div className="flex flex-col lg:flex-row max-w-7xl mx-auto py-12 px-4">
      {/* Criteria Filters */}
      <aside className="w-full lg:w-1/4 pr-6">
        <h3 className="text-lg font-semibold mb-4">Criteria</h3>
        <button onClick={() => setFilters({ destination: [], type: [], difficulty: [], tag: [] })} className="text-sm text-blue-600 mb-6">Clear all</button>

        <FilterSection title="Destination" field="destination" values={["Beyond", "Morocco"]} handleCheckbox={handleCheckbox} filters={filters} />
        <FilterSection title="Trip Types" field="type" values={["Private Tours", "Group Tours", "Special Tours"]} handleCheckbox={handleCheckbox} filters={filters} />
        <FilterSection title="Difficulty" field="difficulty" values={["Easy", "Medium"]} handleCheckbox={handleCheckbox} filters={filters} />
        <FilterSection title="Tags" field="tag" values={["Casablanca to Casablanca", "Casablanca to Marrakech", "Marrakech to Casablanca", "Marrakech to Marrakech", "Tangier to Marrakech"]} handleCheckbox={handleCheckbox} filters={filters} />
      </aside>

      {/* Trips Display */}
      <main className="w-full lg:w-3/4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">{filteredTrips.length} Trips found</h2>
          <select className="ml-2 border px-2 py-1 text-sm" onChange={(e) => setSortBy(e.target.value)}>
            <option value="latest">Latest</option>
            <option value="duration">Duration</option>
            <option value="price">Price</option>
          </select>
        </div>

        <div className="space-y-8">
          {filteredTrips.slice(0, visibleCount).map((tour, index) => (
            <div key={tour.title + index} className="flex flex-col lg:flex-row bg-white shadow-md rounded-lg overflow-hidden">
              <div className="relative w-full lg:w-1/3 h-64">
                <Slideshow images={tour.images} title={tour.title} />
              </div>
              <div className="p-6 flex flex-col justify-between w-full lg:w-2/3">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{tour.title}</h3>
                  <div className="text-sm text-gray-600 mb-1">{tour.route}</div>
                  <div className="text-sm text-gray-600 mb-1">{tour.destination}</div>
                  <div className="text-sm text-gray-600 mb-3">{tour.duration} Days - {tour.nights} Nights</div>
                  <p className="text-sm text-gray-700">{tour.description}</p>
                </div>
                <button className="mt-4 self-start bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700">View Trip</button>
              </div>
            </div>
          ))}

          {visibleCount < filteredTrips.length && (
            <button onClick={() => setVisibleCount(visibleCount + 5)} className="mt-6 bg-gray-200 text-gray-800 px-6 py-2 rounded hover:bg-gray-300">
              Load More
            </button>
          )}
        </div>
      </main>
    </div>
  );
};

const FilterSection = ({ title, field, values, handleCheckbox, filters }) => (
  <div className="mb-6">
    <h4 className="font-medium mb-1">{title}</h4>
    {values.map(value => (
      <label key={value} className="block mt-1">
        <input type="checkbox" className="mr-2" checked={filters[field].includes(value)} onChange={() => handleCheckbox(field, value)} /> {value}
      </label>
    ))}
  </div>
);

const Slideshow = ({ images, title }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images]);

  return (
    <Image
      src={images[index]}
      alt={title}
      fill
      className="object-cover"
    />
  );
};

export default TripsPage;
