'use strict';
function a() {
    const T = [
        'findOne',
        'map',
        'Url',
        '1058362sWDlnR',
        'findIndex',
        '__importDe',
        'Wallet',
        'fMMDI',
        'xRsti',
        'lSxYL',
        'ddkMF',
        'bulkCreate',
        'push',
        '1740960TNdDgL',
        'upsert',
        'kdfHV',
        'tags',
        '../../help',
        'contact:up',
        'profilePic',
        '6607076IYkYhU',
        '4790984MYScNC',
        'qseAD',
        'email',
        'tenantId',
        'reload',
        '1146cOgVdF',
        'update',
        '5069650MqCEhi',
        'name',
        'date',
        'value',
        'ERR_NO_CON',
        'QMlDe',
        'TACT_FOUND',
        'walletId',
        'forEach',
        'all',
        'type',
        'fault',
        'defineProp',
        'ers/socket',
        'ls/Contact',
        '__esModule',
        'contactId',
        '3244erMvCR',
        'include',
        'attributes',
        '718464dMwhKD',
        'default',
        'payload',
        'KsSWk',
        'Emit',
        'zcIkY',
        'CustomFiel',
        '../../erro',
        'wallets',
        'destroy',
        '../../mode',
        'erty',
        'where',
        'uWwHp',
        'number',
        '9nWKKab',
        'extraInfo',
        'rs/AppErro'
    ];
    a = function () {
        return T;
    };
    return a();
}
const I = b, J = b;
(function (c, d) {
    const G = b, H = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(G(0x9d)) / (0x5 * -0x51b + 0x1772 * -0x1 + 0x30fa * 0x1) + -parseInt(H(0xa7)) / (0x17d * 0x1 + -0x142 * 0x8 + 0x895) + parseInt(H(0xb4)) / (-0xaf7 + 0x26f6 + -0x1bfc) * (parseInt(G(0x85)) / (-0x438 + -0xe40 + 0x127c)) + parseInt(H(0xb6)) / (-0x3 * 0x995 + -0x22ba + 0x183 * 0x2a) + -parseInt(H(0x88)) / (-0x1d4e + -0x220e + 0x1ab * 0x26) + parseInt(H(0xae)) / (-0x2c8 * -0x2 + 0x1b9c + 0x1 * -0x2125) + -parseInt(H(0xaf)) / (-0xe4b + 0x23 * 0x2f + 0x2 * 0x3f3) * (-parseInt(H(0x97)) / (0x35 * 0xb + 0x263a + 0x46 * -0x94));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x3 * -0x6bf57 + -0x90dbe * 0x1 + 0x266 * 0x116b));
var __importDefault = this && this[I(0x9f) + I(0x7f)] || function (c) {
    const K = I;
    return c && c[K(0x83)] ? c : { 'default': c };
};
const o = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2375 + -0x2dc + -0x2021);
        let h = e[f];
        return h;
    }, b(c, d);
}
o[I(0xb9)] = !![], Object[J(0x80) + I(0x93)](exports, I(0x83), o);
const AppError_1 = __importDefault(require(J(0x8f) + J(0x99) + 'r')), socketEmit_1 = __importDefault(require(J(0xab) + J(0x81) + J(0x8c))), Contact_1 = __importDefault(require(I(0x92) + J(0x82))), ContactCustomField_1 = __importDefault(require(J(0x92) + I(0x82) + J(0x8e) + 'd')), ContactWallet_1 = __importDefault(require(I(0x92) + J(0x82) + J(0xa0))), UpdateContactService = async ({
        contactData: k,
        contactId: l,
        tenantId: m
    }) => {
        const L = I, M = J, n = {};
        n[L(0x8b)] = function (B, C) {
            return B === C;
        }, n[M(0xa3)] = L(0xb7), n[L(0x95)] = M(0x96), n[M(0x79)] = M(0xb1), n[L(0xa4)] = L(0xad) + M(0x9c), n[M(0x8d)] = M(0x98), n[M(0xb0)] = M(0xaa), n[M(0xa1)] = L(0x90), n[L(0xa2)] = L(0x78) + L(0x7a), n[M(0xa9)] = L(0xac) + L(0xb8);
        const p = n, {
                email: q,
                name: r,
                number: s,
                extraInfo: t,
                wallets: u
            } = k, v = {};
        v['id'] = l, v[M(0xb2)] = m;
        const w = {};
        w[L(0x94)] = v, w[M(0x87)] = [
            'id',
            p[L(0xa3)],
            p[L(0x95)],
            p[M(0x79)],
            p[L(0xa4)]
        ], w[L(0x86)] = [
            p[M(0x8d)],
            p[L(0xb0)],
            {
                'association': p[L(0xa1)],
                'attributes': [
                    'id',
                    p[L(0xa3)]
                ]
            }
        ];
        const x = await Contact_1[M(0x89)][L(0x9a)](w);
        if (!x)
            throw new AppError_1[(M(0x89))](p[M(0xa2)], 0x1324 + -0x2d7 * 0x7 + 0x251 * 0x1);
        t && (await Promise[L(0x7d)](t[L(0x9b)](async B => {
            const N = M, O = L, C = { ...B };
            C[N(0x84)] = x['id'], await ContactCustomField_1[O(0x89)][O(0xa8)](C);
        })), await Promise[M(0x7d)](x[M(0x98)][L(0x9b)](async B => {
            const P = M, Q = L, C = t[P(0x9e)](D => D['id'] === B['id']);
            if (p[Q(0x8b)](C, -(-0x1df3 + -0xf0f + 0x2d03 * 0x1))) {
                const D = {};
                D['id'] = B['id'];
                const E = {};
                E[P(0x94)] = D, await ContactCustomField_1[Q(0x89)][P(0x91)](E);
            }
        })));
        if (u) {
            const B = {};
            B[L(0xb2)] = m, B[M(0x84)] = l;
            const C = {};
            C[M(0x94)] = B, await ContactWallet_1[L(0x89)][L(0x91)](C);
            const D = [];
            u[L(0x7c)](E => {
                const R = L, S = M, F = {};
                F[R(0x7b)] = !E['id'] ? E : E['id'], F[R(0x84)] = l, F[S(0xb2)] = m, D[R(0xa6)](F);
            }), await ContactWallet_1[M(0x89)][M(0xa5)](D);
        }
        const y = {};
        y[L(0xb7)] = r, y[L(0x96)] = s, y[M(0xb1)] = q, await x[L(0xb5)](y);
        const z = {};
        z[M(0x87)] = [
            'id',
            p[L(0xa3)],
            p[M(0x95)],
            p[L(0x79)],
            p[L(0xa4)]
        ], z[L(0x86)] = [
            p[L(0x8d)],
            p[M(0xb0)],
            {
                'association': p[L(0xa1)],
                'attributes': [
                    'id',
                    p[L(0xa3)]
                ]
            }
        ], await x[M(0xb3)](z);
        const A = {};
        return A[L(0xb2)] = m, A[M(0x7e)] = p[M(0xa9)], A[L(0x8a)] = x, (0xcb6 + 0x414 * -0x7 + 0xfd6, socketEmit_1[L(0x89)])(A), x;
    };
exports[J(0x89)] = UpdateContactService;