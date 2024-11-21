'use strict';
const a0 = b, a1 = b;
(function (c, d) {
    const Y = b, Z = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(Y(0x192)) / (0x127c + 0x2509 + -0x11 * 0x344) * (parseInt(Y(0x13b)) / (0x3 * -0x916 + 0x1 * -0x93f + 0x2483)) + parseInt(Y(0x18d)) / (-0x2342 + -0x17 * -0x16f + 0x2 * 0x126) + -parseInt(Y(0x14a)) / (-0x48 * 0x34 + -0x11a * 0x22 + 0x3418) * (parseInt(Z(0x196)) / (-0xf4 * -0x1 + 0x1 * 0xa52 + -0xb41)) + parseInt(Z(0x163)) / (-0x179 * -0x8 + -0x1 * 0x1c7d + -0x10bb * -0x1) + -parseInt(Y(0x165)) / (0x1ccc + 0x14ea + -0x31af) * (parseInt(Z(0x16b)) / (-0x2136 + 0x401 * 0x7 + 0x537)) + parseInt(Z(0x140)) / (-0x17ec + -0x29 * 0xb + 0x19b8) * (-parseInt(Z(0x15b)) / (0x11a6 + -0x6 * -0x3b2 + 0x4 * -0x9f2)) + parseInt(Y(0x184)) / (0x1 * -0x19b1 + -0x2d4 * 0x9 + 0x3330);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x3 * -0xc0d5 + -0x771d + 0xddfe));
function a() {
    const a5 = [
        'vlIPI',
        'ZiZKX',
        'tenantId',
        'sequelize',
        'attributes',
        'OSeCc',
        'name',
        'cNUKe',
        'defineProp',
        'order',
        'profilePic',
        'UVUGQ',
        '1277276owyElo',
        'SMnbQ',
        'MLgvH',
        'date-fns',
        'eYjWS',
        '__esModule',
        'KnzHt',
        'where',
        'user',
        '873444RLfSCF',
        'bjkka',
        'ls/Queue',
        'jozlB',
        'tpPRL',
        '5BHZYfL',
        'byeBd',
        'createdAt',
        'HzLGp',
        '155nVbZSd',
        'mlRoM',
        'eNgjX',
        'pending',
        'tvIaX',
        'length',
        'whatsapp',
        'rXqgU',
        'updatedAt',
        'GWLZJ',
        'includes',
        'contact',
        '84238UpYSpj',
        'fault',
        'profile',
        'startOfDay',
        'open',
        '72bbjKYU',
        'number',
        'Url',
        'erty',
        'toString',
        'PmXPy',
        'bHPvI',
        'model',
        'queueId',
        'map',
        '22548AyuiEw',
        'ls/User',
        'ls/Ticket',
        'parseISO',
        'userId',
        'PPmGA',
        'value',
        'oOApk',
        'default',
        'DckJJ',
        'tcGMD',
        'hAXRi',
        'wiOPo',
        'Ggyqf',
        'status',
        'DESC',
        'associatio',
        '172580VAYrcS',
        'WeZvd',
        'count',
        'eues',
        'include',
        'filter',
        'tLYzo',
        'AlSRJ',
        '47736BtqCqY',
        'findAll',
        '970004SrWIww',
        'RIhNJ',
        'endOfDay',
        'ICRDI',
        'rFyUF',
        'KBmTV',
        '8fWPSUW',
        'stVqy',
        'BJqDz',
        'ls/Contact',
        'oZbLM',
        'nHByy',
        '__importDe',
        '../../mode',
        'between',
        'ls/UsersQu',
        'HyrzX',
        'nWNVN',
        'ZUgWH'
    ];
    a = function () {
        return a5;
    };
    return a();
}
var __importDefault = this && this[a0(0x171) + a1(0x13c)] || function (c) {
    const a2 = a1;
    return c && c[a2(0x189)] ? c : { 'default': c };
};
const s = {};
s[a1(0x150)] = !![], Object[a1(0x180) + a1(0x143)](exports, a1(0x189), s);
const sequelize_1 = require(a0(0x17b)), date_fns_1 = require(a0(0x187)), Ticket_1 = __importDefault(require(a0(0x172) + a0(0x14c))), UsersQueues_1 = __importDefault(require(a1(0x172) + a0(0x174) + a0(0x15e))), User_1 = __importDefault(require(a1(0x172) + a1(0x14b))), Contact_1 = __importDefault(require(a0(0x172) + a0(0x16e))), Queue_1 = __importDefault(require(a1(0x172) + a1(0x18f))), TicketsQueuesService = async ({
        dateStart: p,
        dateEnd: q,
        status: r,
        userId: t,
        queuesIds: u,
        tenantId: v,
        showAll: w
    }) => {
        const a3 = a0, a4 = a1, x = {};
        x[a3(0x154)] = a3(0x13f), x[a3(0x178)] = a4(0x199), x[a3(0x19d)] = a4(0x13a), x[a3(0x17d)] = a4(0x17e), x[a3(0x157)] = a3(0x141), x[a4(0x16d)] = a3(0x182) + a3(0x142), x[a4(0x153)] = a3(0x19c), x[a4(0x18a)] = a4(0x18c), x[a4(0x170)] = a3(0x13d), x[a3(0x183)] = function (K, L) {
            return K && L;
        }, x[a4(0x185)] = function (K, L) {
            return K !== L;
        }, x[a4(0x146)] = a3(0x162), x[a4(0x18e)] = a4(0x16a), x[a3(0x191)] = function (K, L) {
            return K > L;
        }, x[a3(0x15c)] = function (K, L) {
            return K === L;
        }, x[a4(0x168)] = a4(0x198), x[a3(0x186)] = a3(0x161), x[a4(0x17f)] = function (K, L) {
            return K === L;
        }, x[a3(0x19a)] = function (K, L) {
            return K !== L;
        }, x[a3(0x155)] = a4(0x166), x[a3(0x190)] = a3(0x151), x[a3(0x19f)] = a3(0x14f), x[a3(0x176)] = a3(0x188), x[a3(0x175)] = function (K, L) {
            return K !== L;
        }, x[a4(0x177)] = a3(0x156), x[a4(0x195)] = a4(0x169), x[a4(0x197)] = a4(0x145), x[a4(0x179)] = a3(0x16c), x[a3(0x16f)] = a4(0x19e), x[a3(0x193)] = a4(0x159);
        const y = x, z = {};
        z[a3(0x17a)] = v;
        const A = z, B = {};
        B[a4(0x147)] = Contact_1[a4(0x152)], B['as'] = y[a3(0x19d)], B[a4(0x17c)] = [
            'id',
            y[a3(0x17d)],
            y[a3(0x157)],
            y[a3(0x16d)]
        ];
        const C = {};
        C[a4(0x15a) + 'n'] = y[a4(0x153)], C[a4(0x17c)] = [
            'id',
            y[a4(0x17d)]
        ];
        const D = {};
        D[a3(0x147)] = User_1[a4(0x152)], D['as'] = y[a3(0x18a)], D[a3(0x17c)] = [
            'id',
            y[a3(0x17d)],
            y[a3(0x170)]
        ];
        const E = [
                B,
                C,
                D
            ], F = {};
        F[a4(0x17a)] = v;
        const G = {};
        G[a4(0x18b)] = F;
        const H = await Queue_1[a3(0x152)][a3(0x15d)](G);
        if (y[a3(0x183)](H, !w)) {
            if (y[a3(0x185)](y[a3(0x146)], y[a3(0x18e)])) {
                const K = {};
                K[a4(0x14e)] = t;
                const L = {};
                L[a3(0x18b)] = K;
                const M = await UsersQueues_1[a4(0x152)][a4(0x164)](L);
                let N = M[a4(0x149)](P => P[a4(0x148)]);
                u && y[a4(0x191)](u[a3(0x19b)], 0x1002 + 0x122f + -0x2231) && (y[a3(0x15c)](y[a4(0x168)], y[a4(0x186)]) ? C = D[a3(0x160)](Q => G[a4(0x139)](Q[a4(0x144)]())) : N = N[a3(0x160)](Q => u[a3(0x139)](Q[a3(0x144)]())));
                if (y[a3(0x17f)](N[a4(0x19b)], -0x2418 + 0x192c + -0x576 * -0x2))
                    return y[a4(0x19a)](y[a4(0x155)], y[a4(0x190)]) ? [] : [];
                const O = { [sequelize_1['Op']['in']]: N };
                A[a3(0x148)] = O;
            } else {
                const S = { [D['Op']['in']]: F };
                C[a3(0x158)] = S;
            }
        }
        if (r && y[a3(0x191)](r[a4(0x19b)], 0x1b06 + 0x87c + -0xa * 0x38d)) {
            if (y[a3(0x17f)](y[a3(0x19f)], y[a3(0x176)])) {
                const T = {};
                return T[a4(0x152)] = j, D && F[a4(0x189)] ? G : T;
            } else {
                const T = { [sequelize_1['Op']['in']]: r };
                A[a3(0x158)] = T;
            }
        } else {
            if (y[a4(0x175)](y[a4(0x177)], y[a3(0x195)])) {
                const U = {
                    [sequelize_1['Op']['in']]: [
                        y[a4(0x154)],
                        y[a3(0x178)]
                    ]
                };
                A[a4(0x158)] = U;
            } else
                k[a3(0x194)] = {
                    [l['Op'][a4(0x173)]]: [
                        +(-0x25c1 + -0x1 * -0x96a + -0x5 * -0x5ab, m[a4(0x13e)])((-0x8f3 + -0x1c37 + 0x252a, n[a4(0x14d)])(I)),
                        +(0xc59 + -0xb * 0x1eb + 0x8c0, p[a4(0x167)])((0x1336 + -0x5 * 0x1fd + -0x71 * 0x15, q[a3(0x14d)])(r))
                    ]
                };
        }
        if (y[a4(0x183)](p, q)) {
            if (y[a4(0x15c)](y[a3(0x197)], y[a3(0x179)])) {
                const X = {
                    [C['Op']['in']]: [
                        y[a3(0x154)],
                        y[a3(0x178)]
                    ]
                };
                B[a4(0x158)] = X;
            } else
                A[a3(0x194)] = {
                    [sequelize_1['Op'][a3(0x173)]]: [
                        +(0x1a0c + 0x1ccc + 0x3a8 * -0xf, date_fns_1[a4(0x13e)])((-0xf * -0x7b + 0x115f * -0x1 + 0xa2a, date_fns_1[a3(0x14d)])(p)),
                        +(-0x146 + 0x1 * 0x224f + -0x2109, date_fns_1[a4(0x167)])((0x1299 + -0x1 * -0x834 + -0x1acd * 0x1, date_fns_1[a4(0x14d)])(q))
                    ]
                };
        }
        const I = {};
        I[a3(0x18b)] = A, I[a3(0x15f)] = E, I[a4(0x181)] = [[
                y[a4(0x16f)],
                y[a3(0x193)]
            ]];
        const J = await Ticket_1[a3(0x152)][a3(0x164)](I);
        return J;
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1931 * 0x1 + 0x1 * 0x1306 + -0x2afe);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[a1(0x152)] = TicketsQueuesService;