import request from 'supertest';
import mongoose, { Schema } from 'mongoose';
import globalConfig from '../globalConfig.json';
import App from "./app";

var app = new App(false).app;

describe('Api Endpoints', () => {

    it('should create a new student', async () => {
        const res = await request(app)
            .put('/student')
            .send({
                name: 'James'
            })
        expect(res.status).toEqual(200)
        expect(res.body).toMatchObject({
            name: 'James'
        })
    })

    it('should return empty student list', async () => {
        const res = await request(app)
            .get('/students')
            .send()
        expect(res.status).toEqual(200)
        expect(res.body).toEqual([])
    })

    it('should return total 2 students', async () => {
        await request(app)
            .put('/student')
            .send({
                name: 'James'
            })
        await request(app)
            .put('/student')
            .send({
                name: 'Lee'
            })
        const res = await request(app)
            .get('/students')
            .send()
        expect(res.status).toEqual(200)
        expect(res.body).toMatchObject([{
            name: 'James'
        },
        { name: 'Lee' }
        ])
    })

    it('should create a new course', async () => {
        const res = await request(app)
            .put('/course')
            .send({
                name: 'Computer Programming'
            })
        expect(res.status).toEqual(200)
        expect(res.body).toMatchObject({
            name: 'Computer Programming'
        })
    })
})