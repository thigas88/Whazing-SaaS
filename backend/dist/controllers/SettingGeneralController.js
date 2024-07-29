'use strict';
const u = b, v = b;
(function (c, d) {
    const s = b, t = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(s(0xb5)) / (-0x25c1 + 0xe * 0x29 + -0x1 * -0x2384) + parseInt(t(0xd6)) / (-0xe3d + -0x728 + 0x1567 * 0x1) * (-parseInt(t(0xdc)) / (0x227f + -0x44c + -0x1e30)) + -parseInt(t(0xe1)) / (-0xd37 + 0x1 * -0x246d + 0x1 * 0x31a8) * (-parseInt(t(0xc1)) / (-0x5d5 + 0x7f * 0x4d + -0x2059)) + -parseInt(t(0xb7)) / (0x2 * -0xbd7 + -0x11 * -0x37 + 0x140d) + -parseInt(s(0xbd)) / (0x1 * 0x78d + 0x41 * -0x29 + 0x2e3 * 0x1) + -parseInt(t(0xc0)) / (-0x1f17 + -0x1f * 0x5b + 0x2a24) + parseInt(t(0xc8)) / (0x1a69 * -0x1 + -0x1aea + 0x355c);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x125 * 0x827 + 0xaf681 + -0xa0668));
function a() {
    const B = [
        'zFXuT',
        'body',
        'profile',
        'ettingsSer',
        '248FnMYwC',
        'eneralServ',
        'NHSGP',
        '../libs/so',
        'cket',
        '435838BXMCcq',
        's/SettingG',
        '6249942fguqad',
        'setting',
        'key',
        'getIO',
        'status',
        'defineProp',
        '3289720rzoRsu',
        'json',
        'update',
        '3121960DToLnO',
        '27325GAMSkR',
        'ices/ListS',
        'admin',
        'eSettingSe',
        'default',
        '__importDe',
        'fault',
        '24360966eWgqxd',
        'MISSION',
        'action',
        'ERR_NO_PER',
        '../errors/',
        'tOXwh',
        'index',
        'qYxpZ',
        'emit',
        '1:settings',
        '../service',
        'erty',
        'ices/Updat',
        '__esModule',
        '34948HRZvnQ',
        'value',
        'rvice',
        'AppError',
        'vice',
        'user',
        '6Eqxtit'
    ];
    a = function () {
        return B;
    };
    return a();
}
var __importDefault = this && this[u(0xc6) + u(0xc7)] || function (c) {
    const w = v;
    return c && c[w(0xd5)] ? c : { 'default': c };
};
const k = {};
k[u(0xd7)] = !![], Object[v(0xbc) + u(0xd3)](exports, v(0xd5), k), exports[u(0xbf)] = exports[u(0xce)] = void (-0x1a47 + 0x1fae + -0x567 * 0x1);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x5ca + 0x1 * 0x455 + 0x1 * -0x96d);
        let h = e[f];
        return h;
    }, b(c, d);
}
const socket_1 = require(v(0xb3) + u(0xb4)), AppError_1 = __importDefault(require(v(0xcc) + u(0xd9))), UpdateSettingService_1 = __importDefault(require(v(0xd2) + v(0xb6) + v(0xe2) + v(0xd4) + u(0xc4) + u(0xd8))), ListSettingsService_1 = __importDefault(require(u(0xd2) + u(0xb6) + u(0xe2) + u(0xc2) + u(0xe0) + v(0xda))), index = async (c, d) => {
        const x = v, y = v, e = await (-0x550 + -0x1 * 0x1e95 + 0x23e5, ListSettingsService_1[x(0xc5)])();
        return d[x(0xbb)](-0x2129 * -0x1 + 0x10 * 0x97 + -0x5 * 0x85d)[x(0xbe)](e);
    };
exports[u(0xce)] = index;
const update = async (f, g) => {
    const z = u, A = v, h = {};
    h[z(0xcf)] = function (q, r) {
        return q !== r;
    }, h[A(0xb2)] = z(0xc3), h[z(0xcd)] = A(0xcb) + z(0xc9), h[z(0xdd)] = A(0xbf);
    const i = h;
    if (i[A(0xcf)](f[A(0xdb)][z(0xdf)], i[z(0xb2)]))
        throw new AppError_1[(A(0xc5))](i[A(0xcd)], -0x2f * -0x5e + 0x8e1 * -0x3 + 0xaf4);
    const {
            value: j,
            key: l
        } = f[z(0xde)], m = {};
    m[A(0xb9)] = l, m[z(0xd7)] = j;
    const n = await (0x58a + -0x16e3 + 0x1159, UpdateSettingService_1[z(0xc5)])(m), o = (0x1393 * -0x1 + -0x5ff + 0x1992, socket_1[A(0xba)])(), p = {};
    return p[A(0xca)] = i[z(0xdd)], p[z(0xb8)] = n, o[A(0xd0)](z(0xd1), p), g[A(0xbb)](-0x669 + -0x2 * 0xc17 + -0x3 * -0xa75)[A(0xbe)](n);
};
exports[u(0xbf)] = update;