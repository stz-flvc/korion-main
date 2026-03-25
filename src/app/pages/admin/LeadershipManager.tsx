import { useState, useEffect } from 'react';
import { 
  Plus, 
  Trash2, 
  Edit2, 
  Save, 
  X, 
  Users,
  Twitter,
  Linkedin,
  Instagram,
  ArrowUp,
  ArrowDown,
  Mail
} from 'lucide-react';
import { mockAdminService } from '../../services/mockAdminService';
import type { LeadershipMember } from '../../types/admin';
import './LeadershipManager.css';

export function LeadershipManager() {
  const [members, setMembers] = useState<LeadershipMember[]>([]);
  const [editingMember, setEditingMember] = useState<LeadershipMember | null>(null);
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    loadMembers();
  }, []);

  const loadMembers = () => {
    setMembers(mockAdminService.getLeadership());
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingMember) {
      mockAdminService.saveLeadershipMember(editingMember);
      setEditingMember(null);
      setIsAdding(false);
      loadMembers();
    }
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Delete this leadership member?')) {
      mockAdminService.deleteLeadershipMember(id);
      loadMembers();
    }
  };

  const handleMove = (index: number, direction: 'up' | 'down') => {
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= members.length) return;

    const reorderedIds = members.map(m => m.id);
    [reorderedIds[index], reorderedIds[targetIndex]] = [reorderedIds[targetIndex], reorderedIds[index]];
    
    mockAdminService.reorderLeadership(reorderedIds);
    loadMembers();
  };

  const startEdit = (m: LeadershipMember) => {
    setEditingMember({ ...m });
    setIsAdding(false);
  };

  const startAdd = () => {
    const newMember: LeadershipMember = {
      id: `l-${Date.now()}`,
      name: '',
      nameKo: '',
      nameJa: '',
      nameZh: '',
      role: '',
      roleKo: '',
      roleJa: '',
      roleZh: '',
      summary: '',
      summaryKo: '',
      summaryJa: '',
      summaryZh: '',
      bio: '',
      bioKo: '',
      bioJa: '',
      bioZh: '',
      highlights: [],
      highlightsKo: [],
      highlightsJa: [],
      highlightsZh: [],
      image: null,
      socialLinks: {},
      position: members.length,
      isVisible: true
    };
    setEditingMember(newMember);
    setIsAdding(true);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && editingMember) {
      if (file.size > 1024 * 1024) {
        alert('Image too large. Max 1MB.');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditingMember({ ...editingMember, image: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="leadership-manager">
      <div className="leadership-manager__header">
        <div className="leadership-manager__header-text">
          <h2>Leadership Management</h2>
          <p>Configure the core team members for the leadership section.</p>
        </div>
        <button className="admin-btn admin-btn--primary" onClick={startAdd}>
          <Plus size={18} />
          Add Member
        </button>
      </div>

      {editingMember && (
        <div className="admin-modal-overlay">
          <div className="admin-modal">
            <div className="admin-modal__header">
              <h2>{isAdding ? 'Add Leadership Member' : 'Edit Member'}</h2>
              <button className="admin-modal__close" onClick={() => setEditingMember(null)}>
                <X size={20} />
              </button>
            </div>
            
            <form onSubmit={handleSave} className="admin-form">
              <div className="admin-form__section">
                <h3>Basic Information</h3>
                <div className="admin-form__flex-row">
                  <div className="admin-form__field">
                    <label>Name (English)</label>
                    <input 
                      type="text" 
                      value={editingMember.name} 
                      onChange={e => setEditingMember({...editingMember, name: e.target.value})}
                      required
                    />
                  </div>
                  <div className="admin-form__field">
                    <label>Name (Korean)</label>
                    <input 
                      type="text" 
                      value={editingMember.nameKo} 
                      onChange={e => setEditingMember({...editingMember, nameKo: e.target.value})}
                      required
                    />
                  </div>
                </div>
                <div className="admin-form__flex-row">
                  <div className="admin-form__field">
                    <label>Name (Japanese)</label>
                    <input 
                      type="text" 
                      value={editingMember.nameJa || ''} 
                      onChange={e => setEditingMember({...editingMember, nameJa: e.target.value})}
                    />
                  </div>
                  <div className="admin-form__field">
                    <label>Name (Chinese)</label>
                    <input 
                      type="text" 
                      value={editingMember.nameZh || ''} 
                      onChange={e => setEditingMember({...editingMember, nameZh: e.target.value})}
                    />
                  </div>
                </div>

                <div className="admin-form__flex-row">
                  <div className="admin-form__field">
                    <label>Role (English)</label>
                    <input 
                      type="text" 
                      value={editingMember.role} 
                      onChange={e => setEditingMember({...editingMember, role: e.target.value})}
                      required
                    />
                  </div>
                  <div className="admin-form__field">
                    <label>Role (Korean)</label>
                    <input 
                      type="text" 
                      value={editingMember.roleKo} 
                      onChange={e => setEditingMember({...editingMember, roleKo: e.target.value})}
                      required
                    />
                  </div>
                </div>
                <div className="admin-form__flex-row">
                  <div className="admin-form__field">
                    <label>Role (Japanese)</label>
                    <input 
                      type="text" 
                      value={editingMember.roleJa || ''} 
                      onChange={e => setEditingMember({...editingMember, roleJa: e.target.value})}
                    />
                  </div>
                  <div className="admin-form__field">
                    <label>Role (Chinese)</label>
                    <input 
                      type="text" 
                      value={editingMember.roleZh || ''} 
                      onChange={e => setEditingMember({...editingMember, roleZh: e.target.value})}
                    />
                  </div>
                </div>

                <div className="admin-form__field">
                  <label>Email Address (Public)</label>
                  <div className="admin-input-with-icon">
                    <Mail size={16} />
                    <input 
                      type="email" 
                      value={(editingMember.socialLinks || {}).email || ''} 
                      onChange={e => setEditingMember({
                        ...editingMember, 
                        socialLinks: { ...(editingMember.socialLinks || {}), email: e.target.value }
                      })}
                      placeholder="e.g. name@korion.io"
                    />
                  </div>
                </div>
              </div>

              <div className="admin-form__section">
                <h3>Detailed Profile</h3>
                <div className="admin-form__flex-row">
                  <div className="admin-form__field">
                    <label>Summary (English)</label>
                    <input 
                      type="text" 
                      value={editingMember.summary || ''} 
                      onChange={e => setEditingMember({...editingMember, summary: e.target.value})}
                      placeholder="Short summary..."
                    />
                  </div>
                  <div className="admin-form__field">
                    <label>Summary (Korean)</label>
                    <input 
                      type="text" 
                      value={editingMember.summaryKo || ''} 
                      onChange={e => setEditingMember({...editingMember, summaryKo: e.target.value})}
                      placeholder="짧은 소개..."
                    />
                  </div>
                </div>
                <div className="admin-form__flex-row">
                  <div className="admin-form__field">
                    <label>Summary (Japanese)</label>
                    <input 
                      type="text" 
                      value={editingMember.summaryJa || ''} 
                      onChange={e => setEditingMember({...editingMember, summaryJa: e.target.value})}
                      placeholder="短い要約..."
                    />
                  </div>
                  <div className="admin-form__field">
                    <label>Summary (Chinese)</label>
                    <input 
                      type="text" 
                      value={editingMember.summaryZh || ''} 
                      onChange={e => setEditingMember({...editingMember, summaryZh: e.target.value})}
                      placeholder="简短摘要..."
                    />
                  </div>
                </div>

                <div className="admin-form__flex-row">
                  <div className="admin-form__field">
                    <label>Bio (English)</label>
                    <textarea 
                      value={editingMember.bio || ''} 
                      onChange={e => setEditingMember({...editingMember, bio: e.target.value})}
                      placeholder="Full biography..."
                      rows={3}
                    />
                  </div>
                  <div className="admin-form__field">
                    <label>Bio (Korean)</label>
                    <textarea 
                      value={editingMember.bioKo || ''} 
                      onChange={e => setEditingMember({...editingMember, bioKo: e.target.value})}
                      placeholder="상세 경력 사항..."
                      rows={3}
                    />
                  </div>
                </div>
                <div className="admin-form__flex-row">
                  <div className="admin-form__field">
                    <label>Bio (Japanese)</label>
                    <textarea 
                      value={editingMember.bioJa || ''} 
                      onChange={e => setEditingMember({...editingMember, bioJa: e.target.value})}
                      placeholder="フルバイオグラフィー..."
                      rows={3}
                    />
                  </div>
                  <div className="admin-form__field">
                    <label>Bio (Chinese)</label>
                    <textarea 
                      value={editingMember.bioZh || ''} 
                      onChange={e => setEditingMember({...editingMember, bioZh: e.target.value})}
                      placeholder="完整传记..."
                      rows={3}
                    />
                  </div>
                </div>

                <div className="admin-form__flex-row">
                  <div className="admin-form__field">
                    <label>Highlights (English, comma separated)</label>
                    <input 
                      type="text" 
                      value={(editingMember.highlights || []).join(', ')} 
                      onChange={e => setEditingMember({
                        ...editingMember, 
                        highlights: e.target.value.split(',').map(s => s.trim()).filter(Boolean)
                      })}
                      placeholder="Innovation, R&D, Strategy"
                    />
                  </div>
                  <div className="admin-form__field">
                    <label>Highlights (Korean, comma separated)</label>
                    <input 
                      type="text" 
                      value={(editingMember.highlightsKo || []).join(', ')} 
                      onChange={e => setEditingMember({
                        ...editingMember, 
                        highlightsKo: e.target.value.split(',').map(s => s.trim()).filter(Boolean)
                      })}
                      placeholder="혁신, 연구개발, 전략"
                    />
                  </div>
                </div>
                <div className="admin-form__flex-row">
                  <div className="admin-form__field">
                    <label>Highlights (Japanese, comma separated)</label>
                    <input 
                      type="text" 
                      value={(editingMember.highlightsJa || []).join(', ')} 
                      onChange={e => setEditingMember({
                        ...editingMember, 
                        highlightsJa: e.target.value.split(',').map(s => s.trim()).filter(Boolean)
                      })}
                      placeholder="イノベーション, 研究開発, 戦略"
                    />
                  </div>
                  <div className="admin-form__field">
                    <label>Highlights (Chinese, comma separated)</label>
                    <input 
                      type="text" 
                      value={(editingMember.highlightsZh || []).join(', ')} 
                      onChange={e => setEditingMember({
                        ...editingMember, 
                        highlightsZh: e.target.value.split(',').map(s => s.trim()).filter(Boolean)
                      })}
                      placeholder="创新, 研发, 战略"
                    />
                  </div>
                </div>
              </div>

              <div className="admin-form__section">
                <h3>Media & Visibility</h3>
                <div className="admin-form__field">
                  <label>Profile Image</label>
                  <div className="admin-image-upload">
                    {editingMember.image && (
                      <div className="admin-image-preview">
                        <img src={editingMember.image} alt="Preview" />
                        <button type="button" onClick={() => setEditingMember({...editingMember, image: null})}>
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

                <div className="admin-checkbox-field">
                  <input 
                    type="checkbox" 
                    id="isVisible" 
                    checked={editingMember.isVisible} 
                    onChange={e => setEditingMember({...editingMember, isVisible: e.target.checked})}
                  />
                  <label htmlFor="isVisible">Visible in Team Section</label>
                </div>
              </div>

              <div className="admin-form__section">
                <h3>Social Presence</h3>
                <div className="admin-form__flex-row">
                  <div className="admin-form__field">
                    <label>Twitter/X URL</label>
                    <div className="admin-input-with-icon">
                      <Twitter size={16} />
                      <input 
                        type="text" 
                        value={(editingMember.socialLinks || {}).twitter || ''} 
                        onChange={e => setEditingMember({
                          ...editingMember, 
                          socialLinks: { ...(editingMember.socialLinks || {}), twitter: e.target.value }
                        })}
                        placeholder="https://x.com/username"
                      />
                    </div>
                  </div>
                  <div className="admin-form__field">
                    <label>LinkedIn URL</label>
                    <div className="admin-input-with-icon">
                      <Linkedin size={16} />
                      <input 
                        type="text" 
                        value={(editingMember.socialLinks || {}).linkedin || ''} 
                        onChange={e => setEditingMember({
                          ...editingMember, 
                          socialLinks: { ...(editingMember.socialLinks || {}), linkedin: e.target.value }
                        })}
                        placeholder="https://linkedin.com/in/username"
                      />
                    </div>
                  </div>
                  <div className="admin-form__field">
                    <label>Instagram URL</label>
                    <div className="admin-input-with-icon">
                      <Instagram size={16} />
                      <input 
                        type="text" 
                        value={(editingMember.socialLinks || {}).instagram || ''} 
                        onChange={e => setEditingMember({
                          ...editingMember, 
                          socialLinks: { ...(editingMember.socialLinks || {}), instagram: e.target.value }
                        })}
                        placeholder="https://instagram.com/username"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="admin-modal__footer">
                <button type="button" className="admin-btn admin-btn--ghost" onClick={() => setEditingMember(null)}>
                  Cancel
                </button>
                <button type="submit" className="admin-btn admin-btn--primary">
                  <Save size={18} />
                  {isAdding ? 'Add Member' : 'Save Changes'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="admin-table-container">
        <table className="admin-table">
          <thead>
            <tr>
              <th style={{ width: '80px' }}>Order</th>
              <th>Member</th>
              <th>Role</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {members.map((m, index) => (
              <tr key={m.id}>
                <td>
                  <div className="order-pill">
                    <button disabled={index === 0} onClick={() => handleMove(index, 'up')}><ArrowUp size={14}/></button>
                    <span>{index + 1}</span>
                    <button disabled={index === members.length - 1} onClick={() => handleMove(index, 'down')}><ArrowDown size={14}/></button>
                  </div>
                </td>
                <td>
                  <div className="member-cell">
                    <div className="member-cell__avatar">
                      {m.image ? (
                        <img src={m.image} alt="" />
                      ) : (
                        <div className="avatar-placeholder">{m.name[0]}</div>
                      )}
                    </div>
                    <div className="member-cell__info">
                      <div className="member-cell__name">{m.name}</div>
                      <div className="member-cell__role">{m.nameKo}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="member-cell__role">{m.role}</div>
                </td>
                <td>
                  <button 
                    className={`status-toggle ${m.isVisible ? 'is-visible' : ''}`}
                    onClick={() => {
                      const updated = { ...m, isVisible: !m.isVisible };
                      mockAdminService.saveLeadershipMember(updated);
                      loadMembers();
                    }}
                  >
                    <span className={`status-pill ${m.isVisible ? 'status-pill--visible' : 'status-pill--hidden'}`}>
                      {m.isVisible ? 'Visible' : 'Hidden'}
                    </span>
                  </button>
                </td>
                <td className="admin-table__actions">
                  <div className="action-btns">
                    <button className="action-btn" onClick={() => startEdit(m)}>
                      <Edit2 size={16} />
                    </button>
                    <button className="action-btn action-btn--delete" onClick={() => handleDelete(m.id)}>
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
