'use strict';
const p = b, q = b;
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(n(0x1fd)) / (0x1261 * -0x1 + 0xf6 + -0x116c * -0x1) + parseInt(o(0x1e4)) / (-0x14de + -0x2672 + 0x3b52) + parseInt(n(0x1cf)) / (0x1 * -0x144d + -0x1 * -0x163d + 0x1d * -0x11) + parseInt(o(0x1f3)) / (-0x13d0 * 0x1 + -0x14c0 + 0x2894) * (-parseInt(n(0x1fb)) / (-0xb * 0x347 + 0xe9f * 0x1 + -0x1573 * -0x1)) + -parseInt(o(0x1d2)) / (-0x2 * -0x835 + -0xbb9 + -0x4ab) * (-parseInt(n(0x1ee)) / (0x3 * -0x66a + -0xf1 + 0x1436)) + parseInt(n(0x1e2)) / (-0x1f * -0xb9 + -0x213d + 0xade) + -parseInt(o(0x1d9)) / (0x1387 * 0x1 + 0x1a * 0xbf + -0x20c * 0x13);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x3dbef + -0xb01 * 0x21 + 0x1 * -0xfd3));
var __importDefault = this && this[p(0x1db) + p(0x1e5)] || function (c) {
    const r = p;
    return c && c[r(0x1f4)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x14bf + -0x2 * 0x556 + 0x2138);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[q(0x1e9)] = !![], Object[q(0x1eb) + p(0x1dd)](exports, p(0x1f4), k);
const User_1 = __importDefault(require(p(0x1d5) + q(0x1da))), logger_1 = require(q(0x1e8) + p(0x1f0)), socket_1 = require(q(0x1ed) + q(0x1f8)), l = {};
function a() {
    const w = [
        'value',
        'fyOnlineUs',
        'defineProp',
        'every',
        '../libs/so',
        '98FQNayY',
        'rfsFa',
        'ogger',
        'forEach',
        'jobId',
        '3072pTLlri',
        '__esModule',
        'aUWNB',
        'itiated',
        'update',
        'cket',
        'repeat',
        'isOnline',
        '1290PKKuoU',
        'default',
        '96981OaFwwi',
        'error',
        'Error\x20Veri',
        'VerifyOnli',
        'verifyOnli',
        '707487IGNjfV',
        'Finalized\x20',
        'dPbvV',
        '72876mruUdw',
        'logger',
        'mplete',
        '../models/',
        'findAll',
        'emit',
        'removeOnFa',
        '2275803mEPCZM',
        'User',
        '__importDe',
        'getIO',
        'erty',
        'neUsers\x20In',
        'neUsers',
        'WKlVD',
        'ers',
        '1796456WqTpJu',
        'info',
        '146922aRMDpY',
        'fault',
        'message',
        'removeOnCo',
        '../utils/l'
    ];
    a = function () {
        return w;
    };
    return a();
}
l[p(0x1ec)] = (-0x1585 + 0x73f * -0x1 + 0x1d00) * (0x1 * 0x18fc + 0x1 * 0x6ee + -0x1c02);
const m = {};
m[p(0x1e7) + p(0x1d4)] = !![], m[p(0x1d8) + 'il'] = ![], m[q(0x1f2)] = q(0x1cd) + q(0x1df), m[p(0x1f9)] = l, exports[p(0x1fc)] = {
    'key': p(0x1cd) + q(0x1df),
    'options': m,
    async 'handle'() {
        const s = q, t = q, e = {};
        e[s(0x1f5)] = s(0x1cd) + s(0x1de) + s(0x1f6), e[s(0x1ef)] = t(0x1ce) + s(0x1df), e[s(0x1e0)] = t(0x1d0) + t(0x1cd) + t(0x1df), e[s(0x1d1)] = t(0x1ff) + s(0x1ea) + t(0x1e1);
        const f = e;
        try {
            logger_1[t(0x1d3)][s(0x1e3)](f[s(0x1f5)]);
            const g = await User_1[s(0x1fc)][s(0x1d6)]();
            g[s(0x1f1)](async i => {
                const u = t, v = t, j = {};
                j[u(0x1fa)] = ![], await i[v(0x1f7)](j);
            });
            const h = (0x2435 + 0x2 * -0xc0b + -0xc1f, socket_1[t(0x1dc)])();
            h[s(0x1d7)](f[t(0x1ef)]), logger_1[s(0x1d3)][t(0x1e3)](f[t(0x1e0)]);
        } catch (i) {
            const j = {};
            j[s(0x1e6)] = f[s(0x1d1)], j[t(0x1fe)] = i, logger_1[t(0x1d3)][s(0x1fe)](j);
            throw new Error(i);
        }
    }
};