'use strict';
const H = b, I = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xc6e + 0x739 + -0x2c * 0x67);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const F = b, G = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(F(0x207)) / (-0x81 + 0x886 + -0x804) * (parseInt(G(0x1fc)) / (-0x4d * 0x3d + 0x2 * 0x163 + 0xf95 * 0x1)) + -parseInt(F(0x203)) / (0xd * -0x2bb + 0xa30 + 0x1952) + -parseInt(F(0x1f4)) / (0x2 * 0x783 + -0x4 * 0x36d + -0x14e) * (-parseInt(F(0x204)) / (0x1 * -0x21fa + 0x1f9 * -0x13 + 0x477a)) + -parseInt(F(0x21e)) / (0x2269 * -0x1 + 0xa20 + 0x184f) + -parseInt(G(0x226)) / (0x21f4 + 0x1 * 0x25fe + -0x47eb) * (parseInt(F(0x21f)) / (0x927 * -0x1 + 0x1 * -0xda6 + 0x16d5)) + parseInt(F(0x222)) / (-0xafc * 0x1 + -0x187f * -0x1 + -0xd7a) * (-parseInt(G(0x1ff)) / (-0x1a07 + -0x44b * -0x1 + 0x15c6 * 0x1)) + -parseInt(F(0x210)) / (0xaf9 + -0x644 * -0x5 + -0x2a42) * (-parseInt(G(0x223)) / (0x81 + 0x2033 + 0x688 * -0x5));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * 0xaaecd + 0x14aee0 + 0x24165));
var __importDefault = this && this[H(0x202) + H(0x215)] || function (c) {
    const J = I;
    return c && c[J(0x1f6)] ? c : { 'default': c };
};
const A = {};
A[H(0x20b)] = !![], Object[I(0x219) + H(0x20d)](exports, H(0x1f6), A);
const jsonwebtoken_1 = require(H(0x213) + 'en'), AppError_1 = __importDefault(require(H(0x220) + H(0x20c))), auth_1 = __importDefault(require(I(0x205) + I(0x21b))), isAuth = (d, e, f) => {
        const K = I, L = H, g = {
                'ZaNtd': K(0x20f) + K(0x216) + L(0x218),
                'utasi': L(0x206) + L(0x21d),
                'YMSQY': function (j) {
                    return j();
                },
                'PzUHJ': function (j, k) {
                    return j !== k;
                },
                'WoAOZ': L(0x212),
                'dAyyp': function (j, k) {
                    return j === k;
                },
                'TKUSH': L(0x217),
                'rBMMu': function (j, k) {
                    return j === k;
                },
                'OVHbN': L(0x1fe),
                'vaDCB': L(0x21a)
            }, h = d[L(0x200)][K(0x1fa) + K(0x1f9)];
        if (!h) {
            if (g[K(0x20a)](g[L(0x209)], g[K(0x209)]))
                throw new d[(L(0x201))](g[K(0x225)], -0x4 * -0x68e + 0x1a9d + -0x3342);
            else
                throw new AppError_1[(L(0x201))](g[K(0x225)], 0x135 * -0x1e + 0x2414 * -0x1 + 0x23d * 0x21);
        }
        const [, i] = h[L(0x211)]('\x20');
        try {
            if (g[L(0x20e)](g[K(0x214)], g[L(0x214)])) {
                const k = (0x8f6 + 0x71 * 0x17 + -0x131d, jsonwebtoken_1[L(0x1f7)])(i, auth_1[L(0x201)][K(0x21c)]), {
                        id: l,
                        profile: m,
                        tenantId: n
                    } = k, o = {};
                o['id'] = l, o[K(0x1f5)] = m, o[K(0x1f3)] = n, d[L(0x1fb)] = o;
            } else
                throw new d[(K(0x201))](g[K(0x208)], 0x11c0 + 0x11a3 + -0x21d0);
        } catch (q) {
            if (g[K(0x1f8)](g[K(0x224)], g[L(0x221)])) {
                const s = j[K(0x200)][K(0x1fa) + L(0x1f9)];
                if (!s)
                    throw new q[(K(0x201))](g[K(0x225)], 0x1176 + -0x2649 + 0x7a * 0x2f);
                const [, t] = s[K(0x211)]('\x20');
                try {
                    const u = (-0x2 * -0xa9 + 0x1819 + -0x196b, r[L(0x1f7)])(t, s[L(0x201)][L(0x21c)]), {
                            id: v,
                            profile: B,
                            tenantId: C
                        } = u, D = {};
                    D['id'] = v, D[L(0x1f5)] = B, D[K(0x1f3)] = C, t[L(0x1fb)] = D;
                } catch (E) {
                    throw new v[(L(0x201))](g[K(0x208)], 0x6b2 * 0x1 + 0x29f * 0x1 + -0x1 * 0x7be);
                }
                return g[K(0x1fd)](p);
            } else
                throw new AppError_1[(L(0x201))](g[K(0x208)], -0x1 * 0x1481 + 0xe67 + 0x7ad);
        }
        return g[K(0x1fd)](f);
    };
function a() {
    const M = [
        '1566WPbqlW',
        '316104hyAeHW',
        'OVHbN',
        'ZaNtd',
        '373023NMrSKQ',
        'tenantId',
        '4rgPRwV',
        'profile',
        '__esModule',
        'verify',
        'rBMMu',
        'ion',
        'authorizat',
        'user',
        '782dcRFBY',
        'YMSQY',
        'yenkv',
        '78590hpRRwT',
        'headers',
        'default',
        '__importDe',
        '715104OiVueB',
        '4392265zUkkIT',
        '../config/',
        'Invalid\x20to',
        '671xYmmIe',
        'utasi',
        'WoAOZ',
        'PzUHJ',
        'value',
        'AppError',
        'erty',
        'dAyyp',
        'Token\x20was\x20',
        '1089WdmpdA',
        'split',
        'WXjCw',
        'jsonwebtok',
        'TKUSH',
        'fault',
        'not\x20provid',
        'Tahrk',
        'ed.',
        'defineProp',
        'BtmCp',
        'auth',
        'secret',
        'ken.',
        '4840536TKUvUn',
        '80xZaCpT',
        '../errors/',
        'vaDCB'
    ];
    a = function () {
        return M;
    };
    return a();
}
exports[H(0x201)] = isAuth;