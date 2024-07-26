'use strict';
function a() {
    const O = [
        '999Z',
        '32529YcZHvE',
        '986108TaLgco',
        'ONZjy',
        'char\x20ticke',
        '198nKgPWk',
        'Data\x20invál',
        'sequelize',
        '1608ZoFdcV',
        'payload',
        'T00:00:00.',
        '../../mode',
        'type',
        '000Z',
        'userId',
        'rado\x20com\x20o',
        'defineProp',
        '\x20ou\x20',
        'ate',
        's\x20filtros\x20',
        'Tickets\x20en',
        'fault',
        'status',
        'YbnFJ',
        'warn',
        'Nenhum\x20tic',
        'whatsappId',
        '9213muxcev',
        'Bhmsa',
        '__esModule',
        'ers/socket',
        'ticketId',
        'length',
        'tsService',
        '../../help',
        'CGfws',
        '4764180hzXVyT',
        'message',
        'error',
        'para\x20atual',
        './CreateLo',
        'count',
        'Erro\x20ao\x20fe',
        'fornecidos',
        'gte',
        'createdAt',
        'iBWzB',
        'Emit',
        '2016dznDZF',
        'ida:\x20',
        '779410WUxmOK',
        'ls/Ticket',
        'gsbxB',
        'vice',
        'closeTicke',
        'lte',
        '__importDe',
        'default',
        '3658812LLzAVl',
        'now',
        'ização',
        'findAll',
        'where',
        'ticket:upd',
        'isGroup',
        'ida\x20fornec',
        'erty',
        '1150558RhRBHt',
        'closed',
        'getTime',
        'split',
        'log',
        'tenantId',
        'ts:\x20',
        'value',
        'neSMI',
        '1|4|2|0|3',
        'gTicketSer',
        'contrados\x20',
        'closedAt',
        'T23:59:59.',
        'KtgGa',
        'and',
        'save',
        'ket\x20encont'
    ];
    a = function () {
        return O;
    };
    return a();
}
const J = b, K = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x231 * 0x1 + -0x2621 + -0x29bf * -0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const H = b, I = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(H(0x1a4)) / (-0x1990 + -0x97f + 0x2310) + parseInt(H(0x1b8)) / (-0xe38 + 0x1c9 * -0x1 + 0x1003) + parseInt(H(0x17c)) / (-0x7eb * 0x1 + 0x4ab * 0x1 + -0x343 * -0x1) * (parseInt(I(0x191)) / (-0x529 * -0x7 + -0x12 * -0x14d + -0x13d7 * 0x3)) + parseInt(I(0x185)) / (-0x2408 + -0xb6c + 0x2f79) + -parseInt(H(0x19b)) / (-0x3a * -0x1 + 0x6 * -0x3cb + 0x168e) + parseInt(H(0x1b7)) / (0x161b + -0xfc * -0x11 + 0x2e * -0xd8) * (-parseInt(H(0x1be)) / (0x19e0 * 0x1 + 0xfd1 + -0x5 * 0x855)) + -parseInt(H(0x1bb)) / (0x1655 * -0x1 + 0x18a1 + -0x1 * 0x243) * (parseInt(I(0x193)) / (-0x17 + -0x4b8 + 0x4d9));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xc76d1 + -0x165622 * 0x1 + 0x2 * 0xbb181));
var __importDefault = this && this[J(0x199) + K(0x176)] || function (c) {
    const L = K;
    return c && c[L(0x17e)] ? c : { 'default': c };
};
const k = {};
k[K(0x1ab)] = !![], Object[K(0x171) + J(0x1a3)](exports, J(0x17e), k), exports[K(0x197) + K(0x182)] = void (-0x1540 + -0x130e * -0x1 + 0x119 * 0x2);
const sequelize_1 = require(K(0x1bd)), Ticket_1 = __importDefault(require(J(0x1c1) + J(0x194))), CreateLogTicketService_1 = __importDefault(require(K(0x189) + K(0x1ae) + K(0x196))), socketEmit_1 = __importDefault(require(K(0x183) + K(0x17f) + K(0x190))), closeTicketsService = async ({
        status: j,
        startDate: l,
        endDate: m,
        whatsappId: n,
        isGroup: o,
        userId: p,
        tenantId: q
    }) => {
        const M = K, N = K, r = {
                'neSMI': function (s, t) {
                    return s(t);
                },
                'YbnFJ': M(0x175) + M(0x1af) + N(0x188) + N(0x19d),
                'gsbxB': function (s, t) {
                    return s === t;
                },
                'KtgGa': N(0x17a) + M(0x1b5) + M(0x170) + N(0x174) + M(0x18c),
                'Bhmsa': M(0x1ad),
                'CGfws': N(0x1a5),
                'ONZjy': N(0x1a0) + N(0x173),
                'iBWzB': M(0x18b) + N(0x1ba) + 'ts'
            };
        try {
            const s = new Date(l + (M(0x1c0) + M(0x16e))), t = new Date(m + (M(0x1b1) + N(0x1b6)));
            if (r[M(0x1ac)](isNaN, s[N(0x1a6)]()) || r[N(0x1ac)](isNaN, t[N(0x1a6)]()))
                throw new Error(N(0x1bc) + M(0x1a2) + M(0x192) + l + N(0x172) + m);
            const u = {
                    [sequelize_1['Op'][M(0x1b3)]]: {
                        [sequelize_1['Op'][M(0x18d)]]: s,
                        [sequelize_1['Op'][N(0x198)]]: t
                    }
                }, v = {};
            v[N(0x177)] = j, v[M(0x18e)] = u, v[N(0x17b)] = n, v[N(0x1a1)] = o;
            const w = {};
            w[M(0x19f)] = v;
            const x = await Ticket_1[M(0x19a)][N(0x19e)](w), y = {};
            y[M(0x18a)] = x[M(0x181)], console[M(0x1a8)](r[M(0x178)], y);
            if (r[N(0x195)](x[M(0x181)], -0xefa + -0x2 * -0xfb5 + -0x1070)) {
                console[N(0x179)](r[N(0x1b2)]);
                return;
            }
            const z = Date[M(0x19c)]();
            for (const A of x) {
                const B = r[M(0x17d)][M(0x1a7)]('|');
                let C = 0x4 * -0x621 + -0x3f0 + 0x1c74;
                while (!![]) {
                    switch (B[C++]) {
                    case '0':
                        const D = {};
                        D[N(0x16f)] = p, D[M(0x180)] = A['id'], D[M(0x16d)] = r[N(0x184)], await (0x1 * -0x15b5 + 0x1 * -0x44d + 0x1a02, CreateLogTicketService_1[N(0x19a)])(D);
                        continue;
                    case '1':
                        A[M(0x177)] = r[M(0x184)];
                        continue;
                    case '2':
                        await A[M(0x1b4)]();
                        continue;
                    case '3':
                        const E = {};
                        E[M(0x1a9)] = q, E[M(0x16d)] = r[N(0x1b9)], E[M(0x1bf)] = A, (-0x1 * 0x89 + 0x179 + -0xf0, socketEmit_1[M(0x19a)])(E);
                        continue;
                    case '4':
                        A[N(0x1b0)] = z;
                        continue;
                    }
                    break;
                }
            }
        } catch (F) {
            const G = {};
            G[M(0x187)] = F, console[N(0x187)](r[N(0x18f)], G);
            throw new Error(M(0x18b) + N(0x1ba) + M(0x1aa) + F[M(0x186)]);
        }
    };
exports[J(0x197) + J(0x182)] = closeTicketsService;