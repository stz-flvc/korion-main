import { Link, useLocation } from 'react-router';
import { useEffect, useMemo, useState } from 'react';
import {
  ChevronDown,
  ChevronRight,
  Code2,
  CreditCard,
  Database,
  FileCode2,
  Globe,
  KeyRound,
  Layers3,
  ShieldCheck,
  TimerReset,
  Wallet,
  Webhook,
  Workflow,
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import './DevelopersApiPage.css';

const apiGroups = [
  {
    titleEn: 'Wallet API',
    titleKo: 'Wallet API',
    titleJa: 'ウォレットAPI',
    titleZh: '钱包 API',
    icon: Wallet,
    endpoints: [
      'GET /v1/wallet/balance',
      'GET /v1/wallet/address',
      'GET /v1/wallet/assets',
    ],
  },
  {
    titleEn: 'Payment API',
    titleKo: 'Payment API',
    titleJa: '決済API',
    titleZh: '支付 API',
    icon: CreditCard,
    endpoints: [
      'POST /v1/payments',
      'GET /v1/payments/{id}',
      'GET /v1/payments/settlements',
    ],
  },
  {
    titleEn: 'Deposit API',
    titleKo: 'Deposit API',
    titleJa: '入금API',
    titleZh: '存款 API',
    icon: Database,
    endpoints: [
      'GET /v1/deposits',
      'GET /v1/deposits/{id}',
      'GET /v1/deposits/status',
    ],
  },
  {
    titleEn: 'Withdrawal API',
    titleKo: 'Withdrawal API',
    titleJa: '出金API',
    titleZh: '取现 API',
    icon: Workflow,
    endpoints: [
      'POST /v1/withdrawals',
      'GET /v1/withdrawals/{id}',
      'GET /v1/withdrawals/status',
    ],
  },
  {
    titleEn: 'Webhook API',
    titleKo: 'Webhook API',
    titleJa: 'ウェブフックAPI',
    titleZh: 'Webhook API',
    icon: Webhook,
    endpoints: [
      'POST /v1/webhooks/verify',
      'GET /v1/webhooks/events',
      'POST /v1/webhooks/test',
    ],
  },
];

const integrationDocs = [
  {
    titleEn: 'Authentication Guide',
    titleKo: '인증 가이드',
    titleJa: '認証ガイド',
    titleZh: '身份验证指南',
    descEn:
      'Understand API key usage, signed request flows, timestamp validation, and secure production practices.',
    descKo:
      'API Key 사용 방식, 서명 요청 흐름, 타임스탬프 검증, 운영 환경 보안 원칙을 정리한 문서입니다.',
    descJa:
      'APIキーの使用方法、署名付きリクエストフロー、タイムスタンプの検証、および安全な運用方法について説明します。',
    descZh:
      '了解 API 密钥使用、签名请求流程、时间戳验证和安全生产实践。',
    icon: ShieldCheck,
    href: '/developers/authentication',
  },
  {
    titleEn: 'Webhook Signature Verification',
    titleKo: '웹훅 서명 검증',
    titleJa: 'ウェブフック署명 검증',
    titleZh: 'Webhook 签名验证',
    descEn:
      'Learn how to verify KORION webhook signatures and safely process external event callbacks.',
    descKo:
      'KORION 웹훅 서명을 검증하고 외부 이벤트 콜백을 안전하게 처리하는 방법을 설명합니다.',
    descJa:
      'KORIONウェブフックの署名を検証し、外部イベントのコールバック을 안전하게 처리하는 방법을 배우게 됩니다.',
    descZh:
      '学习如何验证 KORION Webhook 签名并安全地处理外部事件回调。',
    icon: Webhook,
    href: '/developers/webhooks',
  },
  {
    titleEn: 'Error Code Reference',
    titleKo: '오류 코드 레퍼런스',
    titleJa: 'エラーコードリファレンス',
    titleZh: '错误代码参考',
    descEn:
      'Review standardized error codes, status mappings, and integration troubleshooting guidance.',
    descKo:
      '표준화된 오류 코드, 상태 매핑, 연동 중 발생할 수 있는 문제 해결 기준을 제공합니다.',
    descJa:
      '標準化されたエラーコード、ステータスマッピング、および統合의 트러블슈팅 가이드를 확이하게 됩니다.',
    descZh:
      '查看标准化错误代码、状态映射和集成故障排除指南。',
    icon: FileCode2,
    href: '/developers/errors',
  },
  {
    titleEn: 'Sandbox Access Guide',
    titleKo: '샌드박스 발급 가이드',
    titleJa: 'サンドボックスアクセスガイド',
    titleZh: '沙盒访问指南',
    descEn:
      'Set up test access, issue credentials, simulate transactions, and validate callback behavior.',
    descKo:
      '테스트 환경 접근, 인증 정보 발급, 트랜잭션 시뮬레이션, 콜백 검증 방법을 안내합니다.',
    descJa:
      'テストアクセスの設定、認証情報の発行、トランザクション의 시뮬레이션 및 콜백 동작을 검증하게 됩니다.',
    descZh:
      '设置测试访问、颁发凭据、模拟交易并验证回调行为。',
    icon: Globe,
    href: '/developers/sandbox',
  },
  {
    titleEn: 'SDK & Example Code',
    titleKo: 'SDK 및 예제 코드',
    titleJa: 'SDKとサンプルコード',
    titleZh: 'SDK 和示例代码',
    descEn:
      'Start faster with sample requests, helper utilities, and onboarding snippets for common flows.',
    descKo:
      '샘플 요청, 유틸리티, 주요 연동 흐름용 온보딩 예제를 통해 더 빠르게 시작할 수 있습니다.',
    descJa:
      'サンプルリクエスト、ヘルパーユーティリティ、および일반적인 흐름의 온보딩 스니펫을 통해 더 빠르게 시작할 수 있습니다.',
    descZh:
      '通过示例请求、辅助实用程序和常见流程的入门片段更快速地开始。',
    icon: Code2,
    href: '/developers/examples',
  },
  {
    titleEn: 'Rate Limit Policy',
    titleKo: '호출 제한 정책',
    titleJa: 'レート制限ポリシー',
    titleZh: '速率限制策略',
    descEn:
      'Check throughput guidance, retry strategies, burst controls, and resilient client patterns.',
    descKo:
      '처리량 기준, 재시도 전략, 버스트 제어, 안정적인 클라이언트 설계 패턴을 확인할 수 있습니다.',
    descJa:
      'スループットのガイダンス、リトライ戦略、バースト制御、および安定的な 클라이언트 설계 패턴을 확인하게 됩니다.',
    descZh:
      '查看吞吐量指南、重试策略、突发控制和弹性客户端模式。',
    icon: TimerReset,
    href: '/developers/rate-limits',
  },
];

const quickStartSteps = [
  {
    step: '01',
    titleEn: 'Issue Credentials',
    titleKo: '인증 정보 발급',
    titleJa: '認証情報の発行',
    titleZh: '颁发凭据',
    descEn: 'Create your partner credentials and obtain your API key for secure access.',
    descKo: '파트너용 인증 정보를 생성하고 안전한 연동을 위한 API Key를 발급합니다.',
    descJa: 'パートナー認証情報を作成し、安全なアクセスのためのAPIキーを取得します。',
    descZh: '创建您的合作伙伴凭据并获取您的 API 密钥以进行安全访问。',
  },
  {
    step: '02',
    titleEn: 'Check Wallet State',
    titleKo: '지갑 상태 조회',
    titleJa: 'ウォレット状態の確認',
    titleZh: '检查钱包状态',
    descEn:
      'Confirm wallet address, asset list, and available balance before transaction flows.',
    descKo:
      '거래 연동 전 지갑 주소, 보유 자산, 사용 가능 잔액 상태를 먼저 확인합니다.',
    descJa:
      'トランザクションフローの前に、ウォレットアドレス、アセットリスト、および利用可能な残高を確認します。',
    descZh:
      '在交易流程之前确认钱包地址、资产列表和可用余额。',
  },
  {
    step: '03',
    titleEn: 'Create Transaction',
    titleKo: '거래 요청 생성',
    titleJa: 'トランザクションの作成',
    titleZh: '创建交易',
    descEn:
      'Submit payment, deposit, or withdrawal requests based on the service scenario.',
    descKo: '서비스 시나리오에 맞게 결제, 입금, 출금 요청을 생성합니다.',
    descJa: 'サービスシナリオに基づいて、支払い、入金、または出金リクエストを送信します。',
    descZh: '根据服务场景提交支付、存款或取现请求。',
  },
  {
    step: '04',
    titleEn: 'Handle Webhooks',
    titleKo: '웹훅 처리',
    titleJa: 'ウェブフックの処理',
    titleZh: '处理 Webhook',
    descEn:
      'Receive asynchronous events and update your internal status with signature verification.',
    descKo: '비동기 이벤트를 수신하고 서명 검증을 거쳐 내부 상태를 갱신합니다.',
    descJa: '非同期イベントを受信し、署名検証を行って内部ステータスを更新します。',
    descZh: '接收异步事件并通过签名验证更新您的内部状态。',
  },
];

export function DevelopersApiPage() {
  const { language, t } = useLanguage();
  const { hash } = useLocation();

  const tocItems = useMemo(() => {
    return [
      { id: 'quick-start', label: t('Quick Start', '빠른 시작', 'クイックスタート', '快速开始') },
      { id: 'base-structure', label: t('Base Structure', '기본 구조', '基本構造', '基本结构') },
      { id: 'authentication', label: t('Authentication', '인증 방식', '認証方式', '身份验证') },
      { id: 'rate-limits', label: t('Rate Limits', '호출 제한', 'レート制限', '速率限制') },
      { id: 'response-format', label: t('Response Format', '응답 형식', 'レスポンス形式', '响应格式') },
      ...apiGroups.map((group) => ({
        id: group.titleEn.toLowerCase().replace(/\s+/g, '-'),
        label: t(group.titleEn, group.titleKo, group.titleJa, group.titleZh),
      })),
      {
        id: 'integration-guides',
        label: t('Integration Guides', '연동 가이드', '統合ガイド', '集成指南'),
      },
    ];
  }, [t]);

  const [activeSection, setActiveSection] = useState<string>('quick-start');

  useEffect(() => {
    const currentHash = hash.replace('#', '');
    if (currentHash) {
      setActiveSection(currentHash);
    }
  }, [hash]);

  const handleTocClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    event.preventDefault();
    setActiveSection(id);

    const target = document.getElementById(id);
    if (target) {
      const y = target.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({
        top: y,
        behavior: 'smooth',
      });
    }

    window.history.replaceState(null, '', `#${id}`);
  };

  return (
    <div className="developers-api-page">
      <section className="developers-api-hero">
        <div className="developers-api-page__container">
          <div className="developers-api-hero__crumbs">
            <Link to="/developers">{t('Developers', '개발자', 'デベロッパー', '开发者')}</Link>
            <ChevronDown size={14} />
            <span>{t('API Reference', 'API 레퍼런스', 'APIリファレンス', 'API 参考')}</span>
          </div>

          <div className="developers-api-hero__content">
            <div className="developers-api-hero__copy">
              <div className="developers-api-hero__eyebrow">
                <Layers3 size={16} />
                <span>{t('KORION Developer Docs', 'KORION 개발자 문서', 'KORIONデベロッパードキュメント', 'KORION 开发者文档')}</span>
              </div>

              <h1>KORION API Reference</h1>

              <p>
                {t(
                  'KORION APIs are organized around wallet, payment, deposit, withdrawal, and webhook flows designed for production-grade integration.',
                  'KORION API는 Wallet, Payment, Deposit, Withdrawal, Webhook 중심의 실서비스 연동 구조를 기준으로 설계됩니다. 본 문서는 빠른 도입, 보안 검증, 운영 안정성을 함께 고려한 개발자 레퍼런스입니다.',
                  'KORION APIは、本番環境への統合用に設計されたウォレット、決済、入金、出金、およびウェブフックフローを中心に構成されています。',
                  'KORION API 围绕专为生产级集成设计的钱包、支付、存款、取现和 Webhook 流程进行组织。'
                )}
              </p>

              <div className="developers-api-hero__actions">
                <a
                  href="#quick-start"
                  className="developers-api-hero__button developers-api-hero__button--primary"
                  onClick={(e) => handleTocClick(e, 'quick-start')}
                >
                  {t('Quick Start', '빠르게 시작하기', 'クイックスタート', '快速开始')}
                </a>
                <a
                  href="#integration-guides"
                  className="developers-api-hero__button developers-api-hero__button--ghost"
                  onClick={(e) => handleTocClick(e, 'integration-guides')}
                >
                  {t('View Integration Guides', '연동 가이드 보기', '統合ガイドを表示', '查看集成指南')}
                </a>
              </div>
            </div>

            <div className="developers-api-hero__panel">
              <div className="developers-api-hero__panel-top">
                <span />
                <span />
                <span />
              </div>
              <div className="developers-api-hero__panel-body">
                <div className="developers-api-hero__metric">
                  <span>Base URL</span>
                  <strong>https://api.korion.io</strong>
                </div>
                <div className="developers-api-hero__metric">
                  <span>Version</span>
                  <strong>/v1</strong>
                </div>
                <div className="developers-api-hero__metric">
                  <span>{t('Authentication', '인증', '認証', '身份验证')}</span>
                  <strong>API Key / Signed Request</strong>
                </div>
                <div className="developers-api-hero__metric">
                  <span>{t('Network', '네트워크', 'ネットワーク', '网络')}</span>
                  <strong>TRON / TRC20</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="developers-api-body">
        <div className="developers-api-page__container developers-api-body__grid">
          <aside className="developers-api-sidebar">
            <div className="developers-api-sidebar__box">
              <span className="developers-api-sidebar__title">
                {t('Explore Docs', '문서 탐색', 'ドキュメントを探索', '浏览文档')}
              </span>

              {tocItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleTocClick(e, item.id)}
                  className={`developers-api-sidebar__link ${
                    activeSection === item.id ? 'is-active' : ''
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </aside>

          <main className="developers-api-main">
            <section className="developers-api-section" id="quick-start">
              <div className="developers-api-section__heading-block">
                <h2>{t('Quick Start', '빠른 시작', 'クイックスタート', '快速开始')}</h2>
                <p>
                  {t(
                    'The fastest way to integrate KORION is to issue credentials, check wallet state, create transactions, and process webhooks.',
                    'KORION 연동은 인증 정보 발급, 지갑 상태 확인, 거래 생성, 웹훅 처리 순서로 접근하면 가장 빠르고 안정적으로 구현할 수 있습니다.',
                    'KORIONを統合する最速の方法は、認証情報の発行、ウォレット状態の確認、トランザクションの作成、およびウェブフックの処理です.',
                    '集成 KORION 最快的方法是颁发凭据、检查钱包状态、创建交易并处理 Webhook。'
                  )}
                </p>
              </div>
              <div className="developers-api-divider" />

              <div className="developers-api-quickstart">
                {quickStartSteps.map((item) => (
                  <div className="developers-api-quickstart__card" key={item.step}>
                    <span className="developers-api-quickstart__step">{item.step}</span>
                    <h3>{t(item.titleEn, item.titleKo, item.titleJa, item.titleZh)}</h3>
                    <p>{t(item.descEn, item.descKo, item.descJa, item.descZh)}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="developers-api-section" id="base-structure">
              <div className="developers-api-section__heading-block">
                <h2>{t('Base Structure', '기본 구조', '基本構造', '基本结构')}</h2>
                <p>
                  {t(
                    'Versioning, authentication, network scope, and standardized responses are consistent across the API surface.',
                    'API 버전, 인증 구조, 네트워크 스펙, 공통 응답 체계는 전체 문서에서 일관되게 유지됩니다.',
                    'バージョニング、認証、ネットワーク範囲、および標準化されたレスポンスは、APIサーフェス全体で一貫しています。',
                    '版本控制、身份验证、网络范围和标准化响应在整个 API 层面保持一致。'
                  )}
                </p>
              </div>
              <div className="developers-api-divider" />

              <div className="developers-api-info-grid">
                <div>
                  <span>Base URL</span>
                  <strong>https://api.korion.io</strong>
                </div>
                <div>
                  <span>{t('Versioning', '버전', 'バージョニング', '版本控制')}</span>
                  <strong>/v1</strong>
                </div>
                <div>
                  <span>{t('Authentication', '인증', '認証', '身份验证')}</span>
                  <strong>API Key / Signed Request</strong>
                </div>
                <div>
                  <span>{t('Network', '네트워크', 'ネットワーク', '网络')}</span>
                  <strong>TRON / TRC20</strong>
                </div>
              </div>
            </section>

            <section className="developers-api-section" id="authentication">
              <div className="developers-api-section__heading">
                <div className="developers-api-section__icon">
                  <KeyRound size={18} />
                </div>
                <div>
                  <h2>{t('Authentication', '인증 방식', '認証方式', '身份验证')}</h2>
                  <p>
                    {t(
                      'Production integrations should use both API keys and signed requests to validate request integrity and origin.',
                      '운영 환경에서는 API Key와 요청 서명을 함께 사용해 무결성과 호출 주체를 검증하는 구조를 권장합니다.',
                      '本番環境への統合では、要求の整合性と送信元を検証するために、APIキーと署名付きリクエストの両方を使用する必要があります。',
                      '生产集成应同时使用 API 密钥和签名请求来验证请求的完整性和来源。'
                    )}
                  </p>
                </div>
              </div>

              <div className="developers-api-divider" />

              <div className="developers-api-info-grid developers-api-info-grid--triple">
                <div>
                  <span>{t('Required Header', '필수 헤더', '必須ヘッダー', '必需标头')}</span>
                  <strong>Authorization: Bearer YOUR_API_KEY</strong>
                </div>
                <div>
                  <span>{t('Signature Header', '서명 헤더', '署명 헤더', '签名标头')}</span>
                  <strong>X-KORION-SIGN</strong>
                </div>
                <div>
                  <span>{t('Timestamp Header', '타임스탬프', 'タイムスタンプヘッダー', '时间戳标头')}</span>
                  <strong>X-KORION-TIMESTAMP</strong>
                </div>
              </div>

              <div className="developers-api-code">
                <div className="developers-api-code__top">
                  <span />
                  <span />
                  <span />
                </div>
                <pre>{`curl https://api.korion.io/v1/wallet/balance \\
    -H "Authorization: Bearer YOUR_API_KEY" \\
    -H "X-KORION-SIGN: GENERATED_SIGNATURE" \\
    -H "X-KORION-TIMESTAMP: 1711111111"`}</pre>
              </div>
            </section>

            <section className="developers-api-section" id="rate-limits">
              <div className="developers-api-section__heading">
                <div className="developers-api-section__icon">
                  <TimerReset size={18} />
                </div>
                <div>
                  <h2>{t('Rate Limits', '호출 제한 정책', 'レート制限ポリシー', '速率限制策略')}</h2>
                  <p>
                    {t(
                      'Clients should be designed with burst control, retry intervals, and backoff strategies for resilient operation.',
                      '클라이언트는 버스트 제어, 재시도 간격, 백오프 전략을 고려하여 안정적으로 설계하는 것이 좋습니다.',
                      'クライアントは、回復力のある運用のために、バースト制御、リトライ間隔、およびバックオフ戦略を使用して設計する必要があります。',
                      '客户端应设计有突发控制、重 retry 间隔和退避策略，以实现弹性操作。'
                    )}
                  </p>
                </div>
              </div>

              <div className="developers-api-divider" />

              <div className="developers-api-rate-grid">
                <div className="developers-api-rate-card">
                  <span>{t('Recommended Throughput', '권장 실시간 처리량', '推奨スループット', '推荐吞吐量')}</span>
                  <strong>100 req / sec</strong>
                </div>
                <div className="developers-api-rate-card">
                  <span>{t('Daily Operating Quota', '일일 운영 한도', '1일 파트너 쿼터', '每日运营配额')}</span>
                  <strong>10,000 req / day</strong>
                </div>
                <div className="developers-api-rate-card">
                  <span>{t('Retry Strategy', '재시도 전략', 'リトライ戦略', '重试策略')}</span>
                  <strong>Exponential Backoff</strong>
                </div>
              </div>
            </section>

            <section className="developers-api-section" id="response-format">
              <div className="developers-api-section__heading-block">
                <h2>{t('Representative Response Format', '대표 응답 형식', '代表的なレスポンス形式', '具有代表性的响应格式')}</h2>
                <p>
                  {t(
                    'KORION responses are structured around success, code, message, and data for consistent application handling.',
                    'KORION API 응답은 success, code, message, data 필드를 기준으로 일관된 처리 체계를 갖추도록 설계됩니다.',
                    'KORIONのレスポンスは、一貫したアプリケーション処理のために、success、code、message、およびdataを中心に構成されています。',
                    'KORION 响应围绕 success、code、message 和 data 构建，以实现一致的应用程序处理。'
                  )}
                </p>
              </div>
              <div className="developers-api-divider" />

              <div className="developers-api-code">
                <div className="developers-api-code__top">
                  <span />
                  <span />
                  <span />
                </div>
                <pre>{`{
    "success": true,
    "code": "OK_200",
    "message": "Request completed",
    "data": {
        "status": "confirmed",
        "asset": "KORI",
        "network": "TRON"
    }
    }`}</pre>
              </div>
            </section>

            {apiGroups.map((group) => {
              const Icon = group.icon;
              const sectionId = group.titleEn.toLowerCase().replace(/\s+/g, '-');

              return (
                <section className="developers-api-section" id={sectionId} key={group.titleEn}>
                  <div className="developers-api-section__heading">
                    <div className="developers-api-section__icon">
                      <Icon size={18} />
                    </div>
                    <div>
                      <h2>{t(group.titleEn, group.titleKo, group.titleJa, group.titleZh)}</h2>
                      <p>
                        {t(
                          `${group.titleEn} documentation is structured around representative production-facing endpoints.`,
                          `${group.titleKo} 문서는 실제 서비스 연동에 필요한 대표 엔드포인트를 중심으로 구성됩니다.`,
                          `${group.titleJa} ドキュメントは、代表的な実稼働向けエンドポイントを中心に構成されています.`,
                          `${group.titleZh} 文档围绕具有代表性的面向生产的端点构建。`
                        )}
                      </p>
                    </div>
                  </div>

                  <div className="developers-api-divider" />

                  <div className="developers-api-endpoints">
                    {group.endpoints.map((endpoint) => (
                      <div className="developers-api-endpoint" key={endpoint}>
                        <code>{endpoint}</code>
                        <ChevronRight size={16} />
                      </div>
                    ))}
                  </div>
                </section>
              );
            })}

            <section className="developers-api-section" id="integration-guides">
              <div className="developers-api-section__heading-block">
                <h2>{t('Integration Guides', '연동 가이드', '統合ガイド', '集成指南')}</h2>
                <p>
                  {t(
                    'The documents below cover the core guides needed for production integration, including authentication, security validation, sandbox testing, and error handling.',
                    '아래 문서는 인증, 보안 검증, 샌드박스 테스트, 오류 대응 등 실제 운영 연동에 필요한 핵심 가이드를 정리한 자료입니다.',
                    '以下のドキュメントは、認証、セキュリティ検証、サンドボックスのテスト、エラー処理など、本番環境への統合に必要なコアガイドを網羅しています。',
                    '以下文档涵盖了生产集成所需的核心指南，包括身份验证、安全验证、沙盒测试和错误处理。'
                  )}
                </p>
              </div>

              <div className="developers-api-divider" />

              <div className="developers-api-doc-grid">
                {integrationDocs.map((doc) => {
                  const Icon = doc.icon;

                  return (
                    <Link to={doc.href} key={doc.titleEn} className="developers-api-doc-card">
                      <div className="developers-api-doc-card__icon">
                        <Icon size={18} />
                      </div>

                      <div className="developers-api-doc-card__body">
                        <h3>{t(doc.titleEn, doc.titleKo, doc.titleJa, doc.titleZh)}</h3>
                        <p>{t(doc.descEn, doc.descKo, doc.descJa, doc.descZh)}</p>
                      </div>

                      <div className="developers-api-doc-card__arrow">
                        <ChevronRight size={18} />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </section>
          </main>
        </div>
      </section>
    </div>
  );
}