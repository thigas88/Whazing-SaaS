'use strict';
const x = b, y = b;
(function (c, d) {
    const v = b, w = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(v(0x18d)) / (-0x1819 + 0x23ab + -0xb91) * (-parseInt(w(0x1b1)) / (-0x26e0 + 0x1 * -0x1309 + 0x39eb)) + -parseInt(w(0x1b9)) / (-0x1f84 + 0x1896 + 0x6f1) + -parseInt(w(0x191)) / (-0xd1 * 0x12 + 0x1700 + -0x84a) * (-parseInt(v(0x197)) / (0x115 * 0xd + -0xc91 + 0x17b * -0x1)) + -parseInt(v(0x1aa)) / (-0x4cf * -0x2 + 0x161a + 0xfd9 * -0x2) + parseInt(v(0x1a8)) / (-0x1 * 0x1b59 + 0xa9 * 0x19 + -0x17 * -0x79) * (-parseInt(w(0x1a7)) / (-0x1fbb + -0x1f8f * 0x1 + 0x3f52)) + -parseInt(w(0x1ab)) / (-0x8 * -0x18a + 0x2105 + -0x34 * 0xdf) + -parseInt(v(0x18f)) / (0x1bdb + -0x268f * -0x1 + -0x4260) * (-parseInt(w(0x1a9)) / (-0x26a7 * -0x1 + -0x51c + 0x10c * -0x20));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x25087 * -0x7 + -0x48796 + -0x1d3b8a * -0x1));
var __importDefault = this && this[x(0x19b) + x(0x1b7)] || function (c) {
    const z = x;
    return c && c[z(0x1b2)] ? c : { 'default': c };
};
const o = {};
o[y(0x19f)] = !![], Object[y(0x1af) + y(0x195)](exports, y(0x1b2), o);
function a() {
    const E = [
        'attributes',
        'forEach',
        'unDMv',
        'number',
        '8WFMGUs',
        '5838581vMflQf',
        '1591733XbRqnN',
        '6545334hjvSFw',
        '3124485YRVPeU',
        'profilePic',
        'email',
        'walletId',
        'defineProp',
        '../../mode',
        '122662EMnPxe',
        '__esModule',
        'CJGQp',
        'hfXrJ',
        'findOne',
        'ERR_NO_CON',
        'fault',
        'tags',
        '1989312mACXHm',
        'where',
        'wallets',
        'IXEsY',
        'Wallet',
        'extraInfo',
        'PayUw',
        'ouuJz',
        '7zKJjdp',
        'bulkCreate',
        '250rRvwfm',
        'TACT_FOUND',
        '184kSbNRd',
        'include',
        'destroy',
        'name',
        'erty',
        'KFFoF',
        '33055DfcHck',
        'ls/Contact',
        'contactId',
        'default',
        '__importDe',
        'GJRiP',
        'Url',
        '../../erro',
        'value',
        'rs/AppErro',
        'tenantId',
        'push'
    ];
    a = function () {
        return E;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x305 * 0x1 + 0x21ea + -0x7 * 0x50f);
        let h = e[f];
        return h;
    }, b(c, d);
}
const AppError_1 = __importDefault(require(x(0x19e) + x(0x1a0) + 'r')), Contact_1 = __importDefault(require(y(0x1b0) + x(0x198))), ContactWallet_1 = __importDefault(require(y(0x1b0) + y(0x198) + y(0x189))), UpdateContactWalletsService = async ({
        wallets: h,
        contactId: i,
        tenantId: j
    }) => {
        const A = y, B = y, k = {};
        k[A(0x188)] = B(0x194), k[A(0x18c)] = B(0x1a6), k[B(0x1b3)] = A(0x1ad), k[A(0x18b)] = B(0x1ac) + A(0x19d), k[A(0x1b4)] = A(0x18a), k[B(0x19c)] = B(0x1b8), k[B(0x1a5)] = A(0x187), k[B(0x196)] = B(0x1b6) + A(0x190);
        const l = k, m = {};
        m[A(0x1a1)] = j, m[A(0x199)] = i;
        const n = {};
        n[A(0x186)] = m, await ContactWallet_1[A(0x19a)][A(0x193)](n);
        const p = [];
        h[B(0x1a4)](t => {
            const C = B, D = B, u = {};
            u[C(0x1ae)] = !t['id'] ? t : t['id'], u[D(0x199)] = i, u[D(0x1a1)] = j, p[D(0x1a2)](u);
        }), await ContactWallet_1[A(0x19a)][A(0x18e)](p);
        const q = {};
        q['id'] = i, q[B(0x1a1)] = j;
        const r = {};
        r[A(0x186)] = q, r[A(0x1a3)] = [
            'id',
            l[A(0x188)],
            l[A(0x18c)],
            l[A(0x1b3)],
            l[B(0x18b)]
        ], r[A(0x192)] = [
            l[A(0x1b4)],
            l[B(0x19c)],
            {
                'association': l[B(0x1a5)],
                'attributes': [
                    'id',
                    l[B(0x188)]
                ]
            }
        ];
        const s = await Contact_1[B(0x19a)][B(0x1b5)](r);
        if (!s)
            throw new AppError_1[(B(0x19a))](l[B(0x196)], 0x181d * 0x1 + -0x88 * -0x10 + -0x1f09);
        return s;
    };
exports[x(0x19a)] = UpdateContactWalletsService;