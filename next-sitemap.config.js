/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.APP_URL || 'https://eubiejay.dev', // Replace with your site's URL
  generateRobotsTxt: true, // generate robotext
  sitemapSize: 7000, 
  changefreq: 'daily',
  priority: 0.7, 
  // exclude: ['/admin/*'], // enable this in the future incase we want to exclude something
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: 'Googlebot', allow: '/' },
    ],
  },
};
