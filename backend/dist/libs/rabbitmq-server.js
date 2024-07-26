'use strict';
const u = b, v = b;
(function (c, d) {
    const s = b, t = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(s(0x151)) / (0x1ffd + 0x476 + -0x1 * 0x2472) * (parseInt(s(0x12f)) / (-0x326 + -0x7eb * 0x2 + 0x12fe)) + parseInt(t(0x16a)) / (-0x546 + -0xa * 0x271 + 0x1 * 0x1db3) * (-parseInt(t(0x11b)) / (0x158e + 0xf * 0x16f + -0x2b0b)) + -parseInt(s(0x14a)) / (-0x153d * -0x1 + -0x97b + 0xbbd * -0x1) + -parseInt(s(0x12e)) / (0x3f + -0x1 * 0x1db3 + 0x1d7a) + parseInt(t(0x11d)) / (-0x13 * -0x2b + -0x20a2 + 0x1d78) * (-parseInt(t(0x140)) / (0x6dd + 0xfd7 + 0x2 * -0xb56)) + parseInt(s(0x14d)) / (0x1a67 * -0x1 + -0x14e6 + 0x2f56) * (parseInt(s(0x16c)) / (-0x1 * 0xef7 + -0x210f + 0x3010)) + parseInt(s(0x124)) / (0x1 * -0x129e + -0x2634 + 0x38dd);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x274 * -0x1e + -0x223 * 0x1d0 + 0x65fae));
function a() {
    const O = [
        'env',
        'ack',
        'defineProp',
        'publishInQ',
        'jcvsf',
        'publish',
        'uri',
        'xchange',
        'mMmfb',
        'ogger',
        'lJakA',
        'from',
        'default',
        'logger',
        'xvwiG',
        '__esModule',
        'vpiIB',
        'QyecP',
        'consumeWha',
        'XRUqh',
        '../utils/s',
        'ueue',
        '14001SoqsPP',
        'start',
        '553990fBrNNv',
        'lzBuo',
        'MbiFI',
        'sleepRando',
        'XkQsq',
        'buTml',
        '196zYscia',
        'wfPEw',
        '28gxwyjX',
        'nack',
        'erty',
        'CNvdW',
        'tsapp',
        'channel',
        'FBCmI',
        '8830602NSlHxT',
        'Time',
        'persistent',
        'error',
        'eJgxb',
        'ycrLK',
        'leepRandom',
        'tnsUa',
        '../utils/l',
        'MAX_SLEEP_',
        '596880QsWSfC',
        '2yPJTty',
        'OcTke',
        'createChan',
        'INTERVAL',
        'consume',
        'prefetch',
        'tjCZf',
        'nel',
        'avUfU',
        'publishInE',
        'AYmFQ',
        'waba360',
        'assertQueu',
        'conn',
        'Osojs',
        'messenger',
        'CMRvJ',
        '283656usnVyT',
        'nGxgH',
        'lzpjo',
        'BAzkU',
        'sendToQueu',
        'mTime',
        'xfKGa',
        'amqplib',
        'dSffa',
        'ABXer',
        '285780QMUdMt',
        'connect',
        'value',
        '9uBFGTj',
        'fYhTu',
        'MpXqO',
        'xVmbF',
        '185972CPmxiq',
        'MIN_SLEEP_',
        'durable'
    ];
    a = function () {
        return O;
    };
    return a();
}
const q = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x25d5 + 0xd50 + -0x320b);
        let h = e[f];
        return h;
    }, b(c, d);
}
q[u(0x14c)] = !![], Object[v(0x156) + v(0x11f)](exports, v(0x163), q);
const amqplib_1 = require(v(0x147)), logger_1 = require(u(0x12c) + v(0x15d)), sleepRandomTime_1 = require(v(0x168) + v(0x12a) + u(0x125));
class RabbitmqServer {
    constructor(c) {
        const w = u;
        this[w(0x15a)] = c;
    }
    async [v(0x16b)]() {
        const x = v, y = u, f = {};
        f[x(0x12b)] = y(0x13a), f[x(0x16d)] = y(0x13e);
        const g = f;
        this[y(0x13c)] = await (0x1 * 0x2344 + -0x10a * 0x10 + -0x952 * 0x2, amqplib_1[y(0x14b)])(this[x(0x15a)]), this[y(0x122)] = await this[y(0x13c)][x(0x131) + x(0x136)]();
        const h = {};
        h[x(0x153)] = !![], await this[y(0x122)][x(0x13b) + 'e'](g[y(0x12b)], h);
        const i = {};
        i[x(0x153)] = !![], await this[y(0x122)][y(0x13b) + 'e'](g[y(0x16d)], i);
    }
    async [v(0x157) + u(0x169)](e, f) {
        const z = v, A = u, g = {};
        g[z(0x153)] = !![], await this[z(0x122)][z(0x13b) + 'e'](e, g);
        const h = {};
        return h[A(0x126)] = !![], this[A(0x122)][z(0x144) + 'e'](e, Buffer[A(0x15f)](f), h);
    }
    async [v(0x138) + v(0x15b)](d, e, f) {
        const B = u, C = u, g = {};
        return g[B(0x126)] = !![], this[C(0x122)][C(0x159)](d, e, Buffer[B(0x15f)](f), g);
    }
    async [v(0x166) + u(0x121)](d, e) {
        const D = v, E = v, f = {
                'tjCZf': function (h, i) {
                    return h(i);
                },
                'eJgxb': D(0x166) + D(0x121),
                'jcvsf': function (h, i) {
                    return h !== i;
                },
                'vpiIB': E(0x14e),
                'ABXer': function (h, i) {
                    return h === i;
                },
                'wfPEw': E(0x162),
                'dSffa': function (h, i) {
                    return h(i);
                },
                'buTml': function (h, i) {
                    return h(i);
                },
                'Osojs': E(0x167)
            };
        this[D(0x122)][E(0x134)](-0x18e4 + 0xc6a + -0xb2 * -0x12, ![]);
        const g = {};
        g[E(0x153)] = !![], await this[E(0x122)][E(0x13b) + 'e'](d, g), this[D(0x122)][D(0x133)](d, async h => {
            const F = D, G = E;
            if (f[F(0x158)](f[F(0x164)], f[F(0x164)]))
                this[G(0x15a)] = d;
            else
                try {
                    if (f[G(0x149)](f[F(0x11c)], f[F(0x11c)])) {
                        await f[F(0x148)](e, h), await (-0x2025 + 0x65 * -0x49 + 0x3cf2, sleepRandomTime_1[F(0x16f) + F(0x145)])({
                            'minMilliseconds': f[F(0x11a)](Number, process[F(0x154)][G(0x152) + G(0x132)] || -0x2e3 * -0x8 + 0x4e1 + 0x1 * -0x1a05),
                            'maxMilliseconds': f[F(0x11a)](Number, process[F(0x154)][G(0x12d) + F(0x132)] || 0x6eb + 0x6d4 + 0x5ef * -0x1)
                        }), this[G(0x122)][G(0x155)](h);
                        return;
                    } else
                        try {
                            f[F(0x135)](k, l), this[G(0x122)][F(0x155)](m);
                            return;
                        } catch (k) {
                            o[G(0x161)][G(0x127)](k);
                        }
                } catch (k) {
                    f[G(0x158)](f[F(0x13d)], f[G(0x13d)]) ? (this[F(0x122)][F(0x11e)](f), g[F(0x161)][F(0x127)](f[G(0x128)], h)) : (this[G(0x122)][F(0x11e)](h), logger_1[F(0x161)][F(0x127)](f[G(0x128)], k));
                }
        });
    }
    async [v(0x133)](c, d) {
        const H = v, I = u, e = {
                'ycrLK': function (f, g) {
                    return f(g);
                },
                'nGxgH': function (f, g) {
                    return f(g);
                },
                'BAzkU': function (f, g) {
                    return f === g;
                },
                'MpXqO': H(0x146),
                'lJakA': H(0x16e),
                'QyecP': function (f, g) {
                    return f !== g;
                },
                'CMRvJ': I(0x137),
                'xVmbF': H(0x170),
                'AYmFQ': function (f, g) {
                    return f(g);
                },
                'CNvdW': H(0x142),
                'FBCmI': I(0x15c)
            };
        return this[I(0x122)][H(0x133)](c, f => {
            const K = H, L = H, g = {
                    'OcTke': function (h, i) {
                        const J = b;
                        return e[J(0x141)](h, i);
                    }
                };
            if (e[K(0x143)](e[K(0x14f)], e[L(0x15e)]))
                return this[K(0x122)][L(0x133)](f, p => {
                    const M = K, N = K;
                    try {
                        g[M(0x130)](k, p), this[N(0x122)][M(0x155)](p);
                        return;
                    } catch (r) {
                        m[M(0x161)][M(0x127)](r);
                    }
                });
            else
                try {
                    if (e[K(0x165)](e[L(0x13f)], e[K(0x150)])) {
                        e[L(0x139)](d, f), this[K(0x122)][L(0x155)](f);
                        return;
                    } else {
                        e[L(0x129)](f, g), this[K(0x122)][K(0x155)](h);
                        return;
                    }
                } catch (j) {
                    e[K(0x165)](e[K(0x120)], e[L(0x123)]) ? logger_1[L(0x161)][L(0x127)](j) : e[K(0x161)][K(0x127)](f);
                }
        });
    }
}
exports[v(0x160)] = RabbitmqServer;