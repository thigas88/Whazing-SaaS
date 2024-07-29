'use strict';
const I = b, J = b;
(function (c, d) {
    const G = b, H = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(G(0x1cf)) / (-0x1 * 0x439 + -0x268a + 0x2ac4) + -parseInt(H(0x1b9)) / (-0x2 * 0xa4e + 0x1 * 0x67 + 0x1437) * (parseInt(H(0x1bc)) / (-0xeb1 + 0x127 + 0xd8d)) + parseInt(H(0x1bd)) / (0x1 * -0xe55 + -0x140e + 0x2267) + parseInt(H(0x1c0)) / (0x6fa * 0x2 + -0x207e + -0x128f * -0x1) * (parseInt(G(0x1e3)) / (0x1d28 + -0x173d + -0x1f7 * 0x3)) + parseInt(G(0x1df)) / (-0x10a8 + 0x15c3 + 0x64 * -0xd) + -parseInt(H(0x1d4)) / (0x1213 + 0x551 + -0x175c) * (parseInt(H(0x1c6)) / (-0xb * 0x37c + 0x1a0 * 0xb + 0x147d)) + parseInt(G(0x1ac)) / (-0x9bf + -0x1c6c + 0x2635) * (-parseInt(H(0x1b4)) / (-0x1 * 0x1de + 0x3 * -0x1e2 + 0x78f));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x2 * -0xb50a + 0x333ab + 0x2 * 0xb78b));
function a() {
    const T = [
        'ERR_NO_CON',
        '__importDe',
        '6564jdDJUO',
        'include',
        'iEPCV',
        '21rpOlCg',
        '1150884ERiotk',
        'tenantId',
        'number',
        '55OgiDyk',
        'ls/Contact',
        'fault',
        'iUzLf',
        'extraInfo',
        'date',
        '122787lwHRDd',
        'update',
        'bulkCreate',
        'contactId',
        'fJgVH',
        'type',
        'findIndex',
        'TACT_FOUND',
        'Emit',
        '131021Arrpgb',
        'payload',
        'forEach',
        'defineProp',
        'attributes',
        '104XJbduX',
        'ers/socket',
        'all',
        'gmrfb',
        'walletId',
        'reload',
        '../../erro',
        '__esModule',
        'nljok',
        'ucLwL',
        'destroy',
        '1399916apdYxW',
        'upsert',
        'Wallet',
        'CustomFiel',
        '72066ArLuGz',
        '../../help',
        'push',
        'name',
        '../../mode',
        'Url',
        'where',
        'profilePic',
        'NARvk',
        'value',
        'ajKTr',
        'contact:up',
        'wallets',
        '91730KZlIZA',
        'rs/AppErro',
        'iDPej',
        'email',
        'tags',
        'map',
        'default',
        'erty',
        '407vqsGlr',
        'JsvHs',
        'findOne'
    ];
    a = function () {
        return T;
    };
    return a();
}
var __importDefault = this && this[I(0x1b8) + J(0x1c2)] || function (c) {
    const K = I;
    return c && c[K(0x1db)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2491 + -0x6f1 * 0x4 + -0x72d);
        let h = e[f];
        return h;
    }, b(c, d);
}
const o = {};
o[I(0x1a8)] = !![], Object[J(0x1d2) + I(0x1b3)](exports, I(0x1db), o);
const AppError_1 = __importDefault(require(J(0x1da) + J(0x1ad) + 'r')), socketEmit_1 = __importDefault(require(J(0x1a0) + I(0x1d5) + J(0x1ce))), Contact_1 = __importDefault(require(I(0x1a3) + J(0x1c1))), ContactCustomField_1 = __importDefault(require(J(0x1a3) + J(0x1c1) + J(0x1e2) + 'd')), ContactWallet_1 = __importDefault(require(I(0x1a3) + J(0x1c1) + J(0x1e1))), UpdateContactService = async ({
        contactData: k,
        contactId: l,
        tenantId: m
    }) => {
        const L = I, M = I, n = {};
        n[L(0x1dc)] = function (B, C) {
            return B === C;
        }, n[L(0x1bb)] = L(0x1a2), n[M(0x1dd)] = L(0x1bf), n[L(0x1a7)] = L(0x1af), n[L(0x1a9)] = M(0x1a6) + M(0x1a4), n[M(0x1d7)] = M(0x1c4), n[M(0x1ae)] = M(0x1b0), n[L(0x1c3)] = M(0x1ab), n[L(0x1b5)] = M(0x1b7) + M(0x1cd), n[M(0x1ca)] = M(0x1aa) + M(0x1c5);
        const p = n, {
                email: q,
                name: r,
                number: s,
                extraInfo: t,
                wallets: u
            } = k, v = {};
        v['id'] = l, v[L(0x1be)] = m;
        const w = {};
        w[L(0x1a5)] = v, w[M(0x1d3)] = [
            'id',
            p[M(0x1bb)],
            p[M(0x1dd)],
            p[L(0x1a7)],
            p[L(0x1a9)]
        ], w[M(0x1ba)] = [
            p[M(0x1d7)],
            p[L(0x1ae)],
            {
                'association': p[L(0x1c3)],
                'attributes': [
                    'id',
                    p[L(0x1bb)]
                ]
            }
        ];
        const x = await Contact_1[L(0x1b2)][M(0x1b6)](w);
        if (!x)
            throw new AppError_1[(M(0x1b2))](p[L(0x1b5)], 0x1cfd * -0x1 + 0xa4e + 0x1443);
        t && (await Promise[L(0x1d6)](t[M(0x1b1)](async B => {
            const N = L, O = L, C = { ...B };
            C[N(0x1c9)] = x['id'], await ContactCustomField_1[O(0x1b2)][N(0x1e0)](C);
        })), await Promise[M(0x1d6)](x[L(0x1c4)][M(0x1b1)](async B => {
            const P = M, Q = L, C = t[P(0x1cc)](D => D['id'] === B['id']);
            if (p[Q(0x1dc)](C, -(0x2458 * 0x1 + -0x2 * -0x1229 + -0x69b * 0xb))) {
                const D = {};
                D['id'] = B['id'];
                const E = {};
                E[Q(0x1a5)] = D, await ContactCustomField_1[P(0x1b2)][P(0x1de)](E);
            }
        })));
        if (u) {
            const B = {};
            B[L(0x1be)] = m, B[L(0x1c9)] = l;
            const C = {};
            C[M(0x1a5)] = B, await ContactWallet_1[L(0x1b2)][L(0x1de)](C);
            const D = [];
            u[L(0x1d1)](E => {
                const R = L, S = L, F = {};
                F[R(0x1d8)] = !E['id'] ? E : E['id'], F[R(0x1c9)] = l, F[S(0x1be)] = m, D[S(0x1a1)](F);
            }), await ContactWallet_1[M(0x1b2)][L(0x1c8)](D);
        }
        const y = {};
        y[L(0x1a2)] = r, y[M(0x1bf)] = s, y[M(0x1af)] = q, await x[L(0x1c7)](y);
        const z = {};
        z[M(0x1d3)] = [
            'id',
            p[M(0x1bb)],
            p[L(0x1dd)],
            p[M(0x1a7)],
            p[M(0x1a9)]
        ], z[M(0x1ba)] = [
            p[L(0x1d7)],
            p[L(0x1ae)],
            {
                'association': p[L(0x1c3)],
                'attributes': [
                    'id',
                    p[L(0x1bb)]
                ]
            }
        ], await x[M(0x1d9)](z);
        const A = {};
        return A[M(0x1be)] = m, A[M(0x1cb)] = p[L(0x1ca)], A[L(0x1d0)] = x, (0x1a81 + 0x21e7 * -0x1 + 0x2 * 0x3b3, socketEmit_1[L(0x1b2)])(A), x;
    };
exports[I(0x1b2)] = UpdateContactService;