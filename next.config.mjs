/** @type {import('next').NextConfig} */
const nextConfig = {
  /**
   * Dev: путь с кириллицей + webpack HMR часто дают «Cannot find module ./NNN.js».
   * Polling + полное отключение webpack cache в dev режет скорость пересборки,
   * но сильно снижает рассинхрон чанков.
   *
   * Важно: `next dev --turbo` не вызывает этот webpack-хук — Turbopack игнорирует
   * эти настройки и на путях с кириллицей чаще ломает HMR/падает. Скрипт
   * `npm run dev:3001` поэтому без --turbo; быстрый вариант — `dev:3001:turbo`.
   */
  webpack: (config, { dev }) => {
    if (dev) {
      config.cache = false;
      config.watchOptions = {
        ...(config.watchOptions ?? {}),
        poll: 800,
        aggregateTimeout: 600,
      };
    }
    return config;
  },
};

export default nextConfig;
