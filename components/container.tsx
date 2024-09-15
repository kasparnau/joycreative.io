export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`max-w-5xl mx-auto px-6 md:px-12 xl:px-6 z-10 ${className && className}`}
    >
      {children}
    </div>
  );
}
