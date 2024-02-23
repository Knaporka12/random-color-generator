import { createContext, useState} from "react";

const DataContext = createContext({});

export const ContextProvider = ({children}) => {

    const [type, setType] = useState('hex');
    const [color, setColor] = useState('#ffffff');

    const generateColors = () => {

        if (type === 'rgb'){

            const rgb1 = Math.floor(Math.random() * 256 );
            const rgb2 = Math.floor(Math.random() * 256 );
            const rgb3 = Math.floor(Math.random() * 256 );
            const rgbColor = `RGB(${rgb1}, ${rgb2}, ${rgb3})`
            setColor(rgbColor);

        } else {
        
            const hexOptions = '0123456789ABCDEF';
            let hexColor = '#';

            for (let i = 0; i < 6; i++){

                const hex = hexOptions[Math.floor(Math.random() * 16 )];
                hexColor+=hex;

            }

            setColor(hexColor);

        }

    }

    const rgbToHex = () => {

        function toHex(num) {
            const hex = num.toString(16);
            return hex.length == 1 ? "0" + hex : hex;
        }

        let i = 0;
        let rgb = '';
        while (i < color.length - 1 ){
            
            while(!isNaN(color[i])){

                rgb+=color[i];
                i++;

            }

            i++;
        }


        const rgbTab = rgb.split(" ");

        const r = Number(rgbTab[0]);
        const g = Number(rgbTab[1]);
        const b = Number(rgbTab[2]);
        
        const hex = "#" + toHex(r) + toHex(g) + toHex(b);

        setColor(hex);

    }

    const hexToRgb = () => {

        const hex = color.replace(/^#/, '');

        let r, g, b;
        r = parseInt(hex.substring(0, 2), 16);
        g = parseInt(hex.substring(2, 4), 16);
        b = parseInt(hex.substring(4, 6), 16);

        const rgb =  `RGB(${r}, ${g}, ${b})`;
        setColor(rgb);

    }

    return (

        <DataContext.Provider value = {{

            type,
            setType,
            color,
            setColor,
            generateColors,
            rgbToHex,
            hexToRgb

        }}>
            {children}
        </DataContext.Provider>

    )
}

export default DataContext;