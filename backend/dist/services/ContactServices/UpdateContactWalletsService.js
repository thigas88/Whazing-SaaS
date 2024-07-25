'use strict';
const x = b, y = b;
(function (c, d) {
    const v = b, w = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(v(0x197)) / (0x2da + -0x1032 + 0xc9 * 0x11) * (parseInt(w(0x1b2)) / (-0x7 * 0x355 + 0x34c + -0x1409 * -0x1)) + -parseInt(v(0x1b1)) / (-0x142 * -0x1a + 0x11cb + -0x327c) * (parseInt(v(0x1ae)) / (-0x1f8a + 0x1cb + 0x1dc3 * 0x1)) + -parseInt(w(0x1a8)) / (-0x5 * 0x6c1 + -0x1836 + 0x3a00) + -parseInt(v(0x1b6)) / (-0x2314 + 0x1689 + 0xc91) * (parseInt(w(0x195)) / (0x1079 + -0x3 * 0x96b + 0xbcf)) + parseInt(v(0x1a0)) / (0xf * -0x147 + 0x2 * -0x12ad + 0x388b) + -parseInt(v(0x1ad)) / (0xe6f + -0x13a0 + 0x2 * 0x29d) * (-parseInt(w(0x1bc)) / (0xd0 * -0x16 + 0x2 * 0x274 + 0xb9 * 0x12)) + parseInt(v(0x190)) / (-0x24e7 + 0x287 * -0x9 + 0x1 * 0x3bb1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xc5c58 + -0x3f771 + -0x5 * -0x51f82));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x40 * -0x7a + 0xd0 * -0x25 + 0x11f);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const E = [
        '../../erro',
        'value',
        'name',
        '132660jABuRJ',
        'destroy',
        'extraInfo',
        'ERR_NO_CON',
        'number',
        'fault',
        'GEDwF',
        'profilePic',
        '34979890GiKrVt',
        'NIZAC',
        'Wallet',
        'email',
        'jwQty',
        '6818nKHefE',
        'Url',
        '66151MpwbWC',
        'defineProp',
        'wallets',
        'TACT_FOUND',
        'wNxHn',
        'AZNsM',
        'erty',
        'attributes',
        'FZjPJ',
        '1860688LuymVU',
        'findOne',
        'include',
        'forEach',
        'ls/Contact',
        'where',
        '__esModule',
        'rs/AppErro',
        '4946400hvkeBh',
        'bulkCreate',
        '../../mode',
        'tags',
        'walletId',
        '162MlEyGh',
        '12412RxsaBq',
        'tenantId',
        'contactId',
        '1008UVfoTR',
        '30HaJuDs',
        'ZRMyq',
        'AiKQZ',
        '__importDe',
        '114NDpSeD',
        'push',
        'default'
    ];
    a = function () {
        return E;
    };
    return a();
}
var __importDefault = this && this[x(0x1b5) + x(0x1c1)] || function (c) {
    const z = y;
    return c && c[z(0x1a6)] ? c : { 'default': c };
};
const o = {};
o[y(0x1ba)] = !![], Object[x(0x198) + y(0x19d)](exports, y(0x1a6), o);
const AppError_1 = __importDefault(require(x(0x1b9) + x(0x1a7) + 'r')), Contact_1 = __importDefault(require(y(0x1aa) + x(0x1a4))), ContactWallet_1 = __importDefault(require(x(0x1aa) + y(0x1a4) + y(0x192))), UpdateContactWalletsService = async ({
        wallets: h,
        contactId: i,
        tenantId: j
    }) => {
        const A = x, B = x, k = {};
        k[A(0x194)] = B(0x1bb), k[B(0x1c2)] = B(0x1c0), k[B(0x191)] = B(0x193), k[B(0x19b)] = B(0x18f) + A(0x196), k[B(0x19c)] = B(0x1be), k[B(0x19f)] = B(0x1ab), k[B(0x1b4)] = A(0x199), k[A(0x1b3)] = A(0x1bf) + B(0x19a);
        const l = k, m = {};
        m[A(0x1af)] = j, m[B(0x1b0)] = i;
        const n = {};
        n[B(0x1a5)] = m, await ContactWallet_1[B(0x1b8)][B(0x1bd)](n);
        const p = [];
        h[B(0x1a3)](t => {
            const C = A, D = A, u = {};
            u[C(0x1ac)] = !t['id'] ? t : t['id'], u[D(0x1b0)] = i, u[C(0x1af)] = j, p[D(0x1b7)](u);
        }), await ContactWallet_1[B(0x1b8)][B(0x1a9)](p);
        const q = {};
        q['id'] = i, q[B(0x1af)] = j;
        const r = {};
        r[A(0x1a5)] = q, r[B(0x19e)] = [
            'id',
            l[A(0x194)],
            l[A(0x1c2)],
            l[B(0x191)],
            l[B(0x19b)]
        ], r[A(0x1a2)] = [
            l[B(0x19c)],
            l[B(0x19f)],
            {
                'association': l[B(0x1b4)],
                'attributes': [
                    'id',
                    l[B(0x194)]
                ]
            }
        ];
        const s = await Contact_1[A(0x1b8)][A(0x1a1)](r);
        if (!s)
            throw new AppError_1[(A(0x1b8))](l[B(0x1b3)], -0x1a6f + 0x4f4 + -0x170f * -0x1);
        return s;
    };
exports[x(0x1b8)] = UpdateContactWalletsService;