// useActiveSection.ts
import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: string[]) {
    const [activeId, setActiveId] = useState(sectionIds[0] ?? "");
    const sectionKey = sectionIds.join("|");

    useEffect(() => {
        const sections = sectionIds
            .map((id) => document.getElementById(id))
            .filter((el): el is HTMLElement => !!el);

        if (sections.length === 0) {
            return;
        }

        const visibility = new Map<string, number>();
        sections.forEach((section) => visibility.set(section.id, 0));

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const visibleHeight = entry.isIntersecting ? entry.intersectionRect.height : 0;
                    visibility.set(entry.target.id, visibleHeight);
                });

                let nextActiveId = sectionIds[0] ?? "";
                let maxVisibleHeight = 0;

                sectionIds.forEach((id) => {
                    const visibleHeight = visibility.get(id) ?? 0;
                    if (visibleHeight > maxVisibleHeight) {
                        maxVisibleHeight = visibleHeight;
                        nextActiveId = id;
                    }
                });

                if (maxVisibleHeight > 0) {
                    setActiveId(nextActiveId);
                }
            },
            { rootMargin: "-56px 0px 0px 0px", threshold: 0 }
        );

        sections.forEach((s) => observer.observe(s));
        return () => observer.disconnect();
    }, [sectionKey]);

    return activeId;
}