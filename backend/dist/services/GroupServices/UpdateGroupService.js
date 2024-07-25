'use strict';
const x = b, y = b;
(function (c, d) {
    const v = b, w = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(v(0xe2)) / (0xe35 + 0x1c49 + 0x2a7d * -0x1) + parseInt(v(0xec)) / (0x626 + -0x82 * 0x10 + -0xfe * -0x2) * (-parseInt(w(0xd9)) / (-0x1c1 * -0x16 + 0x41 + -0x26d4)) + parseInt(w(0xe0)) / (0x11 * 0x29 + 0x8 * -0x3bf + -0x1b43 * -0x1) * (parseInt(v(0xd8)) / (-0x1869 * -0x1 + -0x1168 + 0x6 * -0x12a)) + -parseInt(v(0xde)) / (0x1df8 + 0x1 * 0xe75 + -0x2c67) + -parseInt(v(0xe3)) / (0x2 * 0x3d7 + -0x1a * 0xda + 0xe7d) * (-parseInt(w(0xf0)) / (0x23dd + -0x1aa1 + -0x934 * 0x1)) + -parseInt(v(0xe9)) / (0xfad + 0x2425 + -0x33c9) + -parseInt(w(0xef)) / (-0xf30 + -0x2 * 0x384 + 0x1642) * (-parseInt(w(0xdb)) / (-0x1 * 0x1519 + -0x21d * 0x9 + 0x2829));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x7515 * 0x3 + -0x12238 + 0x1 * 0x262bf));
var __importDefault = this && this[x(0xd6) + y(0xf2)] || function (c) {
    const z = y;
    return c && c[z(0xcf)] ? c : { 'default': c };
};
function a() {
    const C = [
        'tenantId',
        '1548960ZUnkSa',
        'POPOn',
        '701400aXQgLV',
        'update',
        '307555ueiIzl',
        '1333661YLXtiy',
        'EFZRT',
        'value',
        'where',
        'kPlAb',
        'userId',
        '2707443jtjgxS',
        'rs/AppErro',
        'group',
        '16mPOCWG',
        'ERR_NO_GRO',
        'erty',
        '10ueRXUO',
        '8oxwkxD',
        'OIHii',
        'fault',
        'findOne',
        '__esModule',
        'isActive',
        'ls/Group',
        'default',
        'attributes',
        'UP_FOUND',
        'reload',
        '__importDe',
        '../../mode',
        '5eTETpI',
        '83958mtPWXP',
        '../../erro',
        '9861841gZhljQ',
        'defineProp'
    ];
    a = function () {
        return C;
    };
    return a();
}
const k = {};
k[x(0xe5)] = !![], Object[y(0xdc) + x(0xee)](exports, y(0xcf), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * -0x130a + 0x1d90 + -0x9b8);
        let h = e[f];
        return h;
    }, b(c, d);
}
const AppError_1 = __importDefault(require(x(0xda) + y(0xea) + 'r')), Group_1 = __importDefault(require(x(0xd7) + y(0xd1))), UpdateGroupService = async ({
        groupData: h,
        groupId: i
    }) => {
        const A = x, B = y, j = {};
        j[A(0xdf)] = A(0xeb), j[B(0xf1)] = B(0xd0), j[A(0xe7)] = A(0xe8), j[B(0xe4)] = B(0xed) + A(0xd4);
        const l = j, {
                group: m,
                isActive: n,
                userId: o,
                tenantId: p
            } = h, q = {};
        q['id'] = i, q[B(0xdd)] = p;
        const r = {};
        r[A(0xe6)] = q, r[A(0xd3)] = [
            'id',
            l[B(0xdf)],
            l[A(0xf1)],
            l[B(0xe7)]
        ];
        const s = await Group_1[A(0xd2)][A(0xce)](r);
        if (!s)
            throw new AppError_1[(A(0xd2))](l[B(0xe4)], -0xe1a + -0x14ba + -0xa * -0x3a4);
        const t = {};
        t[A(0xeb)] = m, t[B(0xd0)] = n, t[A(0xe8)] = o, await s[A(0xe1)](t);
        const u = {};
        return u[B(0xd3)] = [
            'id',
            l[A(0xdf)],
            l[A(0xf1)],
            l[B(0xe7)]
        ], await s[A(0xd5)](u), s;
    };
exports[x(0xd2)] = UpdateGroupService;