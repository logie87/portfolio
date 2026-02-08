import { motion, useReducedMotion } from "framer-motion";
import GradientText from "./components/GradientText";
import TextType from "./components/TextType";
import GitHubContrib from "./components/ChartGitHub";
import Silk from "./components/Silk.tsx";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

export default function App() {
  useReducedMotion() ?? false;

  const content = {
    name: "Logan Hindley",
    location: "Edmonton, AB",
    tagline: "I build whatever comes to mind, and always looking to join hackathons!",
    links: {
      github: "https://github.com/logie87",
      linkedin: "https://www.linkedin.com/in/loganhindley/",
      email: "mailto:lhindley@ualberta.ca",
      resume: "https://docs.google.com/document/d/1OWb428YVy725HeaPIZVizyFydH1pgBG0jaVzwGHzuhQ/edit?usp=sharing",
    },
  };

  const links = [
    { label: "GitHub", href: content.links.github, icon: Github },
    { label: "LinkedIn", href: content.links.linkedin, icon: Linkedin },
    { label: "Email", href: content.links.email, icon: Mail },
    { label: "Resume", href: content.links.resume, icon: FileText }
  ];

  return (
    <div className="app">
      <div className="silkBg">
        <Silk
          speed={3}
          scale={2}
          color="#0a0f0d"
          noiseIntensity={1.8}
          rotation={0.3}
          className="silkCanvas"
        />
      </div>

      <main className="main">
        <section className="hero">
          <motion.p
            className="kicker"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {content.location}
          </motion.p>

          <motion.h1
            className="h1"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.05 }}
          >
            <GradientText
              colors={["#4f7a28", "#587a5d", "#ffffff", "#74a7fe", "#3a88fe"]}
              animationSpeed={5}
              direction="diagonal"
              pauseOnHover
              className="nameGradient"
              showBorder={false}
            >
              {content.name}
            </GradientText>
          </motion.h1>

          <motion.h2
            className="h2"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12 }}
          >
            <TextType
              as="span"
              className="titleType"
              text={[
                "Computer Science Student",
                "Software Engineer",
                "Videographer",
                "Caffeine Addict",
                "Tech Enthusiast",
                "Builder of Things"
              ]}
              smartDelete
              loop
              pauseDuration={1800}
              initialDelay={250}
              typingSpeed={80}
              deletingSpeed={55}
              variableSpeed={{ min: 30, max: 100 }}
              cursorCharacter="▎"
            />
          </motion.h2>

          <motion.p
            className="tagline"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.18 }}
          >
            {content.tagline}
          </motion.p>

          <motion.div
            className="iconRow"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.24 }}
          >
            {links.map((l) => {
              const Icon = l.icon;
              return (
                <a
                  key={l.label}
                  className="iconBtn"
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-label={l.label}
                  title={l.label}
                >
                  <Icon size={24} />
                </a>
              );
            })}
          </motion.div>

          <motion.div
            className="githubSection"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.3 }}
          >
            <GitHubContrib username="logie87" />
          </motion.div>
        </section>

        <footer className="footer">
          <span className="muted">© {new Date().getFullYear()} Logan Hindley</span>
        </footer>
      </main>
    </div>
  );
}