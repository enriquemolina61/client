const defaultUrl = 'https://apibikes.herokuapp.com/bicycles';

export class Api {
  static async getAllBicycle() {
    const response = await fetch(defaultUrl+'/find-all', {
      method: 'GET',
    });
    console.log(response);
    const bicycles = await response.json();
    console.log(bicycles);
    return bicycles;
  }

  static async createBicycle(newbike) {
    const response = await fetch(defaultUrl + '/create', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify(newbike),
    });
    const bicycle = await response.json();
    return bicycle;
  }
  static async updateBicycle(id, updBike) {
    const response = await fetch(defaultUrl + '/update/' + id, {
      method: 'PUT',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify(updBike),
    });
    const updatedTodo = await response.json();
    return updatedTodo;
  }
  static async deleteBicycle(id) {
    const response = await fetch(defaultUrl + '/delete/' + id, {
      method: 'DELETE',
      headers: new Headers({ 'Content-Type': 'application/json' }),
    });
    const deletedBicycle = await response.json();
    return deletedBicycle;
  }
}
