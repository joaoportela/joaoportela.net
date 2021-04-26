import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import CvIcon from "@components/CvIcon";

export default function Home() {
  return (
    <div className="container">
      <main>
        <h1 className="title">João Portela</h1>
        <p>
          Software Engineer &nbsp;&bull;&nbsp; 10+ years of experience
          &nbsp;&bull;&nbsp; Enjoys a challenge
        </p>
        <nav>
          <ul>
            <li>
              <a href="https://github.com/joaoportela/" className="icon">
                <FontAwesomeIcon icon={faGithub} />
                <span className="label">Github</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/joao-santos-portela"
                className="icon"
              >
                <FontAwesomeIcon icon={faLinkedin} />
                <span className="label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="cv_joao_portela.pdf" className="icon">
                <CvIcon />
                <span className="label">CV</span>
              </a>
            </li>
          </ul>
        </nav>
      </main>

      <footer>
        <p>
          Design inspired by Aerial from{" "}
          <a href="http://html5up.net">HTML5 UP</a>. With 1 icon by{" "}
          <a href="https://www.freepik.com" title="Freepik">
            Freepik
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </p>
      </footer>
    </div>
  );
}
