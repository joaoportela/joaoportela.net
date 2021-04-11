import { config } from "@fortawesome/fontawesome-svg-core";
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

import Cv1 from '@components/Cv1'
import Cv2 from '@components/Cv2'
import Cv3 from '@components/Cv3'

export default function Home() {
  return (
    <div className="container">
      <main>
        <h1 className="title">João Portela</h1>
        <p>Software Engineer &nbsp;&bull;&nbsp; 10+ years of experience &nbsp;&bull;&nbsp; Likes to be
					challenged</p>
        <nav>
          <ul>
            <li><a href="https://github.com/joaoportela/" className="icon"><FontAwesomeIcon icon={faGithub} /><span className="label">Github</span></a></li>
            <li><a href="https://www.linkedin.com/in/joao-santos-portela" className="icon"><FontAwesomeIcon icon={faLinkedin} /><span className="label">LinkedIn</span></a></li>
            <li><a href="cv_joao_portela.pdf" className="icon"><FontAwesomeIcon icon={faFilePdf} /><span className="label">CV</span></a></li>
            <li><a href="cv_joao_portela.pdf" className="icon"><Cv1 /><span className="label">CV</span></a></li>
            <li><a href="cv_joao_portela.pdf" className="icon"><Cv2 /><span className="label">CV</span></a></li>
            <li><a href="cv_joao_portela.pdf" className="icon"><Cv3 /><span className="label">CV</span></a></li>
          </ul>
        </nav>
      </main>

      <footer>
        <span>Design inspired by Aerial from <a href="http://html5up.net">HTML5 UP</a>.</span>
      </footer>
    </div>
  )
}
