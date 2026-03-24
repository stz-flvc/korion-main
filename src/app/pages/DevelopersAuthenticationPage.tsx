import { Link } from 'react-router';
import { useState } from 'react';
import {
  ChevronDown,
  FileCode2,
  KeyRound,
  ShieldCheck,
  TimerReset,
  Workflow,
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import './DevelopersAuthenticationPage.css';

const authSections = [
  {
    id: 'auth-overview',
    titleEn: 'Overview',
    titleKo: '개요',
    titleJa: '概要',
    titleZh: '概览',
  },
  {
    id: 'auth-method',
    titleEn: 'Authentication Method',
    titleKo: '인증 방식',
    titleJa: '認証方式',
    titleZh: '认证方式',
  },
  {
    id: 'auth-signature',
    titleEn: 'Signature Structure',
    titleKo: '서명 구조',
    titleJa: '署名構造',
    titleZh: '签名结构',
  },
  {
    id: 'auth-headers',
    titleEn: 'Required Headers',
    titleKo: '필수 헤더',
    titleJa: '必須ヘッダー',
    titleZh: '必要请求头',
  },
  {
    id: 'auth-errors',
    titleEn: 'Auth Errors',
    titleKo: '인증 오류',
    titleJa: '認証エラー',
    titleZh: '认证错误',
  },
];

const errorRows = [
  {
    code: 'AUTH_001',
    en: 'Missing API key',
    ko: 'API 키가 없습니다',
    ja: 'APIキーがありません',
    zh: '缺少 API 密钥',
  },
  {
    code: 'AUTH_002',
    en: 'Invalid API key',
    ko: '유효하지 않은 API 키입니다',
    ja: '無効なAPIキーです',
    zh: '无效的 API 密钥',
  },
  {
    code: 'AUTH_003',
    en: 'Signature verification failed',
    ko: '서명 검증에 실패했습니다',
    ja: '署名検証に失敗しました',
    zh: '签名验证失败',
  },
  {
    code: 'AUTH_004',
    en: 'Timestamp expired',
    ko: '타임스탬프가 만료되었습니다',
    ja: 'タイムスタンプの期限が切れました',
    zh: '时间戳已过期',
  },
  {
    code: 'AUTH_005',
    en: 'Nonce already used',
    ko: '이미 사용된 nonce입니다',
    ja: '既に使用されているnonceです',
    zh: 'Nonce 已被使用',
  },
];

export function DevelopersAuthenticationPage() {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState('auth-overview');

  return (
    <div className="developers-auth-page">
      <section className="developers-auth-hero">
        <div className="developers-auth-page__container">
          <div className="developers-auth-hero__crumbs">
            <Link to="/developers">{t('Developers', '개발자', 'デベロッパー', '开发者')}</Link>
            <ChevronDown size={14} />
            <span>{t('Authentication', '인증', '認証', '认证')}</span>
          </div>

          <h1>{t('Authentication Guide', '인증 가이드', '認証ガイド', '认证指南')}</h1>
          <p>
            {t(
              'KORION public APIs are designed around API-key and signature-based requests. Authentication docs define auth methods, signature rules, required headers, replay prevention, and representative auth errors.',
              'KORION 공개 API는 API Key와 서명 기반 요청 구조를 중심으로 설계됩니다. 문서에는 인증 방식, 서명 규칙, 필수 헤더, 재전송 방지 구조, 대표 오류 코드가 함께 정리되는 것이 가장 자연스럽습니다.',
              'KORION公開APIは、APIキーと署名ベースのリクエスト構造を中心に設計されています。認証ドキュメントには、認証方法、署名ルール、必須ヘッダー、リプレイ防止構造、および代表的な認証エラーが定義されています。',
              'KORION 公开 API 基于 API 密钥和签名请求结构设计。认证文档应定义认证方法、签名规则、必要请求头、重放防止结构和代表性认证错误。'
            )}
          </p>
        </div>
      </section>

      <section className="developers-auth-body">
        <div className="developers-auth-page__container developers-auth-body__grid">
          <aside className="developers-auth-sidebar">
            <div className="developers-auth-sidebar__box">
              <span className="developers-auth-sidebar__title">
                {t('Authentication Docs', '인증 문서', '認証ドキュメント', '认证文档')}
              </span>

              <nav className="developers-auth-sidebar__nav" aria-label="Authentication navigation">
                {authSections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className={`developers-auth-sidebar__link${
                      activeSection === section.id ? ' is-active' : ''
                    }`}
                    onClick={() => setActiveSection(section.id)}
                  >
                    <span className="developers-auth-sidebar__dot" />
                    <span className="developers-auth-sidebar__text">
                      {t(section.titleEn, section.titleKo, section.titleJa, section.titleZh)}
                    </span>
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <main className="developers-auth-main">
            <section className="developers-auth-section" id="auth-overview">
              <h2>{t('Overview', '개요', '概要', '概览')}</h2>
              <div className="developers-auth-divider" />
              <p>
                {t(
                  'Authentication docs should explain more than where to place an API key. Developers need a clear model for required headers, signature generation, timestamp handling, and replay protection to ensure secure integration.',
                  '인증 문서는 단순히 키를 넣는 방법을 설명하는 수준에서 끝나지 않아야 합니다. 외부 개발자는 어떤 헤더가 필요한지, 서명 문자열을 어떻게 만드는지, 요청 유효시간은 어떻게 관리하는지, 재전송 방지는 어떤 방식으로 적용되는지를 빠르게 이해할 수 있어야 합니다.',
                  '認証ドキュメントは、APIキーの配置場所を説明するだけにとどまるべきではありません。開発者は、安全な統合を確保するために、必須ヘッダー、署名生成、タイムスタンプ処理、およびリプレイ防止のための明確なモデルを必要としています。',
                  '认证文档不应仅限于说明放置 API 密钥的位置。开发人员需要一个关于必要请求头、签名生成、时间戳处理和重放保护的清晰模型，以确保安全集成。'
                )}
              </p>
            </section>

            <section className="developers-auth-section" id="auth-method">
              <div className="developers-auth-section__heading">
                <div className="developers-auth-section__icon">
                  <KeyRound size={18} />
                </div>
                <div>
                  <h2>{t('Authentication Method', '인증 방식', '認証方式', '认证方式')}</h2>
                  <p>
                    {t(
                      'The recommended structure is API Key + Secret + Signed Request to maintain high security standards.',
                      '기본 구조는 API Key + Secret + Signed Request 조합으로 정리하는 것이 좋습니다.',
                      '高いセキュリティ基準を維持するために、推奨される構造は、APIキー + シークレット + 署名付きリクエストの組み合わせです。',
                      '推荐的结构是 API 密钥 + 密钥 + 签名请求，以保持高安全标准。'
                    )}
                  </p>
                </div>
              </div>

              <div className="developers-auth-info-grid">
                <div>
                  <span>{t('API Key', 'API Key', 'APIキー', 'API 密钥')}</span>
                  <strong>{t('Client identification', '클라이언트 식별', 'クライアント識別', '客户端识别')}</strong>
                </div>
                <div>
                  <span>{t('Secret', 'Secret', 'シークレット', '密钥')}</span>
                  <strong>{t('Used for signing', '서명 생성에 사용', '署名に使用', '用于签名')}</strong>
                </div>
                <div>
                  <span>{t('Timestamp', 'Timestamp', '타임스탬프', '时间戳')}</span>
                  <strong>{t('Request freshness check', '요청 유효시간 검증', 'リクエストの鮮度チェック', '请求新鲜度检查')}</strong>
                </div>
                <div>
                  <span>{t('Nonce', 'Nonce', 'ナンス', 'Nonce')}</span>
                  <strong>{t('Replay protection', '재전송 공격 방지', 'リプレイ保護', '重放保护')}</strong>
                </div>
              </div>
            </section>

            <section className="developers-auth-section" id="auth-signature">
              <div className="developers-auth-section__heading">
                <div className="developers-auth-section__icon">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <h2>{t('Signature Structure', '서명 구조', '署名構造', '签名结构')}</h2>
                  <p>
                    {t(
                      'A common structure is to sign a canonical string composed of HTTP Method, Path, Timestamp, Nonce, and Body Hash. This ensures request integrity.',
                      '서명은 보통 HTTP Method, Path, Timestamp, Nonce, Body Hash를 조합한 문자열을 기준으로 생성하는 구조가 가장 일반적입니다.',
                      '一般的な構造は、HTTPメソッド、パス、タイムスタンプ、ナンス、およびボディハッシュで構成される標準的な文字列に署名することです。これにより、リクエストの整合性が確保されます。',
                      '一个常见的结构是对由 HTTP 方法、路径、时间戳、Nonce 和正文哈希组成的规范字符串进行签名。这可以确保请求的完整性。'
                    )}
                  </p>
                </div>
              </div>

              <div className="developers-auth-code">
                <div className="developers-auth-code__top">
                  <span />
                  <span />
                  <span />
                </div>
                <pre>{`METHOD + "\\n" +
PATH + "\\n" +
TIMESTAMP + "\\n" +
NONCE + "\\n" +
BODY_HASH

HMAC_SHA256(secret, canonicalString)`}</pre>
              </div>
            </section>

            <section className="developers-auth-section" id="auth-headers">
              <div className="developers-auth-section__heading">
                <div className="developers-auth-section__icon">
                  <FileCode2 size={18} />
                </div>
                <div>
                  <h2>{t('Required Headers', '필수 헤더', '必須ヘッダー', '必要请求头')}</h2>
                  <p>
                    {t(
                      'Clearly documenting required headers reduces integration friction and simplifies developer onboarding.',
                      '요청 헤더를 명확히 문서화하면 연동 오류를 크게 줄일 수 있습니다.',
                      '必須ヘッダーを明確にドキュメント化することで、統合の摩擦を減らし、開発者のオンボーディングを簡素化できます。',
                      '清楚地记录必要请求头可减少集成摩擦并简化开发人员的入驻。'
                    )}
                  </p>
                </div>
              </div>

              <div className="developers-auth-headers">
                <div>
                  <code>X-KORION-API-KEY</code>
                  <span>{t('Issued API key', '발급된 API 키', '発行されたAPIキー', '颁发的 API 密钥')}</span>
                </div>
                <div>
                  <code>X-KORION-TIMESTAMP</code>
                  <span>{t('Request timestamp', '요청 시각', 'リクエストタイムスタンプ', '请求时间戳')}</span>
                </div>
                <div>
                  <code>X-KORION-NONCE</code>
                  <span>{t('Unique request nonce', '고유 요청 식별값', '一意のリクエストナンス', '唯一请求 Nonce')}</span>
                </div>
                <div>
                  <code>X-KORION-SIGNATURE</code>
                  <span>{t('Request signature', '서명값', 'リクエスト署名', '请求签名')}</span>
                </div>
              </div>
            </section>

            <section className="developers-auth-section">
              <div className="developers-auth-section__heading">
                <div className="developers-auth-section__icon">
                  <TimerReset size={18} />
                </div>
                <div>
                  <h2>{t('Replay Protection', '재전송 방지', 'リプレイ保護', '重放保护')}</h2>
                  <p>
                    {t(
                      'Production documentation should define timestamp tolerance, nonce reuse policy, and expiration rules to prevent duplicate request processing.',
                      '실서비스 문서에서는 timestamp 허용 오차, nonce 중복 허용 여부, 만료 규칙을 함께 안내하는 것이 좋습니다.',
                      '本番ドキュメントでは、重複するリクエスト処理を防ぐために、タイムスタンプの許容誤差、ナンスの再利用ポリシー、および有効期限ルールを定義する必要があります。',
                      '生产文档应定义时间戳容差、Nonce 重用策略和过期规则，以防止重复请求处理。'
                    )}
                  </p>
                </div>
              </div>

              <ul className="developers-auth-list">
                <li>
                  {t(
                    'Request timestamp can be limited to a short validity window, for example 5 minutes',
                    '요청 타임스탬프는 예: 5분 이내만 허용',
                    'リクエストタイムスタンプは、たとえば5分以内の短い有効期間に制限できます',
                    '请求时间戳可以限制在一个较短的有效期内，例如 5 分钟'
                  )}
                </li>
                <li>
                  {t(
                    'Duplicate nonce values should be rejected',
                    '동일 nonce 재사용 시 요청 거절',
                    '重複するナンス値は拒되る必要があります',
                    '重复的 Nonce 值应被拒绝'
                  )}
                </li>
                <li>
                  {t(
                    'Sensitive operations can use stricter expiry policies',
                    '민감 요청은 더 엄격한 유효시간 적용 가능',
                    '機密性の高い操作には、より厳格な有効期限ポリシーを適用できます',
                    '敏感操作可以使用更严格的过期策略'
                  )}
                </li>
              </ul>
            </section>

            <section className="developers-auth-section" id="auth-errors">
              <div className="developers-auth-section__heading">
                <div className="developers-auth-section__icon">
                  <Workflow size={18} />
                </div>
                <div>
                  <h2>{t('Auth Errors', '인증 오류', '認証エラー', '认证错误')}</h2>
                  <p>
                    {t(
                      'Publishing representative auth errors makes debugging much easier for developers during the integration process.',
                      '대표 인증 오류를 먼저 공개하면 개발자가 디버깅 시간을 크게 줄일 수 있습니다.',
                      '代表的な認証エラーを公開することで、開発者の統合プロセス中のデバッグがはるかに容易になります。',
                      '发布代表性认证错误使开发人员在集成过程中的调试变得更加容易。'
                    )}
                  </p>
                </div>
              </div>

              <div className="developers-auth-errors">
                {errorRows.map((row) => (
                  <div className="developers-auth-error" key={row.code}>
                    <code>{row.code}</code>
                    <span>{t(row.en, row.ko, row.ja, row.zh)}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="developers-auth-section">
              <h2>{t('Representative Request Example', '대표 요청 예시', '代表的なリクエスト例', '代表性请求示例')}</h2>
              <div className="developers-auth-divider" />
              <div className="developers-auth-code">
                <div className="developers-auth-code__top">
                  <span />
                  <span />
                  <span />
                </div>
                <pre>{`curl -X GET 'https://api.korion.io/v1/wallet/balance' \\
-H 'X-KORION-API-KEY: YOUR_API_KEY' \\
-H 'X-KORION-TIMESTAMP: 1712345678901' \\
-H 'X-KORION-NONCE: 9b0f1d2a-11ab-46a4' \\
-H 'X-KORION-SIGNATURE: GENERATED_SIGNATURE'`}</pre>
              </div>
            </section>
          </main>
        </div>
      </section>
    </div>
  );
}