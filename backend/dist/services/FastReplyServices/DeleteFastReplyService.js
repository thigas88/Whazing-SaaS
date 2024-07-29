'use strict';
function a() {
    const v = [
        'defineProp',
        '215733gwjDTh',
        '1483633TReVbO',
        'value',
        'ls/FastRep',
        '95106MpmDvf',
        'where',
        '2jBlmFi',
        'EPLY_EXIST',
        '156rEvpev',
        '5OjMfLV',
        'ERR_FAST_R',
        'tenantId',
        '../../mode',
        'erty',
        '../../erro',
        '402996wRxonx',
        '__importDe',
        'PRnSC',
        '4543376nzDaSv',
        'UND',
        'findOne',
        'destroy',
        '__esModule',
        'T_REPLY_FO',
        '3800524QeOxsK',
        '70hDwcsE',
        'ThoTU',
        'fault',
        'default',
        '1543644cvsLjZ',
        'ERR_NO_FAS',
        'rs/AppErro'
    ];
    a = function () {
        return v;
    };
    return a();
}
const q = b, r = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xc42 * 0x2 + 0x59 * -0x3d + 0x175 * 0x20);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(o(0x101)) / (-0x31 * 0x4d + 0x127e + -0x3c0) * (parseInt(o(0x106)) / (0x1b * -0x146 + 0x24b + 0x2019)) + -parseInt(o(0xee)) / (-0xb39 + -0x884 + 0x13c0) + parseInt(p(0xf7)) / (-0x1923 + 0x1498 + 0x185 * 0x3) * (parseInt(p(0xe8)) / (-0x1b40 + -0x2321 + 0x3e66)) + -parseInt(o(0xe7)) / (0x14d + 0x1e2b + -0x1f72) * (-parseInt(o(0x100)) / (-0x3 * -0x875 + -0xd03 * -0x1 + 0x3 * -0xcc9)) + parseInt(p(0xf1)) / (0xb6e + -0x2df * -0x2 + -0x1124 * 0x1) + parseInt(o(0xfc)) / (-0x1c9 * 0x10 + -0x1678 * -0x1 + 0x621 * 0x1) + parseInt(o(0xf8)) / (-0x1258 * 0x2 + 0x1 * 0x920 + 0x1 * 0x1b9a) * (parseInt(o(0x104)) / (0x23d9 + 0xbee + -0x2fbc));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x142db + -0x689f0 * 0x2 + 0x1c94e7));
var __importDefault = this && this[q(0xef) + r(0xfa)] || function (c) {
    const s = q;
    return c && c[s(0xf5)] ? c : { 'default': c };
};
const k = {};
k[r(0x102)] = !![], Object[r(0xff) + r(0xec)](exports, q(0xf5), k);
const AppError_1 = __importDefault(require(q(0xed) + q(0xfe) + 'r')), FastReply_1 = __importDefault(require(r(0xeb) + q(0x103) + 'ly')), DeleteFastReplyService = async ({
        id: f,
        tenantId: g
    }) => {
        const t = r, u = r, h = {};
        h[t(0xf0)] = t(0xfd) + u(0xf6) + u(0xf2), h[u(0xf9)] = u(0xe9) + t(0x107) + 'S';
        const i = h, j = {};
        j['id'] = f, j[t(0xea)] = g;
        const l = {};
        l[u(0x105)] = j;
        const m = await FastReply_1[t(0xfb)][t(0xf3)](l);
        if (!m)
            throw new AppError_1[(t(0xfb))](i[t(0xf0)], 0x1a5 * 0x11 + -0xd5 * 0x21 + -0x4 * -0x45);
        try {
            await m[t(0xf4)]();
        } catch (n) {
            throw new AppError_1[(t(0xfb))](i[u(0xf9)], 0x10f5 * 0x1 + -0x1 * 0x1c31 + 0xcd0);
        }
    };
exports[q(0xfb)] = DeleteFastReplyService;