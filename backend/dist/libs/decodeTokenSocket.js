'use strict';
const C = b, D = b;
(function (c, d) {
    const A = b, B = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(A(0x8a)) / (-0x2046 + -0xa53 * -0x1 + 0x15f4) * (parseInt(B(0x6f)) / (0x97 * -0xa + 0x49 * -0x15 + 0xbe5)) + -parseInt(A(0x8e)) / (-0xc * 0x161 + -0xb62 * 0x3 + 0x32b5) * (-parseInt(B(0x90)) / (0xc90 + -0x72f * 0x3 + 0x901)) + -parseInt(B(0x7c)) / (-0x3 * -0x92e + -0x3 * 0x7ea + -0x3c7) * (-parseInt(A(0x94)) / (-0x1f1b * -0x1 + -0x13ad + -0x28 * 0x49)) + -parseInt(B(0x71)) / (-0x1b6d + 0x4d6 + 0xf * 0x182) * (parseInt(B(0x7e)) / (0x2 * -0x923 + -0x1 * -0xa21 + 0x82d)) + -parseInt(A(0x86)) / (-0xa82 + 0x16b5 * 0x1 + -0x40e * 0x3) + parseInt(A(0x8f)) / (-0xde5 * -0x1 + 0x1 * -0x1596 + 0x7bb * 0x1) + parseInt(A(0x6e)) / (0x4c * 0x7a + 0x108 * -0x9 + -0x1ae5) * (parseInt(B(0x72)) / (-0x12a1 + -0xb * -0x6d + 0xdfe));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * 0x79c33 + -0xd * -0xcbf5 + 0x39dbf));
var __importDefault = this && this[C(0x85) + D(0x89)] || function (c) {
    const E = D;
    return c && c[E(0x93)] ? c : { 'default': c };
};
function a() {
    const H = [
        '__esModule',
        '12984VCHpSM',
        'value',
        '../utils/l',
        'default',
        'oIGIO',
        'auth',
        'error',
        'FNQmP',
        '2516525bMePaB',
        '446IMNoFD',
        'fmzlT',
        '7UNbpFs',
        '48MtSHsU',
        'AkOsu',
        'logger',
        'data',
        'defineProp',
        'verify',
        'ogger',
        'rbHrV',
        'mUJOR',
        'qXlac',
        '1555bvvjfF',
        'pXewI',
        '5304584uuLbvd',
        'DPYbe',
        'jsonwebtok',
        'WrjfU',
        'CELQu',
        'erty',
        '../config/',
        '__importDe',
        '4629321hOzWBf',
        'XMPSE',
        'secret',
        'fault',
        '2591odRtAV',
        'NwZsH',
        'xBmLV',
        'isValid',
        '982428SoXwti',
        '2566760lYVEYi',
        '4JpyNCB',
        'profile',
        'tenantId'
    ];
    a = function () {
        return H;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x167 * 0x13 + 0x262d * 0x1 + -0x1 * 0xb20);
        let h = e[f];
        return h;
    }, b(c, d);
}
const u = {};
u[D(0x95)] = !![], Object[D(0x76) + D(0x83)](exports, D(0x93), u);
const jsonwebtoken_1 = require(C(0x80) + 'en'), auth_1 = __importDefault(require(C(0x84) + C(0x6b))), logger_1 = require(C(0x68) + D(0x78)), decode = g => {
        const F = D, G = C, h = {};
        h[F(0x7d)] = function (m, n) {
            return m !== n;
        }, h[G(0x81)] = G(0x7b), h[G(0x73)] = F(0x8b), h[F(0x87)] = function (m, n) {
            return m === n;
        }, h[F(0x7a)] = G(0x82), h[G(0x6d)] = F(0x8c), h[F(0x6a)] = F(0x7f), h[G(0x79)] = G(0x70);
        const i = h, j = {};
        j['id'] = '', j[F(0x91)] = '', j[F(0x92)] = 0x0;
        const k = {};
        k[G(0x8d)] = ![], k[G(0x75)] = j;
        const l = k;
        if (!g) {
            if (i[F(0x7d)](i[F(0x81)], i[G(0x73)]))
                return l;
            else {
                const n = {};
                n['id'] = '', n[F(0x91)] = '', n[G(0x92)] = 0x0;
                const o = {};
                o[G(0x8d)] = ![], o[G(0x75)] = n;
                const p = o;
                if (!h)
                    return p;
                try {
                    const q = (-0xccd + -0x10 * 0x19f + 0x26bd, m[F(0x77)])(n, o[G(0x69)][G(0x88)]), {
                            id: v,
                            profile: w,
                            tenantId: x
                        } = q;
                    p[F(0x8d)] = !![];
                    const y = {};
                    y['id'] = v, y[F(0x91)] = w, y[F(0x92)] = x, p[G(0x75)] = y;
                } catch (z) {
                    q[G(0x74)][G(0x6c)](z);
                }
                return p;
            }
        }
        try {
            if (i[G(0x87)](i[F(0x7a)], i[F(0x6d)]))
                return j;
            else {
                const o = (-0x8d5 + -0x45 * -0x71 + -0x15a0, jsonwebtoken_1[F(0x77)])(g, auth_1[G(0x69)][G(0x88)]), {
                        id: p,
                        profile: q,
                        tenantId: r
                    } = o;
                l[F(0x8d)] = !![];
                const s = {};
                s['id'] = p, s[F(0x91)] = q, s[G(0x92)] = r, l[F(0x75)] = s;
            }
        } catch (t) {
            i[F(0x7d)](i[G(0x6a)], i[G(0x79)]) ? logger_1[F(0x74)][F(0x6c)](t) : k[F(0x74)][G(0x6c)](f);
        }
        return l;
    };
exports[C(0x69)] = decode;