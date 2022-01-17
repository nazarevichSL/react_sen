export default function Flaght({item: value}) {

    return (
        <div className={'FlaghtStyle'}>
            <div className={'FlaghtNYI'}>

                <div className={'nameYear'}>
                    <h1>{value.mission_name}</h1>
                    <p> {value.launch_year}</p>
                </div>

                <div className={'imgStyle'}>
                    <img src={value.links.mission_patch} alt="mission_patch"/>

                </div>
            </div>
        </div>
    );
}