"use client";

interface SectionProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export default function Section({ title, children, className = "" }: SectionProps) {
  return (
    <section className={`py-20 px-6 bg-white dark:bg-gray-950 ${className}`}>
      <div className="max-w-4xl mx-auto">
        {title && (
          <h2 className="text-4xl font-bold text-black dark:text-white mb-12">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
}
