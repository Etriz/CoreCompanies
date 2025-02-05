'use client';
import React from 'react';

const Card = (props) => {
	const handleClick = () => {
		const url = `http://www.${props.link}`;
		window.location.href = url;
	};
	return (
		<div
			className="bg-gray-300 text-black rounded-md shadow-lg p-4 cursor-pointer"
			onClick={handleClick}>
			<h2 className="font-bold text-2xl">
				{props.title || 'Card Title'}
			</h2>
			<hr className="border-black my-2" />
			<p>
				This is some short description text. Write a few lines here to
				describe each item. This can be as long or as short as needed.
			</p>
			<button className="border rounded-md py-1 px-3 bg-gray-950 text-white">
				Visit
			</button>
		</div>
	);
};

export default Card;
