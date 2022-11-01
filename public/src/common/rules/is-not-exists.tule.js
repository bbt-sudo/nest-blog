"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsNoteExistsRule = void 0;
const client_1 = require("@prisma/client");
const class_validator_1 = require("class-validator");
function IsNoteExistsRule(table, ValidationOptions) {
    return function (object, propertyNmae) {
        (0, class_validator_1.registerDecorator)({
            name: 'IsNoteExistsRule',
            target: object.constructor,
            propertyName: propertyNmae,
            constraints: [table],
            options: ValidationOptions,
            validator: {
                async validate(value, args) {
                    const prisma = new client_1.PrismaClient();
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
exports.IsNoteExistsRule = IsNoteExistsRule;
//# sourceMappingURL=is-not-exists.tule.js.map