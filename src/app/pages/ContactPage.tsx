import { motion } from 'motion/react';
import {
    Mail,
    ShieldCheck,
    Headset,
    Briefcase,
    Bug,
    Code2,
    Clock3,
    ChevronRight,
    CircleHelp,
    MessageSquareText,
} from 'lucide-react';
import { Link } from 'react-router';
import { useLanguage } from '../contexts/LanguageContext';
import './ContactPage.css';

const contactChannels = [
    {
        key: 'support',
        icon: Headset,
        titleEn: 'Support Team',
        titleKo: '지원팀 문의',
        titleJa: 'サポートチームにお問い合わせ',
        titleZh: '联系支持团队',
        descEn:
            'For account access, app issues, wallet usage, login errors, update guidance, and general service support.',
        descKo:
            '계정 접근, 앱 사용 문제, 지갑 이용, 로그인 오류, 업데이트 안내 등 일반적인 서비스 지원이 필요한 경우 문의할 수 있습니다.',
        descJa: 'アカウントアクセス、アプリの問題、ウォレットの使用、ログインエラー、アップデートの案内、一般的なサービスサポートについて。',
        descZh: '用于账户访问、App 问题、钱包使用、登录错误、更新指导和一般服务支持。',
        email: 'dianainteen@dianainteen.com',
        badgeEn: 'General Support',
        badgeKo: '일반 지원',
        badgeJa: '一般サポート',
        badgeZh: '一般支持',
    },
    {
        key: 'ops',
        icon: MessageSquareText,
        titleEn: 'Operations Team',
        titleKo: '운영팀 문의',
        titleJa: '運営チームにお問い合わせ',
        titleZh: '联系运营团队',
        descEn:
            'For ecosystem operations, campaign coordination, notice-related questions, user flow issues, or service feedback.',
        descKo:
            '생태계 운영, 캠페인 협의, 공지 관련 문의, 서비스 흐름 관련 이슈, 운영 피드백 등을 전달할 수 있습니다.',
        descJa: 'エコシステム運営、キャンペーンの調整、お知らせに関する質問、ユーザーフローの問題、またはサービスフィードバックについて。',
        descZh: '用于生态系统运营、活动协调、公告相关问题、用户流程问题或服务反馈。',
        email: 'dianainteen@dianainteen.com',
        badgeEn: 'Service Ops',
        badgeKo: '서비스 운영',
        badgeJa: 'サービス運営',
        badgeZh: '服务运营',
    },
    {
        key: 'biz',
        icon: Briefcase,
        titleEn: 'Business & Partnership',
        titleKo: '비즈니스 / 제휴 문의',
        titleJa: 'ビジネス / 提携のお問い合わせ',
        titleZh: '商务与合作伙伴咨询',
        descEn:
            'For strategic partnerships, payment collaboration, listing discussions, enterprise proposals, and growth opportunities.',
        descKo:
            '전략 제휴, 결제 협업, 상장 논의, 기업 제안, 사업 확장 기회에 대한 문의에 적합합니다.',
        descJa: '戦略的提携、決済コラボレーション、上場の議論、企業提案、および成長機会。',
        descZh: '用于战略伙伴关系、支付合作、上市讨论、企业提案和增长机会。',
        email: 'dianainteen@dianainteen.com',
        badgeEn: 'Partnership',
        badgeKo: '제휴',
        badgeJa: '提携',
        badgeZh: '合作伙伴',
    },
    {
        key: 'security',
        icon: ShieldCheck,
        titleEn: 'Security Report',
        titleKo: '보안 제보',
        titleJa: 'セキュリティレポート',
        titleZh: '安全报告',
        descEn:
            'For vulnerability reports, suspicious activity, fraud concerns, wallet security issues, or responsible disclosure.',
        descKo:
            '취약점 제보, 이상 징후, 사기 의심, 지갑 보안 이슈, 책임 있는 공개 절차 관련 내용을 전달할 수 있습니다.',
        descJa: '脆弱性レポート、不審なアクティビティ、詐欺の懸念、ウォレットのセキュリティ問題、または責任ある開示。',
        descZh: '用于漏洞报告、可疑活动、欺诈问题、钱包安全问题或负责任的披露。',
        email: 'dianainteen@dianainteen.com',
        badgeEn: 'Responsible Disclosure',
        badgeKo: '책임 있는 제보',
        badgeJa: '責任ある開示',
        badgeZh: '负责任的披露',
    },
    {
        key: 'dev',
        icon: Code2,
        titleEn: 'Developer Contact',
        titleKo: '개발 관련 문의',
        titleJa: '開発に関するお問い合わせ',
        titleZh: '开发者联系方式',
        descEn:
            'For API integration, technical documentation, SDK coordination, product interoperability, or infrastructure discussions.',
        descKo:
            'API 연동, 기술 문서, SDK 협업, 제품 연동성, 인프라 관련 협의가 필요한 경우 문의할 수 있습니다.',
        descJa: 'API統合、技術ドキュメント、SDKの調整、製品の相互運用性、またはインフラストラクチャの議論。',
        descZh: '用于 API 集成、技术文档、SDK 协调、产品互操作性或基础设施讨论。',
        email: 'dianainteen@dianainteen.com',
        badgeEn: 'Technical Inquiry',
        badgeKo: '기술 문의',
        badgeJa: '技術的なお問い合わせ',
        badgeZh: '技术咨询',
    },
];

const faqItems = [
    {
        qEn: 'Which team should I contact first?',
        qKo: '어느 팀으로 먼저 문의해야 하나요?',
        qJa: 'どのチームに最初に連絡すればよいですか？',
        qZh: '我该先联系哪个团队？',
        aEn:
            'If your issue is related to using the service, app, wallet, or account, contact Support first. For partnership or business matters, use the Business channel.',
        aKo:
            '서비스 이용, 앱, 지갑, 계정 문제라면 지원팀으로 먼저 문의하시면 됩니다. 제휴나 사업 관련 내용은 비즈니스 채널을 이용해 주세요.',
        aJa: 'サービスの使用、アプリ、ウォレット、またはアカウントに関連する問題の場合は、まずサポートに連絡してください。提携やビジネスに関する事項については、ビジネスチャネルを使用してください。',
        aZh: '如果问题与使用服务、App、钱包或账户有关，请先联系支持团队。对于合作伙伴或商务事务，请使用商务渠道。',
    },
    {
        qEn: 'Can I report a security issue privately?',
        qKo: '보안 이슈를 비공개로 제보할 수 있나요?',
        qJa: 'セキュリティの問題を非公開で報告できますか？',
        qZh: '我可以私下报告安全问题吗？',
        aEn:
            'Yes. Security-related matters should be sent to the dedicated security contact so they can be reviewed through the appropriate process.',
        aKo:
            '가능합니다. 보안 관련 사안은 전용 보안 연락처로 보내주시면 적절한 절차를 통해 검토됩니다.',
        aJa: 'はい。セキュリティに関連する事項は、適切なプロセスを通じて確認できるよう、専用のセキュリティ連絡先に送信してください。',
        aZh: '是的。安全相关事宜应发送至专用安全联系方式，以便通过适当的流程进行审查。',
    },
    {
        qEn: 'How detailed should my inquiry be?',
        qKo: '문의 내용은 얼마나 자세히 적어야 하나요?',
        qJa: 'お問い合わせ内容はどの程度詳細に記載すべきですか？',
        qZh: '我的咨询内容应该有多详细？',
        aEn:
            'Include your issue summary, related account or wallet context if relevant, screenshots when needed, and the exact sequence of what happened.',
        aKo:
            '문제 요약, 관련 계정 또는 지갑 정보, 필요한 경우 스크린샷, 그리고 어떤 순서로 문제가 발생했는지를 함께 적어주시면 좋습니다.',
        aJa: '問題の概要、関連するアカウントまたはウォレットのコンテキスト（該当する場合）、必要に応じてスクリーンショット、および発生した事象の正確な順序を含めてください。',
        aZh: '包括问题摘要、相关的账户或钱包背景（如果相关）、需要时的截图以及发生的具体步骤。',
    },
];

export function ContactPage() {
    const { t } = useLanguage();

    return (
        <div className="contact-page">
            <div className="contact-page__bg">
                <div className="contact-page__glow contact-page__glow--one" />
                <div className="contact-page__glow contact-page__glow--two" />
                <div className="contact-page__grid" />
            </div>

            <div className="contact-page__container">
                <motion.section
                    className="contact-page__intro"
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="contact-page__eyebrow">
                        <Mail size={15} />
                        <span>{t('Contact Guidance', '문의 안내', 'お問い合わせ案内', '咨询指南')}</span>
                    </div>

                    <h1 className="contact-page__title">
                        {t(
                            'A premium contact page designed to guide users to the right team quickly and clearly.',
                            '운영팀 및 지원팀에 빠르고 정확하게 문의할 수 있도록 정리된 안내 페이지입니다.',
                            '適切なチームへと迅速かつ明確に案内するために設計された、プレミアムなお問い合わせページです。',
                            '一个优质的联系页面，旨在快速清晰地引导用户找到正确的团队。'
                        )}
                    </h1>

                    <p className="contact-page__description">
                        {t(
                            'From product support to operations, partnership, security, and developer communication, this page is structured to help route each inquiry to the most appropriate team.',
                            '서비스 이용 문의부터 운영, 제휴, 보안, 개발 관련 소통까지 목적에 맞는 채널로 연결할 수 있도록 구성했습니다. 문의 성격에 따라 가장 적절한 담당 영역을 확인한 뒤 연락해 주세요.',
                            '製品サポートから運営、提携、セキュリティ、開発者とのコミュニケーションまで、各お問い合わせを最も適切なチームに導くように構成されています。',
                            '从产品支持到运营、合作伙伴、安全和开发者沟通，本页面的结构旨在帮助将每次咨询引导至最合适的团队。'
                        )}
                    </p>
                </motion.section>

                <motion.section
                    className="contact-page__summary"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.72, delay: 0.08 }}
                >
                    <div className="contact-page__summary-card">
                        <div className="contact-page__summary-icon">
                            <Clock3 size={18} />
                        </div>
                        <div>
                            <h3>{t('Response Guidance', '응답 안내', '回答の案内', '响应指南')}</h3>
                            <p>
                                {t(
                                    'Each inquiry is reviewed by the relevant team, and more complete details usually lead to faster handling.',
                                    '문의 유형에 따라 담당 팀에서 순차적으로 검토하며, 상세 정보가 포함될수록 더 빠른 확인이 가능합니다.',
                                    '各お問い合わせは関連チームによって確認されます。詳細が網羅されているほど、より迅速な対応が可能になります。',
                                    '每次咨询都由相关团队审核，更完整的详细信息通常会带来更快的处理速度。'
                                )}
                            </p>
                        </div>
                    </div>

                    <div className="contact-page__summary-card">
                        <div className="contact-page__summary-icon">
                            <ShieldCheck size={18} />
                        </div>
                        <div>
                            <h3>{t('Security Priority', '보안 우선 처리', 'セキュリティ優先', '安全优先')}</h3>
                            <p>
                                {t(
                                    'Security concerns, suspicious activity, and vulnerability reports may be prioritized over standard requests.',
                                    '보안 이슈나 의심 거래, 취약점 제보는 일반 문의보다 우선적으로 분류될 수 있습니다.',
                                    'セキュリティに関する懸念、不審なアクティビティ、および脆弱性レポートは、標準的なリクエストよりも優先される場合があります。',
                                    '安全问题、可疑活动和漏洞报告可能会优先于标准请求。'
                                )}
                            </p>
                        </div>
                    </div>

                    <div className="contact-page__summary-card">
                        <div className="contact-page__summary-icon">
                            <CircleHelp size={18} />
                        </div>
                        <div>
                            <h3>{t('Choose the Right Channel', '정확한 채널 선택', '適切なチャネルの選択', '选对渠道')}</h3>
                            <p>
                                {t(
                                    'Selecting the correct team helps your message reach the right reviewers with less delay.',
                                    '문의 목적에 맞는 채널을 선택하면 더 정확한 답변과 더 나은 연결이 가능합니다.',
                                    '適切なチームを選択することで、メッセージが適切な担当者に迅速に届くようになります。',
                                    '选择正确的团队有助于您的信息以更少的延迟到达正确的审核人员手中。'
                                )}
                            </p>
                        </div>
                    </div>
                </motion.section>

                <section className="contact-page__channels">
                    {contactChannels.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.article
                                key={item.key}
                                className="contact-channel-card"
                                initial={{ opacity: 0, y: 26 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.62, delay: 0.1 + index * 0.06 }}
                            >
                                <div className="contact-channel-card__top">
                                    <div className="contact-channel-card__icon">
                                        <Icon size={18} />
                                    </div>

                                    <span className="contact-channel-card__badge">
                                        {t(item.badgeEn, item.badgeKo, item.badgeJa, item.badgeZh)}
                                    </span>
                                </div>

                                <h2 className="contact-channel-card__title">
                                    {t(item.titleEn, item.titleKo, item.titleJa, item.titleZh)}
                                </h2>

                                <p className="contact-channel-card__desc">
                                    {t(item.descEn, item.descKo, item.descJa, item.descZh)}
                                </p>

                                <a href={`mailto:${item.email}`} className="contact-channel-card__email">
                                    <Mail size={16} />
                                    <span>{item.email}</span>
                                </a>
                            </motion.article>
                        );
                    })}
                </section>

                <motion.section
                    className="contact-page__policy"
                    initial={{ opacity: 0, y: 26 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.72, delay: 0.22 }}
                >
                    <div className="contact-policy-card">
                        <div className="contact-policy-card__header">
                            <span className="contact-policy-card__dot" />
                            <h3>{t('Inquiry Writing Guide', '문의 작성 가이드', 'お問い合わせ作成ガイド', '咨询撰写指南')}</h3>
                        </div>

                        <ul className="contact-policy-card__list">
                            <li>
                                {t(
                                    'Use a short and clear subject line that reflects your issue or request.',
                                    '문의 제목에는 문제 유형이나 요청 목적을 간단하고 명확하게 적어주세요.',
                                    '問題やリクエストを反映した、短く明確な件名を使用してください。',
                                    '使用简短明确的主题行，反映您的问题或请求。'
                                )}
                            </li>
                            <li>
                                {t(
                                    'If your issue involves an account, wallet, or transaction, provide enough relevant context for review.',
                                    '계정, 지갑, 거래 관련 문의라면 필요한 범위 내에서 식별 가능한 정보를 함께 남겨주세요.',
                                    'アカウント、ウォレット、または取引に関する問題の場合は、確認に必要な関連情報を提供してください。',
                                    '如果您的问题涉及账户、钱包或交易，请提供足够的背景信息以便审核。'
                                )}
                            </li>
                            <li>
                                {t(
                                    'For app issues, include screenshots or the exact steps needed to reproduce the problem.',
                                    '오류 화면이나 동작 문제가 있다면 스크린샷 또는 재현 순서를 함께 전달해 주세요.',
                                    'アプリの問題については、スクリーンショットや、問題を再現するために必要な正確な手順を含めてください。',
                                    '对于 App 问题，请包括截图或重现问题所需的确切步骤。'
                                )}
                            </li>
                            <li>
                                {t(
                                    'Security-related issues are best reported through the dedicated security contact channel.',
                                    '보안 관련 내용은 공개 채널보다 전용 보안 연락처를 사용하는 것이 좋습니다.',
                                    'セキュリティ関連の問題は、専用のセキュリティ連絡先チャネルを通じて報告することをお勧めします。',
                                    '安全相关问题最好通过专用安全联系渠道报告。'
                                )}
                            </li>
                        </ul>
                    </div>

                    <div className="contact-policy-card">
                        <div className="contact-policy-card__header">
                            <span className="contact-policy-card__dot" />
                            <h3>{t('Operating Guidance', '운영 안내', '運営案内', '运营指南')}</h3>
                        </div>

                        <div className="contact-policy-card__meta">
                            <div className="contact-policy-card__meta-item">
                                <span>{t('Processing', '처리 방식', '処理方式', '处理流程')}</span>
                                <strong>
                                    {t('Assigned by inquiry type', '문의 성격에 따라 담당 팀 배정', 'お問い合わせ内容に応じて担当チームを割り当て', '按咨询类型分配')}
                                </strong>
                            </div>

                            <div className="contact-policy-card__meta-item">
                                <span>{t('Priority Review', '우선 검토', '優先確認', '优先审核')}</span>
                                <strong>
                                    {t('Security and service-impacting issues', '보안 및 서비스 장애 관련 이슈', 'セキュリティおよびサービスに影響を与える問題', '安全和服务影响问题')}
                                </strong>
                            </div>

                            <div className="contact-policy-card__meta-item">
                                <span>{t('Recommended Content', '권장 내용', '推奨内容', '建议内容')}</span>
                                <strong>
                                    {t('Summary, timing, and evidence', '상황 설명, 시점, 증빙 자료', '概要、時期、および証拠資料', '摘要、时间和证明资料')}
                                </strong>
                            </div>
                        </div>
                    </div>
                </motion.section>

                <motion.section
                    className="contact-page__faq"
                    initial={{ opacity: 0, y: 26 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.72, delay: 0.28 }}
                >
                    <div className="contact-page__section-heading">
                        <span>{t('Helpful FAQ', '자주 확인하는 안내', '役立つFAQ', '有用 FAQ')}</span>
                        <h2>{t('Check these before reaching out', '문의 전 확인하면 더 빠릅니다', 'お問い合わせの前にこちらをご確認ください', '联系前请先查看这些内容')}</h2>
                    </div>

                    <div className="contact-faq-list">
                        {faqItems.map((item, index) => (
                            <article key={index} className="contact-faq-item">
                                <h3>{t(item.qEn, item.qKo, item.qJa, item.qZh)}</h3>
                                <p>{t(item.aEn, item.aKo, item.aJa, item.aZh)}</p>
                            </article>
                        ))}
                    </div>
                </motion.section>

                <motion.section
                    className="contact-page__cta"
                    initial={{ opacity: 0, y: 26 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.72, delay: 0.34 }}
                >
                    <div className="contact-page__cta-card">
                        <div className="contact-page__cta-copy">
                            <span>{t('More Guidance', '추가 안내', '追加の案内', '更多指南')}</span>
                            <h2>
                                {t(
                                    'You may also want to review policy and service pages before submitting an inquiry.',
                                    '문의와 함께 필요한 정책 및 서비스 페이지도 함께 확인해 보세요.',
                                    'お問い合わせを送信する前に、ポリシーやサービスページもご確認ください。',
                                    '在提交咨询之前，您可能还需要查阅政策和服务页面。'
                                )}
                            </h2>
                            <p>
                                {t(
                                    'Reviewing related pages beforehand can help you submit a more precise inquiry and reduce back-and-forth.',
                                    '보다 정확한 문의를 위해 관련 페이지를 함께 검토하면 문제 해결 속도를 높이는 데 도움이 됩니다.',
                                    '事前に関連ページを確認することで、より正確なお問い合わせが可能になり、やり取りを減らすことができます。',
                                    '提前查阅相关页面可以帮助您提交更准确的咨询并减少反复沟通。'
                                )}
                            </p>
                        </div>

                        <div className="contact-page__cta-actions">
                            <Link to="/support" className="contact-page__cta-button">
                                <span>{t('View Support Page', '지원 페이지 보기', 'サポートページを見る', '查看支持页面')}</span>
                                <ChevronRight size={16} />
                            </Link>

                            <Link to="/developers" className="contact-page__cta-button contact-page__cta-button--ghost">
                                <span>{t('View Developers Page', '개발자 페이지 보기', '開発者ページを見る', '查看开发者页面')}</span>
                                <ChevronRight size={16} />
                            </Link>
                        </div>
                    </div>
                </motion.section>
            </div>
        </div>
    );
}