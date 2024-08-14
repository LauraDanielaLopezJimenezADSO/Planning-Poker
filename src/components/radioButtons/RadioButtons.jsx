import "./RadioButtons.css"

export default function RadioButtons({texto,id}){
    return(
        <>
            <div className="contenedor">
                <label htmlFor={id} className="buttonRadio">{texto}</label>
                <input type="radio" id={id} name="radioButton" className="radio"/>
            </div>
        </>
        
    )
}