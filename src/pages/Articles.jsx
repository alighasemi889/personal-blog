import { useMemo, useState } from 'react';
import { articles } from '../data/articles';
import ArticleCard from '../components/ArticleCard';

export default function Articles() {
  const categories = useMemo(() => {
    const set = new Set(articles.map((a) => a.category));
    return ['All', ...Array.from(set)];
  }, []);

  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = useMemo(() => {
    if (activeCategory === 'All') return articles;
    return articles.filter((a) => a.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="animate-fade-in">
      <section className="container-page py-12 sm:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Articles</p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-ink-light dark:text-ink-dark sm:text-5xl">
            Writing on the craft of building.
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-light dark:text-muted-dark">
            Essays and deep dives on React, TypeScript, JavaScript, and the engineering practices that make software sustainable.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary text-white shadow-lg shadow-primary/20'
                  : 'border border-edge-light bg-surface-cardLight text-muted-light hover:border-primary hover:text-primary dark:border-edge-dark dark:bg-surface-cardDark dark:text-muted-dark dark:hover:border-primary dark:hover:text-primary'
              }`
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-12 text-center text-muted-light dark:text-muted-dark">
            No articles in this category yet.
          </p>
        )}
      </section>
    </div>
  );
}
