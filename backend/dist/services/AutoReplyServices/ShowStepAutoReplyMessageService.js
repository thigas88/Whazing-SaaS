'use strict';
const v = b, w = b;
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(t(0x109)) / (-0x2 * 0x902 + -0x20db * 0x1 + 0x32e0) + parseInt(t(0x106)) / (-0x1474 + -0x62 * -0x2 + -0x2 * -0x9d9) + -parseInt(t(0x114)) / (-0x14a5 + 0x6ef * -0x1 + 0x1b97) * (-parseInt(t(0x118)) / (-0x898 + 0x1 * -0xd5b + 0x15f7)) + -parseInt(u(0x116)) / (-0x1fb6 + -0x1 * 0x23ae + 0x1 * 0x4369) * (parseInt(t(0x111)) / (0x1bc4 + -0x233c + 0x77e)) + -parseInt(t(0x10a)) / (0x103 * 0xb + -0x1 * 0x10a9 + -0x1 * -0x58f) * (parseInt(u(0x121)) / (0x1 * -0xc7 + 0x34c + -0x27d)) + parseInt(t(0x101)) / (0x199 * -0xa + 0x1971 + 0x8e * -0x11) * (parseInt(t(0xfd)) / (-0x6fe + -0x595 * -0x5 + -0x1 * 0x14e1)) + -parseInt(t(0x11b)) / (-0x69 + 0x4 * 0x8ae + -0x2244) * (parseInt(u(0x107)) / (0x1df7 + 0x1c19 + 0x5e * -0x9e));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x3990f + -0x59e02 + 0xc84ff));
var __importDefault = this && this[v(0x113) + w(0x105)] || function (c) {
    const x = w;
    return c && c[x(0x10c)] ? c : { 'default': c };
};
const k = {};
k[w(0x10d)] = !![], Object[v(0x108) + w(0x120)](exports, v(0x10c), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x299 + 0x60e * 0x5 + -0x1ab0);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const A = [
        '__esModule',
        'value',
        'ls/AutoRep',
        'action',
        'include',
        '912urUejm',
        'initialSte',
        '__importDe',
        '33297PfwOPj',
        '../../mode',
        '8205MouSri',
        'where',
        '64lVEWUZ',
        'model',
        'findOne',
        '5384819VOyHDd',
        'ls/StepsRe',
        'lyzix',
        'ERR_NO_STE',
        'default',
        'erty',
        '248gconxn',
        '20cYDUnL',
        'idAutoRepl',
        'tenantId',
        'P_AUTO_REP',
        '1589535rSxXdc',
        '../../erro',
        'ply',
        'LY_FOUND',
        'fault',
        '109228zSzJVv',
        '12fvaRhL',
        'defineProp',
        '391450JlKVXU',
        '4823haMafp',
        'rs/AppErro'
    ];
    a = function () {
        return A;
    };
    return a();
}
const AutoReply_1 = __importDefault(require(w(0x115) + w(0x10e) + 'ly')), StepsReply_1 = __importDefault(require(w(0x115) + w(0x11c) + w(0x103))), AppError_1 = __importDefault(require(v(0x102) + v(0x10b) + 'r')), ShowStepAutoReplyMessageService = async (g, h, i, j = ![], l) => {
        const y = v, z = v, m = {};
        m[y(0x11d)] = y(0x11e) + z(0x100) + y(0x104);
        const n = m, o = {};
        j ? o[z(0x112) + 'p'] = j : (o[y(0xfe) + 'y'] = h, o['id'] = i);
        const p = {};
        p[z(0x10f)] = g, p[y(0xff)] = l;
        const q = {};
        q[z(0x119)] = AutoReply_1[z(0x11f)], q[z(0x117)] = p;
        const r = {};
        r[y(0x117)] = o, r[z(0x110)] = [q];
        const s = await StepsReply_1[z(0x11f)][y(0x11a)](r);
        if (!s)
            throw new AppError_1[(z(0x11f))](n[z(0x11d)], 0x7 * 0x172 + 0x222 + -0xaac);
        return s;
    };
exports[w(0x11f)] = ShowStepAutoReplyMessageService;