'use strict';
const z = b, A = b;
(function (c, d) {
    const x = b, y = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(x(0xc0)) / (-0xc2f + 0x19d3 + -0xda3) * (parseInt(y(0xb4)) / (0x657 * 0x5 + 0x829 * 0x2 + 0x2d3 * -0x11)) + -parseInt(y(0xc4)) / (-0x269f + -0x1c * -0xf4 + -0xb * -0x116) + parseInt(x(0xc5)) / (0xf4e * 0x1 + 0xce * 0x13 + -0x1e94) * (parseInt(x(0xa4)) / (-0x3b + -0x9 * -0x2f4 + -0x695 * 0x4)) + -parseInt(x(0x90)) / (-0x463 * 0x1 + 0x14 * -0x29 + -0x1 * -0x79d) * (-parseInt(x(0xb9)) / (-0x1536 + 0x40d * -0x4 + 0x2571)) + -parseInt(y(0xb0)) / (0x2 * 0x236 + 0x2 * -0x1247 + 0x2 * 0x1015) * (-parseInt(y(0xc3)) / (0x16cc + 0x1bc8 + -0x328b)) + -parseInt(x(0xbc)) / (-0xfa * 0xa + 0x62 * -0x61 + 0x2ef0) + parseInt(x(0xc7)) / (-0x122a + -0x167 + -0xfb * -0x14) * (-parseInt(x(0xa8)) / (-0x20ee * 0x1 + -0x2 * 0x7aa + 0x304e));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x7 * 0x1c8fe + -0x7ce81 * -0x2 + 0x13c * -0xd8d));
function a() {
    const E = [
        'fornecidos',
        'warn',
        'Tickets\x20ap',
        '948mGzCVO',
        'defineProp',
        'Nenhum\x20tic',
        '999Z',
        'Data\x20invál',
        'message',
        'createdAt',
        'Erro\x20ao\x20ap',
        'ls/Ticket',
        'ket\x20encont',
        'where',
        'htoJl',
        'agar\x20ticke',
        'T23:59:59.',
        'whatsappId',
        'bzbFd',
        'lte',
        '000Z',
        'erty',
        's\x20filtros\x20',
        '37715RxLndh',
        'ida\x20fornec',
        'sequelize',
        'qEFSo',
        '12JMYuuk',
        'destroy',
        'ts:\x20',
        'gte',
        '__importDe',
        '../../mode',
        'value',
        'isGroup',
        '88slTHaR',
        'Service',
        'error',
        'ida:\x20',
        '10ezveva',
        'log',
        'T00:00:00.',
        'TSKtH',
        'rado\x20com\x20o',
        '51072wyGnFw',
        'jUacB',
        'and',
        '3348360HjZcsG',
        'delTickets',
        'deletedCou',
        'status',
        '283806GHbRkt',
        '__esModule',
        'default',
        '667989RrtmdP',
        '502371gQSrnx',
        '308fusMjE',
        'fTIDW',
        '29928657kRuMpV',
        '\x20ou\x20',
        'agados',
        'getTime',
        'fault'
    ];
    a = function () {
        return E;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x272 * 0x8 + 0x185c + -0x442);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[z(0xac) + A(0x8c)] || function (c) {
    const B = A;
    return c && c[B(0xc1)] ? c : { 'default': c };
};
const k = {};
k[z(0xae)] = !![], Object[z(0x91) + z(0xa2)](exports, z(0xc1), k), exports[A(0xbd) + A(0xb1)] = void (0xdd + -0x236b * -0x1 + -0x2448);
const sequelize_1 = require(A(0xa6)), Ticket_1 = __importDefault(require(A(0xad) + z(0x98))), delTicketsService = async ({
        status: h,
        startDate: i,
        endDate: j,
        whatsappId: l,
        isGroup: m
    }) => {
        const C = z, D = z, n = {
                'jUacB': function (o, p) {
                    return o(p);
                },
                'htoJl': function (o, p) {
                    return o(p);
                },
                'qEFSo': C(0x8f) + D(0x8a),
                'bzbFd': function (o, p) {
                    return o === p;
                },
                'fTIDW': D(0x92) + C(0x99) + C(0xb8) + C(0xa3) + C(0x8d),
                'TSKtH': C(0x97) + C(0x9c) + 'ts'
            };
        try {
            const o = new Date(i + (C(0xb6) + C(0xa1))), p = new Date(j + (C(0x9d) + D(0x93)));
            if (n[C(0xba)](isNaN, o[D(0x8b)]()) || n[D(0x9b)](isNaN, p[D(0x8b)]()))
                throw new Error(D(0x94) + D(0xa5) + C(0xb3) + i + D(0xc8) + j);
            const q = {
                    [sequelize_1['Op'][C(0xbb)]]: {
                        [sequelize_1['Op'][D(0xab)]]: o,
                        [sequelize_1['Op'][C(0xa0)]]: p
                    }
                }, r = {};
            r[D(0xbf)] = h, r[C(0x96)] = q, r[D(0x9e)] = l, r[D(0xaf)] = m;
            const s = {};
            s[C(0x9a)] = r;
            const t = await Ticket_1[C(0xc2)][C(0xa9)](s), u = {};
            u[D(0xbe) + 'nt'] = t, console[C(0xb5)](n[D(0xa7)], u), n[C(0x9f)](t, 0x587 * 0x2 + -0x702 + -0x40c) && console[D(0x8e)](n[D(0xc6)]);
        } catch (v) {
            const w = {};
            w[D(0xb2)] = v, console[D(0xb2)](n[C(0xb7)], w);
            throw new Error(C(0x97) + D(0x9c) + D(0xaa) + v[D(0x95)]);
        }
    };
exports[A(0xbd) + A(0xb1)] = delTicketsService;