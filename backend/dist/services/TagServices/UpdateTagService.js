'use strict';
const y = b, z = b;
(function (c, d) {
    const w = b, x = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(w(0x1ca)) / (0x2660 + -0x16c1 + -0xf9e) + parseInt(w(0x1d7)) / (0x5d * 0x49 + 0x88d + -0x2310) + -parseInt(x(0x1c7)) / (-0x25af + 0x52 * -0xd + 0x29dc) + parseInt(w(0x1cb)) / (-0x15f6 + -0x25d9 + 0xbf7 * 0x5) + -parseInt(x(0x1bb)) / (-0x5 * 0x163 + 0x1780 + -0x423 * 0x4) + -parseInt(x(0x1d3)) / (0x2 * 0x58e + -0xd * 0x3e + -0x7f0) + -parseInt(x(0x1ce)) / (-0x3 * -0x22a + 0xad * 0x9 + -0xc8c);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1 * -0x4f88 + -0x27bed + -0x7 * -0xc2ca));
var __importDefault = this && this[y(0x1c8) + y(0x1be)] || function (c) {
    const A = y;
    return c && c[A(0x1c1)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xb08 + 0x6f * 0x1 + -0x9c1);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[y(0x1b6)] = !![], Object[z(0x1bc) + z(0x1d5)](exports, y(0x1c1), k);
const AppError_1 = __importDefault(require(y(0x1d0) + y(0x1c0) + 'r')), Tag_1 = __importDefault(require(z(0x1c3) + z(0x1cd))), UpdateTagService = async ({
        tagData: h,
        tagId: i
    }) => {
        const B = z, C = y, j = {};
        j[B(0x1c5)] = B(0x1d2), j[B(0x1d8)] = C(0x1c4), j[B(0x1cc)] = C(0x1bd), j[B(0x1d1)] = C(0x1d6), j[B(0x1d4)] = C(0x1c2) + C(0x1b8);
        const l = j, {
                tag: m,
                color: n,
                isActive: o,
                userId: p,
                tenantId: q
            } = h, r = {};
        r['id'] = i, r[C(0x1cf)] = q;
        const s = {};
        s[B(0x1bf)] = r, s[B(0x1ba)] = [
            'id',
            l[B(0x1c5)],
            l[C(0x1d8)],
            l[B(0x1cc)],
            l[C(0x1d1)]
        ];
        const t = await Tag_1[C(0x1b9)][C(0x1b7)](s);
        if (!t)
            throw new AppError_1[(C(0x1b9))](l[C(0x1d4)], 0x100 * -0xe + -0x1 * -0xff1 + 0x1f * -0x3);
        const u = {};
        u[B(0x1d2)] = m, u[C(0x1c4)] = n, u[C(0x1bd)] = o, u[B(0x1d6)] = p, await t[B(0x1c6)](u);
        const v = {};
        return v[B(0x1ba)] = [
            'id',
            l[C(0x1c5)],
            l[B(0x1d8)],
            l[B(0x1cc)],
            l[C(0x1d1)]
        ], await t[B(0x1c9)](v), t;
    };
function a() {
    const D = [
        'wiYcC',
        'ls/Tag',
        '679721PtFdya',
        'tenantId',
        '../../erro',
        'KFVvB',
        'tag',
        '737346EYKQsN',
        'QqBEd',
        'erty',
        'userId',
        '281306LBscUd',
        'ZaXyG',
        'value',
        'findOne',
        '_FOUND',
        'default',
        'attributes',
        '504015nHMOyv',
        'defineProp',
        'isActive',
        'fault',
        'where',
        'rs/AppErro',
        '__esModule',
        'ERR_NO_TAG',
        '../../mode',
        'color',
        'lTKuE',
        'update',
        '282729YgJtrw',
        '__importDe',
        'reload',
        '121935jOARqu',
        '1273428ZKqhWC'
    ];
    a = function () {
        return D;
    };
    return a();
}
exports[z(0x1b9)] = UpdateTagService;