import "./App.css";
import { ContainerPage } from "./components/ContainerPage";
import { SectionAprendiendo } from "./sections/Aprendiendo";
import { SectionConocimientos } from "./sections/Conocimientos";
import { Projects } from "./sections/Projects";
import { Estudios } from "./sections/Estudios";
function App() {
  return (
    <>
      <ContainerPage>
        <div className="mt-9 flex flex-col gap-5  select-none ">
          <h2 className="text-4xl font-semibold">Hola, soy Brian!</h2>
          <p className="font-medium">
            Soy un Developer Web Jr de Uruguay. Me apasiona crear sitios web y
            aplicaciones atractivas y funcionales utilizando tecnologías
            modernas.
          </p>
        </div>
        <SectionConocimientos />
        <SectionAprendiendo />
        <Projects />
        <Estudios />
      </ContainerPage>
    </>
  );
}

export default App;
