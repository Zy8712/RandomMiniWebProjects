import LogoBox from "./navbar-components/LogoBox.jsx";
import NavOptions from "./navbar-components/NavOptions.jsx";
import SocialIcons from "./navbar-components/SocialIcons.jsx";

export default function NavBar() {
    return (
        <>
            <nav className="w-full h-24 px-14">
                <div className="w-full h-full flex justify-between items-center border-red-500 border-2 border-solid">
                    <LogoBox />

                    <NavOptions />

                    <SocialIcons />
                </div>
            </nav>
        </>
    );
}