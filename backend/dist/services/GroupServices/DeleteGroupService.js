'use strict';
const q = b, r = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * -0x199 + -0x13 * -0x2c + 0x2 * -0x4);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(o(0x1b5)) / (0x4 * 0x530 + 0x2f6 * 0x2 + -0x1aab * 0x1) + -parseInt(p(0x1a6)) / (-0xe14 * -0x1 + -0x26fd + 0x18eb) + parseInt(o(0x1b9)) / (0x16c7 + -0x1a9 * -0x11 + -0x32fd) + parseInt(p(0x1ac)) / (-0x3 * -0x9 + 0x1740 + -0x1757) * (parseInt(p(0x1b1)) / (0x2 * 0x7b8 + -0xa66 * -0x1 + -0x19d1)) + parseInt(o(0x1b7)) / (-0x23e6 + -0x35a + 0x16 * 0x1c9) * (-parseInt(p(0x1b8)) / (-0xcc * -0xa + 0xd3c + -0xd * 0x1a1)) + -parseInt(o(0x1bb)) / (0x4b6 + -0x6b * 0x32 + 0xc * 0x15a) + -parseInt(p(0x1ae)) / (0x471 + 0x54e + 0xb * -0xe2) * (-parseInt(p(0x1af)) / (-0x2f * -0x4 + -0x1974 + 0x18c2));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x35bab + -0x5383e + 0xcdb67));
var __importDefault = this && this[q(0x1ab) + q(0x1a5)] || function (c) {
    const s = q;
    return c && c[s(0x1c0)] ? c : { 'default': c };
};
const k = {};
function a() {
    const v = [
        'findOne',
        'destroy',
        'tenantId',
        '__importDe',
        '4JBfcby',
        'default',
        '227727UxlNYu',
        '440fpgfqI',
        'ERR_GRUOP_',
        '27155dNDuoS',
        'defineProp',
        'NO_EXISTS',
        'mrfiQ',
        '316566cbnlzG',
        'ls/Group',
        '51702zmeUHA',
        '322zPLxJF',
        '1335879PsZVeA',
        'erty',
        '3677032EKrpRW',
        'UP_FOUND',
        'where',
        'value',
        '../../mode',
        '__esModule',
        'nCjot',
        'rs/AppErro',
        '../../erro',
        'fault',
        '222066WLEcNj',
        'ERR_NO_GRO'
    ];
    a = function () {
        return v;
    };
    return a();
}
k[r(0x1be)] = !![], Object[r(0x1b2) + r(0x1ba)](exports, q(0x1c0), k);
const AppError_1 = __importDefault(require(r(0x1a4) + r(0x1a3) + 'r')), Group_1 = __importDefault(require(q(0x1bf) + r(0x1b6))), DeleteGroupService = async ({
        id: f,
        tenantId: g
    }) => {
        const t = q, u = r, h = {};
        h[t(0x1c1)] = t(0x1a7) + t(0x1bc), h[t(0x1b4)] = u(0x1b0) + u(0x1b3);
        const i = h, j = {};
        j['id'] = f, j[t(0x1aa)] = g;
        const l = {};
        l[t(0x1bd)] = j;
        const m = await Group_1[u(0x1ad)][t(0x1a8)](l);
        if (!m)
            throw new AppError_1[(u(0x1ad))](i[t(0x1c1)], -0x25d * -0xf + 0x970 + -0x2b4f);
        try {
            await m[u(0x1a9)]();
        } catch (n) {
            throw new AppError_1[(t(0x1ad))](i[u(0x1b4)], 0x219a + 0x15 * -0x1c9 + 0x577 * 0x1);
        }
    };
exports[q(0x1ad)] = DeleteGroupService;