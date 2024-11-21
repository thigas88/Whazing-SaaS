'use strict';
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(o(0x1a2)) / (-0x27 * 0x27 + 0x456 + 0x19c) * (parseInt(p(0x192)) / (-0x963 + -0x24a + 0xbaf)) + parseInt(o(0x1a4)) / (-0x42d + 0x2 * 0x31d + -0x20a) + parseInt(p(0x1a5)) / (-0x1f15 + -0x2a * 0x10 + 0x21b9) * (-parseInt(p(0x18d)) / (-0x1ac + 0x1aeb + -0x1 * 0x193a)) + -parseInt(o(0x197)) / (0x694 + 0x667 + -0xcf5) * (parseInt(p(0x19e)) / (0x70 * -0x59 + -0x1 * 0xdcd + 0x34c4)) + -parseInt(p(0x196)) / (-0x89 * 0x1b + 0x2081 + -0x1206) + parseInt(o(0x190)) / (-0x2 * -0x116 + -0x10f8 + 0xed5) * (-parseInt(o(0x1ac)) / (-0x237c + -0x128d + 0x3613)) + parseInt(p(0x18f)) / (0x397 * -0x1 + 0x8a * 0x33 + -0xc * 0x1fd) * (parseInt(p(0x19b)) / (0x133 * 0x3 + -0x1a58 + -0x48f * -0x5));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xac681 * 0x1 + -0xdced2 + -0x1 * -0xb0c6f));
function a() {
    const v = [
        '7500408bbXWvb',
        '4494KBwLEV',
        '../../erro',
        'destroy',
        'where',
        '1392816YwtceA',
        'defineProp',
        'tenantId',
        '7693PapxyQ',
        'default',
        'rs/AppErro',
        'fault',
        '1vUIHss',
        'ls/Group',
        '872046ezMLGV',
        '489596lLPCOS',
        'ERR_GRUOP_',
        'UP_FOUND',
        'ERR_NO_GRO',
        'erty',
        'value',
        '../../mode',
        '10pTWRiM',
        '__esModule',
        '25NeCxGE',
        'findOne',
        '341xISLQr',
        '5358168rHunhG',
        'yGzfb',
        '790798cAzGvY',
        '__importDe',
        'xdYKG',
        'NO_EXISTS'
    ];
    a = function () {
        return v;
    };
    return a();
}
var __importDefault = this && this[q(0x193) + r(0x1a1)] || function (c) {
    const s = q;
    return c && c[s(0x1ad)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xafd * 0x1 + 0x23a9 + -0x2d19);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[r(0x1aa)] = !![], Object[r(0x19c) + r(0x1a9)](exports, q(0x1ad), k);
const AppError_1 = __importDefault(require(q(0x198) + r(0x1a0) + 'r')), Group_1 = __importDefault(require(q(0x1ab) + r(0x1a3))), DeleteGroupService = async ({
        id: f,
        tenantId: g
    }) => {
        const t = q, u = q, h = {};
        h[t(0x194)] = u(0x1a8) + t(0x1a7), h[t(0x191)] = t(0x1a6) + u(0x195);
        const i = h, j = {};
        j['id'] = f, j[u(0x19d)] = g;
        const l = {};
        l[t(0x19a)] = j;
        const m = await Group_1[t(0x19f)][u(0x18e)](l);
        if (!m)
            throw new AppError_1[(u(0x19f))](i[u(0x194)], -0x55 * -0x1a + 0xf0d * 0x1 + 0x161b * -0x1);
        try {
            await m[u(0x199)]();
        } catch (n) {
            throw new AppError_1[(u(0x19f))](i[u(0x191)], -0x1a9a + -0x1cc + -0x2 * -0xefd);
        }
    };
exports[q(0x19f)] = DeleteGroupService;