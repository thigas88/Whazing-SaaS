'use strict';
const v = b, w = b;
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(t(0x207)) / (0xba2 + -0x4c3 + -0x6de) * (-parseInt(t(0x1e7)) / (-0x188d * -0x1 + -0x2209 + 0x87 * 0x12)) + -parseInt(t(0x1fa)) / (0x2ae * 0x9 + -0x2495 + -0x63d * -0x2) + -parseInt(u(0x1f7)) / (-0x361 * 0x4 + -0x1750 + 0x24d8) * (parseInt(t(0x1f0)) / (0x16e6 + -0x1b * 0x20 + -0x1381)) + -parseInt(u(0x1d5)) / (0x4 * -0x7a + 0x189b + -0x16ad) * (parseInt(t(0x1ea)) / (-0x2a5 * -0x1 + -0xf39 + -0x7 * -0x1cd)) + parseInt(u(0x1ed)) / (-0x4 * -0x283 + -0x1cfe + 0x12fa) + parseInt(u(0x1ff)) / (-0x16a * -0x1b + -0xb7d * -0x1 + 0x18d1 * -0x2) * (-parseInt(u(0x1e0)) / (0x4f2 + -0x225d + 0x1d75)) + -parseInt(u(0x1f9)) / (0x32b * 0x4 + -0x2084 + 0x13e3) * (-parseInt(u(0x1f5)) / (0x25b9 + -0x1bb + -0x23f2));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x6fb4d + -0x130ac1 + 0x17e4b2));
var __importDefault = this && this[v(0x1f3) + w(0x1d8)] || function (c) {
    const x = w;
    return c && c[x(0x1e1)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xec3 + -0x1 * -0x1cc9 + 0x2 * -0x619);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
function a() {
    const A = [
        'hIVEc',
        'fault',
        'defineProp',
        '../../mode',
        'include',
        'OXhbh',
        'erty',
        'eoYuC',
        'ERR_NO_TIC',
        '829270ZctFZS',
        '__esModule',
        'ICyDd',
        'attributes',
        'CokKC',
        '../../erro',
        'value',
        '256218feUHsp',
        'JHUwN',
        'ls/Ticket',
        '1388471mAzTqu',
        'model',
        'wallets',
        '5418128TGaPoS',
        'extraInfo',
        'tenantId',
        '10wSjIGl',
        'ls/Contact',
        'tags',
        '__importDe',
        'ls/User',
        '12Vyrgdz',
        'user',
        '165320MiUsDr',
        'default',
        '30927523DAagzj',
        '914037BDCwNb',
        'mCvcg',
        'whatsapp',
        'ZvJUP',
        'name',
        '117ifecFf',
        'rs/AppErro',
        'associatio',
        'xmORS',
        'color',
        'KET_FOUND',
        'JwSBe',
        'findByPk',
        '2zngEjN',
        'isDeleted',
        'PPFvm',
        '30xcFKHq',
        'contact'
    ];
    a = function () {
        return A;
    };
    return a();
}
k[v(0x1e6)] = !![], Object[v(0x1d9) + v(0x1dd)](exports, w(0x1e1), k);
const Ticket_1 = __importDefault(require(v(0x1da) + w(0x1e9))), AppError_1 = __importDefault(require(v(0x1e5) + w(0x200) + 'r')), Contact_1 = __importDefault(require(v(0x1da) + v(0x1f1))), User_1 = __importDefault(require(v(0x1da) + v(0x1f4))), ShowTicketService = async ({
        id: h,
        tenantId: i
    }) => {
        const y = v, z = w, j = {};
        j[y(0x1de)] = y(0x1d6), j[y(0x1d7)] = z(0x1ee), j[y(0x1e8)] = y(0x1f2), j[z(0x1d4)] = z(0x1ec), j[z(0x202)] = z(0x1fe), j[y(0x1e4)] = z(0x1f6), j[y(0x1e2)] = z(0x1fc), j[y(0x205)] = y(0x208), j[y(0x1dc)] = y(0x203), j[z(0x1fb)] = function (r, s) {
            return r !== s;
        }, j[z(0x1fd)] = z(0x1df) + z(0x204);
        const l = j, m = {};
        m[z(0x1eb)] = Contact_1[z(0x1f8)], m['as'] = l[z(0x1de)], m[y(0x1db)] = [
            l[y(0x1d7)],
            l[z(0x1e8)],
            {
                'association': l[z(0x1d4)],
                'attributes': [
                    'id',
                    l[y(0x202)]
                ]
            }
        ];
        const n = {};
        n[z(0x1eb)] = User_1[y(0x1f8)], n['as'] = l[z(0x1e4)], n[z(0x1e3)] = [
            'id',
            l[y(0x202)]
        ];
        const o = {};
        o[y(0x201) + 'n'] = l[z(0x1e2)], o[z(0x1e3)] = [
            'id',
            l[z(0x202)],
            l[y(0x205)],
            l[y(0x1dc)]
        ];
        const p = {};
        p[z(0x1db)] = [
            m,
            n,
            o
        ];
        const q = await Ticket_1[z(0x1f8)][y(0x206)](h, p);
        if (!q || l[y(0x1fb)](q[y(0x1ef)], i))
            throw new AppError_1[(z(0x1f8))](l[z(0x1fd)], 0x1 * 0xc8b + -0x35 * -0x41 + -0x186c);
        return q;
    };
exports[w(0x1f8)] = ShowTicketService;