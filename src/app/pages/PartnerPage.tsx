import { useState } from 'react';
import { motion } from 'motion/react';
import {
    ArrowRight,
    CheckCircle2,
    Mail,
    Loader2,
    } from 'lucide-react';
    import { useLanguage } from '../contexts/LanguageContext';
    import './PartnerPage.css';

    export function PartnerPage() {
    const { t } = useLanguage();

    const [formData, setFormData] = useState({
        type: '',
        name: '',
        company: '',
        email: '',
        website: '',
        interest: '',
        intro: '',
        details: '',
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (status === 'loading') return;
        
        setStatus('loading');
        
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        
        setStatus('success');
    };

    const processSteps = [
        {
        step: '01',
        title: t('Application', '신청 접수', '申請受付', '申请受理'),
        description: t(
            'Submit your basic information and your collaboration or application details. You can choose whether it is a team application or a partnership request.',
            '기본 정보와 협업 또는 지원 내용을 제출합니다. 팀 지원인지 파트너 제휴인지 선택하여 접수할 수 있습니다.',
            '基本情報と、連携または応募の内容を提出します。チームへの応募か、パートナー提携かを選択して受け付けることができます。',
            '提交基本信息以及合作或申请内容。您可以选择是团队申请还是合作伙伴加盟。'
        ),
        },
        {
        step: '02',
        title: t('Review', '내부 검토', '内部審査', '内部审核'),
        description: t(
            'The proposal, suitability, and alignment with operational direction will be reviewed based on internal criteria.',
            '제안 내용, 적합성, 운영 방향성과의 부합 여부를 내부 기준에 따라 검토합니다.',
            '提案内容、適格性、および運営の方向性との整合性を内部基準に基づいて審査します。',
            '根据内部标准审核提案内容、适用性以及是否符合运营方向。'
        ),
        },
        {
        step: '03',
        title: t('Connection', '후속 연결', 'フォローアップ', '后续对接'),
        description: t(
            'If needed after review, follow-up discussions will proceed via email or another communication channel.',
            '검토 후 필요한 경우 이메일 또는 별도 채널을 통해 후속 논의가 진행됩니다.',
            '審査後、必要に応じてメールまたは別の通信チャネルを通じてフォローアップの協議が行われます。',
            '审核后，如有必要，将通过电子邮件或其他渠道进行后续洽谈。'
        ),
        },
    ];

    return (
        <div className="partner-page">
        <section id="partner-process" className="partner-section partner-section--process">
            <div className="partner-page__container">
            <div className="partner-section__heading">
                <span className="partner-section__label">{t('PROCESS', 'PROCESS', 'プロセス', '流程')}</span>
                <h2>{t('Process', '진행 절차', '進行手順', '进行程序')}</h2>
                <p>
                    {t(
                        'After submission, the request will be reviewed and followed by the connection process below.',
                        '신청 후 아래 절차에 따라 검토 및 연결이 진행됩니다.',
                        '申請後、以下の手順に従って審査および連携が進められます。',
                        '申请后，将按照以下程序进行审核和对接。'
                    )}
                </p>
            </div>

            <div className="partner-process">
                {processSteps.map((item, index) => (
                <motion.div
                    key={item.step}
                    className="partner-process-card"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.55, delay: index * 0.08 }}
                >
                    <div className="partner-process-card__step">{item.step}</div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                </motion.div>
                ))}
            </div>
            </div>
        </section>

        <section id="partner-application" className="partner-section partner-section--application">
            <div className="partner-page__container">
            <div className="partner-application">
                <motion.div
                className="partner-application__intro"
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                >
                <span className="partner-section__label">{t('APPLICATION', 'APPLICATION', '応募', '申请')}</span>
                <h2>{t('Application Form', '신청 양식', '申請フォーム', '申请表单')}</h2>
                <p>
                    {t(
                        'Please complete and submit the form below. In production, this form can be connected to email delivery or a backend API.',
                        '아래 양식을 작성하여 제출해주세요. 실제 운영 시에는 이메일 전송 또는 백엔드 API와 연결하여 사용할 수 있습니다.',
                        '以下のフォームにご記入の上、送信してください。実際の運用時には、メール送信やバックエンドAPIと連携して使用できます。',
                        '请填写并提交以下表单。在实际运营中，可以连接电子邮件发送或后端 API 使用。'
                    )}
                </p>

                <div className="partner-application__contact-card">
                    <div className="partner-application__contact-icon">
                    <Mail size={18} />
                    </div>
                    <div>
                    <strong>{t('Direct Contact', '직접 문의', '直接お問い合わせ', '直接咨询')}</strong>
                    <p>partnership@korion.io</p>
                    </div>
                </div>

                <div className="partner-application__notice">
                    <div className="partner-application__notice-item">
                    <CheckCircle2 size={16} />
                    <span>
                        {t(
                            'Both team applications and partnership proposals are accepted',
                            '팀 지원 / 파트너 제휴 모두 접수 가능',
                            'チームへの応募・パートナー提携の両方を受け付けています',
                            '团队申请/合作伙伴加盟均可受理'
                        )}
                    </span>
                    </div>
                    <div className="partner-application__notice-item">
                    <CheckCircle2 size={16} />
                    <span>
                        {t(
                            'Responses are provided sequentially after review',
                            '내용 검토 후 순차 회신',
                            '内容を確認後、順次返信いたします',
                            '审核内容后依次回复'
                        )}
                    </span>
                    </div>
                </div>
                </motion.div>

                <motion.form
                className="partner-form"
                initial={{ opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.06 }}
                onSubmit={handleSubmit}
                >
                {status === 'success' ? (
                  <div className="partner-form__success">
                    <CheckCircle2 size={56} className="partner-form__success-icon" />
                    <h3>{t('Application Submitted Successfully', '신청서 제출이 완료되었습니다', '申請書が正常に送信されました', '申请书已成功提交')}</h3>
                    <p>{t('We will review your application and get back to you shortly.', '검토 후 기재해주신 연락처로 회신드리겠습니다.', '内容を確認の上、ご連絡いたします。', '我们将在审核后通过您提供的联系方式回复给您。')}</p>
                    <button 
                      type="button" 
                      className="partner-btn partner-btn--ghost"
                      onClick={() => {
                        setFormData({ type: '', name: '', company: '', email: '', website: '', interest: '', intro: '', details: '' });
                        setStatus('idle');
                      }}
                      style={{ marginTop: '24px' }}
                    >
                      {t('Submit Another Application', '새로운 신청서 작성', '新しい申請書を作成', '提交新申请')}
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="partner-form__grid">
                        <label className="partner-form__field">
                        <span>{t('Application Type', '신청 유형', '申請タイプ', '申请类型')}</span>
                        <select name="type" value={formData.type} onChange={handleChange} required>
                            <option value="" disabled>
                            {t('Please select', '선택해주세요', '選択してください', '请选择')}
                            </option>
                            <option value="team">{t('Team Application', '팀 지원', 'チームへの応募', '团队申请')}</option>
                            <option value="partner">{t('Partnership', '파트너 제휴', 'パートナー提携', '合作伙伴加盟')}</option>
                            <option value="business">{t('Business Proposal', '비즈니스 제안', 'ビジネス提案', '业务提议')}</option>
                            <option value="integration">{t('Technical Integration', '기술 연동 제안', '技術連携の提案', '技术对接建议')}</option>
                        </select>
                        </label>

                        <label className="partner-form__field">
                        <span>{t('Name / Contact Person', '이름 / 담당자명', 'お名前 / 担当者名', '姓名 / 联系人姓名')}</span>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder={t('Enter your name or contact person', '이름 또는 담당자명을 입력하세요', 'お名前または担当者名を入力してください', '请输入姓名或联系人姓名')} />
                        </label>

                        <label className="partner-form__field">
                        <span>{t('Company / Team Name', '회사명 / 팀명', '会社名 / チーム名', '公司名称 / 团队名称')}</span>
                        <input type="text" name="company" value={formData.company} onChange={handleChange} required placeholder={t('Enter your company or team name', '회사명 또는 팀명을 입력하세요', '会社名またはチーム名を入力してください', '请输入公司名称或团队名称')} />
                        </label>

                        <label className="partner-form__field">
                        <span>{t('Email', '이메일', 'メールアドレス', '电子邮件')}</span>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="contact@example.com" />
                        </label>

                        <label className="partner-form__field">
                        <span>{t('Website / Link', '홈페이지 / 링크', '웹사이트 / 링크', '官网 / 链接')}</span>
                        <input type="text" name="website" value={formData.website} onChange={handleChange} placeholder={t('Website or introduction link', '웹사이트 또는 소개 링크', 'ウェブサイトまたは紹介リンク', '网站或介绍链接')} />
                        </label>

                        <label className="partner-form__field">
                        <span>{t('Area of Interest', '관심 분야', '関心分野', '感兴趣的领域')}</span>
                        <input type="text" name="interest" value={formData.interest} onChange={handleChange} placeholder={t('e.g. Payment, Wallet, Marketing, Technical Partnership', '예: 결제, 지갑, 마케팅, 기술제휴', '例：決済、ウォレット、マーケティング、技術提携', '例如：支付、钱包、营销、技术合作')} />
                        </label>

                        <label className="partner-form__field partner-form__field--full">
                        <span>{t('Introduction', '소개', '紹介', '介绍')}</span>
                        <textarea
                            rows={4}
                            name="intro"
                            value={formData.intro}
                            onChange={handleChange}
                            required
                            placeholder={t('Please introduce your team or project', '팀 또는 프로젝트 소개를 입력해주세요', 'チームまたはプロジェクトの紹介を入力してください', '请输入团队或项目介绍')}
                        />
                        </label>

                        <label className="partner-form__field partner-form__field--full">
                        <span>{t('Proposal Details', '협업 제안 내용', '協業提案の内容', '协作提议内容')}</span>
                        <textarea
                            rows={6}
                            name="details"
                            value={formData.details}
                            onChange={handleChange}
                            required
                            placeholder={t('Please describe your desired collaboration method or proposal in detail', '희망하는 협업 방식 또는 지원 내용을 자세히 작성해주세요', 'ご希望の協業方法や提案の詳細を記入してください', '请详细填写您希望的协作方式或提议内容')}
                        />
                        </label>
                    </div>

                    <div className="partner-form__footer">
                        <p>
                            {t(
                                'After submission, responses will be provided sequentially following internal review.',
                                '제출 후 내부 검토를 거쳐 순차적으로 회신이 진행됩니다.',
                                '提出後、内部審査を経て順次返信いたします。',
                                '提交后，将经过内部审核依次进行回复。'
                            )}
                        </p>
                        <button type="submit" className="partner-btn partner-btn--primary" disabled={status === 'loading'}>
                        {status === 'loading' ? (
                          <>
                            {t('Submitting...', '제출 중...', '送信中...', '提交中...')}
                            <Loader2 size={18} className="animate-spin" />
                          </>
                        ) : (
                          <>
                            {t('Submit Application', '신청서 제출', '申請書を提出', '提交申请')}
                            <ArrowRight size={18} />
                          </>
                        )}
                        </button>
                    </div>
                  </>
                )}
                </motion.form>
            </div>
            </div>
        </section>
        </div>
    );
    }