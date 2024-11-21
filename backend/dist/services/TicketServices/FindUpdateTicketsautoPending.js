'use strict';
const N = b, O = b;
function a() {
    const S = [
        'name',
        'type',
        '404wDDGIK',
        '1945656mxkDBx',
        'value',
        '2707376DiBwrD',
        'pesZY',
        'IlVwN',
        'where',
        '302740MgipZN',
        '../../util',
        '3248271LpnxTu',
        'r:\x20',
        'tenantId',
        '__importDe',
        'logger',
        '2772IiJCDe',
        'gTime',
        'answered',
        'lastMessag',
        '../../mode',
        '__esModule',
        'Yxkng',
        'key',
        '5616234CgEDuB',
        'inAKi',
        'etService',
        'ket:\x20',
        'status',
        '../../help',
        'hTpXB',
        'azSOz',
        'MplmJ',
        'now',
        'erty',
        'IOHOi',
        'open',
        'autoPendin',
        'QhRdv',
        'JmaMa',
        'findAll',
        'qIDRk',
        ':::\x20Error\x20',
        'enabled',
        'payload',
        'OGrNC',
        's/logger',
        'ticket:upd',
        'ate',
        'ls/Tenant',
        '28910QtSzoR',
        'cNFbp',
        'defineProp',
        'pending',
        'findOne',
        'fault',
        'pWsSD',
        'ASC',
        'update',
        'eAt',
        'floor',
        'iziJX',
        '2547HnZnSp',
        'warn',
        'qLbKw',
        '14DccCXG',
        'Emit',
        'VOOBx',
        'ers/socket',
        'default',
        'ls/Setting',
        'ção\x20do\x20tic',
        'r\x20atualiza',
        'order',
        'stringify',
        './ShowTick',
        'ao\x20realiza',
        'ls/Ticket'
    ];
    a = function () {
        return S;
    };
    return a();
}
(function (c, d) {
    const L = b, M = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(L(0xc6)) / (0x2128 + -0x5 * 0x223 + 0x1678 * -0x1) * (parseInt(M(0x8a)) / (0x1d83 + -0x1 * -0xc73 + 0x3c * -0xb3)) + parseInt(M(0x93)) / (0x10b4 + -0x9 * 0xa + -0x1057) + -parseInt(M(0x8b)) / (0x1f0a + -0x14e * 0xb + -0x10ac) + -parseInt(M(0x91)) / (0x1 * -0x2276 + 0x14e + 0x212d) + parseInt(M(0xa0)) / (-0xa3 * 0x10 + 0x81 * -0x28 + -0xa9 * -0x2e) + -parseInt(L(0xc9)) / (0xceb + 0x2bc * 0x5 + -0x1a90) * (-parseInt(L(0x8d)) / (-0x8d * 0x21 + -0x1031 + 0x2266)) + -parseInt(M(0x98)) / (-0x6a * -0xa + -0x19da + 0x15bf) * (parseInt(M(0xba)) / (-0x1 * -0x1df5 + -0x1c7f * -0x1 + -0x3a6a));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xd6102 + 0x5e438 + 0x12d616));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xe7d * 0x1 + 0x9f6 + 0x50c);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[N(0x96) + O(0xbf)] || function (c) {
    const P = O;
    return c && c[P(0x9d)] ? c : { 'default': c };
};
const k = {};
k[N(0x8c)] = !![], Object[O(0xbc) + O(0xaa)](exports, N(0x9d), k);
const logger_1 = require(O(0x92) + O(0xb6)), Ticket_1 = __importDefault(require(O(0x9c) + N(0x87))), Setting_1 = __importDefault(require(N(0x9c) + N(0xce))), Tenant_1 = __importDefault(require(N(0x9c) + N(0xb9))), ShowTicketService_1 = __importDefault(require(N(0x85) + N(0xa2))), socketEmit_1 = __importDefault(require(N(0xa5) + N(0xcc) + N(0xca))), FindUpdateTicketsautoPending = async () => {
        const Q = O, R = N, n = {
                'inAKi': Q(0x88),
                'QhRdv': R(0xc1),
                'iziJX': Q(0xad) + 'g',
                'OGrNC': Q(0xad) + Q(0x99),
                'pWsSD': function (o, p) {
                    return o === p;
                },
                'Yxkng': Q(0xb3),
                'cNFbp': Q(0xac),
                'IOHOi': function (o, p) {
                    return o / p;
                },
                'azSOz': function (o, p) {
                    return o * p;
                },
                'IlVwN': function (o, p) {
                    return o(p);
                },
                'JmaMa': function (o, p) {
                    return o > p;
                },
                'pesZY': function (o, p) {
                    return o - p;
                },
                'qLbKw': R(0xbd),
                'MplmJ': R(0xb7) + R(0xb8),
                'qIDRk': function (o, p) {
                    return o + p;
                },
                'VOOBx': Q(0xb2) + Q(0x86) + R(0xd0) + Q(0xcf) + Q(0xa3),
                'hTpXB': Q(0xb2) + Q(0x86) + Q(0x94)
            };
        try {
            const o = {};
            o[R(0xd1)] = [[
                    n[Q(0xa1)],
                    n[R(0xae)]
                ]];
            const p = await Tenant_1[Q(0xcd)][Q(0xb0)](o);
            for (const q of p) {
                const r = q['id'], s = {};
                s[R(0x9f)] = n[Q(0xc5)], s[Q(0x95)] = r;
                const t = {};
                t[Q(0x90)] = s;
                const u = await Setting_1[R(0xcd)][R(0xbe)](t), v = {};
                v[Q(0x9f)] = n[R(0xb5)], v[Q(0x95)] = r;
                const w = {};
                w[Q(0x90)] = v;
                const x = await Setting_1[Q(0xcd)][Q(0xbe)](w);
                if (n[Q(0xc0)](u?.[R(0x8c)], n[R(0x9e)])) {
                    const y = {};
                    y[R(0x95)] = r, y[R(0xa4)] = n[Q(0xbb)];
                    const z = {};
                    z[R(0x90)] = y;
                    const A = await Ticket_1[R(0xcd)][R(0xb0)](z);
                    for (const B of A) {
                        if (n[R(0xc0)](B[R(0x9a)], !![]))
                            continue;
                        const C = Math[R(0xc4)](n[R(0xab)](Date[Q(0xa9)](), -0x2 * 0x7c + -0x12cb + 0x17ab)), D = Math[R(0xc4)](n[R(0xab)](B[R(0x9b) + Q(0xc3)], -0xf1a + 0x3 * -0x3a9 + 0x1 * 0x1dfd)), E = x ? n[Q(0xa7)](n[R(0x8f)](parseInt, x[Q(0x8c)]), -0x868 + -0x2 * 0x8d2 + 0x1a48) : 0x1 * -0xb89 + -0x2258 + 0x2de1;
                        if (n[Q(0xaf)](n[Q(0x8e)](C, D), E))
                            try {
                                const F = {};
                                F[R(0xa4)] = n[Q(0xc8)], await B[Q(0xc2)](F);
                                const G = {};
                                G['id'] = B['id'], G[Q(0x95)] = B[R(0x95)];
                                const H = await (0x85e + -0x1 * -0x125 + -0x5 * 0x1e7, ShowTicketService_1[Q(0xcd)])(G), I = {};
                                I[Q(0x95)] = B[Q(0x95)], I[Q(0x89)] = n[R(0xa8)], I[Q(0xb4)] = H, (-0xf7d + -0x1 * 0x22ff + 0x327c, socketEmit_1[Q(0xcd)])(I);
                            } catch (J) {
                                logger_1[Q(0x97)][Q(0xc7)](n[Q(0xb1)](n[Q(0xcb)], JSON[R(0xd2)](J)));
                            }
                    }
                }
            }
        } catch (K) {
            logger_1[R(0x97)][R(0xc7)](n[R(0xb1)](n[Q(0xa6)], JSON[R(0xd2)](K)));
        }
    };
exports[N(0xcd)] = FindUpdateTicketsautoPending;