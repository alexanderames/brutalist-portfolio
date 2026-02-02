import type { PageView } from './types';

// Still-life gallery images from directories starting with an integer (public/40860_119374_268264, public/000220490001)
const dir1 = '40860_119374_268264';
const dir2 = '000220490001';
const galleryFromDir1 = Array.from({ length: 37 }, (_, i) => `/${dir1}/kodak_200_c_41_40860_119374_268264_${String(8400001 + i).padStart(12, '0')}.jpg`);
const galleryFromDir2 = Array.from({ length: 38 }, (_, i) => `/${dir2}/kodak_400_c_41_40860_119374_268265_${String(8410001 + i).padStart(12, '0')}.jpg`);
export const STILL_LIFE_IMAGES = [
  ...galleryFromDir1,
  ...galleryFromDir2,
];

// Sample videos for moving images gallery (replace with actual uploaded videos)
export const MOVING_IMAGES_VIDEOS = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    title: `Moving Image ${i + 1}`,
    thumbnail: `https://picsum.photos/seed/video${i}/800/600`,
    videoUrl: `https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4`, // Placeholder
}));

// Sample music tracks (replace with actual uploaded audio files)
export const MUSIC_TRACKS = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    title: `Track ${i + 1}`,
    artist: 'Various Artists',
    duration: '3:45',
    audioUrl: `https://www.soundhelix.com/examples/mp3/SoundHelix-Song-${i + 1}.mp3`, // Placeholder
}));

export const ABOUT_INFO = {
    name: "Media Share",
    bio: "A platform for sharing still-life photography, moving images, and music. Upload your creative work and explore what others have shared. Built with brutalist design principles and a focus on simplicity.",
    socials: [
        { name: 'Instagram', url: 'https://www.instagram.com/adubsqz/' },
        { name: 'GitHub', url: 'https://github.com' },
    ]
};

export interface Experience {
    id: number;
    title: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string[];
    skills?: string[];
}

export interface Education {
    id: number;
    degree: string;
    institution: string;
    location: string;
    graduationDate: string;
    description?: string;
}

export interface Skill {
    name: string;
    level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
    category: string;
}

export interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    link?: string;
    github?: string;
}

export interface Certification {
    id: number;
    name: string;
    issuer: string;
    issueDate: string;
    credentialId?: string;
    credentialUrl?: string;
}

export const PORTFOLIO_DATA = {
    name: "Alexander Ames",
    title: "Staff Software Engineer | Data Scientist | AI/ML Enthusiast",
    location: "Brooklyn, New York, United States",
    email: "alexanderthomasames@gmail.com",
    phone: "",
    linkedin: "https://www.linkedin.com/in/alexanderames",
    website: "",

    summary: "At Caris Life Sciences, my role as a Senior Software Engineer and Technical Lead centers around harnessing genomic data to drive advancements in precision medicine. Our team's dedication to developing tools that match patient profiles with clinical drug trials exemplifies our shared commitment to innovation and patient-centered solutions. Adept in Ruby and Python, I've been pivotal in creating a patient cohort builder, a tool that significantly enhances the ability to filter and analyze vast genomic data sets. Previously at Demoflow, I played a crucial role in transforming the B2B sales process through the development of APIs and integration services. My journey in software engineering has been marked by a relentless pursuit of excellence and a strategic focus on backend engineering, contributing to our collective mission of revolutionizing industry standards and elevating user experiences.",

    experience: [
        {
            id: 1,
            title: "Senior Staff Software Engineer",
            company: "Caris Life Sciences",
            location: "Brooklyn, New York, United States",
            startDate: "Dec 2021",
            endDate: "Present",
            description: [
                "Designed, developed, and maintained innovative tools leveraging genomic data to enhance precision medicine",
                "Built a system matching patient genomic profiles with clinical drug trials tailored to their needs",
                "Created a patient cohort builder tool, utilizing Caris' vast genomic datalakes to enable users to create targeted patient sample cohorts based on customized filter inputs",
                "Developed as a technical lead, serving as an engineer team members can come to for project guidance during the development phase"
            ],
            skills: ["Ruby", "Python", "Genomic Data", "Precision Medicine", "Data Analysis"]
        },
        {
            id: 2,
            title: "Software Engineer",
            company: "Demoflow",
            location: "",
            startDate: "Dec 2020",
            endDate: "Dec 2021",
            description: [
                "Revolutionized the B2B sales process through API development (Rails and GraphQL) and Integration Services",
                "Worked on integration service handling all company integrations using Rails, Sidekiq, and REST API",
                "Contributed to client applications (React, Electron, Chrome Ext, and Zoom app)",
                "Integrated with major CRMs and focused on evolving the entire sales process from presenting decks to CRM integrations"
            ],
            skills: ["Rails", "GraphQL", "React", "Sidekiq", "REST API", "Electron"]
        },
        {
            id: 3,
            title: "Product Engineer",
            company: "Simpleview",
            location: "",
            startDate: "2019",
            endDate: "Dec 2020",
            description: [
                "Built and extended functionality of Simpleview's Zerista products including Leads and Events Apps",
                "Worked on one of the most comprehensive, customizable, and intuitive event apps on the market",
                "Part of the Product Development team improving CMS and Digital Asset Management applications",
                "Full stack development using Node.js, Ruby on Rails, AWS, and React Native for feature releases and defect corrections"
            ],
            skills: ["Node.js", "Ruby on Rails", "AWS", "React Native", "CMS"]
        },
        {
            id: 4,
            title: "Software Engineer",
            company: "Welltok, Inc.",
            location: "Greater Denver Area",
            startDate: "2018",
            endDate: "2019",
            description: [
                "Worked on the production system support team responsible for issues that arise with live users/data",
                "Platform consisted of major datalakes, asynchronous message broker, multiple databases, and various front-end apps",
                "Handled weekly tasks including deploying hot fixes and periodic maintenance releases"
            ],
            skills: ["System Support", "Database Management", "Production Support"]
        },
        {
            id: 5,
            title: "API Engineer",
            company: "Tech Fabric",
            location: "Phoenix, Arizona Area",
            startDate: "2017",
            endDate: "2018",
            description: [
                "Integrated new features into existing internal web application for vehicle financing company",
                "Created new features using Postgres, Rails (API), GraphQL, and React/Redux stack",
                "Maintained testing environment for new features"
            ],
            skills: ["Postgres", "Rails", "GraphQL", "React", "Redux"]
        },
        {
            id: 6,
            title: "Full Stack Instructor",
            company: "Tech Talent South",
            location: "Phoenix, Arizona",
            startDate: "Oct 2016",
            endDate: "2017",
            description: [
                "Led instruction of Ruby on Rails course material",
                "Attended and mentored students during office hours",
                "Available to mentor students outside of class and office hours",
                "Expanded on prepared materials, coursework, and homework to help students exceed baseline requirements"
            ],
            skills: ["Teaching", "Ruby on Rails", "Mentoring"]
        },
        {
            id: 7,
            title: "Community Organizer",
            company: "Tech Talent South",
            location: "Downtown Phoenix, Az",
            startDate: "Sep 2016",
            endDate: "2017",
            description: [
                "Helped students connect with the Phoenix tech scene",
                "Attended events to promote hiring of graduates",
                "Built community connections for career advancement"
            ],
            skills: ["Community Building", "Networking", "Event Planning"]
        },
        {
            id: 8,
            title: "Full Stack Developer",
            company: "PMG2",
            location: "Phoenix, Arizona",
            startDate: "2015",
            endDate: "2017",
            description: [
                "Enhanced existing web applications (FoodTidings & Dropdental) by fixing bugs and adding features",
                "Worked with Rails monolith back-end and AngularJS front-end",
                "Helped transition applications from early versioning to new version launches"
            ],
            skills: ["Rails", "AngularJS", "Full Stack Development"]
        },
        {
            id: 9,
            title: "Assistant Manager / Technician",
            company: "uBreakiFix",
            location: "Tempe, Az",
            startDate: "Aug 2013",
            endDate: "May 2015",
            description: [
                "Managed operations and provided technical repair services"
            ],
            skills: ["Management", "Technical Support", "Customer Service"]
        },
        {
            id: 10,
            title: "Build Support",
            company: "Endurance International Group",
            location: "Phoenix, Arizona Area",
            startDate: "2014",
            endDate: "2015",
            description: [
                "Provided build support and technical assistance"
            ],
            skills: ["Build Support", "Technical Assistance"]
        }
    ] as Experience[],

    education: [
        {
            id: 1,
            degree: "English Language and Literature, General",
            institution: "Northern Arizona University",
            location: "",
            graduationDate: "2012",
            description: ""
        },
        {
            id: 2,
            degree: "English Language and Literature, General",
            institution: "Chandler/Gilbert Community College",
            location: "",
            graduationDate: "",
            description: ""
        }
    ] as Education[],

    skills: [
        { name: "Ruby", level: "Expert", category: "Programming Languages" },
        { name: "Python", level: "Expert", category: "Programming Languages" },
        { name: "JavaScript", level: "Advanced", category: "Programming Languages" },
        { name: "Rails", level: "Expert", category: "Frameworks" },
        { name: "React", level: "Advanced", category: "Frameworks" },
        { name: "Node.js", level: "Advanced", category: "Frameworks" },
        { name: "GraphQL", level: "Advanced", category: "Technologies" },
        { name: "PostgreSQL", level: "Advanced", category: "Databases" },
        { name: "AWS", level: "Advanced", category: "Cloud Platforms" },
        { name: "Software Infrastructure", level: "Expert", category: "Specialties" },
        { name: "Genomic Data Analysis", level: "Advanced", category: "Data Science" },
        { name: "Precision Medicine", level: "Advanced", category: "Healthcare Tech" },
        { name: "API Development", level: "Expert", category: "Backend Development" }
    ] as Skill[],

    projects: [
        {
            id: 1,
            title: "Patient Cohort Builder",
            description: "A powerful tool that enables users to create targeted patient sample cohorts based on customized filter inputs, utilizing Caris' vast genomic datalakes for precision medicine research.",
            technologies: ["Ruby", "Python", "Genomic Data", "Data Analysis", "Healthcare"],
            link: "",
            github: ""
        },
        {
            id: 2,
            title: "Clinical Trial Matching System",
            description: "Developed a system that matches patient genomic profiles with clinical drug trials tailored to their specific needs, advancing precision medicine capabilities.",
            technologies: ["Ruby", "Python", "Machine Learning", "Healthcare Data"],
            link: "",
            github: ""
        },
        {
            id: 3,
            title: "B2B Sales Integration Platform",
            description: "Built comprehensive integration services and APIs for revolutionizing B2B sales processes, including CRM integrations and multi-platform client applications.",
            technologies: ["Rails", "GraphQL", "React", "Electron", "REST API"],
            link: "",
            github: ""
        }
    ] as Project[],

    certifications: [
        {
            id: 1,
            name: "Platform Developer 1",
            issuer: "Salesforce",
            issueDate: "",
            credentialId: "",
            credentialUrl: ""
        }
    ] as Certification[]
};





