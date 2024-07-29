'use strict';
const Y = b, Z = b;
(function (c, d) {
    const W = b, X = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(W(0x1b7)) / (0x2070 + -0x576 + -0x1af9) * (parseInt(X(0x1a8)) / (0x26b * 0xd + -0x1bd7 + -0x396)) + -parseInt(X(0x1af)) / (0x2 * -0x3a3 + -0x21 * 0x23 + 0xbcc) + -parseInt(W(0x1f5)) / (0x1bb * -0x4 + 0x2689 * 0x1 + 0x1 * -0x1f99) * (parseInt(X(0x1e7)) / (0x2e7 * -0x3 + 0x2e * -0x75 + -0x44 * -0x70)) + parseInt(W(0x19d)) / (-0x1537 + -0x174a + -0x1 * -0x2c87) * (parseInt(X(0x1a7)) / (0xfb * -0x13 + 0x1369 * -0x2 + 0x2 * 0x1cbd)) + parseInt(X(0x1c4)) / (-0x1525 + 0x14ec + 0xd * 0x5) + parseInt(X(0x1e6)) / (-0x1 * 0x18f5 + -0x14d8 + -0x2 * -0x16eb) * (parseInt(W(0x1d1)) / (-0x586 * 0x2 + -0xc47 * 0x1 + 0x175d)) + parseInt(X(0x1b9)) / (-0x11b9 + 0xee9 + -0x2db * -0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x2f112 + 0x11 * 0x39ca + 0x11920));
var __importDefault = this && this[Y(0x19e) + Y(0x1d9)] || function (c) {
    const a0 = Z;
    return c && c[a0(0x194)] ? c : { 'default': c };
};
const u = {};
u[Z(0x1cb)] = !![], Object[Z(0x1a5) + Y(0x193)](exports, Y(0x194), u);
const sequelize_1 = require(Z(0x1b5)), date_fns_1 = require(Y(0x1ca)), Ticket_1 = __importDefault(require(Y(0x1de) + Z(0x1e3))), UsersQueues_1 = __importDefault(require(Z(0x1de) + Z(0x1ee) + Y(0x1d4))), User_1 = __importDefault(require(Y(0x1de) + Y(0x1c3))), Contact_1 = __importDefault(require(Y(0x1de) + Y(0x19b))), Queue_1 = __importDefault(require(Z(0x1de) + Y(0x1e5))), TicketsQueuesService = async ({
        dateStart: n,
        dateEnd: o,
        status: p,
        userId: q,
        queuesIds: r,
        tenantId: s,
        showAll: t
    }) => {
        const a1 = Z, a2 = Z, v = {};
        v[a1(0x1cc)] = a2(0x1ec), v[a2(0x19a)] = a2(0x1cd), v[a2(0x1f2)] = function (I, J) {
            return I !== J;
        }, v[a1(0x1ed)] = a2(0x1b0), v[a1(0x198)] = function (I, J) {
            return I === J;
        }, v[a1(0x1f0)] = a2(0x1d2), v[a1(0x1ea)] = a2(0x1eb), v[a2(0x1b1)] = a2(0x1b4), v[a2(0x1bd)] = a2(0x1ab), v[a1(0x1f7)] = a2(0x19f), v[a1(0x1a9)] = a2(0x1f4) + a2(0x1bf), v[a2(0x1c8)] = a1(0x1c7), v[a2(0x1c5)] = a1(0x1e8), v[a1(0x1b8)] = a2(0x1db), v[a2(0x1ae)] = function (I, J) {
            return I !== J;
        }, v[a2(0x1a6)] = a2(0x1b3), v[a1(0x1a0)] = a2(0x199), v[a1(0x1f1)] = a2(0x1d3), v[a2(0x1e4)] = function (I, J) {
            return I == J;
        }, v[a1(0x1df)] = a2(0x1f6), v[a2(0x1b2)] = function (I, J) {
            return I === J;
        }, v[a1(0x1a1)] = a1(0x1f3), v[a1(0x196)] = function (I, J) {
            return I !== J;
        }, v[a1(0x1e1)] = a1(0x1cf), v[a1(0x1bc)] = a1(0x19c), v[a2(0x197)] = function (I, J) {
            return I && J;
        }, v[a1(0x1ef)] = function (I, J) {
            return I !== J;
        }, v[a2(0x1a2)] = a2(0x1ad), v[a2(0x192)] = a2(0x1dd), v[a1(0x1e9)] = a1(0x1ac), v[a1(0x1da)] = a2(0x1d7);
        const w = v;
        let x = {};
        const y = {};
        y[a2(0x1c6)] = Contact_1[a2(0x1aa)], y['as'] = w[a1(0x1b1)], y[a1(0x1c0)] = [
            'id',
            w[a2(0x1bd)],
            w[a1(0x1f7)],
            w[a2(0x1a9)]
        ];
        const z = {};
        z[a2(0x1c9) + 'n'] = w[a2(0x1c8)], z[a2(0x1c0)] = [
            'id',
            w[a1(0x1bd)]
        ];
        const A = {};
        A[a2(0x1c6)] = User_1[a2(0x1aa)], A['as'] = w[a2(0x1c5)], A[a1(0x1c0)] = [
            'id',
            w[a2(0x1bd)],
            w[a1(0x1b8)]
        ];
        const B = [
                y,
                z,
                A
            ], C = {};
        C[a2(0x1a3)] = s;
        const D = {};
        D[a1(0x1e0)] = C;
        const E = await Queue_1[a1(0x1aa)][a2(0x1d5)](D);
        if (E) {
            if (w[a1(0x1ae)](w[a1(0x1a6)], w[a1(0x1a0)])) {
                const I = {};
                I[a1(0x1e2)] = q;
                const J = {};
                J[a2(0x1e0)] = I;
                const K = await UsersQueues_1[a2(0x1aa)][a2(0x1b6)](J);
                let L = K[a1(0x1a4)](N => N[a1(0x1d8)]);
                if (r) {
                    if (w[a1(0x1ae)](w[a2(0x1f1)], w[a2(0x1f1)]))
                        z[a2(0x1c2)](+A);
                    else {
                        const O = [];
                        r[a2(0x195)](P => {
                            const a3 = a1, a4 = a2;
                            if (w[a3(0x1f2)](w[a4(0x1ed)], w[a3(0x1ed)]))
                                F = {
                                    ...G,
                                    'createdAt': {
                                        [n['Op'][a4(0x1d6)]]: [
                                            +(-0x26d1 + 0xb83 * 0x2 + 0x137 * 0xd, o[a4(0x1be)])((-0x1 * 0x1be7 + -0x9 * 0x3ab + -0xe2 * -0x45, p[a4(0x1c1)])(q)),
                                            +(0x11b1 + -0x4 * 0x36a + -0x409 * 0x1, r[a4(0x1d0)])((-0x959 * -0x3 + -0xb * -0x386 + -0x98b * 0x7, s[a3(0x1c1)])(t))
                                        ]
                                    }
                                };
                            else {
                                const R = L[a3(0x1ba)](+P);
                                R && (w[a4(0x198)](w[a4(0x1f0)], w[a3(0x1ea)]) ? y = [
                                    w[a3(0x1cc)],
                                    w[a3(0x19a)]
                                ] : O[a4(0x1c2)](+P));
                            }
                        }), L = O;
                    }
                }
                const M = { [sequelize_1['Op']['in']]: L };
                x = {
                    ...x,
                    'queueId': M
                };
            } else
                y = {};
        }
        if (w[a1(0x1e4)](t, w[a2(0x1df)])) {
            if (w[a1(0x1b2)](w[a2(0x1a1)], w[a1(0x1a1)]))
                x = {};
            else {
                const R = { ...C };
                R[a2(0x1dc)] = D, A = R;
            }
        }
        if (p) {
            if (w[a2(0x196)](w[a1(0x1e1)], w[a2(0x1e1)])) {
                const S = C[a1(0x1ba)](+D);
                S && k[a2(0x1c2)](+F);
            } else
                x = {
                    ...x,
                    'status': p
                };
        } else {
            if (w[a1(0x1f2)](w[a2(0x1bc)], w[a2(0x1bc)])) {
                const T = [];
                A[a1(0x195)](U => {
                    const a5 = a2, a6 = a2, V = U[a5(0x1ba)](+U);
                    V && T[a5(0x1c2)](+U);
                }), D = T;
            } else
                p = [
                    w[a2(0x1cc)],
                    w[a2(0x19a)]
                ];
        }
        if (w[a2(0x197)](n, o)) {
            if (w[a1(0x1ef)](w[a2(0x1a2)], w[a2(0x192)]))
                x = {
                    ...x,
                    'createdAt': {
                        [sequelize_1['Op'][a1(0x1d6)]]: [
                            +(0x1 * 0x13d0 + 0x67 + -0x1437, date_fns_1[a1(0x1be)])((0x15 * 0x15b + -0x5 * -0x525 + 0x1210 * -0x3, date_fns_1[a2(0x1c1)])(n)),
                            +(0x1613 + -0x1085 * 0x1 + -0xed * 0x6, date_fns_1[a1(0x1d0)])((-0x7 * -0x54d + 0xff8 + -0x3513, date_fns_1[a1(0x1c1)])(o))
                        ]
                    }
                };
            else {
                const U = {};
                return U[a2(0x1aa)] = j, C && D[a1(0x194)] ? i : U;
            }
        }
        const F = { ...x };
        F[a2(0x1a3)] = s;
        const G = {};
        G[a1(0x1e0)] = F, G[a1(0x1bb)] = B, G[a1(0x1ce)] = [[
                w[a2(0x1e9)],
                w[a1(0x1da)]
            ]];
        const H = await Ticket_1[a1(0x1aa)][a2(0x1b6)](G);
        return H;
    };
function a() {
    const a7 = [
        'associatio',
        'date-fns',
        'value',
        'SuwBF',
        'pending',
        'order',
        'uzaHE',
        'endOfDay',
        '10ediBGm',
        'ekWMq',
        'TSpfa',
        'eues',
        'count',
        'between',
        'DESC',
        'queueId',
        'fault',
        'tkhec',
        'profile',
        'status',
        'VfFQD',
        '../../mode',
        'HKbpQ',
        'where',
        'DqxGa',
        'userId',
        'ls/Ticket',
        'tLquT',
        'ls/Queue',
        '361377DNvJCo',
        '2555Nkuqtc',
        'user',
        'FyBay',
        'uCLZE',
        'glieE',
        'open',
        'SOdYv',
        'ls/UsersQu',
        'LkHip',
        'glChZ',
        'RMJMh',
        'laLqb',
        'hbgbk',
        'profilePic',
        '1288xRPchP',
        'true',
        'tFLod',
        'QsEEd',
        'erty',
        '__esModule',
        'forEach',
        'VLQtF',
        'xGhyL',
        'QaXDV',
        'UwPBV',
        'pjWqp',
        'ls/Contact',
        'PqiBG',
        '4302ZXjLhN',
        '__importDe',
        'number',
        'OWIdd',
        'BGECV',
        'jAoXf',
        'tenantId',
        'map',
        'defineProp',
        'znZpd',
        '938UaweqN',
        '2KezpSa',
        'JuiFa',
        'default',
        'name',
        'updatedAt',
        'keKOG',
        'dYgWs',
        '426147MZDnsj',
        'ngNKZ',
        'HeZrM',
        'JRXBN',
        'aiGsL',
        'contact',
        'sequelize',
        'findAll',
        '22817hFJmgi',
        'tWoAZ',
        '2104729ONvwwa',
        'indexOf',
        'include',
        'PenFj',
        'MFKTF',
        'startOfDay',
        'Url',
        'attributes',
        'parseISO',
        'push',
        'ls/User',
        '1060144fZcGOP',
        'BdkKP',
        'model',
        'whatsapp',
        'VCnGm'
    ];
    a = function () {
        return a7;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x7 * 0xf5 + -0x2152 + -0x407 * -0x7);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[Y(0x1aa)] = TicketsQueuesService;