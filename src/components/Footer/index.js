import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Work', to: '/Portfolio' },
    { label: 'Skills', to: '/skills' },
    { label: 'Contact', to: '/contact' },
  ];

  const socials = [
    { icon: <FiGithub size={20} />, href: 'https://github.com/kaleb6737', label: 'GitHub' },
    { icon: <FiLinkedin size={20} />, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <FiMail size={20} />, href: 'mailto:kalebdemissie61@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="w-full border-t border-slate-800/60 mt-auto relative z-10">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-extrabold text-white mb-3">
              <span className="text-gradient">Kaleb.</span>
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Freelance Full-Stack Engineer building high-performance digital experiences. Based in Waterloo, ON 🇨🇦
            </p>
            <div className="flex gap-4 mt-6">
              {socials.map((s, i) => (
                <motion.a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  aria-label={s.label}
                  className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/50 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Nav Links */}
          <div>
            <h4 className="text-white font-bold mb-5 uppercase tracking-widest text-xs">Navigation</h4>
            <ul className="space-y-3">
              {navLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.to}
                    className="text-slate-400 hover:text-cyan-400 transition-colors text-sm font-medium hover:translate-x-1 inline-block transition-transform"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-white font-bold mb-5 uppercase tracking-widest text-xs">Ready to Build?</h4>
            <p className="text-slate-400 text-sm mb-5 leading-relaxed">
              Have a project in mind? I'm currently available for freelance work. Let's talk.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-sm px-6 py-3 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-500/30"
            >
              <FiMail size={16} /> Get In Touch
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} Kaleb Demissie. All rights reserved.
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/50 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
            aria-label="Scroll to top"
          >
            <FiArrowUp size={18} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
