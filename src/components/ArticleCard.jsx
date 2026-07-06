import { Link } from 'react-router-dom';
import { CalendarIcon, ClockIcon, ArrowRightIcon } from './Icons';
import { formatDate } from '../utils/format';

export default function ArticleCard({ article }) {
  return (
    <article className="card card-hover group flex flex-col overflow-hidden">
      <Link to={`/articles/${article.id}`} className="block overflow-hidden">
        <div className="aspect-[16/10] overflow-hidden bg-surface-light dark:bg-surface-cardDark">
          <img
            src={article.cover}
            alt={article.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-3">
          <span className="tag">{article.category}</span>
          <span className="text-xs text-muted-light dark:text-muted-dark">{formatDate(article.date)}</span>
        </div>

        <Link to={`/articles/${article.id}`}>
          <h3 className="mt-3 text-lg font-bold leading-snug text-ink-light transition-colors duration-300 group-hover:text-primary dark:text-ink-dark dark:group-hover:text-primary">
            {article.title}
          </h3>
        </Link>

        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-light dark:text-muted-dark">
          {article.excerpt}
        </p>

        <div className="mt-auto flex items-center justify-between pt-5">
          <div className="flex items-center gap-3 text-xs text-muted-light dark:text-muted-dark">
            <span className="font-medium text-ink-light dark:text-ink-dark">{article.author}</span>
            <span className="flex items-center gap-1">
              <ClockIcon className="h-3.5 w-3.5" />
              {article.readingTime}
            </span>
          </div>
          <Link
            to={`/articles/${article.id}`}
            className="inline-flex items-center gap-1 text-sm font-semibold text-primary transition-all duration-300 hover:gap-2"
          >
            Read More
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
