import Hero from "./hero";
import Navi from "./Nav";
import "./logged.css"

function Logged(){
    return(
        <>
            <div>
                <Navi />
                <Hero />
            </div>
        </>
    );
}

export default Logged