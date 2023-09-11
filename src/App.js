import { useState } from 'react'; //importando un hook
import './App.css';
import Header from './components/Header/Header';
import Formulario from './components/Formulario/Formulario';
import MiOrg from './components/MiOrg';
import Equipo from './components/Equipo';
import Footer from './components/Footer';
import { v4 as uuid} from 'uuid';
/*
https://github.com/harlandlohora.png

https://github.com/genesysaluralatam.png

https://github.com/JeanmarieAluraLatam.png

https://github.com/christianpva.png

https://github.com/JoseDarioGonzalezCha.png
*/
function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false);
  const [colaboradores, actualizarColaboradores] = useState([
    {
      id: uuid(),
      equipo:"Front End",
      foto:"https://edynsonmj.github.io/portafolio_edynson/assets/img/perfil-caricatura.png",
      nombre:"Edynson Muñoz Jimenez",
      puesto:"Estudiante",
      fav: true
    },
    {
      id: uuid(),
      equipo: "Front End",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor",
      fav: false
    },
    {
      id: uuid(),
      equipo: "UX y Diseño",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jeanmarie Quijada",
      puesto: "Instructora en Alura Latam",
      fav: true
    },
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://github.com/christianpva.png",
      nombre: "Christian Velasco",
      puesto: "Head de alura latam e instructor",
      fav: false
    },
    {
      id: uuid(),
      equipo: "Innovación y Gestión",
      foto: "https://github.com/JoseDarioGonzalezCha.png",
      nombre: "Jose Gonzalez",
      puesto: "Dev FullStack",
      fav: false
    },
  ]);
  const [equipos, actualizarEquipos] = useState(
    [
      {
        id: uuid(),
        titulo: "Programación",
        colorPrimario: "#57C278",
        colorSecundario: "#D9F7E9"
      },
      {
        id: uuid(),
        titulo: "Front End",
        colorPrimario: "#82CFFA",
        colorSecundario: "#E8F8FF"
      },
      {
        id: uuid(),
        titulo: "Data Science",
        colorPrimario: "#A6D157",
        colorSecundario: "#F0F8E2"
      },
      {
        id: uuid(),
        titulo: "Devops",
        colorPrimario: "#E06B69",
        colorSecundario: "#FDE7E8"
      },
      {
        id: uuid(),
        titulo: "UX y Diseño",
        colorPrimario: "#DB6EBF",
        colorSecundario: "#FAE9F5"
      },
      {
        id: uuid(),
        titulo: "Móvil",
        colorPrimario: "#FFBA05",
        colorSecundario: "#FFF5D9"
      },
      {
        id: uuid(),
        titulo: "Innovación y Gestión",
        colorPrimario: "#FF8A29",
        colorSecundario: "#FFEEDF"
      }
    ]
  )
  
  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  const registrarColaborador = (colaborador) => {
    console.log("nuevo colaborador", colaborador)
    actualizarColaboradores([...colaboradores,colaborador])
  }

  const eliminarColaborador = (id) =>{
    const nuevosColaboradores = colaboradores.filter((colaborador)=> colaborador.id!==id);
    actualizarColaboradores(nuevosColaboradores)
  }

  //actualizar color de equipo
  const actualizarColor = (color, id) =>{
    const equiposActualizados = equipos.map((equipo)=>{
      if(equipo.id === id){
        equipo.colorPrimario = color;
      }
      return equipo
    })
    actualizarEquipos(equiposActualizados)
  }

  //crear Equipo
  const crearEquipo = (nuevoEquipo) =>{
    actualizarEquipos([...equipos,{...nuevoEquipo,id:uuid()}])
  }

  const like = (id) =>{
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if(colaborador.id===id){
        colaborador.fav = !colaborador.fav;
      }
      return colaborador;
    })
    actualizarColaboradores(colaboradoresActualizados)
  }

  return (
    <div>
      <Header></Header>
      {mostrarFormulario && <Formulario 
        equipos={equipos.map((equipo)=> equipo.titulo)}
        registrarColaborador={registrarColaborador}
        crearEquipo={crearEquipo}
      />}
      <MiOrg cambiarMostrar={cambiarMostrar}></MiOrg>
      {
        equipos.map( (equipo)=> <Equipo 
          datos={equipo} 
          key={equipo.id}
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
          eliminarColaborador = {eliminarColaborador}
          actualizarColor= {actualizarColor}
          like = {like}
          />)
      }
      <Footer></Footer>
    </div>
  );
}

export default App;
