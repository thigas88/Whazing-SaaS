'use strict';
function a() {
    const y = [
        '../../erro',
        'value',
        'tenantId',
        'QYvcG',
        '677095qRozHR',
        '1007924LnHZUg',
        'default',
        'defineProp',
        'VDVvF',
        'erty',
        'ERR_NO_CHA',
        'T_FLOW_FOU',
        'isDeleted',
        'rZiyQ',
        'fault',
        'findOne',
        '188008AJpbBj',
        '__importDe',
        'promisify',
        '1568YRxgmz',
        'reload',
        '../../mode',
        'rs/AppErro',
        'where',
        '18434133VQClSk',
        '2931564rdrSSf',
        'ls/ChatFlo',
        'update',
        '__esModule',
        '56sGozhD',
        'util',
        '945849MBKOZI',
        'writeFile',
        '652kzsjlV',
        'isActive',
        'attributes'
    ];
    a = function () {
        return y;
    };
    return a();
}
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(r(0x188)) / (-0x776 * -0x1 + 0x61 * -0x63 + 0x1e0e) * (-parseInt(r(0x17a)) / (0xffe + 0x1 * 0x138e + -0x238a)) + -parseInt(s(0x186)) / (-0xdc6 * -0x2 + 0x1396 + -0x2f1f) + -parseInt(s(0x16c)) / (-0x143e + -0x272 * -0x8 + 0xb2) + parseInt(s(0x16b)) / (0x190a + -0x246d + 0xb68) + -parseInt(r(0x180)) / (-0x51e + 0x3 * -0xbd7 + 0x7 * 0x5cf) + parseInt(s(0x184)) / (-0x34 * -0x1a + 0x2 * -0x8d3 + 0xc65 * 0x1) * (-parseInt(r(0x177)) / (-0x91c + -0x2 * 0x15a + 0xbd8)) + parseInt(r(0x17f)) / (-0x6c5 + -0x129a * -0x1 + -0xbcc);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x7 * 0x11175 + 0x3575d + -0x44742));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * 0x24c3 + -0x2 * -0x94d + 0x138e);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[t(0x178) + u(0x175)] || function (c) {
    const v = t;
    return c && c[v(0x183)] ? c : { 'default': c };
};
const k = {};
k[u(0x168)] = !![], Object[t(0x16e) + t(0x170)](exports, u(0x183), k);
const util_1 = require(t(0x185)), fs_1 = require('fs'), ChatFlow_1 = __importDefault(require(u(0x17c) + u(0x181) + 'w')), AppError_1 = __importDefault(require(u(0x167) + u(0x17d) + 'r')), writeFileAsync = (-0xc6a + -0x2 * -0x9a1 + -0x6d8, util_1[t(0x179)])(fs_1[t(0x187)]), DeleteChatFlowService = async ({
        id: h,
        tenantId: i
    }) => {
        const w = t, x = t, j = {};
        j[w(0x16f)] = x(0x171) + w(0x172) + 'ND', j[w(0x174)] = x(0x165), j[x(0x16a)] = x(0x173);
        const l = j, m = {};
        m['id'] = h, m[w(0x169)] = i;
        const n = {};
        n[w(0x17e)] = m;
        const o = await ChatFlow_1[w(0x16d)][x(0x176)](n);
        if (!o)
            throw new AppError_1[(w(0x16d))](l[w(0x16f)], -0x1 * -0x9a4 + -0x20 * 0xda + 0x1330);
        const p = {};
        p[x(0x165)] = ![], p[x(0x173)] = !![], await o[x(0x182)](p);
        const q = {};
        q[w(0x166)] = [
            l[x(0x174)],
            l[x(0x16a)]
        ], await o[x(0x17b)](q);
    };
exports[u(0x16d)] = DeleteChatFlowService;