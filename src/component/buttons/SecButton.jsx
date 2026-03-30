import React from 'react'

const SecButton = ({ type, label = "Click Me", size = "" }) => {
    return (
        <button
            type={type}
            className={`
                px-16 py-4 
                border border-[#313030] 
                text-[#E5E2E1] 
                transition-all duration-300
                hover:text-[#00E0FE] 
                hover:border-[#00E0FE]
                focus:outline-none
            `}
        >
            {label}
        </button>
    )
}

export default SecButton