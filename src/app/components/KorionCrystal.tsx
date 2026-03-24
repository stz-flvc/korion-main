import { useRef, useEffect, useState, useCallback } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'motion/react';

interface Props {
    className?: string;
}

export function KorionCrystal({ className = '' }: Props) {
    const containerRef = useRef<HTMLDivElement>(null);
    const mx = useMotionValue(0);
    const my = useMotionValue(0);
    const [hovered, setHovered] = useState(false);
    const raf = useRef<number | null>(null);
    const rectRef = useRef<DOMRect | null>(null);

    const updateRect = useCallback(() => {
        if (containerRef.current) {
            rectRef.current = containerRef.current.getBoundingClientRect();
        }
    }, []);

    useEffect(() => {
        updateRect();
        window.addEventListener('resize', updateRect);
        window.addEventListener('scroll', updateRect, { passive: true });
        return () => {
            window.removeEventListener('resize', updateRect);
            window.removeEventListener('scroll', updateRect);
        };
    }, [updateRect]);

    const springCfg = { stiffness: 130, damping: 20, mass: 0.3 };
    const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [15, -15]), springCfg);
    const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-15, 15]), springCfg);

    const onMouseMove = useCallback((e: MouseEvent) => {
        if (raf.current !== null) return;
        raf.current = requestAnimationFrame(() => {
            const r = rectRef.current;
            if (r) {
                mx.set((e.clientX - r.left - r.width / 2) / (r.width / 2));
                my.set((e.clientY - r.top - r.height / 2) / (r.height / 2));
            }
            raf.current = null;
        });
    }, [mx, my]);

    useEffect(() => {
        window.addEventListener('mousemove', onMouseMove, { passive: true });
        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            if (raf.current !== null) cancelAnimationFrame(raf.current);
        };
    }, [onMouseMove]);

    const onLeave = useCallback(() => {
        setHovered(false);
        mx.set(0);
        my.set(0);
    }, [mx, my]);

    /*
     * Crystal viewBox: 0 0 200 250
     * Crown apex:      (100,10)
     * Girdle:          y≈85–103
     * Body tip:        (100,230)
     * Body centre visible area: approx y=155, x=100
     *
     * K geometric paths — traced to match logo style:
     *  - Thick vertical bar:  x 82–99, y 120–192
     *  - Upper arm diagonal:  from mid-right of bar → upper-right corner
     *  - Lower arm diagonal:  from mid-right of bar → lower-right corner
     *  Arms are angular/geometric wedge shapes with flat tops, matching
     *  the logo's no-serif slab style.
     */

    return (
        <div
            ref={containerRef}
            className={`relative flex items-center justify-center select-none ${className}`}
            style={{ perspective: '1000px' }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={onLeave}
        >
            {/* Base Glows - Using absolute divs for GPU acceleration */}
            <div
                aria-hidden
                className="absolute rounded-full pointer-events-none opacity-40"
                style={{
                    width: '100%', height: '100%',
                    background: 'radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)',
                    filter: 'blur(45px)',
                    willChange: 'filter'
                }}
            />

            {/* Inner Glow Behind Crystal */}
            <div
                aria-hidden
                className="absolute rounded-full pointer-events-none"
                style={{
                    width: '50%', height: '50%',
                    background: 'radial-gradient(circle, rgba(80,100,246,0.5) 0%, transparent 80%)',
                    filter: 'blur(35px)',
                    willChange: 'filter'
                }}
            />

            {/* Outer orbit ring - Native CSS Animation */}
            <div
                aria-hidden
                className="absolute rounded-full border border-blue-500/20 pointer-events-none"
                style={{
                    width: '74%', height: '74%',
                    animation: 'spin-ccw 40s linear infinite',
                    willChange: 'transform'
                }}
            >
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-blue-300 shadow-[0_0_14px_5px_rgba(147,197,253,0.7)]" />
                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_10px_4px_rgba(168,85,247,0.5)]" />
            </div>

            {/* Inner orbit ring - Native CSS Animation */}
            <div
                aria-hidden
                className="absolute rounded-full pointer-events-none"
                style={{
                    width: '54%', height: '54%',
                    border: '1px dashed rgba(168,85,247,0.25)',
                    animation: 'spin-cw 25s linear infinite',
                    willChange: 'transform'
                }}
            >
                <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-indigo-400 shadow-[0_0_10px_4px_rgba(99,102,241,0.55)]" />
                <div className="absolute -left-1.5  top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-300 shadow-[0_0_9px_3px_rgba(34,211,238,0.45)]" />
            </div>

            {/* Crystal body */}
            <motion.div
                className="w-full h-full flex items-center justify-center p-4 z-10"
                style={{ rotateX, rotateY, transformStyle: 'preserve-3d', willChange: 'transform' }}
                animate={{ scale: hovered ? 1.08 : 1 }}
                transition={{ type: 'spring', stiffness: 260, damping: 26 }}
            >
                <svg
                    className="w-full h-full max-w-[210px] max-h-[250px]"
                    viewBox="0 0 200 250"
                    style={{ overflow: 'visible' }}
                >
                    <defs>
                        {/* Crystal face fills */}
                        <linearGradient id="cTop" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#bfdbfe" stopOpacity="0.90" />
                            <stop offset="55%" stopColor="#6366f1" stopOpacity="0.82" />
                            <stop offset="100%" stopColor="#a855f7" stopOpacity="0.70" />
                        </linearGradient>
                        <linearGradient id="cLeft" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#1d4ed8" stopOpacity="1.0" />
                            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.65" />
                        </linearGradient>
                        <linearGradient id="cRight" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.90" />
                            <stop offset="100%" stopColor="#4f46e5" stopOpacity="0.55" />
                        </linearGradient>
                        <linearGradient id="cShim" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="white" stopOpacity="0.60" />
                            <stop offset="100%" stopColor="white" stopOpacity="0" />
                        </linearGradient>

                        {/* ── K gradient: purple (top) → blue (bottom), matching logo ── */}
                        <linearGradient id="kGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#a855f7" />
                            <stop offset="40%" stopColor="#7c3aed" />
                            <stop offset="100%" stopColor="#3b82f6" />
                        </linearGradient>

                        {/* K outer glow blur */}
                        <filter id="kHalo" x="-60%" y="-50%" width="220%" height="200%">
                            <feGaussianBlur stdDeviation="8" result="halo" />
                            <feColorMatrix in="halo" type="matrix"
                                values="0 0 0 0 0.35
                        0 0 0 0 0.35
                        0 0 0 0 1
                        0 0 0 0.9 0" result="colored" />
                            <feMerge>
                                <feMergeNode in="colored" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>

                        {/* K inner edge luminance */}
                        <filter id="kSharp" x="-20%" y="-20%" width="140%" height="140%">
                            <feDropShadow dx="0" dy="0" stdDeviation="2.5" floodColor="rgba(200,180,255,0.8)" />
                        </filter>
                    </defs>

                    {/* Crystal Faces */}
                    <polygon points="100,10 40,85 100,76" fill="url(#cLeft)" />
                    <polygon points="100,10 160,85 100,76" fill="url(#cTop)" />
                    <polygon points="40,85 100,76 160,85 143,103 100,98 57,103" fill="url(#cTop)" opacity="0.88" />
                    <polygon points="40,85  57,103 100,230 48,165" fill="url(#cLeft)" />
                    <polygon points="57,103 100,98  100,230" fill="url(#cLeft)" opacity="0.76" />
                    <polygon points="100,98 143,103 100,230" fill="url(#cRight)" opacity="0.76" />
                    <polygon points="160,85 143,103 100,230 152,165" fill="url(#cRight)" />
                    <polygon points="100,228 92,212 108,212" fill="white" opacity="0.5" />

                    {/* Shimmer */}
                    <polygon points="100,10 100,76 77,82 87,14" fill="url(#cShim)" opacity="0.60" />
                    <polygon points="57,103 82,98 98,150 68,135" fill="url(#cShim)" opacity="0.28" />

                    {/* Outlines */}
                    <polyline
                        points="100,10 40,85 48,165 100,230 152,165 160,85 100,10"
                        fill="none" stroke="rgba(147,197,253,0.32)" strokeWidth="0.7" />
                    <line x1="100" y1="10" x2="100" y2="76" stroke="rgba(255,255,255,0.22)" strokeWidth="0.5" />
                    <line x1="40" y1="85" x2="160" y2="85" stroke="rgba(255,255,255,0.10)" strokeWidth="0.5" />

                    {/* Letter K */}

                    {/* Blue outer halo layer first */}
                    <g filter="url(#kHalo)" opacity="0.85">
                        {/* Vertical bar */}
                        <rect x="82" y="118" width="17" height="77" fill="url(#kGrad)" rx="1.5" />
                        {/* Upper arm — wedge polygon */}
                        <polygon
                            points="99,156  99,118  126,118  112,156"
                            fill="url(#kGrad)"
                        />
                        {/* Lower arm — wedge polygon */}
                        <polygon
                            points="99,156  112,156  126,195  99,195"
                            fill="url(#kGrad)"
                        />
                    </g>

                    {/* Sharp crisp K on top with subtle edge glow */}
                    <g filter="url(#kSharp)" opacity="0.97">
                        {/* Vertical bar */}
                        <rect x="82" y="118" width="17" height="77" fill="url(#kGrad)" rx="1.5" />
                        {/* Upper arm */}
                        <polygon
                            points="99,156  99,118  126,118  112,156"
                            fill="url(#kGrad)"
                        />
                        {/* Lower arm */}
                        <polygon
                            points="99,156  112,156  126,195  99,195"
                            fill="url(#kGrad)"
                        />
                    </g>
                </svg>

                {/* Base glow puddle */}
                <div
                    aria-hidden
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2 rounded-full pointer-events-none"
                    style={{
                        width: '45%', height: '8%',
                        background: 'radial-gradient(ellipse, rgba(99,102,241,0.5) 0%, transparent 70%)',
                        filter: 'blur(10px)',
                    }}
                />
            </motion.div>

            {/* Sparkle dots - native CSS animations */}
            {[
                { x: -75, y: -55, s: 4, c: 'bg-blue-300', anim: 'sparkle 3s infinite 0s' },
                { x: 84, y: -80, s: 3, c: 'bg-purple-300', anim: 'sparkle 3s infinite 1.5s' },
                { x: -90, y: 22, s: 3, c: 'bg-indigo-300', anim: 'sparkle 3s infinite 0.9s' },
                { x: 100, y: 30, s: 2, c: 'bg-cyan-300', anim: 'sparkle 3s infinite 2.2s' },
            ].map((p, i) => (
                <div
                    key={i}
                    aria-hidden
                    className={`absolute rounded-full pointer-events-none ${p.c}`}
                    style={{
                        width: p.s, height: p.s,
                        top: `calc(50% + ${p.y}px)`,
                        left: `calc(50% + ${p.x}px)`,
                        animation: p.anim,
                        willChange: 'transform, opacity'
                    }}
                />
            ))}
        </div>
    );
}
