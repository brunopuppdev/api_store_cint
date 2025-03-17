import { CashbackType } from '@prisma/client';

export class Product {
  constructor(
    public id: number,
    public name: string,
    public description: string | null,
    public price: number,
    public stock: number,
    public cashbackType: CashbackType,
    public cashbackValue: number,
    public pointsValue: number,
    public image: string,
    public category: string,
    public status: string,
    public createdAt: Date,
    public updatedAt: Date,
  ) {}
}
