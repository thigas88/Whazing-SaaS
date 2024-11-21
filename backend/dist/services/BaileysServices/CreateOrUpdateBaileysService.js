'use strict';
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(r(0xd7)) / (-0x36d * -0xa + -0x1 * 0x1208 + -0x1039 * 0x1) + -parseInt(r(0xcf)) / (-0x15ca + 0x1fb5 + -0x9e9) * (parseInt(r(0xd2)) / (0x903 + -0x1cbc + 0xc * 0x1a5)) + parseInt(r(0xd5)) / (0x7 * 0x527 + 0x11 * 0x26 + -0x2693) + parseInt(r(0xc7)) / (0x1b57 + -0x51a * 0x1 + -0x768 * 0x3) + -parseInt(r(0xe5)) / (0xcf8 + 0x1f63 * 0x1 + -0x2c55) * (-parseInt(s(0xe2)) / (0xde0 + -0x1642 + 0x869)) + parseInt(s(0xd4)) / (-0xfb * -0x1b + -0x548 + 0x1 * -0x1529) * (parseInt(s(0xd1)) / (0x1 * -0x1d99 + -0xd69 * 0x1 + 0x2b0b)) + parseInt(r(0xdf)) / (-0x10ca + 0x4 * 0x14 + -0x97 * -0x1c) * (parseInt(s(0xc8)) / (-0x43 * 0x21 + -0x5d * -0x33 + -0x9d9));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xdd * -0xc4f + 0x85014 + -0x3 * 0x47a3f));
function a() {
    const y = [
        '__importDe',
        '1133335lzlaGt',
        '33KQAtyO',
        'whatsappId',
        'findOne',
        'update',
        'push',
        '../../mode',
        'parse',
        '1160756xraGDg',
        'create',
        '2682387VWdlhW',
        '3KzDSlv',
        'sort',
        '8VyPzpv',
        '106048ZXRqOE',
        'default',
        '332639omefJt',
        'where',
        '__esModule',
        'isArray',
        'erty',
        'stringify',
        'indexOf',
        'fault',
        '380170VOkFVq',
        'contacts',
        'value',
        '154RhuZQB',
        'lodash',
        'ls/Baileys',
        '165978rbbAHj',
        'defineProp',
        'filter'
    ];
    a = function () {
        return y;
    };
    return a();
}
var __importDefault = this && this[t(0xc6) + u(0xde)] || function (c) {
    const v = u;
    return c && c[v(0xd9)] ? c : { 'default': c };
};
const k = {};
k[t(0xe1)] = !![], Object[t(0xe6) + t(0xdb)](exports, t(0xd9), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2231 + 0x200a + -0x4176);
        let h = e[f];
        return h;
    }, b(c, d);
}
const lodash_1 = require(u(0xe3)), Baileys_1 = __importDefault(require(t(0xcd) + u(0xe4))), createOrUpdateBaileysService = async ({
        whatsappId: e,
        contacts: f
    }) => {
        const w = u, x = u, g = {};
        g[w(0xc9)] = e;
        const h = {};
        h[x(0xd8)] = g;
        const i = await Baileys_1[w(0xd6)][w(0xca)](h);
        if (!f)
            return i;
        if (i) {
            const l = [], m = i[w(0xe0)] ? JSON[w(0xce)](i[x(0xe0)]) : [];
            (-0x386 + -0x1d4e + 0x106a * 0x2, lodash_1[w(0xda)])(m) && l[x(0xcc)](...m);
            l[w(0xcc)](...f), l[w(0xd3)](), l[w(0xc5)]((o, p, q) => q[x(0xdd)](o) === p);
            const n = await i[x(0xcb)]({ 'contacts': JSON[w(0xdc)](l) });
            return n;
        }
        const j = await Baileys_1[x(0xd6)][w(0xd0)]({
            'whatsappId': e,
            'contacts': JSON[x(0xdc)](f)
        });
        return j;
    };
exports[u(0xd6)] = createOrUpdateBaileysService;