'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * 0xc5c + 0x5c6 + 0x6ff);
        let h = e[f];
        return h;
    }, b(c, d);
}
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(l(0x7f)) / (0x954 + 0xc3e * 0x3 + 0x1 * -0x2e0d) + -parseInt(m(0x75)) / (-0x31 * -0x1 + -0x17ec * -0x1 + 0x79 * -0x33) * (-parseInt(l(0x7e)) / (-0x12b5 + -0x152e + -0x2 * -0x13f3)) + parseInt(l(0x6c)) / (-0x1 * -0x1a47 + -0x21d1 + 0x78e) * (-parseInt(m(0x74)) / (0xc4d + -0x7 * -0x149 + -0x1547)) + -parseInt(m(0x7a)) / (-0x1861 + 0x215 * 0xe + -0xf * 0x51) * (parseInt(m(0x70)) / (0x21a7 + 0x34a * 0x1 + -0x2 * 0x1275)) + parseInt(m(0x6e)) / (-0x204e + 0x6b9 * -0x1 + 0x270f) + -parseInt(m(0x6a)) / (0x19e + 0x1ff * -0x12 + 0x2259) + parseInt(m(0x79)) / (0x1 * -0x1b9d + 0x2bd + 0x18ea);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1 * -0xa7c39 + -0x1 * 0x6263f + 0x17d655 * 0x1));
function a() {
    const s = [
        'defineProp',
        '__esModule',
        '510KsILHg',
        '2278JEKkgi',
        'findByPk',
        'erty',
        'name',
        '4087360iNlnpd',
        '12gcStUO',
        'cnpj',
        'value',
        'fault',
        '1758PhCFlp',
        '741377AXPoRg',
        'default',
        'ownerId',
        'status',
        '6103647vrzosO',
        'ls/Tenant',
        '20172PqAdOv',
        'update',
        '4749816uBPiWr',
        '../../mode',
        '2613436eXZjai',
        '__importDe'
    ];
    a = function () {
        return s;
    };
    return a();
}
var __importDefault = this && this[n(0x71) + o(0x7d)] || function (c) {
    const p = o;
    return c && c[p(0x73)] ? c : { 'default': c };
};
const k = {};
k[o(0x7c)] = !![], Object[n(0x72) + n(0x77)](exports, o(0x73), k);
const Tenant_1 = __importDefault(require(n(0x6f) + o(0x6b))), AdminStatusTenant = async ({
        id: e,
        status: f
    }) => {
        const q = o, r = n, g = await Tenant_1[q(0x80)][q(0x76)](e), h = {};
        h[q(0x69)] = f, await g[r(0x6d)](h);
        const i = {};
        i['id'] = g['id'], i[r(0x78)] = g[q(0x78)], i[q(0x7b)] = g[q(0x7b)], i[q(0x69)] = f, i[q(0x81)] = g[q(0x81)];
        const j = i;
        return j;
    };
exports[o(0x80)] = AdminStatusTenant;