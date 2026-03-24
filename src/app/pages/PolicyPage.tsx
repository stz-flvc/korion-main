import React from 'react';
import {
  ShieldCheck,
  LockKeyhole,
  Wallet,
  Activity,
  AlertTriangle,
  FileCheck2,
  Landmark,
  Cpu,
  ArrowRightLeft,
  BatteryCharging,
  Users,
  Eye,
  Server,
  BellRing,
  BadgeCheck,
  Scale,
  Layers3,
  Sparkles,
  ChevronRight,
  Database,
  Workflow,
  Clock3,
  CheckCircle2,
  TimerReset,
  ScanSearch,
  Vault,
  RadioTower,
  HelpCircle,
  ArrowUpRight,
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import './PolicyPage.css';

type FrameworkSection = {
  icon: React.ElementType;
  titleEn: string;
  titleKr: string;
  titleJa: string;
  titleZh: string;
  descEn: string;
  descKr: string;
  descJa: string;
  descZh: string;
  pointsEn: string[];
  pointsKr: string[];
  pointsJa: string[];
  pointsZh: string[];
};

type PrincipleItem = {
  titleEn: string;
  titleKr: string;
  titleJa: string;
  titleZh: string;
  descEn: string;
  descKr: string;
  descJa: string;
  descZh: string;
};

type ArchitectureItem = {
  icon: React.ElementType;
  titleEn: string;
  titleKr: string;
  titleJa: string;
  titleZh: string;
  descEn: string;
  descKr: string;
  descJa: string;
  descZh: string;
  tagsEn: string[];
  tagsKr: string[];
  tagsJa: string[];
  tagsZh: string[];
};

type FlowStep = {
  step: string;
  titleEn: string;
  titleKr: string;
  titleJa: string;
  titleZh: string;
  descEn: string;
  descKr: string;
  descJa: string;
  descZh: string;
};

type EngineCard = {
  icon: React.ElementType;
  titleEn: string;
  titleKr: string;
  titleJa: string;
  titleZh: string;
  descEn: string;
  descKr: string;
  descJa: string;
  descZh: string;
};

type FaqItem = {
  qEn: string;
  qKr: string;
  qJa: string;
  qZh: string;
  aEn: string;
  aKr: string;
  aJa: string;
  aZh: string;
};

const frameworkSections: FrameworkSection[] = [
  {
    icon: ShieldCheck,
    titleEn: 'Operational Governance Policy',
    titleKr: '운영 거버넌스 정책',
    titleJa: '運営ガバナンスポリシー',
    titleZh: '运营治理政策',
    descEn:
      'KORION is operated under a structured governance model designed to support accountability, continuity, security, and ecosystem stability.',
    descKr:
      'KORION은 책임성, 연속성, 보안, 생태계 안정성을 지원하기 위한 체계적 거버넌스 모델 아래 운영됩니다.',
    descJa: 'KORIONは、説明責任、継続性、セキュリティ、およびエコシステムの安定性をサポートするように設計された構造化されたガバナンスモデルの下で運営されています。',
    descZh: 'KORION 在结构化的治理模式下运行，旨在支持问责制、连续性、安全性和生态系统稳定性。',
    pointsEn: [
      'Core operations follow defined internal standards and execution procedures.',
      'Important service changes are reviewed with platform stability in mind.',
      'Governance priorities are aligned with user protection and long-term sustainability.',
    ],
    pointsKr: [
      '핵심 운영은 정의된 내부 기준과 실행 절차에 따라 진행됩니다.',
      '중요 서비스 변경은 플랫폼 안정성을 기준으로 검토됩니다.',
      '거버넌스 우선순위는 사용자 보호와 장기 지속성에 맞춰집니다.',
    ],
    pointsJa: [
      'コア業務は、定義された内部基準と実行手順に従います。',
      '重要なサービスの変更は、プラットフォームの安定性を念頭に置いてレビューされます。',
      'ガバナンスの優先順位は、ユーザー保護と長期的な持続可能性に合わせて調整されます。',
    ],
    pointsZh: [
      '核心运营遵循定义的内部标准和执行程序。',
      '重要的服务变更会在考虑平台稳定性的情况下进行审查。',
      '治理优先级与用户保护和长期可持续性保持一致。',
    ],
  },
  {
    icon: AlertTriangle,
    titleEn: 'Risk Management Framework',
    titleKr: '리스크 관리 체계',
    titleJa: 'リスク管理フレームワーク',
    titleZh: '风险管理框架',
    descEn:
      'The platform monitors operational, liquidity, wallet, transaction, and infrastructure risks through layered controls and response policies.',
    descKr:
      '플랫폼은 다층 통제와 대응 정책을 통해 운영, 유동성, 지갑, 거래, 인프라 리스크를 관리합니다.',
    descJa: 'プラットフォームは、層状の制御と対応ポリシーを通じて、運営、流動性、ウォレット、取引、およびインフラのリスクを監視します。',
    descZh: '平台通过分层控制和响应政策监控运营、流动性、钱包、交易和基础设施风险。',
    pointsEn: [
      'Abnormal behaviors may trigger review, delay, or additional protection steps.',
      'Network congestion and unusual fund movement patterns are monitored continuously.',
      'Risk handling is designed to reduce wide ecosystem disruption.',
    ],
    pointsKr: [
      '비정상 행위는 검토, 지연, 추가 보호 절차를 유발할 수 있습니다.',
      '네트워크 혼잡과 비정상 자금 흐름 패턴을 지속 감시합니다.',
      '리스크 대응은 생태계 전반의 혼란을 줄이도록 설계됩니다.',
    ],
    pointsJa: [
      '異常な行動は、レビュー、遅延、または追加の保護ステップを誘発する可能性があります。',
      'ネットワークの混雑や異常な資金移動パターンは継続的に監視されます。',
      'リスク対応は、エコシステム全体の混乱を軽減するように設計されています。',
    ],
    pointsZh: [
      '异常行为可能会触发审查、延迟或额外的保护步骤。',
      '持续监控网络拥塞和异常资金移动模式。',
      '风险处理旨在减少广泛的生态系统中断。',
    ],
  },
  {
    icon: LockKeyhole,
    titleEn: 'Wallet & Asset Security Policy',
    titleKr: '지갑 및 자산 보안 정책',
    titleJa: 'ウォレットと資産のセキュリティポリシー',
    titleZh: '钱包与资产安全政策',
    descEn:
      'Asset custody and wallet operations are designed with role separation, controlled approval, reserve isolation, and exposure minimization.',
    descKr:
      '자산 보관과 지갑 운영은 역할 분리, 통제된 승인, 준비금 분리, 노출 최소화를 기준으로 설계됩니다.',
    descJa: '資産のカストディとウォレットの運用は、役割の分離、制御された承認、リザーブの隔離、および露出の最小化を念頭に置いて設計されています。',
    descZh: '资产托管和钱包运营通过角色分离、受控批准、储备隔离和风险暴露最小化进行设计。',
    pointsEn: [
      'Operational wallets and reserve wallets may be managed with distinct purposes.',
      'Sensitive actions may require additional authorization or internal review.',
      'Treasury exposure is minimized wherever possible.',
    ],
    pointsKr: [
      '운영 지갑과 준비금 지갑은 목적에 따라 분리 운영될 수 있습니다.',
      '민감 작업은 추가 승인이나 내부 검토가 필요할 수 있습니다.',
      '준비금 노출은 가능한 범위에서 최소화됩니다.',
    ],
    pointsJa: [
      '運営用ウォレットとリザーブ用ウォレットは、異なる目的で管理される場合があります。',
      '機密性の高いアクションには、追加の承認または内部レビューが必要になる場合があります。',
      'トレジャリーの露出は、可能な限り最小限に抑えられます。',
    ],
    pointsZh: [
      '运营钱包和储备钱包可以针对不同目的进行管理。',
      '敏感操作可能需要额外的授权或内部审查。',
      '尽可能减少库房风险暴露。',
    ],
  },
  {
    icon: ArrowRightLeft,
    titleEn: 'Deposit, Transfer & Withdrawal Policy',
    titleKr: '입금 · 전송 · 출금 정책',
    titleJa: '入金・送金・出金ポリシー',
    titleZh: '充值、转账与提现政策',
    descEn:
      'All asset movement is processed according to internal balance validation, network conditions, queue management, and security review rules.',
    descKr:
      '모든 자산 이동은 내부 잔액 검증, 네트워크 상태, 대기열 관리, 보안 검토 기준에 따라 처리됩니다.',
    descJa: 'すべての資産の移動は、内部の残高検証、ネットワークの状態、キュー管理、およびセキュリティレビューのルールに従って処理されます。',
    descZh: '所有资产变动均根据内部余额验证、网络状况、队列管理和安全审查规则进行处理。',
    pointsEn: [
      'Deposits may require sufficient confirmation before final availability.',
      'Withdrawals may be delayed during maintenance, congestion, or risk review.',
      'Transfer timing depends on fee status, resource availability, and system checks.',
    ],
    pointsKr: [
      '입금은 최종 사용 가능 상태가 되기 전 충분한 확인 절차가 필요할 수 있습니다.',
      '출금은 점검, 혼잡, 리스크 검토 시 지연될 수 있습니다.',
      '전송 시점은 수수료 상태, 자원 가용성, 시스템 점검 결과에 따라 달라질 수 있습니다.',
    ],
    pointsJa: [
      '入金は、最終的に利用可能になる前に十分な確認が必要な場合があります。',
      'メンテナンス、混雑、またはリスクレビューの間、出金が遅れる場合があります。',
      '送金のタイミングは、手数料の状態、リソースの可用性、およびシステムチェックによって異なります。',
    ],
    pointsZh: [
      '充值在最终可用前可能需要足够的确认。',
      '在维护、拥塞或风险审查期间，提现可能会延迟。',
      '转账时机取决于费用状态、资源可用性和系统检查。',
    ],
  },
  {
    icon: BatteryCharging,
    titleEn: 'Network Resource & Fee Policy',
    titleKr: '네트워크 자원 및 수수료 정책',
    titleJa: 'ネットワークリソースと手数料ポリシー',
    titleZh: '网络资源与费用政策',
    descEn:
      'Blockchain transaction processing may depend on fee conditions, bandwidth, delegated energy, and network-level resource availability.',
    descKr:
      '블록체인 거래 처리는 수수료 상태, 대역폭, 위임 에너지, 네트워크 자원 가용성에 따라 달라질 수 있습니다.',
    descJa: 'ブロックチェーンの取引処理は、手数料の状態、帯域幅、委任されたエネルギー、およびネットワークレベルのリソースの可用性に依存する場合があります。',
    descZh: '区块链交易处理可能取决于费用状况、带宽、委托能量和网络级资源可用性。',
    pointsEn: [
      'Transaction speeds may vary depending on on-chain resource conditions.',
      'Temporary energy shortages or fee fluctuations may impact execution timing.',
      'The platform may optimize resource allocation for service continuity.',
    ],
    pointsKr: [
      '온체인 자원 상태에 따라 거래 속도가 달라질 수 있습니다.',
      '일시적 에너지 부족이나 수수료 변동은 실행 시점에 영향을 줄 수 있습니다.',
      '서비스 연속성을 위해 플랫폼이 자원 배분을 최적화할 수 있습니다.',
    ],
    pointsJa: [
      '取引速度は、オンチェーンのリソース条件によって異なる場合があります。',
      '一時的なエネルギー不足や手数料の変動は、実行のタイミングに影響を与える可能性があります。',
      'プラットフォームは、サービスの継続性のためにリソース割り当てを最適化する場合があります。',
    ],
    pointsZh: [
      '交易速度可能因链上资源状况而异。',
      '临时能量短缺或费用波动可能会影响执行时机。',
      '平台可以针对服务连续性优化资源分配。',
    ],
  },
  {
    icon: Server,
    titleEn: 'Infrastructure Stability Policy',
    titleKr: '인프라 안정성 정책',
    titleJa: 'インフラの安定性ポリシー',
    titleZh: '基础设施稳定性政策',
    descEn:
      'KORION maintains continuity through monitoring, controlled deployment, service redundancy considerations, and protective operational safeguards.',
    descKr:
      'KORION은 모니터링, 통제된 배포, 이중화 고려, 보호 중심 운영 안전장치를 통해 서비스 연속성을 유지합니다.',
    descJa: 'KORIONは、監視、制御された展開、サービスの冗長性の考慮、および保護的な運用上の安全策を通じて継続性を維持します。',
    descZh: 'KORION 通过监控、受控部署、服务冗余考虑和保护性运营保障维护连续性。',
    pointsEn: [
      'Maintenance may be performed to preserve reliability and integrity.',
      'Certain features can be temporarily limited to protect the platform.',
      'Continuity planning is built into the operating framework.',
    ],
    pointsKr: [
      '신뢰성과 무결성을 위해 점검이 수행될 수 있습니다.',
      '플랫폼 보호를 위해 일부 기능이 일시 제한될 수 있습니다.',
      '연속성 계획은 운영 프레임워크에 포함됩니다.',
    ],
    pointsJa: [
      '信頼性と完全性を維持するためにメンテナンスが行われる場合があります。',
      'プラットフォームを保護するために、特定の機能が一時的に制限される場合があります。',
      '継続性計画は運営フレームワークに組み込まれています。',
    ],
    pointsZh: [
      '可能会执行维护以保持可靠性和完整性。',
      '为了保护平台，某些功能可能会被临时限制。',
      '连续性计划已纳入运营框架。',
    ],
  },
  {
    icon: Scale,
    titleEn: 'User Protection & Compliance Guidance',
    titleKr: '사용자 보호 및 컴플라이언스 안내',
    titleJa: 'ユーザー保護とコンプライアンスのガイダンス',
    titleZh: '用户保护与合规指南',
    descEn:
      'User safety measures may include account checks, transaction screening, behavior review, and temporary restrictions when necessary.',
    descKr:
      '사용자 보호 조치에는 계정 확인, 거래 스크리닝, 행위 검토, 필요 시 임시 제한이 포함될 수 있습니다.',
    descJa: 'ユーザーの安全対策には、アカウントチェック、取引のスクリーニング、行動レビュー、および必要に応じた一時的な制限が含まれる場合があります。',
    descZh: '用户安全措施可能包括账户检查、交易筛选、行为审查以及必要时的临时限制。',
    pointsEn: [
      'Additional verification may be requested in certain cases.',
      'Misuse, abuse, or suspicious patterns may trigger protection controls.',
      'The platform may apply safety procedures for ecosystem integrity.',
    ],
    pointsKr: [
      '특정 경우 추가 확인 절차가 요청될 수 있습니다.',
      '오용, 남용, 의심 패턴은 보호 통제를 유발할 수 있습니다.',
      '생태계 무결성을 위해 안전 절차가 적용될 수 있습니다.',
    ],
    pointsJa: [
      '特定の場合には追加の検証が要求される場合があります。',
      '誤用、悪用、または疑わしいパターンは、保護制御を誘発する可能性があります。',
      'プラットフォームは、エコシステムの完全性のために安全手順を適用する場合があります。',
    ],
    pointsZh: [
      '在某些情况下可能会要求额外的验证。',
      '滥用、虐待或可疑模式可能会触发保护控制。',
      '平台可以针对生态系统完整性应用安全程序。',
    ],
  },
  {
    icon: Eye,
    titleEn: 'Transparency & User Notice Policy',
    titleKr: '투명성 및 사용자 고지 정책',
    titleJa: '透明性とユーザー通知ポリシー',
    titleZh: '透明度与用户通知政策',
    descEn:
      'KORION aims to communicate important standards, operational changes, service notices, and policy updates through official channels.',
    descKr:
      'KORION은 공식 채널을 통해 주요 기준, 운영 변경, 서비스 고지, 정책 업데이트를 투명하게 안내하는 것을 지향합니다.',
    descJa: 'KORIONは、公式チャンネルを通じて、重要な基準、運営の変更、サービスの通知、およびポリシーの更新を伝達することを目指しています。',
    descZh: 'KORION 旨在通过官方渠道沟通重要标准、运营变更、服务通知和政策更新。',
    pointsEn: [
      'Material updates may be published through official communication channels.',
      'Policies may evolve with ecosystem growth and service expansion.',
      'Users are encouraged to review this page periodically.',
    ],
    pointsKr: [
      '중요 업데이트는 공식 커뮤니케이션 채널을 통해 공지될 수 있습니다.',
      '정책은 생태계 성장과 서비스 확장에 따라 발전할 수 있습니다.',
      '사용자는 본 페이지를 주기적으로 확인하는 것이 권장됩니다.',
    ],
    pointsJa: [
      '重要な更新は、公式の通信チャンネルを通じて公開される場合があります。',
      'ポリシーは、エコシステムの成長とサービスの拡大に合わせて進化する場合があります。',
      'ユーザーは、このページを定期的に確認することをお勧めします。',
    ],
    pointsZh: [
      '重大更新可以通过官方沟通渠道发布。',
      '政策可能随着生态系统的增长和服务扩张而演变。',
      '鼓励用户定期查看此页面。',
    ],
  },
];

const principles: PrincipleItem[] = [
  {
    titleEn: 'Security First',
    titleKr: '보안 우선',
    titleJa: 'セキュリティ優先',
    titleZh: '安全第一',
    descEn:
      'Asset protection, wallet integrity, and controlled execution are prioritized across all critical operations.',
    descKr:
      '자산 보호, 지갑 무결성, 통제된 실행 원칙은 모든 핵심 운영에서 최우선입니다.',
    descJa: '資産保護、ウォレットの完全性、および制御された実行は、すべての重要な業務において優先されます。',
    descZh: '资产保护、钱包完整性和受控执行在所有关键运营中都具有优先权。',
  },
  {
    titleEn: 'Operational Reliability',
    titleKr: '운영 신뢰성',
    titleJa: '運営の信頼性',
    titleZh: '运营可靠性',
    descEn:
      'KORION is designed to sustain stable service standards through monitoring, review, and controlled operational responses.',
    descKr:
      'KORION은 모니터링, 검토, 통제된 대응을 통해 안정적인 서비스 기준을 유지하도록 설계됩니다.',
    descJa: 'KORIONは、監視、レビュー、および制御された運営上の対応を通じて、安定したサービス基準を維持するように設計されています。',
    descZh: 'KORION 旨在通过监控、审查和受控的业务响应维持稳定的服务标准。',
  },
  {
    titleEn: 'Controlled Exposure',
    titleKr: '통제된 노출',
    titleJa: '制御された露出',
    titleZh: '受控风险暴露',
    descEn:
      'Wallet, reserve, and treasury structures are organized to reduce unnecessary direct exposure.',
    descKr:
      '지갑, 준비금, 재무 구조는 불필요한 직접 노출을 줄이도록 구성됩니다.',
    descJa: 'ウォレット、リザーブ、およびトレジャリーの構造は、不要な直接露出を減らすように組織されています。',
    descZh: '钱包、储备和库房结构的组织旨在减少不必要的直接风险暴露。',
  },
  {
    titleEn: 'User-Centered Protection',
    titleKr: '사용자 중심 보호',
    titleJa: 'ユーザー中心の保護',
    titleZh: '以用户为中心的保护',
    descEn:
      'Protective checks and operational controls help reduce abnormal activity and preserve safer participation.',
    descKr:
      '보호 점검과 운영 통제는 비정상 활동을 줄이고 더 안전한 참여를 돕습니다.',
    descJa: '保護チェックと運用管理は、異常な活動を減らし、より安全な参加を維持するのに役立ちます。',
    descZh: '保护性检查和运营控制有助于减少异常活动并保持更安全的参与。',
  },
  {
    titleEn: 'Transparent Communication',
    titleKr: '투명한 커뮤니케이션',
    titleJa: '透明なコミュニケーション',
    titleZh: '透明沟通',
    descEn:
      'Important platform notices and policy guidance are intended to be communicated clearly through official resources.',
    descKr:
      '중요 플랫폼 고지와 정책 안내는 공식 리소스를 통해 명확히 전달되는 것을 원칙으로 합니다.',
    descJa: '重要なプラットフォームの通知とポリシーのガイダンスは、公式のリソースを通じて明確に伝達されることを目的としています。',
    descZh: '重要的平台通知和政策指南旨在通过官方资源进行清晰的沟通。',
  },
  {
    titleEn: 'Scalable Governance',
    titleKr: '확장 가능한 거버넌스',
    titleJa: '拡張可能なガバナンス',
    titleZh: '可扩展治理',
    descEn:
      'The policy structure is designed to support future growth, additional products, and broader ecosystem operations.',
    descKr:
      '정책 구조는 향후 성장, 추가 제품, 더 넓은 생태계 운영을 지원하도록 설계됩니다.',
    descJa: 'ポリシー構造は、将来の成長、追加の製品、およびより広範なエコシステムの運営をサポートするように設計されています。',
    descZh: '政策结构旨在支持未来的增长、额外的产品和更广泛的生态系统运营。',
  },
];

const architectureItems: ArchitectureItem[] = [
  {
    icon: Wallet,
    titleEn: 'Operational Wallet Layer',
    titleKr: '운영 지갑 레이어',
    titleJa: '運営用ウォレットレイヤー',
    titleZh: '运营钱包层',
    descEn:
      'This layer supports routine service execution such as user-facing transfers, balance handling, and operational transaction processing within controlled limits.',
    descKr:
      '이 레이어는 사용자 전송, 잔액 처리, 운영성 거래 실행 등 일상 서비스 수행을 지원하며 통제된 한도 내에서 운용됩니다.',
    descJa: 'このレイヤーは、制御された制限内でのユーザー向けの送金、残高処理、運営上の取引処理などの日常的なサービスの実行をサポートします。',
    descZh: '该层支持日常服务执行，如面向用户的转账、余额处理以及受控限制内的运营交易处理。',
    tagsEn: ['Service Execution', 'Controlled Limits', 'Active Processing'],
    tagsKr: ['서비스 실행', '통제된 한도', '실시간 처리'],
    tagsJa: ['サービス実行', '制御された制限', 'アクティブな処理'],
    tagsZh: ['服务执行', '受控限制', '活跃处理'],
  },
  {
    icon: Database,
    titleEn: 'Internal Ledger & Queue Layer',
    titleKr: '내부 원장 및 큐 레이어',
    titleJa: '内部台帳とキューレイヤー',
    titleZh: '内部账本与队列层',
    descEn:
      'Internal balance accounting, pending state management, and withdrawal queue control help align service logic with execution integrity.',
    descKr:
      '내부 잔액 회계, 대기 상태 관리, 출금 큐 통제를 통해 서비스 로직과 실행 무결성을 일치시킵니다.',
    descJa: '内部残高会計、保留状態管理、および出金キュー管理により、サービスロジックと実行の完全性を一致させます。',
    descZh: '内部余额核算、待处理状态管理和提现队列控制有助于使服务逻辑与执行完整性保持一致。',
    tagsEn: ['Balance Integrity', 'Queue Control', 'Pending States'],
    tagsKr: ['잔액 무결성', '큐 제어', '대기 상태'],
    tagsJa: ['残高の完全性', 'キュー制御', '保留状態'],
    tagsZh: ['余额完整性', '队列控制', '待处理状态'],
  },
  {
    icon: Vault,
    titleEn: 'Reserve / Cold Custody Layer',
    titleKr: '준비금 / 콜드 커스터디 레이어',
    titleJa: 'リザーブ・コールドカストディレイヤー',
    titleZh: '储备 / 冷托管层',
    descEn:
      'Long-term reserve handling is separated from active transaction flow to reduce direct exposure and improve treasury protection standards.',
    descKr:
      '장기 준비금 관리는 실시간 거래 흐름과 분리되어 직접 노출을 줄이고 재무 보호 수준을 높입니다.',
    descJa: '長期的なリザーブの処理は、直接的な露出を減らし、トレジャリーの保護基準を向上させるために、アクティブな取引フローから分離されています。',
    descZh: '长期储备处理与活跃交易流分离，以减少直接风险暴露并提高库房保护标准。',
    tagsEn: ['Reserve Isolation', 'Reduced Exposure', 'Treasury Safety'],
    tagsKr: ['준비금 분리', '노출 최소화', '재무 안전'],
    tagsJa: ['リザーブの隔離', '露出の低減', 'トレジャリーの安全'],
    tagsZh: ['储备隔离', '减少曝露', '库房安全'],
  },
];

const withdrawalFlow: FlowStep[] = [
  {
    step: '01',
    titleEn: 'Request Creation',
    titleKr: '출금 요청 생성',
    titleJa: 'リクエストの作成',
    titleZh: '创建请求',
    descEn:
      'A withdrawal request is created and the requested amount may enter a pending or locked state under internal balance rules.',
    descKr:
      '출금 요청이 생성되며 요청 금액은 내부 잔액 규칙에 따라 pending 또는 잠금 상태로 전환될 수 있습니다.',
    descJa: '出金リクエストが作成され、リクエストされた金額は内部の残高ルールに基づき、保留またはロック状態になる場合があります。',
    descZh: '创建提现请求，根据内部余额规则，请求金额可能进入待处理或锁定状态。',
  },
  {
    step: '02',
    titleEn: 'Pre-Validation',
    titleKr: '사전 검증',
    titleJa: '事前検証',
    titleZh: '预验证',
    descEn:
      'The system may verify balance consistency, account status, limits, destination conditions, and service-level execution rules.',
    descKr:
      '시스템은 잔액 정합성, 계정 상태, 한도, 목적지 조건, 서비스 실행 기준을 검증할 수 있습니다.',
    descJa: 'システムは、残高の整合性、アカウントの状態、制限、宛先の条件、およびサービスレベルの実行ルールを検証する場合があります。',
    descZh: '系统可以验证余额一致性、账户状态、限制、目的地条件和服务级执行规则。',
  },
  {
    step: '03',
    titleEn: 'Risk Screening',
    titleKr: '리스크 스크리닝',
    titleJa: 'リスクスクリーニング',
    titleZh: '风险筛选',
    descEn:
      'Behavior patterns, unusual amounts, abnormal timing, and suspicious transaction signals may be reviewed before release.',
    descKr:
      '행동 패턴, 비정상 금액, 이상 시점, 의심 신호 등이 출금 전 검토될 수 있습니다.',
    descJa: '行動パターン、異常な金額、異常なタイミング、および疑わしい取引のシグナルが、リリース前にレビューされる場合があります。',
    descZh: '在释放前可以审查行为模式、异常金额、异常时机和可疑交易信号。',
  },
  {
    step: '04',
    titleEn: 'Resource Allocation',
    titleKr: '네트워크 자원 배정',
    titleJa: 'リソースの割り当て',
    titleZh: '资源分配',
    descEn:
      'The platform checks network resource conditions such as fee status, energy availability, and execution timing feasibility.',
    descKr:
      '플랫폼은 수수료 상태, 에너지 가용성, 실행 가능 시점 등 네트워크 자원 상태를 확인합니다.',
    descJa: 'プラットフォームは、手数料の状態、エネルギーの可用性、実行タイミングの実現可能性などのネットワークリソースの状態を確認します。',
    descZh: '平台检查网络资源状况，如费用状态、能量可用性和执行时机的可行性。',
  },
  {
    step: '05',
    titleEn: 'Execution & Settlement',
    titleKr: '실행 및 정산',
    titleJa: '実行と決済',
    titleZh: '执行与结算',
    descEn:
      'Once approved, the transaction is executed and internal status records are updated to reflect final settlement progress.',
    descKr:
      '승인 후 거래가 실행되며 내부 상태 기록은 최종 정산 진행에 맞춰 업데이트됩니다.',
    descJa: '承認されると、取引が実行され、最終的な決済の進捗を反映するために内部のステータス記録が更新されます。',
    descZh: '一旦获得批准，交易将被执行，并更新内部状态记录以反映最终结算进度。',
  },
];

const engineCards: EngineCard[] = [
  {
    icon: ScanSearch,
    titleEn: 'Behavior Monitoring',
    titleKr: '행동 패턴 모니터링',
    titleJa: '行動モニタリング',
    titleZh: '行为监控',
    descEn:
      'The platform may watch for abnormal transaction behavior, repeated attempts, velocity changes, or suspicious execution patterns.',
    descKr:
      '플랫폼은 비정상 거래 행위, 반복 시도, 속도 변화, 의심 실행 패턴을 감시할 수 있습니다.',
    descJa: 'プラットフォームは、異常な取引行動、繰り返しの試行、速度の変化、または疑わしい実行パターンを監視する場合があります。',
    descZh: '平台可以观察异常交易行为、重复尝试、速度变化或可疑执行模式。',
  },
  {
    icon: TimerReset,
    titleEn: 'Queue & Delay Control',
    titleKr: '큐 및 지연 제어',
    titleJa: 'キューと遅延の制御',
    titleZh: '队列与延迟控制',
    descEn:
      'Transactions may be queued, delayed, or staged to preserve stability under congestion, maintenance, or review conditions.',
    descKr:
      '혼잡, 점검, 검토 상황에서는 안정성 유지를 위해 거래가 큐에 들어가거나 지연·단계 처리될 수 있습니다.',
    descJa: '混雑、メンテナンス、またはレビューの条件下で安定性を維持するために、取引はキューに入れられたり、遅延したり、段階的に処理されたりする場合があります。',
    descZh: '在拥塞、维护或审查条件下，交易可能会排队、延迟或分阶段进行以保持稳定性。',
  },
  {
    icon: RadioTower,
    titleEn: 'Network Condition Awareness',
    titleKr: '네트워크 상태 인지',
    titleJa: 'ネットワーク状態の認識',
    titleZh: '网络状况感知',
    descEn:
      'Resource-sensitive chains may require timing control based on bandwidth, energy, fee spikes, or chain congestion.',
    descKr:
      '자원 민감형 체인은 대역폭, 에너지, 수수료 급등, 체인 혼잡에 따른 시점 제어가 필요할 수 있습니다.',
    descJa: 'リソースに敏感なチェーンでは、帯域幅、エネルギー、手数料の急騰、またはチェーンの混雑に基づいたタイミング制御が必要になる場合があります。',
    descZh: '对资源敏感的链可能需要基于带宽、能量、费用尖峰或链拥塞的时间控制。',
  },
  {
    icon: Workflow,
    titleEn: 'Operational Escalation',
    titleKr: '운영 단계적 대응',
    titleJa: '運営上のエスカレーション',
    titleZh: '运营升级',
    descEn:
      'When needed, the system may shift a request from automatic handling to enhanced review or stricter internal verification.',
    descKr:
      '필요 시 시스템은 자동 처리 요청을 강화 검토 또는 더 엄격한 내부 확인 단계로 전환할 수 있습니다.',
    descJa: '必要に応じて、システムはリクエストを自動処理から強化されたレビューまたはより厳格な内部検証に移行する場合があります。',
    descZh: '需要时，系统可以将请求从自动处理转为加强审查或更严格的内部验证。',
  },
];

const faqs: FaqItem[] = [
  {
    qEn: 'Why is a deposit visible on-chain but not yet fully available in the app?',
    qKr: '온체인에는 입금이 보이는데 앱에서 바로 사용 가능하지 않은 이유는 무엇인가요?',
    qJa: 'オンチェーンでは入金が確認できるのに、アプリでまだ利用できないのはなぜですか？',
    qZh: '为什么充值在链上可见，但在应用中尚未完全可用？',
    aEn:
      'On-chain visibility and service availability are not always identical. The platform may require additional confirmation, internal indexing, or safety checks before reflecting the final usable balance.',
    aKr:
      '온체인 반영과 서비스 내 사용 가능 상태는 항상 동일하지 않습니다. 최종 사용 가능 잔액으로 반영되기 전 추가 확인, 내부 인덱싱, 안전 점검이 필요할 수 있습니다.',
    aJa: 'オンチェーンでの表示とサービス内での可用性は必ずしも一致しません。最終的な利用可能残高を反映する前に、プラットフォームでは追加の確認、内部インデックス作成、または安全チェックが必要になる場合があります。',
    aZh: '链上可见性与服务可用性并不总是完全一致。平台在反映最终可用余额前可能需要额外的确认、内部索引或安全检查。',
  },
  {
    qEn: 'Why can a withdrawal be delayed even after I submitted it successfully?',
    qKr: '출금 신청이 정상 접수되었는데도 지연될 수 있는 이유는 무엇인가요?',
    qJa: '出金申請が正常に受理された後でも遅延する場合があるのはなぜですか？',
    qZh: '为什么提交成功后提现仍可能延迟？',
    aEn:
      'Withdrawals may be delayed due to risk review, network congestion, maintenance, fee conditions, resource allocation, or other protective operating procedures.',
    aKr:
      '출금은 리스크 검토, 네트워크 혼잡, 점검, 수수료 상태, 자원 배정, 기타 보호 중심 운영 절차로 인해 지연될 수 있습니다.',
    aJa: '出金は、リスクレビュー、ネットワークの混雑、メンテナンス、手数料の状態、リソースの割り当て、またはその他の保護的な運用手順により遅延する場合があります。',
    aZh: '提现可能因风险审查、网络拥塞、维护、费用状况、资源分配或其他保护性运营程序而延迟。',
  },
  {
    qEn: 'Can the platform temporarily restrict certain features?',
    qKr: '플랫폼이 일부 기능을 일시 제한할 수 있나요?',
    qJa: 'プラットフォームが特定の機能を一時的に制限することはありますか？',
    qZh: '平台可以临时限制某些功能吗？',
    aEn:
      'Yes. Certain features may be temporarily restricted during security response, maintenance, abnormal activity review, or infrastructure protection events.',
    aKr:
      '네. 보안 대응, 점검, 이상 행위 검토, 인프라 보호 상황에서는 일부 기능이 일시 제한될 수 있습니다.',
    aJa: 'はい。セキュリティ対応、メンテナンス、異常な活動のレビュー、またはインフラ保護イベントの間、特定の機能が一時的に制限される場合があります。',
    aZh: '是的。在安全响应、维护、异常活动审查或基础设施保护事件期间，某些功能可能会被临时限制。',
  },
  {
    qEn: 'Do users have responsibilities under this policy page?',
    qKr: '이 정책 페이지 기준에서 사용자 책임도 있나요?',
    qJa: 'このポリシーページの下でユーザーに責任はありますか？',
    qZh: '根据此政策页面，用户负有责任吗？',
    aEn:
      'Yes. Users are expected to protect account credentials, device security, destination accuracy, and follow service guidance published through official channels.',
    aKr:
      '네. 사용자는 계정 정보, 기기 보안, 전송 목적지 정확성 보호 및 공식 채널의 서비스 안내 준수가 요구됩니다.',
    aJa: 'はい。ユーザーは、アカウントの資格情報、デバイスのセキュリティ、送信先の正確性を保護し、公式チャンネルを通じて公開されたサービスガイダンスに従うことが期待されます。',
    aZh: '是的。用户应保护账户凭据、设备安全、目的地准确性，并遵循通过官方渠道发布的业务指南。',
  },
];

const policyTimeline = [
  {
    date: 'v1.0',
    titleEn: 'Base Operating Policy',
    titleKr: '기본 운영 정책',
    titleJa: '基本運営ポリシー',
    titleZh: '基础运营政策',
    descEn:
      'Foundational standards for service operation, asset handling, and user guidance.',
    descKr:
      '서비스 운영, 자산 처리, 사용자 안내를 위한 기본 기준 수립.',
    descJa: 'サービス運営、資産処理、およびユーザーガイダンスの基礎となる基準。',
    descZh: '服务运营、资产处理和用户指南的基础标准。',
  },
  {
    date: 'v1.1',
    titleEn: 'Risk & Wallet Control Enhancement',
    titleKr: '리스크 및 지갑 통제 강화',
    titleJa: 'リスクとウォレット管理の強化',
    titleZh: '风险与钱包控制增强',
    descEn:
      'Expanded guidance for wallet segregation, review procedures, and risk screening logic.',
    descKr:
      '지갑 분리, 검토 절차, 리스크 스크리닝 기준을 확장 반영.',
    descJa: 'ウォレットの隔離、レビュー手順、およびリスクスクリーニングロジックに関する拡張されたガイダンス。',
    descZh: '关于钱包隔离、审查程序和风险筛选逻辑的扩展指南。',
  },
  {
    date: 'v1.2',
    titleEn: 'Network Resource Policy Expansion',
    titleKr: '네트워크 자원 정책 확장',
    titleJa: 'ネットワークリソースポリシーの拡張',
    titleZh: '网络资源政策扩展',
    descEn:
      'Added fee, energy, bandwidth, and chain-condition-aware execution standards.',
    descKr:
      '수수료, 에너지, 대역폭, 체인 상태 기반 실행 기준 추가.',
    descJa: '手数料、エネルギー、帯域幅、およびチェーンの状態を認識した実行基準を追加。',
    descZh: '增加了费用、能量、带宽和感知链状况的执行标准。',
  },
];

const highlights = [
  { icon: Landmark, labelEn: 'Governance', labelKr: '거버넌스', labelJa: 'ガバナンス', labelZh: '治理' },
  { icon: Wallet, labelEn: 'Wallet Policy', labelKr: '지갑 정책', labelJa: 'ウォレットポリシー', labelZh: '钱包政策' },
  { icon: Activity, labelEn: 'Risk Controls', labelKr: '리스크 통제', labelJa: 'リスク管理', labelZh: '风险控制' },
  { icon: Cpu, labelEn: 'Infrastructure', labelKr: '인프라', labelJa: 'インフラ', labelZh: '基础设施' },
  { icon: Users, labelEn: 'User Protection', labelKr: '사용자 보호', labelJa: 'ユーザー保護', labelZh: '用户保护' },
  { icon: BadgeCheck, labelEn: 'Transparency', labelKr: '투명성', labelJa: '透明性', labelZh: '透明度' },
];

export function PolicyPage() {
  const { t } = useLanguage();

  return (
    <div className="policy-page">
      <section className="policy-page__hero">
        <div className="policy-page__glow policy-page__glow--1" />
        <div className="policy-page__glow policy-page__glow--2" />
        <div className="policy-page__glow policy-page__glow--3" />

        <div className="policy-page__container policy-page__hero-container">
          <div className="policy-page__hero-badge">
            <Sparkles size={16} />
            <span>
              {t(
                'KORION Operational Policy · Risk Management · User Protection · Network Standards',
                'KORION 운영 정책 · 리스크 관리 · 사용자 보호 · 네트워크 기준',
                'KORION 運営ポリシー ・ リスク管理 ・ ユーザー保護 ・ ネットワーク基準',
                'KORION 运营政策 · 风险管理 · 用户保护 · 网络标准'
              )}
            </span>
          </div>

          <h1 className="policy-page__hero-title">
            {t('KORION Platform Policy', 'KORION Platform Policy', 'KORION プラットフォームポリシー', 'KORION 平台政策')}
          </h1>

          <p className="policy-page__hero-desc">
            {t(
              'This page provides the core policy framework for KORION ecosystem and wallet service operations. It integrates standards for operational governance, asset protection, withdrawal review, network resource management, risk controls, user guidance, and service notice practices to strengthen platform trust and stability.',
              '본 페이지는 KORION 생태계와 지갑 서비스 운영을 위한 핵심 정책 프레임워크를 제공합니다. 운영 거버넌스, 자산 보호, 출금 검토, 네트워크 자원 관리, 리스크 통제, 사용자 안내 및 서비스 고지 기준을 통합적으로 정리하여 플랫폼의 신뢰성과 안정성을 강화합니다.',
              'このページは、KORIONエコシステムおよびウォレットサービスの運営のためのコアとなるポリシーフレームワークを提供します。運営ガバナンス、資産保護、出金レビュー、ネットワークリソース管理、リスク管理、ユーザーガイダンス、およびサービス通知の慣行に関する基準を統合し、プラットフォームの信頼性と安定性を強化します。',
              '本页面提供了 KORION 生态系统和钱包业务运营的核心政策框架。它整合了运营治理、资产保护、提现审查、网络资源管理、风险控制、用户指南和服务通知实践的标准，以增强平台信任度和稳定性。'
            )}
          </p>

          <div className="policy-page__hero-actions">
            <a href="#policy-framework" className="policy-page__primary-btn">
              <span>{t('View Policy Framework', '정책 프레임워크 보기', 'ポリシーフレームワークを表示', '查看政策框架')}</span>
              <ChevronRight size={18} />
            </a>

            <a href="#policy-faq" className="policy-page__secondary-btn">
              <span>{t('View User Guidance', '사용자 안내 보기', 'ユーザーガイダンスを表示', '查看用户指南')}</span>
            </a>
          </div>

          <div className="policy-page__hero-highlights">
            {highlights.map((highlight) => {
              const Icon = highlight.icon;
              return (
                <div className="policy-page__highlight-chip" key={highlight.labelEn}>
                  <Icon size={16} />
                  <span>{t(highlight.labelEn, highlight.labelKr, highlight.labelJa, highlight.labelZh)}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="policy-page__overview">
        <div className="policy-page__container">
          <div className="policy-page__overview-grid">
            <div className="policy-page__overview-card">
              <div className="policy-page__overview-icon">
                <ShieldCheck size={22} />
              </div>
              <h3>{t('Asset Protection Focus', '자산 보호 중심 운영', '資産保護重視の運営', '资产保护重心')}</h3>
              <p>
                {t(
                  'All operating standards prioritize asset safety and service continuity.',
                  '모든 운영 기준은 자산 안전성과 서비스 연속성을 최우선으로 고려합니다.',
                  'すべての運営基準において、資産の安全性とサービスの継続性が優先されます。',
                  '所有运营标准均优先考虑资产安全和服务连续性。'
                )}
              </p>
            </div>

            <div className="policy-page__overview-card">
              <div className="policy-page__overview-icon">
                <Layers3 size={22} />
              </div>
              <h3>{t('Layered Control Structure', '다층 통제 구조', '層状の制御構造', '分层控制结构')}</h3>
              <p>
                {t(
                  'Operational, transaction, infrastructure, and network risks are monitored through layered controls.',
                  '운영, 거래, 인프라, 네트워크 리스크를 다층 구조로 감시하고 대응합니다.',
                  '運営、取引、インフラ、およびネットワークのリスクは、層状の制御を通じて監視されます。',
                  '通过分层控制监控运营、交易、基础设施和网络风险。'
                )}
              </p>
            </div>

            <div className="policy-page__overview-card">
              <div className="policy-page__overview-icon">
                <BellRing size={22} />
              </div>
              <h3>{t('Clear Notice Standards', '명확한 고지 기준', '明確な通知基準', '清晰的通知标准')}</h3>
              <p>
                {t(
                  'Important policy and operational changes may be communicated through official standards and channels.',
                  '중요 정책과 운영 변경사항은 공식 기준에 따라 사용자에게 안내될 수 있습니다.',
                  '重要なポリシーおよび運営上の変更は、公式の基準およびチャンネルを通じて伝達される場合があります。',
                  '重要的政策和运营变更可以通过官方标准和渠道进行沟通。'
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="policy-page__framework" id="policy-framework">
        <div className="policy-page__container">
          <div className="policy-page__section-head">
            <span className="policy-page__section-eyebrow">Policy Framework</span>
            <h2>
              {t(
                'An integrated framework for KORION operating policy',
                '운영 정책을 통합한 핵심 프레임워크',
                'KORION運営ポリシーのための統合フレームワーク',
                'KORION 运营政策的综合框架'
              )}
            </h2>
            <p>
              {t(
                'This is not a simple terms page, but a structured policy architecture covering practical operating standards and asset protection principles.',
                '단순한 약관 페이지가 아니라, 실제 운영 기준과 자산 보호 원칙을 체계적으로 정리한 플랫폼 정책 구조입니다.',
                'これは単なる規約ページではなく、実用的な運営基準と資産保護の原則を網羅した構造化されたポリシーアーキテクチャです。',
                '这不是一个简单的条款页面，而是一个涵盖实际运营标准和资产保护原则的结构化政策架构。'
              )}
            </p>
          </div>

          <div className="policy-page__framework-grid">
            {frameworkSections.map((section) => {
              const Icon = section.icon;
              return (
                <article className="policy-page__framework-card" key={section.titleEn}>
                  <div className="policy-page__framework-top">
                    <div className="policy-page__framework-icon">
                      <Icon size={22} />
                    </div>
                    <h3>{t(section.titleEn, section.titleKr, section.titleJa, section.titleZh)}</h3>
                  </div>

                  <p className="policy-page__framework-desc">
                    {t(section.descEn, section.descKr, section.descJa, section.descZh)}
                  </p>

                  <ul className="policy-page__framework-list">
                    {t(section.pointsEn, section.pointsKr, section.pointsJa, section.pointsZh).map((point: string) => (
                      <li key={point}>
                        <FileCheck2 size={16} />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="policy-page__architecture">
        <div className="policy-page__container">
          <div className="policy-page__section-head">
            <span className="policy-page__section-eyebrow">
              {t('Wallet Architecture', 'Wallet Architecture', 'ウォレットアーキテクチャ', '钱包架构')}
            </span>
            <h2>
              {t(
                'A separated architecture for operations, ledger control, and reserves',
                '운영 · 원장 · 준비금 기준을 분리한 구조',
                '運営、台帳管理、およびリザーブのための分離されたアーキテクチャ',
                '运营、账本控制和储备的分离架构'
              )}
            </h2>
            <p>
              {t(
                'The KORION policy page presents wallet operations as a structured separation between service execution and asset protection, not just simple custody.',
                'KORION 정책 페이지는 지갑 운영 구조를 단순 보관 개념이 아니라, 서비스 실행과 자산 보호를 분리하는 구조로 설명합니다.',
                'KORIONポリシーページでは、ウォレットの運用を単なるカストディではなく、サービスの実行と資産の保護を構造的に分離したものとして提示しています。',
                'KORION 政策页面将钱包运营呈现为服务执行与资产保护之间的结构化分离，而不仅仅是简单的托管。'
              )}
            </p>
          </div>

          <div className="policy-page__architecture-grid">
            {architectureItems.map((item) => {
              const Icon = item.icon;
              return (
                <article className="policy-page__architecture-card" key={item.titleEn}>
                  <div className="policy-page__architecture-icon">
                    <Icon size={22} />
                  </div>
                  <h3>{t(item.titleEn, item.titleKr, item.titleJa, item.titleZh)}</h3>
                  <p>{t(item.descEn, item.descKr, item.descJa, item.descZh)}</p>

                  <div className="policy-page__architecture-tags">
                    {t(item.tagsEn, item.tagsKr, item.tagsJa, item.tagsZh).map((tag: string) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="policy-page__flow">
        <div className="policy-page__container">
          <div className="policy-page__section-head">
            <span className="policy-page__section-eyebrow">
              {t('Withdrawal Flow', 'Withdrawal Flow', '出金フロー', '提现流程')}
            </span>
            <h2>
              {t(
                'Policy flow from withdrawal request to execution',
                '출금 요청부터 실행까지의 정책 흐름',
                '出金リクエストから実行までのポリシーの流れ',
                '从提现请求到执行的政策流程'
              )}
            </h2>
          </div>

          <div className="policy-page__flow-list">
            {withdrawalFlow.map((item) => (
              <div className="policy-page__flow-item" key={item.step}>
                <div className="policy-page__flow-step">{item.step}</div>
                <div className="policy-page__flow-line" />
                <div className="policy-page__flow-card">
                  <h3>{t(item.titleEn, item.titleKr, item.titleJa, item.titleZh)}</h3>
                  <p>{t(item.descEn, item.descKr, item.descJa, item.descZh)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="policy-page__resources">
        <div className="policy-page__container">
          <div className="policy-page__resources-shell">
            <div className="policy-page__resources-main">
              <span className="policy-page__section-eyebrow">
                {t('Network Resource Policy', 'Network Resource Policy', 'ネットワークリソースポリシー', '网络资源政策')}
              </span>
              <h2>
                {t(
                  'Execution standards aware of TRON energy, bandwidth, and fee conditions',
                  'TRON 에너지 · 대역폭 · 수수료 상태를 고려한 실행 기준',
                  'TRONのエネルギー、帯域幅、および手数料の状態を認識した実行基準',
                  '感知 TRON 能量、带宽和费用状况的执行标准'
                )}
              </h2>
              <p>
                {t(
                  'On resource-sensitive chains, service timing and execution feasibility may be influenced by on-chain conditions. KORION may apply resource-aware operating standards that consider fee spikes, energy shortages, bandwidth conditions, and chain congestion.',
                  '네트워크 자원 기반 체인에서는 서비스 처리 속도와 실행 가능성이 온체인 조건에 영향을 받을 수 있습니다. KORION은 수수료 급등, 에너지 부족, 대역폭 상황, 체인 혼잡도 등을 고려한 자원 인지형 운영 정책을 적용할 수 있습니다.',
                  'リソースに敏感なチェーンでは、サービスのタイミングや実行の実現可能性がオンチェーンの条件に左右される場合があります。KORIONは、手数料の急騰、エネルギー不足、帯域幅の状態、およびチェーンの混雑を考慮した、リソースを認識した運営基準を適用する場合があります。',
                  '在对资源敏感的链上，业务时机和执行可行性可能会受到链上状况的影响。KORION 可以应用资源感知型运营标准，考虑费用激增、能量短缺、带宽状况和链拥塞。'
                )}
              </p>

              <div className="policy-page__resource-points">
                <div className="policy-page__resource-point">
                  <Clock3 size={18} />
                  <span>
                    {t(
                      'Execution timing may vary based on network conditions.',
                      '네트워크 상태에 따라 처리 시점이 달라질 수 있습니다.',
                      'ネットワークの状態により、実行のタイミングが異なる場合があります。',
                      '执行时机可能因网络状况而异。'
                    )}
                  </span>
                </div>
                <div className="policy-page__resource-point">
                  <BatteryCharging size={18} />
                  <span>
                    {t(
                      'Energy or bandwidth availability may influence service execution policy.',
                      '에너지 또는 대역폭 가용성은 서비스 실행 정책에 반영될 수 있습니다.',
                      'エネルギーまたは帯域幅の可用性は、サービスの実行ポリシーに影響を与える可能性があります。',
                      '能量或带宽可用性可能会影响服务执行政策。'
                    )}
                  </span>
                </div>
                <div className="policy-page__resource-point">
                  <CheckCircle2 size={18} />
                  <span>
                    {t(
                      'The platform balances resource efficiency and service continuity.',
                      '플랫폼은 자원 효율성과 서비스 연속성 사이의 균형을 고려합니다.',
                      'プラットフォームは、リソース効率とサービスの継続性のバランスを考慮します。',
                      '平台平衡资源效率和服务连续性。'
                    )}
                  </span>
                </div>
              </div>
            </div>

            <div className="policy-page__resources-side">
              <div className="policy-page__resource-stat">
                <span>{t('Policy View', '정책 관점', 'ポリシーの見解', '政策观点')}</span>
                <strong>{t('Resource-Aware Operations', '자원 인지형 운영', 'リソース認識型の運営', '资源感知型运营')}</strong>
              </div>
              <div className="policy-page__resource-stat">
                <span>{t('Execution Basis', '처리 기준', '実行基準', '执行基础')}</span>
                <strong>{t('Fee · Energy · Congestion', '수수료 · 에너지 · 혼잡도', '手数料・エネルギー・混雑', '费用 · 能量 · 拥塞')}</strong>
              </div>
              <div className="policy-page__resource-stat">
                <span>{t('Goal', '목표', '目標', '目标')}</span>
                <strong>{t('Stability & Continuity', '안정성과 지속성', '安定性と継続性', '稳定性与持续性')}</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="policy-page__engine">
        <div className="policy-page__container">
          <div className="policy-page__section-head">
            <span className="policy-page__section-eyebrow">
              {t('Risk Engine', 'Risk Engine', 'リスクエンジン', '风险引擎')}
            </span>
            <h2>
              {t(
                'An operational risk engine perspective for platform protection',
                '플랫폼 보호를 위한 운영형 리스크 엔진 관점',
                'プラットフォーム保護のための運用型リスクエンジンの視点',
                '用于平台保护的运营风险引擎视角'
              )}
            </h2>
          </div>

          <div className="policy-page__engine-grid">
            {engineCards.map((card) => {
              const Icon = card.icon;
              return (
                <article className="policy-page__engine-card" key={card.titleEn}>
                  <div className="policy-page__engine-icon">
                    <Icon size={20} />
                  </div>
                  <h3>{t(card.titleEn, card.titleKr, card.titleJa, card.titleZh)}</h3>
                  <p>{t(card.descEn, card.descKr, card.descJa, card.descZh)}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="policy-page__principles">
        <div className="policy-page__container">
          <div className="policy-page__section-head">
            <span className="policy-page__section-eyebrow">
              {t('Core Principles', 'Core Principles', 'コア原則', '核心原则')}
            </span>
            <h2>
              {t(
                'Core principles shaping the KORION policy standard',
                'KORION 정책을 구성하는 핵심 원칙',
                'KORIONポリシー基準を形成するコア原則',
                '塑造 KORION 政策标准的核心原则'
              )}
            </h2>
          </div>

          <div className="policy-page__principles-grid">
            {principles.map((item) => (
              <div className="policy-page__principle-card" key={item.titleEn}>
                <h3>{t(item.titleEn, item.titleKr, item.titleJa, item.titleZh)}</h3>
                <p>{t(item.descEn, item.descKr, item.descJa, item.descZh)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="policy-page__timeline">
        <div className="policy-page__container">
          <div className="policy-page__section-head">
            <span className="policy-page__section-eyebrow">
              {t('Policy Evolution', 'Policy Evolution', 'ポリシーの進化', '政策演变')}
            </span>
            <h2>
              {t(
                'Operating standards evolve with ecosystem growth',
                '운영 기준은 생태계 성장에 따라 발전합니다',
                '運営基準はエコシステムの成長とともに進化します',
                '运营标准随着生态系统的增长而演变'
              )}
            </h2>
          </div>

          <div className="policy-page__timeline-list">
            {policyTimeline.map((item) => (
              <div className="policy-page__timeline-item" key={item.date + item.titleEn}>
                <div className="policy-page__timeline-badge">{item.date}</div>
                <div className="policy-page__timeline-content">
                  <h3>{t(item.titleEn, item.titleKr, item.titleJa, item.titleZh)}</h3>
                  <p>{t(item.descEn, item.descKr, item.descJa, item.descZh)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="policy-page__faq" id="policy-faq">
        <div className="policy-page__container">
          <div className="policy-page__faq-shell">
            <div className="policy-page__faq-left">
              <span className="policy-page__section-eyebrow">
                {t('User Guidance', 'User Guidance', 'ユーザーガイダンス', '用户指南')}
              </span>
              <h2>
                {t(
                  'Policy guidance users most often need',
                  '사용자가 자주 궁금해하는 정책 안내',
                  'ユーザーが最も必要とするポリシーガイダンス',
                  '用户最常需要的政策指南'
                )}
              </h2>
              <p>
                {t(
                  'This section covers practical questions users often have during real service use, including deposit availability, withdrawal delay, temporary restrictions, and user responsibility.',
                  '입금 반영 시점, 출금 지연, 기능 제한, 사용자 책임 등 실제 서비스 이용 중 자주 궁금해지는 핵심 내용을 정리했습니다.',
                  'このセクションでは、入金の可用性、出金の遅延、一時的な制限、ユーザーの責任など、実際のサービス利用中にユーザーが抱くことの多い実用的な質問をカバーしています。',
                  '此部分涵盖了用户在实际使用服务过程中经常遇到的实际问题，包括充值可用性、提现延迟、临时限制和用户责任。'
                )}
              </p>
            </div>

            <div className="policy-page__faq-right">
              {faqs.map((item) => (
                <div className="policy-page__faq-item" key={item.qEn}>
                  <div className="policy-page__faq-q">
                    <HelpCircle size={18} />
                    <h3>{t(item.qEn, item.qKr, item.qJa, item.qZh)}</h3>
                  </div>
                  <p>{t(item.aEn, item.aKr, item.aJa, item.aZh)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="policy-page__final">
        <div className="policy-page__container">
          <div className="policy-page__final-panel">
            <div className="policy-page__final-icon">
              <ArrowUpRight size={22} />
            </div>

            <div className="policy-page__final-content">
              <h2>
                {t(
                  'Purpose and application direction of this policy page',
                  '정책 페이지의 목적과 적용 방향',
                  'このポリシーページの目的と適用方向',
                  '此政策页面的目的和应用方向'
                )}
              </h2>
              <p>
                {t(
                  'This policy page serves as a standard reference that communicates the operating principles of the KORION platform and wallet services to users, partners, investors, and stakeholders. Policies may be adjusted as services expand, security standards improve, operating structures evolve, and the ecosystem grows, with the latest standards reflected through official channels and platform resources.',
                  '본 정책 페이지는 KORION 플랫폼과 지갑 서비스의 운영 원칙을 사용자, 파트너, 투자자, 이해관계자에게 명확히 전달하기 위한 기준 문서입니다. 정책은 서비스 확장, 보안 강화, 운영 구조 개선, 생태계 성장에 따라 조정될 수 있으며 최신 기준은 공식 채널과 플랫폼 리소스에 반영될 수 있습니다.',
                  'このポリシーページは、KORIONプラットフォームおよびウォレットサービスの運営原則を、ユーザー、パートナー、投資家、およびステークホルダーに伝えるための標準的なリファレンスとして機能します。ポリシーは、サービスの拡大、セキュリティ基準の向上、運営構造の進化、およびエコシステムの成長に合わせて調整される場合があり、最新の基準は公式チャンネルおよびプラットフォームのリソースを通じて反映されます。',
                  '本政策页面作为标准参考，向用户、合作伙伴、投资者和利益相关者传达 KORION 平台和钱包运营原则。政策可能会随着业务扩张、安全标准提高、运营结构演变和生态系统增长而调整，最新标准将通过官方渠道和平台资源反映。'
                )}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}