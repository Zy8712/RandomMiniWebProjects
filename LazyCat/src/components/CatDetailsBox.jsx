
function CatDetailsBox({ catData }) {
    return (
        <>
            {catData && (
                <>
                    <div className="w-72 mb-8 overflow-hidden text-center rounded-2xl border-2 border-black border-solid">
                        <div className="my-4 mx-2 flex flex-col items-center">
                            <h2 className="text-4xl font-semibold mb-2">Cat Details</h2>

                            <h3 className="flex items-center text-2xl">
                                <i className="las la-dna mr-2"></i>
                                Breed:
                            </h3>
                            <p className="text-lg mb-1">
                                {catData.breeds.length > 0 ? catData.breeds[0].name : 'Unknown'}
                            </p>

                            <h3 className="flex items-center text-2xl">
                                <i className="las la-id-card mr-2"></i>
                                Alt Names:
                            </h3>
                            <p className="text-lg mb-1">
                                {(catData.breeds[0]?.alt_names || 'Unknown')}
                            </p>

                            <h3 className="flex items-center text-2xl">
                                <i className="las la-globe mr-2"></i>
                                Origin:
                            </h3>
                            <p className="text-lg mb-1">
                                {catData.breeds.length > 0 ? catData.breeds[0].origin : 'Unknown'}
                                &nbsp;
                                [
                                {catData.breeds.length > 0 ? catData.breeds[0].country_code : 'Unknown'}
                                ]
                            </p>

                            <h3 className="flex items-center text-2xl">
                                <i className="las la-exclamation-triangle mr-2"></i>
                                Temperament:
                            </h3>
                            <p className="text-lg mb-1">
                                {catData.breeds.length > 0 ? catData.breeds[0].temperament : 'Unknown'}
                            </p>

                            <h3 className="flex items-center text-2xl">
                                <i className="las la-heartbeat mr-2"></i>
                                Life Span (yrs.):
                            </h3>
                            <p className="text-lg mb-1">
                                {catData.breeds.length > 0 ? catData.breeds[0].life_span : 'Unknown'}
                            </p>

                            <h3 className="flex items-center text-2xl">
                                <i className="las la-file-alt mr-2"></i>
                                Description:
                            </h3>
                            <p className="text-lg mb-1">
                                {catData.breeds.length > 0 ? catData.breeds[0].description : 'None Given'}
                            </p>
                            {/* Add more details as needed */}
                        </div>
                    </div>
                </>
            )}
        </>
    );
}

export default CatDetailsBox;