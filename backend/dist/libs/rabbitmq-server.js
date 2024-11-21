'use strict';
const u = b, v = b;
(function (c, d) {
    const s = b, t = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(s(0x1f3)) / (-0xa5b + -0x1 * -0x83a + 0x4e * 0x7) + -parseInt(t(0x1b9)) / (0xb5 * 0x4 + 0x2656 * -0x1 + -0x2384 * -0x1) * (parseInt(s(0x1ab)) / (-0xfec * -0x1 + -0x20ed * 0x1 + 0x1104)) + -parseInt(t(0x1b5)) / (0xf12 * 0x1 + -0x304 * 0x4 + -0x2fe) * (-parseInt(t(0x1c1)) / (-0xd3c + 0x1 * -0x19ce + 0xd05 * 0x3)) + -parseInt(t(0x1c4)) / (0x56 * 0x41 + 0x238f + -0x305 * 0x13) * (-parseInt(s(0x1e0)) / (-0x382 * -0x6 + 0x134f + 0x1 * -0x2854)) + parseInt(t(0x1ca)) / (0x2680 + 0xef1 + 0x79 * -0x71) + parseInt(t(0x1bc)) / (-0x1f0d * -0x1 + 0x1 * 0x1489 + -0x338d) + -parseInt(s(0x1dc)) / (-0x2591 + -0x14d4 * -0x1 + 0x10c7);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xbe97 * -0x2 + 0x2aa * 0x20a + 0x2 * 0x6b27));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x4cf + 0xb2a + 0x1 * -0xe53);
        let h = e[f];
        return h;
    }, b(c, d);
}
const q = {};
function a() {
    const Q = [
        '6468816gPPNXz',
        'ogger',
        'sYDbJ',
        'INTERVAL',
        '../utils/s',
        'assertQueu',
        'UdwNg',
        'uri',
        'ueue',
        'jLTBG',
        'defineProp',
        'dGkdN',
        'publishInQ',
        'erty',
        '../utils/l',
        'xchange',
        'UdqXk',
        'error',
        '11742680FUVJZC',
        'JkdSa',
        'waba360',
        'vPelm',
        '7oYgNkn',
        'consumeWha',
        'MIN_SLEEP_',
        'iusNu',
        'default',
        'XrlAH',
        'MOkFo',
        'ByEWR',
        'zDbHA',
        'gqana',
        'AABjF',
        'nack',
        'leepRandom',
        'fqxvp',
        'ack',
        '__esModule',
        'messenger',
        'GDwfj',
        'HpHSo',
        '414270xkUFqD',
        'publishInE',
        'mrEkB',
        'MAX_SLEEP_',
        'CBZBm',
        'conn',
        'env',
        'start',
        'from',
        'channel',
        'consume',
        'tsapp',
        'dxOCr',
        'durable',
        '3xuOMEo',
        'mTime',
        'GPOni',
        'qnSZX',
        'TLxWw',
        'amqplib',
        'nel',
        'sleepRando',
        'RwXgb',
        'prefetch',
        '8dcbpft',
        'sendToQueu',
        'connect',
        'cBbMd',
        '270314cCpnuZ',
        'Time',
        'iDEIB',
        '651582UwQGLL',
        'AmyxV',
        'logger',
        'publish',
        'value',
        '1408550GDJCFA',
        'uTERh',
        'persistent',
        '4726338JSbpSa',
        'eNqoX',
        'XmsTi',
        'createChan',
        'MsqBs',
        'RVPmw'
    ];
    a = function () {
        return Q;
    };
    return a();
}
q[u(0x1c0)] = !![], Object[u(0x1d4) + v(0x1d7)](exports, u(0x1ef), q);
const amqplib_1 = require(u(0x1b0)), logger_1 = require(v(0x1d8) + v(0x1cb)), sleepRandomTime_1 = require(v(0x1ce) + u(0x1ec) + u(0x1ba));
class RabbitmqServer {
    constructor(c) {
        const w = v;
        this[w(0x1d1)] = c;
    }
    async [v(0x1fa)]() {
        const x = u, y = v, f = {};
        f[x(0x1d5)] = y(0x1de), f[x(0x1f7)] = x(0x1f0);
        const g = f;
        this[y(0x1f8)] = await (-0x3e5 * -0x6 + -0x1c82 + -0x1 * -0x524, amqplib_1[y(0x1b7)])(this[y(0x1d1)]), this[y(0x1a6)] = await this[y(0x1f8)][x(0x1c7) + x(0x1b1)]();
        const h = {};
        h[x(0x1aa)] = !![], await this[x(0x1a6)][x(0x1cf) + 'e'](g[x(0x1d5)], h);
        const i = {};
        i[x(0x1aa)] = !![], await this[y(0x1a6)][y(0x1cf) + 'e'](g[y(0x1f7)], i);
    }
    async [v(0x1d6) + u(0x1d2)](e, f) {
        const z = u, A = u, g = {};
        g[z(0x1aa)] = !![], await this[A(0x1a6)][z(0x1cf) + 'e'](e, g);
        const h = {};
        return h[A(0x1c3)] = !![], this[A(0x1a6)][z(0x1b6) + 'e'](e, Buffer[z(0x1fb)](f), h);
    }
    async [u(0x1f4) + u(0x1d9)](d, e, f) {
        const B = u, C = u, g = {};
        return g[B(0x1c3)] = !![], this[C(0x1a6)][C(0x1bf)](d, e, Buffer[B(0x1fb)](f), g);
    }
    async [v(0x1e1) + v(0x1a8)](d, e) {
        const D = u, E = u, f = {
                'MsqBs': D(0x1e1) + D(0x1a8),
                'vPelm': function (h, i) {
                    return h(i);
                },
                'mrEkB': function (h, i) {
                    return h === i;
                },
                'TLxWw': E(0x1e9),
                'HpHSo': function (h, i) {
                    return h === i;
                },
                'AmyxV': D(0x1e8),
                'UdwNg': function (h, i) {
                    return h(i);
                },
                'RVPmw': function (h, i) {
                    return h(i);
                },
                'JkdSa': function (h, i) {
                    return h === i;
                },
                'cBbMd': D(0x1f1)
            };
        this[D(0x1a6)][E(0x1b4)](-0x1e0a + -0x4 * -0x73d + 0x120, ![]);
        const g = {};
        g[E(0x1aa)] = !![], await this[D(0x1a6)][D(0x1cf) + 'e'](d, g), this[D(0x1a6)][E(0x1a7)](d, async h => {
            const G = E, H = E, i = {
                    'XrlAH': function (j, k) {
                        const F = b;
                        return f[F(0x1df)](j, k);
                    }
                };
            if (f[G(0x1f5)](f[G(0x1af)], f[G(0x1af)]))
                try {
                    if (f[G(0x1f2)](f[G(0x1bd)], f[H(0x1bd)])) {
                        await f[G(0x1d0)](e, h), await (-0xf91 * 0x2 + -0x4 * -0x73 + 0x1d56, sleepRandomTime_1[G(0x1b2) + H(0x1ac)])({
                            'minMilliseconds': f[H(0x1df)](Number, process[G(0x1f9)][H(0x1e2) + G(0x1cd)] || -0x75 * 0x13 + 0x80f * -0x1 + 0x12b2),
                            'maxMilliseconds': f[G(0x1c9)](Number, process[G(0x1f9)][H(0x1f6) + H(0x1cd)] || 0x2d * -0x5f + -0x2 * 0x11c5 + 0x3c0d)
                        }), this[H(0x1a6)][H(0x1ee)](h);
                        return;
                    } else
                        this[H(0x1a6)][G(0x1eb)](f), g[G(0x1be)][G(0x1db)](f[G(0x1c8)], h);
                } catch (k) {
                    if (f[H(0x1dd)](f[H(0x1b8)], f[G(0x1b8)]))
                        this[H(0x1a6)][H(0x1eb)](h), logger_1[G(0x1be)][H(0x1db)](f[G(0x1c8)], k);
                    else {
                        i[H(0x1e5)](f, g), this[H(0x1a6)][H(0x1ee)](h);
                        return;
                    }
                }
            else
                e[G(0x1be)][H(0x1db)](f);
        });
    }
    async [v(0x1a7)](c, d) {
        const I = u, J = v, e = {
                'MOkFo': function (f, g) {
                    return f(g);
                },
                'iDEIB': function (f, g) {
                    return f(g);
                },
                'ByEWR': function (f, g) {
                    return f !== g;
                },
                'fqxvp': I(0x1cc),
                'RwXgb': function (f, g) {
                    return f === g;
                },
                'XmsTi': J(0x1c5),
                'dxOCr': J(0x1d3),
                'GPOni': J(0x1e3),
                'qnSZX': J(0x1da)
            };
        return this[I(0x1a6)][I(0x1a7)](c, f => {
            const L = J, M = I, g = {
                    'uTERh': function (h, i) {
                        const K = b;
                        return e[K(0x1bb)](h, i);
                    }
                };
            if (e[L(0x1e7)](e[L(0x1ed)], e[M(0x1ed)]))
                try {
                    e[M(0x1e6)](k, l), this[L(0x1a6)][M(0x1ee)](m);
                    return;
                } catch (i) {
                    o[M(0x1be)][M(0x1db)](i);
                }
            else
                try {
                    if (e[M(0x1b3)](e[M(0x1c6)], e[L(0x1a9)]))
                        this[L(0x1d1)] = d;
                    else {
                        e[M(0x1bb)](d, f), this[L(0x1a6)][M(0x1ee)](f);
                        return;
                    }
                } catch (j) {
                    if (e[L(0x1b3)](e[L(0x1ad)], e[M(0x1ae)])) {
                        const l = {
                            'AABjF': function (m, n) {
                                const N = L;
                                return g[N(0x1c2)](m, n);
                            }
                        };
                        return this[L(0x1a6)][M(0x1a7)](f, p => {
                            const O = L, P = L;
                            try {
                                l[O(0x1ea)](k, p), this[P(0x1a6)][O(0x1ee)](p);
                                return;
                            } catch (r) {
                                m[O(0x1be)][P(0x1db)](r);
                            }
                        });
                    } else
                        logger_1[L(0x1be)][M(0x1db)](j);
                }
        });
    }
}
exports[u(0x1e4)] = RabbitmqServer;