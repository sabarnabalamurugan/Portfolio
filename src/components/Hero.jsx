function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-[#DDF4E7] text-[#124170] px-6 pt-20">
      <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide mb-2 leading-tight">
        Sabarna Balamurugan
      </h1>
      <h2 className="text-xl md:text-2xl font-medium text-[#26667F] mb-4">
        ServiceNow Developer
      </h2>
      <p className="max-w-xl text-center text-base md:text-lg text-[#3a5f5f] mb-6 border-l-4 border-[#67C090] pl-4">
        Certified CSA, CAD, and CIS-ITSM with 2+ years of experience in custom applications, Service Catalog, and ITIL-aligned solutions. Skilled in automation, UI policies, and client scripts.
      </p>
      <a
        href="#contact"
        className="px-6 py-3 bg-[#124170] text-[#DDF4E7] font-semibold rounded-full shadow hover:scale-105 hover:bg-[#26667F] transition-transform"
      >
        Contact Me
      </a>
    </section>
  );
}

export default Hero;
