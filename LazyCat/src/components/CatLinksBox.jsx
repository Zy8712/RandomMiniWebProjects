
function CatLinksBox({ catData }) {

    const baseUrl = 'https://api.thecatapi.com/v1/images/';
    const catRequestDataUrl = baseUrl + catData.id;

    return (
        <>
            <div className="my-4 mx-2 flex flex-col items-center">

                {catData.url && (
                    <p className="text-lg mb-1">
                        Image Url:&nbsp;
                        <a href={catData.url} target="__blank">
                            Link
                        </a>
                    </p>
                )}

                <p className="text-lg mb-1">
                    Request Data:&nbsp;
                    <a href={catRequestDataUrl} target="__blank">
                        Link
                    </a>
                </p>

                {catData.breeds[0]?.cfa_url && (
                    <p className="text-lg mb-1">
                        CFA:&nbsp;
                        <a href={catData.breeds[0]?.cfa_url} target="__blank">
                            Link
                        </a>
                    </p>
                )}
                {catData.breeds[0]?.vetstreet_url && (
                    <p className="text-lg mb-1">
                        Vet Street:&nbsp;
                        <a href={catData.breeds[0]?.vetstreet_url} target="__blank">
                            Link
                        </a>
                    </p>
                )}
                {catData.breeds[0]?.vcahospitals_url && (
                    <p className="text-lg mb-1">
                        VCA Hospitals:&nbsp;
                        <a href={catData.breeds[0]?.vcahospitals_url} target="__blank">
                            Link
                        </a>
                    </p>
                )}
                {catData.breeds[0]?.wikipedia_url && (
                    <p className="text-lg mb-1">
                        Wikipedia:&nbsp;
                        <a href={catData.breeds[0]?.wikipedia_url} target="__blank">
                            Link
                        </a>
                    </p>
                )}



            </div>
        </>
    );
}

export default CatLinksBox;