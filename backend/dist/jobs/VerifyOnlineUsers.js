'use strict';
const p = b, q = b;
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(n(0x191)) / (-0x243 * 0x9 + -0x115 * 0x1 + 0x1571 * 0x1) + parseInt(o(0x1a0)) / (0x216b + -0x227e + 0x1 * 0x115) * (parseInt(o(0x1a2)) / (-0x180 * -0x1 + -0xa53 * 0x2 + 0x3d5 * 0x5)) + parseInt(o(0x19e)) / (-0x18e5 + 0x31b * -0xa + 0x37f7) + -parseInt(o(0x192)) / (0x1a19 * -0x1 + 0xbb * 0xf + 0xf29) + -parseInt(o(0x182)) / (0x84d + 0x19dd + -0x2224) + -parseInt(n(0x180)) / (-0x4 * -0x133 + 0x2273 * -0x1 + 0x1dae) + parseInt(n(0x17e)) / (0x1c * -0x68 + 0x6f3 * 0x4 + -0x1064);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x9eaa + 0x14386 * -0x1 + 0xb177 * 0x13));
var __importDefault = this && this[p(0x189) + p(0x18b)] || function (c) {
    const r = p;
    return c && c[r(0x1aa)] ? c : { 'default': c };
};
function a() {
    const w = [
        'removeOnCo',
        'neUsers',
        '../utils/l',
        'update',
        'mplete',
        'info',
        'jLQSg',
        '__esModule',
        'every',
        'User',
        'default',
        'removeOnFa',
        'value',
        '9324640kMepuK',
        'iwKFK',
        '5068077AnNLyW',
        'GbMqC',
        '4266468gJlGMJ',
        'isOnline',
        'message',
        'getIO',
        'emit',
        'defineProp',
        'ers',
        '__importDe',
        'repeat',
        'fault',
        'fyOnlineUs',
        'erty',
        'verifyOnli',
        '../models/',
        '../libs/so',
        '913933EtiWRq',
        '1471720qDjiCd',
        'itiated',
        'jobId',
        'findAll',
        'forEach',
        'ogger',
        'VerifyOnli',
        'logger',
        'Finalized\x20',
        'neUsers\x20In',
        'Error\x20Veri',
        'kMkAu',
        '3189100abUItg',
        'error',
        '8MTklWY',
        'cket',
        '1065195shoqMj'
    ];
    a = function () {
        return w;
    };
    return a();
}
const k = {};
k[p(0x17d)] = !![], Object[q(0x187) + q(0x18d)](exports, q(0x1aa), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x166d + -0xee1 * -0x2 + -0xec * 0x37);
        let h = e[f];
        return h;
    }, b(c, d);
}
const User_1 = __importDefault(require(q(0x18f) + q(0x1ac))), logger_1 = require(q(0x1a5) + p(0x197)), socket_1 = require(q(0x190) + p(0x1a1)), l = {};
l[p(0x1ab)] = (-0x1 * 0x1ec7 + -0x255b + -0x445e * -0x1) * (-0x2551 + 0x29b * -0x5 + -0x40 * -0xd9);
const m = {};
m[p(0x1a3) + q(0x1a7)] = !![], m[p(0x17c) + 'il'] = ![], m[p(0x194)] = p(0x198) + p(0x1a4), m[q(0x18a)] = l, exports[q(0x17b)] = {
    'key': p(0x198) + q(0x1a4),
    'options': m,
    async 'handle'() {
        const s = q, t = p, e = {};
        e[s(0x181)] = s(0x198) + t(0x19b) + s(0x193), e[s(0x19d)] = t(0x18e) + t(0x1a4), e[t(0x1a9)] = t(0x19a) + s(0x198) + s(0x1a4), e[s(0x17f)] = t(0x19c) + s(0x18c) + s(0x188);
        const f = e;
        try {
            logger_1[t(0x199)][t(0x1a8)](f[s(0x181)]);
            const g = await User_1[t(0x17b)][s(0x195)]();
            g[s(0x196)](async i => {
                const u = t, v = s, j = {};
                j[u(0x183)] = ![], await i[v(0x1a6)](j);
            });
            const h = (0x6ad * -0x1 + 0xa * 0x335 + -0xb * 0x24f, socket_1[t(0x185)])();
            h[s(0x186)](f[t(0x19d)]), logger_1[s(0x199)][s(0x1a8)](f[s(0x1a9)]);
        } catch (i) {
            const j = {};
            j[s(0x184)] = f[t(0x17f)], j[s(0x19f)] = i, logger_1[t(0x199)][t(0x19f)](j);
            throw new Error(i);
        }
    }
};