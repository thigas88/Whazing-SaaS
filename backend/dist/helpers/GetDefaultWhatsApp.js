'use strict';
const s = b, t = b;
(function (c, d) {
    const q = b, r = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(q(0xdb)) / (-0xfbf + 0xf4 * 0x9 + -0x12 * -0x66) * (parseInt(r(0xed)) / (-0x1 * -0x1db1 + -0x1faa + 0x1fb)) + -parseInt(r(0xeb)) / (-0x1 * 0x2348 + -0x178c + 0x3ad7 * 0x1) + -parseInt(r(0xdf)) / (0x4c8 + 0x14e + -0x612) * (-parseInt(q(0xf2)) / (-0x5 * -0x217 + 0x1 * 0x1ce1 + -0x1 * 0x274f)) + -parseInt(q(0xf0)) / (-0x1c65 + -0x108f + 0x77f * 0x6) * (parseInt(r(0xe1)) / (-0x5 * 0x65f + 0x1302 + 0x2 * 0x670)) + parseInt(q(0xdd)) / (0x18eb + 0x1cdd + -0x35c0) * (parseInt(r(0xfa)) / (-0x1 * -0x1c2e + 0x2b * 0x69 + -0x2dc8)) + -parseInt(q(0xe9)) / (-0xa9c + -0x11e4 * 0x2 + -0x2a * -0x11b) + parseInt(r(0xf9)) / (0x4b * 0x77 + 0x2e9 + -0x1 * 0x25bb);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x4ffe + -0x174 * -0x2b + -0x3 * -0x9b53));
function a() {
    const x = [
        'defineProp',
        '1148980RXWDLo',
        '__esModule',
        '676416gJddYv',
        'ERR_NO_DEF',
        '2naqxrY',
        'yuCTX',
        'type',
        '215394kCSotz',
        'nylTq',
        '10WreCzX',
        'tenantId',
        'findOne',
        'Whatsapp',
        '_WAPP_FOUN',
        'status',
        'fault',
        '3510331EiLYLv',
        '515466AWkEop',
        'whatsapp',
        '../models/',
        '../errors/',
        '611RnMPbk',
        'XOJaM',
        '40NtUpxz',
        'AVwVv',
        '139052NiHhWq',
        'where',
        '35uFKdDX',
        'default',
        '__importDe',
        'CONNECTED',
        'AppError',
        'erty',
        'value'
    ];
    a = function () {
        return x;
    };
    return a();
}
var __importDefault = this && this[s(0xe3) + s(0xf8)] || function (c) {
    const u = s;
    return c && c[u(0xea)] ? c : { 'default': c };
};
const k = {};
k[s(0xe7)] = !![], Object[s(0xe8) + t(0xe6)](exports, s(0xea), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x13dc + -0x250 + -0x10b2);
        let h = e[f];
        return h;
    }, b(c, d);
}
const AppError_1 = __importDefault(require(s(0xda) + t(0xe5))), Whatsapp_1 = __importDefault(require(t(0xfc) + s(0xf5))), GetDefaultWhatsApp = async (f, g) => {
        const v = s, w = t, h = {};
        h[v(0xee)] = w(0xe4), h[w(0xde)] = w(0xfb), h[v(0xdc)] = function (o, p) {
            return o || p;
        }, h[v(0xf1)] = w(0xec) + w(0xf6) + 'D';
        const i = h, j = {};
        j[v(0xf3)] = f, j[v(0xf7)] = i[w(0xee)];
        const l = j;
        g ? l['id'] = g : l[v(0xef)] = i[v(0xde)];
        const m = {};
        m[v(0xe0)] = l;
        const n = await Whatsapp_1[w(0xe2)][v(0xf4)](m);
        if (i[v(0xdc)](!n, !f))
            throw new AppError_1[(v(0xe2))](i[w(0xf1)]);
        return n;
    };
exports[t(0xe2)] = GetDefaultWhatsApp;