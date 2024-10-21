import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 shadow-lg">
      <ul className="flex justify-around">
        <li>
          <Link 
            href="/" 
            className="
              px-4 py-2 rounded-lg
              bg-gradient-to-br from-gray-700 to-gray-800
              text-gray-200 font-medium
              shadow-[2px_2px_5px_#1f2937,-2px_-2px_5px_#4b5563]
              hover:shadow-[inset_2px_2px_5px_#1f2937,inset_-2px_-2px_5px_#4b5563]
              transition-all duration-300
            "
          >
            Home
          </Link>
        </li>
        <li>
          <Link 
            href="/about" 
            className="
              px-4 py-2 rounded-lg
              bg-gradient-to-br from-gray-700 to-gray-800
              text-gray-200 font-medium
              shadow-[2px_2px_5px_#1f2937,-2px_-2px_5px_#4b5563]
              hover:shadow-[inset_2px_2px_5px_#1f2937,inset_-2px_-2px_5px_#4b5563]
              transition-all duration-300
            "
          >
            About
          </Link>
        </li>
        <li>
          <Link 
            href="/contact" 
            className="
              px-4 py-2 rounded-lg
              bg-gradient-to-br from-gray-700 to-gray-800
              text-gray-200 font-medium
              shadow-[2px_2px_5px_#1f2937,-2px_-2px_5px_#4b5563]
              hover:shadow-[inset_2px_2px_5px_#1f2937,inset_-2px_-2px_5px_#4b5563]
              transition-all duration-300
            "
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar