import React from 'react';
import { PHOTOGRAPHY_IMAGES, ACTING_STILLS, TECH_NERD_PROFILE, ABOUT_ME, HEADSHOT_1 } from '../constants';

export const PhotographyView: React.FC = () => {
  return (
    <div>
      <h2 className="font-pixel text-4xl uppercase mb-8 text-center">Photography</h2>
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4">
        {PHOTOGRAPHY_IMAGES.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Still Photography ${index + 1}`}
            className="mb-4 w-full h-auto block border-4 border-brand-fg shadow-hard"
          />
        ))}
      </div>
    </div>
  );
};

const resumeData = {
  name: 'ALEXANDER THOMAS AMES',
  union: 'NON-UNION',
  headshotUrl: HEADSHOT_1,
  credits: [
    { title: "My Wife's Billion Dollar Secret", role: "Tile's Assistant - Supporting", production: "Journey Entertainment" },
    { title: "A Single Thread", role: "Nick - Lead", production: "Greta March Productions" },
    { title: "Assist.net", role: "Noah - Lead", production: "Mi Amigo Productions" },
    { title: "Caro", role: "Jacob - Lead", production: "Director: Jose Jerez" },
    { title: "Candy", role: "Young Dad - Supporting", production: "Director: Jose Jerez" },
    { title: "Ghosts", role: "Osvald Alving - Lead", production: "Greta March Productions" },
    { title: "Drinking Habits", role: "George - Supporting", production: "Longmont Theatre Co." },
    { title: "Alice in Wonderland", role: "Mad Hatter - Supporting", production: "Gilbert Theatre" },
    { title: "The Mouse That Roared", role: "Tully Bascom - Supporting", production: "Gilbert Theatre" },
    { title: "Robin Hood", role: "Sheriff of Nottingham - Supporting", production: "Gilbert Theatre" },
  ],
  physical: [
    { label: 'Height', value: "6'" },
    { label: 'Weight', value: '145 lbs' },
  ],
  skills: "Aerobics, Basketball, Billiards/Pool Player, Body Surfing, Boxing, Cycling, Cycling - Mountain Biking, Football, Golf, Gymnastics, Hackey Sack, Jump Rope, Kayaker, Ping Pong, Racquetball, Roller Skating, Running - General, Running - Sprint, Shooting - Revolver/Automatic, Skateboard - stunts, Snowboarding, Swimming - ability - general, Track & Field, Trampoline, Volleyball, Yoga, Acoustic Bass, Cello, Chef, Guitar, Piano, American - Southern Accent, American - Standard/General Accent, Fluent Spanish, Fluent Spanish - Mexico City",
  resumeLink: 'https://resumes.actorsaccess.com/2093257-5848115'
};

const Resume: React.FC = () => (
  <div className="p-4 sm:p-6 md:p-8 font-sans text-brand-fg text-sm">
    <header className="flex flex-col sm:flex-row justify-between items-start mb-4 text-xs text-gray-500">
      <div>
        <p>ALEXANDER THOMAS AMES - Resume | Actors Access</p>
      </div>
      <div className="text-left sm:text-right">
        <p>www.actorsaccess.com</p>
        <p>Breakdown Services, Ltd.</p>
      </div>
    </header>

    <div className="flex flex-col sm:flex-row items-start gap-6 mb-6">
      <img src={resumeData.headshotUrl} alt="Alexander Thomas Ames Headshot" className="w-32 border-2 border-brand-fg object-cover" />
      <div className="pt-2">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-wider">{resumeData.name}</h2>
        <p className="text-md">{resumeData.union}</p>
      </div>
    </div>

    <main>
      <section className="mb-6">
        <h3 className="text-xl font-bold border-b-2 border-brand-fg pb-1 mb-3">Résumé</h3>
        <div className="space-y-3">
          {resumeData.credits.map((credit, i) => (
            <div key={i} className="flex flex-col sm:grid sm:grid-cols-3 sm:gap-4 items-baseline pb-2 border-b border-gray-200">
              <div className="font-semibold">{credit.title}</div>
              <div className="sm:pl-0 pl-2">{credit.role}</div>
              <div className="sm:pl-0 pl-2 text-gray-600 sm:justify-self-end sm:text-right">{credit.production}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-bold border-b-2 border-brand-fg pb-1 mb-3">Physical Characteristics / Measurements</h3>
        <div className="flex gap-8">
          {resumeData.physical.map(item => (
            <div key={item.label}><strong>{item.label}:</strong> {item.value}</div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-xl font-bold border-b-2 border-brand-fg pb-1 mb-3">Skills</h3>
        <p className="leading-relaxed">
          {resumeData.skills}
        </p>
      </section>
    </main>

    <footer className="mt-8 pt-4 border-t-2 border-gray-300 text-xs text-gray-500 flex justify-between">
      <a href={resumeData.resumeLink} target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-brand-accent">{resumeData.resumeLink}</a>
      <span>1/2</span>
    </footer>
  </div>
);


export const ActingView: React.FC = () => {
  return (
    <div>
      <h2 className="font-pixel text-4xl uppercase mb-8 text-center">Acting</h2>
      <div className="mb-12 border-4 border-brand-fg bg-white shadow-hard">
        <Resume />
      </div>

      <h3 className="font-pixel text-3xl uppercase mb-8 text-center">Production Stills</h3>
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4">
        {ACTING_STILLS.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Production Still ${index + 1}`}
            className="mb-4 w-full h-auto block border-4 border-brand-fg shadow-hard"
          />
        ))}
      </div>
    </div>
  );
};


const ResumeSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="mb-6">
    <h3 className="font-pixel text-2xl uppercase border-b-2 border-brand-fg pb-1 mb-2">{title}</h3>
    {children}
  </div>
);

export const TechNerdView: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <header className="text-center mb-8">
        <h2 className="font-pixel text-4xl uppercase">{TECH_NERD_PROFILE.name}</h2>
        <p className="font-sans text-md">{TECH_NERD_PROFILE.contact}</p>
        <p className="font-sans text-md">{TECH_NERD_PROFILE.stats}</p>
      </header>
      <div className="space-y-4">
        <ResumeSection title="Projects">
          <ul className="list-none space-y-2">
            {TECH_NERD_PROFILE.projects.map((item, i) => (
              <li key={i}>
                <div className="flex flex-col sm:flex-row justify-between font-bold">
                  <span>{item.name}</span>
                  <span className="italic font-normal text-sm sm:text-base">{item.role}</span>
                </div>
                <p className="text-sm pl-2">{item.description}</p>
              </li>
            ))}
          </ul>
        </ResumeSection>
        <ResumeSection title="Skills">
          <ul className="list-none space-y-1">
            {TECH_NERD_PROFILE.skills.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </ResumeSection>
        <ResumeSection title="Experience">
          <ul className="list-none space-y-1">
            {TECH_NERD_PROFILE.experience.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </ResumeSection>
        <ResumeSection title="Interests">
          <p>{TECH_NERD_PROFILE.interests}</p>
        </ResumeSection>
      </div>
    </div>
  );
};

export const AboutView: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <img
        src="https://picsum.photos/seed/me/200/200"
        alt="Portrait of the creator"
        className="w-48 h-48 rounded-full mx-auto mb-6 border-4 border-brand-fg shadow-hard"
      />
      <h2 className="font-pixel text-4xl uppercase mb-4">{ABOUT_ME.name}</h2>
      <p className="font-sans text-lg leading-relaxed mb-8">{ABOUT_ME.bio}</p>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <h3 className="font-pixel text-2xl">Find me on:</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {ABOUT_ME.socials.map(social => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-pixel text-lg bg-brand-accent-light text-brand-fg border-2 border-brand-fg px-4 py-2 shadow-hard-sm hover:bg-brand-accent active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all"
            >
              {social.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};