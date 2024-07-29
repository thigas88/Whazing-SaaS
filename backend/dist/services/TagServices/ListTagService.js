'use strict';
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(o(0xe1)) / (-0x1b82 + 0x22da + -0x757 * 0x1) + parseInt(o(0xda)) / (0x12bb + -0x1462 + 0x1a9) * (-parseInt(p(0xdb)) / (-0x1cf5 + -0x185 * -0x6 + 0x13da)) + -parseInt(o(0xd3)) / (-0x2 * -0x1189 + -0x1a8b + 0x883 * -0x1) + -parseInt(o(0xe5)) / (-0x21ce + 0xa94 + 0x173f) * (parseInt(p(0xd5)) / (-0x270f + 0x24b0 + -0x265 * -0x1)) + -parseInt(p(0xe6)) / (-0xa65 + -0x21db + 0x2c47) + -parseInt(p(0xcf)) / (-0x1ed3 + 0x1ae0 + 0x1 * 0x3fb) + parseInt(p(0xe3)) / (-0x1ed * 0x10 + -0x49 * 0x27 + 0x29f8);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x62d5c + 0x1dbd * -0x7 + -0x126c2));
function a() {
    const v = [
        'PmUHA',
        '1913124snUoWv',
        'hecFF',
        '36882JCItuO',
        'where',
        'tenantId',
        'fault',
        'ASC',
        '74IsPHPh',
        '32244ZtTMxH',
        '__importDe',
        'ls/Tag',
        'order',
        'defineProp',
        'erty',
        '95509pFhaaX',
        '../../mode',
        '17567379pIPdUX',
        'isActive',
        '135iRDTrl',
        '3671591rnCUoE',
        'tag',
        'default',
        'findAll',
        '1639376hQImrB',
        'value',
        '__esModule'
    ];
    a = function () {
        return v;
    };
    return a();
}
var __importDefault = this && this[q(0xdc) + q(0xd8)] || function (c) {
    const s = q;
    return c && c[s(0xd1)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x17a1 + -0x9d * -0x1f + -0x29d7);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[r(0xd0)] = !![], Object[r(0xdf) + r(0xe0)](exports, r(0xd1), k);
const Tag_1 = __importDefault(require(q(0xe2) + r(0xdd))), ListTagService = async ({
        tenantId: f,
        isActive: g
    }) => {
        const t = q, u = r, h = {};
        h[t(0xd4)] = u(0xe7), h[t(0xd2)] = u(0xd9);
        const i = h, j = {};
        j[u(0xd7)] = f;
        const l = j;
        g && (l[u(0xe4)] = g);
        const m = {};
        m[t(0xd6)] = l, m[t(0xde)] = [[
                i[u(0xd4)],
                i[t(0xd2)]
            ]];
        const n = await Tag_1[u(0xcd)][t(0xce)](m);
        return n;
    };
exports[q(0xcd)] = ListTagService;