import Units from "../model/unit.js"

const unitController = {
    getAllUnits: (req , res) => {
        const data = Units

        res.status(200).send(data)
    }
}

export default unitController