import { useState, useEffect } from 'react';
import { 
  Plus, 
  Trash2, 
  Edit2, 
  Save, 
  X, 
  Newspaper, 
  Calendar,
  ArrowUp,
  ArrowDown,
  Pin,
  Sparkles,
  Eye,
  EyeOff
} from 'lucide-react';
import { mockAdminService } from '../../services/mockAdminService';
import type { CardNews, NewsCategory } from '../../types/admin';
import './NewsManager.css';

export function NewsManager() {
  const [news, setNews] = useState<CardNews[]>([]);
  const [editingNews, setEditingNews] = useState<CardNews | null>(null);
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    loadNews();
  }, []);

  const loadNews = () => {
    setNews(mockAdminService.getNews());
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingNews) {
      mockAdminService.saveNews(editingNews);
      setEditingNews(null);
      setIsAdding(false);
      loadNews();
    }
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this news item?')) {
      mockAdminService.deleteNews(id);
      loadNews();
    }
  };

  const handleMove = (index: number, direction: 'up' | 'down') => {
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= news.length) return;

    const reorderedIds = news.map(n => n.id);
    [reorderedIds[index], reorderedIds[targetIndex]] = [reorderedIds[targetIndex], reorderedIds[index]];
    
    mockAdminService.reorderNews(reorderedIds);
    loadNews();
  };

  const startEdit = (item: CardNews) => {
    setEditingNews({ ...item });
    setIsAdding(false);
  };

  const startAdd = () => {
    const newItem: CardNews = {
      id: `news-${Date.now()}`,
      slug: '',
      category: 'notice',
      title: '',
      titleKo: '',
      summary: '',
      summaryKo: '',
      content: [],
      contentKo: [],
      thumbnail: null,
      publishedAt: new Date().toISOString().split('T')[0],
      isFeatured: false,
      isPinned: false,
      isVisible: true,
      position: news.length,
      tags: [],
    };
    setEditingNews(newItem);
    setIsAdding(true);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && editingNews) {
      if (file.size > 1024 * 1024) {
        alert('Image too large. Max 1MB.');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditingNews({ ...editingNews, thumbnail: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const addParagraph = (lang: 'en' | 'ko') => {
    if (!editingNews) return;
    if (lang === 'en') {
      setEditingNews({ ...editingNews, content: [...editingNews.content, ''] });
    } else {
      setEditingNews({ ...editingNews, contentKo: [...editingNews.contentKo, ''] });
    }
  };

  const updateParagraph = (lang: 'en' | 'ko', index: number, value: string) => {
    if (!editingNews) return;
    if (lang === 'en') {
      const newContent = [...editingNews.content];
      newContent[index] = value;
      setEditingNews({ ...editingNews, content: newContent });
    } else {
      const newContentKo = [...editingNews.contentKo];
      newContentKo[index] = value;
      setEditingNews({ ...editingNews, contentKo: newContentKo });
    }
  };

  const removeParagraph = (lang: 'en' | 'ko', index: number) => {
    if (!editingNews) return;
    if (lang === 'en') {
      setEditingNews({ ...editingNews, content: editingNews.content.filter((_, i) => i !== index) });
    } else {
      setEditingNews({ ...editingNews, contentKo: editingNews.contentKo.filter((_, i) => i !== index) });
    }
  };

  return (
    <div className="news-manager">
      <div className="news-manager__header">
        <p>Manage card news, announcements, and updates.</p>
        <button className="admin-btn admin-btn--primary" onClick={startAdd}>
          <Plus size={18} />
          Create News
        </button>
      </div>

      {editingNews && (
        <div className="admin-modal-overlay">
          <div className="admin-modal">
            <div className="admin-modal__header">
              <h2>{isAdding ? 'Create News' : 'Edit News'}</h2>
              <button className="admin-modal__close" onClick={() => setEditingNews(null)}>
                <X size={20} />
              </button>
            </div>
            
            <form onSubmit={handleSave} className="admin-form">
              <div className="admin-form__field">
                <label>Category</label>
                <select 
                  value={editingNews.category}
                  onChange={e => setEditingNews({...editingNews, category: e.target.value as NewsCategory})}
                >
                  <option value="notice">Notice</option>
                  <option value="update">Update</option>
                  <option value="event">Event</option>
                  <option value="media">Media</option>
                </select>
              </div>

              <div className="admin-form__flex-row">
                <div className="admin-form__field">
                  <label>Title (English)</label>
                  <input 
                    type="text" 
                    value={editingNews.title} 
                    onChange={e => setEditingNews({...editingNews, title: e.target.value})}
                    required
                  />
                </div>
                <div className="admin-form__field">
                  <label>Title (Korean)</label>
                  <input 
                    type="text" 
                    value={editingNews.titleKo} 
                    onChange={e => setEditingNews({...editingNews, titleKo: e.target.value})}
                    required
                  />
                </div>
              </div>

              <div className="admin-form__flex-row">
                <div className="admin-form__field">
                  <label>Slug (URL Path)</label>
                  <input 
                    type="text" 
                    value={editingNews.slug} 
                    onChange={e => setEditingNews({...editingNews, slug: e.target.value})}
                    placeholder="e.g. major-update-2026"
                    required
                  />
                </div>
                <div className="admin-form__field">
                  <label>Publish Date</label>
                  <input 
                    type="date" 
                    value={editingNews.publishedAt} 
                    onChange={e => setEditingNews({...editingNews, publishedAt: e.target.value})}
                    required
                  />
                </div>
              </div>

              <div className="admin-form__field">
                <label>Thumbnail Image</label>
                <div className="admin-image-upload">
                  {editingNews.thumbnail && (
                    <div className="admin-image-preview">
                      <img src={editingNews.thumbnail} alt="Preview" />
                      <button type="button" onClick={() => setEditingNews({...editingNews, thumbnail: null})}>
                        Remove
                      </button>
                    </div>
                  )}
                  <input 
                    type="file" 
                    accept="image/*" 
                    onChange={handleImageChange}
                  />
                </div>
              </div>

              <div className="admin-form__field">
                <label>Summary (English)</label>
                <textarea 
                  value={editingNews.summary} 
                  onChange={e => setEditingNews({...editingNews, summary: e.target.value})}
                  rows={2}
                  required
                />
              </div>

              <div className="admin-form__field">
                <label>Summary (Korean)</label>
                <textarea 
                  value={editingNews.summaryKo} 
                  onChange={e => setEditingNews({...editingNews, summaryKo: e.target.value})}
                  rows={2}
                  required
                />
              </div>

              <div className="admin-form__section">
                <div className="admin-section-header">
                  <h3>Full Content (English Paragraphs)</h3>
                  <button type="button" className="admin-btn-small" onClick={() => addParagraph('en')}>
                    + Add Paragraph
                  </button>
                </div>
                {editingNews.content.map((p, i) => (
                  <div key={`en-${i}`} className="admin-paragraph-edit">
                    <textarea 
                      value={p} 
                      onChange={e => updateParagraph('en', i, e.target.value)}
                      rows={3}
                    />
                    <button type="button" onClick={() => removeParagraph('en', i)}><Trash2 size={14} /></button>
                  </div>
                ))}
              </div>

              <div className="admin-form__section">
                <div className="admin-section-header">
                  <h3>Full Content (Korean Paragraphs)</h3>
                  <button type="button" className="admin-btn-small" onClick={() => addParagraph('ko')}>
                    + Add Paragraph
                  </button>
                </div>
                {editingNews.contentKo.map((p, i) => (
                  <div key={`ko-${i}`} className="admin-paragraph-edit">
                    <textarea 
                      value={p} 
                      onChange={e => updateParagraph('ko', i, e.target.value)}
                      rows={3}
                    />
                    <button type="button" onClick={() => removeParagraph('ko', i)}><Trash2 size={14} /></button>
                  </div>
                ))}
              </div>

              <div className="admin-form__flex-row">
                <div className="admin-checkbox-field">
                  <input 
                    type="checkbox" 
                    id="isFeatured" 
                    checked={editingNews.isFeatured} 
                    onChange={e => setEditingNews({...editingNews, isFeatured: e.target.checked})}
                  />
                  <label htmlFor="isFeatured">Featured (Top Section)</label>
                </div>
                <div className="admin-checkbox-field">
                  <input 
                    type="checkbox" 
                    id="isPinned" 
                    checked={editingNews.isPinned} 
                    onChange={e => setEditingNews({...editingNews, isPinned: e.target.checked})}
                  />
                  <label htmlFor="isPinned">Pinned (Notice List)</label>
                </div>
              </div>

              <div className="admin-modal__footer">
                <button type="button" className="admin-btn admin-btn--ghost" onClick={() => setEditingNews(null)}>
                  Cancel
                </button>
                <button type="submit" className="admin-btn admin-btn--primary">
                  <Save size={18} />
                  {isAdding ? 'Post News' : 'Save Changes'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="news-list">
        {news.length === 0 ? (
          <div className="news-list__empty">
            <Newspaper size={48} />
            <p>No news items found. Start by creating one!</p>
          </div>
        ) : (
          <div className="news-grid">
            {news.map((item, index) => (
              <div key={item.id} className="news-card">
                <div className="news-card__image">
                  {item.thumbnail ? (
                    <img src={item.thumbnail} alt="" />
                  ) : (
                    <div className="avatar-placeholder">{item.title[0]}</div>
                  )}
                  <span className="news-card__badge">{item.category}</span>
                </div>
                
                <div className="news-card__content">
                  <div className="order-controls" style={{ marginBottom: '1rem' }}>
                    <button disabled={index === 0} onClick={() => handleMove(index, 'up')} className="order-btn"><ArrowUp size={14}/></button>
                    <span>{index + 1}</span>
                    <button disabled={index === news.length - 1} onClick={() => handleMove(index, 'down')} className="order-btn"><ArrowDown size={14}/></button>
                  </div>
                  <h3 className="news-card__title">{item.title}</h3>
                  <p className="news-card__summary">{item.summary}</p>
                  
                  <div className="news-card__meta">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <Calendar size={12} />
                      <span>{item.publishedAt}</span>
                    </div>
                    <div className="action-btns">
                       <button 
                        className={`status-toggle ${item.isVisible ? 'is-visible' : ''}`}
                        onClick={() => {
                          const updated = { ...item, isVisible: !item.isVisible };
                          mockAdminService.saveNews(updated);
                          loadNews();
                        }}
                      >
                        {item.isVisible ? <Eye size={12} /> : <EyeOff size={12} />}
                        {item.isVisible ? 'Visible' : 'Hidden'}
                      </button>
                      <button className="action-btn" onClick={() => startEdit(item)}><Edit2 size={16} /></button>
                      <button className="action-btn action-btn--delete" onClick={() => handleDelete(item.id)}><Trash2 size={16} /></button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
