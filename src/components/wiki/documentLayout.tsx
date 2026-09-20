import { useEffect, useRef, useState, type ReactNode } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

interface Heading { id: string; title: string; level: number }

export const DocumentLayout = ({ children, contentKey }: { children: ReactNode; contentKey: string }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const nodes = Array.from(contentRef.current?.querySelectorAll<HTMLElement>("h2, h3") ?? []);
    const outline = nodes.filter((node) => node.textContent?.trim()).map((node, index) => {
      node.id = `wiki-section-${index}`;
      return { id: node.id, title: node.textContent ?? "", level: Number(node.tagName.slice(1)) };
    });
    setHeadings(outline);
    setActiveId(outline[0]?.id ?? "");
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (visible[0]) setActiveId(visible[0].target.id);
    }, { rootMargin: "-100px 0px -55% 0px" });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [contentKey]);

  return (
    <Box className="wiki-document-layout">
      <Box component="article" ref={contentRef} className="wiki-document" sx={{ bgcolor: "background.paper", borderColor: "divider" }}>
        {children}
      </Box>
      {headings.length > 0 && (
        <Box component="nav" aria-label="本页目录" className="wiki-outline">
          <Typography variant="subtitle2" sx={{ mb: 2, fontSize: 12, color: "text.secondary" }}>本页内容</Typography>
          <Box sx={{ borderLeft: 1, borderColor: "divider" }}>
            {headings.map((heading) => (
              <Link key={heading.id} href={`#${heading.id}`} aria-current={heading.id === activeId ? "location" : undefined}
                onClick={() => setActiveId(heading.id)}
                sx={{ display: "block", py: 0.7, pl: heading.level === 3 ? 2.5 : 1.5, pr: 0.5, ml: "-1px", borderLeft: "2px solid", borderColor: heading.id === activeId ? "primary.main" : "transparent", color: heading.id === activeId ? "primary.main" : "text.secondary", fontSize: 12, lineHeight: 1.65, overflowWrap: "anywhere" }}>
                {heading.title}
              </Link>
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
};
