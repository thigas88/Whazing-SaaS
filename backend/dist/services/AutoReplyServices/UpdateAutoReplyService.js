'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x16fc * 0x1 + 0x4 * -0x637 + -0x1 * -0x310a);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const E = [
        'tenantId',
        'nwYfq',
        'fault',
        '1228725dWmNnX',
        '../../erro',
        '531852xrovhN',
        'agZkw',
        'iTBZi',
        '6389744WchUPI',
        '4192295XPXEtD',
        'yTCki',
        'attributes',
        'findOne',
        'defineProp',
        'Wlthh',
        'ls/AutoRep',
        'ERR_NO_AUT',
        'isActive',
        '../../mode',
        'celularTes',
        '841864JRrebn',
        '2513791aUjFsp',
        'foYBy',
        'where',
        '__esModule',
        '__importDe',
        'userId',
        'update',
        'value',
        'reload',
        'O_REPLY_FO',
        '631194EBoIFp',
        'UND',
        'action',
        'name',
        'rs/AppErro',
        '6DTejhy',
        'erty',
        'default'
    ];
    a = function () {
        return E;
    };
    return a();
}
const z = b, A = b;
(function (c, d) {
    const x = b, y = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(x(0x135)) / (0x11 * 0x99 + -0x5 * 0x135 + -0x41f) + parseInt(x(0x151)) / (-0x1ddd + 0x174 + -0x5af * -0x5) + -parseInt(y(0x140)) / (-0x138c + -0x35c + 0x16eb) + parseInt(x(0x142)) / (-0xb48 + -0x361 + -0xdd * -0x11) + parseInt(y(0x146)) / (-0x1 * 0xc13 + 0x44b + -0x7cd * -0x1) + -parseInt(y(0x13a)) / (0x1 * -0x6f + -0x1e16 + 0x1 * 0x1e8b) * (parseInt(x(0x152)) / (-0x25f + -0x508 + -0x13d * -0x6)) + -parseInt(x(0x145)) / (0x320 + 0xb83 + -0xe9b);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x43d8f * -0x1 + 0x129f6 * -0x6 + 0x9b403));
var __importDefault = this && this[z(0x156) + z(0x13f)] || function (c) {
    const B = A;
    return c && c[B(0x155)] ? c : { 'default': c };
};
const k = {};
k[A(0x132)] = !![], Object[z(0x14a) + z(0x13b)](exports, A(0x155), k);
const AppError_1 = __importDefault(require(A(0x141) + A(0x139) + 'r')), AutoReply_1 = __importDefault(require(A(0x14f) + A(0x14c) + 'ly')), UpdateAutoReplyService = async ({
        autoReplyData: h,
        autoReplyId: i,
        tenantId: j
    }) => {
        const C = z, D = z, l = {};
        l[C(0x13e)] = D(0x138), l[C(0x144)] = D(0x137), l[D(0x143)] = D(0x157), l[C(0x14b)] = C(0x14e), l[D(0x153)] = C(0x150) + 'te', l[C(0x147)] = D(0x14d) + C(0x134) + C(0x136);
        const m = l, {
                name: n,
                action: o,
                userId: p,
                isActive: q,
                celularTeste: r
            } = h, s = {};
        s['id'] = i, s[D(0x13d)] = j;
        const t = {};
        t[C(0x154)] = s, t[C(0x148)] = [
            'id',
            m[C(0x13e)],
            m[D(0x144)],
            m[C(0x143)],
            m[D(0x14b)],
            m[C(0x153)]
        ];
        const u = await AutoReply_1[D(0x13c)][C(0x149)](t);
        if (!u)
            throw new AppError_1[(D(0x13c))](m[D(0x147)], 0x7b1 + -0x38 * 0x97 + -0x1 * -0x1aeb);
        const v = {};
        v[D(0x138)] = n, v[C(0x137)] = o, v[D(0x157)] = p, v[C(0x14e)] = q, v[C(0x150) + 'te'] = r, await u[C(0x158)](v);
        const w = {};
        return w[C(0x148)] = [
            'id',
            m[C(0x13e)],
            m[D(0x144)],
            m[D(0x143)],
            m[C(0x14b)],
            m[D(0x153)]
        ], await u[C(0x133)](w), u;
    };
exports[A(0x13c)] = UpdateAutoReplyService;