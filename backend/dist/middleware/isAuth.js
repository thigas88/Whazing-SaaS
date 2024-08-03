'use strict';
function a() {
    const M = [
        'secret',
        '867218oaSPJu',
        'headers',
        'verify',
        '207CMFjTC',
        'auth',
        'yCeBu',
        'DTYON',
        '6HvYXFm',
        'default',
        'tenantId',
        '137272PwDqzT',
        '1241084sBiCdL',
        'EhMaE',
        'profile',
        'erty',
        'GfPKk',
        'bxGfI',
        'authorizat',
        'yHbQK',
        '39470envHLA',
        'defineProp',
        'ion',
        'uqFNW',
        'oAATu',
        '../errors/',
        'jsonwebtok',
        'BKPDB',
        'qmGHU',
        '14dtClXt',
        'AppError',
        '4572885gcoNYT',
        'Invalid\x20to',
        'user',
        'ken.',
        '3522448VmsnZJ',
        'swXZH',
        'srbox',
        'FedQS',
        'jKvGn',
        'Token\x20was\x20',
        '__esModule',
        'split',
        'AnRda',
        'value',
        'fault',
        '84gUZqkO',
        'OfDUn',
        '../config/',
        'not\x20provid',
        'ed.',
        '15pYnYNl',
        'LKbml',
        'uhvRp',
        '5418536MqELUS',
        '__importDe',
        'yykKO'
    ];
    a = function () {
        return M;
    };
    return a();
}
const H = b, I = b;
(function (c, d) {
    const F = b, G = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(F(0x177)) / (-0x1270 + -0x265d * -0x1 + -0x13ec) + parseInt(F(0x156)) / (-0x1 * 0x217b + -0x14d8 + -0x1 * -0x3655) + -parseInt(G(0x166)) / (0x10 * -0x190 + -0x1e7 * 0xb + -0x1e * -0x188) * (parseInt(F(0x178)) / (-0x236f + -0x1 * 0x1a06 + 0x3d79)) + -parseInt(F(0x152)) / (-0xe7c + 0x11ae + 0x3 * -0x10f) * (parseInt(G(0x174)) / (-0x4a * -0x56 + 0x7 * 0x1cd + -0x2571)) + parseInt(F(0x150)) / (-0x1b7b + -0x1174 + 0x2cf6) * (parseInt(F(0x169)) / (0x300 * -0x4 + -0x7f * 0x13 + 0x1575)) + -parseInt(G(0x170)) / (0x824 * -0x1 + 0x8c + 0x7a1) * (parseInt(F(0x180)) / (0x89 * -0x25 + 0x1563 + 0x12 * -0x16)) + parseInt(F(0x16d)) / (0x32 * -0x5b + 0x160c + 0x3 * -0x169) * (parseInt(G(0x161)) / (-0x219e + 0x2066 + -0x24 * -0x9));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x136ee * 0x7 + -0xae78f + -0x1 * -0x2243bc));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x373 * 0x5 + -0x17d2 * -0x1 + -0x98 * 0x43);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[H(0x16a) + H(0x160)] || function (c) {
    const J = H;
    return c && c[J(0x15c)] ? c : { 'default': c };
};
const A = {};
A[H(0x15f)] = !![], Object[I(0x181) + I(0x17b)](exports, I(0x15c), A);
const jsonwebtoken_1 = require(H(0x14d) + 'en'), AppError_1 = __importDefault(require(I(0x14c) + H(0x151))), auth_1 = __importDefault(require(I(0x163) + I(0x171))), isAuth = (d, e, f) => {
        const K = H, L = I, g = {
                'GfPKk': K(0x153) + L(0x155),
                'DTYON': L(0x15b) + L(0x164) + L(0x165),
                'AnRda': function (j) {
                    return j();
                },
                'yCeBu': function (j, k) {
                    return j !== k;
                },
                'oAATu': L(0x168),
                'jKvGn': L(0x14a),
                'OfDUn': function (j, k) {
                    return j === k;
                },
                'yHbQK': L(0x159),
                'bxGfI': L(0x16b),
                'EhMaE': function (j, k) {
                    return j !== k;
                },
                'BKPDB': K(0x157),
                'qmGHU': K(0x167),
                'srbox': function (j) {
                    return j();
                }
            }, h = d[L(0x16e)][L(0x17e) + L(0x149)];
        if (!h) {
            if (g[K(0x172)](g[L(0x14b)], g[K(0x15a)]))
                throw new AppError_1[(K(0x175))](g[L(0x173)], 0x422 + -0x5 * 0x4c3 + -0x1540 * -0x1);
            else {
                const k = {};
                return k[L(0x175)] = j, g && h[L(0x15c)] ? i : k;
            }
        }
        const [, i] = h[K(0x15d)]('\x20');
        try {
            if (g[K(0x162)](g[L(0x17f)], g[K(0x17d)]))
                throw new d[(L(0x175))](g[K(0x17c)], 0x1d7 * 0x15 + -0x260a + 0xfa);
            else {
                const l = (0x277 * 0x1 + 0x262d * -0x1 + 0x1 * 0x23b6, jsonwebtoken_1[L(0x16f)])(i, auth_1[K(0x175)][K(0x16c)]), {
                        id: m,
                        profile: n,
                        tenantId: o
                    } = l, p = {};
                p['id'] = m, p[K(0x17a)] = n, p[K(0x176)] = o, d[L(0x154)] = p;
            }
        } catch (q) {
            if (g[K(0x179)](g[L(0x14e)], g[L(0x14f)]))
                throw new AppError_1[(L(0x175))](g[K(0x17c)], 0x2 * 0x9dd + -0x2587 + -0x7c * -0x28);
            else {
                const s = j[L(0x16e)][L(0x17e) + K(0x149)];
                if (!s)
                    throw new q[(K(0x175))](g[L(0x173)], 0x1c45 + -0x5d9 + 0x6f3 * -0x3);
                const [, t] = s[K(0x15d)]('\x20');
                try {
                    const u = (0x208c + 0x45f * -0x1 + 0x1 * -0x1c2d, r[K(0x16f)])(t, s[K(0x175)][K(0x16c)]), {
                            id: v,
                            profile: B,
                            tenantId: C
                        } = u, D = {};
                    D['id'] = v, D[K(0x17a)] = B, D[L(0x176)] = C, t[L(0x154)] = D;
                } catch (E) {
                    throw new v[(L(0x175))](g[K(0x17c)], -0x2495 + 0x58f + 0x5 * 0x685);
                }
                return g[L(0x15e)](p);
            }
        }
        return g[K(0x158)](f);
    };
exports[I(0x175)] = isAuth;