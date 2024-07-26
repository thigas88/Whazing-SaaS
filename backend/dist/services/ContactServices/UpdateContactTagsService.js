'use strict';
const x = b, y = b;
(function (c, d) {
    const v = b, w = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(v(0x10a)) / (-0x1 * -0x1bd4 + 0xa57 * 0x2 + -0x3081) + parseInt(w(0xfd)) / (-0x171e + 0x1aeb + -0x1 * 0x3cb) * (parseInt(v(0x112)) / (0x1d6f + -0xba6 + -0x1 * 0x11c6)) + parseInt(w(0x10f)) / (0x6bb + 0xa3f + -0x10f6) + parseInt(w(0xf3)) / (-0x38a + -0x1fcd + 0x235c) + parseInt(v(0x106)) / (0x153 * -0x11 + 0x22d7 * -0x1 + 0x3960) + -parseInt(w(0x114)) / (-0x734 + -0x69 * 0x1f + -0x4a * -0x45) + -parseInt(w(0x101)) / (-0xd9 * 0x17 + -0xc2 * 0xb + 0x1bdd);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x6294e + -0x6b5ff + 0x5 * 0x1413b));
function a() {
    const E = [
        'default',
        '../../erro',
        'number',
        'wallets',
        'value',
        'forEach',
        'tagId',
        '__esModule',
        'findOne',
        'WKiGP',
        'bulkCreate',
        'tags',
        'where',
        '../../mode',
        'TxzZP',
        '719080nreuDA',
        'HqYMt',
        'erty',
        'profilePic',
        'push',
        'ERR_NO_CON',
        'VScDV',
        'Url',
        'contactId',
        'TACT_FOUND',
        '2DPiSfF',
        'CZVGz',
        'fault',
        'IHtHe',
        '9078392QNZbQE',
        'defineProp',
        'ls/Contact',
        'tenantId',
        'bhOKD',
        '4314132yqdvkV',
        'attributes',
        'fvzPA',
        'email',
        '87951RTPENw',
        'extraInfo',
        'Tag',
        'destroy',
        'include',
        '1875572WAUvYT',
        'name',
        '__importDe',
        '367329tCNXlf',
        'rs/AppErro',
        '225176sYTWzl'
    ];
    a = function () {
        return E;
    };
    return a();
}
var __importDefault = this && this[x(0x111) + x(0xff)] || function (c) {
    const z = x;
    return c && c[z(0x11c)] ? c : { 'default': c };
};
const o = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x3b1 + 0x7a9 + -0x305);
        let h = e[f];
        return h;
    }, b(c, d);
}
o[x(0x119)] = !![], Object[y(0x102) + x(0xf5)](exports, y(0x11c), o);
const AppError_1 = __importDefault(require(y(0x116) + x(0x113) + 'r')), Contact_1 = __importDefault(require(y(0x122) + x(0x103))), ContactTag_1 = __importDefault(require(y(0x122) + x(0x103) + y(0x10c))), UpdateContactService = async ({
        tags: h,
        contactId: i,
        tenantId: j
    }) => {
        const A = y, B = x, k = {};
        k[A(0xf4)] = A(0x110), k[B(0x100)] = A(0x117), k[B(0xf9)] = A(0x109), k[A(0x105)] = B(0xf6) + B(0xfa), k[A(0x123)] = B(0x10b), k[A(0x108)] = A(0x120), k[B(0x11e)] = B(0x118), k[A(0xfe)] = B(0xf8) + B(0xfc);
        const l = k, m = {};
        m[B(0x104)] = j, m[B(0xfb)] = i;
        const n = {};
        n[B(0x121)] = m, await ContactTag_1[A(0x115)][A(0x10d)](n);
        const p = [];
        h[B(0x11a)](t => {
            const C = B, D = A, u = {};
            u[C(0x11b)] = !t['id'] ? t : t['id'], u[C(0xfb)] = i, u[D(0x104)] = j, p[D(0xf7)](u);
        }), await ContactTag_1[A(0x115)][A(0x11f)](p);
        const q = {};
        q['id'] = i, q[B(0x104)] = j;
        const r = {};
        r[B(0x121)] = q, r[A(0x107)] = [
            'id',
            l[B(0xf4)],
            l[B(0x100)],
            l[B(0xf9)],
            l[A(0x105)]
        ], r[A(0x10e)] = [
            l[B(0x123)],
            l[A(0x108)],
            {
                'association': l[A(0x11e)],
                'attributes': [
                    'id',
                    l[A(0xf4)]
                ]
            }
        ];
        const s = await Contact_1[B(0x115)][A(0x11d)](r);
        if (!s)
            throw new AppError_1[(B(0x115))](l[B(0xfe)], 0x1f6a + -0x22 * 0x1f + -0x19b8 * 0x1);
        return s;
    };
exports[y(0x115)] = UpdateContactService;