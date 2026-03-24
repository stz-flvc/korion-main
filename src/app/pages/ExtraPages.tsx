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

function InfoPage({ eyebrow, title, subtitle }: InfoPageProps) {
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

export function NewsPage() {
    const { t } = useLanguage();
    return <InfoPage 
        eyebrow="NEWS" 
        title={t('KORION News', '코리온 뉴스', 'KORIONニュース', 'KORION新闻')} 
        subtitle={t('Stay updated with official KORION news, platform updates, and major announcements.', 'KORION의 공지, 업데이트, 주요 진행 사항을 안내하는 페이지입니다.', 'KORIONのお知らせ、アップデート、主な進行状況を案内するページです。', '随时了解 KORION 的官方新闻、平台更新和重大公告。')} 
    />;
}

export function SmartContractPage() {
    const { t } = useLanguage();
    return <InfoPage 
        eyebrow="SMART CONTRACT" 
        title={t('Smart Contract', '스마트 컨트랙트', 'スマートコントラクト', '智能合约')} 
        subtitle={t('KORION live contract interface and execution layers.', 'KORION 스마트 컨트랙트 구조와 핵심 기능을 안내합니다.', 'KORIONスマートコントラクトの構造と主要機能を案内します。', '介绍 KORION 智能合约的结构和核心功能。')} 
    />;
}

export function MediaKitPage() {
    const { t } = useLanguage();
    return <InfoPage 
        eyebrow="MEDIA KIT" 
        title={t('Media Kit', '미디어 키트', 'メディアキット', '媒体工具包')} 
        subtitle={t('Official KORION brand assets, logos, and project materials.', '브랜드 자산, 로고, 프로젝트 소개 자료를 위한 페이지입니다.', 'ブランドアセット、ロゴ、プロジェクト紹介資料のためのページです。', '品牌资产、徽标和项目介绍材料页面。')} 
    />;
}

export function FAQPage() {
    const { t } = useLanguage();
    return <InfoPage 
        eyebrow="FAQ" 
        title={t('Frequently Asked Questions', '자주 묻는 질문', 'よくある質問', '常见问题')} 
        subtitle={t('Find answers to common questions about the KORION ecosystem.', '자주 묻는 질문과 기본적인 안내 사항을 확인할 수 있습니다.', 'よくある質問と基本的な案内事項を確認できます。', '查找有关 KORION 生态系统的常见问题解答。')} 
    />;
}

export function ContactPage() {
    const { t } = useLanguage();
    return <InfoPage 
        eyebrow="CONTACT" 
        title={t('Contact KORION', '코리온 문의하기', 'KORIONお問い合わせ', '联系 KORION')} 
        subtitle={t('Get in touch with the KORION team for partnerships and inquiries.', '운영팀 또는 지원팀에 문의할 수 있는 안내 페이지입니다.', '運営チームまたはサポートチームにお問い合わせいただける案内ページです。', '联系 KORION 团队进行合作伙伴关系和咨询。')} 
    />;
}

export function ExplorerPage() {
    const { t } = useLanguage();
    return <InfoPage 
        eyebrow="EXPLORER" 
        title={t('Explorer', '익스플로러', 'エクスプローラー', '浏览器')} 
        subtitle={t('KORION on-chain explorer and transaction tracking reference.', '토큰 및 거래 조회를 위한 탐색 정보 페이지입니다.', 'トークンおよび取引照会のためのエクスプローラー情報ページです。', '用于代币和交易查询的资源管理器信息页面。')} 
    />;
}

export function ListingInfoPage() {
    const { t } = useLanguage();
    return <InfoPage 
        eyebrow="MARKET" 
        title={t('Listing Information', '상장 정보', '上場情報', '上市信息')} 
        subtitle={t('Official listing information and exchange status for KORION.', 'DEX 및 향후 마켓 관련 참고 정보를 제공하는 페이지입니다.', 'DEXおよび将来の市場に関する参考情報を提供するページです。', '提供 DEX 和未来市场参考信息的页面。')} 
    />;
}

export function SecurityPage() {
    const { t } = useLanguage();
    return <InfoPage 
        eyebrow="SECURITY" 
        title={t('Security', '보안', 'セキュリティ', '安全')} 
        subtitle={t('Account protection, wallet safety, and security guides.', '계정 보호, 지갑 주의사항, 보안 가이드를 제공하는 페이지입니다.', 'アカウント保護、ウォレットの注意事項、セキュリティガイドを提供するページです。', '提供账户保护、钱包注意事项和安全指南的页面。')} 
    />;
}