import { Link } from 'react-router';
import {
  BadgeCheck,
  ChevronDown,
  FlaskConical,
  KeyRound,
  PlayCircle,
  ShieldCheck,
  TestTubeDiagonal,
  Workflow,
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import './DevelopersSandboxPage.css';

const sandboxFlows = [
  {
    icon: KeyRound,
    titleEn: 'Sandbox Credentials',
    titleKo: '샌드박스 인증정보',
    titleJa: 'サンドボックス認証情報',
    titleZh: '沙盒凭据',
    descEn: 'Issue test API keys and secrets for integration development.',
    descKo: '연동 개발을 위한 테스트용 API 키와 시크릿을 발급합니다.',
    descJa: '統合開発用のテストAPIキーとシークレットを発行します。',
    descZh: '发布用于集成开发的测试 API 密钥和密钥。',
  },
  {
    icon: PlayCircle,
    titleEn: 'Test Payment Flow',
    titleKo: '테스트 결제 흐름',
    titleJa: 'テスト決済フロー',
    titleZh: '测试支付流程',
    descEn: 'Simulate order creation, payment success, and failure states.',
    descKo: '주문 생성, 결제 성공, 실패 상태를 시뮬레이션합니다.',
    descJa: '注文作成、決済成功、および失敗の状態をシミュレートします。',
    descZh: '模拟订单创建、支付成功和失败状态。',
  },
  {
    icon: Workflow,
    titleEn: 'Webhook Event Simulation',
    titleKo: '웹훅 이벤트 시뮬레이션',
    titleJa: 'Webhookイベントシミュレーション',
    titleZh: 'Webhook 事件模拟',
    descEn: 'Trigger representative webhook events for validation and QA.',
    descKo: '검증과 QA를 위한 대표 웹훅 이벤트를 발생시킵니다.',
    descJa: '検証とQAのために代表的なWebhookイベントをトリガーします。',
    descZh: '触发代表性 Webhook 事件以进行验证和 QA。',
  },
  {
    icon: BadgeCheck,
    titleEn: 'Partner Staging',
    titleKo: '파트너 스테이징',
    titleJa: 'パートナーステージング',
    titleZh: '合作伙伴暂存',
    descEn: 'Prepare merchants, exchanges, and wallet partners before production.',
    descKo: '가맹점, 거래소, 지갑 파트너의 운영 전 준비를 지원합니다.',
    descJa: '本番稼働前に、加盟店、取引所、およびウォレットパートナーの準備を整えます。',
    descZh: '在生产部署前准备商家、交易所和钱包合作伙伴。',
  },
];

export function DevelopersSandboxPage() {
  const { t } = useLanguage();

  return (
    <div className="developers-sandbox-page">
      <section className="developers-sandbox-hero">
        <div className="developers-sandbox-page__container">
          <div className="developers-sandbox-hero__crumbs">
            <Link to="/developers">{t('Developers', '개발자', 'デベロッパー', '开发者')}</Link>
            <ChevronDown size={16} />
            <span>{t('Sandbox', '샌드박스', 'サンドボックス', '沙盒')}</span>
          </div>

          <h1>{t('Sandbox Guide', '샌드박스 가이드', 'サンドボックスガイド', '沙盒指南')}</h1>
          <p>
            {t(
              'Sandbox is the safe testing surface for validating wallet, payment, webhook, and partner flows before production deployment.',
              '샌드박스는 실서비스 전에 결제, 지갑, 웹훅, 파트너 연동을 안전하게 검증하기 위한 테스트 환경입니다. 테스트 키, 예제 흐름, 샘플 payload, 이벤트 시뮬레이션 구조를 함께 안내하는 것이 좋습니다.',
              'サンドボックスは、本番環境へのデプロイ前に、ウォレット、決済、Webhook、およびパートナーのフローを安全に検証するためのテスト環境です。',
              '沙盒是生产部署前验证钱包、支付、Webhook 和合作伙伴流程的安全测试界面。'
            )}
          </p>
        </div>
      </section>

      <section className="developers-sandbox-body">
        <div className="developers-sandbox-page__container">
          <div className="developers-sandbox-intro">
            <div className="developers-sandbox-intro__card">
              <FlaskConical size={16} />
              <strong>{t('Pre-production validation environment', '운영 전 검증 환경', '本番前の検証環境', '生产前验证环境')}</strong>
            </div>
            <div className="developers-sandbox-intro__card">
              <ShieldCheck size={16} />
              <strong>{t('Isolated test flow from production', '실서비스와 분리된 테스트 흐름', '本番から隔離されたテストフロー', '与生产隔离的测试流程')}</strong>
            </div>
          </div>

          <div className="developers-sandbox-flows">
            {sandboxFlows.map((flow) => {
              const Icon = flow.icon;
              return (
                <article className="developers-sandbox-flow" key={flow.titleEn}>
                  <div className="developers-sandbox-flow__icon">
                    <Icon size={16} />
                  </div>
                  <h2>{t(flow.titleEn, flow.titleKo, flow.titleJa, flow.titleZh)}</h2>
                  <p>{t(flow.descEn, flow.descKo, flow.descJa, flow.descZh)}</p>
                </article>
              );
            })}
          </div>

          <section className="developers-sandbox-section">
            <h2>{t('Representative Test Flow', '대표 테스트 순서', '代表的なテストフロー', '代表性测试流程')}</h2>
            <div className="developers-sandbox-divider" />
            <div className="developers-sandbox-steps">
              <div><TestTubeDiagonal size={16} /><span>{t('Issue sandbox credentials', '샌드박스 키 발급', 'サンドボックス認証情報の発行', '发布沙盒凭据')}</span></div>
              <div><TestTubeDiagonal size={16} /><span>{t('Create a test payment request', '테스트 결제 요청 생성', 'テスト決済リクエストの作成', '创建测试支付请求')}</span></div>
              <div><TestTubeDiagonal size={16} /><span>{t('Confirm representative state transitions', '대표 상태 전환 확인', '代表的な状態遷移の確認', '确认代表性状态转换')}</span></div>
              <div><TestTubeDiagonal size={16} /><span>{t('Validate webhook event reception', '웹훅 이벤트 수신 검증', 'Webhookイベント受信の検証', '验证 Webhook 事件接收')}</span></div>
              <div><TestTubeDiagonal size={16} /><span>{t('Review partner staging readiness', '파트너 스테이징 검수', 'パートナーステージングの準備状況の確認', '审查合作伙伴暂存就绪情况')}</span></div>
            </div>
          </section>

          <section className="developers-sandbox-section">
            <h2>{t('Sample Environment Values', '샘플 환경 값', 'サンプル環境変数の値', '示例环境值')}</h2>
            <div className="developers-sandbox-divider" />
            <div className="developers-sandbox-code">
              <div className="developers-sandbox-code__top">
                <span />
                <span />
                <span />
              </div>
              <pre>{`BASE_URL=https://sandbox-api.korion.io
API_KEY=SANDBOX_KEY
API_SECRET=SANDBOX_SECRET
WEBHOOK_SECRET=SANDBOX_WEBHOOK_SECRET`}</pre>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}