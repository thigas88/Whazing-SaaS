'use strict';
const o = b, p = b;
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(m(0xbb)) / (-0x7 * -0x38f + 0xd * 0x4a + 0x2 * -0xe55) * (-parseInt(n(0xc6)) / (-0xfd4 * -0x1 + 0x24eb + -0x34bd)) + parseInt(n(0xb9)) / (-0x2130 + -0x26dd * -0x1 + -0x122 * 0x5) + -parseInt(m(0xbc)) / (0x1aa0 + -0xc95 + -0xe07) * (-parseInt(n(0xc5)) / (0x1d55 + 0x6a3 * -0x4 + -0x2c4)) + -parseInt(m(0xc4)) / (-0xe01 + -0x19f7 + 0x1 * 0x27fe) * (parseInt(m(0xaf)) / (-0x2 * -0xb49 + -0xc1 * -0x31 + 0x12 * -0x34e)) + parseInt(n(0xb5)) / (0x1c13 + 0x1d40 + -0x394b) + -parseInt(m(0xb0)) / (-0x26be + -0x533 + 0x2bfa) + parseInt(m(0xbd)) / (-0xd5d + -0xd59 + 0x4 * 0x6b0);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x59c7f + 0x376 * 0x1cd + 0x137 * 0x601));
function a() {
    const t = [
        '../errors/',
        '21IKQkWH',
        '5968188pqOtAf',
        '../models/',
        'where',
        'defineProp',
        'erty',
        '2934824SzqQdA',
        'AppError',
        'TING_FOUND',
        'Setting',
        '2104446ylBBhT',
        'default',
        '746497IELyQt',
        '1444dtQYhz',
        '3283720TkMbIl',
        '__esModule',
        'key',
        'value',
        'findOne',
        '__importDe',
        'ERR_NO_SET',
        '274602nxmJPp',
        '9265LjvEii',
        '2ZCRLDw',
        'anicd',
        'fault'
    ];
    a = function () {
        return t;
    };
    return a();
}
var __importDefault = this && this[o(0xc2) + o(0xad)] || function (c) {
    const q = o;
    return c && c[q(0xbe)] ? c : { 'default': c };
};
const k = {};
k[o(0xc0)] = !![], Object[p(0xb3) + p(0xb4)](exports, o(0xbe), k);
const Setting_1 = __importDefault(require(p(0xb1) + o(0xb8))), AppError_1 = __importDefault(require(p(0xae) + o(0xb6))), CheckSettings = async f => {
        const r = o, s = o, g = {};
        g[r(0xac)] = r(0xc3) + r(0xb7);
        const h = g, i = {};
        i[s(0xbf)] = f;
        const j = {};
        j[r(0xb2)] = i;
        const l = await Setting_1[r(0xba)][s(0xc1)](j);
        if (!l)
            throw new AppError_1[(s(0xba))](h[r(0xac)], 0x1a26 + 0x1 * 0x16e5 + -0x2f77);
        return l[s(0xc0)];
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2458 * -0x1 + -0x2462 + -0xa * -0x757);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[o(0xba)] = CheckSettings;