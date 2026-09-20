import "./footer.scss";

function FooterComponent() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="container">© Bluedcraft 2012 - {currentYear}</div>
    </footer>
  );
}

export default FooterComponent;
