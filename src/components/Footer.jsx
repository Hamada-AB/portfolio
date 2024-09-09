export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>&copy; Hamada Abdelaal {currentYear}</p>
      <p>Made with ❤️. All rights reserved</p>
    </footer>
  );
}
