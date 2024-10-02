import React, { useState } from 'react';

// Modal component
const Modal = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 p-24">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-600 text-2xl">
          &times;
        </button>
        
        {/* Image positioned at the upper boundary */}
        <div className="flex justify-center mb-4">
          <img src={content.image} alt={content.title} className="w-20 h-20 object-contain" />
        </div>
        
        <h3 className="text-2xl font-bold text-gray-800 mb-4">{content.title}</h3>
        <p className="text-gray-600 mb-4">{content.description}</p>

        {/* "Read More" Arrow */}
        <a
          href="#"
          className="text-green-500 flex items-center gap-2 font-semibold hover:underline">
          Read More
          <span className="text-green-500">&rarr;</span>
        </a>
      </div>
    </div>
  );
};

const LatestService = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', description: '', image: '' });

  const openModal = (title, description, image) => {
    setModalContent({ title, description, image });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <section className="py-12 px-28">
      {/* Main container */}
      <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
        
        {/* Left section: Text content */}
        <div className="lg:w-1/2">
          <h3 className="text-green-500 font-semibold text-lg mb-2">Latest Service</h3>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Building a Strong Foundation<br/> for Success
          </h2>
          <p className="text-gray-600 mb-8">
            Lorem ipsum dolor sit amet consectetur adipiscing elit platea pharetra,<br/> nostra mattis hendrerit proin mollis pretium facilisi in, ligula volutpat.
          </p>
          <a
            href="#"
            className="inline-block bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition">
            Read More &rarr;
          </a>
        </div>

        {/* Right section: Cards */}
        <div className="lg:w-1/2 bg-orange-100 p-6 rounded-lg relative">
          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* First card */}
            <div
              onClick={() => openModal('Learning School', 'Lorem ipsum dolor sit amet consectetur adipiscing elit platea pharetra.', 'https://via.placeholder.com/80')}
              className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md cursor-pointer transform hover:scale-105 transition-transform duration-300 hover:bg-green-50"
            >
              <div className="bg-green-50 p-4 rounded-full mb-4">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtHJyXCDWfHi5JpN2n_4Dm5V9rxusCBpr_Kw&s" alt="Learning School" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Learning School</h3>
              <p className="text-gray-600 mt-2">
                Lorem ipsum dolor sit amet consectetur adipiscing elit platea pharetra.
              </p>
            </div>

            {/* Second card */}
            <div
              onClick={() => openModal('Learning in the School', 'Lorem ipsum dolor sit amet a the a conse adipiscing.', 'https://via.placeholder.com/80')}
              className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md cursor-pointer transform hover:scale-105 transition-transform duration-300 hover:bg-green-50"
            >
              <div className="bg-green-50 p-4 rounded-full mb-4">
                <img src="data:image/jpeg;base64,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" alt="Learning in the School" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Learning in the School</h3>
              <p className="text-gray-600 mt-2">
                Lorem ipsum dolor sit amet a the a conse adipiscing.
              </p>
            </div>

            {/* Third card */}
            <div
              onClick={() => openModal('Stars Preschool', 'Lorem ipsum dolor sit amet consectetur adipiscing elit platea pharetra.', 'https://via.placeholder.com/80')}
              className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md cursor-pointer transform hover:scale-105 transition-transform duration-300 hover:bg-green-50"
            >
              <div className="bg-green-50 p-4 rounded-full mb-4">
                <img src="data:image/jpeg;base64,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" alt="Stars Preschool" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Stars Preschool</h3>
              <p className="text-gray-600 mt-2">
                Lorem ipsum dolor sit amet consectetur adipiscing elit platea pharetra.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Modal Component */}
      <Modal isOpen={isModalOpen} onClose={closeModal} content={modalContent} />
    </section>
  );
};

export default LatestService;
