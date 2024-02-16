import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CatImage from './center-box-components/CatImage';
import ImageReferenceIDs from './center-box-components/ImageReferenceIDs';
import CatDetailsBox from './left-box-components/CatDetailsBox';
import CatMoreBox from './right-box-components/CatMoreBox';
import FetchCatsButton from './center-box-components/FetchCatsButton';

function ImageBox() {
    const [catData, setCatData] = useState(null);
    const apiKey = 'live_nLQSy3fwrpZg0wtv4j6P6VOcjQcup7j1Z93cTRXhcYE5QRWnk49zlMVMZFpSm9s1';

    const fetchNewCat = async () => {
        try {
            const response = await axios.get('https://api.thecatapi.com/v1/images/search', {
                headers: {
                    'x-api-key': apiKey,
                },
            });
            setCatData(response.data[0]);
        } catch (error) {
            console.error('Error fetching cat data:', error);
        }
    };

    useEffect(() => {
        fetchNewCat(); // Initial fetch on component mount
    }, [apiKey]);


    return (
        <>
            <div className="w-full custom-md:w-[700px] xl:w-[1320px] flex flex-col xl:flex-row items-center xl:items-start justify-between mt-8">
                
                <div className="hidden xl:flex">
                    <CatDetailsBox catData={catData} />
                </div>

                <div className="w-[92%] custom-md:w-[700px] flex flex-col items-center relative">
                    <CatImage catData={catData} />

                    <ImageReferenceIDs catData={catData} />

                    <FetchCatsButton fetchNewCat={fetchNewCat} />
                </div>

                <div className="hidden xl:flex">
                    <CatMoreBox catData={catData} />
                </div>


                <div className="w-[92%] custom-md:w-[700px] min-h-[600px] relative flex xl:hidden flex-col sm:flex-row justify-between items-center sm:items-start mt-24 mb-20">
                    <CatDetailsBox catData={catData} />

                    <CatMoreBox catData={catData} />
                </div>
            </div>
        </>
    );
}

export default ImageBox;
// attempt to appply flex row order as opposed to flex col for mobile 