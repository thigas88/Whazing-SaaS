'use strict';
const w = b, x = b;
(function (c, d) {
    const u = b, v = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(u(0x162)) / (0x5 * -0x3fd + 0x36d * -0xb + 0x1 * 0x39a1) * (-parseInt(u(0x18c)) / (-0x24c5 + -0x65 * 0x7 + -0xe * -0x2d3)) + -parseInt(u(0x181)) / (0x11db + -0x1412 + -0x5f * -0x6) + -parseInt(u(0x177)) / (-0x2358 + -0x1 * -0xd01 + -0x61 * -0x3b) + -parseInt(v(0x14b)) / (-0x1 * 0x2306 + 0x1 * 0x2203 + 0x108) + parseInt(u(0x146)) / (0x190b + 0x1204 * -0x1 + -0x701) * (parseInt(u(0x15e)) / (-0xb3 * 0x1a + 0x1b * -0x13d + -0x2 * -0x19d2)) + parseInt(v(0x173)) / (0x1790 + 0x144d + -0x2bd5) + -parseInt(u(0x16c)) / (-0xa6 + 0x23a4 + 0x1d7 * -0x13) * (-parseInt(v(0x15a)) / (0x2a0 + 0x7 * -0x3eb + 0x18d7));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xdd * 0xf04 + 0x4f5e1 + -0x98900));
var __importDefault = this && this[w(0x185) + w(0x160)] || function (c) {
    const y = w;
    return c && c[y(0x18a)] ? c : { 'default': c };
};
const k = {};
k[w(0x165)] = !![], Object[w(0x175) + x(0x179)](exports, x(0x18a), k), exports[x(0x167)] = exports[w(0x15c)] = exports[x(0x18d)] = void (-0x1aff + 0x3 * 0x687 + 0x76a);
const AppError_1 = __importDefault(require(x(0x174) + x(0x184))), AuthUserSerice_1 = __importDefault(require(x(0x157) + x(0x17e) + x(0x149) + w(0x148))), SendRefreshToken_1 = require(w(0x155) + w(0x153) + w(0x176)), RefreshTokenService_1 = require(x(0x157) + x(0x147) + x(0x17f) + w(0x151) + w(0x158)), socket_1 = require(x(0x14e) + x(0x15f)), User_1 = __importDefault(require(x(0x180) + x(0x169))), store = async (f, g) => {
        const z = w, A = w, h = {};
        h[z(0x186)] = z(0x15c);
        const i = h, j = (0x49a * -0x1 + -0xb21 + 0x1 * 0xfbb, socket_1[A(0x15d)])(), {
                email: l,
                password: m
            } = f[z(0x152)], n = {};
        n[z(0x17d)] = l, n[z(0x17b)] = m;
        const {
            token: o,
            user: p,
            refreshToken: q,
            usuariosOnline: r
        } = await (-0x1c22 + -0x58 + 0x1c7a, AuthUserSerice_1[z(0x161)])(n);
        (0x371 * -0x7 + -0x2 * 0x2ed + 0x1df1, SendRefreshToken_1[A(0x14f) + z(0x182)])(g, q);
        const s = {};
        s[A(0x172)] = o, s[z(0x145)] = p[z(0x170)], s[A(0x17d)] = p[A(0x17d)], s[A(0x187)] = p[z(0x187)], s[z(0x17c)] = p[z(0x17c)], s[z(0x16f)] = p['id'], s[A(0x163)] = p[A(0x163)], s[z(0x16d)] = p[z(0x16d)], s[z(0x171) + A(0x18b)] = r, s[A(0x156)] = p[A(0x156)];
        const t = s;
        return j[z(0x178)](t[A(0x163)] + z(0x189), {
            'action': i[A(0x186)],
            'data': {
                'username': t[A(0x145)],
                'email': t[z(0x17d)],
                'isOnline': !![],
                'lastLogin': new Date()
            }
        }), g[z(0x17c)](0x1db9 + 0x764 * -0x4 + 0x9f * 0x1)[z(0x183)](t);
    };
exports[x(0x18d)] = store;
const update = async (e, f) => {
    const B = w, C = x, g = {};
    g[B(0x16e)] = B(0x15b) + B(0x14d);
    const h = g, i = e[C(0x166)][B(0x188)];
    if (!i)
        throw new AppError_1[(C(0x161))](h[C(0x16e)], -0xd49 + 0x1349 + 0xe3 * -0x5);
    const {
        newToken: j,
        refreshToken: l
    } = await (-0x60e + 0x1739 + -0x112b, RefreshTokenService_1[C(0x159) + C(0x14a)])(i);
    (-0x15b9 * -0x1 + 0x644 * -0x3 + -0x2ed, SendRefreshToken_1[C(0x14f) + B(0x182)])(f, l);
    const m = {};
    return m[B(0x172)] = j, f[B(0x183)](m);
};
exports[w(0x15c)] = update;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2b3 + -0x35 * 0x67 + 0x13e5);
        let h = e[f];
        return h;
    }, b(c, d);
}
const logout = async (e, f) => {
    const D = x, E = x, g = {};
    g[D(0x154)] = D(0x164) + E(0x168), g[D(0x150)] = D(0x15c), g[E(0x16a)] = E(0x17a) + 'T';
    const h = g, {userId: i} = e[E(0x152)];
    if (!i)
        throw new AppError_1[(D(0x161))](h[D(0x154)], 0x820 + -0x192d + 0x12a1);
    const j = (-0x1d7d + -0x72 * 0x1 + 0x1 * 0x1def, socket_1[E(0x15d)])(), l = await User_1[D(0x161)][D(0x14c)](i);
    l && l[E(0x15c)]({
        'isOnline': ![],
        'lastLogout': new Date()
    });
    j[D(0x178)](l?.[E(0x163)] + E(0x189), {
        'action': h[D(0x150)],
        'data': {
            'username': l?.[E(0x170)],
            'email': l?.[D(0x17d)],
            'isOnline': ![],
            'lastLogout': new Date()
        }
    });
    const m = {};
    return m[D(0x16b)] = h[E(0x16a)], f[E(0x183)](m);
};
function a() {
    const F = [
        '../errors/',
        'defineProp',
        'shToken',
        '2601268EtGlzf',
        'emit',
        'erty',
        'USER_LOGOU',
        'password',
        'status',
        'email',
        's/UserServ',
        'ices/Refre',
        '../models/',
        '1486647LWcXnr',
        'hToken',
        'json',
        'AppError',
        '__importDe',
        'urSrL',
        'profile',
        'jrt',
        ':users',
        '__esModule',
        'line',
        '176pBIFel',
        'store',
        'username',
        '4716AXWvzL',
        's/AuthServ',
        'serSerice',
        'ices/AuthU',
        'enService',
        '1259890hsFPWQ',
        'findByPk',
        'N_EXPIRED',
        '../libs/so',
        'SendRefres',
        'faDcr',
        'shTokenSer',
        'body',
        '/SendRefre',
        'KQxec',
        '../helpers',
        'configs',
        '../service',
        'vice',
        'RefreshTok',
        '2781260jlnjhV',
        'ERR_SESSIO',
        'update',
        'getIO',
        '9023aqHZeZ',
        'cket',
        'fault',
        'default',
        '6567SsroDM',
        'tenantId',
        'ERR_USER_N',
        'value',
        'cookies',
        'logout',
        'OT_FOUND',
        'User',
        'akrcQ',
        'message',
        '9ThKqTO',
        'queues',
        'QXJFD',
        'userId',
        'name',
        'usuariosOn',
        'token',
        '627080wsKpmZ'
    ];
    a = function () {
        return F;
    };
    return a();
}
exports[w(0x167)] = logout;