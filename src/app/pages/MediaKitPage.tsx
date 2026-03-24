import { motion } from "framer-motion";
import {
    ArrowDownToLine,
    BadgeCheck,
    Download,
    FileArchive,
    FileText,
    Globe,
    Image as ImageIcon,
    Layers3,
    Palette,
    ShieldCheck,
    Sparkles,
    Wand2,
    } from "lucide-react";
    import { Link } from "react-router";
    import { ImageWithFallback } from "../components/figma/ImageWithFallback";
    import { useLanguage } from "../contexts/LanguageContext";
    import { useAssetUrl } from "../utils/assetLoader";
    import "./MediaKitPage.css";

    type AssetCard = {
    icon: React.ElementType;
    titleEn: string;
    titleKr: string;
    titleJa: string;
    titleZh: string;
    descEn: string;
    descKr: string;
    descJa: string;
    descZh: string;
    metaEn: string;
    metaKr: string;
    metaJa: string;
    metaZh: string;
    };

    type RuleItem = {
    titleEn: string;
    titleKr: string;
    titleJa: string;
    titleZh: string;
    descEn: string;
    descKr: string;
    descJa: string;
    descZh: string;
    };

    const assetCards: AssetCard[] = [
    {
        icon: Layers3,
        titleEn: "Brand Logo Package",
        titleKr: "브랜드 로고 패키지",
        titleJa: "ブランドロゴパッケージ",
        titleZh: "品牌 Logo 包",
        descEn:
        "Core brand asset package including symbol, wordmark, and horizontal/vertical logo compositions.",
        descKr:
        "심볼, 워드마크, 가로형/세로형 구조를 포함한 기본 브랜드 자산 패키지입니다.",
        descJa: "シンボル、ワードマーク、横型/縦型の構成を含む基本ブランド資産パッケージです。",
        descZh: "包含符号、文字商标以及横向/纵向结构的各种基础品牌资产包。",
        metaEn: "SVG / PNG / Dark / Light",
        metaKr: "SVG / PNG / 다크 / 라이트",
        metaJa: "SVG / PNG / ダーク / ライト",
        metaZh: "SVG / PNG / 深色 / 浅色",
    },
    {
        icon: Palette,
        titleEn: "Brand Color System",
        titleKr: "브랜드 컬러 시스템",
        titleJa: "ブランドカラーシステム",
        titleZh: "品牌颜色系统",
        descEn:
        "Primary and secondary color guidance reflecting KORION’s trust, clarity, and forward-looking identity.",
        descKr:
        "KORION의 신뢰감과 미래지향성을 반영한 메인/서브 컬러 가이드입니다.",
        descJa: "KORIONの信頼感と未来志向を反映したメイン/サブカラーガイドです。",
        descZh: "反映 KORION 信任感和未来导向的主/次颜色指南。",
        metaEn: "Primary / Accent / Neutral",
        metaKr: "메인 / 포인트 / 뉴트럴",
        metaJa: "メイン / アクセント / ニュートラル",
        metaZh: "主色 / 强调色 / 中性色",
    },
    {
        icon: FileText,
        titleEn: "Project Overview Materials",
        titleKr: "프로젝트 소개 자료",
        titleJa: "プロジェクト紹介資料",
        titleZh: "项目介绍材料",
        descEn:
        "Official overview materials that clearly present the service, ecosystem direction, and utility structure.",
        descKr:
        "서비스 개요, 생태계 방향성, 활용 구조를 빠르게 전달할 수 있는 공식 소개 자료입니다.",
        descJa: "サービス概要、エコシステムの方向性、活用構造を迅速に伝える公式紹介資料です。",
        descZh: "能够快速传达服务概况、生态系统方向和应用结构的官方介绍材料。",
        metaEn: "PDF / Summary / Pitch",
        metaKr: "PDF / 요약 / 피치덱",
        metaJa: "PDF / 要約 / ピッチデック",
        metaZh: "PDF / 摘要 / 演示文稿",
    },
    {
        icon: ImageIcon,
        titleEn: "Product Screenshots",
        titleKr: "프로덕트 스크린샷",
        titleJa: "プロダクトスクリーンショット",
        titleZh: "产品截图",
        descEn:
        "Official image sets for app/platform screens and promotional visual usage.",
        descKr:
        "앱/플랫폼 화면 및 홍보용 비주얼에 사용할 수 있는 공식 이미지 세트입니다.",
        descJa: "アプリ/プラットフォーム画面およびプロモーション用ビジュアルに使用できる公式イメージセットです。",
        descZh: "可用于应用程序/平台屏幕及宣传视觉效果的官方图片集。",
        metaEn: "App / UI / Preview",
        metaKr: "앱 / UI / 프리뷰",
        metaJa: "アプリ / UI / プレビュー",
        metaZh: "应用 / UI / 预览",
    },
    ];

    const usageRules: RuleItem[] = [
    {
        titleEn: "Keep proportions",
        titleKr: "비율 유지",
        titleJa: "比率の維持",
        titleZh: "保持比例",
        descEn:
        "Do not distort the logo. Preserve its original proportions, spacing, and structure.",
        descKr:
        "로고의 비율, 간격, 형태를 임의로 변형하지 않고 원본 기준을 유지합니다.",
        descJa: "ロゴの比率、間隔、形状を恣意的に変形させず、オリジナルの基準を維持します。",
        descZh: "不随意变形 Logo 的比例、间距和形状，保持原文标准。",
    },
    {
        titleEn: "Use official colors",
        titleKr: "공식 색상 사용",
        titleJa: "公式カラーの使用",
        titleZh: "使用官方颜色",
        descEn:
        "Use the official brand palette and avoid arbitrary recoloring whenever possible.",
        descKr:
        "브랜드 컬러 가이드를 기준으로 사용하며 임의 색상 변경은 최소화합니다.",
        descJa: "ブランドカラーガイドを基準に使用し、恣意的な色の変更は最小限に抑えます。",
        descZh: "以品牌颜色指南为准使用，尽量减少随意更改颜色。",
    },
    {
        titleEn: "Respect clear space",
        titleKr: "충분한 여백 확보",
        titleJa: "十分な余白の確保",
        titleZh: "确保充足的余白",
        descEn:
        "Maintain sufficient clear space around the logo to protect legibility and identity.",
        descKr:
        "로고 주변에는 가독성과 독립성을 해치지 않도록 충분한 여백을 확보합니다.",
        descJa: "ロゴの周囲には、視認性と独立性を損なわないよう十分な余白を確保します。",
        descZh: "Logo 周围应预留充足的余白，以免损害其辨识度和独立性。",
    },
    {
        titleEn: "Prefer official assets",
        titleKr: "공식 자료 우선 사용",
        titleJa: "公式資料の優先使用",
        titleZh: "优先使用官方资料",
        descEn:
        "For media, PR, and partner use, official distributed assets should be used whenever possible.",
        descKr:
        "홍보, 기사, 파트너 제안서에는 공식 배포된 자료를 우선적으로 사용하는 것을 권장합니다.",
        descJa: "広報、記事、パートナー提案書には、公式に配布された資料を優先的に使用することを推奨します。",
        descZh: "建议在宣传、文章、合作伙伴提案中优先使用官方发布的资料。",
    },
    ];

    const quickFacts = [
    {
        labelEn: "Project Positioning",
        labelKr: "프로젝트 포지션",
        labelJa: "プロジェクトのポジショニング",
        labelZh: "项目定位",
        valueEn: "Digital payments · ecosystem infrastructure · practical utility expansion",
        valueKr: "디지털 결제 · 생태계 인프라 · 실사용 확장",
        valueJa: "デジタル決済・エコシステムインフラ・実用性の拡大",
        valueZh: "数字支付 · 生态系统基础设施 · 实际应用扩展",
    },
    {
        labelEn: "Core Direction",
        labelKr: "핵심 방향",
        labelJa: "中核となる方向性",
        labelZh: "核心方向",
        valueEn: "Trusted service architecture with scalable brand experience",
        valueKr: "신뢰성 있는 서비스 구조와 확장 가능한 브랜드 경험",
        valueJa: "信頼性の高いサービス構造と拡張可能なブランド体験",
        valueZh: "可靠的服务结构和可扩展的品牌体验",
    },
    {
        labelEn: "Primary Use Cases",
        labelKr: "활용 목적",
        labelJa: "主な活用用途",
        labelZh: "应用目的",
        valueEn: "Media, partner decks, listing materials, and community distribution",
        valueKr: "미디어, 파트너 제안, 상장 자료, 커뮤니티 배포",
        valueJa: "メディア、パートナー提案、上場資料、コミュニティ配布",
        valueZh: "媒体、合作伙伴提案、上市材料、社区发布",
    },
    ];

    export function MediaKitPage() {
    const { t } = useLanguage();
    const logo = useAssetUrl(
        'korion-logo-main',
        () => import("../../assets/logo/logo.png")
    );

    return (
        <div className="media-kit-page">
        <section className="media-kit-hero">
            <div className="media-kit-hero__bg">
            <div className="media-kit-hero__orb media-kit-hero__orb--one" />
            <div className="media-kit-hero__orb media-kit-hero__orb--two" />
            <div className="media-kit-hero__grid" />
            <div className="media-kit-hero__beam media-kit-hero__beam--left" />
            <div className="media-kit-hero__beam media-kit-hero__beam--right" />
            </div>

            <div className="media-kit-page__container media-kit-hero__container">
            <motion.div
                className="media-kit-hero__content"
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="media-kit-hero__eyebrow">
                <span className="media-kit-hero__eyebrow-dot" />
                <span>{t("KORION MEDIA KIT", "KORION 미디어 키트", "KORIONメディアキット", "KORION 媒体工具包")}</span>
                </div>

                <h1 className="media-kit-hero__title">
                {t(
                    "Brand assets and project materials in one premium destination",
                    "브랜드 자산과 프로젝트 소개 자료를 한 곳에서",
                    "ブランド資産とプロジェクト紹介資料を一つの場所に",
                    "品牌资产和项目介绍资料的一站式平台"
                )}
                </h1>

                <p className="media-kit-hero__description">
                {t(
                    "The KORION Media Kit centralizes logos, visual assets, project materials, and product imagery for clear, premium external communication.",
                    "KORION Media Kit은 로고, 시각 자산, 소개 자료, 제품 이미지 등 대외 커뮤니케이션에 필요한 핵심 브랜드 요소를 체계적으로 정리한 페이지입니다.",
                    "KORIONメディアキットは、ロゴ、視覚資産、紹介資料、製品イメージなど、対外的なコミュニケーションに必要な主要なブランド要素を体系的にまとめたページです。",
                    "KORION 媒体工具包页面系统地整理了 Logo、视觉资产、介绍材料、产品图片等对外交流所需的核心品牌要素。"
                )}
                </p>

                <div className="media-kit-hero__actions">
                <a href="#assets" className="media-kit-hero__primary">
                    <Download size={18} />
                    <span>{t("View Assets", "자산 보기", "資産を見る", "查看资产")}</span>
                </a>

                <Link to="/contact" className="media-kit-hero__secondary">
                    <BadgeCheck size={18} />
                    <span>{t("Brand Contact", "브랜드 문의", "ブランドに関するお問い合わせ", "品牌咨询")}</span>
                </Link>
                </div>

                <div className="media-kit-hero__mini-note">
                <ShieldCheck size={15} />
                <span>
                    {t(
                    "Built so official files can be replaced later without redesigning the page.",
                    "실제 파일은 추후 공식 버전으로 교체 가능하도록 설계되었습니다.",
                    "実際のファイルは将来的に公式バージョンに置き換え可能なように設計されています。",
                    "设计成后期可将实际文件更换为正式版本的结构。"
                    )}
                </span>
                </div>
            </motion.div>

            <motion.div
                className="media-kit-hero__visual"
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.08 }}
            >
                <div className="media-kit-showcase">
                <div className="media-kit-showcase__halo" />
                <div className="media-kit-showcase__ring media-kit-showcase__ring--one" />
                <div className="media-kit-showcase__ring media-kit-showcase__ring--two" />

                <div className="media-kit-showcase__card media-kit-showcase__card--main">
                    <div className="media-kit-showcase__brand">
                    <div className="media-kit-showcase__brand-badge">
                        <ImageWithFallback src={logo || undefined} alt="KORION Logo" />
                    </div>
                    <div>
                        <p className="media-kit-showcase__brand-label">KORION</p>
                        <h3>
                        {t("Official Brand Assets", "공식 브랜드 자산", "公式ブランド資産", "官方品牌资产")}
                        </h3>
                    </div>
                    </div>

                    <div className="media-kit-showcase__grid">
                    <div className="media-kit-showcase__tile">
                        <Palette size={18} />
                        <span>{t("Brand Colors", "브랜드 컬러", "ブランドカラー", "品牌颜色")}</span>
                    </div>
                    <div className="media-kit-showcase__tile">
                        <Layers3 size={18} />
                        <span>{t("Logo Package", "로고 패키지", "ロゴパッケージ", "Logo 包")}</span>
                    </div>
                    <div className="media-kit-showcase__tile">
                        <FileArchive size={18} />
                        <span>{t("Press Assets", "배포 자료", "プレスアセット", "发布资料")}</span>
                    </div>
                    <div className="media-kit-showcase__tile">
                        <Globe size={18} />
                        <span>{t("Project Overview", "프로젝트 소개", "プロジェクト紹介", "项目介绍")}</span>
                    </div>
                    </div>
                </div>

                <div className="media-kit-showcase__card media-kit-showcase__card--floating media-kit-showcase__card--top">
                    <Wand2 size={16} />
                    <span>{t("Premium brand identity", "프리미엄 브랜드 아이덴티티", "プレミアムなブランドアイデンティティ", "优质品牌身份")}</span>
                </div>

                <div className="media-kit-showcase__card media-kit-showcase__card--floating media-kit-showcase__card--bottom">
                    <ArrowDownToLine size={16} />
                    <span>{t("Ready for media & partner use", "미디어·파트너 활용 준비 완료", "メディア・パートナー活用準備完了", "媒体/合作伙伴应用准备就绪")}</span>
                </div>
                </div>
            </motion.div>
            </div>
        </section>

        <section className="media-kit-facts">
            <div className="media-kit-page__container-01">
            <div className="media-kit-facts__grid">
                {quickFacts.map((item, index) => (
                <motion.div
                    key={item.labelEn}
                    className="media-kit-facts__card"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.55, delay: index * 0.08 }}
                >
                    <p className="media-kit-facts__label">
                    {t(item.labelEn, item.labelKr, item.labelJa, item.labelZh)}
                    </p>
                    <h3 className="media-kit-facts__value">
                    {t(item.valueEn, item.valueKr, item.valueJa, item.valueZh)}
                    </h3>
                </motion.div>
                ))}
            </div>
            </div>
        </section>

        <section className="media-kit-assets" id="assets">
            <div className="media-kit-page__container-01">
            <div className="media-kit-section-heading">
                <span>{t("ASSET LIBRARY", "자산 라이브러리", "アセットライブラリ", "资产库")}</span>
                <h2>
                {t(
                    "A structured download hub for KORION brand assets",
                    "브랜드 자산을 체계적으로 정리한 다운로드 허브",
                    "ブランド資産を体系的にまとめたダウンロードハブ",
                    "系统整理品牌资产的下载中心"
                )}
                </h2>
                <p>
                {t(
                    "Even before final files are ready, this structure lets you launch a polished page and replace assets later with official downloads.",
                    "실제 다운로드 링크가 아직 없어도 페이지 구조를 먼저 완성해두면, 이후 공식 파일만 교체하여 바로 운영할 수 있습니다.",
                    "実際のダウンロードリンクがまだなくても、ページ構造を先に完成させておけば、後に公式ファイルに差し替えるだけで、すぐに運用できます。",
                    "即使目前还没有实际的下载链接，先完成页面结构，之后只需更换为正式文件即可立即投入运营。"
                )}
                </p>
            </div>

            <div className="media-kit-assets__grid">
                {assetCards.map((card, index) => {
                const Icon = card.icon;

                return (
                    <motion.article
                    key={card.titleEn}
                    className="media-kit-asset-card"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.55, delay: index * 0.08 }}
                    >
                    <div className="media-kit-asset-card__top">
                        <div className="media-kit-asset-card__icon">
                        <Icon size={20} />
                        </div>
                        <span className="media-kit-asset-card__meta">
                        {t(card.metaEn, card.metaKr, card.metaJa, card.metaZh)}
                        </span>
                    </div>

                    <h3>{t(card.titleEn, card.titleKr, card.titleJa, card.titleZh)}</h3>
                    <p>{t(card.descEn, card.descKr, card.descJa, card.descZh)}</p>

                    <div className="media-kit-asset-card__actions">
                        <button type="button" className="media-kit-asset-card__button">
                        <Download size={16} />
                        <span>{t("Coming Soon", "다운로드 예정", "ダウンロード予定", "即将开放下载")}</span>
                        </button>

                        <button
                        type="button"
                        className="media-kit-asset-card__button media-kit-asset-card__button--ghost"
                        >
                        <FileText size={16} />
                        <span>{t("Details", "상세 보기", "詳細を見る", "查看详情")}</span>
                        </button>
                    </div>
                    </motion.article>
                );
                })}
            </div>
            </div>
        </section>

        <section className="media-kit-brand">
            <div className="media-kit-page__container-01 media-kit-brand__container">
            <motion.div
                className="media-kit-brand__panel"
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.65 }}
            >
                <div className="media-kit-section-heading media-kit-section-heading--left">
                <span>{t("BRAND STORY", "브랜드 스토리", "ブランドストーリー", "品牌故事")}</span>
                <h2>
                {t(
                    "The impression KORION should consistently deliver",
                    "KORION이 전달해야 하는 인상",
                    "KORIONが伝えるべき印象",
                    "KORION 应该传达的印象"
                )}
                </h2>
                </div>

                <p className="media-kit-brand__lead">
                {t(
                    "KORION should be presented not merely as a visual identity, but as a brand experience shaped by trust, structural depth, and real-world utility potential.",
                    "KORION은 단순한 시각 요소가 아니라, 신뢰성, 구조적 완성도, 그리고 실제 활용 확장성을 전달하는 브랜드 경험으로 보여져야 합니다.",
                    "KORIONは単なる視覚的な要素ではなく、信頼性、構造的な完成度、そして実際の活用可能性を伝えるブランド体験として示されるべきです。",
                    "KORION 不应仅被视为一种视觉元素，而应被视为一种传达信任、结构完整性和实际应用扩展性的品牌体验。"
                )}
                </p>

                <div className="media-kit-brand__bullets">
                <div className="media-kit-brand__bullet">
                    <BadgeCheck size={18} />
                    <div>
                    <strong>{t("Trust-first impression", "신뢰 중심의 인상", "信頼中心の印象", "以信任为中心的印象")}</strong>
                    <p>
                        {t(
                        "Delivers a stable, refined tone for investors, partners, and users alike.",
                        "투자자, 파트너, 사용자 모두에게 안정적이고 정돈된 브랜드 톤을 제공합니다.",
                        "投資家、パートナー、ユーザーすべてに安定的で整えられたブランドトーンを提供します。",
                        "为投资者、合作伙伴和用户提供稳定、整洁的品牌调性。"
                        )}
                    </p>
                    </div>
                </div>

                <div className="media-kit-brand__bullet">
                    <ShieldCheck size={18} />
                    <div>
                    <strong>{t("Structured identity", "구조적 정체성", "構造的アイデン티티", "结构性身份")}</strong>
                    <p>
                        {t(
                        "Visually reinforces the underlying service architecture and ecosystem structure.",
                        "서비스와 생태계의 구조를 시각적으로도 일관되게 전달할 수 있도록 설계합니다.",
                        "サービスとエコシステムの構造を視覚的にも一貫して伝えられるよう設計します。",
                        "设计上旨在直观、一致地传达服务和生态系统的结构。"
                        )}
                    </p>
                    </div>
                </div>

                <div className="media-kit-brand__bullet">
                    <Sparkles size={18} />
                    <div>
                    <strong>{t("Premium scalability", "프리미엄 확장성", "プレミアムな拡張性", "优质的可扩展性")}</strong>
                    <p>
                        {t(
                        "It should extend naturally across media, listings, partnerships, and promotional channels.",
                        "미디어, 리스팅, 제휴, 홍보 등 다양한 외부 채널에 자연스럽게 확장될 수 있어야 합니다.",
                        "メディア、リスティング、提携、広報など、多様な外部チャネルに自然に拡張できるべきです。",
                        "它应该能够在媒体、上市、合作、宣传等各种外部渠道中自然扩展。"
                        )}
                    </p>
                    </div>
                </div>
                </div>
            </motion.div>

            <motion.div
                className="media-kit-brand__preview"
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.65 }}
            >
                <div className="media-kit-brand__preview-card">
                <div className="media-kit-brand__preview-top">
                    <div className="media-kit-brand__logo-wrap">
                    <ImageWithFallback src={logo || undefined} alt="KORION" />
                    </div>
                    <div>
                    <p>{t("Official media presentation", "공식 미디어 표현 기준", "公式メディア表現基準", "官方媒体表现标准")}</p>
                    <h3>{t("KORION Brand Frame", "KORION 브랜드 프레임", "KORIONブランドフレーム", "KORION 品牌框架")}</h3>
                    </div>
                </div>

                <div className="media-kit-brand__color-row">
                    <span className="media-kit-brand__color media-kit-brand__color--one" />
                    <span className="media-kit-brand__color media-kit-brand__color--two" />
                    <span className="media-kit-brand__color media-kit-brand__color--three" />
                    <span className="media-kit-brand__color media-kit-brand__color--four" />
                </div>

                <div className="media-kit-brand__preview-copy">
                    {t(
                    "Brand assets should function not just as downloadable files, but as the official interface through which KORION presents itself to the world.",
                    "브랜드 자산은 단순 다운로드 목록이 아니라, KORION의 정체성을 외부 세계에 정확하게 전달하는 공식 인터페이스가 되어야 합니다.",
                    "ブランド資産は単なるダウンロードリストではなく、KORIONのアイデンティティを外部に正確に伝える公式インターフェースであるべきです。",
                    "品牌资产不应仅仅是一个下载列表，而应成为对外准确传达 KORION 身份的官方界面。"
                    )}
                </div>
                </div>
            </motion.div>
            </div>
        </section>

        <section className="media-kit-rules">
            <div className="media-kit-page__container-01">
            <div className="media-kit-section-heading">
                <span>{t("USAGE GUIDELINES", "사용 가이드라인", "使用ガイドライン", "使用指南")}</span>
                <h2>
                {t(
                    "Guidelines for clean and consistent brand usage",
                    "브랜드 사용 가이드",
                    "ブランド使用ガイド",
                    "品牌使用指南"
                )}
                </h2>
            </div>

            <div className="media-kit-rules__grid">
                {usageRules.map((rule, index) => (
                <motion.div
                    key={rule.titleEn}
                    className="media-kit-rule-card"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.55, delay: index * 0.08 }}
                >
                    <div className="media-kit-rule-card__index">
                    {(index + 1).toString().padStart(2, "0")}
                    </div>
                    <h3>{t(rule.titleEn, rule.titleKr, rule.titleJa, rule.titleZh)}</h3>
                    <p>{t(rule.descEn, rule.descKr, rule.descJa, rule.descZh)}</p>
                </motion.div>
                ))}
            </div>
            </div>
        </section>

        <section className="media-kit-cta">
            <div className="media-kit-page__container-01">
            <motion.div
                className="media-kit-cta__panel"
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.65 }}
            >
                <div className="media-kit-cta__content">
                <span>{t("PRESS · PARTNERS · COMMUNITY", "보도자료 · 파트너 · 커뮤니티", "プレス・パートナー・コミュニティ", "新闻 · 合作伙伴 · 社区")}</span>
                <h2>
                {t(
                    "Need official materials for press or partnership use?",
                    "공식 자료가 필요하신가요?",
                    "公式資料が必要ですか？",
                    "您需要官方资料吗？"
                )}
                </h2>
                <p>
                {t(
                    "Official source files, overview decks, image sets, and press-ready versions can be connected here as downloadable resources during launch.",
                    "실제 로고 원본, 소개서, 이미지 세트, 보도자료 버전은 운영 단계에서 공식 다운로드 링크로 연결하면 됩니다.",
                    "実際のロゴのオリジナル、紹介資料、イメージセット、プレスリリースのバージョンは、運用段階において公式ダウンロードリンクに接続することができます。",
                    "实际的 Logo 源码、介绍书、图片集、新闻稿版本，可以在运营阶段连接到官方下载链接。"
                )}
                </p>
                </div>

                <div className="media-kit-cta__actions">
                <Link to="/contact" className="media-kit-cta__button">
                    <BadgeCheck size={18} />
                    <span>{t("Contact Us", "문의하기", "お問い合わせ", "联系我们")}</span>
                </Link>

                <Link to="/whitepaper" className="media-kit-cta__button media-kit-cta__button--ghost">
                    <FileText size={18} />
                    <span>{t("View Whitepaper", "백서 보기", "ホワイトペーパーを見る", "查看白皮书")}</span>
                </Link>
                </div>
            </motion.div>
            </div>
        </section>
        </div>
    );
    }
