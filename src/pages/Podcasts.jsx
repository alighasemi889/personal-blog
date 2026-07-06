import { podcasts } from '../data/podcasts';
import PodcastCard from '../components/PodcastCard';

export default function Podcasts() {
  return (
    <div className="animate-fade-in">
      <section className="container-page py-12 sm:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Podcasts</p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-ink-light dark:text-ink-dark sm:text-5xl">
            Conversations on the craft.
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-light dark:text-muted-dark">
            Audio episodes on frontend development, engineering culture, and the tools we use to build the web. Press play and have a listen.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {podcasts.map((podcast) => (
            <PodcastCard key={podcast.id} podcast={podcast} />
          ))}
        </div>
      </section>
    </div>
  );
}
