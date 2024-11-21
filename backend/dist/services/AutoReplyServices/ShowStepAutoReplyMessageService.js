'use strict';
const v = b, w = b;
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(t(0x82)) / (0x60 + 0x32 * 0xb2 + 0x101 * -0x23) * (parseInt(u(0x9d)) / (0xdf9 + 0x361 + -0x8ac * 0x2)) + -parseInt(t(0x8b)) / (-0xdb * -0x23 + 0x104a + -0x4 * 0xb8e) + parseInt(u(0x95)) / (0x245f + 0x1ae6 + -0x3f41) * (parseInt(t(0x81)) / (-0x29b * 0xd + -0x1120 + -0x4 * -0xcc1)) + parseInt(u(0x94)) / (-0x89f + -0x124d * 0x1 + 0x1af2 * 0x1) * (-parseInt(u(0x8d)) / (-0x92c + 0x61 * -0x4 + 0xab7)) + -parseInt(t(0x9e)) / (-0x1 * 0x931 + -0x9 * -0x2c8 + -0xfcf) + parseInt(t(0x84)) / (0x189 * -0x3 + -0x1 * 0x129a + -0x1a9 * -0xe) * (parseInt(t(0x8e)) / (0x2 * -0x354 + 0x5a1 + 0x111)) + parseInt(t(0x98)) / (0x42d * 0x3 + -0x1f * -0xbf + -0x239d);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x3 * -0x2a2ab + 0x3c40c + -0x52a83));
var __importDefault = this && this[v(0x85) + w(0x7e)] || function (c) {
    const x = v;
    return c && c[x(0x83)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xad4 + -0x20af + 0x1 * 0x1659);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const A = [
        '__esModule',
        '967761NAHkVI',
        '__importDe',
        'action',
        'ERR_NO_STE',
        'tenantId',
        'ls/StepsRe',
        'erty',
        '2202030cDFyMr',
        'ply',
        '14ZVKocU',
        '10gGIBoh',
        'idAutoRepl',
        'value',
        'include',
        'model',
        'findOne',
        '694662MloSZG',
        '7484QOdIqs',
        'ls/AutoRep',
        'where',
        '16192132GzVjBt',
        '../../mode',
        'sfSQj',
        'P_AUTO_REP',
        'LY_FOUND',
        '472102OekiLo',
        '4357240ZCeWCf',
        'rs/AppErro',
        'initialSte',
        '../../erro',
        'fault',
        'defineProp',
        'default',
        '1585RBVpLy',
        '1EwtMTo'
    ];
    a = function () {
        return A;
    };
    return a();
}
const k = {};
k[v(0x90)] = !![], Object[w(0x7f) + v(0x8a)](exports, v(0x83), k);
const AutoReply_1 = __importDefault(require(w(0x99) + v(0x96) + 'ly')), StepsReply_1 = __importDefault(require(w(0x99) + v(0x89) + w(0x8c))), AppError_1 = __importDefault(require(v(0xa1) + v(0x9f) + 'r')), ShowStepAutoReplyMessageService = async (g, h, i, j = ![], l) => {
        const y = w, z = v, m = {};
        m[y(0x9a)] = z(0x87) + y(0x9b) + y(0x9c);
        const n = m, o = {};
        j ? o[z(0xa0) + 'p'] = j : (o[z(0x8f) + 'y'] = h, o['id'] = i);
        const p = {};
        p[y(0x86)] = g, p[y(0x88)] = l;
        const q = {};
        q[y(0x92)] = AutoReply_1[y(0x80)], q[z(0x97)] = p;
        const r = {};
        r[y(0x97)] = o, r[z(0x91)] = [q];
        const s = await StepsReply_1[y(0x80)][z(0x93)](r);
        if (!s)
            throw new AppError_1[(y(0x80))](n[y(0x9a)], 0xd4a + -0x1729 + 0xb73);
        return s;
    };
exports[v(0x80)] = ShowStepAutoReplyMessageService;