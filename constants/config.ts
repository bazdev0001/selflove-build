export const Collections = {
  USERS: 'users',
  BOOKINGS: 'bookings',
  NOTIFICATIONS: 'notifications',
} as const;

export const AppConfig = {
  appName: 'selfLove Build',
  appSlug: 'selflove-build',
  bundleId: 'com.apex.selflovebuild',
  version: '1.0.0',
  sentryDsn: process.env.SENTRY_DSN ?? '',
} as const;

export const YOGA_TEMPLATES = [
  { id: '01', name: 'Editorial Luxury', style: 'editorial-luxury', color: '#2C1F36' },
  { id: '02', name: 'Organic Botanical', style: 'organic-botanical', color: '#4A6741' },
  { id: '03', name: 'Dark Elegant Gold', style: 'dark-elegant-gold', color: '#1A1A1A' },
  { id: '04', name: 'Swiss Typographic', style: 'swiss-typographic', color: '#1C1C1E' },
  { id: '05', name: 'Soft Glass Pastel', style: 'soft-glass-pastel', color: '#B0A4CC' },
  { id: '06', name: 'Zen Japanese', style: 'zen-japanese', color: '#2D2416' },
  { id: '07', name: 'Retro Warm 70s', style: 'retro-warm-70s', color: '#8B4A15' },
  { id: '08', name: 'Cinematic Full-Bleed', style: 'cinematic-fullbleed', color: '#0D0D0D' },
  { id: '09', name: 'Neo Brutalist', style: 'neo-brutalist', color: '#1A1A1A' },
  { id: '10', name: 'Colorblock Contemporary', style: 'colorblock-contemporary', color: '#FF6B35' },
] as const;

export const YOGA_CLASSES = [
  { id: '1', name: 'Sunrise Vinyasa', teacher: 'Emma Rose', time: '7:00 AM', duration: '60 min', price: '£18' },
  { id: '2', name: 'Yin & Restore', teacher: 'Sofia Lumen', time: '10:00 AM', duration: '75 min', price: '£20' },
  { id: '3', name: 'Power Flow', teacher: 'Jade Serene', time: '12:30 PM', duration: '60 min', price: '£18' },
  { id: '4', name: 'Meditation & Breathwork', teacher: 'Isla Moon', time: '5:00 PM', duration: '45 min', price: '£15' },
  { id: '5', name: 'Evening Candlelight', teacher: 'Emma Rose', time: '7:30 PM', duration: '90 min', price: '£22' },
] as const;
