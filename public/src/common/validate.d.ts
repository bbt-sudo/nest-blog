import { ValidationPipe } from '@nestjs/common';
import { ValidationError } from 'class-validator';
export default class Validate extends ValidationPipe {
    protected flattenValidationErrors(validationErrors: ValidationError[]): string[];
}
