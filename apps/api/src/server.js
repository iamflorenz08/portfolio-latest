"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const remult_fastify_1 = require("remult/remult-fastify");
const models_1 = require("@libs/remult/models");
const rate_limit_1 = __importDefault(require("@fastify/rate-limit"));
const node_path_1 = __importDefault(require("node:path"));
const node_fs_1 = __importDefault(require("node:fs"));
const server = (0, fastify_1.default)();
server
    .register(rate_limit_1.default, {
    max: 1,
    timeWindow: '1 minute',
    hook: 'onRequest',
})
    .register((0, remult_fastify_1.remultApi)({
    entities: [models_1.Contact]
}))
    .get('/api/downloads/resume', async (request, reply) => {
    const pdfPath = node_path_1.default.join(__dirname, 'files', 'resume.pdf');
    return reply
        .header('Content-Disposition', `attachment; filename="DEJESUS_RESUME.pdf"`)
        .header('Content-Type', 'application/octet-stream')
        .send(node_fs_1.default.createReadStream(pdfPath));
});
server.listen({ host: '0.0.0.0', port: Number(process.env.PORT || 5000) }, (err, address) => {
    if (err) {
        console.error('Error starting server:', err);
        process.exit(1);
    }
    console.log(`Server is running at ${address}`);
});
