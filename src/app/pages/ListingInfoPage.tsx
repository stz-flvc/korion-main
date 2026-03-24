import { motion } from 'motion/react';
import {
    ArrowUpRight,
    BadgeCheck,
    BarChart3,
    CandlestickChart,
    Coins,
    Droplets,
    ExternalLink,
    Globe,
    Landmark,
    Layers3,
    Link2,
    Activity,
    ShieldCheck,
    TrendingUp,
    Wallet,
    Sparkles,
    Radar,
    CircleDollarSign,
    } from 'lucide-react';
    import { useLanguage } from '../contexts/LanguageContext';
    import './ListingInfoPage.css';

    const marketCards = [
    {
        icon: Coins,
        titleEn: 'DEX Trading',
        titleKr: 'DEX 거래',
        titleJa: 'DEX取引',
        titleZh: 'DEX 交易',
        descEn:
        'KORION is currently available for decentralized trading through the TRON ecosystem.',
        descKr:
        'KORION은 현재 TRON 생태계 기반의 탈중앙화 거래 환경에서 거래할 수 있습니다.',
        descJa: 'KORIONは現在、TRONエコシステムベースの分散型取引環境で取引可能です。',
        descZh: 'KORION 目前可以在基于 TRON 生态系统的去中心化交易环境中进行交易。',
    },
    {
        icon: Layers3,
        titleEn: 'Liquidity Environment',
        titleKr: '유동성 환경',
        titleJa: '流動性環境',
        titleZh: '流动性环境',
        descEn:
        'Market access is currently centered on DEX liquidity and on-chain swap activity.',
        descKr:
        '현재 마켓 접근은 DEX 유동성과 온체인 스왑 활동을 중심으로 구성되어 있습니다.',
        descJa: '現在の市場アクセスは、DEXの流動性とオンチェーンのスワップ活動を中心に構成されています。',
        descZh: '目前的市场准入主要集中在 DEX 流动性和链上兑换活动。',
    },
    {
        icon: Globe,
        titleEn: 'Future Market Expansion',
        titleKr: '향후 마켓 확장',
        titleJa: '将来の市場拡大',
        titleZh: '未来市场扩张',
        descEn:
        'Additional market integrations may be considered over time depending on ecosystem growth and operational strategy.',
        descKr:
        '생태계 성장과 운영 전략에 따라 향후 추가 마켓 연동이 검토될 수 있습니다.',
        descJa: 'エコシステムの成長と運営戦略に応じて、将来的に追加の市場連携が検討される可能性があります。',
        descZh: '根据生态系统增长和运营战略，未来可能会考虑增加市场联动。',
    },
    ];

    const referenceLinks = [
    {
        icon: Link2,
        title: 'SUN.io',
        href: 'https://sun.io/?lang=en-US#/scan/pairDetail?pairAddress=TCHbWJUBZ9DVpaPb6QW9vb31yTSz7sfhQh&version=v2',
        descEn: 'Current decentralized trading market for KORION.',
        descKr: '현재 KORION이 거래 중인 탈중앙화 거래 마켓입니다.',
        descJa: '現在KORIONが取引されている分散型取引市場です。',
        descZh: 'KORION 目前正在交易的去中心化交易市场。',
    },
    {
        icon: Wallet,
        title: 'TRON Network',
        href: 'https://tronscan.org/#/token20/TBJZD8RwQ1JcQvEP9BTbPbgBCGxUjxSXnn',
        descEn: 'Network environment used for KORION token activity and on-chain reference.',
        descKr: 'KORION 토큰 활동과 온체인 확인에 사용되는 네트워크 환경입니다.',
        descJa: 'KORIONトークンの活動とオンチェーン確認に使用されるネットワーク環境です。',
        descZh: '用于 KORION 代币活动和链上确认的网络环境。',
    },
    {
        icon: ShieldCheck,
        title: 'Official Reference',
        href: '/whitepaper',
        descEn: 'Review the broader token ecosystem and platform direction.',
        descKr: '토큰 생태계와 플랫폼 방향성에 대한 더 넓은 내용을 확인할 수 있습니다.',
        descJa: 'トークンエコシステムとプラットフォームの方向性に関する詳細を確認できます。',
        descZh: '可以确认有关代币生态系统和平台方向的更广泛内容。',
        internal: true,
    },
    ];

    const dexStats = {
    priceUsd: 0.0124,
    priceTrx: 0.0432,
    volume24hUsd: 12874.45,
    liquidityUsd: 68420.2,
    change24h: 5.37,
    lastUpdated: '2026-03-15 20:30 KST',
    };

    const priceHistory = [
    { label: '00:00', value: 0.0112 },
    { label: '04:00', value: 0.0118 },
    { label: '08:00', value: 0.0114 },
    { label: '12:00', value: 0.0121 },
    { label: '16:00', value: 0.0119 },
    { label: '20:00', value: 0.0128 },
    { label: 'Now', value: 0.0124 },
    ];

    function formatUsd(value: number) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: value < 1 ? 6 : 2,
    }).format(value);
    }

    function formatCompactUsd(value: number) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        notation: 'compact',
        maximumFractionDigits: 2,
    }).format(value);
    }

    function formatTrx(value: number) {
    return `${new Intl.NumberFormat('en-US', {
        maximumFractionDigits: 6,
    }).format(value)} TRX`;
    }

    function formatPercent(value: number) {
    const sign = value > 0 ? '+' : '';
    return `${sign}${value.toFixed(2)}%`;
    }

    function buildLinePoints(data: { label: string; value: number }[]) {
    const width = 100;
    const height = 100;
    const padding = 8;
    const values = data.map((item) => item.value);
    const min = Math.min(...values);
    const max = Math.max(...values);
    const range = max - min || 1;

    return data
        .map((item, index) => {
        const x =
            padding + (index * (width - padding * 2)) / Math.max(data.length - 1, 1);
        const y =
            height - padding - ((item.value - min) / range) * (height - padding * 2);
        return `${x},${y}`;
        })
        .join(' ');
    }

    function buildAreaPoints(data: { label: string; value: number }[]) {
    const line = buildLinePoints(data).split(' ');
    if (line.length === 0) return '';
    const first = line[0].split(',')[0];
    const last = line[line.length - 1].split(',')[0];
    return `${first},92 ${line.join(' ')} ${last},92`;
    }

    export function ListingInfoPage() {
    const { t } = useLanguage();

    const linePoints = buildLinePoints(priceHistory);
    const areaPoints = buildAreaPoints(priceHistory);

    const latestValue = priceHistory[priceHistory.length - 1]?.value ?? 0;
    const highValue = Math.max(...priceHistory.map((item) => item.value));
    const lowValue = Math.min(...priceHistory.map((item) => item.value));

    return (
        <div className="listing-info-page">
        <div className="listing-info-page__bg">
            <div className="listing-info-page__orb listing-info-page__orb--one" />
            <div className="listing-info-page__orb listing-info-page__orb--two" />
            <div className="listing-info-page__orb listing-info-page__orb--three" />
            <div className="listing-info-page__grid" />
        </div>

        <div className="listing-info-page__container">
            <motion.section
            className="listing-info-page__intro"
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            >
            <div className="listing-info-page__eyebrow">
                <BadgeCheck size={15} />
                <span>{t('Listing Information', '상장 정보', '上場情報', '上市信息')}</span>
            </div>

            <h1 className="listing-info-page__title">
                {t(
                    'A premium market reference page for exchange visibility and listing information.',
                    '거래소 및 마켓 참고 정보를 보다 정교하게 확인할 수 있는 프리미엄 안내 페이지입니다.',
                    '取引所や市場の参考情報をより精緻に確認できるプレミアム案内ページです。',
                    '这是一个可以更精细地确认交易所及市场参考信息的优质指南页面。'
                )}
            </h1>

            <p className="listing-info-page__description">
                {t(
                    'KORION is currently tradable in a TRON-based decentralized market environment. This page brings together trading status, market metrics, liquidity references, future expansion guidance, and official verification links in one premium view.',
                    '현재 KORION은 TRON 기반 DEX 환경에서 거래가 가능하며, 이 페이지는 거래 가능 상태, 마켓 지표, 유동성 참고 정보, 향후 확장 가능성 및 공식 확인 링크를 한곳에서 확인할 수 있도록 구성되었습니다.',
                    '現在KORIONはTRONベースのDEX環境で取引可能であり、このページは取引状況、市場指標、流動性参考情報、将来の拡張可能性、および公式確認リンクを一つの場所で確認できるよう構成されています。',
                    '目前 KORION 可以在基于 TRON 的 DEX 环境中进行交易，本页面旨在将交易状态、市场指标、流动性参考信息、未来的扩张可能性以及官方确认链接整合在一起。'
                )}
            </p>
            </motion.section>

            <motion.section
            className="listing-info-page__hero-board"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.06 }}
            >
            <article className="listing-board listing-board--primary">
                <div className="listing-board__top">
                <div className="listing-board__title-group">
                    <div className="listing-board__icon">
                    <Coins size={18} />
                    </div>
                    <div>
                    <span className="listing-board__label">
                        {t('Current Trading Venue', '현재 거래 환경', '現在の取引環境', '当前交易环境')}
                    </span>
                    <h2>{t('SUN.io DEX Active', 'SUN.io DEX 활성 상태', 'SUN.io DEX 活性化状態', 'SUN.io DEX 激活状态')}</h2>
                    </div>
                </div>

                <span className="listing-board__badge">
                    {t('On-chain Trading Live', '온체인 거래 가능', 'オンチェーン取引可能', '链上交易可用')}
                </span>
                </div>

                <p className="listing-board__desc">
                {t(
                    'KORION is currently tradable via SUN.io, where price discovery and swap activity take place inside the TRON network liquidity environment.',
                    'KORION은 현재 SUN.io를 통해 거래되고 있으며, TRON 네트워크 기반의 유동성 환경 안에서 가격 형성과 스왑 흐름을 확인할 수 있습니다.',
                    'KORIONは現在SUN.ioを通じて取引されており、TRONネットワークベースの流動性環境の中で価格形成とスワップの流れを確認できます。',
                    'KORION 目前通过 SUN.io 进行交易，您可以在基于 TRON 网络流动性环境中确认价格形成和兑换流向。'
                )}
                </p>

                <div className="listing-board__chips">
                <span>TRON</span>
                <span>SUN.io</span>
                <span>{t('DEX Live', 'DEX 거래중', 'DEX取引中', 'DEX 交易中')}</span>
                </div>

                <a
                className="listing-board__action"
                href="https://sun.io/?lang=en-US#/scan/pairDetail?pairAddress=TCHbWJUBZ9DVpaPb6QW9vb31yTSz7sfhQh&version=v2"
                target="_blank"
                rel="noopener noreferrer"
                >
                <span>{t('Open SUN.io', 'SUN.io 바로가기', 'SUN.ioへ移動', '前往 SUN.io')}</span>
                <ArrowUpRight size={16} />
                </a>
            </article>

            <article className="listing-board listing-board--secondary">
                <div className="listing-board__top">
                <div className="listing-board__title-group">
                    <div className="listing-board__icon listing-board__icon--soft">
                    <Landmark size={18} />
                    </div>
                    <div>
                    <span className="listing-board__label">
                        {t('Future Listing Direction', '향후 상장 방향', '将来の上場方針', '未来上市方向')}
                    </span>
                    <h2>{t('No Additional Listings Yet', '추가 거래소는 아직 미상장', '追加の取引所は未上場', '尚未在其他交易所上市')}</h2>
                    </div>
                </div>
                </div>

                <p className="listing-board__desc">
                {t(
                    'At this time, KORION is not officially listed on additional centralized exchanges or other extended markets. Future expansion may be reviewed depending on ecosystem growth, liquidity scale, and operational strategy.',
                    '현재 기준으로 KORION은 추가 중앙화 거래소 또는 기타 외부 마켓에 공식 상장되지 않았습니다. 향후 확장 여부는 생태계 성장, 유동성 규모, 운영 전략에 따라 검토될 수 있습니다.',
                    '現時点では、KORIONは追加の中央集権型取引所やその他の拡張市場に公式に上場されていません。将来の拡張については、エコシステムの成長、流動性規模、および運営戦略に応じて検討される可能性があります。',
                    '到目前为止，KORION 尚未在其他中心化交易所或其他扩展市场正式上市。未来的扩张将根据生态系统增长、流动性规模和运营战略进行审核。'
                )}
                </p>

                <div className="listing-board__signal">
                <TrendingUp size={16} />
                <span>
                    {t(
                    'Future updates should be verified through official announcements.',
                    '향후 정보는 공식 공지 기준으로 확인하는 것이 가장 정확합니다.',
                    '将来の情報は、公式発表を基準に確認するのが最も正確です。',
                    '未来的信息以官方公告为准最为准确。'
                    )}
                </span>
                </div>
            </article>
            </motion.section>

            <motion.section
            className="listing-info-page__market-terminal"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.1 }}
            >
            <div className="listing-info-page__section-head">
                <span>{t('DEX Market Snapshot', 'DEX 마켓 스냅샷', 'DEX市場スナップショット', 'DEX 市场快照')}</span>
                <h2>{t('Price, volume, liquidity, and trend', '가격, 거래량, 유동성, 최근 추이', '価格、取引高、流動性、最近の推移', '价格、交易量、流动性及近期趋势')}</h2>
            </div>

            <div className="listing-terminal">
                <div className="listing-terminal__left">
                <div className="listing-terminal__stats">
                    <article className="listing-stat-tile listing-stat-tile--featured">
                    <div className="listing-stat-tile__head">
                        <div className="listing-stat-tile__icon">
                        <CircleDollarSign size={18} />
                        </div>
                        <span>{t('Current Price', '현재 가격', '現在価格', '当前价格')}</span>
                    </div>
                    <strong>{formatUsd(dexStats.priceUsd)}</strong>
                    <p>{formatTrx(dexStats.priceTrx)}</p>
                    </article>

                    <article className="listing-stat-tile">
                    <div className="listing-stat-tile__head">
                        <div className="listing-stat-tile__icon">
                        <BarChart3 size={18} />
                        </div>
                        <span>{t('24H Volume', '24h 거래량', '24h取引高', '24h 交易量')}</span>
                    </div>
                    <strong>{formatCompactUsd(dexStats.volume24hUsd)}</strong>
                    <p>{t('Reference from on-chain volume', '온체인 기준 참고값', 'オンチェーン基準の参考値', '基于链上的参考值')}</p>
                    </article>

                    <article className="listing-stat-tile">
                    <div className="listing-stat-tile__head">
                        <div className="listing-stat-tile__icon">
                        <Droplets size={18} />
                        </div>
                        <span>{t('Liquidity', '유동성', '流動性', '流动性')}</span>
                    </div>
                    <strong>{formatCompactUsd(dexStats.liquidityUsd)}</strong>
                    <p>{t('Reference from active pool depth', '활성 풀 기준 참고값', 'アクティブプール基準の参考値', '基于活跃池深度的参考值')}</p>
                    </article>

                    <article className="listing-stat-tile">
                    <div className="listing-stat-tile__head">
                        <div className="listing-stat-tile__icon">
                        <Activity size={18} />
                        </div>
                        <span>{t('24H Change', '24시간 변동률', '24時間変動率', '24小时涨跌幅')}</span>
                    </div>
                    <strong
                        className={
                        dexStats.change24h > 0
                            ? 'is-up'
                            : dexStats.change24h < 0
                            ? 'is-down'
                            : ''
                        }
                    >
                        {formatPercent(dexStats.change24h)}
                    </strong>
                    <p>
                        {t(
                        `Updated: ${dexStats.lastUpdated}`,
                        `업데이트: ${dexStats.lastUpdated}`,
                        `更新日: ${dexStats.lastUpdated}`,
                        `更新时间: ${dexStats.lastUpdated}`
                        )}
                    </p>
                    </article>
                </div>

                <article className="listing-chart-panel">
                    <div className="listing-chart-panel__top">
                    <div>
                        <span className="listing-chart-panel__eyebrow">
                        {t('Price Flow Visualization', '가격 흐름 시각화', '価格推移の可視化', '价格走势可视化')}
                        </span>
                        <h3>{t('Recent interval trend', '최근 구간 추이', '最近の推移', '近期趋势')}</h3>
                    </div>

                    <div className="listing-chart-panel__mini-stats">
                        <span>
                        {t('High', '고가', '高値', '最高')} <strong>{formatUsd(highValue)}</strong>
                        </span>
                        <span>
                        {t('Low', '저가', '저가', '最底')} <strong>{formatUsd(lowValue)}</strong>
                        </span>
                        <span>
                        {t('Last', '현재', '終値', '当前')} <strong>{formatUsd(latestValue)}</strong>
                        </span>
                    </div>
                    </div>

                    <div className="listing-chart-panel__canvas">
                    <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                        <defs>
                        <linearGradient id="listingAreaGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="rgba(123,132,255,0.45)" />
                            <stop offset="100%" stopColor="rgba(123,132,255,0.02)" />
                        </linearGradient>
                        </defs>

                        <polygon
                        points={areaPoints}
                        fill="url(#listingAreaGradient)"
                        className="listing-chart-panel__area"
                        />
                        <polyline
                        points={linePoints}
                        fill="none"
                        className="listing-chart-panel__line-glow"
                        />
                        <polyline
                        points={linePoints}
                        fill="none"
                        className="listing-chart-panel__line"
                        />
                    </svg>

                    <div className="listing-chart-panel__timeline">
                        {priceHistory.map((item) => (
                        <div key={item.label} className="listing-chart-panel__tick">
                            <span className="listing-chart-panel__tick-dot" />
                            <span>{item.label}</span>
                        </div>
                        ))}
                    </div>
                    </div>
                </article>
                </div>

                <div className="listing-terminal__right">
                <article className="listing-insight-card">
                    <div className="listing-insight-card__head">
                    <div className="listing-insight-card__icon">
                        <CandlestickChart size={18} />
                    </div>
                    <div>
                        <span>{t('Market Interpretation', '시장 해석', '市場分析', '市场阐释')}</span>
                        <h3>{t('DEX-Centered Phase', '현재 DEX 중심 단계', 'DEX中心のフェーズ', '当前 DEX 中心阶段')}</h3>
                    </div>
                    </div>

                    <p>
                    {t(
                        'KORION is currently operating in a DEX-centered market phase, where participation is directly tied to pool depth and swap activity. Price, volume, and liquidity are therefore the most important reference metrics at this stage.',
                        '현재 KORION의 거래 구조는 DEX를 중심으로 형성되어 있으며, 시장 참여도는 유동성 규모와 스왑 흐름에 직접 연결됩니다. 따라서 가격, 거래량, 유동성은 현재 단계에서 가장 중요한 참고 지표로 볼 수 있습니다.',
                        '現在KORIONの取引構造はDEXを中心に形成されており、市場参加度は流動性の規模とスワップの流れに直接結びついています。したがって、価格、取引高、流動性が現段階において最も重要な参考指標となります。',
                        '目前 KORION 的交易结构以 DEX 为中心，市场参与度直接与流动性规模和兑换流向挂钩。因此，价格、交易量和流动性可以视为现阶段最重要的参考指标。'
                    )}
                    </p>

                    <div className="listing-insight-card__points">
                    <div className="listing-insight-card__point">
                        <Radar size={15} />
                        <span>{t('On-chain price discovery', '온체인 중심 가격 형성', 'オンチェーン中心の価格形成', '以链上为中心的价格形成')}</span>
                    </div>
                    <div className="listing-insight-card__point">
                        <Sparkles size={15} />
                        <span>{t('Liquidity depth affects tradability', '유동성 깊이가 체감 거래성에 영향', '流동性の深さが取引性に影響', '流动性深度影响体感交易性')}</span>
                    </div>
                    <div className="listing-insight-card__point">
                        <TrendingUp size={15} />
                        <span>{t('Future expansion ties to ecosystem growth', '향후 확장은 생태계 성장과 연결', '将来の拡張はエコシステムの成長と連動', '未来的扩张与生态系统增长挂钩')}</span>
                    </div>
                    </div>
                </article>

                <article className="listing-brief-card">
                    <span className="listing-brief-card__eyebrow">
                    {t('Market Brief', '마켓 브리프', '市場ブリーフ', '市场简报')}
                    </span>
                    <h3>{t('Current Checkpoints', '현재 확인 포인트', '現在のチェックポイント', '当前确认点')}</h3>

                    <ul>
                    <li>
                        {t(
                        'SUN.io is the current active market venue.',
                        '현재 거래 가능 마켓은 SUN.io 중심입니다.',
                        '現在取引可能な市場はSUN.io中心です。',
                        '目前可交易市场主要集中在 SUN.io。'
                        )}
                    </li>
                    <li>
                        {t(
                        'TRON-based reference links support verification and monitoring.',
                        'TRON 네트워크 기반 확인 링크를 통해 상태 점검이 가능합니다.',
                        'TRONネットワークベースの確認リンクを通じてステータスのチェックが可能です。',
                        '可以通过基于 TRON 网络确认链接进行状态检查。'
                        )}
                    </li>
                    <li>
                        {t(
                        'Additional exchange information should not be treated as confirmed before official announcement.',
                        '추가 거래소 정보는 공식 발표 전까지 확정 정보로 보기 어렵습니다.',
                        '追加の取引所情報は公式発表があるまで確定情報として扱うことはできません。',
                        '在官方发布公告之前，其他交易所信息难以被视为确认信息。'
                        )}
                    </li>
                    </ul>
                </article>
                </div>
            </div>
            </motion.section>

            <motion.section
            className="listing-info-page__market-overview"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.14 }}
            >
            <div className="listing-info-page__section-head">
                <span>{t('Market Reference', '마켓 참고 정보', '市場参考情報', '市场参考信息')}</span>
                <h2>{t('Current market access and future direction', '현재 거래 환경과 향후 방향성', '現在の取引環境と将来の方向性', '当前交易环境及未来方向')}</h2>
            </div>

            <div className="listing-market-grid">
                {marketCards.map((item, index) => {
                const Icon = item.icon;

                return (
                    <motion.article
                    key={item.titleEn}
                    className="listing-market-card"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.56, delay: 0.16 + index * 0.06 }}
                    >
                    <div className="listing-market-card__icon">
                        <Icon size={18} />
                    </div>
                    <h3>{t(item.titleEn, item.titleKr, item.titleJa, item.titleZh)}</h3>
                    <p>{t(item.descEn, item.descKr, item.descJa, item.descZh)}</p>
                    </motion.article>
                );
                })}
            </div>
            </motion.section>

            <motion.section
            className="listing-info-page__details"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.18 }}
            >
            <div className="listing-detail-panel">
                <div className="listing-detail-panel__head">
                <span className="listing-detail-panel__dot" />
                <h3>{t('Current Listing Status', '현재 상장 상태', '現在の上場ステータス', '当前上市状态')}</h3>
                </div>

                <ul className="listing-detail-panel__list">
                <li>
                    {t(
                    'KORION is currently tradable on SUN.io.',
                    'KORION은 현재 SUN.io에서 거래 가능한 상태입니다.',
                    'KORIONは現在、SUN.ioで取引可能な状態です。',
                    'KORION 目前处于可在 SUN.io 交易的状态。'
                    )}
                </li>
                <li>
                    {t(
                    'The trading environment is based on the TRON network.',
                    'TRON 네트워크 환경을 기반으로 거래 참고가 가능합니다.',
                    'TRONネットワーク環境をベースに取引の参照が可能です。',
                    '交易参考基于 TRON 网络环境。'
                    )}
                </li>
                <li>
                    {t(
                    'No other exchanges are officially listed at this time.',
                    '기타 거래소는 현재 기준으로 아직 공식 상장되지 않았습니다.',
                    'その他の取引所は、現時点ではまだ公式に上場されていません。',
                    '截至目前，尚未在其他交易所正式上市。'
                    )}
                </li>
                </ul>
            </div>

            <div className="listing-detail-panel">
                <div className="listing-detail-panel__head">
                <span className="listing-detail-panel__dot" />
                <h3>{t('Future Market Guidance', '향후 마켓 관련 안내', '今後の市場に関する案内', '未来市场相关指南')}</h3>
                </div>

                <ul className="listing-detail-panel__list">
                <li>
                    {t(
                    'Additional DEX expansion or further market reviews may occur in the future.',
                    '향후 DEX 확장 또는 추가 마켓 검토가 진행될 수 있습니다.',
                    '将来的にDEXの拡張や追加の市場検討が行われる可能性があります。',
                    '可能会进行未来的 DEX 扩张或进一步的市场审核。'
                    )}
                </li>
                <li>
                    {t(
                    'No confirmed centralized exchange announcement has been made yet.',
                    '중앙화 거래소 상장은 현재 확정 공지가 없는 상태입니다.',
                    '中央集権型取引所への上場については、現在確定した発表はありません。',
                    '目前尚未发布有关中心化交易所上市的确认公告。'
                    )}
                </li>
                <li>
                    {t(
                    'The most accurate updates on future listings should come from official announcements and channels.',
                    '공식 상장 관련 내용은 추후 공지 또는 공식 채널을 통해 확인하는 것이 가장 정확합니다.',
                    '公式上場に関する内容は、今後の告知や公式チャネルを通じて確認するのが最も正確です。',
                    '有关正式上市的内容，通过后续公告或官方渠道确认最为准确。'
                    )}
                </li>
                </ul>
            </div>
            </motion.section>

            <motion.section
            className="listing-info-page__references"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.24 }}
            >
            <div className="listing-info-page__section-head">
                <span>{t('Official Reference Links', '공식 참고 링크', '公式参考リンク', '官方参考链接')}</span>
                <h2>{t('Useful links for trading and verification', '거래 및 확인에 참고할 수 있는 링크', '取引や確認に役立つリンク', '交易及确认参考链接')}</h2>
            </div>

            <div className="listing-reference-grid">
                {referenceLinks.map((item, index) => {
                const Icon = item.icon;

                if (item.internal) {
                    return (
                    <motion.a
                        key={item.title}
                        href={item.href}
                        className="listing-reference-card"
                        initial={{ opacity: 0, y: 22 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.56, delay: 0.26 + index * 0.06 }}
                    >
                        <div className="listing-reference-card__icon">
                        <Icon size={18} />
                        </div>
                        <div className="listing-reference-card__body">
                        <h3>{item.title}</h3>
                        <p>{t(item.descEn, item.descKo, item.descJa, item.descZh)}</p>
                        </div>
                        <ExternalLink size={16} />
                    </motion.a>
                    );
                }

                return (
                    <motion.a
                    key={item.title}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="listing-reference-card"
                    initial={{ opacity: 0, y: 22 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.56, delay: 0.26 + index * 0.06 }}
                    >
                    <div className="listing-reference-card__icon">
                        <Icon size={18} />
                    </div>
                    <div className="listing-reference-card__body">
                        <h3>{item.title}</h3>
                        <p>{t(item.descEn, item.descKo, item.descJa, item.descZh)}</p>
                    </div>
                    <ExternalLink size={16} />
                    </motion.a>
                );
                })}
            </div>
            </motion.section>

            <motion.section
            className="listing-info-page__notice"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.3 }}
            >
            <div className="listing-notice-card">
                <h3>{t('Notice', '안내 사항', '案内事項', '注意事项')}</h3>
                <p>
                {t(
                    'This page is intended to provide reference information about the current trading environment and possible future market pathways. Actual listing status, liquidity conditions, trading availability, and future expansion plans may change depending on market conditions and operational policy, so the most accurate updates should be verified through official channels.',
                    '본 페이지는 현재 확인 가능한 거래 환경과 향후 마켓 관련 참고 정보를 제공하기 위한 안내용 페이지입니다. 실제 상장 상태, 유동성, 거래 가능 여부 및 향후 확장 계획은 시장 상황과 운영 정책에 따라 달라질 수 있으며, 최신 정보는 공식 채널을 통해 확인하는 것이 가장 정확합니다.',
                    'このページは、現在確認可能な取引環境と将来の市場に関する参考情報を提供するための案内用ページです。実際の上場ステータス、流動性、取引の可否、および将来の拡張計画は、市場の状況や運営ポリシーによって変更される可能性があり、最新情報は公式チャネルを通じて確認するのが最も正確です。',
                    '本页面旨在提供关于当前可确认交易环境及未来市场相关参考信息的指南。实际上市状态、流动性、可交易性及未来的扩张计划可能会随市场状况和运营政策而变化，通过官方渠道确认最新信息最为准确。'
                )}
                </p>
            </div>
            </motion.section>
        </div>
        </div>
    );
    }