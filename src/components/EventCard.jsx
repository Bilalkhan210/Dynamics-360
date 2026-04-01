const EventCard = ({ event }) => {
  return (
    <div className="border p-4 rounded shadow">
      <h3 className="text-xl font-bold">{event.name}</h3>
      <p>{event.date}</p>
      <p>{event.location}</p>
      <p className="text-sm">{event.description}</p>

      <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
        Register
      </button>
    </div>
  );
};

export default EventCard;