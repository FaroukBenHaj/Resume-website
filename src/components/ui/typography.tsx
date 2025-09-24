type TypoProperties={
    header: string
};

export function H1({header} : TypoProperties){
    return(
        <h1 className="xl:text-6xl lg:text-5xl pb-3 md:text-4xl text-3xl  bg-gradient-to-r from-orange-300 via-blue-300 to-purple-400 bg-clip-text text-transparent  font-black text-balance ">
		    {header}
		</h1>
    );
}

export function H2({header} : TypoProperties){
    return(
           <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-300 to-orange-400 bg-clip-text text-transparent text-balance ">
            {header}
            </h2>

    );
}