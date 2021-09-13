import WhiskySearch from '../whisky/whisky.js'

export const getAllWhisky = async (req, res, next) => {
    try {
        const whisky = await WhiskySearch.find();
        return res.status(200).json(whisky);
    } catch (err) {
        next(err);
    }
}


async function createWhisky(req, res, next) {
    try {
        const newWhisky = await WhiskySearch.create(req.body)
        return res.status(201).json(newWhisky)
    } catch (err) {
        next(err)
    }
}

async function getWhisky(req, res, next) {
    const id = req.params.id

    try {
        const whisky = await WhiskySearch.findById(id)
        return res.status(200).json(whisky)
    } catch (err) {
        next(err)
    }
}

async function deleteWhisky(req, res, next) {
    const id = req.params.id

    try {
        const whisky = await WhiskySearch.findByIdAndDelete(id)
        return res.status(200).json(whisky)
    } catch (err) {
        next(err)
    }
}

async function updateWhisky(req, res, next) {

    try {
        const id = req.params.id
        const whisky = await WhiskySearch.findByIdAndUpdate(id, req.body, { new: true })
        return res.status(200).json(whisky)
    } catch (err) {
        next(err)
    }
}

export default {
    getAllWhisky,
    createWhisky,
    getWhisky,
    deleteWhisky,
    updateWhisky,
}
