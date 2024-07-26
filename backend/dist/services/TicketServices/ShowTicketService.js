'use strict';
const v = b, w = b;
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(t(0x168)) / (0x22f6 + -0x37 * -0x13 + -0x270a) * (parseInt(u(0x173)) / (0x126 + -0x29b + 0x177)) + parseInt(t(0x167)) / (0x1b2d + 0x8d1 + -0x1 * 0x23fb) + parseInt(u(0x186)) / (-0x1bbe + -0x2138 + -0x3cfa * -0x1) * (parseInt(t(0x164)) / (0x690 + -0x12ac + -0xcf * -0xf)) + parseInt(u(0x187)) / (-0xe * -0x13f + 0x8a9 + -0x1a15) * (parseInt(u(0x16f)) / (0x7cd + 0x248f + -0xd * 0x369)) + parseInt(t(0x188)) / (-0xa0 + 0x15 * -0x5b + -0x2b5 * -0x3) + parseInt(t(0x177)) / (0xb * 0x1ef + -0x123e * -0x1 + 0xa3 * -0x3e) + -parseInt(u(0x15d)) / (0x4 * -0x75c + -0x260c + 0x4386);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x25836 * 0x8 + 0x122993 + -0x173fa4));
function a() {
    const A = [
        'qDnsi',
        'associatio',
        'erty',
        'extraInfo',
        'user',
        '4zeQsSd',
        '6kPNPWR',
        '11149328PHIUIt',
        'tenantId',
        'eqEVM',
        '../../mode',
        'KET_FOUND',
        'cSuJy',
        '23528020JTQUFc',
        'include',
        'ORvAt',
        'EtnzX',
        'spEpz',
        'value',
        'tags',
        '992710SoPqSk',
        '../../erro',
        'model',
        '5343531EFEiDT',
        '1TCfyHs',
        'ls/Contact',
        'fault',
        'isDeleted',
        'HwkoE',
        '__importDe',
        'whatsapp',
        '883071factOR',
        'ls/Ticket',
        'name',
        'findByPk',
        '2652548lCVyWj',
        'wallets',
        'ERR_NO_TIC',
        'ls/User',
        '9678969zmPQSu',
        '__esModule',
        'rs/AppErro',
        'attributes',
        'CGGPp',
        'default',
        'contact',
        'defineProp',
        'lKGVT',
        'YxYYl'
    ];
    a = function () {
        return A;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x15a * -0x12 + -0x922 * -0x3 + 0x325d * -0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[v(0x16d) + v(0x16a)] || function (c) {
    const x = w;
    return c && c[x(0x178)] ? c : { 'default': c };
};
const k = {};
k[v(0x162)] = !![], Object[v(0x17e) + w(0x183)](exports, w(0x178), k);
const Ticket_1 = __importDefault(require(v(0x18b) + w(0x170))), AppError_1 = __importDefault(require(v(0x165) + w(0x179) + 'r')), Contact_1 = __importDefault(require(w(0x18b) + w(0x169))), User_1 = __importDefault(require(v(0x18b) + v(0x176))), ShowTicketService = async ({
        id: h,
        tenantId: i
    }) => {
        const y = w, z = v, j = {};
        j[y(0x16c)] = z(0x17d), j[z(0x15f)] = y(0x184), j[y(0x17b)] = z(0x163), j[z(0x180)] = y(0x174), j[y(0x17f)] = y(0x171), j[y(0x160)] = z(0x185), j[z(0x181)] = y(0x16e), j[z(0x18a)] = z(0x16b), j[z(0x18d)] = function (r, s) {
            return r !== s;
        }, j[y(0x161)] = y(0x175) + y(0x18c);
        const l = j, m = {};
        m[y(0x166)] = Contact_1[z(0x17c)], m['as'] = l[z(0x16c)], m[y(0x15e)] = [
            l[z(0x15f)],
            l[y(0x17b)],
            {
                'association': l[z(0x180)],
                'attributes': [
                    'id',
                    l[z(0x17f)]
                ]
            }
        ];
        const n = {};
        n[y(0x166)] = User_1[y(0x17c)], n['as'] = l[y(0x160)], n[z(0x17a)] = [
            'id',
            l[y(0x17f)]
        ];
        const o = {};
        o[y(0x182) + 'n'] = l[z(0x181)], o[z(0x17a)] = [
            'id',
            l[z(0x17f)],
            l[y(0x18a)]
        ];
        const p = {};
        p[y(0x15e)] = [
            m,
            n,
            o
        ];
        const q = await Ticket_1[z(0x17c)][y(0x172)](h, p);
        if (!q || l[z(0x18d)](q[y(0x189)], i))
            throw new AppError_1[(z(0x17c))](l[z(0x161)], 0x2 * 0x1058 + 0x2059 + -0x3f75);
        return q;
    };
exports[v(0x17c)] = ShowTicketService;