import supertest from 'supertest';
import path from 'path';
import fs from 'fs-extra';
import Image from '../routes/imageResizeing'
import app from '..';

const request = supertest(app);
describe('Test responses from endpoints', () => {
  describe('endpoint: /', (): void => {
    it('gets /', async (): Promise<void> => {
      const response: supertest.Response = await request.get('/');
      expect(response.status).toBe(200);
    });
  });
  describe('endpoint: /resizeimage', () => {
    it('gets /resizeimage?filename=fjord (valid args)', async (): Promise<void> => {
      const response: supertest.Response = await request.get('/resizeimage?filename=fjord');
      expect(response.status).toBe(200);
    });
    it('gets /resizeimage?filename=fjord&width=200&height=200 (valid args)', async (): Promise<void> => {
      const response: supertest.Response = await request.get('/resizeimage?filename=fjord&width=200&height=200');
      expect(response.status).toBe(200);
    });
    it('gets /resizeimage?filename=fjord&width=200 (valid args)', async (): Promise<void> => {
      const response: supertest.Response = await request.get('/resizeimage?filename=fjord&width=200');
      expect(response.status).toBe(200);
    });
    it('gets /resizeimage?filename=fjord&height=200 (valid args)', async (): Promise<void> => {
      const response: supertest.Response = await request.get('/resizeimage?filename=fjord&height=200');
      expect(response.status).toBe(200);
    });
  });
afterAll(async (): Promise<void> => {
  const resizedImageThumb: string = path.resolve(Image.thumbsPath,`${Date.now()} + 'fjord.jpg'`);
    try {
     await fs.access(resizedImageThumb);
     fs.unlink(resizedImageThumb);
    } catch { }
  });
});











































