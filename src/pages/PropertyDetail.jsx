import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { propertyData } from '../data/propertyData';
import SEO from '../components/seo/SEO';
import StandardLayout from '../components/property-layouts/StandardLayout';
import LuxuryLayout from '../components/property-layouts/LuxuryLayout';
import FamilyLayout from '../components/property-layouts/FamilyLayout';
import PenthouseLayout from '../components/property-layouts/PenthouseLayout';

const PropertyDetail = () => {
  const { id } = useParams();
  
  const property = propertyData.find(p => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!property) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-luxury-ivory text-luxury-emerald">
        <SEO title="Không tìm thấy phòng" />
        <h1 className="text-4xl font-serif mb-4">Không tìm thấy phòng</h1>
        <Link to="/products" className="underline hover:text-luxury-burgundy">Quay lại danh sách phòng</Link>
      </div>
    );
  }

  const renderLayout = () => {
    switch (property.layoutType) {
      case 'luxury':
        return <LuxuryLayout property={property} />;
      case 'family':
        return <FamilyLayout property={property} />;
      case 'penthouse':
        return <PenthouseLayout property={property} />;
      case 'standard':
      default:
        return <StandardLayout property={property} />;
    }
  };

  return (
    <>
      <SEO 
        title={`${property.name} - ${property.hotel}`} 
        description={property.description}
        image={property.images[0]}
      />
      <div className="bg-luxury-ivory min-h-screen">
        <div className="pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
          <Link to="/products" className="inline-flex items-center text-luxury-emerald/70 hover:text-luxury-burgundy transition-colors font-medium">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Trở về danh sách phòng
          </Link>
        </div>
        
        <div className="-mt-14">
          {renderLayout()}
        </div>
      </div>
    </>
  );
};

export default PropertyDetail;
