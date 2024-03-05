import { useContext } from "react"
import DataContext from "./Context/DataContext"

const Header = () => {

  const {type, setType, rgbToHex, hexToRgb, fontColor} = useContext(DataContext);
  
  const handleClick = () => {

    if (type === 'hex'){
      setType('rgb');
      hexToRgb();
    } else {
      setType('hex');
      rgbToHex();
    }

  }

  return (

    <header className='header' style={{color: `${fontColor}`}}>

      <h2 className="header__h2">Random HEX and RGB color generator</h2>

      <button className="header__btn"
        onClick={handleClick}
      >Switch to {type === 'hex' ? <>RGB</> : <>HEX</>}</button>

        
    </header>

  )

}

export default Header
