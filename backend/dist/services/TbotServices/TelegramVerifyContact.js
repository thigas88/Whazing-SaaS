'use strict';
const o = b, p = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * -0x12b9 + 0x341 * 0x7 + -0x278c);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(m(0x1f5)) / (-0x2 * 0x427 + 0x102b * -0x1 + -0x1 * -0x187a) + parseInt(m(0x20f)) / (-0x41c * 0x4 + 0xb3d * 0x3 + 0x1145 * -0x1) + -parseInt(m(0x1fd)) / (0x1ac3 + 0x400 * 0x8 + -0x3ac0) * (parseInt(m(0x20c)) / (-0x3a2 * -0x4 + -0x18bd + 0xa39)) + -parseInt(m(0x205)) / (0x1 * 0x263e + 0x2 * 0x5c6 + 0x5d * -0x89) * (-parseInt(m(0x20d)) / (-0x1 * 0xbdd + 0xa67 + 0x17c)) + parseInt(n(0x207)) / (-0x1d * 0xbf + 0x395 * -0x1 + 0x17 * 0x119) * (-parseInt(n(0x1fa)) / (-0x1332 + 0x11 * -0x1bb + 0x15 * 0x251)) + -parseInt(n(0x1fc)) / (-0x9f7 * 0x3 + -0x909 * -0x3 + 0x2d3) + -parseInt(n(0x1f4)) / (-0x16bf + -0x126 * 0xd + 0x25b7);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xb2de3 * -0x1 + 0x6a * 0x1720 + -0xc1444));
function a() {
    const t = [
        '2790480vsEatV',
        'username',
        '_id',
        'defineProp',
        'telegram',
        '59192pShVaJ',
        '715908pqgLdy',
        '__importDe',
        '1516540XUaWIu',
        'reateOrUpd',
        '__esModule',
        'getFileLin',
        'erty',
        'default',
        '1974600JrhIPx',
        '636639TSNUBY',
        '../Contact',
        'first_name',
        'MhJfH',
        'photo',
        '8ipmvfZ',
        'Service',
        '9456246tEEiVc',
        '3iIssFx',
        'ateContact',
        'value',
        'small_file',
        'Services/C',
        'last_name',
        'DlDcv',
        'getChat',
        '35RMvLQU',
        'fault'
    ];
    a = function () {
        return t;
    };
    return a();
}
var __importDefault = this && this[o(0x20e) + o(0x206)] || function (c) {
    const q = p;
    return c && c[q(0x211)] ? c : { 'default': c };
};
const k = {};
k[p(0x1ff)] = !![], Object[o(0x20a) + p(0x213)](exports, o(0x211), k);
const CreateOrUpdateContactService_1 = __importDefault(require(o(0x1f6) + p(0x201) + p(0x210) + p(0x1fe) + p(0x1fb))), VerifyContact = async (c, d) => {
        const r = o, s = o, e = {
                'DlDcv': function (j, l) {
                    return j(l);
                },
                'MhJfH': r(0x20b)
            };
        let f;
        const g = await c[r(0x204)]();
        try {
            f = g[s(0x1f9)]?.[s(0x200) + r(0x209)] ? await c[r(0x20b)][r(0x212) + 'k'](g[s(0x1f9)]?.[r(0x200) + r(0x209)]) : undefined;
        } catch (j) {
            f = undefined;
        }
        const h = {
                'name': g[r(0x1f7)] + '\x20' + g[s(0x202)] || g[s(0x208)] || '',
                'number': '',
                'profilePicUrl': f ? e[r(0x203)](String, f) : undefined,
                'tenantId': d,
                'pushname': g[s(0x208)] || '',
                'isUser': !![],
                'isWAContact': ![],
                'isGroup': ![],
                'origem': e[r(0x1f8)],
                'telegramId': g['id']
            }, i = await (0x6ea + 0x3 * -0x7a9 + 0x1011, CreateOrUpdateContactService_1[s(0x214)])(h);
        return i;
    };
exports[p(0x214)] = VerifyContact;