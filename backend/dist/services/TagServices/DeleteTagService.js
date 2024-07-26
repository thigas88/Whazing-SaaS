'use strict';
const q = b, r = b;
function a() {
    const v = [
        'STS',
        'tenantId',
        'ERR_NO_TAG',
        'default',
        'NTACTS_EXI',
        'fault',
        '__esModule',
        'destroy',
        '3193211XZsRrr',
        '../../erro',
        '_FOUND',
        'value',
        '583776jPKNJk',
        'ERR_TAG_CO',
        'defineProp',
        'where',
        '271113BCiuFk',
        '2207045ptHmye',
        '7250016eYQGwV',
        'CtWrZ',
        'rs/AppErro',
        'findOne',
        'tNrXt',
        '../../mode',
        '2350168DsRDQW',
        'ls/Tag',
        '__importDe',
        'erty',
        '1882194SJqrTP'
    ];
    a = function () {
        return v;
    };
    return a();
}
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(o(0x1cc)) / (-0x258 + 0x2 * -0xda3 + -0x1 * -0x1d9f) + -parseInt(p(0x1d4)) / (0x1712 + -0x928 + -0x164 * 0xa) + parseInt(p(0x1d8)) / (-0x1e7c * 0x1 + 0x6c3 * 0x5 + 0x10 * -0x35) + -parseInt(p(0x1c8)) / (-0x1a08 + 0x1c71 + -0x265) + parseInt(p(0x1cd)) / (0x6f9 + 0x156b * 0x1 + -0x1c5f) + parseInt(o(0x1ce)) / (0xb22 + 0x1516 * 0x1 + 0x1a * -0x13d) + -parseInt(p(0x1e1)) / (-0x564 + 0x2359 + -0x1dee);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x18cd3 * -0x1 + -0xc * -0x11209 + -0x1 * -0x7856));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xa6 * 0x19 + -0x12 * 0x17b + 0x18a * 0x1d);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[q(0x1d6) + r(0x1de)] || function (c) {
    const s = r;
    return c && c[s(0x1df)] ? c : { 'default': c };
};
const k = {};
k[q(0x1c7)] = !![], Object[q(0x1ca) + q(0x1d7)](exports, r(0x1df), k);
const Tag_1 = __importDefault(require(r(0x1d3) + r(0x1d5))), AppError_1 = __importDefault(require(r(0x1e2) + r(0x1d0) + 'r')), DeleteTagService = async ({
        id: f,
        tenantId: g
    }) => {
        const t = q, u = q, h = {};
        h[t(0x1d2)] = u(0x1db) + u(0x1c6), h[t(0x1cf)] = u(0x1c9) + u(0x1dd) + u(0x1d9);
        const i = h, j = {};
        j['id'] = f, j[u(0x1da)] = g;
        const l = {};
        l[u(0x1cb)] = j;
        const m = await Tag_1[u(0x1dc)][t(0x1d1)](l);
        if (!m)
            throw new AppError_1[(t(0x1dc))](i[t(0x1d2)], 0x1b3f + -0x160d + 0x1 * -0x39e);
        try {
            await m[u(0x1e0)]();
        } catch (n) {
            throw new AppError_1[(t(0x1dc))](i[u(0x1cf)], -0x1f40 + 0x1424 + 0xcb0);
        }
    };
exports[q(0x1dc)] = DeleteTagService;