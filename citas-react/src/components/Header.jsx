function Header({title}){
    return (
        <div>
            <h1 className="text-2xl font-black text-center md:w-2/3 mx-auto">
               {title} <br />
               <span className="text-indigo-600">Veterinaria</span>
            </h1>
        </div>
    )
}

export default Header
