import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import {
  Smartphone,
  CheckCircle,
  ArrowRight,
  Target,
  Rocket,
  TrendingUp,
  Shield,
  Zap,
  Globe,
  Cpu,
  Users,
  Award,
  Download,
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useReveal } from '../hooks/useReveal';
import korionLogo from '../../assets/logo/korion-ek-logo.png';
import './homepage.css';

export function HomePage() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const pageRef = useReveal<HTMLDivElement>();

  const heroRef = useRef<HTMLElement | null>(null);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const [smooth, setSmooth] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let rafId = 0;

    const animate = () => {
      setSmooth((prev) => ({
        x: prev.x + (pointer.x - prev.x) * 0.08,
        y: prev.y + (pointer.y - prev.y) * 0.08,
      }));
      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [pointer]);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;

      setPointer({
        x: (x - 0.5) * 2,
        y: (y - 0.5) * 2,
      });
    };

    const handleLeave = () => {
      setPointer({ x: 0, y: 0 });
    };

    el.addEventListener('mousemove', handleMove);
    el.addEventListener('mouseleave', handleLeave);

    return () => {
      el.removeEventListener('mousemove', handleMove);
      el.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  const rotateX = smooth.y * -10;
  const rotateY = smooth.x * 14;
  const moveX = smooth.x * 18;
  const moveY = smooth.y * 14;
  const glowX = 10 + smooth.x * 18;
  const glowY = 10 + smooth.y * 18;

  const trustItems = [
    {
      icon: <Shield className="w-5 h-5 text-green-400" />,
      label: t('Security Audit', '보안 감사'),
      value: 'EAL5+ Certified',
    },
    {
      icon: <Award className="w-5 h-5 text-blue-400" />,
      label: t('Protocol Rating', '프로토콜 등급'),
      value: 'AAA Grade',
    },
    {
      icon: <Globe className="w-5 h-5 text-purple-400" />,
      label: t('Global Partners', '글로벌 파트너'),
      value: '24+ Networks',
    },
    {
      icon: <Users className="w-5 h-5 text-orange-400" />,
      label: t('Active Users', '활성 사용자'),
      value: '150k+',
    },
  ];

  return (
    <div ref={pageRef} className="home-page">
      {/* Hero */}
      <section
        ref={heroRef}
        id="hero"
        className="korion-hero"
        style={
          {
            ['--mx' as string]: `${smooth.x}`,
            ['--my' as string]: `${smooth.y}`,
            ['--glow-x' as string]: `${glowX}%`,
            ['--glow-y' as string]: `${glowY}%`,
          } as React.CSSProperties
        }
      >
        <div className="korion-hero__noise" />
        <div className="korion-hero__grid" />
        <div className="korion-hero__bg-orb korion-hero__bg-orb--a" />
        <div className="korion-hero__bg-orb korion-hero__bg-orb--b" />
        <div className="korion-hero__bg-orb korion-hero__bg-orb--c" />
        <div className="korion-hero__lightbeam" />

        <div className="korion-hero__container">
          <div className="korion-hero__content">
            <motion.div
              className="korion-hero__badge"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="korion-hero__badge-dot" />
              Next-Generation Digital Asset Ecosystem
            </motion.div>

            <motion.h1
              className="korion-hero__title"
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <span className="korion-hero__title-top">
                KORION
              </span>
              <span className="korion-hero__title-bottom">
                Built for Utility, Scale & Future Payment
              </span>
            </motion.h1>

            <motion.p
              className="korion-hero__desc"
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              
                A premium digital ecosystem designed around wallet infrastructure, real-world utility, platform integration, and next-generation payment experiences.
            </motion.p>

            <motion.div
              className="korion-hero__actions"
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <a href="#ecosystem" className="korion-hero__btn korion-hero__btn--primary">
                Explore Ecosystem
                <ArrowRight size={18} />
              </a>

              <a href="/whitepaper" className="korion-hero__btn korion-hero__btn--ghost">
                View Whitepaper
              </a>
            </motion.div>

            <motion.div
              className="korion-hero__stats"
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="korion-hero__stat">
                <strong>Wallet</strong>
                <span>Infrastructure</span>
              </div>
              <div className="korion-hero__stat">
                <strong>Offline Pay</strong>
                <span>Future Utility</span>
              </div>
              <div className="korion-hero__stat">
                <strong>API / SDK</strong>
                <span>Platform Expansion</span>
              </div>
            </motion.div>


          </div>

          <motion.div
            className="korion-hero__visual"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.15 }}
          >
            <div
              className="korion-crystal-scene"
              style={{
                transform: `
                  translate3d(${moveX}px, ${moveY}px, 0)
                  rotateX(${rotateX}deg)
                  rotateY(${rotateY}deg)
                `,
              }}
            >
              <div className="korion-crystal-scene__ring korion-crystal-scene__ring--outer" />
              <div className="korion-crystal-scene__ring korion-crystal-scene__ring--mid" />
              <div className="korion-crystal-scene__ring korion-crystal-scene__ring--inner" />

              <div className="korion-crystal-scene__shadow" />
              <div className="korion-crystal-scene__glow" />

              <div className="korion-crystal">
                <div className="korion-crystal__core">
                  <div className="korion-crystal__facet korion-crystal__facet--front" />
                  <div className="korion-crystal__facet korion-crystal__facet--back" />
                  <div className="korion-crystal__facet korion-crystal__facet--left" />
                  <div className="korion-crystal__facet korion-crystal__facet--right" />
                  <div className="korion-crystal__facet korion-crystal__facet--top" />
                  <div className="korion-crystal__facet korion-crystal__facet--bottom" />
                  <div className="korion-crystal__shine" />
                  <div className="korion-crystal__inner-glow" />

                  <div className="korion-crystal__logo">
                    <span className="korion-crystal__logo-halo" />
                    <img
                      src={korionLogo}
                      alt="KORION EK Logo"
                      className="korion-crystal__logo-image"
                    />
                  </div>
                </div>
              </div>

              <div className="korion-node korion-node--1">
                <span>Wallet</span>
              </div>
              <div className="korion-node korion-node--2">
                <span>Pay</span>
              </div>
              <div className="korion-node korion-node--3">
                <span>API</span>
              </div>
              <div className="korion-node korion-node--4">
                <span>Utility</span>
              </div>

              <div className="korion-particle korion-particle--1" />
              <div className="korion-particle korion-particle--2" />
              <div className="korion-particle korion-particle--3" />
              <div className="korion-particle korion-particle--4" />
              <div className="korion-particle korion-particle--5" />
              <div className="korion-particle korion-particle--6" />
            </div>
          </motion.div>
        </div>

        <div className="korion-hero__bottom-fade" />
      </section>

      

      {/* Company Introduction */}      
      <section className="home-section home-section--company">
      <div className="korion-hero__bottom-fade-top" />
        <div className="home-company-glow" />
        <div className="home-shell">
          <div className="home-company-grid">
            <div className="reveal">
              <div className="home-section-eyebrow">{t('Who We Are', '우리는 누구인가')}</div>
              <h2 className="home-section-title">
                {t('Building the Global', '글로벌')}{' '}
                <span className="home-section-title-accent">
                  {t('Web3 Standard', 'Web3 표준 구축')}
                </span>
              </h2>
              <p className="home-company-text home-company-text--primary">
                {t(
                  'KORION is not just another cryptocurrency. It is a comprehensive digital asset infrastructure designed to connect institutional finance, retail utility, and decentralized liquidity in one unified ecosystem.',
                  'KORION은 단순한 암호화폐가 아닙니다. 기관 금융, 소매 유틸리티 및 탈중앙화 유동성을 하나의 통합된 생태계로 연결하도록 설계된 포괄적인 디지털 자산 인프라입니다.'
                )}
              </p>
              <p className="home-company-text home-company-text--secondary">
                {t(
                  'Our long-term global strategy positions KORION as the settlement layer between the physical economy and digital finance — starting with offline payment innovation, and expanding into a full cross-chain financial network.',
                  '우리의 장기 글로벌 전략은 KORION을 물리적 경제와 디지털 금융 사이의 정산 레이어로 포지셔닝합니다. 오프라인 결제 혁신부터 시작하여 완전한 크로스체인 금융 네트워크로 확장합니다.'
                )}
              </p>
            </div>

            <div className="home-company-cards">
              {[
                {
                  icon: <Target className="w-5 h-5 text-blue-400" />,
                  title: t('Mission', '미션'),
                  desc: t(
                    'To make decentralized finance accessible, fast, and secure for every person and merchant on the planet — online or offline.',
                    '지구상의 모든 사람과 가맹점이 온라인 또는 오프라인에서 탈중앙화 금융에 접근하고, 빠르고 안전하게 이용할 수 있도록 합니다.'
                  ),
                  modifier: 'home-info-card--blue',
                },
                {
                  icon: <Rocket className="w-5 h-5 text-purple-400" />,
                  title: t('Vision', '비전'),
                  desc: t(
                    'A world where a single KORION address can transact across any chain, any country, in any environment — within 0.4 seconds.',
                    '하나의 KORION 주소로 어떤 체인, 어떤 국가, 어떤 환경에서도 — 0.4초 이내에 거래할 수 있는 세상을 만드는 것입니다.'
                  ),
                  modifier: 'home-info-card--purple',
                },
                {
                  icon: <TrendingUp className="w-5 h-5 text-green-400" />,
                  title: t('Long-Term Strategy', '장기 전략'),
                  desc: t(
                    'Start with proven utility apps (Wallet, Foxyya), expand to DEX and CEX liquidity, then scale CDNS to become the global identity layer for digital assets.',
                    '검증된 유틸리티 앱(지갑, Foxyya)으로 시작하여 DEX 및 CEX 유동성으로 확장하고, CDNS를 디지털 자산의 글로벌 신원 레이어로 확장합니다.'
                  ),
                  modifier: 'home-info-card--green',
                },
              ].map((card, i) => (
                <div
                  key={i}
                  className={`home-info-card ${card.modifier} reveal reveal-d${Math.min(i + 1, 4) as 1 | 2 | 3 | 4}`}
                >
                  <div className="home-info-card__row">
                    <div className="home-info-card__icon">{card.icon}</div>
                    <div>
                      <h4 className="home-info-card__title">{card.title}</h4>
                      <p className="home-info-card__desc">{card.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem */}
      <section id="ecosystem" className="home-section home-section--ecosystem">
        <div className="home-shell">
          <div className="home-ecosystem-head reveal">
            <div className="home-section-eyebrow home-section-eyebrow--purple">
              {t('Full-Stack Digital Economy', '풀스택 디지털 경제')}
            </div>
            <h2 className="home-section-title home-section-title--center">
              {t('A Unified Digital', '통합 디지털')}{' '}
              <span className="home-section-title-accent home-section-title-accent--pink">
                {t('Ecosystem', '생태계')}
              </span>
            </h2>
            <p className="home-ecosystem-desc">
              {t(
                'Every component of KORION works in synergy — creating a self-sustaining network where real usage drives token value.',
                'KORION의 모든 구성 요소가 시너지를 이루어 — 실제 사용이 토큰 가치를 창출하는 자립 가능한 네트워크를 만듭니다.'
              )}
            </p>
          </div>

          <div className="home-ecosystem-stack">
            <div className="home-feature-grid">
              <div className="reveal home-feature-copy home-feature-copy--order-last-mobile">
                <div className="home-feature-icon home-feature-icon--blue">
                  <Smartphone className="w-7 h-7" />
                </div>
                <div className="home-feature-index home-feature-index--blue">01 — KORION Wallet</div>
                <h3 className="home-feature-title">
                  {t('Your Gateway to the Ecosystem', '생태계로의 관문')}
                </h3>
                <p className="home-feature-text">
                  {t(
                    'Available on iOS and Android, the KORION Wallet provides a professional-grade interface for managing multi-chain assets with institutional-level security. Biometric authentication, encrypted private keys, and full DeFi integration — all in one place.',
                    'iOS 및 Android에서 사용 가능한 KORION 지갑은 기관급 보안으로 멀티체인 자산을 관리하기 위한 전문가급 인터페이스를 제공합니다.'
                  )}
                </p>
                <ul className="home-feature-list">
                  {[
                    t('Multi-chain asset routing & management', '멀티체인 자산 라우팅 및 관리'),
                    t('Biometric security & EAL5+ certified chip support', '생체 인식 보안 및 EAL5+ 인증 칩 지원'),
                    t('Native integration with Foxyya, Pay & Market', 'Foxyya, 페이 및 마켓과 기본 통합'),
                    t('CDNS human-readable address system', 'CDNS 사람이 읽을 수 있는 주소 시스템'),
                  ].map((f, i) => (
                    <li key={i} className="home-feature-list__item">
                      <CheckCircle className="home-feature-list__icon" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="home-feature-badge-row">
                  <div className="home-version-badge">
                    <Download size={14} className="home-version-badge__icon" />
                    <span>v1.2.4 LIVE</span>
                  </div>
                </div>
              </div>

              <div className="reveal reveal-d2 home-panel home-panel--blue">
                <div className="home-panel__glow" />
                <div>
                  <div className="home-panel__label">Security Standard</div>
                  <div className="home-panel__headline">EAL5+ Verified</div>
                </div>
                <div className="home-progress-group">
                  {[
                    { label: t('Active Validators', '활성 검증자'), value: 85 },
                    { label: t('Network TPS', '네트워크 TPS'), value: 92 },
                    { label: t('Block Finality', '블록 최종성'), value: 98 },
                  ].map((s, i) => (
                    <div key={i}>
                      <div className="home-progress-row">
                        <span>{s.label}</span>
                        <span className="home-progress-row__value">{s.value}%</span>
                      </div>
                      <div className="home-progress-track">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${s.value}%` }}
                          transition={{ duration: 1.2, delay: i * 0.1 }}
                          className="home-progress-fill home-progress-fill--blue"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="home-feature-grid">
              <div className="reveal home-graph-card">
                <div className="home-graph-card__topbar">
                  <div className="home-graph-card__dots">
                    <div className="home-graph-card__dot home-graph-card__dot--red" />
                    <div className="home-graph-card__dot home-graph-card__dot--yellow" />
                    <div className="home-graph-card__dot home-graph-card__dot--green" />
                  </div>
                  <span className="home-graph-card__status">system_active</span>
                </div>
                <div className="home-graph-card__body">
                  <div className="home-graph-card__head">
                    <div className="home-graph-card__value">1.2M</div>
                    <div className="home-graph-card__caption">Global Users</div>
                  </div>
                  <div className="home-graph-bars">
                    {[40, 65, 45, 90, 35, 75, 55, 100, 60].map((h, i) => (
                      <div key={i} className="home-graph-bars__column">
                        <motion.div
                          initial={{ height: 0 }}
                          whileInView={{ height: `${h}%` }}
                          transition={{ duration: 1, delay: i * 0.05 }}
                          className="home-graph-bars__fill"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="reveal reveal-d2 home-feature-copy">
                <div className="home-feature-icon home-feature-icon--orange home-feature-icon--text">F</div>
                <div className="home-feature-index home-feature-index--orange">02 — Foxyya Platform</div>
                <h3 className="home-feature-title">
                  {t('Real-World Digital Utility', '실세계 디지털 유틸리티')}
                </h3>
                <p className="home-feature-text">
                  {t(
                    'Foxyya is the flagship real-use application on the KORION network. Bridging digital assets and everyday utility services, it generates consistent on-chain transaction demand.',
                    'Foxyya는 KORION 네트워크의 주력 실사용 애플리케이션입니다. 디지털 자산과 일상적인 유틸리티 서비스를 연결합니다.'
                  )}
                </p>
                <div className="home-highlight-card home-highlight-card--orange">
                  <div className="home-highlight-card__head">
                    <Rocket className="home-highlight-card__icon" />
                    <span>{t('Growth Driver', '성장 동력')}</span>
                  </div>
                  <p className="home-highlight-card__text">
                    {t(
                      'Real-world user data and payment flows from Foxyya validate the token economy and provide proof of concept.',
                      'Foxyya의 실제 결제 흐름은 토큰 경제를 검증합니다.'
                    )}
                  </p>
                </div>
              </div>
            </div>

            <div className="home-feature-grid">
              <div className="reveal home-feature-copy">
                <div className="home-feature-icon home-feature-icon--purple">
                  <Zap className="w-7 h-7" />
                </div>
                <div className="home-feature-index home-feature-index--purple">03 — KORION Pay</div>
                <h3 className="home-feature-title">{t('Payments Without Limits', '한계 없는 결제')}</h3>
                <p className="home-feature-text">
                  {t(
                    'Our proprietary offline payment technology enables cryptographically secure digital asset transactions without an active internet connection.',
                    '독자적인 오프라인 결제 기술로 인터넷 연결 없이도 안전한 디지털 자산 거래가 가능합니다.'
                  )}
                </p>
                <div className="home-mini-grid">
                  {[
                    {
                      icon: <Cpu className="text-purple-400 w-5 h-5" />,
                      title: t('Architecture', '아키텍처'),
                      desc: t('Secure Elements', '보안 요소'),
                    },
                    {
                      icon: <Shield className="text-purple-400 w-5 h-5" />,
                      title: t('Integrity', '무결성'),
                      desc: t('Zero-Trust', '제로 트러스트'),
                    },
                  ].map((s, i) => (
                    <div key={i} className="home-mini-card">
                      <div className="home-mini-card__icon">{s.icon}</div>
                      <div className="home-mini-card__title">{s.title}</div>
                      <div className="home-mini-card__desc">{s.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="reveal reveal-d2 home-panel home-panel--purple home-panel--center">
                <div className="home-panel__header">
                  <div className="home-panel__header-bar" />
                  <div>
                    <div className="home-panel__header-title">Offline Protocol v4.2</div>
                    <div className="home-panel__header-sub">Enterprise Ready</div>
                  </div>
                </div>
                <div className="home-progress-group">
                  {[
                    { label: 'Sync Security', v: 99 },
                    { label: 'Offline Range', v: 88 },
                  ].map((s, i) => (
                    <div key={i}>
                      <div className="home-progress-row home-progress-row--dim">
                        <span>{s.label}</span>
                        <span className="home-progress-row__value home-progress-row__value--dim">
                          {s.v}%
                        </span>
                      </div>
                      <div className="home-progress-track">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${s.v}%` }}
                          transition={{ duration: 1 }}
                          className="home-progress-fill home-progress-fill--purple"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="home-section home-section--cta">
        <div className="home-cta-shell reveal">
          <div className="home-cta-card">
            <div className="home-cta-card__radial" />
            <div className="home-cta-card__content">
              <div className="home-cta-card__eyebrow">{t('Join The Movement', '함께 하세요')}</div>
              <h2 className="home-cta-card__title">
                {t('Ready to build the future?', '미래를 구축할 준비가 되셨나요?')}
              </h2>
              <div className="home-cta-card__actions">
                <button
                  onClick={() => navigate('/download')}
                  className="home-cta-card__button home-cta-card__button--primary"
                >
                  {t('Get Started', '시작하기')}
                </button>
                <a
                  href="https://x.com/korion_official"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="home-cta-card__button home-cta-card__button--ghost"
                >
                  {t('Join Community', '커뮤니티 참여')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
