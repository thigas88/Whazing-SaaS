'use strict';
const q = b, r = b;
function a() {
    const v = [
        '__importDe',
        'delete',
        '2345KRLtHG',
        'ticketId',
        '2745582yMACuR',
        'defineProp',
        'ERR_NO_TIC',
        'userId',
        '15976hAHYhS',
        'gTicketSer',
        'KET_FOUND',
        '179420gLrDYl',
        'value',
        'zEtFJ',
        'etService',
        '2611YtgvSr',
        '693fRFjeH',
        '48521544OQaFBn',
        'tenantId',
        '119366tbWqtK',
        'wixPc',
        '4541643KLLpJX',
        '8ThpBJA',
        './CreateLo',
        'rs/AppErro',
        'vice',
        'erty',
        '__esModule',
        './ShowTick',
        '../../erro',
        'fault',
        '18Wfjvbe',
        'type',
        'default',
        '8202YVEMQh'
    ];
    a = function () {
        return v;
    };
    return a();
}
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(o(0x1dc)) / (0x2173 * 0x1 + 0xf6e + -0x30e0) * (parseInt(o(0x1d0)) / (-0xeaa * -0x2 + 0xa74 + -0x27c6)) + parseInt(p(0x1e4)) / (-0x4 * 0x8dd + -0x1 * 0x2565 + 0x48dc) + parseInt(o(0x1e8)) / (-0x2 * -0x895 + -0x28 * -0x17 + 0xb1 * -0x1e) * (parseInt(o(0x1e2)) / (0xb25 * -0x1 + 0x1a05 + -0xedb)) + parseInt(p(0x1df)) / (-0x1d57 + -0x1c60 + 0x3 * 0x133f) * (parseInt(o(0x1cc)) / (0x2 * 0xa47 + 0x1e6b + -0x32f2)) + parseInt(o(0x1d3)) / (0x10 * -0xc2 + -0x48 * 0x64 + 0x2848) * (-parseInt(o(0x1d2)) / (0x19e2 + 0x8db * -0x3 + 0x5c * 0x2)) + -parseInt(p(0x1eb)) / (0x23ae + 0x17a8 + -0x3b4c) * (-parseInt(o(0x1cd)) / (-0x1cd + -0x1cee + -0x1a * -0x12f)) + -parseInt(p(0x1ce)) / (0x1 * -0x1c0d + -0x1a29 + 0x3642);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xdd98 * 0x1d + 0x1060d1 + 0x174b2d));
var __importDefault = this && this[q(0x1e0) + r(0x1db)] || function (c) {
    const s = r;
    return c && c[s(0x1d8)] ? c : { 'default': c };
};
const k = {};
k[r(0x1ec)] = !![], Object[q(0x1e5) + q(0x1d7)](exports, r(0x1d8), k);
const AppError_1 = __importDefault(require(r(0x1da) + r(0x1d5) + 'r')), ShowTicketService_1 = __importDefault(require(r(0x1d9) + q(0x1cb))), CreateLogTicketService_1 = __importDefault(require(r(0x1d4) + r(0x1e9) + r(0x1d6))), DeleteTicketService = async ({
        id: f,
        tenantId: g,
        userId: h
    }) => {
        const t = r, u = r, i = {};
        i[t(0x1d1)] = u(0x1e6) + u(0x1ea), i[u(0x1ed)] = t(0x1e1);
        const j = i, l = {};
        l['id'] = f, l[u(0x1cf)] = g;
        const m = await (0x243f + 0x19d2 + 0x3e11 * -0x1, ShowTicketService_1[u(0x1de)])(l);
        if (!m)
            throw new AppError_1[(t(0x1de))](j[t(0x1d1)], -0x8a6 + 0x1201 * -0x2 + 0x2e3c);
        const n = {};
        return n[t(0x1e7)] = h, n[u(0x1e3)] = m['id'], n[t(0x1dd)] = j[t(0x1ed)], await (-0x100f * 0x1 + 0x61 * 0x67 + -0x16f8, CreateLogTicketService_1[u(0x1de)])(n), m;
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x182b + 0x1 * 0x2187 + -0x791);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[q(0x1de)] = DeleteTicketService;