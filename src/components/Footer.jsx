export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>&copy; Hamada Abdelaal {currentYear}</p>
    </footer>
  );
}
