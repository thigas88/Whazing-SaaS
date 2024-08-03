'use strict';
const x = b, y = b;
(function (c, d) {
    const v = b, w = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(v(0x1a2)) / (0x1 * -0x2555 + 0x1d62 * 0x1 + 0x7f4) + -parseInt(w(0x1b3)) / (-0x2116 + -0x490 + 0x14 * 0x1e2) + -parseInt(v(0x192)) / (0x3 * -0x3cd + 0x7 * 0xe4 + 0x52e) + parseInt(v(0x1ac)) / (-0x16 * 0x98 + -0x1494 + -0x435 * -0x8) * (-parseInt(v(0x1a8)) / (0x10b * 0xa + -0x268d + 0x1c24)) + parseInt(w(0x1a1)) / (0x65e + 0x43 * -0x35 + 0x787) + -parseInt(v(0x18e)) / (0x250a + 0x3 * 0x4d2 + -0x3379) + -parseInt(w(0x1b1)) / (-0x316 * -0x4 + 0xafb * 0x1 + -0x174b) * (-parseInt(w(0x1b2)) / (0x1 * -0x1018 + 0xf4d + 0x2 * 0x6a));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xa * 0x260b + 0xd531 + 0x116fd));
var __importDefault = this && this[x(0x1ad) + y(0x196)] || function (c) {
    const z = y;
    return c && c[z(0x198)] ? c : { 'default': c };
};
const o = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x7ce + 0x76 * 0x29 + -0x4cb * 0x2);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const E = [
        'rs/AppErro',
        'destroy',
        'tagId',
        '../../erro',
        'name',
        '15425rJxUbm',
        'push',
        'defineProp',
        'include',
        '376UhBTRK',
        '__importDe',
        'SyAuD',
        'number',
        'attributes',
        '296WlOOnQ',
        '295209ZXyoNt',
        '532424TMIcOy',
        'dnBAk',
        'ls/Contact',
        'ERclN',
        'forEach',
        'tenantId',
        '../../mode',
        'where',
        'wallets',
        'mPoJg',
        'default',
        'ACYGM',
        'TACT_FOUND',
        '1697374SXVErR',
        'caVOO',
        'erty',
        'ERR_NO_CON',
        '1264326zOLQLW',
        'contactId',
        'bulkCreate',
        'Url',
        'fault',
        'Tag',
        '__esModule',
        'uiKDH',
        'tags',
        'profilePic',
        'value',
        'ffelI',
        'extraInfo',
        'email',
        'findOne',
        '1973904kRuKSO',
        '99107wXMsoP'
    ];
    a = function () {
        return E;
    };
    return a();
}
o[y(0x19c)] = !![], Object[y(0x1aa) + y(0x190)](exports, y(0x198), o);
const AppError_1 = __importDefault(require(y(0x1a6) + y(0x1a3) + 'r')), Contact_1 = __importDefault(require(x(0x187) + x(0x183))), ContactTag_1 = __importDefault(require(y(0x187) + x(0x183) + y(0x197))), UpdateContactService = async ({
        tags: h,
        contactId: i,
        tenantId: j
    }) => {
        const A = y, B = x, k = {};
        k[A(0x184)] = A(0x1a7), k[B(0x182)] = B(0x1af), k[B(0x18f)] = B(0x19f), k[B(0x18a)] = B(0x19b) + B(0x195), k[A(0x19d)] = A(0x19e), k[A(0x199)] = A(0x19a), k[B(0x1ae)] = B(0x189), k[A(0x18c)] = A(0x191) + A(0x18d);
        const l = k, m = {};
        m[B(0x186)] = j, m[B(0x193)] = i;
        const n = {};
        n[A(0x188)] = m, await ContactTag_1[A(0x18b)][B(0x1a4)](n);
        const p = [];
        h[A(0x185)](t => {
            const C = A, D = A, u = {};
            u[C(0x1a5)] = !t['id'] ? t : t['id'], u[C(0x193)] = i, u[D(0x186)] = j, p[C(0x1a9)](u);
        }), await ContactTag_1[A(0x18b)][B(0x194)](p);
        const q = {};
        q['id'] = i, q[B(0x186)] = j;
        const r = {};
        r[A(0x188)] = q, r[B(0x1b0)] = [
            'id',
            l[A(0x184)],
            l[B(0x182)],
            l[B(0x18f)],
            l[A(0x18a)]
        ], r[A(0x1ab)] = [
            l[B(0x19d)],
            l[B(0x199)],
            {
                'association': l[A(0x1ae)],
                'attributes': [
                    'id',
                    l[B(0x184)]
                ]
            }
        ];
        const s = await Contact_1[B(0x18b)][B(0x1a0)](r);
        if (!s)
            throw new AppError_1[(B(0x18b))](l[A(0x18c)], -0xa76 * 0x1 + -0x1067 + 0x3 * 0x97b);
        return s;
    };
exports[y(0x18b)] = UpdateContactService;