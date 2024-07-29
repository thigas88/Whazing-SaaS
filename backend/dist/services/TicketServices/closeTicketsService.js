'use strict';
const J = b, K = b;
(function (c, d) {
    const H = b, I = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(H(0xf9)) / (0x198a + -0x18f1 * 0x1 + -0x98) * (-parseInt(I(0x130)) / (0x5 * -0x679 + -0x2260 + 0x42bf)) + -parseInt(H(0x10c)) / (0xd * 0x14a + 0x2012 + 0x1 * -0x30d1) * (-parseInt(H(0xf6)) / (0x1d97 * -0x1 + -0x1d2e + 0x3ac9)) + -parseInt(I(0x114)) / (-0x1383 + 0x9d9 + 0x9af) + parseInt(H(0x115)) / (-0xbb + -0x1fec + -0x7 * -0x4ab) + -parseInt(H(0xfa)) / (0x2e1 * 0x5 + -0x1657 + 0x7f9) + -parseInt(H(0x113)) / (-0x3 * 0x58a + -0xde * 0x27 + 0x3278) * (-parseInt(I(0x120)) / (0x71 * 0xb + -0x1528 + 0x22 * 0x7b)) + parseInt(I(0x110)) / (-0x12ac + 0xdb8 + 0x4fe) * (parseInt(H(0x148)) / (-0x1cfc + -0x1554 + -0x1 * -0x325b));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1d84 * -0x48 + -0x670c9 * 0x1 + 0x2e632));
function a() {
    const O = [
        'tsService',
        '\x20ou\x20',
        'tenantId',
        'type',
        '6849MNhUHL',
        'fault',
        '000Z',
        'userId',
        'Nenhum\x20tic',
        'ida:\x20',
        'fornecidos',
        'valFP',
        'ticketId',
        '999Z',
        'error',
        'findAll',
        'length',
        'gte',
        'getTime',
        'T23:59:59.',
        '2tmAYXW',
        '../../mode',
        'split',
        'ate',
        'closedAt',
        'Data\x20invál',
        'ts:\x20',
        'yoolp',
        '__importDe',
        'ticket:upd',
        'gTicketSer',
        'createdAt',
        'defineProp',
        'uDFzs',
        'JDohb',
        'ização',
        'closed',
        'whatsappId',
        'save',
        'where',
        'ls/Ticket',
        'T00:00:00.',
        'warn',
        'hSDFK',
        '4500023YQTtRc',
        'erty',
        'ers/socket',
        'Tickets\x20en',
        '316532wyxcPa',
        '2|4|0|3|1',
        'value',
        '275881LxXuxI',
        '140343gUPNZe',
        'sequelize',
        'now',
        './CreateLo',
        'and',
        '../../help',
        'isGroup',
        'lte',
        'log',
        'Emit',
        'vice',
        'char\x20ticke',
        '__esModule',
        'Erro\x20ao\x20fe',
        'rado\x20com\x20o',
        'ida\x20fornec',
        's\x20filtros\x20',
        'contrados\x20',
        '12xvzSLI',
        'status',
        'payload',
        'PvAXH',
        '10NVokzR',
        'ket\x20encont',
        'rEgny',
        '456pvHdFd',
        '1112170ywnzpg',
        '367842awmPNy',
        'para\x20atual',
        'count',
        'closeTicke',
        'default',
        'message',
        'KHEUW'
    ];
    a = function () {
        return O;
    };
    return a();
}
var __importDefault = this && this[J(0x138) + J(0x121)] || function (c) {
    const L = J;
    return c && c[L(0x106)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1564 + -0x140e + -0x61 * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[K(0xf8)] = !![], Object[K(0x13c) + K(0x149)](exports, K(0x106), k), exports[J(0x118) + J(0x11c)] = void (-0x521 * -0x1 + 0x17c1 + 0xe71 * -0x2);
const sequelize_1 = require(J(0xfb)), Ticket_1 = __importDefault(require(J(0x131) + J(0x144))), CreateLogTicketService_1 = __importDefault(require(J(0xfd) + K(0x13a) + K(0x104))), socketEmit_1 = __importDefault(require(J(0xff) + J(0x14a) + K(0x103))), closeTicketsService = async ({
        status: j,
        startDate: l,
        endDate: m,
        whatsappId: n,
        isGroup: o,
        userId: p,
        tenantId: q
    }) => {
        const M = J, N = K, r = {
                'hSDFK': function (s, t) {
                    return s(t);
                },
                'PvAXH': M(0xf5) + M(0x10b) + N(0x116) + M(0x13f),
                'uDFzs': function (s, t) {
                    return s === t;
                },
                'KHEUW': M(0x124) + N(0x111) + M(0x108) + M(0x10a) + N(0x126),
                'yoolp': M(0xf7),
                'rEgny': M(0x139) + N(0x133),
                'valFP': M(0x140),
                'JDohb': N(0x107) + M(0x105) + 'ts'
            };
        try {
            const s = new Date(l + (N(0x145) + N(0x122))), t = new Date(m + (M(0x12f) + N(0x129)));
            if (r[N(0x147)](isNaN, s[N(0x12e)]()) || r[M(0x147)](isNaN, t[N(0x12e)]()))
                throw new Error(M(0x135) + N(0x109) + N(0x125) + l + M(0x11d) + m);
            const u = {
                    [sequelize_1['Op'][N(0xfe)]]: {
                        [sequelize_1['Op'][N(0x12d)]]: s,
                        [sequelize_1['Op'][M(0x101)]]: t
                    }
                }, v = {};
            v[N(0x10d)] = j, v[M(0x13b)] = u, v[M(0x141)] = n, v[M(0x100)] = o;
            const w = {};
            w[M(0x143)] = v;
            const x = await Ticket_1[N(0x119)][M(0x12b)](w), y = {};
            y[N(0x117)] = x[N(0x12c)], console[M(0x102)](r[M(0x10f)], y);
            if (r[N(0x13d)](x[M(0x12c)], -0x1963 + 0x7af + 0x11b4)) {
                console[M(0x146)](r[N(0x11b)]);
                return;
            }
            const z = Date[N(0xfc)]();
            for (const A of x) {
                const B = r[N(0x137)][N(0x132)]('|');
                let C = 0x202c + 0xc2 * -0x2e + 0x2b0;
                while (!![]) {
                    switch (B[C++]) {
                    case '0':
                        await A[N(0x142)]();
                        continue;
                    case '1':
                        const D = {};
                        D[M(0x11e)] = q, D[N(0x11f)] = r[M(0x112)], D[N(0x10e)] = A, (0x10 * -0x9c + -0xaa * -0x7 + 0x51a, socketEmit_1[N(0x119)])(D);
                        continue;
                    case '2':
                        A[M(0x10d)] = r[N(0x127)];
                        continue;
                    case '3':
                        const E = {};
                        E[M(0x123)] = p, E[M(0x128)] = A['id'], E[M(0x11f)] = r[M(0x127)], await (-0xf21 + -0x19ea + 0x5dd * 0x7, CreateLogTicketService_1[N(0x119)])(E);
                        continue;
                    case '4':
                        A[M(0x134)] = z;
                        continue;
                    }
                    break;
                }
            }
        } catch (F) {
            const G = {};
            G[N(0x12a)] = F, console[N(0x12a)](r[M(0x13e)], G);
            throw new Error(M(0x107) + M(0x105) + M(0x136) + F[N(0x11a)]);
        }
    };
exports[J(0x118) + J(0x11c)] = closeTicketsService;