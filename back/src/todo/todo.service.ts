import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TodoService {
  constructor(private readonly prisma: PrismaService) {}

  async getTodosByUser(userId: number) {
    return this.prisma.todo.findMany({ where: { userId } });
  }

  async createTodo(userId: number, title: string) {
    return this.prisma.todo.create({
      data: { userId, title },
    });
  }

  async markTodoCompleted(todoId: number) {
    return this.prisma.todo.update({
      where: { id: todoId },
      data: { completed: true },
    });
  }

  async deleteTodo(todoId: number) {
    return this.prisma.todo.delete({
      where: { id: todoId },
    });
  }
}
