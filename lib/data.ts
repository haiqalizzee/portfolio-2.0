import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'haiqalizzee@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Tajmirul, I am reaching out to you because...',

    oldPortfolio: 'https://www.legacy.me.toinfinite.dev',
    upworkProfile: 'https://www.upwork.com/freelancers/tajmirul',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/haicoool' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/haiqalizzee' },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'Javascript',
            icon: '/logo/js.png',
        },
        {
            name: 'Typescript',
            icon: '/logo/ts.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'Bootstrap',
            icon: '/logo/bootstrap.svg',
        },
    ],
    backend: [
        {
            name: 'Laravel',
            icon: '/logo/laravel.png',
        },
    ],
    database: [
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
        {
            name: 'PostgreSQL',
            icon: '/logo/postgreSQL.png',
        },
        {
            name: 'Firebase',
            icon: '/logo/firebase.svg',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'GitLab',
            icon: '/logo/gitlab.svg',
        },
        {
            name: 'SourceTree',
            icon: '/logo/sourcetree.svg',
        },
        {
            name: 'Docker',
            icon: '/logo/docker.svg',
        },
        {
            name: 'AWS (S3)',
            icon: '/logo/aws.png',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'VolComm',
        slug: 'volcomm',
        liveUrl: 'https://volcomm-fyp-production.up.railway.app/',
        year: 2025,
        description: `
  A centralized volunteer management platform designed to connect volunteers with organizations, streamline event participation, and automate certificate generation. <br/><br/>
  
  Key Features:<br/>
  <ul>
    <li>📋 Opportunity Listings: Volunteers can browse and register for events based on their interests</li>
    <li>✅ Attendance Approval: Organizations can approve volunteer participation for activities if required</li>
    <li>🎓 Certificate Generation: Auto-generate certificates with organization logo and signature after approval</li>
    <li>🔍 Smart Filtering: Filters to match volunteers with relevant opportunities based on user interest</li>
    <li>🧑‍💼 Role-Based Access: Custom dashboards for volunteers, organizations, and admins</li>
  </ul><br/>

  Technical Highlights:
  <ul>
    <li>Implemented certificate generation using DOMPDF in Laravel</li>
    <li>Used Laravel Policy & Gate for permission control between roles</li>
    <li>Designed a responsive UI with Tailwind CSS and Flowbite</li>
    <li>Built interest-based filtering to enhance opportunity discovery</li>
  </ul>
`,
        role: `
  Full-Stack Developer <br/>
  Led the end-to-end system architecture and development for the entire platform.<br/>
  <ul>
    <li>🛠️ Backend: Developed using Laravel with Eloquent ORM, policies, and role-based access control</li>
    <li>🎨 Frontend: Created clean and responsive UIs using Tailwind CSS and Flowbite components</li>
    <li>🚀 Deployment: Deployed on shared hosting with optimization for database performance</li>
  </ul>
`,
        techStack: ['Laravel', 'Tailwind CSS', 'Flowbite', 'MySQL'],
        thumbnail: '/projects/thumbnail/volcommm.png',
        longThumbnail: '/projects/long/volcommm.png',
        images: ['/projects/images/volcommm.png'],
    },
    {
        title: 'MemeApp',
        slug: 'memeapp',
        techStack: [
            'React',
            'Vite',
            'TypeScript',
            'Tailwind CSS',
            'Framer Motion',
            'Firebase Firestore',
            'Reddit API',
        ],
        thumbnail: '/projects/thumbnail/memeapp.png',
        longThumbnail: '/projects/long/memeapp.png',
        images: ['/projects/images/memeapp.png'],
        liveUrl: 'https://meme-app-amber.vercel.app/',
        year: 2024,
        description: `MemeApp is a fun and lightweight web app that allows users to discover, like, and save random memes from Reddit. It supports offline usage with PWA functionality and offers a native-like experience on mobile. Features include user authentication, meme downloading, and real-time syncing with Firebase.`,
        role: `As the frontend developer and solo builder of the project, I:<br/>
        - Built the app using React, Vite, and TypeScript for high performance and fast iteration.<br/>
        - Designed responsive UI components with Tailwind CSS and Framer Motion.<br/>
        - Integrated Reddit API for dynamic meme fetching and Firebase Firestore for storage.<br/>
        - Enabled PWA support for offline capability and installability.<br/>
        - Added download functionality for memes, including CORS-free image and video saving.`,
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Web Developer Intern',
        company: 'Ean Label Industry Sdn Bhd',
        duration: 'Mar 2025 - July 2025',
    },
    {
        title: 'IT Intern',
        company: 'Tulip Resources Sdn Bhd',
        duration: 'Sept 2023 - Feb 2024',
    },
];
