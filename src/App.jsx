import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import EventCard from "./components/EventCard";
import eventsData from "./data/events";

function App() {
  const [search, setSearch] = useState("");

  const filteredEvents = eventsData.filter((event) =>
    event.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <Hero />

      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Featured Events</h2>

        {/* Search Bar (Bonus) */}
        <input
          type="text"
          placeholder="Search events..."
          className="border p-2 mb-4 w-full"
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="grid md:grid-cols-3 gap-4">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;