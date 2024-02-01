import { useState } from "react";
import CatExtraDetailsBox from "./CatExtraDetailsBox";
import CatLinksBox from "./CatLinksBox";


function CatMoreBox({ catData }) {

    const [showLinks, setShowLinks] = useState(false);

    const toggleLinks = () => {
        setShowLinks(!showLinks);
    }

    return (
        <>
            {catData && (
                <>
                    <div className="w-72 mb-8 text-center rounded-2xl border-2 border-black border-solid">
                        <div>
                            <div className="w-full h-12 flex text-3xl">
                                <button onClick={toggleLinks} disabled={!showLinks}
                                    className={`w-1/2 h-full flex justify-center items-center ${!showLinks ? '' : 'border-b-2 border-r-2'} border-solid   border-black`}>
                                    <i className="las la-chart-bar mr-1"></i>
                                    Stats
                                </button>
                                <button onClick={toggleLinks} disabled={showLinks}
                                    className={`w-1/2 h-full flex justify-center items-center ${showLinks ? '' : 'border-l-2 border-b-2'} border-solid border-black`}>
                                    <i className="las la-link mr-1"></i>
                                    Links
                                </button>
                            </div>

                        </div>

                        {!showLinks ? (
                            <CatExtraDetailsBox catData={catData} />

                        ) : (
                            <CatLinksBox catData={catData} />
                        )}
                    </div>
                </>
            )}
        </>
    );
}

export default CatMoreBox;