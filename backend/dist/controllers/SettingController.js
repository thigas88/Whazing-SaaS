'use strict';
const v = b, w = b;
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(t(0x18f)) / (0x1e7a + -0x1812 + -0x667) * (-parseInt(t(0x190)) / (0x25c * 0x3 + 0x1cc0 + -0x23d2 * 0x1)) + parseInt(u(0x19c)) / (0x3 * -0x6c3 + -0x1cf * 0x7 + 0xd * 0x289) * (-parseInt(u(0x18d)) / (0x1963 * -0x1 + 0xffe + 0x1 * 0x969)) + -parseInt(t(0x1b1)) / (-0x762 + -0x1 * -0x150c + -0xda5) + parseInt(u(0x19b)) / (-0x267c + -0x1140 + 0x37c2) + parseInt(u(0x196)) / (-0x6 * -0x14b + 0x28d * 0x7 + -0xa * 0x28f) + -parseInt(t(0x192)) / (-0xc01 + -0x192c + 0x2535) * (parseInt(u(0x1ab)) / (0x14d * -0x7 + 0x1d75 + -0x1451)) + parseInt(t(0x181)) / (-0xcad + -0x1 * -0x194d + 0x6 * -0x219);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x43e * -0x2f6 + -0x17 * 0xd7d5 + 0x113646));
var __importDefault = this && this[v(0x197) + w(0x1a4)] || function (c) {
    const x = v;
    return c && c[x(0x195)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x49 * -0x35 + 0x2007 + -0xf6b);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[w(0x183)] = !![], Object[v(0x1a1) + w(0x1bb)](exports, v(0x195), k), exports[w(0x186)] = exports[v(0x1b9) + v(0x19e)] = exports[v(0x1a7)] = exports[v(0x180)] = void (0x1 * 0x25b3 + -0x5d4 * 0x2 + 0x3b * -0x71);
const socket_1 = require(v(0x1b3) + w(0x1ae)), AppError_1 = __importDefault(require(v(0x1aa) + w(0x18a))), UpdateSettingService_1 = __importDefault(require(v(0x1bf) + v(0x189) + w(0x1b8) + w(0x187) + v(0x188))), UpdateSettingService_2 = __importDefault(require(w(0x1bf) + v(0x17f) + w(0x182) + v(0x1b4) + v(0x18c) + w(0x1be))), ListSettingsService_1 = __importDefault(require(v(0x1bf) + v(0x189) + w(0x19a) + v(0x1a0) + w(0x1ac))), index = async (c, d) => {
        const y = v, z = v, {tenantId: e} = c[y(0x19d)], f = await (-0x6a7 + 0x1 * -0xeb6 + -0x1 * -0x155d, ListSettingsService_1[z(0x1c0)])(e);
        return d[y(0x1a8)](-0x125f + -0x3d * 0x4f + -0x12fd * -0x2)[z(0x199)](f);
    };
exports[w(0x180)] = index;
const update = async (f, g) => {
    const A = v, B = w, h = {};
    h[A(0x1a5)] = function (r, s) {
        return r !== s;
    }, h[B(0x1af)] = A(0x185), h[B(0x191)] = A(0x1b7) + B(0x1ad), h[B(0x1c1)] = A(0x1a7);
    const i = h;
    if (i[B(0x1a5)](f[A(0x19d)][B(0x1a6)], i[B(0x1af)]))
        throw new AppError_1[(B(0x1c0))](i[B(0x191)], 0x72f + 0x201 + -0x79d);
    const {tenantId: j} = f[A(0x19d)], {
            value: l,
            key: m
        } = f[A(0x184)], n = {};
    n[B(0x1a2)] = m, n[B(0x183)] = l, n[B(0x198)] = j;
    const o = await (0x301 + -0x1 * -0x10bf + -0x13c0, UpdateSettingService_1[A(0x1c0)])(n), p = (-0x9 * -0x374 + 0x23c * 0xd + 0x250 * -0x1a, socket_1[B(0x1a3)])(), q = {};
    return q[B(0x18b)] = i[A(0x1c1)], q[A(0x1b6)] = o, p[A(0x1b5)](j + A(0x18e), q), g[B(0x1a8)](0x1d9f + -0xe3f * 0x2 + -0x59)[B(0x199)](o);
};
exports[w(0x1a7)] = update;
const storePrivateFile = async (e, f) => {
    const C = w, D = w, g = {};
    g[C(0x1ba)] = D(0x1bc) + 'e';
    const h = g, i = e[D(0x1a9)], {tenantId: j} = e[C(0x19d)], l = {};
    l[C(0x1a2)] = h[D(0x1ba)], l[C(0x183)] = i[C(0x19f)];
    const m = await (0x1012 + -0x5db * 0x5 + 0xd35, UpdateSettingService_2[C(0x1c0)])(l);
    return f[D(0x1a8)](0x1 * -0x25ff + -0x116 * -0xd + -0x18a9 * -0x1)[D(0x199)](m[D(0x183)]);
};
exports[w(0x1b9) + w(0x19e)] = storePrivateFile;
const storeLogo = async (e, f) => {
    const E = w, F = w, g = {};
    g[E(0x1b2)] = F(0x194);
    const h = g, i = e[F(0x1a9)], {tenantId: j} = e[E(0x19d)];
    if (i && i[F(0x193)][E(0x1b0)](h[F(0x1b2)])) {
        const l = {};
        l[E(0x1a2)] = E(0x1bd), l[F(0x183)] = i[F(0x19f)], l[F(0x198)] = j;
        const m = await (-0x1 * 0x20c8 + -0x49 * 0x19 + 0x27e9, UpdateSettingService_1[F(0x1c0)])(l);
        return f[F(0x1a8)](-0x24d9 + 0xdf9 * 0x1 + 0x2f5 * 0x8)[F(0x199)](m[E(0x183)]);
    }
    return f[E(0x1a8)](0x134d + -0x7 * 0x2ef + 0x2d2 * 0x1);
};
function a() {
    const G = [
        'getIO',
        'fault',
        'hPyhy',
        'profile',
        'update',
        'status',
        'file',
        '../errors/',
        '135QqhFiJ',
        'Service',
        'MISSION',
        'cket',
        'GEycU',
        'startsWith',
        '5448900QQyeDe',
        'dGIGB',
        '../libs/so',
        'ices/Updat',
        'emit',
        'setting',
        'ERR_NO_PER',
        'ervices/Up',
        'storePriva',
        'HbMPE',
        'erty',
        'efiCertFil',
        'LOGO',
        'rvice',
        '../service',
        'default',
        'gYuBg',
        's/SettingG',
        'index',
        '29236020cSSUuk',
        'eneralServ',
        'value',
        'body',
        'admin',
        'storeLogo',
        'dateSettin',
        'gService',
        's/SettingS',
        'AppError',
        'action',
        'eSettingSe',
        '16HnGBfp',
        ':settings',
        '1aTkucS',
        '757976NbwNKE',
        'XBPtP',
        '85592coLtzH',
        'mimetype',
        'image/',
        '__esModule',
        '176694KYFqHD',
        '__importDe',
        'tenantId',
        'json',
        'ervices/Li',
        '516576fGaKGG',
        '543984EtOiPQ',
        'user',
        'teFile',
        'filename',
        'stSettings',
        'defineProp',
        'key'
    ];
    a = function () {
        return G;
    };
    return a();
}
exports[w(0x186)] = storeLogo;