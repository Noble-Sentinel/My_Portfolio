import "./home.css";
import {
  faShieldHalved,
  faCode,
  faMicrochip,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CERTIFICATIONS } from "../../constants/certifications";

interface HomeSlideProps {
  view: boolean;
}

const ROLES = ["Full-Stack Developer", "Ethical Hacker", "Security & Networking"];

export default function HomeSide({ view }: HomeSlideProps) {
  return (
    <div
      className={`${
        view ? "flex bg-none " : "hidden"
      } lg:flex flex-col items-center w-full max-w-[460px] bg-[#151615] lg:w-[300px] text-[#fff] z-50 relative justify-around h-full`}
    >

      {/* Corner brackets */}
      <span className="hs-corner tl" />
      <span className="hs-corner tr" />
      <span className="hs-corner bl" />
      <span className="hs-corner br" />

      {/* Icons row */}
      <div className="flex gap-4 z-20 relative">
        {[faCode, faShieldHalved, faMicrochip].map((icon, i) => (
          <div key={i} className="hs-icon-box">
            <FontAwesomeIcon icon={icon} />
          </div>
        ))}
      </div>

      {/* Name + title block */}
      <div className="flex flex-col gap-2.5 z-20 relative text-center items-center w-full px-4">
        <div className="animated-line" />

        <h1 className="hs-name">
          Olaegbe Abdul-Rahmon
        </h1>

        <h2 className="hs-subtitle text-[#ffcc00]">
          &gt; FULLSTACK DEV &amp; SECURITY ENG
        </h2>

        {/* Cert badges */}
        <div className="hs-certs">
          {CERTIFICATIONS.map((certification) => (
            <span key={certification.id} className="hs-cert">{certification.badge}</span>
          ))}
        </div>

        {/* Roles */}
        <ul className="hs-roles">
          {ROLES.map((r) => (
            <li key={r} className="hs-role list-style-none">
              <span className="hs-role-dot" />
              {r}
            </li>
          ))}
        </ul>

        <div className="animated-line" />
      </div>

      {/* Cycling tagline */}
      <h3 className="hs-tagline z-50">
        Innovator · Problem Solver · Creative Thinker
      </h3>

      {/* Status indicator */}
      <div className="hs-status z-20">
        <span className="hs-status-dot" />
        AVAILABLE FOR WORK
      </div>
    </div>
  );
}