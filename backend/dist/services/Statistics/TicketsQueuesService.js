'use strict';
const W = b, X = b;
(function (c, d) {
    const U = b, V = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(U(0x1db)) / (-0x861 + 0x4 * 0x56c + 0x2 * -0x6a7) * (parseInt(V(0x1cf)) / (0x207 * -0x9 + 0x7ea + -0xa57 * -0x1)) + parseInt(V(0x1b3)) / (0x5d * -0x4c + -0xc9 * 0x7 + 0x1 * 0x211e) + parseInt(U(0x19a)) / (0x5d * 0x56 + -0x19a9 + -0x591) * (parseInt(V(0x1e4)) / (0x1f92 + -0xfd6 + 0x9 * -0x1bf)) + parseInt(U(0x1b2)) / (-0x3 * 0x185 + 0x1de7 + 0x1952 * -0x1) + parseInt(V(0x1ca)) / (-0xee8 + 0x1 * -0x15c5 + -0x24 * -0x105) + parseInt(V(0x1b4)) / (0x3 * -0x3fd + -0x6ab + 0x12aa) + -parseInt(V(0x1a7)) / (0x10be + 0x1f89 + -0x303e);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x62b9a + -0x6ebbb + 0x171855));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x129 + 0x1 * 0xa94 + 0x122 * -0x9);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const a5 = [
        'NTPnU',
        '5HLjbQR',
        'erty',
        'awtEj',
        'OvwSp',
        'QcqLN',
        'zTiAg',
        'CXpUx',
        'status',
        'contact',
        'map',
        'name',
        'sINDP',
        'VIGiE',
        'BjQYj',
        'FsjCH',
        'sdWfX',
        'iTkMS',
        'QMrJf',
        'DLhuA',
        'updatedAt',
        'zktrT',
        'attributes',
        'findAll',
        'where',
        'profilePic',
        'tenantId',
        'open',
        'CJLtY',
        '776380aiUJGL',
        'default',
        'true',
        'NcXHd',
        'DESC',
        'endOfDay',
        'order',
        'yQYgN',
        'ls/User',
        'gKafF',
        'sVvuL',
        'NPevA',
        'Bcnda',
        '24303096EjSYDz',
        'fault',
        'SLvDJ',
        'startOfDay',
        'fXSQb',
        'hqNFI',
        '../../mode',
        'RDEFF',
        'TgCye',
        'push',
        'indexOf',
        '7089816jVWyBt',
        '131154RnxCFa',
        '2870896uszqjl',
        '__esModule',
        'rXXsa',
        'count',
        'ls/Ticket',
        'qyoux',
        'parseISO',
        'ZMQyP',
        'value',
        'tuekr',
        'CVDsz',
        'include',
        'ls/Contact',
        'rrnfJ',
        'vxpTJ',
        'whatsapp',
        'profile',
        'associatio',
        'sXMvz',
        'noWlK',
        'user',
        'pending',
        '3253208soSYwj',
        'queueId',
        'tVkZG',
        'date-fns',
        'ls/Queue',
        '34YPniBo',
        'diBRr',
        'rmwUA',
        'userId',
        'lLayv',
        'SUAEo',
        'eues',
        'model',
        'pcXjz',
        'forEach',
        '__importDe',
        'sequelize',
        '65465uidoEr',
        'defineProp',
        'Url',
        'between',
        'VRqvb',
        'QXTyf',
        'number',
        'ls/UsersQu'
    ];
    a = function () {
        return a5;
    };
    return a();
}
var __importDefault = this && this[W(0x1d9) + W(0x1a8)] || function (c) {
    const Y = W;
    return c && c[Y(0x1b5)] ? c : { 'default': c };
};
const u = {};
u[X(0x1bc)] = !![], Object[X(0x1dc) + W(0x1e5)](exports, X(0x1b5), u);
const sequelize_1 = require(W(0x1da)), date_fns_1 = require(W(0x1cd)), Ticket_1 = __importDefault(require(W(0x1ad) + W(0x1b8))), UsersQueues_1 = __importDefault(require(W(0x1ad) + X(0x1e2) + X(0x1d5))), User_1 = __importDefault(require(W(0x1ad) + W(0x1a2))), Contact_1 = __importDefault(require(W(0x1ad) + W(0x1c0))), Queue_1 = __importDefault(require(X(0x1ad) + W(0x1ce))), TicketsQueuesService = async ({
        dateStart: n,
        dateEnd: o,
        status: p,
        userId: q,
        queuesIds: r,
        tenantId: s,
        showAll: t
    }) => {
        const Z = W, a0 = W, v = {};
        v[Z(0x1ab)] = a0(0x198), v[Z(0x1c7)] = Z(0x1c9), v[Z(0x1ea)] = function (I, J) {
            return I === J;
        }, v[a0(0x1bd)] = a0(0x19d), v[a0(0x1af)] = a0(0x1a5), v[a0(0x1df)] = Z(0x1a3), v[Z(0x1c1)] = a0(0x1ec), v[a0(0x1b9)] = a0(0x1ee), v[a0(0x18e)] = a0(0x1e1), v[Z(0x1e6)] = Z(0x196) + Z(0x1dd), v[a0(0x1be)] = Z(0x1c3), v[a0(0x1ef)] = a0(0x1c8), v[a0(0x1c6)] = Z(0x1c4), v[a0(0x1d4)] = function (I, J) {
            return I !== J;
        }, v[Z(0x1e3)] = a0(0x18f), v[Z(0x18c)] = Z(0x1a4), v[a0(0x18d)] = function (I, J) {
            return I == J;
        }, v[a0(0x1d1)] = Z(0x19c), v[Z(0x1a1)] = Z(0x1b6), v[a0(0x1d3)] = a0(0x199), v[Z(0x1f0)] = a0(0x1bb), v[a0(0x1c2)] = a0(0x1e0), v[a0(0x18b)] = function (I, J) {
            return I !== J;
        }, v[a0(0x1cc)] = a0(0x1d7), v[Z(0x1e8)] = a0(0x190), v[a0(0x1e9)] = function (I, J) {
            return I && J;
        }, v[Z(0x192)] = function (I, J) {
            return I === J;
        }, v[Z(0x1ac)] = Z(0x1ae), v[a0(0x1e7)] = a0(0x1a9), v[a0(0x1a6)] = a0(0x191), v[Z(0x1d0)] = a0(0x19e);
        const w = v;
        let x = {};
        const y = {};
        y[Z(0x1d6)] = Contact_1[Z(0x19b)], y['as'] = w[a0(0x1c1)], y[a0(0x193)] = [
            'id',
            w[Z(0x1b9)],
            w[Z(0x18e)],
            w[Z(0x1e6)]
        ];
        const z = {};
        z[Z(0x1c5) + 'n'] = w[Z(0x1be)], z[a0(0x193)] = [
            'id',
            w[Z(0x1b9)]
        ];
        const A = {};
        A[Z(0x1d6)] = User_1[Z(0x19b)], A['as'] = w[Z(0x1ef)], A[a0(0x193)] = [
            'id',
            w[Z(0x1b9)],
            w[a0(0x1c6)]
        ];
        const B = [
                y,
                z,
                A
            ], C = {};
        C[Z(0x197)] = s;
        const D = {};
        D[a0(0x195)] = C;
        const E = await Queue_1[Z(0x19b)][a0(0x1b7)](D);
        if (E) {
            if (w[Z(0x1d4)](w[a0(0x1e3)], w[a0(0x1e3)]))
                y = [
                    w[Z(0x1ab)],
                    w[a0(0x1c7)]
                ];
            else {
                const J = {};
                J[Z(0x1d2)] = q;
                const K = {};
                K[Z(0x195)] = J;
                const L = await UsersQueues_1[Z(0x19b)][Z(0x194)](K);
                let M = L[a0(0x1ed)](O => O[a0(0x1cb)]);
                if (r) {
                    if (w[Z(0x1ea)](w[Z(0x18c)], w[Z(0x18c)])) {
                        const O = [];
                        r[a0(0x1d8)](P => {
                            const a1 = a0, a2 = Z;
                            if (w[a1(0x1ea)](w[a1(0x1bd)], w[a2(0x1af)])) {
                                const R = { ...C };
                                R[a1(0x1eb)] = D, A = R;
                            } else {
                                const R = M[a2(0x1b1)](+P);
                                R && (w[a2(0x1ea)](w[a2(0x1df)], w[a2(0x1df)]) ? O[a2(0x1b0)](+P) : y = {});
                            }
                        }), M = O;
                    } else {
                        const Q = [];
                        A[Z(0x1d8)](R => {
                            const a3 = Z, a4 = a0, S = R[a3(0x1b1)](+R);
                            S && Q[a3(0x1b0)](+R);
                        }), D = Q;
                    }
                }
                const N = { [sequelize_1['Op']['in']]: M };
                x = {
                    ...x,
                    'queueId': N
                };
            }
        }
        w[a0(0x18d)](t, w[Z(0x1d1)]) && (w[Z(0x1d4)](w[a0(0x1a1)], w[Z(0x1d3)]) ? x = {} : z[Z(0x1b0)](+A));
        if (p) {
            if (w[a0(0x1ea)](w[Z(0x1f0)], w[a0(0x1c2)])) {
                const S = {};
                return S[Z(0x19b)] = j, C && D[a0(0x1b5)] ? i : S;
            } else
                x = {
                    ...x,
                    'status': p
                };
        } else {
            if (w[Z(0x18b)](w[a0(0x1cc)], w[a0(0x1e8)]))
                p = [
                    w[Z(0x1ab)],
                    w[Z(0x1c7)]
                ];
            else {
                const T = C[a0(0x1b1)](+D);
                T && k[a0(0x1b0)](+F);
            }
        }
        w[Z(0x1e9)](n, o) && (w[Z(0x192)](w[Z(0x1ac)], w[a0(0x1e7)]) ? F = {
            ...G,
            'createdAt': {
                [n['Op'][Z(0x1de)]]: [
                    +(0xa2 + -0xf8 * -0x1 + -0x19a, o[a0(0x1aa)])((-0x409 + 0xbae + -0x67 * 0x13, p[Z(0x1ba)])(q)),
                    +(-0x4 * -0x202 + -0x17 * -0x8c + -0x149c, r[Z(0x19f)])((-0x18 * 0x178 + -0x2 * -0xd8 + 0x432 * 0x8, s[a0(0x1ba)])(t))
                ]
            }
        } : x = {
            ...x,
            'createdAt': {
                [sequelize_1['Op'][a0(0x1de)]]: [
                    +(-0x4 * 0x4fc + 0x101 * 0x1 + 0x12ef, date_fns_1[Z(0x1aa)])((-0x1 * 0x208b + 0x150d * -0x1 + 0x2 * 0x1acc, date_fns_1[a0(0x1ba)])(n)),
                    +(0x1915 + 0x1dd9 + -0x36ee, date_fns_1[a0(0x19f)])((-0x1873 * 0x1 + 0x1f * 0xb0 + -0x49 * -0xb, date_fns_1[a0(0x1ba)])(o))
                ]
            }
        });
        const F = { ...x };
        F[a0(0x197)] = s;
        const G = {};
        G[Z(0x195)] = F, G[Z(0x1bf)] = B, G[a0(0x1a0)] = [[
                w[a0(0x1a6)],
                w[Z(0x1d0)]
            ]];
        const H = await Ticket_1[Z(0x19b)][a0(0x194)](G);
        return H;
    };
exports[W(0x19b)] = TicketsQueuesService;