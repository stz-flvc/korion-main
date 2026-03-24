import { motion } from 'motion/react';
import {
    ArrowRight,
    Building2,
    ChevronRight,
    Sparkles,
    Orbit,
    ShieldCheck,
    Layers3,
    Globe2,
} from 'lucide-react';
import { Link } from 'react-router';
import { useLanguage } from '../contexts/LanguageContext';
import './AboutPage.css';

const fadeUp = {
    initial: { opacity: 0, y: 36 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.18 },
    transition: { duration: 0.7, ease: 'easeOut' },
};

export function AboutPage() {
    const { t } = useLanguage();

    const identityItems = [
        t('Trust-Centered Structure', '신뢰 중심 구조', '信頼中心の構造', '以信任为中心的结构'),
        t('Utility Ecosystem', '실사용형 생태계', '実用的エコシステム', '实用型生态系统'),
        t('Scalable Design', '확장 가능한 설계', '拡張可能な設計', '可扩展设计'),
        t('Service Integration', '서비스 통합 방향', 'サービス統合の方向性', '服务整合方向'),
    ];

    const storyBlocks = [
        {
            no: '01',
            title: t('We Are Not Building Just a Token', '우리가 만드는 것은 단순한 토큰이 아닙니다', '私たちが作っているのは単なるトークンではありません', '我们构建的不仅仅是一个代币'),
            desc: t('KORION goes beyond the idea of a standalone digital asset. It is designed as an integrated ecosystem where mobile experience, asset custody, payment flow, and service connectivity operate within one structure. We focus on creating a system that feels natural to use, not one that requires users to decode the technology first.', 'KORION은 단순한 디지털 자산을 넘어, 모바일 경험, 자산 보관, 결제 흐름, 서비스 연동이 하나의 구조 안에서 이어지는 통합형 생태계를 지향합니다. 우리는 사용자가 기술을 이해해야만 사용할 수 있는 구조가 아니라, 자연스럽게 참여하고 활용할 수 있는 경험을 만드는 데 집중합니다.', 'KORIONは単なるスタンドアロンのデジタル資産の概念を超えています。モバイル体験、資産の保管、決済フロー、サービス接続性が1つの構造内で機能する統合エコシステムとして設計されています。ユーザーが技術を解読する必要がある構造ではなく、自然に参加し活用できる体験の創出に注力しています。', 'KORION超越了独立数字资产的概念。它被设计为一个集成的生态系统，移动体验、资产托管、支付流程和服务连接在同一个结构内运作。我们专注于创建一个使用自然的系统，而不是要求用户首先解码技术。'),
            icon: Layers3,
        },
        {
            no: '02',
            title: t('Technology Should Connect, Not Just Impress', '기술은 보여주기보다 연결되어야 합니다', 'テクノロジーは単に印象を与えるだけでなく、つながるべきです', '技术应该连接，而不仅仅是给人留下深刻印象'),
            desc: t('Rather than showcasing complexity for its own sake, KORION prioritizes architectural quality that can connect with real services. Usability, stability, brand trust, and long-term scalability all shape our technical philosophy.', 'KORION은 복잡한 기술을 과시하는 방식보다, 실제 서비스와 연결될 수 있는 구조적 완성도를 더 중요하게 생각합니다. 사용성, 안정성, 브랜드 신뢰, 그리고 장기적 확장성을 함께 고려하는 것이 우리의 기술 철학입니다.', 'KORIONは、複雑さを誇示するよりも、実際のサービスと連携できるアーキテクチャの質を重視します。使いやすさ、安定性、ブランドの信頼、そして長期的な拡張可能性のすべてが、私たちの技術哲学を形作っています。', '与其仅仅为了展示复杂性，KORION更优先考虑能够与真实服务建立联系的架构质量。可用性、稳定性、品牌信任和长期的可扩展性共同塑造了我们的技术哲学。'),
            icon: Orbit,
        },
        {
            no: '03',
            title: t('Brand and System Build Trust Together', '브랜드와 시스템은 함께 신뢰를 만듭니다', 'ブランドとシステムが共に信頼を築く', '品牌和系统共同建立信任'),
            desc: t('We do not believe technology alone defines ecosystem value. Trust is built through how a project appears, operates, and expands over time. KORION is designed to shape that full experience as one coherent system.', '우리는 생태계의 가치를 기술만으로 설명하지 않습니다. 프로젝트가 실제로 어떻게 보이고, 어떻게 운영되며, 어떤 방향으로 확장되는지까지 포함해 신뢰를 만들어야 한다고 생각합니다. KORION은 그 전체 경험을 설계하는 프로젝트입니다.', '私たちは技術だけがエコシステムの価値を決定するとは信じていません。信頼は、プロジェクトが時間が経つにつれてどのように見え、機能し、拡大するかを通じて構築されます。KORIONは、その全体的な体験を1つの首尾一貫したシステムとして形作るように設計されています。', '我们不认为技术本身定义了生态系统的价值。信任是通过项目随着时间推移如何展现、运作和扩展而建立的。KORION旨在将完整的体验塑造成一个连贯的系统。'),
            icon: ShieldCheck,
        },
    ];

    return (
        <main className="about-page">
            <section className="about-hero">
                <div className="about-hero__bg">
                    <div className="about-hero__glow about-hero__glow--one" />
                    <div className="about-hero__glow about-hero__glow--two" />
                    <div className="about-hero__grid" />
                </div>

                <div className="about-page__container about-hero__container">
                    <motion.div
                        className="about-hero__copy"
                        initial={{ opacity: 0, y: 34 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <div className="about-hero__eyebrow">
                            <Building2 size={16} />
                            <span>{t('ABOUT KORION', 'ABOUT KORION', 'KORIONについて', '关于KORION')}</span>
                        </div>

                        <h1 className="about-hero__title">
                            {t('Connecting Digital Assets, Payments, and Service Experience into One Brand Structure', '디지털 자산, 결제, 서비스 경험을 하나의 브랜드 구조로 연결합니다', 'デジタル資産、決済、サービス体験を1つのブランド構造に結びつける', '将数字资产、支付和服务体验连接成一个品牌结构')}
                        </h1>

                        <p className="about-hero__desc">
                            {t('KORION is an ecosystem project designed to unify mobile mining, digital wallet infrastructure, payment capability, and service connectivity into one continuous experience. We believe technology should feel usable, not merely complex.', 'KORION은 모바일 채굴, 디지털 지갑, 결제 인프라, 그리고 서비스 연동 경험을 하나의 흐름으로 설계하는 생태계 프로젝트입니다. 우리는 기술이 복잡하게 보이는 것이 아니라 자연스럽게 쓰이는 구조를 만듭니다.', 'KORIONは、モバイルマイニング、デジタルウォレットのインフラ、決済機能、サービス接続性を1つの連続した体験に統合するように設計されたエコシステムプロジェクトです。技術は単に複雑であるだけでなく、使えるものであるべきだと信じています。', 'KORION 是一个生态系统项目，旨在将移动挖矿、数字钱包基础设施、支付功能和服务连接统一为一个连续的体验。我们确信技术应该是可用的，而不仅仅是复杂的。')}
                        </p>

                        <div className="about-hero__actions">
                            <a href="#company-info" className="about-hero__btn about-hero__btn--primary">
                                <span>{t('View Company Info', '회사 정보 보기', '会社情報を見る', '查看公司信息')}</span>
                                <ChevronRight size={18} />
                            </a>

                            <Link to="/team" className="about-hero__btn about-hero__btn--ghost">
                                <span>{t('Meet the Team', '팀 소개 보기', 'チームに会う', '认识团队')}</span>
                            </Link>
                        </div>
                    </motion.div>

                </div>

                <div className="about-hero__scroll">
                    <span>{t('SCROLL', 'SCROLL', 'スクロール', '滚动')}</span>
                </div>
            </section>

            <section className="about-statement">
                <div className="about-page__container">
                    <motion.div className="about-statement__inner" {...fadeUp}>
                        <p className="about-statement__label">
                            {t('BRAND STATEMENT', 'BRAND STATEMENT', 'ブランドステートメント', '品牌声明')}
                        </p>
                        <h2 className="about-statement__quote">
                            {t('Technology becomes meaningful only when it becomes usable.', '기술은 실제로 쓰일 때 비로소 의미를 가집니다.', '技術は使えるようになって初めて意味を持つ。', '技术只有在可用时才有意义。')}
                        </h2>
                    </motion.div>
                </div>
            </section>

            <section className="about-why">
                <div className="about-page__container about-why__grid">
                    <motion.div className="about-why__left" {...fadeUp}>
                        <span className="about-why__kicker">{t('WHY KORION', 'WHY KORION', 'なぜKORIONなのか', '为什么选择KORION')}</span>
                        <h2>
                            {t('Why KORION Matters Now', 'KORION은 왜 지금 필요한가', '今、KORIONが重要である理由', '为什么现在需要KORION')}
                        </h2>
                    </motion.div>

                    <motion.div className="about-why__right" {...fadeUp}>
                        <p>
                            {t('The digital asset market continues to expand, but many projects still focus more on isolated functions or short-term attention than on real usability. KORION starts from the opposite direction. We focus on creating a structure where users can participate more easily through mobile, manage assets, and extend that experience into payments and services.', '디지털 자산 시장은 점점 더 커지고 있지만, 여전히 많은 프로젝트는 실제 사용 흐름보다 개별 기능이나 단기적 이슈에 집중합니다. KORION은 그 반대 방향에서 출발합니다. 우리는 사용자가 모바일 환경에서 더 쉽게 참여하고, 자산을 관리하고, 결제와 서비스로 이어질 수 있는 구조를 만드는 데 집중합니다.', 'デジタル資産市場は拡大し続けていますが、今でも多くのプロジェクトは、真の実用性よりも孤立した機能や短期的な注目を重視しています。KORIONは逆の方向から出発します。モバイルを通じてユーザーがより簡単に参加し、資産を管理し、その経験を決済やサービスに拡張できる構造の創造に重点を置いています。', '数字资产市场持续扩大，但许多项目仍然更多地关注孤立的功能或短期的注意力，而不是真实的可用性。KORION从相反的方向出发。我们专注于创建一个结构，让用户可以通过移动设备更轻松地参与，管理资产，并将这一经验扩展到支付和服务中。')}
                        </p>
                        <p>
                            {t('This page is not intended to list features. It is meant to show the philosophy and standards on which KORION is being built.', '이 페이지는 기능 목록을 나열하는 페이지가 아니라, KORION이 어떤 철학과 기준 위에서 만들어지고 있는지를 보여주는 공간입니다.', 'このページは機能のリストを載せるためのものではありません。KORIONがどのような哲学と基準に基づいて構築されているかを示すことを目的としています。', '这个页面并不是为了列出功能。它旨在展示构建KORION所依据的理念和标准。')}
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="about-story">
                <div className="about-page__container">
                    <div className="about-story__list">
                        {storyBlocks.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <motion.article
                                    key={item.no}
                                    className="about-story__item"
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.18 }}
                                    transition={{ duration: 0.7, delay: index * 0.08 }}
                                >
                                    <div className="about-story__no">{item.no}</div>

                                    <div className="about-story__content">
                                        <div className="about-story__icon">
                                            <Icon size={22} />
                                        </div>
                                        <h3>{item.title}</h3>
                                        <p>{item.desc}</p>
                                    </div>
                                </motion.article>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="about-identity">
                <div className="about-identity__track">
                    {identityItems.concat(identityItems).map((item, index) => (
                        <div key={`${item}-${index}`} className="about-identity__item">
                            <span>{item}</span>
                        </div>
                    ))}
                </div>
            </section>

            <section className="about-signature">
                <div className="about-page__container">
                    <motion.div className="about-signature__panel" {...fadeUp}>
                        <div className="about-signature__header">
                            <span>{t('KORION SIGNATURE', 'KORION SIGNATURE', 'KORIONシグネチャー', 'KORION签名')}</span>
                            <h2>
                                {t('We Design One Experience, Not Just Separate Features', '하나의 기능이 아니라, 하나의 경험을 설계합니다', '個別の機能だけでなく、一つの体験をデザインする', '我们设计一种体验，而不仅仅是独立的功能')}
                            </h2>
                        </div>

                        <div className="about-signature__layout">
                            <div className="about-signature__visual">
                                <div className="about-signature__sphere" />
                                <div className="about-signature__beam about-signature__beam--one" />
                                <div className="about-signature__beam about-signature__beam--two" />
                            </div>

                            <div className="about-signature__copy">
                                <p>
                                    {t('Mobile mining, digital asset custody, payment flow, and service connectivity are not treated as separate functions inside KORION. They are designed to feel like one continuous brand experience.', '모바일 채굴, 디지털 자산 보관, 결제 흐름, 서비스 연동은 KORION 안에서 분리된 기능이 아닙니다. 우리는 이 모든 요소가 하나의 브랜드 경험처럼 자연스럽게 이어지도록 설계합니다.', 'モバイルマイニング、デジタル資産保管、決済フロー、およびサービス接続性は、KORIONの内部で個別の機能として扱われません。1つの連続したブランド体験のように感じられるように設計されています。', '移动挖矿、数字资产托管、支付流程和服务连接在KORION内部并不被视为独立的功能。它们被设计为一种连续的品牌体验。')}
                                </p>

                                <ul className="about-signature__points">
                                    <li>
                                        <Globe2 size={16} />
                                        <span>{t('Connected to real-world usage', '실생활과 연결되는 구조', '実社会の利用に直結', '连接现实世界应用')}</span>
                                    </li>
                                    <li>
                                        <ShieldCheck size={16} />
                                        <span>{t('Trust-led direction', '신뢰를 우선하는 방향', '信頼主導の方向性', '信誉导向的方向')}</span>
                                    </li>
                                    <li>
                                        <Layers3 size={16} />
                                        <span>{t('Integrated design built for expansion', '확장을 고려한 통합 설계', '拡張のために構築された統合設計', '为扩展构建的整体设计')}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section id="company-info" className="about-company">
                <div className="about-page__container">
                    <motion.div className="about-company__wrap" {...fadeUp}>
                        <div className="about-company__header">
                            <span>{t('COMPANY INFORMATION', 'COMPANY INFORMATION', '会社情報', '公司信息')}</span>
                            <h2>{t('Company Information', '회사 정보', '会社情報', '公司信息')}</h2>
                            <p className="about-company__lead">
                                {t('KORION is designing a new standard for a globally accessible digital reserve currency. By connecting mobile participation, digital asset infrastructure, payment networks, and service ecosystems into one unified flow, KORION aims to build a global value exchange system beyond the boundaries of borders and platforms.', 'KORION은 전 세계 누구나 쉽게 접근하고 사용할 수 있는 디지털 기축 통화의 새로운 표준을 설계합니다. 모바일 참여, 디지털 자산 인프라, 결제 네트워크, 그리고 서비스 생태계를 하나의 흐름으로 연결하여 국경과 플랫폼의 경계를 넘어서는 글로벌 가치 교환 시스템 구축을 목표로 합니다.', 'KORIONは、全世界からアクセス可能なデジタル準備通貨の新しい基準を設計しています。モバイルでの参加、デジタル資産インフラ、決済ネットワーク、およびサービス・エコシステムを一つの統一された流れに接続することで、国境やプラットフォームの境界を超えたグローバルな価値交換システムの構築を目指します。', 'KORION正在为全球可用的数字储备货币设计一个新标准。通过将移动参与、数字资产基础设施、支付网络和服务生态系统整合为统一体系，KORION旨在建立超越国界和平台边界的全球价值交换系统。')}
                            </p>
                        </div>

                        <div className="about-company__content">
                            <div className="about-company__message">
                                <div className="about-company__message-box">
                                    <p className="about-company__message-label">
                                        {t('OUR DIRECTION', 'OUR DIRECTION', '私たちの方向性', '我们的方向')}
                                    </p>
                                    <h3>
                                        {t('Accessible, Fast, and Built for Everyone', '쉽고 빠르게, 그리고 누구나 사용할 수 있도록', 'アクセスしやすく、速く、誰もが利用できる', '易获取、快捷并为所有人设计')}
                                    </h3>
                                    <p>
                                        {t('Technology can become more complex, but the experience of using it should become more intuitive. KORION is designed so that digital assets evolve from a niche technology into a value exchange medium that anyone in the world can use naturally.', '기술은 더 복잡해질 수 있지만, 사용 경험은 더 직관적이어야 합니다. KORION은 디지털 자산이 일부 사용자만을 위한 기술이 아니라, 전 세계 누구나 자연스럽게 사용할 수 있는 가치 교환 수단이 되도록 설계된 프로젝트입니다.', '技術はより複雑になる可能性がありますが、それを使用する体験はより直感的になるはずです。デジタル資産が一部の人々のための技術から、世界中の誰でも自然に使える価値交換手段へと進化するように、KORIONは設計されています。', '技术的发展可能更复杂，但其使用体验应该更加直观。KORION旨在将数字资产从小众技术发展为世界任何人都可以自然使用的价值交换媒介。')}
                                    </p>
                                </div>
                            </div>

                            <div className="about-company__grid">
                                <div className="about-company__item">
                                    <label>{t('Company Name', '회사명', '会社名', '公司名称')}</label>
                                    <strong>
                                        {t('Dianainteen Company Co., Ltd.', '주식회사 다이아나인틴컴퍼니', '株式会社ダイアナインティーンカンパニー', 'Dianainteen Company Co., Ltd.')}
                                    </strong>
                                </div>

                                <div className="about-company__item">
                                    <label>{t('Industry', '산업 분야', '産業分野', '行业')}</label>
                                    <strong>
                                        {t('Blockchain Technology / Digital Asset Infrastructure', '블록체인 기술 / 디지털 자산 인프라', 'ブロックチェーン技術 / デジタル資産インフラ', '区块链技术 / 数字资产基础设施')}
                                    </strong>
                                </div>

                                <div className="about-company__item">
                                    <label>{t('Core Focus', '핵심 영역', '主な事業分野', '核心关注区')}</label>
                                    <strong>
                                        {t('Mobile Mining · Digital Wallet · Payment Infrastructure · Service Ecosystem', '모바일 채굴 · 디지털 지갑 · 결제 인프라 · 서비스 생태계', 'モバイルマイニング · デジタルウォレット · 決済インフラ · サービスエコシステム', '移动挖矿 · 数字钱包 · 支付基础设施 · 服务生态系统')}
                                    </strong>
                                </div>

                                <div className="about-company__item">
                                    <label>{t('Project Category', '프로젝트 성격', 'プロジェクトの種類', '项目类别')}</label>
                                    <strong>
                                        {t('Utility-Driven Global Digital Asset Ecosystem', '실사용 중심 글로벌 디지털 자산 생태계', '実用性重視のグローバルなデジタル資産エコシステム', '效用驱动的全球数字资产生态系统')}
                                    </strong>
                                </div>

                                <div className="about-company__item">
                                    <label>{t('Strategic Direction', '운영 방향', '戦略の方向性', '战略方向')}</label>
                                    <strong>
                                        {t('A Digital Reserve Currency Structure Accessible Worldwide', '전 세계 누구나 쉽게 사용할 수 있는 디지털 기축 통화 구조', '全世界でアクセス可能なデジタル準備通貨の構造', '全球可获取的数字储备货币结构')}
                                    </strong>
                                </div>

                                <div className="about-company__item">
                                    <label>{t('Brand Philosophy', '브랜드 철학', 'ブランド哲学', '品牌哲学')}</label>
                                    <strong>
                                        {t('Turning Complex Technology into Intuitive Experience', '복잡한 기술을 직관적인 경험으로 전환', '複雑な技術を直感的な体験に変える', '将复杂技术转化为直观体验')}
                                    </strong>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div className="about-company__cta" {...fadeUp}>
                        <Link to="/team" className="about-company__link">
                            <span>{t('Explore Leadership and Team', '리더십과 팀 소개 보기', 'リーダーシップとチームを見る', '探索领导和团队')}</span>
                            <ArrowRight size={18} />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
