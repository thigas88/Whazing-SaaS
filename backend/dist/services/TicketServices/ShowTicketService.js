'use strict';
const v = b, w = b;
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(t(0x152)) / (0x4cb * 0x5 + -0x181b + 0x1 * 0x25) * (parseInt(t(0x131)) / (-0x2274 + -0x1e8c + 0x2 * 0x2081)) + parseInt(u(0x142)) / (-0x15 * -0x1d9 + -0x15c1 + 0x59 * -0x31) + parseInt(u(0x136)) / (-0xcc5 * -0x3 + -0x22 * 0x20 + -0x220b) + parseInt(u(0x139)) / (-0x1 * -0x8e1 + -0x1b93 + 0x12b7) + -parseInt(u(0x14c)) / (-0x2 * 0xcea + -0xcd3 + -0x1 * -0x26ad) * (-parseInt(u(0x154)) / (0x1 * -0x14bb + 0x841 + 0xc81)) + -parseInt(t(0x14d)) / (0x6d * 0x4d + -0x232f + 0x26e) + -parseInt(t(0x145)) / (-0x85 * 0x43 + -0x8dd * 0x1 + 0x2bb5) * (parseInt(t(0x156)) / (-0x3 * -0x279 + 0x4 * -0x1e5 + 0x33));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x10ef5 * -0x1 + -0x27fd6 * 0x3 + -0x8 * -0x209ac));
var __importDefault = this && this[v(0x157) + w(0x14f)] || function (c) {
    const x = v;
    return c && c[x(0x14e)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1644 + -0x9e3 + -0xb3a);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
function a() {
    const A = [
        '412430AFlXWK',
        '__importDe',
        'wallets',
        'user',
        'ekHWp',
        'tags',
        'tenantId',
        'whatsapp',
        'associatio',
        'rs/AppErro',
        'isDeleted',
        'ls/Ticket',
        '2Avxmpz',
        'ls/Contact',
        'qZsyM',
        'lmEtE',
        'qxcrc',
        '1799664NIgEOu',
        'attributes',
        'KET_FOUND',
        '3718685bKrlkg',
        'erty',
        'ToLet',
        'AArLu',
        'include',
        'default',
        '../../mode',
        'model',
        '../../erro',
        '2033022LbsGuH',
        'findByPk',
        'PgHCZ',
        '378HbLaeN',
        'ERR_NO_TIC',
        'name',
        'value',
        'PIAbO',
        'extraInfo',
        'defineProp',
        '42kuwgzJ',
        '6974656ERjepR',
        '__esModule',
        'fault',
        'siWOd',
        'ls/User',
        '579673LATqdR',
        'ZdguE',
        '799393mSToVn',
        'contact'
    ];
    a = function () {
        return A;
    };
    return a();
}
k[v(0x148)] = !![], Object[v(0x14b) + w(0x13a)](exports, v(0x14e), k);
const Ticket_1 = __importDefault(require(w(0x13f) + w(0x130))), AppError_1 = __importDefault(require(w(0x141) + w(0x12e) + 'r')), Contact_1 = __importDefault(require(v(0x13f) + w(0x132))), User_1 = __importDefault(require(w(0x13f) + w(0x151))), ShowTicketService = async ({
        id: h,
        tenantId: i
    }) => {
        const y = v, z = w, j = {};
        j[y(0x149)] = y(0x155), j[z(0x13c)] = z(0x14a), j[z(0x13b)] = y(0x12a), j[z(0x153)] = y(0x127), j[y(0x135)] = y(0x147), j[y(0x129)] = z(0x128), j[z(0x134)] = z(0x12c), j[y(0x150)] = y(0x12f), j[z(0x144)] = function (r, s) {
            return r !== s;
        }, j[y(0x133)] = y(0x146) + z(0x138);
        const l = j, m = {};
        m[z(0x140)] = Contact_1[y(0x13e)], m['as'] = l[y(0x149)], m[y(0x13d)] = [
            l[z(0x13c)],
            l[y(0x13b)],
            {
                'association': l[z(0x153)],
                'attributes': [
                    'id',
                    l[z(0x135)]
                ]
            }
        ];
        const n = {};
        n[z(0x140)] = User_1[y(0x13e)], n['as'] = l[y(0x129)], n[y(0x137)] = [
            'id',
            l[y(0x135)]
        ];
        const o = {};
        o[y(0x12d) + 'n'] = l[z(0x134)], o[y(0x137)] = [
            'id',
            l[z(0x135)],
            l[z(0x150)]
        ];
        const p = {};
        p[z(0x13d)] = [
            m,
            n,
            o
        ];
        const q = await Ticket_1[z(0x13e)][z(0x143)](h, p);
        if (!q || l[y(0x144)](q[y(0x12b)], i))
            throw new AppError_1[(y(0x13e))](l[z(0x133)], 0x1ee + 0x37 * -0x3e + -0x5 * -0x298);
        return q;
    };
exports[v(0x13e)] = ShowTicketService;