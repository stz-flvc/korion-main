import { motion } from 'motion/react';
import {
  ShieldCheck,
  Vault,
  Wallet,
  Snowflake,
  Flame,
  Waves,
  Gift,
  Megaphone,
  Landmark,
  LockKeyhole,
  Eye,
  AlertTriangle,
  ChevronRight,
  ArrowUpRight,
  Workflow,
  CircleDollarSign,
  BadgeCheck,
  Layers3,
} from 'lucide-react';
import { Link } from 'react-router';
import { useLanguage } from '../contexts/LanguageContext';
import './TreasuryPage.css';

const treasuryPrinciples = [
  {
    icon: ShieldCheck,
    titleEn: 'Collective Authorization',
    titleKr: '집단 승인 구조',
    titleJa: '共同承認構造',
    titleZh: '集体授权结构',
    descEn:
      'Critical treasury actions are designed around collective authorization rather than unilateral control.',
    descKr:
      '핵심 트레저리 행위는 단일 주체가 아닌 집단 승인 구조를 중심으로 설계됩니다.',
    descJa: '重要なトレジャリーアクションは、一方的な制御ではなく、共同承認を中心に設計されています。',
    descZh: '关键的库房行动是围绕集体授权而非单方面控制设计的。',
  },
  {
    icon: Layers3,
    titleEn: 'Risk Separation',
    titleKr: '리스크 분리',
    titleJa: 'リスクの分離',
    titleZh: '风险隔离',
    descEn:
      'Reserve storage, market liquidity, rewards, growth budget, and operational settlement are separated by role.',
    descKr:
      '준비금 보관, 유동성, 리워드, 성장 예산, 운영 정산은 목적에 따라 분리 관리됩니다.',
    descJa: '準備金の保管、市場の流動性、報酬、成長予算、および運営上の決済は、役割ごとに分離されています。',
    descZh: '储备存储、市场流动性、奖励、增长预算和运营结算是按角色划分的。',
  },
  {
    icon: Workflow,
    titleEn: 'Procedural Control',
    titleKr: '절차 기반 통제',
    titleJa: '手続きによる制御',
    titleZh: '程序控制',
    descEn:
      'Treasury movement follows defined review, threshold, and approval procedures based on wallet risk profile.',
    descKr:
      '트레저리 이동은 지갑별 위험도에 따라 정의된 검토·임계치·승인 절차를 따릅니다.',
    descJa: 'トレジャリーの移動は、ウォレットのリ스크プロファイルに基づいた定義済みのレビュー、しきい値、および承認手続きに従います。',
    descZh: '库房转移遵循基于钱包风险概况定义的审查、阈值和批准程序。',
  },
  {
    icon: BadgeCheck,
    titleEn: 'Supply Integrity',
    titleKr: '공급 무결성',
    titleJa: '供給の完全性',
    titleZh: '供应完整性',
    descEn:
      'Governance protects allocation discipline, reserve credibility, and ecosystem confidence over the long term.',
    descKr:
      '거버넌스는 장기적으로 할당 질서, 준비금 신뢰성, 생태계 신뢰를 보호합니다.',
    descJa: 'ガバナンスは、長期的に割り当ての規律、準備金の信頼性、およびエコシステムの信頼を保護します。',
    descZh: '治理从长期来看保护分配纪律、储备信誉和生态系统信心。',
  },
];

const walletLayers = [
  {
    icon: Snowflake,
    titleEn: 'Cold Reserve Wallet',
    titleKr: '콜드 리저브 월렛',
    titleJa: 'コールドリザーブ・ウォレット',
    titleZh: '冷储备钱包',
    descEn:
      'High-security reserve storage for long-term preservation, strategic stability, and minimal exposure.',
    descKr:
      '장기 보존, 전략적 안정성, 최소 노출을 위한 고보안 준비금 저장 지갑입니다.',
    descJa: '長期保存、戦略的安定性、および最小限の露出のための高セキュリティのリザーブストレージ。',
    descZh: '用于长期保存、战略稳定和最小风险暴露的高安全性储备存储。',
    badge: '50%',
  },
  {
    icon: Waves,
    titleEn: 'Liquidity Wallet',
    titleKr: '유동성 월렛',
    titleJa: '流動性ウォレット',
    titleZh: '流动性钱包',
    descEn:
      'Supports market-making readiness, exchange connectivity, and orderly token circulation.',
    descKr:
      '시장 유동성 대응, 거래 준비, 질서 있는 토큰 순환을 지원하는 지갑입니다.',
    descJa: 'マーケットメイキングへの備え、取引所との接続、および秩序あるトークンの流通をサポートします。',
    descZh: '支持做市准备、交易所连接和有序的代币流通。',
    badge: '20%',
  },
  {
    icon: Gift,
    titleEn: 'Reward Pool Wallet',
    titleKr: '리워드 풀 월렛',
    titleJa: '報酬プール・ウォレット',
    titleZh: '奖励池钱包',
    descEn:
      'Used for policy-governed mining rewards and ecosystem incentive settlement.',
    descKr:
      '정책 기반 채굴 보상과 생태계 인센티브 정산에 사용되는 지갑입니다.',
    descJa: 'ポリシーに基づいたマイニング報酬およびエコシステムのインセンティブの決済に使用されます。',
    descZh: '用于受政策治理的挖矿奖励和生态系统激励结算。',
    badge: '23%',
  },
  {
    icon: Megaphone,
    titleEn: 'Marketing & Ecosystem Wallet',
    titleKr: '마케팅 · 생태계 월렛',
    titleJa: 'マーケティング・エコシステム・ウォレット',
    titleZh: '市场与生态系统钱包',
    descEn:
      'Supports adoption programs, campaigns, partnerships, and ecosystem growth activities.',
    descKr:
      '채택 확대, 캠페인, 파트너십, 생태계 성장 활동을 지원하는 지갑입니다.',
    descJa: '採用プログラム、キャンペーン、パートナーシップ、およびエコシステムの成長活動をサポートします。',
    descZh: '支持采用计划、活动、伙伴关系和生态系统增长活动。',
    badge: '4%',
  },
  {
    icon: Flame,
    titleEn: 'Hot / Operational Wallet',
    titleKr: '핫 · 운영 월렛',
    titleJa: 'ホット・運営用ウォレット',
    titleZh: '热 / 运营钱包',
    descEn:
      'Handles routine settlement and active transactions under tight exposure and usage limits.',
    descKr:
      '제한된 노출과 사용 범위 내에서 일상 정산과 능동적 운영 거래를 담당합니다.',
    descJa: '厳しい露出および使用制限の下で、日常的な決済およびアクティブな取引を処理します。',
    descZh: '在严格的风险暴露和使用限制下处理日常结算和活跃交易。',
    badge: '3%',
  },
];

const controlFlow = [
  {
    step: '01',
    icon: Eye,
    titleEn: 'Request & Review',
    titleKr: '요청 및 검토',
    titleJa: '要求とレビュー',
    titleZh: '请求与审查',
    descEn:
      'A treasury action begins with purpose validation, wallet scope review, and policy fit assessment.',
    descKr:
      '트레저리 행위는 목적 검증, 지갑 범위 확인, 정책 적합성 검토로 시작됩니다.',
    descJa: 'トレジャリーアクションは、目的の検証、ウォレットの範囲の確認、およびポリシーへの適合性の評価から始まります。',
    descZh: '库房行动始于目的验证、钱包范围审查和政策拟合评估。',
  },
  {
    step: '02',
    icon: LockKeyhole,
    titleEn: 'Threshold Approval',
    titleKr: '임계치 승인',
    titleJa: 'しきい値承認',
    titleZh: '阈值批准',
    descEn:
      'Signature requirements and internal review depth differ according to exposure and risk category.',
    descKr:
      '서명 요건과 내부 검토 수준은 노출도와 위험 등급에 따라 달라집니다.',
    descJa: '署名要件と内部レビューの深さは、露出とリスクカテゴリに応じて異なります。',
    descZh: '签名要求和内部审查深度根据风险暴露和风险类别而有所不同。',
  },
  {
    step: '03',
    icon: Wallet,
    titleEn: 'Controlled Execution',
    titleKr: '통제된 실행',
    titleJa: '制御された実行',
    titleZh: '受控执行',
    descEn:
      'Execution is limited to defined wallet purpose, approved amount, and authorized operational scope.',
    descKr:
      '실행은 승인된 금액, 지갑 목적, 허가된 운영 범위 안에서만 수행됩니다.',
    descJa: '実行は、定義されたウォレットの目的、承認された金額、および認可された運営範囲に制限されています。',
    descZh: '执行仅限于定义的钱包用途、批准的金额和授权的业务范围。',
  },
  {
    step: '04',
    icon: Landmark,
    titleEn: 'Logging & Post Review',
    titleKr: '기록 및 사후 검토',
    titleJa: 'ロギングと事後レビュー',
    titleZh: '记录与事后审查',
    descEn:
      'Treasury actions are followed by logging, monitoring, and post-event operational review.',
    descKr:
      '트레저리 행위 이후에는 기록, 모니터링, 사후 운영 검토가 이어집니다.',
    descJa: 'トレジャリーアクションの後には、ロギング、モニタリング、および事後の運営レビューが続きます。',
    descZh: '库房行动之后是记录、监控和事后业务审查。',
  },
];

const safeguards = [
  {
    icon: ShieldCheck,
    titleEn: 'No Single-Key Dependency',
    titleKr: '단일 키 의존 배제',
    titleJa: '単一鍵依存の排除',
    titleZh: '无单密钥依赖',
    descEn:
      'Critical reserve movement should not depend on one compromised key or one unilateral actor.',
    descKr:
      '핵심 준비금 이동은 하나의 키나 단일 행위자에 의존하지 않도록 설계됩니다.',
    descJa: '重要なリザーブの移動は、1つの侵害された鍵または1人の一方的な行為者に依存してはなりません。',
    descZh: '关键储备转移不应依赖于一个受损密钥或一个单方面行为者。',
  },
  {
    icon: Snowflake,
    titleEn: 'Minimal Cold Movement',
    titleKr: '콜드 이동 최소화',
    titleJa: '最小限のコールド移動',
    titleZh: '最小限度的冷转移',
    descEn:
      'Cold reserve operations are designed for low frequency and higher internal scrutiny.',
    descKr:
      '콜드 준비금은 낮은 빈도와 더 높은 내부 검토를 전제로 운영됩니다.',
    descJa: 'コールドリザーブ業務は、低頻度かつ高度な内部精査のために設計されています。',
    descZh: '冷储备运营旨在实现低频率和更高的内部审查。',
  },
  {
    icon: Flame,
    titleEn: 'Limited Hot Exposure',
    titleKr: '핫 노출 최소화',
    titleJa: '限定されたホット露出',
    titleZh: '有限的热处理风险',
    descEn:
      'Operational wallets support activity, but balances and transaction scope remain intentionally constrained.',
    descKr:
      '운영용 지갑은 활동을 지원하지만 잔액과 거래 범위는 의도적으로 제한됩니다.',
    descJa: '運営用ウォレットは活動をサポートしますが、残高と取引範囲は意図的に制限されています。',
    descZh: '运营钱包支持活动，但余额和交易范围仍有意受限。',
  },
  {
    icon: AlertTriangle,
    titleEn: 'Emergency Controls',
    titleKr: '비상 통제 체계',
    titleJa: '緊急制御システム',
    titleZh: '紧急控制',
    descEn:
      'Abnormal events require escalation paths, exceptional review procedures, and suspension capability.',
    descKr:
      '이상 상황 발생 시 상향 보고, 예외 심사, 일시 중지 기능이 작동해야 합니다.',
    descJa: '異常事象には、エスカレーションパス、例外的なレビュー手続き、および停止機能が必要です。',
    descZh: '异常事件需要升级路径、异常审查程序和暂停能力。',
  },
];

export function TreasuryPage() {
  const { t } = useLanguage();

  return (
    <div className="treasury-page">
      <section className="treasury-hero">
        <div className="treasury-hero__bg">
          <div className="treasury-hero__noise" />
          <div className="treasury-hero__grid" />
          <div className="treasury-hero__spot treasury-hero__spot--one" />
          <div className="treasury-hero__spot treasury-hero__spot--two" />
          <div className="treasury-hero__spot treasury-hero__spot--three" />
        </div>

        <div className="treasury-page__container treasury-hero__container">
          <div className="treasury-hero__copy">
            <motion.div
              className="treasury-hero__eyebrow"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Vault size={16} />
              <span>{t('KORION TREASURY', 'KORION TREASURY', 'KORION トレジャリー', 'KORION 库房')}</span>
            </motion.div>

            <motion.h1
              className="treasury-hero__title"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
            >
              {t(
                'Sustainable Treasury through multisig control and structural separation',
                '멀티시그 기반 자산 통제와 구조적 분리를 통해 지속 가능한 Treasury',
                'マルチシグ制御と構造的分離による持続可能なトレジャリー',
                '通过多重签名控制和结构分离实现可持续库房'
              )}
            </motion.h1>

            <motion.p
              className="treasury-hero__text"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.12 }}
            >
              {t(
                'KORION Treasury is not a simple storage concept. It is a structured asset operating model designed to protect reserves, separate operational risk, govern movement through policy-based approvals, support liquidity, sustain incentives, and strengthen ecosystem trust.',
                'KORION Treasury는 단순 보관 개념이 아니라, 준비금 보호, 운영 리스크 분리, 정책 기반 승인, 유동성 지원, 보상 지속성, 그리고 생태계 신뢰를 함께 설계하는 자산 운영 구조입니다.',
                'KORIONトレジャリーは単なる保管の概念ではありません。準備金の保護、運営リスクの分離、ポリシーに基づいた承認による移動の統治、流動性のサポート、インセンティブの維持、そしてエコシステムの信頼の強化を目的として設計された、構造化された資産運用モデルです。',
                'KORION 库房不仅仅是一个简单的存储概念。它是一个结构化的资产运营模型，旨在保护储备、隔离运营风险、通过基于政策的批准管理流动、支持流动性、维持激励并加强生态系统信任。'
              )}
            </motion.p>

            <motion.div
              className="treasury-hero__actions"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.18 }}
            >
              <a href="#treasury-wallets" className="treasury-btn treasury-btn--primary">
                <span>{t('Explore Treasury Layers', '자산 구조 보기', 'トレジャリー階層を探索', '探索库房层')}</span>
                <ChevronRight size={18} />
              </a>

              <Link to="/whitepaper" className="treasury-btn treasury-btn--secondary">
                <span>{t('View Whitepaper', '백서 보기', 'ホワイトペーパーを見る', '查看代币经济学')}</span>
              </Link>
            </motion.div>

            <motion.div
              className="treasury-hero__stats"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.24 }}
            >
              <div className="treasury-hero__stat">
                <strong>{t('Control Model', '통제 원칙', '管理モデル', '控制模型')}</strong>
                <span>{t('Multisig · Procedural Approval', '멀티시그 · 절차 승인', 'マルチシグ・手続き承認', '多重签名 · 程序批准')}</span>
              </div>
              <div className="treasury-hero__stat">
                <strong>{t('Structure Model', '구조 원칙', '構造モデル', '结构模型')}</strong>
                <span>{t('Role-separated wallet architecture', '지갑 역할 분리 운영', '役割ごとに分離されたウォレットアーキテクチャ', '角色分离的钱包架构')}</span>
              </div>
              <div className="treasury-hero__stat">
                <strong>{t('Security Model', '보안 원칙', 'セキュリティモデル', '安全模型')}</strong>
                <span>{t('Cold protection · Limited hot exposure', '콜드 보호 · 핫 노출 제한', 'コールド保護・限定的なホット露出', '冷保护 · 有限的热曝露')}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="treasury-section treasury-section--principles">
        <div className="treasury-page__container-01">
          <div className="treasury-section__head treasury-section__head--center">
            <span className="treasury-section__kicker">{t('TREASURY PHILOSOPHY', 'TREASURY PHILOSOPHY', 'トレジャリーの哲学', '库房哲学')}</span>
            <h2>
              {t(
                'KORION Treasury prioritizes control and trust beyond simple custody',
                'KORION 트레저리는 보관보다 통제와 신뢰를 우선하는 구조입니다',
                'KORIONトレジャリーは、単純な保管を超えて管理と信頼を優先します',
                'KORION 库房优先考虑控制和信任，而非简单的托管'
              )}
            </h2>
            <p>
              {t(
                'The treasury model is not just about holding assets. It exists to preserve supply discipline, maintain reserve credibility, separate operational risk, and manage strategic capital flows required for ecosystem expansion through policy-driven controls.',
                '트레저리 구조는 단순히 자산을 모아두는 개념이 아니라, 공급 질서와 준비금 신뢰성을 유지하고 운영 리스크를 분리하며 생태계 확장에 필요한 자본 흐름을 정책적으로 관리하는 시스템입니다.',
                'トレジャリーモデルは単に資産を保持することだけではありません。供給の規律を維持し、準備金の信頼性を保ち、運営リスクを分離し、ポリシー主導の管理を通じてエコシステムの拡大に必要な戦略的資本フローを管理するために存在します。',
                '库房模型不仅仅是持有资产。它的存在是为了通过政策驱动的控制来维护供应纪律、保持储备信誉、隔离运营风险并管理生态系统扩张所需的战略资本流。'
              )}
            </p>
          </div>

          <div className="treasury-principles">
            {treasuryPrinciples.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.titleEn}
                  className="treasury-principle-card"
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, delay: index * 0.05 }}
                >
                  <div className="treasury-principle-card__icon">
                    <Icon size={20} />
                  </div>
                  <h3>{t(item.titleEn, item.titleKr, item.titleJa, item.titleZh)}</h3>
                  <p>{t(item.descEn, item.descKr, item.descJa, item.descZh)}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="treasury-wallets" className="treasury-section treasury-section--wallets">
        <div className="treasury-page__container-01">
          <div className="treasury-section__head">
            <span className="treasury-section__kicker">{t('TREASURY LAYERS', 'TREASURY LAYERS', 'トレジャリーの階層', '库房层')}</span>
            <h2>
              {t(
                'Assets are separated into functional wallet layers, not concentrated in one place',
                '자산은 하나의 지갑이 아니라 역할별 레이어로 분리됩니다',
                '資産は、1か所に集中させるのではなく、機能的なウォレット階層に分離されます',
                '资产被划分为功能性钱包层，而不是集中在一个地方'
              )}
            </h2>
            <p>
              {t(
                'Under the whitepaper-based KORION treasury architecture, cold reserve, liquidity, reward, marketing, and operational wallets are separated and managed under different purposes and different approval expectations.',
                '백서 기준의 KORION treasury architecture는 cold reserve, liquidity, reward, marketing, operational wallet로 분리되어 각기 다른 목적과 다른 승인 기준 아래 운영됩니다.',
                'ホワイトペーパーに基づいたKORIONトレジャリーアーキテクチャでは、コールドリザーブ、流動性、報酬、マーケティング、および運営用ウォレットが分離され、異なる目的および異なる承認基準の下で管理されます。',
                '在基于白皮书的 KORION 库房架构下，冷储备、流动性、奖励、市场和运营钱包被分开管理，并遵循不同的用途和审批期望。'
              )}
            </p>
          </div>

          <div className="treasury-wallet-grid">
            {walletLayers.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.titleEn}
                  className="treasury-wallet-card"
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.18 }}
                  transition={{ duration: 0.55, delay: index * 0.05 }}
                >
                  <div className="treasury-wallet-card__top">
                    <div className="treasury-wallet-card__icon">
                      <Icon size={20} />
                    </div>
                    <span className="treasury-wallet-card__badge">{item.badge}</span>
                  </div>
                  <h3>{t(item.titleEn, item.titleKr, item.titleJa, item.titleZh)}</h3>
                  <p>{t(item.descEn, item.descKr, item.descJa, item.descZh)}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="treasury-section treasury-section--flow">
        <div className="treasury-page__container-01 treasury-flow-layout">
          <div className="treasury-flow-copy">
            <span className="treasury-section__kicker">{t('OPERATION MODEL', 'OPERATION MODEL', '運営モデル', '运营模型')}</span>
            <h2>
              {t(
                'Treasury operations are controlled step by step from request to post-review',
                '트레저리 운영은 요청부터 사후 검토까지 단계적으로 통제됩니다',
                'トレジャリー運営は、要求から事後レビューまで段階的に管理されます',
                '库房运营从请求到事后审查受到逐步控制'
              )}
            </h2>
            <p>
              {t(
                'The key question is not merely who moved an asset, but why it was moved, within what scope, and under which approval path. Treasury execution is therefore best understood as a staged process of request, review, approval, controlled execution, and post-event monitoring.',
                '핵심 포인트는 “누가 보냈는가”보다 “왜, 어떤 범위에서, 어떤 승인 절차를 거쳤는가”입니다. 따라서 트레저리 실행은 요청, 검토, 승인, 제한된 실행, 기록과 검토의 흐름으로 이해되는 것이 맞습니다.',
                '重要なのは、単に誰が資産を移動させたかではなく、なぜ、どのような範囲で、どのような承認プロセスを経たかということです。したがって、トレジャリーの実行は、要求、レビュー、承認、制御された実行、および事後モニタリングの段階的なプロセスとして理解するのが適切です。',
                '关键问题不仅是谁转移了资产，还包括为什么要转移、在什么范围内以及在哪条审批路径下。因此，库房执行最好被理解为请求、审查、批准、受控执行和事后监控的分阶段过程。'
              )}
            </p>
          </div>

          <div className="treasury-flow-cards">
            {controlFlow.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.step}
                  className="treasury-flow-card"
                  initial={{ opacity: 0, x: 26 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, delay: index * 0.06 }}
                >
                  <div className="treasury-flow-card__meta">
                    <span className="treasury-flow-card__step">{item.step}</span>
                    <div className="treasury-flow-card__icon">
                      <Icon size={18} />
                    </div>
                  </div>
                  <h3>{t(item.titleEn, item.titleKr, item.titleJa, item.titleZh)}</h3>
                  <p>{t(item.descEn, item.descKr, item.descJa, item.descZh)}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="treasury-section treasury-section--safeguards">
        <div className="treasury-page__container-01">
          <div className="treasury-section__head treasury-section__head--center">
            <span className="treasury-section__kicker">{t('SAFEGUARD SYSTEM', 'SAFEGUARD SYSTEM', '保護システム', '保护系统')}</span>
            <h2>
              {t(
                'Treasury security begins with principles and operating structure, not only with technology',
                '트레저리 보안은 기술보다 원칙과 운영 구조에서 시작됩니다',
                'トレジャリーのセキュリティは、技術だけでなく原則と運営構造から始まります',
                '库房安全始于原则和运营结构，而不仅仅是技术'
              )}
            </h2>
            <p>
              {t(
                'Treasury security in KORION aims for a layered model that includes wallet segregation, collective authorization, limited hot exposure, separated system roles, emergency controls, logging, and post-event review.',
                'KORION treasury의 보안은 지갑 분리, 집단 승인, hot exposure 제한, 시스템 역할 분리, 비상 통제, 기록과 사후 검토까지 포함하는 다층 구조를 지향합니다.',
                'KORIONトレジャリーのセキュリティは、ウォレットの分離、共同承認、限定的なホット露出、システム役割の分離、緊急制御、ロギング、および事後レビューを含む階層型モデルを目指しています。',
                'KORION 库房安全旨在建立一个分层模型，包括钱包隔离、集体授权、有限的热曝露、分离的系统角色、紧急控制、记录和事后审查。'
              )}
            </p>
          </div>

          <div className="treasury-safeguards">
            {safeguards.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.titleEn}
                  className="treasury-safeguard-card"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <div className="treasury-safeguard-card__icon">
                    <Icon size={18} />
                  </div>
                  <div>
                    <h3>{t(item.titleEn, item.titleKr, item.titleJa, item.titleZh)}</h3>
                    <p>{t(item.descEn, item.descKr, item.descJa, item.descZh)}</p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="treasury-section treasury-section--cta">
        <div className="treasury-page__container-01">
          <motion.div
            className="treasury-cta"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
          >
            <div className="treasury-cta__copy">
              <span className="treasury-section__kicker">{t('TREASURY VISION', 'TREASURY VISION', 'トレジャリーのビジョン', '库房愿景')}</span>
              <h2>
                {t(
                  'KORION Treasury is not where assets simply sit — it is where trust is structured',
                  'KORION Treasury는 자산을 보관하는 곳이 아니라 신뢰를 설계하는 구조입니다',
                  'KORIONトレジャリーは単に資産が置かれている場所ではありません。信頼が構築される場所です',
                  'KORION 库房不仅仅是资产存放的地方——它是构建信任的地方'
                )}
              </h2>
              <p>
                {t(
                  'By connecting reserve preservation, liquidity operations, reward sustainability, operational settlement, and emergency control into one policy structure, KORION builds the treasury trust framework required for long-term ecosystem growth.',
                  '준비금 보존, 유동성 운영, 리워드 지속성, 운영 정산, 비상 통제까지 하나의 정책 구조로 연결함으로써 KORION은 장기 생태계 확장에 필요한 자산 신뢰 체계를 구축합니다.',
                  '準備金の保存、流動性運営、報酬の持続性、運営決済、および緊急制御を1つのポリシー構造に接続することにより、KORIONは長期的なエコシステムの成長に必要なトレジャリー信頼フレームワークを構築します。',
                  '通过将储备保存、流动性运营、奖励可持续性、运营结算和紧急控制连接到一个政策结构中，KORION 构建了长期生态系统增长所需的库房信任框架。'
                )}
              </p>
            </div>

            <div className="treasury-cta__actions">
              <Link to="/whitepaper" className="treasury-btn treasury-btn--primary">
                <span>{t('Review Whitepaper', '백서 기준 확인', 'ホワイトペーパーを確認する', '查看代币经济学')}</span>
                <ArrowUpRight size={18} />
              </Link>
              <Link to="/foundation" className="treasury-btn treasury-btn--secondary">
                <span>{t('Foundation Page', '재단 페이지 보기', '財団ページを見る', '基金会页面')}</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}