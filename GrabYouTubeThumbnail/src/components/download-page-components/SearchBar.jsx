export default function SearchBar({ url, setUrl }) {
    return (
        <>
            <div className="my-10 w-[960px] h-20 flex items-center border-blue-400 border-4 border-solid bg-white rounded-xl overflow-hidden">
                <input
                    type="text"
                    placeholder="Enter YouTube URL"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="w-full h-full text-3xl pl-10 focus:outline-none"
                />
            </div>
        </>
    );
}
