import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";

import { AppController } from "@/app/app.controller";
import { AppService } from "@/app/app.service";
import { UsersModule } from "@/users/users.module";
import { AuthModule } from "@/auth/auth.module";

@Module({
  imports: [
    UsersModule,
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "../..", "client", "build"),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
