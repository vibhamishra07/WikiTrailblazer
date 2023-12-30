
import React from 'react'

const InputField = ({setUrl, url}) => {

  return (
    <div className="relative">
      <input type="text" id="username" value={url} onChange={(e) => setUrl(e.target.value)} class="border-b border-[#000] bg-transparent py-1 focus:outline-none focus:border-blue-600 focus:border-b-2 transition-colors peer" autocomplete="off" />
      <label for="username" class="absolute left-0 top-1 text-gray-600 cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-blue-600 transition-all">Enter URL</label>
    </div>
  )
}

export default InputField