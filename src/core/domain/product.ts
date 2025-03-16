export class Product {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public description: string | null,
    public image: string,
    public category: string,
    public stock: number,
    public status: string,
    public createdAt: Date,
    public updatedAt: Date,
  ) {}
}
