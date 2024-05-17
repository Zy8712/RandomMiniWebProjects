import Logo from "./navbar-components/Logo";
import NavbarOptions from "./navbar-components/NavbarOptions";
import SocialIcons from "./navbar-components/SocialIcons";

export default function Navbar(){
    return(
        <>
            <div className="fixed z-50 w-full h-24 px-16">
                <div className="w-full h-full flex justify-between items-center">
                    <Logo />
                    <NavbarOptions />
                    <SocialIcons />
                </div>
            </div>
        </>
    );
}