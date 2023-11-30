import { GeistMono } from "geist/font/mono";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className={`${GeistMono.className} col-span-8 space-y-12`}>
      <section className="border w-full rounded-lg p-4" id="readme">
        <span className="text-xs font-medium">davidnguyen / README.md</span>

        <div className="mt-4">
          <span className="relative text-lg font-medium text-sky-500 md:text-xl">
            Hey there! I'm
          </span>
          <h1 className="font-bold text-3xl md:text-4xl mt-0.5">
            David Nguyen.
          </h1>

          <p className="text-lg font-medium md:text-xl mt-4">
            Software Engineer. Fullstack Developer.&nbsp;
            <span className="text-gray-700">
              An avid developer consistently seeking to expand my knowledge in
              the fields of Computer science, Web Development, and
              Cybersecurity.
            </span>
          </p>

          <p className="text-lg text-gray-700 md:text-xl mt-2">
            &#127891;&nbsp;B.S. Computer Science @ University of California,
            Santa Cruz
          </p>
        </div>
      </section>

      <section className="border w-full rounded-lg p-4" id="about-me">
        <span className="text-xs font-medium">about me</span>
        <div className="mt-4 text-gray-700">
          <p>
            I'm David Nguyen, a current senior pursuing Computer Science at UC
            Santa Cruz.
          </p>
          <p className="mt-4">
            I'm a self-taught developer that specializes in fullstack web
            development. I love to fuel my innovation by exploring creative
            ideas and executing them. I've always been fascinated with the idea
            of how things worked — which paired with my love of computers and
            digital media, led me to where I am today and kickstarted my foray
            into software development.
          </p>
          <p className="mt-4">
            Outside of work, I enjoy playing video games such as Valorant,
            tinkering with the latest technologies, and exploring new places
            with my friends!
          </p>
        </div>
      </section>

      <section className="border w-full rounded-lg p-4" id="about-me">
        <span className="text-xs font-medium">featured projects</span>

        <div className="mt-2 text-gray-700 text-sm">
          For a more in-depth view of my projects and experiences,&nbsp;
          <Link
            href="/projects"
            className="cursor-pointer text-black transition duration-150 ease-in-out hover:text-sky-600 underline"
          >
            click here
          </Link>
          .
        </div>
      </section>
    </main>
  );
}
