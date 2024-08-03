'use strict';
const p = b, q = b;
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(n(0x1fe)) / (-0x2c * 0xe3 + 0x2f7 * 0x5 + -0x146 * -0x13) * (-parseInt(n(0x1eb)) / (0x11 * -0x15f + -0x905 * -0x3 + -0x3be)) + parseInt(n(0x201)) / (-0x9f6 + 0x1c6f + 0x11 * -0x116) * (-parseInt(n(0x1ec)) / (-0xf1d + -0x993 + 0x174 * 0x11)) + -parseInt(o(0x1f9)) / (-0x1 * -0x513 + -0x4 * -0x6a7 + -0x1faa) * (-parseInt(o(0x207)) / (-0x7 * -0x4b3 + -0x1 * 0x103 + -0x1fdc)) + parseInt(n(0x1ef)) / (0x1bd1 + 0x8cd + -0x1d * 0x143) + -parseInt(o(0x1f2)) / (0x1854 * 0x1 + 0x1 * 0x22e7 + -0x3b33) + parseInt(o(0x1fd)) / (0x22de + 0x1f * -0x139 + 0x312) * (parseInt(o(0x1fa)) / (-0x154 * 0x16 + 0x121d + 0x3 * 0x3b7)) + -parseInt(o(0x1f4)) / (0x61 * -0x2e + -0xa02 + 0x1b7b);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x7 * 0x1e3d1 + -0x100f4a + 0x26e23e));
function a() {
    const u = [
        'fault',
        '8750938BaGskp',
        'user',
        'tsBnj',
        '1847352bdkDac',
        'where',
        '15117135vQAoFm',
        'default',
        'defineProp',
        'erty',
        'include',
        '40YGMwdS',
        '670LCKzUm',
        'groupId',
        'ls/User',
        '102969lNjNAj',
        '12UAiSxs',
        'value',
        '__esModule',
        '522OeUhvx',
        '__importDe',
        'model',
        '../../mode',
        'findAll',
        'ls/UsersGr',
        '354942noTXXh',
        '51246GRFpBw',
        '12952sTVJHX',
        'oups'
    ];
    a = function () {
        return u;
    };
    return a();
}
var __importDefault = this && this[p(0x202) + p(0x1ee)] || function (c) {
    const r = p;
    return c && c[r(0x200)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * -0x853 + -0xd * 0x1f7 + 0x23c9);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[p(0x1ff)] = !![], Object[p(0x1f6) + p(0x1f7)](exports, q(0x200), k);
const User_1 = __importDefault(require(p(0x204) + q(0x1fc))), UsersGroups_1 = __importDefault(require(p(0x204) + p(0x206) + q(0x1ed))), FindUserByGroupService = async g => {
        const s = q, t = p, h = {};
        h[s(0x1f1)] = s(0x1f0);
        const i = h, j = {};
        j[s(0x1fb)] = g;
        const l = {};
        l[t(0x203)] = User_1[s(0x1f5)], l['as'] = i[s(0x1f1)];
        const m = {};
        return m[t(0x1f3)] = j, m[t(0x1f8)] = [l], await UsersGroups_1[s(0x1f5)][s(0x205)](m);
    };
exports[q(0x1f5)] = FindUserByGroupService;