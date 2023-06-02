import { ItemContainer } from "./ContainerIcons";
import { BsDatabaseFill } from "react-icons/bs";
import { SiReact, SiPython, SiIbmcloud, SiDjango } from "react-icons/si";

export const SectionAprendiendo = () => {
  return (
    <>
      <ItemContainer text={"Estudiando"}>
        <SiReact className="hover:text-slate-700" size={30} />
        <SiPython className="hover:text-slate-700" size={30} />
        <SiIbmcloud className="hover:text-slate-700" size={30} />
        <SiDjango className="hover:text-slate-700" size={30} />
        <BsDatabaseFill className="hover:text-slate-700" size={30} />
      </ItemContainer>
    </>
  );
};
