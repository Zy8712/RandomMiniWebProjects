
function ImageReferenceIDs({catData}) {
    return (
        <>
            {catData && (
                <>
                    <div className="w-full custom-md:w-[700px] absolute -bottom-6 flex justify-between">
                        <span>
                            Image ID:&nbsp;
                            {catData.id}
                        </span>
                        <span>
                            Reference Image ID:&nbsp;
                            {catData.breeds.length > 0 ? catData.breeds[0].reference_image_id : 'Unknown'}
                        </span>
                    </div>
                </>
            )}
        </>
    );
}

export default ImageReferenceIDs;