import CVBackground from "./CVBackground";
import CVCamera from "./CVCamera";
import CVMain from "./CVMain";
import Transition from "../../transition";
import { useState } from "react";

function CVApp() {
    const [webcamLoaded, setWebcamLoaded] = useState(null);
    return (
        <div className="flex justify-center items-center h-screen w-screen overflow-hidden">
            <CVCamera 
                className="inset-0"
                onWebcamLoaded={()=>setWebcamLoaded(true)}
            />
            {webcamLoaded &&(
                <>
                    <CVBackground className="inset-0"/>
                    <CVMain/>
                </>
            )}
        </div>
    );
}

const CVAppTransition = Transition(CVApp);

export default CVAppTransition;
