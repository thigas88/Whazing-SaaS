'use strict';
const v = b, w = b;
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(t(0x1ae)) / (0x1d9f + -0x25de + 0x840) * (parseInt(t(0x192)) / (-0x8 * -0x397 + -0x119 * -0x1 + -0x1dcf)) + parseInt(u(0x1ab)) / (0x1 * -0x11c9 + 0xa8c + 0x740) * (parseInt(t(0x190)) / (0xe5 * 0xd + -0x1ec2 * -0x1 + 0x2a5f * -0x1)) + parseInt(u(0x1ba)) / (-0x1 * -0x1892 + 0x5e * 0x49 + 0x1 * -0x335b) + parseInt(t(0x193)) / (0xb9b + -0x648 + -0x54d) + parseInt(t(0x1ad)) / (-0x90f + -0x37a + -0x1 * -0xc90) * (-parseInt(u(0x189)) / (-0x752 + -0x1cb4 + 0x240e)) + parseInt(t(0x1a5)) / (0x7f5 * -0x1 + -0x2506 + 0x2 * 0x1682) * (parseInt(u(0x19d)) / (-0x1 * 0x1f05 + 0x1ad4 + 0x3 * 0x169)) + parseInt(u(0x18f)) / (0x14 * -0x12f + -0x1f84 * -0x1 + 0x7cd * -0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x6162d * -0x1 + 0x8877 * -0x1f + -0x35b * -0x755));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1a + 0xadc + -0x96d);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[v(0x1c1) + w(0x19b)] || function (c) {
    const x = v;
    return c && c[x(0x1a2)] ? c : { 'default': c };
};
const k = {};
k[v(0x1c9)] = !![], Object[v(0x1a0) + v(0x1a3)](exports, w(0x1a2), k), exports[v(0x1c0)] = exports[w(0x19a) + v(0x1b0)] = exports[v(0x194)] = exports[w(0x19c)] = void (-0x2527 + -0x65 * 0x17 + 0x171d * 0x2);
function a() {
    const G = [
        'tenantId',
        'storeLogo',
        '__importDe',
        'AppError',
        'default',
        'image/',
        'emit',
        'file',
        'action',
        'mimetype',
        'value',
        'eSettingSe',
        'LOGO',
        'startsWith',
        '128bFGBhp',
        'cket',
        'REYCe',
        'AvNTT',
        'status',
        '../libs/so',
        '14701357GSmgEP',
        '52FlbvpQ',
        'gService',
        '2KbzCxH',
        '5073852SDmgID',
        'update',
        'admin',
        'setting',
        'body',
        'json',
        'stSettings',
        'storePriva',
        'fault',
        'index',
        '20XgTPDq',
        'getIO',
        'kgvJY',
        'defineProp',
        '../errors/',
        '__esModule',
        'erty',
        'profile',
        '65232LsZKQV',
        'XmpND',
        'filename',
        'efiCertFil',
        'dateSettin',
        'MISSION',
        '53421dUzOvR',
        'mHUxA',
        '450919qHuQYP',
        '968997SzOIvX',
        'eneralServ',
        'teFile',
        'ervices/Li',
        'ices/Updat',
        ':settings',
        's/SettingS',
        'ervices/Up',
        's/SettingG',
        'key',
        'GRfNu',
        'rvice',
        '2499020jVpssT',
        '../service',
        'user',
        'ERR_NO_PER',
        'Service'
    ];
    a = function () {
        return G;
    };
    return a();
}
const socket_1 = require(v(0x18e) + v(0x18a)), AppError_1 = __importDefault(require(w(0x1a1) + v(0x1c2))), UpdateSettingService_1 = __importDefault(require(v(0x1bb) + v(0x1b4) + w(0x1b5) + v(0x1a9) + v(0x191))), UpdateSettingService_2 = __importDefault(require(v(0x1bb) + w(0x1b6) + w(0x1af) + v(0x1b2) + v(0x1ca) + w(0x1b9))), ListSettingsService_1 = __importDefault(require(w(0x1bb) + v(0x1b4) + w(0x1b1) + v(0x199) + w(0x1be))), index = async (c, d) => {
        const y = w, z = v, {tenantId: e} = c[y(0x1bc)], f = await (-0xeb * -0x13 + 0x1 * 0x10b4 + -0x2225, ListSettingsService_1[z(0x1c3)])(e);
        return d[y(0x18d)](-0x278 * 0x2 + -0x1b06 * -0x1 + -0x65 * 0x36)[z(0x198)](f);
    };
exports[w(0x19c)] = index;
const update = async (f, g) => {
    const A = v, B = v, h = {};
    h[A(0x18c)] = function (r, s) {
        return r !== s;
    }, h[A(0x1a6)] = B(0x195), h[A(0x18b)] = A(0x1bd) + A(0x1aa), h[A(0x1ac)] = A(0x194);
    const i = h;
    if (i[A(0x18c)](f[B(0x1bc)][B(0x1a4)], i[B(0x1a6)]))
        throw new AppError_1[(A(0x1c3))](i[A(0x18b)], -0x1b32 + 0x14ed + 0x7d8);
    const {tenantId: j} = f[A(0x1bc)], {
            value: l,
            key: m
        } = f[B(0x197)], n = {};
    n[B(0x1b7)] = m, n[A(0x1c9)] = l, n[B(0x1bf)] = j;
    const o = await (-0x415 * 0x3 + 0x16a9 + 0x1f * -0x56, UpdateSettingService_1[B(0x1c3)])(n), p = (0x1 * -0x1b73 + -0xa5d + -0x10 * -0x25d, socket_1[A(0x19e)])(), q = {};
    return q[A(0x1c7)] = i[B(0x1ac)], q[A(0x196)] = o, p[A(0x1c5)](j + B(0x1b3), q), g[B(0x18d)](0x3 * 0x132 + -0x12d3 + 0x3 * 0x557)[A(0x198)](o);
};
exports[v(0x194)] = update;
const storePrivateFile = async (e, f) => {
    const C = w, D = w, g = {};
    g[C(0x1b8)] = C(0x1a8) + 'e';
    const h = g, i = e[D(0x1c6)], {tenantId: j} = e[C(0x1bc)], l = {};
    l[D(0x1b7)] = h[D(0x1b8)], l[D(0x1c9)] = i[D(0x1a7)];
    const m = await (0x1 * -0x1424 + 0x23f7 + -0xfd3, UpdateSettingService_2[C(0x1c3)])(l);
    return f[C(0x18d)](-0xdfc + 0x131a + 0x3 * -0x172)[D(0x198)](m[D(0x1c9)]);
};
exports[v(0x19a) + w(0x1b0)] = storePrivateFile;
const storeLogo = async (e, f) => {
    const E = w, F = w, g = {};
    g[E(0x19f)] = E(0x1c4);
    const h = g, i = e[E(0x1c6)], {tenantId: j} = e[E(0x1bc)];
    if (i && i[E(0x1c8)][E(0x1cc)](h[E(0x19f)])) {
        const l = {};
        l[E(0x1b7)] = E(0x1cb), l[E(0x1c9)] = i[F(0x1a7)], l[F(0x1bf)] = j;
        const m = await (0x18d8 + -0x21e2 + 0x90a, UpdateSettingService_1[E(0x1c3)])(l);
        return f[F(0x18d)](-0x1 * 0x1df3 + 0x3f * 0x33 + 0x122e)[E(0x198)](m[E(0x1c9)]);
    }
    return f[E(0x18d)](0x48 + 0x1 * -0xcaf + 0xdfd);
};
exports[w(0x1c0)] = storeLogo;