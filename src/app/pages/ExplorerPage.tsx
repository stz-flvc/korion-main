import { motion } from 'motion/react';
import {
    Activity,
    ArrowUpRight,
    Blocks,
    Copy,
    ExternalLink,
    FileSearch,
    Fingerprint,
    Link2,
    ShieldCheck,
    Wallet,
    } from 'lucide-react';
    import { useState } from 'react';
    import { useLanguage } from '../contexts/LanguageContext';
    import './ExplorerPage.css';

    const CONTRACT_ADDRESS = 'TBJZD8RwQ1JcQvEP9BTbPbgBCGxUjxSXnn';

    const explorerLinks = {
    tronscanToken: 'https://tronscan.org/#/token20/TBJZD8RwQ1JcQvEP9BTbPbgBCGxUjxSXnn',
    tronscanContract: 'https://tronscan.org/#/contract/TBJZD8RwQ1JcQvEP9BTbPbgBCGxUjxSXnn',
    dex: 'https://sun.io/',
    };

    export function ExplorerPage() {
    const { t } = useLanguage();
    const [copied, setCopied] = useState(false);

    const copyContractAddress = async () => {
        try {
        await navigator.clipboard.writeText(CONTRACT_ADDRESS);
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1800);
        } catch (error) {
        console.error('Failed to copy contract address:', error);
        }
    };

    return (
        <div className="explorer-page">
        <section className="explorer-hero">
            <div className="explorer-page__container explorer-hero__container">
            <motion.div
                className="explorer-hero__content"
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.72 }}
            >
                <div className="explorer-hero__eyebrow">
                <span className="explorer-hero__eyebrow-dot" />
                {t('KORION Explorer', 'KORION Explorer', 'KORION Explorer', 'KORION Explorer')}
                </div>

                <h1 className="explorer-hero__title">
                {t(
                    'Track token activity\nthrough public on-chain visibility',
                    '토큰과 거래 흐름을\n공개 온체인 데이터로 확인하세요',
                    '公開オンチェーンデータで\nトークンと取引の流れを確認しましょう',
                    '通过公开链上数据确认\n代币和交易流向'
                )}
                </h1>

                <p className="explorer-hero__description">
                {t(
                    'The KORION Explorer page brings together token references, transaction visibility, official contract information, and public explorer access across the TRON ecosystem.',
                    'KORION Explorer 페이지는 TRON 네트워크 기반의 토큰 정보, 거래 흐름, 컨트랙트 참조 주소, 공개 익스플로러 접근 경로를 한곳에서 확인할 수 있도록 구성되었습니다.',
                    'KORION Explorerページは、TRONネットワークベースのトークン情報、取引フロー、コントラクト参照アドレス、および公開エクスプローラーへのアクセス経路を一つの場所に集約しています。',
                    'KORION Explorer 页面旨在将基于 TRON 网络代币信息、交易流向、合约参考地址和公开浏览器访问路径整合在一起。'
                )}
                </p>

                <div className="explorer-hero__actions">
                <a
                    href={explorerLinks.tronscanToken}
                    target="_blank"
                    rel="noreferrer"
                    className="explorer-hero__button explorer-hero__button--primary"
                >
                    {t('View on TRONSCAN', 'TRONSCAN에서 보기', 'TRONSCANで見る', '在 TRONSCAN 查看')}
                    <ArrowUpRight size={18} />
                </a>

                <a
                    href={explorerLinks.tronscanContract}
                    target="_blank"
                    rel="noreferrer"
                    className="explorer-hero__button explorer-hero__button--secondary"
                >
                    {t('Check Contract', '컨트랙트 확인', 'コントラクトを確認', '查看合约')}
                    <ExternalLink size={18} />
                </a>
                </div>

                <div className="explorer-hero__contract-strip">
                <div className="explorer-hero__contract-label">
                    {t('Official Contract Address', '공식 컨트랙트 주소', '公式コントラクトアドレス', '官方合约地址')}
                </div>

                <div className="explorer-hero__contract-row">
                    <code className="explorer-hero__contract-value">{CONTRACT_ADDRESS}</code>
                    <button
                    type="button"
                    className="explorer-hero__copy-button"
                    onClick={copyContractAddress}
                    >
                    <Copy size={15} />
                    {copied 
                        ? t('Copied', '복사됨', 'コピー済み', '已复制') 
                        : t('Copy', '복사', 'コピー', '复制')}
                    </button>
                </div>
                </div>
            </motion.div>
            </div>
        </section>
        </div>
    );
    }