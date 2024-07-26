'use strict';
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(o(0xc3)) / (-0x128a + -0x116a + 0x23f5) * (-parseInt(o(0xc9)) / (-0x6b * -0x5b + 0x792 + -0x2d99)) + -parseInt(o(0xcd)) / (0x1158 + 0x1cbd + -0x2e12) * (-parseInt(o(0xc6)) / (-0x3 * 0x757 + -0x1d0a + -0xa37 * -0x5)) + -parseInt(p(0xcb)) / (-0x1fa8 + -0x269a + 0x176d * 0x3) * (parseInt(p(0xdf)) / (-0x33 * 0x77 + -0x1e * -0xe + 0x91 * 0x27)) + -parseInt(p(0xe3)) / (-0x1be3 + 0x1c75 + -0x8b * 0x1) * (-parseInt(p(0xd3)) / (0x1303 * -0x1 + -0xd15 + 0x2020)) + parseInt(o(0xe4)) / (0x21 * -0xc1 + 0x2280 + 0x4cb * -0x2) * (parseInt(o(0xe0)) / (0x9 * 0x8 + 0xc56 + -0x5 * 0x284)) + parseInt(o(0xc4)) / (-0x23f * 0x9 + 0x26 * -0x35 + 0x1c20) * (parseInt(o(0xe5)) / (0xdf * 0x3 + -0x29 * -0x3e + -0xc7f)) + -parseInt(o(0xcc)) / (-0x86 + -0x1 * -0x26d1 + -0x263e);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x28a * -0xd2 + 0x9174 + 0x4949d));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x7ae + -0xf3f + 0x1a * 0x52);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const v = [
        'ERR_NO_TIC',
        '51971voNKHM',
        '29623MhwTsV',
        'rs/AppErro',
        '9244XjaEKX',
        'vice',
        'tenantId',
        '6mrJVon',
        'value',
        '10emHKmz',
        '11753014ZbkKwK',
        '471oMCOZX',
        '__importDe',
        './CreateLo',
        'defineProp',
        'type',
        'default',
        '1637696OXfOYT',
        'XaoUJ',
        'KET_FOUND',
        'fault',
        'MVUXR',
        'erty',
        '__esModule',
        '../../erro',
        'gTicketSer',
        './ShowTick',
        'etService',
        'delete',
        '2040IIKIcO',
        '20ULFbCe',
        'ticketId',
        'userId',
        '7cexhej',
        '1511496SOnOrD',
        '1596IVTfCI'
    ];
    a = function () {
        return v;
    };
    return a();
}
var __importDefault = this && this[q(0xce) + q(0xd6)] || function (c) {
    const s = q;
    return c && c[s(0xd9)] ? c : { 'default': c };
};
const k = {};
k[r(0xca)] = !![], Object[q(0xd0) + r(0xd8)](exports, q(0xd9), k);
const AppError_1 = __importDefault(require(q(0xda) + q(0xc5) + 'r')), ShowTicketService_1 = __importDefault(require(q(0xdc) + q(0xdd))), CreateLogTicketService_1 = __importDefault(require(r(0xcf) + r(0xdb) + r(0xc7))), DeleteTicketService = async ({
        id: f,
        tenantId: g,
        userId: h
    }) => {
        const t = r, u = r, i = {};
        i[t(0xd7)] = u(0xe6) + u(0xd5), i[t(0xd4)] = u(0xde);
        const j = i, l = {};
        l['id'] = f, l[t(0xc8)] = g;
        const m = await (-0x5 * -0x327 + -0xd50 + -0x273, ShowTicketService_1[u(0xd2)])(l);
        if (!m)
            throw new AppError_1[(t(0xd2))](j[u(0xd7)], 0x74 * -0x44 + -0x14d0 + 0x1a9a * 0x2);
        const n = {};
        return n[u(0xe2)] = h, n[u(0xe1)] = m['id'], n[u(0xd1)] = j[u(0xd4)], await (-0x1 * -0x1208 + -0x1 * 0x134a + 0x1 * 0x142, CreateLogTicketService_1[t(0xd2)])(n), m;
    };
exports[r(0xd2)] = DeleteTicketService;