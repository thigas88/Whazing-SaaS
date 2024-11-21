'use strict';
const p = b, q = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x90 + 0x1743 + -0x27 * 0x8b);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(n(0x198)) / (0x13 * 0x1a8 + 0x452 + 0x1 * -0x23c9) * (parseInt(o(0x196)) / (-0x1def + 0x90 * -0x43 + 0x43a1)) + parseInt(o(0x18e)) / (0x1001 + 0x794 + -0x1792) * (parseInt(n(0x191)) / (0x1ae6 + -0x16a * 0x19 + 0x878)) + -parseInt(o(0x1a8)) / (-0x3 * 0x7a7 + -0x13 * 0x125 + 0x2cb9) + -parseInt(n(0x18b)) / (-0x1 * 0x5a + -0x207e + 0x20de) * (parseInt(n(0x19b)) / (-0x1 * -0x19af + -0x5 * -0x75e + 0x1a5 * -0x26)) + parseInt(o(0x1ab)) / (-0x11 * 0x23d + 0x2 * 0xdf6 + 0x11 * 0x99) + -parseInt(o(0x1b0)) / (0xf7e + -0x2 * -0x905 + 0x6b3 * -0x5) + -parseInt(n(0x1a9)) / (0x22cc + -0x17b * 0xd + -0xf83);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xa76 * 0x127 + -0x2 * -0x65152 + -0xfb2a4));
var __importDefault = this && this[p(0x19c) + p(0x1b3)] || function (c) {
    const r = p;
    return c && c[r(0x1b2)] ? c : { 'default': c };
};
const k = {};
function a() {
    const u = [
        'instagramK',
        '18aadvOc',
        '../../erro',
        'ls/Whatsap',
        '6FoCfLT',
        'KPGEj',
        'ERR_NO_CHA',
        '1003064IeOAcF',
        'ddEcG',
        'erty',
        'yFchv',
        'PiNPE',
        '2115196StZdOI',
        'rs/AppErro',
        '1kIdgZE',
        'tenantId',
        'findOne',
        '1984766OCcifl',
        '__importDe',
        'status',
        '../../mode',
        'yWnRq',
        'tokenAPI',
        'value',
        'jzOYJ',
        'ZcjIU',
        'fbObject',
        'vJNye',
        'NNEL_FOUND',
        'updatedAt',
        '1512645LUyBsA',
        '1255350aSRSAs',
        'attributes',
        '5511760PGhZAF',
        'defineProp',
        'name',
        'default',
        'woVnG',
        '3421044PIiOAr',
        'createdAt',
        '__esModule',
        'fault',
        'fbPageId',
        'IhNtM',
        'where',
        'rCPNy',
        'type'
    ];
    a = function () {
        return u;
    };
    return a();
}
k[q(0x1a1)] = !![], Object[p(0x1ac) + q(0x193)](exports, q(0x1b2), k);
const Whatsapp_1 = __importDefault(require(p(0x19e) + q(0x18d) + 'p')), AppError_1 = __importDefault(require(q(0x18c) + p(0x197) + 'r')), MessengerShowChannel = async ({fbPageId: f}) => {
        const s = q, t = p, g = {};
        g[s(0x1a5)] = t(0x1ad), g[t(0x1a3)] = s(0x19d), g[t(0x19f)] = s(0x189), g[s(0x186)] = t(0x1b1), g[t(0x194)] = t(0x1a7), g[t(0x192)] = t(0x199), g[t(0x195)] = s(0x1a0), g[s(0x1a2)] = t(0x1b4), g[t(0x18f)] = t(0x1a4), g[s(0x188)] = t(0x18a) + 'ey', g[t(0x1af)] = s(0x190) + t(0x1a6);
        const h = g, i = [
                'id',
                h[t(0x1a5)],
                h[s(0x1a3)],
                h[t(0x19f)],
                h[s(0x186)],
                h[s(0x194)],
                h[t(0x192)],
                h[s(0x195)],
                h[t(0x1a2)],
                h[s(0x18f)],
                h[t(0x188)]
            ], j = {};
        j[s(0x1b4)] = f;
        const l = {};
        l[s(0x187)] = j, l[s(0x1aa)] = i;
        const m = await Whatsapp_1[t(0x1ae)][s(0x19a)](l);
        if (!m)
            throw new AppError_1[(s(0x1ae))](h[s(0x1af)], 0x1fcc + 0x2e + 0x1 * -0x1e66);
        return m;
    };
exports[p(0x1ae)] = MessengerShowChannel;