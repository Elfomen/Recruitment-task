import Figures from "../model/figures.js"

// these are the controller for our figures
const figureController = {
    getAllFigures: (req , res) => { // the all the posible figures from the database
        const data = Figures
        res.status(200).send(data)
    } , 
}

export default figureController