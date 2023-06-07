import "./App.css";
import { ContainerPage } from "./components/ContainerPage";
import { SectionAprendiendo } from "./sections/Aprendiendo";
import { SectionConocimientos } from "./sections/Conocimientos";
import { Projects } from "./sections/Projects";

function App() {
  return (
    <>
      <ContainerPage>
        <div className="mt-5 flex flex-col gap-5 select-none ">
          <h2 className="text-4xl font-semibold">Hola, soy Brian!</h2>
          <p className="font-medium">
            <b>Developer Web Jr </b>de Uruguay. Me apasiona crear sitios web y
            aplicaciones <b>atractivas</b> y <b>funcionales</b> utilizando
            tecnologías modernas.
          </p>
          <p className="font-medium">
            Soy <b>egresado</b> del curso de <b>Jóvenes a Programar</b> de
            <b> Plan Ceibal</b>. Actualmente estoy realizando el curso de
            <b> FullStack</b> de <b>IBM</b> por Coursera, donde estoy
            aprendiendo sobre desarrollo de aplicaciones en la nube usando
            <span className="text-orange-600"> HTML5</span>,{" "}
            <span className="text-blue-600">CSS3</span>,{" "}
            <span className="text-yellow-600">JavaScript</span>,{" "}
            <span className="text-green-500">Node.js</span>,
            <span className="text-blue-500"> Python</span>,{" "}
            <span className="text-green-800">Django</span>, y más. Me gusta
            experimentar y aprender nuevas tecnologías, siempre buscando una
            <b> interfaz agradable</b> para el usuario.
          </p>
        </div>
        <SectionConocimientos />
        <SectionAprendiendo />
        <Projects />
      </ContainerPage>
    </>
  );
}

export default App;
