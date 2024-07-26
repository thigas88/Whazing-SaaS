'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x8 * 0x3a6 + -0x45d + 0x2299);
        let h = e[f];
        return h;
    }, b(c, d);
}
const C = b, D = b;
(function (c, d) {
    const A = b, B = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(A(0x130)) / (0x7eb + 0x1fa2 + -0x278c) + parseInt(A(0x12a)) / (0x2e7 * -0x4 + 0x1 * -0x1da7 + -0x2945 * -0x1) + -parseInt(B(0x112)) / (-0x205b + -0x20ea + 0x1 * 0x4148) * (-parseInt(A(0x10c)) / (0x1548 + 0x2317 + -0x385b * 0x1)) + -parseInt(B(0x118)) / (-0x1 * -0xfa7 + -0x1c3e + 0xc9c) + -parseInt(A(0x135)) / (-0x5 * -0x453 + 0x93f + 0xa48 * -0x3) + parseInt(B(0x12f)) / (-0x18a3 + 0x2 * 0x100f + 0xc * -0x9f) + -parseInt(B(0x132)) / (-0x1b82 + 0x911 + 0x1 * 0x1279);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xda70f + -0x4f098 + 0x10c06));
var __importDefault = this && this[C(0x124) + C(0x11a)] || function (c) {
    const E = C;
    return c && c[E(0x11e)] ? c : { 'default': c };
};
const x = {};
x[C(0x126)] = !![], Object[D(0x10d) + C(0x129)](exports, D(0x11e), x);
function a() {
    const H = [
        'data',
        'erty',
        '2454274DkSbhy',
        'error',
        'Plyez',
        'ogger',
        'Token\x20not\x20',
        '895552tTgRSu',
        '756926tvGfXJ',
        'Thfxo',
        '607080ujPJly',
        'pxJpA',
        'pppsC',
        '3632118RbDarP',
        '126668ZqoWSP',
        'defineProp',
        'dKncZ',
        '../utils/l',
        'logger',
        'EIzCs',
        '15GPjOnB',
        'isValid',
        'jsonwebtok',
        'VhzNV',
        'default',
        'BJaVL',
        '4747415jcpdIi',
        'secret',
        'fault',
        'tenantId',
        'vMJeI',
        'XuoTy',
        '__esModule',
        'xiAFj',
        'profile',
        'provided',
        'verify',
        'wjVcF',
        '__importDe',
        'auth',
        'value',
        '../config/'
    ];
    a = function () {
        return H;
    };
    return a();
}
const jsonwebtoken_1 = require(D(0x114) + 'en'), auth_1 = __importDefault(require(C(0x127) + D(0x125))), logger_1 = require(D(0x10f) + C(0x12d)), decode = g => {
        const F = D, G = C, h = {};
        h[F(0x131)] = G(0x12e) + G(0x121), h[G(0x133)] = function (m, n) {
            return m === n;
        }, h[F(0x134)] = G(0x123), h[G(0x11f)] = F(0x11c), h[F(0x10e)] = function (m, n) {
            return m !== n;
        }, h[G(0x111)] = F(0x117), h[F(0x11d)] = function (m, n) {
            return m === n;
        }, h[G(0x115)] = F(0x12c);
        const i = h, j = {};
        j['id'] = '', j[G(0x120)] = '', j[F(0x11b)] = 0x0;
        const k = {};
        k[F(0x113)] = ![], k[G(0x128)] = j;
        const l = k;
        if (!g) {
            if (i[G(0x133)](i[G(0x134)], i[G(0x11f)])) {
                const n = {};
                n['id'] = '', n[G(0x120)] = '', n[F(0x11b)] = 0x0;
                const o = {};
                o[F(0x113)] = ![], o[F(0x128)] = n;
                const p = o;
                if (!i)
                    return o[F(0x110)][F(0x12b)](i[G(0x131)]), p;
                try {
                    const q = (0x264b + -0x37 * 0xb2 + -0xd, p[F(0x122)])(q, r[G(0x116)][G(0x119)]), {
                            id: r,
                            profile: s,
                            tenantId: t
                        } = q;
                    p[F(0x113)] = !![];
                    const y = {};
                    y['id'] = r, y[G(0x120)] = s, y[F(0x11b)] = t, p[G(0x128)] = y;
                } catch (z) {
                    t[F(0x110)][F(0x12b)](z);
                }
                return p;
            } else
                return logger_1[G(0x110)][G(0x12b)](i[G(0x131)]), l;
        }
        try {
            if (i[G(0x10e)](i[F(0x111)], i[F(0x111)])) {
                const o = (-0xc1 * 0x23 + -0xd * 0x97 + -0x1 * -0x220e, h[F(0x122)])(i, j[F(0x116)][G(0x119)]), {
                        id: p,
                        profile: q,
                        tenantId: r
                    } = o;
                k[F(0x113)] = !![];
                const s = {};
                s['id'] = p, s[G(0x120)] = q, s[F(0x11b)] = r, l[F(0x128)] = s;
            } else {
                const o = (0x12ae * 0x1 + -0x1828 + -0x57a * -0x1, jsonwebtoken_1[F(0x122)])(g, auth_1[F(0x116)][F(0x119)]), {
                        id: p,
                        profile: q,
                        tenantId: r
                    } = o;
                l[G(0x113)] = !![];
                const s = {};
                s['id'] = p, s[G(0x120)] = q, s[G(0x11b)] = r, l[F(0x128)] = s;
            }
        } catch (t) {
            i[F(0x11d)](i[F(0x115)], i[G(0x115)]) ? logger_1[F(0x110)][F(0x12b)](t) : k[F(0x110)][G(0x12b)](f);
        }
        return l;
    };
exports[C(0x116)] = decode;