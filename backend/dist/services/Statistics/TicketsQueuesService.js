'use strict';
const Y = b, Z = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1bb + -0x121 * -0x15 + -0x148c);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const a7 = [
        'pWCco',
        'zbcLW',
        'forEach',
        'uLkBK',
        'RLMKL',
        'sequelize',
        'startOfDay',
        '906154swhANM',
        'number',
        'WmRuk',
        'GttNa',
        'OLtvw',
        'pSIrw',
        'ls/Ticket',
        'xoYbP',
        'aaChS',
        'between',
        '6EWbJXA',
        'pending',
        'JKYkW',
        'updatedAt',
        '14768250FDUmoo',
        'true',
        'gjRCx',
        '1vYwxjH',
        'findAll',
        'Dlxan',
        'queueId',
        'map',
        'erty',
        'kFsGu',
        'SKnKN',
        'JUlXv',
        'CXhmN',
        'date-fns',
        'ls/UsersQu',
        '__esModule',
        'sjIyJ',
        'ls/Contact',
        'mSiVl',
        'eCdhK',
        'profile',
        'iaJrZ',
        'order',
        'ls/Queue',
        'sssmT',
        'bJTND',
        '5691660GXOwoX',
        'DESC',
        'iesgw',
        'BqDWQ',
        'attributes',
        '../../mode',
        'DhuUV',
        'value',
        'xgqBz',
        'fault',
        'tenantId',
        'include',
        'where',
        'name',
        'ZThuE',
        'oAIzD',
        'YZhLD',
        'status',
        'whatsapp',
        'EUtPR',
        'QPnWF',
        '4003364RkEayq',
        '9521120slBaWj',
        'YuKqR',
        '__importDe',
        'oYkox',
        'user',
        '9LDHqSi',
        'IZPjh',
        'parseISO',
        'zrUdR',
        'push',
        'count',
        '3544219DjdUTB',
        'OOZfj',
        'TxKGI',
        'endOfDay',
        'xWcoJ',
        'LYLHE',
        'uuohX',
        'profilePic',
        'associatio',
        'open',
        'fDdaz',
        'ls/User',
        'Url',
        'indexOf',
        'eues',
        '1653894QCSdqp',
        'LNbbX',
        'LZFpa',
        'EMocL',
        'Ectnk',
        'zTaJe',
        'userId',
        'model',
        'default',
        'defineProp',
        'vVlqm',
        'contact'
    ];
    a = function () {
        return a7;
    };
    return a();
}
(function (c, d) {
    const W = b, X = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(W(0x19e)) / (0x1 * -0x25b5 + -0x10 * -0xcd + 0x18e6) * (parseInt(W(0x18d)) / (-0x2 * -0x50b + -0x1da3 + 0x138f)) + -parseInt(X(0x17a)) / (0x1b86 + 0x183 + -0x1d06) + parseInt(X(0x1ca)) / (-0x704 + -0x10b7 + -0x1 * -0x17bf) + parseInt(X(0x1b5)) / (0x1 * 0x1acb + -0x1 * 0x14bf + -0x607) + parseInt(W(0x197)) / (0x3 * -0x504 + 0x1662 + -0x750) * (-parseInt(W(0x1d6)) / (0x26a0 + 0x2639 + 0x4cd2 * -0x1)) + parseInt(W(0x1cb)) / (-0x253d + -0xb55 * 0x3 + 0x4 * 0x11d1) * (-parseInt(W(0x1d0)) / (-0x551 + -0x9 * -0x1b1 + -0x9df)) + parseInt(X(0x19b)) / (-0x1 * 0x2119 + -0x1a6c + 0x3b8f);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x18743b + 0xc40e4 + 0x8b * -0x29e3));
var __importDefault = this && this[Y(0x1cd) + Z(0x1be)] || function (c) {
    const a0 = Y;
    return c && c[a0(0x1aa)] ? c : { 'default': c };
};
const u = {};
u[Y(0x1bc)] = !![], Object[Y(0x183) + Z(0x1a3)](exports, Y(0x1aa), u);
const sequelize_1 = require(Z(0x18b)), date_fns_1 = require(Z(0x1a8)), Ticket_1 = __importDefault(require(Y(0x1ba) + Z(0x193))), UsersQueues_1 = __importDefault(require(Y(0x1ba) + Z(0x1a9) + Y(0x179))), User_1 = __importDefault(require(Y(0x1ba) + Y(0x176))), Contact_1 = __importDefault(require(Z(0x1ba) + Z(0x1ac))), Queue_1 = __importDefault(require(Z(0x1ba) + Y(0x1b2))), TicketsQueuesService = async ({
        dateStart: n,
        dateEnd: o,
        status: p,
        userId: q,
        queuesIds: r,
        tenantId: s,
        showAll: t
    }) => {
        const a1 = Y, a2 = Y, v = {};
        v[a1(0x1ae)] = a1(0x174), v[a2(0x1d7)] = a1(0x198), v[a1(0x17b)] = function (I, J) {
            return I === J;
        }, v[a2(0x189)] = a2(0x16f), v[a1(0x17d)] = a1(0x17f), v[a1(0x1a7)] = function (I, J) {
            return I === J;
        }, v[a1(0x1ce)] = a2(0x1b3), v[a2(0x194)] = a2(0x1c4), v[a2(0x171)] = a1(0x185), v[a1(0x1b8)] = a2(0x1c2), v[a1(0x1a5)] = a2(0x18e), v[a2(0x199)] = a2(0x172) + a2(0x177), v[a1(0x1c5)] = a2(0x1c7), v[a2(0x1d1)] = a1(0x1cf), v[a1(0x1c9)] = a1(0x1af), v[a1(0x192)] = function (I, J) {
            return I === J;
        }, v[a2(0x1b4)] = a2(0x17e), v[a2(0x18a)] = a1(0x1a4), v[a2(0x175)] = function (I, J) {
            return I !== J;
        }, v[a2(0x1b0)] = a1(0x170), v[a1(0x1c8)] = a1(0x191), v[a2(0x1c3)] = function (I, J) {
            return I == J;
        }, v[a2(0x187)] = a1(0x19c), v[a1(0x1cc)] = a1(0x1b7), v[a1(0x1bb)] = a1(0x1ad), v[a2(0x1a0)] = a1(0x1a6), v[a2(0x18f)] = a1(0x184), v[a2(0x17c)] = function (I, J) {
            return I !== J;
        }, v[a1(0x195)] = a2(0x1d8), v[a1(0x19d)] = function (I, J) {
            return I && J;
        }, v[a2(0x186)] = function (I, J) {
            return I !== J;
        }, v[a2(0x1ab)] = a2(0x1d3), v[a2(0x190)] = a2(0x19a), v[a2(0x1bd)] = a1(0x1b6);
        const w = v;
        let x = {};
        const y = {};
        y[a1(0x181)] = Contact_1[a2(0x182)], y['as'] = w[a2(0x171)], y[a1(0x1b9)] = [
            'id',
            w[a1(0x1b8)],
            w[a1(0x1a5)],
            w[a1(0x199)]
        ];
        const z = {};
        z[a2(0x173) + 'n'] = w[a1(0x1c5)], z[a2(0x1b9)] = [
            'id',
            w[a1(0x1b8)]
        ];
        const A = {};
        A[a1(0x181)] = User_1[a1(0x182)], A['as'] = w[a1(0x1d1)], A[a2(0x1b9)] = [
            'id',
            w[a1(0x1b8)],
            w[a2(0x1c9)]
        ];
        const B = [
                y,
                z,
                A
            ], C = {};
        C[a1(0x1bf)] = s;
        const D = {};
        D[a1(0x1c1)] = C;
        const E = await Queue_1[a1(0x182)][a1(0x1d5)](D);
        if (E) {
            if (w[a2(0x192)](w[a1(0x1b4)], w[a2(0x18a)])) {
                const J = C[a2(0x178)](+D);
                J && k[a2(0x1d4)](+F);
            } else {
                const J = {};
                J[a1(0x180)] = q;
                const K = {};
                K[a1(0x1c1)] = J;
                const L = await UsersQueues_1[a1(0x182)][a1(0x19f)](K);
                let M = L[a2(0x1a2)](O => O[a1(0x1a1)]);
                if (r) {
                    if (w[a2(0x175)](w[a1(0x1b0)], w[a2(0x1c8)])) {
                        const O = [];
                        r[a2(0x188)](P => {
                            const a3 = a1, a4 = a2;
                            if (w[a3(0x17b)](w[a3(0x189)], w[a3(0x17d)]))
                                z[a3(0x1d4)](+A);
                            else {
                                const R = M[a3(0x178)](+P);
                                R && (w[a3(0x1a7)](w[a3(0x1ce)], w[a4(0x194)]) ? y = [
                                    w[a4(0x1ae)],
                                    w[a4(0x1d7)]
                                ] : O[a4(0x1d4)](+P));
                            }
                        }), M = O;
                    } else
                        F = {
                            ...G,
                            'createdAt': {
                                [n['Op'][a1(0x196)]]: [
                                    +(-0x831 + -0x18 * -0x163 + -0x1917, o[a1(0x18c)])((-0x2 * 0x6c3 + -0x4 * -0x1dc + 0x26 * 0x29, p[a1(0x1d2)])(q)),
                                    +(0xf61 + -0x6f0 + -0x871, r[a1(0x16e)])((-0x1ee1 + -0xf2 * -0x13 + -0xceb * -0x1, s[a2(0x1d2)])(t))
                                ]
                            }
                        };
                }
                const N = { [sequelize_1['Op']['in']]: M };
                x = {
                    ...x,
                    'queueId': N
                };
            }
        }
        if (w[a2(0x1c3)](t, w[a2(0x187)])) {
            if (w[a2(0x17b)](w[a2(0x1cc)], w[a2(0x1bb)])) {
                const R = { ...C };
                R[a1(0x1c6)] = D, A = R;
            } else
                x = {};
        }
        if (p)
            w[a2(0x192)](w[a2(0x1a0)], w[a1(0x18f)]) ? y = {} : x = {
                ...x,
                'status': p
            };
        else {
            if (w[a1(0x17c)](w[a1(0x195)], w[a2(0x195)])) {
                const T = [];
                A[a1(0x188)](U => {
                    const a5 = a2, a6 = a2, V = U[a5(0x178)](+U);
                    V && T[a5(0x1d4)](+U);
                }), D = T;
            } else
                p = [
                    w[a1(0x1ae)],
                    w[a2(0x1d7)]
                ];
        }
        if (w[a2(0x19d)](n, o)) {
            if (w[a1(0x186)](w[a1(0x1ab)], w[a2(0x1ab)])) {
                const U = {};
                return U[a1(0x182)] = j, C && D[a1(0x1aa)] ? i : U;
            } else
                x = {
                    ...x,
                    'createdAt': {
                        [sequelize_1['Op'][a1(0x196)]]: [
                            +(-0x1 * 0x23da + -0x29 * 0x23 + 0x2975, date_fns_1[a1(0x18c)])((0x6c * -0xb + 0x24ab + -0x2007, date_fns_1[a2(0x1d2)])(n)),
                            +(-0xcbb + 0x11 * 0x2a + -0x1fd * -0x5, date_fns_1[a2(0x16e)])((-0x975 + 0x71a + 0x25b, date_fns_1[a1(0x1d2)])(o))
                        ]
                    }
                };
        }
        const F = { ...x };
        F[a1(0x1bf)] = s;
        const G = {};
        G[a2(0x1c1)] = F, G[a2(0x1c0)] = B, G[a1(0x1b1)] = [[
                w[a2(0x190)],
                w[a2(0x1bd)]
            ]];
        const H = await Ticket_1[a2(0x182)][a1(0x19f)](G);
        return H;
    };
exports[Y(0x182)] = TicketsQueuesService;