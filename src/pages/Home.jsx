import { Link } from 'react-router-dom';
import { articles } from '../data/articles';
import { podcasts } from '../data/podcasts';
import ArticleCard from '../components/ArticleCard';
import PodcastCard from '../components/PodcastCard';
import SectionHeading from '../components/SectionHeading';
import { BookOpenIcon, HeadphonesIcon, ArrowRightIcon, SparklesIcon } from '../components/Icons';

export default function Home() {
  const featuredArticles = articles.filter((a) => a.featured).slice(0, 3);
  const featuredPodcasts = podcasts.filter((p) => p.featured).slice(0, 2);
  const topArticles = featuredArticles.length > 0 ? featuredArticles : articles.slice(0, 3);
  const topPodcasts = featuredPodcasts.length > 0 ? featuredPodcasts : podcasts.slice(0, 2);

  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl dark:bg-primary/20" />
        </div>
        <div className="container-page py-20 sm:py-28 lg:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-edge-light bg-surface-cardLight px-4 py-1.5 text-sm font-medium text-muted-light shadow-soft dark:border-edge-dark dark:bg-surface-cardDark dark:text-muted-dark">
              <SparklesIcon className="h-4 w-4 text-primary" />
              Welcome to my corner of the web
            </div>
            <h1 className="text-balance text-4xl font-extrabold leading-tight tracking-tight text-ink-light dark:text-ink-dark sm:text-5xl lg:text-6xl">
              Ideas worth reading, conversations worth hearing.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-balance text-lg leading-relaxed text-muted-light dark:text-muted-dark">
              I write about frontend development, the craft of building software, and the tools that make it a little less painful. Sometimes I talk about it too. Have a look around.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link to="/articles" className="btn-primary w-full sm:w-auto">
                <BookOpenIcon className="h-5 w-5" />
                Browse Articles
              </Link>
              <Link to="/podcasts" className="btn-secondary w-full sm:w-auto">
                <HeadphonesIcon className="h-5 w-5" />
                Browse Podcasts
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="container-page py-12">
        <SectionHeading
          subtitle="Featured"
          title="Latest Articles"
          linkTo="/articles"
          linkLabel="View all"
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {topArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>

      {/* Featured Podcasts */}
      <section className="container-page py-12">
        <SectionHeading
          subtitle="Featured"
          title="Latest Podcasts"
          linkTo="/podcasts"
          linkLabel="View all"
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {topPodcasts.map((podcast) => (
            <PodcastCard key={podcast.id} podcast={podcast} />
          ))}
        </div>
      </section>

      {/* Call To Action */}
      <section className="container-page py-16">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-16 text-center shadow-2xl shadow-primary/30 sm:px-12">
          <div className="pointer-events-none absolute inset-0 -z-10 opacity-20">
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white blur-3xl" />
            <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-white blur-3xl" />
          </div>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Never miss a post or an episode.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-balance text-lg leading-relaxed text-primary-100">
            New articles and podcast episodes drop regularly. Follow along and build something great.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/articles"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary shadow-lg transition-all duration-300 hover:scale-[1.03] active:scale-95 sm:w-auto"
            >
              <BookOpenIcon className="h-5 w-5" />
              Start Reading
            </Link>
            <Link
              to="/about"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.03] hover:bg-white/10 active:scale-95 sm:w-auto"
            >
              About Ali
              <ArrowRightIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
