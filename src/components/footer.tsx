export default function Footer() {
  return (
    <footer className="px-4 pb-6 pt-16 text-center text-xs text-gray-600 dark:text-gray-300">
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
          href="https://github.com/daxidngyn/david"
          target="_blank"
          rel="noreferrer"
          className="cursor-pointer text-sky-600 hover:underline dark:text-sky-400"
        >
          here
        </a>
        !
      </div>
    </footer>
  );
}
