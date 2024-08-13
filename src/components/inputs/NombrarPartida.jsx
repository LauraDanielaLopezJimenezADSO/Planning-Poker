import "./NombrarPartida.css"
export default function NombrarPartida({ texto}){
    return(
        <div >
            <form action="" className="input" noValidate>
                <label htmlFor="nombrePartida" className="input__label">{texto}</label>
                <input type="text" id="nombrePartida" className="input__input" autoComplete="off" required/>
            </form>
        </div>
    )
}