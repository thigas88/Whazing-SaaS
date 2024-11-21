'use strict';
const o = b, p = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * 0x1b85 + -0xcb5 + 0x299c);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(m(0x176)) / (-0x1 * -0x1709 + 0x63a * 0x1 + -0x1d42) * (-parseInt(m(0x182)) / (0x4d1 + 0xf98 + -0x1 * 0x1467)) + parseInt(m(0x16b)) / (-0x2 * -0xc28 + -0x141f * -0x1 + -0x4 * 0xb1b) + parseInt(n(0x175)) / (-0x33 * 0x37 + -0x261d + 0x1 * 0x3116) * (parseInt(n(0x169)) / (-0x54 * 0x62 + -0x11e4 + -0x1 * -0x3211)) + -parseInt(m(0x18b)) / (0x1904 * -0x1 + -0xfd2 + -0x416 * -0xa) + -parseInt(n(0x166)) / (0x219d + -0x2 * 0xe72 + -0x259 * 0x2) * (parseInt(n(0x16c)) / (0x6d * -0x3d + 0x169 * -0x1 + 0x1b6a)) + -parseInt(n(0x187)) / (0x162a + 0x800 + -0x1e21) + parseInt(m(0x178)) / (0x228a + 0x12fa + -0x357a);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x19 * -0x3fa0 + -0x5122b * 0x5 + 0xff617 * 0x2));
function a() {
    const t = [
        'value',
        'fault',
        'rs/AppErro',
        '13376313Elrokq',
        'data',
        'sUhim',
        'n/json',
        '3891612elstnH',
        '__esModule',
        'headers',
        'T_PHONE_NU',
        'error',
        '../../erro',
        'Content-Ty',
        '7wnnllJ',
        'axios',
        'TERED:\x20',
        '10bloXAq',
        'default',
        '1912038cCFlUp',
        '8153848QSUjMg',
        'url',
        'erty',
        'mber',
        'applicatio',
        '__importDe',
        'pHCfU',
        'get',
        's/logger',
        '872308hrGGNa',
        '1TAlqsD',
        'logger',
        '37516320PTjjFt',
        '/v1/config',
        'API_URL_36',
        's/phone_nu',
        '../../util',
        '360_NOT_GE',
        'method',
        'defineProp',
        'env',
        'D360-API-K',
        '1666838lNexqE',
        'MBER_REGIS'
    ];
    a = function () {
        return t;
    };
    return a();
}
var __importDefault = this && this[o(0x171) + o(0x185)] || function (c) {
    const q = p;
    return c && c[q(0x18c)] ? c : { 'default': c };
};
const k = {};
k[p(0x184)] = !![], Object[o(0x17f) + o(0x16e)](exports, o(0x18c), k);
const axios_1 = __importDefault(require(p(0x167))), AppError_1 = __importDefault(require(p(0x164) + o(0x186) + 'r')), logger_1 = require(o(0x17c) + p(0x174)), GetRegisteredPhone = async e => {
        const r = o, s = o, f = {};
        f[r(0x172)] = s(0x173), f[r(0x189)] = s(0x170) + s(0x18a);
        const g = f, h = process[r(0x180)][s(0x17a) + '0'] + (s(0x179) + r(0x17b) + s(0x16f));
        try {
            const i = {};
            i[s(0x17e)] = g[r(0x172)], i[s(0x16d)] = h, i[r(0x18d)] = {}, i[r(0x18d)][r(0x181) + 'EY'] = e, i[r(0x18d)][r(0x165) + 'pe'] = g[s(0x189)];
            const j = await (0x10 * 0x1dc + -0x240b + -0x64b * -0x1, axios_1[s(0x16a)])(i);
            return j[s(0x188)];
        } catch (l) {
            logger_1[r(0x177)][s(0x163)](l);
            throw new AppError_1[(s(0x16a))](r(0x17d) + r(0x162) + r(0x183) + r(0x168) + l);
        }
    };
exports[p(0x16a)] = GetRegisteredPhone;