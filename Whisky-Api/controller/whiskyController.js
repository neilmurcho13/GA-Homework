import WhiskySearch from '../whisky/whisky.js'

export const getAllWhisky = async (req, res, next) => {
    try {
        const whisky = await WhiskySearch.find();
        return res.status(200).json(whisky);
    } catch (err) {
        next(err);
    }
}
