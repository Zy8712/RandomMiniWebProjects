
export default function PageLayout(props) {
    return (
        <>
            <main className="border-red-500 border-2 border-solid px-14">
                <div className="w-full h-full border-blue-500 border-2 border-solid">
                    {props.children}
                </div>
            </main>
        </>
    );
}