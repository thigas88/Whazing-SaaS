'use strict';
function a() {
    const C = [
        'isActive',
        'rs/AppErro',
        '7824915zqtFre',
        '__esModule',
        'ugVbg',
        '__importDe',
        'defineProp',
        'WjwwV',
        'default',
        '../../mode',
        'update',
        '1443915MfdDjj',
        '41633990hBRDhy',
        'erty',
        'where',
        '1385345GzWSIM',
        'ERR_NO_GRO',
        '../../erro',
        '2148IWIhDx',
        '28jzNBMx',
        'group',
        'fault',
        '8654586mmMJyY',
        'findOne',
        'value',
        'fnJaY',
        '1976648PZVjkG',
        'tenantId',
        'ls/Group',
        'eMlbI',
        'UP_FOUND',
        '2082PCKrMS',
        'userId',
        'reload',
        'attributes',
        '8XSSueO'
    ];
    a = function () {
        return C;
    };
    return a();
}
const x = b, y = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x28d + 0x15d3 + -0x12b3);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const v = b, w = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(v(0xb3)) / (0x3 * -0x735 + 0x4ad + -0x10f3 * -0x1) + parseInt(v(0x96)) / (0x262d + -0xd * -0x1a3 + -0x2 * 0x1db9) * (parseInt(w(0xa3)) / (-0x329 + -0x1066 * -0x1 + -0xd3a)) + -parseInt(v(0xa7)) / (-0x1 * 0x12b + 0xe57 * 0x2 + -0x1b7f) * (parseInt(w(0x93)) / (0xbd8 + 0x73c * -0x2 + 0x1 * 0x2a5)) + parseInt(w(0x9a)) / (-0x1d64 + 0x8b7 + -0x1 * -0x14b3) + parseInt(v(0x97)) / (-0x1815 + 0x18f4 * -0x1 + 0x3110) * (parseInt(v(0x9e)) / (-0x25aa + -0x26af * 0x1 + 0x4c61)) + parseInt(w(0xaa)) / (0x3 * 0x5c + -0x18f5 * 0x1 + 0x17ea) + -parseInt(v(0xb4)) / (-0x1328 + 0x907 + 0x13 * 0x89);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x4 * 0x3d2e5 + -0x3 * 0x701ba + 0x2 * 0x8c077));
var __importDefault = this && this[x(0xad) + y(0x99)] || function (c) {
    const z = x;
    return c && c[z(0xab)] ? c : { 'default': c };
};
const k = {};
k[y(0x9c)] = !![], Object[y(0xae) + y(0xb5)](exports, y(0xab), k);
const AppError_1 = __importDefault(require(x(0x95) + y(0xa9) + 'r')), Group_1 = __importDefault(require(x(0xb1) + x(0xa0))), UpdateGroupService = async ({
        groupData: h,
        groupId: i
    }) => {
        const A = y, B = x, j = {};
        j[A(0xac)] = A(0x98), j[B(0xa1)] = A(0xa8), j[A(0x9d)] = A(0xa4), j[B(0xaf)] = A(0x94) + A(0xa2);
        const l = j, {
                group: m,
                isActive: n,
                userId: o,
                tenantId: p
            } = h, q = {};
        q['id'] = i, q[B(0x9f)] = p;
        const r = {};
        r[B(0xb6)] = q, r[B(0xa6)] = [
            'id',
            l[A(0xac)],
            l[A(0xa1)],
            l[A(0x9d)]
        ];
        const s = await Group_1[A(0xb0)][B(0x9b)](r);
        if (!s)
            throw new AppError_1[(B(0xb0))](l[A(0xaf)], -0x2196 + -0x1b5a + 0x3e84);
        const t = {};
        t[A(0x98)] = m, t[B(0xa8)] = n, t[B(0xa4)] = o, await s[B(0xb2)](t);
        const u = {};
        return u[B(0xa6)] = [
            'id',
            l[B(0xac)],
            l[A(0xa1)],
            l[A(0x9d)]
        ], await s[B(0xa5)](u), s;
    };
exports[x(0xb0)] = UpdateGroupService;