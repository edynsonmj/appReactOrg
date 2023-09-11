import "./ListaOpciones.css"
const ListaOpciones = (props) => {
    //metodo map, recibe un callback, map -> arreglo.map((equipo, index) => {
    //return <option> </option>
    //})

    const manejarCambio = (e) =>{
        props.actualizarValor(e.target.value)
    }

    return (
        <div className="lista-opciones">
            <label>Equipos</label>
            <select value={props.valor} onChange={manejarCambio}>
                <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
                { 
                    props.equipos.map((equipos,index) => <option key={index}>{equipos}</option>)
                }
            </select>
        </div>
    )
}
export default ListaOpciones;