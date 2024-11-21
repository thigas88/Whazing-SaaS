'use strict';
const z = b, A = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x37e + -0xce * 0x29 + -0x1 * -0x2582);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const x = b, y = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(x(0x11c)) / (-0xe * -0xbb + 0x1350 + -0x1d89) + -parseInt(y(0x11b)) / (-0xbf5 * -0x2 + -0x6 * 0x3 + -0xe2 * 0x1b) * (-parseInt(x(0x129)) / (0x2671 + -0x1 * 0x1d9c + -0x8d2)) + parseInt(x(0x127)) / (0x3ba + 0x836 * -0x4 + -0x9b6 * -0x3) * (-parseInt(x(0x113)) / (0x1 * -0xc11 + -0x611 * 0x2 + 0xf8 * 0x19)) + -parseInt(x(0x121)) / (0x2 * 0xacf + -0x598 * -0x6 + -0x3728) + -parseInt(x(0x124)) / (0xda3 * -0x1 + -0x1060 + -0xa * -0x301) * (-parseInt(y(0x10d)) / (-0x5c5 * -0x3 + 0x2173 + 0x2 * -0x195d)) + -parseInt(x(0x115)) / (0x1498 + 0x1131 + -0x25c0) + parseInt(y(0x12a)) / (0xc3b + 0x411 * 0x3 + -0x2 * 0xc32);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x972ae + -0x5796b + -0x134 * -0x245));
var __importDefault = this && this[z(0x12d) + A(0x120)] || function (c) {
    const B = z;
    return c && c[B(0x125)] ? c : { 'default': c };
};
const k = {};
k[z(0x11d)] = !![], Object[A(0x10f) + A(0x122)](exports, A(0x125), k);
function a() {
    const E = [
        'rMYqu',
        'update',
        '590DDyPHN',
        'name',
        '5174487DPwlbR',
        'MsZaZ',
        'reload',
        'celularTes',
        'UND',
        'xdHef',
        '1071490lLXNrK',
        '845876qOpyCE',
        'value',
        'default',
        'rs/AppErro',
        'fault',
        '1601148hulxGq',
        'erty',
        'fTBJo',
        '2597ZaWnuO',
        '__esModule',
        '../../mode',
        '18572doUkcj',
        'HoqdJ',
        '3xFXrTI',
        '4470500hpNznv',
        'ls/AutoRep',
        'userId',
        '__importDe',
        'isActive',
        'attributes',
        'tenantId',
        'where',
        'ERR_NO_AUT',
        '../../erro',
        'findOne',
        'O_REPLY_FO',
        '8tvslmQ',
        'tKYuA',
        'defineProp',
        'action'
    ];
    a = function () {
        return E;
    };
    return a();
}
const AppError_1 = __importDefault(require(z(0x10a) + A(0x11f) + 'r')), AutoReply_1 = __importDefault(require(A(0x126) + z(0x12b) + 'ly')), UpdateAutoReplyService = async ({
        autoReplyData: h,
        autoReplyId: i,
        tenantId: j
    }) => {
        const C = z, D = A, l = {};
        l[C(0x128)] = D(0x114), l[D(0x10e)] = C(0x110), l[C(0x11a)] = D(0x12c), l[C(0x123)] = D(0x12e), l[C(0x111)] = C(0x118) + 'te', l[C(0x116)] = C(0x109) + D(0x10c) + C(0x119);
        const m = l, {
                name: n,
                action: o,
                userId: p,
                isActive: q,
                celularTeste: r
            } = h, s = {};
        s['id'] = i, s[D(0x107)] = j;
        const t = {};
        t[C(0x108)] = s, t[D(0x106)] = [
            'id',
            m[D(0x128)],
            m[D(0x10e)],
            m[D(0x11a)],
            m[D(0x123)],
            m[D(0x111)]
        ];
        const u = await AutoReply_1[C(0x11e)][C(0x10b)](t);
        if (!u)
            throw new AppError_1[(C(0x11e))](m[D(0x116)], -0x996 + -0xb25 * 0x2 + 0x2174);
        const v = {};
        v[D(0x114)] = n, v[D(0x110)] = o, v[C(0x12c)] = p, v[D(0x12e)] = q, v[D(0x118) + 'te'] = r, await u[C(0x112)](v);
        const w = {};
        return w[C(0x106)] = [
            'id',
            m[D(0x128)],
            m[D(0x10e)],
            m[C(0x11a)],
            m[C(0x123)],
            m[C(0x111)]
        ], await u[C(0x117)](w), u;
    };
exports[z(0x11e)] = UpdateAutoReplyService;