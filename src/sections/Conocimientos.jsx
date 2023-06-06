import {
  SiJavascript,
  SiTailwindcss,
  SiGithub,
  SiGit,
  SiReact,
} from "react-icons/si";
import { FaCss3, FaHtml5 } from "react-icons/fa";
import { ItemContainer } from "../components/ContainerIcons";

export const SectionConocimientos = () => {
  return (
    <>
      <ItemContainer text="Mis Conocimientos 🧠">
        <SiReact className="hover:text-slate-700" size={30} name="React" />
        <SiJavascript
          className="hover:text-slate-700"
          size={30}
          name="JavaScript"
        />
        <SiTailwindcss
          className="hover:text-slate-700"
          size={30}
          name="Tailwind"
        />
        <SiGithub className="hover:text-slate-700" size={30} name="GitHub" />
        <SiGit className="hover:text-slate-700" size={30} name="Git" />
        <FaHtml5 className="hover:text-slate-700" size={30} name="HTML5" />
        <FaCss3 className="hover:text-slate-700" size={30} name="CSS" />
      </ItemContainer>
    </>
  );
};
