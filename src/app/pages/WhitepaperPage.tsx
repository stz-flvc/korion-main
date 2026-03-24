import React, { useCallback, useMemo, useState } from 'react';
import { Link } from 'react-router';
import {
    ChevronLeft,
    ChevronRight,
    Download,
    ExternalLink,
    FileText,
    Home,
    Languages,
    Menu,
    X,
    } from 'lucide-react';
    import FooterNew from '../components/FooterNew';
    import { useLanguage } from '../contexts/LanguageContext';
    import { loadAssetUrl } from '../utils/assetLoader';
    
    import './WhitepaperPage.css';
    const sections = [
    { titleEn: 'Front Matter', titleKr: '서문', titleJa: 'フロントマター', titleZh: '前言', page: 1 },
    { titleEn: 'Executive Summary', titleKr: '요약', titleJa: 'エグゼクティブサマリー', titleZh: '执行摘要', page: 5 },
    { titleEn: 'Industry Background', titleKr: '산업 배경', titleJa: '業界背景', titleZh: '行业背景', page: 5 },
    { titleEn: 'Problem Statement', titleKr: '문제 정의', titleJa: '問題定義', titleZh: '问题陈述', page: 6 },
    { titleEn: 'Vision, Mission, and Strategic Principles', titleKr: '비전, 미션 및 전략 원칙', titleJa: 'ビジョン、ミッション、戦略原則', titleZh: '愿景、使命和战略原则', page: 7 },
    { titleEn: 'KORION Ecosystem Overview', titleKr: 'KORION 생태계 개요', titleJa: 'KORIONエコシステムの概要', titleZh: 'KORION生态系统概述', page: 8 },
    { titleEn: 'Ecosystem Participants', titleKr: '생태계 참여자', titleJa: 'エコシステム参加者', titleZh: '生态系统参与者', page: 9 },
    { titleEn: 'Token Overview', titleKr: '토큰 개요', titleJa: 'トークン概要', titleZh: '代币概述', page: 9 },
    { titleEn: 'Token Utility Framework', titleKr: '토큰 유틸리티 구조', titleJa: 'トークンユーティリティフレームワーク', titleZh: '代币效用框架', page: 10 },
    { titleEn: 'Token Supply Structure', titleKr: '토큰 공급 구조', titleJa: 'トークン供給構造', titleZh: '代币供应结构', page: 11 },
    { titleEn: 'Treasury Governance', titleKr: '트레저리 거버넌스', titleJa: 'トレジャリーガバナンス', titleZh: '国库治理', page: 12 },
    { titleEn: 'Treasury Wallet Policy', titleKr: '트레저리 지갑 정책', titleJa: 'トレジャリーウォレットポリシー', titleZh: '国库钱包政策', page: 13 },
    { titleEn: 'Wallet Architecture', titleKr: '지갑 아키텍처', titleJa: 'ウォレットアーキテクチャ', titleZh: '钱包架构', page: 15 },
    { titleEn: 'User Account and Identity Layer', titleKr: '사용자 계정 및 인증 레이어', titleJa: 'ユーザーアカウントとアイデンティティレイヤー', titleZh: '用户账户和身份层', page: 16 },
    { titleEn: 'Deposit and Withdrawal Framework', titleKr: '입출금 구조', titleJa: '入出金フレームワーク', titleZh: '存取款框架', page: 17 },
    { titleEn: 'Mobile Mining Model', titleKr: '모바일 채굴 모델', titleJa: 'モバイルマイニングモデル', titleZh: '移动挖矿模型', page: 19 },
    { titleEn: 'Mining Reward Calculation', titleKr: '채굴 보상 산정', titleJa: 'マイニング報酬計算', titleZh: '挖矿奖励计算', page: 19 },
    {
        titleEn: 'Mining Levels, Efficiency, and Participation Logic',
        titleKr: '채굴 레벨, 효율 및 참여 로직',
        titleJa: 'マイニングレベル、効率、参加ロジック',
        titleZh: '挖矿等级、效率和参与逻辑',
        page: 20,
    },
    { titleEn: 'Mining Emission Schedule', titleKr: '채굴 발행 일정', titleJa: 'マイニング排出スケジュール', titleZh: '挖矿排放时间表', page: 21 },
    { titleEn: 'Token Burn Mechanisms', titleKr: '토큰 소각 메커니즘', titleJa: 'トークンバーンメカニズム', titleZh: '代币销毁机制', page: 21 },
    { titleEn: 'KORION Pay', titleKr: 'KORION Pay', titleJa: 'KORION Pay', titleZh: 'KORION Pay', page: 22 },
    { titleEn: 'Offline Payment Technology', titleKr: '오프라인 결제 기술', titleJa: 'オフライン決済技術', titleZh: '线下支付技术', page: 23 },
    { titleEn: 'Foxyya Social Platform', titleKr: 'Foxyya 소셜 플랫폼', titleJa: 'Foxyyaソーシャルプラットフォーム', titleZh: 'Foxyya社交平台', page: 24 },
    { titleEn: 'Marketplace Integration', titleKr: '마켓플레이스 통합', titleJa: 'マーケットプレイス統合', titleZh: '市场整合', page: 26 },
    { titleEn: 'Exchange Infrastructure', titleKr: '거래소 인프라', titleJa: '取引所インフラ', titleZh: '交易所基础设施', page: 27 },
    { titleEn: 'Liquidity Strategy', titleKr: '유동성 전략', titleJa: '流動性戦略', titleZh: '流动性策略', page: 28 },
    { titleEn: 'Security Framework', titleKr: '보안 프레임워크', titleJa: 'セキュリティフレームワーク', titleZh: '安全框架', page: 28 },
    { titleEn: 'Smart Contract Architecture', titleKr: '스마트 컨트랙트 아키텍처', titleJa: 'スマートコントラクトアーキテクチャ', titleZh: '智能合约架构', page: 30 },
    { titleEn: 'Technical Infrastructure', titleKr: '기술 인프라', titleJa: '技術インフラ', titleZh: '技术基础设施', page: 31 },
    { titleEn: 'Data, Logging, and Observability', titleKr: '데이터, 로깅 및 관측성', titleJa: 'データ、ロギング、可観測性', titleZh: '数据、日志和可观测性', page: 33 },
    { titleEn: 'Custody and Asset Protection', titleKr: '커스터디 및 자산 보호', titleJa: 'カストディと資産保護', titleZh: '托管与资产保护', page: 33 },
    { titleEn: 'Compliance and Risk Controls', titleKr: '컴플라이언스 및 리스크 통제', titleJa: 'コンプライアンスとリスク管理', titleZh: '合规与风险控制', page: 34 },
    { titleEn: 'Economic Sustainability', titleKr: '경제적 지속 가능성', titleJa: '経済的持続可能性', titleZh: '经济可持续性', page: 35 },
    { titleEn: 'Governance Model', titleKr: '거버넌스 모델', titleJa: 'ガバナンスモデル', titleZh: '治理模型', page: 36 },
    { titleEn: 'Revenue Model', titleKr: '수익 모델', titleJa: '収益モデル', titleZh: '收入模型', page: 37 },
    { titleEn: 'Market Expansion Strategy', titleKr: '시장 확장 전략', titleJa: '市場拡大戦略', titleZh: '市场扩展战略', page: 38 },
    { titleEn: 'Partnership Strategy', titleKr: '파트너십 전략', titleJa: 'パートナーシップ戦略', titleZh: '合作战略', page: 39 },
    { titleEn: 'Roadmap', titleKr: '로드맵', titleJa: 'ロードマップ', titleZh: '路线图', page: 40 },
    { titleEn: 'Future Development', titleKr: '향후 개발 방향', titleJa: '今後の開発の方向性', titleZh: '未来发展方向', page: 41 },
    { titleEn: 'Team and Organization', titleKr: '팀 및 조직', titleJa: 'チームと組織', titleZh: '团队与组织', page: 41 },
    { titleEn: 'Legal and Regulatory Compliance', titleKr: '법률 및 규제 준수', titleJa: '法的および規制上のコンプライアンス', titleZh: '法律与合规准则', page: 42 },
    { titleEn: 'Risk Disclosure', titleKr: '위험 고지', titleJa: 'リスク開示', titleZh: '风险披露', page: 43 },
    { titleEn: 'Transparency Policy', titleKr: '투명성 정책', titleJa: '透明性ポリシー', titleZh: '透明度政策', page: 44 },
    { titleEn: 'Audit and Security Review Plan', titleKr: '감사 및 보안 검토 계획', titleJa: '監査およびセキュリティレビュー計画', titleZh: '审计与安全审查计划', page: 45 },
    { titleEn: 'Use Case Scenarios', titleKr: '활용 시나리오', titleJa: 'ユースケースシナリオ', titleZh: '用例场景', page: 45 },
    { titleEn: 'KPI and Ecosystem Metrics', titleKr: 'KPI 및 생태계 지표', titleJa: 'KPIとエコシステムメトリクス', titleZh: 'KPI与生态系统指标', page: 46 },
    { titleEn: 'Community and Ecosystem Growth', titleKr: '커뮤니티 및 생태계 성장', titleJa: 'コミュニティとエコシステムの成長', titleZh: '社区与生态系统增长', page: 47 },
    { titleEn: 'Branding and Positioning', titleKr: '브랜딩 및 포지셔닝', titleJa: 'ブランディングとポジショニング', titleZh: '品牌塑造与定位', page: 47 },
    { titleEn: 'Conclusion', titleKr: '결론', titleJa: '結論', titleZh: '结论', page: 48 },
    { titleEn: 'FAQ', titleKr: '자주 묻는 질문', titleJa: 'よくある質問', titleZh: '常见问题', page: 48 },
    { titleEn: 'Glossary', titleKr: '용어집', titleJa: '用語集', titleZh: '词汇表', page: 49 },
    { titleEn: 'Appendix A: Token Allocation Summary', titleKr: '부록 A: 토큰 배분 요약', titleJa: '付録 A: トークン割り当ての概要', titleZh: '附录 A: 代币分配摘要', page: 50 },
    { titleEn: 'Appendix B: Emission Schedule Table', titleKr: '부록 B: 발행 일정 표', titleJa: '付録 B: 排出スケジュール表', titleZh: '附录 B: 排放进度表', page: 51 },
    { titleEn: 'Appendix C: Treasury Role Summary', titleKr: '부록 C: 트레저리 역할 요약', titleJa: '付録 C: トレジャリーの役割の概要', titleZh: '附录 C: 国库角色摘要', page: 51 },
    { titleEn: 'Appendix D: Architecture Summary', titleKr: '부록 D: 아키텍처 요약', titleJa: '付録 D: アーキテクチャの概要', titleZh: '附录 D: 架构概述', page: 52 },
    { titleEn: 'Appendix E: Payment Flow Summary', titleKr: '부록 E: 결제 흐름 요약', titleJa: '付録 E: 決済フローの概要', titleZh: '附录 E: 支付流程摘要', page: 53 },
    { titleEn: 'Appendix F: Mining Flow Summary', titleKr: '부록 F: 채굴 흐름 요약', titleJa: '付録 F: マイニングフローの概要', titleZh: '附录 F: 挖矿流程摘要', page: 54 },
    { titleEn: 'Appendix G: Security Principles Summary', titleKr: '부록 G: 보안 원칙 요약', titleJa: '付録 G: セキュリティ原則の概要', titleZh: '附录 G: 安全原则摘要', page: 55 },
    {
        titleEn: 'Appendix H: Revenue and Burn Logic Summary',
        titleKr: '부록 H: 수익 및 소각 로직 요약',
        titleJa: '付録 H: 収益およびバーンロジックの概要',
        titleZh: '附录 H: 收益及销毁逻辑摘要',
        page: 56,
    },
    { titleEn: 'Appendix I: Governance Decision Scope', titleKr: '부록 I: 거버넌스 의사결정 범위', titleJa: '付録 I: ガバナンス意思決定範囲', titleZh: '附录 I: 治理决策范围', page: 56 },
    { titleEn: 'Disclaimer', titleKr: '면책 조항', titleJa: '免責事項', titleZh: '免责声明', page: 57 },
    ];

    const TOTAL_PAGES = 57;

    export default function WhitepaperPage() {
    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [pdfUrl, setPdfUrl] = useState<string | null>(null);
    const [isPdfLoading, setIsPdfLoading] = useState(false);

    const { t, language, toggleLanguage } = useLanguage();

    const ensurePdfUrl = useCallback(async () => {
        if (pdfUrl) {
            return pdfUrl;
        }

        setIsPdfLoading(true);
        try {
            const loadedUrl = await loadAssetUrl(
                'whitepaper-v1-1-pdf',
                () => import('../../whitepaper/Whitepaper Version-1.1.pdf?url')
            );
            setPdfUrl(loadedUrl);
            return loadedUrl;
        } finally {
            setIsPdfLoading(false);
        }
    }, [pdfUrl]);

    const pdfSrc = useMemo(() => {
        if (!pdfUrl) {
            return null;
        }

        return `${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0&page=${currentPage}`;
    }, [currentPage, pdfUrl]);

    const goToPage = (page: number) => {
        const safePage = Math.max(1, Math.min(TOTAL_PAGES, page));
        setCurrentPage(safePage);
        setMobileSidebarOpen(false);
    };

    const onPrev = async () => {
        await ensurePdfUrl();
        goToPage(currentPage - 1);
    };
    const onNext = async () => {
        await ensurePdfUrl();
        goToPage(currentPage + 1);
    };

    const handleOpenPdf = useCallback(async () => {
        const loadedUrl = await ensurePdfUrl();
        window.open(loadedUrl, '_blank', 'noopener,noreferrer');
    }, [ensurePdfUrl]);

    const handleDownloadPdf = useCallback(async () => {
        const loadedUrl = await ensurePdfUrl();
        const anchor = document.createElement('a');
        anchor.href = loadedUrl;
        anchor.download = 'KORION-Whitepaper-Version-1.1.pdf';
        document.body.appendChild(anchor);
        anchor.click();
        anchor.remove();
    }, [ensurePdfUrl]);

    const handleLoadViewer = useCallback(async () => {
        await ensurePdfUrl();
    }, [ensurePdfUrl]);

    const progress = (currentPage / TOTAL_PAGES) * 100;

    return (
        <div className="whitepaper-page">
        <div className="whitepaper-page__hero">
            <div className="whitepaper-page__container">
            <div className="whitepaper-page__hero-row">
                <div className="whitepaper-page__hero-left">
                <div className="whitepaper-page__brand-icon">
                <Link to="/">
                    <FileText size={20} />
                </Link>
                </div>

                <div className="whitepaper-page__brand-copy">
                    <p className="whitepaper-page__eyebrow">
                    {t('KORION DOCUMENT', 'KORION 문서', 'KORIONドキュメント', 'KORION文档')}
                    </p>
                    <h1 className="whitepaper-page__title">
                    {t('KORION Whitepaper', 'KORION 백서', 'KORIONホワイトペーパー', 'KORION白皮书')}
                    </h1>
                    <p className="whitepaper-page__subtitle">
                    {t(
                        'Mobile Mining, Digital Payments, and Service-Integrated Token Economy',
                        '모바일 채굴, 디지털 결제, 서비스 통합형 토큰 이코노미',
                        'モバイルマイニング、デジタル決済、サービス統合型トークンエコノミー',
                        '移动挖矿、数字支付与服务整合的代币经济'
                    )}
                    </p>
                </div>
                </div>

                <div className="whitepaper-page__hero-actions">
                <Link to="/" className="whitepaper-page__ghost-button">
                    <Home size={16} />
                    {t('Home', '홈', 'ホーム', '主页')}
                </Link>

                <button
                    type="button"
                    onClick={handleOpenPdf}
                    className="whitepaper-page__ghost-button"
                    disabled={isPdfLoading}
                >
                    <ExternalLink size={16} />
                    {isPdfLoading ? t('Loading PDF...', 'PDF 불러오는 중...', 'PDFを読み込み中...', '正在加载PDF...') : t('Open PDF', 'PDF 열기', 'PDFを開く', '打开PDF')}
                </button>

                <button
                    type="button"
                    onClick={toggleLanguage}
                    className="whitepaper-page__ghost-button"
                >
                    <Languages size={16} />
                    {language}
                </button>



                <button
                    type="button"
                    onClick={handleDownloadPdf}
                    className="korion-nav__cta-button"
                    disabled={isPdfLoading}
                >
                    <Download size={16} />
                    {isPdfLoading ? t('Preparing...', '준비 중...', '準備中...', '准备中...') : t('Download', '다운로드', 'ダウンロード', '下载')}
                </button>
                </div>

                <button
                type="button"
                onClick={() => setMobileSidebarOpen(true)}
                className="whitepaper-page__mobile-menu"
                aria-label={t('Open whitepaper navigation', '백서 메뉴 열기', 'ホワイトペーパーメニューを開く', '打开白皮书菜单')}
                >
                <Menu size={20} />
                </button>
            </div>
            </div>
        </div>

        <div className="whitepaper-page__container whitepaper-page__layout">
            <aside className="whitepaper-page__sidebar">
            <div className="whitepaper-page__sidebar-sticky">
                <div className="whitepaper-page__sidebar-head">
                <div className="whitepaper-page__sidebar-head-row">
                    <h2 className="whitepaper-page__sidebar-title">
                    {t('Contents', '목차', '目次', '目录')}
                    </h2>
                    <span className="whitepaper-page__badge">
                    {TOTAL_PAGES} {t('Pages', '페이지', 'ページ', '页')}
                    </span>
                </div>

                <div className="whitepaper-page__progress">
                    <div
                    className="whitepaper-page__progress-bar"
                    style={{ width: `${progress}%` }}
                    />
                </div>

                <p className="whitepaper-page__muted">
                    {t('Viewing page', '현재 페이지', '現在のページ', '当前页面')} {currentPage} / {TOTAL_PAGES}
                </p>
                </div>

                <div className="whitepaper-page__sidebar-body">
                <div className="whitepaper-page__toc">
                    {sections.map((item) => {
                    const active = currentPage === item.page;

                    return (
                        <button
                        key={`${item.titleEn}-${item.page}`}
                        type="button"
                        onClick={() => goToPage(item.page)}
                        className={`whitepaper-page__toc-item ${active ? 'is-active' : ''}`}
                        >
                        <span className="whitepaper-page__toc-page">p.{item.page}</span>
                        <span className="whitepaper-page__toc-text">
                            {t(item.titleEn, item.titleKr, item.titleJa, item.titleZh)}
                        </span>
                        </button>
                    );
                    })}
                </div>
                </div>
            </div>
            </aside>

            {mobileSidebarOpen && (
            <div className="whitepaper-page__mobile-overlay">
                <button
                type="button"
                onClick={() => setMobileSidebarOpen(false)}
                className="whitepaper-page__mobile-backdrop"
                aria-label={t('Close whitepaper navigation overlay', '백서 메뉴 닫기')}
                />

                <div className="whitepaper-page__mobile-panel">
                <div className="whitepaper-page__mobile-head">
                    <div>
                    <p className="whitepaper-page__eyebrow whitepaper-page__eyebrow--mobile">
                        {t('Contents', '목차')}
                    </p>
                    <h2 className="whitepaper-page__mobile-title">
                        {t('Whitepaper Navigation', '백서 내비게이션', 'ホワイトペーパーナビゲーション', '白皮书导航')}
                    </h2>
                    </div>

                    <button
                    type="button"
                    onClick={() => setMobileSidebarOpen(false)}
                    className="whitepaper-page__mobile-close"
                    aria-label={t('Close whitepaper navigation', '백서 메뉴 닫기')}
                    >
                    <X size={20} />
                    </button>
                </div>

                <div className="whitepaper-page__mobile-progress-wrap">
                    <div className="whitepaper-page__progress">
                    <div
                        className="whitepaper-page__progress-bar"
                        style={{ width: `${progress}%` }}
                    />
                    </div>

                    <p className="whitepaper-page__muted">
                    {t('Viewing page', '현재 페이지')} {currentPage} / {TOTAL_PAGES}
                    </p>
                </div>

                <div className="whitepaper-page__mobile-body">
                    <div className="whitepaper-page__toc">
                    {sections.map((item) => {
                        const active = currentPage === item.page;

                        return (
                        <button
                            key={`${item.titleEn}-${item.page}-mobile`}
                            type="button"
                            onClick={() => goToPage(item.page)}
                            className={`whitepaper-page__toc-item ${active ? 'is-active' : ''}`}
                        >
                            <span className="whitepaper-page__toc-page">p.{item.page}</span>
                            <span className="whitepaper-page__toc-text">
                            {t(item.titleEn, item.titleKr, item.titleJa, item.titleZh)}
                            </span>
                        </button>
                        );
                    })}
                    </div>
                </div>
                </div>
            </div>
            )}

            <main className="whitepaper-page__main">
            <div className="whitepaper-page__toolbar">
                <div className="whitepaper-page__toolbar-row">
                <div className="whitepaper-page__pager">
                    <button
                    type="button"
                    onClick={onPrev}
                    disabled={currentPage <= 1}
                    className="whitepaper-page__icon-button"
                    aria-label={t('Previous page', '이전 페이지')}
                    >
                    <ChevronLeft size={20} />
                    </button>

                    <div className="whitepaper-page__page-indicator">
                    {t('Page', '페이지', 'ページ', '页')} <span>{currentPage}</span> / {TOTAL_PAGES}
                    </div>

                    <button
                    type="button"
                    onClick={onNext}
                    disabled={currentPage >= TOTAL_PAGES}
                    className="whitepaper-page__icon-button"
                    aria-label={t('Next page', '다음 페이지')}
                    >
                    <ChevronRight size={20} />
                    </button>
                </div>

                <div className="whitepaper-page__mobile-actions">
                    <Link
                    to="/"
                    className="whitepaper-page__ghost-button whitepaper-page__ghost-button--small"
                    >
                    <Home size={16} />
                    {t('Home', '홈')}
                    </Link>

                    <button
                    type="button"
                    onClick={handleOpenPdf}
                    className="whitepaper-page__ghost-button whitepaper-page__ghost-button--small"
                    disabled={isPdfLoading}
                    >
                    <ExternalLink size={16} />
                    {isPdfLoading ? t('Loading...', '로딩 중...', '読み込み中...', '加载中...') : t('Open', '열기', '開く', '打开')}
                    </button>

                    <button
                    type="button"
                    onClick={handleDownloadPdf}
                    className="whitepaper-page__ghost-button whitepaper-page__ghost-button--small"
                    disabled={isPdfLoading}
                    >
                    <Download size={16} />
                    {isPdfLoading ? t('Preparing...', '준비 중...', '準備中...', '准备中...') : t('Save', '저장', '保存', '保存')}
                    </button>

                    <button
                    type="button"
                    onClick={toggleLanguage}
                    className="whitepaper-page__ghost-button whitepaper-page__ghost-button--small"
                    >
                    <Languages size={16} />
                    {language}
                    </button>
                </div>
                </div>
            </div>

            <section className="whitepaper-page__viewer-section">
                <div className="whitepaper-page__viewer-shell">
                <div className="whitepaper-page__viewer-head">
                    <div>
                    <p className="whitepaper-page__viewer-eyebrow">
                        {t('PDF Viewer', 'PDF 뷰어', 'PDFビューア', 'PDF阅读器')}
                    </p>
                    <h3 className="whitepaper-page__viewer-title">
                        {t('KORION Whitepaper Viewer', 'KORION 백서 뷰어', 'KORIONホワイトペーパービューア', 'KORION白皮书阅读器')}
                    </h3>
                    </div>

                    <div className="whitepaper-page__viewer-note">
                    {t('Internal PDF frame', '내부 PDF 프레임', '内部PDFフレーム', '内部PDF框架')}
                    <br />
                    {t('Page-linked navigation', '페이지 연동 내비게이션', 'ページ連動ナビゲーション', '页面关联导航')}
                    </div>
                </div>

                <div className="whitepaper-page__viewer-frame">
                    {pdfSrc ? (
                    <iframe
                        key={pdfSrc}
                        src={pdfSrc}
                        title={t('KORION Whitepaper PDF Viewer', 'KORION 백서 PDF 뷰어')}
                        className="whitepaper-page__iframe"
                    />
                    ) : (
                    <div className="whitepaper-page__viewer-placeholder">
                        <div className="whitepaper-page__viewer-placeholder-card">
                        <FileText size={28} />
                        <h4>{t('Load the whitepaper when you need it', '필요할 때만 백서를 불러옵니다', '必要なときにホワイトペーパーを読み込む', '仅在需要时加载白皮书')}</h4>
                        <p>
                            {t(
                            'The PDF stays out of the initial render path until you open, download, or load the viewer.',
                            'PDF는 열기, 다운로드, 또는 뷰어 불러오기를 누르기 전까지 초기 렌더 경로에서 제외됩니다.',
                            'PDFは、開く、ダウンロード、またはビューアを読み込むまで、初期レンダリングパスに含まれません。',
                            '在您打开、下载或加载阅读器之前，PDF不会包含在初始渲染路径中。'
                            )}
                        </p>
                        <button
                            type="button"
                            onClick={handleLoadViewer}
                            className="korion-nav__cta-button"
                            disabled={isPdfLoading}
                        >
                            <FileText size={16} />
                            {isPdfLoading ? t('Loading PDF...', 'PDF 불러오는 중...', 'PDFを読み込み中...', '正在加载PDF...') : t('Load Viewer', '뷰어 불러오기', 'ビューアを読み込む', '加载阅读器')}
                        </button>
                        </div>
                    </div>
                    )}
                </div>
                </div>
            </section>
            </main>
        </div>

        <FooterNew />
        </div>
    );
    }
