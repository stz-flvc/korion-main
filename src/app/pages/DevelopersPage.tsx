import { useEffect, useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router';
import { motion } from 'motion/react';
import {
  ArrowRight,
  BookOpen,
  Building2,
  ChevronDown,
  ChevronRight,
  Code2,
  CreditCard,
  Cpu,
  Database,
  ExternalLink,
  FileCode2,
  Globe,
  KeyRound,
  Layers3,
  LifeBuoy,
  Landmark,
  Network,
  ReceiptText,
  ShieldCheck,
  Store,
  Wallet,
  Webhook,
  Workflow,
  Wrench,
  Boxes,
  Search,
  X,
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import './DevelopersPage.css';

type DocSection = {
  id: string;
  titleEn: string;
  titleKo: string;
  titleJa: string;
  titleZh: string;
  items: {
    id: string;
    labelEn: string;
    labelKo: string;
    labelJa: string;
    labelZh: string;
  }[];
};

type ApiCard = {
  icon: React.ComponentType<{ size?: number }>;
  key: string;
  titleEn: string;
  titleKo: string;
  titleJa: string;
  titleZh: string;
  descEn: string;
  descKo: string;
  descJa: string;
  descZh: string;
  routes: string[];
};

type SdkCard = {
  id: string;
  icon: React.ComponentType<{ size?: number }>;
  titleEn: string;
  titleKo: string;
  titleJa: string;
  titleZh: string;
  descEn: string;
  descKo: string;
  descJa: string;
  descZh: string;
};

type PreregCard = {
  icon: React.ComponentType<{ size?: number }>;
  titleEn: string;
  titleKo: string;
  titleJa: string;
  titleZh: string;
  descEn: string;
  descKo: string;
  descJa: string;
  descZh: string;
};

const docSections: DocSection[] = [
  {
    id: 'start',
    titleEn: 'Getting Started',
    titleKo: '시작하기',
    titleJa: 'はじめに',
    titleZh: '开始使用',
    items: [
      { id: 'overview', labelEn: 'Overview', labelKo: '개요', labelJa: '概要', labelZh: '概览' },
      { id: 'platform', labelEn: 'Platform Structure', labelKo: '플랫폼 구조', labelJa: 'プラットフォーム構造', labelZh: '平台结构' },
      { id: 'quickstart', labelEn: 'Quick Start', labelKo: '빠른 시작', labelJa: 'クイックスタート', labelZh: '快速开始' },
    ],
  },
  {
    id: 'api',
    titleEn: 'API Suite',
    titleKo: 'API 구성',
    titleJa: 'APIスイート',
    titleZh: 'API 套件',
    items: [
      { id: 'wallet-api', labelEn: 'Wallet API', labelKo: 'Wallet API', labelJa: 'Wallet API', labelZh: 'Wallet API' },
      { id: 'payment-api', labelEn: 'Payment API', labelKo: 'Payment API', labelJa: 'Payment API', labelZh: 'Payment API' },
      { id: 'deposit-api', labelEn: 'Deposit API', labelKo: 'Deposit API', labelJa: 'Deposit API', labelZh: 'Deposit API' },
      { id: 'withdrawal-api', labelEn: 'Withdrawal API', labelKo: 'Withdrawal API', labelJa: 'Withdrawal API', labelZh: 'Withdrawal API' },
      { id: 'webhook-api', labelEn: 'Webhook API', labelKo: 'Webhook API', labelJa: 'Webhook API', labelZh: 'Webhook API' },
      { id: 'partner-api', labelEn: 'Partner API', labelKo: 'Partner API', labelJa: 'Partner API', labelZh: 'Partner API' },
    ],
  },
  {
    id: 'sdk',
    titleEn: 'SDK & Tools',
    titleKo: 'SDK 및 도구',
    titleJa: 'SDKとツール',
    titleZh: 'SDK 和工具',
    items: [
      { id: 'javascript-sdk', labelEn: 'JavaScript SDK', labelKo: 'JavaScript SDK', labelJa: 'JavaScript SDK', labelZh: 'JavaScript SDK' },
      { id: 'typescript-sdk', labelEn: 'TypeScript SDK', labelKo: 'TypeScript SDK', labelJa: 'TypeScript SDK', labelZh: 'TypeScript SDK' },
      { id: 'backend-examples', labelEn: 'Backend Examples', labelKo: '백엔드 예제', labelJa: 'バックエンド例', labelZh: '后端示例' },
      { id: 'sandbox', labelEn: 'Sandbox', labelKo: '샌드박스', labelJa: 'サンドボックス', labelZh: '沙盒' },
    ],
  },
  {
    id: 'network',
    titleEn: 'Network & Contract',
    titleKo: '네트워크 및 컨트랙트',
    titleJa: 'ネットワークとコントラクト',
    titleZh: '网络和合约',
    items: [
      { id: 'tron-network', labelEn: 'TRON / TRC20', labelKo: 'TRON / TRC20', labelJa: 'TRON / TRC20', labelZh: 'TRON / TRC20' },
      { id: 'contract-info', labelEn: 'Contract Information', labelKo: '컨트랙트 정보', labelJa: 'コントラクト情報', labelZh: '合约信息' },
      { id: 'token-spec', labelEn: 'Token Specification', labelKo: '토큰 스펙', labelJa: 'トークンスペック', labelZh: '代币规格' },
    ],
  },
  {
    id: 'resources',
    titleEn: 'Developer Resources',
    titleKo: '개발 리소스',
    titleJa: '開発リソース',
    titleZh: '开发者资源',
    items: [
      { id: 'developer-resources', labelEn: 'Resource Overview', labelKo: '리소스 개요', labelJa: 'リソース概要', labelZh: '资源概览' },
      { id: 'auth-guide', labelEn: 'Authentication Guide', labelKo: '인증 가이드', labelJa: '認証ガイド', labelZh: '身份验证指南' },
      { id: 'error-guide', labelEn: 'Error Codes', labelKo: '오류 코드', labelJa: 'エラーコード', labelZh: '错误代码' },
      { id: 'webhook-guide', labelEn: 'Webhook Validation', labelKo: '웹훅 검증', labelJa: 'ウェブフック検証', labelZh: 'Webhook 验证' },
      { id: 'checklist-guide', labelEn: 'Partner Checklist', labelKo: '파트너 체크리스트', labelJa: 'パートナーチェックリスト', labelZh: '合作伙伴清单' },
    ],
  },
  {
    id: 'partner',
    titleEn: 'Partner Program',
    titleKo: '파트너 프로그램',
    titleJa: 'パートナープログラム',
    titleZh: '合作伙伴计划',
    items: [
      { id: 'pre-register', labelEn: 'Pre-registration', labelKo: '사전등록', labelJa: '事前登録', labelZh: '预注册' },
      { id: 'merchant', labelEn: 'Merchant Integration', labelKo: '가맹점 연동', labelJa: 'マーチャント統合', labelZh: '商户集成' },
      { id: 'exchange', labelEn: 'Exchange / Wallet', labelKo: '거래소 / 지갑', labelJa: '取引所 / ウォレット', labelZh: '交易所 / 钱包' },
    ],
  },
];

const apiCards: ApiCard[] = [
  {
    icon: Wallet,
    key: 'wallet',
    titleEn: 'Wallet API',
    titleKo: 'Wallet API',
    titleJa: 'Wallet API',
    titleZh: 'Wallet API',
    descEn: 'Balance queries, wallet state visibility, address retrieval, and asset summaries.',
    descKo: '잔액 조회, 지갑 상태 가시성, 주소 조회, 자산 요약 정보를 제공합니다.',
    descJa: '残高照会、ウォレットの状態、アドレスの取得、資産の要約を提供します。',
    descZh: '提供余额查询、钱包状态可见性、地址检索和资产摘要。',
    routes: ['GET /v1/wallet/balance', 'GET /v1/wallet/address', 'GET /v1/wallet/assets'],
  },
  {
    icon: CreditCard,
    key: 'payment',
    titleEn: 'Payment API',
    titleKo: 'Payment API',
    titleJa: 'Payment API',
    titleZh: 'Payment API',
    descEn: 'Merchant payment creation, order verification, settlement status, and checkout lifecycle.',
    descKo: '가맹점 결제 생성, 주문 검증, 정산 상태, 체크아웃 라이프사이클을 제공합니다.',
    descJa: 'マーチャント決済の作成、注文の検証、決済ステータス、チェックアウトライフサイクルを提供します。',
    descZh: '提供商户支付创建、订单验证、结算状态和结账生命周期。',
    routes: ['POST /v1/payments', 'GET /v1/payments/{id}', 'GET /v1/payments/settlements'],
  },
  {
    icon: Database,
    key: 'deposit',
    titleEn: 'Deposit API',
    titleKo: 'Deposit API',
    titleJa: 'Deposit API',
    titleZh: 'Deposit API',
    descEn: 'Deposit history, confirmation progress, network detection, and inbound transaction tracking.',
    descKo: '입금 내역, 확인 진행 상태, 네트워크 감지, 입금 트랜잭션 추적 기능을 제공합니다.',
    descJa: '入金履歴、確認の進捗、ネットワーク検出、インバウンドトランザクションの追跡機能を提供します。',
    descZh: '提供存款历史、确认进度、网络检测和入站交易跟踪。',
    routes: ['GET /v1/deposits', 'GET /v1/deposits/{id}', 'GET /v1/deposits/status'],
  },
  {
    icon: ReceiptText,
    key: 'withdrawal',
    titleEn: 'Withdrawal API',
    titleKo: 'Withdrawal API',
    titleJa: 'Withdrawal API',
    titleZh: 'Withdrawal API',
    descEn: 'Withdrawal request lifecycle, approval state, broadcast status, and completion tracking.',
    descKo: '출금 요청 라이프사이클, 승인 상태, 브로드캐스트 상태, 완료 추적 기능을 제공합니다.',
    descJa: '出金リクエストのライフサイクル、承認状態、ブロードキャストステータス、完了追跡機能を提供します。',
    descZh: '提供取现请求生命周期、批准状态、广播状态和完成跟踪。',
    routes: ['POST /v1/withdrawals', 'GET /v1/withdrawals/{id}', 'GET /v1/withdrawals/status'],
  },
  {
    icon: Webhook,
    key: 'webhook',
    titleEn: 'Webhook API',
    titleKo: 'Webhook API',
    titleJa: 'Webhook API',
    titleZh: 'Webhook API',
    descEn: 'Event-driven callbacks for payment, deposit, withdrawal, and settlement state changes.',
    descKo: '결제, 입금, 출금, 정산 상태 변경을 위한 이벤트 기반 콜백 구조를 제공합니다.',
    descJa: '支払い、入金、出金、決済の状態変更のためのイベント駆動型コールバックを提供します。',
    descZh: '提供用于支付、存款、取现和结算状态更改的事件驱动型回调。',
    routes: ['POST /v1/webhooks/verify', 'GET /v1/webhooks/events', 'POST /v1/webhooks/test'],
  },
  {
    icon: Building2,
    key: 'partner',
    titleEn: 'Partner API',
    titleKo: 'Partner API',
    titleJa: 'Partner API',
    titleZh: 'Partner API',
    descEn: 'Integration endpoints and onboarding data surfaces for exchanges, wallets, and merchants.',
    descKo: '거래소, 지갑, 가맹점 연동을 위한 엔드포인트와 온보딩 데이터 구조를 제공합니다.',
    descJa: '取引所、ウォレット、マーチャント向けの統合エンドポイントとオンボーディングデータを提供します。',
    descZh: '提供用于交易所、钱包和商户的集成端点和入驻数据。',
    routes: ['GET /v1/partners/profile', 'POST /v1/partners/apply', 'GET /v1/partners/status'],
  },
];

const sdkCards: SdkCard[] = [
  {
    id: 'javascript-sdk',
    icon: Code2,
    titleEn: 'JavaScript SDK',
    titleKo: 'JavaScript SDK',
    titleJa: 'JavaScript SDK',
    titleZh: 'JavaScript SDK',
    descEn: 'Frontend-friendly client package for wallet lookup, balance queries, payment creation, and lightweight service integration.',
    descKo: '지갑 조회, 잔액 확인, 결제 생성, 프론트엔드 중심 연동에 적합한 클라이언트 패키지입니다.',
    descJa: 'ウォレット検索、残高照会、支払い作成、軽量なサービス統合のためのフロントエンド向けクライアントパッケージです。',
    descZh: '适用于钱包查询、余额查询、支付创建和轻量级服务集成的前端友好客户端包。',
  },
  {
    id: 'typescript-sdk',
    icon: Cpu,
    titleEn: 'TypeScript SDK',
    titleKo: 'TypeScript SDK',
    titleJa: 'TypeScript SDK',
    titleZh: 'TypeScript SDK',
    descEn: 'Strongly typed SDK for production-grade integration with typed requests, responses, and safer application development.',
    descKo: '타입이 명확한 요청과 응답 구조를 제공하여 안정적인 서비스 개발에 적합한 SDK입니다.',
    descJa: '型定義されたリクエスト、レスポンス、より安全なアプリケーション開発のための、プロダクショングレードの統合向け強力な型付けSDKです。',
    descZh: '强类型 SDK，用于生产级集成，具有类型化的请求、响应和更安全的应用程序编写。',
  },
  {
    id: 'backend-examples',
    icon: Wrench,
    titleEn: 'Backend Examples',
    titleKo: '백엔드 예제',
    titleJa: 'バックエンド例',
    titleZh: '后端示例',
    descEn: 'Reference implementations for authentication, order verification, webhook validation, and deposit or withdrawal processing.',
    descKo: '인증, 주문 검증, 웹훅 검증, 입출금 처리 흐름을 이해할 수 있는 서버 예제를 제공합니다.',
    descJa: '認証、注文確認、ウェブフック検証、入出金処理のリファレンス実装を提供します。',
    descZh: '提供认证、订单验证、Webhook 验证以及存款或取现处理的参考实现。',
  },
  {
    id: 'sandbox',
    icon: ShieldCheck,
    titleEn: 'Sandbox',
    titleKo: '샌드박스',
    titleJa: 'サンドボックス',
    titleZh: '沙盒',
    descEn: 'A safe test environment for validating API requests, webhook events, and integration behavior before production launch.',
    descKo: '실서비스 적용 전 API 요청, 웹훅 이벤트, 전체 연동 동작을 검증할 수 있는 테스트 환경입니다.',
    descJa: '本番公開前に、APIリクエスト、ウェブフックイベント、統合の動作を検証するための安全なテスト環境です。',
    descZh: '在生产发布之前用于验证 API 请求、Webhook 事件和集成行为的安全测试环境。',
  },
];

const quickLinks = [
  { icon: BookOpen, titleEn: 'Guides', titleKo: '가이드', titleJa: 'ガイド', titleZh: '指南' },
  { icon: FileCode2, titleEn: 'API Reference', titleKo: 'API 레퍼런스', titleJa: 'APIリファレンス', titleZh: 'API 参考' },
  { icon: Code2, titleEn: 'SDK', titleKo: 'SDK', titleJa: 'SDK', titleZh: 'SDK' },
  { icon: Layers3, titleEn: 'Changelog', titleKo: '변경 이력', titleJa: '変更履歴', titleZh: '更新日志' },
];

const topCategories = [
  { icon: BookOpen, href: '#overview', titleEn: 'Getting Started', titleKo: '시작하기', titleJa: 'はじめに', titleZh: '开始使用' },
  { icon: Boxes, href: '#api-suite', titleEn: 'API Suite', titleKo: 'API 구성', titleJa: 'APIスイート', titleZh: 'API 套件' },
  { icon: Code2, href: '#sdk-tools', titleEn: 'SDK', titleKo: 'SDK', titleJa: 'SDK', titleZh: 'SDK' },
  { icon: Wallet, href: '#wallet-api', titleEn: 'Wallet', titleKo: '지갑', titleJa: 'ウォレット', titleZh: '钱包' },
  { icon: CreditCard, href: '#payment-api', titleEn: 'Payments', titleKo: '결제', titleJa: '支払い', titleZh: '支付' },
  { icon: Network, href: '#network-contract', titleEn: 'Network', titleKo: '네트워크', titleJa: 'ネットワーク', titleZh: '网络' },
  { icon: Building2, href: '#preregistration', titleEn: 'Partners', titleKo: '파트너', titleJa: 'パートナー', titleZh: '合作伙伴' },
  { icon: LifeBuoy, href: '#developer-resources', titleEn: 'Resources', titleKo: '리소스', titleJa: 'リソース', titleZh: '资源' },
];

const preregCards: PreregCard[] = [
  {
    icon: Code2,
    titleEn: 'Developer Pre-registration',
    titleKo: '개발자 사전등록',
    titleJa: '開発者事前登録',
    titleZh: '开发者预注册',
    descEn: 'For builders who want early access to API documentation, sandbox credentials, and SDK previews.',
    descKo: 'API 문서, 샌드박스 인증정보, SDK 프리뷰를 먼저 받아보고 싶은 개발자를 위한 등록입니다.',
    descJa: 'APIドキュメント、サンドボックス認証情報、SDKプレビューへの早期アクセスを希望する開発者向けの登録です。',
    descZh: '适用于希望尽早访问 API 文档、沙盒凭据和 SDK 预览的开发者。',
  },
  {
    icon: Store,
    titleEn: 'Merchant / Service Registration',
    titleKo: '가맹점 / 서비스 사전등록',
    titleJa: 'マーチャント / サービス登録',
    titleZh: '商户 / 服务注册',
    descEn: 'For services planning to integrate KORION Pay, settlement flows, or branded wallet experiences.',
    descKo: 'KORION Pay, 정산 흐름, 브랜드 지갑 경험을 연동하려는 서비스 등록용입니다.',
    descJa: 'KORION Pay、決済フロー、またはブランド化されたウォレット体験を統合予定のサービス向けです。',
    descZh: '适用于计划集成 KORION Pay、结算流程或品牌钱包体验的服务。',
  },
  {
    icon: Landmark,
    titleEn: 'Exchange / Wallet Partner Registration',
    titleKo: '거래소 / 지갑 파트너 사전등록',
    titleJa: '取引所 / ウォレットパートナー登録',
    titleZh: '交易所 / 钱包合作伙伴注册',
    descEn: 'For exchanges, custodians, and wallet operators preparing network-level or asset-level integration.',
    descKo: '네트워크 또는 자산 단위 연동을 준비하는 거래소, 커스터디, 지갑 사업자를 위한 등록입니다.',
    descJa: 'ネットワークレベルまたはアセットレベルの統合を準備している取引所、カストディアン、ウォレットオペレーター向けです。',
    descZh: '适用于准备进行网络级或资产级集成的交易所、托管机构和钱包运营商。',
  },
];

function containsQuery(values: string[], query: string) {
  if (!query.trim()) return true;
  const lower = query.trim().toLowerCase();
  return values.some((value) => value && value.toLowerCase().includes(lower));
}

export function DevelopersPage() {
  const { t } = useLanguage();
  const { hash } = useLocation();

  const [openSections, setOpenSections] = useState<string[]>([
    'start',
    'api',
    'sdk',
    'resources',
  ]);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSection, setActiveSection] = useState('overview');

  const tableOfContents = useMemo(
    () => [
      { id: 'overview', label: t('Overview', '개요', '概要', '概览') },
      { id: 'api-suite', label: t('API Suite', 'API 구성', 'APIスイート', 'API 套件') },
      { id: 'sdk-tools', label: t('SDK & Tools', 'SDK 및 도구', 'SDKとツール', 'SDK 和工具') },
      { id: 'network-contract', label: t('Network & Contract', '네트워크 및 컨트랙트', 'ネットワークとコントラクト', '网络和合约') },
      { id: 'developer-resources', label: t('Developer Resources', '개발 리소스', '開発リソース', '开发者资源') },
      { id: 'preregistration', label: t('Pre-registration', '사전등록', '事前登録', '预注册') },
    ],
    [t]
  );

  const toggleSection = (id: string) => {
    setOpenSections((prev) =>
      prev.includes(id) ? prev.filter((sectionId) => sectionId !== id) : [...prev, id]
    );
  };

  const filteredDocSections = useMemo(() => {
    return docSections
      .map((section) => {
        const filteredItems = section.items.filter((item) =>
          containsQuery(
            [section.titleEn, section.titleKo, section.titleJa, section.titleZh, item.labelEn, item.labelKo, item.labelJa, item.labelZh],
            searchQuery
          )
        );

        const sectionMatched = containsQuery([section.titleEn, section.titleKo, section.titleJa, section.titleZh], searchQuery);

        return {
          ...section,
          items: sectionMatched ? section.items : filteredItems,
        };
      })
      .filter((section) => section.items.length > 0 || !searchQuery.trim());
  }, [searchQuery]);

  const filteredApiCards = useMemo(() => {
    return apiCards.filter((card) =>
      containsQuery(
        [
          card.titleEn,
          card.titleKo,
          card.titleJa,
          card.titleZh,
          card.descEn,
          card.descKo,
          card.descJa,
          card.descZh,
          ...card.routes,
        ],
        searchQuery
      )
    );
  }, [searchQuery]);

  const filteredSdkCards = useMemo(() => {
    return sdkCards.filter((card) =>
      containsQuery([card.titleEn, card.titleKo, card.titleJa, card.titleZh, card.descEn, card.descKo, card.descJa, card.descZh], searchQuery)
    );
  }, [searchQuery]);

  const filteredPreregCards = useMemo(() => {
    return preregCards.filter((card) =>
      containsQuery([card.titleEn, card.titleKo, card.titleJa, card.titleZh, card.descEn, card.descKo, card.descJa, card.descZh], searchQuery)
    );
  }, [searchQuery]);

  const filteredToc = useMemo(() => {
    return tableOfContents.filter((item) => containsQuery([item.label], searchQuery));
  }, [tableOfContents, searchQuery]);

  const searchResultAnchors = useMemo(() => {
    const anchors: string[] = [];

    if (containsQuery(['overview', '개요', 'getting started', '시작하기', '概要', '概览'], searchQuery)) {
      anchors.push('overview');
    }
    if (filteredApiCards.length > 0 || containsQuery(['api', 'api suite', 'api 구성', 'apiスイート', 'api 套件'], searchQuery)) {
      anchors.push('api-suite');
    }
    if (filteredSdkCards.length > 0 || containsQuery(['sdk', 'tools', '도구', 'ツール', '工具'], searchQuery)) {
      anchors.push('sdk-tools');
    }
    if (containsQuery(['network', 'contract', '네트워크', '컨트랙트', 'ネットワーク', 'コントラクト', '网络', '合约'], searchQuery)) {
      anchors.push('network-contract');
    }
    if (
      containsQuery(['resources', 'developer resources', '개발 리소스', 'リソース', '资源'], searchQuery)
    ) {
      anchors.push('developer-resources');
    }
    if (
      filteredPreregCards.length > 0 ||
      containsQuery(['pre-registration', '사전등록', 'partners', '파트너', '事前登録', '预注册'], searchQuery)
    ) {
      anchors.push('preregistration');
    }

    return Array.from(new Set(anchors));
  }, [searchQuery, filteredApiCards.length, filteredSdkCards.length, filteredPreregCards.length]);

  useEffect(() => {
    const currentHash = hash.replace('#', '');
    if (currentHash) {
      setActiveSection(currentHash);
    } else {
      setActiveSection('overview');
    }
  }, [hash]);


  const handleAnchorClick = (id: string) => {
    setActiveSection(id);
  };

  const handleSearchEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== 'Enter') return;
    if (searchResultAnchors.length === 0) return;

    const target = document.getElementById(searchResultAnchors[0]);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="developers-docs-page">
      <section className="developers-docs-hero">
        <div className="developers-docs-page__container developers-docs-hero__inner">
          <motion.div
            className="developers-docs-hero__content"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="developers-docs-hero__eyebrow">
              <Globe size={14} />
              <span>{t('KORION Documentation Portal', 'KORION 문서 포털', 'KORION ドキュメントポータル', 'KORION 文档门户')}</span>
            </div>

            <h1>{t('KORION Developer Hub', 'KORION Developer Hub', 'KORION デベロッパーハブ', 'KORION 开发者中心')}</h1>

            <p>
              {t(
                'Access the guides, integration resources, and technical structure needed to work with KORION wallet, payment, webhook, deposit, withdrawal, and TRON-based asset flows.',
                '지갑, 결제, 입출금 상태 추적, 웹훅 이벤트, TRON 기반 자산 구조를 연동하기 위한 문서와 개발 자료를 한 곳에서 제공합니다. 서비스 개발자, 가맹점, 거래소, 지갑 파트너가 실제 연동 흐름을 빠르게 이해할 수 있도록 설계된 허브입니다.',
                'KORIONのウォレット、決済、ウェブフック、入金、出金、およびTRONベースのアセットフローを操作するために必要なガイド、統合リソース、および技術的な構造にアクセスします。',
                '访问使用 KORION 钱包、支付、Webhook、存款、取现和基于 TRON 的资产流所需的指南、集成资源和技术结构。'
              )}
            </p>

            <div className="developers-docs-hero__buttons">
              <a href="#overview" className="developers-docs-hero__primary">
                <BookOpen size={16} />
                <span>{t('Get Started', '문서 시작하기', 'はじめに', '开始使用')}</span>
              </a>
              <Link to="/developers/api" className="developers-docs-hero__secondary">
                <Code2 size={16} />
                <span>{t('API Reference', 'API 보기', 'APIリファレンス', 'API 参考')}</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="developers-docs-categories">
        <div className="developers-docs-page__container">
          <div className="developers-docs-categories__grid">
            {topCategories.map((item) => {
              const Icon = item.icon;
              return (
                <a key={item.titleEn} href={item.href} className="developers-docs-categories__card">
                  <div className="developers-docs-categories__icon">
                    <Icon size={18} />
                  </div>
                  <strong>{t(item.titleEn, item.titleKo, item.titleJa, item.titleZh)}</strong>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <div className="developers-docs-subnav">
        <div className="developers-docs-page__container developers-docs-subnav__inner">
          <div className="developers-docs-subnav__crumbs">
            <button type="button">{t('Home', '홈', 'ホーム', '首页')}</button>
            <ChevronDown size={14} />
            <button type="button" className="is-active">
              {t('Developers', '개발자', 'デベロッパー', '开发者')}
            </button>
          </div>

          <div className="developers-docs-subnav__search">
            <Search size={16} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleSearchEnter}
              placeholder={t('Search docs', '문서 검색', 'ドキュメント検索', '搜索文档')}
            />
            {searchQuery ? (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                aria-label={t('Clear search', '검색어 지우기', '検索のクリア', '清除搜索')}
              >
                <X size={14} />
              </button>
            ) : (
              <span>ENTER</span>
            )}
          </div>
        </div>
      </div>

      <section className="developers-docs-layout">
        <div className="developers-docs-page__container developers-docs-layout__grid">
          <aside className="developers-docs-sidebar">
            {filteredDocSections.length === 0 && searchQuery.trim() ? (
              <div className="developers-docs-sidebar__empty">
                {t('No matching documents found.', '검색 결과가 없습니다.', '検索結果が見つかりませんでした。', '未找到匹配文档。')}
              </div>
            ) : (
              filteredDocSections.map((section) => {
                const isOpen = openSections.includes(section.id);
                return (
                  <div className="developers-docs-sidebar__group" key={section.id}>
                    <button
                      type="button"
                      className="developers-docs-sidebar__group-title"
                      onClick={() => toggleSection(section.id)}
                    >
                      <span>{t(section.titleEn, section.titleKo, section.titleJa, section.titleZh)}</span>
                      <ChevronRight className={isOpen ? 'is-open' : ''} size={15} />
                    </button>

                    {isOpen && (
                      <div className="developers-docs-sidebar__items">
                        {section.items.map((item) => (
                          <a
                            key={item.id}
                            href={`#${item.id}`}
                            onClick={() => handleAnchorClick(item.id)}
                            className={activeSection === item.id ? 'is-current' : ''}
                          >
                            {t(item.labelEn, item.labelKo, item.labelJa, item.labelZh)}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </aside>

          <main className="developers-docs-main">
            <section id="overview" className="developers-docs-content-section">
              <h2>{t('Getting Started', '시작하기', 'はじめに', '开始使用')}</h2>
              <div className="developers-docs-divider" />
              <p>
                {t(
                  'KORION Developers is designed as a documentation-first portal rather than a simple landing page. Developers should understand API structures clearly, and partners should be able to evaluate documentation maturity instantly.',
                  'KORION Developers는 단순 소개 페이지가 아니라, 실제 연동 준비도를 보여주는 문서 포털입니다. 개발자는 API 구조를 빠르게 이해할 수 있어야 하고, 파트너는 어떤 범위까지 공개 자료가 준비되어 있는지 바로 판단할 수 있어야 합니다.',
                  'KORION Developersは、単なるランディングページではなく、ドキュメント優先のポータルとして設計されています。開発者はAPI構造を明確に理解でき、パートナーはドキュメントの成熟度を即座に評価できる必要があります。',
                  'KORION Developers 被设计为文档优先的门户，而不仅仅是一个简单的落地页。开发者应清楚地了解 API 结构，合作伙伴也应能立即评估文档的成熟度。'
                )}
              </p>
              <p>
                {t(
                  'The public documentation is structured around multiple API surfaces rather than a single generic API. It splits into Wallet, Payment, Deposit, Withdrawal, Webhook, and Partner domains.',
                  '공개 문서는 Wallet, Payment, Deposit, Withdrawal, Webhook, Partner 영역으로 나뉘며, 각 영역은 실제 서비스 연동 흐름에 맞는 엔드포인트와 상태 모델을 중심으로 확장될 수 있습니다.',
                  '公開ドキュメントは、単一の一般的なAPIではなく、複数のAPIサーフェスを中心に構成されています。ウォレット、決済、入金、出金、ウェブフック、およびパートナーのドメインに分かれています。',
                  '公共文档围绕多个 API 层面构建，而不是单个通用 API。它分为钱包、支付、存款、取现、Webhook 和合作伙伴领域。'
                )}
              </p>

              <ul className="developers-docs-list">
                <li>{t('Documentation built around a multi-API architecture', '복수 API 구조를 전제로 한 문서 체계', '多層APIアーキテクチャを中心としたドキュメント', '围绕多 API 架构构建的文档')}</li>
                <li>{t('TRON / TRC20 public verification surfaces', 'TRON / TRC20 네트워크 기반 공개 검증 정보', 'TRON / TRC20 公開検証サーフェス', 'TRON / TRC20 公共验证层面')}</li>
                <li>{t('Service-oriented payment and settlement integration flows', '결제 및 정산 흐름을 포함한 서비스형 연동 구조', 'サービス指向の決済および清算統合フロー', '面向服务的支付和结算集成流程')}</li>
              </ul>
            </section>

            <section id="platform" className="developers-docs-content-section">
              <h3>{t('Platform Structure', '플랫폼 구조', 'プラットフォーム構造', '平台结构')}</h3>
              <p>
                {t(
                  'KORION is better represented as a layered platform than a single-token integration. It connects wallets, payments, deposits, settlements, and partners in a single flow.',
                  'KORION은 단일 기능형 토큰 프로젝트가 아니라, 지갑·결제·입출금·정산·파트너 연동이 이어지는 구조를 가집니다. 따라서 Developers 페이지도 하나의 API 설명으로 끝나지 않고, 역할별 문서 체계로 분리되는 것이 자연스럽습니다.',
                  'KORIONは、単一のトークン統合よりも、階層化されたプラットフォームとしてより適切に表現されます。ウォレット、決済、入金、決済、およびパートナーを単一のフローで接続します。',
                  'KORION 作为一个分层平台，比作为一个单一代币集成能更好地表现。它在一个流程中连接了钱包、支付、存款、结算和合作伙伴。'
                )}
              </p>

              <div className="developers-docs-quickgrid">
                {quickLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div className="developers-docs-quickgrid__card" key={item.titleEn}>
                      <div className="developers-docs-quickgrid__icon">
                        <Icon size={18} />
                      </div>
                      <strong>{t(item.titleEn, item.titleKo, item.titleJa, item.titleZh)}</strong>
                    </div>
                  );
                })}
              </div>
            </section>

            <section id="quickstart" className="developers-docs-content-section">
              <h3>{t('Quick Start', '빠른 시작', 'クイックスタート', '快速开始')}</h3>
              <p>
                {t(
                  'A strong quick-start experience begins with API overview, auth structure, representative responses, contract info, and SDK examples. This allows developers to assess readiness immediately.',
                  '문서 포털의 첫 단계에서는 API 개요, 인증 구조, 대표 응답 형식, 컨트랙트 주소, SDK 샘플 코드가 가장 먼저 보여져야 합니다. 이 다섯 가지가 갖춰지면 외부 개발자는 프로젝트의 기술 준비도를 바로 판단할 수 있습니다.',
                  '強力なクイックスタート体験は、APIの概要、認証構造、代表的なレスポンス、コントラクト情報、およびSDKの例から始まります。これにより、開発者は即座に準備状況を評価できます。',
                  '强大的快速入门体验始于 API 概览、认证结构、具有代表性的响应、合约信息和 SDK 示例。这使开发者能够立即评估准备情况。'
                )}
              </p>

              <div className="developers-docs-codeblock">
                <div className="developers-docs-codeblock__top">
                  <span />
                  <span />
                  <span />
                </div>
                <pre>{`import { createKorionClient } from '@korion/sdk';

const client = createKorionClient({
  apiKey: 'YOUR_API_KEY',
  secret: 'YOUR_SECRET',
  env: 'sandbox',
});

const balance = await client.wallet.getBalance();
const payment = await client.payments.create({
  orderId: 'ORDER-1001',
  amount: '2500.000000',
  asset: 'KORI',
});`}</pre>
              </div>
            </section>

            <section id="api-suite" className="developers-docs-content-section">
              <h2>{t('API Suite', 'API 구성', 'APIスイート', 'API 套件')}</h2>
              <div className="developers-docs-divider" />
              <p>
                {t(
                  'A multi-surface API suite is the natural structure for KORION. It improves scalability and understanding by separating domains like Wallet, Payment, and Webhooks.',
                  'KORION 공개 문서는 여러 API 영역으로 나누어지는 것이 자연스럽습니다. Wallet, Payment, Deposit, Withdrawal, Webhook, Partner API를 중심으로 문서 체계를 구성하면 확장성과 이해도가 모두 올라갑니다.',
                  'マルチサーフェスAPIスイートは、KORIONにとって自然な構造です。ウォレット、決済、ウェブフックなどのドメインを分離することで、スケーラビリティと理解度が向上します。',
                  '多层面 API 套件是 KORION 的自然结构。通过将钱包、支付和 Webhook 等领域分开，它提高了可扩展性和易理解性。'
                )}
              </p>

              <div className="developers-docs-api-grid">
                {filteredApiCards.map((card) => {
                  const Icon = card.icon;
                  return (
                    <article className="developers-docs-api-card" key={card.key} id={`${card.key}-api`}>
                      <div className="developers-docs-api-card__icon">
                        <Icon size={18} />
                      </div>
                      <h4>{t(card.titleEn, card.titleKo, card.titleJa, card.titleZh)}</h4>
                      <p>{t(card.descEn, card.descKo, card.descJa, card.descZh)}</p>

                      <div className="developers-docs-api-card__routes">
                        {card.routes.map((route) => (
                          <code key={route}>{route}</code>
                        ))}
                      </div>
                    </article>
                  );
                })}
              </div>

              {searchQuery.trim() && filteredApiCards.length === 0 && (
                <p className="developers-docs-search-empty">
                  {t('No API cards matched your search.', '검색 조건에 맞는 API 카드가 없습니다.', '検索条件に一致するAPIカードはありません。', '没有匹配您搜索的 API 卡。')}
                </p>
              )}
            </section>

            <section id="sdk-tools" className="developers-docs-content-section">
              <h2>{t('SDK & Tools', 'SDK 및 도구', 'SDK과 툴', 'SDK 和工具')}</h2>
              <div className="developers-docs-divider" />
              <p>
                {t(
                  'Start with JavaScript and TypeScript SDKs, then expand toward backend examples and sandbox tooling for stable service development.',
                  'SDK는 JavaScript / TypeScript를 우선 공개하는 것이 좋고, 이후 백엔드 예제와 샌드박스 문서를 붙이는 구조가 이상적입니다. 프론트엔드와 서버 모두에서 빠르게 테스트할 수 있는 형태가 가장 신뢰를 줍니다.',
                  'まずはJavaScriptとTypeScriptのSDKから始め、次にバックエンドの例とサンドボックスツールへと拡張し、安定したサービス開発を実現します。',
                  '从 JavaScript 和 TypeScript SDK 开始，然后向后端示例和沙盒工具扩展，以实现稳定的服务开发。'
                )}
              </p>

              <div className="developers-docs-feature-row">
                {filteredSdkCards.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div className="developers-docs-feature-card" id={item.id} key={item.id}>
                      <div className="developers-docs-feature-card__icon">
                        <Icon size={18} />
                      </div>
                      <strong>{t(item.titleEn, item.titleKo, item.titleJa, item.titleZh)}</strong>
                      <p>{t(item.descEn, item.descKo, item.descJa, item.descZh)}</p>
                    </div>
                  );
                })}
              </div>

              {searchQuery.trim() && filteredSdkCards.length === 0 && (
                <p className="developers-docs-search-empty">
                  {t('No SDK items matched your search.', '검색 조건에 맞는 SDK 항목이 없습니다.', '検索条件に一致するSDK項目はありません。', '没有匹配您搜索的 SDK 项目。')}
                </p>
              )}
            </section>

            <section id="network-contract" className="developers-docs-content-section">
              <h2>{t('Network & Contract', '네트워크 및 컨트랙트', 'ネットワークとコントラクト', '网络和合约')}</h2>
              <div className="developers-docs-divider" />
              <p id="tron-network">
                {t(
                  'KORION documentation should expose the network, token standard, contract address, decimals, and explorer reference for public verification.',
                  'KORION은 TRON 기반 TRC20 자산 구조를 사용하며, 공개 문서에는 네트워크, 토큰 표준, 컨트랙트 주소, 소수점, 익스플로러 검증 링크가 포함되는 것이 좋습니다.',
                  'KORIONのドキュメントには、ネットワーク、トークン標準、コントラクトアドレス、小数点、およびエクスプローラーのリファレンスを公開して、公的に検証できるようにする必要があります。',
                  'KORION 文档应公开网络、代币标准、合约地址、小数位和浏览器参考，以便公众验证。'
                )}
              </p>

              <div className="developers-docs-contract-panel" id="contract-info">
                <div>
                  <span>{t('Network', '네트워크', 'ネットワーク', '网络')}</span>
                  <strong>TRON</strong>
                </div>
                <div>
                  <span>{t('Standard', '표준', '標準', '标准')}</span>
                  <strong>TRC20</strong>
                </div>
                <div>
                  <span>{t('Symbol', '심볼', 'シンボル', '符号')}</span>
                  <strong>KORI</strong>
                </div>
                <div id="token-spec">
                  <span>{t('Decimals', '소수점', '小数点', '小数位')}</span>
                  <strong>6</strong>
                </div>
                <div className="developers-docs-contract-panel__address">
                  <span>{t('Contract Address', '컨트랙트 주소', 'コントラクトアドレス', '合约地址')}</span>
                  <code>TBJZD8RwQ1JcQvEP9BTbPbgBCGxUjxSXnn</code>
                </div>
                <a
                  href="https://tronscan.org/#/token20/TBJZD8RwQ1JcQvEP9BTbPbgBCGxUjxSXnn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>{t('View on Tronscan', 'Tronscan에서 확인', 'Tronscanで表示', '在 Tronscan 上查看')}</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </section>

            <section id="developer-resources" className="developers-docs-content-section">
              <h2>{t('Developer Resources', 'Developer Resources', 'デベロッパーリソース', '开发者资源')}</h2>
              <div className="developers-docs-divider" />
              <p>
                {t(
                  'A strong developer portal should extend beyond API summaries to include authentication, error handling, webhook validation, sandbox onboarding, changelog history, and partner checklists.',
                  '개발자 포털 완성도를 높이기 위해서는 API 소개 외에도 인증, 오류 코드, 웹훅 검증, 샌드박스, 변경 이력, 파트너 체크리스트가 함께 제공되는 것이 좋습니다.',
                  '強力なデベロッパーポータルは、APIの概要だけでなく、認証、エラー処理、ウェブフック検証、サンドボックスのオンボーディング、変更履歴、およびパートナーのチェックリストも網羅する必要があります。',
                  '一个强大的开发者门户不应仅限于 API 摘要，还应包括认证、错误处理、Webhook 验证、沙盒入驻、更新日志历史和合作伙伴清单。'
                )}
              </p>

              <div className="developers-docs-recommendations">
                <Link to="/developers/authentication" id="auth-guide">
                  <KeyRound size={16} />
                  <span>{t('Authentication Guide', '인증 가이드', '認証ガイド', '身份验证指南')}</span>
                </Link>
                <Link to="/developers/errors" id="error-guide">
                  <Database size={16} />
                  <span>{t('Error Code Reference', '오류 코드 문서', 'エラーコードの参照', '错误代码参考')}</span>
                </Link>
                <Link to="/developers/webhooks" id="webhook-guide">
                  <Webhook size={16} />
                  <span>{t('Webhook Validation Guide', '웹훅 검증 문서', 'ウェブフック検証ガイド', 'Webhook 验证指南')}</span>
                </Link>
                <Link to="/developers/sandbox">
                  <Workflow size={16} />
                  <span>{t('Sandbox Access Flow', '샌드박스 발급 절차', 'サンドボックスアクセスフロー', '沙盒访问流程')}</span>
                </Link>
                <Link to="/developers/changelog">
                  <Layers3 size={16} />
                  <span>{t('Change Log', '변경 이력', '変更履歴', '更新日志')}</span>
                </Link>
                <Link to="/developers/partners" id="checklist-guide">
                  <LifeBuoy size={16} />
                  <span>{t('Partner Onboarding Checklist', '파트너 온보딩 체크리스트', 'パートナーオンボーディングチェックリスト', '合作伙伴入驻清单')}</span>
                </Link>
              </div>
            </section>

            <section id="preregistration" className="developers-docs-content-section">
              <h2>{t('Pre-registration', '사전등록', '事前登録', '预注册')}</h2>
              <div className="developers-docs-divider" />
              <p id="pre-register">
                {t(
                  'Adding pre-registration flows for developers and partners makes the portal actionable and helps organize integration stages for Early Access builders.',
                  '개발자 페이지에는 문서만 있는 것보다, 실제로 사전등록을 받아 초기 파트너와 개발자를 모으는 구조가 훨씬 좋습니다. 개발자, 가맹점, 거래소·지갑 파트너를 분리해 등록을 받으면 향후 연동 흐름도 훨씬 정리됩니다.',
                  '開発者やパートナー向けの事前登録フローを追加することで、ポータルがより実用的になり、アーリーアクセスの構築者のための統合段階の整理に役立ちます。',
                  '为开发者和合作伙伴添加预注册流程，使门户更具可操作性，并有助于为早期访问开发者组织集成阶段。'
                )}
              </p>

              <div className="developers-docs-prereg-grid">
                {filteredPreregCards.map((card, index) => {
                  const Icon = card.icon;
                  return (
                    <motion.article
                      key={card.titleEn}
                      className="developers-docs-prereg-card"
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.45, delay: index * 0.06 }}
                      id={index === 1 ? 'merchant' : index === 2 ? 'exchange' : undefined}
                    >
                      <div className="developers-docs-prereg-card__icon">
                        <Icon size={18} />
                      </div>
                      <h4>{t(card.titleEn, card.titleKo, card.titleJa, card.titleZh)}</h4>
                      <p>{t(card.descEn, card.descKo, card.descJa, card.descZh)}</p>
                      <Link to="/developers/preregister" className="developers-docs-prereg-card__button">
                        <span>{t('Apply for Early Access', '사전등록 신청', 'アーリーアクセスを申し込む', '申请早期访问')}</span>
                        <ArrowRight size={16} />
                      </Link>
                    </motion.article>
                  );
                })}
              </div>

              {searchQuery.trim() && filteredPreregCards.length === 0 && (
                <p className="developers-docs-search-empty">
                  {t('No pre-registration items matched your search.', '검색 조건에 맞는 사전등록 항목이 없습니다.', '検索条件に一致する事前登録項目はありません。', '没有匹配您搜索的预注册项目。')}
                </p>
              )}
            </section>
          </main>

          <aside className="developers-docs-toc">
            <div className="developers-docs-toc__box">
              <span className="developers-docs-toc__title">
                {t('Table of Contents', '목차', '目次', '目录')}
              </span>
              {filteredToc.length === 0 && searchQuery.trim() ? (
                <span className="developers-docs-toc__empty">
                  {t('No matching sections', '일치하는 항목 없음', '一致するセクションなし', '没有匹配的章节')}
                </span>
              ) : (
                filteredToc.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => handleAnchorClick(item.id)}
                    className={activeSection === item.id ? 'is-current' : ''}
                  >
                    {item.label}
                  </a>
                ))
              )}
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}