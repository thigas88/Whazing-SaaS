'use strict';
const o = b, p = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x19e3 + -0x2 * -0x9f7 + -0x2d59);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(m(0x7f)) / (-0x9 * -0x323 + 0x1ccb + -0x3905) + -parseInt(m(0x7a)) / (0x1567 * 0x1 + -0x1 * 0xa49 + 0x2c7 * -0x4) + -parseInt(n(0x89)) / (0xd11 + 0x5 * 0xcb + -0x1105) * (parseInt(m(0x7b)) / (0x110 * -0xa + 0xd * -0x9b + 0x1283)) + -parseInt(n(0x90)) / (0xb42 + -0x1c9 + 0x2c * -0x37) * (parseInt(m(0x81)) / (0x468 * 0x5 + -0xc * -0x9 + 0xc6 * -0x1d)) + parseInt(n(0x8a)) / (0x13 * -0x45 + -0x1d9d + 0x22c3) + parseInt(m(0x83)) / (-0x3b * 0x65 + -0x10c0 + -0x7 * -0x5b9) + parseInt(n(0x82)) / (0xd01 * 0x2 + -0x1a00 + 0x7) * (parseInt(n(0x92)) / (0xbba + 0xe47 + -0x121 * 0x17));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x4c516 + -0x8be85 + 0x171d55 * 0x1));
function a() {
    const t = [
        'ASC',
        'key',
        'ls/FastRep',
        '9ejXrRh',
        '2038582cqdlcq',
        'fault',
        'erty',
        'value',
        'order',
        '__importDe',
        '6047970gsANrN',
        'default',
        '10glpWUG',
        'tenantId',
        'JnIkw',
        '1096604ehNklq',
        '1371596GYlhzR',
        'where',
        '__esModule',
        'findAll',
        '836788TUxuKN',
        'defineProp',
        '6uOknCW',
        '30521619hISgBO',
        '4560336jZdHNc',
        'QWbiN',
        '../../mode'
    ];
    a = function () {
        return t;
    };
    return a();
}
var __importDefault = this && this[o(0x8f) + p(0x8b)] || function (c) {
    const q = o;
    return c && c[q(0x7d)] ? c : { 'default': c };
};
const k = {};
k[o(0x8d)] = !![], Object[p(0x80) + p(0x8c)](exports, p(0x7d), k);
const FastReply_1 = __importDefault(require(o(0x85) + o(0x88) + 'ly')), ListFastReplyService = async ({tenantId: f}) => {
        const r = p, s = o, g = {};
        g[r(0x79)] = r(0x87), g[s(0x84)] = s(0x86);
        const h = g, i = {};
        i[s(0x78)] = f;
        const j = {};
        j[s(0x7c)] = i, j[r(0x8e)] = [[
                h[r(0x79)],
                h[s(0x84)]
            ]];
        const l = await FastReply_1[s(0x91)][s(0x7e)](j);
        return l;
    };
exports[p(0x91)] = ListFastReplyService;