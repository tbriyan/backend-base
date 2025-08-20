import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Documentación del proyecto')
    .setDescription('Descripción minima necesaria para identificar al proyecto')
    .setVersion('1.0.0')
    .addTag('Prueba técnica project')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('doc', app, documentFactory);

  await app.listen(process.env.PORT ?? 3000, () => {
    console.log('Server on port:', process.env.PORT ?? 3000);
  });
}
bootstrap();
