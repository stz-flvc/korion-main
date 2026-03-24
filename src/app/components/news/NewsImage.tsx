import { useState } from 'react';

type NewsImageProps = {
    src?: string;
    alt: string;
    className?: string;
    };

    const FALLBACK_IMAGE = '/images/news/news-fallback.jpg';

export function NewsImage({ src, alt, className }: NewsImageProps) {
    const [imageSrc, setImageSrc] = useState(src || FALLBACK_IMAGE);
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className={`relative overflow-hidden ${className || ''}`}>
        {!isLoaded && <div className="absolute inset-0 animate-pulse bg-white/8" aria-hidden="true" />}
        <img
            src={imageSrc}
            alt={alt}
            className={`block h-full w-full ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
            onError={() => setImageSrc(FALLBACK_IMAGE)}
            onLoad={() => setIsLoaded(true)}
            loading="lazy"
            decoding="async"
        />
        </div>
    );
    }
