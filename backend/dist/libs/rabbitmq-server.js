'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x74 * -0x2 + -0x1787 + -0x5 * -0x4cd);
        let h = e[f];
        return h;
    }, b(c, d);
}
const u = b, v = b;
(function (c, d) {
    const s = b, t = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(s(0x17f)) / (0x1421 * -0x1 + 0x1 * -0xb47 + -0xb * -0x2db) * (-parseInt(s(0x1a0)) / (-0x417 + -0x2 * -0xa17 + 0x1 * -0x1015)) + -parseInt(s(0x168)) / (0xb09 + -0x4d8 + -0x62e) * (parseInt(s(0x17b)) / (-0x9a2 * -0x1 + -0xb9c * 0x3 + 0x1 * 0x1936)) + -parseInt(t(0x1b8)) / (-0x275 + 0x1 * 0xb6f + 0x8f5 * -0x1) * (-parseInt(s(0x16a)) / (0x704 + 0x1a87 * 0x1 + 0x2185 * -0x1)) + -parseInt(t(0x18c)) / (-0x17 * -0xd9 + 0x86f + -0x1be7) * (-parseInt(t(0x16f)) / (0x1 * -0x20d4 + 0x37 * 0x35 + 0x1579)) + -parseInt(s(0x197)) / (0x1230 + -0x23c5 + 0x52 * 0x37) * (-parseInt(t(0x193)) / (-0x511 + 0x359 * 0xa + -0x327 * 0x9)) + parseInt(s(0x18f)) / (0x1df7 + 0x5 * 0x347 + -0x2e4f) * (parseInt(t(0x16c)) / (0x1 * 0x1871 + -0x83f * 0x3 + -0x2 * -0x2c)) + -parseInt(t(0x181)) / (-0x1cc8 + -0x192b * -0x1 + 0x3aa);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x6b74c + -0x5489e + 0xd6c75));
const q = {};
q[u(0x167)] = !![], Object[v(0x1b5) + v(0x172)](exports, u(0x1a8), q);
const amqplib_1 = require(v(0x182)), logger_1 = require(v(0x18e) + u(0x1a2)), sleepRandomTime_1 = require(u(0x165) + u(0x188) + v(0x163));
function a() {
    const P = [
        'ZuWbl',
        'mTime',
        '54BEaVfx',
        'cFPaQ',
        'ueue',
        'default',
        'mwaQc',
        'vvusc',
        'QtPjo',
        'EVsRF',
        'from',
        '892258ITDzGP',
        'vrKkO',
        'ogger',
        'YWsjI',
        'publish',
        'connect',
        'waba360',
        'nel',
        '__esModule',
        'logger',
        'publishInE',
        'consume',
        'durable',
        'assertQueu',
        'conn',
        'SXUuO',
        'ObxII',
        'ack',
        'dqvPk',
        'AlFtK',
        'error',
        'defineProp',
        'rzkmB',
        'createChan',
        '23445fzGvOf',
        'sendToQueu',
        'ensCl',
        'vZmVr',
        'Time',
        'messenger',
        '../utils/s',
        'otVKt',
        'value',
        '5210493ccUyUf',
        'INTERVAL',
        '1224OiVfom',
        'publishInQ',
        '1296516xFLDyU',
        'persistent',
        'nack',
        '1648RvLluT',
        'sleepRando',
        'MIN_SLEEP_',
        'erty',
        'BHPKb',
        'uri',
        'mbuxR',
        'xaPmx',
        'RtvYD',
        'mqvxi',
        'ptJfU',
        'prefetch',
        '4FewOTD',
        'channel',
        'ocPKK',
        'UUOfQ',
        '4cvdCoe',
        'ZUeXf',
        '36095540LeNSzY',
        'amqplib',
        'env',
        'MZxmZ',
        'tsapp',
        'eBHMh',
        'MAX_SLEEP_',
        'leepRandom',
        'lIqUD',
        'SdbBv',
        'Vczpt',
        '46018jnbMQx',
        'DNVcc',
        '../utils/l',
        '110NfbdPZ',
        'xchange',
        'EmegT',
        'start',
        '518780WjcMyY',
        'consumeWha'
    ];
    a = function () {
        return P;
    };
    return a();
}
class RabbitmqServer {
    constructor(c) {
        const w = u;
        this[w(0x174)] = c;
    }
    async [v(0x192)]() {
        const x = u, y = u, f = {};
        f[x(0x176)] = x(0x1a6), f[x(0x18b)] = x(0x164);
        const g = f;
        this[y(0x1ae)] = await (0x4 * -0x2fc + -0x163 * 0x1 + -0x9 * -0x17b, amqplib_1[x(0x1a5)])(this[y(0x174)]), this[y(0x17c)] = await this[x(0x1ae)][x(0x1b7) + x(0x1a7)]();
        const h = {};
        h[y(0x1ac)] = !![], await this[x(0x17c)][x(0x1ad) + 'e'](g[y(0x176)], h);
        const i = {};
        i[y(0x1ac)] = !![], await this[y(0x17c)][y(0x1ad) + 'e'](g[x(0x18b)], i);
    }
    async [v(0x16b) + v(0x199)](e, f) {
        const z = v, A = v, g = {};
        g[z(0x1ac)] = !![], await this[z(0x17c)][A(0x1ad) + 'e'](e, g);
        const h = {};
        return h[z(0x16d)] = !![], this[z(0x17c)][A(0x1b9) + 'e'](e, Buffer[A(0x19f)](f), h);
    }
    async [u(0x1aa) + u(0x190)](d, e, f) {
        const B = v, C = v, g = {};
        return g[B(0x16d)] = !![], this[C(0x17c)][B(0x1a4)](d, e, Buffer[B(0x19f)](f), g);
    }
    async [u(0x194) + u(0x185)](d, e) {
        const D = v, E = v, f = {
                'lIqUD': D(0x194) + D(0x185),
                'cFPaQ': function (h, i) {
                    return h(i);
                },
                'AlFtK': function (h, i) {
                    return h !== i;
                },
                'DNVcc': D(0x162),
                'RtvYD': D(0x195),
                'YWsjI': function (h, i) {
                    return h !== i;
                },
                'ensCl': E(0x166),
                'EmegT': E(0x175),
                'ObxII': function (h, i) {
                    return h(i);
                },
                'ptJfU': function (h, i) {
                    return h(i);
                },
                'vvusc': function (h, i) {
                    return h === i;
                },
                'vrKkO': E(0x1af)
            };
        this[D(0x17c)][D(0x17a)](0x2352 + 0x1 * -0x219 + 0x212f * -0x1, ![]);
        const g = {};
        g[E(0x1ac)] = !![], await this[E(0x17c)][E(0x1ad) + 'e'](d, g), this[D(0x17c)][D(0x1ab)](d, async h => {
            const F = E, G = D;
            if (f[F(0x1b3)](f[G(0x18d)], f[F(0x177)]))
                try {
                    if (f[F(0x1a3)](f[G(0x1ba)], f[F(0x191)])) {
                        await f[G(0x1b0)](e, h), await (0x1147 * -0x2 + 0xd95 + -0x7 * -0x2ff, sleepRandomTime_1[F(0x170) + F(0x196)])({
                            'minMilliseconds': f[G(0x179)](Number, process[F(0x183)][F(0x171) + F(0x169)] || 0x66b + 0x1 * 0x1eab + -0x2322),
                            'maxMilliseconds': f[G(0x198)](Number, process[G(0x183)][F(0x187) + G(0x169)] || 0x192f + -0x5 * -0x5a3 + -0x2ae * 0x11)
                        }), this[G(0x17c)][F(0x1b1)](h);
                        return;
                    } else
                        this[F(0x174)] = d;
                } catch (j) {
                    f[G(0x19c)](f[F(0x1a1)], f[G(0x1a1)]) ? (this[F(0x17c)][F(0x16e)](h), logger_1[G(0x1a9)][G(0x1b4)](f[F(0x189)], j)) : (this[F(0x17c)][G(0x16e)](f), g[G(0x1a9)][G(0x1b4)](f[F(0x189)], h));
                }
            else {
                const m = {
                    'MZxmZ': function (n, o) {
                        const H = G;
                        return f[H(0x198)](n, o);
                    }
                };
                return this[F(0x17c)][G(0x1ab)](f, p => {
                    const I = F, J = F;
                    try {
                        m[I(0x184)](k, p), this[J(0x17c)][J(0x1b1)](p);
                        return;
                    } catch (r) {
                        m[J(0x1a9)][J(0x1b4)](r);
                    }
                });
            }
        });
    }
    async [v(0x1ab)](c, d) {
        const K = u, L = v, e = {
                'QtPjo': function (f, g) {
                    return f(g);
                },
                'BHPKb': function (f, g) {
                    return f(g);
                },
                'SdbBv': function (f, g) {
                    return f !== g;
                },
                'mqvxi': K(0x180),
                'rzkmB': L(0x17d),
                'mwaQc': function (f, g) {
                    return f(g);
                },
                'UUOfQ': function (f, g) {
                    return f === g;
                },
                'eBHMh': L(0x19e)
            };
        return this[K(0x17c)][K(0x1ab)](c, f => {
            const N = K, O = L, g = {
                    'dqvPk': function (h, i) {
                        const M = b;
                        return e[M(0x173)](h, i);
                    }
                };
            if (e[N(0x18a)](e[N(0x178)], e[N(0x178)])) {
                g[O(0x1b2)](f, g), this[N(0x17c)][O(0x1b1)](h);
                return;
            } else
                try {
                    if (e[N(0x18a)](e[N(0x1b6)], e[N(0x1b6)]))
                        e[N(0x1a9)][O(0x1b4)](f);
                    else {
                        e[N(0x19b)](d, f), this[N(0x17c)][N(0x1b1)](f);
                        return;
                    }
                } catch (j) {
                    if (e[N(0x17e)](e[O(0x186)], e[N(0x186)]))
                        logger_1[N(0x1a9)][O(0x1b4)](j);
                    else
                        try {
                            e[N(0x19d)](k, l), this[N(0x17c)][N(0x1b1)](m);
                            return;
                        } catch (l) {
                            o[N(0x1a9)][N(0x1b4)](l);
                        }
                }
        });
    }
}
exports[v(0x19a)] = RabbitmqServer;