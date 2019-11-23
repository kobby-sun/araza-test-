import mongoose, { Schema } from 'mongoose';
import globalConfig from './globalConfig.json';

beforeAll(async () => {
    await mongoose.connect(globalConfig.mongoUri, { useNewUrlParser: true, useCreateIndex: true }, (err) => {
        if (err) {
            console.error(err);
            process.exit(1);
        }
    });
})

beforeEach(async () => {
    const collections = await mongoose.connection.db.listCollections().toArray();
    await collections
        .map(({ name }) => name)
        .map(collection => mongoose.connection.db.collection(collection).drop())
})

afterAll(async () => {
    await mongoose.disconnect();
})

afterEach(() => {

})