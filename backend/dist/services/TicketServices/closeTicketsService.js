'use strict';
const J = b, K = b;
(function (c, d) {
    const H = b, I = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(H(0xb3)) / (0x538 + -0x1e7a + 0x1 * 0x1943) + parseInt(I(0x9c)) / (-0x1c31 + -0x265d + 0x4290) + -parseInt(H(0xab)) / (0x1e88 + -0x1ed3 + -0x6 * -0xd) * (parseInt(I(0x83)) / (-0x1 * 0x10a6 + 0x6c7 * 0x1 + 0x1 * 0x9e3)) + -parseInt(H(0x8c)) / (0x9 * -0x1c6 + 0x373 + 0xc88) + parseInt(I(0xb0)) / (-0x13c4 + 0x40b + -0x1d * -0x8b) + -parseInt(I(0xc9)) / (0x152c + -0x1d9a + 0x875) + parseInt(H(0x88)) / (-0x5c + -0x1 * -0x22d5 + -0x2271) * (parseInt(H(0xb8)) / (-0x1 * -0x13ac + -0x1877 * 0x1 + 0x4d4));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x7fc11 + -0x40af2 + 0x821b * 0xb));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x5f8 + -0x148a * 0x1 + 0xf08);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[J(0x90) + J(0x7f)] || function (c) {
    const L = J;
    return c && c[L(0xae)] ? c : { 'default': c };
};
const k = {};
k[K(0xb7)] = !![], Object[J(0xc1) + K(0x91)](exports, K(0xae), k), exports[J(0xa8) + K(0x76)] = void (-0x6 * -0x153 + -0x3 * -0xbfc + -0x2be6);
function a() {
    const O = [
        'lte',
        'type',
        'Erro\x20ao\x20fe',
        'default',
        '1981996mLXhdt',
        'tenantId',
        'findAll',
        'count',
        'ticket:upd',
        'KtTMp',
        'message',
        'closed',
        'length',
        'Tickets\x20en',
        'ls/Ticket',
        'vice',
        'closeTicke',
        'Emit',
        'rado\x20com\x20o',
        '6420okGGBl',
        'log',
        './CreateLo',
        '__esModule',
        '../../mode',
        '2220168sWUHrx',
        'status',
        's\x20filtros\x20',
        '1024085sclgqg',
        'userId',
        'gte',
        'now',
        'value',
        '36PjxTom',
        'where',
        '000Z',
        'ida:\x20',
        'ticketId',
        '../../help',
        'contrados\x20',
        'foemu',
        'sequelize',
        'defineProp',
        'ida\x20fornec',
        'T23:59:59.',
        'split',
        '\x20ou\x20',
        'gTicketSer',
        'T00:00:00.',
        'getTime',
        '1852529vjENvO',
        'ket\x20encont',
        'tsService',
        'sXSwf',
        'fornecidos',
        'KArsy',
        'isGroup',
        'payload',
        'Nenhum\x20tic',
        'para\x20atual',
        'ts:\x20',
        'fault',
        'Data\x20invál',
        'error',
        'rDJvN',
        '1564IuKaBY',
        '2|0|3|1|4',
        'warn',
        'ers/socket',
        '999Z',
        '4616672niskje',
        'and',
        'evGbc',
        'char\x20ticke',
        '4595890EauemR',
        'UevXw',
        'LWUht',
        'ização',
        '__importDe',
        'erty',
        'whatsappId',
        'closedAt',
        'createdAt',
        'ate',
        'save',
        'Ojlwk'
    ];
    a = function () {
        return O;
    };
    return a();
}
const sequelize_1 = require(K(0xc0)), Ticket_1 = __importDefault(require(K(0xaf) + J(0xa6))), CreateLogTicketService_1 = __importDefault(require(K(0xad) + J(0xc6) + J(0xa7))), socketEmit_1 = __importDefault(require(J(0xbd) + J(0x86) + K(0xa9))), closeTicketsService = async ({
        status: j,
        startDate: l,
        endDate: m,
        whatsappId: n,
        isGroup: o,
        userId: p,
        tenantId: q
    }) => {
        const M = K, N = K, r = {
                'foemu': function (s, t) {
                    return s(t);
                },
                'sXSwf': function (s, t) {
                    return s(t);
                },
                'KArsy': M(0xa5) + N(0xbe) + M(0x7d) + M(0x8f),
                'UevXw': function (s, t) {
                    return s === t;
                },
                'rDJvN': N(0x7c) + M(0xca) + M(0xaa) + M(0xb2) + N(0x78),
                'evGbc': M(0x84),
                'KtTMp': M(0xa3),
                'Ojlwk': N(0xa0) + M(0x95),
                'LWUht': M(0x9a) + N(0x8b) + 'ts'
            };
        try {
            const s = new Date(l + (M(0xc7) + N(0xba))), t = new Date(m + (M(0xc3) + N(0x87)));
            if (r[M(0xbf)](isNaN, s[N(0xc8)]()) || r[N(0x77)](isNaN, t[M(0xc8)]()))
                throw new Error(N(0x80) + M(0xc2) + N(0xbb) + l + N(0xc5) + m);
            const u = {
                    [sequelize_1['Op'][N(0x89)]]: {
                        [sequelize_1['Op'][M(0xb5)]]: s,
                        [sequelize_1['Op'][N(0x98)]]: t
                    }
                }, v = {};
            v[N(0xb1)] = j, v[M(0x94)] = u, v[N(0x92)] = n, v[M(0x7a)] = o;
            const w = {};
            w[M(0xb9)] = v;
            const x = await Ticket_1[M(0x9b)][M(0x9e)](w), y = {};
            y[N(0x9f)] = x[M(0xa4)], console[N(0xac)](r[N(0x79)], y);
            if (r[N(0x8d)](x[M(0xa4)], -0x6e + 0x1af * -0x1 + 0x21d)) {
                console[N(0x85)](r[N(0x82)]);
                return;
            }
            const z = Date[M(0xb6)]();
            for (const A of x) {
                const B = r[M(0x8a)][N(0xc4)]('|');
                let C = -0x1 * 0x1cf + 0x15 + 0x22 * 0xd;
                while (!![]) {
                    switch (B[C++]) {
                    case '0':
                        A[M(0x93)] = z;
                        continue;
                    case '1':
                        const D = {};
                        D[N(0xb4)] = p, D[M(0xbc)] = A['id'], D[M(0x99)] = r[N(0xa1)], await (-0x20 * 0x20 + 0x13e + 0x2c2, CreateLogTicketService_1[N(0x9b)])(D);
                        continue;
                    case '2':
                        A[N(0xb1)] = r[N(0xa1)];
                        continue;
                    case '3':
                        await A[M(0x96)]();
                        continue;
                    case '4':
                        const E = {};
                        E[M(0x9d)] = q, E[N(0x99)] = r[M(0x97)], E[N(0x7b)] = A, (0x1931 + 0x57 * -0x9 + -0x1622, socketEmit_1[N(0x9b)])(E);
                        continue;
                    }
                    break;
                }
            }
        } catch (F) {
            const G = {};
            G[N(0x81)] = F, console[N(0x81)](r[N(0x8e)], G);
            throw new Error(N(0x9a) + N(0x8b) + N(0x7e) + F[N(0xa2)]);
        }
    };
exports[K(0xa8) + K(0x76)] = closeTicketsService;