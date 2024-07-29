'use strict';
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(l(0x111)) / (-0x26ea + 0x11c3 + 0x1528 * 0x1) * (parseInt(l(0x11b)) / (-0xd96 + -0x4d5 * 0x4 + 0x20ec)) + parseInt(m(0x113)) / (0x1f02 + 0x1689 + 0x6b1 * -0x8) * (-parseInt(l(0x114)) / (-0xa * -0xee + 0xe54 + 0x5e7 * -0x4)) + -parseInt(m(0x122)) / (-0x251 * 0x7 + 0x136c + -0x330) * (-parseInt(m(0x116)) / (0x1cff + 0x4 * -0x433 + -0xc2d * 0x1)) + -parseInt(m(0x11d)) / (0x1 * -0x14f0 + 0x11eb + 0x30c) * (-parseInt(m(0x115)) / (0x8d * 0x3e + -0xf4e + -0x12d0)) + -parseInt(l(0x10c)) / (-0x1dcd * -0x1 + -0x26cc + 0x908) * (parseInt(m(0x10d)) / (-0x1cec + 0x1 * -0x1e4f + -0x3b45 * -0x1)) + parseInt(l(0x119)) / (0x1b * 0x11d + -0x6bb + 0x7c3 * -0x3) * (parseInt(l(0x10e)) / (0x3 * -0x5d6 + -0x1 * 0x1967 + 0x1 * 0x2af5)) + parseInt(l(0x109)) / (-0x204a * -0x1 + 0xd31 + -0x2d6e);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1339a * -0x8 + -0x57790 + -0x1ed18 * -0x1));
var __importDefault = this && this[n(0x10b) + n(0x117)] || function (c) {
    const p = o;
    return c && c[p(0x10f)] ? c : { 'default': c };
};
function a() {
    const s = [
        '__esModule',
        'default',
        '17283JmVkYr',
        'create',
        '2239746MFYRrs',
        '4mTwXhx',
        '30664QwiHsc',
        '96FAbuSP',
        'fault',
        'erty',
        '187PlASbD',
        'tenantId',
        '74JJtxHc',
        'group',
        '525tuOErL',
        'defineProp',
        'ls/Group',
        'value',
        'userId',
        '207670xPAdrh',
        '../../mode',
        '1743248UaTyLG',
        'isActive',
        '__importDe',
        '459GehVRJ',
        '11040JIGqtS',
        '532344pAiRup'
    ];
    a = function () {
        return s;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xec3 + -0x2d * -0x69 + -0x499 * 0x7);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[o(0x120)] = !![], Object[n(0x11e) + n(0x118)](exports, n(0x10f), k);
const Group_1 = __importDefault(require(n(0x123) + n(0x11f))), CreateGruopService = async ({
        group: d,
        isActive: e,
        userId: f,
        tenantId: g
    }) => {
        const q = n, r = o, h = {};
        h[q(0x11c)] = d, h[q(0x10a)] = e, h[r(0x121)] = f, h[r(0x11a)] = g;
        const i = await Group_1[q(0x110)][r(0x112)](h);
        return i;
    };
exports[o(0x110)] = CreateGruopService;