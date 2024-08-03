'use strict';
const o = b, p = b;
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(m(0x183)) / (0x841 * 0x2 + -0x5 * -0x3ff + -0x91f * 0x4) * (-parseInt(m(0x17f)) / (-0x25f * -0xd + 0x24c1 + -0x4392)) + parseInt(n(0x176)) / (-0x15ab * 0x1 + 0x8e5 + 0xcc9) + parseInt(m(0x17d)) / (0x1bb9 * 0x1 + -0x26f9 * -0x1 + -0x42ae) + parseInt(m(0x17a)) / (0x5 * -0x3d + -0x86 * 0x1c + 0xfde) + -parseInt(n(0x178)) / (0x12ac + -0x115 + -0x1191) * (parseInt(n(0x175)) / (-0x6aa * 0x2 + 0x2688 + 0x1 * -0x192d)) + -parseInt(n(0x174)) / (-0xef * 0x4 + -0x8 * 0x17 + 0x47c) * (-parseInt(n(0x182)) / (-0xb * 0x12a + 0x716 + 0x1 * 0x5c1)) + -parseInt(n(0x18f)) / (0x1 * -0x2419 + 0xa49 + -0xced * -0x2) * (parseInt(m(0x170)) / (-0x183b + -0x2b8 + 0x5 * 0x566));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x799 * -0xde + 0x2d546 + 0x1 * 0xde60d));
function a() {
    const t = [
        'reateOrUpd',
        '5815465MMAwdd',
        'photo',
        'default',
        '1642920rRrehi',
        'defineProp',
        '84LgsCLH',
        'erty',
        'ateContact',
        '9293148BNjKgt',
        '13099rnzAsx',
        'getFileLin',
        'first_name',
        'telegram',
        'username',
        'fault',
        '_id',
        '../Contact',
        'last_name',
        'Service',
        'value',
        'Services/C',
        '30RnxwOo',
        'small_file',
        'getChat',
        '10874336DUqeYH',
        '__importDe',
        'mOmor',
        'LnRhW',
        '8pGxFUf',
        '21PRJcuN',
        '2508975mBcGQT',
        '__esModule',
        '724818qjeZlF'
    ];
    a = function () {
        return t;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1669 + 0x4a3 * -0x4 + -0x1 * -0x2a65);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[o(0x171) + p(0x188)] || function (c) {
    const q = o;
    return c && c[q(0x177)] ? c : { 'default': c };
};
const k = {};
k[o(0x18d)] = !![], Object[p(0x17e) + o(0x180)](exports, p(0x177), k);
const CreateOrUpdateContactService_1 = __importDefault(require(o(0x18a) + p(0x18e) + o(0x179) + o(0x181) + o(0x18c))), VerifyContact = async (c, d) => {
        const r = p, s = p, e = {
                'mOmor': function (j, l) {
                    return j(l);
                },
                'LnRhW': r(0x186)
            };
        let f;
        const g = await c[r(0x191)]();
        try {
            f = g[r(0x17b)]?.[s(0x190) + r(0x189)] ? await c[s(0x186)][r(0x184) + 'k'](g[s(0x17b)]?.[r(0x190) + r(0x189)]) : undefined;
        } catch (j) {
            f = undefined;
        }
        const h = {
                'name': g[r(0x185)] + '\x20' + g[r(0x18b)] || g[r(0x187)] || '',
                'number': '',
                'profilePicUrl': f ? e[r(0x172)](String, f) : undefined,
                'tenantId': d,
                'pushname': g[s(0x187)] || '',
                'isUser': !![],
                'isWAContact': ![],
                'isGroup': ![],
                'origem': e[s(0x173)],
                'telegramId': g['id']
            }, i = await (0x1 * 0x20a9 + -0x48e + 0x5 * -0x59f, CreateOrUpdateContactService_1[r(0x17c)])(h);
        return i;
    };
exports[p(0x17c)] = VerifyContact;