'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x169e + -0x2 * -0x869 + 0x663);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const B = [
        'vice',
        'dGxoK',
        '__esModule',
        '5363588zKoxGS',
        'rvice',
        'cket',
        'eSettingSe',
        '../errors/',
        'action',
        '8iozMYD',
        'erty',
        'AppError',
        '1453310qpTKty',
        '__importDe',
        'json',
        'ices/ListS',
        'admin',
        'key',
        'getIO',
        'eneralServ',
        '1:settings',
        'value',
        'MISSION',
        '7080822TYethf',
        'profile',
        'ZMJNE',
        's/SettingG',
        '7793FFfxCs',
        '1070217JRvELp',
        'fault',
        'user',
        'setting',
        '6454665JaCHrG',
        'status',
        'ettingsSer',
        'auXgr',
        '146mBICIA',
        'MogIN',
        '../service',
        'ices/Updat',
        'default',
        'ERR_NO_PER',
        'update',
        'defineProp',
        'body',
        '../libs/so',
        '7034448dyxvEr',
        'index',
        'emit'
    ];
    a = function () {
        return B;
    };
    return a();
}
const u = b, v = b;
(function (c, d) {
    const s = b, t = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(s(0x9e)) / (0x13de + -0x64 * 0xf + -0xe01) * (-parseInt(s(0xa7)) / (0x8ca + 0x256c * -0x1 + 0x1ca4)) + -parseInt(s(0x9f)) / (0x47 + 0x565 * 0x5 + -0x13 * 0x16f) + parseInt(s(0xb7)) / (-0x239e + -0x7f4 + 0x2b96) + -parseInt(t(0xc0)) / (0x51a + 0x3b3 * 0x2 + 0x163 * -0x9) + -parseInt(s(0xb1)) / (-0x1 * -0x2014 + -0x1bc * -0x15 + -0x447a) + parseInt(t(0x9a)) / (0x2256 + 0x63 * 0x3 + -0x2378) + parseInt(t(0xbd)) / (-0x1cb0 + 0xbaa * 0x2 + 0x564) * (parseInt(s(0xa3)) / (-0x1184 + -0x1 * 0xf93 + 0x2120));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xdb41 * 0x3 + 0x12479 * 0x9 + 0xb0e * 0x3e));
var __importDefault = this && this[u(0xc1) + u(0xa0)] || function (c) {
    const w = u;
    return c && c[w(0xb6)] ? c : { 'default': c };
};
const k = {};
k[u(0x98)] = !![], Object[u(0xae) + u(0xbe)](exports, u(0xb6), k), exports[v(0xad)] = exports[v(0xb2)] = void (-0x2329 * 0x1 + 0x2 * -0x4a7 + 0x2c77);
const socket_1 = require(u(0xb0) + v(0xb9)), AppError_1 = __importDefault(require(u(0xbb) + u(0xbf))), UpdateSettingService_1 = __importDefault(require(u(0xa9) + v(0x9d) + u(0xc7) + v(0xaa) + u(0xba) + u(0xb8))), ListSettingsService_1 = __importDefault(require(v(0xa9) + u(0x9d) + u(0xc7) + u(0xc3) + v(0xa5) + u(0xb4))), index = async (c, d) => {
        const x = u, y = u, e = await (-0x11ab * -0x1 + 0x5a * 0x3d + 0x11 * -0x24d, ListSettingsService_1[x(0xab)])();
        return d[x(0xa4)](-0x8d5 + 0x663 + 0x19d * 0x2)[y(0xc2)](e);
    };
exports[v(0xb2)] = index;
const update = async (f, g) => {
    const z = u, A = v, h = {};
    h[z(0xa8)] = function (q, r) {
        return q !== r;
    }, h[A(0x9c)] = z(0xc4), h[A(0xb5)] = z(0xac) + A(0x99), h[A(0xa6)] = A(0xad);
    const i = h;
    if (i[A(0xa8)](f[z(0xa1)][z(0x9b)], i[z(0x9c)]))
        throw new AppError_1[(A(0xab))](i[z(0xb5)], -0x5 * 0x433 + -0x122e * 0x2 + 0x3aee);
    const {
            value: j,
            key: l
        } = f[A(0xaf)], m = {};
    m[A(0xc5)] = l, m[A(0x98)] = j;
    const n = await (0x752 * -0x3 + -0x135 * -0x1b + -0xaa1, UpdateSettingService_1[z(0xab)])(m), o = (-0x194e * -0x1 + 0x1f06 + 0x8c * -0x67, socket_1[z(0xc6)])(), p = {};
    return p[A(0xbc)] = i[z(0xa6)], p[z(0xa2)] = n, o[z(0xb3)](z(0x97), p), g[z(0xa4)](-0x1580 + 0x167f + -0x37)[A(0xc2)](n);
};
exports[u(0xad)] = update;