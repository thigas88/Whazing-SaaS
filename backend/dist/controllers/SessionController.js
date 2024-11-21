'use strict';
const w = b, x = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xad9 + -0x141a + 0xabf);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const u = b, v = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(u(0x18a)) / (-0x10da + 0xac7 * -0x3 + 0x3130) + -parseInt(v(0x1b6)) / (-0x1505 + 0xc5d + 0x8aa) * (parseInt(v(0x1aa)) / (-0xcba * -0x1 + 0x2343 + 0x7ff * -0x6)) + -parseInt(v(0x19a)) / (-0x1fbb + -0x2392 + 0x4351) * (parseInt(u(0x19b)) / (-0x2090 + -0x46f * -0x7 + 0x24 * 0xb)) + parseInt(v(0x1bf)) / (0xeea + 0x16 * -0xac + -0x1c) + parseInt(v(0x180)) / (-0x7f * 0x1 + -0x199 * -0x17 + -0x2439) + parseInt(u(0x19e)) / (-0x1 * -0x18f2 + 0xb57 + -0x2441) + parseInt(u(0x1c1)) / (-0x7 * -0x53b + -0x1 * 0x1c76 + -0x81e);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x251 * 0x65b + -0x1154a9 + -0x109ea3 * -0x1));
var __importDefault = this && this[w(0x1ac) + x(0x191)] || function (c) {
    const y = w;
    return c && c[y(0x19c)] ? c : { 'default': c };
};
const k = {};
k[w(0x17e)] = !![], Object[x(0x1b1) + w(0x1ad)](exports, w(0x19c), k), exports[x(0x18c)] = exports[x(0x190)] = exports[x(0x199)] = void (-0x26ab + 0x40d * -0x7 + 0x4306);
const AppError_1 = __importDefault(require(x(0x1a7) + x(0x193))), AuthUserSerice_1 = __importDefault(require(x(0x1ba) + w(0x1bb) + w(0x1c0) + w(0x1b8))), SendRefreshToken_1 = require(w(0x188) + x(0x197) + x(0x1c3)), RefreshTokenService_1 = require(x(0x1ba) + x(0x196) + w(0x186) + x(0x18f) + x(0x1a9)), socket_1 = require(x(0x1af) + x(0x18e)), User_1 = __importDefault(require(x(0x1a8) + w(0x198))), store = async (f, g) => {
        const z = w, A = x, h = {};
        h[z(0x183)] = A(0x190);
        const i = h, j = (-0x63 * 0x31 + 0x1974 + 0x9 * -0xb9, socket_1[A(0x18d)])(), {
                email: l,
                password: m
            } = f[A(0x1ab)], n = {};
        n[z(0x1c2)] = l, n[z(0x1b7)] = m;
        const {
            token: o,
            user: p,
            refreshToken: q,
            usuariosOnline: r
        } = await (0x5b1 + -0x694 + 0xe3, AuthUserSerice_1[z(0x1a1)])(n);
        (0xd95 + 0xe49 + 0x7b * -0x3a, SendRefreshToken_1[z(0x182) + A(0x1b9)])(g, q);
        const s = {};
        s[A(0x1c5)] = o, s[z(0x184)] = p[z(0x1b3)], s[z(0x1c2)] = p[A(0x1c2)], s[A(0x18b)] = p[A(0x18b)], s[A(0x1ae)] = p[z(0x1ae)], s[A(0x1a3)] = p['id'], s[z(0x195)] = p[A(0x195)], s[z(0x19f)] = p[A(0x19f)], s[A(0x1b2) + z(0x1bd)] = r, s[A(0x1a0)] = p[z(0x1a0)];
        const t = s;
        return j[A(0x181)](t[A(0x195)] + A(0x189), {
            'action': i[A(0x183)],
            'data': {
                'username': t[A(0x184)],
                'email': t[z(0x1c2)],
                'isOnline': !![],
                'lastLogin': new Date()
            }
        }), g[z(0x1ae)](0x7 * -0x455 + -0x1 * 0x2ed + 0x2208)[A(0x1a5)](t);
    };
exports[x(0x199)] = store;
const update = async (e, f) => {
    const B = x, C = w, g = {};
    g[B(0x17f)] = C(0x1bc) + C(0x187);
    const h = g, i = e[C(0x1c4)][C(0x194)];
    if (!i)
        throw new AppError_1[(C(0x1a1))](h[C(0x17f)], -0x370 + 0x1c59 * 0x1 + -0x8 * 0x2eb);
    const {
        newToken: j,
        refreshToken: l
    } = await (0x4b7 + -0xdf4 + -0x37 * -0x2b, RefreshTokenService_1[B(0x1a4) + C(0x1b0)])(i);
    (0x210a * 0x1 + 0x423 + -0x252d, SendRefreshToken_1[B(0x182) + C(0x1b9)])(f, l);
    const m = {};
    return m[B(0x1c5)] = j, f[B(0x1a5)](m);
};
exports[x(0x190)] = update;
const logout = async (e, f) => {
    const D = w, E = w, g = {};
    g[D(0x185)] = D(0x192) + D(0x1b4), g[D(0x19d)] = E(0x190), g[D(0x1b5)] = E(0x1a2) + 'T';
    const h = g, {userId: i} = e[D(0x1ab)];
    if (!i)
        throw new AppError_1[(E(0x1a1))](h[D(0x185)], 0x11fb + -0x7 * 0x6d + -0xd6c);
    const j = (-0x1 * 0x2651 + 0x3e * 0x3e + 0x1 * 0x174d, socket_1[E(0x18d)])(), l = await User_1[D(0x1a1)][D(0x1be)](i);
    l && l[E(0x190)]({
        'isOnline': ![],
        'lastLogout': new Date()
    });
    j[D(0x181)](l?.[D(0x195)] + E(0x189), {
        'action': h[D(0x19d)],
        'data': {
            'username': l?.[E(0x1b3)],
            'email': l?.[E(0x1c2)],
            'isOnline': ![],
            'lastLogout': new Date()
        }
    });
    const m = {};
    return m[D(0x1a6)] = h[E(0x1b5)], f[E(0x1a5)](m);
};
exports[x(0x18c)] = logout;
function a() {
    const F = [
        '1810115vUQYRP',
        'profile',
        'logout',
        'getIO',
        'cket',
        'shTokenSer',
        'update',
        'fault',
        'ERR_USER_N',
        'AppError',
        'jrt',
        'tenantId',
        's/AuthServ',
        '/SendRefre',
        'User',
        'store',
        '2023876qmfCLp',
        '5XrLsjL',
        '__esModule',
        'bXwyY',
        '2239864HcmLrO',
        'queues',
        'configs',
        'default',
        'USER_LOGOU',
        'userId',
        'RefreshTok',
        'json',
        'message',
        '../errors/',
        '../models/',
        'vice',
        '33PZqfJW',
        'body',
        '__importDe',
        'erty',
        'status',
        '../libs/so',
        'enService',
        'defineProp',
        'usuariosOn',
        'name',
        'OT_FOUND',
        'DbHEK',
        '19862zWueSD',
        'password',
        'serSerice',
        'hToken',
        '../service',
        's/UserServ',
        'ERR_SESSIO',
        'line',
        'findByPk',
        '1312260RlwUqW',
        'ices/AuthU',
        '21594753qrJspx',
        'email',
        'shToken',
        'cookies',
        'token',
        'value',
        'fdiui',
        '3117996llekaF',
        'emit',
        'SendRefres',
        'JkmmB',
        'username',
        'DYgbA',
        'ices/Refre',
        'N_EXPIRED',
        '../helpers',
        ':users'
    ];
    a = function () {
        return F;
    };
    return a();
}