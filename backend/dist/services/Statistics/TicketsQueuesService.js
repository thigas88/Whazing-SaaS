'use strict';
const W = b, X = b;
(function (c, d) {
    const U = b, V = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(U(0xe3)) / (-0x796 + -0x1 * 0x1e57 + 0x25ee) + parseInt(U(0xc6)) / (-0x1043 + -0x1008 + 0x204d) + -parseInt(U(0xe7)) / (-0x527 * 0x2 + 0x1d * 0x102 + -0x1 * 0x12e9) * (-parseInt(V(0xee)) / (0x1329 * -0x1 + -0x267f + 0x1cd6 * 0x2)) + -parseInt(V(0xed)) / (-0x13f * -0x8 + -0xa * -0x53 + -0xd31) * (parseInt(V(0xbe)) / (0x1305 + -0x1a5b + 0x75c)) + -parseInt(U(0xf2)) / (-0x2555 + -0x7 * -0x3d + 0x23b1) * (parseInt(V(0xca)) / (-0xb20 + 0x1b7b + -0x1053)) + -parseInt(U(0xf9)) / (-0xb99 * 0x3 + 0x2218 + 0xbc) + parseInt(U(0xec)) / (0x2600 + 0x191 + 0xd2d * -0x3);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xc317f * -0x1 + 0x1b7 * 0x601 + 0xf4d6d));
function a() {
    const a5 = [
        'ls/User',
        'UyBDG',
        'include',
        'MvPgQ',
        '12758751VIYOgy',
        'name',
        'user',
        'pending',
        'shOVw',
        'date-fns',
        'FHMvM',
        'defineProp',
        'xcdyG',
        'number',
        'true',
        'RsHJz',
        'bPZIW',
        'status',
        'whatsapp',
        'tECtt',
        'rpYLy',
        'qbIbK',
        'KKjoU',
        'where',
        'eues',
        'XBDRK',
        'model',
        'startOfDay',
        '__importDe',
        'GBkCs',
        'value',
        'map',
        'queueId',
        'count',
        'CsjOP',
        'default',
        'IprQG',
        'updatedAt',
        'contact',
        'erty',
        'ZXIzm',
        'iedTT',
        'chVet',
        '4107126XXVjVs',
        'nozzm',
        'STTak',
        'profile',
        'UaOKX',
        'ls/Queue',
        'PIOlq',
        'QrYKY',
        '2756950pQfNTg',
        'Url',
        'ehKbd',
        'indexOf',
        '8xtSQcs',
        'profilePic',
        'attributes',
        'AGMzm',
        '../../mode',
        'push',
        'zNNJp',
        'aJhEQ',
        'endOfDay',
        'XYtZT',
        'order',
        'LOeiK',
        'jPpdX',
        'tenantId',
        'udpPJ',
        'ls/UsersQu',
        'hBBvI',
        'associatio',
        'between',
        'sFVGv',
        'forEach',
        'userId',
        'sequelize',
        '__esModule',
        'OiKHm',
        '841528IpBvgK',
        'sZGKs',
        'cnumB',
        'dMRuf',
        '3qkyFDb',
        'parseISO',
        'DESC',
        'ls/Contact',
        'findAll',
        '23019190gKKQTx',
        '5wYtfTl',
        '4928416fybYTT',
        'iJivf',
        'VJVwl',
        'open',
        '7632163NNcwQk',
        'fault',
        'ls/Ticket'
    ];
    a = function () {
        return a5;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x3 * 0xa81 + -0x1 * -0xc9b + -0x2b65);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[W(0x111) + X(0xf3)] || function (c) {
    const Y = W;
    return c && c[Y(0xe1)] ? c : { 'default': c };
};
const u = {};
u[X(0x113)] = !![], Object[W(0x100) + W(0xba)](exports, W(0xe1), u);
const sequelize_1 = require(X(0xe0)), date_fns_1 = require(X(0xfe)), Ticket_1 = __importDefault(require(X(0xce) + W(0xf4))), UsersQueues_1 = __importDefault(require(W(0xce) + X(0xd9) + X(0x10d))), User_1 = __importDefault(require(X(0xce) + X(0xf5))), Contact_1 = __importDefault(require(W(0xce) + X(0xea))), Queue_1 = __importDefault(require(X(0xce) + W(0xc3))), TicketsQueuesService = async ({
        dateStart: n,
        dateEnd: o,
        status: p,
        userId: q,
        queuesIds: r,
        tenantId: s,
        showAll: t
    }) => {
        const Z = W, a0 = X, v = {};
        v[Z(0xfd)] = function (I, J) {
            return I !== J;
        }, v[Z(0xf8)] = Z(0x10a), v[a0(0xda)] = function (I, J) {
            return I === J;
        }, v[Z(0xd0)] = a0(0xe5), v[a0(0xc4)] = a0(0xcd), v[a0(0xbf)] = a0(0xf1), v[a0(0xd3)] = a0(0xfc), v[a0(0xd8)] = a0(0xb9), v[a0(0xef)] = a0(0xfa), v[a0(0xbb)] = Z(0x102), v[Z(0x101)] = a0(0xcb) + Z(0xc7), v[Z(0xe6)] = a0(0x107), v[Z(0xc2)] = a0(0xfb), v[a0(0xdd)] = Z(0xc1), v[a0(0xe2)] = a0(0xc0), v[a0(0x105)] = Z(0xd5), v[a0(0xd6)] = Z(0x109), v[Z(0xf0)] = function (I, J) {
            return I == J;
        }, v[a0(0xf6)] = a0(0x103), v[Z(0x119)] = Z(0xc5), v[a0(0x112)] = function (I, J) {
            return I === J;
        }, v[Z(0x117)] = Z(0x104), v[a0(0xff)] = function (I, J) {
            return I === J;
        }, v[Z(0xc8)] = Z(0x10e), v[Z(0xe4)] = function (I, J) {
            return I && J;
        }, v[a0(0xbc)] = function (I, J) {
            return I === J;
        }, v[Z(0x10b)] = a0(0xbd), v[a0(0x108)] = Z(0x11a), v[Z(0xd1)] = Z(0xe9);
        const w = v;
        let x = {};
        const y = {};
        y[Z(0x10f)] = Contact_1[a0(0x118)], y['as'] = w[Z(0xd8)], y[a0(0xcc)] = [
            'id',
            w[Z(0xef)],
            w[Z(0xbb)],
            w[Z(0x101)]
        ];
        const z = {};
        z[Z(0xdb) + 'n'] = w[a0(0xe6)], z[Z(0xcc)] = [
            'id',
            w[Z(0xef)]
        ];
        const A = {};
        A[a0(0x10f)] = User_1[a0(0x118)], A['as'] = w[a0(0xc2)], A[Z(0xcc)] = [
            'id',
            w[Z(0xef)],
            w[a0(0xdd)]
        ];
        const B = [
                y,
                z,
                A
            ], C = {};
        C[Z(0xd7)] = s;
        const D = {};
        D[a0(0x10c)] = C;
        const E = await Queue_1[a0(0x118)][a0(0x116)](D);
        if (E) {
            if (w[Z(0xda)](w[a0(0xe2)], w[Z(0xe2)])) {
                const I = {};
                I[a0(0xdf)] = q;
                const J = {};
                J[Z(0x10c)] = I;
                const K = await UsersQueues_1[Z(0x118)][Z(0xeb)](J);
                let L = K[Z(0x114)](N => N[Z(0x115)]);
                if (r) {
                    if (w[a0(0xda)](w[a0(0x105)], w[Z(0xd6)]))
                        F = {
                            ...G,
                            'createdAt': {
                                [n['Op'][Z(0xdc)]]: [
                                    +(-0xf9f + -0x2e * -0xc2 + -0x133d, o[Z(0x110)])((-0x6a9 + -0xc2b + 0x5 * 0x3c4, p[a0(0xe8)])(q)),
                                    +(-0xbda + 0x133 * -0xa + -0x5f6 * -0x4, r[a0(0xd2)])((0x1ba8 + 0x253b + -0x40e3, s[a0(0xe8)])(t))
                                ]
                            }
                        };
                    else {
                        const O = [];
                        r[a0(0xde)](P => {
                            const a1 = a0, a2 = a0;
                            if (w[a1(0xfd)](w[a2(0xf8)], w[a1(0xf8)])) {
                                const R = {};
                                return R[a1(0x118)] = J, C && D[a2(0xe1)] ? P : R;
                            } else {
                                const R = L[a1(0xc9)](+P);
                                if (R) {
                                    if (w[a1(0xda)](w[a1(0xd0)], w[a2(0xc4)])) {
                                        const T = C[a1(0xc9)](+D);
                                        T && M[a2(0xcf)](+F);
                                    } else
                                        O[a1(0xcf)](+P);
                                }
                            }
                        }), L = O;
                    }
                }
                const M = { [sequelize_1['Op']['in']]: L };
                x = {
                    ...x,
                    'queueId': M
                };
            } else {
                const Q = [];
                A[a0(0xde)](R => {
                    const a3 = Z, a4 = Z, S = R[a3(0xc9)](+R);
                    S && Q[a3(0xcf)](+R);
                }), D = Q;
            }
        }
        if (w[Z(0xf0)](t, w[Z(0xf6)])) {
            if (w[a0(0xfd)](w[Z(0x119)], w[a0(0x119)])) {
                const R = { ...C };
                R[a0(0x106)] = D, A = R;
            } else
                x = {};
        }
        p ? w[Z(0x112)](w[a0(0x117)], w[a0(0x117)]) ? x = {
            ...x,
            'status': p
        } : y = [
            w[Z(0xbf)],
            w[Z(0xd3)]
        ] : w[a0(0xff)](w[a0(0xc8)], w[Z(0xc8)]) ? p = [
            w[a0(0xbf)],
            w[a0(0xd3)]
        ] : z[Z(0xcf)](+A);
        w[a0(0xe4)](n, o) && (w[a0(0xbc)](w[a0(0x10b)], w[a0(0x10b)]) ? x = {
            ...x,
            'createdAt': {
                [sequelize_1['Op'][Z(0xdc)]]: [
                    +(-0x574 * -0x1 + -0x80b + -0x33 * -0xd, date_fns_1[Z(0x110)])((0x4 * 0x1b1 + 0x1 * -0x137 + -0x58d * 0x1, date_fns_1[Z(0xe8)])(n)),
                    +(-0x1d73 + 0x9f0 * 0x3 + -0x5d, date_fns_1[a0(0xd2)])((-0x108 + -0x52 * -0x6 + -0xe4, date_fns_1[Z(0xe8)])(o))
                ]
            }
        } : y = {});
        const F = { ...x };
        F[a0(0xd7)] = s;
        const G = {};
        G[a0(0x10c)] = F, G[Z(0xf7)] = B, G[a0(0xd4)] = [[
                w[Z(0x108)],
                w[Z(0xd1)]
            ]];
        const H = await Ticket_1[a0(0x118)][Z(0xeb)](G);
        return H;
    };
exports[W(0x118)] = TicketsQueuesService;