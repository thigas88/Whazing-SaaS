'use strict';
function a() {
    const Q = [
        'ticket:upd',
        'para\x20atual',
        'vice',
        'lte',
        'whatsappId',
        'gte',
        '4708MIeXkX',
        'count',
        '2eDoDAu',
        'closed',
        'Erro\x20ao\x20fe',
        'save',
        '312810dQiAir',
        'ida\x20do\x20fro',
        'value',
        'default',
        'rado\x20com\x20o',
        'contrados\x20',
        'olkuo',
        'endDate',
        'ntend',
        '119FFKltu',
        'getTime',
        '59672YdoJkT',
        'scYjE',
        'ls/Ticket',
        'closeTicke',
        'ida\x20fornec',
        'erty',
        'Emit',
        's\x20filtros\x20',
        'createdAt',
        'error',
        'Nenhum\x20tic',
        'userId',
        '../../mode',
        '1|0|2|4|3',
        'sequelize',
        'hAWdM',
        'ket\x20encont',
        'OJSEb',
        'ts:\x20',
        'char\x20ticke',
        'message',
        'tenantId',
        'findAll',
        'warn',
        '2468530LYYfBI',
        'PfnSf',
        'split',
        'where',
        '__esModule',
        'closedAt',
        'ROBdF',
        'ers/socket',
        '765GMUsAz',
        'fornecidos',
        'Tickets\x20en',
        'tsService',
        'ticketId',
        'isGroup',
        '8423964ZjIOvR',
        'ização',
        'length',
        'gTicketSer',
        'data\x20receb',
        '24370WEjXyb',
        '4UhilYx',
        'payload',
        'Data\x20invál',
        '93898YqmVJh',
        '__importDe',
        '../../help',
        'fzDtu',
        'defineProp',
        'WyBHi',
        'GFTql',
        'ate',
        'fault',
        'startDate',
        'type',
        'log',
        'ida:\x20',
        './CreateLo',
        'TSkfd',
        'and',
        '\x20ou\x20',
        'status',
        'now',
        '2104179KguMNC'
    ];
    a = function () {
        return Q;
    };
    return a();
}
const L = b, M = b;
(function (c, d) {
    const J = b, K = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(J(0xfd)) / (0x1 * -0xbf0 + -0x1817 + -0x2 * -0x1204) * (-parseInt(K(0x119)) / (-0x1b * -0x5 + 0x2 * 0xf66 + -0x1 * 0x1f51)) + -parseInt(J(0x110)) / (0x1 * -0x22ee + 0x40a + 0x1ee7) * (-parseInt(J(0xfa)) / (-0x135b + 0x73d + 0xc22)) + parseInt(K(0x140)) / (0x4 * -0x539 + 0x129 + -0x9e * -0x20) + -parseInt(K(0x11d)) / (0x5 * 0xdb + -0x234f + -0x5 * -0x636) * (parseInt(J(0x126)) / (-0x1452 + 0x247b + -0x2 * 0x811)) + parseInt(K(0x128)) / (0x1a13 + -0x17c + -0x188f) * (parseInt(J(0x148)) / (0x335 * 0x7 + 0xb7e + -0x21e8)) + parseInt(K(0xf9)) / (0x1077 + -0x3 * -0xc19 + -0x34b8) * (-parseInt(K(0x117)) / (-0x7 * 0x17e + 0x10eb + 0x1 * -0x66e)) + parseInt(J(0xf4)) / (-0x1eff + 0xd0 * -0xc + 0x28cb);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xbef31 * 0x1 + -0xdc3ad + 0x24505c));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x359 * -0x9 + -0x2219 + 0x412b);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[L(0xfe) + M(0x105)] || function (c) {
    const N = M;
    return c && c[N(0x144)] ? c : { 'default': c };
};
const k = {};
k[M(0x11f)] = !![], Object[M(0x101) + L(0x12d)](exports, M(0x144), k), exports[M(0x12b) + M(0xf1)] = void (0x2e9 + -0x52f + 0x246);
const sequelize_1 = require(M(0x136)), Ticket_1 = __importDefault(require(L(0x134) + L(0x12a))), CreateLogTicketService_1 = __importDefault(require(M(0x10a) + L(0xf7) + L(0x113))), socketEmit_1 = __importDefault(require(M(0xff) + M(0x147) + L(0x12e))), closeTicketsService = async ({
        status: l,
        startDate: m,
        endDate: n,
        whatsappId: o,
        isGroup: p,
        userId: q,
        tenantId: r
    }) => {
        const O = M, P = M, s = {
                'scYjE': O(0xf8) + P(0x11e) + O(0x125),
                'WyBHi': function (t, u) {
                    return t(u);
                },
                'TSkfd': function (t, u) {
                    return t(u);
                },
                'olkuo': O(0x14a) + P(0x122) + O(0x112) + P(0xf5),
                'OJSEb': function (t, u) {
                    return t === u;
                },
                'ROBdF': P(0x132) + P(0x138) + O(0x121) + O(0x12f) + P(0x149),
                'fzDtu': O(0x135),
                'PfnSf': P(0x11a),
                'GFTql': O(0x111) + P(0x104),
                'hAWdM': O(0x11b) + O(0x13b) + 'ts'
            };
        try {
            const t = {};
            t[P(0x106)] = m, t[P(0x124)] = n, console[O(0x108)](s[P(0x129)], t);
            const u = new Date(m), v = new Date(n);
            if (s[P(0x102)](isNaN, u[P(0x127)]()) || s[O(0x10b)](isNaN, v[O(0x127)]()))
                throw new Error(P(0xfc) + O(0x12c) + O(0x109) + m + O(0x10d) + n);
            const w = {
                    [sequelize_1['Op'][P(0x10c)]]: {
                        [sequelize_1['Op'][P(0x116)]]: u,
                        [sequelize_1['Op'][O(0x114)]]: v
                    }
                }, x = {};
            x[O(0x10e)] = l, x[O(0x130)] = w, x[P(0x115)] = o, x[P(0xf3)] = p;
            const y = {};
            y[P(0x143)] = x;
            const z = await Ticket_1[P(0x120)][O(0x13e)](y), A = {};
            A[O(0x118)] = z[O(0xf6)], console[P(0x108)](s[O(0x123)], A);
            if (s[P(0x139)](z[O(0xf6)], 0x2 * -0x33d + -0x65 * 0x2c + 0x17d6)) {
                console[O(0x13f)](s[P(0x146)]);
                return;
            }
            const B = Date[P(0x10f)]();
            for (const C of z) {
                const D = s[P(0x100)][P(0x142)]('|');
                let E = -0x293 + 0x43c + -0x1a9;
                while (!![]) {
                    switch (D[E++]) {
                    case '0':
                        C[O(0x145)] = B;
                        continue;
                    case '1':
                        C[O(0x10e)] = s[P(0x141)];
                        continue;
                    case '2':
                        await C[O(0x11c)]();
                        continue;
                    case '3':
                        const F = {};
                        F[O(0x13d)] = r, F[O(0x107)] = s[O(0x103)], F[O(0xfb)] = C, (0x1d6d + -0x2df + 0x1 * -0x1a8e, socketEmit_1[O(0x120)])(F);
                        continue;
                    case '4':
                        const G = {};
                        G[P(0x133)] = q, G[P(0xf2)] = C['id'], G[O(0x107)] = s[P(0x141)], await (0x2402 + 0x4 * -0x973 + 0x1ca, CreateLogTicketService_1[O(0x120)])(G);
                        continue;
                    }
                    break;
                }
            }
        } catch (H) {
            const I = {};
            I[O(0x131)] = H, console[O(0x131)](s[P(0x137)], I);
            throw new Error(P(0x11b) + O(0x13b) + O(0x13a) + H[O(0x13c)]);
        }
    };
exports[L(0x12b) + M(0xf1)] = closeTicketsService;