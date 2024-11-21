'use strict';
function a() {
    const t = [
        'ateContact',
        '__importDe',
        '7009641kSAOUD',
        '626328oPEWqS',
        'username',
        'reateOrUpd',
        '84jfhgjj',
        '200388RHunri',
        'default',
        'fault',
        'photo',
        '147ENbNNJ',
        '85lDajZO',
        '10uwSvsf',
        '1809786smzNWt',
        '__esModule',
        '148101RSHymu',
        '_id',
        '3032556hHTgZM',
        'first_name',
        'MRDcO',
        'last_name',
        'erty',
        'small_file',
        'telegram',
        'Service',
        'wLBbo',
        'defineProp',
        '../Contact',
        'value',
        'getChat',
        'getFileLin',
        '1366907fkzrro',
        'Services/C'
    ];
    a = function () {
        return t;
    };
    return a();
}
const o = b, p = b;
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(m(0x19f)) / (-0x1f48 + 0xcaa * 0x2 + 0x131 * 0x5) + -parseInt(m(0x191)) / (-0x109 * 0x2 + -0x67 * 0x4f + 0x21dd) + parseInt(m(0x18f)) / (-0x95 + -0x278 * 0x9 + -0x5 * -0x490) * (-parseInt(m(0x185)) / (0x5 * 0x7a9 + 0xb1b + -0x18b2 * 0x2)) + -parseInt(m(0x18b)) / (0xdb * -0x3 + -0x117d + 0x23b * 0x9) * (parseInt(n(0x186)) / (-0x1 * 0x1d90 + 0x3 * 0xa29 + -0xe5)) + -parseInt(n(0x18a)) / (-0x481 * 0x2 + 0xe3f + 0x3a * -0x17) * (-parseInt(m(0x1a4)) / (-0x1a9a + -0x1ee4 + 0x3986)) + parseInt(n(0x1a3)) / (0x1 * 0x1713 + 0x738 + -0x1e42) * (parseInt(m(0x18c)) / (-0x177b + -0x1e12 + 0x3597)) + parseInt(m(0x18d)) / (-0x4c6 * -0x1 + 0x7 * -0x503 + 0x1e5a);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x67e5a + -0x83f * -0x147 + 0x8ae4b));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x136f + 0x2 * 0x903 + -0x23f2);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[o(0x1a2) + o(0x188)] || function (c) {
    const q = o;
    return c && c[q(0x18e)] ? c : { 'default': c };
};
const k = {};
k[o(0x19c)] = !![], Object[p(0x19a) + p(0x195)](exports, p(0x18e), k);
const CreateOrUpdateContactService_1 = __importDefault(require(p(0x19b) + o(0x1a0) + o(0x184) + o(0x1a1) + o(0x198))), VerifyContact = async (c, d) => {
        const r = o, s = p, e = {
                'wLBbo': function (j, l) {
                    return j(l);
                },
                'MRDcO': r(0x197)
            };
        let f;
        const g = await c[s(0x19d)]();
        try {
            f = g[r(0x189)]?.[s(0x196) + s(0x190)] ? await c[r(0x197)][s(0x19e) + 'k'](g[s(0x189)]?.[r(0x196) + r(0x190)]) : undefined;
        } catch (j) {
            f = undefined;
        }
        const h = {
                'name': g[r(0x192)] + '\x20' + g[r(0x194)] || g[r(0x183)] || '',
                'number': '',
                'profilePicUrl': f ? e[s(0x199)](String, f) : undefined,
                'tenantId': d,
                'pushname': g[r(0x183)] || '',
                'isUser': !![],
                'isWAContact': ![],
                'isGroup': ![],
                'origem': e[r(0x193)],
                'telegramId': g['id']
            }, i = await (-0x7 * 0x4a1 + 0xfe0 * 0x1 + 0x1087, CreateOrUpdateContactService_1[s(0x187)])(h);
        return i;
    };
exports[o(0x187)] = VerifyContact;