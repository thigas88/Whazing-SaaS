'use strict';
const v = b, w = b;
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(t(0x104)) / (0x12 * 0xd4 + 0xfd * -0x1d + 0xdc2) + parseInt(u(0xff)) / (0x1 * 0x1619 + 0x11a5 * -0x1 + -0x472) + -parseInt(u(0x10e)) / (-0x1 * -0x167b + -0x3a9 * 0x8 + 0x6d0) + -parseInt(u(0x117)) / (-0x61a + 0x3d * 0x77 + 0x163d * -0x1) * (parseInt(t(0x11b)) / (0x1167 + -0x861 + -0x901 * 0x1)) + parseInt(u(0xf8)) / (-0x23e4 + -0x1 * 0x1625 + 0x3a0f) + -parseInt(t(0x106)) / (-0x1 * 0x2203 + 0x7d0 + 0x1a3a) * (-parseInt(t(0x118)) / (0x4 * -0x2e9 + 0x20c * -0xe + 0x59 * 0x74)) + -parseInt(t(0x10c)) / (0x75e + 0x9 * -0x83 + -0x2ba) * (parseInt(u(0xfa)) / (0xce0 + -0x3 * 0x7f6 + 0xb0c));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x233 * -0x5e3 + 0x25538 + -0x7bd00));
function a() {
    const A = [
        'fault',
        'yFqhB',
        'ls/Contact',
        '../../mode',
        'MLGmK',
        'defineProp',
        '5596848TujQLr',
        'rs/AppErro',
        '1390lnYMHz',
        'tenantId',
        'contact',
        'nUSOP',
        'whatsapp',
        '1309030EvHqLv',
        'value',
        'associatio',
        'KET_FOUND',
        'name',
        '265674qfuniN',
        'include',
        '9107DpXjcn',
        'wallets',
        '__importDe',
        'cJtfK',
        '__esModule',
        'findByPk',
        '79038sneRnA',
        'erty',
        '904056VvrItS',
        'ghFAD',
        'attributes',
        'isDeleted',
        'user',
        '../../erro',
        'extraInfo',
        'ls/Ticket',
        'qMXxN',
        '3284mpEKlf',
        '1544WNydVF',
        'jyqRL',
        'ls/User',
        '535GGciYR',
        'nCCdu',
        'ERR_NO_TIC',
        'YiOTI',
        'default',
        'tags',
        'hnoKz',
        'model'
    ];
    a = function () {
        return A;
    };
    return a();
}
var __importDefault = this && this[v(0x108) + w(0x123)] || function (c) {
    const x = v;
    return c && c[x(0x10a)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xbb2 + -0x2 * 0xef1 + 0x1325);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[w(0x100)] = !![], Object[w(0xf7) + w(0x10d)](exports, v(0x10a), k);
const Ticket_1 = __importDefault(require(w(0xf5) + v(0x115))), AppError_1 = __importDefault(require(w(0x113) + v(0xf9) + 'r')), Contact_1 = __importDefault(require(v(0xf5) + w(0x125))), User_1 = __importDefault(require(w(0xf5) + w(0x11a))), ShowTicketService = async ({
        id: h,
        tenantId: i
    }) => {
        const y = v, z = w, j = {};
        j[y(0x11c)] = z(0xfc), j[y(0x124)] = z(0x114), j[z(0x116)] = y(0x120), j[z(0xf6)] = y(0x107), j[z(0xfd)] = y(0x103), j[z(0x10f)] = z(0x112), j[y(0x121)] = z(0xfe), j[y(0x119)] = y(0x111), j[z(0x11e)] = function (r, s) {
            return r !== s;
        }, j[z(0x109)] = z(0x11d) + y(0x102);
        const l = j, m = {};
        m[y(0x122)] = Contact_1[y(0x11f)], m['as'] = l[z(0x11c)], m[y(0x105)] = [
            l[z(0x124)],
            l[z(0x116)],
            {
                'association': l[y(0xf6)],
                'attributes': [
                    'id',
                    l[y(0xfd)]
                ]
            }
        ];
        const n = {};
        n[z(0x122)] = User_1[y(0x11f)], n['as'] = l[z(0x10f)], n[z(0x110)] = [
            'id',
            l[z(0xfd)]
        ];
        const o = {};
        o[y(0x101) + 'n'] = l[y(0x121)], o[z(0x110)] = [
            'id',
            l[z(0xfd)],
            l[z(0x119)]
        ];
        const p = {};
        p[z(0x105)] = [
            m,
            n,
            o
        ];
        const q = await Ticket_1[z(0x11f)][y(0x10b)](h, p);
        if (!q || l[y(0x11e)](q[z(0xfb)], i))
            throw new AppError_1[(y(0x11f))](l[z(0x109)], -0x2 * -0xc17 + 0x1 * -0x926 + -0xd74);
        return q;
    };
exports[w(0x11f)] = ShowTicketService;