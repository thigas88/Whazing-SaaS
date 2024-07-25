'use strict';
function a() {
    const D = [
        'rXHqA',
        'fZCxQ',
        '244sRBSHN',
        'value',
        'tag',
        '../../mode',
        'tIvak',
        '_FOUND',
        'reload',
        '1446318SaQepV',
        '2194784axJTAT',
        '17337dVcCUV',
        'rs/AppErro',
        '77emlTEu',
        'tenantId',
        '6795620gXczCp',
        'where',
        '1399iDabha',
        '73524cbykNC',
        '../../erro',
        'defineProp',
        'ls/Tag',
        '__esModule',
        'erty',
        '724925PXebUf',
        'ERR_NO_TAG',
        'update',
        'color',
        'cWdiS',
        'isActive',
        '14FuPxaC',
        'fault',
        '__importDe',
        'userId',
        'attributes',
        'findOne',
        'default',
        'MqsRR'
    ];
    a = function () {
        return D;
    };
    return a();
}
const y = b, z = b;
(function (c, d) {
    const w = b, x = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(w(0x19b)) / (0x16d0 + -0x2 * -0x575 + -0x21b9) * (parseInt(w(0x182)) / (-0x20f1 + 0x1 * -0x25d3 + 0x1 * 0x46c6)) + -parseInt(x(0x195)) / (0xa15 + 0x805 * -0x1 + -0x20d) * (parseInt(w(0x18c)) / (0x2425 + -0x22 * 0xfd + -0x1 * 0x287)) + parseInt(x(0x1a2)) / (-0x16cb + 0x388 + 0x1348) + parseInt(x(0x19c)) / (0x5 * -0x14b + -0xd8d + 0x140a) * (parseInt(x(0x197)) / (-0x20b9 + -0x2366 + 0x2213 * 0x2)) + -parseInt(x(0x194)) / (0x9d * -0x1c + -0x1f31 * -0x1 + 0xdfd * -0x1) + -parseInt(x(0x193)) / (-0x23a6 + 0x25d9 * -0x1 + -0x1 * -0x4988) + parseInt(w(0x199)) / (-0x1 * -0x19ef + 0x35a * -0x1 + -0x168b);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1012a * 0x3 + 0x4f * 0x185 + -0x1c590 * -0x3));
var __importDefault = this && this[y(0x184) + y(0x183)] || function (c) {
    const A = z;
    return c && c[A(0x1a0)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x26 * -0x101 + 0x18c0 + -0x595 * 0xb);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[z(0x18d)] = !![], Object[z(0x19e) + y(0x1a1)](exports, z(0x1a0), k);
const AppError_1 = __importDefault(require(z(0x19d) + y(0x196) + 'r')), Tag_1 = __importDefault(require(y(0x18f) + y(0x19f))), UpdateTagService = async ({
        tagData: h,
        tagId: i
    }) => {
        const B = y, C = y, j = {};
        j[B(0x18a)] = C(0x18e), j[B(0x190)] = C(0x17f), j[C(0x189)] = B(0x181), j[B(0x18b)] = C(0x185), j[B(0x180)] = B(0x1a3) + C(0x191);
        const l = j, {
                tag: m,
                color: n,
                isActive: o,
                userId: p,
                tenantId: q
            } = h, r = {};
        r['id'] = i, r[B(0x198)] = q;
        const s = {};
        s[B(0x19a)] = r, s[C(0x186)] = [
            'id',
            l[C(0x18a)],
            l[C(0x190)],
            l[C(0x189)],
            l[B(0x18b)]
        ];
        const t = await Tag_1[B(0x188)][C(0x187)](s);
        if (!t)
            throw new AppError_1[(B(0x188))](l[C(0x180)], -0x1493 + -0x1099 + -0x28 * -0xf8);
        const u = {};
        u[C(0x18e)] = m, u[B(0x17f)] = n, u[C(0x181)] = o, u[B(0x185)] = p, await t[B(0x1a4)](u);
        const v = {};
        return v[C(0x186)] = [
            'id',
            l[B(0x18a)],
            l[B(0x190)],
            l[B(0x189)],
            l[C(0x18b)]
        ], await t[C(0x192)](v), t;
    };
exports[z(0x188)] = UpdateTagService;