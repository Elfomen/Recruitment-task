import Units from "../model/unit.js"

const unitController = {
    getAllUnits: (req , res) => { // gets all the posible conversion units from the database
        const data = Units

        res.status(200).send(data)
    }
}

export default unitController