import { test, expect } from '@playwright/test';
import { SampleApi } from '../clients/sampleApi';

test('should search items via API', async ({ request }) => {
  const sampleApi = new SampleApi(request);

  const body = {
    "name": "Apple MacBook Pro 16",
    "data": {
      "year": 2019,
      "price": 1849.99,
      "CPU model": "Intel Core i9",
      "Hard disk size": "1 TB"
    }
  };
  const result = await sampleApi.addObject(body);
  expect(result.name).toBe("Apple MacBook Pro 16");
});

