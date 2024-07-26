'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1ac7 + 0x3d3 + -0x1cf1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0x1c3)) / (-0x6d * 0x1f + 0x1d * -0x9 + 0xe39) * (-parseInt(q(0x1bb)) / (0x1 * 0x25a5 + -0x20d * 0x9 + 0x997 * -0x2)) + parseInt(q(0x1bc)) / (-0x5 * -0x5c9 + 0x20e * 0x7 + -0x2b4c) + -parseInt(p(0x1b5)) / (0x1c75 + 0x2b * 0x91 + -0x34cc) * (parseInt(p(0x1c4)) / (-0x2f * 0x29 + -0x1 * 0x1b11 + 0x229d)) + -parseInt(q(0x1af)) / (0x2b * 0x6b + -0x1d63 + 0xb70 * 0x1) * (parseInt(p(0x1b0)) / (0x1f * -0x1d + 0x877 + -0x4ed)) + -parseInt(p(0x1c1)) / (-0x1579 + -0x1 * 0x551 + 0xd69 * 0x2) + -parseInt(q(0x1aa)) / (-0x571 * -0x1 + 0xa6b + -0xfd3) * (parseInt(q(0x1b7)) / (-0x1836 + 0x1be6 + -0x3a6)) + parseInt(q(0x1b2)) / (-0xeca + 0x5fb + 0x8da);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x10747 * -0x2 + -0xc350e + 0x5 * 0x36229));
function a() {
    const w = [
        '2192682hyRKyy',
        'erty',
        '__esModule',
        'lqOVC',
        'TING_FOUND',
        '485992YSGoGs',
        'where',
        '1PoNdwt',
        '555uzgjlz',
        '../models/',
        'SettingsGe',
        'ERR_NO_SET',
        '699723gIjCpI',
        'ydGlE',
        'default',
        'value',
        'key',
        '6eJiZbq',
        '460222XurxOI',
        'defineProp',
        '3007972VAQYtQ',
        'fault',
        'AppError',
        '6024rvNPzp',
        'neral',
        '110RAhjvR',
        'findOne',
        '../errors/',
        '__importDe',
        '1176002CAMTop'
    ];
    a = function () {
        return w;
    };
    return a();
}
var __importDefault = this && this[r(0x1ba) + r(0x1b3)] || function (c) {
    const t = s;
    return c && c[t(0x1be)] ? c : { 'default': c };
};
const k = {};
k[s(0x1ad)] = !![], Object[s(0x1b1) + r(0x1bd)](exports, s(0x1be), k);
const SettingsGeneral_1 = __importDefault(require(r(0x1c5) + r(0x1c6) + r(0x1b6))), AppError_1 = __importDefault(require(s(0x1b9) + s(0x1b4))), CheckSettingsGeneral = async (f, g = null) => {
        const u = r, v = s, h = {};
        h[u(0x1bf)] = function (n, o) {
            return n && o;
        }, h[v(0x1ab)] = u(0x1a9) + u(0x1c0);
        const i = h, j = {};
        j[v(0x1ae)] = f;
        const l = {};
        l[v(0x1c2)] = j;
        const m = await SettingsGeneral_1[v(0x1ac)][v(0x1b8)](l);
        if (i[v(0x1bf)](!m, !g))
            throw new AppError_1[(v(0x1ac))](i[v(0x1ab)], 0x4f5 + -0x24d * -0x8 + -0x743 * 0x3);
        return m?.[u(0x1ad)] || g;
    };
exports[r(0x1ac)] = CheckSettingsGeneral;