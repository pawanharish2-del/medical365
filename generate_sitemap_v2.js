const fs = require('fs');
const path = require('path');

const dirPath = __dirname;
const htmlFiles = fs.readdirSync(dirPath).filter(f => f.endsWith('.html') && f !== 'seo_template.html');

const baseUrl = "https://medical365.in";
const currentDate = "2026-04-03T08:06:10+00:00"; // User's requested date format

/**
 * Priority logic based on user's examples:
 * 1.00 for /
 * 0.80 for core pages and many SEO pages
 * 0.64 for some SEO pages
 * 0.51 for book-demo variations
 */

const getPriority = (filePath) => {
    if (filePath === 'index.html' || filePath === '') return "1.00";
    if (['clinics.html', 'hospitals.html', 'about.html', 'contact.html', 'emr.html', 'blogs.html', 'privacy.html', 'terms.html', 'book-demo.html'].includes(filePath)) return "0.80";
    if (filePath.length > 30) return "0.64"; // Long SEO names
    return "0.80"; 
};

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

// Add root
xml += `<url>
<loc>${baseUrl}/</loc>
<lastmod>${currentDate}</lastmod>
<priority>1.00</priority>
</url>\n`;

// Add index (even though it redirects to / usually)
xml += `<url>
<loc>${baseUrl}/index</loc>
<lastmod>${currentDate}</lastmod>
<priority>0.80</priority>
</url>\n`;

// Set for deduplication
const added = new Set(['index.html']);

htmlFiles.forEach(file => {
    if (added.has(file)) return;
    added.add(file);
    
    // Format loc: strip .html extension
    const cleanName = file.replace('.html', '');
    const priority = getPriority(file);

    xml += `<url>
<loc>${baseUrl}/${cleanName}</loc>
<lastmod>${currentDate}</lastmod>
<priority>${priority}</priority>
</url>\n`;
});

// Add those book-demo variations if they are important (user had them)
const bookDemoLocations = [
    'Malviya%20Nagar,%20Jaipur', 'Jagatpura,%20Jaipur', 'Tonk%20Road,%20Jaipur', 'Jhotwara,%20Jaipur'
];

bookDemoLocations.forEach(loc => {
    xml += `<url>
<loc>${baseUrl}/book-demo?location=${loc}</loc>
<lastmod>${currentDate}</lastmod>
<priority>0.51</priority>
</url>\n`;
});

xml += `</urlset>`;

fs.writeFileSync('sitemap.xml', xml);
console.log(`Generated sitemap.xml with ${htmlFiles.length + bookDemoLocations.length} URLs.`);
