import Image from "next/image";
const ProjectImage = ({ project, sizes = "(min-width: 1200px) 50vw, 100vw" }) => {
  if (!project.image) {
    return (
      <div className="w-full h-full flex flex-col justify-center items-center gap-3 bg-gradient-to-br from-[#232329] to-[#1c1c22] text-center px-8">
        <span className="text-6xl font-extrabold text-transparent text-outline">{project.num}</span>
        <span className="text-2xl font-semibold text-white/80">{project.title}</span>
      </div>
    );
  }
  return (
    <Image
      src={project.image}
      fill
      sizes={sizes}
      className="object-cover object-left-top"
      alt={`Screenshot of ${project.title}`}
    />
  );
};

export default ProjectImage;
