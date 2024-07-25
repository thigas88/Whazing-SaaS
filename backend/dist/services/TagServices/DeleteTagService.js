'use strict';
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(o(0xc4)) / (0xbed + -0x1 * -0x2352 + -0x2f3e * 0x1) + parseInt(p(0xcc)) / (0x344 + -0xb86 + 0x844 * 0x1) * (parseInt(p(0xdf)) / (-0x2 * 0x955 + -0x8ad * -0x3 + -0x75a)) + parseInt(o(0xde)) / (-0x23e1 + 0x18c0 + 0x9 * 0x13d) * (-parseInt(o(0xd5)) / (-0x1 * -0x6dd + 0x6aa + -0xd82)) + parseInt(o(0xd9)) / (0x25f1 * -0x1 + 0x2 * -0x287 + 0x1 * 0x2b05) + parseInt(o(0xd6)) / (-0x1f * 0x60 + 0x4cb * -0x2 + 0x1 * 0x153d) + -parseInt(p(0xdd)) / (-0x1 * 0x1beb + -0xb51 + 0x7 * 0x59c) + -parseInt(o(0xe0)) / (0x2ea + 0x1 * -0xf51 + 0xc70) * (-parseInt(o(0xdb)) / (-0x13ea + 0x192d + 0x539 * -0x1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x503b9 * 0x1 + -0xe459c + 0x211429));
var __importDefault = this && this[q(0xda) + q(0xcb)] || function (c) {
    const s = q;
    return c && c[s(0xd3)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x15d0 + 0xfef + -0x24fe * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const v = [
        'NTACTS_EXI',
        'ERR_NO_TAG',
        '5656980WzIGYw',
        '__importDe',
        '3260qijRox',
        '_FOUND',
        '5389888DwhsYR',
        '80nnLYtQ',
        '8655MSNkyB',
        '29115rmKgtp',
        'STS',
        'sfrqf',
        'findOne',
        '1158760XtGWzP',
        '../../erro',
        'ERR_TAG_CO',
        'FEDSG',
        'default',
        '../../mode',
        'where',
        'fault',
        '566PzZcfE',
        'ls/Tag',
        'erty',
        'rs/AppErro',
        'value',
        'destroy',
        'tenantId',
        '__esModule',
        'defineProp',
        '377185gWecLa',
        '10018631zuqzaM'
    ];
    a = function () {
        return v;
    };
    return a();
}
const k = {};
k[r(0xd0)] = !![], Object[r(0xd4) + r(0xce)](exports, q(0xd3), k);
const Tag_1 = __importDefault(require(r(0xc9) + q(0xcd))), AppError_1 = __importDefault(require(r(0xc5) + q(0xcf) + 'r')), DeleteTagService = async ({
        id: f,
        tenantId: g
    }) => {
        const t = r, u = r, h = {};
        h[t(0xc2)] = t(0xd8) + u(0xdc), h[u(0xc7)] = t(0xc6) + t(0xd7) + t(0xc1);
        const i = h, j = {};
        j['id'] = f, j[u(0xd2)] = g;
        const l = {};
        l[t(0xca)] = j;
        const m = await Tag_1[u(0xc8)][u(0xc3)](l);
        if (!m)
            throw new AppError_1[(t(0xc8))](i[t(0xc2)], -0xbd + -0x2d5 + 0x526);
        try {
            await m[u(0xd1)]();
        } catch (n) {
            throw new AppError_1[(u(0xc8))](i[t(0xc7)], 0x232c + 0x2 * 0x1027 + -0x5 * 0xd2e);
        }
    };
exports[q(0xc8)] = DeleteTagService;