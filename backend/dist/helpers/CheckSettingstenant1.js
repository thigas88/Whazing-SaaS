'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0x1bb)) / (0x11b * 0x18 + 0x1d61 + -0x37e8) + -parseInt(p(0x1b7)) / (-0x16bd + 0x883 * -0x2 + 0x27c5 * 0x1) + -parseInt(q(0x1c8)) / (-0x1 * 0xff4 + -0x1e2b + 0x2e22) + parseInt(p(0x1c4)) / (0x65 * 0x53 + 0x6b9 * -0x1 + 0x1 * -0x1a02) + parseInt(q(0x1c2)) / (0x3f + -0x11fb + 0x11c1) + parseInt(q(0x1c9)) / (0xc0 + -0x40b + 0x1 * 0x351) * (-parseInt(q(0x1b5)) / (0x1b3a + 0x4ca * 0x4 + 0x2e5b * -0x1)) + parseInt(p(0x1cd)) / (-0x1372 + -0x7ab * 0x5 + 0x39d1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x65f * 0xb3 + -0x2 * 0xe5e1a + 0x2f97e8));
function a() {
    const w = [
        '13789192pYWWnA',
        'ERR_NO_SET',
        'tenantId',
        '28gaPyai',
        '../models/',
        '2667070ISGFKZ',
        'default',
        'fault',
        'Setting',
        '1035195uARlwt',
        'erty',
        '../errors/',
        'where',
        'AppError',
        'findOne',
        '__importDe',
        '2522605xIbtcJ',
        'TING_FOUND',
        '3249208zfXLPC',
        'defineProp',
        'XmWRW',
        '__esModule',
        '974211Aqlmie',
        '2210178GzeVis',
        'GmUmc',
        'value',
        'key'
    ];
    a = function () {
        return w;
    };
    return a();
}
var __importDefault = this && this[r(0x1c1) + s(0x1b9)] || function (c) {
    const t = s;
    return c && c[t(0x1c7)] ? c : { 'default': c };
};
const k = {};
k[s(0x1cb)] = !![], Object[s(0x1c5) + s(0x1bc)](exports, s(0x1c7), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xc * -0x1a8 + 0x8fc + 0xc99);
        let h = e[f];
        return h;
    }, b(c, d);
}
const Setting_1 = __importDefault(require(s(0x1b6) + s(0x1ba))), AppError_1 = __importDefault(require(s(0x1bd) + s(0x1bf))), CheckSettingstenant1 = async (f, g = null) => {
        const u = r, v = s, h = {};
        h[u(0x1c6)] = function (n, o) {
            return n && o;
        }, h[v(0x1ca)] = u(0x1ce) + u(0x1c3);
        const i = h, j = {};
        j[v(0x1cf)] = 0x1, j[u(0x1cc)] = f;
        const l = {};
        l[u(0x1be)] = j;
        const m = await Setting_1[v(0x1b8)][v(0x1c0)](l);
        if (i[u(0x1c6)](!m, !g))
            throw new AppError_1[(v(0x1b8))](i[v(0x1ca)], 0x1812 + -0x166d + -0x1 * 0x11);
        return m?.[v(0x1cb)] || g;
    };
exports[r(0x1b8)] = CheckSettingstenant1;