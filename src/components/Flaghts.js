import {useEffect, useState} from "react";

import Flaght from "./Flaght";

export default function Flaghts() {
    const [fligtsList, setFlightsList] = useState([])
    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(flaghts => {
                setFlightsList(flaghts.filter(flaght => flaght.launch_year !== '2020'));
            })

    }, [])
    return (
        <div>
            {
                fligtsList.map(value => <Flaght key={value.flight_number}
                                                item={value}/>)
            }
        </div>
    );
}


