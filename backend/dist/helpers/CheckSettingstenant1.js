'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0x137)) / (-0x1c3 + 0x93c + -0x778) * (-parseInt(p(0x13a)) / (-0x3 * 0xafb + -0x2 * 0x1f8 + 0x24e3)) + parseInt(q(0x124)) / (-0x32e * 0x7 + -0x18c1 + 0x2f06) * (parseInt(q(0x125)) / (-0x2317 * 0x1 + 0xf6 + 0x2225)) + parseInt(p(0x126)) / (0x1ffb + 0x10a2 + 0x4 * -0xc26) + -parseInt(p(0x141)) / (0x23f * 0x1 + 0x1da * -0x1 + 0x5 * -0x13) * (parseInt(p(0x128)) / (-0x1b00 + -0x20 * 0x8 + 0x1c07)) + -parseInt(q(0x140)) / (0xf62 + 0x1 * -0x13b3 + 0x1 * 0x459) + -parseInt(p(0x136)) / (0x217a + 0x2dd * 0xd + -0x43 * 0x10e) + -parseInt(q(0x130)) / (0xddd + -0x24eb + 0x1718) * (-parseInt(q(0x12f)) / (-0x13 * 0x7a + 0x170c + -0xdf3 * 0x1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x34f3c + 0x1cb2 * 0x16 + -0x32522));
var __importDefault = this && this[r(0x127) + s(0x12a)] || function (c) {
    const t = s;
    return c && c[t(0x13d)] ? c : { 'default': c };
};
function a() {
    const w = [
        'YYfBI',
        'findOne',
        '__esModule',
        'defineProp',
        'key',
        '2293384IapkhC',
        '12906IfjsLd',
        '622677vaXVML',
        '4KOxPML',
        '147595nNJGpJ',
        '__importDe',
        '49eoqIBC',
        'tenantId',
        'fault',
        'ERR_NO_SET',
        'where',
        'default',
        'AppError',
        '55nCZRnM',
        '569510nQFDUy',
        '../models/',
        'Setting',
        'RLhji',
        'value',
        '../errors/',
        '2138724lYheBV',
        '739kKKShi',
        'TING_FOUND',
        'erty',
        '514Vnehrl'
    ];
    a = function () {
        return w;
    };
    return a();
}
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * 0x26e5 + 0x1841 + 0x3f2 * 0x4);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[r(0x134)] = !![], Object[r(0x13e) + s(0x139)](exports, s(0x13d), k);
const Setting_1 = __importDefault(require(r(0x131) + s(0x132))), AppError_1 = __importDefault(require(r(0x135) + r(0x12e))), CheckSettingstenant1 = async (f, g = null) => {
        const u = s, v = s, h = {};
        h[u(0x13b)] = function (n, o) {
            return n && o;
        }, h[v(0x133)] = u(0x12b) + u(0x138);
        const i = h, j = {};
        j[v(0x129)] = 0x1, j[u(0x13f)] = f;
        const l = {};
        l[v(0x12c)] = j;
        const m = await Setting_1[u(0x12d)][u(0x13c)](l);
        if (i[v(0x13b)](!m, !g))
            throw new AppError_1[(v(0x12d))](i[v(0x133)], 0x84a * -0x1 + 0x22e7 * 0x1 + -0x1909);
        return m?.[u(0x134)] || g;
    };
exports[s(0x12d)] = CheckSettingstenant1;