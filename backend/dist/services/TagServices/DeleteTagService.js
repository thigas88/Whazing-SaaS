'use strict';
function a() {
    const v = [
        '6624UQktzL',
        '4279770ijzivd',
        '124365LZUlFN',
        'jdjfT',
        '__esModule',
        '__importDe',
        'erty',
        '717062dRUqgX',
        'rs/AppErro',
        '4072FFkEkz',
        '1637576WfxJDP',
        '../../mode',
        'destroy',
        'ERR_TAG_CO',
        '_FOUND',
        'tenantId',
        'ls/Tag',
        'default',
        'findOne',
        'fault',
        'value',
        '../../erro',
        'NTACTS_EXI',
        'where',
        '430654sUFDew',
        'ERR_NO_TAG',
        'RlhTy',
        'STS',
        'defineProp',
        '3AywKzU',
        '2989805POYGbJ'
    ];
    a = function () {
        return v;
    };
    return a();
}
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(o(0xf0)) / (0x981 + 0x7 * -0x39d + 0xfcb) + parseInt(o(0xf5)) / (0x123a * -0x1 + 0x1906 + -0x6ca) * (-parseInt(o(0xec)) / (0xc81 + -0xc1 * 0x11 + 0x1 * 0x53)) + parseInt(p(0xf8)) / (-0x6 * 0x97 + -0x66 * -0x14 + 0xa * -0x71) + parseInt(p(0xed)) / (0x11 * -0x119 + 0x3a * -0x3b + 0x7 * 0x494) + -parseInt(o(0xef)) / (-0x605 + 0x3 * -0x2dd + 0xea2) + -parseInt(o(0x106)) / (-0x4a * -0x43 + -0x21db + 0x1 * 0xe84) + -parseInt(p(0xf7)) / (-0x1c79 + -0x1be + 0x1d * 0x10b) * (-parseInt(o(0xee)) / (-0x3e5 * 0x5 + -0x238 + 0x39f * 0x6));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x11ae6 + 0x9c6fb * 0x1 + -0x530dd));
var __importDefault = this && this[q(0xf3) + r(0x101)] || function (c) {
    const s = r;
    return c && c[s(0xf2)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2 * -0xcf7 + 0x6 * -0x1b7 + 0x2524);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[q(0x102)] = !![], Object[r(0x10a) + r(0xf4)](exports, q(0xf2), k);
const Tag_1 = __importDefault(require(r(0xf9) + q(0xfe))), AppError_1 = __importDefault(require(q(0x103) + r(0xf6) + 'r')), DeleteTagService = async ({
        id: f,
        tenantId: g
    }) => {
        const t = q, u = q, h = {};
        h[t(0x108)] = u(0x107) + t(0xfc), h[u(0xf1)] = t(0xfb) + t(0x104) + t(0x109);
        const i = h, j = {};
        j['id'] = f, j[t(0xfd)] = g;
        const l = {};
        l[u(0x105)] = j;
        const m = await Tag_1[t(0xff)][u(0x100)](l);
        if (!m)
            throw new AppError_1[(t(0xff))](i[u(0x108)], 0x19d2 * 0x1 + 0x2088 + -0x38c6);
        try {
            await m[u(0xfa)]();
        } catch (n) {
            throw new AppError_1[(t(0xff))](i[t(0xf1)], 0x6 * 0x159 + -0xeb * 0x7 + -0x15);
        }
    };
exports[r(0xff)] = DeleteTagService;