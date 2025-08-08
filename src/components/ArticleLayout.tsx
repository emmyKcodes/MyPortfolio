type Article = {
  title: string;
  description?: string;
  href: string;
  date?: string;
};

const articles: Article[] = [
  {
    title: "Understanding React: A Comprehensive Guide",
    description: "Deep dive into React’s core concepts, from JSX to hooks.",
    href: "https://jsx-to-hooks.hashnode.dev/deep-dive-into-reacts-core-concepts-from-jsx-to-hooks?showSharer=truet",
    date: "March 15, 2025",
  },
  {
    title: "Exploring TypeScript for Front‑End Development",
    description:
      "Why TypeScript matters and how to integrate it into your workflow.",
    href: "https://typescript-integration.hashnode.dev/why-typescript-matters-and-how-to-integrate-it-into-your-workflow?showSharer=true",
    date: "February 20, 2025",
  },
  {
    title: "React vs Vue.js: The Ultimate Frontend Showdown",
    description: "Which One Should You Master in 2025",
    href: "https://react-vs-vue.hashnode.dev/react-vs-vuejs-the-ultimate-frontend-showdown-which-one-should-you-master-in-2025",
    date: "April 15, 2025",
  },
  {
    title:
      "Why I Want to Be a Front-End Developer and How HNG Will Help Me Achieve My Goals",
    description:
      "In this blog, I share my journey towards becoming a front-end developer and the motivations behind my career choice. I explore the skills I aim to acquire, the challenges I seek to overcome, and how participating in HNG (HNG Internship) will play a pivotal role in helping me achieve my goals",
    href: "https://emmyk.hashnode.dev/why-i-want-to-be-a-front-end-developer-and-how-hng-will-help-me-achieve-my-goals-1",
    date: "January 30, 2025",
  },
];

const ArticlesPage: React.FC = () => (
  <div className="min-h-screen bg-transparent px-6 py-12 text-white">
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">My Blog Articles</h1>
      <p className="text-lg mb-10">
        Welcome! Below are some of my latest posts on development, design, and
        best practices. Click any title to read the full article.
      </p>
      <div className="space-y-8">
        {articles.map((a, i) => (
          <article
            key={i}
            className="bg-[#2a2b2c]  p-6 rounded-2xl shadow hover:bg-[#444444] transition"
          >
            <header className="flex items-baseline justify-between">
              <h2 className="text-2xl font-semibold text-white">
                <a href={a.href} target="_blank" rel="noopener noreferrer">
                  {a.title}
                </a>
              </h2>
              {a.date && (
                <time className="text-sm text-[#ffffffcc]">{a.date}</time>
              )}
            </header>
            {a.description && (
              <p className="mt-3 text-white">{a.description}</p>
            )}
            <div className="mt-4">
              <a
                href={a.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-medium text-[#8B5CF6] hover:underline"
              >
                Read more &rarr;
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  </div>
);

export default ArticlesPage;
