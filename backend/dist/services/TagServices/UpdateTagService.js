'use strict';
const y = b, z = b;
(function (c, d) {
    const w = b, x = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(w(0x165)) / (-0xc22 + -0x1f55 * -0x1 + -0x1332) + -parseInt(x(0x183)) / (0x1a6b + -0x7a2 * -0x2 + 0xe3 * -0x2f) + -parseInt(x(0x17c)) / (-0x160f + 0x9f * -0x1c + -0x2776 * -0x1) * (parseInt(x(0x163)) / (0xf01 + 0x961 + 0xc2f * -0x2)) + -parseInt(x(0x180)) / (0xbf3 + -0x103a + 0x2 * 0x226) + parseInt(w(0x166)) / (0x38 * -0x4 + 0x3bf + 0x9 * -0x51) + -parseInt(x(0x168)) / (-0x6a * -0x22 + -0x794 + -0x679) + -parseInt(x(0x174)) / (0x2203 * 0x1 + -0x1dc + 0x201f * -0x1) * (-parseInt(x(0x16a)) / (0xb * -0xa1 + 0xc7f + -0x58b));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * 0xfa2a3 + 0x1 * 0xeca49 + 0xe7ed4));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x24f7 * 0x1 + 0x1843 + 0x1 * 0xe17);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const D = [
        '20116305tTVFFz',
        'default',
        'attributes',
        'isActive',
        '__importDe',
        'reload',
        'mnwSu',
        '_FOUND',
        'kBcdw',
        'value',
        '8lnKVTw',
        'ls/Tag',
        '__esModule',
        'defineProp',
        'userId',
        'tag',
        'XEFUx',
        'rs/AppErro',
        '57nBDilA',
        'update',
        '../../mode',
        'erty',
        '3269970bIQsek',
        'ERR_NO_TAG',
        'color',
        '2630454OONILP',
        '../../erro',
        'tenantId',
        'where',
        'findOne',
        '78392VrRqhn',
        'fault',
        '1265204uJaMNM',
        '1753218CQpWKJ',
        'rcOer',
        '3894681oZSnvt',
        'JWgYh'
    ];
    a = function () {
        return D;
    };
    return a();
}
var __importDefault = this && this[y(0x16e) + y(0x164)] || function (c) {
    const A = y;
    return c && c[A(0x176)] ? c : { 'default': c };
};
const k = {};
k[y(0x173)] = !![], Object[y(0x177) + y(0x17f)](exports, y(0x176), k);
const AppError_1 = __importDefault(require(y(0x184) + z(0x17b) + 'r')), Tag_1 = __importDefault(require(y(0x17e) + z(0x175))), UpdateTagService = async ({
        tagData: h,
        tagId: i
    }) => {
        const B = z, C = z, j = {};
        j[B(0x170)] = B(0x179), j[C(0x172)] = B(0x182), j[B(0x169)] = B(0x16d), j[C(0x167)] = B(0x178), j[B(0x17a)] = C(0x181) + B(0x171);
        const l = j, {
                tag: m,
                color: n,
                isActive: o,
                userId: p,
                tenantId: q
            } = h, r = {};
        r['id'] = i, r[C(0x185)] = q;
        const s = {};
        s[B(0x186)] = r, s[B(0x16c)] = [
            'id',
            l[B(0x170)],
            l[C(0x172)],
            l[C(0x169)],
            l[B(0x167)]
        ];
        const t = await Tag_1[C(0x16b)][C(0x187)](s);
        if (!t)
            throw new AppError_1[(B(0x16b))](l[C(0x17a)], 0x2 * 0x37f + 0xb * 0xd3 + -0xb * 0x151);
        const u = {};
        u[B(0x179)] = m, u[C(0x182)] = n, u[C(0x16d)] = o, u[C(0x178)] = p, await t[B(0x17d)](u);
        const v = {};
        return v[C(0x16c)] = [
            'id',
            l[B(0x170)],
            l[B(0x172)],
            l[B(0x169)],
            l[B(0x167)]
        ], await t[C(0x16f)](v), t;
    };
exports[z(0x16b)] = UpdateTagService;