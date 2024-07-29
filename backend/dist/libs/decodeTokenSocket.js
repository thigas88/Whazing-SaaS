'use strict';
const I = b, J = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1ec * -0x9 + 0x180e + 0x283d * -0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const G = b, H = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(G(0x130)) / (0x2178 + -0x26b2 + 0x53b) * (-parseInt(G(0x126)) / (0x4a7 + 0x26ec + -0x2b91)) + -parseInt(G(0x135)) / (-0x1 * 0x1651 + 0x1 * 0xa2d + -0x1 * -0xc27) * (parseInt(G(0x140)) / (0x136b + -0xc88 + 0x6df * -0x1)) + parseInt(G(0x14a)) / (-0x1cc1 + 0xd * -0xba + 0x2638) + parseInt(G(0x142)) / (-0x1af4 + -0x1cf8 + -0x37f2 * -0x1) * (parseInt(G(0x148)) / (-0x228a + -0x7 * 0x55c + -0x4815 * -0x1)) + -parseInt(H(0x129)) / (-0x7c1 * 0x4 + 0x4d9 * -0x1 + 0x23e5 * 0x1) + -parseInt(H(0x13b)) / (-0x3ab + 0x757 + -0x85 * 0x7) + -parseInt(G(0x12b)) / (0x201d + -0x20b + -0x1e08);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x13a24d + -0xce63 + -0x8e777));
var __importDefault = this && this[I(0x11e) + I(0x146)] || function (c) {
    const K = J;
    return c && c[K(0x13f)] ? c : { 'default': c };
};
const x = {};
x[I(0x124)] = !![], Object[J(0x149) + J(0x11f)](exports, J(0x13f), x);
function a() {
    const N = [
        '8194248VetvSw',
        'taJdl',
        '3947000yMAXmu',
        'auth',
        '../config/',
        'logger',
        'error',
        '31WdIRZC',
        'tenantId',
        'OwyFu',
        'DLdve',
        'BLFVa',
        '21zfQfHx',
        'profile',
        'provided',
        'isValid',
        'secret',
        'data',
        '2494854wpOtKG',
        'wCzQr',
        'verify',
        'TpDop',
        '__esModule',
        '9928CdWulr',
        'RBQvA',
        '6iqhbSH',
        'Token\x20not\x20',
        'jgDdY',
        'sxubw',
        'fault',
        'ZvNRn',
        '6086423Vrijfl',
        'defineProp',
        '4061205HOLnuk',
        'qusmM',
        '__importDe',
        'erty',
        'default',
        'akFOy',
        'xBVBL',
        'ogger',
        'value',
        'nQbVQ',
        '44012qjvYxu',
        'jsonwebtok',
        '../utils/l'
    ];
    a = function () {
        return N;
    };
    return a();
}
const jsonwebtoken_1 = require(I(0x127) + 'en'), auth_1 = __importDefault(require(I(0x12d) + J(0x12c))), logger_1 = require(I(0x128) + I(0x123)), decode = g => {
        const L = I, M = I, h = {};
        h[L(0x147)] = L(0x143) + L(0x137), h[L(0x145)] = function (m, n) {
            return m === n;
        }, h[L(0x11d)] = L(0x132), h[L(0x134)] = L(0x13e), h[L(0x144)] = function (m, n) {
            return m !== n;
        }, h[M(0x122)] = L(0x13c), h[L(0x133)] = M(0x141), h[M(0x12a)] = function (m, n) {
            return m !== n;
        }, h[L(0x125)] = L(0x121);
        const i = h, j = {};
        j['id'] = '', j[M(0x136)] = '', j[M(0x131)] = 0x0;
        const k = {};
        k[L(0x138)] = ![], k[L(0x13a)] = j;
        const l = k;
        if (!g) {
            if (i[M(0x145)](i[L(0x11d)], i[M(0x134)])) {
                const n = {};
                return n[L(0x120)] = j, g && h[M(0x13f)] ? i : n;
            } else
                return logger_1[M(0x12e)][M(0x12f)](i[L(0x147)]), l;
        }
        try {
            if (i[L(0x144)](i[L(0x122)], i[L(0x133)])) {
                const n = (0x7 * 0x593 + 0x1f34 + 0x1 * -0x4639, jsonwebtoken_1[M(0x13d)])(g, auth_1[L(0x120)][L(0x139)]), {
                        id: o,
                        profile: p,
                        tenantId: q
                    } = n;
                l[M(0x138)] = !![];
                const r = {};
                r['id'] = o, r[M(0x136)] = p, r[L(0x131)] = q, l[L(0x13a)] = r;
            } else {
                const t = {};
                t['id'] = '', t[M(0x136)] = '', t[M(0x131)] = 0x0;
                const y = {};
                y[L(0x138)] = ![], y[L(0x13a)] = t;
                const z = y;
                if (!i)
                    return o[M(0x12e)][M(0x12f)](i[L(0x147)]), z;
                try {
                    const A = (0x15 * 0x16b + -0x1 * 0x3af + -0x2 * 0xd0c, p[M(0x13d)])(q, r[L(0x120)][M(0x139)]), {
                            id: B,
                            profile: C,
                            tenantId: D
                        } = A;
                    z[M(0x138)] = !![];
                    const E = {};
                    E['id'] = B, E[L(0x136)] = C, E[M(0x131)] = D, z[L(0x13a)] = E;
                } catch (F) {
                    t[M(0x12e)][L(0x12f)](F);
                }
                return z;
            }
        } catch (t) {
            i[L(0x12a)](i[L(0x125)], i[M(0x125)]) ? k[L(0x12e)][L(0x12f)](f) : logger_1[M(0x12e)][L(0x12f)](t);
        }
        return l;
    };
exports[I(0x120)] = decode;