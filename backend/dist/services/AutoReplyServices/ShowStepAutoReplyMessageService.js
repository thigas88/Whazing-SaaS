'use strict';
const v = b, w = b;
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(t(0x8e)) / (0xa57 + -0x3 * -0x7e5 + -0x2205) + parseInt(u(0xa5)) / (0x502 * 0x4 + 0x24c9 + 0x1 * -0x38cf) + parseInt(t(0xa6)) / (0xa7 * 0x2b + 0x3 * -0xfc + -0x1916) * (-parseInt(t(0x9f)) / (-0xbaa * -0x2 + -0x1c2d * -0x1 + -0x1 * 0x337d)) + -parseInt(u(0x88)) / (-0x14ce + -0x2 * 0x926 + 0x271f) + parseInt(u(0xa1)) / (-0x24b0 + 0x1424 + 0xe * 0x12f) + -parseInt(t(0xa3)) / (-0x11fb + 0xc1b + 0x5e7) + parseInt(t(0x91)) / (0x5b0 + 0x69c + -0xa * 0x13a);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x6b8 * -0x2c5 + 0x1 * 0x6874d + -0x351d7 * -0x7));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1f44 + 0xf49 + -0x89 * 0x56);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[v(0x90) + v(0xa0)] || function (c) {
    const x = w;
    return c && c[x(0x99)] ? c : { 'default': c };
};
const k = {};
function a() {
    const A = [
        'ls/StepsRe',
        'include',
        'where',
        'ls/AutoRep',
        'findOne',
        'default',
        '../../erro',
        '__esModule',
        'initialSte',
        'action',
        '../../mode',
        'defineProp',
        'model',
        '8uZxRid',
        'fault',
        '7855104qvgfTm',
        'erty',
        '3859135CKZQKm',
        'idAutoRepl',
        '637660NZYvSF',
        '888537AUTXzr',
        'rs/AppErro',
        'LY_FOUND',
        '2328035zrdojq',
        'value',
        'P_AUTO_REP',
        'ERR_NO_STE',
        'vnTWD',
        'ply',
        '976999jfaTeu',
        'tenantId',
        '__importDe',
        '13516328IijpUw'
    ];
    a = function () {
        return A;
    };
    return a();
}
k[w(0x89)] = !![], Object[w(0x9d) + w(0xa2)](exports, w(0x99), k);
const AutoReply_1 = __importDefault(require(w(0x9c) + v(0x95) + 'ly')), StepsReply_1 = __importDefault(require(v(0x9c) + v(0x92) + w(0x8d))), AppError_1 = __importDefault(require(w(0x98) + v(0xa7) + 'r')), ShowStepAutoReplyMessageService = async (g, h, i, j = ![], l) => {
        const y = v, z = w, m = {};
        m[y(0x8c)] = z(0x8b) + z(0x8a) + y(0x87);
        const n = m, o = {};
        j ? o[y(0x9a) + 'p'] = j : (o[z(0xa4) + 'y'] = h, o['id'] = i);
        const p = {};
        p[y(0x9b)] = g, p[z(0x8f)] = l;
        const q = {};
        q[z(0x9e)] = AutoReply_1[z(0x97)], q[y(0x94)] = p;
        const r = {};
        r[z(0x94)] = o, r[z(0x93)] = [q];
        const s = await StepsReply_1[y(0x97)][y(0x96)](r);
        if (!s)
            throw new AppError_1[(y(0x97))](n[y(0x8c)], -0xef7 + -0x8 * 0x25 + 0x11b3);
        return s;
    };
exports[w(0x97)] = ShowStepAutoReplyMessageService;