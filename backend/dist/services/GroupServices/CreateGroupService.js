'use strict';
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(l(0x1a1)) / (0xbb6 * -0x3 + 0x87 * -0x46 + 0x20f * 0x23) * (parseInt(l(0x190)) / (0xa6b + 0xb * 0x40 + -0xd29)) + -parseInt(l(0x194)) / (0x1a87 * 0x1 + 0x22c2 + -0x3d46) + parseInt(l(0x1a0)) / (-0xaa9 * 0x1 + -0xa3d + 0x2 * 0xa75) + parseInt(m(0x18f)) / (0x2339 + 0x71 * -0x3e + -0x7d6) * (-parseInt(m(0x196)) / (0x1329 + 0x1832 + -0x2b55 * 0x1)) + -parseInt(l(0x19d)) / (0x146a + -0x359 * 0x2 + -0x2bd * 0x5) * (parseInt(l(0x19a)) / (0x1d8 * -0x13 + 0x1 * -0xad + 0x23bd)) + -parseInt(l(0x1a2)) / (0x1 * 0x17e1 + -0x1a2e + 0x17 * 0x1a) * (parseInt(m(0x199)) / (0x535 * 0x7 + 0x833 * -0x3 + -0x7e * 0x18)) + parseInt(l(0x198)) / (0x1f98 + 0xe7 * -0x26 + 0x2bd);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1 * -0x86479 + -0x4 * -0x51799 + -0x28819 * -0x1));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1415 + 0x6 * 0x497 + -0x2e14);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[n(0x18e) + o(0x18c)] || function (c) {
    const p = o;
    return c && c[p(0x195)] ? c : { 'default': c };
};
function a() {
    const s = [
        'isActive',
        '3056140bEXZHN',
        '37opqYVt',
        '4549203KpCbNP',
        'erty',
        'create',
        'fault',
        '../../mode',
        '__importDe',
        '160865AhXkOU',
        '37082BCRByY',
        'default',
        'tenantId',
        'value',
        '1181913pPCJmg',
        '__esModule',
        '102WTkytW',
        'ls/Group',
        '30449419NLdiNu',
        '10frmXCP',
        '560312ipvqka',
        'defineProp',
        'userId',
        '182diTHtC',
        'group'
    ];
    a = function () {
        return s;
    };
    return a();
}
const k = {};
k[o(0x193)] = !![], Object[n(0x19b) + n(0x1a3)](exports, o(0x195), k);
const Group_1 = __importDefault(require(o(0x18d) + o(0x197))), CreateGruopService = async ({
        group: d,
        isActive: e,
        userId: f,
        tenantId: g
    }) => {
        const q = n, r = o, h = {};
        h[q(0x19e)] = d, h[r(0x19f)] = e, h[q(0x19c)] = f, h[r(0x192)] = g;
        const i = await Group_1[r(0x191)][q(0x18b)](h);
        return i;
    };
exports[o(0x191)] = CreateGruopService;