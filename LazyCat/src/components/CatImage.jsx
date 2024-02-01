
function CatImage({ catData }) {
    return (
        <>
            {catData && (
                <>
                    <img
                        src={catData.url}
                        alt="Random Cat"
                        className="max-w-[95%] custom-md:max-w-[600px] max-h-[95%] custom-md:max-h-[480px] rounded-lg shadow-md"
                    />
                </>
            )}
        </>
    );
}

export default CatImage;