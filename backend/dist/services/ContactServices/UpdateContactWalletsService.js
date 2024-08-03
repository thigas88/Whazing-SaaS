'use strict';
function a() {
    const E = [
        'name',
        'defineProp',
        '33700VvpASG',
        '../../erro',
        'include',
        '819690YxiNZY',
        'wallets',
        'where',
        'Yejiq',
        '3767190LlnhuR',
        'extraInfo',
        '../../mode',
        'bulkCreate',
        'findOne',
        '390490TMkNQw',
        '19957370CgFYxF',
        '6174944wzBovb',
        'push',
        '9bgxyBt',
        'Url',
        'TACT_FOUND',
        '745PIqCRo',
        'destroy',
        'walletId',
        'value',
        '21caywxe',
        'default',
        'contactId',
        'tags',
        '__importDe',
        'profilePic',
        'WKNju',
        '__esModule',
        'forEach',
        'fFVnN',
        '6695448SpmQmV',
        'ERR_NO_CON',
        'ls/Contact',
        'erty',
        'gLXNd',
        'email',
        'rs/AppErro',
        'fault',
        'Wallet',
        'attributes',
        'KUFVL',
        'aznSk',
        'number',
        'tenantId',
        'PwjfU',
        'UpWPr'
    ];
    a = function () {
        return E;
    };
    return a();
}
const x = b, y = b;
(function (c, d) {
    const v = b, w = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(v(0x154)) / (-0x3 * -0xc0d + 0x1694 + -0x3aba) + -parseInt(v(0x15d)) / (0x23ef + -0x485 * 0x7 + -0x44a) * (parseInt(w(0x168)) / (-0x6a7 + 0x23ee + -0x1 * 0x1d44)) + -parseInt(v(0x151)) / (0x96b + 0x8 * 0x1a5 + -0x168f) * (-parseInt(v(0x164)) / (-0x1f18 + -0x1 * -0x1087 + 0x74b * 0x2)) + parseInt(w(0x172)) / (0x186 + -0x1 * 0xfbb + -0x1 * -0xe3b) + -parseInt(w(0x158)) / (0x20f5 + 0x146 * -0x4 + -0x1bd6) + -parseInt(v(0x15f)) / (-0xb47 + 0x23e + 0x911) + -parseInt(v(0x161)) / (0x2288 + -0x1850 + -0xa2f) * (-parseInt(v(0x15e)) / (-0x19b8 + 0x47 * -0x6b + 0x376f));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x78fcc + -0x18aad * 0xc + 0x1838cf));
var __importDefault = this && this[x(0x16c) + y(0x179)] || function (c) {
    const z = y;
    return c && c[z(0x16f)] ? c : { 'default': c };
};
const o = {};
o[x(0x167)] = !![], Object[x(0x150) + x(0x175)](exports, x(0x16f), o);
const AppError_1 = __importDefault(require(y(0x152) + y(0x178) + 'r')), Contact_1 = __importDefault(require(x(0x15a) + y(0x174))), ContactWallet_1 = __importDefault(require(y(0x15a) + y(0x174) + x(0x17a))), UpdateContactWalletsService = async ({
        wallets: h,
        contactId: i,
        tenantId: j
    }) => {
        const A = x, B = x, k = {};
        k[A(0x14a)] = A(0x14f), k[A(0x16e)] = A(0x14b), k[A(0x176)] = B(0x177), k[A(0x149)] = B(0x16d) + B(0x162), k[B(0x171)] = A(0x159), k[A(0x14d)] = A(0x16b), k[B(0x14e)] = B(0x155), k[A(0x157)] = A(0x173) + A(0x163);
        const l = k, m = {};
        m[A(0x14c)] = j, m[A(0x16a)] = i;
        const n = {};
        n[A(0x156)] = m, await ContactWallet_1[A(0x169)][B(0x165)](n);
        const p = [];
        h[A(0x170)](t => {
            const C = A, D = A, u = {};
            u[C(0x166)] = !t['id'] ? t : t['id'], u[D(0x16a)] = i, u[C(0x14c)] = j, p[C(0x160)](u);
        }), await ContactWallet_1[A(0x169)][A(0x15b)](p);
        const q = {};
        q['id'] = i, q[B(0x14c)] = j;
        const r = {};
        r[B(0x156)] = q, r[B(0x148)] = [
            'id',
            l[B(0x14a)],
            l[B(0x16e)],
            l[A(0x176)],
            l[A(0x149)]
        ], r[B(0x153)] = [
            l[A(0x171)],
            l[B(0x14d)],
            {
                'association': l[A(0x14e)],
                'attributes': [
                    'id',
                    l[B(0x14a)]
                ]
            }
        ];
        const s = await Contact_1[B(0x169)][A(0x15c)](r);
        if (!s)
            throw new AppError_1[(B(0x169))](l[A(0x157)], 0x3bb * 0x5 + 0x21 * -0x38 + -0x1d * 0x57);
        return s;
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x68e + -0x3 * 0x389 + 0x1271);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[y(0x169)] = UpdateContactWalletsService;