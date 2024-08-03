'use strict';
const y = b, z = b;
(function (c, d) {
    const w = b, x = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(w(0x97)) / (-0x31 * 0x6 + -0x295 * -0x2 + -0x403) * (-parseInt(w(0xba)) / (0x18f6 + -0x2568 + -0x31d * -0x4)) + -parseInt(w(0x96)) / (0x20ea * 0x1 + 0x886 * -0x4 + 0x5 * 0x3d) + -parseInt(w(0xa0)) / (-0x6d * -0x7 + -0x1db5 + -0x475 * -0x6) + -parseInt(w(0x9c)) / (-0x1 * 0xcb3 + -0x368 + 0x1020) + parseInt(x(0x9f)) / (0x194 * 0x4 + 0x1d42 + -0x238c) + -parseInt(w(0xb8)) / (0x939 + 0x517 * 0x3 + -0x1877) * (parseInt(w(0xb3)) / (0xa * -0x2c + 0x1b5e + 0x1 * -0x199e)) + parseInt(w(0xb5)) / (-0x16d8 + 0x9d * 0x3d + 0x1f * -0x78);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * -0x50783 + 0x91c7 + -0x31435));
var __importDefault = this && this[y(0xae) + z(0xad)] || function (c) {
    const A = y;
    return c && c[A(0xa5)] ? c : { 'default': c };
};
const k = {};
k[y(0xb2)] = !![], Object[y(0xa1) + z(0xb1)](exports, z(0xa5), k);
const AppError_1 = __importDefault(require(y(0xb7) + z(0xa9) + 'r')), FastReply_1 = __importDefault(require(y(0xa3) + z(0xa7) + 'ly')), updateFastReplyService = async ({
        fastReplyData: h,
        fastReplyId: i
    }) => {
        const B = z, C = y, j = {};
        j[B(0xac)] = C(0xa8), j[C(0xb6)] = C(0x9b), j[B(0xaf)] = B(0xb4), j[C(0x99)] = C(0xab), j[C(0xaa)] = C(0xb0) + B(0xbb) + B(0xa6);
        const l = j, {
                key: m,
                message: n,
                media: o,
                userId: p,
                tenantId: q
            } = h, r = {};
        r['id'] = i, r[C(0x9d)] = q;
        const s = {};
        s[C(0x98)] = r, s[C(0xa2)] = [
            'id',
            l[B(0xac)],
            l[B(0xb6)],
            l[B(0xaf)],
            l[C(0x99)]
        ];
        const t = await FastReply_1[B(0x9e)][B(0xa4)](s);
        if (!t)
            throw new AppError_1[(B(0x9e))](l[B(0xaa)], -0x206b * -0x1 + -0x3c * -0x34 + -0x2b07);
        const u = {};
        u[C(0xa8)] = m, u[C(0x9b)] = n, u[C(0xb4)] = o, u[C(0xab)] = p, await t[C(0x9a)](u);
        const v = {};
        return v[B(0xa2)] = [
            'id',
            l[B(0xac)],
            l[B(0xb6)],
            l[C(0xaf)],
            l[C(0x99)]
        ], await t[C(0xb9)](v), t;
    };
function a() {
    const D = [
        'jogAX',
        '../../erro',
        '380891FxODRg',
        'reload',
        '10XcWsuX',
        'T_REPLY_FO',
        '758967IFHdmn',
        '6907BzrRID',
        'where',
        'DjchB',
        'update',
        'message',
        '1180875ZBDHNn',
        'tenantId',
        'default',
        '443346dAjcji',
        '1179948GKgGqL',
        'defineProp',
        'attributes',
        '../../mode',
        'findOne',
        '__esModule',
        'UND',
        'ls/FastRep',
        'key',
        'rs/AppErro',
        'wTSOv',
        'userId',
        'oxbHx',
        'fault',
        '__importDe',
        'ZLVxg',
        'ERR_NO_FAS',
        'erty',
        'value',
        '40KGvtJR',
        'media',
        '10016379ZxBKjk'
    ];
    a = function () {
        return D;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xb10 + -0x1 * 0x291 + -0x2d * 0x2d);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[y(0x9e)] = updateFastReplyService;