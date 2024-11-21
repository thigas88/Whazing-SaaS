'use strict';
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(l(0x104)) / (0x16f2 + 0x16 * 0x15 + -0x18bf) * (-parseInt(l(0x103)) / (0x1 * -0x65d + -0x1 * -0x221f + -0x1bc0)) + -parseInt(m(0xfe)) / (0xb6f * 0x1 + 0x327 * -0x2 + 0xa * -0x83) * (-parseInt(l(0x10a)) / (-0x1c30 + 0x11fc + 0xa38)) + -parseInt(l(0xfa)) / (0xe * 0xd8 + 0x12dd + 0x147 * -0x18) * (-parseInt(l(0x10c)) / (0x1cb2 * -0x1 + -0x28 * 0x18 + 0x81e * 0x4)) + -parseInt(l(0x105)) / (0x1bc6 * 0x1 + 0xbd8 + -0x1 * 0x2797) + -parseInt(m(0x101)) / (0x3 * 0xa8 + 0xd99 * 0x1 + -0xf89) + parseInt(l(0x106)) / (0x1d97 + -0x2 * 0x8c9 + -0xbfc) * (parseInt(m(0x10b)) / (-0x176f * -0x1 + 0x6b * -0x59 + 0xdce)) + -parseInt(l(0x109)) / (0x1a07 + 0x1 * -0x1f61 + 0x1 * 0x565);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xdf9f8 + 0xf0612 + -0xb5 * 0x1b13));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2 * 0x41a + -0x1153 * -0x1 + -0x188e);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const s = [
        'tenantId',
        'findAll',
        '__importDe',
        '1915oyMbMe',
        'where',
        'defineProp',
        '__esModule',
        '6yqIspt',
        'value',
        'fault',
        '2778720BiiUFT',
        'ls/User',
        '16742oxmpuT',
        '79WYTeFo',
        '2485539eAVzDK',
        '8506827UnKfPl',
        'default',
        'erty',
        '1109999SJXWaT',
        '1345108guglgp',
        '10sWixvj',
        '7722zjPIqx',
        '../../mode'
    ];
    a = function () {
        return s;
    };
    return a();
}
var __importDefault = this && this[n(0xf9) + o(0x100)] || function (c) {
    const p = n;
    return c && c[p(0xfd)] ? c : { 'default': c };
};
const k = {};
k[o(0xff)] = !![], Object[o(0xfc) + n(0x108)](exports, n(0xfd), k);
const User_1 = __importDefault(require(n(0x10d) + n(0x102))), AdminListUsersByTenantService = async e => {
        const q = n, r = n, f = {};
        f[q(0x10e)] = e;
        const g = {};
        g[r(0xfb)] = f;
        const h = await User_1[q(0x107)][r(0x10f)](g);
        return h;
    };
exports[n(0x107)] = AdminListUsersByTenantService;