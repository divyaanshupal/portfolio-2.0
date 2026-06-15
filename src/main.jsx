import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  Bot,
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Moon,
  Phone,
  Search,
  Send,
  Sun,
  Trophy,
  Users,
  Volume2,
} from 'lucide-react';
import './styles.css';

const sections = [
  'about',
  'experience',
  'projects',
  'academic',
  'beyond',
  'challenge',
  'contact',
];

const skills = [
  'C++',
  'JavaScript (ES6+)',
  'Python',
  'Dart',
  'SQL',
  'Flutter',
  'Node.js',
  'Express.js',
  'Riverpod',
  'Socket.IO',
  'Firebase',
  'MongoDB',
  'Git',
  'n8n',
];
const interests = [
  'Software Development',
  'Backend Development',
  'GEN AI',
  'Hackathons',
  'Data Structures & Algorithms',
  'Mobile App Development',
  'Full-Stack Engineering',
  'Competitive Programming',
  
];

const experiences = [
  {
    role: 'Software Development Engineer Intern - Mobile Development',
    company: 'Kyrotics',
    dates: 'Jul 2025 - Jan 2026',
    bullets: [
      'Engineered a DPDP-compliant enterprise document exchange platform using Flutter, Node.js, MongoDB, and Socket.IO; onboarded 500+ pilot users with no data stored in any cloud or third-party database.',
      'Configured a real-time backend with Firebase OTP auth and hybrid AES-RSA encryption, enabling secure P2P file transfer with 45% lower latency and 99% auth success rate.',
      'Integrated Hive-powered offline-first storage and Polygon blockchain for immutable audit trails and consent management.',
    ],
  },
  {
    role: 'Flutter Developer Intern - Mobile Application Development',
    company: 'Medhwan',
    dates: 'Mar 2025 - Jul 2025',
    bullets: [
      'Delivered a scalable cross-platform EdTech mobile application using Flutter, Firebase, Node.js, and MongoDB, deployed to 200+ pilot users.',
      'Architected RESTful APIs with Riverpod state management, boosting backend performance by 30% and enabling real-time synchronization.',
      'Optimized server-side pagination and local storage with Hive and SharedPreferences for 10,000+ records, cutting data latency by 25%.',
    ],
  },
];

const projects = [
  {
    title: 'Unnati Siksha: EdTech Platform',
    body: 'Full-stack mobile platform enabling underprivileged students to access lectures, notes, and doubts with volunteer support.',
    tags: 'Flutter · Node.js · Express.js · MongoDB · JWT · Twilio · ImageKit',
  },
  {
    title: 'Expense Tracker App',
    body: 'Cross-platform finance management app with auth, persistent sessions, transaction categorization, balance tracking, and analytics views.',
    tags: 'Flutter · Firebase · SQLite · Firestore · Email/Google Auth',
  },
  {
    title: 'Unified Developer Platform',
    body: 'HackQuest winning 24-hour build integrating GitHub, MS Teams, Slack, Notion, and Google Workspace into one developer workflow.',
    tags: 'HackQuest 25 · BIT Mesra · 1st / 70+ teams · Integrations',
  },
  {
    title: 'Coal Miner Safety Monitoring',
    body: 'Smart India Hackathon project led for SIH1645, conceptualizing and launching a safety monitoring system for coal miners.',
    tags: 'SIH 2024 · Team Lead · 2nd / 50+ teams · Safety Tech',
  },
];

const hackathons = [
  {
    name: 'HackQuest\'25',
    location: 'BIT Mesra',
    placement: '1st / 70+ teams',
    duration: '24h',
    description: 'Shipped a unified developer platform integrating GitHub, MS Teams, Slack, Notion, and Google Workspace.',
  },
  {
    name: 'Hackfest\'25',
    location: 'IIT ISM Dhanbad',
    placement: '2nd in problem statement',
    duration: '24h',
    description: 'Delivered a real-time audience sentiment monitoring system with admin dashboard relay.',
  },
  {
    name: 'Hacktopica\'26',
    location: 'MLH Hackathon',
    placement: 'Top 5 overall + Best All-Boys Team',
    duration: '24h',
    description: 'Top 5 overall placement in an offline hackathon and won the Best All-Boys Team track.',
  },
  {
    name: 'Hacktopia\'26',
    location: 'TNP, IIIT Bhagalpur',
    placement: '3rd place',
    duration: '24h',
    description: 'Crafted a smart institutional file tracking system.',
  },
  {
    name: 'Smart India Hackathon 2024',
    location: 'SIH1645',
    placement: '2nd / 50+ teams',
    duration: 'Team Lead',
    description: 'Conceptualized and launched a coal miner safety monitoring system as team lead.',
  },
];

const leaderboard = [
  ['LeetCode', '520+', 'problems'],
  ['Total solved', '753', 'problems'],
  ['CodeChef', '1602', 'rating'],
  ['Codechef Starters 193', '73', 'global'],
];

const codingProfiles = [
  {
    name: 'LeetCode',
    link: 'https://leetcode.com/u/divyanshuwork03/',
  },
  {
    name: 'CodeChef',
    link: 'https://www.codechef.com/users/bright_shadow1',
  },
  {
    name: 'GeeksForGeeks',
    link: 'geeksforgeeks.org/profile/divyaaanshu?tab=activity',
  },
  {
    name: 'Coding Ninja',
    link: 'https://www.naukri.com/code360/profile/divyaanshu',
  },
  {
    name: 'Codeforces',
    link: 'https://codeforces.com/profile/divyaaanshu',
  },
];

const semesters = [
  {
    name: 'Fall 2023',
    sgpa: '7.83',
    courses: [
      { code: 'ME102', name: 'Engineering Graphics', grade: 'D', gp: 6 },
      { code: 'CS110', name: 'Computer Programming LAB', grade: 'A', gp: 9 },
      { code: 'CS101', name: 'Computer Programming', grade: 'B', gp: 8 },
      { code: 'HS101', name: 'Professional Communication', grade: 'B', gp: 8 },
      { code: 'EC112', name: 'Electrical Sciences LAB', grade: 'A', gp: 9 },
      { code: 'EC101', name: 'Electrical Sciences', grade: 'A', gp: 9 },
      { code: 'PH101', name: 'Engineering Physics', grade: 'C', gp: 7 },
      { code: 'MA101', name: 'Engineering Mathematics I', grade: 'B', gp: 8 },
    ],
  },
  {
    name: 'Spring 2024',
    sgpa: '9.17',
    courses: [
      { code: 'EC104', name: 'Semiconductor Devices and Circuits', grade: 'A', gp: 9 },
      { code: 'EC114', name: 'Semiconductor Devices and Circuits LAB', grade: 'A', gp: 9 },
      { code: 'EC113', name: 'Digital Design LAB', grade: 'A', gp: 9 },
      { code: 'EC102', name: 'Digital Design', grade: 'O', gp: 10 },
      { code: 'MA102', name: 'Engineering Mathematics II', grade: 'A', gp: 9 },
      { code: 'ME103', name: 'Engineering Materials', grade: 'B', gp: 8 },
      { code: 'CS112', name: 'Data Structure and Algorithm LAB', grade: 'O', gp: 10 },
      { code: 'CS102', name: 'Data Structures and Algorithms', grade: 'O', gp: 10 },
    ],
  },
  {
    name: 'Fall 2024',
    sgpa: '8.75',
    courses: [
      { code: 'CS211', name: 'Object Oriented Programming LAB', grade: 'O', gp: 10 },
      { code: 'CS203', name: 'Object Oriented Programming', grade: 'A', gp: 9 },
      { code: 'CS201', name: 'Design and Analysis of Algorithms', grade: 'A', gp: 9 },
      { code: 'CS207', name: 'Computer Organization and Architecture', grade: 'B', gp: 8 },
      { code: 'CS202', name: 'Discrete Mathematics', grade: 'B', gp: 8 },
      { code: 'SAI I', name: 'Society Internship', grade: 'O', gp: 10 },
      { code: 'MA201', name: 'Engineering Mathematics III', grade: 'A', gp: 9 },
      { code: 'HS201', name: 'Management Concepts and Technology', grade: 'B', gp: 8 },
    ],
  },
  {
    name: 'Spring 2025',
    sgpa: '9.00',
    courses: [
      { code: 'EC208', name: 'Microprocessor and Interfacing', grade: 'B', gp: 8 },
      { code: 'EC218', name: 'Microprocessor and Interfacing LAB', grade: 'A', gp: 9 },
      { code: 'CS213', name: 'Operating Systems LAB', grade: 'O', gp: 10 },
      { code: 'CS212', name: 'Database Management Systems LAB', grade: 'O', gp: 10 },
      { code: 'CS206', name: 'Operating Systems', grade: 'O', gp: 10 },
      { code: 'CS205', name: 'Formal Language and Automata Theory', grade: 'B', gp: 8 },
      { code: 'CS204', name: 'Database Management Systems', grade: 'A', gp: 9 },
      { code: 'MA203', name: 'Probability and Statistics', grade: 'A', gp: 9 },
    ],
  },
  {
    name: 'Fall 2025',
    sgpa: '9.52',
    courses: [
      { code: 'CS303', name: 'Artificial Intelligence', grade: 'A', gp: 9 },
      { code: 'EC304', name: 'IoT and Embedded System', grade: 'A', gp: 9 },
      { code: 'EC312', name: 'IoT and Embedded System LAB', grade: 'O', gp: 10 },
      { code: 'CS302', name: 'Software Engineering', grade: 'A', gp: 9 },
      { code: 'CS301', name: 'Data Communication', grade: 'O', gp: 10 },
      { code: 'CS311', name: 'Software Engineering LAB', grade: 'O', gp: 10 },
      { code: 'EC311', name: 'Digital Signal Processing Lab', grade: 'O', gp: 10 },
      { code: 'EC301', name: 'Digital Signal Processing', grade: 'O', gp: 10 },
      { code: 'SAI II', name: 'Academic Internship', grade: 'A', gp: 9 },
    ],
  },
  {
    name: 'Spring 2026',
    sgpa: '9.21',
    courses: [
      { code: 'CS351', name: 'Introduction to Cryptography', grade: 'A', gp: 9 },
      { code: 'CS306', name: 'Computer Graphics', grade: 'A', gp: 9 },
      { code: 'CS305', name: 'Computer Networks', grade: 'O', gp: 10 },
      { code: 'CS304', name: 'Compiler Design', grade: 'A', gp: 9 },
      { code: 'CS313', name: 'Computer Networks LAB', grade: 'O', gp: 10 },
      { code: 'CS312', name: 'Compiler Design LAB', grade: 'O', gp: 10 },
      { code: 'CS314', name: 'Machine Learning LAB', grade: 'O', gp: 10 },
      { code: 'CS307', name: 'Machine Learning', grade: 'A', gp: 9 },
      { code: 'ME306', name: 'Environmental Science and Renewable Energy', grade: 'C', gp: 7 },
    ],
  },
];

function useActiveSection() {
  const [active, setActive] = useState('about');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: [0.12, 0.35, 0.6] },
    );

    sections.forEach((section) => {
      const node = document.getElementById(section);
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, []);

  return active;
}

function Sidebar({ theme, onToggleTheme }) {
  const active = useActiveSection();
  const [time, setTime] = useState('');

  useEffect(() => {
    const tick = () => {
      setTime(
        new Date().toLocaleTimeString('en-GB', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        }),
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <aside className="sidebar">
      <div className="identity">
        <a className="brand" href="#about" aria-label="Divyanshu Pal home">
          <span>DIVYANSHU</span>
          <span>PAL</span>
        </a>
        <div className="brand-line" />
        <p>B.Tech Computer Science and Engineering student at IIIT Bhagalpur.</p>
        <div className="status-line">
          <span className="dot" />
          <span>open to opportunities</span>
          <span>/</span>
          <span>KANPUR, IN</span>
        </div>
      </div>

      <nav className="side-nav" aria-label="Section navigation">
        {sections.map((section, index) => (
          <a className={active === section ? 'active' : ''} href={`#${section}`} key={section}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <i />
            <b>{section}</b>
          </a>
        ))}
      </nav>

      <div className="side-bottom">
        <div className="where">
          <div className="where-head">
            <span><MapPin size={12} /> WHERE I'LL BE</span>
            <span>-</span>
          </div>
          <div className="trip">
            <b>• IIIT Bhagalpur</b>
            <span>2023 - 2027</span>
          </div>
          <a href="#contact" className="coffee">☕ coffee chat?</a>
        </div>

        <div className="socials" aria-label="Social links">
          <a href="https://github.com/divyaanshu" aria-label="GitHub"><Github size={16} /></a>
          <a href="https://linkedin.com/in/divyanshu" aria-label="LinkedIn"><Linkedin size={16} /></a>
          <a href="mailto:divyanshuwork03@gmail.com" aria-label="Email"><Mail size={16} /></a>
          <a className="resume" href="https://drive.google.com/drive/u/1/folders/1fAS4bwaludepH5XEd2i0J5VKtZUnnsFW" target="_blank" rel="noopener noreferrer"><BriefcaseBusiness size={14} /> resume</a>
        </div>

        <div className="controls">
          <button type="button" aria-label="Search"><Search size={14} /><span>⌘K</span></button>
          <button type="button" aria-label="Music"><Volume2 size={14} /><span>music</span></button>
          <button
            className="theme-toggle"
            type="button"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            aria-pressed={theme === 'dark'}
            onClick={onToggleTheme}
          >
            {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
            <span>{theme === 'dark' ? 'light' : 'dark'}</span>
          </button>
        </div>

        <div className="meta">
          <span>{time}</span>
          <span>/</span>
          <span>© 2026</span>
          <span>/</span>
          <span className="live-dot" /> <span>1 live</span>
        </div>
      </div>
    </aside>
  );
}

function Header({ number, title }) {
  return (
    <div className="section-heading">
      <span>{number}</span>
      <h2>{title}</h2>
      <div />
    </div>
  );
}

function About() {
  return (
    <section id="about" className="section about-section">
      <Header number="01" title="ABOUT" />
      <div className="copy-block">
        <p>
          I'm Divyanshu Pal, a B.Tech Computer Science and Engineering student at the Indian Institute of
          Information Technology, Bhagalpur with an 8.85 CGPA. I build mobile and full-stack products that turn
          practical problems into clean, usable software.
        </p>
        <p>
          My work spans Flutter, Node.js, Firebase, MongoDB, secure file exchange, EdTech platforms, and competitive
          programming. I have shipped pilot-ready apps, built encrypted real-time systems, led hackathon teams, and
          contributed to student-led education initiatives at scale.
        </p>
      </div>

      <TagGroup title="TECHNOLOGIES" items={skills} />
      <TagGroup title="INTERESTS" items={interests} />
    </section>
  );
}

function TagGroup({ title, items }) {
  return (
    <div className="tag-group">
      <h3>{title}</h3>
      <div className="tags">
        {items.map((item) => <span key={item}>{item}</span>)}
      </div>
    </div>
  );
}

function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <Header number="02" title="EXPERIENCE" />
      <article className="experience-item">
        {experiences.map((experience) => (
          <React.Fragment key={experience.company}>
            <div className="logo-box">
              <BriefcaseBusiness size={23} />
            </div>
            <div className="experience-content">
              <div className="item-top">
                <div>
                  <h3>{experience.role}</h3>
                  <p>{experience.company}</p>
                </div>
                <time>{experience.dates}</time>
              </div>
              <ul className="body-list">
                {experience.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
              </ul>
            </div>
          </React.Fragment>
        ))}
      </article>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <Header number="03" title="PROJECTS" />
      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div>
              <h3>{project.title}</h3>
              <Github size={15} />
            </div>
            <p>{project.body}</p>
            <span>{project.tags}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

function Academic() {
  const [activeTab, setActiveTab] = useState('coursework');
  const [expandedSemester, setExpandedSemester] = useState('');

  return (
    <section id="academic" className="section academic-section">
      <Header number="04" title="ACADEMIC" />
      <div className="tabs">
        <button 
          className={activeTab === 'coursework' ? 'active' : ''} 
          type="button"
          onClick={() => setActiveTab('coursework')}
        >
          COURSEWORK
        </button>
        <button 
          className={activeTab === 'hackathons' ? 'active' : ''} 
          type="button"
          onClick={() => setActiveTab('hackathons')}
        >
          HACKATHONS
        </button>
        <button 
          className={activeTab === 'scores' ? 'active' : ''} 
          type="button"
          onClick={() => setActiveTab('scores')}
        >
          SCORES
        </button>
      </div>

      {activeTab === 'coursework' && (
        <div className="coursework-section">
          <article className="paper">
            <h3>Indian Institute of Information Technology Bhagalpur</h3>
            <p className="paper-meta">B.TECH COMPUTER SCIENCE AND ENGINEERING · 2023 - 2027 · CGPA 8.85</p>
            <p>Roll No. 230101051. Focused on application development, data structures, backend systems, databases, and production-ready mobile experiences.</p>
          </article>
          
          <div className="semesters-list">
            {semesters.map((semester) => (
              <div key={semester.name} className="semester-item">
                <button 
                  className="semester-header"
                  type="button"
                  onClick={() => setExpandedSemester(expandedSemester === semester.name ? '' : semester.name)}
                >
                  <span>{semester.name}</span>
                  <span className="sgpa-badge">SGPA: {semester.sgpa}</span>
                  <span className="toggle-icon">{expandedSemester === semester.name ? '▼' : '▶'}</span>
                </button>
                {expandedSemester === semester.name && (
                  <div className="courses-table">
                    <table>
                      <thead>
                        <tr>
                          <th>Code</th>
                          <th>Course Name</th>
                          <th>Grade</th>
                          <th>GP</th>
                        </tr>
                      </thead>
                      <tbody>
                        {semester.courses.map((course) => (
                          <tr key={course.code}>
                            <td className="code">{course.code}</td>
                            <td className="course-name">{course.name}</td>
                            <td className="grade">{course.grade}</td>
                            <td className="gp">{course.gp}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'hackathons' && (
        <div className="hackathons-section">
          <div className="hackathon-cards">
            {hackathons.map((hackathon) => (
              <article key={hackathon.name} className="hackathon-card">
                <div className="hackathon-header">
                  <h3>{hackathon.name}</h3>
                  <span className="hackathon-placement">{hackathon.placement}</span>
                </div>
                <p className="hackathon-meta">
                  <span>{hackathon.location}</span>
                  <span className="separator">·</span>
                  <span>{hackathon.duration}</span>
                </p>
                <p className="hackathon-description">{hackathon.description}</p>
              </article>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'scores' && (
        <div className="scores-section">
          <article className="education-mini">
            <GraduationCap size={18} />
            <div>
              <h3>KR Education Centre, Kanpur</h3>
              <p>Class 12 CBSE: 95% · Class 10 CBSE: 94%</p>
            </div>
          </article>
        </div>
      )}
    </section>
  );
}

function Beyond() {
  return (
    <section id="beyond" className="section beyond-section">
      <Header number="05" title="BEYOND" />
      <div className="beyond-grid">
        <article>
          <Users size={18} />
          <h3>Unnati Society</h3>
          <p>Initiator and Vice President of a 130+ member student body delivering digital education to 1500+ underprivileged students, with coverage across 5+ media platforms.</p>
        </article>
        <article>
          <Code2 size={18} />
          <h3>Development Club</h3>
          <p>App Development Lead at the Development Club, Technical Board, IIIT Bhagalpur, spearheading mobile and full-stack development initiatives.</p>
        </article>
      </div>
    </section>
  );
}

function Challenge() {
  return (
    <section id="challenge" className="section challenge-section">
      <Header number="06" title="PROBLEM SOLVING" />
      <div className="problem-solving-layout">
        <div className="problem-stats">
          <div className="total-problems">
            <p className="problems-label">Total Problems Solved</p>
            <a 
              href="https://codolio.com/profile/divyaanshu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="problems-count"
            >
              759
            </a>
          </div>
          <p className="problems-description">
            Expertise in Data Structures, Algorithms, Competitive Programming, and Problem-Solving across multiple platforms.
          </p>
        </div>

        <div className="coding-profiles">
          <h3>Coding Profiles</h3>
          <div className="profiles-grid">
            {codingProfiles.map((profile) => (
              <a 
                key={profile.name}
                href={profile.link}
                target="_blank"
                rel="noopener noreferrer"
                className="profile-card"
              >
                <span className="profile-name">{profile.name}</span>
                <span className="profile-arrow">→</span>
              </a>
            ))}
          </div>
        </div>

        <div className="leaderboard">
          <h3>Achievements</h3>
          {leaderboard.map(([name, score, unit], index) => (
            <div key={name}>
              <span>{index + 1}</span>
              <Bot size={17} />
              <b>{name}</b>
              <strong>{score}</strong>
              <small>{unit}</small>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="section contact-section">
      <Header number="07" title="CONTACT" />
      <p className="contact-intro">I'm always interested in internships, product ideas, hackathons, and ambitious app builds. Feel free to reach out.</p>
      <div className="contact-links">
        <a href="mailto:divyanshuwork03@gmail.com"><Mail size={13} /> email</a>
        <a href="tel:+916387811379"><Phone size={13} /> phone</a>
        <a href="https://github.com/divyaanshu"><Github size={13} /> github</a>
        <a href="https://linkedin.com/in/divyanshu"><Linkedin size={13} /> linkedin</a>
      </div>
      <form className="contact-form" onSubmit={(event) => { event.preventDefault(); setSent(true); }}>
        <h3>SEND A MESSAGE</h3>
        <div className="form-row">
          <input aria-label="name" placeholder="name" />
          <input aria-label="email" placeholder="email" type="email" />
        </div>
        <textarea aria-label="your message" placeholder="your message" />
        <div className="send-row">
          <button type="submit">send <Send size={12} /></button>
          <span>{sent ? 'Sent.' : ''}</span>
        </div>
      </form>
    </section>
  );
}

function App() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('portfolio-theme') === 'dark' ? 'dark' : 'light';
    } catch {
      return 'light';
    }
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem('portfolio-theme', theme);
    } catch {
      // The theme still works when browser storage is unavailable.
    }
  }, [theme]);

  return (
    <>
      <Sidebar theme={theme} onToggleTheme={() => setTheme((current) => current === 'dark' ? 'light' : 'dark')} />
      <main className="page">
        <About />
        <Experience />
        <Projects />
        <Academic />
        <Beyond />
        <Challenge />
        <Contact />
        <footer>
          <div>flutter <span>·</span> full-stack</div>
          <p>© 2026 Divyanshu Pal. All rights reserved.</p>
        </footer>
      </main>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
