'use strict';
const x = b, y = b;
(function (c, d) {
    const v = b, w = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(v(0x1ec)) / (-0x6a7 + 0x1 * -0x224e + 0xd6 * 0x31) * (-parseInt(v(0x1ff)) / (0x264f + -0x2501 + 0xa6 * -0x2)) + parseInt(v(0x1fc)) / (-0x2384 + 0x255 + -0x2 * -0x1099) * (parseInt(v(0x1f7)) / (0x1a26 + -0x1678 + -0x3aa)) + parseInt(v(0x1dc)) / (-0x229c + -0xd * 0x1de + 0x3ae7) * (-parseInt(v(0x1fa)) / (0x956 + 0x218 + 0x28 * -0x49)) + parseInt(v(0x201)) / (0x76d + 0x2178 + -0x28de) + parseInt(v(0x1f5)) / (-0x972 + -0x25ff + 0x2f79) + parseInt(v(0x1ee)) / (-0x8ed * -0x2 + 0x428 + 0x19 * -0xe1) + parseInt(v(0x1e2)) / (-0xcf0 + -0xc12 + -0xe5 * -0x1c) * (parseInt(w(0x1f4)) / (0x4 * 0x2a1 + 0x903 * -0x3 + 0x424 * 0x4));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xb * 0xc92f + -0x88692 + 0x58a5c));
function a() {
    const E = [
        'Wallet',
        'LMUdr',
        'forEach',
        '159868ZprNRR',
        'email',
        '70101ObJxyq',
        'kcwcC',
        'push',
        'findOne',
        '../../mode',
        'UAxnS',
        '11LXjBFp',
        '719856PYnlEE',
        'default',
        '543848mlGZXJ',
        'walletId',
        'rurdp',
        '6gMKjFC',
        'destroy',
        '3xcnWRe',
        'erty',
        'TACT_FOUND',
        '8DrazRx',
        'rs/AppErro',
        '4839982vUNzHg',
        'include',
        'sxAtB',
        'number',
        'wallets',
        'profilePic',
        'Url',
        'ls/Contact',
        'where',
        'sqOid',
        'fault',
        'attributes',
        'ERR_NO_CON',
        'defineProp',
        'tags',
        '1769365mmwOvT',
        '__importDe',
        'KfKVy',
        'extraInfo',
        'contactId',
        'name',
        '4390810MZZcXy',
        'tenantId',
        'bulkCreate',
        '../../erro',
        '__esModule',
        'MsWDS',
        'value'
    ];
    a = function () {
        return E;
    };
    return a();
}
var __importDefault = this && this[x(0x1dd) + y(0x20b)] || function (c) {
    const z = x;
    return c && c[z(0x1e6)] ? c : { 'default': c };
};
const o = {};
o[y(0x1e8)] = !![], Object[y(0x1da) + x(0x1fd)](exports, x(0x1e6), o);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x3 * 0x4ee + 0x23 * 0x11 + -0x394 * -0x4);
        let h = e[f];
        return h;
    }, b(c, d);
}
const AppError_1 = __importDefault(require(x(0x1e5) + y(0x200) + 'r')), Contact_1 = __importDefault(require(x(0x1f2) + x(0x208))), ContactWallet_1 = __importDefault(require(x(0x1f2) + y(0x208) + x(0x1e9))), UpdateContactWalletsService = async ({
        wallets: h,
        contactId: i,
        tenantId: j
    }) => {
        const A = y, B = x, k = {};
        k[A(0x203)] = A(0x1e1), k[A(0x1e7)] = B(0x204), k[A(0x1ef)] = A(0x1ed), k[A(0x1f9)] = B(0x206) + B(0x207), k[B(0x20a)] = B(0x1df), k[A(0x1f3)] = B(0x1db), k[B(0x1ea)] = B(0x205), k[B(0x1de)] = A(0x1d9) + B(0x1fe);
        const l = k, m = {};
        m[B(0x1e3)] = j, m[A(0x1e0)] = i;
        const n = {};
        n[A(0x209)] = m, await ContactWallet_1[B(0x1f6)][B(0x1fb)](n);
        const p = [];
        h[A(0x1eb)](t => {
            const C = A, D = A, u = {};
            u[C(0x1f8)] = !t['id'] ? t : t['id'], u[D(0x1e0)] = i, u[C(0x1e3)] = j, p[C(0x1f0)](u);
        }), await ContactWallet_1[B(0x1f6)][A(0x1e4)](p);
        const q = {};
        q['id'] = i, q[B(0x1e3)] = j;
        const r = {};
        r[B(0x209)] = q, r[B(0x20c)] = [
            'id',
            l[B(0x203)],
            l[B(0x1e7)],
            l[A(0x1ef)],
            l[B(0x1f9)]
        ], r[B(0x202)] = [
            l[A(0x20a)],
            l[B(0x1f3)],
            {
                'association': l[B(0x1ea)],
                'attributes': [
                    'id',
                    l[B(0x203)]
                ]
            }
        ];
        const s = await Contact_1[A(0x1f6)][A(0x1f1)](r);
        if (!s)
            throw new AppError_1[(B(0x1f6))](l[B(0x1de)], 0x5 * 0x9d + 0x59 * 0x61 + -0x2336);
        return s;
    };
exports[y(0x1f6)] = UpdateContactWalletsService;