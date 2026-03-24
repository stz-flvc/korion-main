import { motion } from 'motion/react';
import {
    BadgeCheck,
    Mic,
    MessageCircle,
    Radio,
    HeartHandshake,
    Gamepad2,
    Sparkles,
    Coins,
    ShieldCheck,
    Phone,
    MessagesSquare,
    Headphones,
    Trophy,
    Star,
    } from 'lucide-react';
    import { ImageWithFallback } from '../components/figma/ImageWithFallback';
    import { useLanguage } from '../contexts/LanguageContext';
    import './FoxyyaPage.css';
    import { useAssetUrl } from '../utils/assetLoader';
    import { FaGooglePlay, FaApple } from 'react-icons/fa';
    
    const serviceCards = [
    {
        icon: MessageCircle,
        titleEn: 'Community & Chat',
        titleKr: '커뮤니티 & 채팅',
        titleJa: 'コミュニティ＆チャット',
        titleZh: '社区与聊天',
        descEn:
        'Users can communicate through community spaces, chat features, and interactive participation flows built around real-time social engagement.',
        descKr:
        '사용자는 커뮤니티 공간과 채팅 기능을 통해 실시간 소셜 참여 중심의 상호작용을 경험할 수 있습니다.',
        descJa: 'ユーザーはコミュニティスペースやチャット機能を通じて、リアルタイムなソーシャルエンゲージメントを中心としたインタラクティブな参加フローを体験できます。',
        descZh: '用户可以通过围绕实时社交互动的社区空间、聊天功能和交互式参与流程进行沟通。',
    },
    {
        icon: HeartHandshake,
        titleEn: 'Family Group & Agency',
        titleKr: '패밀리그룹 & 에이전시',
        titleJa: 'ファミリーグループ＆エージェンシー',
        titleZh: '家族群组与机构',
        descEn:
        'Foxyya includes social organization layers such as family groups and agency structures that strengthen belonging, retention, and user-driven activity.',
        descKr:
        'Foxyya는 패밀리그룹과 에이전시 같은 조직형 구조를 포함하여 소속감, 체류시간, 사용자 중심 활동성을 강화합니다.',
        descJa: 'Foxyyaは、ファミリーグループやエージェンシー構造などの社会的組織レイヤーを含んでおり、帰属意識、リテンション、およびユーザー主導の活動を強化します。',
        descZh: 'Foxyya 包含社交组织层，如家族群组和机构结构，增强归属感、留存率和用户驱动的活动。',
    },
    {
        icon: Phone,
        titleEn: 'Random Call & Voice Matching',
        titleKr: '랜덤통화 & 음성 매칭',
        titleJa: 'ランダム通話＆音声マッチング',
        titleZh: '随机通话与语音匹配',
        descEn:
        'Users can discover and connect with others through random voice calls and matching-based interaction experiences.',
        descKr:
        '사용자는 랜덤 음성 통화와 매칭형 상호작용을 통해 새로운 연결과 참여를 경험할 수 있습니다.',
        descJa: 'ユーザーはランダム音声通話やマッチングベースの相互作用体験を通じて、他者を発見し繋がることができます。',
        descZh: '用户可以通过随机语音通话和基于匹配的互动体验发现并与他人建立联系。',
    },
    {
        icon: Radio,
        titleEn: 'Group Live & Personal Live',
        titleKr: '그룹라이브 & 개인라이브',
        titleJa: 'グループライブ＆個人ライブ',
        titleZh: '多人直播与个人直播',
        descEn:
        'Foxyya supports both personal live rooms and group-based live experiences, enabling a broad range of creator and community formats.',
        descKr:
        'Foxyya는 개인 라이브와 그룹 기반 라이브를 모두 지원하여 다양한 크리에이터 및 커뮤니티 운영 방식을 담을 수 있습니다.',
        descJa: 'Foxyyaは個人ライブルームとグループベースのライブ体験の両方をサポートし、幅広いクリエイターやコミュニティの形式を可能にします。',
        descZh: 'Foxyya 支持个人直播室和基于群组的直播体验，支持广泛的创作者和社区形式。',
    },
    {
        icon: Gamepad2,
        titleEn: 'Interactive Game Broadcasts',
        titleKr: '참여형 게임 방송',
        titleJa: '参加型ゲーム配信',
        titleZh: '互动游戏直播',
        descEn:
        'Live rooms can evolve beyond simple audio streams into participatory game experiences shared by hosts and members together.',
        descKr:
        '라이브룸은 단순한 음성 방송을 넘어 진행자와 회원이 함께 참여하는 게임형 콘텐츠 공간으로 확장될 수 있습니다.',
        descJa: 'ライブルームは単純なオーディオストリームを超えて、ホストとメンバーが共に共有する参加型ゲーム体験へと進化できます。',
        descZh: '直播间可以超越简单的音频流，演变为由主播和成员共同分享的参与式游戏体验。',
    },
    {
        icon: Sparkles,
        titleEn: 'Concert & Event Live Content',
        titleKr: '콘서트 & 이벤트 방송',
        titleJa: 'コンサート＆イベントライブコンテンツ',
        titleZh: '音乐会与活动直播内容',
        descEn:
        'The platform can support event-oriented and entertainment-oriented live content such as concerts, themed broadcasts, and special sessions.',
        descKr:
        '플랫폼은 콘서트, 테마 방송, 특별 세션과 같은 이벤트형·엔터테인먼트형 라이브 콘텐츠를 담을 수 있습니다.',
        descJa: 'プラットフォームは、コンサート、テーマ別放送、スペシャルセッションなどのイベント指向およびエンターテインメント指向のライブコンテンツをサポートできます。',
        descZh: '该平台可以支持面向活动和娱乐的实时内容，例如音乐会、主题广播和特别会议。',
    },
    ];

    const miningPoints = [
    {
        icon: Coins,
        titleEn: 'KORI Payment Utility',
        titleKr: 'KORI 결제 유틸리티',
        titleJa: 'KORI決済ユーティリティ',
        titleZh: 'KORI 支付实用性',
        descEn:
        'Foxyya is positioned as a service platform where payments can be made with KORION KORI, connecting entertainment and ecosystem utility.',
        descKr:
        'Foxyya는 KORION KORI로 결제가 가능한 서비스 플랫폼으로 설계되어, 엔터테인먼트와 생태계 유틸리티를 연결합니다.',
        descJa: 'FoxyyaはKORION KORIでの決済が可能なサービスプラットフォームとして位置づけられ、エンターテインメントとエコシステムのユーティリティを繋ぎます。',
        descZh: 'Foxyya 定位为一个可以使用 KORION KORI 进行支付的服务平台，将娱乐和生态系统实用性联系起来。',
    },
    {
        icon: Trophy,
        titleEn: 'Participation-Based Mining Efficiency',
        titleKr: '참여도 기반 채굴 효율 상승',
        titleJa: '参加ベースのマイニング効率向上',
        titleZh: '基于参与度的挖矿效率',
        descEn:
        'User participation inside the platform can be connected to mining efficiency, creating a stronger incentive structure across service activity.',
        descKr:
        '플랫폼 내 참여도는 채굴 효율 상승과 연결될 수 있어, 서비스 활동 전반에 더 강한 인센티브 구조를 형성합니다.',
        descJa: 'プラットフォーム内でのユーザー参加はマイニング効率と連携でき、サービス活動全体にわたってより強力なインセンティブ構造を構築します。',
        descZh: '平台内的用户参与可以与挖矿效率挂钩，在业务活动中建立更强大的激励结构。',
    },
    {
        icon: Mic,
        titleEn: 'Host Participation Mining',
        titleKr: '진행자 참여 채굴',
        titleJa: 'ホスト参加マイニング',
        titleZh: '主播参与挖矿',
        descEn:
        'Broadcast hosts can participate in the platform economy through activity, engagement, and audience-based contribution structures.',
        descKr:
        '방송 진행자는 활동성과 참여도, 청취자 반응 기반 구조를 통해 플랫폼 경제에 참여할 수 있습니다.',
        descJa: '配信ホストは、活動、エンゲージメント、および視聴者ベースの貢献構造を通じてプラットフォーム経済に参加できます。',
        descZh: '广播主播可以通过活动、参与和基于观众的贡献结构参与平台经济。',
    },
    {
        icon: Headphones,
        titleEn: 'Listener Participation Mining',
        titleKr: '청취자 참여 채굴',
        titleJa: 'リスナー参加マイニング',
        titleZh: '听众参与挖矿',
        descEn:
        'Listeners are not passive users. Through participation, engagement, and contribution, they can also connect to KORI mining opportunities.',
        descKr:
        '청취자는 단순 소비자가 아니라 참여와 활동, 기여를 통해 KORI 채굴과 연결될 수 있는 구조를 가집니다.',
        descJa: 'リスナーは受動的なユーザーではありません。参加、エンゲージメント、および貢献を通じて、KORIマイニングの機会に繋がることができます。',
        descZh: '听众不是被动的用户。通过参与、投入和贡献，他们也可以获得 KORI 挖矿机会。',
    },
    ];

    const ecosystemPoints = [
    {
        titleEn: 'Entertainment + Utility',
        titleKr: '엔터테인먼트 + 유틸리티',
        titleJa: 'エンターテインメント + ユーティリティ',
        titleZh: '娱乐 + 实用度',
        descEn:
        'Foxyya is not just a content service. It is designed as a platform where fun, participation, and token utility come together.',
        descKr:
        'Foxyya는 단순한 콘텐츠 서비스가 아니라 재미, 참여, 토큰 유틸리티가 함께 작동하는 플랫폼으로 설계됩니다.',
        descJa: 'Foxyyaは単なるコンテンツサービスではありません。楽しさ、参加、そしてトークンの実用性が一体となって機能するプラットフォームとして設計されています。',
        descZh: 'Foxyya 不仅仅是一项内容服务。它被设计为一个乐趣、参与和代币实用性相结合的平台。',
    },
    {
        titleEn: 'Service-Led Ecosystem Entry',
        titleKr: '서비스 중심 생태계 진입',
        titleJa: 'サービス主導のエコシステム参入',
        titleZh: '由业务引领的生态系统准入',
        descEn:
        'Users can encounter KORION naturally through service participation rather than through technical onboarding alone.',
        descKr:
        '사용자는 기술적 진입장벽이 아니라 실제 서비스 참여를 통해 자연스럽게 KORION 생태계를 경험할 수 있습니다.',
        descJa: 'ユーザーは技術的なオンボーディングだけでなく、サービスへの参加を通じて自然にKORIONに触れることができます。',
        descZh: '用户可以通过参与业务自然地接触 KORION，而不仅仅是通过技术引导。',
    },
    {
        titleEn: 'Retention Through Social Structure',
        titleKr: '소셜 구조 기반 체류시간 강화',
        titleJa: '社会的構造によるリテンションの強化',
        titleZh: '通过社交结构留存',
        descEn:
        'Community, family groups, live rooms, and content loops create a stronger long-term retention model.',
        descKr:
        '커뮤니티, 패밀리그룹, 라이브룸, 콘텐츠 순환 구조는 장기 체류를 강화하는 모델을 형성합니다.',
        descJa: 'コミュニティ、ファミリーグループ、ライブルーム、そしてコンテンツループが、より強固な長期リテンションモデルを構築します。',
        descZh: '社区、家族群组、直播间和内容循环建立了更强大的长期留存模型。',
    },
    ];

    export function FoxyyaPage() {
    const { t } = useLanguage();
    const foxyyaLogo = useAssetUrl(
        'foxyya-logo',
        () => import('../../assets/foxyya/foxyya-logo.png')
    );
    const foxyyaHomeImage = useAssetUrl(
        'foxyya-home-image',
        () => import('../../assets/foxyya/foxyya-home.png')
    );
    const foxyyaCommunityImage = useAssetUrl(
        'foxyya-community-image',
        () => import('../../assets/foxyya/foxyya-community.png')
    );

    return (
        <div className="foxyya-page">
        <section className="foxyya-hero">
            <div className="foxyya-hero__bg" />
            <div className="foxyya-hero__grid" />
            <div className="foxyya-page__container">
            <div className="foxyya-hero__content">
                <motion.div
                className="foxyya-hero__badge"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
                >
                <BadgeCheck size={16} />
                <span>{t('SOCIAL LIVE PLATFORM', '소셜 라이브 플랫폼', 'ソーシャルライブプラットフォーム', '社交直播平台')}</span>
                </motion.div>

                <motion.div
                className="foxyya-hero__brand"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{ duration: 0.7 }}
                >
                <ImageWithFallback src={foxyyaLogo || undefined} alt="Foxyya" className="foxyya-hero__logo" />
                <span className="foxyya-hero__brand-name">Foxyya</span>
                </motion.div>

                <motion.h1
                className="foxyya-hero__title"
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{ duration: 0.8 }}
                >
                {t(
                    'A participation-driven live social platform connected to KORION',
                    'KORION과 연결되는 참여형 라이브 소셜 플랫폼',
                    'KORIONと繋がる参加型ライブソーシャルプラットフォーム',
                    '与 KORION 联网的参与式实况社交平台'
                )}
                </motion.h1>

                <motion.p
                className="foxyya-hero__subtitle"
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{ duration: 0.84, delay: 0.08 }}
                >
                {t(
                    'Foxyya is a platform that brings together community, chat, family groups, agency systems, anonymous boards, random calls, group live, personal live, interactive game broadcasts, concert streams, and practical KORI utility into one service experience.',
                    'Foxyya는 커뮤니티, 채팅, 패밀리그룹, 에이전시, 익명게시판, 랜덤통화, 그룹라이브, 개인라이브, 참여형 게임방송, 콘서트방송, 그리고 실질적인 KORI 유틸리티를 하나의 서비스 경험으로 통합하는 플랫폼입니다.',
                    'Foxyyaは、コミュニティ、チャット、ファミリーグループ、エージェンシーシステム、匿名掲示板、ランダム通話、グループライブ、個人ライブ、参加型ゲーム配信、コンサート配信、そして実用的なKORIユーティリティを一つのサービス体験に統合するプラットフォームです。',
                    'Foxyya 是一个将社区、聊天、家族群组、机构系统、匿名版块、随机通话、多人直播、个人直播、互动游戏直播、音乐会流媒体和实用的 KORI 实用性整合为一种业务体验的平台。'
                )}
                </motion.p>

                <div className="foxyya-hero__actions">

                <a
                    href="https://play.google.com/store"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="foxyya-btn foxyya-btn--primary"
                >
                    <FaGooglePlay size={18} />
                    {t('Google Play (To be released)', '구글 플레이 (출시 예정)', 'Google Play（リリース予定）', 'Google Play（即将发布）')}
                </a>

                <a
                    href="https://apps.apple.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="foxyya-btn foxyya-btn--primary"
                >
                    <FaApple size={18} />
                    {t('App Store (To be released)', '앱스토어 (출시 예정)', 'App Store（リリース予定）', 'App Store（即将发布）')}
                </a>

                </div>

                <motion.div
                className="foxyya-hero__stats"
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.84, delay: 0.2 }}
                >
                <div className="foxyya-stat">
                    <strong>{t('KORI Payment', 'KORI 결제', 'KORI決済', 'KORI 支付')}</strong>
                    <span>{t('Utility inside service', '서비스 내 유틸리티', 'サービス内のユーティリティ', '业务内的实用性')}</span>
                </div>
                <div className="foxyya-stat">
                    <strong>{t('Participation Mining', '참여형 채굴', '参加型マイニング', '参与式挖矿')}</strong>
                    <span>{t('Hosts and listeners', '진행자와 청취자', 'ホストとリスナー', '主播与听众')}</span>
                </div>
                <div className="foxyya-stat">
                    <strong>{t('Social Live Ecosystem', '소셜 라이브 생태계', 'ソーシャルライブエコシステム', '社交直播生态系统')}</strong>
                    <span>{t('Community-driven retention', '참여 기반 체류 구조', 'コミュニティ主導のリテンション', '社区驱动的留存')}</span>
                </div>
                </motion.div>
            </div>

            <motion.div
                className="foxyya-hero__visual"
                initial={{ opacity: 0, scale: 0.96, y: 18 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.9 }}
            >
                <div className="foxyya-phone foxyya-phone--home">
                <div className="foxyya-phone__label">{t('Home', '홈', 'ホーム', '首页')}</div>
                <ImageWithFallback src={foxyyaHomeImage || undefined} alt="Foxyya Home" />
                </div>

                <div className="foxyya-phone foxyya-phone--community">
                <div className="foxyya-phone__label">{t('Community', '커뮤니티', 'コミュニティ', '社区')}</div>
                <ImageWithFallback src={foxyyaCommunityImage || undefined} alt="Foxyya Community" />
                </div>

                <div className="foxyya-floating-badge foxyya-floating-badge--pay">
                <Coins size={16} />
                <span>{t('KORI Payment', 'KORI 결제', 'KORI決済', 'KORI 支付')}</span>
                </div>

                <div className="foxyya-floating-badge foxyya-floating-badge--mine">
                <Sparkles size={16} />
                <span>{t('Participation Mining', '참여형 채굴', '参加型マイニング', '参与式挖矿')}</span>
                </div>
            </motion.div>
            </div>
        </section>

        <section className="foxyya-section">
            <div className="foxyya-page__container-01">
            <div className="foxyya-section__head">
                <span className="foxyya-section__label">{t('Platform Overview', '플랫폼 개요', 'プラットフォームの概要', '平台概览')}</span>
                <h2>
                {t(
                    'Foxyya is a service platform where community, voice, and participation meet',
                    'Foxyya는 커뮤니티, 음성, 참여가 만나는 서비스 플랫폼입니다',
                    'Foxyyaはコミュニティ、音声、そして参加が交わるサービスプラットフォームです',
                    'Foxyya 是一个社区、语音和参与相遇的业务平台'
                )}
                </h2>
                <p>
                {t(
                    'Rather than being limited to one function, Foxyya is designed as a multi-service platform where communication, live content, relationship building, and user activity gather into one structured ecosystem.',
                    'Foxyya는 하나의 기능에 머무르지 않고, 소통, 라이브 콘텐츠, 관계 형성, 사용자 활동이 하나의 구조화된 생태계 안으로 모이는 멀티서비스 플랫폼으로 설계됩니다.',
                    'Foxyyaは一つの機能に留まらず、コミュニケーション、ライブコンテンツ、関係構築、そしてユーザー活動が一つの構造化されたエコシステムに集まるマルチサービスプラットフォームとして設計されています。',
                    'Foxyya 不局限于单一功能，而被设计为一个多业务平台，在这里，沟通、直播内容、关系建立和用户活动汇聚成一个结构化的生态系统。'
                )}
                </p>
            </div>

            <div className="foxyya-service-grid">
                {serviceCards.map((item) => {
                const Icon = item.icon;
                return (
                    <motion.div
                    key={item.titleEn}
                    className="foxyya-service-card"
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.55 }}
                    >
                    <div className="foxyya-service-card__icon">
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

        <section className="foxyya-section foxyya-section--deep">
            <div className="foxyya-page__container-01">
            <div className="foxyya-section__head">
                <span className="foxyya-section__label">{t('KORI Utility', 'KORI 유틸리티', 'KORIユーティリティ', 'KORI 实用性')}</span>
                <h2>
                {t(
                    'Foxyya connects service activity with KORI payment and mining structure',
                    'Foxyya는 서비스 활동을 KORI 결제와 채굴 구조에 연결합니다',
                    'Foxyyaはサービス活動をKORI決済とマイニング構造に繋げます',
                    'Foxyya 将业务活动与 KORI 支付和挖矿结构联系起来'
                )}
                </h2>
                <p>
                {t(
                    'Inside Foxyya, KORION KORI is positioned not only as a token, but as a service-linked utility connected to payment, participation, and incentive design.',
                    'Foxyya 안에서 KORION KORI는 단순한 토큰이 아니라 결제, 참여, 인센티브 설계와 연결되는 서비스형 유틸리티로 자리잡습니다.',
                    'Foxyya内でのKORION KORIは単なるトークンではなく、決済、参加、そしてインセンティブ設計に繋がるサービス連携型ユーティリティとして位置づけられています。',
                    '在 Foxyya 内部，KORION KORI 不仅被定位为一种代币，还是一种与支付、参与和激励设计相连的业务联动实用工具。'
                )}
                </p>
            </div>

            <div className="foxyya-mining-grid">
                {miningPoints.map((item) => {
                const Icon = item.icon;
                return (
                    <div key={item.titleEn} className="foxyya-mining-card">
                    <div className="foxyya-mining-card__icon">
                        <Icon size={20} />
                    </div>
                    <h3>{t(item.titleEn, item.titleKr, item.titleJa, item.titleZh)}</h3>
                    <p>{t(item.descEn, item.descKr, item.descJa, item.descZh)}</p>
                    </div>
                );
                })}
            </div>
            </div>
        </section>

        <section className="foxyya-section">
            <div className="foxyya-page__container-01">
            <div className="foxyya-layout-grid">
                <div className="foxyya-preview-card">
                <div className="foxyya-preview-card__header">
                    <Mic size={18} />
                    <span>{t('Home Screen Inspiration', '홈 화면 구조', 'ホーム画面の構造', '主屏幕结构')}</span>
                </div>
                <ImageWithFallback src={foxyyaHomeImage || undefined} alt="Foxyya home preview" className="foxyya-preview-card__image" />
                <div className="foxyya-preview-card__text">
                    <h3>{t('Service Entry Hub', '서비스 진입 허브', 'サービス参入ハブ', '业务准入枢纽')}</h3>
                    <p>
                    {t(
                        'The home screen structure emphasizes service entry points such as caves, random calls, live sections, and category navigation to maximize intuitive participation.',
                        '홈 화면은 동굴, 랜덤통화, 라이브 섹션, 카테고리 탐색 등 서비스 진입 포인트를 전면에 배치하여 직관적인 참여를 강화합니다.',
                        'ホーム画面の構造は、洞窟、ランダム通話、ライブセクション、カテゴリーナビゲーションなどのサービス参入ポイントを強調し、直感的な参加を最大化します。',
                        '主屏幕结构强调了洞穴、随机通话、直播版块和类别导航等业务入口点，以最大限度地增强直观参与。'
                    )}
                    </p>
                </div>
                </div>

                <div className="foxyya-preview-card">
                <div className="foxyya-preview-card__header">
                    <MessagesSquare size={18} />
                    <span>{t('Community Screen Inspiration', '커뮤니티 화면 구조', 'コミュニティ画面の構造', '社区屏幕结构')}</span>
                </div>
                <ImageWithFallback
                    src={foxyyaCommunityImage}
                    alt="Foxyya community preview"
                    className="foxyya-preview-card__image"
                />
                <div className="foxyya-preview-card__text">
                    <h3>{t('Social Retention Layer', '소셜 체류 레이어', 'ソーシャルリテンションレイヤー', '社交留存层')}</h3>
                    <p>
                    {t(
                        'The community layout reflects a feed-based interaction model where follow relationships, posts, comments, and content sharing strengthen retention and participation.',
                        '커뮤니티 화면은 팔로우 관계, 게시글, 댓글, 공유를 중심으로 한 피드형 상호작용 구조를 통해 체류시간과 참여도를 강화합니다.',
                        'コミュニティのレイアウトは、フォロー関係、投稿、コメント、コンテンツ共有がリテンションと参加を強化するフィードベースの相互作用モデルを反映しています。',
                        '社区布局反映了基于动态的互动模型，其中关注关系、帖子、评论和内容共享增强了留存和参与。'
                    )}
                    </p>
                </div>
                </div>
            </div>
            </div>
        </section>

        <section className="foxyya-section foxyya-section--deep">
            <div className="foxyya-page__container-01">
            <div className="foxyya-section__head">
                <span className="foxyya-section__label">{t('Ecosystem Value', '생태계 가치', 'エコシステム価値', '生态系统价值')}</span>
                <h2>
                {t(
                    'Why Foxyya matters inside the KORION ecosystem',
                    '왜 Foxyya가 KORION 생태계 안에서 중요한가',
                    'なぜFoxyyaがKORIONエコシステムにおいて重要なのか',
                    '为什么 Foxyya 在 KORION 生态系统中很重要'
                )}
                </h2>
            </div>

            <div className="foxyya-value-list">
                {ecosystemPoints.map((item) => (
                <div key={item.titleEn} className="foxyya-value-item">
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

        <section className="foxyya-section">
            <div className="foxyya-page__container-01">
            <div className="foxyya-cta-box">
                <div className="foxyya-cta-box__label">
                <Star size={16} />
                <span>Foxyya</span>
                </div>
                <h2>
                {t(
                    'Entertainment, community, participation, and KORI utility in one platform',
                    '엔터테인먼트, 커뮤니티, 참여, 그리고 KORI 유틸리티가 하나의 플랫폼으로',
                    'エンターテインメント、コミュニティ、参加、そしてKORIユーティリティが一つのプラットフォームに',
                    '娱乐、社区、参与和 KORI 实用性整合于同一个平台'
                )}
                </h2>
                <p>
                {t(
                    'Foxyya is designed as a next-generation service platform where social live content and KORION ecosystem utility can grow together.',
                    'Foxyya는 소셜 라이브 콘텐츠와 KORION 생태계 유틸리티가 함께 성장할 수 있는 차세대 서비스 플랫폼으로 설계됩니다.',
                    'Foxyyaは、ソーシャルライブコンテンツとKORIONエコシステムユーティリティが共に成長できる次世代サービスプラットフォームとして設計されています。',
                    'Foxyya 被设计为下一代业务平台，在这里社交直播内容和 KORION 生态系统的实用性可以共同成长。'
                )}
                </p>

                <div className="foxyya-cta-box__actions">
                <a
                    href="https://play.google.com/store"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="foxyya-btn foxyya-btn--primary"
                >
                    <FaGooglePlay size={18} />
                    {t('Google Play', '구글 플레이', 'Google Play', 'Google Play')}
                </a>

                <a
                    href="https://apps.apple.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="foxyya-btn foxyya-btn--primary"
                >
                    <FaApple size={18} />
                    {t('App Store', '앱스토어', 'App Store', 'App Store')}
                </a>
                </div>
            </div>
            </div>
        </section>
        </div>
    );
    }
