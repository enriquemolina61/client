const defaultUrl = 'http://localhost:3000/bicycles';

export class Api {
  static async getAllBicycle() {
    const response = await fetch(defaultUrl, {
      method: 'GET',
    });
    console.log(response);
    const bicycles = await response.json();
    console.log(bicycles);
    return bicycles;
  }

  static async createBicycle() {
    const response = await fetch(defaultUrl, {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
    });
    const bicycle = await response.json();
    return bicycle;
  }
}
