'use strict';
const o = b, p = b;
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(m(0x87)) / (0xf65 + -0xcf7 * -0x1 + -0x1c5b) * (parseInt(n(0x85)) / (0xb8c + 0xed4 + -0x1a5e)) + parseInt(n(0x78)) / (-0x26e3 + 0x1d67 + 0x97f) * (-parseInt(n(0x7d)) / (0x5 * 0x44d + -0x938 + -0xc45)) + -parseInt(n(0x80)) / (0x55 * 0x5 + 0x1fc6 + 0x5e * -0x5b) * (parseInt(n(0x6e)) / (-0x1c * -0x63 + 0x1ec6 + -0x2994)) + -parseInt(m(0x6b)) / (0x1b1f + 0x1506 + -0x301e) * (-parseInt(m(0x86)) / (-0x1ab * 0x7 + -0x986 + -0x153b * -0x1)) + -parseInt(n(0x74)) / (0x1d05 + -0x33f * -0x7 + -0x763 * 0x7) + parseInt(m(0x72)) / (-0x1 * 0xe92 + -0x661 * 0x1 + 0x6ff * 0x3) * (parseInt(m(0x81)) / (-0x1 * -0x255b + 0x16a5 + -0x3bf5)) + parseInt(m(0x7e)) / (-0x1 * 0xd41 + -0x1 * 0x2200 + 0x2f4d);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x31d75 + -0x2 * -0x97fb + 0x2255 * -0x11));
var __importDefault = this && this[o(0x77) + o(0x79)] || function (c) {
    const q = p;
    return c && c[q(0x6c)] ? c : { 'default': c };
};
const k = {};
k[p(0x7b)] = !![], Object[o(0x82) + o(0x70)](exports, p(0x6c), k);
function a() {
    const t = [
        'default',
        'erty',
        'ls/QueueIn',
        '1319930nHEPIn',
        'where',
        '1367469ftCAZt',
        '../../erro',
        'ERR_NO_DIA',
        '__importDe',
        '3ketKCT',
        'fault',
        'tegrations',
        'value',
        'destroy',
        '249188LOkjYh',
        '2982444PvHiTA',
        'hGCgb',
        '1700DpHeZT',
        '22CrRSBk',
        'defineProp',
        'LOG_FOUND',
        '../../mode',
        '114JwIoCS',
        '7768rAtwxy',
        '4497modHBB',
        'rs/AppErro',
        '658DhipAr',
        '__esModule',
        'findOne',
        '12GtsHTb'
    ];
    a = function () {
        return t;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x15 * -0x27 + -0x17d4 + 0x1b71);
        let h = e[f];
        return h;
    }, b(c, d);
}
const QueueIntegrations_1 = __importDefault(require(p(0x84) + p(0x71) + p(0x7a))), AppError_1 = __importDefault(require(o(0x75) + o(0x6a) + 'r')), DeleteQueueIntegrationService = async f => {
        const r = o, s = o, g = {};
        g[r(0x7f)] = s(0x76) + s(0x83);
        const h = g, i = {};
        i['id'] = f;
        const j = {};
        j[s(0x73)] = i;
        const l = await QueueIntegrations_1[r(0x6f)][r(0x6d)](j);
        if (!l)
            throw new AppError_1[(s(0x6f))](h[r(0x7f)], 0x8f5 + 0xa * 0x214 + -0x963 * 0x3);
        await l[r(0x7c)]();
    };
exports[p(0x6f)] = DeleteQueueIntegrationService;