import { useContext } from "react"
import DataContext from "./Context/DataContext"

const Generator = () => {

    const { type, color, generateColors, fontColor } = useContext(DataContext);
    console.log(fontColor)

    return (

        <main className='main' style={{color: `${fontColor}`}}>

            <h3 className="main__h3">{type === 'hex' ? <>Hex</> : <>RGB</>} color</h3>

            <div className="main__container--generator">

                <h1 className="main__h1">{color}</h1>

                <button className="main__btn"
                    onClick={generateColors}
                >Generate New Color</button>

            </div>

        </main>

    )

}

export default Generator
