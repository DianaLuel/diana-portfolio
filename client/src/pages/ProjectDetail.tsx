import { ArrowLeft, ArrowUpRight, CheckCircle2, ExternalLink } from "lucide-react";
import { Link, useRoute } from "wouter";
import { DeviceMockup, projects, type Project } from "./Home";

const stories: Record<string, string> = {
  mseso: "I was excited to explore how technology can improve safety. Along the way, I learned to design for organizations and first responders, using maps and real-time information for faster emergency response.",
  cuamm: "I was excited to work on this project and explore how digital tools can improve healthcare. Along the way, I learned more about designing for medical professionals, organizing complex information, and creating a simple experience for better patient care.",
  ercs: "I was excited to work on this project and explore how digital design can support humanitarian work. Along the way, I learned to create a clear, accessible experience for people and communities in need.",
  nova: "I was excited to work on this project and explore how design can showcase creative services. Along the way, I learned to organize information clearly and create a visual experience that reflects the brand.",
  skyline: "I enjoyed working on this project and exploring how design can make travel and education services easier to discover. I learned to create a clear and welcoming experience that guides users through their journey.",
  weyra: "I was excited to work on this project and explore how digital design can communicate sustainability. Along the way, I learned to present complex ideas in a simple, engaging, and modern way.",
  birhana: "I enjoyed working on this project and exploring how design can make learning resources easier to access. Along the way, I learned to create a simple and engaging experience for students and tutors.",
  haburu: "I was excited to work on this project and explore how visual design can turn information into engaging stories. Along the way, I learned to communicate ideas clearly through layout, typography, and visuals.",
};

const outcomes: Record<string, string[]> = {
  mseso: ["Mapped emergency-response journeys", "Designed for real-time information", "Built a clear safety operations system"],
  cuamm: ["Organized complex patient information", "Created calmer clinical workflows", "Designed for medical professionals"],
  ercs: ["Prioritized accessibility and clarity", "Made support easier to discover", "Created a trustworthy humanitarian presence"],
  nova: ["Built a tactile visual language", "Organized creative services clearly", "Balanced expressive art direction with usability"],
  skyline: ["Simplified study-abroad discovery", "Guided users through a big decision", "Created a welcoming responsive experience"],
  weyra: ["Translated sustainability into visual stories", "Made complex technology approachable", "Created an optimistic, modern web presence"],
  birhana: ["Made learning support easier to find", "Designed for students and tutors", "Created a warm, engaging education experience"],
  haburu: ["Turned information into visual stories", "Used layout and typography for clarity", "Explored memorable infographic systems"],
};

function getProject(id: string | undefined): Project | undefined {
  return projects.find((project) => project.id === id);
}

export default function ProjectDetail() {
  const [, params] = useRoute("/work/:id");
  const project = getProject(params?.id);

  if (!project) {
    return <div className="not-found-detail"><Link href="/">← Back home</Link><h1>Project not found.</h1></div>;
  }

  return (
    <div className="detail-page">
      <header className="detail-header">
        <Link className="brand" href="/"><span>DIANA LUEL</span></Link>
        <Link className="detail-back" href="/"><ArrowLeft size={15} /> Back to all work</Link>
        <a className="detail-social" href="https://dribbble.com/diana-luel" target="_blank" rel="noreferrer">Dribbble <ExternalLink size={13} /></a>
      </header>
      <main>
        <section className={`detail-hero detail-${project.palette}`}>
          <div className="detail-hero-copy"><span className="detail-overline">{project.number} / {project.category} / {project.year}</span><h1>{project.name}</h1><p>{project.tagline}</p><div className="detail-hero-meta"><span>{project.role}</span><span>{project.tags.join(" · ")}</span></div></div>
          <div className="detail-hero-visual"><DeviceMockup project={project} featured /></div>
        </section>
        <section className="detail-story"><div className="detail-story-intro"><span className="detail-section-label">The project</span><h2>A closer look at<br /><i>the thinking.</i></h2></div><div className="detail-story-copy"><p>{stories[project.id]}</p><div className="detail-facts"><div><span>Role</span><b>{project.role}</b></div><div><span>Year</span><b>{project.year}</b></div><div><span>Tools</span><b>{project.tags.join(" · ")}</b></div></div></div>{project.id === "mseso" && <div className="detail-real-shot"><span className="detail-section-label">Homepage design</span><img src="/manus-storage/HomePage_7b96d5c8.png" alt="MSESO platform homepage design" /></div>}</section>
        <section className="detail-outcomes"><div className="detail-outcomes-heading"><span className="detail-section-label">What I explored</span><p>Designing with intent means making space for the problem first — then shaping a useful response.</p></div><div className="outcome-list">{(outcomes[project.id] || []).map((outcome, index) => <div className="outcome-row" key={outcome}><span>0{index + 1}</span><CheckCircle2 size={19} /><b>{outcome}</b></div>)}</div></section>
        <section className="detail-next"><Link href="/" className="detail-next-link"><span>Back to selected work</span><ArrowUpRight size={20} /></Link></section>
      </main>
      <footer className="site-footer"><Link className="brand" href="/"><span>DIANA LUEL</span></Link><span>Let’s make something useful.</span><a href="mailto:lueldiana@gmail.com">lueldiana@gmail.com</a></footer>
    </div>
  );
}
