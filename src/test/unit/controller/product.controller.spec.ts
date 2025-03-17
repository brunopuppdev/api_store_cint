import { Test, TestingModule } from '@nestjs/testing';

import { ProductController } from '~/application/controllers/product.controller';
import { TOKENS } from '~/core/constants/injection-tokens';
import { CashbackType } from '~/core/enums';
import { ProductRepositoryPort } from '~/core/ports/out/product-repository.port';
import { ProductService } from '~/core/services/product.service';

const mockProductRepository: jest.Mocked<ProductRepositoryPort> = {
  findAll: jest.fn(),
};

describe('ProductController', () => {
  let productController: ProductController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductController],
      providers: [
        ProductService,
        {
          provide: TOKENS.REPOSITORIES.PRODUCT_REPOSITORY,
          useValue: mockProductRepository,
        },
      ],
    }).compile();

    // Uso explícito do tipo correto
    productController = module.get<ProductController>(ProductController);

    jest.clearAllMocks();
  });

  describe('findAll', () => {
    it('deve retornar uma lista de produtos', async () => {
      // Arranjar - definir o comportamento do mock
      const mockProducts = [
        {
          id: 1,
          name: 'Nike Air Max 270',
          price: 150.0,
          description:
            'O Nike Air Max 270 oferece amortecimento incrível e estilo moderno.',
          image:
            'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/9acf5d2e-5a7e-4d8e-9f5a-5a5e5d2e9acf/air-max-270-mens-shoes-KkLcGR.png',
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
          id: 2,
          name: 'Adidas Ultraboost 21',
          price: 180.0,
          description:
            'O Adidas Ultraboost 21 é conhecido por seu conforto e desempenho.',
          image:
            'https://assets.adidas.com/images/w_600,f_auto,q_auto/9b9b9b9b9b9b9b9b9b9b9b9b9b9b9b9b/ultraboost-21-shoes.jpg',
          category: 'Tênis',
          stock: 30,
          status: 'available',
          cashbackType: CashbackType.FIXED_VALUE,
          cashbackValue: 20.0,
          pointsValue: 180,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];
      const findAllSpy = jest
        .spyOn(mockProductRepository, 'findAll')
        .mockResolvedValue(mockProducts);

      const result = await productController.findAll();

      expect(result).toBe(mockProducts);
      expect(findAllSpy).toHaveBeenCalledTimes(1);
    });
  });
});
