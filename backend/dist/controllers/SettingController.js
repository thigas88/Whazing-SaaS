'use strict';
const v = b, w = b;
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(t(0xc9)) / (-0x1 * 0xd1f + -0x101a + 0x1d3a) * (-parseInt(t(0xa3)) / (-0x137 * 0x13 + -0xff3 * 0x1 + 0x270a)) + -parseInt(u(0xbb)) / (0x1 * 0x2cd + 0x6f2 + -0x9bc) * (-parseInt(t(0x93)) / (0x13fa + -0x7c3 * -0x1 + -0x1bb9)) + parseInt(t(0xca)) / (-0x65 * -0x37 + 0x547 * -0x1 + -0x1067) + parseInt(u(0x99)) / (0xb * -0x211 + 0x655 + 0x106c) * (-parseInt(u(0x9f)) / (-0xe3 + -0x266e + 0x2758)) + -parseInt(u(0x96)) / (0x3d * 0x87 + -0x1755 + -0x1 * 0x8ce) + parseInt(u(0xaf)) / (0x23c6 + 0x11b0 + 0x3 * -0x11cf) + parseInt(t(0xa4)) / (0x26aa + 0x1a6f * 0x1 + -0x410f) * (parseInt(u(0xb5)) / (0x61c + -0x14 * 0xd9 + 0x1 * 0xae3));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x8f274 + 0xb2e17 * -0x1 + 0x92dc8));
var __importDefault = this && this[v(0x9e) + w(0x8d)] || function (c) {
    const x = w;
    return c && c[x(0xce)] ? c : { 'default': c };
};
const k = {};
k[v(0xa7)] = !![], Object[v(0xa9) + w(0xae)](exports, v(0xce), k), exports[w(0x9d)] = exports[v(0xb3) + v(0xb7)] = exports[v(0xbd)] = exports[w(0xbf)] = void (0xac4 + -0xb * 0x24d + 0xe8b);
const socket_1 = require(v(0x9c) + v(0xbe)), AppError_1 = __importDefault(require(v(0xc7) + v(0xac))), UpdateSettingService_1 = __importDefault(require(w(0x90) + v(0xc8) + v(0xad) + w(0xb6) + v(0xc1))), UpdateSettingService_2 = __importDefault(require(v(0x90) + w(0xb8) + v(0x8b) + w(0xa6) + v(0x8f) + v(0xb0))), ListSettingsService_1 = __importDefault(require(w(0x90) + v(0xc8) + v(0x8e) + w(0xa1) + v(0xa5))), index = async (c, d) => {
        const y = w, z = v, {tenantId: e} = c[y(0x94)], f = await (-0x10c4 * 0x1 + 0x70a + 0x9ba, ListSettingsService_1[y(0xc3)])(e);
        return d[y(0xa0)](-0xca0 + 0x1 * 0x12f3 + 0x3 * -0x1d9)[y(0xba)](f);
    };
exports[w(0xbf)] = index;
const update = async (f, g) => {
    const A = v, B = v, h = {};
    h[A(0x9a)] = function (r, s) {
        return r !== s;
    }, h[B(0x91)] = B(0x98), h[A(0xbc)] = B(0xb1) + A(0xb2), h[A(0xc6)] = B(0xbd);
    const i = h;
    if (i[B(0x9a)](f[B(0x94)][B(0xb4)], i[A(0x91)]))
        throw new AppError_1[(A(0xc3))](i[B(0xbc)], 0x212b * -0x1 + 0xd5d + 0x1 * 0x1561);
    const {tenantId: j} = f[A(0x94)], {
            value: l,
            key: m
        } = f[A(0x97)], n = {};
    n[A(0xa8)] = m, n[A(0xa7)] = l, n[B(0xcb)] = j;
    const o = await (-0x26ff * -0x1 + -0x10b * -0x3 + -0x2a20, UpdateSettingService_1[A(0xc3)])(n), p = (-0x2 * -0xda1 + 0x91a * -0x1 + -0x1228, socket_1[B(0xc0)])(), q = {};
    return q[B(0x95)] = i[A(0xc6)], q[A(0xab)] = o, p[B(0xc2)](j + A(0xcc), q), g[B(0xa0)](-0xaea + 0x131 * -0x1b + 0x13 * 0x24f)[B(0xba)](o);
};
exports[w(0xbd)] = update;
const storePrivateFile = async (e, f) => {
    const C = v, D = w, g = {};
    g[C(0x9b)] = D(0x92) + 'e';
    const h = g, i = e[C(0xb9)], {tenantId: j} = e[D(0x94)], l = {};
    l[D(0xa8)] = h[D(0x9b)], l[C(0xa7)] = i[D(0xc5)];
    const m = await (0xedd * -0x2 + 0x57e + 0x2 * 0xc1e, UpdateSettingService_2[D(0xc3)])(l);
    return f[D(0xa0)](-0x117c + 0x25e2 + -0x139e)[C(0xba)](m[C(0xa7)]);
};
exports[w(0xb3) + w(0xb7)] = storePrivateFile;
const storeLogo = async (e, f) => {
    const E = w, F = w, g = {};
    g[E(0xaa)] = E(0xa2);
    const h = g, i = e[F(0xb9)], {tenantId: j} = e[E(0x94)];
    if (i && i[F(0xc4)][F(0x8c)](h[F(0xaa)])) {
        const l = {};
        l[F(0xa8)] = E(0xcd), l[F(0xa7)] = i[F(0xc5)], l[F(0xcb)] = j;
        const m = await (-0x1a60 + -0x1 * 0x2173 + 0x3bd3, UpdateSettingService_1[F(0xc3)])(l);
        return f[E(0xa0)](-0x169 * -0x1b + -0x223b + -0x310)[F(0xba)](m[F(0xa7)]);
    }
    return f[E(0xa0)](0x19fd + -0x476 * -0x6 + 0x1 * -0x332b);
};
exports[v(0x9d)] = storeLogo;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x20a1 + -0xe0 * 0x2c + 0x47ac);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const G = [
        'file',
        'json',
        '29868EReFOD',
        'exlIv',
        'update',
        'cket',
        'index',
        'getIO',
        'gService',
        'emit',
        'default',
        'mimetype',
        'filename',
        'WAAXA',
        '../errors/',
        's/SettingS',
        '1DTMdwX',
        '1355185ACOUBZ',
        'tenantId',
        ':settings',
        'LOGO',
        '__esModule',
        'eneralServ',
        'startsWith',
        'fault',
        'ervices/Li',
        'eSettingSe',
        '../service',
        'ZgufR',
        'efiCertFil',
        '324zikkme',
        'user',
        'action',
        '4726128BELmIo',
        'body',
        'admin',
        '6XfhiSH',
        'fFrbu',
        'XZRZF',
        '../libs/so',
        'storeLogo',
        '__importDe',
        '2405893hIYZGW',
        'status',
        'stSettings',
        'image/',
        '1143524qsIYvE',
        '10WMzMYi',
        'Service',
        'ices/Updat',
        'value',
        'key',
        'defineProp',
        'KREgm',
        'setting',
        'AppError',
        'ervices/Up',
        'erty',
        '7699761WJIQdw',
        'rvice',
        'ERR_NO_PER',
        'MISSION',
        'storePriva',
        'profile',
        '312730Wcdstv',
        'dateSettin',
        'teFile',
        's/SettingG'
    ];
    a = function () {
        return G;
    };
    return a();
}