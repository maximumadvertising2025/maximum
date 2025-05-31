
import React from 'react';
import Hero from './components/Hero';
import PortfolioGallery from './components/PortfolioGallery';
import Footer from './components/Footer';

const App: React.FC = () => {
  const mainImageUrl = "https://res.cloudinary.com/duzlathfu/image/upload/v1747910898/buddha_purnima__fbeveg.jpg";
  const portfolioImages = [
    { id: '1', src: "https://res.cloudinary.com/duzlathfu/image/upload/v1747911786/bloom_and_leaf_dzfp3k.jpg", alt: "Bloom and Leaf Design" },
    { id: '2', src: "https://res.cloudinary.com/duzlathfu/image/upload/v1747983599/3admission_ohl3zk.jpg", alt: "Admission Brochure Design" },
    { id: '3', src: "https://res.cloudinary.com/duzlathfu/image/upload/v1747983600/85_oxford_study_in_oxford_aeqdme.jpg", alt: "Study Material Design" },
    { id: '4', src: "https://res.cloudinary.com/duzlathfu/image/upload/v1747984037/38_study_in_uk_rlwjop.jpg", alt: "Study in UK Campaign" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-900 text-slate-100">
      <Hero
        mainImageUrl={mainImageUrl}
        title="Creative Digital Design"
        subtitle="Visualizing Ideas, Crafting Experiences"
        ctaText="View My Work"
        ctaLink="#portfolio"
      />
      <PortfolioGallery images={portfolioImages} />
      <Footer designerName="Your Name" /> {/* Replace "Your Name" */}
    </div>
  );
};

export default App;