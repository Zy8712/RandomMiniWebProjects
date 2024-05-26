
import WandLogo from "../../assets/magic-wand-svgrepo-com.svg";

export default function GenerateButton({ generateThumbnails }) {
    return (
        <>
            <button onClick={generateThumbnails}
                className="w-80 h-[74px] flex justify-center items-center bg-violet-500 border-white border-0 hover:border-2 border-solid text-white text-2xl font-semibold rounded-lg"
            >
                <img src={WandLogo} alt="" className="mr-5 h-10" />
                Grab Thumbnail
            </button>
        </>
    );
}