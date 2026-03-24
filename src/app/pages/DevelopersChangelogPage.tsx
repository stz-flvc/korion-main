import { Link } from 'react-router';
import { useState } from 'react';
import {
  ChevronDown,
  FileText,
  Layers3,
  Package,
  ShieldCheck,
  Sparkles,
  Wrench,
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import './DevelopersChangelogPage.css';

const changelogItems = [
  {
    version: 'v0.4.0',
    date: '2026-03',
    icon: Sparkles,
    titleEn: 'Developers portal structure expanded',
    titleKo: 'Developers 포털 구조 확장',
    titleJa: '開発者ポータルの構造が拡張されました',
    titleZh: '开发者门户结构已扩展',
    itemsEn: [
      'Developers landing page migrated to documentation-portal layout',
      'API Reference page added',
      'Pre-registration page added',
      'SDK page added',
    ],
    itemsKo: [
      'Developers 메인 페이지를 문서 포털형 구조로 전환',
      'API Reference 페이지 추가',
      '사전등록 페이지 추가',
      'SDK 페이지 추가',
    ],
    itemsJa: [
      '開発者ラン딩ページをドキュメントポータルレイアウトに移行',
      'APIリファレンスページを追加',
      '事前登録ページを追加',
      'SDKページを追加',
    ],
    itemsZh: [
      '开发者落地页已迁移至文档门户布局',
      '已添加 API 参考页面',
      '已添加预注册页面',
      '已添加 SDK 页面',
    ],
  },
  {
    version: 'v0.3.0',
    date: '2026-03',
    icon: Package,
    titleEn: 'Public API architecture organized',
    titleKo: '공개 API 아키텍처 정리',
    titleJa: '公開APIアーキテクチャが整理されました',
    titleZh: '公开 API 架构已整理',
    itemsEn: [
      'Wallet, Payment, Deposit, Withdrawal, Webhook, Partner API groups defined',
      'Representative endpoints drafted',
      'Public documentation grouping refined',
    ],
    itemsKo: [
      'Wallet, Payment, Deposit, Withdrawal, Webhook, Partner API 그룹 정의',
      '대표 엔드포인트 초안 정리',
      '공개 문서 분류 체계 정비',
    ],
    itemsJa: [
      'ウォレット、決済、入金、出金、ウェブフック、パートナーAPIグループを定義',
      '代表的なエンドポイントのドラフトを作成',
      '公開ドキュメントのグループ化を洗練',
    ],
    itemsZh: [
      '已定义钱包、支付、存款、提现、Webhook、合作伙伴 API 组',
      '已对代表性终端节点进行建模',
      '公开文档分组已完善',
    ],
  },
  {
    version: 'v0.2.0',
    date: '2026-03',
    icon: ShieldCheck,
    titleEn: 'Contract and network visibility improved',
    titleKo: '컨트랙트 및 네트워크 가시성 강화',
    titleJa: 'コントラクトとネットワークの可視性が向上しました',
    titleZh: '合约和网络可见性已提高',
    itemsEn: [
      'TRON / TRC20 structure clarified',
      'Contract address and explorer reference added',
      'Token decimals and base specification aligned',
    ],
    itemsKo: [
      'TRON / TRC20 구조 명확화',
      '컨트랙트 주소 및 익스플로러 참조 추가',
      '토큰 소수점 및 기본 스펙 정렬',
    ],
    itemsJa: [
      'TRON / TRC20構造を明確化',
      'コントラクトアドレスとエクスプローラーの参照を追加',
      'トークンの小数点と基本仕様を調整',
    ],
    itemsZh: [
      '已澄清 TRON / TRC20 结构',
      '已添加合约地址和浏览器参考',
      '代币小数位和基础规范已对齐',
    ],
  },
  {
    version: 'v0.1.0',
    date: '2026-03',
    icon: Wrench,
    titleEn: 'Initial developer surface drafted',
    titleKo: '초기 개발자 구조 초안 작성',
    titleJa: '初期の開発者向けインターフェースのドラフトを作成',
    titleZh: '初始开发者界面已起草',
    itemsEn: [
      'First version of developer-facing content drafted',
      'Wallet, payment, and onboarding requirements identified',
    ],
    itemsKo: [
      '초기 개발자 공개 구조 초안 작성',
      '지갑, 결제, 온보딩 요구사항 도출',
    ],
    itemsJa: [
      '開発者向けコンテンツの最初のバージョンをドラフト',
      'ウォレット、決済、およびオンボーディングの要件を特定',
    ],
    itemsZh: [
      '已起草第一版面向开发者的内容',
      '已确定钱包、支付和入门要求',
    ],
  },
];

export function DevelopersChangelogPage() {
  const { t } = useLanguage();
  const [activeVersion, setActiveVersion] = useState('');

  return (
    <div className="developers-changelog-page">
      <section className="developers-changelog-hero">
        <div className="developers-changelog-page__container">
          <div className="developers-changelog-hero__crumbs">
            <Link to="/developers">{t('Developers', '개발자', 'デ베ロッ퍼', '开发者')}</Link>
            <ChevronDown size={14} />
            <span>{t('Change Log', '변경 이력', '変更履歴', '变更日志')}</span>
          </div>

          <h1>{t('KORION Change Log', 'KORION 변경 이력', 'KORION変更履歴', 'KORION 变更日志')}</h1>
          <p>
            {t(
              'Track updates across public documentation, API structures, SDK resources, and partner onboarding flows to stay informed of system changes.',
              '공개 문서, API 구조, SDK 자료, 파트너 온보딩 흐름의 변경 사항을 기록하는 영역입니다. 문서 포털에서는 이력이 쌓일수록 신뢰도가 올라갑니다.',
              '公的ドキュメント、API構造、SDKリソース、およびパートナーのオンボーディングフロー全体の更新を追跡して、システムの変更を常に把握します。',
              '跟踪公开文档、API 结构、SDK 资源和合作伙伴入门流程的更新，以及时了解系统变更。'
            )}
          </p>
        </div>
      </section>

      <section className="developers-changelog-body">
        <div className="developers-changelog-page__container developers-changelog-body__grid">
          <aside className="developers-changelog-sidebar">
            <div className="developers-changelog-sidebar__box">
              <span className="developers-changelog-sidebar__title">
                {t('Releases', '릴리즈', 'リリース', '发布')}
              </span>

              {changelogItems.map((item) => (
                <a
                  key={item.version}
                  href={`#${item.version}`}
                  className={`developers-changelog-sidebar__link${
                    activeVersion === item.version ? ' is-active' : ''
                  }`}
                  onClick={() => setActiveVersion(item.version)}
                >
                  <span className="developers-changelog-sidebar__dot" />
                  <span>{item.version}</span>
                </a>
              ))}
            </div>
          </aside>

          <main className="developers-changelog-main">
            <section className="developers-changelog-summary">
              <div className="developers-changelog-summary__card">
                <div className="developers-changelog-summary__icon">
                  <Layers3 size={18} />
                </div>
                <div>
                  <span>{t('Documentation Structure', '문서 구조', 'ドキュメント構造', '文档结构')}</span>
                  <strong>
                    {t(
                      'Expanding as a docs-first portal',
                      '문서 포털 기반으로 확장 중',
                      'ドキュメント優先ポータルとして拡張中',
                      '作为文档优先门户进行扩展'
                    )}
                  </strong>
                </div>
              </div>

              <div className="developers-changelog-summary__card">
                <div className="developers-changelog-summary__icon">
                  <FileText size={18} />
                </div>
                <div>
                  <span>{t('Public Scope', '공개 범위', '公開範囲', '内容范围')}</span>
                  <strong>
                    {t(
                      'API · SDK · Pre-registration · Changelog',
                      'API · SDK · 사전등록 · 변경 이력',
                      'API · SDK · 事前登録 · 変更履歴',
                      'API · SDK · 预注册 · 变更日志'
                    )}
                  </strong>
                </div>
              </div>
            </section>

            <section className="developers-changelog-list">
              {changelogItems.map((item) => {
                const Icon = item.icon;
                return (
                  <article
                    className="developers-changelog-entry"
                    id={item.version}
                    key={item.version}
                  >
                    <div className="developers-changelog-entry__meta">
                      <span className="developers-changelog-entry__version">
                        {item.version}
                      </span>
                      <span className="developers-changelog-entry__date">
                        {item.date}
                      </span>
                    </div>

                    <div className="developers-changelog-entry__card">
                      <div className="developers-changelog-entry__icon">
                        <Icon size={18} />
                      </div>

                      <div className="developers-changelog-entry__content">
                        <h2>{t(item.titleEn, item.titleKo, item.titleJa, item.titleZh)}</h2>
                        <ul>
                          {(t(item.itemsEn, item.itemsKo, item.itemsJa, item.itemsZh) as string[]).map((line) => (
                            <li key={line}>{line}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </article>
                );
              })}
            </section>
          </main>
        </div>
      </section>
    </div>
  );
}