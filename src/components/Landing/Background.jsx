function binaryBG (){
    return(
        [...Array(10)].map((_, n) => (
            <p key={n} className={n % 2 === 0 ? "even" : "odd"}>
               {"" + Array(100).
               fill('0 1 0 1 0 0 1 1 0 0 0 0 1 1 0 1 0 1 0 1 0 1 1 0 0 0 1 1 1 1 0 0 1 1 1 0 1 1 1 0 1 0 1 0 0 1 1 0 0 0 0 1 1 0 1 0 1 0 1 0 1 1 0 0 0 1 1 1 1 0 0 1 1 1 0 1 1 1 0 1 0 1 0 0 1 1 0 0 0 0 1 1 0 1 0 1 0 1 0 1 1 0 ').
               join('')}
            </p>
        ))
    );
}

function Background(){
    return(
        <div>
            <div className="absolute inset-[13.7vh] z-[-2] w-[100vw] ml-[-6.4vw] bg-alabaster">
                {binaryBG()}
            </div>
        </div>
    );
}

export default Background