import { memo, useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import {
  Menu,
  X,
  Globe,
  ChevronDown,
  PieChart,
  Pickaxe,
  FileCode,
  Wallet,
  Sparkles,
  Zap,
  Search,
  Code2,
  Braces,
  Box,
  TestTube2,
  Building2,
  Landmark,
  Users2,
  LineChart,
  FileText,
  Newspaper,
  Image as ImageIcon,
  LifeBuoy,
  Check,
  Download,
  ScrollText,
  ShieldCheck,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { prefetchRoute } from '../utils/routePrefetch';

import logoImg from '../../assets/logo/korion-ek-logo.png';
import './NavigationBar.css';

interface DropdownItem {
  label: string;
  labelKo: string;
  labelJa: string;
  labelZh: string;
  path: string;
  desc: string;
  descKo: string;
  descJa: string;
  descZh: string;
  icon: React.ReactNode;
  external?: boolean;
}

interface NavGroup {
  key: string;
  label: string;
  labelKo: string;
  labelJa: string;
  labelZh: string;
  items: DropdownItem[];
}

type LanguageOption = 'EN' | 'KO' | 'JA' | 'ZH';

export const NavigationBar = memo(function NavigationBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const languageRef = useRef<HTMLDivElement | null>(null);

  const { language, setLang, t } = useLanguage();
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
    if (normalized === 'JA' || normalized === 'JP' || normalized === 'JPN') {
      return 'JA';
    }
    if (normalized === 'ZH' || normalized === 'CN' || normalized === 'CHN') {
      return 'ZH';
    }

    return 'EN';
  };

  const currentLanguage = normalizeLanguage(language);

  const navGroups: NavGroup[] = [
    {
      key: 'ecosystem',
      label: 'Ecosystem',
      labelKo: '생태계',
      labelJa: 'エコシステム',
      labelZh: '生态系统',
      items: [
        {
          label: 'KORION Wallet',
          labelKo: 'KORION 지갑',
          labelJa: 'KORIONウォレット',
          labelZh: 'KORION钱包',
          path: '/ecosystem',
          desc: 'Secure asset management',
          descKo: '안전한 자산 관리',
          descJa: '安全な資産管理',
          descZh: '安全资产管理',
          icon: <Wallet size={18} />,
        },
        {
          label: 'KORION Pay',
          labelKo: 'KORION 페이',
          labelJa: 'KORION Pay',
          labelZh: 'KORION Pay',
          path: '/technology',
          desc: 'Real-world payment gateway',
          descKo: '실사용 결제 게이트웨이',
          descJa: 'リアルワールド決済ゲートウェイ',
          descZh: '现实世界支付网关',
          icon: <Sparkles size={18} />,
        },
        {
          label: 'Foxyya Platform',
          labelKo: 'Foxyya 플랫폼',
          labelJa: 'Foxyyaプラットフォーム',
          labelZh: 'Foxyya平台',
          path: '/foxyya',
          desc: 'Social and entertainment services',
          descKo: '소셜 및 엔터테인먼트 서비스',
          descJa: 'ソーシャル・エンターテインメントサービス',
          descZh: '社交和娱乐服务',
          icon: <Zap size={18} />,
        },
        {
          label: 'Mining Hub',
          labelKo: '채굴 허브',
          labelJa: 'マイニングハブ',
          labelZh: '挖矿中心',
          path: '/mining',
          desc: 'Mobile mining management',
          descKo: '모바일 채굴 관리',
          descJa: 'モバイルマイニング管理',
          descZh: '移动挖矿管理',
          icon: <Pickaxe size={18} />,
        },
      ],
    },
    {
      key: 'company',
      label: 'Company',
      labelKo: '회사',
      labelJa: '会社',
      labelZh: '公司',
      items: [
        {
          label: 'About',
          labelKo: '회사소개',
          labelJa: '会社概要',
          labelZh: '关于我们',
          path: '/about',
          desc: 'Company vision and overview',
          descKo: '회사 비전 및 소개',
          descJa: '企業ビジョンと概要',
          descZh: '公司愿景与概述',
          icon: <Building2 size={18} />,
        },
        {
          label: 'Team',
          labelKo: '팀소개',
          labelJa: 'チーム',
          labelZh: '团队',
          path: '/team',
          desc: 'Leadership and core team',
          descKo: '리더십 및 핵심 팀 소개',
          descJa: 'リーダーシップとコアチーム',
          descZh: '领导层和核心团队',
          icon: <Users2 size={18} />,
        },
        {
          label: 'Foundation',
          labelKo: '재단',
          labelJa: '財団',
          labelZh: '基金会',
          path: '/foundation',
          desc: 'Foundation structure and mission',
          descKo: '재단 구조 및 미션',
          descJa: '財団の構造とミッション',
          descZh: '基金会结构与使命',
          icon: <Landmark size={18} />,
        },
        {
          label: 'Treasury',
          labelKo: '트레저리',
          labelJa: 'トレジャリー',
          labelZh: '国库',
          path: '/treasury',
          desc: 'Multisig asset control',
          descKo: '멀티시그 자산 통제',
          descJa: 'マルチシグ資産管理',
          descZh: '多重签名资产控制',
          icon: <PieChart size={18} />,
        },
        {
          label: 'Policy',
          labelKo: '정책',
          labelJa: 'ポリシー',
          labelZh: '政策',
          path: '/policy',
          desc: 'Risk and compliance framework',
          descKo: '리스크 및 컴플라이언스 체계',
          descJa: 'リスクとコンプライアンス体制',
          descZh: '风险与合规框架',
          icon: <FileCode size={18} />,
        },
        {
          label: 'News',
          labelKo: '회사 소식',
          labelJa: 'ニュース',
          labelZh: '新闻',
          path: '/news',
          desc: 'Announcements and project updates',
          descKo: '공지 및 프로젝트 업데이트',
          descJa: 'お知らせとプロジェクト更新',
          descZh: '公告与项目更新',
          icon: <Newspaper size={18} />,
        },
      ],
    },
    {
      key: 'developers',
      label: 'Developers',
      labelKo: '개발자',
      labelJa: '開発者',
      labelZh: '开发者',
      items: [
        {
          path: '/developers',
          label: 'Dev Portal',
          labelKo: '개발자 포털',
          labelJa: '開発者ポータル',
          labelZh: '开发者门户',
          desc: 'Documentation & guides',
          descKo: '문서 및 가이드',
          descJa: 'ドキュメントとガイド',
          descZh: '文档与指南',
          icon: <Code2 size={18} />,
        },
        {
          path: '/developers/api',
          label: 'API Reference',
          labelKo: 'API 레퍼런스',
          labelJa: 'APIリファレンス',
          labelZh: 'API参考',
          desc: 'Core architecture endpoints',
          descKo: '핵심 아키텍처 엔드포인트',
          descJa: 'コアアーキテクチャエンドポイント',
          descZh: '核心架构端点',
          icon: <Braces size={18} />,
        },
        {
          path: '/developers/sdk',
          label: 'SDK Access',
          labelKo: 'SDK 액세스',
          labelJa: 'SDKアクセス',
          labelZh: 'SDK接入',
          desc: 'Pre-built integration kits',
          descKo: '사전 구축된 통합 키트',
          descJa: '構築済みの統合キット',
          descZh: '预构建的集成包',
          icon: <Box size={18} />,
        },
        {
          path: '/developers/sandbox',
          label: 'Sandbox Environment',
          labelKo: '샌드박스 환경',
          labelJa: 'サンドボックス環境',
          labelZh: '沙箱环境',
          desc: 'Safe testing & simulation',
          descKo: '안전한 테스트 및 시뮬레이션',
          descJa: '安全なテストとシミュレーション',
          descZh: '安全测试与模拟',
          icon: <TestTube2 size={18} />,
        },
      ],
    },
    {
      key: 'resources',
      label: 'Resources',
      labelKo: '리소스',
      labelJa: 'リソース',
      labelZh: '资源',
      items: [
        {
          path: '/whitepaper',
          label: 'Whitepaper',
          labelKo: '백서',
          labelJa: 'ホワイトペーパー',
          labelZh: '白皮书',
          desc: 'Technical specification',
          descKo: '기술 사양서(백서)',
          descJa: '技術仕様',
          descZh: '技术规范',
          icon: <FileText size={18} />,
          external: true,
        },
        {
          path: '/news',
          label: 'News & Media',
          labelKo: '뉴스 및 미디어',
          labelJa: 'ニュース＆メディア',
          labelZh: '新闻与媒体',
          desc: 'Latest announcements',
          descKo: '최신 공지 및 보도자료',
          descJa: '最新のお知らせ',
          descZh: '最新公告',
          icon: <Newspaper size={18} />,
        },
        {
          path: '/media-kit',
          label: 'Media Kit',
          labelKo: '미디어 키트',
          labelJa: 'メディアキット',
          labelZh: '媒体资料包',
          desc: 'Brand assets & guides',
          descKo: '브랜드 자산 및 가이드',
          descJa: 'ブランドアセットとガイド',
          descZh: '品牌资产与指南',
          icon: <ImageIcon size={18} />,
        },
        {
          path: '/faq',
          label: 'Support / FAQ',
          labelKo: '지원 및 FAQ',
          labelJa: 'サポート / FAQ',
          labelZh: '支持 / FAQ',
          desc: 'Help center & guidance',
          descKo: '헬프 센터 및 안내',
          descJa: 'ヘルプセンターとガイダンス',
          descZh: '帮助中心与指导',
          icon: <LifeBuoy size={18} />,
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
      labelJa: 'ロードマップ',
      labelZh: '路线图',
      items: [
        {
          label: 'Roadmap',
          labelKo: '로드맵',
          labelJa: 'ロードマップ',
          labelZh: '路线图',
          path: '/roadmap',
          desc: 'Development milestones',
          descKo: '개발 마일스톤',
          descJa: '開発マイルストーン',
          descZh: '开发里程碑',
          icon: <ScrollText size={18} />,
        },
      ],
    },
  ];

  const languageOptions: { value: LanguageOption; code: string; label: string }[] = [
    { value: 'EN', code: 'EN', label: 'English' },
    { value: 'KO', code: 'KO', label: '한국어' },
    { value: 'JA', code: 'JA', label: '日本語' },
    { value: 'ZH', code: 'ZH', label: '中文' },
  ];

  const isItemActive = (path: string, groupKey?: string, external?: boolean) => {
    if (external) return false;
    if (groupKey) {
      // If it's a group item, check if path matches
      return location.pathname === path;
    }
    return location.pathname === path;
  };

  const handleLanguageChange = (target: LanguageOption) => {
    const langMap: Record<LanguageOption, 'EN' | 'KR' | 'JA' | 'ZH'> = {
      EN: 'EN',
      KO: 'KR',
      JA: 'JA',
      ZH: 'ZH',
    };
    setLang(langMap[target]);
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
              {t(item.label, item.labelKo, item.labelJa, item.labelZh)}
            </div>
            <div className="korion-nav__dropdown-desc">
              {t(item.desc, item.descKo, item.descJa, item.descZh)}
            </div>
          </div>
        </a>
      );
    }

    return (
      <Link
        key={key}
        to={item.path}
        className={className}
        onMouseEnter={() => prefetchRoute(item.path)}
        onFocus={() => prefetchRoute(item.path)}
      >
        <div className="korion-nav__dropdown-icon">{item.icon}</div>
        <div className="korion-nav__dropdown-content">
          <div className="korion-nav__dropdown-title">
            {t(item.label, item.labelKo, item.labelJa, item.labelZh)}
          </div>
          <div className="korion-nav__dropdown-desc">
            {t(item.desc, item.descKo, item.descJa, item.descZh)}
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
              {t(item.label, item.labelKo, item.labelJa, item.labelZh)}
            </span>
            <span className="korion-nav__mobile-item-desc">
              {t(item.desc, item.descKo, item.descJa, item.descZh)}
            </span>
          </div>
        </a>
      );
    }

    return (
      <Link
        key={key}
        to={item.path}
        className={className}
        onMouseEnter={() => prefetchRoute(item.path)}
        onFocus={() => prefetchRoute(item.path)}
      >
        <span className="korion-nav__mobile-item-icon">{item.icon}</span>
        <div className="korion-nav__mobile-item-content">
          <span className="korion-nav__mobile-item-title">
            {t(item.label, item.labelKo, item.labelJa, item.labelZh)}
          </span>
          <span className="korion-nav__mobile-item-desc">
            {t(item.desc, item.descKo, item.descJa, item.descZh)}
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
            <Link
              to="/"
              className="korion-nav__logo"
              onMouseEnter={() => prefetchRoute('/')}
              onFocus={() => prefetchRoute('/')}
            >
              <div className="korion-nav__logo-mark">
                <img src={logoImg} alt="KORION Logo" className="korion-nav__logo-image" />
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
                      <span>{t(group.label, group.labelKo, group.labelJa, group.labelZh)}</span>
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
                  <span>{t('More', '더보기', 'もっと見る', '更多')}</span>
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
                              {t(group.label, group.labelKo, group.labelJa, group.labelZh)}
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
              onClick={() => navigate('/admin/login')}
              className="korion-nav__admin-button"
            >
              <ShieldCheck size={15} />
              <span>ADMIN</span>
            </button>

            <button
              type="button"
              onClick={() => navigate('/download')}
              className="korion-nav__cta-button"
            >
              <Download size={15} />
              <span>{t('Launch App', '앱 실행', 'アプリ起動', '启动应用')}</span>
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
                        <span>{t(group.label, group.labelKo, group.labelJa, group.labelZh)}</span>
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
                    onMouseEnter={() => prefetchRoute('/roadmap')}
                    onFocus={() => prefetchRoute('/roadmap')}
                  >
                    <span className="korion-nav__mobile-item-icon">
                      <ScrollText size={18} />
                    </span>
                    <div className="korion-nav__mobile-item-content">
                      <span className="korion-nav__mobile-item-title">
                        {t('Roadmap', '로드맵', 'ロードマップ', '路线图')}
                      </span>
                      <span className="korion-nav__mobile-item-desc">
                        {t('Development milestones', '개발 마일스톤', '開発マイルストーン', '开发里程碑')}
                      </span>
                    </div>
                  </Link>
                </div>

                <div className="korion-nav__mobile-language-block">
                  <div className="korion-nav__mobile-language-title">
                    {t('Language', '언어', '言語', '语言')}
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
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      navigate('/admin/login');
                    }}
                    className="korion-nav__mobile-action-button"
                  >
                    <ShieldCheck size={18} />
                    <span>ADMIN</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      navigate('/download');
                    }}
                    className="korion-nav__mobile-cta"
                  >
                    <Download size={18} />
                    <span>{t('Launch App', '앱 실행', 'アプリ起動', '启动应用')}</span>
                  </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
})

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
