function Projects() {
  const projectList = [
    {
      title: "Incident Management App",
      description: "Automated ticket routing and SLA tracking using ServiceNow workflows.",
    },
    {
      title: "Custom HR Portal",
      description: "Built a responsive portal for onboarding and employee self-service.",
    },
  ];

  return (
    <section id="projects" className="py-12 px-6 bg-[#DDF4E7] text-[#124170]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-xs uppercase tracking-widest text-[#26667F] mb-2">Projects</h2>
        <h3 className="text-3xl font-bold mb-6">Featured Work</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {projectList.map((project, index) => (
            <div key={index} className="bg-white border-l-4 border-[#67C090] p-6 rounded-lg shadow hover:shadow-lg transition">
              <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
              <p className="text-[#3a5f5f]">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
