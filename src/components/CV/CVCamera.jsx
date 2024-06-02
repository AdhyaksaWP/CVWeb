import Webcam from "react-webcam";
import * as tf from "@tensorflow/tfjs";
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";

function CVCamera({onWebcamLoaded}) {
    const webcamRef = useRef(null);
    const [model, setModel] = useState();
    const [objectName, setObjectName] = useState();

    // Load model
    const loadModel = async () => {
        const loadedModel = await cocoSsd.load();
        setModel(loadedModel);
    };

    useEffect(() => {
        tf.ready().then(() => {
            loadModel();
        });
    }, []);

    const videoConstraints = {
        width: 400,
        height: 250,
        facingMode: "user",
    };

    // Make the prediction and console.log results
    const predict = async () => {
        if (webcamRef.current && model) {
            const video = webcamRef.current.video;
            if (video.readyState === 4) {
                const detection = await model.detect(video);
                if (detection.length > 0){
                    detection.map((result,i) =>{
                        setObjectName(result.class)
                    })
                }
            }
        }
    };

    useEffect(() => {
        if (model) {
            setInterval(predict, 300);
            onWebcamLoaded();
        }
    }, );

    return (
        <div className="absolute top-[16vh] z-10">
            <h3 className="text-center font-Outfit text-2xl mb-[2vh]">Object Present: {objectName ? objectName.toString() : "None"}</h3>
            <div role="application" aria-label="Webcam Viewer"  className="border-[20px] rounded-2xl border-indigo-dye">
                <Webcam
                    id="videoSource"
                    audio={false}
                    videoConstraints={videoConstraints}
                    ref={webcamRef}
                    role="img"
                    aria-label="Webcam Feed"
                />
            </div>
        </div>
    );
}

CVCamera.propTypes = {
    onWebcamLoaded: PropTypes.func.isRequired,
  };

export default CVCamera;