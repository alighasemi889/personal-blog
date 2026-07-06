import { useParams, Link, Navigate } from 'react-router-dom';
import { articles } from '../data/articles';
import { formatDate } from '../utils/format';
import ArticleCard from '../components/ArticleCard';
import { CalendarIcon, ClockIcon, ArrowLeftIcon, ArrowRightIcon, UserIcon } from '../components/Icons';

export default function ArticleDetail() {
  const { id } = useParams();
  const article = articles.find((a) => a.id === id);

  if (!article) return <Navigate to="/articles" replace />;

  const related = articles
    .filter((a) => a.id !== article.id && a.category === article.category)
    .slice(0, 3);
  const fallbackRelated = articles.filter((a) => a.id !== article.id).slice(0, 3);
  const relatedArticles = related.length > 0 ? related : fallbackRelated;

  return (
    <div className="animate-fade-in">
      <article>
        <header className="container-page pt-8 sm:pt-12">
          <Link
            to="/articles"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-light transition-colors duration-300 hover:text-primary dark:text-muted-dark dark:hover:text-primary"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            Back to Articles
          </Link>

          <div className="mx-auto mt-6 max-w-3xl text-center">
            <span className="tag">{article.category}</span>
            <h1 className="mt-4 text-balance text-3xl font-extrabold leading-tight tracking-tight text-ink-light dark:text-ink-dark sm:text-4xl lg:text-5xl">
              {article.title}
            </h1>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-muted-light dark:text-muted-dark">
              <span className="flex items-center gap-1.5 font-medium text-ink-light dark:text-ink-dark">
                <UserIcon className="h-4 w-4 text-primary" />
                {article.author}
              </span>
              <span className="flex items-center gap-1.5">
                <CalendarIcon className="h-4 w-4" />
                {formatDate(article.date)}
              </span>
              <span className="flex items-center gap-1.5">
                <ClockIcon className="h-4 w-4" />
                {article.readingTime}
              </span>
            </div>
          </div>
        </header>

        <div className="container-page mt-10">
          <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl shadow-card">
            <img
              src={article.cover}
              alt={article.title}
              className="aspect-[16/9] w-full object-cover"
            />
          </div>
        </div>

        <div className="container-page py-12">
          <div className="mx-auto max-w-2xl">
            {article.content.map((block, index) => {
              if (block.type === 'heading') {
                return (
                  <h2
                    key={index}
                    className="mt-10 text-2xl font-bold tracking-tight text-ink-light dark:text-ink-dark"
                  >
                    {block.text}
                  </h2>
                );
              }
              return (
                <p
                  key={index}
                  className="mt-5 text-lg leading-relaxed text-ink-light/90 dark:text-ink-dark/90"
                >
                  {block.text}
                </p>
              );
            })}

            <div className="mt-12 rounded-2xl border border-edge-light bg-surface-cardLight p-6 dark:border-edge-dark dark:bg-surface-cardDark">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">Written by</p>
              <div className="mt-3 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                  A
                </div>
                <div>
                  <p className="font-semibold text-ink-light dark:text-ink-dark">{article.author}</p>
                  <p className="text-sm text-muted-light dark:text-muted-dark">
                    Frontend developer writing about React, TypeScript, and the craft of software.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {relatedArticles.length > 0 && (
        <section className="container-page py-12">
          <div className="mx-auto max-w-5xl">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-2xl font-bold tracking-tight text-ink-light dark:text-ink-dark">
                Related Articles
              </h2>
              <Link
                to="/articles"
                className="inline-flex items-center gap-1 text-sm font-semibold text-primary transition-all duration-300 hover:gap-2"
              >
                View all
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedArticles.map((rel) => (
                <ArticleCard key={rel.id} article={rel} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
