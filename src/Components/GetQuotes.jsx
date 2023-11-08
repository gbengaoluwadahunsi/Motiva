

import { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import PropTypes from 'prop-types';
import { Spinner } from '@chakra-ui/react';
import '../index.css';

function GetQuotes() {
  const [quotes, setQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [quoteText, setQuoteText] = useState('');
  const [quoteAuthor, setQuoteAuthor] = useState('');
    const [selectedOption, setSelectedOption] = useState('');

  const Quote = ({ text }) => {
    return (
      <div>
        <span className="block text-lg font-bold mb-2">{text}</span>
        
      </div>
    );
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const getapi = async (url) => {
    try {
      const response = await fetch(url, {

        headers: {
          'Authorization': 'b84fa10b09bd66a72a7e8538bbdfb8cd59e98d04'
      }

      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching quotes:', error);
      return null;
    }
  };

  const getQuotes = async () => {
    setQuotes([]);
    setIsLoading(true);
    const apiUrl = `https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json`;
    const data = await getapi(apiUrl);
    if (data) {
      setQuotes(data);
    }
    setIsLoading(false);
  }

  const handleSave = () => {
    // Implement save functionality
  };

  const handleCopy = () => {
    // Implement copy functionality
  };

  
  const handleExport = () => {
    // Implement export to design functionality
    window.location.href = "/makedesigns"
  };

  return (
    <div>
      <Navbar />
      <div className="p-4  lg:p-20 border border-gray-300 rounded" >
        <h2 className="text-2xl font-bold grid place-items-center text-cyan-900 mb-8">
        Motivational Quotes
        </h2>

        <form className="grid space-y-4 justify-center py-8">
        <div className="mb-4 wid">
            
            <button
            type="button"
              name='button'
              onClick={() => getQuotes(quoteText)}
              className="bg-cyan-600 hover:scale-95 mt-2 text-white w-full font-bold py-2 px-4 rounded"
                >
                Click here to get random motivational quotes
                </button>
                </div>

            <span className='mx-auto text-cyan-900 font-bold'>OR</span>
            

          <select
            name="select"
            id="mySelect"
            value={selectedOption}
            onChange={handleSelectChange}
            className="bg-cyan-600 mt-2 text-white w-full outline-none font-bold py-2 px-4 mx-auto text-center rounded"
          >
            <option value="">Select a quote search option</option>
            <option value="keyword" className="bg-white text-cyan-900">
              Enter search query by keyword (e.g life, work, exercise, meditation, prayer, etc...)
            </option>
            <option value="author" className="bg-white text-cyan-900">
              Enter search query by author&apos;s name
            </option>
          </select>

          {selectedOption === 'keyword' && (
            <div className="mb-4 wid">
              <input
                type="text"
                name="text"
                placeholder="Enter your quote keyword"
                value={quoteText}
                onChange={(e) => setQuoteText(e.target.value)}
                className="p-2 border border-gray-300 outline-cyan-800 rounded mr-2 w-full"
              />

              <button
                type="button"
                name="button"
                onClick={() => getQuotes(quoteText)}
                className="bg-cyan-600 hover:scale-95 mt-2 text-white w-full font-bold py-2 px-4 rounded"
              >
                Get Quotes
              </button>
            </div>
          )}

          {selectedOption === 'author' && (
            <div>
              <input
                placeholder="Enter your quote author's name"
                type="text"
                name="text"
                value={quoteAuthor}
                onChange={(e) => setQuoteAuthor(e.target.value)}
                className="p-2 border border-gray-300 outline-cyan-800 rounded mr-2 w-full"
              />
              <button
                type="button"
                name="button"
                onClick={() => getQuotes(quoteText)}
                className="bg-cyan-600 hover:scale-95 mt-2 text-white w-full font-bold py-2 px-4 outline-none rounded"
              >
                Get Quotes
              </button>
            </div>
          )}

        
          {isLoading ? (
            <Spinner />
          ) : (
            quotes.length > 0 && (
              <div className="border border-gray-300 text-cyan-800 rounded p-4 mb-4">
                {quotes.map((quote, index) => (
                  <Quote key={index} text={quote.text}  />
                ))}
              </div>
            )
          )}
        </form>
        {/* Section to display generated quotes */}
        
        <div className="text-center mb-8">
          <button
            type="button"
            onClick={handleSave}
            className="bg-cyan-700 hover:scale-95 text-white font-bold py-2 px-4 rounded mr-2"
          >
            Save
          </button>
          <button
            type="button"
            onClick={handleCopy}
            className="bg-cyan-700 hover:scale-95 text-white font-bold py-2 px-4 rounded mr-2"
          >
            Copy
          </button>
        
          <button
            type="button"
            onClick={handleExport}
            className="bg-cyan-700 hover:scale-95 text-white font-bold py-2 px-4 rounded mr-2"
          >
            Export for Design
          </button>
        </div>
        </div>
        <Footer />
      
    </div>
  );
}

GetQuotes.propTypes = {
  text: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export  default GetQuotes
