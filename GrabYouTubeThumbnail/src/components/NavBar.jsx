
import Logo from '../assets/yt_grab_logo.svg';

export default function NavBar() {
    return (
        <>
            <nav className="w-full h-24 bg-white bg-opacity-80 border-black border-2 border-solid px-14">
                <div className="w-full h-full flex justify-between items-center border-red-500 border-2 border-solid">

                    <div className="w-80 h-[84px] bg-gradient-to-tr from-orange-500 to-red-500 rounded-xl p-1">
                        <div className="w-full h-full flex items-center bg-white rounded-xl px-2">
                            <img src={Logo} alt="" className="w-16 h-16" />
                            <div className="ml-3 flex flex-col">
                                <h1 className="text-3xl font-semibold">ThumbGrab</h1>
                                <span className="text-sm font-semibold">
                                    Quick Grab YouTube Thumbnails
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
            </nav>
        </>
    );
}