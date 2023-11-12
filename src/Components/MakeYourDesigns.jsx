import { useState } from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import Footer from './Footer';
import domtoimage from 'dom-to-image';

const MakeYourDesigns = ({ quote }) => {
  const [tshirtColor, setTshirtColor] = useState('#ffffff');
  const [textColor, setTextColor] = useState('#071b1b');
  const [fontSize, setFontSize] = useState(20);

  const handleTshirtColorChange = (e) => {
    setTshirtColor(e.target.value);
  };

  const handleTextColorChange = (e) => {
    setTextColor(e.target.value);
  };

  const handleFontSizeChange = (e) => {
    setFontSize(parseInt(e.target.value));
  };

  const handleDownloadClick = () => {
    const designElement = document.getElementById('tshirt-design');

    domtoimage.toPng(designElement)
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = 'tshirt_design.png';
        link.click();
      })
      .catch((error) => {
        console.error('Error generating image:', error);
      });
  };

  return (
    <>
      <Navbar />
      <div className="p-4 lg:p-20 border  border-gray-300 mobileDesignHeight   rounded">
        <h2 className="lg:text-2xl font-bold  grid place-items-center text-cyan-900 lg:mb-8">
          T-Shirt Design 
        </h2>

        <div className="grid  grid-rows-3  md:grid-cols-5  lg:grid-cols-5 imageHeight  mt-10">
          <div className=' flex flex-rol lg:grid mx-auto text-center lg:grid-row-3 gap-8 '>
            <div className="">
              <label className="block   lg:font-bold mb-2"> T-Shirt Color:</label>
              <input
                type="color"
                value={tshirtColor}
                onChange={handleTshirtColorChange}
                className="border border-cyan-300 lg:h-20  lg:w-20 rounded"
              />
            </div>

            <div className="">
              <label className="block lg:font-bold mb-2"> Text Color:</label>
              <input
                type="color"
                value={textColor}
                onChange={handleTextColorChange}
                className="border border-cyan-300 lg:h-20 lg:w-20 rounded"
              />
            </div>

            <div className="">
              <label className="block lg:font-bold mb-2">  Font Size:</label>
              <input
                type="number"
                value={fontSize}
                onChange={handleFontSizeChange}
                className="border text-center border-cyan-300 lg:h-10 lg:w-20 rounded"
                min="10"
                max="10"
              />
            </div>
          </div>

          <div id="tshirt-design" className="  lg:col-span-3  rounded-lg grid place-items-center lg:p-8   text-center">
            <div className='lg:w-1/2  lg:h-full'>
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  backgroundColor: tshirtColor,
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <img src="https://i.imgur.com/frhnBT1.png" alt="T-Shirt Design" className='w-full h-full object-contain'/>

                <div
                className=' h-48 w-56 text-center font-bold absolute'
                  style={{
                   
                    top: '42%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    color: textColor,
                    fontSize: `${fontSize}px`,
                    
                    
                    
                  }}
                >
                  {quote ? quote.text : 'Your QUOTE Here'}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center  pt-48 relative ">
          <button
            onClick={handleDownloadClick}
            className=" bg-cyan-500 hover:bg-cyan-900  text-white  lg:font-bold  py-1 lg:py-2 px-4 rounded"
          >
            Download
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

MakeYourDesigns.propTypes = {
  quote: PropTypes.shape({
    text: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }),
};

export default MakeYourDesigns;
