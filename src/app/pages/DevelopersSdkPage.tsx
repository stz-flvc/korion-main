import { Link, useLocation } from 'react-router';
import { useEffect, useMemo, useState } from 'react';
import {
  Box,
  ChevronDown,
  Code2,
  Cpu,
  FileCode2,
  Layers3,
  Package,
  ShieldCheck,
  TerminalSquare,
  Wrench,
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import './DevelopersSdkPage.css';

const sdkModules = [
  {
    icon: Code2,
    titleEn: 'JavaScript SDK',
    titleKo: 'JavaScript SDK',
    titleJa: 'JavaScript SDK',
    titleZh: 'JavaScript SDK',
    descEn:
      'Frontend-friendly module structure for wallet queries, payment creation, and lightweight integration flows.',
    descKo:
      '지갑 조회, 결제 생성, 경량 연동 흐름에 적합한 프론트엔드 친화형 모듈 구조입니다.',
    descJa:
      'ウォレットの照会、決済の作成、および軽量な統合フローに適したフロントエンドフレンドリーなモジュール構造です。',
    descZh:
      '适用于钱包查询、支付创建和轻量级集成流程的前端友好型模块结构。',
    packages: ['@korion/sdk', '@korion/sdk/payments', '@korion/sdk/wallet'],
  },
  {
    icon: Cpu,
    titleEn: 'TypeScript SDK',
    titleKo: 'TypeScript SDK',
    titleJa: 'TypeScript SDK',
    titleZh: 'TypeScript SDK',
    descEn:
      'Typed models and response contracts for more stable service integration across production environments.',
    descKo:
      '실서비스 환경에서 더 안정적인 연동을 가능하게 하는 타입 기반 모델과 응답 계약입니다.',
    descJa:
      '本番環境全体でより安定したサービス統合を可能にする、型定義されたモデルとレスポンスコントラクトです。',
    descZh:
      '类型化模型和响应合约，可在生产环境中实现更稳定的服务集成。',
    packages: ['types', 'request models', 'response models'],
  },
  {
    icon: TerminalSquare,
    titleEn: 'Backend Examples',
    titleKo: '백엔드 예제',
    titleJa: 'バックエンドの例',
    titleZh: '后端示例',
    descEn:
      'Reference server implementations for signed requests, callback verification, and transaction polling.',
    descKo:
      '서명 요청, 콜백 검증, 트랜잭션 폴링을 위한 서버 레퍼런스 구현 예제입니다.',
    descJa:
      '署名付きリクエスト、コールバック検証、およびトランザクションポーリングのためのサーバーリファレンス実装です。',
    descZh:
      '用于签名请求、回调验证和交易轮询的参考服务器实现。',
    packages: ['Node.js example', 'Express webhook example', 'Polling worker example'],
  },
  {
    icon: ShieldCheck,
    titleEn: 'Sandbox Toolkit',
    titleKo: '샌드박스 툴킷',
    titleJa: 'サンドボックスツールキット',
    titleZh: '沙盒工具包',
    descEn:
      'Test credentials, staged flows, and sample payloads for safer onboarding before production deployment.',
    descKo:
      '실서비스 배포 전 안전한 온보딩을 위한 테스트 인증정보, 단계별 흐름, 샘플 페이로드입니다.',
    descJa:
      '本番環境へのデプロイ前に、より安全なオンボーディングを実現するためのテスト認証情報、段階的なフロー、およびサンプルペイロードです。',
    descZh:
      '测试凭据、分层流程和示例有效负载，以便在生产部署之前进行更安全的入门。',
    packages: ['sandbox keys', 'sample payloads', 'test flow presets'],
  },
];

const exampleTabs = [
  {
    titleEn: 'Client Initialization',
    titleKo: '클라이언트 초기화',
    titleJa: 'クライアントの初期化',
    titleZh: '客户端初始化',
    code: `import { createKorionClient } from '@korion/sdk';

const client = createKorionClient({
  apiKey: 'YOUR_API_KEY',
  secret: 'YOUR_SECRET',
  env: 'sandbox',
});`,
  },
  {
    titleEn: 'Wallet Balance Query',
    titleKo: '지갑 잔액 조회',
    titleJa: 'ウォレット残高の照会',
    titleZh: '钱包余额查询',
    code: `const balance = await client.wallet.getBalance();

console.log(balance.data);`,
  },
  {
    titleEn: 'Payment Request',
    titleKo: '결제 요청 생성',
    titleJa: '決済リクエストの作成',
    titleZh: '支付请求创建',
    code: `const payment = await client.payments.create({
  orderId: 'ORDER-1001',
  asset: 'KORI',
  amount: '2500.000000',
  redirectUrl: 'https://service.example.com/result',
});`,
  },
  {
    titleEn: 'Webhook Verification',
    titleKo: '웹훅 검증',
    titleJa: 'ウェブフックの検証',
    titleZh: 'Webhook 验证',
    code: `const verified = await client.webhooks.verify({
  signature: request.headers['x-korion-signature'],
  payload: request.body,
});`,
  },
];

export function DevelopersSdkPage() {
  const { t } = useLanguage();
  const { hash } = useLocation();

  const tocItems = useMemo(
    () => [
      { id: 'sdk-overview', label: t('Overview', '개요', '概要', '概览') },
      { id: 'sdk-modules', label: t('SDK Modules', 'SDK 모듈', 'SDKモジュール', 'SDK 模块') },
      { id: 'sdk-examples', label: t('Examples', '예제 코드', 'サンプル', '示例') },
      { id: 'sdk-roadmap', label: t('Release Roadmap', '공개 로드맵', 'リリースロードマップ', '发布路线图') },
    ],
    [t]
  );

  const [activeSection, setActiveSection] = useState<string>('sdk-overview');

  useEffect(() => {
    const currentHash = hash.replace('#', '');
    if (currentHash) {
      setActiveSection(currentHash);
    } else {
      setActiveSection('sdk-overview');
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
      const y = target.getBoundingClientRect().top + window.scrollY - 110;
      window.scrollTo({
        top: y,
        behavior: 'smooth',
      });
    }

    window.history.replaceState(null, '', `#${id}`);
  };

  return (
    <div className="developers-sdk-page">
      <section className="developers-sdk-hero">
        <div className="developers-sdk-page__container">
          <div className="developers-sdk-hero__crumbs">
            <Link to="/developers">{t('Developers', '개발자', 'デ베ロッパー', '开发者')}</Link>
            <ChevronDown size={16} />
            <span>SDK</span>
          </div>

          <h1>{t('KORION SDK & Tools', 'KORION SDK & Tools', 'KORION SDK & ツール', 'KORION SDK 和工具')}</h1>
          <p>
            {t(
              'KORION SDK is structured to accelerate wallet, payment, webhook, and sandbox integration flows with JavaScript, TypeScript, and backend-oriented tooling.',
              'KORION SDK는 Wallet, Payment, Webhook, Sandbox 흐름을 빠르게 연동할 수 있도록 구성됩니다. JavaScript와 TypeScript를 중심으로 공개하고, 이후 서버 예제와 테스트 툴킷으로 확장하는 구조가 가장 이상적입니다.',
              'KORION SDKは、JavaScript、TypeScript、およびバックエンド指向のツールを使用して、ウォレット、決済、ウェブフック、およびサンドボックスの統合フローを加速するように構成されています。',
              'KORION SDK 的结构旨在使用 JavaScript、TypeScript 和面向后端的工具加速钱包、支付、Webhook 和沙盒集成流程。'
            )}
          </p>
        </div>
      </section>

      <section className="developers-sdk-body">
        <div className="developers-sdk-page__container developers-sdk-body__grid">
          <aside className="developers-sdk-sidebar">
            <div className="developers-sdk-sidebar__box">
              <span className="developers-sdk-sidebar__title">
                {t('SDK Docs', 'SDK 문서', 'SDKドキュメント', 'SDK 文档')}
              </span>

              {tocItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleTocClick(e, item.id)}
                  className={activeSection === item.id ? 'is-current' : ''}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </aside>

          <main className="developers-sdk-main">
            <section className="developers-sdk-section" id="sdk-overview">
              <h2>{t('Overview', '개요', '概要', '概览')}</h2>
              <div className="developers-sdk-divider" />
              <p>
                {t(
                  'KORION SDK documentation should prioritize implementation speed through a practical sequence of initialization, authentication, wallet access, payment flow, webhook verification, and sandbox testing.',
                  'KORION SDK 문서는 단순 설치 설명보다, 실제 연동 시간을 줄여주는 구조가 중요합니다. 따라서 클라이언트 초기화, 인증, 잔액 조회, 결제 요청, 웹훅 검증, 샌드박스 테스트 순으로 문서화하는 것이 가장 자연스럽습니다.',
                  'KORION SDKドキュメントは、初期化、認証、ウォレットアクセス、決済フロー、ウェブフック検証、およびサンドボックス検証の実践的な順序を通じて、実装速度を優先する必要があります。',
                  'KORION SDK 文档应通过初始化、身份验证、钱包访问、支付流程、Webhook 验证和沙盒测试的实际顺序，优先考虑实施速度。'
                )}
              </p>
            </section>

            <section className="developers-sdk-section" id="sdk-modules">
              <h2>{t('SDK Modules', 'SDK 모듈', 'SDKモジュール', 'SDK 模块')}</h2>
              <div className="developers-sdk-divider" />

              <div className="developers-sdk-modules">
                {sdkModules.map((module) => {
                  const Icon = module.icon;
                  return (
                    <article className="developers-sdk-module" key={module.titleEn}>
                      <div className="developers-sdk-module__icon">
                        <Icon size={16} />
                      </div>
                      <h3>{t(module.titleEn, module.titleKo, module.titleJa, module.titleZh)}</h3>
                      <p>{t(module.descEn, module.descKo, module.descJa, module.descZh)}</p>
                      <div className="developers-sdk-module__packages">
                        {module.packages.map((pkg) => (
                          <code key={pkg}>{pkg}</code>
                        ))}
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>

            <section className="developers-sdk-section" id="sdk-examples">
              <h2>{t('Example Snippets', '예제 코드', 'サンプルスニペット', '示例代码片段')}</h2>
              <div className="developers-sdk-divider" />

              <div className="developers-sdk-examples">
                {exampleTabs.map((item) => (
                  <div className="developers-sdk-example" key={item.titleEn}>
                    <div className="developers-sdk-example__head">
                      <div className="developers-sdk-example__head-left">
                        <FileCode2 size={16} />
                        <span>{t(item.titleEn, item.titleKo, item.titleJa, item.titleZh)}</span>
                      </div>
                    </div>
                    <pre>{item.code}</pre>
                  </div>
                ))}
              </div>
            </section>

            <section className="developers-sdk-section" id="sdk-roadmap">
              <h2>{t('Release Roadmap', '공개 로드맵', 'リリースロードマップ', '发布路线图')}</h2>
              <div className="developers-sdk-divider" />

              <div className="developers-sdk-roadmap">
                <div className="developers-sdk-roadmap__item">
                  <div className="developers-sdk-roadmap__icon">
                    <Package size={16} />
                  </div>
                  <div>
                    <strong>{t('Phase 1', '1단계', 'フェーズ 1', '第一阶段')}</strong>
                    <p>
                      {t(
                        'JavaScript / TypeScript SDK overview, base initialization, and representative examples',
                        'JavaScript / TypeScript SDK 개요, 기본 클라이언트 초기화, 대표 예제 공개',
                        'JavaScript / TypeScript SDKの概要、ベースの初期化、および代表的な例',
                        'JavaScript / TypeScript SDK 概述、基础初始化和代表性示例'
                      )}
                    </p>
                  </div>
                </div>

                <div className="developers-sdk-roadmap__item">
                  <div className="developers-sdk-roadmap__icon">
                    <Wrench size={16} />
                  </div>
                  <div>
                    <strong>{t('Phase 2', '2단계', 'フェーズ 2', '第二阶段')}</strong>
                    <p>
                      {t(
                        'Webhook verification, payment flow, backend examples, and sandbox testing guides',
                        'Webhook 검증, Payment 흐름, 백엔드 예제, 샌드박스 테스트 가이드 공개',
                        'ウェブフック検証、決済フロー、バックエンドの例、およびサンドボックス検証ガイド',
                        'Webhook 验证、支付流程、后端示例和沙盒测试指南'
                      )}
                    </p>
                  </div>
                </div>

                <div className="developers-sdk-roadmap__item">
                  <div className="developers-sdk-roadmap__icon">
                    <Layers3 size={16} />
                  </div>
                  <div>
                    <strong>{t('Phase 3', '3단계', 'フェーズ 3', '第三阶段')}</strong>
                    <p>
                      {t(
                        'Partner modules, exchange/wallet integration kits, and advanced operational references',
                        '파트너 전용 모듈, 거래소/지갑 연동킷, 고급 운영 예제 공개',
                        'パートナーモジュール、取引所/ウォレット統合キット、および高度な運用リファレンス',
                        '合作伙伴模块、交易所/钱包集成套件和高级操作参考'
                      )}
                    </p>
                  </div>
                </div>

                <div className="developers-sdk-roadmap__item">
                  <div className="developers-sdk-roadmap__icon">
                    <Box size={16} />
                  </div>
                  <div>
                    <strong>{t('Phase 4', '4단계', 'フェーズ 4', '第四阶段')}</strong>
                    <p>
                      {t(
                        'Documentation automation, versioned release notes, and sample project packages',
                        '문서 자동화, 버전별 릴리즈 기록, 샘플 프로젝트 패키지 제공',
                        'ドキュメントの自動化、バージョン管理されたリリースノート、およびサンプルプロジェクトパッケージ',
                        '文档自动化、版本化发布说明和示例项目包'
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </section>
    </div>
  );
}