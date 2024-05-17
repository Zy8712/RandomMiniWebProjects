import React from 'react'

import { Link } from 'wouter';
import SiteIcon from "../assets/icons/pi-square-svgrepo-com.svg";

export default function Home() {
    return (
        <>
            <div className="w-full h-full min-h-screen flex justify-center px-14">
                <div className="w-full max-w-[1300px] h-full min-h-screen flex justify-between items-center">

                    <div className="relative w-[600px] h-full min-h-screen flex justify-center items-center bg-gradient-radial-custom">
                        <div className="w-96 h-96 transform -skew-y-12">
                            <img src={SiteIcon} className="w-96 h-96 animate-float shadow-inner shadow-custom-cyan" />
                        </div>
                    </div>


                    <div className="w-[600px] h-full min-h-screen border-white border-solid border-2">

                    </div>

                </div>
            </div>
        </>
    );
}