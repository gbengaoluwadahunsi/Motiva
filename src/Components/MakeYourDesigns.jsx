import { useState } from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import Footer from './Footer';
import domtoimage from 'dom-to-image';

const MakeYourDesigns = ({ quote }) => {
  const [tshirtColor, setTshirtColor] = useState('#ffffff');
  const [textColor, setTextColor] = useState('#071b1b');
  const [fontSize, setFontSize] = useState(25);

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
      <div className="p-4 lg:p-20 border h-screen border-gray-300 rounded">
        <h2 className="text-2xl font-bold grid place-items-center text-cyan-900 mb-8">
          T-Shirt Design 
        </h2>

        <div className="grid lg:grid-cols-5 imageHeight mt-10">
          <div className="">
            <div className="mb-4">
              <label className="block font-bold mb-2"> Customize T-Shirt Color:</label>
              <input
                type="color"
                value={tshirtColor}
                onChange={handleTshirtColorChange}
                className="border border-cyan-300 h-20 w-20 rounded"
              />
            </div>

            <div className="mb-4">
              <label className="block font-bold mb-2"> Customize Quote Text Color:</label>
              <input
                type="color"
                value={textColor}
                onChange={handleTextColorChange}
                className="border border-cyan-300 h-20 w-20 rounded"
              />
            </div>

            <div className="mb-4">
              <label className="block font-bold mb-2"> Adjust Font Size:</label>
              <input
                type="number"
                value={fontSize}
                onChange={handleFontSizeChange}
                className="border border-cyan-300 h-10 w-20 rounded"
                min="10"
                max="10"
              />
            </div>
          </div>

          <div id="tshirt-design" className="col-span-3  rounded-lg grid place-items-center p-8   text-center">
            <div className='lg:w-1/2 lg:h-full'>
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  backgroundColor: tshirtColor,
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <img src="https://i.imgur.com/frhnBT1.png" alt="T-Shirt Design" className='w-full  h-full object-contain'/>

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
        <div className="flex justify-center   relative mt-4">
          <button
            onClick={handleDownloadClick}
            className="mr-4 bg-cyan-500 hover:bg-cyan-900 mt-20 text-white font-bold py-2 px-4 rounded"
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
