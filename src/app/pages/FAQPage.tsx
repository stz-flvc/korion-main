import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowRight,
    BadgeCheck,
    ChevronDown,
    FileText,
    HelpCircle,
    LockKeyhole,
    ShieldCheck,
    Sparkles,
    Wallet,
    Globe,
    Layers3,
    Users,
    } from "lucide-react";
    import { Link } from "react-router";
    import { useLanguage } from "../contexts/LanguageContext";
    import "./FAQPage.css";

    type FaqItem = {
    category: string;
    icon: React.ElementType;
    questionKr: string;
    questionEn: string;
    questionJa: string;
    questionZh: string;
    answerKr: string;
    answerEn: string;
    answerJa: string;
    answerZh: string;
    };

    const faqItems: FaqItem[] = [
    {
        category: "project",
        icon: Sparkles,
        questionKr: "KORION은 어떤 방향의 프로젝트인가요?",
        questionEn: "What direction is KORION pursuing as a project?",
        questionJa: "KORIONはどのような方向性のプロジェクトですか？",
        questionZh: "KORION 是什么方向的项目？",
        answerKr:
        "KORION은 단순한 토큰 발행에 머무르지 않고, 결제, 지갑, 생태계 서비스, 브랜드 확장성을 하나의 구조 안에서 연결하는 방향을 지향합니다. 프로젝트의 핵심은 실사용 기반의 확장성과 일관된 서비스 경험에 있습니다.",
        answerEn:
        "KORION aims to go beyond simple token issuance by connecting payments, wallets, ecosystem services, and brand scalability within one integrated structure. Its core focus is practical utility expansion and a consistent service experience.",
        answerJa: "KORIONは単なるトークン発行にとどまらず、決済、ウォレット、エコシステムサービス、ブランドの拡張性を一つの構造の中で結びつける方向を目指しています。プロジェクトの核心は、実利用に基づいた拡張性と一貫したサービス体験にあります。",
        answerZh: "KORION 不仅仅局限于代币发行，而是致力于在统一结构中连接支付、钱包、生态系统服务和品牌扩展性。项目的核心在于基于实际应用的扩展性和一致的服务体验。",
    },
    {
        category: "project",
        icon: Layers3,
        questionKr: "KORION 생태계는 무엇을 중심으로 확장되나요?",
        questionEn: "What is the KORION ecosystem expanding around?",
        questionJa: "KORIONエコシステムは何を中心に拡張されますか？",
        questionZh: "KORION 生态系统围绕什么进行扩展？",
        answerKr:
        "KORION 생태계는 지갑 경험, 디지털 결제, 서비스 연계성, 커뮤니티 확장성을 중심으로 설계됩니다. 단순 보유형 자산이 아니라 실제 서비스 흐름과 연결되는 구조가 중요하게 다뤄집니다.",
        answerEn:
        "The KORION ecosystem is designed around wallet experience, digital payments, service connectivity, and community scalability. The emphasis is not on passive holding alone, but on building a structure tied to actual service flows.",
        answerJa: "KORIONエコシステムは、ウォレット体験、デジタル決済、サービスの連携、コミュニティの拡張性を中心に設計されています。単なる保有型の資産ではなく、実際のサービスフローと結びついた構造が重要視されています。",
        answerZh: "KORION 生态系统围绕钱包体验、数字支付、服务关联性和社区扩展性进行设计。重点不仅在于被动持有资产，更在于构建与实际服务流程挂钩的结构。",
    },

    {
        category: "investor",
        icon: BadgeCheck,
        questionKr: "투자자 입장에서 가장 먼저 확인해야 할 것은 무엇인가요?",
        questionEn: "What should investors review first?",
        questionJa: "投資家の立場で最初に確認すべきことは何ですか？",
        questionZh: "作为投资者，首先应该确认什么？",
        answerKr:
        "투자자 입장에서는 프로젝트가 무엇을 해결하려는지, 어떤 서비스 구조를 가지고 있는지, 브랜드와 운영 방향이 일관적인지 먼저 확인하는 것이 중요합니다. 백서, 로드맵, 기술 구조, 보안 정책, 서비스 연결성을 함께 보는 것이 바람직합니다.",
        answerEn:
        "From an investor perspective, it is important to first review what problem the project aims to address, how its service structure is designed, and whether its branding and operational direction are consistent. Reviewing the whitepaper, roadmap, technical structure, security posture, and service connectivity together is recommended.",
        answerJa: "投資家の視点からは、プロジェクトが何を解決しようとしているのか、どのようなサービス構造を持っているのか、ブランドと運営の方向性が一貫しているのかをまず確認することが重要です。ホワイトペーパー、ロードマップ、技術構造、セキュリティポリシー、サービスの連携を合わせて見ることが望ましいです。",
        answerZh: "从投资者的角度来看，首先确认项目旨在解决什么问题、具备什么样的服务结构以及品牌与运营方向是否一致至关重要。建议同时查看白皮书、路线图、技术结构、安全政策和服务关联性。",
    },
    {
        category: "investor",
        icon: ShieldCheck,
        questionKr: "KORION은 신뢰성을 어떻게 보여주나요?",
        questionEn: "How does KORION present credibility?",
        questionJa: "KORIONはどのように信頼性を示していますか？",
        questionZh: "KORION 如何展示其可信度？",
        answerKr:
        "신뢰성은 단순 홍보 문구보다 구조적 완성도에서 나옵니다. KORION은 페이지 구성, 문서화, 브랜드 정리, 기술 정보, 운영 흐름, 보안 관련 설명을 통해 프로젝트의 방향성과 준비도를 일관되게 전달하는 방식이 중요합니다.",
        answerEn:
        "Credibility comes more from structural completeness than from promotional language. KORION emphasizes consistent presentation of its direction and readiness through page architecture, documentation, brand consistency, technical information, operational flow, and security-related communication.",
        answerJa: "信頼性は単純な宣伝文句よりも、構造的な完成度から生まれます。KORIONは、ページ構成、ドキュメント化、ブランドの整理、技術情報、運営フロー、セキュリティに関する説明を通じて、プロジェクトの方向性と準備状況を一貫して伝えるアプローチを重視しています。",
        answerZh: "可信度更多来自结构的完整性，而非简单的宣传标语。KORION 注重通过页面布局、文档化、品牌整合、技术信息、运营流程及安全相关说明，一致地传达项目的方向和准备程度。",
    },
    {
        category: "investor",
        icon: Sparkles,
        questionKr: "KORION이 장기적으로 주목받을 수 있는 이유는 무엇인가요?",
        questionEn: "Why does KORION have long-term attention potential?",
        questionJa: "KORIONが長期的に注目される理由は何ですか？",
        questionZh: "为什么 KORION 具备长期关注的潜力？",
        answerKr:
        "KORION의 강점은 단기 이슈성보다도 구조적 확장 가능성에 있습니다. 프로젝트는 단순 토큰 중심이 아니라 지갑, 결제, 서비스 연결, 브랜드 경험, 문서화된 구조를 함께 갖추는 방향으로 확장될 수 있습니다. 투자자 관점에서는 이러한 다층적 연결 구조가 장기적인 관심과 지속 가능성을 판단하는 중요한 요소가 됩니다.",
        answerEn:
        "KORION’s strength lies not in short-term visibility, but in its structural expansion potential. The project can grow beyond a token-centered model into a broader framework involving wallet experience, payments, service connectivity, brand experience, and documented structure. From an investor perspective, this layered architecture is an important factor in assessing long-term relevance and sustainability.",
        answerJa: "KORIONの強みは、短期的な話題性よりも構造的な拡張の可能性にあります。プロジェクトは単なるトークン中心ではなく、ウォレット、決済、サービスの連携、ブランド体験、ドキュメント化された構造を兼ね備える方向で拡張できます。投資家の観点からは、このような多層的な連携構造が、長期的な関心と持続可能性を判断する重要な要素となります。",
        answerZh: "KORION 的优势不在于短期的话题性，而在于结构的扩展潜力。该项目不仅仅以代币为中心，还可以向钱包、支付、服务对接、品牌体验及文档化结构等方向扩展。从投资者的角度来看，这种多层关联结构是判断长期关注度和可持续性的重要因素。",
    },
    {
        category: "investor",
        icon: BadgeCheck,
        questionKr: "KORION은 단순한 토큰 프로젝트와 무엇이 다른가요?",
        questionEn: "What differentiates KORION from a simple token project?",
        questionJa: "KORIONは単なるトークンプロジェクトと何が違うのですか？",
        questionZh: "KORION 与简单的代币项目有什么不同？",
        answerKr:
        "KORION은 단순 발행과 거래만을 위한 구조보다, 실제 사용자 접점과 서비스 경험을 함께 만드는 방향성이 중요합니다. 지갑, 결제 확장성, 문서 구조, 개발자 페이지, 브랜드 자산, 커뮤니티 연결성 등은 프로젝트가 단순 자산이 아니라 하나의 서비스 생태계로 발전하려는 흐름을 보여줍니다.",
        answerEn:
        "KORION is shaped around more than issuance and trading. Its direction emphasizes real user touchpoints and service experience. The presence of wallet potential, payment expansion, documentation structure, developer materials, brand assets, and community linkage reflects an effort to grow beyond a simple asset into a service ecosystem.",
        answerJa: "KORIONは単なる発行と取引のための構造よりも、実際のユーザー接点とサービス体験を共に創り出す方向性が重要です。ウォレット、決済の拡張性、ドキュメント構造、開発者ページ、ブランド資産、コミュニティの連携などは、プロジェクトが単なる資産ではなく、一つのサービスエコシステムとして発展しようとする流れを示しています。",
        answerZh: "KORION 不仅仅是发行和交易，更重要的是建立实际的用户触点和服务体验的方向。钱包、支付扩展性、文档结构、开发者页面、品牌资产和社区连接等展示了项目从单一资产向服务生态系统转化的趋势。",
    },
    {
        category: "investor",
        icon: Wallet,
        questionKr: "KORION App은 투자자에게 왜 중요한 요소인가요?",
        questionEn: "Why is the KORION App important from an investor perspective?",
        questionJa: "KORIONアプリは投資家にとってなぜ重要な要素なのですか？",
        questionZh: "为什么 KORION App 是投资者的重要考量因素？",
        answerKr:
        "앱은 단순한 사용자 화면이 아니라 프로젝트의 실사용성과 접점 구조를 보여주는 핵심 요소입니다. 사용자가 실제로 접속하고 경험하고 반복적으로 이용할 수 있는 플랫폼이 존재할수록 프로젝트의 지속성은 더 강하게 인식됩니다. 투자자 입장에서는 앱이 있다는 사실보다, 앱이 생태계 확장의 중심이 될 수 있다는 점이 더 중요합니다.",
        answerEn:
        "An app is more than a user interface. It is a core signal of practical utility and user touchpoint structure. The stronger the platform is as a place where users can engage repeatedly and meaningfully, the more sustainable the project appears. For investors, the key point is not merely that an app exists, but that it can serve as a hub for ecosystem expansion.",
        answerJa: "アプリは単なるユーザー画面ではなく、プロジェクトの実用性と接点構造を示す核心的な要素です。ユーザーが実際にアクセスし、体験し、繰り返し利用できるプラットフォームが存在するほど、プロジェクトの持続性はより強く認識されます。投資家の立場からは、アプリがあるという事実よりも、アプリがエコシステム拡張の中心になり得るという点がより重要です。",
        answerZh: "App 不仅仅是一个用户界面，它是展示项目实用性和触点结构的核心要素。拥有一个用户可以实际访问、体验并重复使用的平台，会显著增强对项目可持续性的认可。对于投资者而言，App 的存在本身并不重要，重要的是它能否成为生态扩展的核心。",
    },
    {
        category: "investor",
        icon: Layers3,
        questionKr: "투자자는 KORION의 어떤 확장 가능성을 볼 수 있나요?",
        questionEn: "What type of expansion potential can investors see in KORION?",
        questionJa: "投資家はKORIONにどのような拡張の可能性を見出すことができますか？",
        questionZh: "投资者可以从 KORION 中看到什么样的扩展潜力？",
        answerKr:
        "투자자는 KORION에서 기능 확장, 서비스 연계, 브랜드 확장, 커뮤니티 성장, 파트너 연결 가능성을 함께 볼 수 있습니다. 단일 기능이 아닌 복합적인 확장 구조를 가진 프로젝트는 시장 내에서 더 다양한 방향으로 가치가 형성될 수 있으며, KORION은 이러한 가능성을 담을 수 있는 기반을 갖추는 방향으로 해석할 수 있습니다.",
        answerEn:
        "Investors can view KORION through multiple dimensions of expansion: feature growth, service integration, brand scalability, community development, and partnership potential. Projects with multi-layered expansion pathways can create value across more than one direction in the market, and KORION can be interpreted as building a foundation for that kind of opportunity.",
        answerJa: "投資家はKORIONにおいて、機能拡張、サービスの連携、ブランドの拡張、コミュニティの成長、パートナーとの連携の可能性を共に見ることができます。単一の機能ではなく複合的な拡張構造を持つプロジェクトは、市場内でより多様な方向に価値が形成される可能性があり、KORIONはこのような可能性を内包できる基盤を整える方向であると解釈できます。",
        answerZh: "投资者可以从 KORION 中看到功能扩展、服务关联、品牌扩展、社区增长及合作伙伴连接的潜力。拥有复合扩展结构而非单一功能的项目在市场中更具多向价值形成的潜力，KORION 正朝着建立这一潜力的基础方向发展。",
    },
    {
        category: "investor",
        icon: ShieldCheck,
        questionKr: "KORION의 브랜드와 페이지 구조가 왜 투자 판단에 도움이 되나요?",
        questionEn: "Why do brand and page structure matter in investment evaluation?",
        questionJa: "KORIONのブランドとページ構造が、なぜ投資判断に役立つのですか？",
        questionZh: "为什么 KORION 的品牌和页面结构有助于投资决策？",
        answerKr:
        "프로젝트의 브랜드와 페이지 구조는 단순 디자인 문제가 아니라, 준비도와 정보 전달 능력을 보여주는 신호입니다. 잘 정리된 홈페이지, 백서, FAQ, 미디어 키트, 개발자 자료는 프로젝트가 외부 이해관계자에게 무엇을 어떻게 설명할지 준비되어 있음을 보여줍니다. 투자자에게 이는 구조적 신뢰의 일부로 작용할 수 있습니다.",
        answerEn:
        "Brand and page structure are not just design matters. They signal readiness and communication discipline. A well-organized homepage, whitepaper, FAQ, media kit, and developer materials show that the project is prepared to explain itself clearly to external stakeholders. For investors, this can contribute meaningfully to structural trust.",
        answerJa: "プロジェクトのブランドとページ構造は、単なるデザインの問題ではなく、準備状況と情報伝達能力を示すシグナルです。整理されたウェブサイト、ホワイトペーパー、FAQ、メディアキット、開発者向け資料は、プロジェクトが外部の利害関係者に何をどのように説明するか準備ができていることを示しています。投資家にとって、これは構造的な信頼の一部として機能します。",
        answerZh: "项目的品牌和页面结构不仅仅是设计问题，而是展示准备程度和信息传递能力的信号。井井有条的官网、白皮书、FAQ、媒体工具包和开发者资料表明该项目已准备好如何向外部利益相关者进行说明。对投资者而言，这构成了结构性信任的一部分。",
    },
    {
        category: "investor",
        icon: Sparkles,
        questionKr: "왜 지금 KORION을 검토할 만한 시점인가요?",
        questionEn: "Why is now a meaningful time to review KORION?",
        questionJa: "なぜ今、KORIONを検討すべき時期なのですか？",
        questionZh: "为什么现在是审查 KORION 的有意义的时机？",
        answerKr:
        "투자자는 보통 프로젝트가 충분히 대중화된 이후보다, 구조와 방향성이 정리되어 가는 초기에 더 큰 관심을 가집니다. KORION은 브랜드, 문서, 서비스 연결 구조, 개발자 자료, 생태계 방향성을 함께 정리해 가는 흐름을 보여줄 수 있으며, 이러한 단계는 프로젝트를 선제적으로 검토하려는 투자자에게 중요한 관찰 포인트가 됩니다.",
        answerEn:
        "Investors often become most interested not after a project is already fully mainstream, but during the stage when its structure and direction are becoming clearly organized. KORION can present a developing framework across brand, documentation, service linkage, developer resources, and ecosystem direction, making this stage a meaningful point of review for early evaluators.",
        answerJa: "投資家は通常、プロジェクトが十分に普及した後よりも、構造と方向性が整理されつつある初期段階により大きな関心を持ちます。KORIONは、ブランド、ドキュメント、サービスの連携構造、開発者向け資料、エコシステムの方向性を共に整理していく流れを示すことができ、このような段階はプロジェクトを先んじて検討しようとする投資家にとって重要な観察ポイントとなります。",
        answerZh: "投资者通常在项目结构和方向初步整理成型的早期阶段比其广泛普及后更感兴趣。KORION 正在同步梳理品牌、文档、服务关联结构、开发者资料和生态方向，这一阶段对于想要抢先审查项目的投资者来说是关键的观察点。",
    },
    {
        category: "investor",
        icon: BadgeCheck,
        questionKr: "투자자가 KORION에서 가장 주의 깊게 봐야 할 성장 신호는 무엇인가요?",
        questionEn: "What growth signals should investors watch most closely in KORION?",
        questionJa: "投資家がKORIONで最も注意深く見るべき成長のシグナルは何ですか？",
        questionZh: "投资者应最密切关注 KORION 的哪些增长信号？",
        answerKr:
        "투자자는 단순 가격보다 프로젝트가 실제로 확장될 수 있는 신호를 더 중요하게 봅니다. 예를 들어 서비스 연결성, 앱 및 지갑 접점, 문서 완성도, 커뮤니티 반응, 브랜드 정리 수준, 외부 협업 가능성 등은 프로젝트의 성장 방향을 판단하는 핵심 지표가 될 수 있습니다. KORION은 이러한 구조적 신호를 축적해 나갈 수 있는 프로젝트로 해석될 수 있습니다.",
        answerEn:
        "Investors often prioritize signals of real expansion over price alone. Examples include service connectivity, wallet and app touchpoints, documentation maturity, community response, brand consistency, and external collaboration potential. These can serve as key indicators of growth direction, and KORION can be viewed as a project building toward those structural signals.",
        answerJa: "投資家は単純な価格よりも、プロジェクトが実際に拡張できるシグナルをより重視します。例えば、サービスの連携、アプリやウォレットの接点、ドキュメントの完成度、コミュニティの反応、ブランドの整理レベル、外部との協力の可能性などは、プロジェクトの成長の方向を判断する核心的な指標となり得ます。KORIONは、このような構造的なシグナルを蓄積していけるプロジェクトであると解釈できます。",
        answerZh: "投资者往往比单纯的价格更看重项目实际扩展的信号。例如，服务关联性、App 和钱包触点、文档成熟度、社区反应、品牌整合水平及外部合作潜力等，都是判断项目增长方向的核心指标。KORION 可以被视为能够持续积累这些结构化信号的项目。",
    },
    {
        category: "investor",
        icon: Layers3,
        questionKr: "KORION이 시장에서 더 크게 확장될 수 있는 이유는 무엇인가요?",
        questionEn: "What could allow KORION to scale more meaningfully in the market?",
        questionJa: "KORIONが市場でより大きく拡張できる理由は何ですか？",
        questionZh: "什么能让 KORION 在市场中更有意义地扩展？",
        answerKr:
        "시장에서 더 크게 확장되는 프로젝트는 단일 기능보다 복합적인 접점을 갖는 경우가 많습니다. KORION은 지갑, 결제, 서비스 연계, 브랜드 자산, 커뮤니티, 문서화 구조를 함께 갖추는 방향으로 확장될 수 있어, 단순 토큰을 넘어 하나의 서비스형 생태계로 인식될 여지가 있습니다. 이러한 점은 투자자에게 장기 검토 포인트가 될 수 있습니다.",
        answerEn:
        "Projects that scale more meaningfully in the market often build multiple connected touchpoints rather than relying on a single function. KORION can expand through wallet, payments, service linkage, brand assets, community, and documentation structure, creating room to be seen as more than a simple token and closer to a service-driven ecosystem. This can become a meaningful long-term evaluation point for investors.",
        answerJa: "市場でより大きく拡張するプロジェクトは、単一の機能よりも複合的な接点を持つことが多いです。KORIONは、ウォレット、決済、サービスの連携、ブランド資産、コミュニティ、ドキュメント構造を兼ね備える方向で拡張できるため、単なるトークンを超えて、一つのサービス型エコシステムとして認識される可能性があります。このような点は、投資家にとって長期的な検討ポイントとなり得ます。",
        answerZh: "在市场中获得更大程度扩展的项目往往拥有复合型触点。KORION 可以在钱包、支付、服务对接、品牌资产、社区和文档化结构等方向同步扩展，从而有望被视为一个超越简单代币的服务型生态系统。这将成为投资者的长期考查点。",
    },
    {
        category: "investor",
        icon: Wallet,
        questionKr: "실사용 구조는 왜 투자 판단에서 중요한가요?",
        questionEn: "Why does practical utility matter in investment evaluation?",
        questionJa: "実用的な構造が投資判断においてなぜ重要なのですか？",
        questionZh: "为什么实际应用结构在投资评估中很重要？",
        answerKr:
        "실사용 구조가 있는 프로젝트는 단기 이슈에만 의존하지 않고, 사용자 접점과 서비스 흐름을 통해 지속적인 관심을 만들 가능성이 높습니다. KORION은 앱, 지갑, 결제 및 서비스 연계 흐름을 통해 실사용 기반 확장을 보여줄 수 있기 때문에, 투자자 입장에서는 프로젝트의 생명력과 확장성을 판단하는 데 중요한 요소가 됩니다.",
        answerEn:
        "Projects with practical utility are less dependent on short-term attention alone and have more potential to create sustained interest through user touchpoints and service flows. Because KORION can present expansion through app, wallet, payment, and service connectivity, this becomes an important factor for investors assessing project durability and scalability.",
        answerJa: "実用的な構造を持つプロジェクトは、短期的な話題だけに依存せず、ユーザー接点とサービスフローを通じて継続的な関心を創出する可能性が高いです。KORIONはアプリ、ウォレット、決済、サービスの連携フローを通じて実用ベースの拡張を示すことができるため、投資家の立場からはプロジェクトの生命力と拡張性を判断する上で重要な要素となります。",
        answerZh: "具备实际应用结构的项目不会仅依赖短期热度，更有可能通过用户触点和服务流程产生持续关注。由于 KORION 能通过 App、钱包、支付及服务关联流程展示基于实际应用的扩展，这成为投资者判断项目生命力和扩展性的关键因素。",
    },
    {
        category: "investor",
        icon: ShieldCheck,
        questionKr: "왜 일부 투자자는 초기에 직접 문의까지 진행하나요?",
        questionEn: "Why do some investors choose to reach out directly at an early stage?",
        questionJa: "なぜ一部の投資家は初期段階で直接問い合わせまで行うのですか？",
        questionZh: "为什么一些投资者选择在早期阶段直接联系？",
        answerKr:
        "초기 검토 단계에서 직접 문의를 진행하는 투자자는 공개 정보만으로는 확인하기 어려운 프로젝트의 준비도, 팀의 방향성, 향후 계획, 협업 가능성 등을 더 구체적으로 확인하려는 경우가 많습니다. KORION처럼 구조, 문서, 브랜드, 서비스 방향이 함께 정리되는 프로젝트는 이러한 추가 대화를 통해 더 입체적으로 평가될 수 있습니다.",
        answerEn:
        "Investors who reach out directly during an early review stage often want to assess elements that are harder to confirm through public materials alone, such as team direction, project readiness, future planning, and collaboration potential. In a project like KORION, where structure, documentation, brand, and service direction are being organized together, direct discussion can support a more complete evaluation.",
        answerJa: "初期の検討段階で直接問い合わせを行う投資家は、公開情報だけでは確認が難しいプロジェクトの準備状況、チームの方向性、今後の計画、協力の可能性などをより具体的に確認しようとする場合が多いです。KORIONのように、構造、ドキュメント、ブランド、サービスの方向性が共に整理されているプロジェクトは、このような追加の対話を通じてより多角的に評価されることができます。",
        answerZh: "在早期审查阶段直接联系的投资者通常是为了更具体地确认仅凭公开信息难以获知的项目准备程度、团队方向、未来计划及合作潜力。像 KORION 这样同步梳理结构、文档、品牌和服务方向的项目，可以通过这种深度交流获得更立体的评估。",
    },
    {
        category: "investor",
        icon: FileText,
        questionKr: "공개 자료만 봐도 KORION의 준비도를 느낄 수 있나요?",
        questionEn: "Can KORION’s level of preparation be seen through its public materials alone?",
        questionJa: "公開資料だけでKORIONの準備状況を感じることはできますか？",
        questionZh: "仅凭公开资料就能看出 KORION 的准备程度吗？",
        answerKr:
        "공개 자료는 프로젝트의 전체를 모두 보여주지는 않지만, 방향성과 준비도를 판단하는 중요한 단서를 제공합니다. 홈페이지, 백서, FAQ, 미디어 키트, 개발자 자료가 서로 일관되게 연결되어 있다면 프로젝트가 외부 이해관계자와의 소통을 체계적으로 준비하고 있다는 신호로 해석될 수 있습니다.",
        answerEn:
        "Public materials may not reveal everything about a project, but they do provide important signals about direction and readiness. When the homepage, whitepaper, FAQ, media kit, and developer resources connect consistently, this can be interpreted as a sign that the project is preparing systematically for communication with external stakeholders.",
        answerJa: "公開資料はプロジェクトのすべてを示すわけではありませんが、方向性と準備状況を判断する重要な手がかりを提供します。ウェブサイト、ホワイトペーパー、FAQ、メディアキット、開発者向け資料が互いに一貫して結びついているなら、プロジェクトが外部の利害関係者とのコミュニケーションを体系的に準備しているというシグナルと解釈できます。",
        answerZh: "公开资料虽然不能展示项目的全貌，但提供了判断方向和准备程度的重要线索。如果官网、白皮书、FAQ、媒体工具包及开发者资料能保持一致的关联性，可以被视为项目正在系统地准备与外部利益相关者沟通的信号。",
    },
    {
        category: "investor",
        icon: Globe,
        questionKr: "KORION은 어떤 투자자에게 더 매력적으로 보일 수 있나요?",
        questionEn: "What type of investor may find KORION especially attractive?",
        questionJa: "KORIONはどのような投資家にとってより魅力的に見えますか？",
        questionZh: "什么样的投资者会发现 KORION 更有吸引力？",
        answerKr:
        "KORION은 단순 단기 변동보다 구조적 성장 가능성, 서비스 확장성, 브랜드 구축, 실사용 접점을 함께 보는 투자자에게 더 매력적으로 보일 수 있습니다. 즉 단순 시세보다 프로젝트가 어떤 방향으로 커질 수 있는지, 어떤 생태계를 만들 수 있는지에 관심이 있는 투자자에게 적합한 검토 대상이 될 수 있습니다.",
        answerEn:
        "KORION may appear especially attractive to investors who look beyond short-term movement and focus instead on structural growth potential, service scalability, brand building, and practical user touchpoints. In other words, it may be a stronger fit for investors interested in how a project can grow and what type of ecosystem it can build over time.",
        answerJa: "KORIONは、単純な短期変動よりも、構造的な成長の可能性、サービスの拡張性、ブランド構築、実用的な接点を共に見る投資家にとって、より魅力的に見えるかもしれません。つまり、単純な相場よりもプロジェクトがどのような方向に成長できるか、どのようなエコシステムを構築できるかに関心がある投資家にとって、適切な検討対象となり得ます。",
        answerZh: "对于比起短期波动更看重结构化增长潜力、服务扩展性、品牌建设及实际应用触点的投资者来说，KORION 可能更具吸引力。换句话说，它更适合那些关注项目发展方向及生态系统构建潜力的投资者。",
    },
    {
        category: "investor",
        icon: Users,
        questionKr: "추가 문의를 하면 어떤 부분을 더 확인할 수 있나요?",
        questionEn: "What can be explored further through direct inquiry?",
        questionJa: "追加で問い合わせをすると、どのような部分をさらに確認できますか？",
        questionZh: "如果进一步咨询，可以了解到哪些更多信息？",
        answerKr:
        "직접 문의를 통해서는 공개 페이지에서 다 담기 어려운 프로젝트 배경, 서비스 확장 로드맵, 운영 방향, 협업 가능성, 자료 요청 범위 등을 더 구체적으로 확인할 수 있습니다. 투자자나 파트너 후보에게는 이러한 대화가 프로젝트 적합성을 판단하는 중요한 단계가 될 수 있습니다.",
        answerEn:
        "Direct inquiry can help explore areas that public pages cannot fully cover, such as project background, service expansion roadmap, operational direction, collaboration potential, and the scope of additional materials available. For investors or prospective partners, this type of discussion can become an important step in evaluating fit.",
        answerJa: "直接問い合わせることで、公開ページには収まりきらないプロジェクトの背景、サービスの拡張ロードマップ、運営の方針、協力の可能性、資料請求の範囲などをより具体的に確認できます。投資家やパートナー候補にとって、このような対話はプロジェクトの適合性を判断するための重要なステップとなります。",
        answerZh: "通过直接咨询，可以更具体地了解公开页面难以详述的项目背景、服务扩展路线图、运营方向、合作潜力及资料索取范围等。对于投资者或潜在合作伙伴，这种交流是判断项目匹配度的关键环节。",
    },

    {
        category: "wallet",
        icon: Wallet,
        questionKr: "KORION Wallet은 어떤 역할을 하나요?",
        questionEn: "What role does KORION Wallet play?",
        questionJa: "KORIONウォレットはどのような役割を果たしますか？",
        questionZh: "KORION 钱包起什么作用？",
        answerKr:
        "KORION Wallet은 단순 잔액 보관 기능을 넘어 생태계와 사용자 경험을 연결하는 핵심 진입점으로 작동할 수 있습니다. 자산 확인, 서비스 연결, 향후 확장 기능 수용 등 다양한 접점의 중심으로 해석할 수 있습니다.",
        answerEn:
        "KORION Wallet can serve as more than a balance-holding tool; it can function as a core gateway connecting the ecosystem and user experience. It may act as a central touchpoint for asset visibility, service connectivity, and future feature expansion.",
        answerJa: "KORIONウォレットは単なる残高保管機能を超えて、エコシステムとユーザー体験を結びつける核心的な入り口として機能できます。資産の確認、サービスの連携、将来の拡張機能の受け入れなど、多様な接点の中心として解釈できます。",
        answerZh: "KORION 钱包不仅具备余额存储功能，还可以作为连接生态系统和用户体验的核心入口。它可以被解读为资产查看、服务连接及未来扩展功能接纳等多种触点的中心。",
    },
    {
        category: "wallet",
        icon: LockKeyhole,
        questionKr: "지갑 관련해서 사용자가 가장 중요하게 봐야 할 부분은 무엇인가요?",
        questionEn: "What is most important for users to consider regarding the wallet?",
        questionJa: "ウォレットに関してユーザーが最も重要視すべき部分は何ですか？",
        questionZh: "关于钱包，用户应该关注的最重要的部分是什么？",
        answerKr:
        "사용자는 지갑의 사용 편의성뿐 아니라 보안 구조, 운영 정책, 자산 처리 흐름, 서비스 연계 가능성 등을 함께 봐야 합니다. 좋은 지갑은 보기 좋은 인터페이스를 넘어서 운영 안정성과 확장성을 함께 가져야 합니다.",
        answerEn:
        "Users should consider not only wallet usability, but also its security structure, operating policies, asset handling flow, and service integration potential. A strong wallet should provide both interface quality and operational reliability with room for future expansion.",
        answerJa: "ユーザーはウォレットの使いやすさだけでなく、セキュリティ構造、運営ポリシー、資産処理フロー、サービスの連携の可能性などを合わせて見る必要があります。優れたウォレットは、見栄えの良いインターフェースを超えて、運営の安定性と拡張性を兼ね備えていなければなりません。",
        answerZh: "用户不仅应关注钱包的使用便捷性，还应同时查看其安全结构、运营政策、资产处理流程及服务关联潜力。一个优秀的钱包除了美观的界面外，还应具备运营稳定性和扩展性。",
    },

    {
        category: "security",
        icon: ShieldCheck,
        questionKr: "보안 측면에서 FAQ 페이지에 왜 이런 내용이 필요한가요?",
        questionEn: "Why does a FAQ page need to address security-related topics?",
        questionJa: "セキュリティの側面で、FAQページにこのような内容が必要なのはなぜですか？",
        questionZh: "为什么 FAQ 页面需要在安全方面包含这些内容？",
        answerKr:
        "투자자와 사용자 모두 프로젝트를 평가할 때 보안과 운영 구조를 함께 봅니다. FAQ는 기술 문서보다 더 쉽게 핵심 내용을 전달할 수 있기 때문에, 프로젝트 신뢰도를 높이는 중요한 접점이 됩니다.",
        answerEn:
        "Both investors and users evaluate projects based on security and operational structure. Since a FAQ page can communicate these essentials more clearly than technical documents, it becomes an important trust-building touchpoint.",
        answerJa: "投資家とユーザーの両方がプロジェクトを評価する際、セキュリティと運営構造を併せて見ます。FAQは技術文書よりも核心的な内容を平易に伝えられるため、プロジェクトの信頼性を高める重要な接点となります。",
        answerZh: "投资者和用户在评估项目时都会同时关注安全和运营结构。由于 FAQ 能比技术文档更通俗地传达核心内容，因此它成为提高项目信赖度的重要触点。",
    },
    {
        category: "security",
        icon: LockKeyhole,
        questionKr: "보안 정보는 어디까지 공개하는 것이 좋나요?",
        questionEn: "How much security information should be disclosed publicly?",
        questionJa: "セキュリティ情報はどこまで公開するのが望ましいですか？",
        questionZh: "安全信息公开到什么程度比较好？",
        answerKr:
        "사용자 신뢰를 위해 보안 철학과 운영 원칙은 충분히 설명하되, 실제 공격에 악용될 수 있는 세부 내부 로직은 과도하게 공개하지 않는 균형이 중요합니다. 공개용 정보와 내부 운영 정보는 분리해서 관리하는 것이 일반적입니다.",
        answerEn:
        "It is important to explain security philosophy and operating principles clearly enough to build trust, while avoiding disclosure of overly detailed internal logic that could be abused. Public-facing information and internal operational details are typically managed separately.",
        answerJa: "ユーザーの信頼のためにセキュリティ哲学と運営原則を十分に説明しつつ、実際の攻撃に悪用される恐れのある詳細な内部ロジックは過度に公開しないバランスが重要です。公開用情報と内部運営情報は分離して管理するのが一般的です。",
        answerZh: "为了获得用户信任，应充分说明安全理念和运营原则，但同时要注意平衡，不过度公开可能被用于实际攻击的内部详细逻辑。通常会将公开信息与内部运营信息分开管理。",
    },

    {
        category: "docs",
        icon: FileText,
        questionKr: "백서와 FAQ는 어떤 차이가 있나요?",
        questionEn: "What is the difference between the whitepaper and the FAQ?",
        questionJa: "ホワイトペーパーとFAQにはどのような違いがありますか？",
        questionZh: "白皮书和 FAQ 有什么区别？",
        answerKr:
        "백서는 프로젝트의 전체 구조와 비전, 기술, 토크노믹스, 로드맵 등을 종합적으로 다루는 문서입니다. FAQ는 사용자가 가장 자주 궁금해하는 핵심 질문을 빠르게 이해할 수 있도록 정리한 실용적인 안내 페이지입니다.",
        answerEn:
        "A whitepaper covers the project’s full structure, vision, technology, tokenomics, and roadmap in a comprehensive document. A FAQ is a practical guide organized around the most common user questions for faster understanding.",
        answerJa: "ホワイトペーパーは、プロジェクトの全体構造やビジョン、技術、トークノミクス、ロードマップなどを包括的に扱う文書です。FAQは、ユーザーが最も頻繁に抱く疑問について、核心的な内容を迅速に理解できるようにまとめた実務的な案内ページです。",
        answerZh: "白皮书是综合阐述项目整体结构、愿景、技术、代币经济学及路线图的文件。FAQ 则是为了让用户快速理解最常关心的核心问题而整理的实用指南页面。",
    },
    {
        category: "docs",
        icon: Globe,
        questionKr: "처음 방문한 사람이 어떤 페이지부터 보면 좋나요?",
        questionEn: "Which pages should a first-time visitor review first?",
        questionJa: "初めて訪れた人はどのページから見ればよいですか？",
        questionZh: "初次访问的人建议先看哪个页面？",
        answerKr:
        "처음 방문한 경우에는 Home, About, Whitepaper, Tokenomics, FAQ, Developers 순서로 보는 것이 좋습니다. 이렇게 보면 프로젝트의 인상, 구조, 문서화 수준, 확장 가능성을 자연스럽게 파악할 수 있습니다.",
        answerEn:
        "For first-time visitors, a useful order is Home, About, Whitepaper, Tokenomics, FAQ, and then Developers. This sequence helps build a natural understanding of the project’s identity, structure, documentation quality, and scalability.",
        answerJa: "初めて訪問した場合は、Home、About、Whitepaper、Tokenomics、FAQ、Developersの順で見るのがおすすめです。これにより、プロジェクトの印象、構造、ドキュメントの充実度、拡張の可能性を自然に把握できます。",
        answerZh: "初次访问时，建议按首页、关于、白皮书、代币经济学、FAQ、开发者的顺序查看。这样可以自然地了解项目的印象、结构、文档完善程度及扩展潜力。",
    },

    {
        category: "community",
        icon: Users,
        questionKr: "커뮤니티와 파트너 관점에서 FAQ는 왜 중요한가요?",
        questionEn: "Why is the FAQ important for community members and partners?",
        questionJa: "コミュニティとパートナーの観点から、FAQはなぜ重要なのですか？",
        questionZh: "从社区和合作伙伴的角度来看，为什么 FAQ 很重要？",
        answerKr:
        "FAQ는 반복되는 질문에 대한 일관된 기준 답변을 제공해 커뮤니케이션 효율을 높여줍니다. 커뮤니티 운영, 파트너 미팅, 외부 소개 자료, 미디어 응대에서도 기본 신뢰도를 높여주는 역할을 합니다.",
        answerEn:
        "A FAQ improves communication efficiency by providing a consistent baseline answer to recurring questions. It also helps strengthen credibility in community operations, partner meetings, external introductions, and media responses.",
        answerJa: "FAQは繰り返される質問に対して一貫した基準となる回答を提供し、コミュニケーションの効率を高めてくれます。コミュニティ運営、パートナーとの会議、外部紹介資料、メディア対応においても、基本的な信頼性を高める役割を果たします。",
        answerZh: "FAQ 为重复出现的问题提供一致的标准回答，从而提高沟通效率。它在社区运营、合作伙伴会议、外部介绍资料及媒体应对中也起到了增强基本信赖度的作用。",
    },
    {
        category: "community",
        icon: HelpCircle,
        questionKr: "추가 질문이나 협업 문의는 어디로 하면 되나요?",
        questionEn: "Where should additional questions or partnership inquiries be directed?",
        questionJa: "追加の質問や協力の問い合わせはどこにすればよいですか？",
        questionZh: "如果还有其他问题或合作咨询，该联系哪里？",
        answerKr:
        "추가 질문, 파트너십, 미디어 문의 등은 공식 Contact 페이지를 통해 연결되도록 안내하는 것이 좋습니다. FAQ는 기본적인 이해를 돕고, 실제 협업 대화는 별도 채널로 이어지게 하는 구조가 효율적입니다.",
        answerEn:
        "Additional questions, partnerships, and media-related inquiries are best directed through the official Contact page. The FAQ helps build foundational understanding, while actual collaboration discussions should continue through a dedicated channel.",
        answerJa: "追加の質問、パートナーシップ、メディアへの問い合わせなどは、公式のContactページを通じて行えるように案内するのが望ましいです。FAQは基本的な理解を助け、実際の協力に関する対話は別のチャンネルへと繋げる構造が効率的です。",
        answerZh: "建议引导额外的提问、合作伙伴关系及媒体咨询通过官方联系页面进行。FAQ 旨在帮助建立基础理解，而实际的合作交流通过独立渠道进行会更高效。",
    },
    ];

    const categoryMeta = [
    { key: "all", labelKr: "전체", labelEn: "All", labelJa: "すべて", labelZh: "全部" },
    { key: "project", labelKr: "프로젝트", labelEn: "Project", labelJa: "プロジェクト", labelZh: "项目" },
    { key: "investor", labelKr: "투자자", labelEn: "Investor", labelJa: "投資家", labelZh: "投资者" },
    { key: "wallet", labelKr: "지갑", labelEn: "Wallet", labelJa: "ウォレット", labelZh: "钱包" },
    { key: "security", labelKr: "보안", labelEn: "Security", labelJa: "セキュリティ", labelZh: "安全" },
    { key: "docs", labelKr: "문서", labelEn: "Documents", labelJa: "ドキュメント", labelZh: "文档" },
    { key: "community", labelKr: "커뮤니티", labelEn: "Community", labelJa: "コミュニティ", labelZh: "社区" },
    ];

    const insightCards = [
    {
        icon: BadgeCheck,
        titleKr: "신뢰도 강화",
        titleEn: "Trust Reinforcement",
        titleJa: "信頼の強化",
        titleZh: "增强信赖度",
        descKr:
        "FAQ는 프로젝트가 질문을 피하지 않고 구조적으로 정리되어 있음을 보여주는 신뢰 요소입니다.",
        descEn:
        "A well-built FAQ signals that the project does not avoid key questions and is structurally organized.",
        descJa: "FAQは、プロジェクトが質問を避けず、構造的に整理されていることを示す信頼の要素です。",
        descZh: "FAQ 是表明项目不回避问题且结构井然有序的信赖要素。",
    },
    {
        icon: ShieldCheck,
        titleKr: "운영 가시성",
        titleEn: "Operational Visibility",
        titleJa: "運営の可視性",
        titleZh: "运营可见性",
        descKr:
        "문서와 정책, 안내 구조가 갖춰져 있을수록 외부에서 보는 프로젝트의 준비도는 높아집니다.",
        descEn:
        "The more complete the documentation, policy, and guidance structure, the more prepared the project appears externally.",
        descJa: "文書、ポリシー、案内構造が整っているほど、外部から見たプロジェクトの準備状況は高く評価されます。",
        descZh: "文档、政策及引导结构越完善，外界对项目的准备程度认可度就越高。",
    },
    {
        icon: Sparkles,
        titleKr: "브랜드 완성도",
        titleEn: "Brand Completeness",
        titleJa: "ブランドの完成度",
        titleZh: "品牌完成度",
        descKr:
        "디자인과 문구, 정보 구조가 정리된 FAQ는 브랜드의 품질을 자연스럽게 끌어올립니다.",
        descEn:
        "A refined FAQ with organized design, language, and information architecture naturally elevates brand quality.",
        descJa: "デザイン、文言、情報構造が整理されたFAQは、ブランドの品質を自然に高めます。",
        descZh: "设计、文案及信息结构有序的 FAQ 会自然提升品牌品质。",
    },
    ];

    export function FAQPage() {
    const { t } = useLanguage();

    const [activeCategory, setActiveCategory] = useState("all");
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const filteredFaqs = useMemo(() => {
        if (activeCategory === "all") return faqItems;
        return faqItems.filter((item) => item.category === activeCategory);
    }, [activeCategory]);

    return (
        <div className="faq-page">
        <section className="faq-hero">
            <div className="faq-hero__bg">
            <div className="faq-hero__orb faq-hero__orb--one" />
            <div className="faq-hero__orb faq-hero__orb--two" />
            <div className="faq-hero__grid" />
            <div className="faq-hero__line faq-hero__line--left" />
            <div className="faq-hero__line faq-hero__line--right" />
            </div>

            <div className="faq-page__container faq-hero__container">
            <motion.div
                className="faq-hero__content"
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="faq-hero__eyebrow">
                <HelpCircle size={16} />
                <span>{t("KORION FAQ", "KORION FAQ", "KORION FAQ", "KORION FAQ")}</span>
                </div>

                <h1 className="faq-hero__title">
                {t(
                    "The key questions investors and partners review first",
                    "투자자와 파트너가 가장 먼저 확인하는 핵심 질문",
                    "投資家とパートナーが最初に確認する核心的な質問",
                    "投资者和合作伙伴首先确认的核心问题"
                )}
                </h1>

                <p className="faq-hero__description">
                {t(
                    "This page is more than simple guidance. It is a core information hub designed to quickly communicate KORION’s structure, scalability, practical touchpoints, and documentation maturity. It serves as an important starting point for investors and partners seeking deeper review.",
                    "이 페이지는 단순 안내가 아니라, KORION의 구조, 확장성, 실사용 접점, 문서화 수준을 빠르게 이해할 수 있도록 설계된 핵심 정보 허브입니다. 프로젝트를 더 깊이 검토하려는 투자자와 파트너에게 중요한 출발점이 됩니다.",
                    "このページは単なる案内ではなく、KORIONの構造、拡張性、実利用の接点、ドキュメントの充実度を迅速に理解できるように設計された核心的な情報ハブです。プロジェクトをより深く検討しようとする投資家やパートナーにとって重要な出発点となります。",
                    "本页面不仅仅是简单的指导，它还是一个核心信息中心，旨在快速传达 KORION 的结构、扩展性、实际应用触点及文档成熟度。对于想要深入审查项目的投资者和合作伙伴来说，这是一个重要的起点。"
                )}
                </p>

                <div className="faq-hero__actions">
                <a href="#faq-list" className="faq-hero__primary">
                    <HelpCircle size={18} />
                    <span>{t("Browse Questions", "질문 보기", "質問を見る", "浏览问题")}</span>
                </a>

                <Link to="/whitepaper" className="faq-hero__secondary">
                    <FileText size={18} />
                    <span>{t("View Whitepaper", "백서 보기", "ホワイトペーパーを見る", "查看白皮书")}</span>
                </Link>
                </div>

                <div className="faq-hero__mini-note">
                <BadgeCheck size={15} />
                <span>
                    {t(
                    "Structured so investors, partners, and users can quickly identify the essentials.",
                    "투자자, 파트너, 사용자 모두가 빠르게 핵심을 파악할 수 있도록 구성되었습니다.",
                    "投資家、パートナー、ユーザーの誰もが迅速に核心を把握できるように構成されています。",
                    "该结构旨在让投资者、合作伙伴和用户都能快速掌握核心要点。"
                    )}
                </span>
                </div>
            </motion.div>

            <motion.div
                className="faq-hero__visual"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.85, delay: 0.08 }}
            >
                <div className="faq-hero-card">
                <div className="faq-hero-card__glow" />
                <div className="faq-hero-card__top">
                    <div className="faq-hero-card__badge">
                    <HelpCircle size={18} />
                    </div>
                    <div>
                    <p>{t("Trust-oriented info hub", "신뢰형 정보 허브", "信頼重視の情報ハブ", "信任型信息中心")}</p>
                    <h3>{t("KORION FAQ Center", "KORION FAQ Center", "KORION FAQセンター", "KORION FAQ 咨询中心")}</h3>
                    </div>
                </div>

                <div className="faq-hero-card__list">
                    <div className="faq-hero-card__item">
                    <Sparkles size={16} />
                    <span>{t("Project direction", "프로젝트 방향성", "プロジェクトの方向性", "项目方向")}</span>
                    </div>
                    <div className="faq-hero-card__item">
                    <ShieldCheck size={16} />
                    <span>{t("Security & operations", "보안과 운영 관점", "セキュリティと運営の観点", "安全与运营视角")}</span>
                    </div>
                    <div className="faq-hero-card__item">
                    <Wallet size={16} />
                    <span>{t("Wallet & service understanding", "지갑 및 서비스 이해", "ウォレットとサービスの理解", "钱包与服务理解")}</span>
                    </div>
                    <div className="faq-hero-card__item">
                    <FileText size={16} />
                    <span>{t("Docs & materials linkage", "문서와 자료 연결", "ドキュメントと資料の連携", "文档与资料关联")}</span>
                    </div>
                </div>

                <div className="faq-hero-card__footer">
                    <span>
                    {t(
                        "Prepared review points for investors, partners, and community",
                        "투자자 · 파트너 · 커뮤니티를 위한 핵심 검토 포인트",
                        "投資家・パートナー・コミュニティのための主要な検討ポイント",
                        "为投资者、合作伙伴和社区准备的核心审查要点"
                    )}
                    </span>
                </div>
                </div>
            </motion.div>
            </div>
        </section>

        <section className="faq-insights">
            <div className="faq-page__container-01">
            <div className="faq-insights__grid">
                {insightCards.map((item, index) => {
                const Icon = item.icon;
                return (
                    <motion.article
                    key={item.titleEn}
                    className="faq-insight-card"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.55, delay: index * 0.08 }}
                    >
                    <div className="faq-insight-card__icon">
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

        <section className="faq-main" id="faq-list">
            <div className="faq-page__container-01 faq-main__container">
            <div className="faq-main__header">
                <div className="faq-section-heading faq-section-heading--left">
                <span>{t("KEY QUESTIONS", "핵심 질문", "主要な質問", "核心问题")}</span>
                <h2>
                    {t(
                        "The questions most often reviewed when evaluating KORION",
                        "KORION을 검토할 때 먼저 확인하게 되는 질문",
                        "KORIONを検討する際にまず確認される質問",
                        "评估 KORION 时最常确认的问题"
                    )}
                </h2>
                <p>
                    {t(
                        "These questions cover project understanding, investor perspective, wallet, security, documentation, and community. The investor section especially helps communicate direction and scalability at a glance.",
                        "프로젝트 이해, 투자자 관점, 지갑, 보안, 문서, 커뮤니티까지 핵심 검토 질문을 정리했습니다. 특히 투자자 탭은 프로젝트의 방향성과 확장 가능성을 빠르게 파악하는 데 도움이 됩니다.",
                        "プロジェクトの理解、投資家の視点、ウォレット、セキュリティ、ドキュメント、コミュニティまで、主要な検討質問をまとめました。特に投資家タブは、プロジェクトの方向性と拡張性を迅速に把握するのに役立ちます。",
                        "整理了从项目理解、投资者视角到钱包、安全、文档、社区等核心审查问题。尤其是投资者标签页，有助于快速掌握项目的方向和扩展潜力。"
                    )}
                </p>
                </div>

                <div className="faq-category-tabs">
                {categoryMeta.map((category) => (
                    <button
                    key={category.key}
                    type="button"
                    className={`faq-category-tabs__button ${
                        activeCategory === category.key ? "is-active" : ""
                    }`}
                    onClick={() => {
                        setActiveCategory(category.key);
                        setOpenIndex(0);
                    }}
                    >
                    {t(category.labelEn, category.labelKr, category.labelJa, category.labelZh)}
                    </button>
                ))}
                </div>
            </div>

            <div className="faq-accordion">
                {filteredFaqs.map((item, index) => {
                const Icon = item.icon;
                const isOpen = openIndex === index;

                return (
                    <motion.div
                    key={`${item.questionEn}-${index}`}
                    className={`faq-accordion__item ${isOpen ? "is-open" : ""}`}
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.18 }}
                    transition={{ duration: 0.5, delay: index * 0.04 }}
                    >
                    <button
                        type="button"
                        className="faq-accordion__trigger"
                        onClick={() => setOpenIndex(isOpen ? null : index)}
                    >
                        <div className="faq-accordion__left">
                        <div className="faq-accordion__icon">
                            <Icon size={18} />
                        </div>
                        <div className="faq-accordion__text">
                            <h3>{t(item.questionEn, item.questionKr, item.questionJa, item.questionZh)}</h3>
                            <p>
                            {t(
                                "Click to view the full explanation",
                                "클릭하여 자세한 설명 보기",
                                "クリックして詳細な説明を見る",
                                "点击查看详细说明"
                            )}
                            </p>
                        </div>
                        </div>

                        <div
                        className={`faq-accordion__chevron ${
                            isOpen ? "is-rotated" : ""
                        }`}
                        >
                        <ChevronDown size={20} />
                        </div>
                    </button>

                    <AnimatePresence initial={false}>
                        {isOpen && (
                        <motion.div
                            className="faq-accordion__content"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.28 }}
                        >
                            <div className="faq-accordion__content-inner">
                            <p>{t(item.answerEn, item.answerKr, item.answerJa, item.answerZh)}</p>
                            </div>
                        </motion.div>
                        )}
                    </AnimatePresence>
                    </motion.div>
                );
                })}
            </div>
            </div>
        </section>

        <section className="faq-guide">
            <div className="faq-page__container-01 faq-guide__container">
            <motion.div
                className="faq-guide__panel"
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.65 }}
            >
                <div className="faq-section-heading faq-section-heading--left">
                <span>{t("RECOMMENDED FLOW", "권장 탐색 순서", "推奨される確認順序", "推荐浏览顺序")}</span>
                <h2>
                    {t(
                        "A recommended review path for first-time visitors",
                        "처음 검토한다면 이렇게 보는 것이 좋습니다",
                        "初めて検討される場合は、このように確認することをお勧めします",
                        "若是初次审查，建议按此顺序查看"
                    )}
                </h2>
                </div>

                <div className="faq-guide__steps">
                <div className="faq-guide__step">
                    <strong>01</strong>
                    <div>
                    <h3>{t("Home / About", "Home / About", "ホーム / アバウト", "首页 / 关于")}</h3>
                    <p>
                        {t(
                        "Review the project’s first impression and overall direction.",
                        "프로젝트의 첫 인상과 방향성을 빠르게 확인합니다.",
                        "プロジェクトの第一印象と方向性を迅速に確認します。",
                        "快速确认项目的第一印象和方向。"
                        )}
                    </p>
                    </div>
                </div>

                <div className="faq-guide__step">
                    <strong>02</strong>
                    <div>
                    <h3>{t("Whitepaper / Tokenomics", "Whitepaper / Tokenomics", "ホワイトペーパー / トークノミクス", "白皮书 / 代币经济学")}</h3>
                    <p>
                        {t(
                        "Evaluate structure, documentation quality, and asset model together.",
                        "구조, 문서화 수준, 자산 모델을 함께 확인합니다.",
                        "構造、ドキュメントの充実度、資産モデルを併せて確認します。",
                        "同时确认结构、文档完善程度及资产模型。"
                        )}
                    </p>
                    </div>
                </div>

                <div className="faq-guide__step">
                    <strong>03</strong>
                    <div>
                    <h3>{t("FAQ / Developers", "FAQ / Developers", "FAQ / デベロッパー", "FAQ / 开发者")}</h3>
                    <p>
                        {t(
                        "Use these pages to deepen understanding, scalability, and external communication readiness.",
                        "세부 이해와 확장 가능성, 외부 설명력을 더 입체적으로 봅니다.",
                        "詳細な理解、拡張性、外部への説得力をより多角的に確認します。",
                        "更立体地查看详细理解、扩展潜力及外部说明力。"
                        )}
                    </p>
                    </div>
                </div>
                </div>
            </motion.div>

            <motion.div
                className="faq-guide__links"
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.65 }}
            >
                <Link to="/about" className="faq-guide-link">
                <div>
                    <span>{t("Project Overview", "프로젝트 소개", "プロジェクト紹介", "项目介绍")}</span>
                    <h3>{t("Visit About Page", "About 페이지 보기", "Aboutページを見る", "查看关于页面")}</h3>
                </div>
                <ArrowRight size={18} />
                </Link>

                <Link to="/whitepaper" className="faq-guide-link">
                <div>
                    <span>{t("Official Document", "공식 문서", "公式ドキュメント", "官方文档")}</span>
                    <h3>{t("Open Whitepaper", "백서 바로가기", "ホワイトペーパーへ", "前往白皮书")}</h3>
                </div>
                <ArrowRight size={18} />
                </Link>

                <Link to="/developers" className="faq-guide-link">
                <div>
                    <span>{t("Developer Resources", "개발자 자료", "開発者向けリソース", "开发者资料")}</span>
                    <h3>{t("Visit Developers Page", "Developers 페이지 보기", "Developersページを見る", "查看开发者页面")}</h3>
                </div>
                <ArrowRight size={18} />
                </Link>
            </motion.div>
            </div>
        </section>

        <section className="faq-cta">
            <div className="faq-page__container-01">
            <motion.div
                className="faq-cta__panel"
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.65 }}
            >
                <div className="faq-cta__content">
                <span>
                    {t(
                        "CONTACT · DOCUMENTS · REVIEW",
                        "CONTACT · DOCUMENTS · REVIEW",
                        "CONTACT · DOCUMENTS · REVIEW",
                        "CONTACT · DOCUMENTS · REVIEW"
                    )}
                </span>
                <h2>
                    {t(
                        "Interested in reviewing the project more deeply?",
                        "프로젝트를 더 깊이 검토하고 싶으신가요?",
                        "プロジェクトをより深く検討したいですか？",
                        "您想更深入地了解该项目吗？"
                    )}
                </h2>
                <p>
                    {t(
                        "The FAQ is a starting point for core understanding. Investment review, partnerships, official material requests, and further questions can continue through direct inquiry.",
                        "FAQ는 핵심 이해를 돕기 위한 출발점입니다. 투자 검토, 파트너십, 공식 자료 요청, 추가 질의는 별도 문의를 통해 더 구체적으로 이어질 수 있습니다.",
                        "FAQは核心的な理解を助けるための出発点です。投資の検討、パートナーシップ、公式資料の請求、追加の質問は、個別のお問い合わせを通じてより具体的に進めることができます。",
                        "FAQ 是帮助建立核心理解的起点。投资审查、合作伙伴关系、官方资料索取及进一步咨询可以通过单独联系进行更具体的对接。"
                    )}
                </p>
                </div>

                <div className="faq-cta__actions">
                <Link to="/contact" className="faq-cta__button">
                    <BadgeCheck size={18} />
                    <span>{t("Project Inquiry", "프로젝트 문의하기", "プロジェクトに関するお問い合わせ", "项目咨询")}</span>
                </Link>

                <Link
                    to="/media-kit"
                    className="faq-cta__button faq-cta__button--ghost"
                >
                    <FileText size={18} />
                    <span>{t("View Official Materials", "공식 자료 보기", "公式資料を見る", "查看官方资料")}</span>
                </Link>
                </div>
            </motion.div>
            </div>
        </section>
        </div>
    );
    }