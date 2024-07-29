'use strict';
const w = b, x = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x11 * 0x202 + 0x412 + -0x36b * -0x9);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const u = b, v = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(u(0xc6)) / (0x13cb + 0x78d + -0x1b57) + parseInt(v(0xf9)) / (-0xd79 + -0x1b58 + 0x28d3) * (-parseInt(v(0xd0)) / (0xf89 + 0x937 + -0x18bd)) + -parseInt(u(0xde)) / (-0xbbe + 0x1 * 0x1d5d + -0x119b) + -parseInt(v(0xcf)) / (0x1000 + -0x2a * -0x15 + -0x136d * 0x1) * (-parseInt(v(0xb3)) / (-0x16 * -0x17c + 0x1005 + -0x5 * 0x9bb)) + parseInt(v(0xd3)) / (-0xc26 + 0x11 * 0x1d5 + -0x1 * 0x12f8) * (-parseInt(u(0xe7)) / (-0x64 * 0x4d + 0x4d7 * -0x1 + -0x17 * -0x185)) + -parseInt(u(0xc0)) / (0x1b25 + -0x12c8 + -0x854) * (-parseInt(v(0xd1)) / (0x48b + -0x1b10 + 0x785 * 0x3)) + parseInt(u(0xbf)) / (0x2 * 0xcbd + -0x1035 + -0x49d * 0x2);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x11db1b + -0x14543b + 0xe7c36));
var __importDefault = this && this[w(0xdd) + w(0xe4)] || function (c) {
    const y = x;
    return c && c[y(0xf5)] ? c : { 'default': c };
};
const k = {};
function a() {
    const F = [
        '895PVmqOH',
        '348HJMmtx',
        '305460VFbNQD',
        'queues',
        '1081871Tkvews',
        'status',
        'message',
        'tenantId',
        'line',
        'email',
        'name',
        'update',
        'json',
        'enService',
        '__importDe',
        '656276YxwUnm',
        'CXssI',
        'SendRefres',
        'username',
        's/AuthServ',
        'RefreshTok',
        'fault',
        'shTokenSer',
        'vice',
        '40SrXzDA',
        'usuariosOn',
        'ZnGYg',
        'fFnaB',
        'cookies',
        'defineProp',
        'N_EXPIRED',
        '../service',
        'value',
        'logout',
        'ices/AuthU',
        'password',
        'shToken',
        'AppError',
        '__esModule',
        '../errors/',
        'RNpnF',
        'configs',
        '25040OVRlhl',
        ':users',
        'User',
        'default',
        '360WBQbyt',
        'cket',
        '/SendRefre',
        'serSerice',
        'body',
        'hToken',
        'erty',
        'getIO',
        'ERR_SESSIO',
        'ices/Refre',
        'Rkumx',
        'ERR_USER_N',
        '36151445JlGUku',
        '171WyYQwd',
        'findByPk',
        'emit',
        'store',
        'profile',
        'token',
        '701233ySvGMS',
        'USER_LOGOU',
        '../helpers',
        'userId',
        '../libs/so',
        '../models/',
        'jrt',
        's/UserServ',
        'OT_FOUND'
    ];
    a = function () {
        return F;
    };
    return a();
}
k[x(0xef)] = !![], Object[x(0xec) + x(0xb9)](exports, x(0xf5), k), exports[w(0xf0)] = exports[w(0xda)] = exports[x(0xc3)] = void (-0x103d * 0x1 + -0xac * -0x3a + -0x16bb);
const AppError_1 = __importDefault(require(x(0xf6) + x(0xf4))), AuthUserSerice_1 = __importDefault(require(x(0xee) + x(0xcd) + w(0xf1) + w(0xb6))), SendRefreshToken_1 = require(x(0xc8) + x(0xb5) + x(0xf3)), RefreshTokenService_1 = require(w(0xee) + x(0xe2) + x(0xbc) + w(0xe5) + w(0xe6)), socket_1 = require(x(0xca) + w(0xb4)), User_1 = __importDefault(require(w(0xcb) + x(0xfb))), store = async (f, g) => {
        const z = x, A = x, h = {};
        h[z(0xdf)] = A(0xda);
        const i = h, j = (0x124a + 0x23ea + 0x2 * -0x1b1a, socket_1[A(0xba)])(), {
                email: l,
                password: m
            } = f[A(0xb7)], n = {};
        n[A(0xd8)] = l, n[A(0xf2)] = m;
        const {
            token: o,
            user: p,
            refreshToken: q,
            usuariosOnline: r
        } = await (0xef3 + -0x1021 + 0x12e, AuthUserSerice_1[z(0xfc)])(n);
        (-0x1ef8 + -0x1473 + 0x336b, SendRefreshToken_1[z(0xe0) + z(0xb8)])(g, q);
        const s = {};
        s[A(0xc5)] = o, s[A(0xe1)] = p[A(0xd9)], s[z(0xd8)] = p[A(0xd8)], s[z(0xc4)] = p[z(0xc4)], s[A(0xd4)] = p[z(0xd4)], s[A(0xc9)] = p['id'], s[A(0xd6)] = p[A(0xd6)], s[z(0xd2)] = p[A(0xd2)], s[A(0xe8) + A(0xd7)] = r, s[A(0xf8)] = p[A(0xf8)];
        const t = s;
        return j[A(0xc2)](t[A(0xd6)] + A(0xfa), {
            'action': i[z(0xdf)],
            'data': {
                'username': t[z(0xe1)],
                'email': t[z(0xd8)],
                'isOnline': !![],
                'lastLogin': new Date()
            }
        }), g[z(0xd4)](-0x387 + 0x1 * -0x6a4 + -0xaf3 * -0x1)[A(0xdb)](t);
    };
exports[w(0xc3)] = store;
const update = async (e, f) => {
    const B = w, C = w, g = {};
    g[B(0xe9)] = B(0xbb) + B(0xed);
    const h = g, i = e[B(0xeb)][B(0xcc)];
    if (!i)
        throw new AppError_1[(C(0xfc))](h[B(0xe9)], 0xf23 + -0x19 * -0x17a + -0x327c);
    const {
        newToken: j,
        refreshToken: l
    } = await (0x399 * 0x5 + -0x1f88 + 0x1 * 0xd8b, RefreshTokenService_1[C(0xe3) + B(0xdc)])(i);
    (0x108c + -0x3 * 0x4a9 + 0x1 * -0x291, SendRefreshToken_1[B(0xe0) + C(0xb8)])(f, l);
    const m = {};
    return m[B(0xc5)] = j, f[B(0xdb)](m);
};
exports[w(0xda)] = update;
const logout = async (e, f) => {
    const D = x, E = w, g = {};
    g[D(0xf7)] = E(0xbe) + D(0xce), g[E(0xea)] = E(0xda), g[D(0xbd)] = E(0xc7) + 'T';
    const h = g, {userId: i} = e[E(0xb7)];
    if (!i)
        throw new AppError_1[(D(0xfc))](h[E(0xf7)], 0x166f * 0x1 + -0x1af2 + -0x617 * -0x1);
    const j = (-0x75d * -0x2 + 0x111d + -0x1fd7, socket_1[E(0xba)])(), l = await User_1[E(0xfc)][E(0xc1)](i);
    l && l[D(0xda)]({
        'isOnline': ![],
        'lastLogout': new Date()
    });
    j[D(0xc2)](l?.[D(0xd6)] + D(0xfa), {
        'action': h[D(0xea)],
        'data': {
            'username': l?.[E(0xd9)],
            'email': l?.[E(0xd8)],
            'isOnline': ![],
            'lastLogout': new Date()
        }
    });
    const m = {};
    return m[D(0xd5)] = h[E(0xbd)], f[D(0xdb)](m);
};
exports[w(0xf0)] = logout;