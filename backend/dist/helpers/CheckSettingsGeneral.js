'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0x1d3)) / (-0x311 + -0x735 + 0xa47) * (-parseInt(p(0x1df)) / (0x10fd + 0x1319 * 0x1 + -0x2414)) + -parseInt(p(0x1d5)) / (-0x6 * 0x5cb + 0x135b + 0xf6a) * (parseInt(q(0x1da)) / (-0x4f1 + 0x3d * -0x1 + 0x532)) + parseInt(p(0x1e0)) / (0xaea + -0x4 * -0x787 + -0x2901 * 0x1) + parseInt(q(0x1de)) / (0x25b3 + 0x9 * -0x211 + -0x1314) + parseInt(q(0x1dc)) / (-0x1 * 0x4a + -0x1a * -0x57 + -0x3 * 0x2d7) + -parseInt(p(0x1e7)) / (0x21d * 0x11 + 0x1 * -0x1ed3 + -0xb * 0x76) + parseInt(q(0x1d9)) / (0x74 * -0x3 + -0x12d7 + 0x7 * 0x2e4);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x18bfa6 + -0x11f7ac + 0x37dc59));
var __importDefault = this && this[r(0x1d0) + s(0x1d7)] || function (c) {
    const t = s;
    return c && c[t(0x1e5)] ? c : { 'default': c };
};
function a() {
    const w = [
        '10638312gbtjmU',
        'neral',
        'ERR_NO_SET',
        '../models/',
        'erty',
        '__importDe',
        'default',
        'findOne',
        '15673qSEBZS',
        'defineProp',
        '2067AdVxWF',
        'GPFML',
        'fault',
        'SettingsGe',
        '24993198kNKKpz',
        '2588BgPLkU',
        'AppError',
        '2346463PEuARj',
        'where',
        '186018HqstDn',
        '168GeCQOM',
        '4051585ZqRgRe',
        'kRJqS',
        '../errors/',
        'value',
        'TING_FOUND',
        '__esModule',
        'key'
    ];
    a = function () {
        return w;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1c03 + -0x2 * 0x12b3 + 0xb31);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[s(0x1e3)] = !![], Object[r(0x1d4) + r(0x1cf)](exports, s(0x1e5), k);
const SettingsGeneral_1 = __importDefault(require(r(0x1ce) + r(0x1d8) + s(0x1e8))), AppError_1 = __importDefault(require(r(0x1e2) + r(0x1db))), CheckSettingsGeneral = async (f, g = null) => {
        const u = r, v = r, h = {};
        h[u(0x1e1)] = function (n, o) {
            return n && o;
        }, h[u(0x1d6)] = u(0x1e9) + u(0x1e4);
        const i = h, j = {};
        j[u(0x1e6)] = f;
        const l = {};
        l[u(0x1dd)] = j;
        const m = await SettingsGeneral_1[v(0x1d1)][v(0x1d2)](l);
        if (i[v(0x1e1)](!m, !g))
            throw new AppError_1[(u(0x1d1))](i[v(0x1d6)], 0x41 * -0x7f + -0x3 * -0x274 + 0x1a77);
        return m?.[u(0x1e3)] || g;
    };
exports[s(0x1d1)] = CheckSettingsGeneral;