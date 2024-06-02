function Body (){
    return(
        <div className="px-40 h-[72.6vh] flex items-center justify-between z-0 ">
            <div className="flex-col basis-[40%]">
                <p className="border-indigo-dye bg-indigo-dye w-[20%] font-bold text-ivory
                pl-[5px]">Title 0.98</p>
                <p className="border-indigo-dye border-4 w-[77%] text-3xl 
                font-bold font-Outfit mb-3 p-2">A CV Based Website</p>
                <p className="text-justify font-Roboto font-medium mb-3">This website is a simple project of mine that demonstrates
                the abilities of both computer vision and machine learning</p>
                <button className="rounded-[3rem] w-64 h-20 items-center flex justify-center bg-indigo-dye
                 text-ivory border-4 font-bold text-4xl font-Outfit border-[hsla(0,0%,0%,0)] drop-shadow-2xl hover:bg-[rgb(88,179,185)] hover:transition-colors hover:ease-in">
                    <a href="/CVApp">Get Started</a>
                </button>
            </div>
            <div>
                <img src="../src/assets/cveye.png" alt="cveye-image" className="drop-shadow-3xl"></img>
            </div>
        </div>
    );
}

export default Body