'use strict';
const o = b, p = b;
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(m(0x15e)) / (0x11f7 + 0x1c * 0xd4 + -0x2926) * (-parseInt(m(0x162)) / (-0x12fd * 0x2 + 0x5a * -0x3b + 0x3aba)) + -parseInt(m(0x165)) / (-0x14 * 0x145 + -0x33e + 0x1ca5) * (parseInt(n(0x164)) / (0x701 + 0x1cff + -0x23fc)) + -parseInt(m(0x15c)) / (0x557 + 0xb7 * -0x27 + 0x168f) * (parseInt(n(0x167)) / (0x5 * -0x2f1 + -0x8e6 + -0x1 * -0x17a1)) + parseInt(n(0x166)) / (0x4 * -0x2d1 + 0x138d + -0x7 * 0x12e) * (-parseInt(m(0x16e)) / (0x112d + -0x1 * -0x1d4a + -0x2e6f)) + parseInt(n(0x168)) / (0x38 * 0x63 + 0x3 * -0x26a + -0xe61) * (-parseInt(m(0x176)) / (-0xb1 * -0x35 + -0xb9 * -0x3 + -0x26c6)) + -parseInt(m(0x170)) / (-0xbc * -0x1 + 0x59 * -0x6e + 0x258d) * (parseInt(n(0x161)) / (0x21 * 0xd9 + 0x4 * -0xda + -0x1885)) + parseInt(m(0x175)) / (0x1d5f + 0x5ad * -0x1 + 0x1 * -0x17a5);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xbd75a * -0x1 + 0xea162 + -0xdfb * 0x14f));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x31b + 0x165 + -0x31 * -0x10);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[o(0x15f) + o(0x16a)] || function (c) {
    const q = o;
    return c && c[q(0x163)] ? c : { 'default': c };
};
const k = {};
function a() {
    const t = [
        '1246333iksqCK',
        'isActive',
        'create',
        'defineProp',
        'nId',
        '31180461JzZyln',
        '30nKLMmm',
        'value',
        'default',
        '../../mode',
        '1735lasDYs',
        'queue',
        '3YKkuej',
        '__importDe',
        'integratio',
        '48rPauEK',
        '496534qAnRMD',
        '__esModule',
        '4NIXOJf',
        '2612478LZcpJK',
        '39305ziNKJr',
        '17652crCExK',
        '248481PzWTNP',
        'color',
        'fault',
        'tenantId',
        'erty',
        'userId',
        '256kLPDgo',
        'ls/Queue'
    ];
    a = function () {
        return t;
    };
    return a();
}
k[p(0x177)] = !![], Object[o(0x173) + o(0x16c)](exports, p(0x163), k);
const Queue_1 = __importDefault(require(p(0x15b) + p(0x16f))), CreateQueueService = async ({
        queue: d,
        isActive: e,
        userId: f,
        color: g,
        tenantId: h,
        integrationId: i
    }) => {
        const r = p, s = p, j = {};
        j[r(0x15d)] = d, j[r(0x171)] = e, j[r(0x16d)] = f, j[r(0x169)] = g, j[s(0x16b)] = h, j[r(0x160) + s(0x174)] = i;
        const l = await Queue_1[s(0x15a)][r(0x172)](j);
        return l;
    };
exports[p(0x15a)] = CreateQueueService;