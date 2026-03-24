import { motion } from 'motion/react';
import { useLocation } from 'react-router';
import { ReactNode } from 'react';

interface PageTransitionProps {
    children: ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
    const location = useLocation();

    return (
        <motion.div
            key={location.pathname}
            initial={{ opacity: 0.985, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.12,
                ease: 'easeOut',
            }}
            className="w-full"
        >
            {children}
        </motion.div>
    );
}
