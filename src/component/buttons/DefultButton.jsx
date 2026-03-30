import React from 'react'

const DefultButton = ({ type, label="Click Me", size="" }) => {
    return (
        <button
            type={type}
            className={`
                px-16 py-4 bg-[#00E0FE] text-[#00363F] 
                shadow-[0_2px_6px_#00E0FE33] 
                transition-all duration-300 
                hover:shadow-[0_3px_10px_#00E0FE44]
                focus:outline-none
            `}
        >
            {label}
        </button>
    )
}

export default DefultButton