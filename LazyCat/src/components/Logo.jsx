import LazyCat_Black_Small from "../assets/logo-assets/LazyCat_216x250.png";
import LazyCat_Black_Medium from "../assets/logo-assets/LazyCat_864x1000.png";
import LazyCat_Black_Large from "../assets/logo-assets/LazyCat_3456x4000.png";

import LazyCat_White_Small from "../assets/logo-assets/LazyCatWhite_216x250.png";
import LazyCat_White_Medium from "../assets/logo-assets/LazyCatWhite_864x1000.png";
import LazyCat_White_Large from "../assets/logo-assets/LazyCatWhite_3456x4000.png";

function Logo() {
    return (
        <>
            <div className="w-full custom-sm:w-[600px] flex justify-center mt-3">
                <div className="inline mr-3 custom-sm:mr-8">
                    <img src={LazyCat_Black_Large} className="w-24 custom-sm:w-32" />
                </div>
                <div className="inline">
                    <h1 className="text-7xl custom-sm:text-8xl font-semibold">Lazy Cat</h1>
                    <span className="text-base custom-sm:text-2xl">
                        Single click, cat pics. Powered by&nbsp;
                        <a href="https://thecatapi.com/" className="underline underline-offset-4">
                            TheCatAPI
                        </a>.
                    </span>
                </div>
            </div >
        </>
    );
}

export default Logo;