'use strict';
const y = b, z = b;
(function (c, d) {
    const w = b, x = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(w(0xf7)) / (0x292 + -0x801 * -0x2 + 0x631 * -0x3) * (parseInt(x(0xe3)) / (0x541 * 0x4 + -0x4 * 0x49e + -0x19 * 0x1a)) + parseInt(w(0xd3)) / (0x10 * 0xe9 + 0x9fc + -0x1889) + -parseInt(w(0xe7)) / (-0x51 * 0x3b + -0x1035 * 0x2 + -0x3319 * -0x1) * (-parseInt(w(0xeb)) / (0xa8b + -0xd80 + -0x3 * -0xfe)) + -parseInt(x(0xf5)) / (-0x957 * -0x1 + 0x1 * 0x10d9 + -0x1a2a) * (parseInt(x(0xf3)) / (0x19ca + -0x26f9 + 0xd36)) + parseInt(x(0xe2)) / (0x14e2 + 0x65 * 0x9 + -0x1867) + -parseInt(x(0xd8)) / (0x2 * -0xd3 + -0x1eb * 0xf + 0x1e74) * (parseInt(x(0xdd)) / (0x630 + 0x130f + -0x1935)) + parseInt(x(0xf2)) / (-0x13ef + -0x2 * 0xcdc + 0x2db2) * (parseInt(x(0xe8)) / (-0x10f7 + 0x1 * 0x1fe7 + -0xee4));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xb80b1 + -0x9432e + -0x36d * -0x335));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1cd8 + 0x11b0 + -0x2db5);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[y(0xe5) + z(0xdf)] || function (c) {
    const A = y;
    return c && c[A(0xd5)] ? c : { 'default': c };
};
const k = {};
function a() {
    const D = [
        '144416gXyhce',
        '24aLcVWG',
        'rs/AppErro',
        'DjBUQ',
        '75HSnWwd',
        'value',
        'T_REPLY_FO',
        'key',
        'media',
        'userId',
        'findOne',
        '7210181yfMlao',
        '108479SkQvjw',
        'tljTK',
        '522iCaMVN',
        'ZbSUQ',
        '1765RxbZsq',
        'ls/FastRep',
        'reload',
        'where',
        'update',
        '4442892xojLdi',
        'default',
        '__esModule',
        'UND',
        'tenantId',
        '6434163xjpzlp',
        '../../mode',
        'uHuRC',
        '../../erro',
        'defineProp',
        '10FICuMD',
        'attributes',
        'fault',
        'AFeAH',
        'erty',
        '4693448PsbbWV',
        '1122eovgpX',
        'ERR_NO_FAS',
        '__importDe',
        'message'
    ];
    a = function () {
        return D;
    };
    return a();
}
k[z(0xec)] = !![], Object[z(0xdc) + z(0xe1)](exports, y(0xd5), k);
const AppError_1 = __importDefault(require(z(0xdb) + z(0xe9) + 'r')), FastReply_1 = __importDefault(require(z(0xd9) + y(0xf8) + 'ly')), updateFastReplyService = async ({
        fastReplyData: h,
        fastReplyId: i
    }) => {
        const B = z, C = z, j = {};
        j[B(0xe0)] = C(0xee), j[C(0xda)] = B(0xe6), j[B(0xf4)] = C(0xef), j[B(0xea)] = B(0xf0), j[B(0xf6)] = C(0xe4) + C(0xed) + B(0xd6);
        const l = j, {
                key: m,
                message: n,
                media: o,
                userId: p,
                tenantId: q
            } = h, r = {};
        r['id'] = i, r[C(0xd7)] = q;
        const s = {};
        s[C(0xfa)] = r, s[C(0xde)] = [
            'id',
            l[C(0xe0)],
            l[B(0xda)],
            l[B(0xf4)],
            l[B(0xea)]
        ];
        const t = await FastReply_1[C(0xd4)][B(0xf1)](s);
        if (!t)
            throw new AppError_1[(B(0xd4))](l[C(0xf6)], -0x1e0a + 0x16eb * -0x1 + -0x17 * -0x25f);
        const u = {};
        u[C(0xee)] = m, u[B(0xe6)] = n, u[C(0xef)] = o, u[C(0xf0)] = p, await t[C(0xfb)](u);
        const v = {};
        return v[B(0xde)] = [
            'id',
            l[C(0xe0)],
            l[B(0xda)],
            l[C(0xf4)],
            l[C(0xea)]
        ], await t[B(0xf9)](v), t;
    };
exports[y(0xd4)] = updateFastReplyService;