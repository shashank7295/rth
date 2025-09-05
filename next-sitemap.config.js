/** @type {import('next-sitemap').IConfig} */
module.exports = {
  // IMPORTANT: Set SITE_URL in your environment (e.g., .env) to your production domain
  // Example: SITE_URL=https://www.example.com
  siteUrl: process.env.SITE_URL || 'https://example.com',

  // Generate robots.txt alongside sitemaps
  generateRobotsTxt: true,

  // Optionally limit the number of URLs per sitemap file
  sitemapSize: 7000,

  // If you plan to add a server-generated sitemap later, keep this as reference
  // exclude: ['/server-sitemap.xml'],
  // robotsTxtOptions: {
  //   policies: [{ userAgent: '*', allow: '/' }],
  //   additionalSitemaps: [
  //     `${process.env.SITE_URL || 'https://example.com'}/server-sitemap.xml`,
  //   ],
  // },
};
