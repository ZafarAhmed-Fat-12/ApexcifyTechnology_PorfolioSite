import React from 'react';


export default function NavLink({ href, label, setState }) {

    return (
        <li className="relative group">
            <a
                href={href}
                className="block py-2 text-white font-medium transition-colors duration-300"
                onClick={() => setState(false)}
            >
                {label}

                <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-teal-400 to-blue-500 group-hover:w-full transition-all duration-500 ease-out"></span>
            </a>
        </li>)
}
