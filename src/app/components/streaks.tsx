import { useBetween } from "use-between";
import { useShareableState } from "../hooks/useShareableState";

function Streaks() {
    const { streak  } = useBetween(useShareableState);

    return <>
    <h6 style={{fontWeight: 600}}>🔥Streak :</h6>
    <div className="text-center">
        <h4 style={{fontWeight: 500}}>{streak}</h4>
    </div>
    </>
}

export default Streaks
