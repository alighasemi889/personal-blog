// Mock podcasts data. Add new podcast objects here to publish them.
// Cover images live in /public/covers/ — reference them with the leading slash.
// Audio files live in /public/podcasts/ — reference them with the leading slash.

export const podcasts = [
  {
    id: 'ep-001-react-rendering-deep-dive',
    title: 'React Rendering, A Deep Dive',
    description:
      'We unpack what actually happens when React renders a component — from the virtual DOM diff to the commit phase — and why understanding this makes you a better React developer.',
    cover: 'https://images.pexels.com/photos/164977/pexels-photo-164977.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '42:18',
    episode: 1,
    author: 'Ali Ghasemi',
    audio: '/podcasts/episode-1.mp3',
    featured: true,
  },
  {
    id: 'ep-002-typescript-without-tears',
    title: 'TypeScript Without Tears',
    description:
      'TypeScript does not have to be intimidating. We walk through the mental models that make generics, utility types, and conditional types click — even if you have struggled with them before.',
    cover: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '38:05',
    episode: 2,
    author: 'Ali Ghasemi',
    audio: '/podcasts/episode-2.mp3',
    featured: true,
  },
  {
    id: 'ep-003-the-art-of-code-review',
    title: 'The Art of Code Review',
    description:
      'Code review is where team culture lives. We talk about how to give feedback that lands, how to receive feedback without ego, and how to build a review process that makes everyone better.',
    cover: 'https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&w=800',
    duration: '51:33',
    episode: 3,
    author: 'Ali Ghasemi',
    audio: '/podcasts/episode-3.mp3',
    featured: false,
  },
  {
    id: 'ep-004-tailwind-in-production',
    title: 'Tailwind CSS in Production',
    description:
      'Tailwind is easy to start with and hard to scale. We share the conventions, config strategies, and component patterns that have kept our Tailwind codebases clean as teams grow.',
    cover: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '35:47',
    episode: 4,
    author: 'Ali Ghasemi',
    audio: '/podcasts/episode-4.mp3',
    featured: false,
  },
  {
    id: 'ep-005-the-event-loop-explained',
    title: 'The Event Loop, Explained',
    description:
      'We take a calm, thorough walk through the JavaScript event loop — macrotasks, microtasks, and why understanding the difference makes you a better async programmer.',
    cover: 'https://images.pexels.com/photos/270557/pexels-photo-270557.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '44:22',
    episode: 5,
    author: 'Ali Ghasemi',
    audio: '/podcasts/episode-5.mp3',
    featured: false,
  },
  {
    id: 'ep-006-building-developer-tools',
    title: 'Building Developer Tools People Love',
    description:
      'What separates a tool that developers tolerate from one they recommend? We discuss API design, documentation, and the empathy that goes into tools that feel effortless.',
    cover: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '39:51',
    episode: 6,
    author: 'Ali Ghasemi',
    audio: '/podcasts/episode-6.mp3',
    featured: false,
  },
];
