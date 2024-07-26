'use strict';
const r = b, s = b;
function a() {
    const w = [
        '1927899LgjUnL',
        'ERR_NO_SET',
        'IDAFU',
        '4672430eDOvga',
        '6aKdjHj',
        '../errors/',
        '__esModule',
        '896168XOaKlO',
        'Setting',
        'tenantId',
        'TING_FOUND',
        '195628pHdadE',
        '13nNlTdp',
        '8305908FknVvn',
        'IYUpy',
        '../models/',
        'AppError',
        'value',
        '120cBUViJ',
        'defineProp',
        '__importDe',
        'findOne',
        'erty',
        '3495877cgAEoA',
        'default',
        'key',
        '7zmOtVb',
        '9854456QlzfUy',
        'where',
        'fault'
    ];
    a = function () {
        return w;
    };
    return a();
}
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0x9d)) / (0x224 + -0x1c66 + 0x1b * 0xf9) * (-parseInt(q(0x9c)) / (-0x345 + 0x15d8 + -0x1291)) + parseInt(p(0x95)) / (-0xb54 + 0x1432 + -0x1 * 0x8db) * (-parseInt(q(0x98)) / (0xd5 * 0x24 + 0x835 * -0x3 + 0x1 * -0x551)) + parseInt(p(0x94)) / (0xdb0 + 0x13df + -0x10c5 * 0x2) + parseInt(p(0x9e)) / (0x1793 + 0x1484 + -0x185 * 0x1d) + parseInt(p(0x8d)) / (0x3 * -0x87a + 0x283 * -0xf + -0x2 * -0x1f91) * (parseInt(p(0x8e)) / (0x1d0b + 0xcd * -0x1f + -0x430)) + parseInt(p(0x91)) / (0xd * 0xf8 + -0x257a + 0x18eb) + parseInt(q(0xa3)) / (-0x1 * -0x8ec + -0x3 * -0xc45 + -0x1 * 0x2db1) * (-parseInt(q(0xa8)) / (-0x1853 + -0xf85 * -0x1 + -0x2f3 * -0x3));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x11b192 * -0x1 + 0x68 * -0x3b + 0x1 * 0x1d9b76));
var __importDefault = this && this[r(0xa5) + s(0x90)] || function (c) {
    const t = r;
    return c && c[t(0x97)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1d * -0xfb + -0x5 * -0x506 + -0x3502);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[s(0xa2)] = !![], Object[r(0xa4) + r(0xa7)](exports, s(0x97), k);
const Setting_1 = __importDefault(require(s(0xa0) + r(0x99))), AppError_1 = __importDefault(require(r(0x96) + s(0xa1))), CheckSettingstenant1 = async (f, g = null) => {
        const u = r, v = r, h = {};
        h[u(0x9f)] = function (n, o) {
            return n && o;
        }, h[v(0x93)] = v(0x92) + u(0x9b);
        const i = h, j = {};
        j[u(0x9a)] = 0x1, j[v(0x8c)] = f;
        const l = {};
        l[v(0x8f)] = j;
        const m = await Setting_1[u(0x8b)][u(0xa6)](l);
        if (i[u(0x9f)](!m, !g))
            throw new AppError_1[(u(0x8b))](i[v(0x93)], 0xd * -0x7a + 0x3 * 0x42 + -0x7 * -0x100);
        return m?.[u(0xa2)] || g;
    };
exports[r(0x8b)] = CheckSettingstenant1;