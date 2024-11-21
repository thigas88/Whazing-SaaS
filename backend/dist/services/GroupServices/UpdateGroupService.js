'use strict';
const x = b, y = b;
(function (c, d) {
    const v = b, w = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(v(0x1c4)) / (-0x1 * 0x1713 + -0x3 * -0x6ad + -0x30d * -0x1) * (-parseInt(w(0x1c7)) / (0x2 * 0xf19 + 0x357 + -0x2187 * 0x1)) + parseInt(v(0x1bb)) / (-0xa47 * -0x2 + 0x139b + 0x2826 * -0x1) * (-parseInt(v(0x1cf)) / (-0x42b * 0x1 + 0x1f * 0x76 + -0xa1b)) + -parseInt(v(0x1ba)) / (-0xe14 + 0x425 + 0x9f4) * (parseInt(w(0x1ae)) / (-0xb59 * -0x2 + -0x40e + -0x94f * 0x2)) + -parseInt(w(0x1cd)) / (-0xfb2 * 0x2 + -0x446 + 0x23b1) * (parseInt(w(0x1c9)) / (-0xcc + -0xdfb * -0x2 + 0x1b22 * -0x1)) + parseInt(v(0x1ce)) / (-0x946 + -0x1106 + -0x6b * -0x3f) + parseInt(w(0x1ac)) / (-0x1f91 + -0x299 * 0xd + 0x82c * 0x8) + parseInt(w(0x1b0)) / (-0x10e * 0xa + -0x4f4 + 0xf8b);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x899f7 + -0x7dc59 + 0x778f8));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xd7a + 0xc90 + -0x2 * -0x14b);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[x(0x1d0) + x(0x1b4)] || function (c) {
    const z = x;
    return c && c[z(0x1cb)] ? c : { 'default': c };
};
function a() {
    const C = [
        'where',
        '../../mode',
        '../../erro',
        'fault',
        'leuJo',
        'attributes',
        'aiZvC',
        'rs/AppErro',
        'iFOUK',
        '1460250QejsFY',
        '21YCuHnY',
        'default',
        'update',
        'findOne',
        'ERR_NO_GRO',
        'UP_FOUND',
        'ls/Group',
        'tenantId',
        'GkePp',
        '1FhGGjz',
        'reload',
        'userId',
        '1173442dWVDpO',
        'defineProp',
        '3592lpTMXJ',
        'value',
        '__esModule',
        'group',
        '15365gyHpVt',
        '3088368cuxWiY',
        '201284svvIJx',
        '__importDe',
        '3336870ZBHqkZ',
        'isActive',
        '6XiONpV',
        'erty',
        '22857956VaQNkf'
    ];
    a = function () {
        return C;
    };
    return a();
}
const k = {};
k[x(0x1ca)] = !![], Object[y(0x1c8) + x(0x1af)](exports, x(0x1cb), k);
const AppError_1 = __importDefault(require(x(0x1b3) + x(0x1b8) + 'r')), Group_1 = __importDefault(require(y(0x1b2) + y(0x1c1))), UpdateGroupService = async ({
        groupData: h,
        groupId: i
    }) => {
        const A = x, B = y, j = {};
        j[A(0x1b9)] = B(0x1cc), j[B(0x1c3)] = A(0x1ad), j[A(0x1b7)] = B(0x1c6), j[A(0x1b5)] = B(0x1bf) + B(0x1c0);
        const l = j, {
                group: m,
                isActive: n,
                userId: o,
                tenantId: p
            } = h, q = {};
        q['id'] = i, q[B(0x1c2)] = p;
        const r = {};
        r[B(0x1b1)] = q, r[B(0x1b6)] = [
            'id',
            l[A(0x1b9)],
            l[A(0x1c3)],
            l[B(0x1b7)]
        ];
        const s = await Group_1[B(0x1bc)][A(0x1be)](r);
        if (!s)
            throw new AppError_1[(B(0x1bc))](l[A(0x1b5)], 0x5 * -0x403 + 0x7a8 + 0xdfb);
        const t = {};
        t[A(0x1cc)] = m, t[A(0x1ad)] = n, t[B(0x1c6)] = o, await s[A(0x1bd)](t);
        const u = {};
        return u[B(0x1b6)] = [
            'id',
            l[B(0x1b9)],
            l[A(0x1c3)],
            l[B(0x1b7)]
        ], await s[B(0x1c5)](u), s;
    };
exports[x(0x1bc)] = UpdateGroupService;