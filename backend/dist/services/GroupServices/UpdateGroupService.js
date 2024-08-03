'use strict';
const x = b, y = b;
(function (c, d) {
    const v = b, w = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(v(0xfd)) / (0x9e2 + -0xb71 * 0x3 + 0x1872) + parseInt(v(0xfa)) / (-0x1fcf + -0xb29 * 0x1 + 0x1 * 0x2afa) + -parseInt(v(0xec)) / (-0x71a + -0x1 * -0x17be + -0x10a1) + -parseInt(v(0xf5)) / (0x92 * 0x5 + -0x1147 + 0x1 * 0xe71) * (parseInt(v(0xf1)) / (0x81e * -0x3 + -0x1f7 * 0x11 + 0x39c6)) + parseInt(v(0xed)) / (0x1e53 + 0x139 * 0x2 + -0x20bf) * (-parseInt(w(0xdc)) / (-0xe95 + 0x962 + 0x53a)) + parseInt(v(0xe2)) / (-0x2 * -0x124 + 0xfa + 0x2 * -0x19d) + parseInt(w(0xdb)) / (0x4 * -0xdb + 0x1 * 0x6d9 + -0x364);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * -0x37c64 + -0x5 * 0x5522 + 0x138b));
var __importDefault = this && this[x(0xe4) + x(0xe9)] || function (c) {
    const z = x;
    return c && c[z(0xe7)] ? c : { 'default': c };
};
const k = {};
function a() {
    const C = [
        'userId',
        '229107zdwQcI',
        '663003TOrQFB',
        '465934eBNOrl',
        'rtjRk',
        'default',
        'erty',
        'WLSnq',
        'where',
        '932096DGFbpD',
        'attributes',
        '__importDe',
        'zomnG',
        'findOne',
        '__esModule',
        '../../erro',
        'fault',
        'ls/Group',
        '../../mode',
        '634368RFekpV',
        '12jJBCEc',
        'reload',
        'tenantId',
        'value',
        '9105JZqSFF',
        'isActive',
        'UP_FOUND',
        'group',
        '416GKyfUa',
        'oyFrV',
        'update',
        'ERR_NO_GRO',
        'defineProp',
        '478326oyOlTO',
        'rs/AppErro'
    ];
    a = function () {
        return C;
    };
    return a();
}
k[x(0xf0)] = !![], Object[y(0xf9) + y(0xdf)](exports, x(0xe7), k);
const AppError_1 = __importDefault(require(x(0xe8) + x(0xfb) + 'r')), Group_1 = __importDefault(require(y(0xeb) + y(0xea))), UpdateGroupService = async ({
        groupData: h,
        groupId: i
    }) => {
        const A = y, B = y, j = {};
        j[A(0xdd)] = B(0xf4), j[A(0xe5)] = B(0xf2), j[A(0xe0)] = A(0xfc), j[A(0xf6)] = A(0xf8) + B(0xf3);
        const l = j, {
                group: m,
                isActive: n,
                userId: o,
                tenantId: p
            } = h, q = {};
        q['id'] = i, q[A(0xef)] = p;
        const r = {};
        r[B(0xe1)] = q, r[B(0xe3)] = [
            'id',
            l[A(0xdd)],
            l[B(0xe5)],
            l[A(0xe0)]
        ];
        const s = await Group_1[B(0xde)][B(0xe6)](r);
        if (!s)
            throw new AppError_1[(B(0xde))](l[B(0xf6)], 0xff3 * 0x2 + 0x24ca + 0x10c7 * -0x4);
        const t = {};
        t[A(0xf4)] = m, t[B(0xf2)] = n, t[A(0xfc)] = o, await s[A(0xf7)](t);
        const u = {};
        return u[A(0xe3)] = [
            'id',
            l[B(0xdd)],
            l[A(0xe5)],
            l[B(0xe0)]
        ], await s[A(0xee)](u), s;
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xd57 + 0x236d + -0x2fe9);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[x(0xde)] = UpdateGroupService;