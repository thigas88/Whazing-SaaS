'use strict';
const o = b, p = b;
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(m(0x1a4)) / (-0x1 * -0xca2 + -0x1a83 + 0x6f1 * 0x2) + -parseInt(n(0x19e)) / (0x2 * -0x295 + 0x2458 + 0x2a * -0xbe) + -parseInt(n(0x1a7)) / (0x131c + -0x78f + -0xb8a) * (parseInt(m(0x1ab)) / (0xe05 + -0x1e1b + 0x1 * 0x101a)) + -parseInt(n(0x19c)) / (0x2 * -0xa0c + -0xc0f + -0x47 * -0x74) + -parseInt(m(0x19a)) / (-0x664 * 0x2 + -0x62f * -0x3 + -0x1 * 0x5bf) * (-parseInt(m(0x19b)) / (0x762 + -0x25 * -0xce + -0x2521)) + -parseInt(n(0x1a2)) / (-0xaf * 0x1f + -0x1381 + 0x145d * 0x2) + parseInt(n(0x199)) / (0x10 * -0x17b + -0x170a + -0x1 * -0x2ec3) * (parseInt(n(0x1af)) / (0x5 * -0x253 + -0x27c * 0x9 + -0xb57 * -0x3));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x30bae + 0x5e * -0xd5a + 0x7040d));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x48f * 0x7 + 0x1758 + 0x9e * -0x57);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[o(0x19d) + p(0x1ac)] || function (c) {
    const q = o;
    return c && c[q(0x1a5)] ? c : { 'default': c };
};
function a() {
    const t = [
        '2620791ZlnBOm',
        '2393142YjzDaq',
        '7nUvhAp',
        '1194095eUtoHO',
        '__importDe',
        '294890aDJqLX',
        '_id',
        'Services/C',
        'ateContact',
        '2441480quiaPi',
        'small_file',
        '341520tpbtWL',
        '__esModule',
        'reateOrUpd',
        '9hWIubJ',
        'username',
        'photo',
        'default',
        '779240tsyaLy',
        'fault',
        'value',
        'erty',
        '30DRxncJ',
        '../Contact',
        'aJPNk',
        'telegram',
        'getFileLin',
        'last_name',
        'defineProp',
        'first_name',
        'getChat',
        'Service',
        'SOJmL'
    ];
    a = function () {
        return t;
    };
    return a();
}
const k = {};
k[o(0x1ad)] = !![], Object[p(0x194) + o(0x1ae)](exports, p(0x1a5), k);
const CreateOrUpdateContactService_1 = __importDefault(require(p(0x18f) + o(0x1a0) + p(0x1a6) + o(0x1a1) + p(0x197))), VerifyContact = async (c, d) => {
        const r = o, s = o, e = {
                'SOJmL': function (j, l) {
                    return j(l);
                },
                'aJPNk': r(0x191)
            };
        let f;
        const g = await c[s(0x196)]();
        try {
            f = g[s(0x1a9)]?.[s(0x1a3) + r(0x19f)] ? await c[r(0x191)][r(0x192) + 'k'](g[s(0x1a9)]?.[r(0x1a3) + r(0x19f)]) : undefined;
        } catch (j) {
            f = undefined;
        }
        const h = {
                'name': g[s(0x195)] + '\x20' + g[s(0x193)] || g[r(0x1a8)] || '',
                'number': '',
                'profilePicUrl': f ? e[r(0x198)](String, f) : undefined,
                'tenantId': d,
                'pushname': g[s(0x1a8)] || '',
                'isUser': !![],
                'isWAContact': ![],
                'isGroup': ![],
                'origem': e[r(0x190)],
                'telegramId': g['id']
            }, i = await (0x175c + 0x2202 + -0x395e, CreateOrUpdateContactService_1[s(0x1aa)])(h);
        return i;
    };
exports[p(0x1aa)] = VerifyContact;