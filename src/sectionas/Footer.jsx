import React from 'react'
import { Link } from 'react-scroll'

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative pt-32 pb-8 overflow-hidden bg-gradient-to-b from-transparent to-slate-50/20">
      <div className="container relative z-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-16">
          {/* Logo Section */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="text-3xl font-extrabold bg-gradient-to-r from-p1 via-violet-500 to-p2 bg-clip-text text-transparent mb-6 tracking-tight">
              WaveEdit
            </div>
            <p className="text-slate-600 text-lg leading-relaxed mb-8 font-medium max-w-md">
              Transform your videos with AI-powered editing tools. Create professional content effortlessly.
            </p>
            <div className="flex gap-5 flex-wrap">
              {socialLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center size-11 rounded-xl bg-white shadow-sm hover:shadow-md hover:scale-110 transition-all duration-300 border border-slate-100"
                >
                  <div 
                    className="size-5 text-slate-400 group-hover:text-p1 transition-colors"
                    dangerouslySetInnerHTML={{ __html: link.icon }} 
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {footerLinks.map((section) => (
            <div key={section.title} className="col-span-1">
              <h3 className="text-slate-800 font-bold text-lg mb-6">{section.title}</h3>
              <ul className="flex flex-col gap-4">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      smooth={true}
                      duration={500}
                      className="text-slate-500 hover:text-p1 transition-colors cursor-pointer font-medium"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-slate-200">
          <p className="text-slate-500 font-medium order-2 md:order-1">
            © {year} WaveEdit. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 order-1 md:order-2">
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                className="text-slate-400 hover:text-p1 transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Background Effects */}
      <div className="absolute -top-48 left-0 right-0 h-72 bg-gradient-to-b from-white/0 to-white/80 backdrop-blur-sm -z-1" />
      <div className="absolute top-0 left-1/4 size-96 bg-p1/10 rounded-full blur-[100px] -z-1 animate-pulse" />
      <div className="absolute top-24 right-1/4 size-96 bg-p2/10 rounded-full blur-[100px] -z-1 animate-pulse" />
    </footer>
  )
}

const socialLinks = [
  {
    name: 'Twitter',
    url: 'https://twitter.com',
    icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"/></svg>'
  },
  {
    name: 'GitHub',
    url: 'https://github.com',
    icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>'
  },
  {
    name: 'Discord',
    url: 'https://discord.com',
    icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.118.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>'
  }
]

const footerLinks = [
  {
    title: 'Product',
    links: [
      { label: 'Features', to: 'features' },
      { label: 'How it Works', to: 'how-it-works' },
      { label: 'Pricing', to: 'pricing' },
      { label: 'Download', to: 'download' }
    ]
  },
  {
    title: 'Company',
    links: [
      { label: 'About', to: 'about' },
      { label: 'Blog', to: 'blog' },
      { label: 'Careers', to: 'careers' },
      { label: 'Contact', to: 'contact' }
    ]
  },
  {
    title: 'Resources',
    links: [
      { label: 'Documentation', to: 'docs' },
      { label: 'Help Center', to: 'help' },
      { label: 'Community', to: 'community' },
      { label: 'Templates', to: 'templates' }
    ]
  }
]

const legalLinks = [
  { label: 'Privacy Policy', url: '/privacy' },
  { label: 'Terms of Service', url: '/terms' },
  { label: 'Cookie Policy', url: '/cookies' }
]

export default Footer