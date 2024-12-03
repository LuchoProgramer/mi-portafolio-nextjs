/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://luchodev.netlify.app/',
    generateRobotsTxt: true, // (opcional)
    // ...otras opciones...
}