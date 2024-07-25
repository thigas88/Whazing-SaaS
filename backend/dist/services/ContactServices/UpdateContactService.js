'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x209c + -0x6f7 + -0x1 * 0x182f);
        let h = e[f];
        return h;
    }, b(c, d);
}
const I = b, J = b;
(function (c, d) {
    const G = b, H = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(G(0x181)) / (-0x3 * 0x8ed + 0x117a + 0x4a7 * 0x2) * (-parseInt(H(0x1af)) / (-0x1905 + 0x79d * 0x1 + 0x116a)) + parseInt(G(0x1b5)) / (0x243c + 0x149b + -0x38d4) * (-parseInt(H(0x1ae)) / (0x2688 + 0x648 * -0x2 + -0x19f4)) + parseInt(G(0x1a0)) / (-0x72e + 0x1 * -0x1bb9 + -0x14 * -0x1bf) * (parseInt(G(0x17d)) / (-0xf * -0xd + -0x1aab * -0x1 + -0x36d * 0x8)) + -parseInt(G(0x180)) / (0x24d2 + 0x60d + -0x156c * 0x2) * (-parseInt(G(0x17e)) / (-0x23d5 + -0x695 + 0x2a72)) + -parseInt(G(0x192)) / (0x16e4 + 0xc95 * -0x2 + 0x24f) * (-parseInt(G(0x19f)) / (0x59 * -0x3b + 0x63 * -0x57 + 0x3632)) + parseInt(H(0x1aa)) / (0xb * 0x338 + -0x2 * 0x123c + -0x1 * -0x11b) + -parseInt(H(0x182)) / (-0x581 * 0x1 + 0x1af * 0x15 + -0x1dce);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xcfe3b + -0x104910 + 0x1 * 0x28730f));
var __importDefault = this && this[I(0x184) + J(0x18c)] || function (c) {
    const K = J;
    return c && c[K(0x1a1)] ? c : { 'default': c };
};
const o = {};
o[I(0x199)] = !![], Object[I(0x19e) + I(0x194)](exports, I(0x1a1), o);
const AppError_1 = __importDefault(require(J(0x198) + J(0x179) + 'r')), socketEmit_1 = __importDefault(require(I(0x1b8) + I(0x186) + I(0x1a2))), Contact_1 = __importDefault(require(J(0x18b) + J(0x17f))), ContactCustomField_1 = __importDefault(require(J(0x18b) + I(0x17f) + J(0x1ba) + 'd')), ContactWallet_1 = __importDefault(require(J(0x18b) + I(0x17f) + I(0x185))), UpdateContactService = async ({
        contactData: k,
        contactId: l,
        tenantId: m
    }) => {
        const L = J, M = J, n = {};
        n[L(0x19b)] = function (B, C) {
            return B === C;
        }, n[L(0x176)] = L(0x187), n[L(0x1b9)] = M(0x1b0), n[M(0x1b6)] = L(0x196), n[M(0x1a4)] = M(0x18f) + L(0x18d), n[L(0x1a7)] = L(0x177), n[M(0x183)] = L(0x190), n[L(0x193)] = M(0x1b3), n[M(0x1ac)] = M(0x1ad) + L(0x18e), n[M(0x178)] = M(0x17a) + M(0x195);
        const p = n, {
                email: q,
                name: r,
                number: s,
                extraInfo: t,
                wallets: u
            } = k, v = {};
        v['id'] = l, v[L(0x1b4)] = m;
        const w = {};
        w[L(0x1a5)] = v, w[L(0x18a)] = [
            'id',
            p[M(0x176)],
            p[M(0x1b9)],
            p[M(0x1b6)],
            p[M(0x1a4)]
        ], w[M(0x197)] = [
            p[L(0x1a7)],
            p[L(0x183)],
            {
                'association': p[M(0x193)],
                'attributes': [
                    'id',
                    p[M(0x176)]
                ]
            }
        ];
        const x = await Contact_1[L(0x1b7)][L(0x188)](w);
        if (!x)
            throw new AppError_1[(L(0x1b7))](p[M(0x1ac)], 0x17 * 0x7d + 0x1 * -0x1726 + 0x5 * 0x2b3);
        t && (await Promise[M(0x1a3)](t[L(0x17c)](async B => {
            const N = L, O = M, C = { ...B };
            C[N(0x17b)] = x['id'], await ContactCustomField_1[O(0x1b7)][N(0x1ab)](C);
        })), await Promise[M(0x1a3)](x[M(0x177)][M(0x17c)](async B => {
            const P = M, Q = M, C = t[P(0x1b1)](D => D['id'] === B['id']);
            if (p[P(0x19b)](C, -(-0x22d9 * -0x1 + -0x5f + -0x2279))) {
                const D = {};
                D['id'] = B['id'];
                const E = {};
                E[P(0x1a5)] = D, await ContactCustomField_1[Q(0x1b7)][P(0x189)](E);
            }
        })));
        if (u) {
            const B = {};
            B[L(0x1b4)] = m, B[M(0x17b)] = l;
            const C = {};
            C[M(0x1a5)] = B, await ContactWallet_1[M(0x1b7)][L(0x189)](C);
            const D = [];
            u[L(0x19d)](E => {
                const R = M, S = L, F = {};
                F[R(0x19a)] = !E['id'] ? E : E['id'], F[S(0x17b)] = l, F[S(0x1b4)] = m, D[R(0x1a8)](F);
            }), await ContactWallet_1[L(0x1b7)][L(0x19c)](D);
        }
        const y = {};
        y[L(0x187)] = r, y[M(0x1b0)] = s, y[L(0x196)] = q, await x[M(0x1a9)](y);
        const z = {};
        z[M(0x18a)] = [
            'id',
            p[L(0x176)],
            p[M(0x1b9)],
            p[L(0x1b6)],
            p[L(0x1a4)]
        ], z[L(0x197)] = [
            p[L(0x1a7)],
            p[M(0x183)],
            {
                'association': p[M(0x193)],
                'attributes': [
                    'id',
                    p[L(0x176)]
                ]
            }
        ], await x[M(0x1a6)](z);
        const A = {};
        return A[M(0x1b4)] = m, A[M(0x191)] = p[L(0x178)], A[L(0x1b2)] = x, (-0x47 + -0x659 + 0x6a0 * 0x1, socketEmit_1[L(0x1b7)])(A), x;
    };
function a() {
    const T = [
        'extraInfo',
        'UeiCH',
        'rs/AppErro',
        'contact:up',
        'contactId',
        'map',
        '6QHwjEb',
        '24zMXBMw',
        'ls/Contact',
        '446201safeCZ',
        '81239KzeGLT',
        '21519408zGaLzV',
        'tbvaa',
        '__importDe',
        'Wallet',
        'ers/socket',
        'name',
        'findOne',
        'destroy',
        'attributes',
        '../../mode',
        'fault',
        'Url',
        'TACT_FOUND',
        'profilePic',
        'tags',
        'type',
        '171SkQYIn',
        'JvbjS',
        'erty',
        'date',
        'email',
        'include',
        '../../erro',
        'value',
        'walletId',
        'JmIxf',
        'bulkCreate',
        'forEach',
        'defineProp',
        '589130AwrRuh',
        '1853510HgOTBz',
        '__esModule',
        'Emit',
        'all',
        'trjNv',
        'where',
        'reload',
        'CQynF',
        'push',
        'update',
        '1138071gYKeYS',
        'upsert',
        'LcDJS',
        'ERR_NO_CON',
        '76ajYqXa',
        '28cYiFoM',
        'number',
        'findIndex',
        'payload',
        'wallets',
        'tenantId',
        '62637UJHnOT',
        'VxMUc',
        'default',
        '../../help',
        'wVpgq',
        'CustomFiel',
        'ciaJt'
    ];
    a = function () {
        return T;
    };
    return a();
}
exports[J(0x1b7)] = UpdateContactService;