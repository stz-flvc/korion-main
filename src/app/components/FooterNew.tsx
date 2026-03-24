import React, { memo, useState } from 'react';
import { Link } from 'react-router';
import {
  ShieldCheck,
  ChevronRight,
  Github,
  Send,
  FileText,
  ExternalLink,
  Loader2,
  Check,
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
import { prefetchRoute } from '../utils/routePrefetch';
import './FooterNew.css';

export const FooterNew = memo(function FooterNew() {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || status === 'loading') return;

    setStatus('loading');
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setStatus('success');
    setEmail('');
    
    // Reset success state after 3 seconds
    setTimeout(() => {
      setStatus('idle');
    }, 3000);
  };

  const companyLinks = [
    { label: t('About', '회사소개', '会社概要', '关于我们'), to: '/about' },
    { label: t('Team', '팀', 'チーム', '团队'), to: '/team' },
    { label: t('Foundation', '재단', '財団', '基金会'), to: '/foundation' },
    { label: t('Treasury', '트레저리', 'トレジャリー', '国库'), to: '/treasury' },
    { label: t('Roadmap', '로드맵', 'ロードマップ', '路线图'), to: '/roadmap' },
    { label: t('News', '회사 소식', 'ニュース', '新闻'), to: '/news' },
  ];

  const ecosystemLinks = [
    { label: t('Ecosystem', '생태계', 'エコシステム', '生态系统'), to: '/ecosystem' },
    { label: t('KORION Pay', 'KORION Pay', 'KORION Pay', 'KORION Pay'), to: '/korionpay' },
    { label: t('Foxyya Platform', 'Foxyya 플랫폼', 'Foxyyaプラットフォーム', 'Foxyya平台'), to: '/foxyya' },
    { label: t('Mining Hub', '채굴 허브', 'マイニングハブ', '挖矿中心'), to: '/mining' },
    { label: t('Download', '다운로드', 'ダウンロード', '下载'), to: '/download' },
  ];

  const resourceLinks = [
    { label: t('Whitepaper', '백서', 'ホワイトペーパー', '白皮书'), to: '/whitepaper' },
    { label: t('Tokenomics', '토크노믹스', 'トークノミクス', '代币经济学'), to: '/tokenomics' },
    { label: t('Smart Contract', '스마트 컨트랙트', 'スマートコントラクト', '智能合约'), to: '/smart-contract' },
    { label: t('Media Kit', '미디어킷', 'メディアキット', '媒体资料包'), to: '/media-kit' },
    { label: t('Developers', '개발자', '開発者', '开发者'), to: '/developers' },
  ];

  const supportLinks = [
    { label: t('FAQ', '자주 묻는 질문', 'よくある質問', '常见问题'), to: '/faq' },
    { label: t('Help Center', '고객지원', 'ヘルプセンター', '帮助中心'), to: '/support' },
    { label: t('Contact', '문의하기', 'お問い合わせ', '联系我们'), to: '/contact' },
    { label: t('Policy', '정책', 'ポリシー', '政策'), to: '/policy' },
    { label: t('Security', '보안', 'セキュリティ', '安全'), to: '/security' },
  ];

  const marketLinks = [
    {
      label: t('Sun.io Listing', 'SUN.io 거래', 'Sun.io上場', 'Sun.io上市'),
      to: 'https://sun.io/?lang=en-US#/scan/pairDetail?pairAddress=TCHbWJUBZ9DVpaPb6QW9vb31yTSz7sfhQh&version=v2',
      blank: true,
    },
    { label: t('Explorer', '익스플로러', 'エクスプローラー', '浏览器'), to: '/explorer' },
    { label: t('Listing Info', '상장 정보', '上場情報', '上市信息'), to: '/listing-info' },
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
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/korion-68a0703a5/',
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

  const renderFooterLink = (
    item: { label: string; to: string; blank?: boolean },
    extraClassName = ''
  ) => {
    if (item.blank) {
      return (
        <a
          key={item.to}
          href={item.to}
          target="_blank"
          rel="noopener noreferrer"
          className={`footer-new__link ${extraClassName}`.trim()}
        >
          <span className="footer-new__link-left">
            <ChevronRight size={14} className="footer-new__link-arrow" />
            {item.label}
          </span>
          <ExternalLink size={13} className="footer-new__link-external" />
        </a>
      );
    }

    return (
      <Link
        key={item.to}
        to={item.to}
        className={`footer-new__link ${extraClassName}`.trim()}
        onMouseEnter={() => prefetchRoute(item.to)}
        onFocus={() => prefetchRoute(item.to)}
      >
        <span className="footer-new__link-left">
          <ChevronRight size={14} className="footer-new__link-arrow" />
          {item.label}
        </span>
      </Link>
    );
  };

  return (
    <footer className="footer-new">
      <div className="footer-new__bg">
        <div className="footer-new__orb footer-new__orb--top" />
        <div className="footer-new__orb footer-new__orb--left" />
        <div className="footer-new__orb footer-new__orb--right" />
        <div className="footer-new__overlay" />
      </div>

      <div className="footer-new__container">
        <div className="footer-new__topline" />

        <div className="footer-new__grid">
          <div className="footer-new__brand-card">
            <Link
              to="/"
              className="footer-new__brand"
              onMouseEnter={() => prefetchRoute('/')}
              onFocus={() => prefetchRoute('/')}
            >
              <div className="footer-new__logo-box">
                <img src={logo} alt="KORION" className="footer-new__logo" />
              </div>

              <div>
                <div className="footer-new__brand-title">KORION</div>
                <div className="footer-new__brand-subtitle">FOUNDATION</div>
              </div>
            </Link>

            <div className="footer-new__column footer-new__column--wide">
              <div className="footer-new__trust-card">
                <div className="footer-new__trust-title">
                  <ShieldCheck size={16} className="footer-new__trust-icon" />
                  {t('Trust & Transparency', '신뢰와 투명성', '信頼と透明性', '信任与透明')}
                </div>

                <p className="footer-new__trust-desc">
                  {t(
                    'Public documentation, ecosystem updates, developer information, and market visibility are continuously expanded for users, builders, and partners.',
                    '공개 문서, 생태계 업데이트, 개발자 자료, 마켓 가시성은 사용자와 빌더, 파트너를 위해 지속적으로 확장됩니다.',
                    '公開ドキュメント、エコシステムの更新、開発者情報、マーケットの可視性は、ユーザー、ビルダー、パートナーのために継続的に拡大されています。',
                    '公开文档、生态系统更新、开发者信息和市场可见性正在不断为用户、建设者和合作伙伴扩展。'
                  )}
                </p>
              </div>
            </div>
          </div>

          <div className="footer-new__nav-grid">
            <div className="footer-new__column">
              <h3 className="footer-new__heading">{t('Company', '회사', '会社', '公司')}</h3>
              <div className="footer-new__links">
                {companyLinks.map((item) => renderFooterLink(item))}
              </div>
            </div>

            <div className="footer-new__column">
              <h3 className="footer-new__heading">{t('Ecosystem', '생태계', 'エコシステム', '生态系统')}</h3>
              <div className="footer-new__links">
                {ecosystemLinks.map((item) => renderFooterLink(item))}
              </div>
            </div>

            <div className="footer-new__column">
              <h3 className="footer-new__heading">{t('Resources', '자료', 'リソース', '资源')}</h3>
              <div className="footer-new__links">
                {resourceLinks.map((item) => renderFooterLink(item))}
              </div>
            </div>

            <div className="footer-new__column">
              <h3 className="footer-new__heading">{t('Support', '지원', 'サポート', '支持')}</h3>
              <div className="footer-new__links">
                {supportLinks.map((item) => renderFooterLink(item))}
              </div>
            </div>

            <div className="footer-new__column">
              <h3 className="footer-new__heading">{t('Market', '마켓', 'マーケット', '市场')}</h3>
              <div className="footer-new__links">
                {marketLinks.map((item) => renderFooterLink(item))}
              </div>
            </div>
          </div>
        </div>

        <div className="footer-new__subscribe">
          <div>
            <div className="footer-new__subscribe-title">
              <FileText size={16} className="footer-new__subscribe-icon" />
              {t('Stay updated with KORION', 'KORION 최신 소식을 받아보세요', 'KORIONの最新情報を受け取る', '获取KORION最新资讯')}
            </div>

            <p className="footer-new__subscribe-desc">
              {t(
                'Receive project updates, announcements, ecosystem milestones, and official notices.',
                '프로젝트 업데이트, 공지사항, 생태계 마일스톤, 공식 안내 소식을 받아보세요.',
                'プロジェクトの更新、お知らせ、エコシステムのマイルストーン、公式通知を受け取りましょう。',
                '接收项目更新、公告、生态系统里程碑和官方通知。'
              )}
            </p>
          </div>

          <form className="footer-new__subscribe-form" onSubmit={handleSubscribe}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t('Enter your email', '이메일을 입력하세요', 'メールアドレスを入力', '请输入您的邮箱')}
              className="footer-new__input"
              required
              disabled={status === 'loading'}
            />

            <button 
              type="submit" 
              className={`footer-new__subscribe-button ${status === 'success' ? 'is-success' : ''}`}
              disabled={status === 'loading' || status === 'success'}
            >
              {status === 'loading' ? (
                <Loader2 size={16} className="footer-new__spinner" />
              ) : status === 'success' ? (
                <>
                  <Check size={16} />
                  <span>{t('Subscribed!', '구독 완료!', '登録完了！', '已订阅！')}</span>
                </>
              ) : (
                <>
                  {t('Subscribe', '구독하기', '購読する', '订阅')}
                  <ChevronRight size={16} />
                </>
              )}
            </button>
          </form>
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
              © 2026 KORION FOUNDATION. {t('All rights reserved.', 'All rights reserved.', 'All rights reserved.', 'All rights reserved.')}
            </div>
          </div>

          <div className="footer-new__bottom-links">
            <a
              href="mailto:dianainteen@dianainteen.com"
              className="footer-new__bottom-link footer-new__bottom-link--email"
            >
              dianainteen@dianainteen.com
            </a>

            <Link to="/policy" className="footer-new__bottom-link">
              {t('Policy', '정책', 'ポリシー', '政策')}
            </Link>
            <Link to="/security" className="footer-new__bottom-link">
              {t('Security', '보안', 'セキュリティ', '安全')}
            </Link>
            <Link to="/support" className="footer-new__bottom-link">
              {t('Support', '지원', 'サポート', '支持')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
})

export default FooterNew;
