import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import {
  Menu,
  X,
  Globe,
  Download,
  ChevronDown,
  Wallet,
  CreditCard,
  Gamepad2,
  Cpu,
  Users,
  Lock,
  ShieldCheck,
  FileText,
  BarChart3,
  Layers,
  Check,
  Github,
  HelpCircle,
  LifeBuoy,
  Newspaper,
  BadgeCheck,
  ExternalLink,
  ScrollText,
  Boxes,
  BookOpen,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

import logo from '../../assets/logo/logo.png';
import './NavigationBar.css';

interface DropdownItem {
  label: string;
  labelKo: string;
  path: string;
  desc: string;
  descKo: string;
  icon: React.ReactNode;
  external?: boolean;
}

interface NavGroup {
  key: string;
  label: string;
  labelKo: string;
  items: DropdownItem[];
}

type LanguageOption = 'EN' | 'KO';

export function NavigationBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const languageRef = useRef<HTMLDivElement | null>(null);

  const { language, toggleLanguage, t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
    setMobileExpanded(null);
    setIsLanguageOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!languageRef.current) return;
      if (!languageRef.current.contains(event.target as Node)) {
        setIsLanguageOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const normalizeLanguage = (value: string | undefined | null): LanguageOption => {
    const normalized = String(value ?? '').trim().toUpperCase();

    if (normalized === 'KO' || normalized === 'KR' || normalized === 'KOR') {
      return 'KO';
    }

    return 'EN';
  };

  const currentLanguage = normalizeLanguage(language);

  const navGroups: NavGroup[] = [
    {
      key: 'ecosystem',
      label: 'Ecosystem',
      labelKo: '생태계',
      items: [
        {
          label: 'KORION Wallet',
          labelKo: 'KORION 지갑',
          path: '/Korionwallet',
          desc: 'Secure asset management',
          descKo: '안전한 자산 관리',
          icon: <Wallet size={18} />,
        },
        {
          label: 'KORION Pay',
          labelKo: 'KORION 페이',
          path: '/technology',
          desc: 'Real-world payment gateway',
          descKo: '실사용 결제 게이트웨이',
          icon: <CreditCard size={18} />,
        },
        {
          label: 'Foxyya Platform',
          labelKo: 'Foxyya 플랫폼',
          path: '/foxyya',
          desc: 'Social and entertainment services',
          descKo: '소셜 및 엔터테인먼트 서비스',
          icon: <Gamepad2 size={18} />,
        },
        {
          label: 'Mining Hub',
          labelKo: '채굴 허브',
          path: '/mining',
          desc: 'Mobile mining management',
          descKo: '모바일 채굴 관리',
          icon: <Cpu size={18} />,
        },
      ],
    },
    {
      key: 'company',
      label: 'Company',
      labelKo: '회사',
      items: [
        {
          label: 'About',
          labelKo: '회사소개',
          path: '/about',
          desc: 'Company vision and overview',
          descKo: '회사 비전 및 소개',
          icon: <Users size={18} />,
        },
        {
          label: 'Foundation',
          labelKo: '재단',
          path: '/foundation',
          desc: 'Foundation structure and mission',
          descKo: '재단 구조 및 미션',
          icon: <BadgeCheck size={18} />,
        },
        {
          label: 'Treasury',
          labelKo: '트레저리',
          path: '/treasury',
          desc: 'Multisig asset control',
          descKo: '멀티시그 자산 통제',
          icon: <Lock size={18} />,
        },
        {
          label: 'Policy',
          labelKo: '정책',
          path: '/policy',
          desc: 'Risk and compliance framework',
          descKo: '리스크 및 컴플라이언스 체계',
          icon: <ShieldCheck size={18} />,
        },
        {
          label: 'News',
          labelKo: '회사 소식',
          path: '/news',
          desc: 'Announcements and project updates',
          descKo: '공지 및 프로젝트 업데이트',
          icon: <Newspaper size={18} />,
        },
      ],
    },
    {
      key: 'developers',
      label: 'Developers',
      labelKo: '개발자',
      items: [
        {
          label: 'GitHub',
          labelKo: '깃허브',
          path: 'https://github.com/',
          desc: 'Open source repository',
          descKo: '오픈소스 저장소',
          icon: <Github size={18} />,
          external: true,
        },
        {
          label: 'API / SDK',
          labelKo: 'API / SDK',
          path: '/developers',
          desc: 'Developer tools and docs',
          descKo: '개발 도구 및 문서',
          icon: <Layers size={18} />,
        },
        {
          label: 'Smart Contract',
          labelKo: '스마트 컨트랙트',
          path: '/smart-contract',
          desc: 'Contract references and structure',
          descKo: '컨트랙트 참고 자료 및 구조',
          icon: <Boxes size={18} />,
        },
      ],
    },
    {
      key: 'resources',
      label: 'Resources',
      labelKo: '자료',
      items: [
        {
          label: 'Whitepaper 1.0',
          labelKo: '백서 1.0',
          path: '/whitepaper',
          desc: 'Strategic overview document',
          descKo: '전략 개요 문서',
          icon: <FileText size={18} />,
        },
        {
          label: 'Tokenomics',
          labelKo: '토크노믹스',
          path: '/tokenomics',
          desc: 'KORI supply and utility model',
          descKo: 'KORI 공급 및 활용 모델',
          icon: <BarChart3 size={18} />,
        },
        {
          label: 'Media Kit',
          labelKo: '미디어킷',
          path: '/media-kit',
          desc: 'Brand assets and official materials',
          descKo: '브랜드 자산 및 공식 자료',
          icon: <BookOpen size={18} />,
        },
      ],
    },
    {
      key: 'support',
      label: 'Support',
      labelKo: '지원',
      items: [
        {
          label: 'FAQ',
          labelKo: '자주 묻는 질문',
          path: '/faq',
          desc: 'Common questions and answers',
          descKo: '자주 묻는 질문과 답변',
          icon: <HelpCircle size={18} />,
        },
        {
          label: 'Help Center',
          labelKo: '고객지원',
          path: '/support',
          desc: 'Customer support center',
          descKo: '고객 지원 센터',
          icon: <LifeBuoy size={18} />,
        },
        {
          label: 'Contact',
          labelKo: '문의하기',
          path: '/contact',
          desc: 'Get in touch with our team',
          descKo: '운영팀 문의',
          icon: <MailIcon size={18} />,
        },
      ],
    },
    {
      key: 'market',
      label: 'Market',
      labelKo: '마켓',
      items: [
        {
          label: 'SunSwap Listing',
          labelKo: 'SunSwap 상장',
          path: 'https://sunswap.com/',
          desc: 'Trade KORION on SunSwap',
          descKo: 'SunSwap에서 KORION 거래',
          icon: <ExternalLink size={18} />,
          external: true,
        },
        {
          label: 'Explorer',
          labelKo: '익스플로러',
          path: '/explorer',
          desc: 'Token and transaction visibility',
          descKo: '토큰 및 거래 조회',
          icon: <ScrollText size={18} />,
        },
        {
          label: 'Listing Info',
          labelKo: '상장 정보',
          path: '/listing-info',
          desc: 'Exchange and market references',
          descKo: '거래소 및 마켓 참고 정보',
          icon: <BookOpen size={18} />,
        },
      ],
    },
  ];

  const visibleGroups = navGroups.slice(0, 5);
  const overflowGroups: NavGroup[] = [
    ...navGroups.slice(5),
    {
      key: 'roadmap',
      label: 'Roadmap',
      labelKo: '로드맵',
      items: [
        {
          label: 'Roadmap',
          labelKo: '로드맵',
          path: '/roadmap',
          desc: 'Development milestones',
          descKo: '개발 마일스톤',
          icon: <ScrollText size={18} />,
        },
      ],
    },
  ];

  const languageOptions: { value: LanguageOption; code: string; label: string }[] = [
    { value: 'EN', code: 'EN', label: 'English' },
    { value: 'KO', code: 'KO', label: '한국어' },
  ];

  const isItemActive = (path: string, groupKey?: string, external?: boolean) => {
    if (external) return false;
    if (groupKey) return false;
    return location.pathname === path;
  };

  const handleLanguageChange = (target: LanguageOption) => {
    if (target !== currentLanguage) {
      toggleLanguage();
    }
    setIsLanguageOpen(false);
  };

  const renderNavItem = (item: DropdownItem, key: string, className: string) => {
    if (item.external) {
      return (
        <a
          key={key}
          href={item.path}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
        >
          <div className="korion-nav__dropdown-icon">{item.icon}</div>
          <div className="korion-nav__dropdown-content">
            <div className="korion-nav__dropdown-title">
              {t(item.label, item.labelKo)}
            </div>
            <div className="korion-nav__dropdown-desc">
              {t(item.desc, item.descKo)}
            </div>
          </div>
        </a>
      );
    }

    return (
      <Link key={key} to={item.path} className={className}>
        <div className="korion-nav__dropdown-icon">{item.icon}</div>
        <div className="korion-nav__dropdown-content">
          <div className="korion-nav__dropdown-title">
            {t(item.label, item.labelKo)}
          </div>
          <div className="korion-nav__dropdown-desc">
            {t(item.desc, item.descKo)}
          </div>
        </div>
      </Link>
    );
  };

  const renderMobileNavItem = (item: DropdownItem, key: string, className: string) => {
    if (item.external) {
      return (
        <a
          key={key}
          href={item.path}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
        >
          <span className="korion-nav__mobile-item-icon">{item.icon}</span>
          <div className="korion-nav__mobile-item-content">
            <span className="korion-nav__mobile-item-title">
              {t(item.label, item.labelKo)}
            </span>
            <span className="korion-nav__mobile-item-desc">
              {t(item.desc, item.descKo)}
            </span>
          </div>
        </a>
      );
    }

    return (
      <Link key={key} to={item.path} className={className}>
        <span className="korion-nav__mobile-item-icon">{item.icon}</span>
        <div className="korion-nav__mobile-item-content">
          <span className="korion-nav__mobile-item-title">
            {t(item.label, item.labelKo)}
          </span>
          <span className="korion-nav__mobile-item-desc">
            {t(item.desc, item.descKo)}
          </span>
        </div>
      </Link> 
    );
  };

  return (
    <nav
      className={`korion-nav ${isScrolled ? 'korion-nav--scrolled' : ''}`}
      aria-label="Main navigation"
    >
      <div className="korion-nav__container">
        <div className="korion-nav__inner">
          <div className="korion-nav__left">
            <Link to="/" className="korion-nav__logo">
              <div className="korion-nav__logo-mark">
                <img src={logo} alt="KORION" className="korion-nav__logo-image" />
              </div>
              <span className="korion-nav__logo-text">KORION</span>
            </Link>

            <div className="korion-nav__desktop-menu">
              {visibleGroups.map((group) => {
                const isOpen = activeDropdown === group.key;

                return (
                  <div
                    key={group.key}
                    className="korion-nav__group"
                    onMouseEnter={() => setActiveDropdown(group.key)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      type="button"
                      className={`korion-nav__group-button ${isOpen ? 'is-open' : ''}`}
                      aria-haspopup="true"
                      aria-expanded={isOpen}
                    >
                      <span>{t(group.label, group.labelKo)}</span>
                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.22 }}
                        className="korion-nav__group-arrow"
                      >
                        <ChevronDown size={14} />
                      </motion.span>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.18, ease: 'easeOut' }}
                          className="korion-nav__dropdown"
                        >
                          <div className="korion-nav__dropdown-panel">
                            {group.items.map((item) => {
                              const active = isItemActive(item.path, group.key, item.external);

                              return renderNavItem(
                                item,
                                `${group.key}-${item.path}-${item.label}`,
                                `korion-nav__dropdown-item ${active ? 'is-active' : ''}`
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}

              <div
                className="korion-nav__group"
                onMouseEnter={() => setActiveDropdown('more')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  type="button"
                  className={`korion-nav__group-button ${activeDropdown === 'more' ? 'is-open' : ''}`}
                  aria-haspopup="true"
                  aria-expanded={activeDropdown === 'more'}
                >
                  <span>{t('More', '더보기')}</span>
                  <motion.span
                    animate={{ rotate: activeDropdown === 'more' ? 180 : 0 }}
                    transition={{ duration: 0.22 }}
                    className="korion-nav__group-arrow"
                  >
                    <ChevronDown size={14} />
                  </motion.span>
                </button>

                <AnimatePresence>
                  {activeDropdown === 'more' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.18, ease: 'easeOut' }}
                      className="korion-nav__dropdown korion-nav__dropdown--more"
                    >
                      <div className="korion-nav__dropdown-panel">
                        {overflowGroups.map((group) => (
                          <div key={group.key} className="korion-nav__more-block">
                            <div className="korion-nav__more-title">
                              {t(group.label, group.labelKo)}
                            </div>

                            <div className="korion-nav__more-list">
                              {group.items.map((item) => {
                                const active = isItemActive(item.path, group.key, item.external);

                                return renderNavItem(
                                  item,
                                  `${group.key}-${item.path}-${item.label}`,
                                  `korion-nav__dropdown-item ${active ? 'is-active' : ''}`
                                );
                              })}
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          <div className="korion-nav__actions">
            <div className="korion-nav__language" ref={languageRef}>
              <button
                type="button"
                onClick={() => setIsLanguageOpen((prev) => !prev)}
                className={`korion-nav__lang-button ${isLanguageOpen ? 'is-open' : ''}`}
                aria-haspopup="true"
                aria-expanded={isLanguageOpen}
              >
                <Globe size={15} />
                <span>{currentLanguage}</span>
                <motion.span
                  animate={{ rotate: isLanguageOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="korion-nav__group-arrow"
                >
                  <ChevronDown size={14} />
                </motion.span>
              </button>

              <AnimatePresence>
                {isLanguageOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.18 }}
                    className="korion-nav__language-dropdown"
                  >
                    <div className="korion-nav__language-panel">
                      {languageOptions.map((option) => {
                        const isActive = currentLanguage === option.value;

                        return (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() => handleLanguageChange(option.value)}
                            className={`korion-nav__language-item ${isActive ? 'is-active' : ''}`}
                          >
                            <div className="korion-nav__language-item-left">
                              <span className="korion-nav__language-code">{option.code}</span>
                              <span className="korion-nav__language-label">{option.label}</span>
                            </div>

                            <span className={`korion-nav__language-check ${isActive ? 'is-visible' : ''}`}>
                              <Check size={16} />
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>



            <button
              type="button"
              onClick={() => navigate('/download')}
              className="korion-nav__cta-button"
            >
              <Download size={15} />
              <span>{t('Launch App', '앱 실행')}</span>
            </button>

            <button
              type="button"
              className="korion-nav__mobile-toggle"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.16 }}
                  >
                    <X size={24} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="open"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.16 }}
                  >
                    <Menu size={24} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="korion-nav__mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.22, ease: 'easeInOut' }}
            >
              <div className="korion-nav__mobile-menu-inner">
                {navGroups.map((group) => {
                  const isExpanded = mobileExpanded === group.key;

                  return (
                    <div key={group.key} className="korion-nav__mobile-group">
                      <button
                        type="button"
                        className="korion-nav__mobile-group-button"
                        onClick={() =>
                          setMobileExpanded((prev) => (prev === group.key ? null : group.key))
                        }
                      >
                        <span>{t(group.label, group.labelKo)}</span>
                        <motion.span
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown size={16} />
                        </motion.span>
                      </button>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="korion-nav__mobile-submenu"
                          >
                            {group.items.map((item) => {
                              const active = isItemActive(item.path, group.key, item.external);

                              return renderMobileNavItem(
                                item,
                                `${group.key}-mobile-${item.path}-${item.label}`,
                                `korion-nav__mobile-item ${active ? 'is-active' : ''}`
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}

                <div className="korion-nav__mobile-group">
                  <Link
                    to="/roadmap"
                    className={`korion-nav__mobile-item korion-nav__mobile-item--single ${location.pathname === '/roadmap' ? 'is-active' : ''}`}
                  >
                    <span className="korion-nav__mobile-item-icon">
                      <ScrollText size={18} />
                    </span>
                    <div className="korion-nav__mobile-item-content">
                      <span className="korion-nav__mobile-item-title">
                        {t('Roadmap', '로드맵')}
                      </span>
                      <span className="korion-nav__mobile-item-desc">
                        {t('Development milestones', '개발 마일스톤')}
                      </span>
                    </div>
                  </Link>
                </div>

                <div className="korion-nav__mobile-language-block">
                  <div className="korion-nav__mobile-language-title">
                    {t('Language', '언어')}
                  </div>

                  <div className="korion-nav__mobile-language-list">
                    {languageOptions.map((option) => {
                      const isActive = currentLanguage === option.value;

                      return (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => handleLanguageChange(option.value)}
                          className={`korion-nav__mobile-language-item ${isActive ? 'is-active' : ''}`}
                        >
                          <div className="korion-nav__mobile-language-left">
                            <span className="korion-nav__language-code">{option.code}</span>
                            <span>{option.label}</span>
                          </div>

                          <span className={`korion-nav__language-check ${isActive ? 'is-visible' : ''}`}>
                            <Check size={16} />
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>



                <button
                  type="button"
                  onClick={() => navigate('/download')}
                  className="korion-nav__mobile-cta"
                >
                  <Download size={16} />
                  <span>{t('Launch App', '앱 실행')}</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

function MailIcon(props: { size?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      width={props.size ?? 18}
      height={props.size ?? 18}
    >
      <path d="M4 6h16v12H4z" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}