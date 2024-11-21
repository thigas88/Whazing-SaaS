'use strict';
const E = b, F = b;
(function (c, d) {
    const C = b, D = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(C(0x16f)) / (0x13 * -0x1f5 + 0x1 * 0x17e3 + 0xd4d) * (parseInt(D(0x15d)) / (-0x1a1c * -0x1 + 0x25d8 + -0x2 * 0x1ff9)) + parseInt(D(0x183)) / (0x355 + -0x1ceb + -0x1 * -0x1999) * (-parseInt(D(0x16b)) / (-0x3 * -0xab9 + -0x1f7 + 0xa8 * -0x2e)) + -parseInt(D(0x185)) / (-0x3e4 + 0x1fb1 + -0x1bc8) * (parseInt(C(0x186)) / (-0x14af * 0x1 + -0x43a + -0xd * -0x1eb)) + parseInt(D(0x166)) / (-0x67e + 0x22f0 + 0x123 * -0x19) * (-parseInt(C(0x167)) / (0x325 + -0xd1f * -0x2 + -0x1d5b)) + parseInt(D(0x16d)) / (-0x3 * -0x86d + -0x18 * -0x166 + -0x3ace) + -parseInt(D(0x180)) / (0x1d75 + 0x1 * -0x25c + -0x1b0f * 0x1) + parseInt(C(0x17f)) / (0xdc7 + 0x173d + -0x24f9);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x2 * -0x56f3 + -0x2c * 0x12d + 0x1394a));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x96d * -0x2 + 0x15bb + -0x185);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const J = [
        'not\x20provid',
        '__importDe',
        '4SjSuIS',
        'DGLDz',
        'ken.',
        '../config/',
        'wAXNd',
        'dMFDq',
        'default',
        'WxYhP',
        'VAuyY',
        '77vyOpzg',
        '135064ntOncd',
        'jsonwebtok',
        'XjRld',
        'defineProp',
        '20yVhyoS',
        'ed.',
        '866574gcUjIR',
        'isAPIAuthP',
        '27385ojDkLi',
        'rXdYY',
        'fault',
        'Token\x20was\x20',
        'query',
        'djxoc',
        'Invalid\x20to',
        'arams',
        'ffGgn',
        'APIAuth',
        'secret',
        '../errors/',
        'AppError',
        'erty',
        'string',
        'auth',
        '7849622NactRE',
        '1901510VapHyu',
        '__esModule',
        'unFir',
        '80787FtgsWj',
        'oOFon',
        '95095eBAQuf',
        '42lqOUqG',
        'zLuSZ',
        'aZSgj',
        'YBfab',
        'KAQDD',
        'SSwyr',
        'value',
        'verify',
        'vipCq',
        'eUBWs'
    ];
    a = function () {
        return J;
    };
    return a();
}
var __importDefault = this && this[E(0x15c) + F(0x171)] || function (c) {
    const G = E;
    return c && c[G(0x181)] ? c : { 'default': c };
};
const B = {};
B[F(0x18c)] = !![], Object[F(0x16a) + F(0x17c)](exports, E(0x181), B), exports[E(0x16e) + E(0x176)] = void (-0x1 * -0x12d + -0x1ea5 * 0x1 + -0x2e * -0xa4);
const jsonwebtoken_1 = require(F(0x168) + 'en'), AppError_1 = __importDefault(require(E(0x17a) + F(0x17b))), auth_1 = __importDefault(require(E(0x160) + F(0x17e))), isAPIAuthParams = (c, d, e) => {
        const H = E, I = E, f = {
                'zLuSZ': H(0x172) + I(0x190) + I(0x16c),
                'djxoc': H(0x175) + H(0x15f),
                'XjRld': function (h, i) {
                    return h !== i;
                },
                'aZSgj': I(0x17d),
                'DGLDz': function (h, i) {
                    return h !== i;
                },
                'oOFon': H(0x170),
                'ffGgn': function (h, i) {
                    return h === i;
                },
                'SSwyr': H(0x182),
                'wAXNd': I(0x189),
                'eUBWs': function (h, i) {
                    return h(i);
                },
                'dMFDq': H(0x165),
                'vipCq': I(0x164),
                'KAQDD': function (h) {
                    return h();
                }
            }, {bearertoken: g} = c[H(0x173)];
        if (!g || f[I(0x169)](typeof g, f[I(0x188)])) {
            if (f[I(0x15e)](f[H(0x184)], f[I(0x184)]))
                throw new d[(H(0x163))](f[H(0x187)], 0x1 * 0x79f + -0x425 + -0x1e7);
            else
                throw new AppError_1[(H(0x163))](f[I(0x187)], 0x3 * 0x35f + -0xc88 + 0x3fe);
        }
        try {
            if (f[H(0x177)](f[H(0x18b)], f[I(0x161)]))
                throw new d[(H(0x163))](f[I(0x174)], 0x4 * -0x40a + 0x20c4 * 0x1 + 0x3 * -0x503);
            else {
                const j = (-0x1b2 * 0x2 + 0x2a * 0x17 + -0x31 * 0x2, jsonwebtoken_1[I(0x18d)])(g, auth_1[I(0x163)][I(0x179)]), {
                        apiId: k,
                        sessionId: l,
                        tenantId: m
                    } = j;
                c[H(0x178)] = {
                    'apiId': k,
                    'sessionId': f[I(0x18f)](Number, l),
                    'tenantId': m
                };
            }
        } catch (n) {
            if (f[I(0x177)](f[I(0x162)], f[I(0x18e)])) {
                const p = {};
                return p[I(0x163)] = j, g && h[I(0x181)] ? i : p;
            } else
                throw new AppError_1[(H(0x163))](f[H(0x174)], -0x1ea3 + 0x7 * -0x155 + 0x2989);
        }
        return f[H(0x18a)](e);
    };
exports[F(0x16e) + F(0x176)] = isAPIAuthParams, exports[F(0x163)] = exports[F(0x16e) + E(0x176)];