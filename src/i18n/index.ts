import { en } from './en';
import { es } from './es';

export type Locale = 'en' | 'es';

const translations: Record<Locale, typeof en> = { en, es };

export function t(locale: Locale) {
  return translations[locale] ?? translations.en;
}
