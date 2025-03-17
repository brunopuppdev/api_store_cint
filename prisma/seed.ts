import { logger } from '../src/infrastructure/config/logger/logger.singleton';
import { CashbackType, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {

  await prisma.product.createMany({
    data: [
      {
        name: 'Nike Air Max 270',
        price: 150.0,
        description: 'O Nike Air Max 270 oferece amortecimento incrível e estilo moderno.',
        image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/9acf5d2e-5a7e-4d8e-9f5a-5a5e5d2e9acf/air-max-270-mens-shoes-KkLcGR.png',
        category: 'Tênis',
        stock: 50,
        status: 'available',
        cashbackType: CashbackType.PERCENTAGE,
        cashbackValue: 5.0,
        pointsValue: 150,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Adidas Ultraboost 21',
        price: 180.0,
        description: 'O Adidas Ultraboost 21 é conhecido por seu conforto e desempenho.',
        image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/9b9b9b9b9b9b9b9b9b9b9b9b9b9b9b9b/ultraboost-21-shoes.jpg',
        category: 'Tênis',
        stock: 30,
        status: 'available',
        cashbackType: CashbackType.FIXED_VALUE,
        cashbackValue: 20.0,
        pointsValue: 180,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Puma RS-X',
        price: 120.0,
        description: 'O Puma RS-X combina design retrô com tecnologia moderna.',
        image: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:f5f5f5/rs-x-toys-shoes.jpg',
        category: 'Tênis',
        stock: 20,
        status: 'available',
        cashbackType: CashbackType.PERCENTAGE,
        cashbackValue: 3.5,
        pointsValue: 120,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'New Balance 574',
        price: 100.0,
        description: 'O New Balance 574 é um clássico atemporal com conforto duradouro.',
        image: 'https://nb.scene7.com/is/image/NB/574v1_nb_02_i?$dw_detail_main_lg$',
        category: 'Tênis',
        stock: 40,
        status: 'available',
        cashbackType: CashbackType.PERCENTAGE,
        cashbackValue: 4.0,
        pointsValue: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Asics Gel-Kayano 28',
        price: 160.0,
        description: 'O Asics Gel-Kayano 28 é ideal para corridas de longa distância.',
        image: 'https://www.asics.com/on/demandware.static/-/Sites-ASICS/default/dw9b9b9b9b/images/gel-kayano-28.jpg',
        category: 'Tênis',
        stock: 10,
        status: 'available',
        cashbackType: CashbackType.FIXED_VALUE,
        cashbackValue: 15.0,
        pointsValue: 160,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],

  });

  logger.log('Seed completed successfully!', 'PrismaSeed');
}

main()
  .catch((e) => {
    logger.error('Seed failed', e.message, 'PrismaSeed');
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });