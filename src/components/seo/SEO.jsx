import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, type = 'website', image, url }) => {
  const siteName = '20 Hotel & Apartment';
  const defaultTitle = '20 Hotel & Apartment - Trải nghiệm nghỉ dưỡng đẳng cấp';
  const defaultDescription = 'Khu nghỉ dưỡng và căn hộ cao cấp mang lại trải nghiệm thư giãn tuyệt vời, không gian tinh tế và đẳng cấp quốc tế.';
  const defaultImage = 'https://images.unsplash.com/photo-1542314831-c6a4d14b83cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';

  const finalTitle = title ? `${title} | ${siteName}` : defaultTitle;
  const finalDescription = description || defaultDescription;
  const finalImage = image || defaultImage;

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{finalTitle}</title>
      <meta name='description' content={finalDescription} />

      {/* Open Graph tags (Facebook, LinkedIn, etc.) */}
      <meta property='og:title' content={finalTitle} />
      <meta property='og:description' content={finalDescription} />
      <meta property='og:type' content={type} />
      {url && <meta property='og:url' content={url} />}
      <meta property='og:image' content={finalImage} />
      <meta property='og:site_name' content={siteName} />

      {/* Twitter tags */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={finalTitle} />
      <meta name='twitter:description' content={finalDescription} />
      <meta name='twitter:image' content={finalImage} />
    </Helmet>
  );
};

export default SEO;
