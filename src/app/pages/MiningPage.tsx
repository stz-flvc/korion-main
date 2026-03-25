import { motion } from 'motion/react';
import { 
  Pickaxe, 
  Smartphone, 
  Coins, 
  Users, 
  ShieldCheck, 
  Zap, 
  Activity, 
  Layers3,
  ChevronRight,
  BadgeCheck,
  ArrowUpRight,
  Sparkles
} from 'lucide-react';
import { Link } from 'react-router';
import { useLanguage } from '../contexts/LanguageContext';
import './MiningPage.css';

const miningFeatures = [
  {
    icon: Smartphone,
    titleEn: 'Mobile-First Mining',
    titleKr: '모바일 중심 채굴',
    titleJa: 'モバイルファースト・マイニング',
    titleZh: '移动优先挖矿',
    descEn:
      'Mining participation is designed to be accessible through a mobile-first structure, making entry into the ecosystem simpler and more intuitive.',
    descKr:
      '채굴 참여는 모바일 중심 구조로 설계되어 사용자가 더 쉽고 직관적으로 생태계에 진입할 수 있도록 구성됩니다.',
    descJa: 'マイニング参加は、モバイルファーストの構造を通じてアクセスできるように設計されており、エコシステムへの参入을 보다 쾌적하고 직관적으로 만듭니다.',
    descZh: '挖矿参与旨在通过移动优先的结构进行访问，使进入生态系统更简单、更直观。',
  },
  {
    icon: Coins,
    titleEn: 'KORI Reward Structure',
    titleKr: 'KORI 보상 구조',
    titleJa: 'KORI報酬構造',
    titleZh: 'KORI 奖励结构',
    descEn:
      'Mining activity is connected to the KORI reward model, linking user participation to the broader KORION token economy.',
    descKr:
      '채굴 활동은 KORI 보상 구조와 연결되어 사용자 참여가 KORION 토큰 경제와 이어지도록 설계됩니다.',
    descJa: 'マイニング活動はKORI報酬モデルに接続されており、ユーザーの参加をより広範なKORIONトークン経済に結び付けます。',
    descZh: '挖矿活动与 KORI 奖励模型相关联，将用户参与与更广泛的 KORION 代币经济联系起来。',
  },
  {
    icon: Users,
    titleEn: 'Participation-Based Growth',
    titleKr: '참여 기반 성장 구조',
    titleJa: '参加ベースの成長構造',
    titleZh: '基于参与的增长结构',
    descEn:
      'The mining model can be strengthened through user engagement, ecosystem participation, and service activity across connected platforms.',
    descKr:
      '채굴 모델은 사용자 참여, 생태계 활동, 연결된 서비스 플랫폼 내 활동성을 통해 더욱 강화될 수 있습니다.',
    descJa: 'マイニングモデルは、ユーザーエンゲージメント、エコシステムへの参加、および接続されたプラットフォームにわたるサービス活動を通じて強化できます。',
    descZh: '可以通过用户参与、生态系统参与以及跨连接平台的服务活动来加强挖矿模型。',
  },
  {
    icon: ShieldCheck,
    titleEn: 'Structured Ecosystem Logic',
    titleKr: '구조화된 생태계 로직',
    titleJa: '構造化されたエコシステムロジック',
    titleZh: '结构化生态系统逻辑',
    descEn:
      'Mining is positioned not as an isolated feature, but as part of a broader structured ecosystem involving utility, retention, and platform growth.',
    descKr:
      '채굴은 단순한 독립 기능이 아니라 유틸리티, 체류시간, 플랫폼 성장과 연결되는 구조화된 생태계 요소로 위치합니다.',
    descJa: 'マイニングは単なる独立した機能ではなく、ユーティリティ、リテンション、プラットフォームの成長を含む、より広い構造化されたエコシステムの一部として位置付けられています。',
    descZh: '挖矿不仅被定位为一个孤立的功能，而且是以效用、留存和平台增长为核心的更广泛结构化生态系统的一部分。',
  },
];

const miningFlow = [
  {
    icon: Smartphone,
    titleEn: 'Join via Mobile',
    titleKr: '모바일로 참여',
    titleJa: 'モバイルで参加',
    titleZh: '通过移动端加入',
    descEn: 'Users access the mining layer through a mobile-first user journey.',
    descKr: '사용자는 모바일 중심 사용자 경험을 통해 채굴 레이어에 진입합니다.',
    descJa: 'ユーザーはモバイルファーストのユーザー体験を通じてマイニングレイヤーにアクセスします。',
    descZh: '用户通过移动优先的用户体验访问挖矿层。',
  },
  {
    icon: Activity,
    titleEn: 'Engage with Ecosystem',
    titleKr: '생태계 활동 참여',
    titleJa: 'エコシステム活動への参加',
    titleZh: '参与生态系统活动',
    descEn: 'Participation, activity, and retention can strengthen the value of the mining experience.',
    descKr: '참여도, 활동성, 체류시간은 채굴 경험의 가치를 더욱 강화할 수 있습니다.',
    descJa: '参加、活動、およびリテンションは、マイニング体験の価値を強化することができます。',
    descZh: '参与、活动和留存可以进一步增强挖矿体验的价值。',
  },
  {
    icon: Coins,
    titleEn: 'Receive KORI Rewards',
    titleKr: 'KORI 보상 연결',
    titleJa: 'KORI報酬の受け取り',
    titleZh: '获得 KORI 奖励',
    descEn: 'Mining connects to the KORI reward structure as part of the larger ecosystem model.',
    descKr: '채굴은 더 큰 생태계 모델 안에서 KORI 보상 구조와 연결됩니다.',
    descJa: 'マイニングは、より大きなエコシステムモデルの一部としてKORI報酬構造に接続されます。',
    descZh: '作为更大的生态系统模型的一部分，挖矿与 KORI 奖励结构相连。',
  },
  {
    icon: Layers3,
    titleEn: 'Expand Utility',
    titleKr: '유틸리티 확장',
    titleJa: 'ユーティリティの拡張',
    titleZh: '扩展效用',
    descEn: 'Reward logic can link naturally into wallet, payment, service, and ecosystem expansion.',
    descKr: '보상 로직은 지갑, 결제, 서비스, 생태계 확장 구조로 자연스럽게 연결될 수 있습니다.',
    descJa: '報酬ロジックは、ウォレット、決済、サービス、エコシステム拡張の構造に自然に結びつきます。',
    descZh: '奖励逻辑可以自然地链接到钱包、支付、服务和生态系统扩展结构中。',
  },
];

const valuePoints = [
  {
    titleEn: 'Accessible Ecosystem Entry',
    titleKr: '쉬운 생태계 진입',
    titleJa: '容易なエコシステム参入',
    titleZh: '轻松进入生态系统',
    descEn:
      'Mobile mining lowers the barrier to entry and provides users with a familiar starting point inside the KORION ecosystem.',
    descKr:
      '모바일 채굴은 진입장벽을 낮추고 사용자가 KORION 생태계 안에서 익숙한 방식으로 시작할 수 있는 출발점을 제공합니다.',
    descJa: 'モバイルマイニングは参入障壁を下がり、ユーザーがKORIONエコシステム内で慣れ親しんだ方法で開始できる出発点を提供します。',
    descZh: '移动挖矿降低了准入门槛，并为用户在 KORION 生态系统内提供了一个熟悉的起点。',
  },
  {
    titleEn: 'Retention Through Participation',
    titleKr: '참여를 통한 체류 강화',
    titleJa: '参加によるリテンション強化',
    titleZh: '通过参与加强留存',
    descEn:
      'A mining system connected to participation can support stronger retention and more meaningful ecosystem activity.',
    descKr:
      '참여와 연결된 채굴 구조는 더 강한 체류시간과 의미 있는 생태계 활동을 뒷받침할 수 있습니다.',
    descJa: '参加に結びついたマイニング構造は、より強力なリテンションと有意義なエコシステム活動をサポートできます。',
    descZh: '与参与相关的挖矿结构可以支持更强的留存和更有意义的生态系统活动。',
  },
  {
    titleEn: 'Token Utility Narrative',
    titleKr: '토큰 유틸리티 서사 강화',
    titleJa: 'トークンユーティリティのナラティブ強化',
    titleZh: '加强代币效用叙事',
    descEn:
      'Mining reinforces the token economy by linking user action, reward design, and service expansion into one coherent story.',
    descKr:
      '채굴은 사용자 행동, 보상 설계, 서비스 확장을 하나의 흐름으로 연결해 토큰 경제 서사를 강화합니다.',
    descJa: 'マイニングは、ユーザーのアクション、報酬の設計、サービスの拡張を一つの流れに結びつけることで、トークン経済のナラティブを強化します。',
    descZh: '挖矿通过将用户行为、奖励设计和服务扩展链接成一个统一的整体，从而加强代币经济叙事。',
  },
];

export function MiningPage() {
  const { t } = useLanguage();

  return (
    <div className="mining-page">
      <section className="mining-hero">
        <div className="mining-hero__bg" />
        <div className="mining-hero__grid" />
        <div className="mining-page__container">
          <div className="mining-hero__content">
            <motion.div
              className="mining-hero__badge"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
            >
              <BadgeCheck size={16} />
              <span>{t('MOBILE MINING', '모바일 채굴', 'モバイルマイニング', '移动挖矿')}</span>
            </motion.div>

            <motion.h1
              className="mining-hero__title"
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.8 }}
            >
              {t(
                'A mobile mining layer designed to connect participation and ecosystem growth',
                '참여와 생태계 성장을 연결하는 모바일 채굴 레이어',
                '参加とエコシステムの成長を結びつけるように設計されたモバイルマイニングレイヤー',
                '旨在连接参与和生态系统增长的移动挖矿层'
              )}
            </motion.h1>

            <motion.p
              className="mining-hero__subtitle"
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.84, delay: 0.08 }}
            >
              {t(
                'KORION Mining is designed as a mobile-first participation model that can connect users, rewards, and ecosystem utility within one structured framework.',
                'KORION Mining은 사용자, 보상, 생태계 유틸리티를 하나의 구조 안에서 연결할 수 있는 모바일 중심 참여 모델로 설계됩니다.',
                'KORIONマイニングは、1つの構造化されたフレームワーク内でユーザー、報酬、およびエコシステムユーティリティを接続できるモバイルファーストの参加モデルとして設計されています。',
                'KORION 挖矿被设计为一种移动优先的参与模型，可以在一个结构化的框架内连接用户、奖励和生态系统效用。'
              )}
            </motion.p>

            <motion.div
              className="mining-hero__actions"
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.84, delay: 0.14 }}
            >
              <Link to="/ecosystem" className="mining-btn mining-btn--primary">
                {t('Get Started', '시작하기', '開始する', '开始')}
                <ChevronRight size={16} />
              </Link>

              <Link to="/whitepaper" className="mining-btn mining-btn--ghost">
                {t('Whitepaper', '백서', 'ホワイトペーパー', '白皮书')}
                <ChevronRight size={16} />
              </Link>
            </motion.div>

            <motion.div
              className="mining-hero__stats"
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.84, delay: 0.2 }}
            >
              <div className="mining-stat">
                <strong>{t('Mobile Entry', '모바일 진입', 'モバイル参入', '移动进入')}</strong>
                <span>{t('User-friendly access', '쉬운 참여 구조', 'ユーザーフレンドリーなアクセス', '用户友好的访问')}</span>
              </div>
              <div className="mining-stat">
                <strong>{t('KORI Rewards', 'KORI 보상', 'KORI報酬', 'KORI 奖励')}</strong>
                <span>{t('Linked reward logic', '보상 연결 구조', 'リンクされた報酬ロジック', '关联的奖励逻辑')}</span>
              </div>
              <div className="mining-stat">
                <strong>{t('Ecosystem Utility', '생태계 유틸리티', 'エコシステムユーティリティ', '生态系统效用')}</strong>
                <span>{t('Participation-driven value', '참여 기반 가치', '参加主導の価値', '参与驱动的价值')}</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="mining-hero__visual"
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.9 }}
          >
            <div className="mining-orbit mining-orbit--one" />
            <div className="mining-orbit mining-orbit--two" />
            <div className="mining-glow mining-glow--one" />
            <div className="mining-glow mining-glow--two" />

            <div className="mining-core-card">
              <div className="mining-core-card__icon">
                <Pickaxe size={28} />
              </div>
              <h3>{t('KORION Mining', 'KORION 채굴', 'KORIONマイニング', 'KORION 挖矿')}</h3>
              <p>
                {t(
                  'A structured participation layer designed for ecosystem entry and long-term utility.',
                  '생태계 진입과 장기 유틸리티를 위한 구조화된 참여 레이어.',
                  'エコシステムへの参入と長期的なユーティリティのために設計された構造化された参加レイヤー。',
                  '旨在为生态系统进入和长期效用设计的结构化参与层。'
                )}
              </p>
            </div>

            <div className="mining-float mining-float--left">
              <span className="mining-float-icon">
                <Smartphone size={18} />
              </span>
              <span>{t('Mobile First', '모바일 중심', 'モバイルファースト', '移动优先')}</span>
            </div>

            <div className="mining-float mining-float--right">
              <span className="mining-float-icon">
                <Coins size={18} />
              </span>
              <span>{t('Reward Logic', '보상 구조', '報酬ロジック', '奖励逻辑')}</span>
            </div>

            <div className="mining-float mining-float--bottom">
              <span className="mining-float-icon">
                <Zap size={18} />
              </span>
              <span>{t('Participation Growth', '참여 성장', '参加による成長', '参与增长')}</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mining-section">
        <div className="mining-page__container-01">
          <div className="mining-section__head">
            <span className="mining-section__label">{t('Overview', '개요', '概要', '概览')}</span>
            <h2>
              {t(
                'Mining is positioned as a participation framework, not just a feature',
                '채굴은 단순 기능이 아니라 참여 프레임워크로 설계됩니다',
                'マイニングは単なる機能ではなく、参加フレームワークとして位置づけられています',
                '挖矿被定位为一个参与框架，而不仅仅是一个功能'
              )}
            </h2>
            <p>
              {t(
                'The KORION mining model is designed to connect mobile accessibility, token reward logic, and ecosystem participation into a unified growth structure.',
                'KORION 채굴 모델은 모바일 접근성, 토큰 보상 구조, 생태계 참여를 하나의 성장 구조로 연결하도록 설계됩니다.',
                'KORIONマイニングモデルは、モバイルアクセシビリティ、トークン報酬ロジック、およびエコシステムへの参加を統合された成長構造に接続するように設計されています。',
                'KORION 挖矿模型旨在将移动访问、代币奖励逻辑和生态系统参与连接到一个统一的增长结构中。'
              )}
            </p>
          </div>

          <div className="mining-feature-grid">
            {miningFeatures.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.titleEn}
                  className="mining-feature-card"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55 }}
                >
                  <div className="mining-feature-card__icon">
                    <Icon size={20} />
                  </div>
                  <h3>{t(item.titleEn, item.titleKr, item.titleJa, item.titleZh)}</h3>
                  <p>{t(item.descEn, item.descKr, item.descJa, item.descZh)}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mining-section mining-section--deep">
        <div className="mining-page__container-01">
          <div className="mining-section__head">
            <span className="mining-section__label">{t('Flow', '구조', 'フロー', '流程')}</span>
            <h2>
              {t(
                'A mining flow connected to user journey and utility expansion',
                '사용자 여정과 유틸리티 확장에 연결되는 채굴 흐름',
                'ユーザーのジャーニーとユーティリティの拡張に関連付けられたマイニングフロー',
                '与用户旅程和效用扩展相关的挖矿流程'
              )}
            </h2>
          </div>

          <div className="mining-flow-grid">
            {miningFlow.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.titleEn} className="mining-flow-card">
                  <div className="mining-flow-card__icon">
                    <Icon size={20} />
                  </div>
                  <h3>{t(item.titleEn, item.titleKr, item.titleJa, item.titleZh)}</h3>
                  <p>{t(item.descEn, item.descKr, item.descJa, item.descZh)}</p>
                  <ArrowUpRight size={16} className="mining-flow-card__arrow" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mining-section">
        <div className="mining-page__container-01">
          <div className="mining-section__head">
            <span className="mining-section__label">{t('Value', '가치', '価値', '价值')}</span>
            <h2>
              {t(
                'Why mobile mining matters inside the KORION ecosystem',
                '왜 모바일 채굴이 KORION 생태계 안에서 중요한가',
                'なぜKORIONエコシステム内でのモバイルマイニングが重要なのか',
                '为什么移动挖矿在 KORION 生态系统内很重要'
              )}
            </h2>
          </div>

          <div className="mining-value-list">
            {valuePoints.map((item) => (
              <div key={item.titleEn} className="mining-value-item">
                <ShieldCheck size={18} />
                <div>
                  <h3>{t(item.titleEn, item.titleKr, item.titleJa, item.titleZh)}</h3>
                  <p>{t(item.descEn, item.descKr, item.descJa, item.descZh)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mining-section mining-section--deep">
        <div className="mining-page__container-01">
          <div className="mining-cta-box">
            <div className="mining-cta-box__label">
              <Sparkles size={16} />
              <span>{t('KORION Mining', 'KORION 채굴', 'KORIONマイニング', 'KORION 挖矿')}</span>
            </div>

            <h2>
              {t(
                'A mobile-first mining model designed for ecosystem growth',
                '생태계 성장을 위해 설계된 모바일 중심 채굴 모델',
                'エコシステムの成長のために設計されたモバイルファーストのマイニングモデル',
                '为生态系统增长设计的移动优先挖矿模型'
              )}
            </h2>

            <p>
              {t(
                'KORION Mining is structured to connect user participation, KORI rewards, and long-term ecosystem utility in one continuous framework.',
                'KORION Mining은 사용자 참여, KORI 보상, 장기적인 생태계 유틸리티를 하나의 연속된 구조로 연결하도록 설계됩니다.',
                'KORIONマイニングは、1つの継続的なフレームワーク内でユーザーの参加、KORI報酬、および長期的なエコシステムユーティリティを結びつけるように構成されています。',
                'KORION 挖矿的结构是在一个连续的框架内连接用户参与、KORI 奖励和长期生态系统效用。'
              )}
            </p>

            <div className="mining-cta-box__actions">
              <Link to="/whitepaper" className="mining-btn mining-btn--primary">
                {t('Read Whitepaper', '백서 보기', 'ホワイトペーパーを読む', '阅读白皮书')}
                <ChevronRight size={16} />
              </Link>

              <Link to="/tokenomics" className="mining-btn mining-btn--ghost">
                {t('View Tokenomics', '토크노믹스 보기', 'トークノミクスを見る', '查看代币经济学')}
                <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}