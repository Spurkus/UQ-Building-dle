import { ProgressBar } from "react-bootstrap";
import { useLocalStorage } from "../hooks/useLocalStorage";

const WinRatio: React.FC = () => {
    const [plays] = useLocalStorage('plays', 0)
    const [wins] = useLocalStorage('wins', 0)
    const win_ratio = wins/plays * 100
    const lose_ratio = 100 - win_ratio
    console.log(plays, wins, win_ratio, lose_ratio);
    

    return <> 
        <h3>Win/Lose Ratio:</h3> 
        <ProgressBar>
            <ProgressBar style={{backgroundColor: "green", width:`${win_ratio}%`}}/>
            <ProgressBar style={{backgroundColor: "red", width: `${lose_ratio}%`}}/>
        </ProgressBar>
    </>
}

export default WinRatio;
