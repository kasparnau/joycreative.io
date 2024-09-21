export const CardContent = ({
  title,
  description,
  fact,
  large,
}: {
  title: string;
  description: string;
  fact: string;
  large?: boolean;
}) => {
  const titleSize = large ? "text-5xl md:text-6xl" : "text-4xl md:text-5xl";

  return (
    <div className={`w-full flex flex-col z-10`}>
      <p className={`${titleSize} font-semibold text-foreground`}>{title}</p>
      <p className={`text-xl md:text-2xl mt-8 font-normal text-foreground`}>
        {description}
      </p>
      <p className={`text-md mt-2 text-muted-foreground`}>{fact}</p>
    </div>
  );
};

export const Card = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`relative rounded-card group p-12 transition-all border border-muted overflow-hidden ${className}`}
  >
    {children}

    {/* Smooth border effect on hover */}
    <div
      className={`absolute transition-all left-0 top-[65%]
                from-transparent via-primary to-transparent bg-gradient-to-b w-[2px] h-24
                opacity-0 group-hover:opacity-100 group-hover:top-[20%]`}
      style={{
        transitionDuration: "400ms",
      }}
    />
  </div>
);