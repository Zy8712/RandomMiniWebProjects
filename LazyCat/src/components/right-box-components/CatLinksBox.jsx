
function CatLinksBox({ catData }) {

    const baseUrl = 'https://api.thecatapi.com/v1/images/';
    const catRequestDataUrl = baseUrl + catData.id;

    return (
        <>
            <div className="my-4 mx-2 flex flex-col items-center">

                {catData.url && (
                    <p className="text-lg mb-1 flex items-center">
                        <i className="las la-image mr-1"></i>
                        Image Url:&nbsp;
                        <a href={catData.url} target="__blank" className="underline">
                            Link
                        </a>
                    </p>
                )}

                <p className="text-lg mb-1 flex items-center">
                    <i className="las la-server mr-1"></i>
                    Request Data:&nbsp;
                    <a href={catRequestDataUrl} target="__blank" className="underline">
                        Link
                    </a>
                </p>

                {catData.breeds[0]?.cfa_url && (
                    <p className="text-lg mb-1 flex items-center">
                        <i className="las la-cat mr-1"></i>
                        CFA:&nbsp;
                        <a href={catData.breeds[0]?.cfa_url} target="__blank" className="underline">
                            Link
                        </a>
                    </p>
                )}

                {catData.breeds[0]?.vetstreet_url && (
                    <p className="text-lg mb-1 flex items-center">
                        <i className="las la-map-signs mr-1"></i>
                        Vet Street:&nbsp;
                        <a href={catData.breeds[0]?.vetstreet_url} target="__blank" className="underline">
                            Link
                        </a>
                    </p>
                )}
                {catData.breeds[0]?.vcahospitals_url && (
                    <p className="text-lg mb-1 flex items-center">
                        <i className="las la-hospital mr-1"></i>
                        VCA Hospitals:&nbsp;
                        <a href={catData.breeds[0]?.vcahospitals_url} target="__blank" className="underline">
                            Link
                        </a>
                    </p>
                )}
                {catData.breeds[0]?.wikipedia_url && (
                    <p className="text-lg mb-1 flex items-center">
                        <i className="las la-book mr-1"></i>
                        Wikipedia:&nbsp;
                        <a href={catData.breeds[0]?.wikipedia_url} target="__blank" className="underline">
                            Link
                        </a>
                    </p>
                )}



            </div>
        </>
    );
}

export default CatLinksBox;