import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Crown,
  Code2,
  Globe2,
  ShieldCheck,
  Users2,
  ChevronRight,
  BadgeCheck,
  Network,
  Megaphone,
  Flag,
  Sparkles,
  Orbit,
  Mail,
  Linkedin,
  Instagram,
  User,
  CheckCircle2,
} from 'lucide-react';
import { Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useLanguage } from '../contexts/LanguageContext';
import { useAssetUrl } from '../utils/assetLoader';
import { mockAdminService } from '../services/mockAdminService';
import type { Partner, LeadershipMember } from '../types/admin';
import badgeGold from '../../assets/team/badges/badge-gold.png';
import badgeBlue from '../../assets/team/badges/badge-blue.png';
import badgeGreen from '../../assets/team/badges/badge-green.png';
import './TeamSection.css';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.6, ease: 'easeOut' as const },
};

const getRoleIcon = (role: string) => {
  const roleLower = role.toLowerCase();
  if (roleLower.includes('ceo') || roleLower.includes('founder')) return Crown;
  if (roleLower.includes('dev') || roleLower.includes('tech') || roleLower.includes('cto')) return Code2;
  return Users2;
};

const partnerRegions = [
  {
    region: 'Asia',
    regionKo: '아시아',
    regionJa: 'アジア',
    regionZh: '亚洲',
    icon: Globe2,
    text: 'Regional communication and growth partners supporting awareness and user expansion.',
    textKo:
      '인지도 확대와 사용자 확장을 지원하는 지역 커뮤니케이션 및 성장 파트너들입니다.',
    textJa:
      '認知度の拡大とユーザーの拡大を支援する、地域のコミュニケーションおよび成長パートナーです。',
    textZh:
      '支持知名度提升和用户扩展的区域沟通与增长合作伙伴。',
  },
  {
    region: 'Europe',
    regionKo: '유럽',
    regionJa: 'ヨーロッパ',
    regionZh: '欧洲',
    icon: Network,
    text: 'Strategic network partners supporting project communication and international positioning.',
    textKo:
      '프로젝트 커뮤니케이션과 국제적 포지셔닝을 지원하는 전략 네트워크 파트너들입니다.',
    textJa:
      'プロジェクトのコミュニケーションと国際的なポジショニングを支援する戦略的ネットワークパートナーです。',
    textZh:
      '支持项目沟通和国际定位的战略网络合作伙伴。',
  },
  {
    region: 'North America',
    regionKo: '북미',
    regionJa: '北米',
    regionZh: '北美',
    icon: Megaphone,
    text: 'Promotion-oriented partners expanding visibility across digital channels and communities.',
    textKo:
      '디지털 채널과 커뮤니티 전반에서 가시성을 확대하는 홍보 중심 파트너들입니다.',
    textJa:
      'デジタルチャネルやコミュニティ全体で視認性を拡大する、プロモーション重視のパートナーです。',
    textZh:
      '致力于在数字渠道和社区中扩大知名度的推广型合作伙伴。',
  },
  {
    region: 'Global Network',
    regionKo: '글로벌 네트워크',
    regionJa: 'グローバルネットワーク',
    regionZh: '全球网络',
    icon: Users2,
    text: 'A distributed global support layer strengthening community trust and ecosystem presence.',
    textKo:
      '커뮤니티 신뢰와 생태계 존재감을 강화하는 분산형 글로벌 지원 네트워크입니다.',
    textJa:
      'コミュニティの信頼とエコシステムの存在感を強化する、分散型のグローバルサポートレイヤーです。',
    textZh:
      '加强社区信任和生态系统影响力的分布式全球支持层。',
  },
];

export function TeamSection() {
  const { t, language } = useLanguage();
  const [partners, setPartners] = useState<Partner[]>([]);
  const [leadership, setLeadership] = useState<LeadershipMember[]>([]);
  
  const ceoImage = useAssetUrl('team-ceo-image', () => import('../../assets/team/jang.jpeg'));
  const devDirectorImage = useAssetUrl('team-dev-director-image', () => import('../../assets/team/seo.jpeg'));

  useEffect(() => {
    const pData = mockAdminService.getPartners();
    setPartners(pData.filter(p => p.isVisible).sort((a, b) => a.position - b.position));

    const lData = mockAdminService.getLeadership();
    setLeadership(lData.filter(l => l.isVisible).sort((a, b) => a.position - b.position));
  }, []);

  const getMemberImage = (member: LeadershipMember) => {
     if (member.image) return member.image;
     if (member.name === 'Richard Jang') return ceoImage;
     if (member.name === 'Seo-Jeong Ahn') return devDirectorImage;
     return undefined;
  };

  return (
    <main className="team-section">
      <section className="team-section__hero">
        <div className="team-section__hero-bg">
          <div className="team-section__orb team-section__orb--one" />
          <div className="team-section__orb team-section__orb--two" />
          <div className="team-section__grid" />
        </div>

        <div className="team-section__container team-section__hero-container">
          <motion.div
            className="team-section__hero-copy"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="team-section__eyebrow">
              <BadgeCheck size={16} />
              <span>{t('TEAM & PARTNERS', 'TEAM & PARTNERS', 'チーム＆パートナー', '团队与合作伙伴')}</span>
            </div>

            <h1 className="team-section__title">
              {t(
                'Leadership and a Global Partner Network',
                '운영진의 리더십과 글로벌 파트너 네트워크',
                'リーダーシップとグローバルパートナーネットワーク',
                '领导层和全球合作伙伴网络'
              )}
            </h1>

            <p className="team-section__desc">
              {t(
                'KORION strengthens both project credibility and international reach through the strategic leadership of its core executives and an expanding network of country-level partners.',
                'KORION은 핵심 운영진의 전략적 리더십과 각 국가별 파트너들의 확장 네트워크를 바탕으로 프로젝트 신뢰도와 글로벌 도달 범위를 함께 강화하고 있습니다.',
                'KORIONは、コアエグゼクティブの戦略的なリーダーシップと、拡大する国レベルのパートナーネットワークを通じて、プロジェクトの信頼性と国際的なリーチの両方を強化しています。',
                'KORION通过核心管理层的战略领导和不断扩大的国家级合作伙伴网络，增强了项目的公信力和国际影响力。'
              )}
            </p>

            <div className="team-section__hero-actions">
              <Link to="/about" className="team-section__btn team-section__btn--ghost">
                <span>{t('View About', '회사소개 보기', '会社概要を見る', '查看关于我们')}</span>
                <ChevronRight size={18} />
              </Link>
              <div className="team-section__partner-apply">
                <Link to="/partner" className="team-section__btn team-section__btn--partner">
                  <span>{t('Apply as Partner', '파트너 신청', 'パートナーとして申し込む', '申请成为合作伙伴')}</span>
                  <ChevronRight size={18} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="team-section__leadership">
        <div className="team-section__container">
          <motion.div className="team-section__heading team-section__heading--center" {...fadeUp}>
            <span>{t('LEADERSHIP', 'LEADERSHIP', 'リーダーシップ', '领导层')}</span>
            <h2>{t('Core Leadership', '핵심 운영진', 'コアリーダーシップ', '核心领导层')}</h2>
            <p>
              {t(
                'The core leaders responsible for the project’s direction and execution.',
                '프로젝트의 방향성과 실행력을 책임지는 핵심 운영진입니다.',
                'プロジェクトの方向性と実行に責任を持つコアリーダーです。',
                '负责项目方向和执行的核心领导者。'
              )}
            </p>
          </motion.div>

          <div className="team-section__leadership-list">
            {leadership.map((member, index) => {
              const Icon = getRoleIcon(member.role);

              return (
                <motion.article
                  key={member.id}
                  className="team-section__leader-row"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.18 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                >
                  <div className="team-section__leader-photo-panel">
                    <div className="team-section__leader-photo-frame">
                      <ImageWithFallback
                        src={getMemberImage(member)}
                        alt={member.name}
                        className="team-section__leader-photo"
                      />
                    </div>
                    <div className="team-section__leader-role-chip">
                      <Icon size={15} />
                      <span>{t(member.role, member.roleKo, member.roleJa || member.role, member.roleZh || member.role)}</span>
                    </div>
                  </div>

                  <div className="team-section__leader-content">
                    <div className="team-section__leader-top">
                      <h3>{member.name}</h3>
                    </div>

                    <p className="team-section__leader-summary">
                      {t(member.summary || '', member.summaryKo || member.summary || '', member.summaryJa || member.summary || '', member.summaryZh || member.summary || '')}
                    </p>

                    <p className="team-section__leader-bio">
                      {t(member.bio || '', member.bioKo || member.bio || '', member.bioJa || member.bio || '', member.bioZh || member.bio || '')}
                    </p>

                    <div className="team-section__leader-tags">
                      {(() => {
                        const list = language === 'KR' ? member.highlightsKo :
                                     language === 'JA' ? member.highlightsJa :
                                     language === 'ZH' ? member.highlightsZh :
                                     member.highlights;
                        return (list || []).map((item) => (
                          <span key={item} className="team-section__leader-tag">
                            {item}
                          </span>
                        ));
                      })()}
                    </div>
                    <div className="team-section__socials">
                      {member.socialLinks?.email && (
                        <a href={`mailto:${member.socialLinks.email}`} className="team-section__social" aria-label={`${member.name} email`}>
                          <Mail size={16} />
                        </a>
                      )}
                      {member.socialLinks?.linkedin && (
                        <a
                          href={member.socialLinks.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="team-section__social"
                          aria-label={`${member.name} linkedin`}
                        >
                          <Linkedin size={16} />
                        </a>
                      )}
                      {member.socialLinks?.instagram && (
                        <a
                          href={member.socialLinks.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="team-section__social"
                          aria-label={`${member.name} instagram`}
                        >
                          <Instagram size={16} />
                        </a>
                      )}
                      {member.socialLinks?.twitter && (
                        <a
                          href={member.socialLinks.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="team-section__social"
                          aria-label={`${member.name} twitter`}
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="team-section__partners">
        <div className="team-section__container">
          <motion.div className="team-section__heading" {...fadeUp}>
            <span>{t('GLOBAL PARTNERS', 'GLOBAL PARTNERS', 'グローバルパートナー', '全球合作伙伴')}</span>
            <h2>{t('Regional Partner Network', '권역별 파트너 네트워크', '地域パートナーネットワーク', '区域合作伙伴网络')}</h2>
            <p>
              {t(
                'KORION works with partners across multiple regions and channels to expand visibility, strengthen community growth, and support ecosystem awareness.',
                'KORION은 다양한 권역과 채널에서 프로젝트 인지도와 커뮤니티 성장을 지원하는 파트너들과 함께 움직이고 있습니다.',
                'KORIONは、複数の地域とチャネルのパートナーと協力して、知名度の拡大、コミュニティの成長の強化、エコシステムの認識のサポートを行っています。',
                'KORION与多个地区和渠道的合作伙伴合作，以扩大知名度，加强社区增长，并支持生态系统意识。'
              )}
            </p>
          </motion.div>

          <div className="team-section__partners-grid">
            {partnerRegions.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.region}
                  className="team-section__partner-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.18 }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                >
                  <div className="team-section__partner-icon">
                    <Icon size={20} />
                  </div>
                  <h3>{t(item.region, item.regionKo, item.regionJa, item.regionZh)}</h3>
                  <p>{t(item.text, item.textKo, item.textJa, item.textZh)}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="team-section__profiles">
        <div className="team-section__container">
          <motion.div className="team-section__heading" {...fadeUp}>
            <span>{t('PARTNER PROFILES', 'PARTNER PROFILES', 'パートナープロフィール', '合作伙伴简介')}</span>
            <h2>{t('Partner Profile Showcase', '파트너 프로필 소개', 'パートナープロフィールショーケース', '合作伙伴简介展示')}</h2>
            <p>
              {t(
                'To accommodate a growing network, partner profiles are organized in a refined grid designed for scalability, readability, and premium presentation.',
                '확장되는 파트너 네트워크를 수용하기 위해, 파트너 프로필은 확장성·가독성·프리미엄 표현을 고려한 정제된 그리드 구조로 구성됩니다.',
                '拡大するネットワークに対応するため、パートナープロフィールはスケーラビリティ、読みやすさ、プレミアムなプレゼンテーションを考慮した洗練されたグリッド構造で構成されています。',
                '为了适应不断扩大的网络，合作伙伴简介采用精细的网格结构，旨在实现可扩展性、易读性和高端展示。'
              )}
            </p>
          </motion.div>

          <div className="team-section__profiles-grid">
            {partners.map((item, index) => {
              return (
                <motion.article
                  key={item.id}
                  className="team-section__profile-card"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.18 }}
                  transition={{ duration: 0.45, delay: index * 0.03 }}
                >
                  <div className="team-section__profile-avatar">
                   <div className="team-section__profile-avatar-inner">
                    {item.profileImage ? (
                      <ImageWithFallback
                        src={item.profileImage}
                        alt={item.name}
                        className="team-section__profile-image"
                      />
                    ) : (
                      <div className="team-section__profile-avatar-fallback">
                        <User size={38} />
                      </div>
                    )}
                   </div>
                  </div>

                  <div className="team-section__profile-body">
                    <div className="team-section__profile-country">
                      {item.country}
                      {/* Level Badge - inline beside the country name using image assets */}
                      {item.level && item.level !== 'Partner' && item.level !== 'None' && (
                        <span className="team-section__profile-badge" title={`${item.level} Level`}>
                          {item.level === 'Gold' && <img src={badgeGold} alt="Gold Badge" className="team-section__badge-img" />}
                          {item.level === 'Blue' && <img src={badgeBlue} alt="Blue Badge" className="team-section__badge-img" />}
                          {item.level === 'Green' && <img src={badgeGreen} alt="Green Badge" className="team-section__badge-img" />}
                        </span>
                      )}
                    </div>
                    <h3>{t(item.name, item.nameKo || item.name, item.nameJa || item.name, item.nameZh || item.name)}</h3>
                    <p>{t(item.description, item.descriptionKo, item.descriptionJa, item.descriptionZh)}</p>
                    <div className="team-section__socials team-section__socials--partner">
                      {item.email && (
                        <a href={`mailto:${item.email}`} className="team-section__social" aria-label={`${item.name} email`}>
                          <Mail size={15} />
                        </a>
                      )}
                      {item.socialLinks?.linkedin && (
                        <a
                          href={item.socialLinks.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="team-section__social"
                          aria-label={`${item.name} linkedin`}
                        >
                          <Linkedin size={15} />
                        </a>
                      )}
                      {item.socialLinks?.twitter && (
                        <a
                          href={item.socialLinks.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="team-section__social"
                          aria-label={`${item.name} twitter`}
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                          </svg>
                        </a>
                      )}
                      {item.socialLinks?.instagram && (
                        <a
                          href={item.socialLinks.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="team-section__social"
                          aria-label={`${item.name} instagram`}
                        >
                          <Instagram size={15} />
                        </a>
                      )}
                  </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="team-section__closing">
        <div className="team-section__container">
          <motion.div className="team-section__closing-panel" {...fadeUp}>
            <div className="team-section__closing-copy">
              <span>{t('TRUST & EXECUTION', 'TRUST & EXECUTION', '信頼と実行', '信任与执行')}</span>
              <h2>
                {t(
                  'Leadership and Network Build Trust Together',
                  '리더십과 네트워크가 함께 프로젝트의 신뢰를 만듭니다',
                  'リーダーシップとネットワークが共に信頼を築く',
                  '领导力和网络共同建立信任'
                )}
              </h2>
              <p>
                {t(
                  'KORION builds a balance of trust and growth through strong leadership execution and the scalability of its global partner network.',
                  'KORION은 운영진의 실행력과 글로벌 파트너 네트워크의 확장성을 바탕으로 신뢰와 성장의 균형을 만들어갑니다.',
                  'KORIONは、強力なリーダーシップの実行とグローバルパートナーネットワークのスケーラビリティを通じて、信頼と成長のバランスを築いています。',
                  'KORION通过强大的领导执行力和全球合作伙伴网络的可扩展性，建立了信任与增长的平衡。'
                )}
              </p>
            </div>

            <div className="team-section__closing-visual">
              <div className="team-section__closing-orb" />
              <div className="team-section__closing-ring team-section__closing-ring--one" />
              <div className="team-section__closing-ring team-section__closing-ring--two" />
              <div className="team-section__closing-core">
                <ShieldCheck size={28} />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
