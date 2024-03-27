import { ReactNode } from "react";
import moon from "../../public/moon.png";
import "./background.css";

interface BackgroundContainerProps {
   children: ReactNode;
}

const BackgroundContainer: React.FC<BackgroundContainerProps> = ({
   children,
}) => {
   return (
      <div className="background-container">
         <img src={moon} alt="moon" />
         <div className="stars"></div>
         <div className="twinkling"></div>
         <div className="clouds"></div>
         {children}
      </div>
   );
};

export default BackgroundContainer;
