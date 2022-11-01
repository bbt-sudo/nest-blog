"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateGlobalDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_global_dto_1 = require("./create-global.dto");
class UpdateGlobalDto extends (0, mapped_types_1.PartialType)(create_global_dto_1.CreateGlobalDto) {
}
exports.UpdateGlobalDto = UpdateGlobalDto;
//# sourceMappingURL=update-global.dto.js.map