'use strict';
const w = b, x = b;
(function (c, d) {
    const u = b, v = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(u(0x70)) / (-0x7b5 + -0x13e0 + 0xb * 0x282) * (-parseInt(u(0x74)) / (-0x5 * -0x525 + -0x649 * 0x4 + 0x7 * -0x15)) + -parseInt(v(0x84)) / (0x9 * -0x28d + -0x3 * 0x9a + -0x1 * -0x18c6) + parseInt(u(0x7b)) / (-0x5 * 0x4c3 + -0x1241 * 0x2 + 0x3c55) + parseInt(u(0x95)) / (0x1 * -0x118c + 0xb * 0xe9 + 0x78e) * (-parseInt(u(0xb4)) / (-0xb * 0x1c4 + -0x62a + -0x4 * -0x667)) + parseInt(v(0xa7)) / (0x1e7c + 0x17aa + 0x1 * -0x361f) + parseInt(u(0x7a)) / (-0x37f * -0x8 + 0x8ae * 0x1 + -0x249e) * (-parseInt(u(0x98)) / (-0x2134 + 0x1cbc + -0x1 * -0x481)) + parseInt(v(0xb7)) / (0x19f * 0x6 + 0x1675 + 0xab7 * -0x3);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x289e1 + 0x4cded + -0x1 * 0x4d29e));
function a() {
    const F = [
        'tenantId',
        'findByPk',
        'store',
        'SendRefres',
        'usuariosOn',
        'message',
        'profile',
        '5YDEYQv',
        'shTokenSer',
        'nwUiL',
        '84366MVRDvd',
        'emit',
        ':users',
        'status',
        's/UserServ',
        'cookies',
        'default',
        'fault',
        '../helpers',
        'shToken',
        'token',
        'AppError',
        'ERR_SESSIO',
        'OT_FOUND',
        'Sauoj',
        '1174600yfpWbU',
        'erty',
        'ices/Refre',
        'CjKEN',
        'enService',
        'jrt',
        '/SendRefre',
        '../service',
        'ERR_USER_N',
        'cket',
        'email',
        'username',
        'line',
        '474522xRUvVF',
        'zXnbF',
        'logout',
        '3645770QymscW',
        'ices/AuthU',
        '1ybVxET',
        'vice',
        '../errors/',
        '__esModule',
        '48184cqpHDU',
        'json',
        'name',
        'queues',
        '../libs/so',
        'update',
        '280WoLdZI',
        '434652dNiKkw',
        'serSerice',
        'USER_LOGOU',
        'N_EXPIRED',
        'getIO',
        'bCgSS',
        'User',
        'hToken',
        'RefreshTok',
        '133809cNrtGu',
        '../models/',
        '__importDe',
        'value',
        's/AuthServ',
        'password',
        'defineProp',
        'body',
        'configs',
        'userId'
    ];
    a = function () {
        return F;
    };
    return a();
}
var __importDefault = this && this[w(0x86) + w(0x9f)] || function (c) {
    const y = x;
    return c && c[y(0x73)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x301 * -0x4 + 0xbcb * -0x1 + 0x1 * 0x37);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[x(0x87)] = !![], Object[x(0x8a) + x(0xa8)](exports, x(0x73), k), exports[w(0xb6)] = exports[w(0x79)] = exports[x(0x90)] = void (-0x16 * -0x15c + 0x7 * -0x3a0 + -0x488);
const AppError_1 = __importDefault(require(w(0x72) + w(0xa3))), AuthUserSerice_1 = __importDefault(require(w(0xae) + w(0x9c) + w(0xb8) + w(0x7c))), SendRefreshToken_1 = require(w(0xa0) + x(0xad) + w(0xa1)), RefreshTokenService_1 = require(w(0xae) + w(0x88) + w(0xa9) + x(0x96) + x(0x71)), socket_1 = require(w(0x78) + w(0xb0)), User_1 = __importDefault(require(w(0x85) + w(0x81))), store = async (f, g) => {
        const z = x, A = x, h = {};
        h[z(0x97)] = z(0x79);
        const i = h, j = (0x1062 + -0x13c * 0x9 + -0x546, socket_1[z(0x7f)])(), {
                email: l,
                password: m
            } = f[A(0x8b)], n = {};
        n[z(0xb1)] = l, n[z(0x89)] = m;
        const {
            token: o,
            user: p,
            refreshToken: q,
            usuariosOnline: r
        } = await (-0x1812 + 0xd * -0x28 + -0x1a * -0x101, AuthUserSerice_1[A(0x9e)])(n);
        (0xffd + 0x10d7 + -0x20d4, SendRefreshToken_1[A(0x91) + A(0x82)])(g, q);
        const s = {};
        s[z(0xa2)] = o, s[z(0xb2)] = p[A(0x76)], s[A(0xb1)] = p[z(0xb1)], s[A(0x94)] = p[z(0x94)], s[A(0x9b)] = p[z(0x9b)], s[z(0x8d)] = p['id'], s[A(0x8e)] = p[A(0x8e)], s[z(0x77)] = p[z(0x77)], s[A(0x92) + z(0xb3)] = r, s[z(0x8c)] = p[z(0x8c)];
        const t = s;
        return j[z(0x99)](t[z(0x8e)] + A(0x9a), {
            'action': i[A(0x97)],
            'data': {
                'username': t[z(0xb2)],
                'email': t[z(0xb1)],
                'isOnline': !![],
                'lastLogin': new Date()
            }
        }), g[A(0x9b)](0x1ec6 + -0x2615 + 0x817)[A(0x75)](t);
    };
exports[w(0x90)] = store;
const update = async (e, f) => {
    const B = w, C = x, g = {};
    g[B(0xaa)] = C(0xa4) + B(0x7e);
    const h = g, i = e[B(0x9d)][C(0xac)];
    if (!i)
        throw new AppError_1[(C(0x9e))](h[B(0xaa)], -0xd70 + -0x2225 + -0xe9 * -0x36);
    const {
        newToken: j,
        refreshToken: l
    } = await (0x2c5 * 0x7 + 0x1 * 0x859 + -0x1bbc, RefreshTokenService_1[C(0x83) + B(0xab)])(i);
    (0xec9 + -0x23fc + 0x1533 * 0x1, SendRefreshToken_1[B(0x91) + C(0x82)])(f, l);
    const m = {};
    return m[C(0xa2)] = j, f[B(0x75)](m);
};
exports[w(0x79)] = update;
const logout = async (e, f) => {
    const D = x, E = x, g = {};
    g[D(0x80)] = E(0xaf) + E(0xa5), g[E(0xa6)] = E(0x79), g[D(0xb5)] = D(0x7d) + 'T';
    const h = g, {userId: i} = e[E(0x8b)];
    if (!i)
        throw new AppError_1[(E(0x9e))](h[E(0x80)], -0x2b * 0x3d + 0x16f * -0x7 + 0x15dc);
    const j = (-0x2ec + -0xc1c + 0x4a * 0x34, socket_1[E(0x7f)])(), l = await User_1[E(0x9e)][E(0x8f)](i);
    l && l[E(0x79)]({
        'isOnline': ![],
        'lastLogout': new Date()
    });
    j[E(0x99)](l?.[D(0x8e)] + E(0x9a), {
        'action': h[E(0xa6)],
        'data': {
            'username': l?.[E(0x76)],
            'email': l?.[D(0xb1)],
            'isOnline': ![],
            'lastLogout': new Date()
        }
    });
    const m = {};
    return m[E(0x93)] = h[E(0xb5)], f[E(0x75)](m);
};
exports[x(0xb6)] = logout;