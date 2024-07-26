'use strict';
const I = b, J = b;
(function (c, d) {
    const G = b, H = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(G(0x96)) / (-0xa88 + -0x61d + 0x10a6 * 0x1) + parseInt(G(0xb8)) / (-0x944 + -0x2 * 0x89f + 0x1 * 0x1a84) + -parseInt(G(0xa1)) / (0x10 * 0x1aa + -0x1031 + -0x29b * 0x4) * (parseInt(G(0xc6)) / (-0x1d27 + 0x2 * 0x139 + 0x1ab9)) + -parseInt(G(0xb3)) / (-0xdf1 + 0xb82 + 0x274) * (parseInt(G(0xaa)) / (-0x1 * -0x14f + -0x9 * -0x3cb + -0x236c * 0x1)) + -parseInt(H(0xa4)) / (0x1 * 0x233 + 0x36e + -0x1de * 0x3) * (parseInt(H(0xa9)) / (0x8e9 * 0x2 + -0x517 * 0x7 + 0x11d7)) + -parseInt(G(0xb5)) / (0x931 + -0x1 * -0x55 + 0x7 * -0x15b) * (parseInt(H(0xbb)) / (-0x2070 + 0x28 * -0x2c + -0x6 * -0x68f)) + -parseInt(G(0x9e)) / (0x2c7 * -0x4 + 0x1042 + -0x51b) * (-parseInt(G(0xbd)) / (0x10c2 + -0x4f7 * -0x5 + -0x157 * 0x1f));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xa19ca + -0xaa8b9 + 0x7083c));
function a() {
    const P = [
        '7659Opxbbs',
        'KtIQa',
        'MSjxY',
        '473008bYnBzt',
        'rs/AppErro',
        'name',
        '8510eerdkP',
        'sbWvt',
        '33406092SrCqap',
        'create',
        'number',
        'push',
        'date',
        'QCHjl',
        'type',
        'NjZvg',
        'tenantId',
        '4hOpLfE',
        '../../help',
        'walletId',
        'default',
        'Emit',
        'extraInfo',
        'tags',
        '__esModule',
        'defineProp',
        'fault',
        'contactId',
        'findOne',
        'profilePic',
        'GZzcY',
        'where',
        '498704FKLTGz',
        'payload',
        'forEach',
        'include',
        'ATED_CONTA',
        'erty',
        'value',
        'ls/Contact',
        '11ElZMlB',
        'ekawC',
        'email',
        '2360757vJomNi',
        'destroy',
        'reload',
        '189252nNejpS',
        'Url',
        'ers/socket',
        'GKpVh',
        'Wallet',
        '16xOKwlX',
        '13530cccDAj',
        'contact:up',
        'bulkCreate',
        'attributes',
        'Bzdeu',
        '__importDe',
        'wallets',
        'ERR_DUPLIC',
        '../../mode',
        '1180jqYVkN',
        '../../erro'
    ];
    a = function () {
        return P;
    };
    return a();
}
var __importDefault = this && this[I(0xaf) + J(0x90)] || function (c) {
    const K = I;
    return c && c[K(0xcd)] ? c : { 'default': c };
};
const o = {};
o[J(0x9c)] = !![], Object[J(0x8f) + I(0x9b)](exports, J(0xcd), o);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x67 * 0x53 + 0x1137 + -0x10af * 0x3);
        let h = e[f];
        return h;
    }, b(c, d);
}
const AppError_1 = __importDefault(require(I(0xb4) + I(0xb9) + 'r')), socketEmit_1 = __importDefault(require(J(0xc7) + J(0xa6) + I(0xca))), Contact_1 = __importDefault(require(J(0xb2) + J(0x9d))), ContactWallet_1 = __importDefault(require(J(0xb2) + I(0x9d) + J(0xa8))), CreateContactService = async ({
        name: l,
        number: m,
        email: email = '',
        extraInfo: extraInfo = [],
        profilePicUrl: n,
        tenantId: p,
        wallets: q
    }) => {
        const L = J, M = I, r = {};
        r[L(0xbc)] = M(0xb1) + M(0x9a) + 'CT', r[M(0x94)] = L(0xcb), r[M(0xc4)] = L(0xcc), r[M(0xa7)] = L(0xb0), r[M(0xc2)] = M(0xba), r[M(0xae)] = M(0xbf), r[L(0xb7)] = L(0xa0), r[M(0xb6)] = L(0x93) + M(0xa5), r[L(0x9f)] = L(0xab) + M(0xc1);
        const s = r, t = {};
        t[L(0xbf)] = m, t[L(0xc5)] = p;
        const u = {};
        u[M(0x95)] = t;
        const v = await Contact_1[L(0xc9)][L(0x92)](u);
        if (v)
            throw new AppError_1[(L(0xc9))](s[L(0xbc)]);
        const w = {};
        w[L(0xba)] = l, w[M(0xbf)] = m, w[L(0xa0)] = email, w[L(0xcb)] = extraInfo, w[M(0x93) + M(0xa5)] = n, w[M(0xc5)] = p;
        const x = {};
        x[L(0x99)] = [
            s[L(0x94)],
            s[M(0xc4)],
            {
                'association': s[M(0xa7)],
                'attributes': [
                    'id',
                    s[M(0xc2)]
                ]
            }
        ];
        const y = await Contact_1[M(0xc9)][L(0xbe)](w, x);
        if (q) {
            const B = {};
            B[M(0xc5)] = p, B[L(0x91)] = y['id'];
            const C = {};
            C[M(0x95)] = B, await ContactWallet_1[M(0xc9)][M(0xa2)](C);
            const D = [];
            q[L(0x98)](E => {
                const N = M, O = M, F = {};
                F[N(0xc8)] = !E['id'] ? E : E['id'], F[N(0x91)] = y['id'], F[N(0xc5)] = p, D[O(0xc0)](F);
            }), await ContactWallet_1[M(0xc9)][M(0xac)](D);
        }
        const z = {};
        z[M(0xad)] = [
            'id',
            s[M(0xc2)],
            s[M(0xae)],
            s[M(0xb7)],
            s[M(0xb6)]
        ], z[M(0x99)] = [
            s[M(0x94)],
            s[L(0xc4)],
            {
                'association': s[L(0xa7)],
                'attributes': [
                    'id',
                    s[M(0xc2)]
                ]
            }
        ], await y[L(0xa3)](z);
        const A = {};
        return A[M(0xc5)] = p, A[L(0xc3)] = s[L(0x9f)], A[M(0x97)] = y, (0xe61 + -0x21f6 + 0x1395, socketEmit_1[M(0xc9)])(A), y;
    };
exports[I(0xc9)] = CreateContactService;