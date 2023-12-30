import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InputField from '../components/InputField';
import List from '../components/List';
import { handleFindPhilosophy } from '../redux/slices/searchSlice';

const SearchPage = () => {
  const [url, setUrl] = useState('');
  const dispatch = useDispatch();
  const { loading, result, error } = useSelector((state) => state.search);

  const handleFindPhilosophyClick = () => {
    dispatch(handleFindPhilosophy(url));
    setUrl('')
  };

  return (
    <>
      {/* Input box */}
      <div className="relative w-[100%] flex justify-center pt-10 bg-transparent">
        <div className="flex items-start justify-center"></div>
        <InputField setUrl={setUrl} url={url} />
        <div className='relative pl-5'>
          <button
            type="button"
            onClick={handleFindPhilosophyClick}
            disabled={loading}
            className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-gray-800 text-gray-800 hover:border-gray-500 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:border-white dark:text-white dark:hover:text-gray-300 dark:hover:border-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          >
            Submit
          </button>
        </div>
      </div>

      {/* Result */}
      <div className='flex justify-center flex-col items-center pt-10 h-[50%] w-[100%] text-center'>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {result && (
          <div className=' flex flex-col justify-center items-center text-center'>
            <p>Total Trails: {result.totalTrails?.count}</p>
            {/* Links card */}
            <List urls={result.totalTrails?.urls} />
          </div>
        )}

        
      </div>
    </>
  );
};

export default SearchPage;
