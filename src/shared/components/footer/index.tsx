import { useEffect, useState } from "react";
import "./footer.scss";

function FooterComponent() {
  const [currentYear, setCurrentYear] = useState<string>();
  useEffect(() => {
    let time = new Date();
    setCurrentYear(time.getFullYear().toString());
  }, []);

  return (
    <footer>
      <div className="container">© Bluedcraft 2012 - {currentYear}</div>
    </footer>
  );
}

export default FooterComponent;
