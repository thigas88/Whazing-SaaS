'use strict';
const x = b, y = b;
(function (c, d) {
    const v = b, w = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(v(0xb1)) / (0x1 * 0x2203 + -0x1cda + -0x21 * 0x28) * (parseInt(w(0xc1)) / (0x2 * -0x9ac + 0xd79 + 0x5 * 0x12d)) + -parseInt(w(0xcd)) / (-0x25d0 + 0xa9 * -0x3 + -0x3fb * -0xa) + -parseInt(v(0xc2)) / (-0x544 + -0x1756 * -0x1 + -0x120e) * (parseInt(w(0xd7)) / (0x2b0 * -0x4 + -0x7ab + 0x1270 * 0x1)) + parseInt(v(0xad)) / (0x626 * 0x4 + 0x1cf * -0x15 + 0x1 * 0xd69) + -parseInt(v(0xd2)) / (-0x707 + -0x17 * 0x125 + -0x1 * -0x2161) + parseInt(v(0xbb)) / (0x1 * -0x967 + -0x1 * -0x3a1 + -0x2e7 * -0x2) * (-parseInt(w(0xc3)) / (0x26a3 + -0x3e * -0x69 + -0x4008)) + -parseInt(v(0xb5)) / (0x10e8 + -0x9c4 + -0x71a) * (-parseInt(v(0xc4)) / (-0x1 * 0x22b8 + 0x12c5 * -0x1 + 0x3588));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1c552 + 0x286bc + -0x1d * 0x9a5));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x24a1 + -0x3 * -0x3c7 + 0x19f0);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const E = [
        '627034uRswHs',
        '3824ZsTEPj',
        '916749vPEziM',
        '36245sTPrXx',
        'ERR_NO_CON',
        'email',
        'destroy',
        'KzmTy',
        'tenantId',
        'TACT_FOUND',
        '../../erro',
        'contactId',
        '326019QARGQU',
        'Url',
        'findOne',
        'extraInfo',
        'profilePic',
        '2576098IjwWXo',
        'erty',
        'push',
        'EjpjU',
        'wallets',
        '995sWcQWF',
        'BNAWb',
        'forEach',
        'attributes',
        'oEiHA',
        'rs/AppErro',
        '__esModule',
        '__importDe',
        'siDXu',
        'hxBzA',
        '972822iBQhdz',
        'include',
        'NPwPo',
        'name',
        '1RFtuYT',
        'tags',
        'Tag',
        '../../mode',
        '3430qKuZJn',
        'where',
        'fault',
        'defineProp',
        'number',
        'value',
        '8QGigmT',
        'ls/Contact',
        'xJBRk',
        'tagId',
        'bulkCreate',
        'default'
    ];
    a = function () {
        return E;
    };
    return a();
}
var __importDefault = this && this[x(0xaa) + y(0xb7)] || function (c) {
    const z = x;
    return c && c[z(0xa9)] ? c : { 'default': c };
};
const o = {};
o[y(0xba)] = !![], Object[x(0xb8) + x(0xd3)](exports, x(0xa9), o);
const AppError_1 = __importDefault(require(x(0xcb) + y(0xa8) + 'r')), Contact_1 = __importDefault(require(x(0xb4) + y(0xbc))), ContactTag_1 = __importDefault(require(y(0xb4) + x(0xbc) + x(0xb3))), UpdateContactService = async ({
        tags: h,
        contactId: i,
        tenantId: j
    }) => {
        const A = y, B = y, k = {};
        k[A(0xd5)] = A(0xb0), k[B(0xac)] = B(0xb9), k[A(0xa4)] = A(0xc6), k[B(0xa7)] = A(0xd1) + A(0xce), k[B(0xbd)] = A(0xd0), k[A(0xc8)] = A(0xb2), k[B(0xaf)] = B(0xd6), k[A(0xab)] = A(0xc5) + B(0xca);
        const l = k, m = {};
        m[B(0xc9)] = j, m[A(0xcc)] = i;
        const n = {};
        n[B(0xb6)] = m, await ContactTag_1[B(0xc0)][A(0xc7)](n);
        const p = [];
        h[B(0xa5)](t => {
            const C = A, D = A, u = {};
            u[C(0xbe)] = !t['id'] ? t : t['id'], u[C(0xcc)] = i, u[C(0xc9)] = j, p[C(0xd4)](u);
        }), await ContactTag_1[B(0xc0)][A(0xbf)](p);
        const q = {};
        q['id'] = i, q[B(0xc9)] = j;
        const r = {};
        r[A(0xb6)] = q, r[A(0xa6)] = [
            'id',
            l[A(0xd5)],
            l[A(0xac)],
            l[A(0xa4)],
            l[B(0xa7)]
        ], r[A(0xae)] = [
            l[B(0xbd)],
            l[A(0xc8)],
            {
                'association': l[B(0xaf)],
                'attributes': [
                    'id',
                    l[A(0xd5)]
                ]
            }
        ];
        const s = await Contact_1[A(0xc0)][A(0xcf)](r);
        if (!s)
            throw new AppError_1[(B(0xc0))](l[A(0xab)], 0x13bf + -0xda6 + -0x485);
        return s;
    };
exports[y(0xc0)] = UpdateContactService;