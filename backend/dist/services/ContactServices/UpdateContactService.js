'use strict';
const I = b, J = b;
(function (c, d) {
    const G = b, H = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(G(0x1f9)) / (0x4f * -0x1d + 0x73e * 0x5 + -0x1b42) + parseInt(H(0x1f3)) / (-0x27 * 0x89 + 0x2704 + -0x1223) + -parseInt(H(0x219)) / (0x214 + -0x13c0 + -0x1f7 * -0x9) * (-parseInt(H(0x1f6)) / (-0x5da * -0x5 + -0x10 * -0x220 + 0x2 * -0x1f9f)) + -parseInt(G(0x21d)) / (-0x13 * 0x57 + 0xa9 * -0x2c + 0x2386) * (parseInt(G(0x1db)) / (0x15c5 + 0x22f7 * 0x1 + -0x7 * 0x81a)) + parseInt(G(0x20b)) / (0xc4 * 0x2b + 0x14a3 + -0x3588) * (-parseInt(H(0x1e5)) / (0x4 * 0x8ea + -0x9ed * 0x3 + 0x1 * -0x5d9)) + parseInt(G(0x217)) / (-0x18a2 + -0x449 + 0x1cf4) * (parseInt(H(0x204)) / (0x7 * 0x15e + 0x2320 + -0x2ca8)) + parseInt(H(0x1f7)) / (0x2 * -0x1282 + -0x12bb + -0xc1 * -0x4a) * (parseInt(H(0x1e8)) / (-0x1 * -0x1811 + 0x1 * 0x19c + 0x19a1 * -0x1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1062be + -0x1 * -0xebfc7 + -0x106e25));
var __importDefault = this && this[I(0x1fa) + J(0x208)] || function (c) {
    const K = I;
    return c && c[K(0x1fd)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x497 + 0x1c9d + -0x162b * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const o = {};
o[J(0x1df)] = !![], Object[I(0x200) + J(0x216)](exports, J(0x1fd), o);
function a() {
    const T = [
        '652976lwFtkN',
        '__importDe',
        'eVWYB',
        'TACT_FOUND',
        '__esModule',
        'tags',
        'fIXwj',
        'defineProp',
        'ZWHuh',
        'findIndex',
        'ERR_NO_CON',
        '3990670izyZow',
        'findOne',
        'contact:up',
        'update',
        'fault',
        'contactId',
        'where',
        '2576okxqzj',
        'forEach',
        'tenantId',
        'CustomFiel',
        'nuNzo',
        'date',
        'ls/Contact',
        'VypuO',
        'attributes',
        'rs/AppErro',
        'MUbGn',
        'erty',
        '9iSRRgF',
        'name',
        '2067501MMwhiz',
        'profilePic',
        'kCLZh',
        'email',
        '485updUye',
        'Emit',
        'wallets',
        '14712ZrTgiz',
        'Wallet',
        'push',
        'payload',
        'value',
        'number',
        'bulkCreate',
        'type',
        '../../help',
        'destroy',
        '32704LAFLbs',
        'map',
        'CCwtr',
        '24yjamji',
        'upsert',
        'walletId',
        'include',
        '../../erro',
        'default',
        'ers/socket',
        'EzbWH',
        'bKLRd',
        'Url',
        'all',
        '1258480ZWiqsi',
        '../../mode',
        'extraInfo',
        '4AAYcYy',
        '1845019PLJawV',
        'reload'
    ];
    a = function () {
        return T;
    };
    return a();
}
const AppError_1 = __importDefault(require(J(0x1ec) + I(0x214) + 'r')), socketEmit_1 = __importDefault(require(I(0x1e3) + I(0x1ee) + J(0x21e))), Contact_1 = __importDefault(require(I(0x1f4) + J(0x211))), ContactCustomField_1 = __importDefault(require(I(0x1f4) + J(0x211) + I(0x20e) + 'd')), ContactWallet_1 = __importDefault(require(I(0x1f4) + J(0x211) + J(0x1dc))), UpdateContactService = async ({
        contactData: k,
        contactId: l,
        tenantId: m
    }) => {
        const L = I, M = J, n = {};
        n[L(0x1f0)] = function (B, C) {
            return B === C;
        }, n[M(0x201)] = M(0x218), n[L(0x1fb)] = M(0x1e0), n[M(0x215)] = L(0x21c), n[M(0x1ef)] = M(0x21a) + L(0x1f1), n[L(0x21b)] = L(0x1f5), n[L(0x212)] = L(0x1fe), n[M(0x20f)] = L(0x21f), n[M(0x1ff)] = M(0x203) + L(0x1fc), n[L(0x1e7)] = L(0x206) + M(0x210);
        const p = n, {
                email: q,
                name: r,
                number: s,
                extraInfo: t,
                wallets: u
            } = k, v = {};
        v['id'] = l, v[M(0x20d)] = m;
        const w = {};
        w[M(0x20a)] = v, w[L(0x213)] = [
            'id',
            p[L(0x201)],
            p[M(0x1fb)],
            p[L(0x215)],
            p[M(0x1ef)]
        ], w[L(0x1eb)] = [
            p[L(0x21b)],
            p[L(0x212)],
            {
                'association': p[L(0x20f)],
                'attributes': [
                    'id',
                    p[M(0x201)]
                ]
            }
        ];
        const x = await Contact_1[L(0x1ed)][L(0x205)](w);
        if (!x)
            throw new AppError_1[(M(0x1ed))](p[L(0x1ff)], -0x7 * -0x163 + -0x22a3 * -0x1 + -0x2ac4);
        t && (await Promise[L(0x1f2)](t[L(0x1e6)](async B => {
            const N = M, O = L, C = { ...B };
            C[N(0x209)] = x['id'], await ContactCustomField_1[O(0x1ed)][N(0x1e9)](C);
        })), await Promise[L(0x1f2)](x[L(0x1f5)][L(0x1e6)](async B => {
            const P = L, Q = L, C = t[P(0x202)](D => D['id'] === B['id']);
            if (p[P(0x1f0)](C, -(-0x107 * -0x7 + -0xf66 + -0x2 * -0x41b))) {
                const D = {};
                D['id'] = B['id'];
                const E = {};
                E[Q(0x20a)] = D, await ContactCustomField_1[Q(0x1ed)][P(0x1e4)](E);
            }
        })));
        if (u) {
            const B = {};
            B[M(0x20d)] = m, B[L(0x209)] = l;
            const C = {};
            C[M(0x20a)] = B, await ContactWallet_1[L(0x1ed)][L(0x1e4)](C);
            const D = [];
            u[M(0x20c)](E => {
                const R = M, S = L, F = {};
                F[R(0x1ea)] = !E['id'] ? E : E['id'], F[S(0x209)] = l, F[R(0x20d)] = m, D[R(0x1dd)](F);
            }), await ContactWallet_1[M(0x1ed)][L(0x1e1)](D);
        }
        const y = {};
        y[M(0x218)] = r, y[L(0x1e0)] = s, y[M(0x21c)] = q, await x[L(0x207)](y);
        const z = {};
        z[M(0x213)] = [
            'id',
            p[M(0x201)],
            p[L(0x1fb)],
            p[M(0x215)],
            p[M(0x1ef)]
        ], z[M(0x1eb)] = [
            p[M(0x21b)],
            p[M(0x212)],
            {
                'association': p[M(0x20f)],
                'attributes': [
                    'id',
                    p[M(0x201)]
                ]
            }
        ], await x[M(0x1f8)](z);
        const A = {};
        return A[M(0x20d)] = m, A[M(0x1e2)] = p[L(0x1e7)], A[M(0x1de)] = x, (0xd44 * -0x1 + 0x7cf * 0x1 + 0x575, socketEmit_1[M(0x1ed)])(A), x;
    };
exports[J(0x1ed)] = UpdateContactService;