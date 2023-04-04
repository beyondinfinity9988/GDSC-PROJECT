import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

function App() {
  const slides = [
    {
      url: 'https://cdn.pixabay.com/photo/2012/10/10/15/57/children-60654__340.jpg',
    },
    {
      url: 'https://images.pexels.com/photos/5692195/pexels-photo-5692195.jpeg?auto=compress&cs=tinysrgb&w=600',
    } ,
    {
      url: 'https://images.pexels.com/photos/5083240/pexels-photo-5083240.jpeg?auto=compress&cs=tinysrgb&w=600',
    },

    {
      url:'https://cdn.pixabay.com/photo/2012/10/10/15/57/children-60654__340.jpg',
    },
    {
      url: 'https://cdn.pixabay.com/photo/2014/04/02/14/48/children-306602__340.jpg',
    },
    {
        url: 'https://cdn.pixabay.com/photo/2013/09/08/17/04/boy-180437__340.jpg'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='max-w-[500px] h-[800px] w-[100%] pt-0 m-auto py-1 px-4 relative group'>

    < h1 className='text-4xl font-mono text-black pt-0 text-center  pb-2 '>EVEN  CHILDREN DO NOT HAVE <span className='text-blue-500  pt-2 text-center '>  HOME , FOOD AND SECURITY </span>
     </h1>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
      >
      </div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[65%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[65%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;