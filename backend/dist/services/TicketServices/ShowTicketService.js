'use strict';
const v = b, w = b;
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(t(0x114)) / (0x2662 + -0xc5 * -0x1f + -0x4 * 0xf8f) * (-parseInt(t(0x11d)) / (0x1 * 0xd49 + 0x52 * -0x4 + -0x1 * 0xbff)) + -parseInt(t(0x137)) / (-0x1f0c + 0x208 * 0x3 + 0x18f7) * (-parseInt(t(0x133)) / (0xe04 + 0xc * -0x286 + -0x1 * -0x1048)) + parseInt(t(0x13b)) / (0x5 * 0x1a5 + 0x23db + -0x2c0f * 0x1) + -parseInt(t(0x135)) / (0x6a * 0x4d + -0x869 * -0x2 + -0x30ae) * (parseInt(t(0x128)) / (-0x2 * -0x10de + -0x1ed7 * -0x1 + -0x408c)) + parseInt(u(0x131)) / (0x214e + 0x266e + -0x47b4) + parseInt(u(0x11f)) / (0x2 * 0x405 + 0x2 * 0x94f + 0x2f * -0x91) + -parseInt(u(0x12e)) / (-0x23c * 0xf + 0x209c + 0xf2) * (parseInt(t(0x11a)) / (-0x1 * 0x1953 + -0x18c7 + -0x48f * -0xb));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x161577 + 0x858ce + 0x44d * 0x63f));
var __importDefault = this && this[v(0x12d) + v(0x116)] || function (c) {
    const x = v;
    return c && c[x(0x13f)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * -0x19eb + -0x2340 + 0xa68);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[w(0x11c)] = !![], Object[v(0x141) + v(0x134)](exports, v(0x13f), k);
function a() {
    const A = [
        'WDSWh',
        'value',
        '2eQMNWQ',
        'associatio',
        '1258767xEOPNF',
        '../../mode',
        'tenantId',
        'NmGZH',
        'whatsapp',
        'KET_FOUND',
        'VPbFj',
        'user',
        'include',
        '8944831RpCEZJ',
        'name',
        'model',
        'default',
        'MlhGa',
        '__importDe',
        '10kjrmvr',
        'hPjxV',
        '../../erro',
        '1787088PeZsXG',
        'ERR_NO_TIC',
        '4eInUej',
        'erty',
        '6IYDLzO',
        'rs/AppErro',
        '3255159xMWdvu',
        'VPVQJ',
        'ls/Contact',
        'findByPk',
        '3171265UCgWPO',
        'SBgwC',
        'extraInfo',
        'wallets',
        '__esModule',
        'ls/User',
        'defineProp',
        'ls/Ticket',
        'tags',
        'oJVva',
        'isDeleted',
        '1576793sMKwgC',
        'wCnlP',
        'fault',
        'contact',
        'hktuz',
        'attributes',
        '16734091mKiTlZ'
    ];
    a = function () {
        return A;
    };
    return a();
}
const Ticket_1 = __importDefault(require(w(0x120) + w(0x142))), AppError_1 = __importDefault(require(v(0x130) + w(0x136) + 'r')), Contact_1 = __importDefault(require(v(0x120) + v(0x139))), User_1 = __importDefault(require(w(0x120) + v(0x140))), ShowTicketService = async ({
        id: h,
        tenantId: i
    }) => {
        const y = v, z = v, j = {};
        j[y(0x12f)] = y(0x117), j[z(0x115)] = y(0x13d), j[y(0x125)] = y(0x143), j[y(0x13c)] = y(0x13e), j[y(0x12c)] = z(0x129), j[z(0x138)] = z(0x126), j[z(0x122)] = z(0x123), j[z(0x118)] = y(0x113), j[z(0x144)] = function (r, s) {
            return r !== s;
        }, j[y(0x11b)] = y(0x132) + y(0x124);
        const l = j, m = {};
        m[y(0x12a)] = Contact_1[y(0x12b)], m['as'] = l[z(0x12f)], m[y(0x127)] = [
            l[z(0x115)],
            l[z(0x125)],
            {
                'association': l[y(0x13c)],
                'attributes': [
                    'id',
                    l[z(0x12c)]
                ]
            }
        ];
        const n = {};
        n[y(0x12a)] = User_1[y(0x12b)], n['as'] = l[y(0x138)], n[y(0x119)] = [
            'id',
            l[z(0x12c)]
        ];
        const o = {};
        o[z(0x11e) + 'n'] = l[z(0x122)], o[z(0x119)] = [
            'id',
            l[y(0x12c)],
            l[y(0x118)]
        ];
        const p = {};
        p[y(0x127)] = [
            m,
            n,
            o
        ];
        const q = await Ticket_1[y(0x12b)][y(0x13a)](h, p);
        if (!q || l[z(0x144)](q[y(0x121)], i))
            throw new AppError_1[(y(0x12b))](l[y(0x11b)], -0x2 * -0x2e4 + 0x1b6f * -0x1 + -0x139 * -0x13);
        return q;
    };
exports[w(0x12b)] = ShowTicketService;