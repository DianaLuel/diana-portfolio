import { useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  Code2,
  ExternalLink,
  Layers3,
  Mail,
  Menu,
  MousePointer2,
  MoveUpRight,
  Sparkles,
  X,
  Zap,
} from "lucide-react";
import { Link } from "wouter";

type Category = "All" | "Product" | "Web" | "Visual";

export type Project = {
  id: string;
  number: string;
  name: string;
  tagline: string;
  description: string;
  category: Exclude<Category, "All">;
  year: string;
  role: string;
  tags: string[];
  palette: "blue" | "mint" | "orange" | "violet" | "lime" | "pink" | "sand" | "cyan" | "red";
  mockup: "map" | "medical" | "redcross" | "printing" | "travel" | "green" | "tutor" | "info" | "prototype";
  realImage?: string;
  featured?: boolean;
  mobile?: boolean;
};

export const projects: Project[] = [
  {
    id: "mseso",
    number: "01",
    name: "MSESO",
    tagline: "Safer communities, smarter response.",
    description: "An access & safety platform that turns live context into confident action — with maps, alerts, and emergency-response workflows.",
    category: "Product",
    year: "2026",
    role: "Product design · Frontend",
    tags: ["UX strategy", "UI design", "React"],
    palette: "blue",
    mockup: "map",
    realImage: "/project-screenshots/mseso/Home%20Page.png",
    featured: true,
    mobile: true,
  },
  {
    id: "epsirs",
    number: "02",
    name: "ePSIRS",
    tagline: "Safer healthcare through better reporting.",
    description: "A patient safety incident reporting system that helps healthcare teams report, track, and learn from incidents across Ethiopia.",
    category: "Product",
    year: "2025",
    role: "Product design · Frontend",
    tags: ["Healthcare", "Systems", "UI design"],
    palette: "cyan",
    mockup: "medical",
    realImage: "/project-screenshots/ePSIRS/Landing.png",
  },
  {
    id: "cuamm",
    number: "03",
    name: "CUAMM EMR",
    tagline: "Smarter care, better health.",
    description: "An electronic medical records experience built to help healthcare professionals move through high-stakes moments with clarity.",
    category: "Product",
    year: "2025",
    role: "UX/UI design · Prototyping",
    tags: ["Healthcare", "Systems", "Figma"],
    palette: "mint",
    mockup: "medical",
    realImage: "/project-screenshots/EMR/Main%20Dashboard.png",
    mobile: true,
  },
  {
    id: "ercs",
    number: "04",
    name: "ERCS",
    tagline: "Serving humanity, saving lives.",
    description: "A focused digital home for the Ethiopian Red Cross Society — built to make support, stories, and action easier to find.",
    category: "Web",
    year: "2025",
    role: "Web design · Frontend",
    tags: ["Web design", "CMS", "Accessibility"],
    palette: "red",
    mockup: "redcross",
    realImage: "/project-screenshots/ERCS/vol-%20ID%201.png",
  },
  {
    id: "nova",
    number: "05",
    name: "Nova Printing & Advertising",
    tagline: "Print. Create. Inspire.",
    description: "A bold visual storefront for a printing and advertising company with a tactile, editorial product feel.",
    category: "Web",
    year: "2025",
    role: "Brand web · Frontend",
    tags: ["Art direction", "Webflow", "Motion"],
    palette: "orange",
    mockup: "printing",
    realImage: "/project-screenshots/Nova-Ecommerce/Home.png",
  },
  {
    id: "skyline",
    number: "06",
    name: "Skyline Travel Solution",
    tagline: "Your journey starts here.",
    description: "An education consultancy and travel services website that makes big life decisions feel a little more navigable.",
    category: "Web",
    year: "2025",
    role: "UX/UI design · Frontend",
    tags: ["Conversion", "Content", "Responsive"],
    palette: "violet",
    mockup: "travel",
    realImage: "/project-screenshots/Skyline-Travel-Solution/Home.png",
  },
  {
    id: "weyra",
    number: "07",
    name: "Weyra Green Tech",
    tagline: "Powering a greener future.",
    description: "A clean, optimistic brand presence for a green technology company working toward a more resilient tomorrow.",
    category: "Web",
    year: "2025",
    role: "Creative direction · UI",
    tags: ["Brand system", "Sustainability", "Web"],
    palette: "lime",
    mockup: "green",
    realImage: "/project-screenshots/werya-green/Home.png",
  },
  {
    id: "birhana",
    number: "08",
    name: "Birhana Tutors",
    tagline: "Learn. Grow. Succeed.",
    description: "A welcoming education experience that helps learners and families discover the right support, faster.",
    category: "Web",
    year: "2022",
    role: "UX/UI design · Frontend",
    tags: ["Education", "UX writing", "React"],
    palette: "pink",
    mockup: "tutor",
    realImage: "/project-screenshots/Birhana/landing%20page%202.png",
    mobile: true,
  },
  {
    id: "haburu",
    number: "09",
    name: "Haburu Infographics",
    tagline: "Ideas made visible.",
    description: "A visual storytelling project translating complex ideas into clear, memorable infographic systems.",
    category: "Visual",
    year: "2022",
    role: "Visual design · Illustration",
    tags: ["Infographics", "Data story", "Art direction"],
    palette: "sand",
    mockup: "info",
    realImage: "/project-screenshots/Haburu/D1.png",
  },
];

const filters: Category[] = ["All", "Product", "Web", "Visual"];

export function DeviceMockup({ project, featured = false }: { project: Project; featured?: boolean }) {
  if (project.realImage) {
    return (
      <div className={`device-stage real-project-preview ${featured ? "stage-featured" : ""}`}>
        <img src={project.realImage} alt={`${project.name} homepage`} />
        <span className="placeholder-label"><span /> Homepage preview</span>
      </div>
    );
  }

  return (
    <div className={`device-stage stage-${project.palette} ${featured ? "stage-featured" : ""}`}>
      <div className="stage-noise" />
      <div className="mockup-browser">
        <div className="browser-topbar">
          <div className="browser-dots"><i /><i /><i /></div>
          <div className="browser-address">{project.id}.studio / dashboard</div>
          <div className="browser-actions"><span /><span /></div>
        </div>
        <div className={`browser-screen screen-${project.mockup}`}>
          <MockupContent project={project} />
        </div>
      </div>
      {project.mobile && (
        <div className="mockup-phone">
          <div className="phone-speaker" />
          <div className={`phone-screen screen-${project.mockup}`}>
            <MockupContent project={project} compact />
          </div>
          <div className="phone-home" />
        </div>
      )}
      <span className="placeholder-label"><span /> Interactive preview</span>
    </div>
  );
}

function MockupContent({ project, compact = false }: { project: Project; compact?: boolean }) {
  const content = {
    map: (
      <>
        <div className="map-grid" />
        <div className="map-copy"><small>GOOD MORNING, ALEX</small><strong>Keep your people<br />in the know.</strong></div>
        <div className="map-pill"><span className="live-dot" /> 12 active alerts <ArrowUpRight size={12} /></div>
        <div className="map-route route-a" /><div className="map-route route-b" />
        <div className="map-pin pin-a" /><div className="map-pin pin-b" /><div className="map-pin pin-c" />
        <div className="map-card"><small>NEAREST RESPONSE</small><b>Ras Dashen team</b><span>2.4 km away <ArrowUpRight size={11} /></span></div>
      </>
    ),
    medical: (
      <>
        <div className="emr-sidebar"><span className="emr-mark">+</span><span /><span /><span /><span /></div>
        <div className="emr-content"><small>OVERVIEW / TODAY</small><b>Good morning, Dr. Hana.</b><div className="emr-stats"><span><i>42</i> Patients</span><span><i>08</i> Follow-ups</span></div><div className="emr-panel"><span>RECENT PATIENTS</span><b>Patient timeline</b><div className="emr-lines"><i /><i /><i /></div></div></div>
      </>
    ),
    redcross: (
      <>
        <div className="redcross-nav"><b>ERCS</b><span>ABOUT</span><span>GET HELP</span><span>ACT</span><em>Donate ↗</em></div>
        <div className="redcross-hero"><small>ETHIOPIAN RED CROSS SOCIETY</small><b>Humanity in<br /><i>action.</i></b><button>Learn more <ArrowUpRight size={10} /></button></div>
        <div className="redcross-orb" /><div className="redcross-cross">+</div>
      </>
    ),
    printing: (
      <>
        <div className="print-copy"><small>HELLO, WE ARE NOVA</small><b>Make it<br /><i>matter.</i></b><span>Printing, branding & ideas made tangible.</span></div>
        <div className="print-card card-one">N<span>O</span>VA</div><div className="print-card card-two">MAKE<br />SOME<br /><i>NOISE.</i></div>
        <div className="print-footer"><span>01 — PRINT</span><span>02 — BRAND</span><span>03 — DIGITAL</span></div>
      </>
    ),
    travel: (
      <>
        <div className="travel-nav"><b>SKYLINE<span>✦</span></b><span>Study abroad</span><span>Travel</span><em>Start planning <ArrowUpRight size={11} /></em></div>
        <div className="travel-copy"><small>YOUR NEXT CHAPTER</small><b>Go further.<br /><i>Feel more.</i></b><button>Explore your options <ArrowUpRight size={11} /></button></div>
        <div className="travel-sun" /><div className="travel-mountain mountain-one" /><div className="travel-mountain mountain-two" />
      </>
    ),
    green: (
      <>
        <div className="green-nav"><b>WEYRA <i>◌</i></b><span>Solutions</span><span>Our impact</span><em>Talk to us <ArrowUpRight size={11} /></em></div>
        <div className="green-copy"><small>GREEN TECHNOLOGY / 01</small><b>Powering a<br /><i>greener future.</i></b><span>Smarter energy systems for the places we call home.</span></div>
        <div className="green-sun" /><div className="green-leaf leaf-one" /><div className="green-leaf leaf-two" /><div className="green-leaf leaf-three" />
      </>
    ),
    tutor: (
      <>
        <div className="tutor-top"><b>birhana<span>°</span></b><span>Find a tutor</span><span>How it works</span><em>Get started <ArrowUpRight size={10} /></em></div>
        <div className="tutor-copy"><small>LEARNING, YOUR WAY</small><b>Small steps.<br /><i>Big wins.</i></b><span>Personalized tutoring for curious minds.</span></div>
        <div className="tutor-star">✦</div><div className="tutor-blob blob-one" /><div className="tutor-blob blob-two" /><div className="tutor-badge">Math<br /><small>+24% this month</small></div>
      </>
    ),
    info: (
      <>
        <div className="info-header"><b>HABURU</b><span>Ideas made visible</span><em>Scroll to explore ↓</em></div>
        <div className="info-copy"><small>FIELD NOTE / 04</small><b>Make the<br /><i>complex</i> clear.</b></div>
        <div className="info-orb orb-one" /><div className="info-orb orb-two" /><div className="info-orb orb-three" /><div className="info-grid" />
      </>
    ),
    prototype: (
      <>
        <div className="proto-sidebar"><b>mseso<span>⌁</span></b><div /><div /><div /><div /><em>v1.8</em></div>
        <div className="proto-content"><small>PROTOTYPE / SAFETY OPS</small><b>Know what’s<br /><i>next.</i></b><div className="proto-cards"><span><i>01</i> Live map</span><span><i>02</i> Team status</span><span><i>03</i> Response flow</span></div></div>
        <div className="proto-ring" />
      </>
    ),
  }[project.mockup];

  return <div className={compact ? "mockup-content compact" : "mockup-content"}>{content}</div>;
}

function SectionLabel({ index, label }: { index: string; label: string }) {
  return <div className="section-label"><span>{index}</span><span>{label}</span><span className="label-line" /></div>;
}

function Home() {
  const [activeFilter, setActiveFilter] = useState<Category>("All");
  const [menuOpen, setMenuOpen] = useState(false);
  const visibleProjects = activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Back to top"><span>DIANA LUEL</span></a>
        <nav className={`nav-links ${menuOpen ? "is-open" : ""}`} aria-label="Main navigation">
          <a href="#work" onClick={() => setMenuOpen(false)}>Work <span>01</span></a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services <span>02</span></a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About <span>03</span></a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact <span>04</span></a>
        </nav>
        <a className="header-availability" href="#contact"><span className="status-dot" /> Available for select projects</a>
        <button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-visual" aria-hidden="true" />
          <div className="hero-grain" aria-hidden="true" />
          <div className="hero-inner">
            <div className="hero-kicker"><span>Independent digital designer<br />& frontend developer</span></div>
            <div className="hero-copy">
              <p className="hero-overline">I make digital products<br />feel <em>obvious.</em></p>
              <h1>Design<br /><span>with</span> <i>intent.</i></h1>
              <div className="hero-bottomline"><p>Thoughtful interfaces, useful systems, and frontend craft for teams building what’s next.</p><a className="circle-cta" href="#work" aria-label="Scroll to selected work"><ArrowDownRight size={23} /></a></div>
            </div>
            <div className="hero-meta"><span>Based in Addis Ababa</span><span>Working worldwide</span><span className="hero-scroll">Scroll to explore <ArrowDownRight size={14} /></span></div>
          </div>
        </section>

        <section className="manifesto-section">
          <div className="manifesto-inner">
            <SectionLabel index="00" label="The short version" />
            <div className="manifesto-grid"><h2>Good design is a quiet kind of <i>power.</i></h2><div className="manifesto-copy"><p>I partner with ambitious people to turn complicated ideas into clear, confident digital experiences — from first wireframe to final pixel.</p><a className="text-link" href="#about">More about me <ArrowUpRight size={15} /></a></div></div>
            <div className="manifesto-stats"><div><b>09</b><span>selected<br />projects</span></div><div><b>03</b><span>design + build<br />disciplines</span></div><div><b>∞</b><span>curiosity<br />in reserve</span></div><div className="manifesto-asterisk"><Sparkles size={26} /></div></div>
          </div>
        </section>

        <section className="work-section" id="work">
          <div className="work-inner">
            <div className="work-heading"><div><SectionLabel index="01" label="Selected work" /><h2>Things I’ve<br /><i>made useful.</i></h2></div><p className="work-heading-copy">A mix of product systems, expressive web experiences, and visual stories — built for people, not portfolios.</p></div>
            <div className="filter-row" role="tablist" aria-label="Filter projects">{filters.map((filter) => <button key={filter} className={activeFilter === filter ? "filter-button active" : "filter-button"} type="button" onClick={() => setActiveFilter(filter)} role="tab" aria-selected={activeFilter === filter}>{filter}<span>{filter === "All" ? String(projects.length).padStart(2, "0") : String(projects.filter((p) => p.category === filter).length).padStart(2, "0")}</span></button>)}</div>
            <div className="projects-grid">
              {visibleProjects.map((project) => (
                <article key={project.id} className={`project-card ${project.featured ? "project-featured" : ""} ${project.id === "haburu" ? "project-haburu" : ""}`}>
                  <button className="project-visual-button" type="button" aria-label={`View ${project.name} case study`}><DeviceMockup project={project} featured={project.featured} /></button>
                  <div className="project-info"><div className="project-title-row"><div><span className="project-number">{project.number} / {project.category}</span><h3>{project.name}</h3><p>{project.tagline}</p></div><Link className="project-arrow" href={`/work/${project.id}`} aria-label={`Open ${project.name} case study`}><ArrowUpRight size={18} /></Link></div><div className="project-bottom-row"><span>{project.role}</span><span>{project.year}</span><div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div></div>
                  {project.featured && <div className="featured-caption"><Zap size={14} /> Featured case study</div>}
                </article>
              ))}
            </div>
            <div className="work-footnote"><span><MousePointer2 size={15} /> Every project has a story.</span><span>More work in progress ↗</span></div>
          </div>
        </section>

        <section className="services-section" id="services">
          <div className="services-inner"><SectionLabel index="02" label="What I do" /><div className="services-header"><h2>Think in systems.<br /><i>Make it feel human.</i></h2><p>Strategy, structure, and the small details that make an interface feel less like software — and more like a good conversation.</p></div><div className="services-list">
            <div className="service-row"><span className="service-index">01</span><div className="service-icon"><Layers3 size={20} /></div><div><h3>Product & UI/UX design</h3><p>Research, user flows, wireframes, design systems, and interfaces that make the right thing easy to do.</p></div><ArrowUpRight className="service-arrow" size={22} /></div>
            <div className="service-row"><span className="service-index">02</span><div className="service-icon"><Code2 size={20} /></div><div><h3>Frontend development</h3><p>Responsive HTML, CSS, React, and thoughtful motion — turning polished design into living, useful products.</p></div><ArrowUpRight className="service-arrow" size={22} /></div>
            <div className="service-row"><span className="service-index">03</span><div className="service-icon"><BriefcaseBusiness size={20} /></div><div><h3>Brand & digital direction</h3><p>Visual language, art direction, and a point of view that helps your digital presence feel unmistakably yours.</p></div><ArrowUpRight className="service-arrow" size={22} /></div>
          </div></div>
        </section>

        <section className="about-section" id="about">
          <div className="about-inner"><SectionLabel index="03" label="A little context" /><div className="about-grid"><div className="portrait-placeholder"><img className="portrait-photo" src="/images/diana luel.png" alt="Diana Luel wearing a red floral dress" /><div className="portrait-orbit orbit-one" /><div className="portrait-orbit orbit-two" /><span className="portrait-coordinates">09° 01' N<br />38° 45' E</span></div><div className="about-copy"><p className="about-kicker">The person behind the pixels</p><h2>Hi, I’m <i>Diana Luel.</i></h2><p>I’m a UI/UX designer and frontend developer drawn to the space between structure and expression. I like working closely, asking better questions, and making the complicated feel considered.</p><p>I work across Figma, HTML, CSS, JavaScript, documentation, WordPress, and Wix — shaping digital experiences from first idea to final detail.</p><div className="about-links"><a href="#contact">Let’s work together <ArrowUpRight size={15} /></a><a href="https://github.com/DianaLuel" target="_blank" rel="noreferrer">GitHub profile <ArrowUpRight size={15} /></a><a href="https://www.linkedin.com/in/dianaluel/" target="_blank" rel="noreferrer">LinkedIn profile <ArrowUpRight size={15} /></a><a href="https://dribbble.com/diana-luel" target="_blank" rel="noreferrer">Dribbble profile <ArrowUpRight size={15} /></a></div></div></div></div>
        </section>

        <section className="contact-section" id="contact"><div className="contact-inner"><div className="contact-orbit" /><SectionLabel index="04" label="Start a conversation" /><div className="contact-copy"><p className="contact-kicker">Have a good idea?</p><h2>Let’s make it<br /><i>feel real.</i></h2><a className="contact-email" href="mailto:lueldiana@gmail.com">lueldiana@gmail.com <ArrowUpRight size={24} /></a><a className="contact-phone" href="tel:0989365343">0989365343</a></div><div className="contact-bottom"><span>Available for select freelance & collaboration projects</span><span>© 2026 Diana Luel</span></div></div></section>
      </main>

      <footer className="site-footer"><a className="brand" href="#top"><span>DIANA LUEL</span></a><span>Designed with intent. Built with care.</span><div className="footer-links"><a href="#work">Work</a><a href="#about">About</a><a href="mailto:lueldiana@gmail.com">Email</a><a href="tel:0989365343">Call</a><a href="https://dribbble.com/diana-luel" target="_blank" rel="noreferrer">Dribbble</a></div></footer>
    </div>
  );
}

export default Home;
