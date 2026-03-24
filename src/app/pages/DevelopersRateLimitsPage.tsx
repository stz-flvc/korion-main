import { Link } from 'react-router';
import { ChevronDown, TimerReset, Gauge, RefreshCcw, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import './DevelopersRateLimitsPage.css';

export function DevelopersRateLimitsPage() {
  const { t } = useLanguage();

  return (
    <div className="developers-doc-page">
      <section className="developers-doc-hero">
        <div className="developers-doc-page__container">
          <div className="developers-doc-hero__crumbs">
            <Link to="/developers">{t('Developers', '개발자', 'デ베ロッパー', '开发者')}</Link>
            <ChevronDown size={14} />
            <Link to="/developers/api">{t('API Reference', 'API 레퍼런스', 'APIリファレンス', 'API 参考')}</Link>
            <ChevronDown size={14} />
            <span>{t('Rate Limit Policy', '호출 제한 정책', 'レート制限ポリシー', '速率限制策略')}</span>
          </div>

          <div className="developers-doc-hero__eyebrow">
            <TimerReset size={16} />
            <span>{t('Operational Stability Doc', '운영 안정성 문서', '運用安定性ドキュメント', '运营稳定性文档')}</span>
          </div>

          <h1>{t('Rate Limit Policy', '호출 제한 정책', 'レート制限ポリシー', '速率限制策略')}</h1>
          <p>
            {t(
              'Rate limiting is an operational safeguard for system stability. Clients should implement burst control, retry intervals, and backoff strategies to maintain quality.',
              '호출 제한 정책은 단순 차단이 아니라 전체 시스템 안정성과 파트너 품질을 유지하기 위한 운영 기준입니다. 클라이언트는 버스트 제어, 재시도 간격, 백오프 설계를 반영해 안정적으로 구현하는 것이 좋습니다.',
              'レート制限は、システムの安定性のための運用上の安全策です。クライアントは、品質を維持するために、バースト制御、再試行間隔、およびバックオフ戦略を実装する必要があります。',
              '速率限制是系统稳定性的运营保障。客户端应实施突发控制、重试间隔和退避策略，以保持服务质量。'
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
              <a href="#limits">{t('Base Limits', '기본 한도', '基本制限', '基础限制')}</a>
              <a href="#retry">{t('Retry Strategy', '재시도 전략', '再試行戦略', '重试策略')}</a>
              <a href="#best-practice">{t('Best Practice', '권장 구현', 'ベストプラクティス', '最佳实践')}</a>
            </div>
          </aside>

          <main className="developers-doc-main">
            <section className="developers-doc-section" id="limits">
              <div className="developers-doc-section__heading">
                <div className="developers-doc-section__icon">
                  <Gauge size={18} />
                </div>
                <div>
                  <h2>{t('Representative Limits', '기본 한도 예시', '代表的な制限', '代表性限制')}</h2>
                  <p>
                    {t(
                      'Actual limits may vary by partner tier, but documentation provides a clear baseline for initial integration and scaling plans.',
                      '실제 운영 정책은 파트너 등급에 따라 달라질 수 있지만, 문서상 기본 가이드를 제공하면 충분합니다.',
                      '実際の制限はパートナーのティアによって異なる場合がありますが、ドキュメントには、初期の統合およびスケーリング計画のための明確な基準を提供します。',
                      '实际限制可能因合作伙伴层级而异，但文档为初始集成和扩展计划提供了明确的基准。'
                    )}
                  </p>
                </div>
              </div>

              <div className="developers-doc-grid developers-doc-grid--triple">
                <div>
                  <span>{t('Requests per second', '초당 요청 수', '秒間リクエスト数', '每秒请求数')}</span>
                  <strong>100 req / sec</strong>
                </div>
                <div>
                  <span>{t('Daily quota', '일일 한도', '1日あたりのクォータ', '每日配额')}</span>
                  <strong>10,000 req / day</strong>
                </div>
                <div>
                  <span>{t('On limit exceed', '초과 시 처리', '制限超過時の処理', '超过限制时')}</span>
                  <strong>429 Too Many Requests</strong>
                </div>
              </div>
            </section>

            <section className="developers-doc-section" id="retry">
              <div className="developers-doc-section__heading">
                <div className="developers-doc-section__icon">
                  <RefreshCcw size={18} />
                </div>
                <div>
                  <h2>{t('Retry Strategy', '재시도 전략', '再試행 전략', '重试策略')}</h2>
                  <p>
                    {t(
                      'Immediate infinite retries can worsen throttling and affect system health. Exponential backoff is highly recommended for all clients.',
                      '즉시 무한 재시도는 오히려 차단을 심화시킬 수 있으므로 지수 백오프 기반 전략이 적합합니다.',
                      '即時の無制限な再試行は抑制を悪化させ、システムの健全性に影響を与える可能性があります。すべてのクライアントにエクスポネンシャルバックオフが強く推奨されます。',
                      '立即无限重试会加剧限制并影响系统健康。强烈建议所有客户端使用指数退避策略。'
                    )}
                  </p>
                </div>
              </div>

              <div className="developers-doc-note">
                {t(
                  'Recommended: increase retry intervals as 1s → 2s → 4s → 8s to ease server load',
                  '권장: 1초 → 2초 → 4초 → 8초 순으로 재시도 간격 증가',
                  '推奨：サーバーの負荷を軽減するために、再試行間隔を 1s → 2s → 4s → 8s のように増やしてください',
                  '推荐：按 1s → 2s → 4s → 8s 增加重试间隔以减轻服务器负载'
                )}
              </div>
            </section>

            <section className="developers-doc-section" id="best-practice">
              <div className="developers-doc-section__heading">
                <div className="developers-doc-section__icon">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <h2>{t('Best Practice', '권장 구현 방식', 'ベストプラクティス', '最佳实践')}</h2>
                  <p>
                    {t(
                      'Clients should combine caching, polling interval control, and event-driven processing where possible to avoid reaching limits.',
                      '클라이언트는 제한에 걸리지 않도록 캐싱, 폴링 간격 조절, 이벤트 기반 처리 전환을 함께 고려하는 것이 좋습니다.',
                      'クライアントは、制限に達しないように、可能な限りキャッシュ、ポーリング間隔の制御、およびイベント駆動型処理を組み合わせる必要があります。',
                      '客户端应尽可能结合缓存、轮询间隔控制和事件驱动处理，以避免达到限制。'
                    )}
                  </p>
                </div>
              </div>

              <div className="developers-doc-list">
                <div>{t('Cache read-heavy requests', '읽기 요청은 캐싱 활용', '読み取り負荷の高いリクエストをキャッシュする', '缓存读重请求')}</div>
                <div>{t('Reduce status polling frequency', '상태 확인 폴링 주기 최소화', 'ステータスポーリングの頻度を減らす', '降低状态轮询频率')}</div>
                <div>{t('Prefer webhook-driven updates where possible', '가능한 경우 웹훅 기반 처리 전환', '可能な場合はウェブフック駆動の更新を優先する', '尽可能优先使用 Webhook 驱动的更新')}</div>
                <div>{t('Apply automatic backoff on 429 responses', '429 응답 시 자동 백오프', '429レスポンス時に自動バックオフを適用する', '对 429 响应应用自动退避')}</div>
              </div>
            </section>
          </main>
        </div>
      </section>
    </div>
  );
}