'use strict';
const C = b, D = b;
(function (c, d) {
    const A = b, B = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(A(0x155)) / (0x273 + 0x1b29 + -0x1d9b) * (-parseInt(B(0x168)) / (-0xe33 + 0x5a9 + -0x88c * -0x1)) + -parseInt(A(0x162)) / (0x1 * -0x13d2 + -0x2213 + 0x28 * 0x159) * (parseInt(B(0x165)) / (0xd9 * -0x11 + -0x8 * -0x32b + -0xaeb)) + -parseInt(B(0x169)) / (0x1d90 + -0x87 * -0x4 + -0xa8d * 0x3) + parseInt(B(0x156)) / (-0xa1c + -0xa61 + 0x1483) + parseInt(B(0x14d)) / (-0xf9b + -0x1 * 0x121 + 0x10c3) + -parseInt(B(0x158)) / (0x33 * -0x59 + 0x1f22 + -0xa3 * 0x15) * (-parseInt(B(0x13f)) / (0x25a4 + 0xa81 * 0x2 + -0x3a9d * 0x1)) + -parseInt(A(0x15b)) / (0x2681 * 0x1 + 0xdbb + -0x3432) * (parseInt(A(0x13d)) / (-0x1fb8 + -0xf29 * -0x1 + 0x109a));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x2 * 0x13725 + 0x22a18 + 0x183d * -0x13));
var __importDefault = this && this[C(0x13b) + D(0x159)] || function (c) {
    const E = C;
    return c && c[E(0x140)] ? c : { 'default': c };
};
const k = {};
function a() {
    const H = [
        '../../mode',
        'uXAch',
        'profilePic',
        'contact:up',
        '282683XjYJwr',
        '256746mBmDvj',
        'defineProp',
        '32CLVOco',
        'fault',
        'ers/socket',
        '30umeqVw',
        'type',
        'date',
        'default',
        'pNwWP',
        'attributes',
        'Url',
        '304863hgzsfC',
        'wallets',
        'oewrj',
        '4iVPilX',
        'eCrMM',
        'erty',
        '2AQIZov',
        '17415SCSIWh',
        'ls/Contact',
        'tags',
        'tagId',
        'findOne',
        'EYiis',
        'create',
        'Emit',
        '../../erro',
        'email',
        'TACT_FOUND',
        '__importDe',
        'Tag',
        '977999AndNhO',
        'where',
        '302976pCkeNw',
        '__esModule',
        'number',
        'name',
        'jQjSY',
        'CfBIq',
        'include',
        'extraInfo',
        'cpVuk',
        'syXnf',
        'contactId',
        'rs/AppErro',
        'value',
        'tenantId',
        '664720gUNlbj',
        'ERR_NO_CON',
        'payload',
        '../../help'
    ];
    a = function () {
        return H;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x621 + -0x5b * -0x7 + 0x2 * 0x26f);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[C(0x14b)] = !![], Object[C(0x157) + C(0x167)](exports, D(0x140), k);
const AppError_1 = __importDefault(require(D(0x171) + D(0x14a) + 'r')), socketEmit_1 = __importDefault(require(C(0x150) + C(0x15a) + C(0x170))), Contact_1 = __importDefault(require(C(0x151) + D(0x16a))), ContactTag_1 = __importDefault(require(D(0x151) + D(0x16a) + D(0x13c))), UpdateContactTagsBotService = async ({
        tagId: j,
        contactId: l,
        tenantId: m
    }) => {
        const F = D, G = C, n = {};
        n[F(0x152)] = F(0x142), n[F(0x147)] = G(0x141), n[G(0x144)] = G(0x172), n[F(0x15f)] = F(0x153) + G(0x161), n[G(0x166)] = G(0x146), n[G(0x143)] = F(0x16b), n[F(0x16e)] = G(0x163), n[G(0x164)] = G(0x14e) + G(0x13a), n[G(0x148)] = F(0x154) + F(0x15d);
        const o = n, p = {};
        p[F(0x14c)] = m, p[F(0x149)] = l, p[F(0x16c)] = j;
        const q = p, r = {};
        r[G(0x13e)] = q;
        const s = await ContactTag_1[F(0x15e)][G(0x16d)](r);
        if (!s) {
            const y = {};
            y[G(0x16c)] = j, y[G(0x149)] = l, y[F(0x14c)] = m;
            const z = y;
            await ContactTag_1[F(0x15e)][G(0x16f)](z);
        }
        const t = {};
        t['id'] = l, t[G(0x14c)] = m;
        const u = {};
        u[G(0x13e)] = t, u[G(0x160)] = [
            'id',
            o[F(0x152)],
            o[F(0x147)],
            o[G(0x144)],
            o[F(0x15f)]
        ], u[G(0x145)] = [
            o[F(0x166)],
            o[G(0x143)],
            {
                'association': o[G(0x16e)],
                'attributes': [
                    'id',
                    o[F(0x152)]
                ]
            }
        ];
        const v = u, w = await Contact_1[G(0x15e)][G(0x16d)](v);
        if (!w)
            throw new AppError_1[(G(0x15e))](o[G(0x164)], 0x115e + 0x2e7 * -0xd + 0x15f1);
        const x = {};
        return x[F(0x14c)] = m, x[F(0x15c)] = o[G(0x148)], x[G(0x14f)] = w, (0x2e * -0x4c + -0xf52 + 0x1cfa, socketEmit_1[F(0x15e)])(x), w;
    };
exports[D(0x15e)] = UpdateContactTagsBotService;