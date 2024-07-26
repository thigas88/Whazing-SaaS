'use strict';
const y = b, z = b;
(function (c, d) {
    const w = b, x = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(w(0x1ac)) / (0x155d + -0x21 * 0xd6 + 0x63a) + -parseInt(w(0x1ae)) / (-0x2 * 0x102e + -0x1 * -0xd79 + 0x12e5) + parseInt(x(0x1a4)) / (-0x124 + -0x459 + 0x580) * (parseInt(x(0x1a8)) / (0x191 * 0x10 + -0x41c * 0x4 + -0x1d * 0x4c)) + parseInt(x(0x1b0)) / (-0x1 * -0x1727 + 0x1d5a + -0x347c) + -parseInt(w(0x1bc)) / (0x1e73 + -0x3e6 + -0x1a87) * (parseInt(w(0x1bb)) / (0x9ae + -0xb9e + 0x1f7)) + -parseInt(x(0x1b9)) / (-0x2b * -0x3b + 0xb53 + 0x1534 * -0x1) + parseInt(w(0x1b2)) / (0x1318 + 0x1452 + -0x2761);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x39c * -0x60e + 0x553d7 * 0x1 + 0x1 * 0x1d36ad));
function a() {
    const D = [
        'yqDUi',
        '3486oxyryQ',
        'tag',
        '_FOUND',
        'update',
        '1524xjwmgA',
        '../../mode',
        'default',
        'where',
        '93765pxmNiW',
        'erty',
        '1527148QTNfsp',
        'ERR_NO_TAG',
        '5152620dsgimi',
        'rs/AppErro',
        '8246223IYjQhL',
        'ls/Tag',
        'userId',
        '__esModule',
        'daQad',
        '../../erro',
        'ihybF',
        '551888yksJqX',
        'value',
        '2867249uYwmQL',
        '12TQyULY',
        'fault',
        '__importDe',
        'isActive',
        'color',
        'reload',
        'attributes',
        'tenantId',
        'findOne',
        'fQOEk',
        'JIMSZ',
        'defineProp'
    ];
    a = function () {
        return D;
    };
    return a();
}
var __importDefault = this && this[y(0x1be) + y(0x1bd)] || function (c) {
    const A = z;
    return c && c[A(0x1b5)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * 0x2f9 + 0xb * -0x32d + 0x2191);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[z(0x1ba)] = !![], Object[z(0x1a2) + y(0x1ad)](exports, y(0x1b5), k);
const AppError_1 = __importDefault(require(y(0x1b7) + y(0x1b1) + 'r')), Tag_1 = __importDefault(require(z(0x1a9) + y(0x1b3))), UpdateTagService = async ({
        tagData: h,
        tagId: i
    }) => {
        const B = y, C = y, j = {};
        j[B(0x1a1)] = C(0x1a5), j[C(0x1b6)] = C(0x19b), j[C(0x1b8)] = B(0x1bf), j[B(0x1a0)] = B(0x1b4), j[C(0x1a3)] = C(0x1af) + B(0x1a6);
        const l = j, {
                tag: m,
                color: n,
                isActive: o,
                userId: p,
                tenantId: q
            } = h, r = {};
        r['id'] = i, r[B(0x19e)] = q;
        const s = {};
        s[B(0x1ab)] = r, s[B(0x19d)] = [
            'id',
            l[C(0x1a1)],
            l[C(0x1b6)],
            l[B(0x1b8)],
            l[C(0x1a0)]
        ];
        const t = await Tag_1[B(0x1aa)][C(0x19f)](s);
        if (!t)
            throw new AppError_1[(B(0x1aa))](l[C(0x1a3)], -0x7ae + -0x128f * 0x1 + -0x1 * -0x1bd1);
        const u = {};
        u[C(0x1a5)] = m, u[B(0x19b)] = n, u[B(0x1bf)] = o, u[B(0x1b4)] = p, await t[C(0x1a7)](u);
        const v = {};
        return v[C(0x19d)] = [
            'id',
            l[B(0x1a1)],
            l[C(0x1b6)],
            l[C(0x1b8)],
            l[C(0x1a0)]
        ], await t[B(0x19c)](v), t;
    };
exports[z(0x1aa)] = UpdateTagService;