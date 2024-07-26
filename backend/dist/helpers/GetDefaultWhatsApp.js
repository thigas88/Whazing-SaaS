'use strict';
function a() {
    const x = [
        'AppError',
        'type',
        '2028372JOSkrB',
        'CONNECTED',
        '11skMDoj',
        '3594890fgiEHU',
        'findOne',
        '9toaTDN',
        'default',
        '2202QHdQZu',
        '../models/',
        'defineProp',
        'where',
        '2103lOXwdY',
        'erty',
        'whatsapp',
        'aeNyJ',
        '29CYgRNf',
        '_WAPP_FOUN',
        '__esModule',
        '7575976YRwYfJ',
        '__importDe',
        '5968iWaRNh',
        '23779SmNagw',
        'RKzuf',
        '9638570WKBPeU',
        'MpxuI',
        '23730urtzIi',
        'value',
        'tenantId',
        'LmlfP',
        '../errors/',
        'fault',
        'status',
        'Whatsapp',
        'ERR_NO_DEF'
    ];
    a = function () {
        return x;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x231 + -0x5 * -0x5cf + -0x196f);
        let h = e[f];
        return h;
    }, b(c, d);
}
const s = b, t = b;
(function (c, d) {
    const q = b, r = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(q(0x17d)) / (0x2516 * 0x1 + -0x3 * 0xc79 + 0x2 * 0x2b) * (-parseInt(q(0x187)) / (0x89f * -0x2 + -0xe40 + 0x540 * 0x6)) + -parseInt(q(0x179)) / (0x1fde * -0x1 + 0x3 * 0x97 + 0x1e1c) * (-parseInt(q(0x182)) / (-0xaeb * 0x1 + -0x3 * 0x341 + 0xa59 * 0x2)) + parseInt(q(0x171)) / (0xfa7 + -0x1cc1 + 0xd1f) + -parseInt(r(0x175)) / (0xeff * -0x2 + -0x335 + -0x13b * -0x1b) * (parseInt(q(0x183)) / (0x2674 + 0xd74 + -0x33e1)) + parseInt(r(0x180)) / (0xfbf + -0x30 * 0x3a + 0x3 * -0x19d) * (parseInt(r(0x173)) / (0x206 * -0xa + 0x254 + 0x1 * 0x11f1)) + -parseInt(q(0x185)) / (-0x1 * 0x144 + 0x1807 + -0x16b9) * (parseInt(q(0x170)) / (0x9cc + 0x1d84 + -0x2745)) + -parseInt(q(0x16e)) / (-0x172d + -0x62e + 0x1d67 * 0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x3138b * -0x5 + 0x7c772 + 0x11ec52));
var __importDefault = this && this[s(0x181) + s(0x18c)] || function (c) {
    const u = t;
    return c && c[u(0x17f)] ? c : { 'default': c };
};
const k = {};
k[t(0x188)] = !![], Object[s(0x177) + s(0x17a)](exports, s(0x17f), k);
const AppError_1 = __importDefault(require(s(0x18b) + t(0x16c))), Whatsapp_1 = __importDefault(require(s(0x176) + t(0x18e))), GetDefaultWhatsApp = async (f, g) => {
        const v = s, w = s, h = {};
        h[v(0x18a)] = w(0x16f), h[v(0x186)] = v(0x17b), h[w(0x17c)] = function (o, p) {
            return o || p;
        }, h[w(0x184)] = w(0x16b) + w(0x17e) + 'D';
        const i = h, j = {};
        j[v(0x189)] = f, j[w(0x18d)] = i[w(0x18a)];
        const l = j;
        g ? l['id'] = g : l[v(0x16d)] = i[v(0x186)];
        const m = {};
        m[w(0x178)] = l;
        const n = await Whatsapp_1[v(0x174)][v(0x172)](m);
        if (i[w(0x17c)](!n, !f))
            throw new AppError_1[(w(0x174))](i[v(0x184)]);
        return n;
    };
exports[t(0x174)] = GetDefaultWhatsApp;