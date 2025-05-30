import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = "Varun Vaidhiya - Engineer & Researcher | ML, Software & Embedded Systems Portfolio",
  description = "Varun Vaidhiya is an Engineer and Researcher specializing in Machine Learning, Software Development, and Embedded Systems. Explore projects in Robotics, AI/ML, Software Applications, and Open-Source contributions.",
  keywords = "Varun Vaidhiya, Engineer, Researcher, Machine Learning, ML, AI, Software Developer, Embedded Systems, Robotics, Portfolio, Python, Java, C, Publications, Open Source",
  canonicalUrl = "https://varunvaidhiya.netlify.app",
  ogImage = "https://varunvaidhiya.netlify.app/profile-image.jpg",
  section = "home"
}) => {
  const fullTitle = section === "home" ? title : `${section.charAt(0).toUpperCase() + section.slice(1)} - ${title}`;
  const sectionUrl = section === "home" ? canonicalUrl : `${canonicalUrl}/#${section}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={sectionUrl} />
      
      {/* Open Graph tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={sectionUrl} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter tags */}
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Breadcrumb structured data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": canonicalUrl
            },
            ...(section !== "home" ? [{
              "@type": "ListItem",
              "position": 2,
              "name": section.charAt(0).toUpperCase() + section.slice(1),
              "item": sectionUrl
            }] : [])
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEO; 