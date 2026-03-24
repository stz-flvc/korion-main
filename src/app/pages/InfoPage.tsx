import { motion } from 'motion/react';
import { ShieldCheck, ChevronRight } from 'lucide-react';
import { Link } from 'react-router';
import { useLanguage } from '../contexts/LanguageContext';
import './InfoPage.css';

interface InfoPageProps {
    eyebrow: string;
    title: string;
    subtitle: string;
}

export function InfoPage({ eyebrow, title, subtitle }: InfoPageProps) {
    const { t } = useLanguage();
    return (
        <div className="info-page">
            <div className="info-page__bg">
                <div className="info-page__glow info-page__glow--blue" />
                <div className="info-page__glow info-page__glow--purple" />
            </div>

            <div className="info-page__container">
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="info-page__hero"
                >
                    <div className="info-page__badge">
                        <ShieldCheck size={16} />
                        <span>{eyebrow}</span>
                    </div>

                    <h1 className="info-page__title">{title}</h1>
                    <p className="info-page__subtitle">{subtitle}</p>

                    <div className="info-page__actions">
                        <Link to="/support" className="info-page__button info-page__button--primary">
                            {t('Support', '고객지원', 'サポート', '支持')}
                            <ChevronRight size={16} />
                        </Link>

                        <Link to="/whitepaper" className="info-page__button info-page__button--ghost">
                            {t('Whitepaper', '백서', 'ホワイトペーパー', '白皮书')}
                            <ChevronRight size={16} />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}