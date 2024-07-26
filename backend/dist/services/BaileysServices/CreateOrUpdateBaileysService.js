'use strict';
const w = b, x = b;
(function (c, d) {
    const u = b, v = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(u(0x95)) / (-0x1994 * 0x1 + 0x1 * -0x1031 + -0x2 * -0x14e3) * (-parseInt(u(0xa1)) / (-0x1 * -0x243f + -0x1fcb + -0x472)) + parseInt(u(0x91)) / (-0x148c * 0x1 + -0x16bd * 0x1 + 0x2b4c) * (-parseInt(v(0x8f)) / (0x1738 * -0x1 + -0x2 * -0x11cf + 0x631 * -0x2)) + -parseInt(v(0x8c)) / (-0x17e * -0x13 + 0x1ec0 + 0x19 * -0x25d) + parseInt(u(0x8e)) / (0x2183 * 0x1 + 0x1b9f + -0x3d1c) * (-parseInt(u(0x92)) / (-0x1508 + -0x2 * -0x106 + 0x1303)) + -parseInt(v(0x9d)) / (0x953 * -0x1 + 0x2c4 + 0x697) * (-parseInt(u(0xac)) / (0x2 * 0x4f9 + -0x8 * 0x1b7 + 0x145 * 0x3)) + parseInt(u(0x99)) / (-0x1bf * -0xd + 0x1b * 0x5a + -0x2027) + parseInt(u(0x9a)) / (0x679 + -0x14 * 0x3e + -0x196);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x14f80a * 0x1 + 0x28fc1 + 0x1fd8c8));
var __importDefault = this && this[w(0x97) + w(0xa5)] || function (c) {
    const y = w;
    return c && c[y(0x96)] ? c : { 'default': c };
};
const k = {};
function a() {
    const B = [
        'findIndex',
        'fault',
        'create',
        'filter',
        'where',
        'defineProp',
        'erty',
        'contacts',
        '9mRCYbk',
        'parse',
        '5222110iGHmzz',
        'push',
        '6LlFfal',
        '20ybmFmI',
        'update',
        '86544ilVzaR',
        '3288887IHSMWR',
        'chats',
        'sort',
        '973893MaCChH',
        '__esModule',
        '__importDe',
        'value',
        '3522770GKUWdC',
        '30593937FtaMyv',
        'log',
        'ls/Baileys',
        '3036952YjMxmo',
        '../../mode',
        'default',
        'whatsappId',
        '2RKwHkh',
        'stringify',
        'findOne'
    ];
    a = function () {
        return B;
    };
    return a();
}
k[w(0x98)] = !![], Object[x(0xa9) + x(0xaa)](exports, w(0x96), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1a83 + 0x1910 + 0x6 * 0x55);
        let h = e[f];
        return h;
    }, b(c, d);
}
const Baileys_1 = __importDefault(require(w(0x9e) + x(0x9c))), createOrUpdateBaileysService = async ({
        whatsappId: e,
        contacts: f,
        chats: g
    }) => {
        const z = x, A = x;
        try {
            const h = {};
            h[z(0xa0)] = e;
            const i = {};
            i[z(0xa8)] = h;
            const j = await Baileys_1[A(0x9f)][A(0xa3)](i);
            if (j) {
                const m = j[A(0x93)] ? JSON[A(0x8b)](j[z(0x93)]) : [], n = j[z(0xab)] ? JSON[z(0x8b)](j[A(0xab)]) : [];
                if (g) {
                    m[A(0x8d)](...g), m[z(0x94)]();
                    const o = m[A(0xa7)]((p, q, r) => r[A(0xa4)](s => s['id'] === p['id']) === q);
                    return await j[A(0x90)]({ 'chats': JSON[A(0xa2)](o) });
                }
                if (f) {
                    n[A(0x8d)](...f), n[A(0x94)]();
                    const p = n[z(0xa7)]((q, r, s) => s[A(0xa4)](t => t['id'] === q['id']) === r);
                    return await j[A(0x90)]({ 'contacts': JSON[A(0xa2)](p) });
                }
            }
            const l = await Baileys_1[A(0x9f)][A(0xa6)]({
                'whatsappId': e,
                'contacts': JSON[A(0xa2)](f),
                'chats': JSON[A(0xa2)](g)
            });
            return await new Promise(q => setTimeout(q, 0xe45 + 0x32 * -0x32 + -0x9 * 0x11)), l;
        } catch (q) {
            console[A(0x9b)](q);
            throw new Error(q);
        }
    };
exports[w(0x9f)] = createOrUpdateBaileysService;