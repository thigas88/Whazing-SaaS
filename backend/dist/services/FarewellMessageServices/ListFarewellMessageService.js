'use strict';
const w = b, x = b;
function a() {
    const B = [
        '5982610ZpmSPg',
        '35VnZKCf',
        '12616344ncRbMQ',
        'findAll',
        'order',
        'fault',
        'lMessage',
        '5136968uEYEKp',
        'ssages',
        '250292QgOaIg',
        'default',
        '__esModule',
        '468327XmBkXZ',
        'userId',
        'ls/Farewel',
        'value',
        '../../mode',
        'global',
        'sequelize',
        '3kELWzM',
        '7xIYwsc',
        'farewellMe',
        'where',
        'erty',
        'createdAt',
        'tenantId',
        'defineProp',
        '912244QeKrfa',
        'ThVYl',
        '3046248FIcwNF',
        'DESC',
        'cWVuP',
        '__importDe'
    ];
    a = function () {
        return B;
    };
    return a();
}
(function (c, d) {
    const u = b, v = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(u(0x99)) / (-0x2459 + -0x240a + -0x71 * -0xa4) * (-parseInt(v(0x8f)) / (-0x1 * 0xd63 + -0x20b9 + 0x170f * 0x2)) + -parseInt(u(0x92)) / (-0x1 * -0x187d + -0x1de7 + 0x56d) + parseInt(v(0x80)) / (-0xf53 * -0x1 + -0x1bd4 + 0xc85) * (parseInt(u(0x87)) / (-0x2b6 * -0x6 + 0x13b8 + -0x23f7)) + parseInt(v(0x82)) / (-0x2 * -0xe54 + 0x42a + -0x20cc) + parseInt(v(0x79)) / (0x1708 + 0xd * -0x25c + 0x7ab) * (-parseInt(u(0x8d)) / (-0xba * -0x27 + 0x1 * -0xba1 + 0x1 * -0x10ad)) + -parseInt(v(0x88)) / (0x2467 + 0x57 * 0x6f + -0x5b3 * 0xd) + parseInt(u(0x86)) / (0x20b4 + -0x7 * 0x4d9 + -0x145 * -0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x4c2d * 0x21 + 0x51d7 * -0x10 + -0x4c3 * -0x5f3));
var __importDefault = this && this[w(0x85) + x(0x8b)] || function (c) {
    const y = w;
    return c && c[y(0x91)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x427 * -0x5 + 0x1bb * 0x14 + -0x36e6);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[w(0x95)] = !![], Object[x(0x7f) + x(0x7c)](exports, w(0x91), k);
const sequelize_1 = require(w(0x98)), FarewellMessage_1 = __importDefault(require(w(0x96) + x(0x94) + x(0x8c))), ListFarewellMessageService = async ({
        tenantId: i,
        userId: j
    }) => {
        const z = x, A = w, l = {};
        l[z(0x81)] = A(0x7d), l[z(0x84)] = z(0x83);
        const m = l, n = {};
        n[A(0x93)] = j;
        const o = {};
        o[A(0x97)] = !![];
        const p = {
            [sequelize_1['Op']['or']]: [
                n,
                o
            ]
        };
        p[A(0x7e)] = i;
        const q = p, r = {};
        r[A(0x7b)] = q, r[A(0x8a)] = [[
                m[A(0x81)],
                m[z(0x84)]
            ]];
        const s = await FarewellMessage_1[z(0x90)][z(0x89)](r), t = {};
        return t[z(0x7a) + z(0x8e)] = s, t;
    };
exports[x(0x90)] = ListFarewellMessageService;