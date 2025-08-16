import { APIRequestContext, expect } from '@playwright/test';

export class SampleApi {
  private request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  // Send POST /search with JSON body
  async addObject(body: Record<string, any>) {
    const response = await this.request.post('/objects', {
      headers: {
        'Content-Type': 'application/json',
      },
      data: body
    });

    expect(response.ok()).toBeTruthy();

    return response.json();
  }
}