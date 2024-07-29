'use strict';
const y = b, z = b;
(function (c, d) {
    const w = b, x = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(w(0x189)) / (0x12 * 0xe6 + 0x51a + -0x1545) + parseInt(w(0x197)) / (0x1c * 0x7b + -0x3 * -0x455 + -0x1a71) + parseInt(w(0x1a7)) / (-0x1672 * -0x1 + -0x14f5 + -0x17a) + parseInt(x(0x18a)) / (0x22ad + -0x165d + -0xc4c) + parseInt(x(0x1a2)) / (0x47 * 0x49 + -0x1d * -0xf8 + -0x3052) + parseInt(w(0x18d)) / (-0x941 + -0xc * -0x3b + 0x1 * 0x683) * (-parseInt(x(0x1ac)) / (-0xc79 + -0x1 * -0x1e5b + -0x11db)) + parseInt(x(0x1a3)) / (-0x7 * -0xaf + 0xf76 + -0x40b * 0x5) * (-parseInt(w(0x19e)) / (-0x1924 + 0x1034 + 0x1 * 0x8f9));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x2 * -0x600ed + 0x2 * 0x3b018 + -0xc3a3f));
function a() {
    const D = [
        'RVEwN',
        '6VilRNw',
        'defineProp',
        'findOne',
        'ftcCC',
        'userId',
        'ERR_NO_FAS',
        'reload',
        'klxAo',
        'media',
        'T_REPLY_FO',
        '1424424ERCPdH',
        '../../erro',
        'message',
        '../../mode',
        'zZTDI',
        'tenantId',
        '__esModule',
        '800559VEVMuK',
        '__importDe',
        'rs/AppErro',
        'YEnip',
        '139180RnxPee',
        '104SSjuvN',
        'where',
        'update',
        'UND',
        '1021371IqOfpq',
        'ls/FastRep',
        'attributes',
        'default',
        'fault',
        '72492TQuUzv',
        'value',
        'key',
        '152349zrOrjE',
        '2830008icgRFH',
        'erty'
    ];
    a = function () {
        return D;
    };
    return a();
}
var __importDefault = this && this[y(0x19f) + z(0x1ab)] || function (c) {
    const A = z;
    return c && c[A(0x19d)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x11ba + -0x958 + -0x6d9);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[z(0x1ad)] = !![], Object[z(0x18e) + z(0x18b)](exports, y(0x19d), k);
const AppError_1 = __importDefault(require(y(0x198) + z(0x1a0) + 'r')), FastReply_1 = __importDefault(require(y(0x19a) + y(0x1a8) + 'ly')), updateFastReplyService = async ({
        fastReplyData: h,
        fastReplyId: i
    }) => {
        const B = y, C = y, j = {};
        j[B(0x18c)] = C(0x1ae), j[C(0x1a1)] = C(0x199), j[B(0x190)] = B(0x195), j[C(0x194)] = B(0x191), j[C(0x19b)] = B(0x192) + B(0x196) + C(0x1a6);
        const l = j, {
                key: m,
                message: n,
                media: o,
                userId: p,
                tenantId: q
            } = h, r = {};
        r['id'] = i, r[B(0x19c)] = q;
        const s = {};
        s[B(0x1a4)] = r, s[C(0x1a9)] = [
            'id',
            l[C(0x18c)],
            l[B(0x1a1)],
            l[B(0x190)],
            l[B(0x194)]
        ];
        const t = await FastReply_1[B(0x1aa)][C(0x18f)](s);
        if (!t)
            throw new AppError_1[(B(0x1aa))](l[B(0x19b)], -0x1d * 0x98 + 0x1 * 0xccf + 0x5fd);
        const u = {};
        u[B(0x1ae)] = m, u[C(0x199)] = n, u[B(0x195)] = o, u[C(0x191)] = p, await t[B(0x1a5)](u);
        const v = {};
        return v[B(0x1a9)] = [
            'id',
            l[B(0x18c)],
            l[B(0x1a1)],
            l[C(0x190)],
            l[B(0x194)]
        ], await t[B(0x193)](v), t;
    };
exports[z(0x1aa)] = updateFastReplyService;