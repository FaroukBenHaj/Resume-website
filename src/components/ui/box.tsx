type BoxProperties={
    message: string
};
export function Box({message} : BoxProperties) {
  return (
    <div className=" sm:flex sm:justify-center">
      <div className="relative rounded-full px-3 py-2 text-sm leading-6 text-gray-100 ring-1 ring-white/50 ">
        {message}
      </div>
    </div>
  );
}

export function BoxSkills({message} : BoxProperties){
  return(
    <div className=" sm:flex sm:justify-center ">
      <div className="relative rounded-full px-3 py-2 text-sm leading-6 bg-input/70  text-gray-100 ring-1 ring-white/50 ">
        {message}
      </div>
    </div>
  )
}
