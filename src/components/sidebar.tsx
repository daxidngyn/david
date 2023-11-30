import Image from "next/image";

const socials = [
  { name: "Github", link: "", icon: "" },
  { name: "LinkedIn", link: "", icon: "" },
  { name: "Email", link: "", icon: "" },
  { name: "Resume", link: "", icon: "" },
];

export default function Sidebar() {
  return (
    <div className="col-span-3">
      <div>
        <Image
          src="/me.jpg"
          alt="David Nguyen"
          width={200}
          height={200}
          className="rounded-full w-80 h-80 object-cover object-[center_top]"
        />
        <div className="flex flex-col mt-4">
          <span className="font-semibold text-2xl">David Nguyen</span>
          <span className="text-lg leading-6 mt-4">Bio</span>

          <div className="mt-6 flex flex-col">
            {socials.map((social) => (
              <a key={social.name}>{social.name}</a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
