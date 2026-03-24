import { motion } from 'motion/react';
import {
    ShieldCheck,
    Smartphone,
    ArrowUpDown,
    Pickaxe,
    Wallet,
    ChevronRight,
    CheckCircle2,
    LockKeyhole,
    Layers3,
    Activity,
    Sparkles,
    Zap,
    BadgeCheck,
    MousePointerClick,
    Fingerprint,
    BellRing,
    ArrowUp,
    ArrowDown,
    ArrowLeft,
    ArrowRight,
    TimerReset,
} from 'lucide-react';
import { Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useLanguage } from '../contexts/LanguageContext';
import { useAssetUrl } from '../utils/assetLoader';
import './EcosystemPage.css';

const featureCards = [
    {
        icon: Wallet,
        titleEn: 'Real Wallet Experience',
        titleKo: '실제 지갑 경험',
        titleJa: '本物のウォレット体験',
        titleZh: '真实的钱包体验',
        descEn: 'KORION Wallet is built as a real mobile product for holding assets, checking balances, and managing ecosystem activity.',
        descKo: 'KORION Wallet은 자산 보관, 잔액 확인, 생태계 활동 관리를 위한 실제 모바일 지갑 제품으로 설계되었습니다.',
        descJa: 'KORIONウォレットは、資産の保持、残高の確認、エコシステム活動の管理のための実際のモバイル製品として構築されています。',
        descZh: 'KORION钱包是作为一个实际的移动产品构建的，用于持有资产、查看余额和管理生态系统活动。',
    },
    {
        icon: Pickaxe,
        titleEn: 'One-Tap Mining',
        titleKo: '원탭 채굴',
        titleJa: 'ワンタップマイニング',
        titleZh: '一键挖矿',
        descEn: 'Participation-based mining is integrated into a familiar mobile flow for intuitive daily engagement.',
        descKo: '참여 기반 채굴 기능이 익숙한 모바일 흐름 안에 통합되어 직관적인 일상 참여를 지원합니다.',
        descJa: '参加型マイニングは、直感的な日々のエンゲージメントのために使い慣れたモバイルフローに統合されています。',
        descZh: '基于参与的挖矿被集成到熟悉的移动流程中，用于直观的每日参与。',
    },
    {
        icon: ArrowUpDown,
        titleEn: 'Fast Transfers',
        titleKo: '빠른 전송',
        titleJa: '高速送金',
        titleZh: '快速转账',
        descEn: 'Transfer and transaction flows are designed to feel simple, fast, and trustworthy inside the wallet.',
        descKo: '지갑 안의 전송 및 거래 흐름은 단순하고 빠르며 신뢰감 있게 느껴지도록 설계되었습니다.',
        descJa: '送金と取引のフローは、ウォレット内でシンプルで速く、信頼できるように設計されています。',
        descZh: '转账和交易流程被设计为在钱包内感觉简单、快速且值得信赖。',
    },
    {
        icon: ShieldCheck,
        titleEn: 'Security-Centered Design',
        titleKo: '보안 중심 설계',
        titleJa: 'セキュリティ中心の設計',
        titleZh: '以安全为中心的设计',
        descEn: 'KORION Wallet emphasizes trust, operational safeguards, and disciplined digital asset handling.',
        descKo: 'KORION Wallet은 신뢰, 운영 보호장치, 체계적인 디지털 자산 처리 구조를 중요하게 설계합니다.',
        descJa: 'KORIONウォレットは、信頼、運用上の保護手段、および規律あるデジタル資産の取り扱いを強調しています。',
        descZh: 'KORION钱包强调信任、运营保障和严谨的数字资产处理。',
    },
];

const trustPoints = [
    {
        icon: LockKeyhole,
        titleEn: 'Protected User Experience',
        titleKo: '보호된 사용자 경험',
        titleJa: '保護されたユーザー体験',
        titleZh: '受保护的用户体验',
        descEn: 'Made to reduce friction while keeping the wallet experience secure, controlled, and confidence-driven.',
        descKo: '불필요한 복잡성은 줄이면서도 안전하고 통제된, 신뢰 중심의 지갑 경험을 제공합니다.',
        descJa: '摩擦を減らしつつ、ウォレット体験を安全で制御され、信頼できるものに保つために作られました。',
        descZh: '旨在减少摩擦，同时保持钱包体验的安全、可控和基于信任的特点。',
    },
    {
        icon: Layers3,
        titleEn: 'Structured Wallet Logic',
        titleKo: '구조화된 지갑 로직',
        titleJa: '構造化されたウォレットロジック',
        titleZh: '结构化钱包逻辑',
        descEn: 'Wallet, mining, rewards, and ecosystem utility are connected through one integrated interface.',
        descKo: '지갑, 채굴, 보상, 생태계 유틸리티가 하나의 통합 인터페이스로 연결됩니다.',
        descJa: 'ウォレット、マイニング、報酬、エコシステムのユーティリティが1つの統合インターフェースを通じて接続されます。',
        descZh: '钱包、挖矿、奖励和生态系统效用通过一个集成的界面相连。',
    },
    {
        icon: Activity,
        titleEn: 'Operational Visibility',
        titleKo: '운영 가시성',
        titleJa: '運用の可視性',
        titleZh: '运营可见度',
        descEn: 'Balance, mining state, reward flow, and activity can be presented clearly through one app experience.',
        descKo: '잔액, 채굴 상태, 보상 흐름, 활동 내역을 하나의 앱 경험 안에서 명확하게 확인할 수 있습니다.',
        descJa: '残高、マイニングの状態、報酬の流れ、活動は、1つのアプリ体験を通じて明確に提示されます。',
        descZh: '余额、挖矿状态、奖励流向及活动可通过一次APP体验清晰展示。',
    },
];

const buttonFeatures = [
    {
        icon: MousePointerClick,
        titleEn: 'Single Tap / Double Tap',
        titleKo: '한 번 클릭 / 두 번 클릭',
        titleJa: 'シングルタップ / ダブルタップ',
        titleZh: '单击 / 双击',
        descEn: 'The center button can execute different actions based on single tap and double tap logic for faster access.',
        descKo: '센터 버튼은 한 번 클릭과 두 번 클릭을 구분하여 서로 다른 기능을 빠르게 실행할 수 있습니다.',
        descJa: 'センターボタンは、シングルタップとダブルタップのロジックに基づいてさまざまなアクションを実行し、より迅速なアクセスを可能にします。',
        descZh: '中心按钮可以基于单击和双击逻辑执行不同的操作，以实现更快的访问。',
    },
    {
        icon: ArrowUp,
        titleEn: 'Directional Control',
        titleKo: '방향 제어',
        titleJa: '方向コントロール',
        titleZh: '方向控制',
        descEn: 'Up, down, left, and right interactions allow multiple wallet functions to be triggered through one core button.',
        descKo: '위, 아래, 왼쪽, 오른쪽 입력을 통해 하나의 중심 버튼에서 여러 지갑 기능을 실행할 수 있습니다.',
        descJa: '上下左右の操作インターフェースにより、1つのコアボタンで複数のウォレット機能をトリガーできます。',
        descZh: '上下左右的交互允许通过一个核心按钮触发多个钱包功能。',
    },
    {
        icon: BellRing,
        titleEn: 'Adaptive State Response',
        titleKo: '상태 반응형 동작',
        titleJa: '適応型状態応答',
        titleZh: '自适应状态响应',
        descEn: 'The button can visually change when alerts, rewards, approvals, or activity states are updated.',
        descKo: '알림, 보상, 승인 요청, 활동 상태 변화에 따라 버튼 상태가 시각적으로 반응할 수 있습니다.',
        descJa: 'アラート、報酬、承認、または活動のステータスが更新された際、ボタンは視覚的に変化します。',
        descZh: '当警报、奖励、批准或活动状态更新时，按钮可能会在视觉上发生变化。',
    },
    {
        icon: Fingerprint,
        titleEn: 'Hold + Biometric Security',
        titleKo: '길게 누르기 + 생체인증',
        titleJa: '長押し + 生体認証セキュリティ',
        titleZh: '长按 + 生物识别安全',
        descEn: 'A sustained press combined with biometric authentication can support protected pages and secure payment approval.',
        descKo: '몇 초간 누르기와 생체인증을 결합하여 보호된 페이지 진입과 안전한 결제 승인 기능을 지원할 수 있습니다.',
        descJa: '生体認証と組み合わせた長押しにより、保護されたページと安全な決済の承認をサポートできます。',
        descZh: '持续按压结合生物识别验证可以支持受保护页面和安全的支付批准。',
    },
];

const buttonActions = [
    {
        icon: ArrowUp,
        labelEn: 'Up',
        labelKo: '위',
        labelJa: '上',
        labelZh: '向上',
        valueEn: 'Transfer / Quick Action',
        valueKo: '송금 / 빠른 실행',
        valueJa: '送金 / クイックアクション',
        valueZh: '转账 / 快速操作',
    },
    {
        icon: ArrowDown,
        labelEn: 'Down',
        labelKo: '아래',
        labelJa: '下',
        labelZh: '向下',
        valueEn: 'Deposit / Receive',
        valueKo: '입금 / 받기',
        valueJa: '入金 / 受け取り',
        valueZh: '存款 / 接收',
    },
    {
        icon: ArrowLeft,
        labelEn: 'Left',
        labelKo: '왼쪽',
        labelJa: '左',
        labelZh: '向左',
        valueEn: 'Reward / Point Utility',
        valueKo: '보상 / 포인트 유틸리티',
        valueJa: '報酬 / ポイントユーティリティ',
        valueZh: '奖励 / 积分效用',
    },
    {
        icon: ArrowRight,
        labelEn: 'Right',
        labelKo: '오른쪽',
        labelJa: '右',
        labelZh: '向右',
        valueEn: 'Event / Extra Action',
        valueKo: '이벤트 / 추가 기능',
        valueJa: 'イベント / 追加アクション',
        valueZh: '事件 / 附加操作',
    },
    {
        icon: MousePointerClick,
        labelEn: '1 Tap',
        labelKo: '1회 클릭',
        labelJa: '1回タップ',
        labelZh: '单击一次',
        valueEn: 'Primary Action',
        valueKo: '기본 실행',
        valueJa: 'プライマリ アクション',
        valueZh: '主要动作',
    },
    {
        icon: MousePointerClick,
        labelEn: '2 Tap',
        labelKo: '2회 클릭',
        labelJa: '2回タップ',
        labelZh: '双击',
        valueEn: 'Secondary Action',
        valueKo: '보조 실행',
        valueJa: 'セカンダリ アクション',
        valueZh: '次要动作',
    },
    {
        icon: TimerReset,
        labelEn: 'Hold',
        labelKo: '길게 누르기',
        labelJa: '長押し',
        labelZh: '长按',
        valueEn: 'Protected Mode',
        valueKo: '보호 모드',
        valueJa: '保護モード',
        valueZh: '受保护模式',
    },
    {
        icon: Fingerprint,
        labelEn: 'Hold + Bio',
        labelKo: '길게 + 생체인증',
        labelJa: '長押し + 生体認証',
        labelZh: '长按 + 生物识别',
        valueEn: 'Secure Payment / Security Page',
        valueKo: '보안 결제 / 보안 페이지',
        valueJa: 'セキュア決済 / セキュリティページ',
        valueZh: '安全支付 / 安全页面',
    },
];

export function EcosystemPage() {
    const { t } = useLanguage();
    const walletMainImage = useAssetUrl(
        'wallet-main-image',
        () => import('../../assets/wallet/wallet-main.png')
    );

    return (
        <div className="ecosystem-page">
            <div className="ecosystem-page__bg">
                <div className="ecosystem-page__noise" />
                <div className="ecosystem-page__grid" />
                <div className="ecosystem-page__glow ecosystem-page__glow--blue" />
                <div className="ecosystem-page__glow ecosystem-page__glow--purple" />
                <div className="ecosystem-page__glow ecosystem-page__glow--violet" />
            </div>

            <section className="ecosystem-page__hero">
                <div className="ecosystem-page__container ecosystem-page__hero-layout">
                    <motion.div
                        initial={{ opacity: 0, y: 22 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="ecosystem-page__hero-copy"
                    >
                        <div className="ecosystem-page__badge">
                            <Sparkles size={15} />
                            <span>{t('KORION Wallet Experience', 'KORION Wallet Experience', 'KORIONウォレット体験', 'KORION钱包体验')}</span>
                        </div>

                        <h1 className="ecosystem-page__title">
                            {t('The Premium Mobile Gateway to the', '프리미엄 모바일 경험으로 연결되는', 'プレミアムモバイル体験を通じた', '通往优质移动网关的')}{' '}
                            <span className="ecosystem-page__title-gradient">
                                {t('KORION Ecosystem', 'KORION 생태계', 'KORIONエコシステム', 'KORION生态系统')}
                            </span>
                        </h1>

                        <p className="ecosystem-page__subtitle">
                            {t(
                                'KORION Wallet is the real user-facing gateway for mining participation, asset visibility, secure token handling, and future ecosystem utility. Built for clarity, trust, and a high-quality mobile experience.',
                                'KORION Wallet은 채굴 참여, 자산 가시성, 안전한 토큰 관리, 향후 생태계 유틸리티를 위한 실제 사용자용 게이트웨이입니다. 명확성, 신뢰, 고품질 모바일 경험을 위해 설계되었습니다.',
                                'KORIONウォレットは、マイニング参加、資産の可視性、安全なトークン処理、および将来のエコシステムユーティリティに対する実際のユーザー向けゲートウェイです。明確さ、信頼性、高品質なモバイル体験のために構築されました。',
                                'KORION钱包是实际面向用户的网关，用于挖矿参与、资产可见性、安全的代币处理和未来的生态系统实用性。它为清晰、信任和高质量的移动体验而构建。'
                            )}
                        </p>

                        <div className="ecosystem-page__hero-actions">
                            <Link
                                to="/download"
                                className="ecosystem-page__button ecosystem-page__button--primary"
                            >
                                <Smartphone size={18} />
                                {t('Download Wallet', '지갑 다운로드', 'ウォレットのダウンロード', '下载钱包')}
                                <ChevronRight size={18} />
                            </Link>

                            <Link
                                to="/whitepaper"
                                className="ecosystem-page__button ecosystem-page__button--ghost"
                            >
                                <BadgeCheck size={18} />
                                {t('View Whitepaper', '백서 보기', 'ホワイトペーパーを見る', '查看白皮书')}
                                <ChevronRight size={18} />
                            </Link>
                        </div>

                        <div className="ecosystem-page__hero-points">
                            <div className="ecosystem-page__hero-point">
                                <CheckCircle2 size={16} />
                                <span>{t('Real app-based wallet interface', '실제 앱 기반 지갑 인터페이스', '実際のアプリベースのウォレットインターフェース', '真实的基于应用的钱包界面')}</span>
                            </div>
                            <div className="ecosystem-page__hero-point">
                                <CheckCircle2 size={16} />
                                <span>{t('Mining, rewards, and wallet in one flow', '채굴, 보상, 지갑이 하나의 흐름으로 연결', 'マイニング、報酬、ウォレットを一つのフローに', '挖矿、奖励和钱包集于一流')}</span>
                            </div>
                            <div className="ecosystem-page__hero-point">
                                <CheckCircle2 size={16} />
                                <span>{t('Premium mobile-first visual experience', '프리미엄 모바일 우선 비주얼 경험', 'プレミアムなモバイルファーストの視覚体験', '优质的移动优先视觉体验')}</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.08 }}
                        className="ecosystem-page__hero-visual"
                    >
                        <div className="wallet-stage">
                            <div className="wallet-stage__beam wallet-stage__beam--left" />
                            <div className="wallet-stage__beam wallet-stage__beam--right" />
                            <div className="wallet-stage__ring wallet-stage__ring--one" />
                            <div className="wallet-stage__ring wallet-stage__ring--two" />

                            <div className="wallet-stage__chip wallet-stage__chip--top">
                                <ShieldCheck size={14} />
                                <span>{t('Secure Wallet', '보안 지갑', 'セキュアなウォレット', '安全钱包')}</span>
                            </div>

                            <div className="wallet-stage__chip wallet-stage__chip--bottom">
                                <Zap size={14} />
                                <span>{t('Mining Ready', '채굴 활성화', 'マイニング対応', '准备挖矿')}</span>
                            </div>

                            <div className="wallet-stage__frame">
                                <div className="wallet-stage__frame-shine" />
                                <ImageWithFallback
                                    src={walletMainImage}
                                    alt="KORION Wallet App Screen"
                                    className="wallet-stage__image"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="ecosystem-page__section">
                <div className="ecosystem-page__container">
                    <div className="ecosystem-page__section-heading">
                        <span className="ecosystem-page__eyebrow">{t('Core Product Value', '핵심 제품 가치', 'コア製品価値', '核心产品价值')}</span>
                        <h2>{t('Designed around real wallet behavior', '실제 지갑 사용 흐름을 중심으로 설계', '実際のウォレットの行動を中心に設計', '围绕真实钱包行为设计')}</h2>
                    </div>

                    <div className="ecosystem-page__feature-grid">
                        {featureCards.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={item.titleEn}
                                    initial={{ opacity: 0, y: 18 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ duration: 0.5, delay: index * 0.06 }}
                                    className="ecosystem-feature"
                                >
                                    <div className="ecosystem-feature__icon">
                                        <Icon size={22} />
                                    </div>
                                    <h3>{t(item.titleEn, item.titleKo, item.titleJa, item.titleZh)}</h3>
                                    <p>{t(item.descEn, item.descKo, item.descJa, item.descZh)}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="ecosystem-page__section">
                <div className="ecosystem-page__container">
                    <div className="ecosystem-highlight">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.24 }}
                            transition={{ duration: 0.55 }}
                            className="ecosystem-highlight__copy"
                        >
                            <span className="ecosystem-page__eyebrow">
                                {t('Visual Product Layer', '비주얼 제품 레이어', 'ビジュアル製品レイヤー', '视觉产品层')}
                            </span>

                            <h2 className="ecosystem-highlight__title">
                                {t('Mining, rewards, and wallet activity in one premium screen.', '채굴, 보상, 지갑 활동을 하나의 프리미엄 화면에서.', 'マイニング、報酬、ウォレットの活動を1つのプレミアムな画面で。', '挖矿、奖励和钱包活动集中在一个高级屏幕上。')}
                            </h2>

                            <p className="ecosystem-highlight__desc">
                                {t(
                                    'The KORION Wallet interface is built to immediately communicate mining state, reward flow, and user activity with a polished mobile UI that feels modern, premium, and trustworthy.',
                                    'KORION Wallet 인터페이스는 채굴 상태, 보상 흐름, 사용자 활동을 즉시 이해할 수 있도록 설계되었으며, 현대적이고 프리미엄하며 신뢰감 있는 모바일 UI 경험을 제공합니다.',
                                    'KORIONウォレットのインターフェースは、マイニングの状況、報酬のフロー、ユーザーのアクティビティを即座に伝えるように構築されており、モダンでプレミアム、そして信頼できる洗練されたモバイルUIを備えています。',
                                    'KORION钱包界面的构建旨在通过感觉现代、高级且值得信赖的抛光移动UI，立即传达挖矿状态、奖励流和用户活动。'
                                )}
                            </p>

                            <ul className="ecosystem-highlight__list">
                                <li>{t('Clear mining visibility and reward state', '명확한 채굴 상태 및 보상 가시성', '明確なマイニングの可視性と報酬の状態', '清晰的挖矿可见性和奖励状态')}</li>
                                <li>{t('Fast recognition of key wallet information', '핵심 지갑 정보의 빠른 인지', '重要なウォレット情報の迅速な認識', '快速识别关键钱包信息')}</li>
                                <li>{t('Strong visual trust through premium UI language', '프리미엄 UI 언어를 통한 높은 신뢰감', 'プレミアムなUI言語による強力な視覚的信頼', '通过优质UI语言建立强大的视觉信任')}</li>
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.24 }}
                            transition={{ duration: 0.55 }}
                            className="ecosystem-highlight__visual"
                        >
                            <div className="ecosystem-highlight__image-card">
                                <div className="ecosystem-highlight__image-glow" />
                                <ImageWithFallback
                                    src={walletMainImage}
                                    alt="KORION Wallet Interface"
                                    className="ecosystem-highlight__image"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
            <section className="ecosystem-page__section">
                <div className="ecosystem-page__container">
                    <div className="ecosystem-button-section">
                        <motion.div
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5 }}
                            className="ecosystem-button-section__header"
                        >
                            <span className="ecosystem-page__eyebrow">
                                {t('Patent-Pending Signature Control', '특허출원 기반 시그니처 제어', '特許出願中のシグネチャーコントロール', '正在申请专利的签名控制')}
                            </span>

                            <h2 className="ecosystem-button-section__title">
                                {t(
                                    'One center button. 13+ possible actions.',
                                    '하나의 중심 버튼으로 13개 이상의 기능 확장',
                                    '1つのセンターボタン。13以上のアクションが可能。',
                                    '一个中心按钮。超过13种可能的操作。'
                                )}
                            </h2>

                            <p className="ecosystem-button-section__desc">
                                {t(
                                    'The KORION Wallet center button is designed as more than a normal navigation button. It acts as a multi-action control hub that can combine directional gestures, single and double tap logic, alert-responsive states, and press-and-hold biometric security flows.',
                                    'KORION Wallet의 센터 버튼은 단순한 이동 버튼이 아니라, 방향 입력, 한 번 클릭과 두 번 클릭, 알림 반응형 상태 변화, 길게 누르기와 생체인증 보안 흐름까지 결합할 수 있는 멀티 액션 제어 허브로 설계되었습니다.',
                                    'KORIONウォレットのセンターボタンは普通のナビゲーションボタン以上のものとして設計されています。方向ジェスチャー、シングルおよびダブルタップロジック、アラート対応のステータス、そして長押しの生体認証セキュリティフローを組み合わせることができるマルチアクションコントロールハブとして機能します。',
                                    'KORION钱包中心按钮的设计不仅仅是一个普通的导航按钮。它作为一个多功能控制中枢，可以结合方向手势、单击和双击逻辑、警报响应状态以及长按生物识别安全流程。'
                                )}
                            </p>
                        </motion.div>

                        <div className="ecosystem-button-layout">
                            <motion.div
                                initial={{ opacity: 0, x: -18 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.5 }}
                                className="ecosystem-button-orbit"
                            >
                                <div className="ecosystem-button-orbit__ring ecosystem-button-orbit__ring--outer" />
                                <div className="ecosystem-button-orbit__ring ecosystem-button-orbit__ring--inner" />

                                <div className="ecosystem-button-orbit__core">
                                    <span>{t('Multi Action', '멀티 액션', 'マルチアクション', '多重动作')}</span>
                                </div>

                                <div className="ecosystem-button-orbit__node ecosystem-button-orbit__node--top">
                                    <ArrowUp size={18} />
                                </div>
                                <div className="ecosystem-button-orbit__node ecosystem-button-orbit__node--bottom">
                                    <ArrowDown size={18} />
                                </div>
                                <div className="ecosystem-button-orbit__node ecosystem-button-orbit__node--left">
                                    <ArrowLeft size={18} />
                                </div>
                                <div className="ecosystem-button-orbit__node ecosystem-button-orbit__node--right">
                                    <ArrowRight size={18} />
                                </div>
                                <div className="ecosystem-button-orbit__node ecosystem-button-orbit__node--tap">
                                    <MousePointerClick size={18} />
                                </div>
                                <div className="ecosystem-button-orbit__node ecosystem-button-orbit__node--hold">
                                    <Fingerprint size={18} />
                                </div>
                                <div className="ecosystem-button-orbit__node ecosystem-button-orbit__node--alert">
                                    <BellRing size={18} />
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 18 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.5 }}
                                className="ecosystem-button-content"
                            >
                                <div className="ecosystem-button-content__grid">
                                    {buttonFeatures.map((item, index) => {
                                        const Icon = item.icon;
                                        return (
                                            <motion.div
                                                key={item.titleEn}
                                                initial={{ opacity: 0, y: 16 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true, amount: 0.2 }}
                                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                                className="ecosystem-button-card"
                                            >
                                                <div className="ecosystem-button-card__icon">
                                                    <Icon size={20} />
                                                </div>
                                                <h3>{t(item.titleEn, item.titleKo, item.titleJa, item.titleZh)}</h3>
                                                <p>{t(item.descEn, item.descKo, item.descJa, item.descZh)}</p>
                                            </motion.div>
                                        );
                                    })}
                                </div>

                                <div className="ecosystem-button-actions">
                                    {buttonActions.map((item, index) => {
                                        const Icon = item.icon;
                                        return (
                                            <motion.div
                                                key={`${item.labelEn}-${index}`}
                                                initial={{ opacity: 0, y: 12 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true, amount: 0.2 }}
                                                transition={{ duration: 0.35, delay: index * 0.03 }}
                                                className="ecosystem-button-actions__item"
                                            >
                                                <div className="ecosystem-button-actions__left">
                                                    <span className="ecosystem-button-actions__icon">
                                                        <Icon size={16} />
                                                    </span>
                                                    <strong>{t(item.labelEn, item.labelKo, item.labelJa, item.labelZh)}</strong>
                                                </div>
                                                <span className="ecosystem-button-actions__value">
                                                    {t(item.valueEn, item.valueKo, item.valueJa, item.valueZh)}
                                                </span>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="ecosystem-page__section ecosystem-page__section--last">
                <div className="ecosystem-page__container">
                    <div className="ecosystem-trust-box">
                        <div className="ecosystem-page__section-heading ecosystem-page__section-heading--left">
                            <span className="ecosystem-page__eyebrow">{t('Trust Layer', '신뢰 레이어', '信頼レイヤー', '信任层')}</span>
                            <h2>{t('Built to feel secure, premium, and dependable', '안전하고 프리미엄하며 신뢰감 있게 설계', '安全でプレミアム、そして頼りになるように設計されています', '为您带来安全、极致且可靠的体验而打造')}</h2>
                        </div>

                        <div className="ecosystem-trust-grid">
                            {trustPoints.map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <motion.div
                                        key={item.titleEn}
                                        initial={{ opacity: 0, y: 16 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.2 }}
                                        transition={{ duration: 0.5, delay: index * 0.06 }}
                                        className="ecosystem-trust"
                                    >
                                        <div className="ecosystem-trust__icon">
                                            <Icon size={20} />
                                        </div>
                                        <h3>{t(item.titleEn, item.titleKo, item.titleJa, item.titleZh)}</h3>
                                        <p>{t(item.descEn, item.descKo, item.descJa, item.descZh)}</p>
                                    </motion.div>
                                );
                            })}
                        </div>

                        <div className="ecosystem-cta">
                            <div>
                                <span className="ecosystem-page__eyebrow">{t('Next Step', '다음 단계', '次のステップ', '下一步')}</span>
                                <h2 className="ecosystem-cta__title">
                                    {t('Experience the real KORION Wallet interface.', '실제 KORION Wallet 인터페이스를 경험해보세요.', '実際のKORIONウォレットインターフェースを体験してください。', '体验真实的KORION钱包界面。')}
                                </h2>
                                <p className="ecosystem-cta__desc">
                                    {t(
                                        'Download the wallet and explore a real mobile product built for participation, mining, and ecosystem access.',
                                        '참여, 채굴, 생태계 접근을 위해 설계된 실제 모바일 제품을 직접 확인해보세요.',
                                        'ウォレットをダウンロードして、参加、マイニング、エコシステムへのアクセスのために作られた実際のモバイル製品を探索しましょう。',
                                        '下载钱包，探索专为参与、挖矿和访问生态系统打造的移动端产品。'
                                    )}
                                </p>
                            </div>

                            <div className="ecosystem-cta__actions">
                                <Link
                                    to="/download"
                                    className="ecosystem-page__button ecosystem-page__button--primary"
                                >
                                    <Smartphone size={18} />
                                    {t('Go to Download', '다운로드 페이지로 이동', 'ダウンロードへ進む', '前往下载')}
                                    <ChevronRight size={18} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
