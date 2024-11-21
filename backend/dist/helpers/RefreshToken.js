'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x6da * 0x1 + 0x973 * 0x1 + -0xe82);
        let h = e[f];
        return h;
    }, b(c, d);
}
const p = b, q = b;
function a() {
    const u = [
        '1c0cf45e0e',
        'final',
        '95b123ff7e',
        '__esModule',
        '739c486994',
        'ioXAL',
        'createDeci',
        '2521716yGGoFg',
        'f27c20b1e0',
        'value',
        'default',
        '7571241PvVaQa',
        'update',
        'fault',
        '2ac73ef0da',
        '86914248d1',
        '2512989eljlJW',
        'wrcEE',
        'defineProp',
        'utf-8',
        '7mEdpha',
        'erty',
        'crypto',
        '1aa46ad25b',
        'd0fda7688a',
        'pheriv',
        '10NOwttt',
        'hex',
        '1426663WFjStg',
        '0d689dc0e0',
        'RefreshTok',
        '833020aWgQaH',
        '5108040MLNZUm',
        '33ab',
        '8584024SUXAMg',
        '__importDe',
        'aes-256-cb',
        'from',
        '50MaVHeu',
        'QBARQ'
    ];
    a = function () {
        return u;
    };
    return a();
}
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(n(0x1d0)) / (-0x25ab * -0x1 + -0x1535 + -0x1075 * 0x1) + parseInt(n(0x1e3)) / (0x2c7 * 0x4 + 0xba + -0x2f5 * 0x4) + parseInt(n(0x1ec)) / (0xc1 * -0x2f + 0x1 * -0x1a78 + 0x3dea) + parseInt(o(0x1d3)) / (-0x701 + 0x227f + -0x1b7a) * (-parseInt(n(0x1ce)) / (0x1198 + -0x3d * 0x19 + -0x2 * 0x5cf)) + parseInt(n(0x1d4)) / (0x1 * -0xcb9 + -0x801 + -0x53 * -0x40) + -parseInt(n(0x1f0)) / (0x1054 + 0x4fd * 0x1 + -0x154a) * (-parseInt(o(0x1d6)) / (0x5 * 0x4 + 0x1 * -0x2fc + 0x2f0)) + -parseInt(n(0x1e7)) / (-0xb21 + 0x1248 + -0x71e) * (parseInt(n(0x1da)) / (-0x26f2 * -0x1 + -0x2249 + -0x49f));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x157bd1 + -0x2f711 + -0x5e72c));
var __importDefault = this && this[p(0x1d7) + q(0x1e9)] || function (c) {
    const r = q;
    return c && c[r(0x1df)] ? c : { 'default': c };
};
const m = {};
m[q(0x1e5)] = !![], Object[q(0x1ee) + p(0x1f1)](exports, q(0x1df), m), exports[p(0x1d2) + 'en'] = void (0x693 + 0x1 * 0xf1 + -0x784);
const crypto_1 = __importDefault(require(q(0x1f2))), CRYPTO_KEY = Buffer[p(0x1d9)](q(0x1dc) + p(0x1e0) + q(0x1e4) + q(0x1de) + p(0x1eb) + q(0x1cb) + q(0x1d5), p(0x1cf)), CRYPTO_IV = Buffer[p(0x1d9)](q(0x1ea) + p(0x1d1) + p(0x1cc) + '44', p(0x1cf)), RefreshToken = d => {
        const s = p, t = q, e = {};
        e[s(0x1ed)] = s(0x1d8) + 'c', e[s(0x1db)] = s(0x1cf), e[s(0x1e1)] = t(0x1ef);
        const f = e, g = crypto_1[s(0x1e6)][s(0x1e2) + t(0x1cd)](f[s(0x1ed)], CRYPTO_KEY, CRYPTO_IV);
        let h = g[t(0x1e8)](d, f[t(0x1db)], f[t(0x1e1)]);
        return h += g[t(0x1dd)](f[t(0x1e1)]), h;
    };
exports[q(0x1d2) + 'en'] = RefreshToken;