export interface IShoes {
    id: number,
    name: string,
    image: string,
    description: string,
    color: string,
    price: number,
}

export interface IShoesList extends IShoes {
    amount: number
  }