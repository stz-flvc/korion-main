import { motion } from 'motion/react';
import {
  BadgeCheck,
  BellRing,
  ChevronRight,
  FileText,
  Globe,
  Headphones,
  HelpCircle,
  LifeBuoy,
  Mail,
  MessageSquareMore,
  ShieldCheck,
  Wallet,
} from 'lucide-react';
import { Link } from 'react-router';
import { useLanguage } from '../contexts/LanguageContext';
import './SupportPage.css';

const supportHighlights = [
  {
    icon: Headphones,
    titleEn: 'Dedicated Support',
    titleKr: '전담 지원',
    titleJa: '専任サポート',
    titleZh: '专属支持',
    descEn:
      'Fast and structured assistance for wallet, platform, and ecosystem-related inquiries.',
    descKr:
      '지갑, 플랫폼, 생태계 관련 문의에 대해 빠르고 체계적인 지원을 제공합니다.',
    descJa: 'ウォレット、プラットフォーム、およびエコシステム関連の問い合わせに対して、迅速かつ体系的なサポートを提供します。',
    descZh: '针对钱包、平台和生态系统相关查询提供快速且结构化的协助。',
  },
  {
    icon: ShieldCheck,
    titleEn: 'Security First',
    titleKr: '보안 우선',
    titleJa: 'セキュリティ優先',
    titleZh: '安全第一',
    descEn:
      'Support processes are designed to protect account integrity, transaction safety, and user trust.',
    descKr:
      '고객지원 절차는 계정 무결성, 거래 안전성, 사용자 신뢰를 최우선으로 설계되었습니다.',
    descJa: 'サポートプロセスは、アカウントの完全性、取引の安全性、およびユーザーの信頼を保護するように設計されています。',
    descZh: '支持流程旨在保护账户完整性、交易安全和用户信任。',
  },
  {
    icon: BadgeCheck,
    titleEn: 'Verified Guidance',
    titleKr: '검증된 안내',
    titleJa: '検証済みの案内',
    titleZh: '经过验证的指南',
    descEn:
      'Receive official guidance for usage, verification, wallet operations, and service policies.',
    descKr:
      '이용 방법, 인증, 지갑 운영, 서비스 정책에 대해 공식적이고 검증된 안내를 받을 수 있습니다.',
    descJa: '使用方法、検証、ウォレット操作、およびサービスポリシーに関する公式ガイドを受け取ることができます。',
    descZh: '获取有关使用、验证、钱包操作和服务政策的官方指南。',
  },
];

const supportChannels = [
  {
    icon: Mail,
    titleEn: 'Email Support',
    titleKr: '이메일 지원',
    titleJa: 'メールサポート',
    titleZh: '邮件支持',
    descEn:
      'For account, service, or operational inquiries requiring detailed assistance.',
    descKr:
      '계정, 서비스, 운영 관련 문의 등 상세한 안내가 필요한 경우 이메일로 지원합니다.',
    descJa: '詳細なサポートが必要なアカウント、サービス、または運営に関する問い合わせは、メールで対応します。',
    descZh: '针对需要详细协助的账户、服务或运营咨询。',
    value: 'dianainteen@dianainteen.com',
    href: 'mailto:dianainteen@dianainteen.com',
  },
  {
    icon: MessageSquareMore,
    titleEn: 'Community Help',
    titleKr: '커뮤니티 안내',
    titleJa: 'コミュニティヘルプ',
    titleZh: '社区帮助',
    descEn:
      'Stay updated on announcements, campaigns, and community-based support channels.',
    descKr:
      '공지사항, 캠페인, 커뮤니티 기반 지원 채널에서 최신 정보를 확인할 수 있습니다.',
    descJa: 'お知らせ、キャンペーン、およびコミュニティベースのサポートチャネルに関する最新情報を入手してください。',
    descZh: '随时了解公告、活动和基于社区的支持渠道。',
    value: 'Telegram Community',
    href: 'https://t.me/KORION_Official_chat',
  },
  {
    icon: BellRing,
    titleEn: 'Announcements',
    titleKr: '공지사항',
    titleJa: 'お知らせ',
    titleZh: '公告',
    descEn:
      'Check important service notices, maintenance guidance, and ecosystem updates.',
    descKr:
      '중요한 서비스 안내, 점검 공지, 생태계 업데이트를 확인할 수 있습니다.',
    descJa: '重要なサービス通知、メンテナンス案内、およびエコシステムのアップデートを確認してください',
    descZh: '查看重要的服务通知、维护指南和生态系统更新。',
    value: 'Service Notices',
    href: '/news',
  },
];

const helpCategories = [
  {
    icon: Wallet,
    titleEn: 'Wallet & Asset',
    titleKr: '지갑 및 자산',
    titleJa: 'ウォレットと資産',
    titleZh: '钱包与资产',
    itemsEn: [
      'Deposit and withdrawal guidance',
      'Wallet usage and balance checks',
      'Transaction status inquiries',
    ],
    itemsKr: [
      '입출금 안내',
      '지갑 사용 및 잔액 확인',
      '거래 상태 문의',
    ],
    itemsJa: [
      '入出金に関する案内',
      'ウォレットの使用と残高確認',
      '取引ステータスの問い合わせ',
    ],
    itemsZh: [
      '充值和提现指南',
      '钱包使用和余额查询',
      '交易状态查询',
    ],
  },
  {
    icon: ShieldCheck,
    titleEn: 'Account & Security',
    titleKr: '계정 및 보안',
    titleJa: 'アカウントとセキュリティ',
    titleZh: '账户与安全',
    itemsEn: [
      'Login and access issues',
      'Account verification support',
      'Security-related reporting',
    ],
    itemsKr: [
      '로그인 및 접근 문제',
      '계정 인증 지원',
      '보안 관련 신고',
    ],
    itemsJa: [
      'ログインおよびアクセスの問題',
      'アカウント検証のサポート',
      'セキュリティ関連の報告',
    ],
    itemsZh: [
      '登录和访问问题',
      '账户验证支持',
      '安全相关报告',
    ],
  },
  {
    icon: FileText,
    titleEn: 'Policy & Service',
    titleKr: '정책 및 서비스',
    titleJa: 'ポリシーとサービス',
    titleZh: '政策与服务',
    itemsEn: [
      'Operational policy guidance',
      'Service updates and notices',
      'Terms and usage information',
    ],
    itemsKr: [
      '운영 정책 안내',
      '서비스 업데이트 및 공지',
      '이용 관련 정보',
    ],
    itemsJa: [
      '運営ポリシーの案内',
      'サービスのアップデートとお知らせ',
      '利用規約と使用情報',
    ],
    itemsZh: [
      '运营政策指南',
      '服务更新和通知',
      '条款和使用信息',
    ],
  },
];

const faqItems = [
  {
    qEn: 'How do I contact support for account-related issues?',
    qKr: '계정 관련 문제는 어떻게 문의하나요?',
    qJa: 'アカウント関連の問い合わせ方法は？',
    qZh: '如何就账户相关问题联系支持人员？',
    aEn:
      'You can contact the support team through the official support email with a detailed description of the issue.',
    aKr:
      '문제 내용을 구체적으로 작성하여 공식 지원 이메일로 문의하시면 고객지원팀이 확인 후 안내합니다.',
    aJa: '問題の詳細を記載して、公式サポートメールからお問い合わせください。',
    aZh: '您可以通过官方支持电子邮件联系支持团队，并提供问题的详细描述。',
  },
  {
    qEn: 'Where can I check service notices or updates?',
    qKr: '서비스 공지나 업데이트는 어디서 확인하나요?',
    qJa: 'サービス通知やアップデートはどこで確認できますか？',
    qZh: '在哪里可以查看服务通知 or 更新？',
    aEn:
      'Important notices and service updates are provided through the official announcement and support channels.',
    aKr:
      '중요 공지 및 서비스 업데이트는 공식 공지사항 및 지원 채널을 통해 안내됩니다.',
    aJa: '重要な通知やサービスのアップデートは、公式のお知らせチャネルを通じて提供されます。',
    aZh: '重要的通知和服务更新通过官方公告和支持渠道提供。',
  },
  {
    qEn: 'What information should I include when submitting an inquiry?',
    qKr: '문의 접수 시 어떤 정보를 함께 보내야 하나요?',
    qJa: '問い合わせ時に記載すべき情報は？',
    qZh: '提交查询时应包含哪些信息？',
    aEn:
      'Include the issue summary, related account or wallet information, screenshots if available, and the time of occurrence.',
    aKr:
      '문의 요약, 관련 계정 또는 지갑 정보, 가능하다면 스크린샷, 발생 시점을 함께 전달해주시면 확인이 더 빠릅니다.',
    aJa: '問題の概要、関連するアカウントまたはウォレット情報、可能であればスクリーンショット、および発生時刻を記載してください。',
    aZh: '包括问题摘要、相关账户或钱包信息、屏幕截图（如果有）以及发生时间。',
  },
];

export function SupportPage() {
  const { t } = useLanguage();

  return (
    <div className="support-page">
      <div className="support-page__container">
        <section className="support-page__top-intro">
          <motion.div
            className="support-page__intro-shell"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <div className="support-page__eyebrow">
              <LifeBuoy size={16} />
              <span>{t('Support Center', '고객 지원 센터', 'サポートセンター', '客户服务中心')}</span>
            </div>

            <div className="support-page__intro-grid">
              <div className="support-page__intro-main">
                <h1 className="support-page__title">
                  {t(
                    'Official support center for fast, reliable assistance',
                    '신속하고 신뢰할 수 있는 지원을 위한 공식 고객지원 센터',
                    '迅速で信頼性の高いサポートのための公式カスタマーサポートセンター',
                    '官方客户服务中心，提供快速、可靠的协助'
                  )}
                </h1>
                <p className="support-page__description">
                  {t(
                    'The KORION Support Center provides structured assistance for service usage, wallet operations, account inquiries, and official notices. It is designed to deliver a reliable support experience for both users and partners.',
                    'KORION 고객지원 센터는 서비스 이용, 지갑 운영, 계정 문의, 공지 확인 등 주요 지원 항목을 체계적으로 안내합니다. 실사용자와 파트너 모두가 신뢰할 수 있는 지원 경험을 목표로 설계되었습니다.',
                    'KORIONカスタマーサポートセンターは、サービス利用、ウォレット運営、アカウント問い合わせ、お知らせ確認など、主要なサポート項目を体系的に案内します。一般ユーザーとパートナーの両方が信頼できるサポート体験を提供することを目指しています。',
                    'KORION 客户服务中心为服务使用、钱包运营、账户查询和官方通知提供结构化协助。旨在为用户和合作伙伴提供可靠的支持体验。'
                  )}
                </p>

                <div className="support-page__quick-actions">
                  <a
                    href="mailto:dianainteen@dianainteen.com"
                    className="support-page__primary-action"
                  >
                    <Mail size={18} />
                    <span>{t('Contact by Email', '이메일 문의', 'メールで問い合わせ', '邮件咨询')}</span>
                  </a>

                  <a
                    href="/developers"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="support-page__secondary-action"
                  >
                    <HelpCircle size={18} />
                    <span>{t('Developer Resources', '개발자 자료', '開発者リソース', '开发者资源')}</span>
                  </a>
                </div>
              </div>

              <div className="support-page__status-panel">
                <div className="support-page__status-card">
                  <div className="support-page__status-icon">
                    <BadgeCheck size={18} />
                  </div>
                  <div>
                    <strong>{t('Official Support', '공식 지원 운영', '公式サポート運営', '官方支持运营')}</strong>
                    <p>
                      {t(
                        'Submit policy, account, and service-related inquiries through official channels.',
                        '정책, 계정, 서비스 관련 문의를 공식 채널로 접수할 수 있습니다.',
                        'ポリシー、アカウント、サービスに関する問い合わせを公式チャネルで受け付けています。',
                        '可以通过官方渠道提交政策、账户和服务相关的咨询。'
                      )}
                    </p>
                  </div>
                </div>

                <div className="support-page__status-card">
                  <div className="support-page__status-icon">
                    <Globe size={18} />
                  </div>
                  <div>
                    <strong>{t('Service Information', '서비스 정보 확인', 'サービス情報の確認', '服务信息查询')}</strong>
                    <p>
                      {t(
                        'Check important service notices and operational updates quickly from support pages.',
                        '중요 공지와 운영 업데이트를 지원 페이지에서 빠르게 확인할 수 있습니다.',
                        '重要なお知らせや運営アップデートをサポートページですばやく確認できます。',
                        '可以在支持页面快速查看重要公告和运营更新。'
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="support-page__highlights">
          <div className="support-page__section-heading">
            <span>{t('Core Support Values', '핵심 지원 가치', '主要なサポート価値', '核心支持价值')}</span>
            <h2>
              {t(
                'A more professional and dependable support experience',
                '더 전문적이고 안정적인 고객지원 경험',
                'より専門的で安定したカスタマーサポート体験',
                '更专业、更可靠的客户支持体验'
              )}
            </h2>
          </div>

          <div className="support-page__highlight-grid">
            {supportHighlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.titleEn}
                  className="support-page__highlight-card"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                >
                  <div className="support-page__highlight-icon">
                    <Icon size={20} />
                  </div>
                  <h3>{t(item.titleEn, item.titleKr, item.titleJa, item.titleZh)}</h3>
                  <p>{t(item.descEn, item.descKr, item.descJa, item.descZh)}</p>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section className="support-page__channels">
          <div className="support-page__section-heading">
            <span>{t('Support Channels', '문의 채널', '問い合わせチャネル', '咨询渠道')}</span>
            <h2>
              {t(
                'A support structure that connects you through the right channel',
                '필요한 방식으로 빠르게 연결되는 지원 구조',
                '必要な方法で迅速に繋がるサポート構造',
                '通过合适渠道快速连接的支持结构'
              )}
            </h2>
          </div>

          <div className="support-page__channel-grid">
            {supportChannels.map((channel, index) => {
              const Icon = channel.icon;

              const content = (
                <>
                  <div className="support-page__channel-top">
                    <div className="support-page__channel-icon">
                      <Icon size={19} />
                    </div>
                    <ChevronRight size={18} />
                  </div>

                  <h3>{t(channel.titleEn, channel.titleKr, channel.titleJa, channel.titleZh)}</h3>
                  <p>{t(channel.descEn, channel.descKr, channel.descJa, channel.descZh)}</p>
                  <strong>{channel.value}</strong>
                </>
              );

              return channel.href.startsWith('mailto:') ? (
                <motion.a
                  key={channel.titleEn}
                  href={channel.href}
                  className="support-page__channel-card"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                >
                  {content}
                </motion.a>
              ) : (
                <motion.div
                  key={channel.titleEn}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                >
                  <Link to={channel.href} className="support-page__channel-card">
                    {content}
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section className="support-page__categories">
          <div className="support-page__section-heading">
            <span>{t('Support Scope', '지원 범위', 'サポート範囲', '支持范围')}</span>
            <h2>
              {t(
                'Key support categories at a glance',
                '주요 문의 항목을 한눈에 확인할 수 있습니다',
                '主要な問い合わせ項目を一目で確認できます',
                '主要咨询项目一目了然'
              )}
            </h2>
          </div>

          <div className="support-page__category-grid">
            {helpCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.article
                  key={category.titleEn}
                  className="support-page__category-card"
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                >
                  <div className="support-page__category-header">
                    <div className="support-page__category-icon">
                      <Icon size={20} />
                    </div>
                    <h3>{t(category.titleEn, category.titleKr, category.titleJa, category.titleZh)}</h3>
                  </div>

                  <ul>
                    {t(category.itemsEn, category.itemsKr, category.itemsJa, category.itemsZh).map((item: string) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section className="support-page__faq">
          <div className="support-page__section-heading">
            <span>{t('Frequently Asked Questions', '자주 묻는 질문', 'よくある質問', '常见问题')}</span>
            <h2>
              {t(
                'Quick answers to common support questions',
                '기본적인 문의는 여기서 빠르게 확인하세요',
                '基本的な質問はこちらで迅速に確認してください',
                '在此快速查看常见问题'
              )}
            </h2>
          </div>

          <div className="support-page__faq-list">
            {faqItems.map((item, index) => (
              <motion.article
                key={item.qEn}
                className="support-page__faq-item"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
              >
                <div className="support-page__faq-q">
                  <HelpCircle size={18} />
                  <h3>{t(item.qEn, item.qKr, item.qJa, item.qZh)}</h3>
                </div>
                <p>{t(item.aEn, item.aKr, item.aJa, item.aZh)}</p>
              </motion.article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}