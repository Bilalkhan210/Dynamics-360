const Navbar = () => {
  return (
    <nav className="flex justify-between p-4 bg-black text-white">
      <h1 className="text-xl font-bold">Eventify</h1>
      <div className="space-x-4">
        <a href="#">Home</a>
        <a href="#">Events</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;