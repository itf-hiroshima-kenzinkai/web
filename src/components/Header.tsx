import  './src/styles/global.css';
import {HeaderButton} from '../components/HeaderButton.tsx';


export const Header = () => {
  return (
    <div
      className ="
     flex 
     gap-4
      ">
    <HeaderButton 
        color = "bg_red"
      >
     ABOUT 
    </HeaderButton>

    <HeaderButton >
     GOODS 
    </HeaderButton>

    <HeaderButton >
     50th PAGE
    </HeaderButton>

    <HeaderButton >
     CONTACT
    </HeaderButton>
</div>

  );
};
