'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0x12e)) / (0x89 * 0x35 + 0x31e + -0xed * 0x22) + -parseInt(p(0x13a)) / (0x5 * -0x781 + -0x1673 * -0x1 + 0xf14) + -parseInt(q(0x13b)) / (-0x166f + -0x3 * 0x16 + 0x16b4) + parseInt(p(0x141)) / (-0xf9 * 0x9 + 0x6b9 * -0x1 + -0xf7e * -0x1) * (parseInt(p(0x128)) / (-0x11 * -0x46 + -0x1 * -0x62b + -0xacc)) + -parseInt(q(0x134)) / (-0xf * 0x1a9 + -0x4 * -0x920 + -0xb93) * (parseInt(q(0x139)) / (-0x1eab + -0x1695 + 0x3547)) + -parseInt(p(0x142)) / (0xe6 + -0x1c90 + -0x5 * -0x58a) * (parseInt(p(0x13d)) / (-0xc7f + 0x6e7 + -0x1 * -0x5a1)) + parseInt(p(0x135)) / (-0xcfc + -0x9a5 * -0x1 + 0xad * 0x5);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x90d34 * 0x1 + -0x10f07 + -0x1 * -0xea927));
var __importDefault = this && this[r(0x133) + r(0x129)] || function (c) {
    const t = r;
    return c && c[t(0x13c)] ? c : { 'default': c };
};
const k = {};
function a() {
    const w = [
        '708FfXceM',
        '8794320XwdRET',
        'default',
        '../errors/',
        'key',
        '6657oQKDoG',
        '344786BbvIFz',
        '1146963BXbiqY',
        '__esModule',
        '9yyXrXG',
        'erty',
        'ERR_NO_SET',
        'GtPVQ',
        '7512ZsBLIS',
        '729464gqpnEQ',
        'findOne',
        'vRQSl',
        '500sOfftU',
        'fault',
        'TING_FOUND',
        'AppError',
        'SettingsGe',
        '../models/',
        '10897walNaT',
        'neral',
        'where',
        'value',
        'defineProp',
        '__importDe'
    ];
    a = function () {
        return w;
    };
    return a();
}
k[r(0x131)] = !![], Object[s(0x132) + r(0x13e)](exports, r(0x13c), k);
const SettingsGeneral_1 = __importDefault(require(s(0x12d) + s(0x12c) + s(0x12f))), AppError_1 = __importDefault(require(s(0x137) + r(0x12b))), CheckSettingsGeneral = async (f, g = null) => {
        const u = s, v = s, h = {};
        h[u(0x140)] = function (n, o) {
            return n && o;
        }, h[u(0x127)] = v(0x13f) + v(0x12a);
        const i = h, j = {};
        j[u(0x138)] = f;
        const l = {};
        l[v(0x130)] = j;
        const m = await SettingsGeneral_1[u(0x136)][v(0x143)](l);
        if (i[u(0x140)](!m, !g))
            throw new AppError_1[(u(0x136))](i[v(0x127)], 0x189c + 0x2 * 0xd42 + -0x318c);
        return m?.[v(0x131)] || g;
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xe * -0x20b + 0x154e + -0x7 * 0x6f7);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[r(0x136)] = CheckSettingsGeneral;