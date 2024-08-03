'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1758 + -0xb * -0xa3 + 0x1128);
        let h = e[f];
        return h;
    }, b(c, d);
}
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(o(0xda)) / (-0x2f2 * -0xc + -0x19f7 + -0x960) + parseInt(p(0xf2)) / (-0x6 * 0x59c + -0x7 * 0x1f6 + 0x2f64) * (parseInt(o(0xe9)) / (0x40f * -0x8 + 0x151b + 0xd0 * 0xe)) + parseInt(p(0xed)) / (0x182b + -0x4 * -0x61d + -0x309b) + parseInt(p(0xdd)) / (-0x373 * -0x3 + 0x6cc + -0x8 * 0x224) + -parseInt(p(0xd5)) / (-0x1909 + -0x1753 + -0x16 * -0x233) * (-parseInt(p(0xd1)) / (-0x2092 + 0x1 * -0x1705 + 0x379e * 0x1)) + -parseInt(p(0xf0)) / (0x488 + -0x1 * 0x4d5 + 0x55) * (-parseInt(o(0xe2)) / (0xb4e + -0xf6 * 0x10 + -0x41b * -0x1)) + parseInt(p(0xeb)) / (-0x92b * -0x1 + 0x1c82 + -0x25a3) * (-parseInt(o(0xe7)) / (0x1288 + 0x166d + 0x2 * -0x1475));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xa64b + -0x102878 + -0xd * -0x23633));
var __importDefault = this && this[q(0xf1) + q(0xdb)] || function (c) {
    const s = q;
    return c && c[s(0xea)] ? c : { 'default': c };
};
const k = {};
k[r(0xd7)] = !![], Object[q(0xdc) + r(0xef)](exports, r(0xea), k);
const AppError_1 = __importDefault(require(r(0xd4) + r(0xde) + 'r')), ShowTicketService_1 = __importDefault(require(r(0xe8) + r(0xd8))), CreateLogTicketService_1 = __importDefault(require(r(0xd2) + q(0xe6) + r(0xe4))), DeleteTicketService = async ({
        id: f,
        tenantId: g,
        userId: h
    }) => {
        const t = r, u = q, i = {};
        i[t(0xe5)] = u(0xe0) + t(0xe1), i[u(0xec)] = t(0xd6);
        const j = i, l = {};
        l['id'] = f, l[u(0xd9)] = g;
        const m = await (0x18ef + -0x2 * 0x10dd + 0x8cb, ShowTicketService_1[t(0xdf)])(l);
        if (!m)
            throw new AppError_1[(t(0xdf))](j[u(0xe5)], -0x1332 + -0x22 * -0x67 + 0x8 * 0xe3);
        const n = {};
        return n[t(0xe3)] = h, n[u(0xd3)] = m['id'], n[u(0xee)] = j[u(0xec)], await (-0x1d * -0x9 + 0x20b6 + 0x6bf * -0x5, CreateLogTicketService_1[u(0xdf)])(n), m;
    };
function a() {
    const v = [
        '5048267aMcyCd',
        './CreateLo',
        'ticketId',
        '../../erro',
        '6yZppxy',
        'delete',
        'value',
        'etService',
        'tenantId',
        '1155758SqQwTJ',
        'fault',
        'defineProp',
        '3424180DPmzrN',
        'rs/AppErro',
        'default',
        'ERR_NO_TIC',
        'KET_FOUND',
        '58131aGxlxM',
        'userId',
        'vice',
        'geTGm',
        'gTicketSer',
        '1577686iOQorF',
        './ShowTick',
        '374481FfvRPD',
        '__esModule',
        '210froSEZ',
        'RlSYm',
        '5047400QXjKhT',
        'type',
        'erty',
        '1232eaWssb',
        '__importDe',
        '22aoHUAJ'
    ];
    a = function () {
        return v;
    };
    return a();
}
exports[r(0xdf)] = DeleteTicketService;