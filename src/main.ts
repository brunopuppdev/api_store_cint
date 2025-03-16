import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { join } from 'path';
import * as fs from 'fs';
import { NestExpressApplication } from '@nestjs/platform-express';

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
