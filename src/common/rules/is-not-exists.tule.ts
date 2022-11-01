import { PrismaClient } from '@prisma/client';
import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
} from 'class-validator';

export function IsNoteExistsRule(
  table: string,
  ValidationOptions?: ValidationOptions,
) {
  return function (object: Record<string, any>, propertyNmae: string) {
    registerDecorator({
      name: 'IsNoteExistsRule',
      target: object.constructor,
      propertyName: propertyNmae,
      constraints: [table],
      options: ValidationOptions,
      validator: {
        async validate(value: string, args: ValidationArguments) {
          const prisma = new PrismaClient();
          const res = await prisma[table].findFirst({
            where: {
              [args.property]: value,
            },
          });
          return !Boolean(res);
        },
      },
    });
  };
}
