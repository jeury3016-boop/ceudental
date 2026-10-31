import { useContext } from "react";
import { IdiomaContext } from "../context/IdiomaContext";

function Footer() {
  const { t } = useContext(IdiomaContext);

  return (
    <footer>
      <p>{t.pie}</p>
    </footer>
  );
}

export default Footer;
