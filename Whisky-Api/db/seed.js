import WhiskySearch from '../models/whisky.js';
import { whiskySeedData } from '../db/whiskySeedData.js';
import { connectDb, disconnectDb, truncatedDb } from './helpers.js';


async function seed() {
    try {
        await connectDb();
        console.log('🤖 Connected to database');

        await truncatedDb();
        console.log('🤖 Database dropped')

        const whisky = await WhiskySearch.create(whiskySeedData);
        console.log(`🤖 ${whisky.length} whisky added to the Database`)
    } catch (err) {

        console.log('🤖 Something went wrong with seeding the database', err);
    }
    disconnectDb();
}

seed();