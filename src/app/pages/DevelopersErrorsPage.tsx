import { Link } from 'react-router';
import {
  AlertTriangle,
  ChevronDown,
  FileWarning,
  KeyRound,
  ShieldAlert,
  Workflow,
  Wrench,
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import './DevelopersErrorsPage.css';

const errorGroups = [
  {
    titleEn: 'Authentication Errors',
    titleKo: '인증 오류',
    titleJa: '認証エラー',
    titleZh: '认证错误',
    icon: KeyRound,
    rows: [
      ['AUTH_001', 'Missing API key', 'API 키가 없습니다', 'APIキーがありません', '缺少 API 密钥'],
      ['AUTH_002', 'Invalid API key', '유효하지 않은 API 키입니다', '無効なAPIキーです', '无效的 API 密钥'],
      ['AUTH_003', 'Signature verification failed', '서명 검증에 실패했습니다', '署名検証に失敗しました', '签名验证失败'],
      ['AUTH_004', 'Timestamp expired', '타임스탬프가 만료되었습니다', 'タイムスタンプの期限が切れました', '时间戳已过期'],
    ],
  },
  {
    titleEn: 'Request Errors',
    titleKo: '요청 오류',
    titleJa: 'リクエストエラー',
    titleZh: '请求错误',
    icon: FileWarning,
    rows: [
      ['REQ_001', 'Invalid request payload', '요청 payload가 유효하지 않습니다', 'リクエストペイロードが無効です', '请求有效负载无效'],
      ['REQ_002', 'Required field missing', '필수 필드가 누락되었습니다', '必須フィールドが不足しています', '缺少必填字段'],
      ['REQ_003', 'Unsupported asset', '지원되지 않는 자산입니다', 'サポートされていない資産です', '不受支持的资产'],
      ['REQ_004', 'Unsupported network', '지원되지 않는 네트워크입니다', 'サポートされていないネットワークです', '不受支持的网络'],
    ],
  },
  {
    titleEn: 'Operational Errors',
    titleKo: '운영 오류',
    titleJa: '運用エラー',
    titleZh: '运营错误',
    icon: Workflow,
    rows: [
      ['OPS_001', 'Withdrawal not allowed', '출금이 허용되지 않은 상태입니다', '出金が許可されていません', '不允许提现'],
      ['OPS_002', 'Settlement not ready', '정산이 준비되지 않았습니다', '精算の準備ができていません', '结算未就绪'],
      ['OPS_003', 'Deposit still pending', '입금이 아직 대기 상태입니다', '入金がまだ保留中です', '存款仍在待处理中'],
      ['OPS_004', 'Partner access restricted', '파트너 접근 권한이 제한되었습니다', 'パートナーのアクセスが制限されています', '合作伙伴访问受限'],
    ],
  },
  {
    titleEn: 'System Errors',
    titleKo: '시스템 오류',
    titleJa: '시스템エラー',
    titleZh: '系统错误',
    icon: ShieldAlert,
    rows: [
      ['SYS_500', 'Internal server error', '내부 서버 오류입니다', '内部サーバーエラーです', '内部服务器错误'],
      ['SYS_503', 'Service temporarily unavailable', '서비스가 일시적으로 사용 불가합니다', 'サービスは一時的に利用できません', '服务暂时不可用'],
      ['SYS_504', 'Upstream timeout', '상위 시스템 타임아웃입니다', 'アップストリームタイムアウト입니다', '上游超时'],
      ['SYS_599', 'Unknown operational exception', '알 수 없는 운영 예외입니다', '不明な運用例外です', '未知运营异常'],
    ],
  },
];

export function DevelopersErrorsPage() {
  const { t } = useLanguage();

  return (
    <div className="developers-errors-page">
      <section className="developers-errors-hero">
        <div className="developers-errors-page__container">
          <div className="developers-errors-hero__crumbs">
            <Link to="/developers">{t('Developers', '개발자', 'デベロッ퍼', '开发者')}</Link>
            <ChevronDown size={14} />
            <span>{t('Error Codes', '오류 코드', 'エラーコード', '错误代码')}</span>
          </div>

          <h1>{t('Error Code Reference', '오류 코드 참조', 'エラーコードリファレンス', '错误代码参考')}</h1>
          <p>
            {t(
              'Error documentation helps developers and partners identify issues quickly. The clearest structure separates authentication, request, operational, and system errors.',
              '오류 코드 문서는 개발자와 파트너가 빠르게 원인을 파악하고 대응할 수 있게 해주는 핵심 문서입니다. 인증, 요청, 운영, 시스템 오류를 분리해 공개하는 구조가 가장 이해하기 쉽습니다.',
              'エラーコードドキュメントは、開発者やパートナーが原因を迅速に特定し、対応できるようにするための重要なドキュメントです。認証、リクエスト、運用、システムエラーを分離する構造が最も理解しやすいです。',
              '错误代码文档是帮助开发人员和合作伙伴快速识别原因并做出响应的关键文档。将认证、请求、运营和系统错误分开的结构最容易理解。'
            )}
          </p>
        </div>
      </section>

      <section className="developers-errors-body">
        <div className="developers-errors-page__container">
          <div className="developers-errors-summary">
            <div className="developers-errors-summary__card">
              <AlertTriangle size={18} />
              <strong>{t('Errors grouped by category', '오류는 범주별로 분리', 'エラーはカテゴリ別に分類', '错误按类别分组')}</strong>
            </div>
            <div className="developers-errors-summary__card">
              <Wrench size={18} />
              <strong>{t('Operationally useful code structure', '운영 대응이 쉬운 코드 체계', '運用に役立つコード構造', '运营有用的代码结构')}</strong>
            </div>
          </div>

          <div className="developers-errors-groups">
            {errorGroups.map((group) => {
              const Icon = group.icon;
              return (
                <section className="developers-errors-group" key={group.titleEn}>
                  <div className="developers-errors-group__head">
                    <div className="developers-errors-group__icon">
                      <Icon size={18} />
                    </div>
                    <h2>{t(group.titleEn, group.titleKo, group.titleJa, group.titleZh)}</h2>
                  </div>

                  <div className="developers-errors-table">
                    {group.rows.map(([code, en, ko, ja, zh]) => (
                      <div className="developers-errors-row" key={code}>
                        <code>{code}</code>
                        <span>{t(en, ko, ja, zh)}</span>
                      </div>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}