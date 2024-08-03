'use strict';
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(o(0x1b1)) / (0x7 * 0x3dc + -0x1 * 0x2466 + 0x963) + -parseInt(o(0x1b2)) / (-0x1853 + 0x1bff + 0xe * -0x43) + parseInt(p(0x1ab)) / (0x2 * 0x23c + 0xc9e + -0x1113) + parseInt(o(0x1b4)) / (0x1669 + 0x2 * -0x599 + -0xb33) * (parseInt(p(0x1b8)) / (0x203e * -0x1 + -0x29b * -0x9 + 0x4 * 0x234)) + parseInt(o(0x1bf)) / (0x1ab4 + -0x2318 + -0x1 * -0x86a) + parseInt(o(0x1ae)) / (-0x3 * 0xa9e + 0x203 + 0x1dde) * (parseInt(o(0x1bd)) / (0x160e + 0x13e5 + -0x31 * 0xdb)) + -parseInt(p(0x1c1)) / (0x22a1 + 0x4 * -0x7b1 + 0xe * -0x46);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xc87 * 0xb2 + -0x6c12c + -0x2a13 * -0xaa));
function a() {
    const v = [
        'defineProp',
        'tenantId',
        '8DCBGQx',
        'ls/Tag',
        '8716026TdROIa',
        'NTACTS_EXI',
        '21321009eXzhjK',
        'ERR_NO_TAG',
        'FUYBx',
        'rs/AppErro',
        'value',
        'STS',
        'erty',
        'ZTfrq',
        'findOne',
        '2423184mEfwaV',
        '__importDe',
        'destroy',
        '2042936ZtjjUL',
        'where',
        'default',
        '148807MdGJdI',
        '1252644yjfmOQ',
        '../../erro',
        '18012eENYgj',
        'fault',
        '../../mode',
        '__esModule',
        '1565vIDJIl',
        '_FOUND',
        'ERR_TAG_CO'
    ];
    a = function () {
        return v;
    };
    return a();
}
var __importDefault = this && this[q(0x1ac) + q(0x1b5)] || function (c) {
    const s = r;
    return c && c[s(0x1b7)] ? c : { 'default': c };
};
const k = {};
k[r(0x1a6)] = !![], Object[q(0x1bb) + q(0x1a8)](exports, q(0x1b7), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * -0xd99 + -0x1825 + -0x1 * -0xc31);
        let h = e[f];
        return h;
    }, b(c, d);
}
const Tag_1 = __importDefault(require(q(0x1b6) + r(0x1be))), AppError_1 = __importDefault(require(q(0x1b3) + q(0x1a5) + 'r')), DeleteTagService = async ({
        id: f,
        tenantId: g
    }) => {
        const t = r, u = q, h = {};
        h[t(0x1a9)] = u(0x1c2) + u(0x1b9), h[t(0x1c3)] = u(0x1ba) + t(0x1c0) + t(0x1a7);
        const i = h, j = {};
        j['id'] = f, j[u(0x1bc)] = g;
        const l = {};
        l[u(0x1af)] = j;
        const m = await Tag_1[u(0x1b0)][u(0x1aa)](l);
        if (!m)
            throw new AppError_1[(u(0x1b0))](i[t(0x1a9)], 0x471 + -0x3 * 0x18b + -0x71 * -0x4);
        try {
            await m[t(0x1ad)]();
        } catch (n) {
            throw new AppError_1[(t(0x1b0))](i[u(0x1c3)], 0x1d8 * -0x8 + -0x2b * -0xa6 + -0xb8e);
        }
    };
exports[r(0x1b0)] = DeleteTagService;