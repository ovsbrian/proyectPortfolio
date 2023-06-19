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
            img={"/project3.png"}
            titulo={"📆 App Age Calculator 📅"}
            url={"https://ovsbrian.github.io/ageCalculatorApp/"}
            info={[
              <Tecnologia key="react" icon={<SiReact />} />,
              <Tecnologia key="tailwind" icon={<SiTailwindcss />} />,
              <Tecnologia key="javascript" icon={<SiJavascript />} />,
              <Tecnologia key="github" icon={<SiGithub />} />,
              <Tecnologia key="git" icon={<SiGit />} />,
              <Tecnologia key="html5" icon={<FaHtml5 />} />,
            ]}
          >
            <p>
              Descubre cuántos <b>días</b> has vivido con esta <b>aplicación</b>{" "}
              sencilla y divertida. Solo ingresa tu <b>fecha de nacimiento</b> y
              obtén tu <b>edad exacta</b> en años, meses y días.{" "}
              <b>Se adapta a la pantalla de tu celular </b>para que puedas
              consultarla en cualquier momento y lugar.
            </p>
          </Container>
        </div>
      </ItemContainer>
    </>
  );
};
