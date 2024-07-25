'use strict';
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(o(0xd1)) / (-0x68 * 0xe + 0x1962 + 0x13b1 * -0x1) + -parseInt(o(0xd6)) / (0x19f9 + -0xe5 * 0x7 + 0x2 * -0x9da) + -parseInt(p(0xdc)) / (0x1 * 0x2409 + -0x2360 + -0xa6 * 0x1) * (-parseInt(p(0xcd)) / (-0x195b * 0x1 + 0xa39 + -0x22a * -0x7)) + parseInt(p(0xe0)) / (-0x7ad + -0x62 * -0x25 + -0x678) * (-parseInt(o(0xc7)) / (0x1 * -0x13cd + -0x23b1 + 0x3784)) + -parseInt(p(0xdf)) / (-0x6 * 0x151 + -0x22be + -0xe39 * -0x3) + -parseInt(o(0xe3)) / (-0xe97 + -0x5 * -0x68e + -0x1227) + parseInt(p(0xdd)) / (-0xd * -0xe6 + -0x62a + -0x57b);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xf612d + -0x47b * -0x426 + -0x2c5dd * 0x7));
var __importDefault = this && this[q(0xd0) + q(0xcc)] || function (c) {
    const s = r;
    return c && c[s(0xc9)] ? c : { 'default': c };
};
function a() {
    const v = [
        '../../erro',
        'NO_EXISTS',
        '__importDe',
        '1000867RWYcOD',
        'default',
        'UP_FOUND',
        'ls/Group',
        'rs/AppErro',
        '1827364htglkD',
        'fyUST',
        'ERR_GRUOP_',
        'tenantId',
        'EYVGv',
        'ERR_NO_GRO',
        '4149yPSpzu',
        '45812565pngWKG',
        'where',
        '2079987DcvPjd',
        '165eoAcrh',
        'value',
        'erty',
        '9465800xrFdtF',
        '../../mode',
        '165480Gziinl',
        'destroy',
        '__esModule',
        'findOne',
        'defineProp',
        'fault',
        '488BnAlkv'
    ];
    a = function () {
        return v;
    };
    return a();
}
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x185c + 0x89 * -0x1b + 0x1 * 0x2795);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[r(0xe1)] = !![], Object[q(0xcb) + q(0xe2)](exports, q(0xc9), k);
const AppError_1 = __importDefault(require(q(0xce) + r(0xd5) + 'r')), Group_1 = __importDefault(require(q(0xc6) + r(0xd4))), DeleteGroupService = async ({
        id: f,
        tenantId: g
    }) => {
        const t = r, u = q, h = {};
        h[t(0xda)] = u(0xdb) + u(0xd3), h[u(0xd7)] = t(0xd8) + u(0xcf);
        const i = h, j = {};
        j['id'] = f, j[u(0xd9)] = g;
        const l = {};
        l[t(0xde)] = j;
        const m = await Group_1[t(0xd2)][u(0xca)](l);
        if (!m)
            throw new AppError_1[(t(0xd2))](i[u(0xda)], 0x1100 + -0xbbb + -0x3b1);
        try {
            await m[u(0xc8)]();
        } catch (n) {
            throw new AppError_1[(t(0xd2))](i[u(0xd7)], 0x33 * 0x27 + -0x1e38 + 0x1807);
        }
    };
exports[r(0xd2)] = DeleteGroupService;