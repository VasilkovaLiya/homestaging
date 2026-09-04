import type { Site, Socials } from './types';

export const SITE: Site = {
  COMPANY_NAME: 'Хоумстейджинг',
  LEGAL_NAME: '',
  TITLE: 'Хоумстейджинг — подготовка квартиры к сдаче и продаже',
  DESCRIPTION:
    'Помогаю сделать интерьер привлекательным, функциональным и готовым к сдаче или продаже — без лишних затрат.',

  CANONICAL_URL: import.meta.env.DEV
    ? 'http://localhost:4321'
    : 'https://vasilkovaliya.github.io/homestaging/',

  LOCALE: 'ru',

  TELEPHONE: '',
  EMAIL: '',
  ADDRESS: '',

  OG_IMAGE: '/og-image.webp',

  TWITTER: {
    CREATOR: '',
    CARD: 'summary_large_image',
  },
};

export const SOCIALS: Socials = [
  {
    NAME: 'Instagram',
    ICON: 'instagram',
    LABEL: `${SITE.COMPANY_NAME} on Instagram`,
    HREF: 'https://www.instagram.com/',
  },
  {
    NAME: 'Facebook',
    ICON: 'facebook',
    LABEL: `${SITE.COMPANY_NAME} on Facebook`,
    HREF: 'https://www.facebook.com/',
  },
  {
    NAME: 'Pinterest',
    ICON: 'pinterest',
    LABEL: `${SITE.COMPANY_NAME} on Pinterest`,
    HREF: 'https://www.pinterest.com/',
  },
  {
    NAME: 'Youtube',
    ICON: 'youtube',
    LABEL: `${SITE.COMPANY_NAME} on YouTube`,
    HREF: 'https://www.youtube.com/',
  },
];
