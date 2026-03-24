import { Link } from 'react-router';
import {
  BellRing,
  ChevronDown,
  FileJson,
  ShieldCheck,
  Webhook,
  Workflow,
  Wrench,
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import './DevelopersWebhooksPage.css';

const eventRows = [
  {
    name: 'payment.completed',
    en: 'Triggered when a payment reaches final success state',
    ko: '결제 최종 성공 상태에 도달했을 때 발생합니다',
    ja: '決済が最終的な成功状態に達したときにトリガーされます',
    zh: '当支付达到最终成功状态时触发',
  },
  {
    name: 'payment.failed',
    en: 'Triggered when a payment ends in failure state',
    ko: '결제가 실패 상태로 종료되었을 때 발생합니다',
    ja: '決済が失敗状態で終了したときにトリガーされます',
    zh: '当支付以失败状态结束时触发',
  },
  {
    name: 'deposit.confirmed',
    en: 'Triggered after a deposit is confirmed',
    ko: '입금이 확인된 이후 발생합니다',
    ja: '入金が確認された後にトリガーされます',
    zh: '存款确认后触发',
  },
  {
    name: 'withdrawal.completed',
    en: 'Triggered when a withdrawal is completed',
    ko: '출금이 완료되었을 때 발생합니다',
    ja: '出金が完了したときにトリガーされます',
    zh: '提现完成时触发',
  },
  {
    name: 'settlement.updated',
    en: 'Triggered when settlement state changes',
    ko: '정산 상태가 변경되었을 때 발생합니다',
    ja: '精算状態が変更されたときにトリガーされます',
    zh: '结算状态更改时触发',
  },
];

export function DevelopersWebhooksPage() {
  const { t } = useLanguage();

  return (
    <div className="developers-webhooks-page">
      <section className="developers-webhooks-hero">
        <div className="developers-webhooks-page__container">
          <div className="developers-webhooks-hero__crumbs">
            <Link to="/developers">{t('Developers', '개발자', 'デベロッパー', '开发者')}</Link>
            <ChevronDown size={14} />
            <span>{t('Webhooks', '웹훅', 'ウェブフック', 'Webhook')}</span>
          </div>

          <h1>{t('Webhook Guide', 'Webhook 가이드', 'Webhookガイド', 'Webhook 指南')}</h1>
          <p>
            {t(
              'KORION webhook documentation explains event-driven delivery for payment, deposit, withdrawal, and settlement state changes, including event names, delivery model, signature verification, retry policy, and sample payloads.',
              'KORION Webhook 문서는 결제, 입금, 출금, 정산 상태 변경을 이벤트 기반으로 수신하는 구조를 설명합니다. 이벤트 이름, 전달 방식, 서명 검증, 재시도 정책, 샘플 payload를 함께 제공하는 것이 좋습니다.',
              'KORION Webhookドキュメントでは、決済、入金、出金、精算の状態変更をイベントベースで受信する構造について説明します。イベント名、配信モデル、署名検証、再試行ポリシー、およびサンプルペイロードが含まれます。',
              'KORION Webhook 文档解释了基于事件的支付、存款、提现和结算状态更改的交付，包括事件名称、交付模型、签名验证、重试策略和示例有效负载。'
            )}
          </p>
        </div>
      </section>

      <section className="developers-webhooks-body">
        <div className="developers-webhooks-page__container developers-webhooks-body__grid">
          <aside className="developers-webhooks-sidebar">
            <div className="developers-webhooks-sidebar__box">
              <span className="developers-webhooks-sidebar__title">
                {t('Webhook Docs', '웹훅 문서', 'Webhookドキュメント', 'Webhook 文档')}
              </span>
              <a href="#wh-overview">{t('Overview', '개요', '概要', '概览')}</a>
              <a href="#wh-events">{t('Event Types', '이벤트 목록', 'イベントタイプ', '事件类型')}</a>
              <a href="#wh-delivery">{t('Delivery Model', '전달 구조', '配信モデル', '交付模型')}</a>
              <a href="#wh-verification">{t('Signature Verification', '서명 검증', '署名検証', '签名验证')}</a>
              <a href="#wh-sample">{t('Sample Payload', '샘플 Payload', 'サンプルペイロード', '示例有效负载')}</a>
            </div>
          </aside>

          <main className="developers-webhooks-main">
            <section className="developers-webhooks-section" id="wh-overview">
              <h2>{t('Overview', '개요', '概要', '概览')}</h2>
              <div className="developers-webhooks-divider" />
              <p>
                {t(
                  'Webhooks are the most practical way to deliver near-real-time state changes. For asynchronous flows such as payments, deposits, withdrawals, and settlement updates, event-driven delivery is far more efficient than polling alone.',
                  'Webhook은 상태 변경을 실시간에 가깝게 전달하기 위한 가장 실용적인 방식입니다. 특히 결제, 입금, 출금, 정산 같은 비동기 흐름이 있는 서비스에서는 폴링만으로는 운영 효율이 떨어지기 때문에 이벤트 기반 구조를 함께 제공하는 것이 좋습니다.',
                  'Webhookは、状態変更をほぼリアルタイムで配信するための最も実用的な方法です。決済、入金、出金、精算の更新などの非同期フローの場合、イベントベースの配信はポーリング単独よりもはるかに効率的です。',
                  'Webhook 是交付近乎实时状态更改的最实用方式。对于支付、存款、提现和结算更新等异步流程，基于事件的交付远比单纯的轮询效率高。'
                )}
              </p>
            </section>

            <section className="developers-webhooks-section" id="wh-events">
              <div className="developers-webhooks-section__heading">
                <div className="developers-webhooks-section__icon">
                  <BellRing size={18} />
                </div>
                <div>
                  <h2>{t('Event Types', '이벤트 목록', 'イベントタイプ', '事件类型')}</h2>
                  <p>
                    {t(
                      'Publishing representative event names early helps partners design consumers faster and ensures smoother integration.',
                      '대표 이벤트 이름을 먼저 공개하면 파트너가 훅 수신 구조를 빠르게 설계할 수 있습니다.',
                      '代表的なイベント名を早期に公開することで、パートナーはコンシューマーをより迅速に設計でき、よりスムーズな統合を確保できます。',
                      '尽早发布具有代表性的事件名称有助于合作伙伴更快地设计消费者，并确保更顺畅的集成。'
                    )}
                  </p>
                </div>
              </div>

              <div className="developers-webhooks-events">
                {eventRows.map((row) => (
                  <div className="developers-webhooks-event" key={row.name}>
                    <code>{row.name}</code>
                    <span>{t(row.en, row.ko, row.ja, row.zh)}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="developers-webhooks-section" id="wh-delivery">
              <div className="developers-webhooks-section__heading">
                <div className="developers-webhooks-section__icon">
                  <Workflow size={18} />
                </div>
                <div>
                  <h2>{t('Delivery Model', '전달 구조', '配信モデル', '交付模型')}</h2>
                  <p>
                    {t(
                      'Production documentation should define transport methods, success conditions, retry policies, and duplicate-handling expectations to maintain high data integrity.',
                      '실서비스 문서에는 전송 방식, 성공 응답 조건, 재시도 정책, 중복 수신 대비 원칙이 함께 포함되는 것이 좋습니다.',
                      '本番ドキュメントでは、高いデータ整合性を維持するために、輸送方法、成功条件、再試行ポリシー、および重複処理の期待値を定義する必要があります。',
                      '生产文档应定义传输方法、成功条件、重试策略和重复处理预期，以保持高数据完整性。'
                    )}
                  </p>
                </div>
              </div>

              <ul className="developers-webhooks-list">
                <li>{t('Deliver events via HTTPS POST', 'Webhook은 HTTPS POST 방식으로 전달', 'HTTPS POST経由でイベントを配信する', '通过 HTTPS POST 交付事件')}</li>
                <li>{t('Treat 2xx responses as successful delivery', '2xx 응답을 성공으로 간주', '2xxレスポンスを正常な配信として扱う', '将 2xx 响应视为成功交付')}</li>
                <li>{t('Use progressive retry policy on failed delivery', '실패 시 단계적 재시도 정책 적용 가능', '配信に失敗した場合は段階的な再試行ポリシーを使用する', '在交付失败时使用渐进式重试策略')}</li>
                <li>{t('Consumers should implement idempotent handling for duplicate events', '중복 이벤트 수신을 고려한 idempotent 처리 권장', 'コンシューマーは、重複イベントに対してべき等処理を実装する必要がある', '消费者应针对重复事件实施幂等处理')}</li>
              </ul>
            </section>

            <section className="developers-webhooks-section" id="wh-verification">
              <div className="developers-webhooks-section__heading">
                <div className="developers-webhooks-section__icon">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <h2>{t('Signature Verification', '서명 검증', '署名検証', '签名验证')}</h2>
                  <p>
                    {t(
                      'Webhook documentation should include a clear procedure for verifying signatures from request headers against the payload to prevent unauthorized access.',
                      'Webhook 문서에는 요청 헤더의 서명값과 payload를 검증하는 절차를 포함하는 것이 좋습니다.',
                      'Webhookドキュメントには、不正アクセスを防ぐために、リクエストヘッダーからの署名をペイロードに対して検証するための明確な手順を含める必要があります。',
                      'Webhook 文档应包括针对有效负载验证请求标头签名的明确程序，以防止未经授权的访问。'
                    )}
                  </p>
                </div>
              </div>

              <div className="developers-webhooks-code">
                <div className="developers-webhooks-code__top">
                  <span />
                  <span />
                  <span />
                </div>
                <pre>{`const signature = req.headers['x-korion-signature'];
const payload = JSON.stringify(req.body);

const verified = verifyWebhookSignature({
  signature,
  payload,
  secret: WEBHOOK_SECRET,
});`}</pre>
              </div>
            </section>

            <section className="developers-webhooks-section" id="wh-sample">
              <div className="developers-webhooks-section__heading">
                <div className="developers-webhooks-section__icon">
                  <FileJson size={18} />
                </div>
                <div>
                  <h2>{t('Sample Payload', '샘플 Payload', 'サンプルペイロード', '示例有效负载')}</h2>
                  <p>
                    {t(
                      'Providing a representative payload makes consumer design much easier and faster for external developers.',
                      '대표 payload를 먼저 공개하면 이벤트 처리 로직 설계가 훨씬 쉬워집니다.',
                      '代表的なペイロードを提供することで、外部開発者向けのコンシューマーの設計がはるかに容易かつ迅速になります。',
                      '提供具有代表性的有效负载使外部开发人员的消费者设计变得更加容易且快速。'
                    )}
                  </p>
                </div>
              </div>

              <div className="developers-webhooks-code">
                <div className="developers-webhooks-code__top">
                  <span />
                  <span />
                  <span />
                </div>
                <pre>{`{
  "event": "payment.completed",
  "timestamp": 1712345678901,
  "data": {
    "paymentId": "pay_10001",
    "orderId": "ORDER-1001",
    "asset": "KORI",
    "amount": "2500.000000",
    "status": "completed"
  }
}`}</pre>
              </div>
            </section>

            <section className="developers-webhooks-section">
              <div className="developers-webhooks-section__heading">
                <div className="developers-webhooks-section__icon">
                  <Wrench size={18} />
                </div>
                <div>
                  <h2>{t('Operational Recommendations', '운영 권장사항', '運用に関する推奨事項', '操作建议')}</h2>
                  <p>
                    {t(
                      'Operational documentation can later expand toward test endpoints, signature failure handling, replay logs, and dead-letter processing to support complex enterprise workflows.',
                      '운영 문서에서는 테스트 엔드포인트, 서명 오류 대응, 재전송 이벤트 로그, dead-letter 처리 여부까지 점진적으로 확장하는 것이 좋습니다.',
                      '運用ドキュメントは、複雑なエンタープライズワークフローをサポートするために、後でテストエンドポイント、署名失敗の処理、リプレイログ、およびデッドレター処理に向けて拡張できます。',
                      '操作文档稍后可以扩展到测试终端节点、签名失败处理、重放日志和死信处理，以支持复杂的企业工作流程。'
                    )}
                  </p>
                </div>
              </div>

              <div className="developers-webhooks-recommendations">
                <div>{t('Webhook test trigger endpoint', '테스트용 webhook 발송 기능', 'Webhookテストトリガーエンドポイント', 'Webhook 测试触发终端节点')}</div>
                <div>{t('Event redelivery support', '이벤트 재전송 기능', 'イベントの再配信サポート', '事件重新交付支持')}</div>
                <div>{t('Recent events query API', '최근 이벤트 조회 API', '最近のイベントクエリAPI', '最近事件查询 API')}</div>
                <div>{t('Signature failure guide', '서명 오류 가이드', '署명 실패 가이드', '签名失败指南')}</div>
              </div>
            </section>
          </main>
        </div>
      </section>
    </div>
  );
}