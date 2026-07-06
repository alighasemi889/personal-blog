import { GitHubIcon, LinkedInIcon, MailIcon, ArrowRightIcon } from '../components/Icons';

const skills = [
  { name: 'React', level: 'Expert' },
  { name: 'JavaScript', level: 'Expert' },
  { name: 'TypeScript', level: 'Advanced' },
  { name: 'Tailwind CSS', level: 'Expert' },
  { name: 'Node.js', level: 'Intermediate' },
];

const socials = [
  { label: 'GitHub', href: 'https://github.com', Icon: GitHubIcon },
  { label: 'LinkedIn', href: 'https://linkedin.com', Icon: LinkedInIcon },
  { label: 'Email', href: 'mailto:ali@example.com', Icon: MailIcon },
];

export default function About() {
  return (
    <div className="animate-fade-in">
      <section className="container-page py-12 sm:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto h-32 w-32 overflow-hidden rounded-full ring-4 ring-primary/20 sm:h-40 sm:w-40">
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Ali Ghasemi"
              className="h-full w-full object-cover"
            />
          </div>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-ink-light dark:text-ink-dark sm:text-5xl">
            Ali Ghasemi
          </h1>
          <p className="mt-2 text-lg font-medium text-primary">Frontend Developer</p>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-light dark:text-muted-dark">
            I am a frontend developer who cares about building software that is a pleasure to use and a pleasure to maintain. I write about React, TypeScript, and the engineering practices that help teams ship without burning out. When I am not at the keyboard, I am probably reading, recording a podcast, or trying to explain the event loop to someone who did not ask.
          </p>

          <div className="mt-8 flex items-center justify-center gap-3">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-edge-light bg-surface-cardLight text-muted-light transition-all duration-300 hover:scale-110 hover:border-primary hover:text-primary dark:border-edge-dark dark:bg-surface-cardDark dark:text-muted-dark dark:hover:border-primary dark:hover:text-primary"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-ink-light dark:text-ink-dark">
            Skills
          </h2>
          <p className="mt-2 text-sm text-muted-light dark:text-muted-dark">
            Frontend Development
          </p>

          <ul className="mt-6 space-y-3">
            {skills.map((skill) => (
              <li
                key={skill.name}
                className="flex items-center justify-between rounded-xl border border-edge-light bg-surface-cardLight px-5 py-4 transition-all duration-300 hover:border-primary/40 hover:shadow-soft dark:border-edge-dark dark:bg-surface-cardDark"
              >
                <span className="font-semibold text-ink-light dark:text-ink-dark">{skill.name}</span>
                <span className="text-sm font-medium text-primary">{skill.level}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mx-auto mt-16 max-w-3xl rounded-3xl border border-edge-light bg-surface-cardLight p-8 text-center dark:border-edge-dark dark:bg-surface-cardDark">
          <h2 className="text-2xl font-bold tracking-tight text-ink-light dark:text-ink-dark">
            Want to read or listen?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-muted-light dark:text-muted-dark">
            I publish new articles and podcast episodes regularly. There is something for everyone.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="/articles" className="btn-primary w-full sm:w-auto">
              Browse Articles
              <ArrowRightIcon className="h-5 w-5" />
            </a>
            <a href="/podcasts" className="btn-secondary w-full sm:w-auto">
              Browse Podcasts
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
