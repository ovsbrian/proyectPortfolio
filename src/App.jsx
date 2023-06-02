import "./App.css";
import { Border } from "./components/Border";
import { SectionAprendiendo } from "./components/Aprendiendo";
import { SectionConocimientos } from "./components/Conocimientos";
import { ItemContainer } from "./components/ContainerIcons";
import { Container } from "./components/Container";
import { Tecnologia } from "./components/Tecnologias";
import {
  SiJavascript,
  SiTailwindcss,
  SiGithub,
  SiGit,
  SiReact,
} from "react-icons/si";

function App() {
  return (
    <>
      <Border>
        <div className="mt-9 flex flex-col gap-5 ">
          <h2 className="text-4xl font-semibold">Hola, soy Brian!</h2>
          <p className="font-medium">
            Soy un Developer Web Jr de Uruguay. Me apasiona crear sitios web y
            aplicaciones atractivas y funcionales utilizando tecnologías
            modernas.
          </p>
        </div>
        <SectionConocimientos />
        <SectionAprendiendo />
        <ItemContainer text={"My Projects"}>
          <div className="w-full flex flex-col gap-4 ">
            <Container
              img={"./src/assets/project1.png"}
              titulo={"App Calculator"}
              info={
                "loremdasdasdasdasd asd sada dasdasdasdasdd adas dadas asdasdsad sdasd dasd adasasd "
              }
            >
              <Tecnologia icon={<SiReact />} />
              <Tecnologia icon={<SiTailwindcss />} />
              <Tecnologia icon={<SiJavascript />} />
              <Tecnologia icon={<SiGithub />} />
              <Tecnologia icon={<SiGit />} />
            </Container>
            <Container
              img={"./src/assets/project1.png"}
              titulo={"xd"}
            ></Container>
            <Container img={"./src/assets/project1.png"}>hola wenas</Container>
          </div>
        </ItemContainer>
      </Border>
    </>
  );
}

export default App;
