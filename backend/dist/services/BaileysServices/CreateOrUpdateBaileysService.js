'use strict';
function a() {
    const B = [
        'erty',
        '../../mode',
        '3505280sxJWcs',
        'findOne',
        'filter',
        'whatsappId',
        '11402160kfZozB',
        '5563818LBWilZ',
        'findIndex',
        'log',
        '807912zuSQUq',
        '9JluVac',
        'default',
        '__importDe',
        'sort',
        'ls/Baileys',
        '2342284yJDjWx',
        'parse',
        'push',
        'stringify',
        'where',
        '1353990gQXBqH',
        'value',
        'update',
        '916898GQqRzY',
        'chats',
        'create',
        'contacts',
        '__esModule',
        'defineProp',
        'fault'
    ];
    a = function () {
        return B;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1349 * -0x1 + 0x917 * -0x1 + 0x1 * 0x1e47);
        let h = e[f];
        return h;
    }, b(c, d);
}
const w = b, x = b;
(function (c, d) {
    const u = b, v = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(u(0x1ef)) / (-0x1649 + 0x2187 * 0x1 + -0xb3d) + parseInt(u(0x1f2)) / (-0xc14 + -0x229 + -0x1 * -0xe3f) * (parseInt(u(0x204)) / (0x4 * 0x605 + -0x23de + 0xbcd)) + parseInt(u(0x1ea)) / (0xd01 + 0x2590 + -0x328d) + parseInt(v(0x1fb)) / (-0x445 * -0x7 + -0xc * 0x106 + -0x2 * 0x8cb) + parseInt(v(0x200)) / (0xeec + -0x17d1 + 0x8eb) + parseInt(u(0x203)) / (0x2ed + 0x315 * 0x9 + -0x1ea3) + -parseInt(v(0x1ff)) / (-0x92e + -0x1d * -0x121 + -0x13d * 0x13);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x8bb49 * 0x1 + -0x53d32 + 0xaa0e2));
var __importDefault = this && this[w(0x1e7) + x(0x1f8)] || function (c) {
    const y = x;
    return c && c[y(0x1f6)] ? c : { 'default': c };
};
const k = {};
k[x(0x1f0)] = !![], Object[x(0x1f7) + w(0x1f9)](exports, x(0x1f6), k);
const Baileys_1 = __importDefault(require(w(0x1fa) + w(0x1e9))), createOrUpdateBaileysService = async ({
        whatsappId: e,
        contacts: f,
        chats: g
    }) => {
        const z = x, A = w;
        try {
            const h = {};
            h[z(0x1fe)] = e;
            const i = {};
            i[A(0x1ee)] = h;
            const j = await Baileys_1[A(0x205)][A(0x1fc)](i);
            if (j) {
                const m = j[z(0x1f3)] ? JSON[A(0x1eb)](j[z(0x1f3)]) : [], n = j[A(0x1f5)] ? JSON[z(0x1eb)](j[A(0x1f5)]) : [];
                if (g) {
                    m[A(0x1ec)](...g), m[A(0x1e8)]();
                    const o = m[A(0x1fd)]((p, q, r) => r[z(0x201)](s => s['id'] === p['id']) === q);
                    return await j[z(0x1f1)]({ 'chats': JSON[z(0x1ed)](o) });
                }
                if (f) {
                    n[z(0x1ec)](...f), n[z(0x1e8)]();
                    const p = n[z(0x1fd)]((q, r, s) => s[A(0x201)](t => t['id'] === q['id']) === r);
                    return await j[z(0x1f1)]({ 'contacts': JSON[z(0x1ed)](p) });
                }
            }
            const l = await Baileys_1[A(0x205)][z(0x1f4)]({
                'whatsappId': e,
                'contacts': JSON[A(0x1ed)](f),
                'chats': JSON[z(0x1ed)](g)
            });
            return await new Promise(q => setTimeout(q, 0x233e + 0xad2 + -0x545 * 0x8)), l;
        } catch (q) {
            console[A(0x202)](q);
            throw new Error(q);
        }
    };
exports[x(0x205)] = createOrUpdateBaileysService;