import Logo from '../../assets/image-circle-svgrepo-com.svg';

export default function LogoBox() {
    return (
        <>
            <div className="w-96 h-[84px]">
                <div className="w-full h-full flex items-center bg-gradient-to-t from-purple-400 to-blue-400">
                    <div className="w-full h-full flex items-center bg-slate-900 mix-blend-darken">
                        <img src={Logo} alt="" className="w-20 h-20" />
                        <div className="ml-3 flex flex-col text-white">
                            <h1 className="text-3xl font-bold">ThumbGrab</h1>
                            <span className="text-sm font-bold">
                                Quick Grab YouTube Thumbnails
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}