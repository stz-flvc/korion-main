import { motion } from 'motion/react';
import {
  AlertTriangle,
  BadgeCheck,
  BellRing,
  CheckCircle2,
  ChevronRight,
  KeyRound,
  LockKeyhole,
  ShieldCheck,
  Smartphone,
  TriangleAlert,
  Wallet,
  Eye,
  Fingerprint,
  Siren,
  FileLock2,
} from 'lucide-react';
import { Link } from 'react-router';
import { useLanguage } from '../contexts/LanguageContext';
import './SecurityPage.css';

const protectionCards = [
  {
    icon: LockKeyhole,
    titleEn: 'Account Protection',
    titleKr: '계정 보호',
    titleJa: 'アカウント保護',
    titleZh: '账户保护',
    descEn:
      'Protect your account with strong authentication, trusted devices, and safe login habits.',
    descKr:
      '강력한 인증 수단, 신뢰 가능한 기기, 안전한 로그인 습관으로 계정을 보호하세요.',
    descJa: '強力な認証、信頼できるデバイス、および安全なログイン習慣でアカウントを保護します。',
    descZh: '通过强大的身份验证、受信任的设备和安全的登录习惯保护您的帐户。',
    pointsEn: [
      'Use a strong and unique password',
      'Enable additional authentication when available',
      'Do not share login credentials with anyone',
    ],
    pointsKr: [
      '강력하고 고유한 비밀번호 사용',
      '가능한 경우 추가 인증 수단 활성화',
      '로그인 정보는 누구와도 공유하지 않기',
    ],
    pointsJa: [
      '強力でユニークなパスワードを使用する',
      '利用可能な場合は追加の認証を有効にする',
      'ログイン情報を誰とも共有しない',
    ],
    pointsZh: [
      '使用强大且唯一的密码',
      '如果可用，请启用额外的身份验证',
      '不要与任何人分享登录凭据',
    ],
  },
  {
    icon: Wallet,
    titleEn: 'Wallet Safety',
    titleKr: '지갑 안전 수칙',
    titleJa: 'ウォレットの安全性',
    titleZh: '钱包安全',
    descEn:
      'Your wallet is a core access point to digital assets and must be handled with extra caution.',
    descKr:
      '지갑은 디지털 자산 접근의 핵심 수단이므로 더욱 각별한 주의가 필요합니다.',
    descJa: 'ウォレットはデジタル資産へのコアなアクセスポイントであり、細心の注意を払って取り扱う必要があります。',
    descZh: '您的钱包是访问数字资产的核心入口，必须格外小心处理。',
    pointsEn: [
      'Back up recovery information securely',
      'Verify addresses carefully before transfer',
      'Never install unknown wallet-related apps',
    ],
    pointsKr: [
      '복구 정보를 안전하게 백업하기',
      '전송 전 주소를 반드시 다시 확인하기',
      '출처 불명의 지갑 관련 앱 설치 금지',
    ],
    pointsJa: [
      'リカバリ情報を安全にバックアップする',
      '転送前にアドレスを慎重に確認する',
      '不明なウォレット関連アプリをインストールしない',
    ],
    pointsZh: [
      '安全地备份恢复信息',
      '在转账前仔细核对地址',
      '切勿安装来源不明的钱包相关应用',
    ],
  },
  {
    icon: ShieldCheck,
    titleEn: 'Platform Security Awareness',
    titleKr: '플랫폼 보안 인식',
    titleJa: 'プラットフォームのセキュリティ意識',
    titleZh: '平台安全意识',
    descEn:
      'Stay alert to impersonation, phishing attempts, and suspicious links pretending to represent official services.',
    descKr:
      '공식 서비스를 사칭하는 피싱, 위장 링크, 의심스러운 연락에 항상 주의해야 합니다.',
    descJa: '公式サービスを装ったなりすまし、フィッシング、疑わしいリンクに注意してください。',
    descZh: '对冒充官方服务的冒名顶替、网络钓鱼尝试和可疑链接保持警惕。',
    pointsEn: [
      'Use only official links and official channels',
      'Ignore urgent messages demanding immediate action',
      'Report suspicious activity as early as possible',
    ],
    pointsKr: [
      '공식 링크와 공식 채널만 이용하기',
      '즉시 조치를 요구하는 긴급 메시지 주의',
      '의심 행위 발견 시 빠르게 신고하기',
    ],
    pointsJa: [
      '公式リンクと公式チャンネルのみを使用する',
      '即時の対応を求める緊急メッセージを無視する',
      '疑わしい活動をできるだけ早く報告する',
    ],
    pointsZh: [
      '仅使用官方链接和官方渠道',
      '忽略要求立即采取行动的紧急信息',
      '尽早报告可疑活动',
    ],
  },
];

const guideBlocks = [
  {
    icon: KeyRound,
    titleEn: 'Password & Authentication',
    titleKr: '비밀번호 및 인증',
    titleJa: 'パスワードと認証',
    titleZh: '密码与身份验证',
    bodyEn:
      'Use a long password that is not reused on other websites or services. Avoid storing passwords in unsecured notes or messenger apps. When additional authentication features are available, enable them and keep backup methods protected.',
    bodyKr:
      '다른 웹사이트나 서비스와 중복되지 않는 긴 비밀번호를 사용하세요. 비밀번호를 보안되지 않은 메모장이나 메신저에 저장하지 마세요. 추가 인증 기능이 제공되는 경우 활성화하고, 백업 인증 수단도 안전하게 관리해야 합니다.',
    bodyJa: '他のウェブサイトやサービスで再利用されていない長いパスワードを使用してください。保護されていないメモやメッセンジャーアプリにパスワードを保存しないでください。追加の認証機能が利用可能な場合は、それらを有効にし、バックアップ方法を保護してください。',
    bodyZh: '使用在其他网站或服务中未重复使用的长密码。避免将密码保存在未加密的备忘录或即时通讯应用中。当可以使用额外的身份验证功能时，请启用它们并妥善保护备份方式。',
  },
  {
    icon: Smartphone,
    titleEn: 'Device Safety',
    titleKr: '기기 보안',
    titleJa: 'デバイスの安全性',
    titleZh: '设备安全',
    bodyEn:
      'Keep your phone and computer updated to the latest secure version. Install apps only from trusted sources and avoid rooted or jailbroken devices for financial or wallet activity. Lock your device with a passcode, biometrics, or both.',
    bodyKr:
      '휴대폰과 컴퓨터는 최신 보안 버전으로 유지하세요. 앱은 신뢰 가능한 경로를 통해서만 설치하고, 금융 또는 지갑 활동에는 루팅·탈옥 기기 사용을 피하세요. 비밀번호, 생체인증 또는 두 가지 모두로 기기를 잠그는 것이 좋습니다.',
    bodyJa: '携帯電話やコンピュータを最新のセキュリティバージョンに更新してください。信頼できるソースからのみアプリをインストールし、金融やウォレットの活動にはルート化または脱獄されたデバイスを使用しないでください。パスコード、生体認証、またはその両方でデバイスをロックしてください。',
    bodyZh: '保持您的手机和电脑更新至最新的安全版本。仅从受信任的来源安装应用，避免在已植入 Root 或越狱的设备上进行金融或钱包活动。使用密码、生物识别或两者同时锁定您的设备。',
  },
  {
    icon: Eye,
    titleEn: 'Phishing Prevention',
    titleKr: '피싱 예방',
    titleJa: 'フィッシング防止',
    titleZh: '防止网络钓鱼',
    bodyEn:
      'Always inspect the URL and sender identity before entering any credentials or approving transactions. Attackers often copy branding, tone, and layouts. If a page feels rushed, unusual, or asks for sensitive information unexpectedly, stop and verify through official channels.',
    bodyKr:
      '로그인 정보 입력이나 거래 승인 전에는 반드시 URL과 발신자 정보를 확인하세요. 공격자는 브랜드, 말투, 화면 구성까지 유사하게 모방할 수 있습니다. 페이지가 지나치게 급박하거나 낯설고, 민감한 정보를 갑자기 요구한다면 즉시 중단하고 공식 채널을 통해 확인해야 합니다.',
    bodyJa: 'ログイン情報を入力したり取引を承認したりする前に、必ずURLと送り主の正体を確認してください。攻撃者はしばしば、ブランディング、口調、レイアウトをコピーします。ページが急かされているように感じたり、異常だったり、予기せぬ機密情報を要求されたりした場合は、停止して公式チャンネルで確認してください。',
    bodyZh: '在输入任何凭据或批准交易前，请务必检查 URL 和发送者身份。攻击者经常模仿品牌、语气和布局。如果页面感觉非常急迫、异常或出人意料地询问敏感信息，请停止并通过官方渠道进行验证。',
  },
  {
    icon: Fingerprint,
    titleEn: 'Recovery & Ownership',
    titleKr: '복구 정보 및 자산 소유권',
    titleJa: 'リカバリと所有権',
    titleZh: '恢复与所有权',
    bodyEn:
      'Recovery phrases, private keys, and wallet credentials must never be exposed to anyone. No legitimate support team should ask for them. Store recovery details offline in a secure and private place, and verify that your backup can actually be accessed when needed.',
    bodyKr:
      '복구 구문, 개인키, 지갑 자격 정보는 누구에게도 노출되어서는 안 됩니다. 정상적인 지원팀이라면 이를 요구하지 않습니다. 복구 정보는 오프라인의 안전하고 사적인 장소에 보관하고, 실제 필요 시 접근 가능한 상태인지 점검해 두는 것이 중요합니다.',
    bodyJa: 'リカバリフレーズ、秘密鍵、およびウォレットの資格情報は、誰にも公開しないでください。正当なサポートチームはこれらを要求しません。リカバリの詳細をオフラインの安全でプライベートな場所に保存し、必要になったときに実際にバックアップにアクセスできることを確認してください。',
    bodyZh: '助记词、私钥和钱包凭据绝不能泄露给任何人。任何正规的支持团队都不会索要这些信息。将恢复详情离线保存在安全且私密的地方，并验证在需要时是否确实可以访问您的备份。',
  },
];

const checklistItems = {
  en: [
    'I use a password that is unique to this service.',
    'I verify wallet addresses before every transfer.',
    'I do not share private keys or recovery phrases.',
    'I use only official links and official announcements.',
    'I avoid unknown files, suspicious QR codes, and fake support accounts.',
    'I keep my device and app versions updated.',
  ],
  kr: [
    '이 서비스 전용의 고유한 비밀번호를 사용하고 있습니다.',
    '모든 전송 전에 지갑 주소를 다시 확인합니다.',
    '개인키나 복구 구문을 누구와도 공유하지 않습니다.',
    '공식 링크와 공식 공지만 이용합니다.',
    '출처 불명 파일, 의심스러운 QR, 가짜 고객센터 계정을 피합니다.',
    '기기와 앱을 최신 버전으로 유지합니다.',
  ],
  ja: [
    'このサービス専用のユニークなパスワードを使用しています。',
    'すべての転送前にウォレットのアドレスを確認しています。',
    '秘密鍵やリカバリフレーズを共有しません。',
    '公式リンクと公式アナウンスのみを使用しています。',
    '不明なファイル、疑わしいQRコード、および偽のサポートアカウントを避けています。',
    'デバイスとアプリのバージョンを最新に保っています。',
  ],
  zh: [
    '我使用此服务专有的唯一密码。',
    '我在每次转账前都会核对钱包地址。',
    '我不分享私钥或助记词。',
    '我只使用官方链接和官方公告。',
    '我避免处理不明文件、可疑二维码和假冒的支持账户。',
    '我保持我的设备和应用版本处于最新状态。',
  ],
};

const emergencySteps = {
  en: [
    'Stop further actions immediately if you suspect fraud or compromise.',
    'Change related passwords and revoke risky access where possible.',
    'Move assets only after confirming a safe environment.',
    'Contact official support channels with accurate details.',
  ],
  kr: [
    '사기나 계정 이상이 의심되면 즉시 추가 행동을 중단하세요.',
    '관련 비밀번호를 변경하고 위험한 접근 권한을 정리하세요.',
    '안전한 환경을 확인한 뒤에만 자산 이동을 진행하세요.',
    '정확한 내용을 정리해 공식 지원 채널로 문의하세요.',
  ],
  ja: [
    '詐欺や侵害の疑いがある場合は、直ちに行動を停止してください。',
    '関連するパスワードを変更し、可能な場合はリスクのあるアクセスを取り消してください。',
    '安全な環境を確認した後にのみ、資産を移動してください。',
    '正確な詳細を添えて、公式サポートチャンネルに連絡してください。',
  ],
  zh: [
    '如果您怀疑存在欺诈或泄露，请立即停止进一步行动。',
    '更改相关密码并在可能的情况下撤销风险访问。',
    '仅在确认安全环境后才移动资产。',
    '携带准确详情联系官方支持渠道。',
  ],
};

export function SecurityPage() {
  const { t } = useLanguage();

  return (
    <div className="security-page">
      <div className="security-page__container">
        <section className="security-page__intro">
          <motion.div
            className="security-page__intro-badge"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <ShieldCheck size={16} />
            <span>{t('Security Guidance Center', '보안 안내 센터', 'セキュリティガイダンスセンター', '安全指南中心')}</span>
          </motion.div>

          <motion.h1
            className="security-page__title"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.04 }}
          >
            {t(
              'Review account protection, wallet precautions, and practical security guidance in one place',
              '계정 보호, 지갑 주의사항, 보안 가이드를 한눈에 확인하세요',
              'アカウント保護、ウォレットの注意事項、実用的セキュリティガイダンスを1箇所で確認',
              '在一处查看账户保护、钱包注意事项和实用的安全指南'
            )}
          </motion.h1>

          <motion.p
            className="security-page__lead"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            {t(
              'This page brings together essential security principles and user precautions to support safer platform usage. Security is not only a feature but also a habit, and one careful check can prevent significant risk.',
              '이 페이지는 사용자가 보다 안전하게 서비스를 이용할 수 있도록 핵심 보안 원칙과 주의사항을 정리한 안내 페이지입니다. 보안은 기능이 아니라 습관이며, 작은 확인 하나가 큰 위험을 막을 수 있습니다.',
              'このページは、より安全なプラットフォーム利用をサポートするために、不可欠なセキュリティ原則とユーザーの注意事項をまとめたものです。セキュリティは機能であるだけでなく習慣でもあり、ひとつの慎重な確認が大きなリスクを防ぐことができます。',
              '本页面汇集了基本的安全原则和用户注意事项，以支持更安全的平台使用。安全不仅是一项功能，也是一种习惯，一次仔细的检查就可以预防重大风险。'
            )}
          </motion.p>
        </section>

        <section className="security-page__protection-grid">
          {protectionCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.article
                key={index}
                className="security-protection-card"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
              >
                <div className="security-protection-card__icon">
                  <Icon size={20} />
                </div>

                <h2 className="security-protection-card__title">
                  {t(card.titleEn, card.titleKr, card.titleJa, card.titleZh)}
                </h2>

                <p className="security-protection-card__desc">
                  {t(card.descEn, card.descKr, card.descJa, card.descZh)}
                </p>

                <div className="security-protection-card__list">
                  {t(card.pointsEn, card.pointsKr, card.pointsJa, card.pointsZh).map((point: string, pointIndex: number) => (
                    <div key={pointIndex} className="security-protection-card__item">
                      <BadgeCheck size={16} />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </section>

        <section className="security-page__guides">
          <div className="security-page__section-head">
            <div className="security-page__section-kicker">
              <FileLock2 size={16} />
              <span>{t('Security Guide', '보안 가이드', 'セキュリティガイド', '安全指南')}</span>
            </div>
            <h2>
              {t(
                'Core principles for safer usage',
                '안전한 이용을 위한 핵심 원칙',
                'より安全な利用のためのコア原則',
                '更安全使用的核心原则'
              )}
            </h2>
            <p>
              {t(
                'These recommendations focus on the most common security risks users face across accounts, devices, links, and recovery information.',
                '계정, 기기, 링크, 복구 정보까지 실제 사용 과정에서 가장 자주 발생하는 보안 위험 요소를 기준으로 정리했습니다.',
                'これらの推奨事項は、アカウント、デバイス、リンク、およびリカバリ情報全体でユーザーが直面する最も一般的なセキュリティリスクに焦点を当てています。',
                '这些建议重点关注用户在账户、设备、链接和恢复信息方面面临的最常见的安全风险。'
              )}
            </p>
          </div>

          <div className="security-guide-grid">
            {guideBlocks.map((block, index) => {
              const Icon = block.icon;

              return (
                <motion.article
                  key={index}
                  className="security-guide-card"
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                >
                  <div className="security-guide-card__top">
                    <div className="security-guide-card__icon">
                      <Icon size={18} />
                    </div>
                    <h3>{t(block.titleEn, block.titleKr, block.titleJa, block.titleZh)}</h3>
                  </div>
                  <p>{t(block.bodyEn, block.bodyKr, block.bodyJa, block.bodyZh)}</p>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section className="security-page__awareness">
          <motion.div
            className="security-alert-card"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <div className="security-alert-card__header">
              <div className="security-alert-card__icon">
                <TriangleAlert size={18} />
              </div>
              <div>
                <h3>{t('Please stay alert', '반드시 주의하세요', '常に注意してください', '请保持警惕')}</h3>
                <p>
                  {t(
                    'A legitimate operations or support team should never ask for your private key, recovery phrase, or full password.',
                    '정상적인 운영팀이나 고객지원은 개인키, 복구 구문, 전체 비밀번호를 요구하지 않습니다.',
                    '正当な運営またはサポートチームが、秘密鍵、リカバリフレーズ、または完全なパスワードを要求することはありません。',
                    '正规的运营或支持团队绝不会索要您的私钥、助记词或完整密码。'
                  )}
                </p>
              </div>
            </div>

            <div className="security-alert-card__tags">
              <span>{t('Fake support warning', '가짜 고객센터 주의', '偽サポート注意', '假冒支持警告')}</span>
              <span>{t('Phishing link warning', '피싱 링크 주의', 'フィッシングリンク注意', '网络钓鱼链接警告')}</span>
              <span>{t('Never share recovery data', '복구정보 공유 금지', 'リカバリ情報は共有禁止', '绝不分享恢复数据')}</span>
            </div>
          </motion.div>
        </section>

        <section className="security-page__checklist-wrap">
          <div className="security-page__section-head">
            <div className="security-page__section-kicker">
              <CheckCircle2 size={16} />
              <span>{t('Security Checklist', '보안 체크리스트', 'セキュリティチェックリスト', '安全检查表')}</span>
            </div>
            <h2>{t('Check your security posture now', '지금 바로 점검해보세요', '今すぐセキュリティ状況を確認', '立即检查您的安全状况')}</h2>
          </div>

          <div className="security-checklist">
            {t(checklistItems.en, checklistItems.kr, checklistItems.ja, checklistItems.zh).map((item: string, index: number) => (
              <motion.div
                key={index}
                className="security-checklist__item"
                initial={{ opacity: 0, x: -14 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
              >
                <CheckCircle2 size={18} />
                <span>{item}</span>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="security-page__emergency">
          <div className="security-page__section-head">
            <div className="security-page__section-kicker">
              <Siren size={16} />
              <span>{t('Emergency Response', '긴급 대응', '緊急対応', '应急响应')}</span>
            </div>
            <h2>{t('What to do if something looks wrong', '이상 징후가 보이면 이렇게 대응하세요', '異常が見られた場合の対応方法', '如果发现异常情况该怎么办')}</h2>
          </div>

          <div className="security-emergency-grid">
            {t(emergencySteps.en, emergencySteps.kr, emergencySteps.ja, emergencySteps.zh).map((step: string, index: number) => (
              <motion.div
                key={index}
                className="security-emergency-step"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
              >
                <div className="security-emergency-step__index">0{index + 1}</div>
                <p>{step}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="security-page__cta">
          <motion.div
            className="security-cta-card"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <div className="security-cta-card__content">
              <div className="security-cta-card__badge">
                <BellRing size={16} />
                <span>{t('Safer Usage Habits', '안전한 이용 습관', 'より安全な利用習慣', '更安全的使用习惯')}</span>
              </div>

              <h2>
                {t(
                  'Security is not a one-time setup, but a continuous practice',
                  '보안은 한 번의 설정이 아니라 지속적인 확인입니다',
                  'セキュリティは一度の設定ではなく、継続的な実践です',
                  '安全不是一次性的设置，而是一种持续的实践'
                )}
              </h2>

              <p>
                {t(
                  'Account and wallet safety are most often weakened by small moments of carelessness. Use official channels, store recovery information securely, and keep the habit of verifying every transfer before approval.',
                  '계정 보호와 지갑 보안은 사소한 부주의에서 가장 자주 무너집니다. 공식 경로를 이용하고, 복구 정보를 안전하게 관리하며, 모든 전송 전 다시 확인하는 습관을 유지하세요.',
                  'アカウントとウォレットの安全性は、些細な不注意から損なわれることが最も多いです。公式チャンネルを利用し、リカバリ情報を安全に保管し、承認前にすべての送金を確認する習慣を維持してください。',
                  '账户和钱包的安全往往因一时的疏忽而减弱。请使用官方渠道，安全地存储恢复信息，并养成在批准前核实每次转账的习惯。'
                )}
              </p>

              <div className="security-cta-card__actions">
                <Link to="/support" className="security-cta-card__button security-cta-card__button--primary">
                  <span>{t('View Support', '고객지원 보기', 'サポートを表示', '查看支持')}</span>
                  <ChevronRight size={18} />
                </Link>

                <Link to="/download" className="security-cta-card__button security-cta-card__button--secondary">
                  <span>{t('Download App', '앱 다운로드', 'アプリをダウンロード', '下载应用')}</span>
                </Link>
              </div>
            </div>

            <div className="security-cta-card__visual" aria-hidden="true">
              <div className="security-cta-card__orb security-cta-card__orb--one" />
              <div className="security-cta-card__orb security-cta-card__orb--two" />
              <div className="security-cta-card__shield">
                <ShieldCheck size={34} />
              </div>
              <div className="security-cta-card__mini security-cta-card__mini--a">
                <LockKeyhole size={16} />
              </div>
              <div className="security-cta-card__mini security-cta-card__mini--b">
                <AlertTriangle size={16} />
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}