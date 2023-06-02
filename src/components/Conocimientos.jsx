import {
  SiJavascript,
  SiTailwindcss,
  SiGithub,
  SiGit,
  SiReact,
} from "react-icons/si";
import { FaCss3, FaHtml5 } from "react-icons/fa";
import { ItemContainer } from "./ContainerIcons";

export const SectionConocimientos = () => {
  return (
    <>
      <ItemContainer text="Mis Conocimientos">
        <SiReact className="hover:text-slate-700  " size={30} />
        <SiJavascript className="hover:text-slate-700" size={30} />
        <SiTailwindcss className="hover:text-slate-700" size={30} />
        <SiGithub className="hover:text-slate-700" size={30} />
        <SiGit className="hover:text-slate-700" size={30} />
        <FaHtml5 className="hover:text-slate-700" size={30} />
        <FaCss3 className="hover:text-slate-700" size={30} />
      </ItemContainer>
    </>
  );
};
