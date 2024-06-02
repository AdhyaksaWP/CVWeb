function CVMain(){
    return (
        <div className="absolute w-[100vw] h-[100vh]">
            <button className="absolute right-[3%] top-[5%] rounded-[3rem] w-32 h-12 bg-indigo-dye
                 text-ivory border-4 font-bold text-2xl font-Outfit border-[hsla(0,0%,0%,0)] drop-shadow-2xl hover:bg-[rgb(88,179,185)] hover:transition-colors hover:ease-in">
                <a href="/#">Home</a>
            </button>
            <div className="absolute bottom-[15vh] flex flex-col items-center w-[100%] font-Outfit text-xl text-center">
                <p>For more details about what objects can be detected in this demo, visit the 
                    Coco SSD Documentation here: 
                    <br></br>
                    <a href="https://github.com/tensorflow/tfjs-models/blob/master/coco-ssd/src/classes.ts" className="text-prussian-blue font-bold">
                        https://github.com/tensorflow/tfjs-models/blob/master/coco-ssd/src/classes.ts
                    </a>
                </p>
            </div>
        </div>
    );
}

export default CVMain