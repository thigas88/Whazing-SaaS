'use strict';
const w = b, x = b;
(function (c, d) {
    const u = b, v = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(u(0x164)) / (-0x8dd + 0xa8b * 0x1 + 0x27 * -0xb) * (parseInt(v(0x153)) / (-0x1ee7 + -0x45 * -0x58 + 0x1 * 0x731)) + parseInt(u(0x151)) / (0x1 * -0x625 + 0x60b * -0x3 + -0x1849 * -0x1) * (-parseInt(v(0x155)) / (0x287 * -0xa + 0x25e5 + -0xc9b)) + parseInt(v(0x169)) / (-0x16c7 + 0x18de + -0x212) + parseInt(v(0x16c)) / (-0x3 * -0xc56 + -0x1d29 + -0x7d3) * (parseInt(u(0x163)) / (0xc12 + 0x1902 + -0x250d)) + parseInt(v(0x15f)) / (-0x209 + -0x1ebe + 0x25 * 0xe3) + parseInt(u(0x152)) / (0x17 * -0x6a + -0x2111 + 0x2aa0) * (parseInt(v(0x171)) / (-0x1e5f + 0x1439 * -0x1 + 0x2 * 0x1951)) + -parseInt(u(0x168)) / (0x1b15 + -0x490 * -0x4 + -0x2d4a);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1a5 * -0x10cb + 0x509fd + -0x1229a4));
function a() {
    const B = [
        '9PwOmNY',
        '1322WHDEqy',
        'log',
        '7081524bnTMWy',
        'create',
        'filter',
        'ls/Baileys',
        'value',
        'findIndex',
        'sort',
        'update',
        'contacts',
        'erty',
        '10333688FMfJVG',
        'chats',
        'default',
        '__importDe',
        '3303979YyfuGq',
        '2711RAsZAw',
        '../../mode',
        'defineProp',
        '__esModule',
        '13735612JdssuL',
        '6111220ESuaSZ',
        'where',
        'whatsappId',
        '24xEHPky',
        'fault',
        'parse',
        'stringify',
        'findOne',
        '13589090HZhWQX',
        'push',
        '3KlXyfJ'
    ];
    a = function () {
        return B;
    };
    return a();
}
var __importDefault = this && this[w(0x162) + x(0x16d)] || function (c) {
    const y = x;
    return c && c[y(0x167)] ? c : { 'default': c };
};
const k = {};
k[w(0x159)] = !![], Object[x(0x166) + w(0x15e)](exports, x(0x167), k);
const Baileys_1 = __importDefault(require(w(0x165) + w(0x158))), createOrUpdateBaileysService = async ({
        whatsappId: e,
        contacts: f,
        chats: g
    }) => {
        const z = x, A = w;
        try {
            const h = {};
            h[z(0x16b)] = e;
            const i = {};
            i[z(0x16a)] = h;
            const j = await Baileys_1[A(0x161)][A(0x170)](i);
            if (j) {
                const m = j[A(0x160)] ? JSON[z(0x16e)](j[A(0x160)]) : [], n = j[z(0x15d)] ? JSON[z(0x16e)](j[z(0x15d)]) : [];
                if (g) {
                    m[z(0x150)](...g), m[z(0x15b)]();
                    const o = m[z(0x157)]((p, q, r) => r[z(0x15a)](s => s['id'] === p['id']) === q);
                    return await j[A(0x15c)]({ 'chats': JSON[z(0x16f)](o) });
                }
                if (f) {
                    n[z(0x150)](...f), n[A(0x15b)]();
                    const p = n[z(0x157)]((q, r, s) => s[A(0x15a)](t => t['id'] === q['id']) === r);
                    return await j[z(0x15c)]({ 'contacts': JSON[z(0x16f)](p) });
                }
            }
            const l = await Baileys_1[z(0x161)][A(0x156)]({
                'whatsappId': e,
                'contacts': JSON[A(0x16f)](f),
                'chats': JSON[z(0x16f)](g)
            });
            return await new Promise(q => setTimeout(q, 0x1 * -0x7f6 + 0x1deb + -0x120d)), l;
        } catch (q) {
            console[z(0x154)](q);
            throw new Error(q);
        }
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x407 * -0x5 + -0x49 * -0x18 + -0x1 * 0x19ab);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[w(0x161)] = createOrUpdateBaileysService;