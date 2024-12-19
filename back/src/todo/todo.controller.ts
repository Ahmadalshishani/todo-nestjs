import { Controller, Get, Post, Patch, Delete, Body, Param, Query } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  async getTodos(@Query('userId') userId: string) {
    return this.todoService.getTodosByUser(+userId);
  }

  @Post()
  async createTodo(
    @Body('userId') userId: number,
    @Body('title') title: string,
  ) {
    return this.todoService.createTodo(userId, title);
  }

  @Patch(':id')
  async markTodoCompleted(@Param('id') id: number) {
    return this.todoService.markTodoCompleted(id);
  }

  @Delete(':id')
  async deleteTodo(@Param('id') id: number) {
    return this.todoService.deleteTodo(id);
  }
}
