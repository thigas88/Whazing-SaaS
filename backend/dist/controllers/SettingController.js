'use strict';
const v = b, w = b;
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(t(0x179)) / (0x1aa5 * 0x1 + -0xc1d + -0xe87) + -parseInt(u(0x15a)) / (-0x20cc * 0x1 + -0x1 * 0x1863 + 0x3931) * (-parseInt(t(0x13e)) / (-0x1 * -0x1ea1 + 0x139 * 0xd + -0x2e83)) + -parseInt(u(0x169)) / (0x1482 + -0x193 * -0x17 + -0x5 * 0xb57) * (-parseInt(t(0x175)) / (-0x11f2 * -0x2 + -0x1d05 * -0x1 + 0x4 * -0x1039)) + parseInt(t(0x16e)) / (0x1a7b * 0x1 + -0x12 * -0x16d + -0x341f) * (-parseInt(t(0x163)) / (-0x1 * -0x1bb9 + -0xd03 * -0x2 + -0x23d * 0x18)) + parseInt(u(0x142)) / (-0x26d + -0x1917 + 0x1b8c) + parseInt(u(0x161)) / (0xb * 0x97 + 0x1 * 0xe43 + 0x14b7 * -0x1) * (parseInt(t(0x157)) / (-0x1c8e + -0x2336 + 0x3fce)) + -parseInt(u(0x162)) / (-0x3 * -0xc8f + -0x17f * -0x15 + -0x450d);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x32dd * -0x34 + -0x30697 + -0x1 * -0x1a4b06));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x132c + -0x2 * 0xbc3 + -0x9f * -0x9);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[v(0x155) + w(0x14b)] || function (c) {
    const x = w;
    return c && c[x(0x147)] ? c : { 'default': c };
};
const k = {};
k[v(0x17a)] = !![], Object[w(0x15f) + w(0x14f)](exports, w(0x147), k), exports[w(0x16f)] = exports[w(0x15c) + w(0x165)] = exports[w(0x154)] = exports[v(0x174)] = void (0x1ed7 * -0x1 + 0x24a8 + -0x5d1);
function a() {
    const G = [
        '../libs/so',
        'LOGO',
        'AppError',
        '__esModule',
        'efiCertFil',
        'status',
        'rvice',
        'fault',
        'jZbmR',
        'default',
        'image/',
        'erty',
        '../errors/',
        'ervices/Li',
        'getIO',
        'mimetype',
        'update',
        '__importDe',
        'body',
        '50ocoRGP',
        'profile',
        ':settings',
        '8210nYVIKO',
        'ERR_NO_PER',
        'storePriva',
        'MISSION',
        'ices/Updat',
        'defineProp',
        'emit',
        '1732851LDZqcr',
        '18511592soZreS',
        '7JNHOJQ',
        'gService',
        'teFile',
        'SFECt',
        'filename',
        'user',
        '510108ucTDZg',
        'cket',
        '../service',
        'HPZzu',
        'key',
        '4841862mvnddE',
        'storeLogo',
        's/SettingS',
        'eSettingSe',
        'setting',
        'admin',
        'index',
        '5xSKZjB',
        'json',
        'action',
        'RnoXT',
        '571881xVrgtV',
        'value',
        'tenantId',
        'eneralServ',
        'hCfst',
        'uBabj',
        'dateSettin',
        'startsWith',
        's/SettingG',
        '672nNlIuQ',
        'ervices/Up',
        'Service',
        'file',
        '6047848daZORS',
        'stSettings'
    ];
    a = function () {
        return G;
    };
    return a();
}
const socket_1 = require(w(0x144) + w(0x16a)), AppError_1 = __importDefault(require(v(0x150) + v(0x146))), UpdateSettingService_1 = __importDefault(require(w(0x16b) + v(0x170) + w(0x13f) + v(0x17f) + v(0x164))), UpdateSettingService_2 = __importDefault(require(v(0x16b) + w(0x13d) + w(0x17c) + v(0x15e) + w(0x171) + v(0x14a))), ListSettingsService_1 = __importDefault(require(v(0x16b) + v(0x170) + v(0x151) + w(0x143) + v(0x140))), index = async (c, d) => {
        const y = w, z = w, {tenantId: e} = c[y(0x168)], f = await (0x121b + 0x3d * 0x5b + 0x27ca * -0x1, ListSettingsService_1[z(0x14d)])(e);
        return d[z(0x149)](-0x1 * 0x1df + 0x481 + 0xed * -0x2)[z(0x176)](f);
    };
exports[v(0x174)] = index;
const update = async (f, g) => {
    const A = v, B = w, h = {};
    h[A(0x178)] = function (r, s) {
        return r !== s;
    }, h[A(0x17e)] = A(0x173), h[A(0x14c)] = A(0x15b) + B(0x15d), h[A(0x166)] = A(0x154);
    const i = h;
    if (i[B(0x178)](f[B(0x168)][B(0x158)], i[A(0x17e)]))
        throw new AppError_1[(A(0x14d))](i[A(0x14c)], -0x9b7 + 0xa16 + -0xe * -0x16);
    const {tenantId: j} = f[A(0x168)], {
            value: l,
            key: m
        } = f[B(0x156)], n = {};
    n[A(0x16d)] = m, n[B(0x17a)] = l, n[B(0x17b)] = j;
    const o = await (0x138e * 0x1 + 0x3 * -0x78 + -0x1226, UpdateSettingService_1[A(0x14d)])(n), p = (0x1cfa * -0x1 + -0x1 * 0x2fb + 0x1ff5, socket_1[A(0x152)])(), q = {};
    return q[A(0x177)] = i[B(0x166)], q[A(0x172)] = o, p[A(0x160)](j + A(0x159), q), g[B(0x149)](-0x1e1c + -0x2f * -0x29 + 0x175d)[A(0x176)](o);
};
exports[w(0x154)] = update;
const storePrivateFile = async (e, f) => {
    const C = v, D = v, g = {};
    g[C(0x16c)] = D(0x148) + 'e';
    const h = g, i = e[C(0x141)], {tenantId: j} = e[D(0x168)], l = {};
    l[D(0x16d)] = h[C(0x16c)], l[D(0x17a)] = i[C(0x167)];
    const m = await (0x1257 + 0xa09 + -0x1c60, UpdateSettingService_2[D(0x14d)])(l);
    return f[D(0x149)](0x170 * 0xc + -0x1b65 + 0xaed)[D(0x176)](m[D(0x17a)]);
};
exports[w(0x15c) + w(0x165)] = storePrivateFile;
const storeLogo = async (e, f) => {
    const E = w, F = v, g = {};
    g[E(0x17d)] = E(0x14e);
    const h = g, i = e[F(0x141)], {tenantId: j} = e[F(0x168)];
    if (i && i[F(0x153)][F(0x180)](h[E(0x17d)])) {
        const l = {};
        l[F(0x16d)] = E(0x145), l[F(0x17a)] = i[F(0x167)], l[E(0x17b)] = j;
        const m = await (-0x14db + 0x1d51 + 0x26 * -0x39, UpdateSettingService_1[F(0x14d)])(l);
        return f[E(0x149)](0x200b * -0x1 + 0xd * -0x112 + -0x2ebd * -0x1)[F(0x176)](m[E(0x17a)]);
    }
    return f[F(0x149)](-0x13fd + 0x1bb2 + -0x1 * 0x61f);
};
exports[w(0x16f)] = storeLogo;