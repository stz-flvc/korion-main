import React from 'react';
import { motion } from 'framer-motion';
import {
  Landmark,
  ShieldCheck,
  Network,
  Globe2,
  Scale,
  Layers3,
  Sparkles,
  ChevronRight,
  BadgeCheck,
  Orbit,
  Blocks,
  Handshake,
  LineChart,
  LockKeyhole,
  ArrowUpRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import './FoundationPage.css';

const governancePillars = [
  {
    icon: ShieldCheck,
    titleEn: 'Integrity & Stewardship',
    titleKr: '무결성과 책임 있는 관리',
    titleJa: '誠実さと管理責任',
    titleZh: '诚信与管理责任',
    descEn:
      'The foundation is designed to protect ecosystem continuity, preserve user trust, and manage strategic resources with discipline.',
    descKr:
      '재단은 생태계의 지속성을 보호하고, 사용자 신뢰를 유지하며, 전략 자원을 책임감 있게 관리하도록 설계됩니다.',
    descJa: '財団は、エコシステムの継続性を保護し、ユーザーの信頼を維持し、規律を持って戦略的リソースを管理するように設計されています。',
    descZh: '基金会旨在保护生态系统的连续性，维护用户信任，并有纪律地管理战略资源。',
  },
  {
    icon: Scale,
    titleEn: 'Transparent Governance',
    titleKr: '투명한 거버넌스',
    titleJa: '透明なガバナンス',
    titleZh: '透明治理',
    descEn:
      'Operational principles, ecosystem policies, and strategic direction are aligned around clarity, accountability, and long-term public credibility.',
    descKr:
      '운영 원칙, 생태계 정책, 전략 방향은 명확성, 책임성, 장기적 공신력을 중심으로 정렬됩니다.',
    descJa: '運営原則、エコシステムポリシー、および戦略的アプローチは、明快さ、説明責任、および長期的な公的信頼性を中心に調整されています。',
    descZh: '运营原则、生态系统政策和战略方向围绕清晰度、问责制和长期公众信誉进行调整。',
  },
  {
    icon: Network,
    titleEn: 'Ecosystem Coordination',
    titleKr: '생태계 조정 기능',
    titleJa: 'エコシステム調整',
    titleZh: '生态系统协调',
    descEn:
      'The foundation acts as a coordination layer connecting products, communities, partners, infrastructure, and future platform services.',
    descKr:
      '재단은 제품, 커뮤니티, 파트너, 인프라, 미래 플랫폼 서비스를 연결하는 조정 허브의 역할을 수행합니다.',
    descJa: '財団は、製品、コミュニティ、パートナー、インフラストラクチャー、および将来のプラットフォームサービスを接続する調整レイヤーとして機能します。',
    descZh: '基金会作为连接产品、社区、合作伙伴、基础设施和未来平台服务的协调层。',
  },
  {
    icon: Globe2,
    titleEn: 'Global Expansion Readiness',
    titleKr: '글로벌 확장 준비성',
    titleJa: 'グローバル展開への備え',
    titleZh: '全球扩张准备',
    descEn:
      'KORION is structured to evolve beyond a single service or region, enabling scalable partnerships and multi-market ecosystem growth.',
    descKr:
      'KORION은 단일 서비스나 지역에 머무르지 않고, 확장 가능한 파트너십과 다중 시장 생태계 성장을 지향하도록 구조화됩니다.',
    descJa: 'KORIONは、単一のサービスや地域を超えて進化するように構成されており、スケーラブルなパートナーシップとマルチマーケットのエコシステムの成長を可能にします。',
    descZh: 'KORION 的结构旨在超越单一服务或地区，实现可扩展的伙伴关系和多市场生态系统的增长。',
  },
];

const operatingPrinciples = [
  {
    icon: BadgeCheck,
    titleEn: 'User-Centered Stability',
    titleKr: '사용자 중심 안정성',
    titleJa: 'ユーザー中心の安定性',
    titleZh: '以用户为中心的稳定性',
    descEn:
      'Core decisions prioritize ecosystem stability, service continuity, and predictable user experience over short-term noise.',
    descKr:
      '핵심 의사결정은 단기적 변동보다 생태계 안정성, 서비스 지속성, 예측 가능한 사용자 경험을 우선합니다.',
    descJa: '核心的な決定は、短期的なノイズよりも、エコシステムの安定性、サービスの継続性、および予測可能なユーザー体験を優先します。',
    descZh: '核心决策优先考虑生态系统稳定性、服务连续性和可预测的用户体验，而非短期波动。',
  },
  {
    icon: LockKeyhole,
    titleEn: 'Security-First Operations',
    titleKr: '보안 우선 운영',
    titleJa: 'セキュリティ優先の運営',
    titleZh: '安全优先运营',
    descEn:
      'The foundation supports an operating culture where wallet infrastructure, payment rails, and ecosystem systems are expanded with security in mind.',
    descKr:
      '재단은 지갑 인프라, 결제 네트워크, 생태계 시스템이 보안을 최우선 가치로 확장되도록 운영 문화를 뒷받침합니다.',
    descJa: '財団は、ウォレットのインフラストラクチャー、支払いレール、およびエコシステムシステムがセキュリティを念頭に置いて拡張される運営文化をサポートします。',
    descZh: '基金会支持一种运营文化，即在扩展钱包基础设施、支付通道和生态系统系统时始终考虑安全性。',
  },
  {
    icon: Layers3,
    titleEn: 'Structured Decision Layers',
    titleKr: '계층적 의사결정 구조',
    titleJa: '構造化された意思決定レイヤー',
    titleZh: '结构化决策层',
    descEn:
      'Strategic direction, policy formation, execution oversight, and ecosystem support are separated into clear functional layers.',
    descKr:
      '전략 방향, 정책 수립, 실행 관리, 생태계 지원 기능을 명확한 계층 구조로 분리하여 운영합니다.',
    descJa: '戦略的な方向性、ポリシーの策定、実行の監視、およびエコシステムのサポートは、明確な機能レイヤーに分かれています。',
    descZh: '战略方向、政策制定、执行监督和生态系统支持被划分为清晰的功能层。',
  },
  {
    icon: Handshake,
    titleEn: 'Partnership Alignment',
    titleKr: '파트너십 정렬',
    titleJa: 'パートナシップの調整',
    titleZh: '合作伙伴对齐',
    descEn:
      'The foundation aligns external collaborations with the ecosystem’s long-term vision, utility, and trust framework.',
    descKr:
      '재단은 외부 협력 관계를 생태계의 장기 비전, 실사용성, 신뢰 구조와 일치시키는 역할을 합니다.',
    descJa: '財団は、外部とのコラボレーションを、エコシステムの長期的なビジョン、実用性、および信頼フレームワークに合わせます。',
    descZh: '基金会将外部合作与生态系统的长期愿景、效用和信任框架相对齐。',
  },
];

const structureFlow = [
  {
    icon: Landmark,
    titleEn: 'Foundation',
    titleKr: 'Foundation',
    titleJa: '財団',
    titleZh: '基金会',
    bodyEn:
      'Vision holding body that safeguards long-term ecosystem direction and structural continuity.',
    bodyKr:
      '장기 생태계 방향성과 구조적 지속성을 유지하는 비전 중심 기관',
    bodyJa: '長期的なエコシステムの方向性と構造的な継続性を保護するビジョン保持体。',
    bodyZh: '维护长期生态系统方向和结构连续性的愿景持有主体。',
  },
  {
    icon: Blocks,
    titleEn: 'Policy & Governance',
    titleKr: '정책 · 거버넌스',
    titleJa: 'ポリシーとガバナンス',
    titleZh: '政策与治理',
    bodyEn:
      'Defines operating standards, strategic rules, governance principles, and ecosystem frameworks.',
    bodyKr:
      '운영 기준, 전략 규칙, 거버넌스 원칙, 생태계 프레임워크를 설계',
    bodyJa: '運営基準、戦略的ルール、ガバナンスの原則、およびエコシステムのフレームワークを定義します。',
    bodyZh: '定义运营标准、战略规则、治理原则和生态系统框架。',
  },
  {
    icon: Orbit,
    titleEn: 'Platform & Service Layer',
    titleKr: '플랫폼 · 서비스 레이어',
    titleJa: 'プラットフォームとサービスレイヤー',
    titleZh: '平台与服务层',
    bodyEn:
      'Connects wallet, payment, utility, and future application services into one coordinated ecosystem.',
    bodyKr:
      '지갑, 결제, 유틸리티, 미래 서비스들을 하나의 생태계로 연결',
    bodyJa: 'ウォレット、支払い、ユーティリティ、および将来のアプリケーションサービスを1つの調整されたエコシステムに接続します。',
    bodyZh: '将钱包、支付、效用和未来的应用服务连接到一个协调的生态系统中。',
  },
  {
    icon: LineChart,
    titleEn: 'Expansion & Sustainability',
    titleKr: '확장 · 지속성',
    titleJa: '拡大と持続可能性',
    titleZh: '扩张与可持续性',
    bodyEn:
      'Supports adoption growth, ecosystem partnerships, and long-range strategic scaling.',
    bodyKr:
      '이용자 확대, 파트너십 확장, 장기 전략 스케일업을 지원',
    bodyJa: '採用の成長、エコシステムのパートナーシップ、および長期的な戦略的スケーリングをサポートします。',
    bodyZh: '支持应用增长、生态系统合作伙伴关系和长期战略扩展。',
  },
];

const roadmapSignals = [
  {
    year: 'Phase 01',
    titleEn: 'Foundation of Trust',
    titleKr: '신뢰 기반 구축',
    titleJa: '信頼の基盤',
    titleZh: '信任基础',
    descEn:
      'Define the governance identity of KORION and establish a stable institutional narrative around ecosystem stewardship.',
    descKr:
      'KORION의 거버넌스 정체성을 정립하고, 생태계 관리 주체로서의 안정적 서사를 구축합니다.',
    descJa: 'KORIONのガバナンスアイデンティティを定義し、エコシステムの管理に関する安定した制度的ナラティブを確立します。',
    descZh: '定义 KORION 的治理身份，并围绕生态系统管理建立稳定的制度叙事。',
  },
  {
    year: 'Phase 02',
    titleEn: 'Operational Coordination',
    titleKr: '운영 체계 정렬',
    titleJa: '運営の調整',
    titleZh: '运营协调',
    descEn:
      'Standardize policy logic, service principles, ecosystem support responsibilities, and collaboration pathways.',
    descKr:
      '정책 기준, 서비스 원칙, 생태계 지원 책임, 협력 경로를 체계적으로 정렬합니다.',
    descJa: 'ポリシーロジック、サービス原則、エコシステムサポートの責任、およびコラボレーションパスを標準化します。',
    descZh: '标准化政策逻辑、服务原则、生态系统支持责任和协作路径。',
  },
  {
    year: 'Phase 03',
    titleEn: 'Utility Expansion',
    titleKr: '실사용 확장',
    titleJa: 'ユーティリティの拡大',
    titleZh: '效用扩张',
    descEn:
      'Expand the connection between token utility, wallet services, payment scenarios, and platform participation.',
    descKr:
      '토큰 유틸리티, 지갑 서비스, 결제 시나리오, 플랫폼 참여 구조의 연결을 확장합니다.',
    descJa: 'トークンのユーティリティ、ウォレットサービス、支払いシナリオ、およびプラットフォームへの参加の間の接続を拡張します。',
    descZh: '扩展代币效用、钱包服务、支付场景和平台参与之间的联系。',
  },
  {
    year: 'Phase 04',
    titleEn: 'Global Ecosystem Reach',
    titleKr: '글로벌 생태계 확장',
    titleJa: 'グローバルエコシステムの到達',
    titleZh: '全球生态系统触达',
    descEn:
      'Advance toward a broader ecosystem model capable of integrating partners, services, and regional growth channels.',
    descKr:
      '파트너, 서비스, 지역 확장 채널을 포괄하는 더 넓은 생태계 모델로 발전합니다.',
    descJa: 'パートナー、サービス、および地域の成長チャネルを統合できる、より広範なエコシステムモデルに向けて前進します。',
    descZh: '向更广泛的生态系统模型推进，能够整合合作伙伴、服务和区域增长渠道。',
  },
];

export function FoundationPage() {
  const { t } = useLanguage();

  return (
    <div className="foundation-page">
      <section className="found-hero">
        <div className="found-hero__bg" />
        <div className="found-hero__grid" />
        <div className="found-page__container">
          <div className="found-hero__content">
            <motion.div
              className="found-hero__badge"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Sparkles size={16} />
              <span>{t('KORION FOUNDATION', 'KORION FOUNDATION', 'KORION 財団', 'KORION 基金会')}</span>
            </motion.div>

            <motion.h1
              className="found-hero__title"
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              {t(
                'A Foundation Structure that safeguards direction, and architects long-term growth',
                '생태계의 방향을 지키고 장기적 확장을 설계하는 Foundation Structure',
                '方向性を守り、長期的な成長を設計する財団構造',
                '捍卫方向并规划长期增长的基金会结构'
              )}
            </motion.h1>

            <motion.p
              className="found-hero__subtitle"
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t(
                'The KORION Foundation serves as the structural center for governance direction, operating principles, and long-term ecosystem expansion. It is designed not merely as an administrative layer, but as a durable institutional framework for trust, continuity, and strategic growth.',
                'KORION Foundation은 재단 구조, 운영 원칙, 거버넌스 방향, 그리고 장기적 생태계 확장 전략을 안내하는 중심 축입니다. 단기 운영 단위를 넘어, 신뢰와 지속성을 축적하는 구조적 기반으로 설계됩니다.',
                'KORION財団は、ガバナンスの方向性、運営原則、および長期的なエコシステムの拡大のための構造的中心として機能します。単なる管理レイヤーとしてではなく、信頼、継続性、および戦略的成長のための耐久性のある制度的枠組みとして設計されています。',
                'KORION 基金会是治理方向、运营原则和长期生态系统扩张的结构中心。它的设计不仅是一个行政层，而且是一个用于信任、连续性和战略增长的持久制度框架。'
              )}
            </motion.p>

            <motion.div
              className="found-hero__actions"
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Link to="/whitepaper" className="found-btn found-btn--primary">
                {t('View Whitepaper', '백서 보기', 'ホワイトペーパーを見る', '查看代币经济学')}
                <ChevronRight size={16} />
              </Link>
              <a href="#foundation-structure" className="found-btn found-btn--ghost">
                {t('Explore Structure', '구조 살펴보기', '構造を探索', '探索结构')}
              </a>
            </motion.div>

            <motion.div
              className="found-hero__stats"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="found-stat-card">
                <strong>{t('Core Role', '재단 역할', '主な役割', '核心角色')}</strong>
                <span>{t('Governance · Coordination · Expansion', '거버넌스 · 조정 · 확장 기반', 'ガバナンス・調整・拡大', '治理 · 协调 · 扩张')}</span>
              </div>
              <div className="found-stat-card">
                <strong>{t('Operating Ethos', '운영 철학', '運営の精神', '运营理念')}</strong>
                <span>{t('Transparency · Stability · Continuity', '투명성 · 안정성 · 지속성', '透明性・安定性・継続性', '透明 · 稳定 · 连续性')}</span>
              </div>
              <div className="found-stat-card">
                <strong>{t('Long Horizon', '장기 방향', '長期的な展望', '长期愿景')}</strong>
                <span>{t('Expansion of real utility ecosystem', '실사용 생태계의 확장', '実用的なエコシステムの拡大', '实际效用生态系统的扩张')}</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="found-hero__visual"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="found-visual-shell">
              <div className="found-visual-ring found-visual-ring--outer" />
              <div className="found-visual-ring found-visual-ring--mid" />
              <div className="found-visual-ring found-visual-ring--inner" />

              <div className="found-visual-core">
                <div className="found-visual-core-badge">
                  <Landmark size={22} />
                  <span>KORION</span>
                </div>
                <h3>{t('Foundation Governance Core', 'Foundation Governance Core', '財団ガバナンスコア', '基金会治理核心')}</h3>
                <p>
                  {t(
                    'Unifying long-term vision, policy standards, ecosystem coordination, and strategic expansion into one structured core.',
                    '장기 비전, 정책 기준, 생태계 조정, 확장 전략을 하나의 구조로 연결합니다.',
                    '長期的なビジョン、ポリシー基準、エコシステム調整、および戦略的拡大を1つの構造化されたコアに統合します。',
                    '将长期愿景、政策标准、生态系统协调和战略扩张统一为一个结构化的核心。'
                  )}
                </p>
              </div>

              <div className="found-floating-card found-floating-card--one">
                <ShieldCheck size={18} />
                <span>{t('Trust Architecture', 'Trust Architecture', '信頼アーキテクチャ', '信任架构')}</span>
              </div>
              <div className="found-floating-card found-floating-card--two">
                <Network size={18} />
                <span>{t('Ecosystem Coordination', 'Ecosystem Coordination', 'エコシステム調整', '生态系统协调')}</span>
              </div>
              <div className="found-floating-card found-floating-card--three">
                <Globe2 size={18} />
                <span>{t('Global Expansion Layer', 'Global Expansion Layer', 'グローバル展開レイヤー', '全球扩张层')}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="found-section">
        <div className="found-page__container">
          <div className="found-section-head found-section-head--center">
            <span className="found-section-kicker">{t('FOUNDATION OVERVIEW', 'FOUNDATION OVERVIEW', '財団の概要', '基金会概览')}</span>
            <h2>
              {t(
                'The foundation is not a simple operator, but a structural base that preserves KORION’s long-term direction',
                '재단은 단순 운영 주체가 아니라 KORION의 장기 방향을 유지하는 구조적 기반입니다',
                '財団は単なる運営者ではなく、KORIONの長期的な方向性を維持する構造的な基盤です',
                '基金会不是一个简单的运营商，而是维护 KORION 长期方向的结构基础'
              )}
            </h2>
            <p>
              {t(
                'Aligned with the whitepaper narrative, the foundation is positioned to preserve ecosystem identity, establish operating principles, align partnerships, connect services, and guide long-range expansion through a unified institutional structure.',
                '백서 기준의 서사에 맞춰, 재단은 생태계의 정체성 유지, 운영 원칙 수립, 파트너십 정렬, 서비스 간 연결, 장기 확장 전략을 하나의 체계로 묶는 역할을 수행합니다.',
                'ホワイトペーパーの記述に合わせて、財団はエコシステムのアイデンティティを維持し、運営原則を確立し、パートナーシップを調整し、サービスを接続し、統一された制度的構造を通じて長期的な拡大を導くように位置付けられています。',
                '与白皮书叙事一致，基金会的定位是通过统一的制度结构维护生态系统身份、建立运营原则、对齐伙伴关系、连接服务并指导长期扩张。'
              )}
            </p>
          </div>

          <div className="found-pillar-grid">
            {governancePillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.titleEn}
                  className="found-pillar-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="found-pillar-card__icon">
                    <Icon size={24} />
                  </div>
                  <h3>{t(pillar.titleEn, pillar.titleKr, pillar.titleJa, pillar.titleZh)}</h3>
                  <p>{t(pillar.descEn, pillar.descKr, pillar.descJa, pillar.descZh)}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="foundation-structure" className="found-section found-section--dark">
        <div className="found-page__container">
          <div className="found-section-head">
            <span className="found-section-kicker">{t('FOUNDATION STRUCTURE', 'FOUNDATION STRUCTURE', '財団の構造', '基金会结构')}</span>
            <h2>
              {t(
                'The foundation structure is designed as a layered flow from vision to execution',
                '재단 구조는 비전에서 실행으로 이어지는 다층적 흐름으로 설계됩니다',
                '財団の構造は、ビジョンから実行までの層状の流れとして設計されています',
                '基金会结构被设计为从愿景到执行的分层流程'
              )}
            </h2>
            <p>
              {t(
                'KORION Foundation is envisioned as an integrated architecture where the foundation body, governance layer, service coordination layer, and ecosystem expansion axis operate as one connected system.',
                'KORION Foundation은 재단 자체, 정책·거버넌스, 서비스 연결 레이어, 그리고 생태계 확장 축이 유기적으로 이어지는 형태를 지향합니다.',
                'KORION財団は、財団本体、ガバナンスレイヤー、サービス調整レイヤー、およびエコシステム拡大軸が1つの接続されたシステムとして機能する統合アーキテクチャとして構想されています。',
                'KORION 基金会被设想为一个综合架构，其中基金会实体、治理层、服务协调层和生态系统扩张轴作为一个连接系统运行。'
              )}
            </p>
          </div>

          <div className="found-structure-flow">
            {structureFlow.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.titleEn}
                  className="found-flow-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="found-flow-top">
                    <div className="found-flow-icon">
                      <Icon size={20} />
                    </div>
                    <span className="found-flow-index">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <h3>{t(item.titleEn, item.titleKr, item.titleJa, item.titleZh)}</h3>
                  <p>{t(item.bodyEn, item.bodyKr, item.bodyJa, item.bodyZh)}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="found-section">
        <div className="found-page__container-01 found-principles-layout">
          <div className="found-principles-copy">
            <span className="found-section-kicker">{t('OPERATING PRINCIPLES', 'OPERATING PRINCIPLES', '運営原則', '运营原则')}</span>
            <h2>
              {t(
                'Operating principles are the most important standard that defines the foundation’s credibility',
                '운영 원칙은 재단의 신뢰를 결정하는 가장 중요한 기준입니다',
                '運営原則は、財団の信頼性を定義する最も重要な基準です',
                '运营原则是定义基金会信誉的最重要标准'
              )}
            </h2>
            <p>
              {t(
                'The foundation must not function as a short-lived promotional layer, but as a durable institution centered on credibility, accountability, and long-term trust accumulation. That is why user stability, security-first operations, clear responsibility layers, and aligned partnerships become core principles.',
                '재단은 단기 홍보성 구조가 아니라, 장기적으로 축적되는 신뢰와 책임성을 중심으로 운영되어야 합니다. 따라서 사용자 보호, 보안 우선, 명확한 역할 구분, 파트너십 정렬이 핵심 원칙이 됩니다.',
                '財団は、短命なプロモーションレイヤーとして機能するのではなく、信頼性、説明責任、および長期的な信頼の蓄積を中心とした耐久性のある制度として機能しなければなりません。そのため、ユーザーの安定性、セキュリティ優先の運営、明確な責任レイヤー、および連携されたパートナーシップが中核的な原則となります。',
                '基金会不得作为一个短命的促销层发挥作用，而必须作为一个以信誉、问责制和长期信任积累为核心的持久机构。这就是为什么用户稳定性、安全优先运营、明确的责任层和对齐的伙伴关系成为核心原则的原因。'
              )}
            </p>
          </div>

          <div className="found-principles-grid">
            {operatingPrinciples.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.titleEn}
                  className="found-principle-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="found-principle-icon">
                    <Icon size={18} />
                  </div>
                  <div>
                    <h3>{t(pillar.titleEn, pillar.titleKr, pillar.titleJa, pillar.titleZh)}</h3>
                    <p>{t(pillar.descEn, pillar.descKr, pillar.descJa, pillar.descZh)}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="found-section">
        <div className="found-page__container">
          <div className="found-section-head found-section-head--center">
            <span className="found-section-kicker">{t('LONG-TERM EXPANSION', 'LONG-TERM EXPANSION', '長期的な拡大', '长期扩张')}</span>
            <h2>
              {t(
                'The long-term ecosystem path targets simultaneous growth of utility and structure',
                '장기적 생태계 확장 방향은 유틸리티와 구조의 동시 성장을 목표로 합니다',
                '長期的なエコシステムの道のりは、ユーティリティと構造の同時成長を目標としています',
                '长期生态系统路径的目标是效用和结构的同步增长'
              )}
            </h2>
            <p>
              {t(
                'KORION is not limited to a single token or service. It aims toward an expandable ecosystem where wallet experience, payments, service layers, and participation structures grow together. The foundation provides the continuity and standards that prevent this expansion from becoming fragmented.',
                'KORION은 단일 토큰이나 단일 서비스에 머무는 구조가 아니라, 지갑·결제·서비스·참여 구조가 결합된 확장형 생태계를 지향합니다. 재단은 이 확장 방향이 무질서하게 흩어지지 않도록 기준과 연결성을 제공합니다.',
                'KORIONは、単一のトークンやサービスに限定されません。ウォレット体験、支払い、サービスレイヤー、および参加構造が共に成長する拡張可能なエコシステムを目指しています。財団は、この拡大が断片化されるのを防ぐ継続性と基準を提供します。',
                'KORION 不限于单一代币或服务。它的目标是建立一个可扩展的生态系统，在这个系统中，钱包体验、支付、服务层和参与结构共同增长。基金会提供连续性和标准，防止这种扩张变得碎片化。'
              )}
            </p>
          </div>

          <div className="found-timeline">
            {roadmapSignals.map((step, i) => (
              <motion.div
                key={step.year}
                className="found-timeline-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <span className="found-timeline-phase">{step.year}</span>
                <h3>{t(step.titleEn, step.titleKr, step.titleJa, step.titleZh)}</h3>
                <p>{t(step.descEn, step.descKr, step.descJa, step.descZh)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="found-section found-section--cta">
        <div className="found-page__container">
          <motion.div
            className="found-cta-box"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="found-cta-copy">
              <span className="found-section-kicker">{t('FOUNDATION VISION', 'FOUNDATION VISION', '財団のビジョン', '基金会愿景')}</span>
              <h2>
                {t(
                  'KORION Foundation is a long-horizon structure that shapes ecosystem credibility and continuity',
                  'KORION Foundation은 생태계의 품격과 지속성을 만드는 장기 구조입니다',
                  'KORION財団は、エコシステムの信頼性と継続性を形成する長期的な構造です',
                  'KORION 基金会是一个塑造生态系统信誉和连续性的长期结构'
                )}
              </h2>
              <p>
                {t(
                  'The foundation is not meant to remain in the background. It is the strategic axis that helps design trust, service expansion, partner alignment, and structural stability together.',
                  '재단은 운영의 배경에 머무는 조직이 아니라, 사용자 신뢰와 서비스 확장, 파트너 연계, 구조적 안정성을 함께 설계하는 핵심 축입니다.',
                  '財団は背景にとどまることを意図していません。それは、信頼、サービスの拡大、パートナーの連携、および構造的な安定性を共に設計するのを助ける戦略的な軸です。',
                  '基金会并不打算留在幕后。它是帮助共同设计信任、服务扩张、伙伴关系对齐和结构稳定性的战略轴心。'
                )}
              </p>
            </div>
            <div className="found-cta-actions">
              <Link to="/whitepaper" className="found-btn found-btn--primary">
                <span>{t('Review Whitepaper Basis', '백서 기준 보기', 'ホワイトペーパーの基準を確認する', '查看白皮书基础')}</span>
                <ArrowUpRight size={18} />
              </Link>
              <Link to="/ecosystem" className="found-btn found-btn--ghost">
                <span>{t('Explore Ecosystem', '생태계 보기', 'エコシステムを探索', '探索生态系统')}</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}