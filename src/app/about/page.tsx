import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaVuejs,
  FaPython, FaLinux, FaGithub,
} from "react-icons/fa";
import {
  SiTypescript, SiThreedotjs, SiNextdotjs,
  SiFirebase, SiTailwindcss, SiWagmi,
  SiKalilinux, SiCisco,
} from "react-icons/si";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldHalved, faNetworkWired, faCode,
} from "@fortawesome/free-solid-svg-icons";
import { CERTIFICATIONS } from "../../constants/certifications";

const TECH = [
  { Icon: FaHtml5,       name: "HTML5",       color: "#e34f26" },
  { Icon: FaCss3Alt,     name: "CSS3",        color: "#264de4" },
  { Icon: FaJs,          name: "JavaScript",  color: "#f0db4f" },
  { Icon: SiTypescript,  name: "TypeScript",  color: "#3178c6" },
  { Icon: FaReact,       name: "React",       color: "#61dafb" },
  { Icon: FaVuejs,       name: "Vue.js",      color: "#42b883" },
  { Icon: SiNextdotjs,   name: "Next.js",     color: "#ffffff" },
  { Icon: SiTailwindcss, name: "Tailwind",    color: "#38bdf8" },
  { Icon: SiFirebase,    name: "Firebase",    color: "#ffca28" },
  { Icon: SiThreedotjs,  name: "Three.js",    color: "#ffffff" },
  { Icon: SiWagmi,       name: "Wagmi",       color: "#3c73a8" },
  { Icon: FaPython,      name: "Python",      color: "#3572A5" },
  { Icon: FaLinux,       name: "Linux",       color: "#e95420" },
  { Icon: FaGithub,      name: "GitHub",      color: "#ffffff" },
];

const TOOLS = [
  { Icon: SiKalilinux, name: "Kali Linux",           desc: "Penetration testing OS",              tag: "Ethical Hacking", color: "#557C94" },
  { Icon: SiCisco,     name: "Cisco Packet Tracer",  desc: "Network simulation & design",         tag: "Networking",      color: "#1ba0d7" },
  { Icon: FaPython,    name: "Python",               desc: "Scripting & security automation",     tag: "Scripting",       color: "#3572A5" },
  { Icon: FaLinux,     name: "Linux",                desc: "System administration & CLI",         tag: "OS",              color: "#e95420" },
  { Icon: FaGithub,    name: "GitHub",               desc: "Version control & open source",       tag: "DevOps",          color: "#ffffff" },
];

export default function AboutPage() {
  return (
    <div className="text-white bg-[#151615] flex flex-col items-center gap-7 pt-[90px] w-full h-full max-w-[460px] lg:mt-0 p-3 lg:p-6 pb-[100px] lg:w-[400px] lg:min-h-full min-h-screen overflow-y-auto">

      {/* Bio */}
      <section className="w-full flex flex-col gap-3">
        <div>
          <h1 className="text-xl font-bold tracking-tight border-l-[3px] border-[#ffcc00] pl-3">
            About Me
          </h1>
          <p className="text-xs text-white/50 pl-4 mt-0.5">Fullstack Developer · Security Engineer</p>
        </div>
        <div className="flex flex-col gap-2 text-[13px] text-white/65 leading-relaxed">
          <p>
            I&#39;m <span className="text-[#ffcc00] font-semibold">Olaegbe Abdul-Rahmon</span> — a fullstack
            web developer and certified cybersecurity professional. I build fast, responsive web
            applications and secure digital systems, blending engineering depth with a hacker&#39;s mindset.
          </p>
          <p>
            Beyond the browser, I work in <span className="text-white/80">Kali Linux</span> for penetration
            testing, use <span className="text-white/80">Cisco Packet Tracer</span> for network simulation,
            and write <span className="text-white/80">Python</span> scripts for security automation and tooling.
          </p>
        </div>
      </section>

      {/* Certifications */}
      <section className="w-full flex flex-col gap-3">
        <h2 className="text-base font-bold border-l-[3px] border-[#ffcc00] pl-3">Certifications</h2>
        <div className="flex flex-col gap-2">
          {CERTIFICATIONS.map((c) => (
            <div
              key={c.id}
              className="flex items-center gap-3 p-3 bg-[#1a1b1a] border border-[#2a2b2a] rounded-xl hover:border-[#ffcc00]/40 transition-colors"
            >
              <div className="w-8 h-8 rounded-lg bg-[#ffcc00]/10 border border-[#ffcc00]/25 flex items-center justify-center text-[#ffcc00] text-sm flex-shrink-0">
                <FontAwesomeIcon
                  icon={
                    c.id === "ceh"
                      ? faShieldHalved
                      : c.id === "network-plus"
                        ? faNetworkWired
                        : faCode
                  }
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[12px] font-semibold text-white leading-tight">{c.name}</p>
                <p className="text-[11px] text-white/45 leading-tight mt-0.5">{c.details}</p>
              </div>
              {"issuer" in c && (
                <span className="text-[9px] px-2 py-1 rounded-full bg-[#ffcc00]/10 text-[#ffcc00] border border-[#ffcc00]/30 whitespace-nowrap flex-shrink-0">
                  {c.issuer}
                </span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="w-full flex flex-col gap-3">
        <h2 className="text-base font-bold border-l-[3px] border-[#ffcc00] pl-3">Tech Stack</h2>
        <div className="grid grid-cols-4 gap-2">
          {TECH.map((t) => (
            <div
              key={t.name}
              className="flex flex-col items-center gap-1.5 py-3 px-2 bg-[#1a1b1a] border border-[#2a2b2a] rounded-xl hover:border-[#ffcc00]/40 transition-colors cursor-default"
            >
              <t.Icon style={{ color: t.color, fontSize: "22px" }} />
              <span className="text-[9px] text-white/50 text-center leading-tight">{t.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Security & Networking Tools */}
      <section className="w-full flex flex-col gap-3">
        <h2 className="text-base font-bold border-l-[3px] border-[#ffcc00] pl-3">Security &amp; Networking Tools</h2>
        <div className="flex flex-col gap-2">
          {TOOLS.map((t) => (
            <div
              key={t.name}
              className="flex items-center gap-3 p-3 bg-[#1a1b1a] border border-[#2a2b2a] rounded-xl hover:border-[#ffcc00]/40 transition-colors"
            >
              <t.Icon style={{ color: t.color, fontSize: "18px", flexShrink: 0 }} />
              <div className="flex-1 min-w-0">
                <span className="text-[12px] text-white/70">
                  <span className="text-white/90 font-medium">{t.name}</span> — {t.desc}
                </span>
              </div>
              <span className="text-[9px] px-2 py-1 rounded-full border border-[#2a2b2a] text-white/35 whitespace-nowrap flex-shrink-0">
                {t.tag}
              </span>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}