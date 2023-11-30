export default function Footer() {
  return (
    <footer className="px-4 pt-16 pb-6 text-xs text-gray-600 dark:text-gray-300 text-center">
      <div>
        Created by{" "}
        <span className="text-sky-600 dark:text-sky-400">David Nguyen</span>.
        Inspired by GitHub.
      </div>
      <div className="mt-1">
        Built with{" "}
        <span className="text-sky-600 dark:text-sky-400">Next.js</span>
        &nbsp;&&nbsp;
        <span className="text-sky-600 dark:text-sky-400">TailwindCSS</span>.
        Check out the code{" "}
        <a
          href="https://github.com/daxidngyn/portfolio"
          target="_blank"
          rel="noreferrer"
          className="cursor-pointer dark:text-sky-400 text-sky-600 hover:underline"
        >
          here
        </a>
        !
      </div>
    </footer>
  );
}
