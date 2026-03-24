import { motion } from 'motion/react';
import {
  ArrowUpRight,
  BadgeCheck,
  CheckCircle2,
  ChevronRight,
  CircleDot,
  Clock3,
  CreditCard,
  Globe2,
  Layers3,
  RadioTower,
  Smartphone,
  Sparkles,
  Store,
  Wallet,
} from 'lucide-react';
import { Link } from 'react-router';
import { useLanguage } from '../contexts/LanguageContext';
import './RoadmapPage.css';

type RoadmapStatus = 'done' | 'current' | 'upcoming';
type RoadmapPriority = 'high' | 'core' | 'expansion' | 'vision';

type RoadmapItem = {
  step: string;
  year: string;
  quarter: string;
  periodEn: string;
  periodKo: string;
  periodJa: string;
  periodZh: string;
  titleEn: string;
  titleKo: string;
  titleJa: string;
  titleZh: string;
  descEn: string;
  descKo: string;
  descJa: string;
  descZh: string;
  bulletsEn: string[];
  bulletsKo: string[];
  bulletsJa: string[];
  bulletsZh: string[];
  icon: React.ComponentType<{ size?: number }>;
  status: RoadmapStatus;
  priority: RoadmapPriority;
};

const roadmapSteps: RoadmapItem[] = [
  {
    step: 'Phase 0',
    year: '2025',
    quarter: 'Q1',
    periodEn: 'Brand Foundation',
    periodKo: '브랜드 기반',
    periodJa: 'ブランドの基盤',
    periodZh: '品牌基础',
    titleEn: 'Official Website & Community Launch',
    titleKo: '공식 홈페이지 및 커뮤니티 구축',
    titleJa: '公式ウェブサイトとコミュニティの立ち上げ',
    titleZh: '官方网站及社区发布',
    descEn:
      'The official website and community channels are launched to establish brand identity, transparency, and early user communication.',
    descKo:
      '브랜드 아이덴티티와 초기 사용자 커뮤니케이션을 위해 공식 홈페이지와 커뮤니티 채널을 구축하는 단계입니다.',
    descJa:
      'ブランドのアイデンティティ、透明性、および初期のユーザーコミュニケーションを確立するために、公式ウェブサイトとコミュニティチャンネルが立ち上げられます。',
    descZh:
      '官方网站和社区渠道上线，建立品牌身份、透明度和早期用户沟通。',
    bulletsEn: ['Official website launch', 'Community channel setup', 'Early ecosystem visibility'],
    bulletsKo: ['공식 홈페이지 오픈', '커뮤니티 채널 구축', '초기 생태계 가시성 확보'],
    bulletsJa: ['公式ウェブサイトの立ち上げ', 'コミュニティチャンネルの設立', '初期エコシステムの可視性の確保'],
    bulletsZh: ['官方网站上线', '社区渠道建立', '早期生态系统的可见性保证'],
    icon: Globe2,
    status: 'done',
    priority: 'core',
  },
  {
    step: 'Phase 1',
    year: '2025',
    quarter: 'Q2',
    periodEn: 'Token Foundation',
    periodKo: '토큰 기반',
    periodJa: 'トークンの基盤',
    periodZh: '代币基础',
    titleEn: 'Token Launch & Treasury Setup',
    titleKo: '토큰 런치 및 트레저리 구조',
    titleJa: 'トークンの立ち上げと財務の構造',
    titleZh: '代币发布与财务结构',
    descEn:
      'The KORION token is deployed on TRON with treasury allocation and ecosystem reserve structures.',
    descKo:
      'KORION 토큰을 TRON 네트워크에 배포하고 트레저리 및 생태계 리저브 구조를 설정하는 단계입니다.',
    descJa:
      'KORIONトークンは、財務の配分とエコシステムの準備構造を伴ってTRON上に展開されます。',
    descZh:
      'KORION代币在TRON网络上部署，并设定财务分配和生态储备结构。',
    bulletsEn: ['Token deployment', 'Treasury allocation', 'Reserve structure'],
    bulletsKo: ['토큰 배포', '트레저리 할당', '리저브 구조 설정'],
    bulletsJa: ['トークンの展開', '財務の割り当て', '準備構造の設計'],
    bulletsZh: ['代币部署', '财务分配', '储备结构设计'],
    icon: Wallet,
    status: 'done',
    priority: 'high',
  },
  {
    step: 'Phase 2',
    year: '2025',
    quarter: 'Q2',
    periodEn: 'Wallet Infrastructure',
    periodKo: '지갑 인프라',
    periodJa: 'ウォレットのインフラ',
    periodZh: '钱包基础设施',
    titleEn: 'KORION Wallet Development',
    titleKo: 'KORION Wallet 개발',
    titleJa: 'KORION Walletの開発',
    titleZh: 'KORION钱包开发',
    descEn:
      'The KORION wallet becomes the central gateway for storage, transfers, mining participation, and ecosystem access.',
    descKo:
      'KORION Wallet을 보관, 전송, 마이닝 참여, 생태계 접근의 핵심 게이트웨이로 구축하는 단계입니다.',
    descJa:
      'KORIONウォレットは、保管、送金、モバイルマイニングの参加、エコシステムへのアクセスのための中心的なゲートウェイになります。',
    descZh:
      'KORION钱包成为存储、转账、移动挖矿参与和生态系统访问的核心网关。',
    bulletsEn: ['Asset storage', 'Deposit / withdrawal', 'Ecosystem gateway'],
    bulletsKo: ['자산 보관', '입출금 기능', '생태계 게이트웨이'],
    bulletsJa: ['資産の保管', '入出金機能', 'エコシステムのゲートウェイ'],
    bulletsZh: ['资产存储', '存取款功能', '生态系统网关'],
    icon: Smartphone,
    status: 'done',
    priority: 'high',
  },
  {
    step: 'Phase 3',
    year: '2025',
    quarter: 'Q3',
    periodEn: 'Participation Layer',
    periodKo: '참여 단계',
    periodJa: '参加のレイヤー',
    periodZh: '参与层',
    titleEn: 'Mobile Mining Activation',
    titleKo: '모바일 마이닝 활성화',
    titleJa: 'モバイルマイニングの活性化',
    titleZh: '移动挖矿激活',
    descEn:
      'Participation-based mining activates through the wallet to drive early ecosystem growth.',
    descKo:
      '월렛 기반 참여형 마이닝을 통해 초기 생태계 확장을 시작하는 단계입니다.',
    descJa:
      '参加ベースのマイニングがウォレットを通じて活性化され、初期のエコシステムの成長を促進します。',
    descZh:
      '通过钱包激活基于参与的挖矿，以推动早期生态系统的增长。',
    bulletsEn: ['Wallet mining', 'Reward distribution', 'User participation growth'],
    bulletsKo: ['월렛 마이닝', '보상 분배 구조', '사용자 참여 확대'],
    bulletsJa: ['ウォレットマイニング', '報酬の分配構造', 'ユーザー参加の成長'],
    bulletsZh: ['钱包挖矿', '奖励分配结构', '用户参与度增长'],
    icon: Smartphone,
    status: 'done',
    priority: 'core',
  },
  {
    step: 'Phase 4',
    year: '2026',
    quarter: 'Q1',
    periodEn: 'Liquidity Layer',
    periodKo: '유동성 단계',
    periodJa: '流動性レイヤー',
    periodZh: '流动性层',
    titleEn: 'DEX Listing',
    titleKo: 'DEX 상장',
    titleJa: 'DEX上場',
    titleZh: 'DEX上线',
    descEn:
      'Decentralized exchange listing enables external liquidity participation and price discovery.',
    descKo:
      '탈중앙화 거래소 상장을 통해 외부 유동성과 가격 발견이 가능해지는 단계입니다.',
    descJa:
      '分散型取引所への上場により、外部の流動性の参加と価格の発見が可能になります。',
    descZh:
      '去中心化交易所上线，实现外部流动性参与和价格发现。',
    bulletsEn: ['DEX trading', 'Liquidity pools', 'Market participation'],
    bulletsKo: ['DEX 거래', '유동성 풀', '시장 참여'],
    bulletsJa: ['DEXの取引', '流動性プール', '市場参加'],
    bulletsZh: ['DEX交易', '流动性池', '市场参与'],
    icon: Layers3,
    status: 'done',
    priority: 'high',
  },
  {
    step: 'Phase 4-1',
    year: '2026',
    quarter: 'Q4',
    periodEn: 'Platform Integration',
    periodKo: '플랫폼 통합',
    periodJa: 'プラットフォームの統合',
    periodZh: '平台整合',
    titleEn: 'Foxyya Platform Integration',
    titleKo: 'Foxyya 플랫폼 통합',
    titleJa: 'Foxyyaプラットフォームの統合',
    titleZh: 'Foxyya平台整合',
    descEn:
      'Token utility expands through integration with the Foxyya platform ecosystem.',
    descKo:
      'Foxyya 플랫폼과의 연동을 통해 토큰 유틸리티가 확장되는 단계입니다.',
    descJa:
      'Foxyyaプラットフォームのエコシステムとの統合により、トークンのユーティリティが拡大します。',
    descZh:
      '通过与Foxyya平台生态系统的整合，代币的实用性得以扩展。',
    bulletsEn: ['Platform integration', 'Service-layer demand', 'Utility expansion'],
    bulletsKo: ['플랫폼 연동', '서비스 수요 형성', '유틸리티 확장'],
    bulletsJa: ['プラットフォームの連動', 'サービスレイヤーの需要創出', 'ユーティリティの拡大'],
    bulletsZh: ['平台联动', '服务层的需求创造', '实用性扩展'],
    icon: RadioTower,
    status: 'current',
    priority: 'high',
  },



    {
    step: 'Phase 5',
    year: '2026',
    quarter: 'Q4',
    periodEn: 'Strategic Funding',
    periodKo: '전략 자금',
    periodJa: '戦略的資金の調達',
    periodZh: '战略资金筹集',
    titleEn: 'Strategic Presale Round',
    titleKo: '전략 프리세일',
    titleJa: '戦略的プレセールラウンド',
    titleZh: '战略预售轮',
    descEn:
      'Following platform readiness, a strategic presale may support ecosystem expansion and infrastructure growth.',
    descKo:
      '플랫폼 완성 이후 생태계 확장과 인프라 성장을 위한 전략적 프리세일을 진행하는 단계입니다.',
    descJa:
      'プラットフォームの準備が整った後、エコシステムの拡大とインフラの成長を支援するための戦略的プレセールが予定されています。',
    descZh:
      '在平台准备就绪后，计划进行战略预售以支持生态系统的扩展和基础设施的发展。',
    bulletsEn: ['Strategic funding', 'Ecosystem growth capital', 'Infrastructure expansion'],
    bulletsKo: ['전략적 자금 확보', '생태계 성장 재원', '인프라 확장'],
    bulletsJa: ['戦略的資金の確保', 'エコシステム成長のための資本', 'インフラの拡大'],
    bulletsZh: ['战略资金支持', '生态系统成长的资本', '基础设施的扩展'],
    icon: BadgeCheck,
    status: 'upcoming',
    priority: 'core',
  },
  {
    step: 'Phase 6',
    year: '2026',
    quarter: 'Q1',
    periodEn: 'Payment Layer',
    periodKo: '결제 단계',
    periodJa: '決済レイヤー',
    periodZh: '支付层',
    titleEn: 'KORION Pay Deployment',
    titleKo: 'KORION Pay 배포',
    titleJa: 'KORION Payの展開',
    titleZh: 'KORION Pay部署',
    descEn:
      'Following DEX activation, KORION Pay expands token utility for peer-to-peer and service transactions.',
    descKo:
      'DEX 활성화 이후 KORION Pay를 통해 토큰의 P2P 결제 및 서비스 결제 유틸리티를 확장하는 단계입니다.',
    descJa:
      'DEXの活性化の後、KORION Payにより、ピアツーピアおよびサービス取引のためのトークンユーティリティが拡大します。',
    descZh:
      '随着DEX生态的激活，KORION Pay的部署将进一步扩大针对P2P和服务的代币应用。',
    bulletsEn: ['P2P payments', 'Service-linked payments', 'Utility after DEX activation'],
    bulletsKo: ['P2P 결제', '서비스 연동 결제', 'DEX 이후 실사용 확대'],
    bulletsJa: ['P2P決済', 'サービス連動型の決済', 'DEX活性化後のユーティリティ'],
    bulletsZh: ['P2P支付', '联动服务支付', 'DEX激活后的效用'],
    icon: CreditCard,
    status: 'upcoming',
    priority: 'high',
  },
  {
    step: 'Phase 7',
    year: '2026',
    quarter: 'Q2',
    periodEn: 'Offline Payment Development',
    periodKo: '오프라인 결제 개발',
    periodJa: 'オフライン決済の開発',
    periodZh: '线下支付开发',
    titleEn: 'Offline Payment Development',
    titleKo: '오프라인 결제 개발',
    titleJa: 'オフライン決済の開発',
    titleZh: '线下支付开发',
    descEn:
      'After payment deployment, the project develops offline-capable payment logic for low-connectivity transaction scenarios.',
    descKo:
      '결제 배포 이후 저연결 환경에서도 동작 가능한 오프라인 결제 로직을 개발하는 단계입니다.',
    descJa:
      '決済展開の後、通信環境が悪い取引シナリオにも対応できるよう、オフラインで機能する決済ロジックを開発します。',
    descZh:
      '支付部署后，项目将开发具备离线功能的支付逻辑，以满足低连接环境下的交易场景。',
    bulletsEn: ['Offline payment logic', 'Deferred sync model', 'Field transaction usability'],
    bulletsKo: ['오프라인 결제 로직', '지연 동기화 구조', '현장 결제 활용성'],
    bulletsJa: ['オフライン決済のロジック', '遅延同期のモデル', '現場での取引における利便性'],
    bulletsZh: ['离线支付逻辑', '延迟同步模型', '现场交易实用性'],
    icon: Store,
    status: 'upcoming',
    priority: 'core',
  },
  {
    step: 'Phase 8',
    year: '2026',
    quarter: 'Q2',
    periodEn: 'Offline Payment Infrastructure',
    periodKo: '오프라인 결제 인프라',
    periodJa: 'オフライン決済のインフラ',
    periodZh: '线下支付基础设施',
    titleEn: 'Offline Payment Infrastructure',
    titleKo: '오프라인 결제 인프라',
    titleJa: 'オフライン決済のインフラ',
    titleZh: '线下支付基础设施',
    descEn:
      'The supporting infrastructure for offline payment settlement, reconciliation, and secure transaction handling is established.',
    descKo:
      '오프라인 결제 정산, 정합성 검증, 보안 처리까지 포함하는 인프라를 구축하는 단계입니다.',
    descJa:
      'オフライン決済の精算、照合、安全な取引処理をサポートするためのインフラが確立されます。',
    descZh:
      '建立支持线下支付结算、核对和安全交易处理的基础设施。',
    bulletsEn: ['Settlement infrastructure', 'Secure reconciliation', 'Merchant-ready framework'],
    bulletsKo: ['정산 인프라', '보안 정합성 검증', '가맹점 대응 프레임'],
    bulletsJa: ['精算のインフラ', '安全な照合の検証', '加盟店対応のフレームワーク'],
    bulletsZh: ['结算基础设施', '安全对账验证', '满足商家需求的框架'],
    icon: Store,
    status: 'upcoming',
    priority: 'core',
  },
  {
    step: 'Phase 9',
    year: '2026',
    quarter: 'Q2',
    periodEn: 'Developer Infrastructure',
    periodKo: '개발 인프라',
    periodJa: '開発者インフラ',
    periodZh: '开发者基础设施',
    titleEn: 'API Development & Developer Portal',
    titleKo: 'API 개발 및 개발자 포털',
    titleJa: 'APIの開発と開発者ポータル',
    titleZh: 'API开发与开发者门户',
    descEn:
      'Backend APIs and developer documentation are released to enable ecosystem integration.',
    descKo:
      '생태계 연동을 위해 백엔드 API와 개발자 문서를 공개하는 단계입니다.',
    descJa:
      'エコシステムの統合を可能にするため、バックエンドのAPIと開発者向けのドキュメントが公開されます。',
    descZh:
      '发布后端API和开发者文档以实现生态系统集成。',
    bulletsEn: ['Wallet API', 'Payment API', 'Developer documentation'],
    bulletsKo: ['월렛 API', '결제 API', '개발 문서'],
    bulletsJa: ['ウォレットAPI', '決済API', '開発者向けドキュメント'],
    bulletsZh: ['钱包API', '支付API', '开发文档'],
    icon: ChevronRight,
    status: 'current',
    priority: 'high',
  },
  {
    step: 'Phase 10',
    year: '2026',
    quarter: 'Q3',
    periodEn: 'Market Expansion',
    periodKo: '시장 확장',
    periodJa: '市場の拡大',
    periodZh: '市场扩展',
    titleEn: 'CEX Listing',
    titleKo: 'CEX 상장',
    titleJa: 'CEX上場',
    titleZh: 'CEX上线',
    descEn:
      'Centralized exchange listings expand market accessibility and liquidity depth.',
    descKo:
      '중앙화 거래소 상장을 통해 시장 접근성과 유동성을 확대하는 단계입니다.',
    descJa:
      '中央集権型取引所への上場により、市場へのアクセスと流動性の深さが拡大します。',
    descZh:
      '中心化交易所上线从而扩大市场机会和流动性深度。',
    bulletsEn: ['Global exchange access', 'Market visibility', 'Liquidity depth'],
    bulletsKo: ['글로벌 거래소 접근', '시장 가시성', '유동성 확대'],
    bulletsJa: ['グローバル取引所へのアクセス', '市場の可視性', '流動性の拡大'],
    bulletsZh: ['全球交易平台', '市场关注度', '高度流动性'],
    icon: Globe2,
    status: 'current',
    priority: 'high',
  },
  {
    step: 'Phase 11',
    year: '2026',
    quarter: 'Q4',
    periodEn: 'Market Platform',
    periodKo: '마켓플랫폼',
    periodJa: '市場プラットフォーム',
    periodZh: '市场平台',
    titleEn: 'Market Platform Development',
    titleKo: '마켓플랫폼 개발',
    titleJa: '市場プラットフォームの開発',
    titleZh: '市场平台开发',
    descEn:
      'Following broader exchange visibility, the ecosystem expands into a market platform layer for product, service, and transactional utility.',
    descKo:
      '거래소 확장 이후 상품, 서비스, 거래 유틸리티를 연결하는 마켓플랫폼 레이어를 개발하는 단계입니다.',
    descJa:
      'より広い取引所の可視性の後、エコシステムは商品、サービス、取引ユーティリティのための市場プラットフォームレイヤーへと拡大します。',
    descZh:
      '在获得更广泛的交易所支持后，生态系统将扩展至市场平台层，用以满足产品、服务和交易的用途。',
    bulletsEn: ['Marketplace architecture', 'Service utility layer', 'Transaction ecosystem'],
    bulletsKo: ['마켓플레이스 구조', '서비스 유틸리티 레이어', '거래 생태계 확장'],
    bulletsJa: ['市場インフラの構造', 'サービス・ユーティリティ・レイヤー', '取引エコシステムの拡張'],
    bulletsZh: ['市场基础结构', '服务及效用层面', '全方位交易的生态圈'],
    icon: Layers3,
    status: 'upcoming',
    priority: 'expansion',
  },
  {
    step: 'Phase 12',
    year: '2027',
    quarter: 'Q4',
    periodEn: 'Exchange Platform',
    periodKo: '거래소 개발',
    periodJa: '取引プラットフォーム',
    periodZh: '交易平台',
    titleEn: 'Exchange Platform Development',
    titleKo: '거래소 개발',
    titleJa: '取引プラットフォームの開発',
    titleZh: '交易平台开发',
    descEn:
      'After CEX-level market expansion, a dedicated exchange platform development phase is initiated for broader ecosystem control and service integration.',
    descKo:
      'CEX 단계 이후 더 넓은 생태계 통제와 서비스 통합을 위해 자체 거래소 개발을 추진하는 단계입니다.',
    descJa:
      'CEXレベルでの市場拡大の後、より広範なエコシステムの制御とサービス統合のために、専用の取引プラットフォームの開発段階が開始されます。',
    descZh:
      '在CEX级别的市场扩展之后，启动专用于交易平台开发的阶段，以实现更广泛的生态系统控制和服务集成。',
    bulletsEn: ['Exchange platform planning', 'Trading service architecture', 'Liquidity control framework'],
    bulletsKo: ['거래소 플랫폼 기획', '거래 서비스 아키텍처', '유동성 통제 프레임'],
    bulletsJa: ['取引所プラットフォームの計画', '取引サービスのアーキテクチャ', '流動性管理フレームワーク'],
    bulletsZh: ['交易所平台制定计划', '交易服务构架', '流动性控制架构平台'],
    icon: RadioTower,
    status: 'upcoming',
    priority: 'expansion',
  },
  {
    step: 'Phase 13',
    year: '2027',
    quarter: 'Q1',
    periodEn: 'Contract Architecture',
    periodKo: '컨트랙트 구조',
    periodJa: 'コントラクト・アーキテクチャ',
    periodZh: '智能合约架构',
    titleEn: 'Multi-Contract Deployment',
    titleKo: '멀티 컨트랙트 배포',
    titleJa: 'マルチコントラクトのデプロイ',
    titleZh: '多合约部署',
    descEn:
      'The ecosystem evolves toward modular smart contract architecture for payments, services, and rewards.',
    descKo:
      '결제, 서비스, 보상 기능을 위한 모듈형 스마트컨트랙트 구조로 확장하는 단계입니다.',
    descJa:
      'エコシステムは、決済、サービス、報酬のためのモジュール式スマートコントラクト・アーキテクチャに向けて進化します。',
    descZh:
      '围绕付款、服务和奖励功能的模块化智能合约架构开始在生态系统中进行转型。',
    bulletsEn: ['Modular contracts', 'Service modules', 'Operational separation'],
    bulletsKo: ['모듈형 컨트랙트', '서비스 모듈', '기능 분리'],
    bulletsJa: ['モジュール型コントラクト', 'サービス・モジュール', '運用の分離'],
    bulletsZh: ['模块化合约', '服务模块', '功能分离及自主管理'],
    icon: Layers3,
    status: 'upcoming',
    priority: 'core',
  },
  {
    step: 'Phase 14',
    year: '2027',
    quarter: 'Q2',
    periodEn: 'Cross-Chain Expansion',
    periodKo: '크로스체인 확장',
    periodJa: 'クロスチェーンの拡大',
    periodZh: '跨链扩展',
    titleEn: 'Expansion Beyond TRON',
    titleKo: 'TRON 이후 체인 확장',
    titleJa: 'TRONを超えた拡張',
    titleZh: '跳出波场链的跨链扩张',
    descEn:
      'Future expansion explores interoperability with additional blockchain networks.',
    descKo:
      '추가 블록체인 네트워크와의 상호운용성을 확장하는 단계입니다.',
    descJa:
      '将来の拡張により、追加のブロックチェーンネットワークとの相互運用性が探求されます。',
    descZh:
      '在未来的可开拓性内去研究与其它的相互操作链的链接功能及其可实行性。',
    bulletsEn: ['Multi-chain support', 'Cross-chain bridges', 'Expanded utility'],
    bulletsKo: ['멀티체인 지원', '크로스체인 브리지', '유틸리티 확장'],
    bulletsJa: ['マルチチェーンのサポート', 'クロスチェーン・ブリッジ', 'ユーティリティの拡大'],
    bulletsZh: ['多链网络支持', '跨链桥接工作', '网络扩张及效用延展'],
    icon: ArrowUpRight,
    status: 'upcoming',
    priority: 'expansion',
  },
  {
    step: 'Phase 15',
    year: '2027',
    quarter: 'Q3',
    periodEn: 'Distributed Network Layer',
    periodKo: '분산 네트워크 레이어',
    periodJa: '分散型ネットワークレイヤー',
    periodZh: '分布式网络层',
    titleEn: 'CDNS Development',
    titleKo: 'CDNS 개발',
    titleJa: 'CDNSの開発',
    titleZh: 'CDNS开发',
    descEn:
      'A CDNS layer is developed before mainnet evolution to strengthen distributed service delivery, content/network resilience, and broader ecosystem infrastructure readiness.',
    descKo:
      '메인넷 개발 이전에 분산 서비스 전달, 콘텐츠/네트워크 복원력, 생태계 인프라 준비도를 높이기 위해 CDNS를 개발하는 단계입니다.',
    descJa:
      'メインネットの進化の前に、分散サービス配信、コンテンツ・ネットワークの復元力、より広範なエコシステムのインフラの準備を強化するためにCDNSレイヤーが開発されます。',
    descZh:
      '在主网开发之前开发和部署CDNS，去增强其弹性、拓展和生态层相关的基础框架等准备的完整度。',
    bulletsEn: ['Distributed delivery layer', 'Infrastructure resilience', 'Pre-mainnet network readiness'],
    bulletsKo: ['분산 전달 레이어', '인프라 복원력', '메인넷 이전 네트워크 준비'],
    bulletsJa: ['分散型配信レイヤー', 'インフラの復元力', 'メインネットの事前ネットワークの準備'],
    bulletsZh: ['分散交付系统设计层面', '网络架构等相关的容错力', '上主网的前置筹划等准备工作'],
    icon: RadioTower,
    status: 'upcoming',
    priority: 'core',
  },
  {
    step: 'Phase 16',
    year: '2027',
    quarter: 'Q4',
    periodEn: 'Protocol Evolution',
    periodKo: '프로토콜 진화',
    periodJa: 'プロトコルの進化',
    periodZh: '主网协议升级',
    titleEn: 'KORION Mainnet Development',
    titleKo: 'KORION 메인넷 개발',
    titleJa: 'KORIONメインネットの開発',
    titleZh: 'KORION主网部署研究',
    descEn:
      'The project evaluates an independent blockchain infrastructure to support ecosystem sovereignty.',
    descKo:
      '생태계 독립성을 위한 자체 블록체인 인프라 개발을 검토하는 단계입니다.',
    descJa:
      'プロジェクトでは、エコシステムの主権をサポートするための独立したブロックチェーンインフラストラクチャーについて評価・検討します。',
    descZh:
      '审查跟探讨为支持自主生态发展的去中心化底层公链技术研究开发以及可行性报告的撰写。',
    bulletsEn: ['Protocol independence', 'Infrastructure control', 'Network scalability'],
    bulletsKo: ['프로토콜 독립성', '인프라 통제', '네트워크 확장성'],
    bulletsJa: ['プロトコルの独立性', 'インフラの制御', 'ネットワークの拡張性'],
    bulletsZh: ['专属的协议自治能力', '区块链的基础运行研究', '网络的超强拓展延伸性'],
    icon: Globe2,
    status: 'upcoming',
    priority: 'high',
  },
  {
    step: 'Phase 17',
    year: '2028+',
    quarter: 'VISION',
    periodEn: 'Global Reserve Vision',
    periodKo: '기축 자산 비전',
    periodJa: 'グローバル準備金のビジョン',
    periodZh: '全球储备资产愿景',
    titleEn: 'KORION as a Strategic Reserve Asset',
    titleKo: '기축 코인 목표',
    titleJa: '戦略的準備資産としてのKORION',
    titleZh: '将KORION作为战略储备',
    descEn:
      'The long-term ambition is to position KORION as a widely used ecosystem settlement asset.',
    descKo:
      '장기적으로 KORION을 생태계 핵심 정산 자산으로 성장시키는 단계입니다.',
    descJa:
      '長期的な野望は、KORIONを広く使用されるエコシステム決済資産として位置づけることです。',
    descZh:
      '愿景将致力于打造及奠定其地位为一个可以被普及的及作为该网络的支付或结算凭证的数字资产。',
    bulletsEn: ['Settlement asset', 'Ecosystem reserve role', 'Global adoption'],
    bulletsKo: ['정산 자산', '생태계 리저브 역할', '글로벌 채택'],
    bulletsJa: ['決済用資産', 'エコシステムの準備金としての役割', '世界的な採用'],
    bulletsZh: ['作为网络及生态的核算凭证', '担负及履行其生态的储备地位以及意义角色', '在全球范围内的被使用采用的宽广度和深度'],
    icon: BadgeCheck,
    status: 'upcoming',
    priority: 'vision',
  },
];



function getStatusIcon(status: RoadmapStatus) {
  if (status === 'done') return CheckCircle2;
  if (status === 'current') return Clock3;
  return CircleDot;
}

export function RoadmapPage() {
  const { language, t } = useLanguage();

  const getStatusLabel = (status: RoadmapStatus) => {
    if (status === 'done') return t('Completed', '완료', '完了', '已完成');
    if (status === 'current') return t('In Progress', '진행중', '進行中', '进行中');
    return t('Upcoming', '예정', '予定', '即将到来');
  };

  const getPriorityLabel = (priority: RoadmapPriority) => {
    if (priority === 'high') return t('HIGH', '핵심 우선', '重要', '重要');
    if (priority === 'core') return t('CORE', '핵심', 'コア', '核心');
    if (priority === 'expansion') return t('EXPANSION', '확장', '拡張', '扩展');
    return t('VISION', '비전', 'ビジョン', '愿景');
  };

  const completedCount = roadmapSteps.filter((item) => item.status === 'done').length;
  const currentCount = roadmapSteps.filter((item) => item.status === 'current').length;
  const upcomingCount = roadmapSteps.filter((item) => item.status === 'upcoming').length;

  const progressPercent =
    roadmapSteps.length > 0
      ? Math.round((completedCount / roadmapSteps.length) * 100)
      : 0;

  return (
    <div className="roadmap-page">
      <div className="roadmap-page__bg">
        <div className="roadmap-page__orb roadmap-page__orb--one" />
        <div className="roadmap-page__orb roadmap-page__orb--two" />
        <div className="roadmap-page__orb roadmap-page__orb--three" />
        <div className="roadmap-page__grid" />
        <div className="roadmap-page__beam roadmap-page__beam--left" />
        <div className="roadmap-page__beam roadmap-page__beam--right" />
      </div>

      <section className="roadmap-hero">
        <div className="roadmap-page__container">
          <motion.div
            className="roadmap-hero__content"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <div className="roadmap-hero__eyebrow">
              <span className="roadmap-hero__eyebrow-dot" />
              {t('Whitepaper-Based Roadmap', '백서 기반 로드맵', 'ホワイトペーパーベースのロードマップ', '基于白皮书的路线图')}
            </div>

            <h1 className="roadmap-hero__title">
              {t(
                'Execution stages and expansion strategy of the KORION ecosystem',
                'KORION 생태계의 실행 단계와 확장 전략',
                'KORION エコシステムの実行段階と拡張戦略',
                'KORION 生态系统的执行阶段和扩展策略'
              )}
            </h1>

            <p className="roadmap-hero__description">
              {t(
                'A premium execution timeline built around the whitepaper roadmap, clearly separating completed, active, and upcoming phases while visualizing year, quarter, execution priority, and long-term expansion vision.',
                '백서 기반 로드맵을 중심으로 완료, 진행중, 예정 단계를 정교하게 구분하고 연도·분기 흐료, 실행 우선순위, 미래 확장 비전까지 한눈에 보여주는 초프리미엄 타임라인입니다.',
                'ホワイトペーパーのロードマップを中心に構築されたプレミアムな実行タイムライン。完了、進行中、予定のフェーズを明確に分離し、年、四半期、実行の優先順位、長期的な拡張ビジョンを視覚化します。',
                '围绕白皮书路线图构建的优质执行时间线，清晰区分已完成、进行中和即将开始的阶段，同时可视化年度、季度、执行优先级和长期扩张愿景。'
              )}
            </p>

            <motion.div
              className="roadmap-progress"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <div className="roadmap-progress__head">
                <span>{t('Roadmap Progress', '로드맵 진행률', 'ロードマップの進捗', '路线图进度')}</span>
                <strong>
                  {completedCount}/{roadmapSteps.length} {t('completed', '완료', '完了', '已完成')}
                </strong>
              </div>

              <div className="roadmap-progress__track">
                <motion.div
                  className="roadmap-progress__fill"
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercent}%` }}
                  transition={{ duration: 1.1, delay: 0.3, ease: 'easeOut' }}
                />
              </div>

              <div className="roadmap-progress__meta">
                <span>{progressPercent}%</span>
                <span>
                  {t(
                    'Premium highlight applied to completed milestones',
                    '완료 구간 프리미엄 강조 적용',
                    '完了したマイルストーンにプレミアムハイライトを適用',
                    '已完成里程碑应用优质高亮'
                  )}
                </span>
              </div>

              <div className="roadmap-progress__stats">
                <div className="roadmap-progress__stat roadmap-progress__stat--done">
                  <span>{t('Completed', '완료', '完了', '已完成')}</span>
                  <strong>{completedCount}</strong>
                </div>
                <div className="roadmap-progress__stat roadmap-progress__stat--current">
                  <span>{t('In Progress', '진행중', '進行中', '进行中')}</span>
                  <strong>{currentCount}</strong>
                </div>
                <div className="roadmap-progress__stat roadmap-progress__stat--upcoming">
                  <span>{t('Upcoming', '예정', '予定', '即将到来')}</span>
                  <strong>{upcomingCount}</strong>
                </div>
              </div>
            </motion.div>

            <div className="roadmap-hero__actions">
              <Link to="/explorer" className="roadmap-hero__button roadmap-hero__button--primary">
                {t('View Explorer', 'Explorer 보기', 'エクスプローラーを見る', '查看浏览器')}
                <ArrowUpRight size={18} />
              </Link>

              <Link to="/tokenomics" className="roadmap-hero__button roadmap-hero__button--secondary">
                {t('View Tokenomics', '토크노믹스 보기', 'トークノミクスを見る', '查看代币经济学')}
                <ChevronRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="roadmap-timeline-section">
        <div className="roadmap-page__container">
          <div className="roadmap-timeline">
            {roadmapSteps.map((item, index) => {
              const Icon = item.icon;
              const StatusIcon = getStatusIcon(item.status);

              const prevYear = index > 0 ? roadmapSteps[index - 1].year : null;
              const showYearDivider = prevYear !== item.year;
              // const isCurrent = item.status === 'current';
              // const yearStats = getYearStats(item.year);

              return (
                <div key={item.step}>
                  {showYearDivider && (
                    <motion.div
                      className="roadmap-year-divider"
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35 }}
                    >
                      <div className="roadmap-year-divider__rail-label">
                        <span>{item.year}</span>
                      </div>
                    </motion.div>
                  )}

                  <motion.article
                    className={`roadmap-timeline__item roadmap-timeline__item--${item.status}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.12 }}
                    transition={{ duration: 0.42, delay: index * 0.03 }}
                  >
                    <div className="roadmap-timeline__rail">
                      <div className="roadmap-timeline__gauge">
                        <div className="roadmap-timeline__gauge-track" />
                        <div className="roadmap-timeline__gauge-glow" />
                      </div>

                      <div className={`roadmap-timeline__node roadmap-timeline__node--${item.status}`}>
                        <div className="roadmap-timeline__node-halo" />
                        <div className="roadmap-timeline__node-core">
                          <Icon size={18} />
                        </div>
                      </div>

                      {item.status === 'current' && <div className="roadmap-timeline__active-beam" />}

                      {index !== roadmapSteps.length - 1 && (
                        <div className="roadmap-timeline__line" />
                      )}
                    </div>

                    <div className={`roadmap-card roadmap-card--${item.status}`}>
                      {item.status === 'done' && (
                        <motion.div
                          className="roadmap-card__shine"
                          animate={{ x: ['-140%', '160%'] }}
                          transition={{
                            duration: 3.1,
                            repeat: Infinity,
                            repeatDelay: 2.2,
                            ease: 'easeInOut',
                          }}
                        />
                      )}

                      <div className="roadmap-card__top">
                        <div className="roadmap-card__phase">
                          <span>{item.step}</span>
                          <strong>
                            {language === 'KR' ? item.periodKo : language === 'JA' ? item.periodJa : language === 'ZH' ? item.periodZh : item.periodEn} : {language === 'KR' ? item.titleKo : language === 'JA' ? item.titleJa : language === 'ZH' ? item.titleZh : item.titleEn}
                          </strong>
                        </div>
                        
                        <div className={`roadmap-card__badge roadmap-card__badge--${item.status}`}>
                          <StatusIcon size={14} />
                          <span>{getStatusLabel(item.status)}</span>
                        </div>
                      </div>
                      <p className="roadmap-card__desc">
                        {language === 'KR' ? item.descKo : language === 'JA' ? item.descJa : language === 'ZH' ? item.descZh : item.descEn}
                      </p>
                      
                      <div className="roadmap-card__bullets">
                        {(language === 'KR' ? item.bulletsKo : language === 'JA' ? item.bulletsJa : language === 'ZH' ? item.bulletsZh : item.bulletsEn).map((bullet, bulletIndex) => (
                          <motion.div
                            key={`${item.step}-${bulletIndex}`}
                            className="roadmap-card__bullet"
                            initial={{ opacity: 0, x: -8 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.08 * bulletIndex }}
                          >
                            <BadgeCheck size={15} />
                            <span>{bullet}</span>
                          </motion.div>
                        ))}
                      </div>

                      {item.status === 'done' && (
                        <div className="roadmap-card__footer roadmap-card__footer--done">
                          <CheckCircle2 size={16} />
                          <span>{t('Completed milestone', '완료 단계', '完了したマイルストーン', '已完成里程碑')}</span>
                        </div>
                      )}

                      {item.status === 'current' && (
                        <div className="roadmap-card__footer roadmap-card__footer--current">
                          <Clock3 size={16} />
                          <span>{t('Current focus milestone', '현재 집중 구간', '現在の注力マイルストーン', '当前重点里程碑')}</span>
                        </div>
                      )}

                      {item.status === 'upcoming' && (
                        <div className="roadmap-card__footer roadmap-card__footer--upcoming">
                          <CircleDot size={16} />
                          <span>{t('Upcoming milestone', '예정 단계', '今後のマイルストーン', '即将到来的里程碑')}</span>
                        </div>
                      )}
                    </div>
                  </motion.article>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}