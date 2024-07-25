'use strict';
const u = b, v = b;
(function (c, d) {
    const s = b, t = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(s(0xa4)) / (0x219e + -0x1faf + -0x1ee) * (parseInt(t(0xa3)) / (0x516 + 0x4d7 + 0x1 * -0x9eb)) + parseInt(s(0xba)) / (0x1ac6 + -0x1293 + 0x8 * -0x106) * (parseInt(s(0x97)) / (-0x1 * 0x17f6 + -0x3a * 0xc + 0x2 * 0xd59)) + parseInt(t(0x99)) / (0x1 * -0x895 + 0x1 * -0x13b5 + 0x1c4f) * (parseInt(t(0xa1)) / (-0x1 * -0x1993 + 0x1aa7 + -0x3434)) + -parseInt(s(0xa2)) / (0x17c9 + 0x2161 * -0x1 + -0x99f * -0x1) + parseInt(t(0x94)) / (-0x1 * 0x26a3 + 0x1442 + 0x1269) * (-parseInt(t(0xc3)) / (0x3 * -0xbc1 + -0x1913 + 0x57d * 0xb)) + -parseInt(t(0x93)) / (-0x13aa + -0x1b7 * 0x14 + -0x200 * -0x1b) + parseInt(t(0x9c)) / (0x2a4 + -0x6 * -0xda + -0x7b5) * (parseInt(t(0xb9)) / (-0xb03 + -0x17a4 + 0x22b3));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x936a9 + 0x1f7b * 0x3b + 0xcdb96));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x217c + -0x53b * -0x5 + 0x6 * 0x151);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
function a() {
    const y = [
        '__esModule',
        'messageBus',
        'isGroup',
        'removeOnCo',
        '108radJnB',
        'delay',
        's.whatsapp',
        'erty',
        '8242680hEZANj',
        '522128aztFSD',
        'ticket',
        'logger',
        '4MrcMyY',
        'default',
        '15wDLEGJ',
        'getWbot',
        '../utils/l',
        '11cZdpZQ',
        'ar\x20message',
        'contact',
        '../libs/wb',
        'eWhatsappB',
        '1124250HdlDEN',
        '8716344bRJyqd',
        '1601656TyPIgJ',
        '1aNoMRu',
        'sendMessag',
        'ogger',
        'tenant',
        'defineProp',
        'g.us',
        '\x20business\x20',
        'SDqMz',
        'value',
        'attempts',
        'message',
        'Error\x20envi',
        'SendMessag',
        'hours:\x20',
        'text',
        'usinessHou',
        'removeOnFa',
        'whatsappId',
        'BhMGC',
        'error',
        'ot-baileys',
        '37880628gDBiyS',
        '1946838BnRybO',
        'mplete',
        '.net',
        'inessHours',
        'number'
    ];
    a = function () {
        return y;
    };
    return a();
}
k[u(0xac)] = !![], Object[u(0xa8) + u(0x92)](exports, u(0xbf), k);
const wbot_baileys_1 = require(v(0x9f) + v(0xb8)), logger_1 = require(u(0x9b) + v(0xa6)), l = {};
l[u(0xc4)] = 0x1f4, l[u(0xad)] = 0x32, l[u(0xc2) + v(0xbb)] = !![], l[u(0xb4) + 'il'] = ![], exports[u(0x98)] = {
    'key': u(0xb0) + u(0xa0) + u(0xb3) + 'rs',
    'options': l,
    async 'handle'({data: f}) {
        const w = u, x = u, g = {};
        g[w(0xab)] = x(0xa9), g[x(0xb6)] = w(0x91) + x(0xbc);
        const h = g;
        try {
            const i = (0x238f + 0xc26 + 0x213 * -0x17, wbot_baileys_1[x(0x9a)])(f[x(0x95)][w(0xb5)]), j = f[w(0x95)]?.[w(0xc1)] ? h[w(0xab)] : h[x(0xb6)], m = f[x(0x95)][x(0x9e)][w(0xbe)] + '@' + j, n = {};
            n[w(0xb2)] = f[x(0xa7)][x(0xc0) + x(0xbd)];
            const o = await i[w(0xa5) + 'e'](m, n), p = {};
            p[w(0xae)] = o, p[w(0xc0) + w(0xbd)] = f[x(0xa7)][x(0xc0) + x(0xbd)], p[w(0x95)] = f[x(0x95)];
            const q = p;
            return q;
        } catch (r) {
            logger_1[x(0x96)][x(0xb7)](w(0xaf) + x(0x9d) + w(0xaa) + w(0xb1) + r);
            throw new Error(r);
        }
    }
};