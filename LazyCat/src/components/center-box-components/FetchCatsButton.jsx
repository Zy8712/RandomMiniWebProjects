
export default function FetchCatsButton({ fetchNewCat }) {
    return (
        <>
            <button onClick={fetchNewCat}
                className="flex items-center mt-8 sm:mt-4 text-white text-2xl font-bold bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded">
                <i className="las la-magic text-4xl mr-3"></i>
                Fetch Another Cat
            </button>
        </>
    );
}