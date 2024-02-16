
function CatImage({ catData }) {
    return (
        <>
            <div className="w-full h-[500px] grid place-items-center border-2 border-black border-solid rounded-2xl">
                {catData && (
                    <>
                        <img
                            src={catData.url}
                            alt="Random Cat"
                            className="max-w-[95%] custom-md:max-w-[600px] max-h-[95%] custom-md:max-h-[480px] rounded-lg shadow-md"
                        />
                    </>
                )}
            </div>
        </>
    );
}

export default CatImage;