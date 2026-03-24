import { Link } from 'react-router';
import { useState } from 'react';
import { ExternalLink, Navigation, Terminal, Code2, Database, Loader2, CheckCircle2, Store, Landmark } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import './DevelopersPreregisterPage.css';

export function DevelopersPreregisterPage() {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    category: 'Developer',
    company: '',
    contactName: '',
    email: '',
    website: '',
    interestArea: '',
    integrationPlan: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'loading') return;
    setStatus('loading');
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus('success');
  };

  return (
    <div className="developers-prereg-page">
      <section className="developers-prereg-hero">
        <div className="developers-prereg-page__container">
          <div className="developers-prereg-hero__crumbs">
            <Link to="/developers">{t('Developers', '개발자', 'デベロッパー', '开发者')}</Link>
            <Navigation size={14} />
            <span>{t('Pre-registration', '사전등록', '事前登録', '预注册')}</span>
          </div>

          <h1>{t('Developer & Partner Pre-registration', '개발자 및 파트너 사전등록', '開発者およびパートナーの事前登録', '开发者和合作伙伴预注册')}</h1>
          <p>
            {t(
              'Register early for access to documentation previews, sandbox credentials, SDK previews, and partner onboarding flows.',
              '초기 문서, 샌드박스, SDK 프리뷰, 파트너 온보딩 정보를 먼저 받아볼 수 있도록 개발자와 파트너를 위한 사전등록 구조를 제공합니다.',
              'ドキュメントのプレビュー、サンドボックスの認証情報、SDKのプレビュー、およびパートナーのオンボーディングフローに早期にアクセスするために登録してください。',
              '尽早注册以获取文档预览、沙盒凭据、SDK 预览和合作伙伴入驻流程的访问权限。'
            )}
          </p>
        </div>
      </section>

      <section className="developers-prereg-body">
        <div className="developers-prereg-page__container">
          <div className="developers-prereg-cards">
            <article className="developers-prereg-card">
              <div className="developers-prereg-card__icon">
                <Code2 size={18} />
              </div>
              <h2>{t('Developer Pre-registration', '개발자 사전등록', '開発者の事前登録', '开发者预注册')}</h2>
              <p>
                {t(
                  'For developers who want early access to API docs, SDK examples, and sandbox onboarding.',
                  'API 문서, SDK 샘플, 샌드박스 발급 절차를 먼저 받고 싶은 개발자를 위한 등록입니다.',
                  'APIドキュメント、SDKサンプル、およびサンドボックスのオンボーディングに早期にアクセスしたい開発者向けです。',
                  '适用于希望尽早获取 API 文档、SDK 示例和沙盒引导的开发人员。'
                )}
              </p>
            </article>

            <article className="developers-prereg-card">
              <div className="developers-prereg-card__icon">
                <Store size={18} />
              </div>
              <h2>{t('Merchant / Service Registration', '가맹점 / 서비스 사전등록', '加盟店 / サービスの事前登録', '商家 / 服务注册')}</h2>
              <p>
                {t(
                  'For merchants and service operators preparing KORION Pay and settlement integrations.',
                  'KORION Pay 및 정산 흐름 연동을 준비하는 서비스 운영자를 위한 등록입니다.',
                  'KORION Payおよび精算統合を準備している加盟店およびサービス運営者向けです。',
                  '适用于准备 KORION Pay 和结算集成的商家和服务运营商。'
                )}
              </p>
            </article>

            <article className="developers-prereg-card">
              <div className="developers-prereg-card__icon">
                <Landmark size={18} />
              </div>
              <h2>{t('Exchange / Wallet Partner Registration', '거래소 / 지갑 파트너 등록', '取引所 / ウォレットパートナー登録', '交易所 / 钱包合作伙伴注册')}</h2>
              <p>
                {t(
                  'For exchanges, custodians, and wallet providers preparing asset or network-level integrations.',
                  '거래소, 커스터디, 지갑 사업자 등 자산 또는 네트워크 연동을 준비하는 파트너를 위한 등록입니다.',
                  '資産またはネットワークレベルの統合を準備している取引所、カストディアン、およびウォレットプロバイダー向けです。',
                  '适用于准备资产或网络级集成的交易所、托管机构和钱包提供商。'
                )}
              </p>
            </article>
          </div>

          <div className="developers-prereg-formwrap">
            <h2>{t('Pre-registration Form', '사전등록 양식', '事前登録フォーム', '预注册表格')}</h2>
            <div className="developers-prereg-divider" />

            <form className="developers-prereg-form" onSubmit={handleSubmit}>
              {status === 'success' ? (
                  <div className="developers-prereg-form__success">
                    <CheckCircle2 size={56} className="developers-prereg-form__success-icon" />
                    <h3>{t('Registration Submitted Successfully', '사전등록이 완료되었습니다', '事前登録が完了しました', '预注册已成功提交')}</h3>
                    <p>{t('We will notify you with the integration guide when it is ready.', '준비가 완료되는 대로 연동 가이드를 안내해 드리겠습니다.', '準備ができ次第、統合ガイドをご案内します。', '准备就绪后，我们将通知您集成指南。')}</p>
                    <button 
                      type="button" 
                      onClick={() => {
                        setFormData({ category: 'Developer', company: '', contactName: '', email: '', website: '', interestArea: '', integrationPlan: '' });
                        setStatus('idle');
                      }}
                      style={{ marginTop: '24px' }}
                    >
                      {t('Submit Another Registration', '새로운 사전등록 작성', '新しい事前登録を作成', '提交新的预注册')}
                    </button>
                  </div>
              ) : (
                <>
                  <div className="developers-prereg-form__grid">
                    <label>
                      <span>{t('Category', '구분', 'カテゴリ', '类别')}</span>
                      <select name="category" value={formData.category} onChange={handleChange} required>
                        <option value="Developer">{t('Developer', '개발자', '開発者', '开发者')}</option>
                        <option value="Merchant">{t('Merchant / Service', '가맹점 / 서비스', '加盟店 / サービス', '商家 / 服务')}</option>
                        <option value="Partner">{t('Exchange / Wallet Partner', '거래소 / 지갑 파트너', '取引所 / ウォレットパートナー', '交易所 / 钱包合作伙伴')}</option>
                      </select>
                    </label>

                    <label>
                      <span>{t('Company / Team', '회사명 / 팀명', '会社名 / チーム名', '公司 / 团队')}</span>
                      <input type="text" name="company" value={formData.company} onChange={handleChange} required placeholder={t('Company or team name', '회사명 또는 팀명', '会社名またはチーム名', '公司或团队名称')} />
                    </label>

                    <label>
                      <span>{t('Contact Name', '담당자명', '担当者名', '联系人姓名')}</span>
                      <input type="text" name="contactName" value={formData.contactName} onChange={handleChange} required placeholder={t('Contact name', '담당자명', '担当者名', '联系人姓名')} />
                    </label>

                    <label>
                      <span>{t('Email', '이메일', 'メールアドレス', '电子邮件')}</span>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="contact@example.com" />
                    </label>

                    <label>
                      <span>{t('Website', '웹사이트', 'ウェブサイト', '网站')}</span>
                      <input type="text" name="website" value={formData.website} onChange={handleChange} placeholder="https://example.com" />
                    </label>

                    <label>
                      <span>{t('Interest Area', '관심 영역', '関心領域', '兴趣领域')}</span>
                      <input
                        type="text"
                        name="interestArea"
                        value={formData.interestArea}
                        onChange={handleChange}
                        placeholder={
                          t(
                            'e.g. Wallet API, Payment API, Sandbox, Exchange Integration',
                            '예: Wallet API, Payment API, Sandbox, Exchange Integration',
                            '例：ウォレットAPI、決済API、サンドボックス、取引所統合',
                            '例如：钱包 API、支付 API、沙盒、交易所集成'
                          )
                        }
                      />
                    </label>
                  </div>

                  <label className="developers-prereg-form__full">
                    <span>{t('Integration Plan or Request', '연동 계획 또는 요청사항', '統合計画またはリクエスト', '集成计划或请求')}</span>
                    <textarea
                      rows={7}
                      name="integrationPlan"
                      value={formData.integrationPlan}
                      onChange={handleChange}
                      required
                      placeholder={
                        t(
                          'Describe your integration goals, required docs, and whether you need sandbox access.',
                          '예상 연동 목적, 필요한 문서, 샌드박스 필요 여부 등을 작성하세요.',
                          '統合の目標、必要なドキュメント、およびサンドボックスアクセスの必要性について説明してください。',
                          '描述您的集成目标、所需的文档以及是否需要沙盒访问权限。'
                        )
                      }
                    />
                  </label>

                  <div className="developers-prereg-form__actions">
                    <button type="submit" disabled={status === 'loading'}>
                      {status === 'loading' ? (
                        <>
                          {t('Submitting...', '제출 중...', '送信中...', '提交中...')}
                          <Loader2 size={16} className="animate-spin" style={{ marginLeft: '8px', verticalAlign: 'middle', display: 'inline-block' }} />
                        </>
                      ) : (
                        t('Submit Registration', '사전등록 신청', '事前登録を送信', '提交注册')
                      )}
                    </button>
                  </div>
                </>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}