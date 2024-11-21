'use strict';
const y = b, z = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * 0x1ab + -0x344 + -0x2 * -0x305);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const w = b, x = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(w(0x140)) / (0x349 * 0x8 + -0xf6b * 0x2 + 0x48f) + parseInt(x(0x12d)) / (0x4c * 0x47 + 0x3 * 0x80f + -0x1 * 0x2d3f) + parseInt(w(0x121)) / (0x12db * 0x1 + -0x13d3 + 0xfb) + parseInt(w(0x11e)) / (0xfb3 * 0x1 + 0x3 * 0x924 + 0x1 * -0x2b1b) + -parseInt(x(0x134)) / (-0x92 * -0xe + 0xe3 * -0x5 + -0x388 * 0x1) * (-parseInt(w(0x135)) / (0x3f5 * -0x7 + -0xf92 + 0x2b4b)) + -parseInt(x(0x137)) / (0x7b2 * -0x2 + -0x2515 + 0x14 * 0x2a0) * (-parseInt(w(0x13a)) / (0x23d4 * 0x1 + 0x226c + -0x4638)) + parseInt(w(0x136)) / (0x2 * 0x431 + -0xf * 0x194 + 0xf53 * 0x1) * (-parseInt(w(0x130)) / (0xaeb + 0x70b * 0x2 + 0x391 * -0x7));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x2ab4b * -0x3 + 0x3a * 0x4987 + 0xb32));
var __importDefault = this && this[y(0x131) + y(0x13d)] || function (c) {
    const A = y;
    return c && c[A(0x12e)] ? c : { 'default': c };
};
function a() {
    const D = [
        'where',
        'update',
        '5CBGMRP',
        '509214ZEvkJO',
        '1251NYVgky',
        '14svJdQF',
        'rs/AppErro',
        'vKvxw',
        '1526096OdCEUw',
        'ls/FastRep',
        'LNITT',
        'fault',
        'FgeBS',
        'message',
        '930360MFxhKi',
        'default',
        'reload',
        'UND',
        'ERR_NO_FAS',
        '2948132oZAvFU',
        'tenantId',
        'findOne',
        '2514198ZnQXZW',
        '../../erro',
        'attributes',
        'defineProp',
        'key',
        'T_REPLY_FO',
        'erty',
        'value',
        'userId',
        'media',
        '../../mode',
        'sJgnz',
        '194676HKVrYm',
        '__esModule',
        'edVLd',
        '179810DKYuOh',
        '__importDe'
    ];
    a = function () {
        return D;
    };
    return a();
}
const k = {};
k[y(0x128)] = !![], Object[z(0x124) + y(0x127)](exports, z(0x12e), k);
const AppError_1 = __importDefault(require(z(0x122) + y(0x138) + 'r')), FastReply_1 = __importDefault(require(z(0x12b) + z(0x13b) + 'ly')), updateFastReplyService = async ({
        fastReplyData: h,
        fastReplyId: i
    }) => {
        const B = z, C = z, j = {};
        j[B(0x13e)] = C(0x125), j[B(0x12f)] = B(0x13f), j[C(0x139)] = B(0x12a), j[B(0x12c)] = B(0x129), j[B(0x13c)] = C(0x11d) + C(0x126) + C(0x11c);
        const l = j, {
                key: m,
                message: n,
                media: o,
                userId: p,
                tenantId: q
            } = h, r = {};
        r['id'] = i, r[B(0x11f)] = q;
        const s = {};
        s[C(0x132)] = r, s[B(0x123)] = [
            'id',
            l[B(0x13e)],
            l[C(0x12f)],
            l[B(0x139)],
            l[B(0x12c)]
        ];
        const t = await FastReply_1[C(0x141)][C(0x120)](s);
        if (!t)
            throw new AppError_1[(B(0x141))](l[B(0x13c)], -0x5 * -0x34c + -0x1f77 + 0x108f);
        const u = {};
        u[C(0x125)] = m, u[B(0x13f)] = n, u[B(0x12a)] = o, u[B(0x129)] = p, await t[B(0x133)](u);
        const v = {};
        return v[C(0x123)] = [
            'id',
            l[C(0x13e)],
            l[C(0x12f)],
            l[C(0x139)],
            l[B(0x12c)]
        ], await t[C(0x11b)](v), t;
    };
exports[z(0x141)] = updateFastReplyService;