import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { User as PrismaUser } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}

  async getUserById(id: number): Promise<PrismaUser | null> {
    return this.prismaService.user.findUnique({
      where: { id },
    });
  }
}
