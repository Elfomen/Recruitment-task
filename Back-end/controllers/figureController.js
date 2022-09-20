import Figures from "../model/figures.js"

const figureController = {
    getAllFigures: (req , res) => {
        const data = Figures
        res.status(200).send(data)
    } , 
}

export default figureController