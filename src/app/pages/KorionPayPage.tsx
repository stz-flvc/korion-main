import { motion } from 'motion/react';
import {
  WifiOff,
  Globe,
  ShieldCheck,
  Smartphone,
  CreditCard,
  ServerCog,
  LockKeyhole,
  Landmark,
  ArrowRight,
  CheckCircle2,
  Layers3,
  Cable,
  BadgeCheck,
  Coins,
  Building2,
  Plane,
  Ship,
  Mountain,
  Store,
  Cpu,
  RefreshCw,
  Wallet,
  Radio,
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import './KorionPayPage.css';
import korionLogo from '../../assets/logo/logo.png'

const offlineFeatures = [
  {
    icon: WifiOff,
    titleEn: 'No Network Required',
    titleKr: '네트워크 불필요',
    titleJa: 'ネットワーク不要',
    titleZh: '无需网络',
    descEn:
      'Payments can be completed without network connectivity, enabling operation even during outages, weak-signal zones, and disaster environments.',
    descKr:
      '통신망 연결 없이도 결제가 성립되는 구조로, 장애·음영지역·재난 환경에서도 작동합니다.',
    descJa: '通信ネットワークへの接続なしに決済が完了する構造で、障害、電波の届かない場所、災害環境でも動作します。',
    descZh: '无需网络连接即可完成支付，即使在停电、信号微弱区域和灾难环境中也能运行。',
  },
  {
    icon: Smartphone,
    titleEn: 'Phone-to-Phone Payment',
    titleKr: '스마트폰 간 직접 결제',
    titleJa: 'スマートフォン間直接決済',
    titleZh: '手机对手机支付',
    descEn:
      'Payments are executed directly between smartphones without POS terminals or separate authorization servers.',
    descKr:
      'POS 단말기나 별도 승인 서버 없이 스마트폰과 스마트폰만으로 직접 결제를 수행합니다.',
    descJa: 'POS端末や別途承認サーバーを介さず、スマートフォン同士で直接決済を行います。',
    descZh: '支付直接在智能手机之间执行，无需 POS 终端或单独的授权服务器。',
  },
  {
    icon: ShieldCheck,
    titleEn: 'TEE Security',
    titleKr: 'TEE 보안 구조',
    titleJa: 'TEEセキュリティ構造',
    titleZh: 'TEE 安全架构',
    descEn:
      'Transactions are created and verified inside the device’s Trusted Execution Environment, isolated from ordinary applications.',
    descKr:
      '단말 내부 TEE(Trusted Execution Environment)를 활용해 외부 앱이 접근할 수 없는 보안 영역에서 거래를 생성·검증합니다.',
    descJa: 'デバイス内部のTEE（Trusted Execution Environment）を活用し、外部アプリがアクセスできないセキュア領域で取引を作成・検証します。',
    descZh: '交易在设备的受信任执行环境中创建和验证，与普通应用程序隔离。',
  },
  {
    icon: LockKeyhole,
    titleEn: 'Double-Spend Resistant',
    titleKr: '이중지불 저항 구조',
    titleJa: '二重支払い防止構造',
    titleZh: '防双重支付结构',
    descEn:
      'A monotonic counter and hash-chain design help resist rollback, tampering, and duplicate spending attempts.',
    descKr:
      '단조 카운터(Monotonic Counter)와 Hash-Chain 구조를 통해 거래 롤백·위변조·중복 사용을 어렵게 설계합니다.',
    descJa: 'モノトニックカウンターとハッシュチェーン構造により、取引のロールバック・改ざん・重複使用を防ぐように設計されています。',
    descZh: '单调计数器和哈希链设计有助于抵御回滚、篡改和重复支出尝试。',
  },
];

const onlineFeatures = [
  {
    icon: Globe,
    titleEn: 'Connected Digital Payment',
    titleKr: '연결형 디지털 결제',
    titleJa: '接続型デジタル決済',
    titleZh: '联网数字支付',
    descEn:
      'In connected environments, KORION Wallet supports real-time payments, settlement, and service expansion.',
    descKr:
      '온라인 환경에서는 KORION Wallet과 연동되어 실시간 결제, 정산, 서비스 확장을 지원합니다.',
    descJa: 'オンライン環境では、KORIONウォレットと連動し、リアルタイム決済、精算、サービス拡張をサポートします。',
    descZh: '在联网环境中，KORION 钱包支持实时支付、结算和服务扩展。',
  },
  {
    icon: ServerCog,
    titleEn: 'Merchant & Platform Ready',
    titleKr: '상점 및 플랫폼 대응',
    titleJa: '加盟店およびプラットフォーム対応',
    titleZh: '商户与平台准备就绪',
    descEn:
      'It supports diverse online scenarios such as commerce, app services, recurring payments, and digital product checkout.',
    descKr:
      '커머스, 앱 서비스, 정기 결제, 디지털 상품 결제 등 다양한 온라인 사용 시나리오에 대응합니다.',
    descJa: 'コマース、アプリサービス、定期決済、デジタル商品決済など、多様なオンライン使用シナリオに対応します。',
    descZh: '它支持多种在线场景，如电子商务、应用服务、定期付款和数字产品结账。',
  },
  {
    icon: Wallet,
    titleEn: 'User-Centric UX',
    titleKr: '사용자 중심 UX',
    titleJa: 'ユーザー中心のUX',
    titleZh: '以用户为中心的 UX',
    descEn:
      'A simplified payment experience reduces friction for ordinary users by minimizing address entry and network complexity.',
    descKr:
      '복잡한 주소 입력과 네트워크 확인을 최소화한 직관적 결제 경험으로 일반 사용자 진입장벽을 낮춥니다.',
    descJa: '複雑なアドレス入力やネットワーク確認を最小限に抑えた直感的な決済体験により、一般ユーザーの参入障壁を下げます。',
    descZh: '通过简化地址输入和网络复杂性，为普通用户提供简化的支付体验，减少摩擦。',
  },
  {
    icon: RefreshCw,
    titleEn: 'Settlement & Sync',
    titleKr: '정산 및 동기화',
    titleJa: '精算および同期',
    titleZh: '结算与同步',
    descEn:
      'In online mode, transaction history sync, state updates, service integration, and settlement are handled seamlessly.',
    descKr:
      '온라인 구간에서는 거래 이력 동기화, 상태 반영, 서비스 연동, 정산 흐름을 자연스럽게 처리합니다.',
    descJa: 'オンライン区間では、取引履歴の同期、ステータスの反映、サービス連動、精算フローをシームレスに処理します。',
    descZh: '在在线模式下，交易历史同步、状态更新、服务集成和结算将无缝处理。',
  },
];

const patentedPoints = [
  {
    titleEn: 'TEE-Based Secure Execution Layer',
    titleKr: 'TEE 기반 보안 실행 영역',
    titleJa: 'TEEベースのセキュア実行レイヤー',
    titleZh: '基于 TEE 的安全执行层',
    descEn:
      'Payment generation and verification are designed to run inside the device’s trusted execution environment for stronger security than ordinary app-level logic.',
    descKr:
      '결제 생성과 검증 로직을 단말의 신뢰 실행 환경 내부에서 수행하도록 설계하여, 일반 앱 레벨보다 높은 보안성을 목표로 합니다.',
    descJa: '決済の生成と検証ロジックをデバイスの信頼実行環境内部で実行するように設計し、一般的なアプリレベルよりも高いセキュリティを目指します。',
    descZh: '支付生成和验证设计在设备的受信任执行环境中运行，提供比普通应用级逻辑更强的安全性。',
  },
  {
    titleEn: 'State Irreversibility with Monotonic Counter',
    titleKr: '이중지불 저항 구조',
    titleJa: 'モノトニックカウンターによる状態の不可逆性',
    titleZh: '具有单调计数器的状态不可逆性',
    descEn:
      'A one-way counter structure keeps transaction order irreversible, reflecting a core concept for reducing double-spend risk in offline environments.',
    descKr:
      '거래 순서를 되돌릴 수 없는 단방향 카운터 구조로 유지하여 오프라인 환경에서도 이중지불 위험을 줄이는 방향의 핵심 개념을 반영합니다.',
    descJa: '取引順序を元に戻せない一方向カウンター構造で維持し、オフライン環境でも二重支払いのリスクを軽減するコアコンセプトを反映しています。',
    descZh: '单向计数器结构保持交易顺序不可逆，反映了在离线环境中降低双重支付风险的核心概念。',
  },
  {
    titleEn: 'Hash-Chain Integrity Verification',
    titleKr: 'Hash-Chain 무결성 검증',
    titleJa: 'ハッシュチェーンによる無欠性検証',
    titleZh: '哈希链完整性验证',
    descEn:
      'Each transaction is chained to the previous state, so any tampering affects integrity verification across the full record.',
    descKr:
      '각 거래가 이전 상태와 연결되는 체인 구조를 통해 거래 기록이 하나라도 변조되면 전체 무결성 검증에 영향을 주는 모델을 구성합니다.',
    descJa: '各取引が以前の状態と連結されるチェーン構造を通じて、取引記録が一つでも改ざんされると全体の無欠性検証に影響を与えるモデルを構成します。',
    descZh: '每笔交易都与之前的状态链接，因此任何篡改都会影响整个记录的完整性验证。',
  },
  {
    titleEn: 'Collateral Lock Safety Model',
    titleKr: 'Collateral Lock 기반 안전성',
    titleJa: 'コラテラルロックベースの安全モデル',
    titleZh: '抵押品锁定安全模式',
    descEn:
      'Assets are locked in advance while online, and offline spending is limited to that range, aiming for a collateral-based rather than credit-based model.',
    descKr:
      '온라인 상태에서 자산을 먼저 잠그고, 오프라인 거래는 그 한도 내에서만 실행되도록 하여 신용형이 아닌 담보형 결제 구조를 지향합니다.',
    descJa: 'オンライン状態で資産を予めロックし、オフライン決済はその範囲内でのみ実行されるようにすることで、信用型ではなく担保型の決済構造を目指します。',
    descZh: '资产在联网时预先锁定，离线支出限制在该范围内，旨在建立基于抵押品而非基于信用的模型。',
  },
  {
    titleEn: 'Lazy Clearing Settlement Flow',
    titleKr: 'Lazy Clearing 정산 구조',
    titleJa: 'レイジークリアリング決済フロー',
    titleZh: '延迟清理结算流程',
    descEn:
      'Offline payments are completed instantly for usability, while later synchronization and settlement occur when connectivity is restored.',
    descKr:
      '오프라인에서는 사용 경험을 우선해 즉시 결제를 완료하고, 네트워크가 복구되거나 연결될 때 후속 동기화 및 정산을 처리하는 흐름을 반영합니다.',
    descJa: 'オフラインではユーザビリティを優先して即座に決済を完了し、ネットワークが復旧または接続された際に後続の同期および精算を処理するフローを反映しています。',
    descZh: '为了可用性，离线支付可立即完成，而稍后的同步和结算在恢复连接时进行。',
  },
  {
    titleEn: 'Turning the Smartphone into Payment Infrastructure',
    titleKr: '스마트폰 자체를 결제 인프라로 전환',
    titleJa: 'スマートフォン自体を決済インフラに転換',
    titleZh: '将智能手机转变为支付基础设施',
    descEn:
      'By reducing dependence on POS hardware, constant server approval, and communication lines, the smartphone itself becomes both a payment device and a security unit.',
    descKr:
      '별도 POS, 지속적인 서버 승인, 회선 의존도를 낮추고 스마트폰 자체를 결제 수단이자 보안 장치로 활용하는 구조를 핵심 경쟁력으로 제시합니다.',
    descJa: '別途のPOS、継続的なサーバー承認、回線への依存度を下げ、スマートフォン自体を決済手段かつセキュリティデバイスとして活用する構造を核心的な競争力として提示します。',
    descZh: '通过减少对 POS 硬件、持续服务器批准和通信线路的依赖，智能手机本身既成为支付设备，也成为安全单元。',
  },
];

const useCases = [
  {
    icon: Plane,
    titleEn: 'Aircraft',
    titleKr: '항공기',
    titleJa: '航空機',
    titleZh: '飞机',
    descEn: 'Maintain passenger payment experiences even without stable connectivity.',
    descKr: '비연결 환경에서도 승객 결제 경험 유지',
    descJa: '非接続環境でも乗客の決済体験を維持',
    descZh: '即使在没有稳定连接的情况下也能保持乘客的支付体验。',
  },
  {
    icon: Ship,
    titleEn: 'Ships',
    titleKr: '선박',
    titleJa: '船舶',
    titleZh: '船舶',
    descEn: 'Handle payments in maritime areas with unstable communication.',
    descKr: '해상 통신 불안정 구간에서의 결제 대응',
    descJa: '海上通信が不安定な区間での決済対応',
    descZh: '处理通信不稳定的海域支付。',
  },
  {
    icon: Mountain,
    titleEn: 'Mines · Tunnels · Remote Areas',
    titleKr: '광산 · 터널 · 오지',
    titleJa: '鉱山・トンネル・僻地',
    titleZh: '矿山 · 隧道 · 偏远地区',
    descEn: 'Enable always-on payments in infrastructure-limited regions.',
    descKr: '인프라 취약 지역의 Always-On 결제',
    descJa: 'インフラ脆弱地域でのAlways-On決済',
    descZh: '在基础设施受限的地区实现全天候支付。',
  },
  {
    icon: Building2,
    titleEn: 'Military · Closed Networks',
    titleKr: '군사 · 폐쇄망',
    titleJa: '軍事・クローズドネットワーク',
    titleZh: '军事 · 封闭网络',
    descEn: 'Provide independent payment capabilities in isolated network environments.',
    descKr: '폐쇄된 네트워크 환경에서의 독립 결제 수단',
    descJa: '閉鎖されたネットワーク環境での独立した決済手段',
    descZh: '在隔离的网络环境中提供独立的支付能力。',
  },
  {
    icon: Store,
    titleEn: 'Small Merchants',
    titleKr: '소상공인',
    titleJa: '小規模事業者',
    titleZh: '小商户',
    descEn: 'Offer a payment alternative that reduces device costs and fee burdens.',
    descKr: '단말기 비용과 수수료 구조를 줄이는 결제 대안',
    descJa: '端末費用と手数料負担を軽減する決済の選択肢',
    descZh: '提供一种降低设备成本和费用负担的支付替代方案。',
  },
  {
    icon: Landmark,
    titleEn: 'Disaster Response',
    titleKr: '재난 대응',
    titleJa: '災害対応',
    titleZh: '灾害响应',
    descEn: 'Provide emergency-capable payment infrastructure during communication failures.',
    descKr: '통신 장애 시에도 작동 가능한 긴급 결제 인프라',
    descJa: '通信障害時でも動作可能な緊急決済インフラ',
    descZh: '在通信故障期间提供应急支付基础设施。',
  },
];

const compareRows = [
  {
    key: 'network',
    labelEn: 'Network Dependence',
    labelKr: '네트워크 의존',
    labelJa: 'ネットワーク依存度',
    labelZh: '网络依赖',
    legacyEn: 'Required',
    legacyKr: '필수',
    legacyJa: '必須',
    legacyZh: '必需',
    korionEn: 'Optional or unnecessary',
    korionKr: '선택 또는 불필요',
    korionJa: '選択または不要',
    korionZh: '可选或不需要',
  },
  {
    key: 'pos',
    labelEn: 'POS Terminal',
    labelKr: 'POS 단말기',
    labelJa: 'POS端末',
    labelZh: 'POS 终端',
    legacyEn: 'Generally required',
    legacyKr: '대체로 필요',
    legacyJa: '一般的に必要',
    legacyZh: '通常需要',
    korionEn: 'Possible with smartphone only',
    korionKr: '스마트폰만으로 가능',
    korionJa: 'スマートフォンのみで可能',
    korionZh: '仅凭智能手机即可',
  },
  {
    key: 'server',
    labelEn: 'Server Authorization',
    labelKr: '서버 승인',
    labelJa: 'サーバー承認',
    labelZh: '服务器授权',
    legacyEn: 'Centered on centralized authorization',
    legacyKr: '중앙 승인 중심',
    legacyJa: '中央承認中心',
    legacyZh: '以集中授权为中心',
    korionEn: 'Direct offline transaction possible',
    korionKr: '오프라인 직접 거래 가능',
    korionJa: 'オフラインでの直接取引が可能',
    korionZh: '可进行直接离线交易',
  },
  {
    key: 'outage',
    labelEn: 'Outage Response',
    labelKr: '통신 장애 대응',
    labelJa: '通信障害対応',
    labelZh: '断网响应',
    legacyEn: 'High chance of payment interruption',
    legacyKr: '결제 중단 가능성 높음',
    legacyJa: '決済中断の可能性が高い',
    legacyZh: '支付中断的可能性高',
    korionEn: 'Designed toward always-on operation',
    korionKr: '항상 작동 가능한 구조 지향',
    korionJa: '常に動作可能な構造を指向',
    korionZh: '面向全天候运行设计',
  },
  {
    key: 'ux',
    labelEn: 'User Entry Barrier',
    labelKr: '사용자 진입장벽',
    labelJa: 'ユーザー参入障壁',
    labelZh: '用户准入门槛',
    legacyEn: 'QR/address/waiting complexity exists',
    legacyKr: 'QR/주소/대기 등 존재',
    legacyJa: 'QR/アドレス/待機などの複雑さ',
    legacyZh: '存在二维码/地址/等待等复杂性',
    korionEn: 'Touch-based simple UX',
    korionKr: '터치 중심의 단순 UX',
    korionJa: 'タッチ中心のシンプルなUX',
    korionZh: '基于触摸的简单 UX',
  },
  {
    key: 'scalability',
    labelEn: 'Scalability',
    labelKr: '확장성',
    labelJa: '拡張性',
    labelZh: '可扩展性',
    legacyEn: 'Focused on existing infrastructure',
    legacyKr: '기존 인프라 중심',
    legacyJa: '既存インフラ中心',
    legacyZh: '专注于现有基础设施',
    korionEn: 'Capable of creating new markets',
    korionKr: '신규 시장 창출 가능',
    korionJa: '新規市場の創出が可能',
    korionZh: '能够创造新市场',
  },
];

const investorPoints = [
  {
    en: 'Not merely a replacement for existing rails, but a way to create new markets where traditional payment systems cannot reach.',
    kr: '기존 결제망 대체가 아니라, 기존 결제가 닿지 못한 환경에 대한 신규 시장 창출 가능성',
    ja: '既存の決済網の代替ではなく、既存の決済が届かなかった環境に対する新規市場創出の可能性',
    zh: '不只是传统渠道的替代品，而是进入传统支付系统无法触及的环境，创造新市场的一种方式。',
  },
  {
    en: 'It can secure differentiated positioning in special markets such as disaster response, military settings, transport, developing regions, and infrastructure-limited zones.',
    kr: '재난·군사·운송·개발도상국·인프라 취약 지역 등 특수 시장에서 차별적 포지션 확보 가능',
    ja: '災害・軍事・輸送・開発途上国・インフラ脆弱地域など、特殊市場で差別化されたポジショニングを確保可能',
    zh: '它可以在灾难响应、军事设置、交通、发展中地区和基础设施受限区等特殊市场确保差异化定位。',
  },
  {
    en: 'The spread of smartphone security chips, TEE standardization, and short-range communication advances create a practical commercialization window.',
    kr: '스마트폰 보안칩 보급, TEE 표준화, 근거리 통신 기술 발전에 따른 현실적 상용화 타이밍',
    ja: 'スマートフォンのセキュリティチップの普及、TEE標準化、近距離通信技術の発展に伴う現実的な商用化タイミング',
    zh: '智能手机安全芯片的普及、TEE 标准化以及短距离通信的进步创造了一个实际的商业化窗口。',
  },
  {
    en: 'By unifying offline and online payments under one brand, it strengthens the expansion potential of KORION Wallet and the wider ecosystem.',
    kr: '온·오프라인 결제를 단일 브랜드 아래 통합함으로써 KORION Wallet 및 생태계 서비스 확장성과 연결',
    ja: 'オン・オフライン決済を単一ブランドの下で統合することにより、KORIONウォレットおよびエコシステムサービスの拡張性と連結',
    zh: '通过在一个品牌下统一离线和在线支付，它加强了 KORION 钱包和更广泛生态系统的扩张潜力。',
  },
];

export function KorionPayPage() {
  const { t } = useLanguage();

  return (
    <div className="korionpay-page" id="top">
      <section className="korionpay-hero">
        <div className="korionpay-hero__bg" />
        <div className="korionpay-hero__grid" />
        <div className="korionpay-page__container">
          <div className="korionpay-hero__content">
            <motion.div
              className="korionpay-hero__eyebrow"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
            >
              <BadgeCheck size={16} />
              <span>KORION PAY</span>
            </motion.div>

            <motion.h1
              className="korionpay-hero__title"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.75 }}
            >
              {t(
                'Payments without connection, and payments that expand connection, in one infrastructure.',
                '연결에 의존하지 않는 결제와 연결을 확장하는 결제를 하나의 인프라로.',
                '接続に依存しない決済と接続を拡張する決済を、一つのインフラで。',
                '不依赖连接的支付和扩展连接的支付，集成于同一个基础设施。'
              )}
            </motion.h1>

            <motion.p
              className="korionpay-hero__desc"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              {t(
                'KORION PAY is more than a payment feature. It is a next-generation payment architecture that unifies a trust-based payment structure working even in offline environments with a scalable digital payment flow for connected environments.',
                'KORION PAY는 단순한 결제 기능이 아닙니다. 오프라인 환경에서도 작동하는 신뢰 기반 결제 구조와, 온라인 환경에서 확장 가능한 디지털 결제 흐름을 하나의 프레임 안에 통합한 차세대 결제 아키텍처입니다.',
                'KORION PAYは単なる決済機能ではありません。オフライン環境でも動作する信頼ベースの決済構造と、オンライン環境で拡張可能なデジタル決済フローを一つのフレームに統合した次世代決済アーキテクチャです。',
                'KORION PAY 不仅仅是一项支付功能。它是一种下一代支付架构，将即使在离线环境下也能运行的基于信任的支付结构，与联网环境下的可扩展数字支付流统一集成。'
              )}
            </motion.p>

            <motion.div
              className="korionpay-hero__cta"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.8, delay: 0.16 }}
            >
              <a href="#pay-architecture" className="korionpay-btn korionpay-btn--primary">
                {t('Architecture', '아키텍처 보기', 'アーキテクチャを表示', '查看架构')}
                <ArrowRight size={18} />
              </a>
              <a href="#pay-comparison" className="korionpay-btn korionpay-btn--ghost">
                {t('Compare Model', '비교 보기', 'モデルを比較', '比较模式')}
              </a>
            </motion.div>

            <motion.div
              className="korionpay-hero__stats"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.8, delay: 0.22 }}
            >
              <div className="korionpay-stat">
                <strong>{t('Offline Pay', '오프라인 페이', 'オフライン決済', '离线支付')}</strong>
                <span>{t('Direct payment without network', '네트워크 없는 직접 결제', 'ネットワーク不要の直接決済', '无需网络的直接支付')}</span>
              </div>
              <div className="korionpay-stat">
                <strong>{t('Online Pay', '온라인 페이', 'オンライン決済', '在线支付')}</strong>
                <span>{t('Service-linked real-time payment', '서비스 연동형 실시간 결제', 'サービス連動型リアルタイム決済', '业务联动实时支付')}</span>
              </div>
              <div className="korionpay-stat">
                <strong>{t('Patent-Based', '특허 기반 구조', '特許ベース構造', '基于专利架构')}</strong>
                <span>{t('Reflecting patent-oriented core structure', '특허 출원형 핵심 구조 반영', '特許出願型の核心構造を反映', '反映专利导向的核心架构')}</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="korionpay-hero__visual"
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.9 }}
          >
            <div className="korionpay-orbit korionpay-orbit--one" />
            <div className="korionpay-orbit korionpay-orbit--two" />
            <div className="korionpay-glow korionpay-glow--one" />
            <div className="korionpay-glow korionpay-glow--two" />

            <div className="korionpay-device korionpay-device--left">
              <div className="korionpay-device__header">
                <WifiOff size={18} />
                <span>{t('Offline Pay', '오프라인 페이', 'オフライン決済', '离线支付')}</span>
              </div>
              <div className="korionpay-device__body">
                <div className="korionpay-chip">
                  <img src={korionLogo} alt="KORION" />
                </div>
                <div className="korionpay-line" />
                <div className="korionpay-line korionpay-line--short" />
                <div className="korionpay-tags">
                  <span>TEE</span>
                  <span>Hash-Chain</span>
                  <span>Collateral</span>
                </div>
              </div>
            </div>

            <div className="korionpay-center-badge">
              <div className="korionpay-center-badge__core">
                <CreditCard size={28} />
              </div>
              <div className="korionpay-signal korionpay-signal--left" />
              <div className="korionpay-signal korionpay-signal--right" />
            </div>

            <div className="korionpay-device korionpay-device--right">
              <div className="korionpay-device__header">
                <Globe size={18} />
                <span>{t('Online Pay', '온라인 페이', 'オンライン決済', '在线支付')}</span>
              </div>
              <div className="korionpay-device__body">
                <div className="korionpay-chip">
                  <img src={korionLogo} alt="KORION" />
                </div>
                <div className="korionpay-line" />
                <div className="korionpay-line korionpay-line--short" />
                <div className="korionpay-tags">
                  <span>Sync</span>
                  <span>Merchant</span>
                  <span>Settlement</span>
                </div>
              </div>
            </div>

            <div className="korionpay-hero__caption">
              {t(
                'KORION’s payment layer connecting Offline Pay and Online Pay within one brand',
                'Offline Pay와 Online Pay를 하나의 브랜드 안에서 연결하는 KORION의 결제 레이어',
                'オフライン決済とオンライン決済を一つのブランド内で繋ぐKORIONの決済レイヤー',
                '在一个品牌下连接离线支付和在线支付的 KORION 支付层'
              )}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="korionpay-section">
        <div className="korionpay-page__container-01">
          <div className="korionpay-section__head">
            <span className="korionpay-section__label">
              {t('Overview', '개요', '概要', '概览')}
            </span>
            <h2>
              {t(
                'KORION PAY unifies two payment flows into one',
                'KORION PAY는 두 가지 결제 흐름을 하나로 묶습니다',
                'KORION PAYは二つの決済フローを一つにまとめます',
                'KORION PAY 将两个支付流程统一为一个'
              )}
            </h2>
            <p>
              {t(
                'KORION PAY combines Offline Pay, which works without network connectivity, with Online Pay, which strengthens service integration and connectivity, aiming to build a payment infrastructure spanning both offline and online environments.',
                'KORION PAY는 네트워크가 없어도 작동하는 Offline Pay와, 서비스 확장성과 연결성을 강화하는 Online Pay를 함께 구성하여 온·오프라인 전반을 포괄하는 결제 인프라를 지향합니다.',
                'KORION PAYは、ネットワークがなくても動作するオフライン決済と、サービスの拡張性と連結性を強化するオンライン決済を共に構成し、オン・オフライン全般を網羅する決済インフラを目指しています。',
                'KORION PAY 将无需网络连接即可运行的离线支付，与增强业务集成和连接性的在线支付相结合，旨在建立跨越离线和在线环境的支付基础设施。'
              )}
            </p>
          </div>

          <div className="korionpay-dual">
            <div className="korionpay-dual__card korionpay-dual__card--offline">
              <div className="korionpay-dual__top">
                <div className="korionpay-dual__icon">
                  <WifiOff size={24} />
                </div>
                <div>
                  <h3>{t('Offline Pay', '오프라인 페이', 'オフライン決済', '离线支付')}</h3>
                  <p>
                    {t(
                      'A digital payment infrastructure that works without network connectivity',
                      '네트워크 없이 작동하는 디지털 결제 인프라',
                      'ネットワークなしで動作するデジタル決済インフラ',
                      '无需网络连接即可运行的数字支付基础设施'
                    )}
                  </p>
                </div>
              </div>
              <ul className="korionpay-checklist">
                <li>
                  <CheckCircle2 size={18} />
                  {t('No server authorization', '서버 승인 없음', 'サーバー承認なし', '无需服务器授权')}
                </li>
                <li>
                  <CheckCircle2 size={18} />
                  {t('No network connection required', '네트워크 연결 없음', 'ネットワーク接続不要', '无需网络连接')}
                </li>
                <li>
                  <CheckCircle2 size={18} />
                  {t('No POS terminal required', 'POS 단말기 없음', 'POS端末不要', '无需 POS 终端')}
                </li>
                <li>
                  <CheckCircle2 size={18} />
                  {t('Smartphone-to-smartphone direct transaction', '스마트폰 ↔ 스마트폰 직접 거래', 'スマートフォン間の直接取引', '手机对手机直接交易')}
                </li>
              </ul>
            </div>

            <div className="korionpay-dual__card korionpay-dual__card--online">
              <div className="korionpay-dual__top">
                <div className="korionpay-dual__icon">
                  <Globe size={24} />
                </div>
                <div>
                  <h3>{t('Online Pay', '온라인 페이', 'オンライン決済', '在线支付')}</h3>
                  <p>
                    {t(
                      'A digital payment layer that expands connectivity and services',
                      '연결성과 서비스 확장을 강화하는 디지털 결제 레이어',
                      '連結性とサービス拡張を強化するデジタル決済レイヤー',
                      '增强连接性和业务扩张的数字支付层'
                    )}
                  </p>
                </div>
              </div>
              <ul className="korionpay-checklist">
                <li>
                  <CheckCircle2 size={18} />
                  {t('Real-time service integration', '실시간 서비스 연동', 'リアルタイムサービス連動', '实时业务联动')}
                </li>
                <li>
                  <CheckCircle2 size={18} />
                  {t('Support for stores, apps, and platforms', '온라인 상점·앱·플랫폼 결제 대응', 'オンラインショップ・アプリ・プラットフォーム決済対応', '支持在线商店、应用和平台支付')}
                </li>
                <li>
                  <CheckCircle2 size={18} />
                  {t('State synchronization and settlement processing', '상태 동기화 및 정산 처리', 'ステータス同期および精算処理', '状态同步和结算处理')}
                </li>
                <li>
                  <CheckCircle2 size={18} />
                  {t('Wallet-centered scalable usage model', 'Wallet 중심의 확장형 사용 구조', 'ウォレット中心の拡張型使用構造', '以钱包为中心的可扩展使用架构')}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="korionpay-section korionpay-section--deep">
        <div className="korionpay-page__container-01">
          <div className="korionpay-section__head">
            <span className="korionpay-section__label">
              {t('Offline Vision', '오프라인 비전', 'オフラインビジョン', '离线愿景')}
            </span>
            <h2>
              {t(
                'Payment should be a function, not infrastructure',
                '결제는 인프라가 아니라 기능이어야 합니다',
                '決済はインフラではなく、機能であるべきです',
                '支付应该是功能，而非基础设施'
              )}
            </h2>
            <p>
              {t(
                'Today’s digital payments depend on networks, POS terminals, authorization servers, and communication costs. KORION Offline Pay proposes a new approach where the smartphone itself becomes a trust-based payment device, allowing payments even when there is no connection.',
                '오늘날 디지털 결제는 네트워크, POS, 승인 서버, 회선 비용과 같은 복잡한 구조에 의존합니다. KORION Offline Pay는 스마트폰 자체를 신뢰 기반 장치로 활용해 연결이 없는 상황에서도 결제가 작동하는 새로운 접근을 제시합니다.',
                '今日のデジタル決済は、ネットワーク、POS、承認サーバー、回線費用などの複雑な構造に依存しています。KORIONオフライン決済は、スマートフォン自体を信頼ベースのデバイスとして活用し、接続がない状況でも決済が動作する新しいアプローチを提案します。',
                '如今的数字支付依赖于网络、POS 终端、授权服务器和通信成本。KORION 离线支付提出了一种新方法，将智能手机本身作为基于信任的支付设备，即使在没有连接的情况下也能进行支付。'
              )}
            </p>
          </div>

          <div className="korionpay-feature-grid">
            {offlineFeatures.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.titleEn}
                  className="korionpay-feature-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.55 }}
                >
                  <div className="korionpay-feature-card__icon">
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

      <section id="pay-architecture" className="korionpay-section">
        <div className="korionpay-page__container-01">
          <div className="korionpay-section__head">
            <span className="korionpay-section__label">
              {t('Patent-Based Architecture', '특허 기반 아키텍처', '特許ベースのアーキテクチャ', '基于专利的架构')}
            </span>
            <h2>
              {t(
                'A structure reflecting patent-oriented core concepts',
                '특허 출원형 핵심 개념을 반영한 구조',
                '特許出願型の革新的なコンセプトを反映した構造',
                '反映专利导向核心概念的架构'
              )}
            </h2>
            <p>
              {t(
                'The following sections describe the core concepts behind the offline payment architecture envisioned by KORION PAY. Based on TEE, monotonic counters, hash-chains, collateral lock, and lazy clearing, it presents a trust model different from conventional payment infrastructure.',
                '아래 내용은 KORION PAY가 지향하는 오프라인 결제 아키텍처의 핵심 개념입니다. TEE, 단조 카운터, Hash-Chain, Collateral Lock, Lazy Clearing과 같은 요소를 기반으로 기존 결제 인프라와 다른 신뢰 구조를 설명합니다.',
                '以下はKORION PAYが目指すオフライン決済アーキテクチャの核心コンセプトです。TEE、モノトニックカウンター、ハッシュチェーン、コラテラルロック、レイジークリアリングなどの要素に基づき、既存の決済インフラとは異なる信頼構造を説明します。',
                '以下部分描述了 KORION PAY 设想的离线支付架构背后的核心概念。基于 TEE、单调计数器、哈希链、抵押品锁定和延迟清理，它呈现了一种不同于传统支付基础设施的信任模型。'
              )}
            </p>
          </div>

          <div className="korionpay-patent-grid">
            {patentedPoints.map((item, index) => (
              <motion.div
                key={item.titleEn}
                className="korionpay-patent-card"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: index * 0.04 }}
              >
                <span className="korionpay-patent-card__index">
                  {(index + 1).toString().padStart(2, '0')}
                </span>
                <h3>{t(item.titleEn, item.titleKr, item.titleJa, item.titleZh)}</h3>
                <p>{t(item.descEn, item.descKr, item.descJa, item.descZh)}</p>
              </motion.div>
            ))}
          </div>

          <div className="korionpay-architecture-flow">
            <div className="korionpay-flow-card">
              <Cpu size={20} />
              <strong>{t('Secure Device Layer', '보안 디바이스 레이어', 'セキュアデバイスレイヤー', '安全设备层')}</strong>
              <span>TEE · Security Chip · Trusted Execution</span>
            </div>
            <div className="korionpay-flow-arrow">→</div>
            <div className="korionpay-flow-card">
              <Layers3 size={20} />
              <strong>{t('Transaction Integrity Layer', '거래 무결성 레이어', '取引無欠性レイヤー', '交易完整性层')}</strong>
              <span>Monotonic Counter · Hash-Chain</span>
            </div>
            <div className="korionpay-flow-arrow">→</div>
            <div className="korionpay-flow-card">
              <Coins size={20} />
              <strong>{t('Value Safety Layer', '가치 안전성 레이어', '価値安全性レイヤー', '价值安全层')}</strong>
              <span>Collateral Lock · Spend Boundaries</span>
            </div>
            <div className="korionpay-flow-arrow">→</div>
            <div className="korionpay-flow-card">
              <RefreshCw size={20} />
              <strong>{t('Settlement Layer', '정산 레이어', '精산レイヤー', '结算层')}</strong>
              <span>Lazy Clearing · Network Sync</span>
            </div>
          </div>
        </div>
      </section>

      <section className="korionpay-section korionpay-section--deep">
        <div className="korionpay-page__container-01">
          <div className="korionpay-section__head">
            <span className="korionpay-section__label">
              {t('Online Expansion', '온라인 확장성', 'オンライン拡張性', '在线扩展')}
            </span>
            <h2>
              {t(
                'Online Pay expands connectivity',
                'Online Pay는 연결성을 확장합니다',
                'オンライン決済は連結性を拡張します',
                '在线支付扩展连接性'
              )}
            </h2>
            <p>
              {t(
                'If Offline Pay is an innovation for disconnected environments, Online Pay extends the KORION payment ecosystem across services, merchants, and digital platforms in connected environments.',
                'Offline Pay가 연결이 없는 환경에서의 혁신이라면, Online Pay는 연결된 환경에서 KORION의 결제 생태계를 서비스와 상점, 디지털 플랫폼으로 확장하는 역할을 합니다.',
                'オフライン決済が接続のない環境での革新であるならば、オンライン決済は接続された環境においてKORIONの決済エコシステムをサービス、ショップ、デジタルプラットフォームへと拡張する役割を担います。',
                '如果离线支付是针对离线环境的创新，那么在线支付则在联网环境中将 KORION 支付生态系统扩展到服务、商户和数字平台。'
              )}
            </p>
          </div>

          <div className="korionpay-feature-grid">
            {onlineFeatures.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.titleEn}
                  className="korionpay-feature-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.55 }}
                >
                  <div className="korionpay-feature-card__icon">
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

      <section id="pay-comparison" className="korionpay-section">
        <div className="korionpay-page__container-01">
          <div className="korionpay-section__head">
            <span className="korionpay-section__label">
              {t('Comparison', '비교', '比較', '比较')}
            </span>
            <h2>
              {t(
                'Structural differences from traditional payments',
                '기존 결제와의 구조적 차이',
                '既存の決済との構造的な違い',
                '与传统支付的结构化差异'
              )}
            </h2>
            <p>
              {t(
                'KORION PAY does not simply copy legacy card or payment models. It redesigns the very assumptions that make payments work.',
                'KORION PAY는 기존 카드/페이 모델을 단순 복제하는 것이 아니라, 결제를 작동시키는 전제 자체를 다시 설계합니다.',
                'KORION PAYは、既存のカード/決済モデルを単純にコピーするのではなく、決済を動作させる前提そのものを再設計しています。',
                'KORION PAY 并不是简单地复制传统的卡支付或支付模式。它重新设计了使支付得以运行的基础假设。'
              )}
            </p>
          </div>

          <div className="korionpay-table-wrap">
            <table className="korionpay-table">
              <thead>
                <tr>
                  <th>{t('Category', '구분', '区分', '类别')}</th>
                  <th>{t('Traditional Card / Pay', '기존 카드 / 페이', '既存のカード/決済', '传统卡 / 支付')}</th>
                  <th>KORION PAY</th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row) => (
                  <tr key={row.key}>
                    <td>{t(row.labelEn, row.labelKr, row.labelJa, row.labelZh)}</td>
                    <td>{t(row.legacyEn, row.legacyKr, row.legacyJa, row.legacyZh)}</td>
                    <td>{t(row.korionEn, row.korionKr, row.korionJa, row.korionZh)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="korionpay-section korionpay-section--deep">
        <div className="korionpay-page__container-01">
          <div className="korionpay-section__head">
            <span className="korionpay-section__label">
              {t('Use Cases', '활용 환경', '活用環境', '使用案例')}
            </span>
            <h2>
              {t(
                'Turning previously unreachable payment environments into markets',
                '지금까지 결제가 불가능했던 환경을 시장으로 전환',
                'これまで決済が不可能だった環境を市場に転換',
                '将以前无法覆盖的支付环境转变为市场'
              )}
            </h2>
            <p>
              {t(
                'Offline Pay is not merely a substitute for existing payment systems. It expands environments previously unreachable by infrastructure into new economic zones.',
                'Offline Pay는 기존 결제를 단순히 대체하는 것이 아니라, 기존 인프라가 닿지 못했던 환경 자체를 새로운 경제 활동 영역으로 확장시키는 개념입니다.',
                'オフライン決済は、既存の決済を単純に代替するものではなく、既存のインフラが届かなかった環境自体を新しい経済活動領域へと拡張させるコンセプトです。',
                '离线支付不仅仅是现有支付系统的替代品。它将以前基础设施无法触及的环境扩展为新的经济区。'
              )}
            </p>
          </div>

          <div className="korionpay-usecases">
            {useCases.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.titleEn} className="korionpay-usecase">
                  <div className="korionpay-usecase__icon">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3>{t(item.titleEn, item.titleKr, item.titleJa, item.titleZh)}</h3>
                    <p>{t(item.descEn, item.descKr, item.descJa, item.descZh)}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="korionpay-section">
        <div className="korionpay-page__container-01">
          <div className="korionpay-simplicity">
            <div className="korionpay-simplicity__left">
              <span className="korionpay-section__label">
                {t('User Experience', '사용자 경험', 'ユーザー体験', '用户体验')}
              </span>
              <h2>
                {t(
                  'Offline Pay removes the learning curve',
                  'Offline Pay는 사용법을 없앴습니다',
                  'オフライン決済は使い方の学習をなくしました',
                  '离线支付消除了学习曲线'
                )}
              </h2>
              <p>
                {t(
                  'Digital assets have often been difficult for ordinary users because of long addresses, QR scans, network checks, transfer waiting, and fee calculations. KORION PAY focuses on making the payment experience as simple as using a card.',
                  '디지털 자산은 긴 주소, QR 스캔, 네트워크 확인, 전송 대기, 수수료 계산 같은 복잡성 때문에 일반 사용자에게 어려웠습니다. KORION PAY는 결제 경험을 카드처럼 단순하게 만드는 데 초점을 둡니다.',
                  'デジタル資産は、長いアドレス、QRスキャン、ネットワーク確認、送信待機、手数料計算などの複雑さのため、一般のユーザーには困難でした。KORION PAYは、決済体験をカードのようにシンプルにすることに焦点を当てています。',
                  '由于长地址、二维码扫描、网络检查、转账等待和费用计算等复杂性，数字资产对普通用户来说通常很困难。KORION PAY 专注于使支付体验像使用卡片一样简单。'
                )}
              </p>
            </div>

            <div className="korionpay-steps">
              <div className="korionpay-step">
                <span>01</span>
                <h3>{t('Bring smartphones close', '스마트폰을 가까이', 'スマートフォンを近づける', '让智能手机靠近')}</h3>
                <p>
                  {t(
                    'Start payment intuitively without complex address entry',
                    '복잡한 주소 입력 없이 직관적으로 결제 시작',
                    '複雑なアドレス入力なしで直感的に決済を開始',
                    '无需复杂的地址输入，直观启动支付'
                  )}
                </p>
              </div>
              <div className="korionpay-step">
                <span>02</span>
                <h3>{t('Confirm the amount', '금액 확인', '金額を確認', '确认金额')}</h3>
                <p>
                  {t(
                    'Users only need to confirm the amount, just like a card payment',
                    '사용자는 카드 결제처럼 금액만 확인하면 됩니다',
                    'ユーザーはカード決済のように金額を確認するだけです',
                    '用户只需核对金额，就像刷卡支付一样'
                  )}
                </p>
              </div>
              <div className="korionpay-step">
                <span>03</span>
                <h3>{t('Complete instantly', '즉시 완료', '即座に完了', '立即完成')}</h3>
                <p>
                  {t(
                    'Keep the payment flow concise without waiting for the network',
                    '네트워크 대기 없이 결제 경험을 간결하게 구성',
                    'ネットワークの待機なしに決済フローを簡潔に構成',
                    '无需等待网络，保持支付流程简洁'
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="korionpay-section korionpay-section--deep">
        <div className="korionpay-page__container-01">
          <div className="korionpay-investor">
            <div className="korionpay-investor__panel">
              <span className="korionpay-section__label">
                {t('Why It Matters', '왜 중요한가', 'なぜ重要なのか', '为什么它很重要')}
              </span>
              <h2>
                {t(
                  'Why investors and partners should pay attention',
                  '왜 투자자와 파트너가 주목해야 하는가',
                  '投資家やパートナーが注目すべき理由',
                  '为什么投资者和合作伙伴应该关注'
                )}
              </h2>
              <div className="korionpay-investor__list">
                {investorPoints.map((item, index) => (
                  <div key={index} className="korionpay-investor__item">
                    <Radio size={18} />
                    <p>{t(item.en, item.ko, item.ja, item.zh)}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="korionpay-investor__side">
              <div className="korionpay-sidecard">
                <Cable size={22} />
                <h3>{t('Always-On Economy', '항상 작동하는 경제', '常に稼働する経済', '全天候经济')}</h3>
                <p>
                  {t(
                    'A payment structure that keeps economic activity running even when connectivity is lost can become a meaningful complement to the limits of existing financial infrastructure.',
                    '연결이 끊기더라도 경제 활동이 멈추지 않는 결제 구조는 기존 금융 인프라의 한계를 보완하는 새로운 방향이 될 수 있습니다.',
                    '接続が途切れても経済活動が止まらない決済構造は、既存の金融インフラの限界を補完する新しい方向性となります。',
                    '即使失去连接也能保持经济活动运行的支付结构，可以成为现有金融基础设施局限性的有益补充。'
                  )}
                </p>
              </div>
              <div className="korionpay-sidecard">
                <Building2 size={22} />
                <h3>{t('Infrastructure Reduction', '인프라 절감', 'インフラの削減', '基础设施节减')}</h3>
                <p>
                  {t(
                    'A model that reduces separate terminals, communication dependence, and approval delays has strong expansion potential for small merchants and emerging markets.',
                    '별도 단말기, 통신 의존, 승인 지연을 줄이는 모델은 소상공인과 신흥 시장에서 높은 확장 잠재력을 가집니다.',
                    '別途の端末、通信への依存、承認の遅延を減らすモデルは、小規模事業者や新興市場において高い拡張ポテンシャルを持ちます。',
                    '这种减少独立终端、通信依赖和批准延迟的模式，在小商户和新兴市场具有强大的扩张潜力。'
                  )}
                </p>
              </div>
              <div className="korionpay-sidecard">
                <Landmark size={22} />
                <h3>{t('Strategic Utility', '전략적 유틸리티', '戦略的なユーティリティ', '战略实用性')}</h3>
                <p>
                  {t(
                    'One of KORION PAY’s key differentiators is that it extends beyond token utility into a real payment infrastructure narrative.',
                    '단순 토큰 사용처를 넘어 실제 결제 인프라 서사로 연결될 수 있다는 점이 KORION PAY의 핵심 차별 요소입니다.',
                    '単なるトークンの使用先を超え、実際の決済インフラのストーリーへと繋がることがKORION PAYの核心的な差別化要因です。',
                    'KORION PAY 的关键差异化因素之一是它超越了代币实用性，进入了真实的支付基础设施叙事。'
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="korionpay-cta-section">
        <div className="korionpay-page__container-01">
          <div className="korionpay-cta-box">
            <span className="korionpay-section__label">KORION PAY</span>
            <h2>
              {t(
                'Through Offline Pay and Online Pay, KORION redefines payment',
                'Offline Pay와 Online Pay를 통해 KORION은 결제를 다시 정의합니다',
                'オフライン決済とオンライン決済を通じて、KORIONは決済を再定義します',
                '通过离线支付和在线支付，KORION 重新定义了支付'
              )}
            </h2>
            <p>
              {t(
                'KORION PAY is not merely a payment app. It aims to evolve into a digital payment infrastructure spanning both disconnected and connected environments.',
                'KORION PAY는 단순한 결제 앱이 아니라, 연결이 없는 환경과 연결된 환경을 모두 포괄하는 디지털 결제 인프라로 진화하는 것을 목표로 합니다.',
                'KORION PAYは単なる決済アプリではなく、接続のない環境と接続された環境の両方を網羅するデジタル決済インフラへと進化することを目指しています。',
                'KORION PAY 不仅仅是一个支付应用。它的目标是发展成为一个跨越离线和联网环境的数字支付基础设施。'
              )}
            </p>
            <div className="korionpay-cta-box__actions">
              <a href="#pay-architecture" className="korionpay-btn korionpay-btn--primary">
                {t('View Technology', '기술 보기', 'テクノロジーを表示', '查看技术')}
                <ArrowRight size={18} />
              </a>
              <a href="#top" className="korionpay-btn korionpay-btn--ghost">
                {t('Back to Top', '맨 위로', 'トップに戻る', '返回顶部')}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}