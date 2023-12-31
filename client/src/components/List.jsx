import { Link } from "react-router-dom"

export default function List({ urls }) {
  return (
    <ul role="list" className="divide-y mt-10 divide-gray-100 md:w-[100%] sm:w-[80%] max-sm:w-[90%] m-auto h-[100%] overflow-scroll overflow-x-hidden">
      <div className="text-[#000000] text-xl font-semibold mb-10">List of visited wikipedia pages:- </div>
      {urls.map((url, index) => (
        <li key={index} className="flex justify-between items-center w-[100%] text-wrap">
          <Link to={url} className="text-wrap break-words w-[100%] break-all">
            {url}
          </Link>
        </li>
      ))}
    </ul>
  )
}
