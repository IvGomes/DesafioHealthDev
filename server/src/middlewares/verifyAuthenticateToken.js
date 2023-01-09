"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyAuthenticateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
async function verifyAuthenticateToken(request, response, next) {
    const authHeader = request.headers.authorization;
    if (!authHeader) {
        return response.status(401).json({
            message: 'Token não encontrado...',
        });
    }
    const [, token] = authHeader.split(' ');
    try {
        jsonwebtoken_1.default.verify(token, 'valus', (error, decoded) => {
            if (error) {
                return response.status(401).send({ message: 'Token inválido' });
            }
            if (typeof decoded?.sub === 'string')
                return request.userId = decoded?.sub;
        });
        return next();
    }
    catch (error) {
        return response.status(401).json({
            message: 'Token inválido ou expirado...',
        });
    }
}
exports.verifyAuthenticateToken = verifyAuthenticateToken;
