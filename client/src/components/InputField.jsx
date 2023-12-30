import axios from 'axios';
import React, { useState } from 'react'

const InputField = () => {
    const [url, setUrl]=useState('');
    const [result, setResult] = useState(null);

  const handleFindPhilosophy = async () => {
    try {
      const response = await axios.post('/api/', { url });
      setResult(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
      <div className="relative w-[100%] flex justify-center pt-10 bg-transparent">
          <div className="flex items-start justify-center">
              <div className="relative">
                  <input type="text" id="username" value={url}  onChange={(e)=>setUrl(e.target.value)} class="border-b border-[#000] bg-transparent py-1 focus:outline-none focus:border-blue-600 focus:border-b-2 transition-colors peer" autocomplete="off"/>
                  <label for="username" class="absolute left-0 top-1 text-gray-600 cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-blue-600 transition-all">Enter URL</label>
              </div>
              <div className='relative pl-5'><button type="button" onClick={handleFindPhilosophy} class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-gray-800 text-gray-800 hover:border-gray-500 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:border-white dark:text-white dark:hover:text-gray-300 dark:hover:border-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                  Submit
              </button></div>
          </div>

      </div>
  )
}

export default InputField