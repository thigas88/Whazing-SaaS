'use strict';
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(l(0xf6)) / (0x17 + -0x1156 + -0x18 * -0xb8) + parseInt(m(0xf9)) / (-0x23f9 + 0x1ccb + 0x730) * (-parseInt(m(0x10f)) / (0x946 * 0x3 + -0x20a7 + 0x4d8)) + -parseInt(l(0x109)) / (0x216e * 0x1 + -0x1b91 + -0x5d9 * 0x1) * (-parseInt(m(0xfb)) / (0xaa * 0x19 + 0xd83 + -0x24 * 0xd6)) + parseInt(l(0x100)) / (0x20c3 + -0x1 * 0x125f + -0xe5e) * (-parseInt(m(0xfd)) / (0x2 * -0xcc8 + -0x67 * -0x35 + 0x2a * 0x1a)) + -parseInt(l(0xf8)) / (0x7a * -0x13 + -0xc20 + 0x1536) + -parseInt(m(0x105)) / (0x29 * -0x56 + -0x1a61 + 0x2830) * (parseInt(l(0xff)) / (-0xa3 * -0x2 + 0x1978 + -0x1ab4)) + -parseInt(l(0xf7)) / (0x3 * 0x253 + 0x3a * 0x9 + -0x52 * 0x1c) * (-parseInt(m(0x102)) / (0x4 * 0x7d + 0x2ee + -0x4d6));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x499e2 + -0x11938 + 0x3 * 0x3908d));
var __importDefault = this && this[n(0xfe) + n(0x10b)] || function (c) {
    const p = o;
    return c && c[p(0x101)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x15d2 + -0x2 * -0x1204 + -0xd40);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const s = [
        '__esModule',
        '3127068pxPWsi',
        'value',
        'isActive',
        '18cjFMyS',
        'userId',
        'ls/Kanban',
        'default',
        '80048oiROnU',
        'tenantId',
        'fault',
        'color',
        'name',
        '../../mode',
        '1663641eLiVSZ',
        'defineProp',
        '71365QYmvui',
        '77MqqdbI',
        '3779360DkOfWc',
        '2xsXOXX',
        'erty',
        '20YnKbcn',
        'create',
        '42zlnnFy',
        '__importDe',
        '1402930JNkOiK',
        '340674BdLsQE'
    ];
    a = function () {
        return s;
    };
    return a();
}
const k = {};
k[o(0x103)] = !![], Object[n(0x110) + n(0xfa)](exports, n(0x101), k);
const Kanban_1 = __importDefault(require(o(0x10e) + o(0x107))), CreateKanbanService = async ({
        name: d,
        color: e,
        isActive: f,
        userId: g,
        tenantId: h
    }) => {
        const q = o, r = o, i = {};
        i[q(0x10d)] = d, i[r(0x10c)] = e, i[r(0x104)] = f, i[q(0x106)] = g, i[r(0x10a)] = h;
        const j = await Kanban_1[q(0x108)][r(0xfc)](i);
        return j;
    };
exports[o(0x108)] = CreateKanbanService;