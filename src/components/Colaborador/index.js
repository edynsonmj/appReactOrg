import "./Colaborador.css"
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from "react-icons/ai"

const Colaborador = (props) => {
    const {nombre, puesto, foto, equipo, id, fav} = props.datos
    const {colorPrimario, eliminarColaborador, like} = props

    return <div className="colaborador">
        <AiFillCloseCircle onClick={() => eliminarColaborador(id)} className="eliminar"/>
        <div className="encabezado" style={{backgroundColor:colorPrimario}}>
            <img src={foto} alt={nombre}></img>
            <div className="info">
                <h4>{nombre}</h4>
                <h5>{puesto}</h5>
                {fav? <AiFillHeart color="red" onClick={() => like(id)}></AiFillHeart> : <AiOutlineHeart onClick={() => like(id)}></AiOutlineHeart>}
            </div>
        </div>
    </div>
}

export default Colaborador