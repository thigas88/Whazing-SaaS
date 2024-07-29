'use strict';
const u = b, v = b;
(function (c, d) {
    const s = b, t = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(s(0xd5)) / (0xe41 + 0x1 * -0x27a + -0xbc6) + -parseInt(s(0xf0)) / (0x31 * -0xf + 0x251b + -0x223a) + -parseInt(t(0xe6)) / (0x1 * -0xe56 + 0x59 * 0x29 + 0x18) + parseInt(s(0xdf)) / (-0x809 + 0x9f7 * 0x1 + 0xe * -0x23) * (parseInt(t(0xf1)) / (0x1bb * -0xc + 0xb7a + 0x94f)) + parseInt(t(0xe9)) / (0x2 * 0xa63 + 0x1ea1 + -0x3361) + parseInt(t(0xff)) / (-0x266f + -0xba * 0x1f + 0x3cfc) * (parseInt(t(0x114)) / (-0x446 * -0x1 + 0xb * -0x2cf + 0x1aa7)) + parseInt(s(0xeb)) / (0x1ac9 + -0x704 * -0x1 + -0x4 * 0x871);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x91a24 + -0xec4f6 + -0x165a2 * -0xa));
const q = {};
q[u(0xf9)] = !![], Object[u(0x10e) + u(0xc8)](exports, u(0xe4), q);
const amqplib_1 = require(v(0xe2)), logger_1 = require(v(0xe0) + u(0xe1)), sleepRandomTime_1 = require(u(0x10c) + v(0xea) + u(0xcd));
class RabbitmqServer {
    constructor(c) {
        const w = v;
        this[w(0xc3)] = c;
    }
    async [v(0x10f)]() {
        const x = v, y = u, f = {};
        f[x(0xfe)] = y(0x105), f[y(0xc1)] = x(0xec);
        const g = f;
        this[x(0x113)] = await (-0x551 * -0x2 + -0xd1b + 0x279 * 0x1, amqplib_1[x(0xd2)])(this[x(0xc3)]), this[x(0xe5)] = await this[x(0x113)][x(0x103) + y(0xca)]();
        const h = {};
        h[x(0xef)] = !![], await this[y(0xe5)][x(0x100) + 'e'](g[x(0xfe)], h);
        const i = {};
        i[y(0xef)] = !![], await this[y(0xe5)][x(0x100) + 'e'](g[y(0xc1)], i);
    }
    async [u(0x104) + v(0xf2)](e, f) {
        const z = v, A = v, g = {};
        g[z(0xef)] = !![], await this[A(0xe5)][A(0x100) + 'e'](e, g);
        const h = {};
        return h[z(0xf8)] = !![], this[z(0xe5)][A(0x10d) + 'e'](e, Buffer[z(0xfd)](f), h);
    }
    async [u(0xd7) + u(0xcc)](d, e, f) {
        const B = u, C = v, g = {};
        return g[B(0xf8)] = !![], this[C(0xe5)][B(0x111)](d, e, Buffer[B(0xfd)](f), g);
    }
    async [u(0xdb) + u(0xc4)](d, e) {
        const D = v, E = v, f = {
                'Hybiv': function (h, i) {
                    return h(i);
                },
                'gFNdN': function (h, i) {
                    return h !== i;
                },
                'YThvh': D(0xd3),
                'EUHOn': E(0xc7),
                'iOAQv': function (h, i) {
                    return h === i;
                },
                'qevyY': D(0x112),
                'RqTbJ': function (h, i) {
                    return h(i);
                },
                'JkYfv': function (h, i) {
                    return h(i);
                },
                'msPxe': function (h, i) {
                    return h === i;
                },
                'aPgRS': D(0xd9),
                'qtXNS': E(0xcb),
                'NFWdc': D(0xdb) + E(0xc4)
            };
        this[D(0xe5)][D(0xc5)](0x212b + -0x139f * -0x1 + -0x34c0 * 0x1, ![]);
        const g = {};
        g[E(0xef)] = !![], await this[E(0xe5)][E(0x100) + 'e'](d, g), this[E(0xe5)][E(0xd0)](d, async h => {
            const G = D, H = D, i = {
                    'qUzmX': function (j, k) {
                        const F = b;
                        return f[F(0xd4)](j, k);
                    }
                };
            if (f[G(0xd1)](f[H(0xe7)], f[H(0x110)]))
                try {
                    if (f[G(0xfa)](f[H(0xcf)], f[H(0xcf)])) {
                        await f[H(0xdd)](e, h), await (-0x181e + 0x4 * -0x766 + -0xa * -0x55f, sleepRandomTime_1[H(0xfb) + H(0xdc)])({
                            'minMilliseconds': f[H(0xdd)](Number, process[G(0x10a)][G(0xf4) + G(0xe8)] || 0x23 * -0xc5 + -0x16e + 0x1e51),
                            'maxMilliseconds': f[G(0xf5)](Number, process[H(0x10a)][H(0xe3) + G(0xe8)] || -0x33d * -0x4 + -0x3 * 0x8db + -0x449 * -0x5)
                        }), this[H(0xe5)][H(0xc9)](h);
                        return;
                    } else
                        return this[G(0xe5)][G(0xd0)](f, p => {
                            const I = G, J = G;
                            try {
                                i[I(0x102)](k, p), this[J(0xe5)][J(0xc9)](p);
                                return;
                            } catch (r) {
                                m[I(0xd6)][I(0xda)](r);
                            }
                        });
                } catch (k) {
                    if (f[H(0xd8)](f[H(0x101)], f[H(0xf6)]))
                        try {
                            f[G(0xd4)](k, l), this[G(0xe5)][H(0xc9)](m);
                            return;
                        } catch (m) {
                            o[G(0xd6)][G(0xda)](m);
                        }
                    else
                        this[G(0xe5)][H(0xf7)](h), logger_1[G(0xd6)][G(0xda)](f[G(0x109)], k);
                }
            else {
                const n = {};
                return n[H(0xf8)] = !![], this[G(0xe5)][H(0x111)](g, h, i[H(0xfd)](j), n);
            }
        });
    }
    async [v(0xd0)](c, d) {
        const K = u, L = u, e = {
                'Qvqkv': function (f, g) {
                    return f(g);
                },
                'wPHZL': function (f, g) {
                    return f !== g;
                },
                'xhtNn': K(0xee),
                'lmjWD': function (f, g) {
                    return f === g;
                },
                'BZozt': L(0x10b),
                'KUnFB': function (f, g) {
                    return f !== g;
                },
                'MdwQL': L(0xc2)
            };
        return this[L(0xe5)][L(0xd0)](c, f => {
            const N = L, O = K, g = {
                    'YqghP': function (h, i) {
                        const M = b;
                        return e[M(0xed)](h, i);
                    }
                };
            if (e[N(0x108)](e[O(0xde)], e[O(0xde)])) {
                g[O(0xc6)](f, g), this[O(0xe5)][N(0xc9)](h);
                return;
            } else
                try {
                    if (e[N(0xce)](e[N(0x107)], e[O(0x107)])) {
                        e[O(0xed)](d, f), this[N(0xe5)][O(0xc9)](f);
                        return;
                    } else
                        e[O(0xd6)][N(0xda)](f);
                } catch (j) {
                    e[N(0x106)](e[N(0xfc)], e[O(0xfc)]) ? this[O(0xc3)] = d : logger_1[N(0xd6)][O(0xda)](j);
                }
        });
    }
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x8 * 0x2f0 + 0xa2a + 0xe17);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const P = [
        'waba360',
        'KUnFB',
        'BZozt',
        'wPHZL',
        'NFWdc',
        'env',
        'UPMFw',
        '../utils/s',
        'sendToQueu',
        'defineProp',
        'start',
        'EUHOn',
        'publish',
        'lEJow',
        'conn',
        '1799576xsRjGO',
        'WxNsm',
        'CCyOP',
        'uri',
        'tsapp',
        'prefetch',
        'YqghP',
        'jCIsr',
        'erty',
        'ack',
        'nel',
        'fAJlz',
        'xchange',
        'Time',
        'lmjWD',
        'qevyY',
        'consume',
        'gFNdN',
        'connect',
        'kRXBm',
        'Hybiv',
        '234820AJmPnI',
        'logger',
        'publishInE',
        'msPxe',
        'dwDLt',
        'error',
        'consumeWha',
        'mTime',
        'RqTbJ',
        'xhtNn',
        '108NIKrrb',
        '../utils/l',
        'ogger',
        'amqplib',
        'MAX_SLEEP_',
        '__esModule',
        'channel',
        '2658888dthEUQ',
        'YThvh',
        'INTERVAL',
        '2351610pekeaN',
        'leepRandom',
        '14556105fMEKWY',
        'messenger',
        'Qvqkv',
        'KbHnQ',
        'durable',
        '2034328VLBaqd',
        '41340KspbnO',
        'ueue',
        'default',
        'MIN_SLEEP_',
        'JkYfv',
        'qtXNS',
        'nack',
        'persistent',
        'value',
        'iOAQv',
        'sleepRando',
        'MdwQL',
        'from',
        'cBNyz',
        '14rsqXYT',
        'assertQueu',
        'aPgRS',
        'qUzmX',
        'createChan',
        'publishInQ'
    ];
    a = function () {
        return P;
    };
    return a();
}
exports[v(0xf3)] = RabbitmqServer;