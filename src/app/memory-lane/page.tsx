"use client"
import React, {useState} from 'react';
import { X, Download, MoreHorizontal, Share, ExternalLink } from 'lucide-react';

type ImageType = {
  id: number;
  src: string;
  title: string;
  description: string;
  category: string;
  height: number;
};

export default function PinterestGallery() {
  const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Animated', 'Christmas', 'Cutie!', 'Navratri', 'New Year', 'Onam'];

  // Pinterest-style images with varying heights
  const images: ImageType[] = [
    {
      id: 1,
      src: "/images/gallery/1.jpg",
      title: "Dandiya 2018(not sure)",
      description: "The OG pose!!! forever cherished in my heart",
      category: "Navratri",
      height: 300
    },
    {
      id: 12,
      src: "/images/gallery/12.png", 
      title: "Covid Time Cycling",
      description: "Going to madiwala lake, cycling back in the rain, and the car park! Some adventures indeed",
      category: "Animated",
      height: 400
    },
    {
      id: 3,
      src: "/images/gallery/3.jpg",
      title: "Kidddu", 
      description: "Savage simu tearing up all the books",
      category: "Cutie!",
      height: 350
    },
    {
      id: 4,
      src: "/images/gallery/4.jpg",
      title: "Covid Christmas",
      description: "Playing dress up;), look at all the beauties!",
      category: "Christmas", 
      height: 280
    },
    {
      id: 15,
      src: "/images/gallery/15.jpg",
      title: "Christmas Miracle",
      description: "The day of beautiful road crossings and ice cream of course!",
      category: "Christmas",
      height: 420
    },
    {
      id: 6,
      src: "/images/gallery/6.jpg",
      title: "Covid New year",
      description: "Coming down and partying hard in the dark!!",
      category: "New Year",
      height: 320
    },
    {
      id: 7,
      src: "/images/gallery/7.jpg",
      title: "Onam 2024",
      description: "OOOOF Pretty Women!!! One woman in particular is toh the prettiest!",
      category: "Onam",
      height: 380
    },
    {
      id: 8,
      src: "/images/gallery/8.jpg",
      title: "The tasty Birthday",
      description: "So cute yaaar! May the kid in you be alive alwaysss, be it 23 or 83!",
      category: "Cutie!",
      height: 250
    },
    {
      id: 2,
      src: "/images/gallery/2.png",
      title: "The Birthday Gurlll",
      description: "Forever a beautiful evershining princess!!",
      category: "Cutie!",
      height: 300
    },
    {
      id: 5,
      src: "/images/gallery/5.jpeg", 
      title: "Gujju Chokri",
      description: "WOOOOWW, suuu lage che!  Ekdum saras oof",
      category: "Cutie!",
      height: 400
    },
    {
      id: 9,
      src: "/images/gallery/9.png",
      title: "Hugggs", 
      description: "Our lift hugs to drunk walks, 'will you come down tomorrow' <3",
      category: "Animated",
      height: 350
    },
    {
      id: 10,
      src: "/images/gallery/10.jpg",
      title: "Standard Navratri Selfie",
      description: "2 beautiful women with Debayan, very rare sight indeed.",
      category: "Navratri", 
      height: 280
    },
    {
      id: 14,
      src: "/images/gallery/14.jpeg",
      title: "Past New Years",
      description: "All of us coincidentally wearing white. How we danced our asses off on the stage, do you remember, it almost broke. Times were simpler...",
      category: "New Year",
      height: 420
    },
    {
      id: 11,
      src: "/images/gallery/11.png",
      title: "The Dominos New Year",
      description: "My goood that yummy four cheese pizza! Unchi hai building!!",
      category: "Animated",
      height: 320
    },
    {
      id: 16,
      src: "/images/gallery/16.jpg",
      title: "Lioness with Lion",
      description: "Its a wonder we didnt fall off anywhere doing masti. But what an adventure! When are we going cycling againnn bolo! ",
      category: "Cutie!",
      height: 380
    },
    {
      id: 17,
      src: "/images/gallery/17.jpg",
      title: "New Year 2024",
      description: "Once again after dancing our asses off, we pose like pros!!",
      category: "New Year",
      height: 250
    },
    {
      id: 18,
      src: "/images/gallery/18.jpg",
      title: "Slaying since 2000",
      description: "There is nothing this naughty girl can't do!!! You love with alll your heart, one of the purest souls in this world!",
      category: "Cutie!",
      height: 300
    },
     {
      id: 13,
      src: "/images/gallery/13.png",
      title: "Simu The Sleeping Beauty",
      description: "The curly hair and the cute glasses description was all Gemini needed, it drew the image from my heart <3.",
      category: "Animated",
      height: 420
    },

  ];

  const filteredImages = selectedCategory === 'All' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  const handleDownload = (src: string, filename: string) => {
    const link = document.createElement("a");
    link.href = src;
    link.download = filename || "memory.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const openModal = (image: React.SetStateAction<ImageType | null>) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="pinterest-container">
      {/* Category Navigation */}
      <div className="category-nav">
        {categories.map(category => (
          <button
            key={category}
            className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Pinterest Masonry Grid */}
      <div className="pinterest-grid">
        {filteredImages.map((image, index) => (
          <div
            key={image.id}
            className="pin-card"
            style={{ height: `${image.height}px` }}
            onMouseEnter={() => setHoveredCard(image.id)}
            onMouseLeave={() => setHoveredCard(null)}
            onClick={() => openModal(image)}
          >
            <div className="pin-image">
              <img src={image.src} alt={image.title} />
              
              {/* Pinterest-style overlay */}
              {hoveredCard === image.id && (
                <div className="pin-overlay">
                  <div className="pin-overlay-top">
                    <button className="pin-more-btn">
                      <MoreHorizontal size={16} />
                    </button>
                    <button 
                      className="pin-save-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDownload(image.src, `${image.title}.jpg`);
                      }}
                    >
                      Save
                    </button>
                  </div>
                  <div className="pin-overlay-bottom">
                    <button className="pin-share-btn">
                      <Share size={16} />
                    </button>
                    <button className="pin-link-btn">
                      <ExternalLink size={16} />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="modal-backdrop" onClick={closeModal}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <X size={24} />
            </button>
            
            <div className="modal-grid">
              <div className="modal-image-section">
                <img src={selectedImage.src} alt={selectedImage.title} />
              </div>
              
              <div className="modal-details-section">
                <div className="modal-header">
                  <button className="modal-save-btn" onClick={() => handleDownload(selectedImage.src, `${selectedImage.title}.jpg`)}>
                    <Download size={18} />
                    Save
                  </button>
                  <button className="modal-more-btn">
                    <MoreHorizontal size={18} />
                  </button>
                </div>
                
                <div className="modal-content">
                  <h2 className="modal-title">{selectedImage.title}</h2>
                  <p className="modal-description">{selectedImage.description}</p>
                  <div className="modal-category-tag">{selectedImage.category}</div>
                </div>
                
                <div className="modal-footer">
                  <div className="modal-user">
                    <div className="user-avatar">S</div>
                    <span className="user-name">Simu&apos;s Gallery</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Decorative elements from your theme */}
      <div className="theme-shapes">
        <div className="left-shape" />
        <div className="right-shape" />
      </div>

      {/* Confetti animation */}
      <div className="confetti">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="confetti-piece"
            style={{
              left: `${(i * 30) % 100}%`,
              animationDelay: `${(i % 4) * 0.5}s`,
              backgroundColor: `hsl(${(i * 50) % 360} 65% 70%)`,
              transform: `rotate(${(i * 25) % 360}deg) scale(${0.4 + (i % 3) * 0.15})`,
            }}
          />
        ))}
      </div>

       

      <style>{`
      :root{
          --accent1: #fab0beff;
      }

      .top{
          position:absolute;
          top:20px;
          left:0;
          right:0;
          z-index:5;
          width:100%;
          max-width:1200px;
          display:flex;
          align-items:center;
          gap:16px;
          padding:20px;
          justify-content:flex-start;
        }
        .back{
          text-decoration:none;
          color:#fff;
          font-weight:700;
          padding:.45rem .7rem;
          border-radius:999px;
          background:rgba(0,0,0,0.4);
          box-shadow:0 10px 30px rgba(0,0,0,0.4);
        }
        h1{
          margin:0;
          color:var(--accent1);
          font-size:1.4rem;
          text-shadow: 0 2px 10px rgba(247, 242, 242, 0.96);
        }
        .pinterest-container {
          min-height: 100vh;
          background: 
            radial-gradient(circle at 15% 25%, rgba(255,230,235,0.3), transparent 15%),
            radial-gradient(circle at 85% 75%, rgba(255,245,240,0.4), transparent 15%),
            linear-gradient(180deg, #fffafc 0%, #fff2f6 100%);
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          position: relative;
          overflow-x: hidden;
          width:100%;
        }

        .category-nav {
          display: flex;
          gap: 8px;
          padding: 20px;
          justify-content: center;
          flex-wrap: wrap;
          position: relative;
          z-index: 10;
        }

        .category-btn {
          padding: 12px 16px;
          border: none;
          border-radius: 24px;
          background: rgba(255, 255, 255, 0.7);
          color: #333;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          backdrop-filter: blur(10px);
          font-size: 14px;
        }

        .category-btn:hover {
          background: rgba(255, 255, 255, 0.9);
          transform: translateY(-1px);
        }

        .category-btn.active {
          background: linear-gradient(135deg, #ff6fa3, #ffcf6e);
          color: white;
          font-weight: 600;
        }

        .pinterest-grid {
          column-count: 4;
          column-gap: 16px;
          padding: 0 20px 40px;
          max-width: 1600px;
          margin: 0 auto;
          position: relative;
          z-index: 5;
        }

        .pin-card {
          background: white;
          border-radius: 16px;
          margin-bottom: 16px;
          break-inside: avoid;
          cursor: pointer;
          overflow: hidden;
          position: relative;
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          box-shadow: 0 1px 3px rgba(0,0,0,0.12);
        }

        .pin-card:hover {
          transform: scale(1.02);
          box-shadow: 0 8px 25px rgba(0,0,0,0.15);
        }

        .pin-image {
          width: 100%;
          height: 100%;
          position: relative;
          overflow: hidden;
        }

        .pin-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          border-radius: 16px;
        }

        .pin-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.4);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 12px;
          border-radius: 16px;
          opacity: 0;
          transition: opacity 0.2s ease;
        }

        .pin-card:hover .pin-overlay {
          opacity: 1;
        }

        .pin-overlay-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }

        .pin-overlay-bottom {
          display: flex;
          justify-content: flex-end;
          gap: 8px;
          align-items: flex-end;
        }

        .pin-more-btn, .pin-share-btn, .pin-link-btn {
          width: 32px;
          height: 32px;
          border: none;
          border-radius: 50%;
          background: rgba(255,255,255,0.9);
          color: #333;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        .pin-more-btn:hover, .pin-share-btn:hover, .pin-link-btn:hover {
          background: white;
          transform: scale(1.1);
        }

        .pin-save-btn {
          background: #e60023;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 24px;
          font-weight: 600;
          cursor: pointer;
          font-size: 14px;
          transition: all 0.2s ease;
        }

        .pin-save-btn:hover {
          background: #c8001f;
          transform: scale(1.05);
        }

        .modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.75);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 20px;
        }

        .modal-container {
          background: white;
          border-radius: 24px;
          max-width: 1200px;
          width: 100%;
          max-height: 90vh;
          overflow: hidden;
          position: relative;
          animation: modalSlide 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        @keyframes modalSlide {
          from {
            opacity: 0;
            transform: scale(0.8) translateY(40px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .modal-close {
          position: absolute;
          top: 16px;
          right: 16px;
          width: 44px;
          height: 44px;
          border: none;
          border-radius: 50%;
          background: rgba(255,255,255,0.95);
          color: #333;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
          transition: all 0.2s ease;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }

        .modal-close:hover {
          background: white;
          transform: scale(1.05);
        }

        .modal-grid {
          display: grid;
          grid-template-columns: 1fr 400px;
          height: 80vh;
          max-height: 800px;
        }

        .modal-image-section {
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f7f7f7;
          overflow-y: auto;
          padding: 20px;
        }

        .modal-image-section img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          border-radius: 12px;
        }

        .modal-details-section {
          padding: 24px;
          display: flex;
          flex-direction: column;
          overflow-y: auto;
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
        }

        .modal-save-btn {
          background: #e60023;
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 24px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          transition: all 0.2s ease;
        }

        .modal-save-btn:hover {
          background: #c8001f;
          transform: translateY(-1px);
        }

        .modal-more-btn {
          width: 44px;
          height: 44px;
          border: none;
          border-radius: 50%;
          background: #f1f1f1;
          color: #333;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        .modal-more-btn:hover {
          background: #e1e1e1;
        }

        .modal-content {
          flex: 1;
          margin-bottom: 24px;
        }

        .modal-title {
          font-size: 24px;
          font-weight: 600;
          color: #333;
          margin: 0 0 16px 0;
          line-height: 1.3;
        }

        .modal-description {
          color: #666;
          line-height: 1.6;
          margin: 0 0 20px 0;
          font-size: 16px;
        }

        .modal-category-tag {
          background: rgba(255,210,220,0.4);
          color: #8b3b4b;
          padding: 6px 16px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 500;
          display: inline-block;
        }

        .modal-footer {
          border-top: 1px solid #f0f0f0;
          padding-top: 20px;
        }

        .modal-user {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .user-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: linear-gradient(135deg, #ff6fa3, #ffcf6e);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 600;
          font-size: 16px;
        }

        .user-name {
          font-weight: 600;
          color: #333;
        }

        .theme-shapes {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          z-index: 1;
        }

        .left-shape, .right-shape {
          position: absolute;
          width: 80px;
          height: 250px;
          border-radius: 20px;
          background: linear-gradient(135deg, rgba(255,255,255,0.4), rgba(255,210,220,0.2));
          filter: blur(2px);
          opacity: 0.6;
        }

        .left-shape {
          left: -20px;
          top: 25%;
          transform: rotate(-8deg);
        }

        .right-shape {
          right: -20px;
          top: 55%;
          transform: rotate(8deg);
        }

        .confetti {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          z-index: 2;
        }

        .confetti-piece {
          position: absolute;
          top: -3%;
          width: 6px;
          height: 10px;
          border-radius: 2px;
          opacity: 0.6;
          animation: confettiFall 10s linear infinite;
        }

        @keyframes confettiFall {
          0% {
            transform: translateY(-10vh) rotate(0deg);
            opacity: 0.8;
          }
          100% {
            transform: translateY(110vh) rotate(360deg);
            opacity: 0.2;
          }
        }

        @media (max-width: 1400px) {
          .pinterest-grid {
            column-count: 3;
          }
        }

        @media (max-width: 1000px) {
          .pinterest-grid {
            column-count: 2;
          }
          .modal-grid {
            grid-template-columns: 1fr;
            grid-template-rows: 1fr auto;
          }
          .modal-details-section {
            max-height: 300px;
          }
        }

        @media (max-width: 600px) {
          .pinterest-grid {
            column-count: 1;
            padding: 0 16px 40px;
          }
          .category-nav {
            padding: 16px;
          }
          .theme-shapes {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}