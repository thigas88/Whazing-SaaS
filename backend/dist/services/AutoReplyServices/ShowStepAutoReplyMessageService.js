'use strict';
const v = b, w = b;
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(t(0x131)) / (0x1137 + 0xa0b + -0x1b41) * (parseInt(t(0x11f)) / (-0x7d1 + 0x252a + -0x1d57)) + -parseInt(u(0x114)) / (-0x64d * 0x1 + -0x1732 * 0x1 + 0x1d82) * (parseInt(t(0x115)) / (0x46d * -0x1 + 0x1fb2 + -0x1b41)) + parseInt(t(0x112)) / (0x18e4 + 0xbda + -0x24b9) * (parseInt(t(0x130)) / (0x163 * 0x15 + 0x31 * -0xc4 + -0x5 * -0x1af)) + -parseInt(u(0x121)) / (0x1637 + 0x24fd + -0x3b2d) * (parseInt(t(0x12b)) / (0x190a + 0x13ed * -0x1 + -0x515)) + -parseInt(u(0x110)) / (0x3 * -0xb92 + 0x1f08 + -0x1 * -0x3b7) + -parseInt(u(0x10e)) / (-0x138c + -0x14da + 0x2870) * (-parseInt(t(0x128)) / (-0x11a4 * 0x2 + 0x1 * 0x2618 + -0x2c5)) + parseInt(t(0x122)) / (-0x1 * 0x2699 + -0x2092 + 0x4737);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1dea * -0xca + 0x1c03bf + 0x9b62f));
var __importDefault = this && this[v(0x124) + w(0x11e)] || function (c) {
    const x = w;
    return c && c[x(0x10f)] ? c : { 'default': c };
};
function a() {
    const A = [
        'fault',
        '42594cUWvbF',
        'ls/AutoRep',
        '26292mDViGb',
        '6799008FVMknL',
        'initialSte',
        '__importDe',
        'ERR_NO_STE',
        '../../erro',
        '../../mode',
        '77aENQeG',
        'value',
        'rs/AppErro',
        '1864xkPGHW',
        'defineProp',
        'default',
        'where',
        'LY_FOUND',
        '44856VGwLVp',
        '15JaKCxh',
        'tenantId',
        '2144690ndJiiQ',
        '__esModule',
        '683784oexHev',
        'P_AUTO_REP',
        '410wbLCca',
        'ls/StepsRe',
        '3XiOscW',
        '4494864yKhjPk',
        'action',
        'model',
        'hcvDF',
        'erty',
        'idAutoRepl',
        'ply',
        'findOne',
        'include'
    ];
    a = function () {
        return A;
    };
    return a();
}
const k = {};
k[w(0x129)] = !![], Object[v(0x12c) + v(0x119)](exports, w(0x10f), k);
const AutoReply_1 = __importDefault(require(w(0x127) + w(0x120) + 'ly')), StepsReply_1 = __importDefault(require(v(0x127) + w(0x113) + w(0x11b))), AppError_1 = __importDefault(require(w(0x126) + v(0x12a) + 'r')), ShowStepAutoReplyMessageService = async (g, h, i, j = ![], l) => {
        const y = w, z = v, m = {};
        m[y(0x118)] = y(0x125) + y(0x111) + y(0x12f);
        const n = m, o = {};
        j ? o[y(0x123) + 'p'] = j : (o[z(0x11a) + 'y'] = h, o['id'] = i);
        const p = {};
        p[y(0x116)] = g, p[y(0x10d)] = l;
        const q = {};
        q[z(0x117)] = AutoReply_1[y(0x12d)], q[y(0x12e)] = p;
        const r = {};
        r[y(0x12e)] = o, r[z(0x11d)] = [q];
        const s = await StepsReply_1[y(0x12d)][y(0x11c)](r);
        if (!s)
            throw new AppError_1[(z(0x12d))](n[y(0x118)], -0x923 + 0x109 * 0x25 + -0x1b96);
        return s;
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x24e1 + -0x858 + -0x1b7c);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[w(0x12d)] = ShowStepAutoReplyMessageService;