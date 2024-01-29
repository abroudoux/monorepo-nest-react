import { NestFactory } from "@nestjs/core";
import { ValidationPipe } from "@nestjs/common";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";

import { AppModule } from "@/app/app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle("Nest Auth Template")
    .setDescription("NestJs auth boilerplate for futures projects")
    .setVersion("0.1")
    .build();

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("doc", app, document);

  app.setGlobalPrefix("api");
  await app.listen(process.env.PORT ?? 5002);
}
bootstrap();
