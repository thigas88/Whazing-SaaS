'use strict';
const p = b, q = b;
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(n(0x199)) / (0x15 * -0x11 + -0x9c * 0x8 + -0xb * -0x92) + -parseInt(n(0x198)) / (0x2553 + -0x1b97 + -0x9ba) + parseInt(n(0x1a1)) / (0x31 * -0x1a + -0x239a + 0x2897) * (-parseInt(o(0x192)) / (0x1424 * 0x1 + 0x3b1 + -0x17d1)) + parseInt(n(0x1a2)) / (0x3 * 0x3b9 + -0x1d5a + 0x1234) * (parseInt(o(0x196)) / (0x216f + 0x22 * -0x1 + -0x2147)) + -parseInt(n(0x19a)) / (-0x481 + -0x1da7 * 0x1 + 0x1 * 0x222f) + -parseInt(o(0x19d)) / (-0x367 * 0x1 + -0xab9 + 0x12e * 0xc) * (parseInt(n(0x194)) / (0x1 * -0x59d + 0x551 * -0x7 + 0x1 * 0x2add)) + parseInt(n(0x193)) / (0x15f3 + -0x2eb + -0x22 * 0x8f) * (parseInt(n(0x1a0)) / (0x22ad + 0x185 * -0xd + 0x125 * -0xd));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x297a2 + 0x2f384 + 0x7c018));
var __importDefault = this && this[p(0x1a6) + p(0x19b)] || function (c) {
    const r = p;
    return c && c[r(0x1a9)] ? c : { 'default': c };
};
const k = {};
function a() {
    const u = [
        'defineProp',
        'include',
        '81114alMxKp',
        '6627lcxlNi',
        '1611085cMiQKi',
        'oups',
        '../../mode',
        'where',
        '__importDe',
        'ls/User',
        'groupId',
        '__esModule',
        'value',
        'user',
        'model',
        'ls/UsersGr',
        'default',
        '2752TXerom',
        '5210jMCRLJ',
        '172242fkIWYI',
        'findAll',
        '30YYaYnT',
        'erty',
        '683318WdhKRn',
        '1383166aFNYTe',
        '8153950KZMHyz',
        'fault',
        'jdHuF',
        '72BsXJSq'
    ];
    a = function () {
        return u;
    };
    return a();
}
k[p(0x1aa)] = !![], Object[p(0x19e) + p(0x197)](exports, q(0x1a9), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x8c + -0x184 * -0x1 + 0x96);
        let h = e[f];
        return h;
    }, b(c, d);
}
const User_1 = __importDefault(require(p(0x1a4) + q(0x1a7))), UsersGroups_1 = __importDefault(require(p(0x1a4) + p(0x190) + q(0x1a3))), FindUserByGroupService = async g => {
        const s = p, t = q, h = {};
        h[s(0x19c)] = s(0x18e);
        const i = h, j = {};
        j[s(0x1a8)] = g;
        const l = {};
        l[t(0x18f)] = User_1[t(0x191)], l['as'] = i[s(0x19c)];
        const m = {};
        return m[t(0x1a5)] = j, m[s(0x19f)] = [l], await UsersGroups_1[t(0x191)][s(0x195)](m);
    };
exports[q(0x191)] = FindUserByGroupService;