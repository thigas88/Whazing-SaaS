'use strict';
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(o(0x84)) / (-0x1b4a + 0x33b + 0x1810) * (parseInt(p(0x93)) / (-0x10be * 0x1 + 0x2b9 * -0x1 + -0x1 * -0x1379)) + -parseInt(p(0x8f)) / (-0x1bc3 + 0x72d + -0x1499 * -0x1) * (-parseInt(o(0x9c)) / (-0x5 * -0x664 + 0x31 * 0xa7 + -0x3fe7 * 0x1)) + -parseInt(p(0xa1)) / (0x8ba + -0x5 * -0x4d6 + -0x20e3 * 0x1) * (parseInt(o(0x88)) / (-0xdc2 + 0x21a * -0x2 + -0x1 * -0x11fc)) + parseInt(p(0x91)) / (0x1b * 0xb4 + -0x3 * -0x9f3 + -0x30ce) * (parseInt(o(0xa0)) / (-0x16c2 + 0x213d + -0xa73 * 0x1)) + parseInt(p(0x9f)) / (0x23b0 + 0xf03 + -0x32aa) + -parseInt(o(0x85)) / (0x218c + -0x1862 + -0x10 * 0x92) + parseInt(p(0x7e)) / (0xfd * -0xb + -0x242 + -0xc * -0x119) * (-parseInt(o(0x9a)) / (-0xd99 + 0x23b * 0x8 + -0x1 * 0x433));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x2de9e * 0x2 + 0x16449 * 0x6 + 0x4f5e6));
var __importDefault = this && this[q(0x95) + q(0x80)] || function (c) {
    const s = q;
    return c && c[s(0x94)] ? c : { 'default': c };
};
const k = {};
k[q(0x81)] = !![], Object[r(0x9d) + r(0x87)](exports, r(0x94), k);
const AppError_1 = __importDefault(require(r(0x8c) + q(0x86) + 'r')), User_1 = __importDefault(require(r(0x8d) + q(0x83))), UpdateUserConfigsService = async ({
        userConfigs: f,
        userId: g,
        tenantId: h
    }) => {
        const t = r, u = q, i = {};
        i[t(0x90)] = t(0xa2), i[t(0x99)] = u(0x8b), i[u(0x98)] = t(0x89), i[t(0x8e)] = t(0xa3), i[u(0x96)] = t(0x7f) + t(0x9e);
        const j = i, l = {};
        l['id'] = g, l[t(0x82)] = h;
        const m = {};
        m[t(0xa4)] = l, m[u(0x8a)] = [
            j[t(0x90)],
            'id',
            j[t(0x99)],
            j[t(0x98)],
            j[t(0x8e)]
        ];
        const n = await User_1[t(0x9b)][t(0x92)](m);
        if (!n)
            throw new AppError_1[(t(0x9b))](j[u(0x96)], -0xfe + -0x2 * -0xafa + -0x1362);
        await n[u(0x97)]({
            'configs': {
                ...n[u(0xa3)],
                ...f
            }
        });
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x194d * 0x1 + 0x1 * 0x9e + 0x1 * -0x196d);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[q(0x9b)] = UpdateUserConfigsService;
function a() {
    const v = [
        'update',
        'tYfUa',
        'imbiy',
        '444FzpfFu',
        'default',
        '84wjBYjH',
        'defineProp',
        'R_FOUND',
        '7300296OIkYxD',
        '8quDQij',
        '51295FwbjLo',
        'name',
        'configs',
        'where',
        '418781uIxCuP',
        'ERR_NO_USE',
        'fault',
        'value',
        'tenantId',
        'ls/User',
        '101TrAuCT',
        '2073170qIHUOp',
        'rs/AppErro',
        'erty',
        '378pHogrX',
        'profile',
        'attributes',
        'email',
        '../../erro',
        '../../mode',
        'ZbkUb',
        '90999HFjCSJ',
        'HLdFU',
        '5936497DCXtLB',
        'findOne',
        '9154LHRDxG',
        '__esModule',
        '__importDe',
        'btjav'
    ];
    a = function () {
        return v;
    };
    return a();
}