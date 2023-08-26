import { ProgressBar } from "react-bootstrap";
import { useShareableState } from "../hooks/useShareableState";
import { useBetween } from "use-between";

const WinRatio: React.FC = () => {
    const { wins, plays  } = useBetween(useShareableState);
    const win_ratio = wins/plays * 100
    const lose_ratio = 100 - win_ratio

    return <> 
        <h6 style={{fontWeight: 600}}>Win/Lose Ratio:</h6> 
        <ProgressBar>
            <ProgressBar style={{backgroundColor: "green", width:`${win_ratio}%`}}/>
            <ProgressBar style={{backgroundColor: "red", width: `${lose_ratio}%`}}/>
        </ProgressBar>
    </>
}

export default WinRatio;