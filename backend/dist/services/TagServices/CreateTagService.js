'use strict';
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(l(0xaf)) / (-0x19ee + 0x1b66 + -0x177) + parseInt(m(0xae)) / (0xbfb * -0x2 + -0x2 * -0x1bf + 0x147a) * (-parseInt(m(0xaa)) / (0x1 * -0x166 + -0x1 * -0x1ab + -0x42)) + -parseInt(m(0xab)) / (-0x179c + -0x218a + 0x392a) * (parseInt(m(0xa9)) / (-0x1ab0 + 0x394 + 0x1721)) + -parseInt(l(0xa1)) / (0x494 + -0xe0 * 0xb + 0x512) * (-parseInt(m(0x9a)) / (0x2 * -0xc9b + 0xf * -0x1f1 + 0x365c)) + parseInt(m(0xad)) / (0x95b + 0x14b * 0x1a + 0x1 * -0x2af1) + -parseInt(m(0xa4)) / (-0x35 * -0x8 + 0x1e92 + -0x7b * 0x43) + -parseInt(m(0xa6)) / (0x1001 + 0x1307 + -0x22fe) * (-parseInt(l(0xac)) / (0x19d8 + -0x1 * 0xeec + 0x22d * -0x5));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xcd751 + 0x30966 * 0x2 + 0xd986e));
function a() {
    const s = [
        'fault',
        'isActive',
        'defineProp',
        '../../mode',
        '891723SQBaBN',
        'ls/Tag',
        'userId',
        'create',
        '__importDe',
        '__esModule',
        'tag',
        '42DQznMa',
        'tenantId',
        'color',
        '3433680RLMtPz',
        'default',
        '15228840VnXxBk',
        'erty',
        'value',
        '596260QMWKhS',
        '25479ulePJP',
        '24RLWNvc',
        '11RWDqxK',
        '4595288mcxJta',
        '132aCsNrB',
        '883983tVCUbj'
    ];
    a = function () {
        return s;
    };
    return a();
}
var __importDefault = this && this[n(0x9e) + n(0xb0)] || function (c) {
    const p = o;
    return c && c[p(0x9f)] ? c : { 'default': c };
};
const k = {};
k[o(0xa8)] = !![], Object[n(0xb2) + n(0xa7)](exports, o(0x9f), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x23 * 0x4f + -0x1 * 0x1ac5 + 0x1092);
        let h = e[f];
        return h;
    }, b(c, d);
}
const Tag_1 = __importDefault(require(o(0xb3) + n(0x9b))), CreateTagService = async ({
        tag: d,
        color: e,
        isActive: f,
        userId: g,
        tenantId: h
    }) => {
        const q = o, r = n, i = {};
        i[q(0xa0)] = d, i[q(0xa3)] = e, i[q(0xb1)] = f, i[r(0x9c)] = g, i[q(0xa2)] = h;
        const j = await Tag_1[r(0xa5)][r(0x9d)](i);
        return j;
    };
exports[n(0xa5)] = CreateTagService;