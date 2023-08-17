module.exports = {
  siteTitle: 'Satyam Bansal | Software Developer',
  siteDescription:
    'Satyam Bansal is a software developer and educator based in New Delhi, India.',
  siteKeywords:
    'Satyam Bansal, Satyam, Bansal, satyambnsal, satyambnsal, satyam-bansal, New Delhi, software engineer, front-end engineer, web developer, javascript, India, Educator, Blockchain, Crypto, Web3',
  siteUrl: 'https://satyambnsal.com',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-172670715-1',
  googleVerification: '',
  name: 'Satyam Bansal',
  location: 'New Delhi, India',
  email: 'satyamsgsits1994@gmail.com',
  github: 'https://github.com/satyambnsal',
  linkedin: 'https://www.linkedin.com/in/satyam-bansal',
  twitterHandle: '@satyambnsal',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/satyambnsal',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/satyam-bansal',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/satyambnsal',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
      external: false,
    },
    {
      name: 'Experience',
      url: '/#jobs',
      external: false,
    },
    {
      name: 'Work',
      url: '/#projects',
      external: false,
    },
    {
      name: 'Contact',
      url: '/#contact',
      external: false,
    },
    {
      name: 'Blog',
      url: 'https://satyambnsal.medium.com/',
      external: true,
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
