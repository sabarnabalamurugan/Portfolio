function Skills() {
  const skills = [
    "Custom Application Development",
    "Workflow Automation",
    "Service Catalog",
    "Flow Designer",
    "Business Rules",
    "Client Scripts",
    "Power BI",
    "Incident Management",
  ];

  return (
    <section id="skills" className="py-12 px-6 bg-[#26667F] text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-xs uppercase tracking-widest text-white mb-2">Skills</h2>
        <h3 className="text-3xl font-bold mb-6">Technical Expertise</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-[#67C090] px-4 py-6 rounded-lg shadow flex items-center justify-center text-center font-medium text-white hover:scale-105 transition-transform"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
