'use strict';
const x = b, y = b;
(function (c, d) {
    const v = b, w = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(v(0xe5)) / (-0x18c7 + 0xe00 + -0x73 * -0x18) * (-parseInt(v(0xe0)) / (0x1 * -0x20eb + 0x2b5 * -0x3 + 0x4 * 0xa43)) + -parseInt(v(0x101)) / (-0x4 * 0x1e1 + 0x430 * 0x5 + 0xd69 * -0x1) + parseInt(v(0x10b)) / (-0x16 * 0x4f + 0x148a + -0xdbc) * (-parseInt(v(0xe6)) / (0x161 * -0x18 + 0x22 * 0xc + 0x1f85)) + -parseInt(w(0xde)) / (-0xe6e + -0x12a8 + 0x211c) * (-parseInt(w(0x10e)) / (-0xf1c + 0x2b * -0xf + 0x11a8)) + parseInt(w(0xf7)) / (0x173d + 0x240f * 0x1 + -0x3b44) * (-parseInt(v(0xf8)) / (0xbc8 + -0x212b * -0x1 + -0x2cea)) + -parseInt(w(0xe8)) / (0x815 * 0x2 + 0x108d + -0x20ad) + parseInt(w(0xeb)) / (-0x65f * -0x2 + -0x1 * 0xdea + 0x137) * (parseInt(v(0x106)) / (0x7c4 + -0x8bb + 0x103));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1efd * 0x52 + 0x2 * -0x4e78b + 0x9f * 0x2c7f));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x11f3 + -0x146f + -0x6b * -0x8);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const E = [
        'Url',
        'tagId',
        '../../mode',
        'rs/AppErro',
        'YsrFB',
        'kipse',
        'VXVfW',
        'profilePic',
        '14112jxxXLV',
        '675hJlhfr',
        'number',
        '__importDe',
        'include',
        'TACT_FOUND',
        'forEach',
        'wallets',
        'dsJbQ',
        'push',
        '1005303bflWQn',
        'xcDrq',
        'destroy',
        'contactId',
        'NPNHr',
        '12pDDjEm',
        'erty',
        '../../erro',
        'name',
        'fault',
        '248nKwktE',
        'defineProp',
        'where',
        '1100589vKNzis',
        '__esModule',
        'email',
        'ERR_NO_CON',
        'bulkCreate',
        '30DCYmea',
        'attributes',
        '5122ufUzJc',
        'oSVai',
        'extraInfo',
        'tenantId',
        'ls/Contact',
        '211UbJKMe',
        '26870vMOAaT',
        'tags',
        '9050450idLewD',
        'Tag',
        'findOne',
        '9866483ugsYMQ',
        'default',
        'value',
        'JoMYC'
    ];
    a = function () {
        return E;
    };
    return a();
}
var __importDefault = this && this[x(0xfa) + x(0x10a)] || function (c) {
    const z = x;
    return c && c[z(0x10f)] ? c : { 'default': c };
};
const o = {};
o[x(0xed)] = !![], Object[y(0x10c) + x(0x107)](exports, y(0x10f), o);
const AppError_1 = __importDefault(require(x(0x108) + y(0xf2) + 'r')), Contact_1 = __importDefault(require(y(0xf1) + y(0xe4))), ContactTag_1 = __importDefault(require(y(0xf1) + y(0xe4) + y(0xe9))), UpdateContactService = async ({
        tags: h,
        contactId: i,
        tenantId: j
    }) => {
        const A = x, B = y, k = {};
        k[A(0x102)] = A(0x109), k[A(0xee)] = B(0xf9), k[A(0xe1)] = A(0x110), k[A(0xf3)] = A(0xf6) + B(0xef), k[B(0xff)] = A(0xe2), k[B(0x105)] = B(0xe7), k[B(0xf5)] = B(0xfe), k[A(0xf4)] = A(0xdc) + B(0xfc);
        const l = k, m = {};
        m[B(0xe3)] = j, m[A(0x104)] = i;
        const n = {};
        n[A(0x10d)] = m, await ContactTag_1[B(0xec)][A(0x103)](n);
        const p = [];
        h[A(0xfd)](t => {
            const C = B, D = A, u = {};
            u[C(0xf0)] = !t['id'] ? t : t['id'], u[D(0x104)] = i, u[D(0xe3)] = j, p[C(0x100)](u);
        }), await ContactTag_1[A(0xec)][A(0xdd)](p);
        const q = {};
        q['id'] = i, q[A(0xe3)] = j;
        const r = {};
        r[A(0x10d)] = q, r[B(0xdf)] = [
            'id',
            l[B(0x102)],
            l[B(0xee)],
            l[B(0xe1)],
            l[B(0xf3)]
        ], r[B(0xfb)] = [
            l[B(0xff)],
            l[A(0x105)],
            {
                'association': l[A(0xf5)],
                'attributes': [
                    'id',
                    l[A(0x102)]
                ]
            }
        ];
        const s = await Contact_1[A(0xec)][B(0xea)](r);
        if (!s)
            throw new AppError_1[(B(0xec))](l[A(0xf4)], -0x2543 + -0x2 * -0x1055 + 0x62d);
        return s;
    };
exports[x(0xec)] = UpdateContactService;