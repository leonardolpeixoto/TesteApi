import app from '../src/app';
import server from '../src/server';
import supertest from 'supertest';
import chai from 'chai';


global.request = supertest(server);
global.app = app;
global.expect = chai.expect;
