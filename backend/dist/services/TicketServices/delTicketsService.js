'use strict';
const B = b, C = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x4 * 0x76 + 0x59c + -0x2 * 0x13d);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const z = b, A = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(z(0x158)) / (-0xa * 0x343 + -0x15 * -0x7b + 0x1688) + parseInt(z(0x14a)) / (0x749 * -0x5 + 0x7 * -0x4a2 + 0x44dd) * (parseInt(A(0x163)) / (-0xefe + -0x96 * -0x18 + 0xf1)) + -parseInt(A(0x159)) / (-0x8ab * 0x4 + 0x5a2 + 0x2 * 0xe87) + -parseInt(A(0x14c)) / (0xf71 + -0x4c1 + -0xaab) + -parseInt(z(0x169)) / (-0x9 * -0x345 + 0xed + -0x1e54) * (parseInt(z(0x155)) / (-0x14 * -0xf3 + 0x1dc2 + 0x103d * -0x3)) + parseInt(z(0x174)) / (-0x1d1d + -0x1 * -0x99e + 0x1387) + parseInt(z(0x179)) / (0x17a2 + -0x1 * 0x1fff + -0x1 * -0x866) * (parseInt(z(0x16b)) / (-0x8f5 + 0x29 * 0x1a + -0x4d5 * -0x1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xddcba + -0x77d84 + -0x16dc6 * -0x1));
var __importDefault = this && this[B(0x16d) + C(0x157)] || function (c) {
    const D = B;
    return c && c[D(0x176)] ? c : { 'default': c };
};
const k = {};
function a() {
    const G = [
        'delTickets',
        'warn',
        '18189mgnbgQ',
        's\x20filtros\x20',
        'getTime',
        'status',
        'MrXZF',
        'ket\x20encont',
        'isGroup',
        'Tickets\x20ap',
        '6Qgwexv',
        'Erro\x20ao\x20ap',
        '1323575IVAlOK',
        'where',
        'ts:\x20',
        'Service',
        'agar\x20ticke',
        'whatsappId',
        'Nenhum\x20tic',
        'message',
        'coUdg',
        '6223378jVHZPI',
        'Data\x20invál',
        'fault',
        '521370wNfWov',
        '1585052hsizJS',
        'deletedCou',
        'agados',
        'value',
        '../../mode',
        'default',
        'ida\x20fornec',
        'KDTXI',
        'fornecidos',
        'between',
        '389745PLoeVj',
        'destroy',
        'rado\x20com\x20o',
        'ls/Ticket',
        'error',
        'CUryZ',
        '6PYRDzz',
        'sequelize',
        '6940HWGNax',
        'defineProp',
        '__importDe',
        'setHours',
        '\x20ou\x20',
        'ida:\x20',
        'dAUGE',
        'createdAt',
        'erty',
        '6322488zRLbYB',
        'log',
        '__esModule'
    ];
    a = function () {
        return G;
    };
    return a();
}
k[B(0x15c)] = !![], Object[B(0x16c) + C(0x173)](exports, C(0x176), k), exports[B(0x177) + B(0x14f)] = void (-0x118c + -0x3 * 0x29b + 0x195d);
const sequelize_1 = require(C(0x16a)), Ticket_1 = __importDefault(require(B(0x15d) + B(0x166))), delTicketsService = async ({
        status: h,
        startDate: i,
        endDate: j,
        whatsappId: l,
        isGroup: m
    }) => {
        const E = C, F = C, n = {
                'MrXZF': function (o, p) {
                    return o(p);
                },
                'dAUGE': E(0x180) + F(0x15b),
                'coUdg': function (o, p) {
                    return o === p;
                },
                'CUryZ': F(0x152) + F(0x17e) + E(0x165) + E(0x17a) + F(0x161),
                'KDTXI': F(0x14b) + E(0x150) + 'ts'
            };
        try {
            const o = new Date(i), p = new Date(j);
            if (n[E(0x17d)](isNaN, o[E(0x17b)]()) || n[E(0x17d)](isNaN, p[F(0x17b)]()))
                throw new Error(F(0x156) + F(0x15f) + E(0x170) + i + F(0x16f) + j);
            p[F(0x16e)](0x108e + -0x1fe * -0x5 + -0x549 * 0x5, 0x1 * -0x25f1 + 0xa1f * 0x1 + -0x1 * -0x1c0d, 0x6c4 + 0xc2 + -0x74b, 0x1646 * 0x1 + 0x24e5 + -0x3744);
            const q = o[F(0x17b)](), r = p[E(0x17b)](), s = {
                    [sequelize_1['Op'][E(0x162)]]: [
                        q,
                        r
                    ]
                }, t = {};
            t[F(0x17c)] = h, t[E(0x172)] = s, t[F(0x151)] = l, t[E(0x17f)] = m;
            const u = {};
            u[F(0x14d)] = t;
            const v = await Ticket_1[E(0x15e)][E(0x164)](u), w = {};
            w[E(0x15a) + 'nt'] = v, console[F(0x175)](n[E(0x171)], w), n[F(0x154)](v, 0x101f * 0x2 + -0x22f5 + 0x2b7) && console[F(0x178)](n[E(0x168)]);
        } catch (x) {
            const y = {};
            y[E(0x167)] = x, console[E(0x167)](n[E(0x160)], y);
            throw new Error(F(0x14b) + F(0x150) + E(0x14e) + x[E(0x153)]);
        }
    };
exports[C(0x177) + C(0x14f)] = delTicketsService;