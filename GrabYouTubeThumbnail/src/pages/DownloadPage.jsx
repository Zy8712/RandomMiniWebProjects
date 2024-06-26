import React, { useState } from 'react';
import PageLayout from "../layouts/PageLayout";
import SearchBar from "../components/download-page-components/SearchBar";
import ImageBox from "../components/download-page-components/ImageBox";
import GenerateButton from "../components/download-page-components/GenerateButton"
import DownloadOptions from '../components/download-page-components/DownloadOptions';

export default function DownloadPage() {

    const [url, setUrl] = useState('');
    const [thumbnails, setThumbnails] = useState({
        hd: '',
        md: '',
        sm: ''
    });

    const extractVideoId = (url) => {
        const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
        const match = url.match(regex);
        return match ? match[1] : null;
    };

    const generateThumbnails = () => {
        const videoId = extractVideoId(url);
        if (videoId) {
            setThumbnails({
                hd: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
                md: `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`,
                sm: `https://img.youtube.com/vi/${videoId}/default.jpg`
            });
        } else {
            alert('Invalid YouTube URL');
        }
    };

    return (
        <>
            <PageLayout>
                <div className="w-full h-full flex flex-col items-center">
                    <SearchBar url={url} setUrl={setUrl} />
                    <GenerateButton generateThumbnails={generateThumbnails} />
                    <ImageBox thumbnails={thumbnails} />
                    
                    <DownloadOptions />

                </div>
            </PageLayout>
        </>
    );
}
