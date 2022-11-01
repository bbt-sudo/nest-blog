"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsExisteRule = void 0;
const client_1 = require("@prisma/client");
const class_validator_1 = require("class-validator");
function IsExisteRule(table, validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'IsExisteRule',
            target: object.constructor,
            propertyName: propertyName,
            constraints: [table],
            options: validationOptions,
            validator: {
                async validate(value, args) {
                    const prisma = new client_1.PrismaClient();
                    const res = await prisma[table].findFirst({
                        where: {
                            [args.property]: value,
                        },
                    });
                    return Boolean(res);
                },
            },
        });
    };
}
exports.IsExisteRule = IsExisteRule;
//# sourceMappingURL=is-existe.rule.js.map