'use client';
import React from 'react'

const Card = (props) => {
    const handleClick=()=>{
        const url=`http://www.${props.link}`
        window.location.href=url
    }
    return (
        <div className="bg-gray-500 text-black rounded-md shadow-lg p-4 cursor-pointer" onClick={handleClick}>
            <h2 className='font-bold'>{props.title||'Card Title'}</h2>
            <hr className='my-2' />
            <p>This is some short description text. Write a few line here to describe each item.</p>
        </div>
    )
}

export default Card