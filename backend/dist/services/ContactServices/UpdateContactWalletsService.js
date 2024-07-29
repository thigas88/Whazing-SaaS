'use strict';
function a() {
    const E = [
        '__importDe',
        '1300190GyAvRX',
        'contactId',
        'erty',
        '../../erro',
        'ERR_NO_CON',
        'qZAcN',
        'tags',
        'rs/AppErro',
        'where',
        'number',
        '4582098RhmFAB',
        'oPCva',
        'extraInfo',
        '8cAcKUZ',
        '50984nRERwA',
        '63524wDmqvr',
        'iwWxM',
        'bulkCreate',
        'GoQzB',
        '../../mode',
        'Url',
        '746424NigBIb',
        'XuhvS',
        'findOne',
        'tenantId',
        'dNZvr',
        'wallets',
        'email',
        'Wallet',
        'push',
        'name',
        'default',
        'forEach',
        'destroy',
        'profilePic',
        'value',
        '__esModule',
        'ls/Contact',
        'fault',
        '836907EumESV',
        'defineProp',
        '21xBnafx',
        'attributes',
        'include',
        '10TCHVCG',
        'RtDmh',
        '9123010EEhzCZ',
        'suoUA',
        'walletId',
        'TACT_FOUND'
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
            const f = parseInt(v(0xd2)) / (-0x81a * -0x1 + 0x4 * -0x65f + 0x1163) * (parseInt(v(0xe8)) / (0x196 * -0x1 + 0x1 * -0x1055 + 0x11ed)) + -parseInt(v(0xcd)) / (0x1 * 0x1586 + 0xc31 * -0x1 + -0x952) + parseInt(w(0xe6)) / (0x61e + -0x1bea + -0x4 * -0x574) * (parseInt(w(0xd9)) / (-0x1f6d + -0x1 * -0x1a06 + 0x56c * 0x1)) + parseInt(w(0xee)) / (0x138d + -0x77 * -0x47 + -0x29 * 0x148) + parseInt(w(0xcf)) / (-0x20bd + -0x2 * 0x591 + -0x3 * -0xea2) * (parseInt(w(0xe7)) / (-0x224 * -0x7 + -0x657 + -0x89d)) + parseInt(v(0xe3)) / (0x51c * 0x4 + -0x1698 + 0x231) + -parseInt(v(0xd4)) / (0x2521 + -0x1174 + 0xb * -0x1c9);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x337fe + -0x49ae7 + 0xc6324));
var __importDefault = this && this[x(0xd8) + x(0xcc)] || function (c) {
    const z = x;
    return c && c[z(0xca)] ? c : { 'default': c };
};
const o = {};
o[y(0xc9)] = !![], Object[y(0xce) + y(0xdb)](exports, y(0xca), o);
const AppError_1 = __importDefault(require(y(0xdc) + x(0xe0) + 'r')), Contact_1 = __importDefault(require(y(0xec) + x(0xcb))), ContactWallet_1 = __importDefault(require(y(0xec) + x(0xcb) + x(0xf5))), UpdateContactWalletsService = async ({
        wallets: h,
        contactId: i,
        tenantId: j
    }) => {
        const A = x, B = x, k = {};
        k[A(0xeb)] = B(0xf7), k[A(0xe9)] = B(0xe2), k[B(0xef)] = A(0xf4), k[A(0xf2)] = B(0xc8) + B(0xed), k[B(0xde)] = B(0xe5), k[B(0xe4)] = B(0xdf), k[B(0xd5)] = A(0xf3), k[B(0xd3)] = A(0xdd) + A(0xd7);
        const l = k, m = {};
        m[B(0xf1)] = j, m[A(0xda)] = i;
        const n = {};
        n[B(0xe1)] = m, await ContactWallet_1[A(0xf8)][B(0xc7)](n);
        const p = [];
        h[A(0xc6)](t => {
            const C = A, D = A, u = {};
            u[C(0xd6)] = !t['id'] ? t : t['id'], u[D(0xda)] = i, u[D(0xf1)] = j, p[C(0xf6)](u);
        }), await ContactWallet_1[B(0xf8)][B(0xea)](p);
        const q = {};
        q['id'] = i, q[A(0xf1)] = j;
        const r = {};
        r[A(0xe1)] = q, r[A(0xd0)] = [
            'id',
            l[A(0xeb)],
            l[B(0xe9)],
            l[A(0xef)],
            l[B(0xf2)]
        ], r[B(0xd1)] = [
            l[B(0xde)],
            l[A(0xe4)],
            {
                'association': l[A(0xd5)],
                'attributes': [
                    'id',
                    l[A(0xeb)]
                ]
            }
        ];
        const s = await Contact_1[A(0xf8)][B(0xf0)](r);
        if (!s)
            throw new AppError_1[(A(0xf8))](l[A(0xd3)], 0xf9f + 0x1808 + -0x43b * 0x9);
        return s;
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xdfc + 0x1e88 + 0x2 * -0x15df);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[x(0xf8)] = UpdateContactWalletsService;