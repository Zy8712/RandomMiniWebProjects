
function CatStatsBox({ catData }) {

    const statsArray = [
        { statsTitle: "Indoor", statsRef: "indoor" },
        { statsTitle: "Intelligence", statsRef: "intelligence" },
        { statsTitle: "Health Issues", statsRef: "health_issues" },
        
        { statsTitle: "Social Needs", statsRef: "social_needs" },
        { statsTitle: "Child Friendly", statsRef: "child_friendly" },
        { statsTitle: "Dog Friendly", statsRef: "dog_friendly" },

        { statsTitle: "Stranger Friendly", statsRef: "stranger_friendly" },
        { statsTitle: "Affection Level", statsRef: "affection_level" },
        { statsTitle: "Shedding Level", statsRef: "shedding_level" },

        { statsTitle: "Lap", statsRef: "lap" },
        { statsTitle: "Adaptability", statsRef: "adaptability" },
        { statsTitle: "Energy Level", statsRef: "energy_level" },

        { statsTitle: "Grooming", statsRef: "grooming" },
        { statsTitle: "Vocalisation", statsRef: "vocalisation" },
        { statsTitle: "Experimental", statsRef: "experimental" },

        { statsTitle: "Hairless", statsRef: "hairless" },
        { statsTitle: "Natural", statsRef: "natural" },
        { statsTitle: "Rare", statsRef: "rare" },
        
        { statsTitle: "Rex", statsRef: "rex" },
        { statsTitle: "Hypoallergenic", statsRef: "hypoallergenic" },
        { statsTitle: "Short Legs", statsRef: "short_legs" },
        { statsTitle: "Suppressed Tail", statsRef: "suppressed_tail" },

    ];

    const renderStats = () => {
        return statsArray.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
                <p>{stat.statsTitle}:</p>
                <p className="text-xl">{catData.breeds[0]?.[stat.statsRef] !== null && catData.breeds[0]?.[stat.statsRef] !== undefined ? catData.breeds[0]?.[stat.statsRef] : '0'}/5</p>
            </div>
        ));
    };

    return (
        <>
            <div className="my-4 mx-2 flex flex-col items-center">

                <div className="w-full grid grid-cols-3 gap-1 gap-y-2">
                    {catData && catData.breeds && catData.breeds.length > 0 && (
                        <>
                            {renderStats()}
                        </>
                    )}
                </div>
            </div>
        </>
    );
}

export default CatStatsBox;