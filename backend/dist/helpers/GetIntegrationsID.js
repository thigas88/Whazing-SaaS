'use strict';
const p = b, q = b;
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(n(0x1c3)) / (0xd44 * -0x1 + -0x5 * 0x4a2 + 0x3 * 0xc25) + -parseInt(n(0x1c1)) / (0x1e83 + -0xdff + -0x1082) * (parseInt(n(0x1c7)) / (-0x103 + -0x4 * -0x371 + 0xe * -0xe9)) + parseInt(n(0x1c4)) / (0xf13 + -0x1ec6 + 0x53d * 0x3) * (parseInt(o(0x1c0)) / (-0x8d7 + -0x93f + 0x121b)) + -parseInt(n(0x1b5)) / (-0x2 * 0x916 + -0x1af + -0x7 * -0x2d7) + parseInt(n(0x1bc)) / (0x2 * -0x605 + 0x2b * -0xe3 + 0x3232) + parseInt(n(0x1cd)) / (0x99c + -0x445 + -0x54f) * (-parseInt(o(0x1cc)) / (0x17 * -0x2b + 0x6cd * 0x1 + -0x2e7)) + -parseInt(n(0x1be)) / (-0x10d * 0x3 + -0x2 * 0x1099 + 0x747 * 0x5);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xca53 + 0x16d16b + 0x1abc9 * -0x5));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xb26 * -0x2 + -0x1273 + 0x2a6d);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[p(0x1bf) + q(0x1b9)] || function (c) {
    const r = q;
    return c && c[r(0x1bd)] ? c : { 'default': c };
};
const k = {};
k[q(0x1af)] = !![], Object[q(0x1c8) + q(0x1b7)](exports, q(0x1bd), k);
function a() {
    const u = [
        'Erro\x20ao\x20ob',
        '3254460xCYFlM',
        'error',
        'erty',
        'Queue',
        'fault',
        'default',
        'jJmvR',
        '11625110Xgnltm',
        '__esModule',
        '8076890cngqfm',
        '__importDe',
        '220BmLGOr',
        '154ETuBfZ',
        'findOne',
        '315595bOZgBv',
        '158076liYeBV',
        'nId',
        'Erro\x20ao\x20bu',
        '4659FGViEY',
        'defineProp',
        'egração:',
        'scar\x20integ',
        '../models/',
        '11212632mzQFLl',
        '8UMyTdm',
        'where',
        'value',
        'ração.',
        'integratio',
        'ter\x20id\x20int',
        'DGkGJ'
    ];
    a = function () {
        return u;
    };
    return a();
}
const Queue_1 = __importDefault(require(q(0x1cb) + q(0x1b8))), GetIntegrationsID = async f => {
        const s = q, t = p, g = {};
        g[s(0x1b3)] = s(0x1b4) + s(0x1b2) + s(0x1c9), g[s(0x1bb)] = t(0x1c6) + s(0x1ca) + s(0x1b0);
        const h = g;
        try {
            const i = {};
            i['id'] = f;
            const j = {};
            j[t(0x1ae)] = i;
            const l = await Queue_1[t(0x1ba)][t(0x1c2)](j);
            if (l[t(0x1b1) + s(0x1c5)])
                return l[t(0x1b1) + t(0x1c5)];
            return null;
        } catch (m) {
            console[s(0x1b6)](h[s(0x1b3)], m);
            throw new Error(h[t(0x1bb)]);
        }
    };
exports[q(0x1ba)] = GetIntegrationsID;