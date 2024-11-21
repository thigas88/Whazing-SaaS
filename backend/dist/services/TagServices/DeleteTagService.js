'use strict';
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(o(0x67)) / (0x1c76 + -0x23 * 0x81 + -0xad2) * (parseInt(p(0x79)) / (0x1c3c + 0x23fd + -0x4037)) + parseInt(p(0x68)) / (-0x1c1a + 0x1a77 + 0xd3 * 0x2) * (-parseInt(o(0x84)) / (-0x3f9 * -0x7 + 0x4b0 * -0x1 + -0x34d * 0x7)) + -parseInt(p(0x7b)) / (-0x21f0 + -0x1dbc + 0x3fb1) + parseInt(p(0x77)) / (-0x265 * 0x1 + 0x1306 + 0x27 * -0x6d) + parseInt(o(0x7d)) / (0x24c8 + 0x1fa1 + -0x1 * 0x4462) + parseInt(p(0x81)) / (0xf83 + -0x5 * -0x4db + -0x27c2) * (parseInt(p(0x76)) / (0x1ccc + 0x1a92 + -0x3755)) + parseInt(o(0x6c)) / (0x983 + 0x84b + -0x11c4);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x163d5 * -0x1 + -0x1c3d42 + 0x2915d6));
function a() {
    const v = [
        '__importDe',
        '8739000lQYNKO',
        'bRrUc',
        'where',
        'STS',
        '../../erro',
        'rs/AppErro',
        '__esModule',
        'value',
        '_FOUND',
        'default',
        '18ILZRxO',
        '2582322kIvXmD',
        'ERR_TAG_CO',
        '17482BSSmDQ',
        'GySfg',
        '9097700dSGuvW',
        'fault',
        '6168708NLgjpo',
        'erty',
        'tenantId',
        'destroy',
        '2587480IHGHOv',
        '../../mode',
        'ERR_NO_TAG',
        '1009660XpHZsf',
        'NTACTS_EXI',
        'findOne',
        '193ZRwcVS',
        '21TBPBRv',
        'defineProp',
        'ls/Tag'
    ];
    a = function () {
        return v;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x80b + -0x1aee + -0x1 * -0x1349);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[q(0x6b) + q(0x7c)] || function (c) {
    const s = q;
    return c && c[s(0x72)] ? c : { 'default': c };
};
const k = {};
k[q(0x73)] = !![], Object[q(0x69) + r(0x7e)](exports, q(0x72), k);
const Tag_1 = __importDefault(require(q(0x82) + r(0x6a))), AppError_1 = __importDefault(require(q(0x70) + r(0x71) + 'r')), DeleteTagService = async ({
        id: f,
        tenantId: g
    }) => {
        const t = q, u = r, h = {};
        h[t(0x6d)] = t(0x83) + t(0x74), h[u(0x7a)] = t(0x78) + t(0x85) + u(0x6f);
        const i = h, j = {};
        j['id'] = f, j[t(0x7f)] = g;
        const l = {};
        l[u(0x6e)] = j;
        const m = await Tag_1[u(0x75)][u(0x66)](l);
        if (!m)
            throw new AppError_1[(u(0x75))](i[u(0x6d)], -0xe22 * 0x2 + 0x9d * 0x37 + -0x3e3);
        try {
            await m[u(0x80)]();
        } catch (n) {
            throw new AppError_1[(t(0x75))](i[t(0x7a)], -0x3 * -0xb8b + -0x3 * 0xa61 + -0x1ea);
        }
    };
exports[r(0x75)] = DeleteTagService;