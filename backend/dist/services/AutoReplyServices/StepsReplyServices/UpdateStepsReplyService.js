'use strict';
const w = b, x = b;
(function (c, d) {
    const u = b, v = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(u(0xe8)) / (-0x20c7 * -0x1 + -0x15bf + -0x1 * 0xb07) * (-parseInt(u(0x104)) / (-0x22 * 0x31 + 0x3a * 0x21 + -0xf6)) + -parseInt(u(0xfa)) / (-0xd9d + -0x5 * 0x4d5 + 0x25c9) + -parseInt(v(0xff)) / (-0x15 * 0x141 + -0x28d + 0x112 * 0x1b) + parseInt(v(0xef)) / (-0x1787 + -0x1 * 0x113d + 0x28c9) + parseInt(v(0x106)) / (0x1c3b + 0x2110 + -0x3d45) + -parseInt(u(0xf0)) / (-0x1 * 0x1f94 + 0x2c2 * -0xe + 0x4637) * (-parseInt(u(0xf9)) / (-0x2f * 0x37 + -0x204d + -0x2a6e * -0x1)) + parseInt(u(0x107)) / (-0x24ce + -0x791 * -0x3 + 0xe24);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x8bd55 + -0xd78 * -0x71 + 0x82cd1));
function a() {
    const B = [
        '2BIqdKG',
        'OzkTc',
        '914862QHjOvT',
        '2371644hhnEDN',
        'attributes',
        'LY_FOUND',
        'initialSte',
        'NYxTf',
        'YfiGU',
        '541673vvtJji',
        'rrors/AppE',
        'reply',
        'reload',
        'update',
        '../../../e',
        'defineProp',
        '2618700MeeXyF',
        '21nKbcxc',
        '../../../m',
        'rror',
        'fault',
        'findOne',
        'default',
        'userId',
        'P_AUTO_REP',
        'tpjAu',
        '1193128dlxMJZ',
        '1265298GHItKC',
        'erty',
        'ERR_NO_STE',
        'sReply',
        'where',
        '284356xRCoDU',
        'value',
        'odels/Step',
        '__esModule',
        '__importDe'
    ];
    a = function () {
        return B;
    };
    return a();
}
var __importDefault = this && this[w(0x103) + x(0xf3)] || function (c) {
    const y = w;
    return c && c[y(0x102)] ? c : { 'default': c };
};
const k = {};
k[x(0x100)] = !![], Object[x(0xee) + w(0xfb)](exports, w(0x102), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xf31 * -0x1 + 0x16ed + -0x7 * 0x551);
        let h = e[f];
        return h;
    }, b(c, d);
}
const AppError_1 = __importDefault(require(x(0xed) + w(0xe9) + w(0xf2))), StepsReply_1 = __importDefault(require(x(0xf1) + x(0x101) + w(0xfd))), UpdateStepsReplyService = async ({
        stepsReplyData: h,
        stepsReplyId: i
    }) => {
        const z = w, A = w, j = {};
        j[z(0xe7)] = A(0xea), j[A(0xf8)] = z(0xf6), j[A(0x105)] = A(0x10a) + 'p', j[A(0x10b)] = z(0xfc) + z(0xf7) + z(0x109);
        const l = j, {
                reply: m,
                userId: n,
                initialStep: o
            } = h, p = {};
        p['id'] = i;
        const q = {};
        q[A(0xfe)] = p, q[z(0x108)] = [
            'id',
            l[A(0xe7)],
            l[A(0xf8)],
            l[z(0x105)]
        ];
        const r = await StepsReply_1[z(0xf5)][z(0xf4)](q);
        if (!r)
            throw new AppError_1[(A(0xf5))](l[A(0x10b)], 0x2 * -0x571 + -0x1754 + -0x23ca * -0x1);
        const s = {};
        s[z(0xea)] = m, s[z(0xf6)] = n, s[A(0x10a) + 'p'] = o, await r[A(0xec)](s);
        const t = {};
        return t[z(0x108)] = [
            'id',
            l[A(0xe7)],
            l[z(0xf8)],
            l[z(0x105)]
        ], await r[z(0xeb)](t), r;
    };
exports[x(0xf5)] = UpdateStepsReplyService;