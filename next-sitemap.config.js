/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://luchodev.netlify.app',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  outDir: './public',
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  
  // Configuraciones de robots.txt
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/cms/',
          '/api/',
          '/_next/',
          '/.next/',
          '/*_buildManifest.js',
          '/*_ssgManifest.js',
          '/*.json$'
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        crawlDelay: 1,
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        crawlDelay: 1,
      }
    ],
    additionalSitemaps: [
      'https://luchodev.netlify.app/sitemap.xml',
    ],
  },
  
  // URLs adicionales
  additionalPaths: async (config) => [
    await config.transform(config, '/#about'),
    await config.transform(config, '/#pukadigital'), 
    await config.transform(config, '/#technologies'),
    await config.transform(config, '/#projects'),
    await config.transform(config, '/#contact'),
  ],
  
  // Transformaciones para optimización SEO
  transform: async (config, path) => {
    // Configuración específica por página
    const customPriorities = {
      '/': 1.0,
      '/blog': 0.8,
      '/#pukadigital': 0.95,
      '/#projects': 0.9,
      '/#about': 0.9,
      '/#technologies': 0.85,
      '/#contact': 0.8,
    };

    const customChangefreq = {
      '/': 'weekly',
      '/blog': 'weekly', 
      '/#pukadigital': 'weekly',
      '/#projects': 'weekly',
      '/#about': 'monthly',
      '/#technologies': 'monthly',
      '/#contact': 'monthly',
    };

    return {
      loc: path,
      changefreq: customChangefreq[path] || config.changefreq,
      priority: customPriorities[path] || config.priority,
      lastmod: new Date().toISOString(),
      
      // Alternativas de idioma
      alternateRefs: [
        {
          href: `https://luchodev.netlify.app${path}`,
          hreflang: 'es',
        },
        {
          href: `https://luchodev.netlify.app/en${path}`,
          hreflang: 'en',
        },
      ],
    };
  },
  
  // Exclusiones
  exclude: [
    '/cms',
    '/cms/*',
    '/api/*',
    '/_next/*',
    '/.next/*',
    '/404',
    '/500'
  ],
};