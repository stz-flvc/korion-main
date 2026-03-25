import { useState, useEffect } from 'react';
import { 
  Plus, 
  Trash2, 
  Edit2, 
  ArrowUp, 
  ArrowDown, 
  Save, 
  X, 
  Image as ImageIcon,
  Eye,
  EyeOff,
  Mail,
  Instagram,
  Twitter,
  Linkedin
} from 'lucide-react';
import { mockAdminService } from '../../services/mockAdminService';
import type { Partner, PartnerLevel } from '../../types/admin';
import './PartnerManager.css';

export function PartnerManager() {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [editingPartner, setEditingPartner] = useState<Partner | null>(null);
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    loadPartners();
  }, []);

  const loadPartners = () => {
    setPartners(mockAdminService.getPartners());
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingPartner) {
      mockAdminService.savePartner(editingPartner);
      setEditingPartner(null);
      setIsAdding(false);
      loadPartners();
    }
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this partner?')) {
      mockAdminService.deletePartner(id);
      loadPartners();
    }
  };

  const handleMove = (index: number, direction: 'up' | 'down') => {
    const newPartners = [...partners];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= newPartners.length) return;

    const reorderedIds = partners.map(p => p.id);
    [reorderedIds[index], reorderedIds[targetIndex]] = [reorderedIds[targetIndex], reorderedIds[index]];
    
    mockAdminService.reorderPartners(reorderedIds);
    loadPartners();
  };

  const startEdit = (partner: Partner) => {
    setEditingPartner({ ...partner });
    setIsAdding(false);
  };

  const startAdd = () => {
    const newPartner: Partner = {
      id: `partner-${Date.now()}`,
      name: '',
      nameKo: '',
      nameJa: '',
      nameZh: '',
      country: '',
      countryKo: '',
      countryJa: '',
      countryZh: '',
      email: '',
      profileImage: null,
      level: 'None',
      description: '',
      descriptionKo: '',
      descriptionJa: '',
      descriptionZh: '',
      socialLinks: {},
      position: partners.length,
      isVisible: true,
    };
    setEditingPartner(newPartner);
    setIsAdding(true);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && editingPartner) {
      if (file.size > 1024 * 1024) { // 1MB limit for localStorage
        alert('Image too large. Please select an image under 1MB.');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditingPartner({ ...editingPartner, profileImage: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const levels: PartnerLevel[] = ['Gold', 'Blue', 'Green', 'None', 'Partner'];

  return (
    <div className="partner-manager">
      <div className="partner-manager__header">
        <p>Manage partner cards displayed on the Team page.</p>
        <button className="admin-btn admin-btn--primary" onClick={startAdd}>
          <Plus size={18} />
          Add New Partner
        </button>
      </div>

      {editingPartner && (
        <div className="admin-modal-overlay">
          <div className="admin-modal">
            <div className="admin-modal__header">
              <h2>{isAdding ? 'Add Partner' : 'Edit Partner'}</h2>
              <button className="admin-modal__close" onClick={() => setEditingPartner(null)}>
                <X size={20} />
              </button>
            </div>
            
            <form onSubmit={handleSave} className="admin-form">
              <div className="admin-form__flex-row">
                <div className="admin-form__field">
                  <label>Name (English)</label>
                  <input 
                    type="text" 
                    value={editingPartner.name} 
                    onChange={e => setEditingPartner({...editingPartner, name: e.target.value})}
                    required
                  />
                </div>
                <div className="admin-form__field">
                  <label>Name (Korean)</label>
                  <input 
                    type="text" 
                    value={editingPartner.nameKo} 
                    onChange={e => setEditingPartner({...editingPartner, nameKo: e.target.value})}
                    required
                  />
                </div>
              </div>
              <div className="admin-form__flex-row">
                <div className="admin-form__field">
                  <label>Name (Japanese)</label>
                  <input 
                    type="text" 
                    value={editingPartner.nameJa || ''} 
                    onChange={e => setEditingPartner({...editingPartner, nameJa: e.target.value})}
                  />
                </div>
                <div className="admin-form__field">
                  <label>Name (Chinese)</label>
                  <input 
                    type="text" 
                    value={editingPartner.nameZh || ''} 
                    onChange={e => setEditingPartner({...editingPartner, nameZh: e.target.value})}
                  />
                </div>
              </div>

              <div className="admin-form__flex-row">
                <div className="admin-form__field">
                  <label>Country/Label (English)</label>
                  <input 
                    type="text" 
                    value={editingPartner.country} 
                    onChange={e => setEditingPartner({...editingPartner, country: e.target.value})}
                    required
                  />
                </div>
                <div className="admin-form__field">
                  <label>Country/Label (Korean)</label>
                  <input 
                    type="text" 
                    value={editingPartner.countryKo} 
                    onChange={e => setEditingPartner({...editingPartner, countryKo: e.target.value})}
                    required
                  />
                </div>
              </div>
              <div className="admin-form__flex-row">
                <div className="admin-form__field">
                  <label>Country/Label (Japanese)</label>
                  <input 
                    type="text" 
                    value={editingPartner.countryJa || ''} 
                    onChange={e => setEditingPartner({...editingPartner, countryJa: e.target.value})}
                  />
                </div>
                <div className="admin-form__field">
                  <label>Country/Label (Chinese)</label>
                  <input 
                    type="text" 
                    value={editingPartner.countryZh || ''} 
                    onChange={e => setEditingPartner({...editingPartner, countryZh: e.target.value})}
                  />
                </div>
              </div>

              <div className="admin-form__field">
                <label>Email Address (Public)</label>
                <div className="admin-input-with-icon">
                  <Mail size={16} />
                  <input 
                    type="email" 
                    value={editingPartner.email} 
                    onChange={e => setEditingPartner({...editingPartner, email: e.target.value})}
                    placeholder="e.g. contact@partner.com"
                  />
                </div>
              </div>

              <div className="admin-form__field">
                <label>Profile Image</label>
                <div className="admin-image-upload">
                  {editingPartner.profileImage && (
                    <div className="admin-image-preview">
                      <img src={editingPartner.profileImage} alt="Preview" />
                      <button type="button" onClick={() => setEditingPartner({...editingPartner, profileImage: null})}>
                        Remove
                      </button>
                    </div>
                  )}
                  <input 
                    type="file" 
                    accept="image/*" 
                    onChange={handleImageChange}
                  />
                  <p className="admin-help-text">JPG, PNG or GIF. Max 1MB (Base64 encoded).</p>
                </div>
              </div>

              <div className="admin-form__field">
                <label>Partner Level (Badge)</label>
                <select 
                  value={editingPartner.level}
                  onChange={e => setEditingPartner({...editingPartner, level: e.target.value as PartnerLevel})}
                >
                  {levels.map(lv => (
                    <option key={lv} value={lv}>{lv}</option>
                  ))}
                </select>
              </div>

              <div className="admin-form__field">
                <div className="admin-label-row">
                  <label>Description (English)</label>
                  <span className={`admin-char-count ${(editingPartner.description || '').length > 200 ? 'is-warning' : ''}`}>
                    {(editingPartner.description || '').length}/250
                  </span>
                </div>
                <textarea 
                  value={editingPartner.description || ''} 
                  onChange={e => setEditingPartner({...editingPartner, description: e.target.value.slice(0, 250)})}
                  rows={3}
                  required
                />
              </div>

              <div className="admin-form__field">
                <div className="admin-label-row">
                  <label>Description (Korean)</label>
                  <span className={`admin-char-count ${(editingPartner.descriptionKo || '').length > 200 ? 'is-warning' : ''}`}>
                    {(editingPartner.descriptionKo || '').length}/250
                  </span>
                </div>
                <textarea 
                  value={editingPartner.descriptionKo || ''} 
                  onChange={e => setEditingPartner({...editingPartner, descriptionKo: e.target.value.slice(0, 250)})}
                  rows={3}
                  required
                />
              </div>

              <div className="admin-form__field">
                <div className="admin-label-row">
                  <label>Description (Japanese)</label>
                  <span className={`admin-char-count ${(editingPartner.descriptionJa || '').length > 200 ? 'is-warning' : ''}`}>
                    {(editingPartner.descriptionJa || '').length}/250
                  </span>
                </div>
                <textarea 
                  value={editingPartner.descriptionJa || ''} 
                  onChange={e => setEditingPartner({...editingPartner, descriptionJa: e.target.value.slice(0, 250)})}
                  rows={3}
                />
              </div>

              <div className="admin-form__field">
                <div className="admin-label-row">
                  <label>Description (Chinese)</label>
                  <span className={`admin-char-count ${(editingPartner.descriptionZh || '').length > 200 ? 'is-warning' : ''}`}>
                    {(editingPartner.descriptionZh || '').length}/250
                  </span>
                </div>
                <textarea 
                  value={editingPartner.descriptionZh || ''} 
                  onChange={e => setEditingPartner({...editingPartner, descriptionZh: e.target.value.slice(0, 250)})}
                  rows={3}
                />
              </div>

              <div className="admin-form__section">
                <h3>Social Links</h3>
                <div className="admin-form__flex-row">
                  <div className="admin-form__field">
                    <label>X (Twitter) URL</label>
                    <div className="admin-input-with-icon">
                      <Twitter size={16} />
                      <input 
                        type="text" 
                        value={editingPartner.socialLinks.twitter || ''} 
                        onChange={e => setEditingPartner({
                          ...editingPartner, 
                          socialLinks: { ...editingPartner.socialLinks, twitter: e.target.value }
                        })}
                      />
                    </div>
                  </div>
                  <div className="admin-form__field">
                    <label>LinkedIn URL</label>
                    <div className="admin-input-with-icon">
                      <Linkedin size={16} />
                      <input 
                        type="text" 
                        value={editingPartner.socialLinks.linkedin || ''} 
                        onChange={e => setEditingPartner({
                          ...editingPartner, 
                          socialLinks: { ...editingPartner.socialLinks, linkedin: e.target.value }
                        })}
                      />
                    </div>
                  </div>
                  <div className="admin-form__field">
                    <label>Instagram URL</label>
                    <div className="admin-input-with-icon">
                      <Instagram size={16} />
                      <input 
                        type="text" 
                        value={editingPartner.socialLinks.instagram || ''} 
                        onChange={e => setEditingPartner({
                          ...editingPartner, 
                          socialLinks: { ...editingPartner.socialLinks, instagram: e.target.value }
                        })}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="admin-modal__footer">
                <button type="button" className="admin-btn admin-btn--ghost" onClick={() => setEditingPartner(null)}>
                  Cancel
                </button>
                <button type="submit" className="admin-btn admin-btn--primary">
                  <Save size={18} />
                  {isAdding ? 'Create Partner' : 'Save Changes'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="partner-list">
        <div className="partner-list__table-header">
          <div className="col-order">Order</div>
          <div className="col-info">Partner Info</div>
          <div className="col-level">Level</div>
          <div className="col-status">Status</div>
          <div className="col-actions">Actions</div>
        </div>
        
        {partners.map((partner, index) => (
          <div key={partner.id} className="partner-list-item">
            <div className="col-order">
              <div className="order-controls">
                <button 
                  disabled={index === 0} 
                  onClick={() => handleMove(index, 'up')}
                  className="order-btn"
                >
                  <ArrowUp size={14} />
                </button>
                <span>{index + 1}</span>
                <button 
                  disabled={index === partners.length - 1} 
                  onClick={() => handleMove(index, 'down')}
                  className="order-btn"
                >
                  <ArrowDown size={14} />
                </button>
              </div>
            </div>

            <div className="col-info">
              <div className="partner-info-cell">
                <div className="partner-info-cell__avatar">
                  {partner.profileImage ? (
                    <img src={partner.profileImage} alt="" className="admin-avatar-img" />
                  ) : (
                    <div className="avatar-placeholder">{partner.name[0]}</div>
                  )}
                </div>
                <div className="partner-info-cell__text">
                  <strong>{partner.name}</strong>
                  <span>{partner.country}</span>
                </div>
              </div>
            </div>

            <div className="col-level">
              <span className={`badge-pill badge-pill--${partner.level.toLowerCase()}`}>
                {partner.level}
              </span>
            </div>

            <div className="col-status">
              <button 
                className={`status-toggle ${partner.isVisible ? 'is-visible' : ''}`}
                onClick={() => {
                  const updated = { ...partner, isVisible: !partner.isVisible };
                  mockAdminService.savePartner(updated);
                  loadPartners();
                }}
              >
                {partner.isVisible ? <Eye size={16} /> : <EyeOff size={16} />}
                {partner.isVisible ? 'Visible' : 'Hidden'}
              </button>
            </div>

            <div className="col-actions">
              <div className="action-btns">
                <button className="action-btn" onClick={() => startEdit(partner)}>
                  <Edit2 size={16} />
                </button>
                <button className="action-btn action-btn--delete" onClick={() => handleDelete(partner.id)}>
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
