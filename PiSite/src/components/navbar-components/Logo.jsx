import SiteIcon from "../../assets/icons/pi-square-svgrepo-com.svg";

export default function Logo() {
    return (
        <>
            <div className="flex items-center">
                <div className="relative w-16 h-16 border-2 border-black border-solid mr-4">
                    <img src={SiteIcon} className="w-16 h-16 border-custom-cyan border-2 border-solid rounded-lg" />
                </div>
                <span className="text-4xl font-theme-quicksand font-bold tracking-wider text-black custom-text-black-outline">
                    PiSnap
                </span>
            </div>
        </>
    );
}