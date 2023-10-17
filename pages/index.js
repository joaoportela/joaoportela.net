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
          Software Engineer &nbsp;&bull;&nbsp; 13 years of experience
          &nbsp;&bull;&nbsp; Problem solver
        </p>
        <nav>
          <ul>
            <li>
              <a href="https://github.com/joaoportela/" className="icon"
                target="_blank" rel="noreferrer noopener">
                <FontAwesomeIcon icon={faGithub} />
                <span className="label">Github</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/j-portela"
                className="icon"
                target="_blank" rel="noreferrer noopener"
              >
                <FontAwesomeIcon icon={faLinkedin} />
                <span className="label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="cv_joao_portela.pdf" className="icon"
                target="_blank" rel="noreferrer noopener">
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
          <a href="http://html5up.net" target="_blank" rel="noreferrer noopener">HTML5 UP</a>.
          With 1 icon by{" "}
          <a href="https://www.freepik.com" target="_blank" rel="noreferrer noopener">
            Freepik
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" target="_blank" rel="noreferrer noopener">
            www.flaticon.com
          </a>
        </p>
      </footer>
    </div>
  );
}
