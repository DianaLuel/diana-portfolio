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

type ProjectScreenshot = { src: string; alt: string; isMobile: boolean; isScrollable: boolean };

function createScreenshots(folder: string, entries: Array<[string, string, boolean, boolean?]>): ProjectScreenshot[] {
  return entries.map(([filename, alt, isMobile, isScrollable = false]) => ({
    src: `/project-screenshots/${folder}/${filename.split("/").map(encodeURIComponent).join("/")}`,
    alt,
    isMobile,
    isScrollable,
  }));
}

const projectScreenshots: Record<string, ProjectScreenshot[]> = {
  mseso: createScreenshots("mseso", [
    ["Home Page.png", "MSESO homepage", false], ["Dashboard.png", "MSESO dashboard", false], ["Home.png", "MSESO mobile home", true], ["FAQ.png", "MSESO frequently asked questions", true], ["Nearby Help.png", "MSESO nearby help", true], ["Support-Maintenance.png", "MSESO support and maintenance", false], ["Alert control center.png", "MSESO alert control center", false], ["Communication Center 2.png", "MSESO communication center", false], ["Intro.png", "MSESO app introduction", true], ["Login3-1.png", "MSESO login screen", true], ["Reset Email.png", "MSESO reset email screen", true],
  ]),
  cuamm: createScreenshots("EMR", [
    ["Log in.png", "CUAMM login", false], ["Main Dashboard.png", "CUAMM main dashboard", false], ["ODP adult 0.png", "CUAMM adult patient record", false], ["ODP adult 2.png", "CUAMM adult patient details", false], ["Personal Info 3.png", "CUAMM personal information", false], ["Report.png", "CUAMM report", false], ["Search 3 - Profile.png", "CUAMM patient search", false], ["Settings 2.png", "CUAMM settings", false], ["Settings 3.png", "CUAMM settings details", false], ["Sickleave 1.png", "CUAMM sick leave", false], ["Sickleave 3.png", "CUAMM sick leave details", false],
  ]),
  ercs: createScreenshots("ERCS", [
    ["Land.png", "ERCS landing page", true], ["Landinf Page.png", "ERCS landing information", false, true], ["Humaniterian.png", "ERCS humanitarian page", false], ["News.png", "ERCS news", false], ["PR1.png", "ERCS public relations", false], ["Train.png", "ERCS training", false], ["Admin Dashboard.png", "ERCS admin dashboard", false], ["Manage members.png", "ERCS member management", false], ["memberRegister.png", "ERCS member registration", false], ["Reg mem 1.png", "ERCS registration", true], ["Reg mem 2.png", "ERCS registration details", true], ["Reg mem 3.png", "ERCS registration confirmation", true], ["view member.png", "ERCS member profile", false], ["Volenteer Hub.png", "ERCS volunteer hub", false], ["Volenteer Register.png", "ERCS volunteer registration", false], ["Volenteer Register-1.png", "ERCS volunteer registration details", false], ["volunteer-dashboard.png", "ERCS volunteer dashboard", false], ["volunteer-noti.png", "ERCS volunteer notifications", false], ["vol- ID 1.png", "ERCS volunteer ID", false], ["vol- ID 2.png", "ERCS volunteer ID details", false], ["Blood D.png", "ERCS blood donation", false], ["Chat.png", "ERCS chat", false], ["Events mob.png", "ERCS mobile events", true], ["Explore mob.png", "ERCS mobile explore", true],
  ]),
  nova: createScreenshots("Nova-Ecommerce", [["Home.png", "Nova homepage", false], ["About Us.png", "Nova about page", false], ["Contact Us.png", "Nova contact page", false]]),
  skyline: createScreenshots("Skyline-Travel-Solution", [["Home.png", "Skyline homepage", false], ["Book a Consultation.png", "Skyline consultation booking", false], ["Contact Us.png", "Skyline contact page", false], ["Resources.png", "Skyline resources", false], ["Travel Services.png", "Skyline travel services", false]]),
  weyra: createScreenshots("werya-green", [["Home.png", "Weyra homepage", false], ["Home - Mobile.png", "Weyra mobile homepage", true], ["About.png", "Weyra about page", false], ["Service.png", "Weyra services", false], ["Contact.png", "Weyra contact page", false]]),
  birhana: createScreenshots("Birhana", [["landing page 2.png", "Birhana landing page", false], ["courses.png", "Birhana courses", false], ["admin dashboard.png", "Birhana admin dashboard", false], ["admin dashboard-1.png", "Birhana admin dashboard details", false], ["admin dashboard-2.png", "Birhana admin dashboard view", false], ["admin dashboard-3.png", "Birhana admin dashboard reports", false], ["admin tutors.png", "Birhana tutor management", false], ["tutor detail.png", "Birhana tutor details", false], ["Tutor dashboard/overview.png", "Birhana tutor dashboard", false], ["Tutor dashboard/my schedule.png", "Birhana tutor schedule", false], ["Student dashboeard/Find tutor.png", "Birhana find tutor", false], ["Student dashboeard/My Sessions.png", "Birhana student sessions", false], ["Student dashboeard/Play-Course.png", "Birhana course player", false], ["Verify tutor/certifications.png", "Birhana tutor certifications", false], ["sign up/Frame 1321314143.png", "Birhana signup", false], ["sign up/Reset password Page student.png", "Birhana reset password", false], ["sign up/tutor/Login Page.png", "Birhana tutor login", false]]),
  haburu: createScreenshots("Haburu", [["D1.png", "Haburu infographic one", false], ["D2.png", "Haburu infographic two", false], ["D3.png", "Haburu infographic three", false]]),
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
        <section className="detail-story"><div className="detail-story-intro"><span className="detail-section-label">The project</span><h2>A closer look at<br /><i>the thinking.</i></h2></div><div className="detail-story-copy"><p>{stories[project.id]}</p><div className="detail-facts"><div><span>Role</span><b>{project.role}</b></div><div><span>Year</span><b>{project.year}</b></div><div><span>Tools</span><b>{project.tags.join(" · ")}</b></div></div></div>{projectScreenshots[project.id]?.length > 0 && <div className="detail-real-shot"><span className="detail-section-label">Product screens</span><div className="detail-screenshot-group"><h3>Web experience</h3><div className="detail-screenshot-grid detail-web-grid">{projectScreenshots[project.id].filter((screenshot) => !screenshot.isMobile).map((screenshot) => <figure key={screenshot.src}><div className={`detail-screenshot-frame is-web ${screenshot.isScrollable ? "is-scrollable" : ""}` }><img src={screenshot.src} alt={screenshot.alt} loading="lazy" /></div><figcaption>{screenshot.alt}</figcaption></figure>)}</div></div>{projectScreenshots[project.id].some((screenshot) => screenshot.isMobile) && <div className="detail-screenshot-group"><h3>Mobile experience</h3><div className="detail-screenshot-grid detail-mobile-grid">{projectScreenshots[project.id].filter((screenshot) => screenshot.isMobile).map((screenshot) => <figure key={screenshot.src}><div className="detail-screenshot-frame is-mobile"><img src={screenshot.src} alt={screenshot.alt} loading="lazy" /></div><figcaption>{screenshot.alt}</figcaption></figure>)}</div></div>}</div>}</section>
        <section className="detail-outcomes"><div className="detail-outcomes-heading"><span className="detail-section-label">What I explored</span><p>Designing with intent means making space for the problem first — then shaping a useful response.</p></div><div className="outcome-list">{(outcomes[project.id] || []).map((outcome, index) => <div className="outcome-row" key={outcome}><span>0{index + 1}</span><CheckCircle2 size={19} /><b>{outcome}</b></div>)}</div></section>
        <section className="detail-next"><Link href="/" className="detail-next-link"><span>Back to selected work</span><ArrowUpRight size={20} /></Link></section>
      </main>
      <footer className="site-footer"><Link className="brand" href="/"><span>DIANA LUEL</span></Link><span>Let’s make something useful.</span><a href="mailto:lueldiana@gmail.com">lueldiana@gmail.com</a></footer>
    </div>
  );
}
