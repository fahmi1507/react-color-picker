import { v4 as uuidv4 } from 'uuid';

export const generateColor = (n) => {
    const result = [];
    for (let i = 0; i < n; i++) {
        const arrOfColor = []

        for (let j = 0; j < n*n; j++) {
            const color = `(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
            
            arrOfColor.push({
                id: uuidv4(),
                color,
            })
            
        }

        result.push(arrOfColor)

    }

    return result;
}
