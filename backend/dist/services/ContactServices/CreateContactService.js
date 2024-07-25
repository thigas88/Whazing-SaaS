'use strict';
const I = b, J = b;
(function (c, d) {
    const G = b, H = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(G(0x146)) / (-0x22 * -0x102 + -0x1a0e + -0x835) * (-parseInt(G(0x13d)) / (0x69e * -0x2 + 0x1727 + 0x2b * -0x3b)) + parseInt(H(0x132)) / (-0x1 * 0x1ab + -0x1f6c + -0x211a * -0x1) * (parseInt(G(0x156)) / (0x9fe * -0x2 + 0x2 * -0x128f + 0x391e)) + parseInt(G(0x154)) / (-0x1 * 0x1511 + -0x1 * 0x1869 + 0x2d7f) * (parseInt(G(0x136)) / (0x7 * -0x561 + -0x2 * 0x3cb + 0x2d43)) + parseInt(G(0x14d)) / (0x3 * 0x1df + -0x1 * 0xb11 + 0x57b) * (-parseInt(G(0x157)) / (0x1943 + 0x1953 + 0x6 * -0x86d)) + -parseInt(G(0x143)) / (0xb * 0x9f + -0x2 * 0xe6b + 0x1a * 0xd9) + parseInt(H(0x14b)) / (-0x3 * -0xafb + -0x1 * 0x4e3 + -0x1c04) * (-parseInt(H(0x122)) / (0x12a + 0xdf0 + -0xf0f)) + parseInt(H(0x147)) / (0x12a5 + 0x1d77 + -0x3010 * 0x1) * (parseInt(H(0x131)) / (-0x2475 + -0x1 * 0x7eb + 0x33 * 0xdf));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x3 * -0x8f31 + 0x23dd * -0xc + -0x4a9e * -0x22));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * -0xb5c + -0x280 * -0xb + 0x25bf * -0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[I(0x15a) + I(0x135)] || function (c) {
    const K = J;
    return c && c[K(0x12d)] ? c : { 'default': c };
};
const o = {};
o[J(0x139)] = !![], Object[I(0x15c) + I(0x13f)](exports, I(0x12d), o);
const AppError_1 = __importDefault(require(J(0x121) + J(0x12e) + 'r')), socketEmit_1 = __importDefault(require(J(0x11d) + J(0x137) + I(0x145))), Contact_1 = __importDefault(require(J(0x11f) + I(0x12a))), ContactWallet_1 = __importDefault(require(I(0x11f) + I(0x12a) + J(0x138))), CreateContactService = async ({
        name: l,
        number: m,
        email: email = '',
        extraInfo: extraInfo = [],
        profilePicUrl: n,
        tenantId: p,
        wallets: q
    }) => {
        const L = J, M = I, r = {};
        r[L(0x15b)] = L(0x127) + L(0x13b) + 'CT', r[M(0x141)] = M(0x153), r[M(0x14a)] = L(0x150), r[M(0x125)] = L(0x152), r[L(0x140)] = L(0x149), r[M(0x151)] = L(0x123), r[L(0x124)] = L(0x155), r[L(0x142)] = M(0x12f) + M(0x134), r[L(0x13e)] = M(0x126) + L(0x12c);
        const s = r, t = {};
        t[L(0x123)] = m, t[M(0x11e)] = p;
        const u = {};
        u[L(0x14c)] = t;
        const v = await Contact_1[M(0x14f)][M(0x148)](u);
        if (v)
            throw new AppError_1[(M(0x14f))](s[L(0x15b)]);
        const w = {};
        w[M(0x149)] = l, w[M(0x123)] = m, w[M(0x155)] = email, w[L(0x153)] = extraInfo, w[M(0x12f) + L(0x134)] = n, w[L(0x11e)] = p;
        const x = {};
        x[L(0x13c)] = [
            s[L(0x141)],
            s[L(0x14a)],
            {
                'association': s[L(0x125)],
                'attributes': [
                    'id',
                    s[L(0x140)]
                ]
            }
        ];
        const y = await Contact_1[M(0x14f)][L(0x128)](w, x);
        if (q) {
            const B = {};
            B[M(0x11e)] = p, B[L(0x120)] = y['id'];
            const C = {};
            C[M(0x14c)] = B, await ContactWallet_1[L(0x14f)][L(0x14e)](C);
            const D = [];
            q[M(0x13a)](E => {
                const N = L, O = L, F = {};
                F[N(0x129)] = !E['id'] ? E : E['id'], F[N(0x120)] = y['id'], F[N(0x11e)] = p, D[N(0x130)](F);
            }), await ContactWallet_1[M(0x14f)][L(0x158)](D);
        }
        const z = {};
        z[M(0x144)] = [
            'id',
            s[M(0x140)],
            s[L(0x151)],
            s[M(0x124)],
            s[M(0x142)]
        ], z[M(0x13c)] = [
            s[L(0x141)],
            s[L(0x14a)],
            {
                'association': s[M(0x125)],
                'attributes': [
                    'id',
                    s[L(0x140)]
                ]
            }
        ], await y[L(0x159)](z);
        const A = {};
        return A[L(0x11e)] = p, A[M(0x133)] = s[M(0x13e)], A[M(0x12b)] = y, (0x161e * 0x1 + -0x1b5e * -0x1 + -0x317c, socketEmit_1[M(0x14f)])(A), y;
    };
function a() {
    const P = [
        'type',
        'Url',
        'fault',
        '1335342mbBIpX',
        'ers/socket',
        'Wallet',
        'value',
        'forEach',
        'ATED_CONTA',
        'include',
        '14duFOhR',
        'ZkLqJ',
        'erty',
        'lzaQH',
        'YDgOQ',
        'Grsuk',
        '7692669egsKQd',
        'attributes',
        'Emit',
        '67020PmcqUn',
        '276xsyQWb',
        'findOne',
        'name',
        'yPgZm',
        '510fNzOsk',
        'where',
        '49pZgkmz',
        'destroy',
        'default',
        'tags',
        'nSstL',
        'wallets',
        'extraInfo',
        '10oqgvYD',
        'email',
        '808908iItlIu',
        '53528wfyToa',
        'bulkCreate',
        'reload',
        '__importDe',
        'WULJI',
        'defineProp',
        '../../help',
        'tenantId',
        '../../mode',
        'contactId',
        '../../erro',
        '44627fiFepf',
        'number',
        'ToWcb',
        'zzRgS',
        'contact:up',
        'ERR_DUPLIC',
        'create',
        'walletId',
        'ls/Contact',
        'payload',
        'date',
        '__esModule',
        'rs/AppErro',
        'profilePic',
        'push',
        '425568DTZFRH',
        '12bFZYYH'
    ];
    a = function () {
        return P;
    };
    return a();
}
exports[J(0x14f)] = CreateContactService;