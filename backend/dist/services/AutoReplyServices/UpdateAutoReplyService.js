'use strict';
const z = b, A = b;
(function (c, d) {
    const x = b, y = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(x(0xf2)) / (0x1121 + -0x6d9 * 0x2 + 0x1 * -0x36e) + parseInt(x(0xe1)) / (-0x1cb + -0x38d * -0x7 + -0xd * 0x1c6) + -parseInt(x(0xd0)) / (0x25e9 + 0x320 + -0x2906) + parseInt(y(0xd1)) / (-0x1dc3 + -0x3a6 * -0x3 + 0x12d5) + parseInt(x(0xcf)) / (0xe3 * -0x27 + 0x178 * -0x4 + 0x6 * 0x6bf) * (-parseInt(x(0xdd)) / (-0x1c1 * 0x5 + 0x5 * 0x175 + -0x182 * -0x1)) + -parseInt(x(0xe7)) / (0x255 + 0xecc + -0x18e * 0xb) + parseInt(y(0xe5)) / (-0x2 * 0xbaf + 0x1d3d + -0x5d7) * (parseInt(y(0xe2)) / (-0x17 * -0x59 + -0xc97 * 0x2 + -0x1138 * -0x1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x18fd07 + -0xc371d + -0x1095e * -0x2));
function a() {
    const E = [
        '2177036YfVGrO',
        'UND',
        'ERR_NO_AUT',
        'cNOYM',
        'name',
        'fault',
        'value',
        'ls/AutoRep',
        'oaBqN',
        'tenantId',
        'celularTes',
        'userId',
        '6RMjwtI',
        'rs/AppErro',
        'erty',
        'DVDUA',
        '3019846JKAWMu',
        '9423nAIKuw',
        'action',
        'default',
        '11912lKmbMK',
        'O_REPLY_FO',
        '7564011XHqzkU',
        '../../mode',
        '__esModule',
        'where',
        'update',
        'gnbmH',
        'attributes',
        'QthDN',
        '__importDe',
        'isActive',
        'findOne',
        '149431YLNXsT',
        'defineProp',
        'reload',
        'rgxES',
        '../../erro',
        '5767175BvVaHH',
        '1666866tRHfxb'
    ];
    a = function () {
        return E;
    };
    return a();
}
var __importDefault = this && this[z(0xef) + A(0xd6)] || function (c) {
    const B = z;
    return c && c[B(0xe9)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * -0x361 + 0x240 * 0x9 + -0x101 * 0x10);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[z(0xd7)] = !![], Object[z(0xf3) + z(0xdf)](exports, z(0xe9), k);
const AppError_1 = __importDefault(require(z(0xf6) + z(0xde) + 'r')), AutoReply_1 = __importDefault(require(A(0xe8) + A(0xd8) + 'ly')), UpdateAutoReplyService = async ({
        autoReplyData: h,
        autoReplyId: i,
        tenantId: j
    }) => {
        const C = A, D = A, l = {};
        l[C(0xec)] = D(0xd5), l[C(0xd9)] = C(0xe3), l[C(0xf5)] = C(0xdc), l[D(0xee)] = C(0xf0), l[C(0xd4)] = C(0xdb) + 'te', l[D(0xe0)] = C(0xd3) + D(0xe6) + D(0xd2);
        const m = l, {
                name: n,
                action: o,
                userId: p,
                isActive: q,
                celularTeste: r
            } = h, s = {};
        s['id'] = i, s[C(0xda)] = j;
        const t = {};
        t[D(0xea)] = s, t[D(0xed)] = [
            'id',
            m[C(0xec)],
            m[D(0xd9)],
            m[D(0xf5)],
            m[C(0xee)],
            m[C(0xd4)]
        ];
        const u = await AutoReply_1[D(0xe4)][D(0xf1)](t);
        if (!u)
            throw new AppError_1[(C(0xe4))](m[C(0xe0)], 0x81f + -0xbe7 + 0x157 * 0x4);
        const v = {};
        v[C(0xd5)] = n, v[D(0xe3)] = o, v[C(0xdc)] = p, v[D(0xf0)] = q, v[C(0xdb) + 'te'] = r, await u[C(0xeb)](v);
        const w = {};
        return w[C(0xed)] = [
            'id',
            m[D(0xec)],
            m[D(0xd9)],
            m[C(0xf5)],
            m[C(0xee)],
            m[C(0xd4)]
        ], await u[D(0xf4)](w), u;
    };
exports[A(0xe4)] = UpdateAutoReplyService;