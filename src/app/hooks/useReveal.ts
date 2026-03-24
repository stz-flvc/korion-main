/**
 * useReveal — single shared IntersectionObserver for scroll-reveal.
 *
 * Attach the returned ref to a container element.
 * Query all ".reveal" children — when each enters the viewport,
 * we add "is-visible" so the CSS transition fires.
 *
 * ONE observer shared across all hook usages = minimal overhead.
 */
import { useEffect, useRef } from 'react';

let sharedObserver: IntersectionObserver | null = null;

function getObserver(): IntersectionObserver {
    if (!sharedObserver) {
        sharedObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        sharedObserver!.unobserve(entry.target); // fire once
                    }
                });
            },
            { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
        );
    }
    return sharedObserver;
}

export function useReveal<T extends HTMLElement = HTMLDivElement>() {
    const ref = useRef<T>(null);

    useEffect(() => {
        const container = ref.current;
        if (!container) return;
        const obs = getObserver();
        const targets = container.querySelectorAll<HTMLElement>('.reveal');
        targets.forEach((el) => obs.observe(el));
        return () => targets.forEach((el) => obs.unobserve(el));
    }, []);

    return ref;
}
