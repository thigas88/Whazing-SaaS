'use strict';
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(o(0x125)) / (-0x3a1 + 0xef5 + -0xb53) * (parseInt(p(0x126)) / (-0x2 * 0x3df + 0xd70 + -0x5b0)) + parseInt(p(0x127)) / (0xb * -0x26f + 0xa61 + 0x1067) + parseInt(p(0x136)) / (-0x192 + 0x1c96 + -0x60 * 0x48) + -parseInt(p(0x13f)) / (0x3 * -0xae9 + -0x10b4 + 0x3174) * (-parseInt(p(0x138)) / (-0x8 * 0x7c + -0xf1f + 0x1305)) + parseInt(p(0x12e)) / (-0x1 * -0x11 + 0x1056 + -0x1060) + -parseInt(o(0x12c)) / (0x45 * -0x81 + 0x169 * 0x10 + 0xc3d) + -parseInt(p(0x140)) / (0x64 + -0x1d39 + 0x1cde) * (parseInt(o(0x13b)) / (0xd57 + -0x103 * 0x3 + -0x24 * 0x49));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x11ca2 * 0x15 + 0x323 * 0x3e5 + 0x1 * -0x1595e7));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1b5e + -0x101 * -0x7 + 0x1 * -0x2143);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const v = [
        'ERR_GRUOP_',
        'NO_EXISTS',
        'destroy',
        '4349736hQvzgi',
        '__importDe',
        '3690372AUHnaO',
        'ERR_NO_GRO',
        'UP_FOUND',
        '__esModule',
        '../../mode',
        'findOne',
        'defineProp',
        '../../erro',
        '1009868ABDVrQ',
        'erty',
        '10864374uneIjz',
        'default',
        'ls/Group',
        '70mpzjvl',
        'GjjOl',
        'where',
        'wWOEt',
        '5UqSWPl',
        '897426NCLDpR',
        'tenantId',
        'fault',
        'value',
        '1475989bSJSUh',
        '2vxZQkb',
        '3130374tIHflk',
        'rs/AppErro'
    ];
    a = function () {
        return v;
    };
    return a();
}
var __importDefault = this && this[q(0x12d) + q(0x123)] || function (c) {
    const s = r;
    return c && c[s(0x131)] ? c : { 'default': c };
};
const k = {};
k[q(0x124)] = !![], Object[q(0x134) + q(0x137)](exports, q(0x131), k);
const AppError_1 = __importDefault(require(q(0x135) + q(0x128) + 'r')), Group_1 = __importDefault(require(r(0x132) + q(0x13a))), DeleteGroupService = async ({
        id: f,
        tenantId: g
    }) => {
        const t = q, u = r, h = {};
        h[t(0x13e)] = t(0x12f) + u(0x130), h[t(0x13c)] = t(0x129) + t(0x12a);
        const i = h, j = {};
        j['id'] = f, j[t(0x122)] = g;
        const l = {};
        l[t(0x13d)] = j;
        const m = await Group_1[t(0x139)][t(0x133)](l);
        if (!m)
            throw new AppError_1[(u(0x139))](i[t(0x13e)], 0xb18 + -0x5c5 + -0x3bf * 0x1);
        try {
            await m[t(0x12b)]();
        } catch (n) {
            throw new AppError_1[(t(0x139))](i[t(0x13c)], 0x824 * -0x3 + 0x1 * -0x7fc + 0x21fc);
        }
    };
exports[r(0x139)] = DeleteGroupService;