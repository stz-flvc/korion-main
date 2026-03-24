import { Link } from 'react-router';
import {
  Mail,
  MapPin,
  Phone,
  ExternalLink,
  Github,
  Send,
  MessageCircle,
  FileText,
  ShieldCheck,
  ChevronRight,
} from 'lucide-react';
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaMedium,
  FaDiscord,
  FaLinkedinIn,
} from 'react-icons/fa';
import { SiX, SiThreads } from 'react-icons/si';

import logo from '../../assets/logo/logo.png';
import { useLanguage } from '../contexts/LanguageContext';
import './FooterNew.css';

export function FooterNew() {
  const { t } = useLanguage();

  const companyLinks = [
    { label: t('About', '회사소개'), to: '/about' },
    { label: t('Foundation', '재단'), to: '/foundation' },
    { label: t('News', '회사 소식'), to: '/news' },
    { label: t('Roadmap', '로드맵'), to: '/roadmap' },
  ];

  const resourceLinks = [
    { label: t('Whitepaper', '백서'), to: '/whitepaper' },
    { label: t('Tokenomics', '토크노믹스'), to: '/tokenomics' },
    { label: t('Developers', '개발자'), to: '/developers' },
    { label: t('FAQ', '자주 묻는 질문'), to: '/faq' },
  ];

  const supportLinks = [
    { label: t('Help Center', '고객지원'), to: '/support' },
    { label: t('Contact', '문의하기'), to: '/contact' },
    { label: t('Policy', '정책'), to: '/policy' },
    { label: t('Security', '보안'), to: '/security' },
  ];

  const socialLinks = [
    {
      label: 'X',
      href: 'https://x.com/KORION_Official',
      icon: <SiX size={15} />,
    },
    {
      label: 'Telegram',
      href: 'https://t.me/KORION_Official_chat',
      icon: <Send size={15} />,
    },
    {
      label: 'Discord',
      href: 'http://discord.gg/x7bz2qakvn',
      icon: <FaDiscord size={15} />,
    },
    {
      label: 'Facebook',
      href: 'https://www.facebook.com/profile.php?id=61585729454590',
      icon: <FaFacebookF size={15} />,
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/korion.official/',
      icon: <FaInstagram size={15} />,
    },
    {
      label: 'TikTok',
      href: 'https://www.tiktok.com/@korion_official',
      icon: <FaTiktok size={15} />,
    },
    {
      label: 'Threads',
      href: 'https://www.threads.com/@korion.official',
      icon: <SiThreads size={15} />,
    },
      {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/korion-68a0703a5/",
    icon: <FaLinkedinIn size={15} />,
    },
    {
      label: 'GitHub',
      href: 'https://github.com/KORION-Official/korion-contract',
      icon: <Github size={15} />,
    },
    {
      label: 'Medium',
      href: 'https://medium.com/@official.korion',
      icon: <FaMedium size={15} />,
    },
    {
      label: 'Zealy',
      href: 'https://zealy.io/cw/korion-official',
      icon: <span className="footer-new__zealy-text">Z</span>,
        },
  ];

  return (      
    <footer className="footer-new">
      <div className="footer-new__bg">
        <div className="footer-new__orb footer-new__orb--top" />
        <div className="footer-new__orb footer-new__orb--left" />
        <div className="footer-new__orb footer-new__orb--right" />
        <div className="footer-new__overlay" />
      </div>

      <div className="footer-new__container">
        <div className="footer-new__grid">
          <div className="footer-new__brand-card">
            <Link to="/" className="footer-new__brand">
              <div className="footer-new__logo-box">
                <img src={logo} alt="KORION" className="footer-new__logo" />
              </div>

              <div>
                <div className="footer-new__brand-title">KORION</div>
                <div className="footer-new__brand-subtitle">FOUNDATION</div>
              </div>
            </Link>
          </div>

          <div className="footer-new__column">
            <h3 className="footer-new__heading">{t('Company', '회사')}</h3>
            <div className="footer-new__links">
              {companyLinks.map((item) => (
                <Link key={item.to} to={item.to} className="footer-new__link">
                  <ChevronRight size={14} className="footer-new__link-arrow" />
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="footer-new__column">
            <h3 className="footer-new__heading">{t('Resources', '자료')}</h3>
            <div className="footer-new__links">
              {resourceLinks.map((item) => (
                <Link key={item.to} to={item.to} className="footer-new__link">
                  <ChevronRight size={14} className="footer-new__link-arrow" />
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="footer-new__column">
            <h3 className="footer-new__heading">{t('Support', '지원')}</h3>
            <div className="footer-new__links">
              {supportLinks.map((item) => (
                <Link key={item.to} to={item.to} className="footer-new__link">
                  <ChevronRight size={14} className="footer-new__link-arrow" />
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="footer-new__column">     
            <div className="footer-new__trust-card">
              <div className="footer-new__trust-title">
                <ShieldCheck size={16} className="footer-new__trust-icon" />
                {t('Trust & Transparency', '신뢰와 투명성')}
              </div>

              <p className="footer-new__trust-desc">
                {t(
                  'Public documentation, ecosystem updates, and market visibility are continuously expanded for users and partners.',
                  '공개 문서, 생태계 업데이트, 마켓 가시성은 사용자와 파트너를 위해 지속적으로 확장됩니다.'
                )}
              </p>
            </div>
          </div>
        </div>

        <div className="footer-new__subscribe">
          <div>
            <div className="footer-new__subscribe-title">
              <FileText size={16} className="footer-new__subscribe-icon" />
              {t('Stay updated with KORION', 'KORION 최신 소식을 받아보세요')}
            </div>

            <p className="footer-new__subscribe-desc">
              {t(
                'Receive project updates, announcements, and ecosystem milestones.',
                '프로젝트 업데이트, 공지사항, 생태계 마일스톤 소식을 받아보세요.'
              )}
            </p>
          </div>

          <div className="footer-new__subscribe-form">
            <input
              type="email"
              placeholder={t('Enter your email', '이메일을 입력하세요')}
              className="footer-new__input"
            />

            <button type="button" className="footer-new__subscribe-button">
              {t('Subscribe', '구독하기')}
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        <div className="footer-new__bottom">
          <div className="footer-new__bottom-left">
            <div className="footer-new__social-row">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  title={item.label}
                  className="footer-new__social-icon-link"
                >
                  {item.icon}
                </a>
              ))}
            </div>

            <div className="footer-new__copyright">
              © 2026 KORION FOUNDATION. {t('All rights reserved.', 'All rights reserved.')}
            </div>
          </div>

          <div className="footer-new__bottom-links">
            <Link to="/policy" className="footer-new__bottom-link">
              {t('Policy', '정책')}
            </Link>
            <Link to="/security" className="footer-new__bottom-link">
              {t('Security', '보안')}
            </Link>
            <Link to="/support" className="footer-new__bottom-link">
              {t('Support', '지원')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterNew;