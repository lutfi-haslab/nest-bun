import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CatsController } from './cats/cats.controller';
import { PostService } from './post/post.service';
import { PrismaService } from './prisma.service';
import { UserService } from './user/user.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [AuthModule, UsersModule],
  controllers: [AppController, CatsController],
  providers: [PrismaService, UserService, PostService],
})
export class AppModule {}