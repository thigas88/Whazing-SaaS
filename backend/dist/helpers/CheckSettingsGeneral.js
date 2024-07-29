'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x6 * 0x3f1 + 0x20e5 + 0x7 * -0x135);
        let h = e[f];
        return h;
    }, b(c, d);
}
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0xe6)) / (-0x22d * 0x10 + 0xa * -0x7a + 0x2795) * (-parseInt(p(0xdc)) / (-0x146b + 0x1f * 0xb4 + -0x15f)) + -parseInt(q(0xcd)) / (-0x1ccf + -0x3 * -0xc25 + -0x1 * 0x79d) + parseInt(p(0xd8)) / (0x24ab + 0x22b0 + 0x4757 * -0x1) + -parseInt(q(0xdf)) / (-0x840 + 0x1949 + -0x1104) * (parseInt(q(0xde)) / (0xe7 * 0x7 + -0x1222 + -0xbd7 * -0x1)) + parseInt(q(0xd3)) / (0x1 * -0xcf4 + -0x3 * 0x9f1 + 0x2ace) + parseInt(p(0xe2)) / (0x591 + -0x16f * 0x16 + 0x1a01) * (-parseInt(p(0xe8)) / (0x29a * 0x2 + -0x16aa + 0x117f * 0x1)) + -parseInt(p(0xd6)) / (0x133 * 0x6 + 0x17a2 + -0x233 * 0xe) * (-parseInt(q(0xd7)) / (0x96 * 0x3c + 0x135d + -0x367a));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x2266f + 0x7c886 + 0x2 * 0x1a7ed));
function a() {
    const w = [
        '7890925mURwko',
        'SettingsGe',
        '../models/',
        '10wrdyDj',
        '3608561IFltbp',
        '2580868mWisPd',
        'defineProp',
        'value',
        '../errors/',
        '6594GiFviZ',
        'ekZOr',
        '12AvMdzC',
        '404470EjttpZ',
        'neral',
        'AppError',
        '196280YwVEEq',
        'TING_FOUND',
        '__importDe',
        'default',
        '81vSyufl',
        'KIRTs',
        '297dqulLZ',
        '__esModule',
        'fault',
        '827454GzgzUZ',
        'key',
        'erty',
        'where',
        'ERR_NO_SET',
        'findOne'
    ];
    a = function () {
        return w;
    };
    return a();
}
var __importDefault = this && this[r(0xe4) + s(0xcc)] || function (c) {
    const t = s;
    return c && c[t(0xe9)] ? c : { 'default': c };
};
const k = {};
k[s(0xda)] = !![], Object[s(0xd9) + r(0xcf)](exports, s(0xe9), k);
const SettingsGeneral_1 = __importDefault(require(s(0xd5) + r(0xd4) + s(0xe0))), AppError_1 = __importDefault(require(s(0xdb) + s(0xe1))), CheckSettingsGeneral = async (f, g = null) => {
        const u = s, v = s, h = {};
        h[u(0xdd)] = function (n, o) {
            return n && o;
        }, h[u(0xe7)] = u(0xd1) + u(0xe3);
        const i = h, j = {};
        j[u(0xce)] = f;
        const l = {};
        l[u(0xd0)] = j;
        const m = await SettingsGeneral_1[u(0xe5)][u(0xd2)](l);
        if (i[u(0xdd)](!m, !g))
            throw new AppError_1[(v(0xe5))](i[u(0xe7)], -0x88 * 0x44 + 0x176f + 0xe45);
        return m?.[v(0xda)] || g;
    };
exports[r(0xe5)] = CheckSettingsGeneral;