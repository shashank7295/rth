<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:html="http://www.w3.org/TR/REC-html40" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>

  <xsl:template match="/">
    <html>
      <head>
        <meta charset="utf-8" />
        <title>Sitemap</title>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif; margin: 2rem; color: #111; }
          h1 { font-size: 1.5rem; margin-bottom: 0.5rem; }
          .muted { color: #666; font-size: 0.9rem; margin-bottom: 1.25rem; }
          table { border-collapse: collapse; width: 100%; }
          th, td { border-bottom: 1px solid #eee; text-align: left; padding: 8px 6px; font-size: 0.95rem; }
          th { background: #fafafa; font-weight: 600; }
          a { color: #0d6efd; text-decoration: none; }
          a:hover { text-decoration: underline; }
          .mono { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; }
        </style>
      </head>
      <body>
        <xsl:choose>
          <!-- Index sitemap -->
          <xsl:when test="sitemap:sitemapindex">
            <h1>Sitemap Index</h1>
            <div class="muted">This index file lists all sitemap files.</div>
            <table>
              <thead>
                <tr>
                  <th>Location</th>
                  <th>Last Modified</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="sitemap:sitemapindex/sitemap:sitemap">
                  <tr>
                    <td class="mono"><a href="{sitemap:loc}"><xsl:value-of select="sitemap:loc" /></a></td>
                    <td><xsl:value-of select="sitemap:lastmod" /></td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </xsl:when>

          <!-- URL set sitemap -->
          <xsl:otherwise>
            <h1>Sitemap</h1>
            <div class="muted">A list of URLs included in this sitemap.</div>
            <table>
              <thead>
                <tr>
                  <th>URL</th>
                  <th>Changefreq</th>
                  <th>Priority</th>
                  <th>Last Modified</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="sitemap:urlset/sitemap:url">
                  <tr>
                    <td class="mono"><a href="{sitemap:loc}"><xsl:value-of select="sitemap:loc" /></a></td>
                    <td><xsl:value-of select="sitemap:changefreq" /></td>
                    <td><xsl:value-of select="sitemap:priority" /></td>
                    <td><xsl:value-of select="sitemap:lastmod" /></td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </xsl:otherwise>
        </xsl:choose>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
