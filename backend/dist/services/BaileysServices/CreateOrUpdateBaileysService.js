'use strict';
const w = b, x = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x2 * -0xfe5 + 0x12 * -0xd3 + 0x43 * -0x3d);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const u = b, v = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(u(0x104)) / (0x1 * 0x121d + -0x211c + 0x3c * 0x40) * (-parseInt(u(0x113)) / (-0x3 * 0xa3d + -0x378 * 0xb + 0x44e1)) + parseInt(u(0x11b)) / (0x11c4 + -0x1a93 + -0x1 * -0x8d2) * (parseInt(v(0x11a)) / (-0x9a * -0x3a + -0x1039 + -0x12a7)) + parseInt(v(0x101)) / (0x67b + 0x157e + -0x1bf4) * (-parseInt(v(0x119)) / (-0x2258 + 0x10 * -0x7d + 0x2a2e)) + parseInt(u(0x10e)) / (-0x16c6 + 0xff1 + 0x6dc) + -parseInt(v(0x11c)) / (0xeb8 + 0x774 + 0x2 * -0xb12) * (-parseInt(v(0x11e)) / (0x1 * 0xa16 + -0x659 + -0x3b4)) + parseInt(u(0x108)) / (-0x1 * -0x1b3e + -0x1ffc + -0x6 * -0xcc) + parseInt(u(0xfe)) / (-0xcb * -0x6 + 0x5 * 0x59f + -0x20d2);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xb912 * 0xa + -0xc7165 + -0x5 * -0x31861));
var __importDefault = this && this[w(0x10d) + w(0x117)] || function (c) {
    const y = x;
    return c && c[y(0x11d)] ? c : { 'default': c };
};
const k = {};
k[w(0x110)] = !![], Object[w(0x118) + x(0x10c)](exports, w(0x11d), k);
const Baileys_1 = __importDefault(require(x(0x105) + x(0x114))), createOrUpdateBaileysService = async ({
        whatsappId: e,
        contacts: f,
        chats: g
    }) => {
        const z = w, A = x;
        try {
            const h = {};
            h[z(0xfd)] = e;
            const i = {};
            i[A(0x10f)] = h;
            const j = await Baileys_1[A(0x102)][z(0x106)](i);
            if (j) {
                const m = j[A(0x109)] ? JSON[z(0x10a)](j[z(0x109)]) : [], n = j[z(0x10b)] ? JSON[A(0x10a)](j[A(0x10b)]) : [];
                if (g) {
                    m[z(0x111)](...g), m[A(0x103)]();
                    const o = m[A(0x100)]((p, q, r) => r[A(0x116)](s => s['id'] === p['id']) === q);
                    return await j[A(0x107)]({ 'chats': JSON[A(0x112)](o) });
                }
                if (f) {
                    n[A(0x111)](...f), n[z(0x103)]();
                    const p = n[z(0x100)]((q, r, s) => s[z(0x116)](t => t['id'] === q['id']) === r);
                    return await j[z(0x107)]({ 'contacts': JSON[z(0x112)](p) });
                }
            }
            const l = await Baileys_1[A(0x102)][z(0x115)]({
                'whatsappId': e,
                'contacts': JSON[z(0x112)](f),
                'chats': JSON[z(0x112)](g)
            });
            return await new Promise(q => setTimeout(q, 0x7ea + -0x161 * -0xd + 0x5 * -0x463)), l;
        } catch (q) {
            console[A(0xff)](q);
            throw new Error(q);
        }
    };
exports[w(0x102)] = createOrUpdateBaileysService;
function a() {
    const B = [
        'erty',
        '__importDe',
        '3868466UXEZBx',
        'where',
        'value',
        'push',
        'stringify',
        '815784YALwiz',
        'ls/Baileys',
        'create',
        'findIndex',
        'fault',
        'defineProp',
        '648SRWwWf',
        '1252dxqEQY',
        '2517Jitzpj',
        '470584FiwKqh',
        '__esModule',
        '36VXFJIS',
        'whatsappId',
        '8173044hNeZjW',
        'log',
        'filter',
        '53480drNVxA',
        'default',
        'sort',
        '1mvsiPj',
        '../../mode',
        'findOne',
        'update',
        '4420830HmPyCH',
        'chats',
        'parse',
        'contacts'
    ];
    a = function () {
        return B;
    };
    return a();
}