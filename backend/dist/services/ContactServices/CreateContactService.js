'use strict';
const I = b, J = b;
(function (c, d) {
    const G = b, H = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(G(0x1cf)) / (0x62 * 0x4 + 0xdad + 0x7 * -0x22c) + parseInt(H(0x1b7)) / (0x133 * 0x1f + 0x1 * -0x123d + 0x1 * -0x12ee) * (-parseInt(G(0x1a7)) / (0x19d3 + 0x34 * 0x98 + -0x38b0)) + -parseInt(G(0x1c3)) / (-0xb08 + -0x231d * 0x1 + 0x2e29) * (parseInt(G(0x1c2)) / (0x1d1c + -0x1913 + -0x404)) + parseInt(H(0x1ad)) / (-0x18c0 + 0x389 + 0x153d) + parseInt(H(0x1d8)) / (-0x1 * 0x19f6 + -0x167f + -0xc1f * -0x4) + -parseInt(H(0x1c6)) / (-0x939 + 0x1d53 + -0x16f * 0xe) + -parseInt(H(0x1d5)) / (-0x2d7 * -0x9 + 0x2 * -0x665 + -0xcbc) * (-parseInt(G(0x1b9)) / (-0xb62 * -0x1 + 0x25ee + 0x11 * -0x2e6));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x7cd89 + -0x25 * 0x4109 + 0x1 * 0x67ca3));
var __importDefault = this && this[I(0x1ca) + J(0x1a9)] || function (c) {
    const K = J;
    return c && c[K(0x1aa)] ? c : { 'default': c };
};
function a() {
    const P = [
        'Emit',
        'Url',
        'ATED_CONTA',
        '183015HRgGeC',
        'number',
        'mznep',
        '3901198BtonkK',
        'payload',
        'profilePic',
        'attributes',
        '../../help',
        'YjrFy',
        'tenantId',
        '../../erro',
        'kuNjw',
        'erty',
        'ERR_DUPLIC',
        '../../mode',
        '576hYIusq',
        'wallets',
        'fault',
        '__esModule',
        'value',
        'forEach',
        '2310108fbAtWL',
        'default',
        'push',
        'LLBgn',
        'TbhZp',
        'contactId',
        'name',
        'Wallet',
        'DUtcd',
        'reload',
        '2276MRplvC',
        'qphee',
        '340WrwsxM',
        'defineProp',
        'ers/socket',
        'create',
        'ls/Contact',
        'extraInfo',
        'include',
        'VAXnW',
        'email',
        '2921690viEgXq',
        '4JuExxq',
        'tags',
        'bulkCreate',
        '4305208eUodfJ',
        'walletId',
        'contact:up',
        'findOne',
        '__importDe',
        'rs/AppErro',
        'HGFZd',
        'type',
        'where',
        '27742DnPWeF',
        'date',
        'destroy'
    ];
    a = function () {
        return P;
    };
    return a();
}
const o = {};
o[J(0x1ab)] = !![], Object[J(0x1ba) + J(0x1a4)](exports, I(0x1aa), o);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x4 * 0x8f6 + -0x1250 + 0x37c5);
        let h = e[f];
        return h;
    }, b(c, d);
}
const AppError_1 = __importDefault(require(J(0x1a2) + J(0x1cb) + 'r')), socketEmit_1 = __importDefault(require(J(0x19f) + I(0x1bb) + J(0x1d2))), Contact_1 = __importDefault(require(J(0x1a6) + J(0x1bd))), ContactWallet_1 = __importDefault(require(I(0x1a6) + I(0x1bd) + I(0x1b4))), CreateContactService = async ({
        name: l,
        number: m,
        email: email = '',
        extraInfo: extraInfo = [],
        profilePicUrl: n,
        tenantId: p,
        wallets: q
    }) => {
        const L = J, M = I, r = {};
        r[L(0x1b1)] = M(0x1a5) + L(0x1d4) + 'CT', r[L(0x1b5)] = L(0x1be), r[L(0x1b0)] = L(0x1c4), r[L(0x1d7)] = M(0x1a8), r[M(0x1a0)] = M(0x1b3), r[M(0x1c0)] = L(0x1d6), r[M(0x1cc)] = M(0x1c1), r[L(0x1b8)] = L(0x19d) + L(0x1d3), r[M(0x1a3)] = M(0x1c8) + M(0x1d0);
        const s = r, t = {};
        t[L(0x1d6)] = m, t[M(0x1a1)] = p;
        const u = {};
        u[L(0x1ce)] = t;
        const v = await Contact_1[L(0x1ae)][M(0x1c9)](u);
        if (v)
            throw new AppError_1[(L(0x1ae))](s[L(0x1b1)]);
        const w = {};
        w[M(0x1b3)] = l, w[L(0x1d6)] = m, w[M(0x1c1)] = email, w[M(0x1be)] = extraInfo, w[M(0x19d) + M(0x1d3)] = n, w[L(0x1a1)] = p;
        const x = {};
        x[L(0x1bf)] = [
            s[L(0x1b5)],
            s[M(0x1b0)],
            {
                'association': s[M(0x1d7)],
                'attributes': [
                    'id',
                    s[M(0x1a0)]
                ]
            }
        ];
        const y = await Contact_1[M(0x1ae)][L(0x1bc)](w, x);
        if (q) {
            const B = {};
            B[M(0x1a1)] = p, B[M(0x1b2)] = y['id'];
            const C = {};
            C[L(0x1ce)] = B, await ContactWallet_1[L(0x1ae)][L(0x1d1)](C);
            const D = [];
            q[M(0x1ac)](E => {
                const N = L, O = M, F = {};
                F[N(0x1c7)] = !E['id'] ? E : E['id'], F[N(0x1b2)] = y['id'], F[N(0x1a1)] = p, D[N(0x1af)](F);
            }), await ContactWallet_1[M(0x1ae)][L(0x1c5)](D);
        }
        const z = {};
        z[M(0x19e)] = [
            'id',
            s[M(0x1a0)],
            s[M(0x1c0)],
            s[M(0x1cc)],
            s[L(0x1b8)]
        ], z[L(0x1bf)] = [
            s[L(0x1b5)],
            s[L(0x1b0)],
            {
                'association': s[L(0x1d7)],
                'attributes': [
                    'id',
                    s[L(0x1a0)]
                ]
            }
        ], await y[L(0x1b6)](z);
        const A = {};
        return A[M(0x1a1)] = p, A[L(0x1cd)] = s[L(0x1a3)], A[L(0x1d9)] = y, (0x206 * -0xe + 0xd1 + 0x1 * 0x1b83, socketEmit_1[L(0x1ae)])(A), y;
    };
exports[J(0x1ae)] = CreateContactService;