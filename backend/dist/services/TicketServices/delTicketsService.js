'use strict';
function a() {
    const E = [
        '__importDe',
        'defineProp',
        's\x20filtros\x20',
        '222624zJIsLo',
        'destroy',
        'rado\x20com\x20o',
        'warn',
        '__esModule',
        'fHIFn',
        'Data\x20invál',
        '999Z',
        'agados',
        'Tickets\x20ap',
        'ls/Ticket',
        'error',
        'where',
        'createdAt',
        'deletedCou',
        'default',
        '6NwGVqi',
        'fornecidos',
        'agar\x20ticke',
        'ieBii',
        'delTickets',
        'isGroup',
        'Mricg',
        'ket\x20encont',
        'and',
        'getTime',
        '32LSIvhY',
        'T00:00:00.',
        'message',
        '\x20ou\x20',
        'nuEwS',
        'gte',
        '000Z',
        '529850FtLtav',
        '../../mode',
        'ts:\x20',
        '849028wGiahT',
        'Service',
        'fault',
        '469592veXDAO',
        'lte',
        'value',
        'bpndW',
        'T23:59:59.',
        'log',
        'erty',
        '2256394KRkUPS',
        '146088BRBgKo',
        'ida:\x20',
        'Nenhum\x20tic',
        'status',
        'ida\x20fornec',
        '1124856kLcEtv',
        'Erro\x20ao\x20ap',
        'whatsappId',
        'sequelize'
    ];
    a = function () {
        return E;
    };
    return a();
}
const z = b, A = b;
(function (c, d) {
    const x = b, y = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(x(0x200)) / (-0x383 * 0x1 + -0x2524 + 0x28a8) + parseInt(y(0x227)) / (-0x19e0 + 0x2394 + -0x9b2) + -parseInt(y(0x1f9)) / (0x1 * -0xcf2 + 0x9 * 0x3b1 + -0x1444) + parseInt(y(0x224)) / (-0x1 * 0x23da + 0x20c2 + 0x31c) + parseInt(y(0x221)) / (0x7f * -0xd + 0xa1f + -0x3a7) + parseInt(y(0x210)) / (-0x13 * 0x51 + 0xc3c + -0x633) * (parseInt(y(0x1f3)) / (0x1 * 0x2126 + 0x22cc + -0x43eb * 0x1)) + parseInt(x(0x21a)) / (-0x1fe0 + -0x1e38 + 0x3e20) * (-parseInt(x(0x1f4)) / (-0xd6c * -0x1 + -0xc * -0x2b9 + -0x2e0f));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1aa6 * 0x7 + 0x1 * 0x5a0d6 + -0x1a6cf));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x969 + 0x1 * 0x19d3 + -0x2149);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[z(0x1fd) + z(0x226)] || function (c) {
    const B = z;
    return c && c[B(0x204)] ? c : { 'default': c };
};
const k = {};
k[A(0x229)] = !![], Object[z(0x1fe) + z(0x22d)](exports, A(0x204), k), exports[A(0x214) + z(0x225)] = void (-0xd + -0x25a2 + 0xb * 0x36d);
const sequelize_1 = require(z(0x1fc)), Ticket_1 = __importDefault(require(z(0x222) + A(0x20a))), delTicketsService = async ({
        status: h,
        startDate: i,
        endDate: j,
        whatsappId: l,
        isGroup: m
    }) => {
        const C = A, D = z, n = {
                'fHIFn': function (o, p) {
                    return o(p);
                },
                'nuEwS': C(0x209) + D(0x208),
                'bpndW': function (o, p) {
                    return o === p;
                },
                'ieBii': D(0x1f6) + D(0x217) + D(0x202) + D(0x1ff) + D(0x211),
                'Mricg': C(0x1fa) + D(0x212) + 'ts'
            };
        try {
            const o = new Date(i + (C(0x21b) + C(0x220))), p = new Date(j + (C(0x22b) + D(0x207)));
            if (n[C(0x205)](isNaN, o[D(0x219)]()) || n[D(0x205)](isNaN, p[D(0x219)]()))
                throw new Error(D(0x206) + D(0x1f8) + D(0x1f5) + i + D(0x21d) + j);
            const q = {
                    [sequelize_1['Op'][C(0x218)]]: {
                        [sequelize_1['Op'][C(0x21f)]]: o,
                        [sequelize_1['Op'][C(0x228)]]: p
                    }
                }, r = {};
            r[D(0x1f7)] = h, r[D(0x20d)] = q, r[C(0x1fb)] = l, r[D(0x215)] = m;
            const s = {};
            s[C(0x20c)] = r;
            const t = await Ticket_1[D(0x20f)][D(0x201)](s), u = {};
            u[D(0x20e) + 'nt'] = t, console[C(0x22c)](n[D(0x21e)], u), n[C(0x22a)](t, -0x22d * 0x7 + 0x1951 * -0x1 + 0x288c) && console[D(0x203)](n[D(0x213)]);
        } catch (v) {
            const w = {};
            w[C(0x20b)] = v, console[D(0x20b)](n[D(0x216)], w);
            throw new Error(C(0x1fa) + D(0x212) + C(0x223) + v[D(0x21c)]);
        }
    };
exports[A(0x214) + A(0x225)] = delTicketsService;