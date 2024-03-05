import { createContext, useState } from "react";

const DataContext = createContext({});

export const ContextProvider = ({ children }) => {

    const [type, setType] = useState('hex');
    const [color, setColor] = useState('#ffffff');
    const [fontColor, setFontColor] = useState('#000000');

    const randomColorUtility = (range) => {
        return Math.floor(Math.random() * range);
    }

    const generateColors = () => {

        if (type === 'rgb') {

            let rgb = [];
            let darkCount = 0;

            for (let i = 0; i < 3; i++){
                rgb[i] = randomColorUtility(256);
                if (rgb[i] < 60) darkCount ++;
            }

            darkCount === 3 ? setFontColor('#ffffff') : setFontColor('#000000')
            const rgbColor = `RGB(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`
            setColor(rgbColor);

        } else {

            const hexOptions = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
            let hexColor = '#';
            let darkCount = 0;
            for (let i = 0; i < 6; i++) {
                
                const hex = hexOptions[randomColorUtility(16)];
                hexColor += hex;

                if (i % 2 == 0){
                    if (!isNaN(hex)){
                        if (hex < 4) darkCount++
                    }
                }

            }

            darkCount === 3 ? setFontColor('#ffffff') : setFontColor('#000000')
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
        while (i < color.length - 1) {

            while (!isNaN(color[i])) {

                rgb += color[i];
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

        const rgb = `RGB(${r}, ${g}, ${b})`;
        setColor(rgb);

    }

    return (

        <DataContext.Provider value={{

            type,
            setType,
            color,
            setColor,
            generateColors,
            rgbToHex,
            hexToRgb,
            fontColor

        }}>
            {children}
        </DataContext.Provider>

    )
}

export default DataContext;