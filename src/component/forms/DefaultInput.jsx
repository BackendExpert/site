import React from 'react'

const DefaultInput = ({
    value,
    onChange,
    placeholder = "Search...",
    icon: Icon 
}) => {
    return (
        <div className="flex items-center relative w-full">

            <input
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="
                    bg-[#000000]
                    text-white
                    p-3
                    w-full
                    pr-10
                    border-b border-transparent
                    focus:outline-none
                    focus:border-b-[#00F2FF]
                    placeholder:text-[#004F54]
                "
            />

            {Icon && (
                <Icon className="absolute right-2 text-[#004F54]" />
            )}

        </div>
    )
}

export default DefaultInput