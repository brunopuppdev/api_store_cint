import * as fs from 'fs';
import { join } from 'path';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from '~/app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(join(__dirname, '..', 'src/static'));

  const config = new DocumentBuilder()
    .setTitle('API Store CI&t')
    .setDescription('API para gerenciamento de produtos de uma loja virtual')
    .setVersion('0.1')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  const customCss = fs.readFileSync(
    join(__dirname, '..', 'src/static/swagger/custom.css'),
    'utf8',
  );

  SwaggerModule.setup('api', app, document, {
    customSiteTitle: 'API Store Documentation',
    customCss,
    customfavIcon: '/swagger/ciandt-favicon.png',
    swaggerOptions: {
      persistAuthorization: true,
      docExpansion: 'none',
      filter: true,
    },
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap().catch((error) => {
  console.error('Erro durante a inicialização:', error);
  process.exit(1);
});
