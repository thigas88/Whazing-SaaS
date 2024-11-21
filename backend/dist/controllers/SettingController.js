'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * -0x14e7 + -0x16 * -0x16d + 0x983 * -0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const v = b, w = b;
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(t(0x11a)) / (-0x3 * 0xb5d + 0x193c + 0x8dc) + parseInt(t(0x111)) / (-0x35 * -0x2f + 0x2617 + -0x132 * 0x28) * (-parseInt(t(0x12c)) / (0x158f * 0x1 + 0x8b5 + 0x5 * -0x60d)) + -parseInt(u(0x128)) / (-0x1997 + -0x15cd + 0x148 * 0x25) + parseInt(u(0x12a)) / (-0x10d4 + 0x2f0 * -0x5 + 0x15f * 0x17) + parseInt(u(0xf8)) / (0x3 * 0x647 + 0x17 * -0x1a9 + 0xf8 * 0x14) * (-parseInt(t(0x106)) / (-0xaea + -0x10e2 * -0x1 + -0x5f1)) + parseInt(u(0x11e)) / (0x13 * -0x131 + -0x1ad5 * 0x1 + 0x3180) * (-parseInt(t(0x11c)) / (-0x1 * 0x446 + -0x35 * -0x6a + -0x11a3)) + parseInt(t(0x136)) / (-0x13 * -0xf7 + -0xcdc + -0x56f);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x2ce9 * -0x56 + 0x2485 * 0x46 + 0x1 * -0xef73a));
var __importDefault = this && this[v(0xf9) + w(0x134)] || function (c) {
    const x = w;
    return c && c[x(0x115)] ? c : { 'default': c };
};
const k = {};
k[v(0x110)] = !![], Object[w(0x101) + v(0x135)](exports, w(0x115), k), exports[v(0x105)] = exports[v(0x114) + w(0x117)] = exports[w(0x130)] = exports[w(0x116)] = void (0x1 * 0x4a6 + -0x9 * 0x116 + 0x520);
const socket_1 = require(v(0x124) + v(0x10e)), AppError_1 = __importDefault(require(w(0xfb) + w(0x118))), UpdateSettingService_1 = __importDefault(require(w(0x11d) + w(0xf4) + v(0x112) + w(0x10f) + w(0xf6))), UpdateSettingService_2 = __importDefault(require(w(0x11d) + v(0x133) + v(0x12d) + w(0x125) + v(0x12f) + v(0x132))), ListSettingsService_1 = __importDefault(require(w(0x11d) + w(0xf4) + w(0x104) + v(0xfc) + w(0x107))), index = async (c, d) => {
        const y = w, z = v, {tenantId: e} = c[y(0x103)], f = await (0x15 * 0x148 + 0x246c + -0x151c * 0x3, ListSettingsService_1[z(0x10c)])(e);
        return d[z(0x131)](0x1722 * -0x1 + -0x2026 * -0x1 + -0x1f * 0x44)[y(0x120)](f);
    };
exports[w(0x116)] = index;
const update = async (f, g) => {
    const A = v, B = v, h = {};
    h[A(0x102)] = function (r, s) {
        return r !== s;
    }, h[A(0xf5)] = B(0xfa), h[B(0xfe)] = B(0x11b) + B(0x127), h[A(0x10a)] = A(0x130);
    const i = h;
    if (i[A(0x102)](f[A(0x103)][A(0x10d)], i[A(0xf5)]))
        throw new AppError_1[(B(0x10c))](i[B(0xfe)], -0x6 * -0x339 + 0x21 * -0x5c + -0x5e7);
    const {tenantId: j} = f[B(0x103)], {
            value: l,
            key: m
        } = f[A(0x129)], n = {};
    n[B(0x11f)] = m, n[A(0x110)] = l, n[A(0x119)] = j;
    const o = await (0x32c * -0x5 + 0x1 * -0x1714 + -0x7 * -0x590, UpdateSettingService_1[B(0x10c)])(n), p = (0x1e1 + -0x7a2 + 0x5c1, socket_1[B(0x123)])(), q = {};
    return q[A(0xf7)] = i[A(0x10a)], q[B(0x100)] = o, p[A(0x126)](j + A(0x109), q), g[A(0x131)](-0x1 * 0x985 + 0x21d0 + -0x1783)[A(0x120)](o);
};
exports[w(0x130)] = update;
const storePrivateFile = async (e, f) => {
    const C = v, D = v, g = {};
    g[C(0xff)] = D(0xfd) + 'e';
    const h = g, i = e[D(0x121)], {tenantId: j} = e[D(0x103)], l = {};
    l[C(0x11f)] = h[D(0xff)], l[D(0x110)] = i[C(0x12b)];
    const m = await (-0xf * 0x50 + 0x1 * 0x2550 + -0x20a0, UpdateSettingService_2[C(0x10c)])(l);
    return f[D(0x131)](0x1548 + -0x1248 + -0x238)[C(0x120)](m[D(0x110)]);
};
function a() {
    const G = [
        '3165125sbqzvY',
        'filename',
        '503043DPAHpL',
        'eneralServ',
        'image/',
        'eSettingSe',
        'update',
        'status',
        'rvice',
        's/SettingG',
        'fault',
        'erty',
        '18880980VQlDff',
        's/SettingS',
        'hkzoV',
        'gService',
        'action',
        '4342746CqLeew',
        '__importDe',
        'admin',
        '../errors/',
        'stSettings',
        'efiCertFil',
        'jWoxQ',
        'biMPl',
        'setting',
        'defineProp',
        'RPkmJ',
        'user',
        'ervices/Li',
        'storeLogo',
        '7DYLEyF',
        'Service',
        'LOGO',
        ':settings',
        'YzLvG',
        'startsWith',
        'default',
        'profile',
        'cket',
        'dateSettin',
        'value',
        '14SXFOWt',
        'ervices/Up',
        'gNoxI',
        'storePriva',
        '__esModule',
        'index',
        'teFile',
        'AppError',
        'tenantId',
        '1266560AhgwJQ',
        'ERR_NO_PER',
        '73755lCmjby',
        '../service',
        '1088NyaJMB',
        'key',
        'json',
        'file',
        'mimetype',
        'getIO',
        '../libs/so',
        'ices/Updat',
        'emit',
        'MISSION',
        '452908lVfrIe',
        'body'
    ];
    a = function () {
        return G;
    };
    return a();
}
exports[w(0x114) + v(0x117)] = storePrivateFile;
const storeLogo = async (e, f) => {
    const E = v, F = w, g = {};
    g[E(0x113)] = E(0x12e);
    const h = g, i = e[F(0x121)], {tenantId: j} = e[E(0x103)];
    if (i && i[F(0x122)][E(0x10b)](h[F(0x113)])) {
        const l = {};
        l[F(0x11f)] = E(0x108), l[E(0x110)] = i[F(0x12b)], l[E(0x119)] = j;
        const m = await (0x18d * -0x1 + -0x22e5 + -0x137 * -0x1e, UpdateSettingService_1[F(0x10c)])(l);
        return f[F(0x131)](-0x4fb + 0x1 * 0x267e + -0x3 * 0xae9)[E(0x120)](m[E(0x110)]);
    }
    return f[F(0x131)](0x1a78 + -0x24ee + 0x404 * 0x3);
};
exports[v(0x105)] = storeLogo;