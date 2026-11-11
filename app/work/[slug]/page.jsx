import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { BsArrowLeft, BsArrowUpRight, BsGithub } from "react-icons/bs";
import { projects, getProject, localizeProject } from "@/data/projects";
import { getLang } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import ProjectImage from "@/components/ProjectImage";
import { Button } from "@/components/ui/button";


export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const project = localizeProject(getProject(params.slug), getLang());
  return project ? { title: project.title, description: project.summary } : {};
}

const Section = ({ title, children }) => (
  <div className="flex flex-col gap-3">
    <h3 className="text-2xl font-semibold text-accent">{title}</h3>
    {children}
  </div>
);

export default function ProjectPage({ params }) {
  const lang = getLang();
  const t = getDictionary(lang).work;
  const project = localizeProject(getProject(params.slug), lang);
  if (!project) notFound();

  return (
    <section className="py-12">
      <div className="container mx-auto max-w-[900px] flex flex-col gap-10">
        <Link href="/work" className="flex items-center gap-2 text-white/60 hover:text-accent w-max">
          <BsArrowLeft /> {t.allProjects}
        </Link>

        <div className="flex flex-col gap-3">
          <p className="text-accent">
            {project.type} · {project.year}
          </p>
          <h1 className="text-[36px] xl:text-[52px] font-bold leading-tight">{project.title}</h1>
          <p className="text-white/70 text-lg">{project.summary}</p>
        </div>

     
        {project.video ? (
          <div className="flex flex-col gap-2">
            <video
              src={project.video}
              poster={project.poster}
              controls
              muted
              playsInline
              preload="none"
              className="w-full rounded-xl bg-black"
            />
            {project.videoCaption && <p className="text-sm text-white/40">{project.videoCaption}</p>}
          </div>
        ) : (
          <div className="relative w-full h-[260px] md:h-[440px] rounded-xl overflow-hidden">
            <ProjectImage project={project} sizes="(min-width: 900px) 900px, 100vw" altPrefix={t.screenshotOf} />
          </div>
        )}

        <div className="flex flex-wrap gap-4 items-center">
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="flex gap-2">
                {t.liveDemo} <BsArrowUpRight />
              </Button>
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="flex gap-2">
                <BsGithub /> {t.sourceCode}
              </Button>
            </a>
          )}
          {project.note && <span className="text-sm text-white/40">{project.note}</span>}
        </div>

        {project.problem && (
          <Section title={t.problem}>
            <p className="text-white/70">{project.problem}</p>
          </Section>
        )}

        {project.role && (
          <Section title={t.role}>
            <p className="text-white/70">{project.role}</p>
          </Section>
        )}

        {project.features?.length > 0 && (
          <Section title={t.features}>
            <ul className="list-disc pl-6 text-white/70 flex flex-col gap-1">
              {project.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </Section>
        )}

        {project.gallery?.length > 0 && (
          <Section title={t.screenshots}>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.gallery.map((g) => (
                <li key={g.src} className="flex flex-col gap-2">
                  <a
                    href={g.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative block w-full aspect-[1600/787] rounded-lg overflow-hidden border border-white/10 hover:border-accent transition-all"
                  >
                    <Image
                      src={g.src}
                      alt={g.caption}
                      fill
                      sizes="(min-width: 768px) 450px, 100vw"
                      className="object-cover object-top"
                    />
                  </a>
                  <span className="text-sm text-white/60">{g.caption}</span>
                </li>
              ))}
            </ul>
          </Section>
        )}

        <Section title={t.stack}>
          <ul className="flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <li key={s} className="text-sm text-accent border border-accent/40 rounded-full px-3 py-1">
                {s}
              </li>
            ))}
          </ul>
        </Section>
      </div>
    </section>
  );
}
