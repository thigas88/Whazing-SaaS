'use strict';
const o = b, p = b;
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(m(0xfb)) / (-0x2053 + 0xb81 + 0x14d3) + -parseInt(m(0x105)) / (0x1e7b + -0x712 * -0x4 + -0x3ac1) * (parseInt(n(0x10e)) / (-0x66e * -0x1 + 0x1be * -0xe + 0x11f9)) + parseInt(m(0x115)) / (0x4b * 0x72 + -0x4a8 * -0x6 + 0x14e * -0x2f) * (parseInt(n(0xf6)) / (-0x423 + 0xb0e * 0x1 + -0x6e6)) + parseInt(n(0x100)) / (-0x1216 + 0x12fa + -0xde) * (parseInt(m(0x102)) / (0x53 * -0x7 + -0x25 * -0xdf + -0x61 * 0x4f)) + parseInt(m(0x106)) / (0x5c7 + 0x19de + -0x1f9d * 0x1) * (parseInt(n(0x110)) / (0x2 * -0xfa7 + 0x2 * -0x1b1 + -0x3 * -0xb93)) + -parseInt(m(0x117)) / (-0x9e * -0x1 + 0x412 * -0x9 + 0x1 * 0x240e) * (parseInt(n(0x10a)) / (-0xaf6 + -0x85d + 0x135e)) + -parseInt(n(0xf9)) / (-0x121e + 0x869 * -0x2 + 0x1 * 0x22fc);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x10e52b + 0x8dd1b + 0x949 * -0x187));
var __importDefault = this && this[o(0x10d) + o(0x112)] || function (c) {
    const q = p;
    return c && c[q(0x113)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x16c5 + -0xa64 + -0xb6b);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[o(0x10c)] = !![], Object[p(0xf8) + o(0x111)](exports, p(0x113), k);
const CreateOrUpdateContactService_1 = __importDefault(require(p(0xff) + p(0xfa) + p(0xfc) + p(0x10f) + o(0x104))), VerifyContact = async (c, d) => {
        const r = p, s = o, e = {
                'YFKEB': function (j, l) {
                    return j(l);
                },
                'wGtkI': r(0x101)
            };
        let f;
        const g = await c[s(0xfd)]();
        try {
            f = g[s(0x114)]?.[r(0x103) + s(0xf7)] ? await c[r(0x101)][s(0x118) + 'k'](g[r(0x114)]?.[s(0x103) + s(0xf7)]) : undefined;
        } catch (j) {
            f = undefined;
        }
        const h = {
                'name': g[s(0x107)] + '\x20' + g[r(0x10b)] || g[s(0x116)] || '',
                'number': '',
                'profilePicUrl': f ? e[s(0x108)](String, f) : undefined,
                'tenantId': d,
                'pushname': g[r(0x116)] || '',
                'isUser': !![],
                'isWAContact': ![],
                'isGroup': ![],
                'origem': e[s(0xfe)],
                'telegramId': g['id']
            }, i = await (-0xd80 + 0xe17 + -0x97, CreateOrUpdateContactService_1[s(0x109)])(h);
        return i;
    };
exports[p(0x109)] = VerifyContact;
function a() {
    const t = [
        'small_file',
        'Service',
        '54PYhUlA',
        '7846616haCAZG',
        'first_name',
        'YFKEB',
        'default',
        '33RDTBGC',
        'last_name',
        'value',
        '__importDe',
        '19389cGYsmf',
        'ateContact',
        '9KLgkZM',
        'erty',
        'fault',
        '__esModule',
        'photo',
        '11072YcgtyW',
        'username',
        '3566660qQiTaG',
        'getFileLin',
        '2055MfHoMo',
        '_id',
        'defineProp',
        '11167080dlxyuw',
        'Services/C',
        '160248WBIDMN',
        'reateOrUpd',
        'getChat',
        'wGtkI',
        '../Contact',
        '1542dyVxuc',
        'telegram',
        '17843ymFaUN'
    ];
    a = function () {
        return t;
    };
    return a();
}