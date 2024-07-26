'use strict';
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(l(0xc5)) / (0x509 + -0x14f8 * 0x1 + 0xff0) + -parseInt(l(0xcc)) / (0xe * 0x1fa + -0x47c + -0x172e) + -parseInt(l(0xc6)) / (0xa60 + -0x238e + -0x1931 * -0x1) + -parseInt(m(0xbf)) / (-0x14a * 0x15 + -0x16 * -0x8b + -0x1 * -0xf24) + -parseInt(l(0xc2)) / (-0x1052 * 0x1 + 0x1d * 0x25 + 0xc26) * (parseInt(m(0xbb)) / (0x24b0 + 0x161c + -0x3ac6)) + -parseInt(l(0xbe)) / (0x3c0 + -0x2340 + 0x1f87) + -parseInt(m(0xcd)) / (0xdb * -0x2d + 0x1618 + 0x106f) * (-parseInt(m(0xca)) / (0x1d7f * 0x1 + -0x1eaf * -0x1 + -0x3c25));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x766ee + -0x1 * 0x692aa + 0x209 * 0x8f9));
var __importDefault = this && this[n(0xc8) + n(0xc0)] || function (c) {
    const p = o;
    return c && c[p(0xc3)] ? c : { 'default': c };
};
function a() {
    const s = [
        '111429RTkcMV',
        '1391646tmIIvn',
        'group',
        '__importDe',
        '../../mode',
        '72siqZxl',
        'default',
        '827866PTtykS',
        '1846296qxVZTh',
        'defineProp',
        'userId',
        'value',
        'tenantId',
        '25764SOgSfU',
        'create',
        'isActive',
        '3449614uVavPn',
        '7164QzKnIQ',
        'fault',
        'ls/Group',
        '95tOyVcx',
        '__esModule',
        'erty'
    ];
    a = function () {
        return s;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xdf4 + 0x859 + -0x1592);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[n(0xd0)] = !![], Object[o(0xce) + o(0xc4)](exports, n(0xc3), k);
const Group_1 = __importDefault(require(n(0xc9) + o(0xc1))), CreateGruopService = async ({
        group: d,
        isActive: e,
        userId: f,
        tenantId: g
    }) => {
        const q = o, r = o, h = {};
        h[q(0xc7)] = d, h[q(0xbd)] = e, h[r(0xcf)] = f, h[r(0xd1)] = g;
        const i = await Group_1[r(0xcb)][r(0xbc)](h);
        return i;
    };
exports[n(0xcb)] = CreateGruopService;