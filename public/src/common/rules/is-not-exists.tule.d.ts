import { ValidationOptions } from 'class-validator';
export declare function IsNoteExistsRule(table: string, ValidationOptions?: ValidationOptions): (object: Record<string, any>, propertyNmae: string) => void;
