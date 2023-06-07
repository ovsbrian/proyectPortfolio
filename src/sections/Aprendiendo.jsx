import { ItemContainer } from "../components/ContainerIcons";
import { BsDatabaseFill } from "react-icons/bs";
import { SiPython, SiIbmcloud, SiDjango } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
export const SectionAprendiendo = () => {
  return (
    <>
      <ItemContainer text={"Estudiando 📚"}>
        <TbBrandReactNative
          className="hover:text-slate-700"
          name="React Native"
          size={30}
        />
        <SiPython className="hover:text-slate-700" size={30} name="Python" />
        <SiIbmcloud
          className="hover:text-slate-700"
          size={30}
          name="IBM Cloud"
        />
        <SiDjango className="hover:text-slate-700" size={30} name="Django" />
        <BsDatabaseFill
          className="hover:text-slate-700"
          size={30}
          name="Base de datos"
        />
      </ItemContainer>
    </>
  );
};
