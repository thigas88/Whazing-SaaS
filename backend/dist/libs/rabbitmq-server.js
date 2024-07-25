'use strict';
const u = b, v = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1eef + 0xec5 + -0x49 * 0x9b);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const s = b, t = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(s(0x1a4)) / (0x3 * 0x742 + -0x1 * -0x102b + -0x25f0) * (-parseInt(s(0x1be)) / (-0x94e + -0x1d * -0xe9 + -0x1115)) + parseInt(s(0x1ce)) / (-0xd * -0x17d + 0xad * -0x1 + -0x12a9) * (parseInt(t(0x18c)) / (0x296 * 0x8 + 0xead + 0x2359 * -0x1)) + -parseInt(t(0x18a)) / (-0x1fd3 + 0x9f8 + -0x20 * -0xaf) * (parseInt(t(0x1b9)) / (-0x1c9 + 0x262 * 0xa + -0x1605 * 0x1)) + -parseInt(t(0x1b3)) / (-0x187e + 0x1bd4 + -0x1 * 0x34f) * (-parseInt(s(0x1b0)) / (0x14b * 0x13 + 0x144e + -0xd * 0x373)) + -parseInt(s(0x184)) / (-0x1 * 0x7bd + 0xc7 * 0x18 + -0xae2) + -parseInt(t(0x1aa)) / (0x17d1 + 0x5c + -0x25 * 0xa7) * (-parseInt(s(0x195)) / (-0x101b + -0xe1d * 0x2 + 0x2c60)) + parseInt(s(0x1ad)) / (0x2453 + -0x26 * 0xce + -0x5b3 * 0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x501b2 * 0x1 + -0x246c8 + 0x577 * 0x279));
function a() {
    const O = [
        'nwRIJ',
        'sleepRando',
        'publishInE',
        'publish',
        'INTERVAL',
        'XcGUS',
        'default',
        'nel',
        'PnnUG',
        'from',
        'mSfoI',
        '555971FZhDIL',
        'vgxnA',
        'conn',
        'messenger',
        'Bbmsk',
        'env',
        '338390ArJPPm',
        'tsapp',
        'KjoLd',
        '6745476CMkaNA',
        'XUHOq',
        'yiEeK',
        '2032jqHrcF',
        'xchange',
        'elvym',
        '9296aFyfKh',
        'nack',
        'start',
        'durable',
        'Mpqqr',
        'sendToQueu',
        '3288pVjChK',
        'ogger',
        'uri',
        'tSvIB',
        'GsfmC',
        '2jtDvWs',
        'gHQFO',
        'error',
        'prefetch',
        'mucJf',
        'ueue',
        'mTime',
        'QTlGq',
        'logger',
        'defineProp',
        'AYZLv',
        'MIN_SLEEP_',
        'leepRandom',
        '__esModule',
        'vTkni',
        'erty',
        '3099MvtIxt',
        '../utils/l',
        'persistent',
        'lRQrs',
        'consume',
        'MAX_SLEEP_',
        'vJDKV',
        'nKQxE',
        'publishInQ',
        '4930569mHZCkC',
        'HMoeB',
        '../utils/s',
        'btvUl',
        'waba360',
        'qZWds',
        '6410maBEEQ',
        'amqplib',
        '2472CigMkj',
        'Time',
        'gotMY',
        'value',
        'channel',
        'consumeWha',
        'createChan',
        'assertQueu',
        'wnArI',
        '220NSRlTL',
        'ack',
        'connect',
        'ZEdMq'
    ];
    a = function () {
        return O;
    };
    return a();
}
const q = {};
q[u(0x18f)] = !![], Object[v(0x1c7) + v(0x1cd)](exports, u(0x1cb), q);
const amqplib_1 = require(v(0x18b)), logger_1 = require(v(0x1cf) + v(0x1ba)), sleepRandomTime_1 = require(v(0x186) + v(0x1ca) + v(0x18d));
class RabbitmqServer {
    constructor(c) {
        const w = v;
        this[w(0x1bb)] = c;
    }
    async [v(0x1b5)]() {
        const x = u, y = u, f = {};
        f[x(0x1cc)] = y(0x188), f[x(0x1bf)] = x(0x1a7);
        const g = f;
        this[y(0x1a6)] = await (0x11 * 0x1c6 + 0x131e * -0x1 + -0xb08, amqplib_1[x(0x197)])(this[y(0x1bb)]), this[x(0x190)] = await this[x(0x1a6)][y(0x192) + x(0x1a0)]();
        const h = {};
        h[x(0x1b6)] = !![], await this[y(0x190)][y(0x193) + 'e'](g[x(0x1cc)], h);
        const i = {};
        i[y(0x1b6)] = !![], await this[y(0x190)][y(0x193) + 'e'](g[x(0x1bf)], i);
    }
    async [u(0x183) + v(0x1c3)](e, f) {
        const z = u, A = u, g = {};
        g[z(0x1b6)] = !![], await this[A(0x190)][A(0x193) + 'e'](e, g);
        const h = {};
        return h[z(0x1d0)] = !![], this[z(0x190)][A(0x1b8) + 'e'](e, Buffer[z(0x1a2)](f), h);
    }
    async [u(0x19b) + v(0x1b1)](d, e, f) {
        const B = v, C = u, g = {};
        return g[B(0x1d0)] = !![], this[B(0x190)][C(0x19c)](d, e, Buffer[C(0x1a2)](f), g);
    }
    async [v(0x191) + u(0x1ab)](d, e) {
        const D = u, E = u, f = {
                'KjoLd': function (h, i) {
                    return h(i);
                },
                'GsfmC': function (h, i) {
                    return h === i;
                },
                'vgxnA': D(0x1af),
                'tSvIB': D(0x1a8),
                'XcGUS': function (h, i) {
                    return h !== i;
                },
                'gotMY': D(0x1c2),
                'HMoeB': function (h, i) {
                    return h(i);
                },
                'mSfoI': E(0x189),
                'elvym': D(0x182),
                'lRQrs': E(0x191) + D(0x1ab)
            };
        this[D(0x190)][E(0x1c1)](-0x1c9 + 0x46 * 0x32 + 0xbd9 * -0x1, ![]);
        const g = {};
        g[D(0x1b6)] = !![], await this[D(0x190)][D(0x193) + 'e'](d, g), this[D(0x190)][D(0x1d2)](d, async h => {
            const G = E, H = E, i = {
                    'nwRIJ': function (j, k) {
                        const F = b;
                        return f[F(0x1ac)](j, k);
                    }
                };
            if (f[G(0x1bd)](f[G(0x1a5)], f[G(0x1bc)]))
                e[G(0x1c6)][H(0x1c0)](f);
            else
                try {
                    if (f[G(0x19e)](f[H(0x18e)], f[H(0x18e)]))
                        return this[G(0x190)][H(0x1d2)](f, p => {
                            const I = H, J = H;
                            try {
                                i[I(0x199)](k, p), this[I(0x190)][J(0x196)](p);
                                return;
                            } catch (r) {
                                m[J(0x1c6)][J(0x1c0)](r);
                            }
                        });
                    else {
                        await f[G(0x185)](e, h), await (0x1c25 + -0x136f + -0x8b6, sleepRandomTime_1[H(0x19a) + G(0x1c4)])({
                            'minMilliseconds': f[H(0x185)](Number, process[H(0x1a9)][G(0x1c9) + G(0x19d)] || -0x24b1 + -0x20e * 0x7 + 0x3507),
                            'maxMilliseconds': f[G(0x1ac)](Number, process[H(0x1a9)][H(0x1d3) + G(0x19d)] || 0x1296 + 0x10a1 + -0x1b67)
                        }), this[H(0x190)][G(0x196)](h);
                        return;
                    }
                } catch (l) {
                    if (f[H(0x1bd)](f[H(0x1a3)], f[G(0x1b2)]))
                        try {
                            i[H(0x199)](k, l), this[H(0x190)][H(0x196)](m);
                            return;
                        } catch (n) {
                            o[G(0x1c6)][H(0x1c0)](n);
                        }
                    else
                        this[G(0x190)][H(0x1b4)](h), logger_1[H(0x1c6)][G(0x1c0)](f[G(0x1d1)], l);
                }
        });
    }
    async [u(0x1d2)](c, d) {
        const K = v, L = u, e = {
                'ZEdMq': function (f, g) {
                    return f(g);
                },
                'wnArI': function (f, g) {
                    return f === g;
                },
                'AYZLv': K(0x1a1),
                'Mpqqr': L(0x1c5),
                'btvUl': function (f, g) {
                    return f !== g;
                },
                'XUHOq': K(0x181)
            };
        return this[L(0x190)][K(0x1d2)](c, f => {
            const M = L, N = K;
            if (e[M(0x194)](e[M(0x1c8)], e[N(0x1c8)]))
                try {
                    if (e[N(0x194)](e[N(0x1b7)], e[N(0x1b7)])) {
                        e[N(0x198)](d, f), this[M(0x190)][M(0x196)](f);
                        return;
                    } else {
                        e[M(0x198)](f, g), this[M(0x190)][M(0x196)](h);
                        return;
                    }
                } catch (h) {
                    e[N(0x187)](e[M(0x1ae)], e[N(0x1ae)]) ? this[N(0x1bb)] = d : logger_1[N(0x1c6)][M(0x1c0)](h);
                }
            else {
                const k = {};
                return k[N(0x1d0)] = !![], this[M(0x190)][N(0x19c)](g, h, i[N(0x1a2)](j), k);
            }
        });
    }
}
exports[u(0x19f)] = RabbitmqServer;