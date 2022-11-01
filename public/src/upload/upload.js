"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadDocument = exports.UploadImage = exports.Upload = exports.filterFilter = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
function filterFilter(type) {
    return (req, file, callback) => {
        if (!file.mimetype.includes(type)) {
            callback(new common_1.UnsupportedMediaTypeException('文件类型错误'), false);
        }
        else {
            callback(null, true);
        }
    };
}
exports.filterFilter = filterFilter;
function Upload(field = 'file', options) {
    return (0, common_1.applyDecorators)((0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)(field, options)));
}
exports.Upload = Upload;
function UploadImage(field = 'file') {
    return Upload(field, {
        limits: Math.pow(1024, 2) * 2,
        fileFilter: filterFilter('image'),
    });
}
exports.UploadImage = UploadImage;
function UploadDocument(field = 'file') {
    return Upload(field, {
        limits: Math.pow(1024, 2) * 5,
        fileFilter: filterFilter('document'),
    });
}
exports.UploadDocument = UploadDocument;
//# sourceMappingURL=upload.js.map