import { Link } from 'react-router';
import { Home } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function NotFoundPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          {t('Page Not Found', '페이지를 찾을 수 없습니다', 'ページが見つかりません', '页面未找到')}
        </h2>
        <p className="text-lg text-white/70 mb-8 max-w-md mx-auto">
          {t(
            "The page you're looking for doesn't exist or has been moved.",
            '찾고 있는 페이지가 존재하지 않거나 이동되었습니다.',
            'お探しのページは存在しないか、移動された可能性があります。',
            '您查找的页面不存在或已被移动。'
          )}
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-semibold text-white hover:from-blue-600 hover:to-purple-700 transition-all"
        >
          <Home className="w-5 h-5" />
          {t('Back to Home', '홈으로 돌아가기', 'ホームへ戻る', '回到首页')}
        </Link>
      </div>
    </div>
  );
}
