'use strict';
const C = b, D = b;
(function (c, d) {
    const A = b, B = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(A(0x1e7)) / (0x89 * 0x25 + -0x5d9 * -0x1 + -0x521 * 0x5) + -parseInt(B(0x1f5)) / (-0x15c6 * 0x1 + 0x1 * -0x16cf + 0xedd * 0x3) * (-parseInt(A(0x1d3)) / (0x1f * 0x23 + -0x1 * 0xf0d + 0xad3)) + parseInt(B(0x1d9)) / (-0xc * -0x2dd + -0x50 * -0x11 + 0x13d4 * -0x2) * (parseInt(B(0x1ec)) / (0x9d3 * -0x1 + -0x906 + 0xa1 * 0x1e)) + parseInt(A(0x1e9)) / (-0x1715 + -0x7c5 * 0x5 + 0x3df4) * (parseInt(B(0x1f6)) / (0x1c23 + -0x713 * -0x1 + -0x232f)) + parseInt(B(0x1f9)) / (0xc3e + 0x2597 + -0x31cd) * (parseInt(A(0x1c7)) / (0x1d * 0x6b + -0x2323 + 0x1 * 0x170d)) + -parseInt(B(0x1ee)) / (-0x14d5 + -0xa * -0x101 + 0xad5) * (-parseInt(B(0x1ed)) / (-0x1c9 + -0x1 * 0x19c6 + 0x1b9a)) + -parseInt(A(0x1fb)) / (-0x1ffb + -0x134b + 0x3352);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x9 * 0xf497 + 0x5284e + -0x89fdf));
function a() {
    const H = [
        '__importDe',
        'ePrLt',
        '5uYUCRY',
        '3020435NtIyZy',
        '10oRfoFh',
        '../../erro',
        'TACT_FOUND',
        'value',
        'email',
        'contactId',
        'profilePic',
        '645026GAmPdX',
        '14iqXKlf',
        'ls/Contact',
        'Emit',
        '14944tdsWvE',
        'attributes',
        '25727556sNOiNo',
        'findOne',
        'include',
        'wallets',
        'create',
        'name',
        '2610OUnWac',
        'contact:up',
        'ERR_NO_CON',
        'date',
        '../../help',
        'extraInfo',
        'parwK',
        'payload',
        'Tag',
        'default',
        'number',
        '__esModule',
        '3EsBiDZ',
        'type',
        'hpBnX',
        'ULWkT',
        'defineProp',
        'fault',
        '1078148KzPyPX',
        'tags',
        'LZUxx',
        'where',
        'ers/socket',
        'tenantId',
        'rs/AppErro',
        'vuUzt',
        'erty',
        'OIWVn',
        'tagId',
        'wnDmr',
        '../../mode',
        'Url',
        '656492cSmLOX',
        'mLwAr',
        '1246302ixyQIR'
    ];
    a = function () {
        return H;
    };
    return a();
}
var __importDefault = this && this[C(0x1ea) + C(0x1d8)] || function (c) {
    const E = D;
    return c && c[E(0x1d2)] ? c : { 'default': c };
};
const k = {};
k[C(0x1f1)] = !![], Object[D(0x1d7) + D(0x1e1)](exports, C(0x1d2), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x8f * 0xb + 0x4 * 0x878 + 0xb * -0x37a);
        let h = e[f];
        return h;
    }, b(c, d);
}
const AppError_1 = __importDefault(require(C(0x1ef) + D(0x1df) + 'r')), socketEmit_1 = __importDefault(require(C(0x1cb) + D(0x1dd) + C(0x1f8))), Contact_1 = __importDefault(require(C(0x1e5) + C(0x1f7))), ContactTag_1 = __importDefault(require(D(0x1e5) + D(0x1f7) + C(0x1cf))), UpdateContactTagsBotService = async ({
        tagId: j,
        contactId: l,
        tenantId: m
    }) => {
        const F = C, G = C, n = {};
        n[F(0x1d6)] = F(0x200), n[G(0x1d5)] = G(0x1d1), n[F(0x1e8)] = F(0x1f2), n[G(0x1e2)] = G(0x1f4) + F(0x1e6), n[G(0x1db)] = G(0x1cc), n[G(0x1cd)] = G(0x1da), n[G(0x1e0)] = G(0x1fe), n[G(0x1eb)] = G(0x1c9) + G(0x1f0), n[F(0x1e4)] = F(0x1c8) + G(0x1ca);
        const o = n, p = {};
        p[F(0x1de)] = m, p[G(0x1f3)] = l, p[F(0x1e3)] = j;
        const q = p, r = {};
        r[F(0x1dc)] = q;
        const s = await ContactTag_1[F(0x1d0)][F(0x1fc)](r);
        if (!s) {
            const y = {};
            y[G(0x1e3)] = j, y[G(0x1f3)] = l, y[F(0x1de)] = m;
            const z = y;
            await ContactTag_1[F(0x1d0)][F(0x1ff)](z);
        }
        const t = {};
        t['id'] = l, t[G(0x1de)] = m;
        const u = {};
        u[F(0x1dc)] = t, u[F(0x1fa)] = [
            'id',
            o[G(0x1d6)],
            o[F(0x1d5)],
            o[F(0x1e8)],
            o[F(0x1e2)]
        ], u[F(0x1fd)] = [
            o[F(0x1db)],
            o[F(0x1cd)],
            {
                'association': o[F(0x1e0)],
                'attributes': [
                    'id',
                    o[G(0x1d6)]
                ]
            }
        ];
        const v = u, w = await Contact_1[F(0x1d0)][G(0x1fc)](v);
        if (!w)
            throw new AppError_1[(G(0x1d0))](o[G(0x1eb)], -0x7bd * -0x2 + 0x8bf + -0x16a5);
        const x = {};
        return x[F(0x1de)] = m, x[G(0x1d4)] = o[F(0x1e4)], x[F(0x1ce)] = w, (-0x128a + -0xe6b + -0x3b * -0x8f, socketEmit_1[G(0x1d0)])(x), w;
    };
exports[C(0x1d0)] = UpdateContactTagsBotService;