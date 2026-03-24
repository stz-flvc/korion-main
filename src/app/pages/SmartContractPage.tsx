import { motion } from 'motion/react';
import {
    ArrowRight,
    BadgeCheck,
    Binary,
    Blocks,
    BrainCircuit,
    ChevronRight,
    Copy,
    FileCode2,
    Fingerprint,
    Flame,
    Globe,
    Layers3,
    LockKeyhole,
    Network,
    ScanLine,
    Shield,
    Sparkles,
    WalletCards,
    } from 'lucide-react';
    import { Link } from 'react-router';
    import { useLanguage } from '../contexts/LanguageContext';
    import './SmartContractPage.css';

    const CONTRACT_ADDRESS = 'TBJZD8RwQ1JcQvEP9BTbPbgBCGxUjxSXnn';
    const TRONSCAN_URL =
    'https://tronscan.org/#/token20/TBJZD8RwQ1JcQvEP9BTbPbgBCGxUjxSXnn';

    const pillars = [
    {
        icon: FileCode2,
        titleEn: 'TRC20 Execution Layer',
        titleKr: 'TRC20 실행 레이어',
        titleJa: 'TRC20 実行レイヤー',
        titleZh: 'TRC20 执行层',
        descEn:
        'Built on the TRON network with a contract model designed for token transfer compatibility, wallet interaction, and ecosystem connectivity.',
        descKr:
        'TRON 네트워크 기반으로 구축되어 토큰 전송 호환성, 지갑 상호작용, 생태계 연결성을 고려한 실행 레이어를 형성합니다.',
        descJa: 'TRONネットワーク上に構築され、トークン転送の互換性、ウォレットの相互作用、およびエコシステムの接続性を考慮した実行レイヤーを形成します。',
        descZh: '基于 TRON 网络构建，形成了一个考虑了代币传输兼容性、钱包交互和生态系统连接性的执行层。',
    },
    {
        icon: LockKeyhole,
        titleEn: 'Authority Boundary Design',
        titleKr: '권한 경계 설계',
        titleJa: '権限境界設計',
        titleZh: '权限边界设计',
        descEn:
        'Contract control is described through separated operational boundaries, distinguishing public token behavior from policy-sensitive actions.',
        descKr:
        '일반 토큰 동작과 정책 민감 기능을 구분하는 운영 경계 중심으로 컨트랙트 통제 구조를 설명합니다.',
        descJa: '一般的なトークンの挙動とポリシーに敏感な機能を区別する運用境界を中心に、コントラクトの制御構造を説明します。',
        descZh: '以区分普通代币行为和政策敏感功能的运营边界为中心，说明合约控制结构。',
    },
    {
        icon: Flame,
        titleEn: 'Treasury-Linked Burn Logic',
        titleKr: '트레저리 연동 소각 로직',
        titleJa: 'トレジャリー連動の焼却ロジック',
        titleZh: '国库联动销毁逻辑',
        descEn:
        'The project basis reflects a periodic burn model connected to platform revenue policy rather than a simple standalone event.',
        descKr:
        '단순 이벤트가 아닌 플랫폼 수익 정책과 연결된 정기 소각 구조를 기준으로 설계 철학을 보여줍니다.',
        descJa: '単なるイベントではなく、プラットフォームの収益ポリシーと連動した定期的な焼却構造を基準に設計哲学を示します。',
        descZh: '并非简单的活动，而是以与平台收益政策挂钩的定期销毁结构为基准，展示设计哲学。',
    },
    {
        icon: Shield,
        titleEn: 'Operational Security Segmentation',
        titleKr: '운영 보안 분리',
        titleJa: '運用セキュリティの分離',
        titleZh: '运营安全隔离',
        descEn:
        'Treasury, liquidity, reward, and governance-sensitive flows can be interpreted through separated security zones and control paths.',
        descKr:
        '트레저리, 유동성, 리워드, 거버넌스 민감 흐름을 분리된 보안 구역과 통제 경로로 해석할 수 있도록 구성합니다.',
        descJa: 'トレジャリー、流動性、リワード、ガバナンスに敏感なフローを、分離されたセキュリティゾーンと制御パスを通じて解釈できるように構成します。',
        descZh: '将国库、流动性、奖励、治理敏感流向配置为可以通过分离的安全区域和控制路径进行阐释。',
    },
    ];

    const flowSteps = [
    {
        no: '01',
        titleEn: 'Contract Identity',
        titleKr: '컨트랙트 식별',
        titleJa: 'コントラクト識別',
        titleZh: '合约识别',
        descEn:
        'The deployed contract identity serves as the fixed on-chain reference point for KORION’s token-layer presence.',
        descKr:
        '배포된 컨트랙트 식별자는 KORION의 토큰 레이어 존재를 대표하는 고정 온체인 기준점 역할을 합니다.',
        descJa: 'デプロイされたコントラクト識別子は、KORIONのトークンレイヤーの存在を代表する固定のオンチェーン基準点としての役割を果たします。',
        descZh: '部署的合约标识符作为代表 KORION 代币层存在的固定链上基准点。',
    },
    {
        no: '02',
        titleEn: 'Wallet & Explorer Compatibility',
        titleKr: '지갑·익스플로러 호환',
        titleJa: 'ウォレット・エクスプローラー互換',
        titleZh: '钱包/浏览器兼容',
        descEn:
        'TRON-based visibility and token-standard compatibility support ecosystem discovery, wallet display, and explorer-level verification flow.',
        descKr:
        'TRON 기반 가시성과 토큰 표준 호환성을 통해 생태계 인식, 지갑 표시, 익스플로러 검증 흐름을 지원합니다.',
        descJa: 'TRONベースの可視性とトークン標準の互換性を通じて、エコシステムの認識、ウォレットの表示、エクスプローラーレベルの検証フローをサポートします。',
        descZh: '通过基于 TRON 的可见性和代币标准兼容性，支持生态系统识别、钱包显示和浏览器级验证流程。',
    },
    {
        no: '03',
        titleEn: 'Policy-Controlled Operations',
        titleKr: '정책 통제형 운영',
        titleJa: 'ポリシー統制型運用',
        titleZh: '政策管控型运营',
        descEn:
        'Supply handling, treasury execution, and sensitive actions are framed as controlled policy functions rather than casual token actions.',
        descKr:
        '공급 처리, 트레저리 집행, 민감 기능은 단순 토큰 조작이 아니라 정책 통제형 기능으로 해석됩니다.',
        descJa: '供給処理、トレジャリー執行、および機密機能は、単純なトークン操作ではなく、ポリシー統制型の機能として解釈されます。',
        descZh: '供应处理、国库执行及敏感功能被阐释为政策管控型功能，而非简单的代币操作。',
    },
    {
        no: '04',
        titleEn: 'Protocol Trust Surface',
        titleKr: '프로토콜 신뢰 표면',
        titleJa: 'プロトコル信頼サーフェス',
        titleZh: '协议信任层面',
        descEn:
        'Public address visibility, transparent explorer linkage, and structured execution narrative reinforce institutional credibility.',
        descKr:
        '공개 주소, 익스플로러 연결, 구조화된 실행 설명은 프로젝트의 대외 신뢰성과 인프라 인상을 강화합니다.',
        descJa: '公的なアドレスの可視性、透明なエクスプローラーとの連携、および構造化された実行の説明は、プロジェクトの対外的な信頼性とインフラの印象を強化します。',
        descZh: '公开地址、浏览器连接以及结构化的执行说明增强了项目的对外信誉和基础设施印象。',
    },
    ];

    const specs = [
    { labelEn: 'Network', labelKr: '네트워크', labelJa: 'ネットワーク', labelZh: '网络', value: 'TRON' },
    { labelEn: 'Contract Standard', labelKr: '컨트랙트 표준', labelJa: 'コントラクト標準', labelZh: '合约标准', value: 'TRC20' },
    { labelEn: 'Contract Address', labelKr: '컨트랙트 주소', labelJa: 'コントラクトアドレス', labelZh: '合约地址', value: CONTRACT_ADDRESS },
    { labelEn: 'Decimals', labelKr: '소수점', labelJa: '小数点', labelZh: '精度', value: '6' },
    { labelEn: 'Supply Basis', labelKr: '총 공급 기준', labelJa: '総供給基準', labelZh: '总供应标准', value: '10B KORION' },
    { labelEn: 'Explorer Reference', labelKr: '익스플로러 기준', labelJa: 'エクスプローラー基準', labelZh: '浏览器基准', value: 'TRONSCAN' },
    ];

    const accessCards = [
    {
        icon: Globe,
        titleEn: 'TRONSCAN Reference',
        titleKr: 'TRONSCAN 기준 페이지',
        titleJa: 'TRONSCAN 基準ページ',
        titleZh: 'TRONSCAN 基准页面',
        bodyEn:
        'View the public explorer reference for the KORION smart contract and verify the on-chain token surface.',
        bodyKr:
        'KORION 스마트 컨트랙트의 공개 익스플로러 기준 페이지를 통해 온체인 토큰 표면을 확인할 수 있습니다.',
        bodyJa: 'KORIONスマートコントラクトの公開エクスプローラー基準ページを通じて、オンチェーンのトークンサーフェスを確認できます。',
        bodyZh: '可以通过 KORION 智能合约的公开浏览器基准页面确认链上代币层面。',
        href: TRONSCAN_URL,
        external: true,
    },
    {
        icon: FileCode2,
        titleEn: 'Contract Identity',
        titleKr: '컨트랙트 식별 정보',
        titleJa: 'コントラクト識別情報',
        titleZh: '合约识别信息',
        bodyEn:
        'Use the contract address as the core identity reference for wallet, explorer, and ecosystem verification.',
        bodyKr:
        '컨트랙트 주소를 지갑, 익스플로러, 생태계 검증을 위한 핵심 식별 기준으로 활용할 수 있습니다.',
        bodyJa: 'コントラクトアドレスをウォレット、エクスプローラー、エコシステム検証のための主要な識別基準として活用できます。',
        bodyZh: '合约地址可作为钱包、浏览器、生态系统验证的核心识别标准。',
        href: '#contract-identity',
        external: false,
    },
    {
        icon: Layers3,
        titleEn: 'Developer Structure',
        titleKr: '개발 구조 안내',
        titleJa: '開発構造の案内',
        titleZh: '开发结构指南',
        bodyEn:
        'Review the execution architecture, operational structure, and system-oriented flow connected to the KORION protocol.',
        bodyKr:
        'KORION 프로토콜과 연결되는 실행 구조, 운영 구조, 시스템 흐름을 확인할 수 있습니다.',
        bodyJa: 'KORIONプロトコルに関連する実行構造、運用構造、システムフローを確認できます。',
        bodyZh: '可以确认与 KORION 协议相关的执行结构、运营结构和系统流程。',
        href: '/developers',
        external: true,
    },
    ];

    const trustCards = [
    {
        icon: BadgeCheck,
        titleEn: 'Visible On-Chain Identity',
        titleKr: '공개 온체인 식별성',
        titleJa: '公開されたオンチェーンの識別性',
        titleZh: '公开链上识别性',
        bodyEn:
        'A visible contract reference strengthens the project’s public verification layer and improves trust communication.',
        bodyKr:
        '공개된 컨트랙트 기준점은 프로젝트의 검증 가능성을 높이고 신뢰 전달력을 강화합니다.',
        bodyJa: '公開されたコントラクトの基準点は、プロジェクトの検証可能性を高め、信頼の伝達力を強化します。',
        bodyZh: '公开的合约基准点提高了项目的可验证性并增强了信任传达力。',
    },
    {
        icon: WalletCards,
        titleEn: 'Service-Oriented Contract Framing',
        titleKr: '서비스 지향형 계약 구조',
        titleJa: 'サービス指向型コントラクト構造',
        titleZh: '服务导向型合约结构',
        bodyEn:
        'The contract is positioned as infrastructure for wallet use, ecosystem integration, and platform-linked utility rather than isolated issuance.',
        bodyKr:
        '컨트랙트는 단순 발행용이 아니라 지갑 사용, 생태계 연동, 플랫폼 실사용을 위한 인프라로 위치합니다.',
        bodyJa: 'コントラクトは単なる発行用ではなく、ウォレットの使用、エコシステムの連携、プラットフォームの実用のためのインフラとして位置づけられます。',
        bodyZh: '合约不仅用于发行，还被定位为钱包使用、生态系统对接和平台实际应用的基石。',
    },
    {
        icon: Fingerprint,
        titleEn: 'Controlled Authority Narrative',
        titleKr: '통제 권한 구조',
        titleJa: '統制権限構造',
        titleZh: '受控权限结构',
        bodyEn:
        'Operational trust increases when authority, execution scope, and security boundaries are explained with clarity.',
        bodyKr:
        '권한, 실행 범위, 보안 경계를 명확하게 설명할수록 운영 신뢰도는 높아집니다.',
        bodyJa: '権限、実行範囲、セキュリティ境界を明確に説明することで、運用の信頼性が向上します。',
        bodyZh: '权限、执行范围和安全边界解释得越清晰，运营信誉就越高。',
    },
    {
        icon: BrainCircuit,
        titleEn: 'Premium Protocol Presentation',
        titleKr: '프리미엄 프로토콜 표현',
        titleJa: 'プレミアムプロトコルの提示',
        titleZh: '优质协议展示',
        bodyEn:
        'The page is designed to present KORION as a structured protocol system rather than a simple token landing page.',
        bodyKr:
        '이 페이지는 KORION을 단순 토큰 소개가 아니라 구조화된 프로토콜 시스템으로 보이게 설계됩니다.',
        bodyJa: 'このページは、KORIONを単なるトークンの紹介ではなく、構造化されたプロトコルシステムとして提示するように設計されています。',
        bodyZh: '本页面旨在将 KORION 展示为一个结构化的协议系统，而非简单的代币介绍。',
    },
    ];

    export function SmartContractPage() {
    const { t } = useLanguage();

    const handleCopyContract = async () => {
        try {
        await navigator.clipboard.writeText(CONTRACT_ADDRESS);
        } catch (error) {
        console.error('Failed to copy contract address:', error);
        }
    };

    return (
        <div className="smart-contract-page">
        <section className="smart-contract-hero">
            <div className="smart-contract-hero__ambient smart-contract-hero__ambient--one" />
            <div className="smart-contract-hero__ambient smart-contract-hero__ambient--two" />
            <div className="smart-contract-hero__ambient smart-contract-hero__ambient--three" />

            <div className="smart-contract-page__container">
            <div className="smart-contract-hero__layout">
                <motion.div
                className="smart-contract-hero__content"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75 }}
                >
                <div className="smart-contract-hero__eyebrow">
                    <Binary size={14} />
                    <span>{t('LIVE CONTRACT INTERFACE', 'LIVE CONTRACT INTERFACE', 'ライブコントラクトインターフェース', '实时合约接口')}</span>
                </div>

                <h1 className="smart-contract-hero__title">
                    {t(
                        'KORION smart contracts reveal deployment structure and execution layers',
                        'KORION 스마트 컨트랙트는\n배포 구조와 실행 레이어를 보여줍니다',
                        'KORIONスマートコントラクトは、デプロイ構造と実行レイヤーを示します',
                        'KORION 智能合约展示了部署结构和执行层'
                    )}
                </h1>

                <p className="smart-contract-hero__description">
                    {t(
                        'A premium protocol designed to visually showcase the deployment architecture and execution layers of the KORION on-chain contract. It brings together contract identity, explorer access, execution flow, and operational scope in a single interface.',
                        'KORION의 온체인 컨트랙트가 어떤 배포 구조와 실행 레이어 위에서 운영되는지를 시각적으로 안내하는 프리미엄 프로토콜입니다. 컨트랙트 주소, 익스플로러 연결, 실행 구조, 운영 경계를 한 화면에서 전달하도록 설계했습니다.',
                        'KORIONのオンチェーンコントラクトがどのようなデプロイ構造と実行レイヤー上で運用されているかを視覚的に案内するプレミアムプロトコルです。コントラクトアドレス、エクスプローラーとの連携、実行構造、運用境界を一つの画面で提供するように設計されています。',
                        '这是一个旨在直观地展示 KORION 链上合约部署结构和执行层的优质协议。该设计可在单一屏幕上提供合约地址、浏览器连接、执行结构和运营边界。'
                    )}
                </p>

                <div id="contract-identity" className="smart-contract-hero__identity">
                    <div className="smart-contract-hero__identity-head">
                    <span>{t('Contract Address', 'Contract Address', 'コントラクトアドレス', '合约地址')}</span>
                    <div className="smart-contract-hero__identity-badges">
                        <span>TRON</span>
                        <span>TRC20</span>
                        <span>KORION</span>
                    </div>
                    </div>

                    <div className="smart-contract-hero__address">
                    <code>{CONTRACT_ADDRESS}</code>

                    <button
                        type="button"
                        onClick={handleCopyContract}
                        className="smart-contract-hero__copy"
                        aria-label="Copy contract address"
                    >
                        <Copy size={16} />
                    </button>
                    </div>

                    <div className="smart-contract-hero__identity-actions">
                    <a
                        href={TRONSCAN_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="smart-contract-hero__link smart-contract-hero__link--primary"
                    >
                        <Globe size={16} />
                        <span>{t('View on TRONSCAN', 'Tronscan에서 보기', 'Tronscanで見​​る', '在 Tronscan 查看')}</span>
                    </a>

                    <a
                        href="/developers"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="smart-contract-hero__link smart-contract-hero__link--ghost"
                        >
                        <span>{t('Developer Structure', '개발 구조 보기', '開発構造を見る', '查看开发结构')}</span>
                        <ChevronRight size={16} />
                    </a>
                    </div>
                </div>
                </motion.div>

                <motion.div
                className="smart-contract-hero__visual"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.85, delay: 0.12 }}
                >
                <div className="contract-chamber">
                    <div className="contract-chamber__scanline" />
                    <div className="contract-chamber__grid" />
                    <div className="contract-chamber__beam contract-chamber__beam--left" />
                    <div className="contract-chamber__beam contract-chamber__beam--right" />

                    <div className="contract-chamber__core-wrap">
                    <div className="contract-chamber__pulse contract-chamber__pulse--one" />
                    <div className="contract-chamber__pulse contract-chamber__pulse--two" />
                    <div className="contract-chamber__pulse contract-chamber__pulse--three" />

                    <div className="contract-chamber__core">
                        <div className="contract-chamber__core-top">
                        <Network size={18} />
                        <span>{t('KORION Contract Core', 'KORION 컨트랙트 코어', 'KORIONコントラクトコア', 'KORION 合约核心')}</span>
                        </div>

                        <div className="contract-chamber__hexagon">
                        <div className="contract-chamber__hexagon-inner">
                            <Blocks size={34} />
                        </div>
                        </div>

                        <div className="contract-chamber__core-bottom">
                        <span>TRON / TRC20</span>
                        <strong>{t('On-Chain Active Surface', '온체인 활성 실행 영역', 'オンチェーン活性化実行領域', '链上活跃执行区域')}</strong>
                        </div>
                    </div>
                    </div>

                    <div className="contract-chamber__node contract-chamber__node--top">
                    <span className="contract-chamber__node-icon">
                        <ScanLine size={16} />
                    </span>
                    <div>
                        <strong>{t('Explorer Sync', '익스플로러 연동', 'エクスプローラー同期', '浏览器同步')}</strong>
                        <p>{t('Publicly addressable', '공개 식별 가능', '公開識別可能', '公开可寻址')}</p>
                    </div>
                    </div>

                    <div className="contract-chamber__node contract-chamber__node--left">
                    <span className="contract-chamber__node-icon">
                        <LockKeyhole size={16} />
                    </span>
                    <div>
                        <strong>{t('Authority Boundary', '권한 경계 레이어', '権限境界レイヤー', '权限边界层')}</strong>
                        <p>{t('Sensitive path isolation', '민감 기능 분리', '機密機能の分離', '敏感路径隔离')}</p>
                    </div>
                    </div>

                    <div className="contract-chamber__node contract-chamber__node--right">
                    <span className="contract-chamber__node-icon">
                        <Flame size={16} />
                    </span>
                    <div>
                        <strong>{t('Burn Policy Layer', '소각 정책 레이어', '焼却ポリシーレイヤー', '销毁政策层')}</strong>
                        <p>{t('Treasury-linked logic', '트레저리 연동 로직', 'トレジャリー連動ロジック', '国库联动逻辑')}</p>
                    </div>
                    </div>

                    <div className="contract-chamber__node contract-chamber__node--bottom">
                    <span className="contract-chamber__node-icon">
                        <Layers3 size={16} />
                    </span>
                    <div>
                        <strong>{t('Treasury Surface', '트레저리 실행 영역', 'トレジャリー実行領域', '国库层面')}</strong>
                        <p>{t('Policy-controlled actions', '정책 통제 기반 실행', 'ポリシー統制基盤の実行', '基于政策管控的执行')}</p>
                    </div>
                    </div>

                    <div className="contract-chamber__data contract-chamber__data--a" />
                    <div className="contract-chamber__data contract-chamber__data--b" />
                    <div className="contract-chamber__data contract-chamber__data--c" />
                    <div className="contract-chamber__data contract-chamber__data--d" />
                </div>
                </motion.div>
            </div>
            </div>
        </section>

        <section className="smart-contract-section smart-contract-section--elevated">
            <div className="smart-contract-page__container-01">
            <div className="smart-contract-section__heading">
                <span className="smart-contract-section__label">
                {t('ARCHITECTURAL PILLARS', 'ARCHITECTURAL PILLARS', 'アーキテクチャの柱', '架构支柱')}
                </span>
                <h2>
                {t(
                    'A clear view of deployment structure and execution layers',
                    '배포 구조와 실행 레이어를\n직관적으로 안내합니다',
                    'デプロイ構造と実行レイヤーを明確に示します',
                    '直观地展示部署结构和执行层'
                )}
                </h2>
                <p>
                {t(
                    'The KORION smart contract is structured to present on-chain deployment, execution layers, authority design, explorer verification, and operational trust in one coherent flow.',
                    'KORION 스마트 컨트랙트는 온체인 배포 구조, 실행 계층, 권한 설계, 익스플로러 검증 연결, 운영 신뢰 요소를 한 흐름 안에서 이해할 수 있도록 구성되었습니다.',
                    'KORIONスマートコントラクトは、オンチェーンのデプロイ構造、実行レイヤー、権限設計、エクスプローラー検証の連携、運用の信頼要素を一貫した流れの中で理解できるように構成されています。',
                    'KORION 智能合约的结构旨在使您在连贯的流程中，理解链上部署结构、执行层、权限设计、浏览器验证连接和运营信誉要素。'
                )}
                </p>
            </div>

            <div className="smart-contract-pillars">
                {pillars.map((item, index) => {
                const Icon = item.icon;
                return (
                    <motion.div
                    key={index}
                    className="smart-contract-pillars__card"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.55, delay: index * 0.06 }}
                    >
                    <div className="smart-contract-pillars__icon">
                        <Icon size={20} />
                    </div>
                    <h3>{t(item.titleEn, item.titleKr, item.titleJa, item.titleZh)}</h3>
                    <p>{t(item.descEn, item.descKr, item.descJa, item.descZh)}</p>
                    </motion.div>
                );
                })}
            </div>
            </div>
        </section>

        <section className="smart-contract-section">
            <div className="smart-contract-page__container-01">
            <div className="smart-contract-flow">
                <div className="smart-contract-flow__intro">
                <span className="smart-contract-section__label">
                    {t('PROTOCOL FLOW', 'PROTOCOL FLOW', 'プロトコルフロー', '协议流程')}
                </span>
                <h2>
                    {t(
                        'The on-chain trust flow presented by KORION contracts',
                        'KORION 컨트랙트가 보여주는\n온체인 신뢰 흐름',
                        'KORIONコントラクトが示すオンチェーンの信頼フロー',
                        'KORION 合约展示的链上信任流向'
                    )}
                </h2>
                <p>
                    {t(
                        'A deployed address and public explorer linkage mean more than a simple link. They become the visual and technical anchor that connects the project to an actual on-chain layer.',
                        '배포된 주소와 공개 익스플로러 연결은 단순 링크 이상의 의미를 갖습니다. 이것은 프로젝트를 실제 온체인 레이어와 연결하는 시각적·기술적 기준점이며, 컨트랙트 구조 설명의 중심이 됩니다.',
                        'デプロイされたアドレスとパブリックエクスプローラーとの連携は、単なるリンク以上の意味を持ちます。それはプロジェクトを実際のオンチェーンレイヤーに接続する視覚的・技術的なアンカーとなり、コントラクト構造の説明の中心となります。',
                        '部署的地址和公开浏览器连接具有超出单一链接的意义。它是将项目连接到实际链上层的视觉和技术基准点，也是合约结构说明的核心。'
                    )}
                </p>
                </div>

                <div className="smart-contract-flow__steps">
                {flowSteps.map((item) => (
                    <div key={item.no} className="smart-contract-step">
                    <div className="smart-contract-step__no">{item.no}</div>
                    <div className="smart-contract-step__body">
                        <h3>{t(item.titleEn, item.titleKr, item.titleJa, item.titleZh)}</h3>
                        <p>{t(item.descEn, item.descKr, item.descJa, item.descZh)}</p>
                    </div>
                    </div>
                ))}
                </div>
            </div>
            </div>
        </section>

        <section className="smart-contract-section smart-contract-section--panel">
            <div className="smart-contract-page__container-01">
            <div className="smart-contract-specs">
                <div className="smart-contract-specs__header">
                <span className="smart-contract-section__label">
                    {t('TECHNICAL BASELINE', 'TECHNICAL BASELINE', 'テクニカルベースライン', '技术基准')}
                </span>
                <h2>{t('Current technical baseline', '현재 페이지 기준 기술 베이스라인', '現在のテクニカルベースライン', '当前技术基准')}</h2>
                </div>

                <div className="smart-contract-specs__grid">
                {specs.map((item, index) => (
                    <div className="smart-contract-specs__item" key={index}>
                    <span>{t(item.labelEn, item.labelKr, item.labelJa, item.labelZh)}</span>
                    <strong>{item.value}</strong>
                    </div>
                ))}
                </div>
            </div>
            </div>
        </section>

        <section className="smart-contract-section smart-contract-section--access">
            <div className="smart-contract-page__container-01">
            <div className="smart-contract-section__heading">
                <span className="smart-contract-section__label">
                {t('CONTRACT ACCESS', 'CONTRACT ACCESS', 'コントラクトアクセス', '合约访问')}
                </span>
                <h2>
                {t(
                    'Direct paths to KORION contract information',
                    'KORION 컨트랙트 정보를\n바로 확인할 수 있는 경로',
                    'KORIONコントラクト情報への直接のパス',
                    '直接确认 KORION 合约信息的路径'
                )}
                </h2>
                <p>
                {t(
                    'Access public explorer reference, contract identity details, and developer structure from one connected section.',
                    '공개 익스플로러, 컨트랙트 식별 정보, 개발 구조 안내로 바로 연결되어 필요한 정보를 빠르게 확인할 수 있습니다.',
                    '公開されたエクスプローラーとの連携、コントラクト識別情報、および開発構造の案内に直接アクセスして、必要な情報を迅速に確認できます。',
                    '直接连接到公开浏览器、合约识别信息和开发结构指南，从而快速确认所需信息。'
                )}
                </p>
            </div>

            <div className="smart-contract-access">
                {accessCards.map((item, index) => {
                const Icon = item.icon;

                if (item.external) {
                    return (
                    <a
                        key={index}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="smart-contract-access__card"
                    >
                        <div className="smart-contract-access__icon">
                        <Icon size={18} />
                        </div>
                        <h3>{t(item.titleEn, item.titleKr, item.titleJa, item.titleZh)}</h3>
                        <p>{t(item.bodyEn, item.bodyKr, item.bodyJa, item.bodyZh)}</p>
                        <span className="smart-contract-access__arrow">
                        <ArrowRight size={16} />
                        </span>
                    </a>
                    );
                }

                return item.href.startsWith('/') ? (
                    <Link key={index} to={item.href} className="smart-contract-access__card">
                    <div className="smart-contract-access__icon">
                        <Icon size={18} />
                    </div>
                    <h3>{t(item.titleEn, item.titleKr, item.titleJa, item.titleZh)}</h3>
                    <p>{t(item.bodyEn, item.bodyKr, item.bodyJa, item.bodyZh)}</p>
                    <span className="smart-contract-access__arrow">
                        <ArrowRight size={16} />
                    </span>
                    </Link>
                ) : (
                    <a key={index} href={item.href} className="smart-contract-access__card">
                    <div className="smart-contract-access__icon">
                        <Icon size={18} />
                    </div>
                    <h3>{t(item.titleEn, item.titleKr, item.titleJa, item.titleZh)}</h3>
                    <p>{t(item.bodyEn, item.bodyKr, item.bodyJa, item.bodyZh)}</p>
                    <span className="smart-contract-access__arrow">
                        <ArrowRight size={16} />
                    </span>
                    </a>
                );
                })}
            </div>
            </div>
        </section>

        <section className="smart-contract-section">
            <div className="smart-contract-page__container-01">
            <div className="smart-contract-trust">
                <div className="smart-contract-trust__content">
                <span className="smart-contract-section__label">
                    {t('TRUST SURFACE', 'TRUST SURFACE', '信頼サーフェス', '信任层面')}
                </span>
                <h2>
                    {t(
                        'A structure that presents on-chain visibility and operational trust together',
                        '온체인 가시성과 운영 신뢰를\n함께 보여주는 구조',
                        'オンチェーンの可視性と運用の信頼性を共に示す構造',
                        '同时展示链上可见性和运营信誉的结构'
                    )}
                </h2>
                <p>
                    {t(
                        'The KORION smart contract page is designed to present public identity, policy control, service connectivity, and a premium protocol image within one coherent experience.',
                        'KORION 스마트 컨트랙트 페이지는 공개 식별성, 정책 통제, 서비스 연동성, 프리미엄 프로토콜 이미지를 하나의 흐름 안에서 전달하도록 설계되었습니다.',
                        'KORIONスマートコントラクトページは、公的な識別可能性、ポリシー統制、サービスの連携可能性、およびプレミアムなプロトコルのイメージを一貫したエクスペリエンスの中で提供するように設計されています。',
                        'KORION 智能合约页面旨在在连贯体验中提供公开识别性、政策管控、服务对接和优质协议形象。'
                    )}
                </p>
                </div>

                <div className="smart-contract-trust__grid">
                {trustCards.map((item, index) => {
                    const Icon = item.icon;
                    return (
                    <div className="smart-contract-trust__card" key={index}>
                        <div className="smart-contract-trust__icon">
                        <Icon size={18} />
                        </div>
                        <h3>{t(item.titleEn, item.titleKr, item.titleJa, item.titleZh)}</h3>
                        <p>{t(item.bodyEn, item.bodyKr, item.bodyJa, item.bodyZh)}</p>
                    </div>
                    );
                })}
                </div>
            </div>

            <div className="smart-contract-note">
                <div className="smart-contract-note__icon">
                <Sparkles size={18} />
                </div>
                <div className="smart-contract-note__body">
                <h3>{t('Note', '안내', '案内', '提示')}</h3>
                <p>
                    {t(
                        'This page is built around the KORION TRONSCAN link and contract address provided by the user. Detailed admin permissions, multisig coverage, and additional policy logic may be refined by operational version.',
                        '본 페이지는 사용자가 제공한 KORION Tronscan 링크 및 컨트랙트 주소를 기준으로 구성한 스마트 컨트랙트 구조 안내 페이지입니다. 배포 구조의 세부 관리자 권한, 멀티시그 적용 범위, 추가 정책 로직은 운영 버전에 따라 구체화될 수 있습니다.',
                        'このページは、ユーザーから提供されたKORIONのTronscanリンクとコントラクトアドレスに基づいて構成されています。詳細な管理者権限、マルチシグの適用範囲、および追加のポリシーロジックは、運用バージョンによって具体化される場合があります。',
                        '本页面是基于用户提供的 KORION Tronscan 链接和合约地址构建的智能合约结构指南页面。具体的管理员权限、多签适用范围以及其他政策逻辑可能会根据运营版本进行细化。'
                    )}
                </p>
                </div>
            </div>

            <div className="smart-contract-cta">
                <a
                href={TRONSCAN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="smart-contract-cta__button"
                >
                <span>{t('Open KORION TRONSCAN', 'KORION Tronscan 열기', 'KORIONのTronscanを開く', '打开 KORION Tronscan')}</span>
                <ArrowRight size={18} />
                </a>

                <a
                    href="/developers"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="smart-contract-cta__button smart-contract-cta__button--ghost"
                    >
                    <span>{t('Go to Developers', '개발자 페이지 이동', '開発者ページへ移動', '前往开发者页面')}</span>
                    <ArrowRight size={18} />
                </a>
            </div>
            </div>
        </section>
        </div>
    );
    }
