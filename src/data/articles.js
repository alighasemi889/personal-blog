// Mock articles data. Add new article objects here to publish them.
// Cover images live in /public/images/ — reference them with the leading slash.

export const articles = [
  {
    id: 'building-resilient-react-forms',
    title: 'Building Resilient React Forms Without Losing Your Mind',
    excerpt:
      'Form state management is one of the most common — and most painful — parts of building a real React application. Here is a pragmatic approach that scales from a single input to complex multi-step flows.',
    cover: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'React',
    date: '2025-11-12',
    readingTime: '8 min read',
    author: 'Ali Ghasemi',
    featured: true,
    content: [
      {
        type: 'paragraph',
        text: 'If you have ever built a form in React that does anything more than collect a single email address, you already know the feeling. You start with a couple of useState calls, then a few more, then a useEffect to sync things, then a validate function that grows teeth, and before long you are staring at a 400-line component that nobody on the team wants to touch. It does not have to be this way.',
      },
      {
        type: 'heading',
        text: 'Start with the shape of the data, not the UI',
      },
      {
        type: 'paragraph',
        text: 'The single biggest mistake I see teams make is reaching for form libraries before they understand the shape of the data they are collecting. A form is a serialization problem: you are turning a user\u2019s intent into a structured object. Before writing a single line of JSX, write down the final object you want to submit. What fields are required? Which are conditional? Which depend on another field\u2019s value? Once that object is clear, the component structure often falls out of it naturally.',
      },
      {
        type: 'paragraph',
        text: 'I like to define a single state object that mirrors the final submission payload, and a separate errors object that mirrors its shape. This keeps validation co-located with the data it describes and makes it trivial to show inline errors next to the right input. No magic strings, no nested switch statements.',
      },
      {
        type: 'heading',
        text: 'Validation as a pure function',
      },
      {
        type: 'paragraph',
        text: 'Validation should be a pure function that takes the current state and returns an errors object. Not a side effect, not a hook, not a method on a class. A pure function is testable in isolation, reusable across forms, and easy to reason about. You can run it on every keystroke, on blur, or on submit — the function does not care, because it has no concept of when it is called.',
      },
      {
        type: 'paragraph',
        text: 'A common pattern I reach for is a small validate function per field, composed into a single validateForm function. Each field validator returns either null (valid) or a string (the error message). The form-level function simply maps over the validators and collects the results. This composition makes it easy to add, remove, or reorder validation rules without touching the component.',
      },
      {
        type: 'heading',
        text: 'When to reach for a library',
      },
      {
        type: 'paragraph',
        text: 'I am not anti-library. There are situations where a form library earns its keep: dynamic field arrays, deeply nested schemas, cross-field dependencies that change based on server data, or forms that need to persist draft state across sessions. In those cases, libraries like React Hook Form or Formik are excellent. But they are tools, not defaults. If your form has five fields and a submit button, a library is overhead you do not need.',
      },
      {
        type: 'paragraph',
        text: 'The heuristic I use is simple: if I can describe the form\u2019s validation rules in a single paragraph of plain English, I do not need a library. If I need a diagram, I probably do. The goal is not to avoid libraries — it is to reach for them deliberately, when the complexity they manage is complexity I actually have.',
      },
      {
        type: 'heading',
        text: 'Accessibility is not a finishing touch',
      },
      {
        type: 'paragraph',
        text: 'Every input needs a label. Every error needs to be announced to assistive technology. Every required field needs to be marked. These are not features you bolt on at the end — they are constraints you design around from the first commit. The good news is that the pure-function approach makes this straightforward: your errors object already knows which fields are invalid, so wiring aria-invalid and aria-describedby is a one-liner per input.',
      },
      {
        type: 'paragraph',
        text: 'A form that is accessible, validated by pure functions, and structured around the shape of its data is a form that will survive refactors, new requirements, and the departure of the person who wrote it. That resilience is worth more than any library can give you. Build the boring form first. You will know when you need more.',
      },
    ],
  },
  {
    id: 'typescript-generics-that-stick',
    title: 'TypeScript Generics That Actually Stick',
    excerpt:
      'Generics are the part of TypeScript most people learn by copying Stack Overflow answers. Here is a mental model that makes them click — and stay clicked.',
    cover: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'TypeScript',
    date: '2025-10-28',
    readingTime: '6 min read',
    author: 'Ali Ghasemi',
    featured: true,
    content: [
      {
        type: 'paragraph',
        text: 'Most developers I have worked with can read a generic function signature and roughly understand what it does. Far fewer can write one from scratch with confidence. The gap, I think, is not about syntax — it is about having a mental model for what a generic actually is. Once that model clicks, the syntax becomes obvious and, more importantly, memorable.',
      },
      {
        type: 'heading',
        text: 'A generic is a placeholder for a type the caller knows',
      },
      {
        type: 'paragraph',
        text: 'Here is the sentence that made generics click for me: a generic is a placeholder for a type that the caller of the function knows, but the function itself does not. The function does not get to decide what T is. It only gets to say: whatever T is, I will treat it consistently. This is why generics are so powerful for utility functions — the function is type-agnostic, but the relationship between inputs and outputs is preserved.',
      },
      {
        type: 'paragraph',
        text: 'Think of the identity function: function identity<T>(value: T): T. The function has no idea what T will be. It does not need to. All it promises is that the thing it returns is the same type as the thing it received. That promise — a relationship, not a concrete type — is the entire point.',
      },
      {
        type: 'heading',
        text: 'Constraints narrow without fixing',
      },
      {
        type: 'paragraph',
        text: 'Sometimes you need to say: T is not just anything — it has to have a certain shape. That is what the extends keyword is for. function getLength<T extends { length: number }>(item: T) says: T can be anything, as long as it has a length property that is a number. You have narrowed what T can be without fixing it to a single type. The caller can still pass a string, an array, or a custom object — as long as it satisfies the constraint.',
      },
      {
        type: 'paragraph',
        text: 'This is the key insight: constraints make generics more useful, not less. An unconstrained generic is almost useless because you cannot do anything with the value. A well-constrained generic lets you write logic that works across a family of types while still preserving the specific type at the call site.',
      },
      {
        type: 'heading',
        text: 'The call site is where the type is decided',
      },
      {
        type: 'paragraph',
        text: 'One of the most common sources of confusion is where the type argument gets resolved. It is not in the function definition — it is at the call site. When you write identity<string>("hello"), you are telling TypeScript: at this call, T is string. When you write identity("hello"), TypeScript infers it. Either way, the decision happens where the function is called, not where it is defined. This is why generics are so composable: the definition stays general, the call site gets specific.',
      },
      {
        type: 'paragraph',
        text: 'If you remember nothing else from this article, remember this: generics are about preserving relationships between types across a function call. They are not about making code more abstract — they are about making it more precise. A well-placed generic does not add complexity. It removes it, by letting the type system express a relationship that would otherwise be lost.',
      },
    ],
  },
  {
    id: 'tailwind-css-at-scale',
    title: 'Tailwind CSS at Scale: Conventions That Survive',
    excerpt:
      'Tailwind gets a lot of praise for small projects and a lot of criticism for large ones. Both are fair. Here are the conventions that have kept my teams productive as codebases grow.',
    cover: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'Tailwind CSS',
    date: '2025-10-14',
    readingTime: '7 min read',
    author: 'Ali Ghasemi',
    featured: false,
    content: [
      {
        type: 'paragraph',
        text: 'Tailwind CSS is polarizing. On a greenfield project with one or two developers, it feels like the fastest way to build a UI that has ever existed. On a three-year-old codebase with twenty developers, it can feel like an unreadable soup of utility classes. Both reactions are correct. The difference is almost always conventions — or the lack of them.',
      },
      {
        type: 'heading',
        text: 'Extract components, not utility classes',
      },
      {
        type: 'paragraph',
        text: 'The temptation in Tailwind is to extract repeated class strings into CSS classes using @apply. Resist this for anything that is not a true component. The power of Tailwind is that the styling lives next to the markup — you can see exactly what an element looks like without jumping to a stylesheet. When you @apply everything away, you lose that locality and gain nothing, because the class name you invented is not reusable outside the one place you used it.',
      },
      {
        type: 'paragraph',
        text: 'Instead, extract React components. A Button component with a few variants is better than a .btn class with @apply, because the component encapsulates the markup, the styling, and the behavior together. The class string is an implementation detail of the component, not a shared abstraction.',
      },
      {
        type: 'heading',
        text: 'Use the config for your design tokens',
      },
      {
        type: 'paragraph',
        text: 'Your color palette, spacing scale, breakpoints, and typography should all live in the Tailwind config. This is not a suggestion — it is the single most important convention to establish. If your config is empty, every developer will invent their own colors and spacing values, and your design will drift. A well-populated config is a contract: these are the colors we use, this is the spacing scale, these are the breakpoints. Everything else is off-limits.',
      },
      {
        type: 'paragraph',
        text: 'When a designer hands you a Figma file with a color that is not in your config, you do not add it to the component. You add it to the config — or you push back and use the closest existing token. The config is the source of truth, and the source of truth is finite.',
      },
      {
        type: 'heading',
        text: 'Order your classes consistently',
      },
      {
        type: 'paragraph',
        text: 'This sounds trivial, but it matters more than you think. When every developer orders their utility classes differently, diffs become noisy and scanning a long className string becomes painful. Pick an order — layout, spacing, sizing, typography, colors, effects — and stick to it. Better yet, use a tool like prettier-plugin-tailwindcss to enforce it automatically. The time you save in code review alone will pay for the setup ten times over.',
      },
      {
        type: 'paragraph',
        text: 'Tailwind at scale is not about fighting the framework. It is about agreeing on a small set of conventions and holding each other to them. The framework gives you the tools; the conventions give you the discipline. You need both.',
      },
    ],
  },
  {
    id: 'the-craft-of-code-review',
    title: 'The Craft of Code Review',
    excerpt:
      'Code review is not a gatekeeping exercise. It is one of the most powerful teaching and learning tools a team has — when it is done well.',
    cover: 'https://images.pexels.com/photos/3194519/pexels-photo-3194519.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'Engineering',
    date: '2025-09-30',
    readingTime: '5 min read',
    author: 'Ali Ghasemi',
    featured: false,
    content: [
      {
        type: 'paragraph',
        text: 'Code review is the place where a codebase\u2019s culture lives. You can tell a lot about a team from how they review pull requests — whether comments are curious or accusatory, whether suggestions are framed as questions or commands, whether the focus is on the person or the code. Good review culture is not accidental. It is built, one comment at a time, by people who decide that the way they communicate matters as much as what they communicate.',
      },
      {
        type: 'heading',
        text: 'Review the code, not the coder',
      },
      {
        type: 'paragraph',
        text: 'The most important rule of code review is also the simplest: talk about the code, not the person who wrote it. "This function is doing too much" is a comment about the code. "You made this function too complex" is a comment about the person. The difference is not subtle — it is the difference between a comment that invites discussion and one that puts the author on the defensive. Rewrite your comments to remove the second person and you will immediately become a better reviewer.',
      },
      {
        type: 'heading',
        text: 'Ask before you tell',
      },
      {
        type: 'paragraph',
        text: 'When you see something that looks wrong, your first instinct is to say so. A better instinct is to ask. "Is there a reason this uses a class instead of a function?" is almost always more productive than "This should be a function." The question gives the author a chance to explain context you might not have, and it frames the conversation as a collaboration rather than a correction. You will be surprised how often the author has a good reason — and how often your suggestion, phrased as a question, leads them to reconsider on their own.',
      },
      {
        type: 'paragraph',
        text: 'Code review is not about catching bugs, though it does that too. It is about building a shared understanding of what good code looks like, across the team, over time. Every comment is a small teaching moment — for the author, for the reviewer, and for anyone who reads the thread later. Treat it that way, and your codebase will get better in ways that no linter can measure.',
      },
    ],
  },
  {
    id: 'javascript-event-loop-explained',
    title: 'The JavaScript Event Loop, Actually Explained',
    excerpt:
      'You have read a dozen explanations of the event loop. Here is the one that finally made it stick — with diagrams you can hold in your head.',
    cover: 'https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'JavaScript',
    date: '2025-09-15',
    readingTime: '9 min read',
    author: 'Ali Ghasemi',
    featured: false,
    content: [
      {
        type: 'paragraph',
        text: 'The event loop is one of those topics that every JavaScript developer is expected to understand, and that most JavaScript developers secretly do not. The explanations tend to fall into two camps: either so abstract that they describe nothing, or so detailed that they drown you in microtask scheduling semantics. I want to give you the version that sits in the middle — concrete enough to be useful, simple enough to remember.',
      },
      {
        type: 'heading',
        text: 'JavaScript is single-threaded, but it is not alone',
      },
      {
        type: 'paragraph',
        text: 'JavaScript runs on a single thread. That means only one statement executes at a time. But the JavaScript runtime does not run alone — it sits inside a host environment, usually a browser or Node.js, and that host provides additional threads for things like timers, network requests, and file I/O. When you call setTimeout, it is not JavaScript that counts down the milliseconds. It is the host. JavaScript just hands off the timer and moves on.',
      },
      {
        type: 'paragraph',
        text: 'This distinction is the foundation of the event loop. JavaScript is single-threaded for executing your code, but the environment around it is not. The event loop is the mechanism that lets JavaScript take advantage of that parallelism without becoming multi-threaded itself.',
      },
      {
        type: 'heading',
        text: 'Two queues, one loop',
      },
      {
        type: 'paragraph',
        text: 'There are two queues you need to know about: the macrotask queue and the microtask queue. setTimeout callbacks go on the macrotask queue. Promise callbacks go on the microtask queue. The event loop processes them differently: after every macrotask, it drains the entire microtask queue before moving on. This is why a Promise.then always runs before a setTimeout, even if the setTimeout was scheduled first.',
      },
      {
        type: 'paragraph',
        text: 'The practical implication: microtasks can starve the macrotask queue. If you keep adding microtasks inside microtasks, the event loop will never get to the macrotask queue, and your setTimeout will never fire. This is rare in practice, but it is the kind of thing that causes a page to freeze for no obvious reason, and knowing it exists saves hours of debugging.',
      },
      {
        type: 'heading',
        text: 'Async/await is just promises',
      },
      {
        type: 'paragraph',
        text: 'A lot of developers treat async/await as a separate concept from promises. It is not. Async/await is syntactic sugar over promises. An await pauses the function, registers a .then on the promise being awaited, and returns. The function resumes when the promise resolves. Under the hood, it is the same microtask machinery. Understanding this means you understand async/await — there is no second model to learn.',
      },
      {
        type: 'paragraph',
        text: 'The event loop is not magic, and it is not complicated. It is a loop, two queues, and a rule about which queue goes first. Hold that model in your head, and you can reason about any asynchronous JavaScript code you will ever write.',
      },
    ],
  },
  {
    id: 'designing-apis-developers-love',
    title: 'Designing APIs That Developers Actually Love',
    excerpt:
      'A good API is invisible. A great one is a pleasure. Here are the principles that separate the ones people complain about from the ones they recommend.',
    cover: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'Engineering',
    date: '2025-08-22',
    readingTime: '6 min read',
    author: 'Ali Ghasemi',
    featured: false,
    content: [
      {
        type: 'paragraph',
        text: 'Every developer has used an API that felt effortless — where the method names were obvious, the types were clear, and the error messages told you exactly what you did wrong. And every developer has used an API that felt like a fight — where every call required consulting the documentation, where the naming was inconsistent, and where errors were opaque. The difference between these two experiences is not talent. It is design.',
      },
      {
        type: 'heading',
        text: 'Make the common case easy and the rare case possible',
      },
      {
        type: 'paragraph',
        text: 'This is the single most important principle in API design. The 80% case — the thing most callers will do most of the time — should be a one-liner with no configuration. The 20% case — the edge case, the advanced scenario — should be possible, but it is allowed to require more thought. APIs that try to make everything equally easy end up making everything equally hard, because every call site carries the weight of every option.',
      },
      {
        type: 'paragraph',
        text: 'A concrete example: a fetch function that takes a URL and returns a promise is the 80% case. Adding headers, method, body — those are the 20%. A good API makes the 80% case a single argument and the 20% case an options object. A bad API makes you pass an options object for every call, even when you just want the default behavior.',
      },
      {
        type: 'heading',
        text: 'Names are the API',
      },
      {
        type: 'paragraph',
        text: 'Most of the pain of a bad API is in its naming. Inconsistent verbs — get in one place, fetch in another, retrieve in a third — force the caller to memorize which method goes with which resource. Abbreviations that save three characters at the cost of clarity. Names that describe the implementation instead of the intent. Spend more time on names than on anything else. A well-named API barely needs documentation; a poorly named one cannot be saved by it.',
      },
      {
        type: 'paragraph',
        text: 'Designing an API that developers love is not about features. It is about empathy — imagining the person who will call this code for the first time, with no context, at 2am, trying to get something done. Build for that person, and your API will be loved. Build for yourself, and it will be tolerated at best.',
      },
    ],
  },
];
