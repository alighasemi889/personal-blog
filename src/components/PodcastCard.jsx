import { useRef } from 'react';
import { PlayIcon, ClockIcon, HeadphonesIcon } from './Icons';

export default function PodcastCard({ podcast }) {
  const audioRef = useRef(null);

  const handleListen = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  };

  return (
    <article className="card card-hover group flex flex-col overflow-hidden">
      <div className="relative aspect-square overflow-hidden bg-surface-light dark:bg-surface-cardDark">
        <img
          src={podcast.cover}
          alt={podcast.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/70 via-transparent to-transparent opacity-80" />
        <div className="absolute bottom-4 left-4 flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white shadow-lg">
            <HeadphonesIcon className="h-3.5 w-3.5" />
            EP {podcast.episode}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-3 text-xs text-muted-light dark:text-muted-dark">
          <span className="flex items-center gap-1">
            <ClockIcon className="h-3.5 w-3.5" />
            {podcast.duration}
          </span>
          <span className="font-medium text-ink-light dark:text-ink-dark">{podcast.author}</span>
        </div>

        <h3 className="mt-2 text-lg font-bold leading-snug text-ink-light dark:text-ink-dark">
          {podcast.title}
        </h3>

        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-light dark:text-muted-dark">
          {podcast.description}
        </p>

        <audio ref={audioRef} src={podcast.audio} preload="none" className="mt-4 w-full" />

        <button
          onClick={handleListen}
          className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-[1.03] hover:bg-primary-700 active:scale-95"
        >
          <PlayIcon className="h-4 w-4" />
          Listen
        </button>
      </div>
    </article>
  );
}
