import { motion } from "motion/react";
import { ArrowDownToLine, BadgeCheck, Smartphone } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import androidImage from "../../assets/Android_APK.png";
import "./DownloadPage.css";

export function DownloadPage() {    
    const { t } = useLanguage();

    return (
        <div className="download-page">
        <div className="download-page__bg">
            <div className="download-page__blur download-page__blur--blue" />
            <div className="download-page__blur download-page__blur--purple" />
            <div className="download-page__grid" />
        </div>

        <div className="download-page__container">
            <motion.div
            className="download-page__hero"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            >
            <div className="download-page__hero-badge">
                <BadgeCheck size={15} />
                <span>{t('OFFICIAL DOWNLOAD', 'OFFICIAL DOWNLOAD', '公式ダウンロード', '官方下载')}</span>
            </div>

            <div className="download-page__hero-icon">
                <Smartphone className="download-page__hero-icon-svg" />
            </div>

            <h1 className="download-page__title">
                {t('KORION Wallet', 'KORION Wallet', 'KORIONウォレット', 'KORION 钱包')}
                <span className="download-page__title-gradient">
                {t(' Download', ' 다운로드', ' のダウンロード', ' 下载')}
                </span>
            </h1>

            <p className="download-page__subtitle">
                {t(
                  'Download KORION Wallet through the official distribution channels.',
                  '공식 배포 경로를 통해 KORION Wallet을 다운로드하세요.',
                  '公式配布チャネルを通じてKORIONウォレットをダウンロードしてください。',
                  '通过官方分发渠道下载 KORION 钱包。'
                )}
            </p>
            </motion.div>

            <div className="download-page__grid-cards">
            <motion.a
                href="https://play.google.com/store/apps/details?id=com.korion.wallet"
                target="_blank"
                rel="noopener noreferrer"
                className="download-card download-card--play"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
            >
                <div className="download-card__topline">
                <span>Android</span>
                </div>

                <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                className="download-card__badge"
                />

                <h3 className="download-card__title">
                Google Play
                </h3>

                <p className="download-card__desc">
                {t('Install from the official store', '공식 스토어에서 설치', '公式ストアからインストール', '从官方商店安装')}
                </p>

                <div className="download-card__action download-card__action--play">
                <span>{t('Open', '열기', '開く', '打开')}</span>
                <ArrowRight size={18} />
                </div>
            </motion.a>

            <motion.a
                href="https://apps.apple.com/kr/app/korion-wallet/id6758933528"
                target="_blank"
                rel="noopener noreferrer"
                className="download-card download-card--ios"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
            >
                <div className="download-card__topline">
                <span>iPhone</span>
                </div>

                <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                alt="Download on the App Store"
                className="download-card__badge"
                />

                <h3 className="download-card__title">
                App Store
                </h3>

                <p className="download-card__desc">
                {t('Official iOS distribution path', '공식 iOS 배포 경로', '公式iOS配布チャネル', '官方 iOS 分发路径')}
                </p>

                <div className="download-card__action download-card__action--ios">
                <span>{t('Open', '열기', '開く', '打开')}</span>
                <ArrowRight size={18} />
                </div>
            </motion.a>

            <motion.a
                href="/downloads/app-release.apk"
                download="app-release.apk"
                className="download-card download-card--apk"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
            >
                <div className="download-card__topline">
                <span>{t('Direct APK', 'Direct APK', '個別APK', '直接 APK')}</span>
                </div>

                <div className="download-card__apk-visual">
                <img
                    src={androidImage}
                    alt="Android APK"
                    className="download-card__apk-image"
                />
                </div>

                <h3 className="download-card__title">
                {t('Download APK', 'APK 다운로드', 'APKをダウンロード', 'APK 下载')}
                </h3>

                <p className="download-card__desc">
                {t('Direct installation file for Android', '안드로이드 직접 설치 파일', 'Android直接インストールファイル', 'Android 直接安装文件')}
                </p>

                <div className="download-card__action download-card__action--apk">
                <span>{t('Download', '다운로드', 'ダウンロード', '下载')}</span>
                <ArrowDownToLine size={18} />
                </div>
            </motion.a>
            </div>
        </div>
        </div>
    );
}

function ArrowRight({ size }: { size: number }) {
    return (
        <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        >
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
        </svg>
    );
}