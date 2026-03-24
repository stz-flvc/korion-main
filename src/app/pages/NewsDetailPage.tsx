import { useEffect, useState, useMemo } from 'react';
import { Link, useParams } from 'react-router';
import { CalendarDays, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { mockAdminService } from '../services/mockAdminService';
import type { CardNews, NewsCategory } from '../types/admin';
import { NewsImage } from '../components/news/NewsImage';
import './NewsDetailPage.css';

export function NewsDetailPage() {
    const { slug } = useParams();
    const { t, language } = useLanguage();
    const [news, setNews] = useState<CardNews[]>([]);

    useEffect(() => {
        setNews(mockAdminService.getNews().filter(n => n.isVisible));
    }, []);

    const sortedPosts = useMemo(() => {
        return [...news].sort(
            (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
        );
    }, [news]);

    const postIndex = sortedPosts.findIndex((p) => p.slug === slug);
    const post = postIndex !== -1 ? sortedPosts[postIndex] : null;
    const prevPost = postIndex < sortedPosts.length - 1 ? sortedPosts[postIndex + 1] : null;
    const nextPost = postIndex > 0 ? sortedPosts[postIndex - 1] : null;

    const getPostTitle = (p: CardNews) => {
        return t(p.title, p.titleKo || p.title, p.titleJa || p.title, p.titleZh || p.title);
    };

    const getPostSummary = (p: CardNews) => {
        return t(p.summary, p.summaryKo || p.summary, p.summaryJa || p.summary, p.summaryZh || p.summary);
    };

    const getPostContent = (p: CardNews): string[] => {
        switch (language) {
            case 'KR': return p.contentKo || p.content;
            case 'JA': return p.contentJa || p.content;
            case 'ZH': return p.contentZh || p.content;
            default:   return p.content;
        }
    };

    const getCategoryLabel = (category: NewsCategory) => {
        switch (category) {
            case 'notice':
                return t('Notice', '공지', 'お知らせ', '公告');
            case 'update':
                return t('Update', '업데이트', 'アップデート', '更新');
            case 'event':
                return t('Event', '이벤트', 'イベント', '活动');
            case 'media':
                return t('Progress', '진행사항', '進捗状況', '进展情况');
            default:
                return t('News', '뉴스', 'ニュース', '新闻');
        }
    };

    if (!news.length) return null;

    if (!post) {
        return (
            <div className="news-detail-page">
                <div className="news-detail-page__container news-detail-page__empty">
                <h1>{t('Post not found.', '게시글을 찾을 수 없습니다.', '記事が見つかりませんでした。', '未找到文章。')}</h1>
                <Link to="/news" className="news-detail-page__back-btn">
                    {t('Back to News', '뉴스 페이지로 돌아가기', 'ニュース一覧に戻る', '返回新闻列表')}
                </Link>
                </div>
            </div>
        );
    }

    const relatedPosts = sortedPosts
        .filter((item) => item.id !== post.id)
        .sort((a, b) => {
            const sameCategoryA = a.category === post.category ? 1 : 0;
            const sameCategoryB = b.category === post.category ? 1 : 0;
            if (sameCategoryA !== sameCategoryB) return sameCategoryB - sameCategoryA;
            return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
        })
        .slice(0, 3);

    const title = getPostTitle(post);
    const summary = getPostSummary(post);
    const content = getPostContent(post);

    return (
        <div className="news-detail-page">
        <section className="news-detail-page__hero">
            <div className="news-detail-page__container">
            <Link to="/news" className="news-detail-page__breadcrumb">
                <ChevronLeft size={18} />
                <span>{t('Back to News', '뉴스 목록으로', 'ニュース一覧に戻る', '返回新闻列表')}</span>
            </Link>

            <div className="news-detail-page__meta">
                <span className="news-detail-page__category">
                {getCategoryLabel(post.category)}
                </span>
                <span className="news-detail-page__date">
                <CalendarDays size={14} />
                {post.publishedAt}
                </span>
            </div>

            <h1>{title}</h1>
            <p>{summary}</p>
            </div>
        </section>

        <section className="news-detail-page__content-section">
            <div className="news-detail-page__container">
            <div className="news-detail-page__thumbnail">
                <NewsImage src={post.thumbnail || undefined} alt={title} />
            </div>

            <article className="news-detail-page__content">
                {content.map((paragraph, index) => (
                <p key={`${post.id}-${index}`}>{paragraph}</p>
                ))}
            </article>

            {post.tags && post.tags.length > 0 && (
                <div className="news-detail-page__tags">
                    {post.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                    ))}
                </div>
            )}

            <div className="news-detail-page__nav">
                {prevPost ? (
                <Link to={`/news/${prevPost.slug}`} className="news-detail-page__nav-card">
                    <span>{t('Previous', '이전 글', '前の記事', '上一篇')}</span>
                    <strong>{getPostTitle(prevPost)}</strong>
                </Link>
                ) : (
                <div />
                )}

                {nextPost ? (
                <Link to={`/news/${nextPost.slug}`} className="news-detail-page__nav-card is-right">
                    <span>{t('Next', '다음 글', '次の記事', '下一篇')}</span>
                    <strong>{getPostTitle(nextPost)}</strong>
                    <ChevronRight size={18} />
                </Link>
                ) : (
                <div />
                )}
            </div>
            </div>
        </section>

        {relatedPosts.length > 0 && (
            <section className="news-detail-page__related">
            <div className="news-detail-page__container">
                <div className="news-detail-page__related-head">
                <span>{t('Related Posts', '관련 게시글', '関連記事', '相关文章')}</span>
                </div>

                <div className="news-detail-page__related-grid">
                {relatedPosts.map((item) => (
                    <Link key={item.id} to={`/news/${item.slug}`} className="news-detail-page__related-card">
                    <div className="news-detail-page__related-image">
                        <NewsImage
                        src={item.thumbnail || undefined}
                        alt={getPostTitle(item)}
                        />
                    </div>

                    <div className="news-detail-page__related-body">
                        <div className="news-detail-page__meta">
                        <span className="news-detail-page__category">
                            {getCategoryLabel(item.category)}
                        </span>
                        <span className="news-detail-page__date">
                            <CalendarDays size={14} />
                            {item.publishedAt}
                        </span>
                        </div>

                        <h3>{getPostTitle(item)}</h3>
                        <p>{getPostSummary(item)}</p>
                    </div>
                    </Link>
                ))}
                </div>
            </div>
            </section>
        )}
        </div>
    );
}