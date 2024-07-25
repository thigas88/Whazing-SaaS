'use strict';
function a() {
    const x = [
        'where',
        'defineProp',
        'tenantId',
        '3086019kGLUji',
        'findOne',
        '36yJmDwT',
        '187404UWBsmj',
        'NFxLs',
        'EzFcY',
        '../models/',
        'status',
        'ZHeZk',
        'erty',
        'fault',
        'AppError',
        '_WAPP_FOUN',
        '../errors/',
        '919722eDIoSh',
        'ERR_NO_DEF',
        'Whatsapp',
        '22170eQGjYb',
        '__esModule',
        'whatsapp',
        'value',
        'CONNECTED',
        '98694efSznF',
        'type',
        '680312AICKYo',
        'default',
        '324408MIMyqN',
        '__importDe',
        'WNlRV',
        '5nfAeVD'
    ];
    a = function () {
        return x;
    };
    return a();
}
const s = b, t = b;
(function (c, d) {
    const q = b, r = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(q(0xfe)) / (0x235 * 0x8 + -0xe0 * 0xd + -0x647) + -parseInt(r(0x105)) / (0x3d * 0x43 + 0x6 * -0x66f + 0x16a5) + -parseInt(r(0x103)) / (-0x4 * -0x3a7 + 0x5 * -0x3bf + 0x422) * (-parseInt(r(0x110)) / (-0x3 * 0x875 + -0x1 * -0x1fcb + -0x668)) + -parseInt(q(0x10a)) / (-0xcb0 + -0x178 + 0xbf * 0x13) * (parseInt(r(0x11c)) / (0x18e7 + -0x154d + -0x394)) + parseInt(r(0x111)) / (0x19d8 + 0x7ac + -0x217d) + parseInt(r(0x107)) / (0x1 * -0x491 + -0x902 + 0x1b * 0x81) + parseInt(q(0x10e)) / (0x94d + -0xb9b * 0x1 + -0x257 * -0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x4436f + -0x3 * 0xc311 + 0x673 * 0x25));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1b64 * 0x1 + -0x409 * 0x4 + 0x1643 * 0x2);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[s(0x108) + s(0x118)] || function (c) {
    const u = t;
    return c && c[u(0xff)] ? c : { 'default': c };
};
const k = {};
k[s(0x101)] = !![], Object[s(0x10c) + t(0x117)](exports, s(0xff), k);
const AppError_1 = __importDefault(require(s(0x11b) + s(0x119))), Whatsapp_1 = __importDefault(require(t(0x114) + s(0x11e))), GetDefaultWhatsApp = async (f, g) => {
        const v = s, w = t, h = {};
        h[v(0x113)] = v(0x102), h[v(0x109)] = v(0x100), h[w(0x116)] = function (o, p) {
            return o || p;
        }, h[w(0x112)] = v(0x11d) + w(0x11a) + 'D';
        const i = h, j = {};
        j[w(0x10d)] = f, j[v(0x115)] = i[w(0x113)];
        const l = j;
        g ? l['id'] = g : l[v(0x104)] = i[v(0x109)];
        const m = {};
        m[v(0x10b)] = l;
        const n = await Whatsapp_1[v(0x106)][w(0x10f)](m);
        if (i[v(0x116)](!n, !f))
            throw new AppError_1[(w(0x106))](i[w(0x112)]);
        return n;
    };
exports[t(0x106)] = GetDefaultWhatsApp;