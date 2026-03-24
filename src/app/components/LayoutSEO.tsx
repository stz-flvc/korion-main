import { useLocation } from 'react-router';
import { SEO } from './SEO';
import { useLanguage } from '../contexts/LanguageContext';
import { getSeoForPath } from '../seo/routeSeo';

export function LayoutSEO() {
  const location = useLocation();
  const { language } = useLanguage();
  const seo = getSeoForPath(location.pathname, language);

  return <SEO {...seo} />;
}
