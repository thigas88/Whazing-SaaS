'use strict';
const x = b, y = b;
(function (c, d) {
    const v = b, w = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(v(0x78)) / (-0x2117 + 0x1089 + 0x108f) * (-parseInt(w(0x7a)) / (0xa * -0x2ed + -0x1d02 + -0x3a46 * -0x1)) + -parseInt(w(0x71)) / (-0x7 * -0xde + -0x24e7 + 0x7b6 * 0x4) * (parseInt(w(0x8e)) / (-0x2479 + 0xdfc + -0x1 * -0x1681)) + -parseInt(v(0x70)) / (-0x39f * -0x2 + -0x41c + -0x31d) + parseInt(v(0x8f)) / (-0x463 + 0x2190 + -0x1b7 * 0x11) + -parseInt(w(0x76)) / (-0x1 * 0x1b7 + 0xc92 * 0x1 + 0x84 * -0x15) + -parseInt(w(0x85)) / (0x2311 + 0x215b + -0x4464) + parseInt(w(0x8d)) / (-0x1 * 0x392 + 0x1b7e + -0x1 * 0x17e3);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x7c8b * 0x3 + -0x73031 * -0x1 + 0x184));
var __importDefault = this && this[x(0x7f) + x(0x99)] || function (c) {
    const z = y;
    return c && c[z(0x93)] ? c : { 'default': c };
};
function a() {
    const E = [
        'forEach',
        'TACT_FOUND',
        'defineProp',
        'Tag',
        'destroy',
        '1155405pImXKJ',
        '3185367UHTiPa',
        'attributes',
        'profilePic',
        'bulkCreate',
        'default',
        '5938555DQacqI',
        'name',
        '29bnkzqr',
        'ERR_NO_CON',
        '17354gKXDxf',
        'zdxwT',
        'extraInfo',
        'FcZfp',
        'erty',
        '__importDe',
        'tags',
        '../../mode',
        'tenantId',
        'McIni',
        'Tsite',
        '7638664ZjJrxk',
        'include',
        'Url',
        'findOne',
        'wallets',
        '../../erro',
        'RAduu',
        'YgqHC',
        '26026407hCJBUY',
        '4NApenM',
        '6138024EGAtEP',
        'MFfUs',
        'push',
        'where',
        '__esModule',
        'number',
        'eSraM',
        'tagId',
        'value',
        'rs/AppErro',
        'fault',
        'email',
        'contactId',
        'ls/Contact'
    ];
    a = function () {
        return E;
    };
    return a();
}
const o = {};
o[y(0x97)] = !![], Object[x(0x9f) + y(0x7e)](exports, y(0x93), o);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * 0x12d1 + -0x145 * -0x1c + 0x1 * -0x104b);
        let h = e[f];
        return h;
    }, b(c, d);
}
const AppError_1 = __importDefault(require(x(0x8a) + x(0x98) + 'r')), Contact_1 = __importDefault(require(y(0x81) + y(0x9c))), ContactTag_1 = __importDefault(require(x(0x81) + y(0x9c) + y(0xa0))), UpdateContactService = async ({
        tags: h,
        contactId: i,
        tenantId: j
    }) => {
        const A = x, B = y, k = {};
        k[A(0x7d)] = B(0x77), k[A(0x84)] = B(0x94), k[B(0x7b)] = B(0x9a), k[B(0x83)] = A(0x73) + B(0x87), k[B(0x8c)] = B(0x7c), k[A(0x95)] = B(0x80), k[A(0x90)] = A(0x89), k[B(0x8b)] = A(0x79) + B(0x9e);
        const l = k, m = {};
        m[A(0x82)] = j, m[B(0x9b)] = i;
        const n = {};
        n[B(0x92)] = m, await ContactTag_1[A(0x75)][A(0xa1)](n);
        const p = [];
        h[A(0x9d)](t => {
            const C = A, D = B, u = {};
            u[C(0x96)] = !t['id'] ? t : t['id'], u[D(0x9b)] = i, u[C(0x82)] = j, p[D(0x91)](u);
        }), await ContactTag_1[A(0x75)][B(0x74)](p);
        const q = {};
        q['id'] = i, q[B(0x82)] = j;
        const r = {};
        r[B(0x92)] = q, r[A(0x72)] = [
            'id',
            l[B(0x7d)],
            l[A(0x84)],
            l[B(0x7b)],
            l[A(0x83)]
        ], r[B(0x86)] = [
            l[A(0x8c)],
            l[B(0x95)],
            {
                'association': l[B(0x90)],
                'attributes': [
                    'id',
                    l[A(0x7d)]
                ]
            }
        ];
        const s = await Contact_1[B(0x75)][A(0x88)](r);
        if (!s)
            throw new AppError_1[(A(0x75))](l[B(0x8b)], 0x3ca + -0x4 * -0x9a9 + -0x6 * 0x6cf);
        return s;
    };
exports[y(0x75)] = UpdateContactService;