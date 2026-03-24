import { useState } from 'react';
import { Link, NavLink } from 'react-router';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import './SiteHeader.css';

type NavItem = {
    labelEn: string;
    labelKo: string;
    labelJa: string;
    labelZh: string;
    href: string;
    };

    const mainNavItems: NavItem[] = [
    { labelKo: '에코시스템', labelEn: 'Ecosystem', labelJa: 'エコシステム', labelZh: '生态系统', href: '/ecosystem' },
    { labelKo: 'KORION Pay', labelEn: 'KORION Pay', labelJa: 'KORION Pay', labelZh: 'KORION Pay', href: '/korionpay' },
    { labelKo: '토크노믹스', labelEn: 'Tokenomics', labelJa: 'トークノミクス', labelZh: '代币经济学', href: '/tokenomics' },
    { labelKo: '개발자', labelEn: 'Developers', labelJa: '開発者', labelZh: '开发者', href: '/developers' },
    { labelKo: '로드맵', labelEn: 'Roadmap', labelJa: 'ロードマップ', labelZh: '路线图', href: '/roadmap' },
    { labelKo: '지원', labelEn: 'Support', labelJa: 'サポート', labelZh: '支持', href: '/support' },
    ];

    const companyDropdownItems: NavItem[] = [
    { labelKo: '소개', labelEn: 'About', labelJa: '会社概要', labelZh: '关于我们', href: '/about' },
    { labelKo: '재단', labelEn: 'Foundation', labelJa: '財団', labelZh: '基金会', href: '/foundation' },
    { labelKo: '재무', labelEn: 'Treasury', labelJa: 'トレジャリー', labelZh: '国库', href: '/treasury' },
    { labelKo: '정책', labelEn: 'Policy', labelJa: 'ポリシー', labelZh: '政策', href: '/policy' },
    { labelKo: '팀', labelEn: 'Team', labelJa: 'チーム', labelZh: '团队', href: '/team' },
    ];

    export function SiteHeader() {
    const { t } = useLanguage();

    const [mobileOpen, setMobileOpen] = useState(false);
    const [companyOpen, setCompanyOpen] = useState(false);

    return (
        <header className="site-header">
        <div className="site-header__container">
            <Link to="/" className="site-header__brand">
            <div className="site-header__brand-mark">K</div>
            <span>KORION</span>
            </Link>

            <nav className="site-header__nav">
            {mainNavItems.map((item) => (
                <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                    `site-header__nav-link${isActive ? ' is-active' : ''}`
                }
                >
                {t(item.labelEn, item.labelKo, item.labelJa, item.labelZh)}
                </NavLink>
            ))}

            <div
                className="site-header__dropdown"
                onMouseEnter={() => setCompanyOpen(true)}
                onMouseLeave={() => setCompanyOpen(false)}
            >
                <button type="button" className="site-header__dropdown-trigger">
                <span>{t('Company', '회사', '会社', '公司')}</span>
                <ChevronDown size={15} />
                </button>

                <div className={`site-header__dropdown-menu${companyOpen ? ' is-open' : ''}`}>
                {companyDropdownItems.map((item) => (
                    <Link key={item.href} to={item.href} className="site-header__dropdown-link">
                    {t(item.labelEn, item.labelKo, item.labelJa, item.labelZh)}
                    </Link>
                ))}
                </div>
            </div>
            </nav>

            <div className="site-header__actions">
            <Link to="/download" className="site-header__download">
                {t('Download', '다운로드', 'ダウンロード', '下载')}
            </Link>

            <button
                type="button"
                className="site-header__mobile-toggle"
                onClick={() => setMobileOpen((prev) => !prev)}
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            </div>
        </div>

        <div className={`site-header__mobile${mobileOpen ? ' is-open' : ''}`}>
            <div className="site-header__mobile-inner">
            {mainNavItems.map((item) => (
                <Link
                key={item.href}
                to={item.href}
                className="site-header__mobile-link"
                onClick={() => setMobileOpen(false)}
                >
                {t(item.labelEn, item.labelKo, item.labelJa, item.labelZh)}
                </Link>
            ))}

            <div className="site-header__mobile-group">
                <span className="site-header__mobile-group-title">
                {t('Company', '회사', '会社', '公司')}
                </span>

                {companyDropdownItems.map((item) => (
                <Link
                    key={item.href}
                    to={item.href}
                    className="site-header__mobile-sublink"
                    onClick={() => setMobileOpen(false)}
                >
                    {t(item.labelEn, item.labelKo, item.labelJa, item.labelZh)}
                </Link>
                ))}
            </div>

            <Link
                to="/download"
                className="site-header__mobile-download"
                onClick={() => setMobileOpen(false)}
            >
                {t('Download', '다운로드', 'ダウンロード', '下载')}
            </Link>
            </div>
        </div>
        </header>
    );
    }