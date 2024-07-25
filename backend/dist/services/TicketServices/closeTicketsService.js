'use strict';
const L = b, M = b;
function a() {
    const Q = [
        'defineProp',
        'findAll',
        'abVvh',
        'default',
        'XwojZ',
        '2UuTrvx',
        'char\x20ticke',
        'tsService',
        'ticketId',
        '\x20ou\x20',
        'MshXL',
        'fault',
        'warn',
        'between',
        'Data\x20invál',
        '7VbWcze',
        'closed',
        'setHours',
        'fornecidos',
        './CreateLo',
        '../../mode',
        'para\x20atual',
        '__esModule',
        'Erro\x20ao\x20fe',
        'ers/socket',
        'length',
        '4|2|1|3|0',
        'SYSka',
        'message',
        'now',
        'ida:\x20',
        '8CxpNla',
        'gTicketSer',
        '10WTFcfS',
        'value',
        'ticket:upd',
        'whatsappId',
        '31364190JBSKZp',
        'rado\x20com\x20o',
        'closedAt',
        'split',
        'erty',
        'Emit',
        'ls/Ticket',
        'YnNfY',
        'contrados\x20',
        's\x20filtros\x20',
        'sequelize',
        'FfhdA',
        'tenantId',
        'where',
        'vice',
        'closeTicke',
        'status',
        'getTime',
        'ts:\x20',
        'count',
        'userId',
        'createdAt',
        '1025826fhzLrT',
        'bjnPV',
        'log',
        'isGroup',
        'chgiH',
        'payload',
        'ida\x20fornec',
        '8750032veYTCc',
        'ket\x20encont',
        'error',
        'ização',
        'Tickets\x20en',
        'pTBrz',
        '5361165JWxqMc',
        '11690900JrInjc',
        'Nenhum\x20tic',
        '__importDe',
        '../../help',
        '3617928iqBgHf',
        'type',
        '957262qMxmuw',
        'save',
        'ate'
    ];
    a = function () {
        return Q;
    };
    return a();
}
(function (c, d) {
    const J = b, K = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(J(0x1f8)) / (0x1861 + -0x1a75 + 0x29 * 0xd) * (-parseInt(K(0x1f0)) / (0x128f + -0x1bfc + 0x96f)) + parseInt(J(0x1dc)) / (0x3e * 0x53 + -0x73 * -0x3 + -0x1570) * (-parseInt(J(0x212)) / (0x177a + 0xb * 0x341 + -0x3b41)) + -parseInt(K(0x214)) / (-0x4e1 * -0x8 + 0x4 * 0x7e5 + -0x11 * 0x427) * (-parseInt(J(0x1ee)) / (-0x2036 * 0x1 + 0x2680 + -0x644)) + -parseInt(K(0x202)) / (0x1 * 0x1772 + -0x1c1a + 0x4af) * (parseInt(K(0x1e3)) / (0x193f + 0x449 * 0x1 + -0x3b0 * 0x8)) + parseInt(J(0x1e9)) / (-0x329 + -0xe7 * 0x2 + 0x500) + -parseInt(K(0x1ea)) / (-0x1db7 * -0x1 + -0x15b7 + 0x3fb * -0x2) + parseInt(K(0x218)) / (-0x37 * 0x16 + -0x1d39 + 0x10ff * 0x2);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xae39a + 0x4 * 0x43b6e + 0x37 * 0x1915));
var __importDefault = this && this[L(0x1ec) + L(0x1fe)] || function (c) {
    const N = M;
    return c && c[N(0x209)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2104 * -0x1 + 0x793 + 0x2 * 0xda3);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[M(0x215)] = !![], Object[M(0x1f3) + M(0x21c)](exports, L(0x209), k), exports[L(0x1d5) + M(0x1fa)] = void (0x1 * 0x1d17 + -0x25a2 + 0x51 * 0x1b);
const sequelize_1 = require(L(0x222)), Ticket_1 = __importDefault(require(M(0x207) + L(0x21e))), CreateLogTicketService_1 = __importDefault(require(M(0x206) + M(0x213) + M(0x226))), socketEmit_1 = __importDefault(require(M(0x1ed) + L(0x20b) + L(0x21d))), closeTicketsService = async ({
        status: j,
        startDate: l,
        endDate: m,
        whatsappId: n,
        isGroup: o,
        userId: p,
        tenantId: q
    }) => {
        const O = M, P = L, r = {
                'bjnPV': function (s, t) {
                    return s(t);
                },
                'chgiH': function (s, t) {
                    return s(t);
                },
                'SYSka': O(0x1e7) + P(0x220) + O(0x208) + O(0x1e6),
                'pTBrz': function (s, t) {
                    return s === t;
                },
                'MshXL': O(0x1eb) + P(0x1e4) + O(0x219) + O(0x221) + O(0x205),
                'FfhdA': P(0x20d),
                'YnNfY': O(0x216) + P(0x1f2),
                'abVvh': O(0x203),
                'XwojZ': P(0x20a) + P(0x1f9) + 'ts'
            };
        try {
            const s = new Date(l), t = new Date(m);
            if (r[P(0x1dd)](isNaN, s[P(0x1d7)]()) || r[P(0x1e0)](isNaN, t[O(0x1d7)]()))
                throw new Error(O(0x201) + O(0x1e2) + P(0x211) + l + O(0x1fc) + m);
            t[O(0x204)](0xe33 + 0x189e + -0x26ba, 0x891 + 0x2320 + 0x2 * -0x15bb, 0x1 * -0x16f9 + -0x485 + -0x1bb9 * -0x1, -0x5 * 0x281 + 0x130f + -0x2a3);
            const u = s[O(0x1d7)](), v = t[P(0x1d7)](), w = {
                    [sequelize_1['Op'][O(0x200)]]: [
                        u,
                        v
                    ]
                }, x = {};
            x[O(0x1d6)] = j, x[O(0x1db)] = w, x[P(0x217)] = n, x[P(0x1df)] = o;
            const y = {};
            y[P(0x225)] = x;
            const z = await Ticket_1[O(0x1f6)][O(0x1f4)](y), A = {};
            A[P(0x1d9)] = z[O(0x20c)], console[P(0x1de)](r[P(0x20e)], A);
            if (r[P(0x1e8)](z[O(0x20c)], -0xc62 + 0x94a + -0x12 * -0x2c)) {
                console[P(0x1ff)](r[P(0x1fd)]);
                return;
            }
            const B = Date[P(0x210)]();
            for (const C of z) {
                const D = r[O(0x223)][P(0x21b)]('|');
                let E = -0x775 + 0x2499 + -0x5d4 * 0x5;
                while (!![]) {
                    switch (D[E++]) {
                    case '0':
                        const F = {};
                        F[P(0x224)] = q, F[P(0x1ef)] = r[P(0x21f)], F[P(0x1e1)] = C, (-0x108c + -0x69d * 0x1 + 0x1729, socketEmit_1[P(0x1f6)])(F);
                        continue;
                    case '1':
                        await C[O(0x1f1)]();
                        continue;
                    case '2':
                        C[P(0x21a)] = B;
                        continue;
                    case '3':
                        const G = {};
                        G[O(0x1da)] = p, G[P(0x1fb)] = C['id'], G[P(0x1ef)] = r[O(0x1f5)], await (0x1baa + -0x1762 * 0x1 + -0x448, CreateLogTicketService_1[P(0x1f6)])(G);
                        continue;
                    case '4':
                        C[O(0x1d6)] = r[O(0x1f5)];
                        continue;
                    }
                    break;
                }
            }
        } catch (H) {
            const I = {};
            I[P(0x1e5)] = H, console[P(0x1e5)](r[O(0x1f7)], I);
            throw new Error(P(0x20a) + P(0x1f9) + P(0x1d8) + H[O(0x20f)]);
        }
    };
exports[M(0x1d5) + M(0x1fa)] = closeTicketsService;