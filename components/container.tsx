export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-5xl mx-auto px-6 md:px-12 xl:px-6 z-10">
      {children}
    </div>
  );
}
