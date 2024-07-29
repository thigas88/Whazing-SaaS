'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x3e0 + 0x1de6 + -0x18a3);
        let h = e[f];
        return h;
    }, b(c, d);
}
const z = b, A = b;
(function (c, d) {
    const x = b, y = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(x(0x185)) / (0x25f * -0xb + -0xb * 0x165 + 0x23 * 0x12f) + parseInt(y(0x180)) / (-0x1c1c + 0x20 * -0x76 + 0x2ade) * (parseInt(y(0x170)) / (0x1e * 0xc7 + -0x2 * -0x106a + -0x3823)) + parseInt(y(0x172)) / (0x1c24 + 0xddf + -0x29ff) * (parseInt(y(0x184)) / (-0x18c8 + 0xd5 * 0x22 + -0x37d)) + parseInt(x(0x17e)) / (0x10eb + -0x593 * 0x1 + 0x12 * -0xa1) * (-parseInt(y(0x164)) / (-0x64d * 0x5 + -0x1d48 + 0x3cd0)) + -parseInt(x(0x188)) / (0xcb * 0x1f + -0x1717 + 0x22 * -0xb) + -parseInt(x(0x183)) / (-0x2237 + -0x40e + 0x2 * 0x1327) + -parseInt(y(0x181)) / (-0x11f4 + -0x69c + 0xc4d * 0x2) * (-parseInt(y(0x168)) / (0x11 * 0x141 + 0x12ae + 0x1 * -0x27f4));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x81d2f + 0x95e36 + -0xbc1f2));
var __importDefault = this && this[z(0x163) + z(0x186)] || function (c) {
    const B = A;
    return c && c[B(0x167)] ? c : { 'default': c };
};
const k = {};
k[A(0x18b)] = !![], Object[z(0x16e) + z(0x175)](exports, z(0x167), k);
const AppError_1 = __importDefault(require(z(0x171) + A(0x18c) + 'r')), AutoReply_1 = __importDefault(require(A(0x173) + A(0x18a) + 'ly')), UpdateAutoReplyService = async ({
        autoReplyData: h,
        autoReplyId: i,
        tenantId: j
    }) => {
        const C = A, D = z, l = {};
        l[C(0x16a)] = C(0x16f), l[D(0x16b)] = D(0x182), l[C(0x17b)] = D(0x169), l[C(0x17c)] = D(0x16d), l[D(0x174)] = C(0x165) + 'te', l[C(0x166)] = D(0x189) + D(0x16c) + C(0x176);
        const m = l, {
                name: n,
                action: o,
                userId: p,
                isActive: q,
                celularTeste: r
            } = h, s = {};
        s['id'] = i, s[D(0x187)] = j;
        const t = {};
        t[D(0x177)] = s, t[D(0x17d)] = [
            'id',
            m[C(0x16a)],
            m[D(0x16b)],
            m[C(0x17b)],
            m[C(0x17c)],
            m[D(0x174)]
        ];
        const u = await AutoReply_1[D(0x178)][D(0x17f)](t);
        if (!u)
            throw new AppError_1[(C(0x178))](m[D(0x166)], 0x1 * 0x1f29 + -0x1 * -0x7a7 + 0x2 * -0x129e);
        const v = {};
        v[D(0x16f)] = n, v[D(0x182)] = o, v[C(0x169)] = p, v[C(0x16d)] = q, v[D(0x165) + 'te'] = r, await u[D(0x17a)](v);
        const w = {};
        return w[D(0x17d)] = [
            'id',
            m[C(0x16a)],
            m[D(0x16b)],
            m[C(0x17b)],
            m[D(0x17c)],
            m[D(0x174)]
        ], await u[D(0x179)](w), u;
    };
function a() {
    const E = [
        'QYeCo',
        'VAkmI',
        'O_REPLY_FO',
        'isActive',
        'defineProp',
        'name',
        '21HXmlIm',
        '../../erro',
        '57620gzTcam',
        '../../mode',
        'syYUf',
        'erty',
        'UND',
        'where',
        'default',
        'reload',
        'update',
        'FvKQk',
        'dqBsH',
        'attributes',
        '3103872lnasal',
        'findOne',
        '47954MJPGsx',
        '2190HQIHRQ',
        'action',
        '1976526meNVgD',
        '125GHrHTc',
        '638402OmnVgA',
        'fault',
        'tenantId',
        '4367248gNhmqA',
        'ERR_NO_AUT',
        'ls/AutoRep',
        'value',
        'rs/AppErro',
        '__importDe',
        '7BNCRzf',
        'celularTes',
        'LHVlr',
        '__esModule',
        '88825rFuVMP',
        'userId'
    ];
    a = function () {
        return E;
    };
    return a();
}
exports[A(0x178)] = UpdateAutoReplyService;