export default function NavbarOptions() {
    return (
        <>
            <div className="w-[650px] flex justify-between font-theme-quicksand text-xl font-bold text-custom-cyan">
                <a className="flex items-center">
                    <i className="las la-info-circle text-2xl mr-2"></i>
                    About
                </a>
                <a className="flex items-center">
                    <i className="las la-history text-2xl mr-2"></i>
                    History
                </a>
                <a className="flex items-center">
                    <i class="las la-brain text-2xl mr-2"></i>
                    Memorize
                </a>
                <a className="flex items-center">
                    <i className="las la-pencil-alt text-2xl mr-2"></i>
                    Practice
                </a>
                <a className="flex items-center">
                    <i className="las la-address-book text-2xl mr-2"></i>
                    Contact
                </a>
            </div>
        </>
    );
}