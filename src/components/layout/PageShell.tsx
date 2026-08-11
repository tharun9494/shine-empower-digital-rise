import { type ReactNode } from "react";
import PageLayout from "@/components/layout/PageLayout";
import PageSeo from "@/components/common/PageSeo";
import FinalCTA from "@/components/sections/FinalCTA";

export default function PageShell({
  title,
  eyebrow,
  description,
  seoTitle,
  seoDescription,
  path,
  children,
}: {
  title: string;
  eyebrow?: string;
  description?: string;
  seoTitle: string;
  seoDescription: string;
  path: string;
  children: ReactNode;
}) {
  return (
    <PageLayout>
      <PageSeo title={seoTitle} description={seoDescription} path={path} />
      <section className="relative overflow-hidden bg-navy pb-16 pt-36 text-navy-foreground sm:pb-20 sm:pt-40">
        <div className="hairline-grid absolute inset-0 opacity-50" aria-hidden="true" />
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/20 blur-3xl" aria-hidden="true" />
        <div className="container-x relative">
          {eyebrow && <p className="eyebrow text-secondary">{eyebrow}</p>}
          <h1 className="mt-4 max-w-3xl font-display text-3xl font-extrabold leading-[1.08] sm:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 max-w-2xl text-base text-navy-foreground/75 sm:text-lg">{description}</p>
          )}
        </div>
      </section>
      <div className="py-16 sm:py-20">{children}</div>
      <FinalCTA />
    </PageLayout>
  );
}
