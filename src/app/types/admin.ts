export type Language = 'EN' | 'KR' | 'JA' | 'ZH';

export type PartnerLevel = 'Gold' | 'Blue' | 'Green' | 'None' | 'Partner';

export interface SocialLinks {
  email?: string;
  twitter?: string;
  instagram?: string;
  linkedin?: string;
  custom?: string;
}

export interface Partner {
  id: string;
  name: string;
  nameKo: string;
  nameJa?: string;
  nameZh?: string;
  country: string;
  countryKo: string;
  countryJa?: string;
  countryZh?: string;
  email: string;
  profileImage: string | null;
  level: PartnerLevel;
  description: string;
  descriptionKo: string;
  descriptionJa?: string;
  descriptionZh?: string;
  socialLinks: SocialLinks;
  position: number;
  isVisible: boolean;
}

export type NewsCategory = 'notice' | 'update' | 'event' | 'media';

export interface CardNews {
  id: string;
  slug: string;
  category: NewsCategory;
  title: string;
  titleKo: string;
  titleJa?: string;
  titleZh?: string;
  summary: string;
  summaryKo: string;
  summaryJa?: string;
  summaryZh?: string;
  content: string[];
  contentKo: string[];
  contentJa?: string[];
  contentZh?: string[];
  thumbnail: string | null;
  publishedAt: string;
  isFeatured: boolean;
  isPinned: boolean;
  isVisible: boolean;
  position: number;
  tags: string[];
}

export interface LeadershipMember {
  id: string;
  name: string;
  nameKo: string;
  nameJa?: string;
  nameZh?: string;
  role: string;
  roleKo: string;
  roleJa?: string;
  roleZh?: string;
  summary: string;
  summaryKo: string;
  summaryJa?: string;
  summaryZh?: string;
  bio: string;
  bioKo: string;
  bioJa?: string;
  bioZh?: string;
  highlights: string[];
  highlightsKo: string[];
  highlightsJa?: string[];
  highlightsZh?: string[];
  image: string | null;
  socialLinks: SocialLinks;
  position: number;
  isVisible: boolean;
}
