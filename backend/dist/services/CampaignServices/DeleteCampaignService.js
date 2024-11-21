'use strict';
function a() {
    const w = [
        '1673856KpkgGK',
        'pending',
        'canceled',
        '5231646OYffOj',
        'rs/AppErro',
        'default',
        'value',
        'xIMKz',
        'ERR_NO_CAM',
        'hWJhE',
        'ERR_NO_UPD',
        '1614514mbsoum',
        'where',
        'GN_NOT_IN_',
        'jNVgf',
        '6652BgEcZd',
        'AIGN_NOT_E',
        'defineProp',
        '8oCYbCa',
        'destroy',
        'Iguev',
        '__esModule',
        '6ziBFlF',
        'PAIGN_FOUN',
        'VPoZg',
        '6683810PTeNJe',
        'ENDING',
        'tenantId',
        '../../erro',
        'ls/Campaig',
        'status',
        'ERROR_CAMP',
        'fault',
        'erty',
        'findOne',
        '../../mode',
        '6776104iSGfPD',
        '29723049bfXYim',
        'XISTS',
        'CANCELED_P',
        'ATE_CAMPAI',
        '__importDe',
        'IMJCx'
    ];
    a = function () {
        return w;
    };
    return a();
}
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0x109)) / (-0x2326 + 0x21f4 + 0x133) + -parseInt(p(0x105)) / (0x20f5 * -0x1 + 0x4a2 * 0x5 + 0x9cd) + parseInt(q(0xfa)) / (0x9e + -0x18d1 + 0x1836) * (parseInt(q(0x10c)) / (0x2 * 0x9eb + -0x9ac * 0x1 + -0xa26)) + parseInt(q(0x113)) / (-0x65e + 0x93 * 0x2 + -0x1bf * -0x3) * (-parseInt(p(0x110)) / (0x1565 + 0x144c + -0x1 * 0x29ab)) + -parseInt(p(0xfd)) / (0x1b31 + -0x1a5b + -0x1 * 0xcf) + -parseInt(p(0xf3)) / (0x2 * -0xac4 + -0x1 * 0x202 + 0x1792) + parseInt(q(0xf4)) / (0x2351 + 0x2698 + -0x49e0);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x10803c + -0x3b8f2 + 0x1eb3a1));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * 0x1d8e + -0xb * 0x23d + 0x281 * 0x16);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[r(0xf8) + r(0xef)] || function (c) {
    const t = r;
    return c && c[t(0x10f)] ? c : { 'default': c };
};
const k = {};
k[s(0x100)] = !![], Object[s(0x10b) + s(0xf0)](exports, r(0x10f), k);
const Campaign_1 = __importDefault(require(s(0xf2) + r(0xec) + 'n')), AppError_1 = __importDefault(require(s(0xeb) + r(0xfe) + 'r')), DeleteCampaignService = async ({
        id: f,
        tenantId: g
    }) => {
        const u = r, v = r, h = {};
        h[u(0x103)] = u(0x102) + u(0x111) + 'D', h[u(0x101)] = function (n, o) {
            return n !== o;
        }, h[v(0x10e)] = v(0xfb), h[v(0x112)] = v(0xfc), h[v(0xf9)] = v(0x104) + v(0xf7) + v(0x107) + u(0xf6) + v(0xe9), h[u(0x108)] = u(0xee) + v(0x10a) + v(0xf5);
        const i = h, j = {};
        j['id'] = f, j[u(0xea)] = g;
        const l = {};
        l[v(0x106)] = j;
        const m = await Campaign_1[u(0xff)][u(0xf1)](l);
        if (!m)
            throw new AppError_1[(v(0xff))](i[u(0x103)], -0x1 * -0x18da + 0xf0e + -0x2 * 0x132a);
        if (i[v(0x101)](m?.[u(0xed)], i[u(0x10e)]) && i[u(0x101)](m?.[u(0xed)], i[v(0x112)]))
            throw new AppError_1[(u(0xff))](i[v(0xf9)], -0x1287 + 0x2 * 0xea8 + -0x935 * 0x1);
        try {
            await m[v(0x10d)]();
        } catch (n) {
            throw new AppError_1[(v(0xff))](i[v(0x108)], -0x12af + -0xbfb * -0x1 + 0xa * 0xd4);
        }
    };
exports[r(0xff)] = DeleteCampaignService;