'use strict';
const I = b, J = b;
(function (c, d) {
    const G = b, H = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(G(0x1c1)) / (-0xd5d + 0x22de + -0x1580) + parseInt(G(0x1ae)) / (-0x2 * 0x1024 + 0x5b * 0x5 + -0x6b * -0x49) + -parseInt(G(0x1b8)) / (0x2699 + 0x1274 + -0x390a) * (-parseInt(G(0x1bc)) / (0x19 * 0x21 + -0x96a + -0xe3 * -0x7)) + -parseInt(G(0x1b6)) / (-0x36f + 0x1c74 + -0x1900) + -parseInt(G(0x1c2)) / (-0xc27 + -0x1845 * -0x1 + -0x158 * 0x9) * (parseInt(G(0x1a8)) / (0x1 * 0x26c5 + 0x13be + 0xc5 * -0x4c)) + -parseInt(H(0x1b4)) / (0x1aeb + 0x2378 + -0x3e5b) * (parseInt(G(0x1be)) / (-0x8be * -0x4 + -0x8ad * 0x3 + -0x8e8)) + parseInt(H(0x1c0)) / (-0x67f + -0x21e9 * -0x1 + -0x1b60);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xd * -0xf0d4 + 0x66916 + 0x132679));
function a() {
    const N = [
        'jsonwebtok',
        'erty',
        'isValid',
        '7305296UcefPp',
        '../config/',
        '593280GFKeEw',
        'default',
        '4531566peXuSA',
        'profile',
        'HJFjh',
        'UFAvD',
        '4BUQwer',
        '__importDe',
        '9YVLBSn',
        'Token\x20not\x20',
        '6395970NiitWW',
        '213221xxcssS',
        '83364ZbzcBc',
        'TSxep',
        'secret',
        'tenantId',
        'TTmsf',
        'value',
        'CsyOR',
        '../utils/l',
        'data',
        'bObnE',
        'icyFv',
        'auth',
        'ogger',
        'provided',
        'error',
        'logger',
        'jrOTQ',
        'defineProp',
        '602bEOkwX',
        'oigCR',
        'RwuEe',
        'vOGRY',
        '__esModule',
        'EYEgR',
        '2326958kjEAXC',
        'verify',
        'fault'
    ];
    a = function () {
        return N;
    };
    return a();
}
var __importDefault = this && this[I(0x1bd) + I(0x1b0)] || function (c) {
    const K = J;
    return c && c[K(0x1ac)] ? c : { 'default': c };
};
const x = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x108 * 0x21 + -0x2 * -0xe82 + 0x51 * 0x15);
        let h = e[f];
        return h;
    }, b(c, d);
}
x[J(0x1c7)] = !![], Object[I(0x1a7) + J(0x1b2)](exports, I(0x1ac), x);
const jsonwebtoken_1 = require(J(0x1b1) + 'en'), auth_1 = __importDefault(require(J(0x1b5) + I(0x1a1))), logger_1 = require(J(0x1c9) + I(0x1a2)), decode = g => {
        const L = I, M = I, h = {};
        h[L(0x1cb)] = M(0x1bf) + M(0x1a3), h[L(0x1ba)] = function (m, n) {
            return m !== n;
        }, h[L(0x1c8)] = L(0x1ad), h[L(0x1aa)] = function (m, n) {
            return m === n;
        }, h[L(0x1bb)] = M(0x1c6), h[M(0x1a6)] = function (m, n) {
            return m !== n;
        }, h[M(0x1cc)] = M(0x1a9), h[M(0x1ab)] = M(0x1c3);
        const i = h, j = {};
        j['id'] = '', j[L(0x1b9)] = '', j[L(0x1c5)] = 0x0;
        const k = {};
        k[L(0x1b3)] = ![], k[L(0x1ca)] = j;
        const l = k;
        if (!g) {
            if (i[M(0x1ba)](i[L(0x1c8)], i[L(0x1c8)])) {
                const n = (-0x4c + 0x18a0 + -0x1854, h[L(0x1af)])(i, j[M(0x1b7)][M(0x1c4)]), {
                        id: o,
                        profile: p,
                        tenantId: q
                    } = n;
                k[L(0x1b3)] = !![];
                const r = {};
                r['id'] = o, r[L(0x1b9)] = p, r[L(0x1c5)] = q, l[L(0x1ca)] = r;
            } else
                return logger_1[M(0x1a5)][L(0x1a4)](i[L(0x1cb)]), l;
        }
        try {
            if (i[M(0x1aa)](i[M(0x1bb)], i[L(0x1bb)])) {
                const n = (0x1d1b * -0x1 + -0x1bc + 0x1ed7, jsonwebtoken_1[M(0x1af)])(g, auth_1[L(0x1b7)][L(0x1c4)]), {
                        id: o,
                        profile: p,
                        tenantId: q
                    } = n;
                l[L(0x1b3)] = !![];
                const r = {};
                r['id'] = o, r[M(0x1b9)] = p, r[L(0x1c5)] = q, l[M(0x1ca)] = r;
            } else {
                const t = {};
                t['id'] = '', t[L(0x1b9)] = '', t[L(0x1c5)] = 0x0;
                const y = {};
                y[L(0x1b3)] = ![], y[L(0x1ca)] = t;
                const z = y;
                if (!i)
                    return o[L(0x1a5)][L(0x1a4)](i[M(0x1cb)]), z;
                try {
                    const A = (0x9 * -0x41 + -0x11a7 + -0x1d0 * -0xb, p[L(0x1af)])(q, r[L(0x1b7)][L(0x1c4)]), {
                            id: B,
                            profile: C,
                            tenantId: D
                        } = A;
                    z[M(0x1b3)] = !![];
                    const E = {};
                    E['id'] = B, E[M(0x1b9)] = C, E[M(0x1c5)] = D, z[L(0x1ca)] = E;
                } catch (F) {
                    t[L(0x1a5)][M(0x1a4)](F);
                }
                return z;
            }
        } catch (t) {
            if (i[M(0x1a6)](i[M(0x1cc)], i[M(0x1ab)]))
                logger_1[L(0x1a5)][M(0x1a4)](t);
            else
                return k[L(0x1a5)][L(0x1a4)](i[L(0x1cb)]), f;
        }
        return l;
    };
exports[J(0x1b7)] = decode;