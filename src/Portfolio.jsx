import React, { useState, useEffect } from 'react';
import { Menu, X, ExternalLink, Github, Linkedin, Mail, ChevronDown, Star, Award, Code, Zap, Users, TrendingUp, Download, Calendar, MapPin, CheckCircle } from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setActiveSection(id);
    setIsMenuOpen(false);

    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ ehavibor: 'smooth', block: 'start' });
    }
  };

  const skills = [
    { category: 'Frontend', items: ['React', 'HTML/CSS', 'JavaScript', 'Tailwind CSS', 'Redux', 'React Router', 'Next.js', 'Vue.js'] },
    { category: 'Backend', items: ['Node.js', 'JavaScript', 'REST APIs', 'Express', 'MongoDB', 'PostgreSQL', 'Firebase', 'JWT Auth'] },
    { category: 'Tools & Libs', items: ['Git', 'Telegraf Bot', 'VS Code', 'npm', 'Webpack', 'Vite', 'Socket.io', 'GraphQL'] },
    { category: 'Design', items: ['UI/UX Principles', 'Figma', 'Responsive Design', 'Accessibility', 'Animation', 'CSS Grid', 'Flexbox', 'Bootstrap'] }
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Fully functional online shopping platform with product filtering, cart management, and secure payment integration',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#',
      featured: true,
      image: '🛒'
    },
    {
      title: 'Real-time Chat Application',
      description: 'Messaging app with WebSocket support, user authentication, message history, and real-time notifications',
      tech: ['React', 'Node.js', 'Socket.io', 'PostgreSQL'],
      link: '#',
      featured: true,
      image: '💬'
    },
    {
      title: 'Telegram Bot Dashboard',
      description: 'Automated bot for task management and notifications with admin dashboard for monitoring',
      tech: ['Node.js', 'Telegraf', 'JavaScript', 'Express'],
      link: '#',
      featured: false,
      image: '🤖'
    },
    {
      title: 'Task Management System',
      description: 'Productivity app with task tracking, reminders, team collaboration, and progress analytics',
      tech: ['React', 'Node.js', 'Firebase', 'Tailwind CSS'],
      link: '#',
      featured: false,
      image: '✅'
    },
    {
      title: 'Blog Platform',
      description: 'Content management system with rich text editor, comments, user authentication, and SEO optimization',
      tech: ['React', 'Express', 'MongoDB', 'Next.js'],
      link: '#',
      featured: false,
      image: '📝'
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather app with location services, forecasts, and beautiful data visualization',
      tech: ['React', 'API Integration', 'Chart.js', 'Tailwind CSS'],
      link: '#',
      featured: false,
      image: '⛅'
    },
    {
      title: 'Portfolio Builder',
      description: 'Drag-and-drop portfolio creation tool with customizable templates and one-click deployment',
      tech: ['React', 'Redux', 'Node.js', 'AWS S3'],
      link: '#',
      featured: false,
      image: '🎨'
    },
    {
      title: 'Social Media Analytics',
      description: 'Dashboard for tracking social media metrics, engagement rates, and audience insights with data export',
      tech: ['React', 'GraphQL', 'D3.js', 'PostgreSQL'],
      link: '#',
      featured: false,
      image: '📊'
    }
  ];

  const experience = [
    {
      title: 'Freelance Frontend Developer',
      company: 'Self-employed',
      period: '2022 - Present',
      description: 'Developed multiple client projects ranging from simple landing pages to complex full-stack applications',
      achievements: ['Built 15+ projects', 'Satisfied 10+ clients', '4.9/5 average rating']
    },
    {
      title: 'University Student',
      company: 'TATU Qarshi / KIU',
      period: '2023 - Present',
      description: 'Pursuing Computer Engineering with focus on software development and modern web technologies',
      achievements: ['DTM exam passed', 'Active in hackathons', 'Teaching peers']
    },
    {
      title: 'React Developer',
      company: 'Personal Projects',
      period: '2021 - 2022',
      description: 'Mastered React fundamentals and built increasingly complex applications from scratch',
      achievements: ['Completed 20+ tutorials', 'Built SPA applications', 'Open source contributions']
    }
  ];

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '15+', label: 'Happy Clients' },
    { number: '2+', label: 'Years Experience' },
    { number: '100%', label: 'Dedication' }
  ];

  const navigationItems = ['Home', 'About', 'Services', 'Projects', 'Experience', 'Skills', 'Testimonials', 'Contact'];

  const services = [
    {
      icon: <Code size={32} />,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies'
    },
    {
      icon: <Zap size={32} />,
      title: 'Performance Optimization',
      description: 'Fast loading times and smooth user experiences'
    },
    {
      icon: <Users size={32} />,
      title: 'Team Collaboration',
      description: 'Work efficiently with teams and follow best practices'
    },
    {
      icon: <TrendingUp size={32} />,
      title: 'Scalable Solutions',
      description: 'Build applications that grow with your business'
    }
  ];

  const testimonials = [
    {
      name: 'Ali Rahimov',
      role: 'Entrepreneur',
      text: 'Excellent developer! Delivered the project on time with high quality code. Highly recommended!',
      rating: 5
    },
    {
      name: 'Fatima Karimbayeva',
      role: 'Business Owner',
      text: 'Very professional and attentive to detail. The website exceeded my expectations.',
      rating: 5
    },
    {
      name: 'Shohrat Karimov',
      role: 'Startup Founder',
      text: 'Great communication and problem-solving skills. Perfect for our startup needs.',
      rating: 5
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center font-bold">
                C
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Developer
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              {navigationItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`transition-colors duration-300 text-sm font-medium ${activeSection === item.toLowerCase() ? 'text-cyan-400' : 'hover:text-cyan-400'}`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-slate-700 rounded-lg transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              {navigationItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${activeSection === item.toLowerCase() ? 'bg-slate-700 text-cyan-400' : 'hover:bg-slate-700'}`}
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-6 animate-fade-in">
            <div className="w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 p-1">
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center text-6xl font-bold">
                👨‍💻
              </div>
            </div>
          </div>

          <h1 className="text-6xl sm:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Frontend Developer & Creator
          </h1>
          <p className="text-2xl text-slate-300 mb-4 max-w-3xl mx-auto">
            Building beautiful, fast, and user-friendly web applications
          </p>
          <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto">
            Self-taught developer from Uzbekistan. Specialized in React, JavaScript, and modern web technologies. Transforming ideas into digital reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 text-lg">
              View My Work
            </button>
            <button className="px-8 py-4 border border-cyan-400 rounded-lg font-medium hover:bg-cyan-400/10 transition-colors text-lg">
              Let's Talk
            </button>
            <button className="px-8 py-4 border border-slate-600 rounded-lg font-medium hover:bg-slate-700/50 transition-colors text-lg flex items-center justify-center gap-2">
              <Download size={20} /> Resume
            </button>
          </div>

          <div className="flex justify-center gap-8 text-slate-400 mb-16">
            <a href="#" className="hover:text-cyan-400 transition-colors hover:scale-110 duration-300">
              <Github size={32} />
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors hover:scale-110 duration-300">
              <Linkedin size={32} />
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors hover:scale-110 duration-300">
              <Mail size={32} />
            </a>
          </div>

          <div className="mt-16 animate-bounce">
            <ChevronDown size={40} className="mx-auto text-cyan-400" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/50 border-y border-slate-700">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                <div className="text-slate-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
              <p>
                I'm a passionate self-taught frontend developer from Uzbekistan with a deep love for creating beautiful and functional web experiences. My journey into web development started with curiosity and has evolved into a professional career.
              </p>
              <p>
                With expertise in React, JavaScript, and modern web technologies, I specialize in building scalable applications that solve real-world problems. I believe in writing clean, maintainable code and staying updated with the latest industry trends.
              </p>
              <p>
                Currently pursuing Computer Engineering at TATU Qarshi, I combine academic knowledge with hands-on experience. I'm committed to continuous learning and mentoring fellow developers in my community.
              </p>
              <p>
                When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and helping others learn web development through teaching and writing.
              </p>
              <div className="pt-6 flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <CheckCircle size={24} className="text-cyan-400" />
                  <span>Self-taught developer with 2+ years experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={24} className="text-cyan-400" />
                  <span>50+ projects successfully completed</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={24} className="text-cyan-400" />
                  <span>Strong focus on clean code and best practices</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={24} className="text-cyan-400" />
                  <span>Quick learner and problem solver</span>
                </div>
              </div>
            </div>
            <div className="bg-slate-800 p-12 rounded-lg border border-slate-700 space-y-6">
              <h3 className="text-2xl font-bold mb-8">Quick Facts</h3>
              <div className="space-y-6">
                <div className="border-b border-slate-600 pb-4">
                  <div className="text-slate-400 text-sm mb-2">Location</div>
                  <div className="text-xl font-medium flex items-center gap-2">
                    <MapPin size={20} className="text-cyan-400" /> Qarshi, Uzbekistan
                  </div>
                </div>
                <div className="border-b border-slate-600 pb-4">
                  <div className="text-slate-400 text-sm mb-2">Experience</div>
                  <div className="text-xl font-medium">2+ Years (Self-taught)</div>
                </div>
                <div className="border-b border-slate-600 pb-4">
                  <div className="text-slate-400 text-sm mb-2">Primary Focus</div>
                  <div className="text-xl font-medium">Frontend & Full-stack</div>
                </div>
                <div className="border-b border-slate-600 pb-4">
                  <div className="text-slate-400 text-sm mb-2">Education</div>
                  <div className="text-xl font-medium">Computer Engineering</div>
                </div>
                <div>
                  <div className="text-slate-400 text-sm mb-2">Availability</div>
                  <div className="text-xl font-medium text-cyan-400">Available for Projects</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center">Services I Offer</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-slate-900 p-8 rounded-lg border border-slate-700 hover:border-cyan-400 transition-all hover:shadow-lg hover:shadow-cyan-500/20 group">
                <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center">Experience & Education</h2>
          <div className="space-y-8">
            {experience.map((exp, idx) => (
              <div key={idx} className="bg-slate-800 p-8 rounded-lg border border-slate-700 hover:border-cyan-400 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold">{exp.title}</h3>
                    <p className="text-cyan-400 text-lg">{exp.company}</p>
                  </div>
                  <div className="text-slate-400 flex items-center gap-2">
                    <Calendar size={20} /> {exp.period}
                  </div>
                </div>
                <p className="text-slate-300 mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-3">
                  {exp.achievements.map((achievement, i) => (
                    <span key={i} className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">
                      {achievement}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center">Featured Projects</h2>

          {/* Featured Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-cyan-400">Highlighted Work</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.filter(p => p.featured).map((project, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-lg border border-cyan-400/50 hover:border-cyan-400 transition-all hover:shadow-lg hover:shadow-cyan-500/30"
                >
                  <div className="text-6xl mb-4">{project.image}</div>
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-slate-300 mb-6 text-lg">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-lg font-medium"
                  >
                    View Project <ExternalLink size={20} />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Other Projects */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-slate-300">Other Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {projects.filter(p => !p.featured).map((project, idx) => (
                <div
                  key={idx}
                  className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-cyan-400 transition-all hover:shadow-lg hover:shadow-cyan-500/20"
                >
                  <div className="text-4xl mb-3">{project.image}</div>
                  <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                  <p className="text-slate-400 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-slate-700 text-cyan-300 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                  >
                    View <ExternalLink size={14} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center">Skills & Technologies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, idx) => (
              <div key={idx} className="bg-slate-800 p-8 rounded-lg border border-slate-700 hover:border-cyan-400 transition-colors hover:shadow-lg hover:shadow-cyan-500/20">
                <h3 className="text-xl font-bold mb-6 text-cyan-400">{skill.category}</h3>
                <div className="flex flex-wrap gap-3">
                  {skill.items.map((item, i) => (
                    <span key={i} className="px-4 py-2 bg-slate-700 rounded-lg text-sm hover:bg-cyan-500/20 hover:text-cyan-300 transition-colors cursor-default">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center">Client Testimonials</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-slate-900 p-8 rounded-lg border border-slate-700 hover:border-cyan-400 transition-colors">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-300 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-lg">{testimonial.name}</p>
                  <p className="text-slate-400">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-2xl text-slate-300 mb-12">
            Let's work together to bring your ideas to life. I'm here to help you build something amazing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-bold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 text-lg">
              Get Started Now
            </button>
            <button className="px-10 py-4 border-2 border-cyan-400 rounded-lg font-bold hover:bg-cyan-400/10 transition-colors text-lg">
              Schedule a Call
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center">Get In Touch</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-900 p-8 rounded-lg border border-slate-700 text-center">
              <Mail size={40} className="mx-auto mb-4 text-cyan-400" />
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <a href="mailto:your@email.com" className="text-slate-300 hover:text-cyan-400 transition-colors">
                your@email.com
              </a>
            </div>
            <div className="bg-slate-900 p-8 rounded-lg border border-slate-700 text-center">
              <Linkedin size={40} className="mx-auto mb-4 text-cyan-400" />
              <h3 className="text-xl font-bold mb-2">LinkedIn</h3>
              <a href="#" className="text-slate-300 hover:text-cyan-400 transition-colors">
                Connect with me
              </a>
            </div>
            <div className="bg-slate-900 p-8 rounded-lg border border-slate-700 text-center">
              <Github size={40} className="mx-auto mb-4 text-cyan-400" />
              <h3 className="text-xl font-bold mb-2">GitHub</h3>
              <a href="#" className="text-slate-300 hover:text-cyan-400 transition-colors">
                View my code
              </a>
            </div>
          </div>
          <div className="text-center">
            <button className="px-12 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-bold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 text-lg">
              Send Email
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h4 className="font-bold mb-4 text-cyan-400">Quick Links</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Projects</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-cyan-400">Services</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Web Development</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Frontend Design</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Consultation</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Optimization</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-cyan-400">Follow Me</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">GitHub</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Telegram</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-cyan-400">Resources</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Tutorials</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Resume</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8 text-center text-slate-400">
            <p>© 2024 Frontend Developer. All rights reserved. Built with React & Tailwind CSS.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
