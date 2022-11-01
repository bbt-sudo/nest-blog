"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTxupDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_txup_dto_1 = require("./create-txup.dto");
class UpdateTxupDto extends (0, mapped_types_1.PartialType)(create_txup_dto_1.CreateTxupDto) {
}
exports.UpdateTxupDto = UpdateTxupDto;
//# sourceMappingURL=update-txup.dto.js.map