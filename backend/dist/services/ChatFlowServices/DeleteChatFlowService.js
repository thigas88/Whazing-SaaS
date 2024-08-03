'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x17e5 * -0x1 + 0x1865 + -0x2f53);
        let h = e[f];
        return h;
    }, b(c, d);
}
const t = b, u = b;
function a() {
    const y = [
        'reload',
        '../../mode',
        'NmcwE',
        'promisify',
        '1lONrJy',
        'value',
        '5248958VAGNed',
        'defineProp',
        'ls/ChatFlo',
        'erty',
        '3820160gHgrGz',
        'T_FLOW_FOU',
        '8sJqAnt',
        '2032402tLtEfy',
        '60LwaeYw',
        'jqrIa',
        'isActive',
        'default',
        'tenantId',
        '../../erro',
        'isDeleted',
        'attributes',
        'rs/AppErro',
        'findOne',
        '__importDe',
        '7UqlPZI',
        '__esModule',
        '120015wdmoTk',
        'where',
        'fault',
        'writeFile',
        'util',
        'update',
        'ERR_NO_CHA',
        '35060VJdbkc',
        'PHjJq',
        '2052200YNjaIP',
        '649218NADZRp'
    ];
    a = function () {
        return y;
    };
    return a();
}
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(r(0x113)) / (-0xd78 + -0x12a5 + -0x201e * -0x1) * (parseInt(r(0x11c)) / (0x23ae + -0x56 * -0x5c + 0x4 * -0x10a5)) + parseInt(r(0xf7)) / (-0x91e + 0x194 * -0x3 + 0xddd) * (parseInt(s(0x10b)) / (0x8d2 * -0x1 + 0x24cb + -0x1bf5)) + -parseInt(r(0x10d)) / (-0x1705 + 0x1618 + 0x16 * 0xb) + -parseInt(r(0x10e)) / (0xac * 0x32 + 0x78e + -0x1 * 0x2920) * (-parseInt(r(0x102)) / (-0x15e7 + 0x10d0 + -0x83 * -0xa)) + parseInt(s(0x11b)) / (0x23f8 + -0x3 * 0x11b + 0x1 * -0x209f) * (-parseInt(s(0x104)) / (-0x1d3a + 0x1a02 + 0x341)) + parseInt(r(0x119)) / (-0x818 + 0x1d41 * 0x1 + 0x151f * -0x1) + -parseInt(s(0x115)) / (0x2507 + -0x1be1 + -0x91b);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x3217 * -0xe + -0x3c25a + 0xceef7 * 0x1));
var __importDefault = this && this[t(0x101) + t(0x106)] || function (c) {
    const v = u;
    return c && c[v(0x103)] ? c : { 'default': c };
};
const k = {};
k[t(0x114)] = !![], Object[t(0x116) + u(0x118)](exports, u(0x103), k);
const util_1 = require(u(0x108)), fs_1 = require('fs'), ChatFlow_1 = __importDefault(require(u(0x110) + u(0x117) + 'w')), AppError_1 = __importDefault(require(u(0xfc) + u(0xff) + 'r')), writeFileAsync = (0x4 * 0x7c9 + -0x74 * 0x1 + -0x1eb0, util_1[t(0x112)])(fs_1[u(0x107)]), DeleteChatFlowService = async ({
        id: h,
        tenantId: i
    }) => {
        const w = u, x = u, j = {};
        j[w(0xf8)] = x(0x10a) + w(0x11a) + 'ND', j[x(0x111)] = w(0xf9), j[x(0x10c)] = w(0xfd);
        const l = j, m = {};
        m['id'] = h, m[w(0xfb)] = i;
        const n = {};
        n[x(0x105)] = m;
        const o = await ChatFlow_1[x(0xfa)][w(0x100)](n);
        if (!o)
            throw new AppError_1[(x(0xfa))](l[w(0xf8)], 0x1b6 * -0x6 + -0x1c5f + 0x2837);
        const p = {};
        p[w(0xf9)] = ![], p[x(0xfd)] = !![], await o[w(0x109)](p);
        const q = {};
        q[w(0xfe)] = [
            l[x(0x111)],
            l[w(0x10c)]
        ], await o[w(0x10f)](q);
    };
exports[u(0xfa)] = DeleteChatFlowService;