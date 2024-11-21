'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x6f9 * -0x4 + -0x1 * 0x9ef + -0xe * -0x2ce);
        let h = e[f];
        return h;
    }, b(c, d);
}
const C = b, D = b;
(function (c, d) {
    const A = b, B = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(A(0x187)) / (-0x6 * -0x48e + 0x11a8 + 0x31 * -0xeb) + parseInt(B(0x17f)) / (-0x1f3f + -0x265e + 0x459f) + -parseInt(B(0x1a1)) / (-0x541 * -0x1 + -0x10f + 0x9 * -0x77) * (parseInt(A(0x176)) / (0x1 * 0x17bf + 0x4f * -0x4d + 0x2 * 0x4)) + parseInt(B(0x17e)) / (0x46d * -0x2 + -0x164 * 0xf + 0x9e9 * 0x3) * (-parseInt(B(0x195)) / (0x1845 + 0x22 * 0xca + -0x3313)) + parseInt(B(0x177)) / (0x692 * 0x1 + 0x3e0 + -0x17d * 0x7) + -parseInt(B(0x182)) / (-0x1109 + -0x168a + 0x279b) + -parseInt(A(0x179)) / (-0x16 * -0x18b + 0x2401 + 0x1d7 * -0x26) * (-parseInt(B(0x189)) / (0x3 * -0x89e + -0x1ab3 + 0x3497));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x8340a + 0x3 * 0x1ebda + 0x71aff));
function a() {
    const H = [
        'ERR_NO_CON',
        'RmQcd',
        '../../help',
        'date',
        'tagId',
        '../../erro',
        'name',
        'Tag',
        'erty',
        'findOne',
        '65166HXQBAL',
        'fault',
        'extraInfo',
        'RdLdH',
        'create',
        '../../mode',
        'number',
        'tenantId',
        'SjFci',
        'contact:up',
        'type',
        'contactId',
        '75hoRlgE',
        'EFsvL',
        'wallets',
        'payload',
        'Fujeu',
        'ls/Contact',
        'where',
        'uzbhg',
        'include',
        'defineProp',
        'tags',
        'vyFIC',
        'value',
        '75300okpSfE',
        '3812522ixIBzy',
        'attributes',
        '176247syphsp',
        'Url',
        'ers/socket',
        'BoYzG',
        'default',
        '5FUSaaR',
        '946210LWDilX',
        'rs/AppErro',
        '__importDe',
        '3808376OCecqT',
        'Emit',
        'email',
        'TACT_FOUND',
        '__esModule',
        '67751xtBchM',
        'GmPxP',
        '160dgCxye',
        'profilePic'
    ];
    a = function () {
        return H;
    };
    return a();
}
var __importDefault = this && this[C(0x181) + D(0x196)] || function (c) {
    const E = D;
    return c && c[E(0x186)] ? c : { 'default': c };
};
const k = {};
k[C(0x175)] = !![], Object[D(0x172) + C(0x193)](exports, C(0x186), k);
const AppError_1 = __importDefault(require(C(0x190) + C(0x180) + 'r')), socketEmit_1 = __importDefault(require(D(0x18d) + D(0x17b) + C(0x183))), Contact_1 = __importDefault(require(C(0x19a) + D(0x1a6))), ContactTag_1 = __importDefault(require(C(0x19a) + D(0x1a6) + C(0x192))), UpdateContactTagsBotService = async ({
        tagId: j,
        contactId: l,
        tenantId: m
    }) => {
        const F = D, G = C, n = {};
        n[F(0x188)] = F(0x191), n[G(0x1a2)] = F(0x19b), n[G(0x1a8)] = F(0x184), n[F(0x18c)] = F(0x18a) + F(0x17a), n[G(0x19d)] = G(0x197), n[G(0x198)] = G(0x173), n[F(0x17c)] = F(0x1a3), n[F(0x174)] = G(0x18b) + F(0x185), n[F(0x1a5)] = F(0x19e) + F(0x18e);
        const o = n, p = {};
        p[G(0x19c)] = m, p[F(0x1a0)] = l, p[F(0x18f)] = j;
        const q = p, r = {};
        r[G(0x1a7)] = q;
        const s = await ContactTag_1[F(0x17d)][F(0x194)](r);
        if (!s) {
            const y = {};
            y[F(0x18f)] = j, y[G(0x1a0)] = l, y[G(0x19c)] = m;
            const z = y;
            await ContactTag_1[F(0x17d)][G(0x199)](z);
        }
        const t = {};
        t['id'] = l, t[F(0x19c)] = m;
        const u = {};
        u[G(0x1a7)] = t, u[G(0x178)] = [
            'id',
            o[G(0x188)],
            o[F(0x1a2)],
            o[G(0x1a8)],
            o[F(0x18c)]
        ], u[F(0x171)] = [
            o[F(0x19d)],
            o[G(0x198)],
            {
                'association': o[G(0x17c)],
                'attributes': [
                    'id',
                    o[G(0x188)]
                ]
            }
        ];
        const v = u, w = await Contact_1[G(0x17d)][F(0x194)](v);
        if (!w)
            throw new AppError_1[(F(0x17d))](o[F(0x174)], 0x9 * 0x19b + -0x3 * -0xcd + -0xf46);
        const x = {};
        return x[G(0x19c)] = m, x[G(0x19f)] = o[G(0x1a5)], x[G(0x1a4)] = w, (-0xd32 * 0x2 + 0xb * 0x235 + 0x1 * 0x21d, socketEmit_1[G(0x17d)])(x), w;
    };
exports[D(0x17d)] = UpdateContactTagsBotService;