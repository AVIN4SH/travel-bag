export default function Footer() {
  return (
    <footer className="sm:w-[75vw]">
      <small>&copy; {new Date().getFullYear()} Travel Bag</small>
      <p>
        Version <span className="font-bold">1.5</span>
      </p>
    </footer>
  );
}
