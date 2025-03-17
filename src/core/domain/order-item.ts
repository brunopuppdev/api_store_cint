import { Order } from '~/core/domain/order';
import { Product } from '~/core/domain/product';

export class OrderItem {
  constructor(
    public id: number,
    public orderId: number,
    public order: Order,
    public productId: number,
    public product: Product,
    public quantity: number,
    public unitPrice: number,
    public cashbackAmount: number = 0,
    public pointsEarned: number = 0,
  ) {}
}
