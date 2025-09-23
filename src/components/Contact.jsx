function Contact() {
  return (
    <section id="contact" className="py-12 px-6 bg-[#67C090] text-white">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-xs uppercase tracking-widest text-[#DDF4E7] mb-2">Contact</h2>
        <h3 className="text-3xl font-bold mb-4">Get In Touch</h3>
        <p className="mb-6 text-[#DDF4E7]">
          Interested in working together or have a question? Drop me a message!
        </p>
        <a
          href="mailto:sabarnabalamurugan@gmail.com"
          className="inline-block px-6 py-3 bg-[#124170] text-[#DDF4E7] font-semibold rounded-full shadow hover:scale-105 hover:bg-[#26667F] transition-transform"
        >
          Say Hello
        </a>
      </div>
    </section>
  );
}

export default Contact;
