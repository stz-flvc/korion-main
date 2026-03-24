import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router';
import { CalendarDays, Pin, Sparkles, ChevronRight, Search, ChevronLeft } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { mockAdminService } from '../services/mockAdminService';
import type { CardNews, NewsCategory } from '../types/admin';
import { NewsImage } from '../components/news/NewsImage';
import './NewsPage.css';

const categoryOrder: Array<NewsCategory | 'all'> = ['all', 'notice', 'update', 'event', 'media'];
const POSTS_PER_PAGE = 6;

export function NewsPage() {
    const { language, t } = useLanguage();

    const [selectedCategory, setSelectedCategory] = useState<NewsCategory | 'all'>('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [featuredIndex, setFeaturedIndex] = useState(0);
    const [page, setPage] = useState(1);
    const [dynamicNews, setDynamicNews] = useState<CardNews[]>([]);

    useEffect(() => {
        const data = mockAdminService.getNews();
        setDynamicNews(data.filter(n => n.isVisible));
    }, []);

    const sortedPosts = useMemo(() => {
        return [...dynamicNews].sort((a, b) => {
        const aTime = new Date(a.publishedAt).getTime();
        const bTime = new Date(b.publishedAt).getTime();
        if (bTime !== aTime) return bTime - aTime;
        return (b.position || 0) - (a.position || 0);
        });
    }, [dynamicNews]);

    const featuredPosts = useMemo(
        () => sortedPosts.filter((post) => post.isFeatured),
        [sortedPosts]
    );

    const pinnedPosts = useMemo(
        () => sortedPosts.filter((post) => post.isPinned),
        [sortedPosts]
    );

    const normalizedSearch = searchTerm.trim().toLowerCase();

    const filteredPosts = useMemo(() => {
        return sortedPosts.filter((post) => {
        const matchesCategory =
            selectedCategory === 'all' ? true : post.category === selectedCategory;

        if (!matchesCategory) return false;
        if (!normalizedSearch) return true;

        const searchPool = [
            post.title,
            post.titleKo,
            post.titleJa,
            post.titleZh,
            post.summary,
            post.summaryKo,
            post.summaryJa,
            post.summaryZh,
            ...(post.tags || []),
        ]
            .join(' ')
            .toLowerCase();

        return searchPool.includes(normalizedSearch);
        });
    }, [sortedPosts, selectedCategory, normalizedSearch]);

    const totalPages = Math.max(1, Math.ceil(filteredPosts.length / POSTS_PER_PAGE));

    const paginatedPosts = useMemo(() => {
        const start = (page - 1) * POSTS_PER_PAGE;
        return filteredPosts.slice(start, start + POSTS_PER_PAGE);
    }, [filteredPosts, page]);

    useEffect(() => {
        setPage(1);
    }, [selectedCategory, normalizedSearch]);

    useEffect(() => {
        if (page > totalPages) setPage(totalPages);
    }, [page, totalPages]);

    useEffect(() => {
        if (featuredPosts.length <= 1) return;

        const timer = window.setInterval(() => {
        setFeaturedIndex((prev) => (prev + 1) % featuredPosts.length);
        }, 5000);

        return () => window.clearInterval(timer);
    }, [featuredPosts.length]);

    const currentFeaturedPost = featuredPosts[featuredIndex] || null;

    const getCategoryLabel = (category: NewsCategory | 'all') => {
        switch (category) {
            case 'all':
                return t('All', '전체', 'すべて', '全部');
            case 'notice':
                return t('Notice', '공지', 'お知らせ', '公告');
            case 'update':
                return t('Update', '업데이트', 'アップデート', '更新');
            case 'event':
                return t('Event', '이벤트', 'イベント', '活动');
            case 'media':
                return t('Progress', '진행사항', '進捗状況', '进展情况');
            default:
                return '';
        }
    };

    const formatDate = (date: string) => date;

    const handlePrevFeatured = () => {
        setFeaturedIndex((prev) => (prev - 1 + featuredPosts.length) % featuredPosts.length);
    };

    const handleNextFeatured = () => {
        setFeaturedIndex((prev) => (prev + 1) % featuredPosts.length);
    };

    const getPostSummary = (post: CardNews) => {
        return t(post.summary, post.summaryKo || post.summary, post.summaryJa || post.summary, post.summaryZh || post.summary);
    };

    const getPostTitle = (post: CardNews) => {
        return t(post.title, post.titleKo || post.title, post.titleJa || post.title, post.titleZh || post.title);
    };

    return (
        <div className="news-page">
        <section className="news-page__hero">
            <div className="news-page__glow news-page__glow--1" />
            <div className="news-page__glow news-page__glow--2" />

            <div className="news-page__container news-page__hero-container">
            <div className="news-page__hero-badge">
                <Sparkles size={16} />
                <span>
                {t(
                    'KORION Announcements · Updates · Key Progress',
                    'KORION 공지 · 업데이트 · 주요 진행 사항',
                    'KORION お知らせ · アップデート · 主要な進捗状況',
                    'KORION 公告 · 更新 · 关键进展'
                )}
                </span>
            </div>

            <h1 className="news-page__hero-title">KORION Newsroom</h1>

            <p className="news-page__hero-desc">
                {t(
                    'This is the official newsroom where you can follow KORION announcements, service updates, ecosystem progress, and key operational news.',
                    'KORION의 공식 공지, 서비스 업데이트, 생태계 진행 현황, 주요 운영 소식을 확인할 수 있는 공식 뉴스 페이지입니다.',
                    'KORIONの公式お知らせ、サービスアップデート、エコシステムの進捗状況、および主要な運営ニュースを確認できる公式ニュースルームです。',
                    '这是官方新闻室，您可以在此关注 KORION 公告、服务更新、生态系统进展和关键运营新闻。'
                )}
            </p>
            </div>
        </section>

        {currentFeaturedPost && (
            <section className="news-page__featured">
            <div className="news-page__container">
                <div className="news-page__section-head news-page__section-head--between">
                <span>{t('Featured', '주요 소식', '注目のニュース', '精选新闻')}</span>

                {featuredPosts.length > 1 && (
                    <div className="news-page__slider-controls">
                    <button type="button" onClick={handlePrevFeatured} aria-label="Previous featured post">
                        <ChevronLeft size={18} />
                    </button>
                    <button type="button" onClick={handleNextFeatured} aria-label="Next featured post">
                        <ChevronRight size={18} />
                    </button>
                    </div>
                )}
                </div>

                <Link to={`/news/${currentFeaturedPost.slug}`} className="news-page__featured-card">
                <div className="news-page__featured-image">
                    <NewsImage
                    src={currentFeaturedPost.thumbnail}
                    alt={getPostTitle(currentFeaturedPost)}
                    />
                </div>

                <div className="news-page__featured-content">
                    <div className="news-page__meta-row">
                    <span className="news-page__category-badge">
                        {getCategoryLabel(currentFeaturedPost.category)}
                    </span>
                    <span className="news-page__date">
                        <CalendarDays size={14} />
                        {formatDate(currentFeaturedPost.publishedAt)}
                    </span>
                    </div>

                    <h2>{getPostTitle(currentFeaturedPost)}</h2>
                    <p>{getPostSummary(currentFeaturedPost)}</p>

                    <div className="news-page__readmore">
                    <span>{t('Read More', '자세히 보기', '詳しく見る', '阅读更多')}</span>
                    <ChevronRight size={18} />
                    </div>

                    {featuredPosts.length > 1 && (
                    <div className="news-page__slider-dots">
                        {featuredPosts.map((post, index) => (
                        <button
                            key={post.id}
                            type="button"
                            className={index === featuredIndex ? 'is-active' : ''}
                            onClick={(e) => {
                            e.preventDefault();
                            setFeaturedIndex(index);
                            }}
                            aria-label={`Go to featured slide ${index + 1}`}
                        />
                        ))}
                    </div>
                    )}
                </div>
                </Link>
            </div>
            </section>
        )}

        {pinnedPosts.length > 0 && (
            <section className="news-page__pinned">
            <div className="news-page__container">
                <div className="news-page__section-head">
                <span>{t('Pinned Notices', '고정 공지', '固定されたお知らせ', '置顶公告')}</span>
                </div>

                <div className="news-page__pinned-list">
                {pinnedPosts.map((post) => (
                    <Link key={post.id} to={`/news/${post.slug}`} className="news-page__pinned-item">
                    <div className="news-page__pinned-left">
                        <Pin size={16} />
                        <strong>{getPostTitle(post)}</strong>
                    </div>
                    <span>{formatDate(post.publishedAt)}</span>
                    </Link>
                ))}
                </div>
            </div>
            </section>
        )}

        <section className="news-page__toolbar">
            <div className="news-page__container">
            <div className="news-page__toolbar-shell">
                <div className="news-page__search-box">
                <Search size={18} />
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder={t(
                        'Search notices, updates, tags',
                        '공지, 업데이트, 태그 검색',
                        'お知らせ、アップデート、タグを検索',
                        '搜索公告、更新、标签'
                    )}
                />
                </div>

                <div className="news-page__filter-row">
                {categoryOrder.map((category) => (
                    <button
                    key={category}
                    className={`news-page__filter-btn ${
                        selectedCategory === category ? 'is-active' : ''
                    }`}
                    onClick={() => setSelectedCategory(category)}
                    type="button"
                    >
                    {getCategoryLabel(category)}
                    </button>
                ))}
                </div>
            </div>
            </div>
        </section>

        <section className="news-page__list-section">
            <div className="news-page__container">
            <div className="news-page__results-meta">
                <strong>
                {t(
                    `${filteredPosts.length} posts found`,
                    `총 ${filteredPosts.length}개의 게시글`,
                    `${filteredPosts.length} 件の記事が見つかりました`,
                    `找到 ${filteredPosts.length} 篇文章`
                )}
                </strong>
            </div>

            {paginatedPosts.length > 0 ? (
                <>
                <div className="news-page__grid">
                    {paginatedPosts.map((post) => (
                    <NewsCard
                        key={post.id}
                        post={post}
                        getCategoryLabel={getCategoryLabel}
                        formatDate={formatDate}
                        getPostTitle={getPostTitle}
                        getPostSummary={getPostSummary}
                    />
                    ))}
                </div>

                <div className="news-page__pagination">
                    <button
                    type="button"
                    disabled={page === 1}
                    onClick={() => setPage((prev) => Math.max(1, prev - 1))}
                    >
                    {t('Prev', '이전', '前へ', '上一页')}
                    </button>

                    <div className="news-page__pagination-pages">
                    {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
                        <button
                        key={pageNumber}
                        type="button"
                        className={pageNumber === page ? 'is-active' : ''}
                        onClick={() => setPage(pageNumber)}
                        >
                        {pageNumber}
                        </button>
                    ))}
                    </div>

                    <button
                    type="button"
                    disabled={page === totalPages}
                    onClick={() => setPage((prev) => Math.min(totalPages, prev + 1))}
                    >
                    {t('Next', '다음', '次へ', '下一页')}
                    </button>
                </div>
                </>
            ) : (
                <div className="news-page__empty">
                <h3>{t('No posts found.', '검색 결과가 없습니다.', '記事が見つかりませんでした。', '未找到文章。')}</h3>
                <p>
                    {t(
                        'Try changing your search term or category filter.',
                        '검색어 또는 카테고리를 변경해 다시 확인해 주세요.',
                        '検索ワードやカテゴリーフィルターを変更してみてください。',
                        '尝试更改搜索词或类别过滤器。'
                    )}
                </p>
                </div>
            )}
            </div>
        </section>
        </div>
    );
    }

    type NewsCardProps = {
    post: CardNews;
    getCategoryLabel: (category: NewsCategory | 'all') => string;
    formatDate: (date: string) => string;
    getPostTitle: (post: CardNews) => string;
    getPostSummary: (post: CardNews) => string;
    };

    function NewsCard({ post, getCategoryLabel, formatDate, getPostTitle, getPostSummary }: NewsCardProps) {
    return (
        <Link to={`/news/${post.slug}`} className="news-page__card">
        <div className="news-page__card-image">
            <NewsImage src={post.thumbnail} alt={getPostTitle(post)} />
        </div>

        <div className="news-page__card-body">
            <div className="news-page__meta-row">
            <span className="news-page__category-badge">{getCategoryLabel(post.category)}</span>
            <span className="news-page__date">
                <CalendarDays size={14} />
                {formatDate(post.publishedAt)}
            </span>
            </div>

            <h3>{getPostTitle(post)}</h3>
            <p>{getPostSummary(post)}</p>

            <div className="news-page__tags">
            {(post.tags || []).map((tag) => (
                <span key={tag}>{tag}</span>
            ))}
            </div>
        </div>
        </Link>
    );
    }