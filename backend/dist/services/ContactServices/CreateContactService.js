'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xfd4 * -0x1 + -0xe62 * -0x2 + 0x1 * -0xbb2);
        let h = e[f];
        return h;
    }, b(c, d);
}
const K = b, L = b;
(function (c, d) {
    const I = b, J = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(I(0x15a)) / (-0x9d * 0x3f + -0xb9 + -0x275d * -0x1) + parseInt(J(0x163)) / (-0x210 + -0xa * 0x14f + -0x3ca * -0x4) * (-parseInt(J(0x17b)) / (-0x32f * 0x2 + -0x1 * 0x1af8 + -0x2159 * -0x1)) + parseInt(I(0x15b)) / (-0x1bd4 + 0x9e * -0x5 + 0x1eee) + parseInt(J(0x140)) / (0x1e89 + 0x188 * 0x6 + -0x4 * 0x9ed) * (-parseInt(I(0x16b)) / (0x61d * 0x1 + -0xa41 + 0x42a)) + parseInt(I(0x17c)) / (0x24b5 + 0x1 * -0x86 + -0x2428) + -parseInt(J(0x169)) / (-0xd8 * -0x2 + 0x2665 + -0x280d) * (-parseInt(I(0x14e)) / (0x1def * 0x1 + -0x3cc + -0x1a1a)) + parseInt(J(0x171)) / (-0x9dd * 0x1 + -0x2 * -0x14a + 0x753);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xad926 + 0x17 * -0xac46 + 0x1f * 0x121ab));
var __importDefault = this && this[K(0x148) + L(0x146)] || function (c) {
    const M = K;
    return c && c[M(0x17a)] ? c : { 'default': c };
};
const o = {};
o[K(0x173)] = !![], Object[L(0x16e) + L(0x175)](exports, L(0x17a), o);
const AppError_1 = __importDefault(require(K(0x15c) + K(0x154) + 'r')), socketEmit_1 = __importDefault(require(L(0x152) + K(0x160) + K(0x178))), Contact_1 = __importDefault(require(K(0x158) + L(0x147))), ContactWallet_1 = __importDefault(require(L(0x158) + L(0x147) + K(0x14c))), CreateContactService = async ({
        name: l,
        number: m,
        email: email = '',
        extraInfo: extraInfo = [],
        profilePicUrl: n,
        tenantId: p,
        wallets: q,
        disableBot: r,
        disableCampaign: s
    }) => {
        const N = K, O = K, t = {};
        t[N(0x174)] = O(0x151) + O(0x165) + 'CT', t[N(0x168)] = O(0x13f), t[O(0x17d)] = O(0x16f), t[N(0x15d)] = N(0x14d), t[O(0x159)] = O(0x142), t[N(0x144)] = O(0x172), t[N(0x13e)] = O(0x15e), t[O(0x170)] = O(0x16c) + O(0x16d), t[N(0x141)] = N(0x166), t[O(0x153)] = O(0x14f) + N(0x156), t[O(0x145)] = O(0x149) + N(0x162);
        const u = t, v = {};
        v[N(0x172)] = m, v[N(0x155)] = p;
        const w = {};
        w[O(0x164)] = v;
        const x = await Contact_1[O(0x14b)][O(0x179)](w);
        if (x)
            throw new AppError_1[(O(0x14b))](u[O(0x174)]);
        const y = {};
        y[N(0x142)] = l, y[N(0x172)] = m, y[O(0x15e)] = email, y[N(0x13f)] = extraInfo, y[O(0x16c) + N(0x16d)] = n, y[O(0x155)] = p, y[N(0x166)] = r, y[N(0x14f) + N(0x156)] = s;
        const z = {};
        z[N(0x17f)] = [
            u[N(0x168)],
            u[N(0x17d)],
            {
                'association': u[O(0x15d)],
                'attributes': [
                    'id',
                    u[O(0x159)]
                ]
            }
        ];
        const A = await Contact_1[O(0x14b)][O(0x161)](y, z);
        if (q) {
            const D = {};
            D[O(0x155)] = p, D[O(0x16a)] = A['id'];
            const E = {};
            E[O(0x164)] = D, await ContactWallet_1[O(0x14b)][N(0x150)](E);
            const F = [];
            q[O(0x143)](G => {
                const P = O, Q = N, H = {};
                H[P(0x17e)] = !G['id'] ? G : G['id'], H[Q(0x16a)] = A['id'], H[Q(0x155)] = p, F[P(0x14a)](H);
            }), await ContactWallet_1[N(0x14b)][N(0x177)](F);
        }
        const B = {};
        B[N(0x157)] = [
            'id',
            u[N(0x159)],
            u[O(0x144)],
            u[O(0x13e)],
            u[O(0x170)],
            u[O(0x141)],
            u[O(0x153)]
        ], B[O(0x17f)] = [
            u[N(0x168)],
            u[N(0x17d)],
            {
                'association': u[N(0x15d)],
                'attributes': [
                    'id',
                    u[N(0x159)]
                ]
            }
        ], await A[O(0x176)](B);
        const C = {};
        return C[N(0x155)] = p, C[N(0x15f)] = u[O(0x145)], C[O(0x167)] = A, (0x41 * 0x35 + 0xce8 + 0x11 * -0x18d, socketEmit_1[N(0x14b)])(C), A;
    };
function a() {
    const R = [
        'include',
        'mNVOc',
        'extraInfo',
        '1769385UpGyqG',
        'grMnx',
        'name',
        'forEach',
        'vGuzw',
        'OzgSs',
        'fault',
        'ls/Contact',
        '__importDe',
        'contact:up',
        'push',
        'default',
        'Wallet',
        'wallets',
        '8361yLsKbU',
        'disableCam',
        'destroy',
        'ERR_DUPLIC',
        '../../help',
        'VDMhW',
        'rs/AppErro',
        'tenantId',
        'paign',
        'attributes',
        '../../mode',
        'lscQN',
        '4344WBIkGt',
        '3422160strTUz',
        '../../erro',
        'jJdSF',
        'email',
        'type',
        'ers/socket',
        'create',
        'date',
        '1800698VDMQDr',
        'where',
        'ATED_CONTA',
        'disableBot',
        'payload',
        'YgRCi',
        '528SWvWSU',
        'contactId',
        '6mXdxgp',
        'profilePic',
        'Url',
        'defineProp',
        'tags',
        'PvUIV',
        '4719700YhWjuM',
        'number',
        'value',
        'gvvCY',
        'erty',
        'reload',
        'bulkCreate',
        'Emit',
        'findOne',
        '__esModule',
        '3drSnPp',
        '3041969lxjJRp',
        'CriZC',
        'walletId'
    ];
    a = function () {
        return R;
    };
    return a();
}
exports[L(0x14b)] = CreateContactService;