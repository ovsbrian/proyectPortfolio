import {
  SiGit,
  SiGithub,
  SiJavascript,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";

import { FaHtml5 } from "react-icons/fa";
import { ItemContainer } from "../components/ContainerIcons";
import { Container } from "../components/Container";
import { Tecnologia } from "../components/Tecnologias";

export const Projects = () => {
  return (
    <>
      <ItemContainer text={"Mis Proyectos 📂"}>
        <div className="w-full flex flex-col gap-4 ">
          <Container
            img={"./src/assets/project1.png"}
            titulo={"App Calculator"}
            info={
              "loremdasdasdasdasd asd sada dasdasdasdasdd adas dadas asdasdsad sdasd dasd adasasd "
            }
            url={"https://ovsbrian.github.io/ageCalculatorApp/"}
          >
            <Tecnologia icon={<SiReact />} />
            <Tecnologia icon={<SiTailwindcss />} />
            <Tecnologia icon={<SiJavascript />} />
            <Tecnologia icon={<SiGithub />} />
            <Tecnologia icon={<SiGit />} />
            <Tecnologia icon={<FaHtml5 />} />
          </Container>
        </div>
      </ItemContainer>
    </>
  );
};
