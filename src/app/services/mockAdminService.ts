import type { Partner, CardNews, LeadershipMember, PartnerLevel } from '../types/admin';

const STORAGE_KEYS = {
  PARTNERS: 'kori_admin_partners',
  NEWS: 'kori_admin_news',
  LEADERSHIP: 'kori_admin_leadership',
};

export const mockAdminService = {
  // --- Partners ---
  getPartners(): Partner[] {
    const data = localStorage.getItem(STORAGE_KEYS.PARTNERS);
    if (!data) {
      const seedData: Partner[] = [
        {
          id: 'p1', name: 'Lead Platform Engineer', nameKo: '리드 플랫폼 엔지니어', nameJa: 'リードプラットフォームエンジニア', nameZh: '首席平台工程师',
          country: 'General', countryKo: '일반', countryJa: '一般', countryZh: '常规', email: 'platform@korion.io',
          profileImage: null, level: 'Gold', description: 'Core platform architecture and infrastructure.',
          descriptionKo: '코어 플랫폼 아키텍처 및 인프라 담당.', descriptionJa: 'コアプラットフォームのアーキテクチャとインフラストラクチャー。', descriptionZh: '核心平台架构和基础设施。',
          socialLinks: { twitter: '', linkedin: '', instagram: '' }, position: 0, isVisible: true
        },
        {
          id: 'p2', name: 'Nigerian Leader', nameKo: '나이지리아 리더', nameJa: 'ナイジェリアリーダー', nameZh: '尼日利亚领导人',
          country: 'Joel', countryKo: '조엘', countryJa: 'ジョエル', countryZh: '乔尔', email: 'joel@korion.io',
          profileImage: null, level: 'Gold', description: 'Leading strategic initiatives in Nigeria.',
          descriptionKo: '나이지리아 전략적 이니셔티브 리드.', descriptionJa: 'ナイジェリアでの戦略的なイニシアチブを主導。', descriptionZh: '领导尼日利亚的战略举措。',
          socialLinks: { twitter: '', linkedin: '', instagram: '' }, position: 1, isVisible: true
        },
        {
          id: 'p3', name: 'Nigerian Partner', nameKo: '나이지리아 파트너', nameJa: 'ナイジェリアパートナー', nameZh: '尼日利亚合作伙伴',
          country: 'Eben', countryKo: '에벤', countryJa: 'エベン', countryZh: '埃本', email: 'eben@korion.io',
          profileImage: null, level: 'Blue', description: 'Regional partnership development.',
          descriptionKo: '지역 파트너십 개발 담당.', descriptionJa: '地域パートナーシップの開発。', descriptionZh: '区域合作伙伴关系发展。',
          socialLinks: { twitter: '', linkedin: '', instagram: '' }, position: 2, isVisible: true
        },
        {
          id: 'p4', name: 'Nigerian Partner', nameKo: '나이지리아 파트너', nameJa: 'ナイジェリアパートナー', nameZh: '尼日利亚合作伙伴',
          country: 'Giant Judge', countryKo: '자이언트 저지', countryJa: 'ジャイアント・ジャッジ', countryZh: '巨人法官', email: 'judge@korion.io',
          profileImage: null, level: 'Blue', description: 'Compliance and regional relations.',
          descriptionKo: '컴플라이언스 및 지역 관계 담당.', descriptionJa: 'コンプライアンスと地域関係。', descriptionZh: '合规性与区域关系。',
          socialLinks: { twitter: '', linkedin: '', instagram: '' }, position: 3, isVisible: true
        },
        {
          id: 'p5', name: 'Nigerian Partner', nameKo: '나이지리아 파트너', nameJa: 'ナイジェリアパートナー', nameZh: '尼日利亚合作伙伴',
          country: 'Hypr', countryKo: '하이퍼', countryJa: 'ハイパー', countryZh: '海珀', email: 'hypr@korion.io',
          profileImage: null, level: 'Green', description: 'Specialized technological integrations.',
          descriptionKo: '특수 기술 통합 담당.', descriptionJa: '専門的な技術統合。', descriptionZh: '专业技术整合。',
          socialLinks: { twitter: '', linkedin: '', instagram: '' }, position: 4, isVisible: true
        },
        {
          id: 'p6', name: 'Kyrgyzstan Partner', nameKo: '키르기스스탄 파트너', nameJa: 'キルギスパートナー', nameZh: '吉尔吉斯斯坦合作伙伴',
          country: 'Mr. Georgi Cooper', countryKo: '조지 쿠퍼 씨', countryJa: 'ジョージ・クーパー氏', countryZh: '乔治·库珀先生', email: 'georgi@korion.io',
          profileImage: null, level: 'None', description: 'Central Asian market expansion.',
          descriptionKo: '중앙아시아 시장 확장 담당.', descriptionJa: '中央アジア市場の拡大。', descriptionZh: '中亚市场拓展。',
          socialLinks: { twitter: '', linkedin: '', instagram: '' }, position: 5, isVisible: true
        },
        {
          id: 'p7', name: 'US Digital Outreach Partner', nameKo: '미국 디지털 홍보 파트너', nameJa: '米国デジタルアウトリーチパートナー', nameZh: '美国数字外展合作伙伴',
          country: 'US', countryKo: '미국', countryJa: '米国', countryZh: '美国', email: 'us@korion.io',
          profileImage: null, level: 'None', description: 'Digital marketing and outreach in North America.',
          descriptionKo: '북미 디지털 마케팅 및 홍보 담당.', descriptionJa: '北米でのデジタルマーケティングとアウトリーチ。', descriptionZh: '北美的数字营销和外展活动。',
          socialLinks: { twitter: '', linkedin: '', instagram: '' }, position: 6, isVisible: true
        }
      ];
      localStorage.setItem(STORAGE_KEYS.PARTNERS, JSON.stringify(seedData));
      return seedData;
    }
    try {
      const parsed = JSON.parse(data);
      return parsed.map((p: any) => ({
        ...p,
        name: p.name || '',
        nameKo: p.nameKo || p.name || '',
        country: p.country || '',
        countryKo: p.countryKo || p.country || '',
        email: p.email || '',
        level: p.level || 'None',
        description: p.description || p.desc || '',
        descriptionKo: p.descriptionKo || p.description || p.descKo || p.desc || '',
        socialLinks: p.socialLinks || { twitter: p.twitter || '', linkedin: p.linkedin || '', instagram: p.instagram || '' },
        isVisible: p.isVisible !== undefined ? p.isVisible : true,
        position: p.position !== undefined ? p.position : 0
      }));
    } catch (e) {
      console.error('Failed to parse partners data', e);
      return [];
    }
  },
  savePartner(partner: Partner) {
    const partners = this.getPartners();
    const index = partners.findIndex(p => p.id === partner.id);
    if (index > -1) {
      partners[index] = {
          ...partner,
          socialLinks: partner.socialLinks || {}
      };
    } else {
      partners.push({
          ...partner,
          socialLinks: partner.socialLinks || {}
      });
    }
    localStorage.setItem(STORAGE_KEYS.PARTNERS, JSON.stringify(partners));
  },
  deletePartner(id: string) {
    const partners = this.getPartners();
    const filtered = partners.filter(p => p.id !== id);
    localStorage.setItem(STORAGE_KEYS.PARTNERS, JSON.stringify(filtered));
  },
  reorderPartners(ids: string[]) {
    const partners = this.getPartners();
    const reordered = ids.map((id, index) => {
      const p = partners.find(item => item.id === id);
      return p ? { ...p, position: index } : null;
    }).filter((p): p is Partner => p !== null);
    localStorage.setItem(STORAGE_KEYS.PARTNERS, JSON.stringify(reordered));
  },

  // --- News ---
  getNews(): CardNews[] {
    const data = localStorage.getItem(STORAGE_KEYS.NEWS);
    if (!data) return [];
    try {
      const parsed = JSON.parse(data);
      return parsed.map((n: any) => ({
        ...n,
        title: n.title || '',
        titleKo: n.titleKo || n.title || '',
        summary: n.summary || '',
        summaryKo: n.summaryKo || n.summary || '',
        isVisible: n.isVisible !== undefined ? n.isVisible : true,
        isFeatured: n.isFeatured !== undefined ? n.isFeatured : false,
        isPinned: n.isPinned !== undefined ? n.isPinned : false,
        position: n.position !== undefined ? n.position : 0,
        tags: n.tags || []
      }));
    } catch (e) {
      console.error('Failed to parse news data', e);
      return [];
    }
  },
  saveNews(newsItem: CardNews) {
    const news = this.getNews();
    const index = news.findIndex(n => n.id === newsItem.id);
    if (index > -1) {
      news[index] = newsItem;
    } else {
      news.push(newsItem);
    }
    localStorage.setItem(STORAGE_KEYS.NEWS, JSON.stringify(news));
  },
  deleteNews(id: string) {
    const news = this.getNews();
    const filtered = news.filter(n => n.id !== id);
    localStorage.setItem(STORAGE_KEYS.NEWS, JSON.stringify(filtered));
  },
  reorderNews(ids: string[]) {
    const news = this.getNews();
    const reordered = ids.map((id, index) => {
      const n = news.find(item => item.id === id);
      return n ? { ...n, position: index } : null;
    }).filter((n): n is CardNews => n !== null);
    localStorage.setItem(STORAGE_KEYS.NEWS, JSON.stringify(reordered));
  },

  // --- Leadership ---
  getLeadership(): LeadershipMember[] {
    const data = localStorage.getItem(STORAGE_KEYS.LEADERSHIP);
    const seedData: LeadershipMember[] = [
        {
          id: 'l1',
          name: 'Richard Jang', nameKo: 'Richard Jang', nameJa: 'リチャード・ジャン', nameZh: '理查德·张',
          role: 'CEO / Founder', roleKo: '대표이사 / Founder', roleJa: '最高経営責任者 / 創業者', roleZh: '首席执行官 / 创始人',
          summary: 'Leads the overall vision, planning, development direction, and ecosystem strategy of the project.',
          summaryKo: '프로젝트의 전체 비전, 기획, 개발 방향성, 생태계 전략을 총괄합니다.', summaryJa: 'プロジェクト全体のビジョン、計画、開発の方向性、およびエコシステム戦略を主導します。', summaryZh: '领导项目的整体愿景、规划、发展方向和生态系统战略。',
          bio: 'Richard Jang has led multiple projects across various industries and brings broad executive leadership experience. He oversees the strategic direction, planning, development coordination, and overall ecosystem execution of KORION.',
          bioKo: 'Richard Jang은 다양한 분야에서 여러 프로젝트를 이끌어온 대표이사 경력을 바탕으로 KORION의 전략 방향, 기획, 개발 조율, 전반적인 생태계 실행을 총괄하고 있습니다.', bioJa: 'リチャード・ジャンは、さまざまな業界で複数のプロジェクトを主導し、幅広い経営指導の経験をもたらします。KORIONの戦略的な方向性、計画、開発の調整、および全体的なエコシステムの実行を監督します。', bioZh: '理查德·张在多个行业领导了多个项目，带来了广泛的执行领导经验。他负责监督KORION的战略方向、规划、开发协调和整体生态系统的执行。',
          highlights: ['Strategic Direction', 'Planning & Execution', 'Ecosystem Leadership'],
          highlightsKo: ['전략 총괄', '기획 및 실행', '생태계 리더십'], highlightsJa: ['戦略的な方向性', '計画と実行', 'エコシステムのリーダーシップ'], highlightsZh: ['战略方向', '规划与执行', '生态系统领导力'],
          image: null,
          socialLinks: {
            email: 'jang2020111@gmail.com',
            linkedin: 'https://www.linkedin.com/in/richard-jang-36a1b02a1/',
            instagram: 'https://www.instagram.com/cats__j/'
          },
          position: 0, isVisible: true
        },
        {
          id: 'l2',
          name: 'Seo-Jeong Ahn', nameKo: 'Seo-Jeong Ahn', nameJa: 'アン・ソジョン', nameZh: '安瑞贞',
          role: 'Development Director', roleKo: '개발이사', roleJa: '開発ディレクター', roleZh: '开发总监',
          summary: 'Oversees the full technical execution of the ecosystem including platform architecture and development.',
          summaryKo: '플랫폼 아키텍처와 개발 전반을 포함한 생태계의 전체 기술 실행을 총괄합니다.', summaryJa: 'プラットフォームのアーキテクチャと開発を含む、エコシステムの完全な技術的実行を監督します。', summaryZh: '负责监督生态系统的全面技术执行，包括平台架构和开发。',
          bio: 'Seo-jeong Ahn, a graduate of Korea University, serves as the Development Director of the KORION project, overseeing the overall development, including system architecture, technical execution, and platform development at the ecosystem level.',
          bioKo: '고려대학교 졸업자인 안서정 개발이사는 KORION 프로젝트 전반의 개발을 총괄하며, 시스템 설계, 기술 실행, 플랫폼 개발을 생태계 단위에서 책임지고 있습니다.', bioJa: '高麗大学を卒業したアン・ソジョンは、KORIONプロジェクトの開発ディレクターを務め、システムアーキテクチャ、技術的実行、およびエコシステムレベルでのプラットフォーム開発を含む全体的な開発を監督しています。', bioZh: '毕业于高丽大学的安瑞贞担任KORION项目的开发总监，负责监督整体开发，包括系统架构、技术执行和生态系统层面的平台开发。',
          highlights: ['Architecture Design', 'Platform Development', 'Technical Leadership'],
          highlightsKo: ['아키텍처 설계', '플랫폼 개발', '기술 리더십'], highlightsJa: ['アーキテクチャ設計', 'プラットフォーム開発', '技術的リーダーシップ'], highlightsZh: ['架构设计', '平台开发', '技术领导力'],
          image: null,
          socialLinks: {
            email: 'dev@korion.io',
            linkedin: 'https://www.linkedin.com/',
            instagram: 'https://www.instagram.com/'
          },
          position: 1, isVisible: true
        }
      ];

    if (!data) {
      localStorage.setItem(STORAGE_KEYS.LEADERSHIP, JSON.stringify(seedData));
      return seedData;
    }
    try {
      const parsed = JSON.parse(data);
      // Ensure Richard Jang and Seo-Jeong Ahn exist if they are not in the list (force restore if missing)
      const existingIds = parsed.map((m: any) => m.id);
      seedData.forEach(seed => {
        if (!existingIds.includes(seed.id)) {
          parsed.push(seed);
        }
      });

      return parsed.map((m: any) => ({
          ...m,
          name: m.name || '',
          nameKo: m.nameKo || m.name || '',
          role: m.role || '',
          roleKo: m.roleKo || m.role || '',
          isVisible: m.isVisible !== undefined ? m.isVisible : true,
          position: m.position !== undefined ? m.position : 0,
          socialLinks: m.socialLinks || { 
            email: m.email || '', 
            twitter: m.twitter || '', 
            linkedin: m.linkedin || '', 
            instagram: m.instagram || '' 
          },
          highlights: m.highlights || [],
          highlightsKo: m.highlightsKo || [],
          highlightsJa: m.highlightsJa || [],
          highlightsZh: m.highlightsZh || []
      }));
    } catch (e) {
      console.error('Failed to parse leadership data', e);
      return seedData;
    }
  },
  saveLeadershipMember(member: LeadershipMember) {
    const l = this.getLeadership();
    const index = l.findIndex(m => m.id === member.id);
    if (index > -1) {
      l[index] = {
          ...member,
          socialLinks: member.socialLinks || {}
      };
    } else {
      l.push({
          ...member,
          socialLinks: member.socialLinks || {}
      });
    }
    localStorage.setItem(STORAGE_KEYS.LEADERSHIP, JSON.stringify(l));
  },
  deleteLeadershipMember(id: string) {
    const l = this.getLeadership();
    const filtered = l.filter(m => m.id !== id);
    localStorage.setItem(STORAGE_KEYS.LEADERSHIP, JSON.stringify(filtered));
  },
  reorderLeadership(ids: string[]) {
    const l = this.getLeadership();
    const reordered = ids.map((id, index) => {
      const m = l.find(item => item.id === id);
      return m ? { ...m, position: index } : null;
    }).filter((m): m is LeadershipMember => m !== null);
    localStorage.setItem(STORAGE_KEYS.LEADERSHIP, JSON.stringify(reordered));
  },
};
