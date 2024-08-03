'use strict';
const z = b, A = b;
(function (c, d) {
    const x = b, y = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(x(0x1b8)) / (0x448 + 0x5 * 0x35b + 0x62 * -0x37) + -parseInt(x(0x1cc)) / (-0x1b1f + 0xd9f * -0x1 + -0x518 * -0x8) + parseInt(y(0x1bc)) / (-0x1f82 + -0x194 + 0x2119 * 0x1) + -parseInt(y(0x1c1)) / (0x139 * -0x1d + 0x1 * 0x1dbc + 0x71 * 0xd) * (-parseInt(x(0x1d0)) / (-0x43f * -0x4 + 0x9 * -0x132 + 0x635 * -0x1)) + -parseInt(y(0x1c4)) / (-0x1 * -0x142d + 0x996 * 0x3 + 0x30e9 * -0x1) * (-parseInt(y(0x1e0)) / (0x172 + -0x1 * 0x551 + 0x3e6)) + -parseInt(y(0x1be)) / (0x7 * -0x4f2 + -0x82d * -0x3 + 0xa1f) * (-parseInt(x(0x1e3)) / (-0x1 * -0x10e7 + -0x983 + -0x10d * 0x7)) + parseInt(x(0x1d6)) / (-0x17e8 + -0x1af * -0x5 + -0x35 * -0x4b);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1519c * 0x2 + -0x807dd + 0xfdac1));
var __importDefault = this && this[z(0x1c8) + z(0x1d5)] || function (c) {
    const B = z;
    return c && c[B(0x1c9)] ? c : { 'default': c };
};
const k = {};
k[A(0x1dd)] = !![], Object[A(0x1c7) + z(0x1d8)](exports, A(0x1c9), k), exports[z(0x1e6) + z(0x1b9)] = void (-0x1aff + 0x25d8 + -0x1 * 0xad9);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * -0x6a7 + 0x53 * 0x74 + -0x1d3f);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const E = [
        'status',
        'defineProp',
        '__importDe',
        '__esModule',
        'agar\x20ticke',
        'createdAt',
        '1159372bInmjL',
        'ts:\x20',
        'PRWXm',
        'sequelize',
        '13980lzORDQ',
        'getTime',
        'KwkNf',
        'log',
        'Nenhum\x20tic',
        'fault',
        '974780hBgqID',
        'warn',
        'erty',
        'lte',
        'deletedCou',
        'T00:00:00.',
        '../../mode',
        'value',
        's\x20filtros\x20',
        'tFCqB',
        '2204699QFYOYt',
        '\x20ou\x20',
        'VEgIv',
        '486RlexFX',
        '999Z',
        'ls/Ticket',
        'delTickets',
        'isGroup',
        'default',
        '000Z',
        'and',
        'rado\x20com\x20o',
        'fornecidos',
        'HBzca',
        'where',
        'ket\x20encont',
        'Tickets\x20ap',
        'destroy',
        'ida:\x20',
        'agados',
        '617046TPaNFB',
        'Service',
        'Erro\x20ao\x20ap',
        'whatsappId',
        '1350390COdecS',
        'message',
        '25032OdqgoO',
        'ida\x20fornec',
        'error',
        '272uygFbq',
        'gte',
        'T23:59:59.',
        '12RYJbrY',
        'Data\x20invál'
    ];
    a = function () {
        return E;
    };
    return a();
}
const sequelize_1 = require(z(0x1cf)), Ticket_1 = __importDefault(require(z(0x1dc) + z(0x1e5))), delTicketsService = async ({
        status: h,
        startDate: i,
        endDate: j,
        whatsappId: l,
        isGroup: m
    }) => {
        const C = z, D = z, n = {
                'VEgIv': function (o, p) {
                    return o(p);
                },
                'HBzca': C(0x1f0) + D(0x1b7),
                'tFCqB': function (o, p) {
                    return o === p;
                },
                'PRWXm': C(0x1d4) + D(0x1ef) + C(0x1eb) + D(0x1de) + D(0x1ec),
                'KwkNf': C(0x1ba) + C(0x1ca) + 'ts'
            };
        try {
            const o = new Date(i + (C(0x1db) + C(0x1e9))), p = new Date(j + (C(0x1c3) + D(0x1e4)));
            if (n[C(0x1e2)](isNaN, o[C(0x1d1)]()) || n[C(0x1e2)](isNaN, p[C(0x1d1)]()))
                throw new Error(C(0x1c5) + C(0x1bf) + C(0x1b6) + i + C(0x1e1) + j);
            const q = {
                    [sequelize_1['Op'][C(0x1ea)]]: {
                        [sequelize_1['Op'][D(0x1c2)]]: o,
                        [sequelize_1['Op'][C(0x1d9)]]: p
                    }
                }, r = {};
            r[C(0x1c6)] = h, r[D(0x1cb)] = q, r[C(0x1bb)] = l, r[C(0x1e7)] = m;
            const s = {};
            s[C(0x1ee)] = r;
            const t = await Ticket_1[C(0x1e8)][C(0x1f1)](s), u = {};
            u[D(0x1da) + 'nt'] = t, console[C(0x1d3)](n[C(0x1ed)], u), n[D(0x1df)](t, -0x20d5 + 0x115 * 0x1f + -0xe * 0xd) && console[C(0x1d7)](n[D(0x1ce)]);
        } catch (v) {
            const w = {};
            w[C(0x1c0)] = v, console[D(0x1c0)](n[D(0x1d2)], w);
            throw new Error(C(0x1ba) + C(0x1ca) + D(0x1cd) + v[C(0x1bd)]);
        }
    };
exports[z(0x1e6) + z(0x1b9)] = delTicketsService;