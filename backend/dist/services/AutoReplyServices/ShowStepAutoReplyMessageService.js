'use strict';
const v = b, w = b;
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(t(0x1bf)) / (-0x7 * -0x31 + 0x5 * -0x1cd + 0x7ab) * (parseInt(u(0x1c9)) / (0x2 * 0x91d + -0x26ad + 0x1 * 0x1475)) + parseInt(u(0x1bc)) / (-0x1 * 0xc73 + -0x26e1 + 0x111d * 0x3) * (-parseInt(t(0x1c0)) / (0xc * 0x33e + 0x2271 * 0x1 + -0x4955 * 0x1)) + -parseInt(u(0x1ae)) / (-0x3a6 + 0x45c + 0xb1 * -0x1) * (-parseInt(u(0x1c8)) / (0x1fc8 + -0x22b + -0x4b * 0x65)) + parseInt(u(0x1b7)) / (-0x1d64 + 0x1 * -0x2005 + 0x3d70) * (-parseInt(u(0x1c6)) / (0xc * -0x15c + 0x2 * 0x520 + 0x4 * 0x186)) + -parseInt(t(0x1c3)) / (-0xa2a + -0x1893 + 0x22c6) * (parseInt(t(0x1af)) / (0xcf0 + -0x3 * -0x3f9 + -0x18d1 * 0x1)) + -parseInt(u(0x1b4)) / (0x1ee * -0x1 + 0x14c5 + 0x1 * -0x12cc) * (-parseInt(t(0x1be)) / (-0x1acf + 0x7 * -0x2be + 0x2e0d)) + -parseInt(t(0x1ab)) / (-0x74 * 0x43 + 0x1d * 0x21 + -0x1 * -0x1aac) * (-parseInt(u(0x1b6)) / (0x1 * 0x6b1 + 0x1 * 0xb4e + 0x1 * -0x11f1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x5d73 * -0x2 + -0x26ccb * -0x1 + -0x11532));
function a() {
    const A = [
        '190RcYFKL',
        'ply',
        'tenantId',
        'ERR_NO_STE',
        'rs/AppErro',
        '11xhnYrE',
        'initialSte',
        '168hGxLws',
        '1834098YFePie',
        'value',
        'idAutoRepl',
        '../../mode',
        'where',
        '21RbZHCN',
        '../../erro',
        '3073968jyNRzw',
        '7pOqZkX',
        '142684moMSEs',
        'findOne',
        'erty',
        '89802EnWacE',
        'action',
        'fault',
        '8zrxvNa',
        '__importDe',
        '83202tjtvUI',
        '14142SQYORr',
        'model',
        'ls/AutoRep',
        'include',
        'ls/StepsRe',
        '__esModule',
        'LY_FOUND',
        'defineProp',
        'P_AUTO_REP',
        '560703TeXceT',
        'YpYKC',
        'default',
        '5PhJuys'
    ];
    a = function () {
        return A;
    };
    return a();
}
var __importDefault = this && this[v(0x1c7) + w(0x1c5)] || function (c) {
    const x = w;
    return c && c[x(0x1ce)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x13b3 + -0xf6 + 0x27b * 0x9);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[v(0x1b8)] = !![], Object[v(0x1d0) + w(0x1c2)](exports, v(0x1ce), k);
const AutoReply_1 = __importDefault(require(v(0x1ba) + v(0x1cb) + 'ly')), StepsReply_1 = __importDefault(require(v(0x1ba) + v(0x1cd) + v(0x1b0))), AppError_1 = __importDefault(require(v(0x1bd) + v(0x1b3) + 'r')), ShowStepAutoReplyMessageService = async (g, h, i, j = ![], l) => {
        const y = v, z = w, m = {};
        m[y(0x1ac)] = z(0x1b2) + y(0x1aa) + z(0x1cf);
        const n = m, o = {};
        j ? o[z(0x1b5) + 'p'] = j : (o[y(0x1b9) + 'y'] = h, o['id'] = i);
        const p = {};
        p[z(0x1c4)] = g, p[y(0x1b1)] = l;
        const q = {};
        q[y(0x1ca)] = AutoReply_1[z(0x1ad)], q[z(0x1bb)] = p;
        const r = {};
        r[z(0x1bb)] = o, r[y(0x1cc)] = [q];
        const s = await StepsReply_1[z(0x1ad)][z(0x1c1)](r);
        if (!s)
            throw new AppError_1[(y(0x1ad))](n[y(0x1ac)], -0x946 + 0x5 * 0x1ca + 0x1e8);
        return s;
    };
exports[v(0x1ad)] = ShowStepAutoReplyMessageService;