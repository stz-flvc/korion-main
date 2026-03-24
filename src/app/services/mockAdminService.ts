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
          id: 'p1', name: 'Lead Platform Engineer', nameKo: '리드 플랫폼 엔지니어',
          country: 'General', countryKo: '일반', email: 'platform@korion.io',
          profileImage: null, level: 'Gold', description: 'Core platform architecture and infrastructure.',
          descriptionKo: '코어 플랫폼 아키텍처 및 인프라 담당.',
          socialLinks: { twitter: '', linkedin: '', instagram: '' }, position: 0, isVisible: true
        },
        {
          id: 'p2', name: 'Nigerian Leader', nameKo: '나이지리아 리더',
          country: 'Joel', countryKo: '조엘', email: 'joel@korion.io',
          profileImage: null, level: 'Gold', description: 'Leading strategic initiatives in Nigeria.',
          descriptionKo: '나이지리아 전략적 이니셔티브 리드.',
          socialLinks: { twitter: '', linkedin: '', instagram: '' }, position: 1, isVisible: true
        },
        {
          id: 'p3', name: 'Nigerian Partner', nameKo: '나이지리아 파트너',
          country: 'Eben', countryKo: '에벤', email: 'eben@korion.io',
          profileImage: null, level: 'Blue', description: 'Regional partnership development.',
          descriptionKo: '지역 파트너십 개발 담당.',
          socialLinks: { twitter: '', linkedin: '', instagram: '' }, position: 2, isVisible: true
        },
        {
          id: 'p4', name: 'Nigerian Partner', nameKo: '나이지리아 파트너',
          country: 'Giant Judge', countryKo: '자이언트 저지', email: 'judge@korion.io',
          profileImage: null, level: 'Blue', description: 'Compliance and regional relations.',
          descriptionKo: '컴플라이언스 및 지역 관계 담당.',
          socialLinks: { twitter: '', linkedin: '', instagram: '' }, position: 3, isVisible: true
        },
        {
          id: 'p5', name: 'Nigerian Partner', nameKo: '나이지리아 파트너',
          country: 'Hypr', countryKo: '하이퍼', email: 'hypr@korion.io',
          profileImage: null, level: 'Green', description: 'Specialized technological integrations.',
          descriptionKo: '특수 기술 통합 담당.',
          socialLinks: { twitter: '', linkedin: '', instagram: '' }, position: 4, isVisible: true
        },
        {
          id: 'p6', name: 'Kyrgyzstan Partner', nameKo: '키르기스스탄 파트너',
          country: 'Mr. Georgi Cooper', countryKo: '조지 쿠퍼 씨', email: 'georgi@korion.io',
          profileImage: null, level: 'None', description: 'Central Asian market expansion.',
          descriptionKo: '중앙아시아 시장 확장 담당.',
          socialLinks: { twitter: '', linkedin: '', instagram: '' }, position: 5, isVisible: true
        },
        {
          id: 'p7', name: 'US Digital Outreach Partner', nameKo: '미국 디지털 홍보 파트너',
          country: 'US', countryKo: '미국', email: 'us@korion.io',
          profileImage: null, level: 'None', description: 'Digital marketing and outreach in North America.',
          descriptionKo: '북미 디지털 마케팅 및 홍보 담당.',
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
          name: 'Richard Jang', nameKo: 'Richard Jang',
          role: 'CEO / Founder', roleKo: '대표이사 / Founder',
          summary: 'Leads the overall vision, planning, development direction, and ecosystem strategy of the project.',
          summaryKo: '프로젝트의 전체 비전, 기획, 개발 방향성, 생태계 전략을 총괄합니다.',
          bio: 'Richard Jang has led multiple projects across various industries and brings broad executive leadership experience. He oversees the strategic direction, planning, development coordination, and overall ecosystem execution of KORION.',
          bioKo: 'Richard Jang은 다양한 분야에서 여러 프로젝트를 이끌어온 대표이사 경력을 바탕으로 KORION의 전략 방향, 기획, 개발 조율, 전반적인 생태계 실행을 총괄하고 있습니다.',
          highlights: ['Strategic Direction', 'Planning & Execution', 'Ecosystem Leadership'],
          highlightsKo: ['전략 총괄', '기획 및 실행', '생태계 리더십'],
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
          name: 'Seo-Jeong Ahn', nameKo: 'Seo-Jeong Ahn',
          role: 'Development Director', roleKo: '개발이사',
          summary: 'Oversees the full technical execution of the ecosystem including platform architecture and development.',
          summaryKo: '플랫폼 아키텍처와 개발 전반을 포함한 생태계의 전체 기술 실행을 총괄합니다.',
          bio: 'Seo-jeong Ahn, a graduate of Korea University, serves as the Development Director of the KORION project, overseeing the overall development, including system architecture, technical execution, and platform development at the ecosystem level.',
          bioKo: '고려대학교 졸업자인 안서정 개발이사는 KORION 프로젝트 전반의 개발을 총괄하며, 시스템 설계, 기술 실행, 플랫폼 개발을 생태계 단위에서 책임지고 있습니다.',
          highlights: ['Architecture Design', 'Platform Development', 'Technical Leadership'],
          highlightsKo: ['아키텍처 설계', '플랫폼 개발', '기술 리더십'],
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
