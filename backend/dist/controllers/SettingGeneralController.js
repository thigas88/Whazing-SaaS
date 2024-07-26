'use strict';
const u = b, v = b;
(function (c, d) {
    const s = b, t = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(s(0xc6)) / (0x269f * 0x1 + -0x6d4 + -0x1fca) * (parseInt(t(0xa2)) / (-0x1cfe + -0x8 * -0x2bc + 0x720)) + parseInt(t(0xc5)) / (0x1ced + 0x8eb + -0x2e9 * 0xd) * (parseInt(s(0xae)) / (0x1e28 + 0x2a4 + -0x20c8 * 0x1)) + -parseInt(t(0xcd)) / (-0x2129 + 0x25ee + -0x4c0) + parseInt(t(0xc9)) / (-0x1 * -0x4ec + -0x8ab + 0x3c5) * (-parseInt(t(0xc2)) / (-0xbca + -0x111 * 0x4 + 0x1015)) + parseInt(t(0xbb)) / (0x1468 + 0x1b * -0x12d + 0xb5f) + -parseInt(s(0xb1)) / (-0x1027 + 0x1e9 * 0x11 + -0x1049) * (parseInt(t(0xc0)) / (-0x2152 + -0xf32 + 0x308e)) + parseInt(s(0xca)) / (-0x48e + 0x1 * -0x1315 + 0x17ae);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x71ddc * -0x2 + 0x1019d4 + -0x96 * 0x1eaf));
function a() {
    const B = [
        'update',
        '9346264mTWZtM',
        'user',
        '../errors/',
        'default',
        'action',
        '7430dcuOVo',
        'status',
        '287ffKFjz',
        '1:settings',
        'UvFOJ',
        '907905TmqgIf',
        '1upcioH',
        'NdkEY',
        'ettingsSer',
        '159588yaClyu',
        '6723981osQDee',
        'emit',
        'EkNVM',
        '2750755bSGRCI',
        '__esModule',
        'ERR_NO_PER',
        's/SettingG',
        'admin',
        '../libs/so',
        'setting',
        'AppError',
        '2488414xFiyOJ',
        'fault',
        'profile',
        'vice',
        'eSettingSe',
        'body',
        'getIO',
        'cket',
        '__importDe',
        'ices/Updat',
        '../service',
        'index',
        '4CwvVIu',
        'defineProp',
        'value',
        '10611DXdDNc',
        'eneralServ',
        'MISSION',
        'ices/ListS',
        'json',
        'key',
        'rvice',
        'erty',
        'MkQwl'
    ];
    a = function () {
        return B;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x970 + -0x4 * -0x491 + -0x1b19);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[u(0xaa) + v(0xa3)] || function (c) {
    const w = u;
    return c && c[w(0x9b)] ? c : { 'default': c };
};
const k = {};
k[u(0xb0)] = !![], Object[v(0xaf) + u(0xb8)](exports, v(0x9b), k), exports[v(0xba)] = exports[u(0xad)] = void (0x1 * -0x682 + 0x59d * 0x1 + 0xe5);
const socket_1 = require(v(0x9f) + u(0xa9)), AppError_1 = __importDefault(require(v(0xbd) + v(0xa1))), UpdateSettingService_1 = __importDefault(require(u(0xac) + u(0x9d) + u(0xb2) + v(0xab) + v(0xa6) + v(0xb7))), ListSettingsService_1 = __importDefault(require(v(0xac) + u(0x9d) + v(0xb2) + u(0xb4) + u(0xc8) + u(0xa5))), index = async (c, d) => {
        const x = u, y = u, e = await (-0x24c7 + 0x35 * -0x5c + -0x1cd * -0x1f, ListSettingsService_1[x(0xbe)])();
        return d[x(0xc1)](-0x22 * 0xeb + -0xa9a * -0x1 + 0x94 * 0x25)[y(0xb5)](e);
    };
exports[u(0xad)] = index;
const update = async (f, g) => {
    const z = v, A = v, h = {};
    h[z(0xc7)] = function (q, r) {
        return q !== r;
    }, h[A(0xb9)] = A(0x9e), h[z(0xcc)] = A(0x9c) + A(0xb3), h[z(0xc4)] = A(0xba);
    const i = h;
    if (i[z(0xc7)](f[z(0xbc)][z(0xa4)], i[A(0xb9)]))
        throw new AppError_1[(z(0xbe))](i[A(0xcc)], -0x32f * -0x7 + 0x587 * -0x7 + -0x1 * -0x11fb);
    const {
            value: j,
            key: l
        } = f[z(0xa7)], m = {};
    m[A(0xb6)] = l, m[z(0xb0)] = j;
    const n = await (0x235a + 0x18a7 + -0x1 * 0x3c01, UpdateSettingService_1[A(0xbe)])(m), o = (-0x75e + -0x2669 * 0x1 + 0x2dc7 * 0x1, socket_1[A(0xa8)])(), p = {};
    return p[z(0xbf)] = i[z(0xc4)], p[z(0xa0)] = n, o[A(0xcb)](z(0xc3), p), g[A(0xc1)](0x562 * 0x1 + 0x6 * 0x443 + 0xf16 * -0x2)[z(0xb5)](n);
};
exports[v(0xba)] = update;