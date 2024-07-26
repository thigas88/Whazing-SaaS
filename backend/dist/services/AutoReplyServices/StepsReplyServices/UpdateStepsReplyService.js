'use strict';
const w = b, x = b;
(function (c, d) {
    const u = b, v = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(u(0x16a)) / (-0x104b + 0x1ba9 + -0x1 * 0xb5d) + -parseInt(v(0x15f)) / (-0x13d6 * -0x1 + 0x5 * -0x2d7 + -0x5a1) + parseInt(u(0x163)) / (0x2 * 0x16c + 0xaaf + -0xd84) + parseInt(v(0x147)) / (-0x4 * -0xe9 + 0x12 * -0x99 + 0x2 * 0x391) * (-parseInt(v(0x166)) / (0x17 * 0x4c + 0x1563 + -0x1c32 * 0x1)) + parseInt(u(0x156)) / (-0xbd5 + 0x6d0 + 0x50b) + parseInt(v(0x14e)) / (-0x3d * -0x83 + 0xcc9 + -0x2bf9) * (-parseInt(u(0x168)) / (-0x11a5 + -0x15a9 + -0x3ef * -0xa)) + -parseInt(v(0x15a)) / (0x1118 + 0x1 * 0x1e6b + -0x2f7a) * (parseInt(u(0x15c)) / (-0x1 * 0x17eb + 0x1ed3 + -0x125 * 0x6));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x25 * 0x1979 + 0x180c5 * 0x1 + 0x909e * 0x10));
var __importDefault = this && this[w(0x148) + x(0x14f)] || function (c) {
    const y = x;
    return c && c[y(0x15d)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1b5f + -0x6a2 + 0x2348);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[w(0x161)] = !![], Object[x(0x153) + w(0x167)](exports, x(0x15d), k);
const AppError_1 = __importDefault(require(w(0x169) + x(0x149) + x(0x158))), StepsReply_1 = __importDefault(require(x(0x16b) + x(0x14d) + w(0x154))), UpdateStepsReplyService = async ({
        stepsReplyData: h,
        stepsReplyId: i
    }) => {
        const z = w, A = w, j = {};
        j[z(0x16c)] = z(0x155), j[A(0x15b)] = A(0x157), j[z(0x162)] = z(0x151) + 'p', j[A(0x164)] = A(0x14b) + A(0x159) + z(0x152);
        const l = j, {
                reply: m,
                userId: n,
                initialStep: o
            } = h, p = {};
        p['id'] = i;
        const q = {};
        q[z(0x15e)] = p, q[z(0x150)] = [
            'id',
            l[A(0x16c)],
            l[z(0x15b)],
            l[z(0x162)]
        ];
        const r = await StepsReply_1[z(0x14c)][z(0x14a)](q);
        if (!r)
            throw new AppError_1[(A(0x14c))](l[A(0x164)], -0x2 * -0x7 + -0x755 + -0x8db * -0x1);
        const s = {};
        s[A(0x155)] = m, s[z(0x157)] = n, s[z(0x151) + 'p'] = o, await r[z(0x165)](s);
        const t = {};
        return t[z(0x150)] = [
            'id',
            l[z(0x16c)],
            l[A(0x15b)],
            l[A(0x162)]
        ], await r[A(0x160)](t), r;
    };
exports[w(0x14c)] = UpdateStepsReplyService;
function a() {
    const B = [
        'KGJLU',
        '1355570wqMYhy',
        '__esModule',
        'where',
        '66324jdvhvJ',
        'reload',
        'value',
        'RNKEM',
        '1597638cQlTBo',
        'JtmNR',
        'update',
        '30oRVkQW',
        'erty',
        '132304GJKBLj',
        '../../../e',
        '226627LugHvL',
        '../../../m',
        'jsRjF',
        '209096CxRFwv',
        '__importDe',
        'rrors/AppE',
        'findOne',
        'ERR_NO_STE',
        'default',
        'odels/Step',
        '7sffMdv',
        'fault',
        'attributes',
        'initialSte',
        'LY_FOUND',
        'defineProp',
        'sReply',
        'reply',
        '1135824icinyL',
        'userId',
        'rror',
        'P_AUTO_REP',
        '9sUjDSz'
    ];
    a = function () {
        return B;
    };
    return a();
}