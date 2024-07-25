'use strict';
const w = b, x = b;
function a() {
    const F = [
        '20QywscL',
        'ayllv',
        '4106920FiDmnl',
        'defineProp',
        'USER_LOGOU',
        '2728369uHZglV',
        'message',
        'status',
        '../models/',
        '__importDe',
        'vice',
        'email',
        'OT_FOUND',
        'N_EXPIRED',
        '../libs/so',
        'SendRefres',
        'password',
        'line',
        'shToken',
        '27472MqARzl',
        'body',
        'json',
        'serSerice',
        'findByPk',
        'value',
        's/UserServ',
        'token',
        '14305820qOKTbR',
        '9FFXASe',
        'profile',
        'logout',
        'erty',
        ':users',
        'jrt',
        'configs',
        'name',
        '../helpers',
        'ices/AuthU',
        'tenantId',
        'cookies',
        'ACswN',
        'AppError',
        'enService',
        'User',
        'ERR_USER_N',
        'store',
        'username',
        '../service',
        '/SendRefre',
        'ocSDP',
        'queues',
        'fault',
        'hToken',
        'ices/Refre',
        '__esModule',
        '1046630YjwPkG',
        '174mNKrFk',
        'aAfIN',
        '../errors/',
        'shTokenSer',
        '177865LlaECZ',
        'usuariosOn',
        'emit',
        'epJwv',
        'RefreshTok',
        'default',
        'ERR_SESSIO',
        'userId',
        '6150TXPUbD',
        's/AuthServ',
        'update',
        'cket',
        'getIO'
    ];
    a = function () {
        return F;
    };
    return a();
}
(function (c, d) {
    const u = b, v = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(u(0xc3)) / (0xfcb + 0xe * 0x13 + 0x86a * -0x2) + parseInt(v(0xe8)) / (0xa61 + 0x43 + -0xaa2) + parseInt(v(0xd0)) / (0x1e74 + -0x590 + 0xc1 * -0x21) * (-parseInt(v(0xd5)) / (-0x13fa + -0x1 * -0x12d0 + 0x97 * 0x2)) + -parseInt(u(0xc8)) / (-0x1 * 0x1071 + -0x7cd + 0x1843) * (parseInt(v(0xc4)) / (0x1dbd + -0x2135 * -0x1 + -0x2 * 0x1f76)) + -parseInt(u(0xda)) / (-0xfd3 + -0x9a * -0x30 + -0xd06) + -parseInt(v(0xd7)) / (-0x15e9 + 0x1d27 + 0xd * -0x8e) * (parseInt(u(0xa8)) / (-0x7ef + 0x7 * -0x11 + 0x86f)) + parseInt(u(0xa7)) / (-0x15ec + -0x1c33 * -0x1 + -0x63d);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xf1eaa + 0x3f64 + -0x70971));
var __importDefault = this && this[w(0xde) + w(0xbf)] || function (c) {
    const y = x;
    return c && c[y(0xc2)] ? c : { 'default': c };
};
const k = {};
k[w(0xa4)] = !![], Object[x(0xd8) + w(0xab)](exports, x(0xc2), k), exports[w(0xaa)] = exports[w(0xd2)] = exports[x(0xb9)] = void (0x75d + 0x5e6 * -0x4 + 0x103b);
const AppError_1 = __importDefault(require(x(0xc6) + w(0xb5))), AuthUserSerice_1 = __importDefault(require(x(0xbb) + x(0xa5) + w(0xb1) + x(0xa2))), SendRefreshToken_1 = require(w(0xb0) + w(0xbc) + w(0xe7)), RefreshTokenService_1 = require(x(0xbb) + x(0xd1) + w(0xc1) + w(0xc7) + w(0xdf)), socket_1 = require(w(0xe3) + x(0xd3)), User_1 = __importDefault(require(x(0xdd) + x(0xb7))), store = async (f, g) => {
        const z = w, A = x, h = {};
        h[z(0xb4)] = z(0xd2);
        const i = h, j = (0x2598 + -0xfc4 + -0x15d4, socket_1[A(0xd4)])(), {
                email: l,
                password: m
            } = f[z(0xa0)], n = {};
        n[z(0xe0)] = l, n[A(0xe5)] = m;
        const {
            token: o,
            user: p,
            refreshToken: q,
            usuariosOnline: r
        } = await (0xe * -0x33 + -0x23d6 * 0x1 + 0x26a0, AuthUserSerice_1[A(0xcd)])(n);
        (-0x11b1 + 0x62b * 0x1 + -0x32 * -0x3b, SendRefreshToken_1[z(0xe4) + z(0xc0)])(g, q);
        const s = {};
        s[z(0xa6)] = o, s[A(0xba)] = p[A(0xaf)], s[z(0xe0)] = p[z(0xe0)], s[A(0xa9)] = p[z(0xa9)], s[A(0xdc)] = p[z(0xdc)], s[z(0xcf)] = p['id'], s[A(0xb2)] = p[z(0xb2)], s[z(0xbe)] = p[z(0xbe)], s[z(0xc9) + A(0xe6)] = r, s[A(0xae)] = p[z(0xae)];
        const t = s;
        return j[A(0xca)](t[z(0xb2)] + A(0xac), {
            'action': i[A(0xb4)],
            'data': {
                'username': t[A(0xba)],
                'email': t[z(0xe0)],
                'isOnline': !![],
                'lastLogin': new Date()
            }
        }), g[A(0xdc)](-0x14d1 * 0x1 + -0x1cf4 + 0x328d * 0x1)[A(0xa1)](t);
    };
exports[x(0xb9)] = store;
const update = async (e, f) => {
    const B = x, C = x, g = {};
    g[B(0xd6)] = C(0xce) + C(0xe2);
    const h = g, i = e[B(0xb3)][C(0xad)];
    if (!i)
        throw new AppError_1[(B(0xcd))](h[B(0xd6)], 0x3e6 * -0x4 + -0x1 * 0x776 + 0x189f);
    const {
        newToken: j,
        refreshToken: l
    } = await (0x149d + 0xbca + 0x229 * -0xf, RefreshTokenService_1[C(0xcc) + C(0xb6)])(i);
    (-0x1359 + -0x21f2 + 0x354b * 0x1, SendRefreshToken_1[C(0xe4) + B(0xc0)])(f, l);
    const m = {};
    return m[C(0xa6)] = j, f[B(0xa1)](m);
};
exports[x(0xd2)] = update;
const logout = async (e, f) => {
    const D = w, E = w, g = {};
    g[D(0xcb)] = E(0xb8) + E(0xe1), g[D(0xc5)] = D(0xd2), g[E(0xbd)] = D(0xd9) + 'T';
    const h = g, {userId: i} = e[D(0xa0)];
    if (!i)
        throw new AppError_1[(E(0xcd))](h[E(0xcb)], 0x24c + -0x1 * -0x238d + -0x2445);
    const j = (-0x1 * 0x2065 + 0x35a + 0x1d0b, socket_1[D(0xd4)])(), l = await User_1[E(0xcd)][E(0xa3)](i);
    l && l[E(0xd2)]({
        'isOnline': ![],
        'lastLogout': new Date()
    });
    j[E(0xca)](l?.[E(0xb2)] + D(0xac), {
        'action': h[E(0xc5)],
        'data': {
            'username': l?.[D(0xaf)],
            'email': l?.[D(0xe0)],
            'isOnline': ![],
            'lastLogout': new Date()
        }
    });
    const m = {};
    return m[D(0xdb)] = h[E(0xbd)], f[D(0xa1)](m);
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1fdb + -0x2 * -0xb49 + 0x9e9);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[x(0xaa)] = logout;