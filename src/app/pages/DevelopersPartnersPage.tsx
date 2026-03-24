import { Link } from 'react-router';
import {
  Building2,
  ChevronDown,
  Globe,
  Landmark,
  LifeBuoy,
  Store,
  Wallet,
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import './DevelopersPartnersPage.css';

const partnerCards = [
  {
    icon: Store,
    titleEn: 'Merchant Integration',
    titleKo: '가맹점 연동',
    titleJa: '加盟店統合',
    titleZh: '商家集成',
    descEn: 'For online and offline services integrating KORION Pay and settlement flows.',
    descKo: 'KORION Pay 및 정산 흐름을 연동하는 온라인/오프라인 서비스용입니다.',
    descJa: 'KORION Payおよび精算フローを統合するオンライン/オフラインサービス向けです。',
    descZh: '适用于集成 KORION Pay 和结算流程的线上及线下服务。',
  },
  {
    icon: Wallet,
    titleEn: 'Wallet Provider',
    titleKo: '지갑 사업자',
    titleJa: 'ウォレットプロバイダー',
    titleZh: '钱包提供商',
    descEn: 'For wallet services preparing asset display, deposit, and withdrawal support.',
    descKo: '자산 표시, 입출금 지원을 준비하는 지갑 서비스용입니다.',
    descJa: '資産表示、入出金サポートを準備しているウォレットサービス向けです。',
    descZh: '适用于准备资产显示、充值和提现支持的钱包服务。',
  },
  {
    icon: Landmark,
    titleEn: 'Exchange / Custody',
    titleKo: '거래소 / 커스터디',
    titleJa: '取引所 / カストディ',
    titleZh: '交易所 / 托管',
    descEn: 'For asset listing, operational support, and custody-related integration workflows.',
    descKo: '자산 상장, 운영 지원, 커스터디 관련 연동 흐름을 위한 구조입니다.',
    descJa: '資産の上場、運用サポート、およびカストディ関連の統合ワークフロー向けです。',
    descZh: '用于资产上市、运营支持和托管相关集成工作流程。',
  },
];

export function DevelopersPartnersPage() {
  const { t } = useLanguage();

  return (
    <div className="developers-partners-page">
      <section className="developers-partners-hero">
        <div className="developers-partners-page__container">
          <div className="developers-partners-hero__crumbs">
            <Link to="/developers">{t('Developers', '개발자', 'デベロッ퍼', '开发者')}</Link>
            <ChevronDown size={16} />
            <span>{t('Partners', '파트너', 'パートナー', '合作伙伴')}</span>
          </div>

          <h1>{t('Partner Integration', '파트너 연동', 'パートナー統合', '合作伙伴集成')}</h1>
          <p>
            {t(
              'Partner documentation provides the public integration structure for merchants, wallet providers, exchanges, and custody partners.',
              'KORION 파트너 문서는 가맹점, 지갑 사업자, 거래소, 커스터디 파트너가 실제 연동을 준비할 때 참고할 수 있는 공개 구조를 제공합니다. 기술 문서와 함께 온보딩 체크리스트, 사전등록, 테스트 흐름을 연결하는 것이 좋습니다.',
              'パートナー向けドキュメントは、加盟店、ウォレットプロバイダー、取引所、およびカストディパートナーが実際の統合を準備する際に参照できる公開構造を提供します。',
              '合作伙伴文档为商家、钱包提供商、交易所和托管合作伙伴提供公开的集成结构。'
            )}
          </p>
        </div>
      </section>

      <section className="developers-partners-body">
        <div className="developers-partners-page__container">
          <div className="developers-partners-intro">
            <div className="developers-partners-intro__card">
              <Building2 size={16} />
              <strong>{t('Role-based onboarding structure', '역할별 온보딩 구조', '役割ベースのオンボーディング構造', '基于角色的入驻结构')}</strong>
            </div>
            <div className="developers-partners-intro__card">
              <Globe size={16} />
              <strong>{t('Links technical docs with operations', '기술 문서와 운영 절차 연결', '技術ドキュメントと運用手順の連携', '将技术文档与运营连接起来')}</strong>
            </div>
          </div>

          <div className="developers-partners-grid">
            {partnerCards.map((card) => {
              const Icon = card.icon;
              return (
                <article className="developers-partners-card" key={card.titleEn}>
                  <div className="developers-partners-card__icon">
                    <Icon size={16} />
                  </div>
                  <h2>{t(card.titleEn, card.titleKo, card.titleJa, card.titleZh)}</h2>
                  <p>{t(card.descEn, card.descKo, card.descJa, card.descZh)}</p>
                  <Link to="/developers/preregister" className="developers-partners-card__button">
                    {t('Go to Pre-registration', '사전등록 연결', '事前登録へ', '前往预注册')}
                  </Link>
                </article>
              );
            })}
          </div>

          <section className="developers-partners-section">
            <h2>{t('Recommended Onboarding Items', '권장 온보딩 항목', '推奨されるオンボーディング項目', '推荐入驻项目')}</h2>
            <div className="developers-partners-divider" />
            <div className="developers-partners-checklist">
              <div><LifeBuoy size={16} /><span>{t('Confirm contact ownership', '담당자 정보 확인', '担当者情報の確認', '确认联系人所有权')}</span></div>
              <div><LifeBuoy size={16} /><span>{t('Define integration purpose', '연동 목적 정의', '統合目的の定義', '定义集成目的')}</span></div>
              <div><LifeBuoy size={16} /><span>{t('Validate sandbox usage', '테스트 환경 검증', 'サンドボックス使用の検証', '验证沙盒使用情况')}</span></div>
              <div><LifeBuoy size={16} /><span>{t('Review webhook event handling', '웹훅 이벤트 수신 점검', 'Webhookイベント処理の確認', '审查 Webhook 事件处理')}</span></div>
              <div><LifeBuoy size={16} /><span>{t('Complete pre-production checklist', '운영 이전 체크리스트 수행', '本番稼働前チェックリストの完了', '完成生产前核对清单')}</span></div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}