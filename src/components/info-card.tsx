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
    <section
      className="w-full rounded-lg border p-4 shadow-sm dark:border-gray-700"
      id={id}
    >
      <span className="text-xs font-medium underline">{title}</span>
      <div className="mt-4 text-gray-700 dark:text-gray-50">{children}</div>
    </section>
  );
}
