import { useEffect } from "react";

/**
 * Lightweight client-side head updater. Social crawlers read index.html;
 * this improves in-app titles and browser/SEO crawler behaviour per route.
 */
export default function PageSeo({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path?: string;
}) {
  useEffect(() => {
    document.title = title;

    const setMeta = (attr: "name" | "property", key: string, content: string) => {
      let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("name", "description", description);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    if (path) setMeta("property", "og:url", path);

    if (path) {
      let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (!link) {
        link = document.createElement("link");
        link.rel = "canonical";
        document.head.appendChild(link);
      }
      link.href = path;
    }
  }, [title, description, path]);

  return null;
}
