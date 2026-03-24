import { Link } from 'react-router';
import { ChevronDown, Code2, TerminalSquare, FileJson2, Boxes } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import './DevelopersExamplesPage.css';

export function DevelopersExamplesPage() {
  const { t } = useLanguage();

  return (
    <div className="developers-doc-page">
      <section className="developers-doc-hero">
        <div className="developers-doc-page__container">
          <div className="developers-doc-hero__crumbs">
            <Link to="/developers">{t('Developers', '개발자', 'デ베ロッ퍼', '开发者')}</Link>
            <ChevronDown size={16} />
            <Link to="/developers/api">{t('API Reference', 'API 레퍼런스', 'APIリファレンス', 'API 参考')}</Link>
            <ChevronDown size={16} />
            <span>{t('SDK & Example Code', 'SDK 및 예제 코드', 'SDKおよびサンプルコード', 'SDK 和示例代码')}</span>
          </div>

          <div className="developers-doc-hero__eyebrow">
            <Code2 size={16} />
            <span>{t('Integration Starter Doc', '연동 시작 문서', '統合開始ドキュメント', '集成入门文档')}</span>
          </div>

          <h1>{t('SDK & Example Code', 'SDK 및 예제 코드', 'SDK및 샘플 코드', 'SDK 和示例代码')}</h1>
          <p>
            {t(
              'Developers adopt faster when they can copy runnable examples. Wallet lookup, payment creation, and webhook handling are documented here with real snippets.',
              '개발자는 문서만 읽는 것보다 바로 복사해서 테스트할 수 있는 예제 코드에서 훨씬 빠르게 진입합니다. 지갑 조회, 결제 요청, 웹훅 처리 같은 대표 흐름은 최소한 예제 수준으로 제공하는 것이 좋습니다.',
              '開発者は、実行可能な例をコピーできる場合に、より迅速に導入できます。ウォレットの検索、決済の作成、およびWebhookの処理は、実際のコードスニペットで文書化されています。',
              '当开发人员可以复制可运行的示例时，他们的采用速度会更快。钱包查找、支付创建和 Webhook 处理在此处使用真实片段进行记录。'
            )}
          </p>
        </div>
      </section>

      <section className="developers-doc-body">
        <div className="developers-doc-page__container developers-doc-layout">
          <aside className="developers-doc-sidebar">
            <div className="developers-doc-sidebar__box">
              <span className="developers-doc-sidebar__title">
                {t('On this page', '문서 탐색', 'このページの内容', '本页内容')}
              </span>
              <a href="#languages">{t('Example Languages', '지원 예시 언어', 'サンプル言語', '示例语言')}</a>
              <a href="#curl">{t('cURL Example', 'cURL 예시', 'cURLの例', 'cURL 示例')}</a>
              <a href="#node">{t('Node.js Example', 'Node.js 예시', 'Node.jsの例', 'Node.js 示例')}</a>
              <a href="#json">{t('Response Example', '응답 예시', 'レスポンスの例', '响应示例')}</a>
            </div>
          </aside>

          <main className="developers-doc-main">
            <section className="developers-doc-section" id="languages">
              <div className="developers-doc-section__heading">
                <div className="developers-doc-section__icon">
                  <Boxes size={16} />
                </div>
                <div>
                  <h2>{t('Example Languages', '지원 예시 언어', 'サンプル言語', '示例语言')}</h2>
                  <p>
                    {t(
                      'Providing cURL, Node.js, and Python samples significantly improves onboarding speed and reduces integration friction.',
                      '실무에서는 최소한 cURL, Node.js, Python 예제를 제공하면 초기 도입성이 크게 좋아집니다.',
                      'cURL、Node.js、およびPythonのサンプルを提供することで、オンボーディング速度が大幅に向上し、統合の摩擦が軽減されます。',
                      '提供 cURL、Node.js 和 Python 示例可以显着提高入门速度并减少集成摩擦。'
                    )}
                  </p>
                </div>
              </div>

              <div className="developers-doc-list">
                <div>cURL</div>
                <div>Node.js</div>
                <div>Python</div>
                <div>{t('SDK packages can be expanded later', '향후 SDK 패키지 확장 가능', 'SDKパッケージは後で拡張可能', 'SDK 包稍后可以扩展')}</div>
              </div>
            </section>

            <section className="developers-doc-section" id="curl">
              <div className="developers-doc-section__heading">
                <div className="developers-doc-section__icon">
                  <TerminalSquare size={16} />
                </div>
                <div>
                  <h2>{t('cURL Example', 'cURL 예시', 'cURLの例', 'cURL 示例')}</h2>
                  <p>
                    {t(
                      'cURL is the fastest format developers can use to copy and test API endpoints immediately from their terminal.',
                      '가장 먼저 복사해서 테스트하기 좋은 형태입니다.',
                      'cURLは、開発者がターミナルからすぐにAPIエンドポイントをコピーしてテストできる最速の形式です。',
                      'cURL 是开发人员可以从终端立即复制和测试 API 端点的最快格式。'
                    )}
                  </p>
                </div>
              </div>

              <div className="developers-doc-code">
                <div className="developers-doc-code__top">
                  <span />
                  <span />
                  <span />
                </div>
                <pre>{`curl https://api.korion.io/v1/payments \\
-X POST \\
-H "Authorization: Bearer YOUR_API_KEY" \\
-H "Content-Type: application/json" \\
-d '{
    "asset": "KORI",
    "amount": "100.00",
    "order_id": "order_001"
}'`}</pre>
              </div>
            </section>

            <section className="developers-doc-section" id="node">
              <div className="developers-doc-section__heading">
                <div className="developers-doc-section__icon">
                  <Code2 size={16} />
                </div>
                <div>
                  <h2>{t('Node.js Example', 'Node.js 예시', 'Node.jsの例', 'Node.js 示例')}</h2>
                  <p>
                    {t(
                      'A minimal example for JavaScript-based backend integrations using standard Fetch API.',
                      '프론트엔드/백엔드 JavaScript 개발자가 바로 참고할 수 있는 최소 예시입니다.',
                      '標準のFetch APIを使用した、JavaScriptベースのバックエンド統合のための最小限の例です。',
                      '使用标准 Fetch API 的基于 JavaScript 的后端集成的最简示例。'
                    )}
                  </p>
                </div>
              </div>

              <div className="developers-doc-code">
                <div className="developers-doc-code__top">
                  <span />
                  <span />
                  <span />
                </div>
                <pre>{`const response = await fetch('https://api.korion.io/v1/wallet/balance', {
  method: 'GET',
  headers: {
    Authorization: 'Bearer YOUR_API_KEY',
  },
});

const data = await response.json();
console.log(data);`}</pre>
              </div>
            </section>

            <section className="developers-doc-section" id="json">
              <div className="developers-doc-section__heading">
                <div className="developers-doc-section__icon">
                  <FileJson2 size={16} />
                </div>
                <div>
                  <h2>{t('Response Example', '응답 예시', 'レスポンスの例', '响应示例')}</h2>
                  <p>
                    {t(
                      'Showing the standardized response structure alongside request snippets helps teams integrate and handle data faster.',
                      '대표 응답 구조를 같이 보여주면 연동 속도가 빨라집니다.',
                      'リクエストスニペットと一緒に標準化されたレスポンス構造を示すことで、チームはデータの統合と処理をより迅速に行うことができます。',
                      '在请求片段旁边显示标准化响应结构有助于团队更快地集成和处理数据。'
                    )}
                  </p>
                </div>
              </div>

              <div className="developers-doc-code">
                <div className="developers-doc-code__top">
                  <span />
                  <span />
                  <span />
                </div>
                <pre>{`{
  "success": true,
  "code": "OK_200",
  "message": "Request completed",
  "data": {
    "balance": "12500.00",
    "asset": "KORI",
    "network": "TRON"
  }
}`}</pre>
              </div>
            </section>
          </main>
        </div>
      </section>
    </div>
  );
}