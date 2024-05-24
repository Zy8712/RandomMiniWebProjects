import React from 'react';

export default function ImageBox({ thumbnails }) {
    return (
        <>
            <div className="my-10 w-[960px] h-[540px]">
                {thumbnails.hd &&
                    <img src={thumbnails.hd} alt="HD Thumbnail" 
                        className="w-full rounded-md"
                    />
                }
            </div>
        </>
    );
}