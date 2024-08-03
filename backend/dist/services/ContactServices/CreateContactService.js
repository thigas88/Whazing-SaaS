'use strict';
const I = b, J = b;
(function (c, d) {
    const G = b, H = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(G(0x133)) / (-0x35 * 0x3d + 0x249a + -0x17f8) + -parseInt(H(0x15c)) / (0xebf + -0x1cae + -0x1 * -0xdf1) + -parseInt(H(0x151)) / (0x7b5 * 0x1 + -0x3d * -0x53 + -0x1b79) + parseInt(G(0x136)) / (0x7 * 0x203 + 0x9 * -0x19e + 0x7d) + parseInt(G(0x15b)) / (-0xb7f + 0x23eb + -0x1867) + parseInt(H(0x12c)) / (0x25f4 + 0x1e41 + -0x442f) * (-parseInt(H(0x14b)) / (0xadf + -0x3ad * 0x2 + 0x1 * -0x37e)) + parseInt(G(0x15e)) / (0x3 * -0x75a + -0x1df4 + -0x1 * -0x340a);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1e482 * -0x4 + 0x24b70 + 0xf65c8));
var __importDefault = this && this[I(0x137) + J(0x127)] || function (c) {
    const K = J;
    return c && c[K(0x14c)] ? c : { 'default': c };
};
function a() {
    const P = [
        '291946bKJQNt',
        'profilePic',
        'EeYVv',
        '4251604gmtGAZ',
        '__importDe',
        'ls/Contact',
        'bulkCreate',
        'tags',
        'iytnH',
        'where',
        'XprlZ',
        '../../help',
        'extraInfo',
        'push',
        'tenantId',
        'RDJBv',
        'date',
        'ERR_DUPLIC',
        'include',
        'Url',
        'ers/socket',
        'ATED_CONTA',
        'destroy',
        'number',
        '118097YmVSvS',
        '__esModule',
        'payload',
        '../../mode',
        'PERCy',
        'email',
        '704214EMWOJc',
        'defineProp',
        'default',
        'PFGkX',
        'qYQGM',
        'Wallet',
        'type',
        'value',
        'contactId',
        'wEjQb',
        '5677455LLMMFr',
        '2511528TCRbxF',
        'findOne',
        '4543592iBjAie',
        'tVvJs',
        'wallets',
        'create',
        'fault',
        'name',
        'Emit',
        'erty',
        'rs/AppErro',
        '114WHcFSg',
        'forEach',
        'walletId',
        'attributes',
        'reload',
        'contact:up',
        '../../erro'
    ];
    a = function () {
        return P;
    };
    return a();
}
const o = {};
o[J(0x158)] = !![], Object[J(0x152) + I(0x12a)](exports, I(0x14c), o);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x16c0 + 0x982 + 0xe63);
        let h = e[f];
        return h;
    }, b(c, d);
}
const AppError_1 = __importDefault(require(J(0x132) + J(0x12b) + 'r')), socketEmit_1 = __importDefault(require(I(0x13e) + J(0x147) + J(0x129))), Contact_1 = __importDefault(require(J(0x14e) + J(0x138))), ContactWallet_1 = __importDefault(require(J(0x14e) + J(0x138) + I(0x156))), CreateContactService = async ({
        name: l,
        number: m,
        email: email = '',
        extraInfo: extraInfo = [],
        profilePicUrl: n,
        tenantId: p,
        wallets: q
    }) => {
        const L = J, M = J, r = {};
        r[L(0x155)] = L(0x144) + L(0x148) + 'CT', r[L(0x154)] = M(0x13f), r[M(0x142)] = L(0x13a), r[L(0x135)] = L(0x125), r[M(0x15a)] = L(0x128), r[L(0x14f)] = L(0x14a), r[L(0x13b)] = L(0x150), r[M(0x15f)] = L(0x134) + L(0x146), r[L(0x13d)] = L(0x131) + L(0x143);
        const s = r, t = {};
        t[L(0x14a)] = m, t[L(0x141)] = p;
        const u = {};
        u[M(0x13c)] = t;
        const v = await Contact_1[M(0x153)][M(0x15d)](u);
        if (v)
            throw new AppError_1[(L(0x153))](s[M(0x155)]);
        const w = {};
        w[L(0x128)] = l, w[M(0x14a)] = m, w[M(0x150)] = email, w[M(0x13f)] = extraInfo, w[L(0x134) + M(0x146)] = n, w[L(0x141)] = p;
        const x = {};
        x[M(0x145)] = [
            s[L(0x154)],
            s[L(0x142)],
            {
                'association': s[L(0x135)],
                'attributes': [
                    'id',
                    s[L(0x15a)]
                ]
            }
        ];
        const y = await Contact_1[L(0x153)][L(0x126)](w, x);
        if (q) {
            const B = {};
            B[M(0x141)] = p, B[L(0x159)] = y['id'];
            const C = {};
            C[L(0x13c)] = B, await ContactWallet_1[M(0x153)][L(0x149)](C);
            const D = [];
            q[M(0x12d)](E => {
                const N = L, O = L, F = {};
                F[N(0x12e)] = !E['id'] ? E : E['id'], F[N(0x159)] = y['id'], F[O(0x141)] = p, D[N(0x140)](F);
            }), await ContactWallet_1[M(0x153)][M(0x139)](D);
        }
        const z = {};
        z[L(0x12f)] = [
            'id',
            s[M(0x15a)],
            s[M(0x14f)],
            s[M(0x13b)],
            s[M(0x15f)]
        ], z[M(0x145)] = [
            s[M(0x154)],
            s[L(0x142)],
            {
                'association': s[L(0x135)],
                'attributes': [
                    'id',
                    s[L(0x15a)]
                ]
            }
        ], await y[M(0x130)](z);
        const A = {};
        return A[M(0x141)] = p, A[L(0x157)] = s[M(0x13d)], A[M(0x14d)] = y, (-0x68 * 0x27 + 0xe5d + 0x17b, socketEmit_1[L(0x153)])(A), y;
    };
exports[J(0x153)] = CreateContactService;