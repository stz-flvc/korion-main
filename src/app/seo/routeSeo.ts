import { mockAdminService } from '../services/mockAdminService';

type Language = 'EN' | 'KR' | 'JA' | 'ZH';

type SeoEntry = {
  title: string;
  description: string;
  canonicalPath: string;
  robots?: string;
  ogType?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
};

const defaultSeo: SeoEntry = {
  title: 'KORION',
  description:
    'Official KORION website covering wallet infrastructure, ecosystem growth, payment technology, and platform updates.',
  canonicalPath: '/',
};

const staticSeo: Record<string, Record<Language, SeoEntry>> = {
  '/': {
    EN: {
      title: 'KORION Digital Asset Ecosystem',
      description: 'Explore KORION wallet infrastructure, payment technology, ecosystem strategy, and latest official platform updates.',
      canonicalPath: '/',
    },
    KR: {
      title: 'KORION 디지털 자산 생태계',
      description: 'KORION 지갑 인프라, 결제 기술, 생태계 전략 및 최신 공식 플랫폼 업데이트를 확인하세요.',
      canonicalPath: '/',
    },
    JA: {
      title: 'KORION デジタル資産エコシステム',
      description: 'KORIONウォレットのインフラ、決済技術、エコシステム戦略、および最新の公式プラットフォームの更新情報を確認してください。',
      canonicalPath: '/',
    },
    ZH: {
      title: 'KORION 数字资产子生态系统',
      description: '探索 KORION 钱包基础设施、支付技术、生态系统策略和最新的官方平台更新。',
      canonicalPath: '/',
    },
  },
  '/ecosystem': {
    EN: {
      title: 'KORION Ecosystem',
      description: 'Discover the KORION ecosystem structure, real-world utility strategy, and expansion roadmap.',
      canonicalPath: '/ecosystem',
    },
    KR: {
      title: 'KORION 생태계',
      description: 'KORION 생태계 구조, 실생활 유틸리티 전략 및 확장 로드맵을 확인하세요.',
      canonicalPath: '/ecosystem',
    },
    JA: {
      title: 'KORION エコシステム',
      description: 'KORIONエコシステムの構造、現実世界でのユーティリティ戦略、および拡張ロードマップをご覧ください。',
      canonicalPath: '/ecosystem',
    },
    ZH: {
      title: 'KORION 生态系统',
      description: '了解 KORION 生态系统结构、现实世界实用策略和扩展路线图。',
      canonicalPath: '/ecosystem',
    },
  },
  '/about': {
    EN: {
      title: 'About KORION',
      description: 'Read the KORION mission, operating direction, and long-term platform vision.',
      canonicalPath: '/about',
    },
    KR: {
      title: 'KORION 소개',
      description: 'KORION의 미션, 운영 방향 및 장기적인 플랫폼 비전을 확인하세요.',
      canonicalPath: '/about',
    },
    JA: {
      title: 'KORIONについて',
      description: 'KORIONのミッション、運営の方向性、および長期的なプラットフォームのビジョンをご覧ください。',
      canonicalPath: '/about',
    },
    ZH: {
      title: '关于 KORION',
      description: '阅读 KORION 的使命、运营方向和长期平台愿景。',
      canonicalPath: '/about',
    },
  },
  '/team': {
    EN: {
      title: 'KORION Team',
      description: 'Meet the KORION team and leadership behind the ecosystem and product execution.',
      canonicalPath: '/team',
    },
    KR: {
      title: 'KORION 팀',
      description: 'KORION의 생태계와 제품 실행을 지원하는 운영진과 리더십을 만나보세요.',
      canonicalPath: '/team',
    },
    JA: {
      title: 'KORIONチーム',
      description: 'エコシステムと製品の実行を支えるKORIONのチームとリーダーシップをご紹介します。',
      canonicalPath: '/team',
    },
    ZH: {
      title: 'KORION 团队',
      description: '结识支持生态系统和产品执行的 KORION 团队与领导层。',
      canonicalPath: '/team',
    },
  },
  '/tokenomics': {
    EN: {
      title: 'KORION Tokenomics',
      description: 'KORION utility structure, allocation, and economic model overview.',
      canonicalPath: '/tokenomics',
    },
    KR: {
      title: 'KORION 토크노믹스',
      description: 'KORION 유틸리티 구조, 할당 및 경제 모델 개요를 확인하세요.',
      canonicalPath: '/tokenomics',
    },
    JA: {
      title: 'KORION トークノミクス',
      description: 'KORIONのユーティリティ構造、割り当て、および経済モデルの概要。',
      canonicalPath: '/tokenomics',
    },
    ZH: {
      title: 'KORION 代币经济学',
      description: 'KORION 实用程序结构、分配和经济模型概览。',
      canonicalPath: '/tokenomics',
    },
  },
  '/roadmap': {
    EN: {
      title: 'KORION Roadmap',
      description: 'KORION development milestones and future ecosystem growth plans.',
      canonicalPath: '/roadmap',
    },
    KR: {
      title: 'KORION 로드맵',
      description: 'KORION 개발 마일스톤 및 향후 생태계 성장 계획을 확인하세요.',
      canonicalPath: '/roadmap',
    },
    JA: {
      title: 'KORION ロードマップ',
      description: 'KORIONの開発マイルストーンと将来のエコシステム成長計画。',
      canonicalPath: '/roadmap',
    },
    ZH: {
      title: 'KORION 路线图',
      description: 'KORION 开发里程碑和未来生态系统增长计划。',
      canonicalPath: '/roadmap',
    },
  },
  '/news': {
    EN: {
      title: 'KORION News',
      description: 'Stay updated with official KORION news, platform updates, and major announcements.',
      canonicalPath: '/news',
    },
    KR: {
      title: 'KORION 뉴스',
      description: 'KORION의 공식 뉴스, 플랫폼 업데이트 및 주요 공지사항을 확인하세요.',
      canonicalPath: '/news',
    },
    JA: {
      title: 'KORION ニュース',
      description: 'KORIONの公式ニュース、プラットフォームの更新、および主要な発表を常に把握してください。',
      canonicalPath: '/news',
    },
    ZH: {
      title: 'KORION 新闻',
      description: '随时了解 KORION 的官方新闻、平台更新和重大公告。',
      canonicalPath: '/news',
    },
  },
  '/mining': {
    EN: {
      title: 'KORION Mining',
      description: 'KORION mining ecosystem and node operational policies.',
      canonicalPath: '/mining',
    },
    KR: {
      title: 'KORION 마이닝',
      description: 'KORION 마이닝 생태계 및 노드 운영 정책을 확인하세요.',
      canonicalPath: '/mining',
    },
    JA: {
      title: 'KORION マイニング',
      description: 'KORIONマイニングエコシステムとノードの運営ポリシー。',
      canonicalPath: '/mining',
    },
    ZH: {
      title: 'KORION 挖矿',
      description: 'KORION 挖矿生态系统和节点运营政策。',
      canonicalPath: '/mining',
    },
  },
  '/foundation': {
    EN: {
      title: 'KORION Foundation',
      description: 'Official KORION Foundation governance and ecosystem support framework.',
      canonicalPath: '/foundation',
    },
    KR: {
      title: 'KORION 재단',
      description: 'KORION 재단의 거버넌스 및 생태계 지원 프레임워크를 확인하세요.',
      canonicalPath: '/foundation',
    },
    JA: {
      title: 'KORION 財団',
      description: 'KORION財団のガバナンスとエコシステムサポートフレームワーク。',
      canonicalPath: '/foundation',
    },
    ZH: {
      title: 'KORION 基金会',
      description: 'KORION 基金会官方治理和生态系统支持框架。',
      canonicalPath: '/foundation',
    },
  },
  '/treasury': {
    EN: {
      title: 'KORION Treasury',
      description: 'KORION treasury management and ecosystem fund transparency.',
      canonicalPath: '/treasury',
    },
    KR: {
      title: 'KORION 트레저리',
      description: 'KORION 트레저리 관리 및 생태계 기금 투명성을 확인하세요.',
      canonicalPath: '/treasury',
    },
    JA: {
      title: 'KORION トレジャリー',
      description: 'KORIONトレジャリーの管理とエコシステム基金の透明性。',
      canonicalPath: '/treasury',
    },
    ZH: {
      title: 'KORION 国库',
      description: 'KORION 国库管理和生态系统基金透明度。',
      canonicalPath: '/treasury',
    },
  },
  '/smart-contract': {
    EN: {
      title: 'KORION Smart Contract',
      description: 'KORION live contract interface and execution layers.',
      canonicalPath: '/smart-contract',
    },
    KR: {
      title: 'KORION 스마트 컨트랙트',
      description: 'KORION 라이브 컨트랙트 인터페이스 및 실행 레이어를 확인하세요.',
      canonicalPath: '/smart-contract',
    },
    JA: {
      title: 'KORION スマートコントラクト',
      description: 'KORIONライブコントラクトインターフェースと実行レイヤー。',
      canonicalPath: '/smart-contract',
    },
    ZH: {
      title: 'KORION 智能合约',
      description: 'KORION 实时合约接口和执行层。',
      canonicalPath: '/smart-contract',
    },
  },
  '/media-kit': {
    EN: {
      title: 'KORION Media Kit',
      description: 'Official KORION brand assets, logos, and project materials.',
      canonicalPath: '/media-kit',
    },
    KR: {
      title: 'KORION 미디어 키트',
      description: 'KORION 공식 브랜드 자산, 로고 및 프로젝트 자료를 확인하세요.',
      canonicalPath: '/media-kit',
    },
    JA: {
      title: 'KORION メディアキット',
      description: 'KORIONの公式ブランド資産、ロゴ、およびプロジェクト資料。',
      canonicalPath: '/media-kit',
    },
    ZH: {
      title: 'KORION 媒体工具包',
      description: 'KORION 官方品牌资产、Logo 和项目材料。',
      canonicalPath: '/media-kit',
    },
  },
  '/partner': {
    EN: {
      title: 'KORION Partners',
      description: 'Official partners and ecosystem collaborators of KORION.',
      canonicalPath: '/partner',
    },
    KR: {
      title: 'KORION 파트너',
      description: 'KORION의 공식 파트너 및 생태계 협력사를 확인하세요.',
      canonicalPath: '/partner',
    },
    JA: {
      title: 'KORION パートナー',
      description: 'KORIONの公式パートナーおよびエコシステムの協力者。',
      canonicalPath: '/partner',
    },
    ZH: {
      title: 'KORION 合作伙伴',
      description: 'KORION 的官方合作伙伴和生态系统合作者。',
      canonicalPath: '/partner',
    },
  },
  '/listing-info': {
    EN: {
      title: 'KORION Listing Info',
      description: 'Official listing information and exchange status for KORION.',
      canonicalPath: '/listing-info',
    },
    KR: {
      title: 'KORION 상장 정보',
      description: 'KORION의 공식 상장 정보 및 거래소 상태를 확인하세요.',
      canonicalPath: '/listing-info',
    },
    JA: {
      title: 'KORION 上場情報',
      description: 'KORIONの公式上場情報と取引所のステータス。',
      canonicalPath: '/listing-info',
    },
    ZH: {
      title: 'KORION 上市信息',
      description: 'KORION 的官方上市信息和交易所状态。',
      canonicalPath: '/listing-info',
    },
  },
  '/explorer': {
    EN: {
      title: 'KORION Explorer',
      description: 'KORION on-chain explorer and transaction tracking reference.',
      canonicalPath: '/explorer',
    },
    KR: {
      title: 'KORION 익스플로러',
      description: 'KORION 온체인 익스플로러 및 트랜잭션 추적 기준을 확인하세요.',
      canonicalPath: '/explorer',
    },
    JA: {
      title: 'KORION エクスプローラー',
      description: 'KORIONオンチェーンエクスプローラーとトランザクション追跡リファレンス。',
      canonicalPath: '/explorer',
    },
    ZH: {
      title: 'KORION 浏览器',
      description: 'KORION 链上浏览器和交易跟踪参考。',
      canonicalPath: '/explorer',
    },
  },
  '/download': {
    EN: {
      title: 'Download KORION',
      description: 'Official download center for KORION wallet and applications.',
      canonicalPath: '/download',
    },
    KR: {
      title: 'KORION 다운로드',
      description: 'KORION 지갑 및 애플리케이션 공식 다운로드 센터입니다.',
      canonicalPath: '/download',
    },
    JA: {
      title: 'KORION ダウンロード',
      description: 'KORIONウォレットおよびアプリケーションの公式ダウンロードセンター。',
      canonicalPath: '/download',
    },
    ZH: {
      title: '下载 KORION',
      description: 'KORION 钱包和应用程序官方下载中心。',
      canonicalPath: '/download',
    },
  },
  '/support': {
    EN: {
      title: 'KORION Support',
      description: 'Official KORION support and help center for ecosystem users.',
      canonicalPath: '/support',
    },
    KR: {
      title: 'KORION 고객 지원',
      description: 'KORION 생태계 사용자를 위한 공식 고객 지원 및 헬프 센터입니다.',
      canonicalPath: '/support',
    },
    JA: {
      title: 'KORION サポート',
      description: 'エコシステムユーザーのためのKORION公式サポートおよびヘルプセンター。',
      canonicalPath: '/support',
    },
    ZH: {
      title: 'KORION 支持',
      description: '为生态系统用户提供的 KORION 官方支持和帮助中心。',
      canonicalPath: '/support',
    },
  },
  '/contact': {
    EN: {
      title: 'Contact KORION',
      description: 'Get in touch with the KORION team for partnerships and inquiries.',
      canonicalPath: '/contact',
    },
    KR: {
      title: 'KORION 문의하기',
      description: '파트너십 및 문의를 위해 KORION 팀에 연락하세요.',
      canonicalPath: '/contact',
    },
    JA: {
      title: 'KORION お問い合わせ',
      description: 'パートナーシップやお問い合わせについては、KORIONチームにご連絡ください。',
      canonicalPath: '/contact',
    },
    ZH: {
      title: '联系 KORION',
      description: '联系 KORION 团队进行合作伙伴关系和咨询。',
      canonicalPath: '/contact',
    },
  },
  '/developers': {
    EN: {
      title: 'KORION Developers',
      description: 'KORION developer portal with APIs, SDK references, authentication flow, and partner integration guides.',
      canonicalPath: '/developers',
    },
    KR: {
      title: 'KORION 개발자 포털',
      description: 'API, SDK 레퍼런스, 인증 흐름 및 파트너 통합 가이드를 포함한 KORION 개발자 포털입니다.',
      canonicalPath: '/developers',
    },
    JA: {
      title: 'KORION 開発者',
      description: 'API、SDKリファレンス、認証フロー、およびパートナー統合ガイドを備えたKORION開発者ポータル。',
      canonicalPath: '/developers',
    },
    ZH: {
      title: 'KORION 开发者',
      description: '包含 API、SDK 参考、身份验证流程和合作伙伴集成指南的 KORION 开发者门户。',
      canonicalPath: '/developers',
    },
  },
};

function normalizePathname(pathname: string) {
  if (!pathname || pathname === '/') {
    return '/';
  }

  return pathname.replace(/\/+$/, '');
}

function toIsoDate(date: string) {
  return `${date}T00:00:00+09:00`;
}

export function getSeoForPath(pathname: string, language: Language): SeoEntry {
  const normalizedPath = normalizePathname(pathname);

  if (normalizedPath.startsWith('/news/')) {
    const slug = normalizedPath.replace('/news/', '');
    const news = mockAdminService.getNews();
    const post = news.find((item) => item.slug === slug);

    if (post) {
      let title = post.title;
      let description = post.summary;

      if (language === 'KR') {
        title = post.titleKo || post.title;
        description = post.summaryKo || post.summary;
      } else if (language === 'JA') {
        title = post.titleJa || post.title;
        description = post.summaryJa || post.summary;
      } else if (language === 'ZH') {
        title = post.titleZh || post.title;
        description = post.summaryZh || post.summary;
      }

      return {
        title,
        description,
        canonicalPath: `/news/${post.slug}`,
        ogType: 'article',
        publishedTime: toIsoDate(post.publishedAt),
        modifiedTime: toIsoDate(post.publishedAt),
      };
    }
  }

  if (normalizedPath.startsWith('/developers/')) {
    const suffix = normalizedPath.replace('/developers/', '');
    const titleSuffix = suffix
      .split('-')
      .map((chunk) => chunk.charAt(0).toUpperCase() + chunk.slice(1))
      .join(' ');

    const devTitles: Record<Language, string> = {
      EN: `KORION Developers ${titleSuffix}`,
      KR: `KORION 개발자 ${titleSuffix}`,
      JA: `KORION 開発者 ${titleSuffix}`,
      ZH: `KORION 开发者 ${titleSuffix}`,
    };

    const devDescs: Record<Language, string> = {
      EN: 'Developer documentation for KORION APIs, SDK workflows, authentication, rate limits, and integration guidance.',
      KR: 'KORION API, SDK 워크플로우, 인증, 속도 제한 및 통합 가이드에 대한 개발자 문서입니다.',
      JA: 'KORION API、SDKワークフロー、認証、レート制限、および統合ガイダンスに関する開発者ドキュメント。',
      ZH: 'KORION API、SDK 工作流程、身份验证、速率限制和集成指南的开发者文档。',
    };

    return {
      title: devTitles[language],
      description: devDescs[language],
      canonicalPath: normalizedPath,
    };
  }

  const entry = staticSeo[normalizedPath];
  if (entry) {
    return entry[language];
  }

  return {
    ...defaultSeo,
    canonicalPath: normalizedPath,
  };
}
