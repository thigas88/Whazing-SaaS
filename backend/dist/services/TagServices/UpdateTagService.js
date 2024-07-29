'use strict';
const y = b, z = b;
(function (c, d) {
    const w = b, x = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(w(0x1d2)) / (0x139d * 0x1 + -0x73 * -0x37 + -0x1 * 0x2c51) * (-parseInt(x(0x1d0)) / (0x2d * -0x59 + 0x44 * 0x6d + 0x3 * -0x46f)) + parseInt(x(0x1be)) / (-0x1d46 + -0x5 * 0x7ad + 0x21d5 * 0x2) * (-parseInt(w(0x1b8)) / (-0x1251 * -0x1 + -0x2b9 * 0xd + 0x1118)) + -parseInt(w(0x1b7)) / (0xc71 * -0x1 + -0x5f8 + -0x2a2 * -0x7) + parseInt(x(0x1b9)) / (0x7f5 * -0x1 + -0x4a * -0x8 + -0x1 * -0x5ab) * (parseInt(x(0x1c5)) / (0x7e5 + -0x1c1b + 0x143d)) + -parseInt(x(0x1c0)) / (0x1 * 0x26d5 + 0xf14 + 0x425 * -0xd) * (parseInt(w(0x1c9)) / (-0xf73 * 0x2 + 0x10c * 0x7 + 0x1 * 0x179b)) + parseInt(x(0x1ce)) / (0x1ab9 + 0x891 + 0xc0 * -0x2f) + -parseInt(x(0x1dd)) / (-0x3a8 + -0x5 * 0x4e7 + 0x1c36) * (-parseInt(x(0x1d6)) / (-0x74e + -0x127 * -0x11 + 0x1 * -0xc3d));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xba0d1 + -0x51c9e + 0x1f4448));
function a() {
    const D = [
        'ERR_NO_TAG',
        'rs/AppErro',
        'tag',
        'tenantId',
        '2107slgoGH',
        'PhgNc',
        'fKAKG',
        '../../erro',
        '131391eFjstL',
        'userId',
        'reload',
        'bRVwI',
        'VvwAx',
        '17022630ylYOTq',
        'attributes',
        '1808ZEqlfm',
        'ls/Tag',
        '1361QmjJBf',
        'findOne',
        'erty',
        'update',
        '1399620XushSN',
        'value',
        'default',
        '__importDe',
        'where',
        '../../mode',
        '__esModule',
        '220MfOyVH',
        'color',
        '5553375GzCJYc',
        '4CBOnfp',
        '23298mLmvCP',
        'fault',
        '_FOUND',
        'defineProp',
        'ZtYIu',
        '1834173ewWwfg',
        'isActive',
        '712hCuPnF'
    ];
    a = function () {
        return D;
    };
    return a();
}
var __importDefault = this && this[y(0x1d9) + y(0x1ba)] || function (c) {
    const A = z;
    return c && c[A(0x1dc)] ? c : { 'default': c };
};
const k = {};
k[z(0x1d7)] = !![], Object[y(0x1bc) + y(0x1d4)](exports, y(0x1dc), k);
const AppError_1 = __importDefault(require(y(0x1c8) + y(0x1c2) + 'r')), Tag_1 = __importDefault(require(y(0x1db) + z(0x1d1))), UpdateTagService = async ({
        tagData: h,
        tagId: i
    }) => {
        const B = z, C = y, j = {};
        j[B(0x1bd)] = C(0x1c3), j[B(0x1c7)] = C(0x1b6), j[C(0x1c6)] = B(0x1bf), j[C(0x1cc)] = B(0x1ca), j[B(0x1cd)] = B(0x1c1) + B(0x1bb);
        const l = j, {
                tag: m,
                color: n,
                isActive: o,
                userId: p,
                tenantId: q
            } = h, r = {};
        r['id'] = i, r[C(0x1c4)] = q;
        const s = {};
        s[B(0x1da)] = r, s[B(0x1cf)] = [
            'id',
            l[B(0x1bd)],
            l[B(0x1c7)],
            l[C(0x1c6)],
            l[B(0x1cc)]
        ];
        const t = await Tag_1[C(0x1d8)][B(0x1d3)](s);
        if (!t)
            throw new AppError_1[(C(0x1d8))](l[C(0x1cd)], -0x1747 + -0x4 * -0x9b6 + -0xdfd * 0x1);
        const u = {};
        u[C(0x1c3)] = m, u[C(0x1b6)] = n, u[B(0x1bf)] = o, u[C(0x1ca)] = p, await t[B(0x1d5)](u);
        const v = {};
        return v[C(0x1cf)] = [
            'id',
            l[B(0x1bd)],
            l[B(0x1c7)],
            l[B(0x1c6)],
            l[C(0x1cc)]
        ], await t[C(0x1cb)](v), t;
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x232c + 0x153b + 0xfa7);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[y(0x1d8)] = UpdateTagService;