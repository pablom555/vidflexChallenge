import React from 'react'

const Title = ({ text }: { text: string }) => {
    return (
        <h1 className="text-center uppercase tracking-widest font-black text-gray-500 text-2xl">{text}</h1>
    )
}

export default Title
