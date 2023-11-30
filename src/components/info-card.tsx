export default function InfoCard({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border w-full rounded-lg p-4" id={id}>
      <span className="text-xs font-medium">{title}</span>
      <div className="mt-4 text-gray-700">{children}</div>
    </section>
  );
}
