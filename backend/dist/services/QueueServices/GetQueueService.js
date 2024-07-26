'use strict';
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(l(0x9e)) / (-0x2426 + -0x38a + 0x9 * 0x469) * (parseInt(m(0x8f)) / (-0x19cd + 0x84f + 0x1180)) + -parseInt(m(0x94)) / (-0x1557 + -0x18 * -0xc1 + -0x1a1 * -0x2) + -parseInt(m(0xa1)) / (0x47 * -0x78 + 0x23fc + -0x4 * 0xac) + parseInt(m(0xa0)) / (0x8d * 0x1 + -0x4cb + 0x443 * 0x1) + parseInt(l(0x95)) / (0x99f * -0x3 + 0x5 * 0x27 + 0x1c20) * (parseInt(l(0xa3)) / (-0x304 * 0x1 + 0x2093 + -0x1d88)) + parseInt(l(0x93)) / (0x11e0 + 0x8a5 * 0x1 + -0x1a7d) + -parseInt(m(0x96)) / (0x20f5 + -0xf * 0xca + -0x1 * 0x1516);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1061bc + 0x23002 * -0x5 + 0x239cc9));
function a() {
    const s = [
        '__importDe',
        '2254640GtqQsY',
        '711453tFyAPy',
        '736998sKpYvg',
        '14343282bSiqXa',
        'fault',
        '../../mode',
        'erty',
        'value',
        'findByPk',
        'ERR_NO_QUE',
        '../../erro',
        '85172UrmVHf',
        '__esModule',
        '5415255MBtkrJ',
        '122264oeagfJ',
        'defineProp',
        '35OsgVLP',
        'UE_FOUND',
        'ls/Queue',
        'default',
        '10kOkwKE',
        'rs/AppErro',
        'rqogg'
    ];
    a = function () {
        return s;
    };
    return a();
}
var __importDefault = this && this[n(0x92) + n(0x97)] || function (c) {
    const p = o;
    return c && c[p(0x9f)] ? c : { 'default': c };
};
const k = {};
k[n(0x9a)] = !![], Object[o(0xa2) + o(0x99)](exports, o(0x9f), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x293 * -0x1 + 0x26 * 0x4 + -0xd * -0x32);
        let h = e[f];
        return h;
    }, b(c, d);
}
const AppError_1 = __importDefault(require(o(0x9d) + o(0x90) + 'r')), Queue_1 = __importDefault(require(n(0x98) + o(0xa5))), GetQueueService = async d => {
        const q = o, r = o, e = {};
        e[q(0x91)] = r(0x9c) + r(0xa4);
        const f = e, g = await Queue_1[r(0xa6)][r(0x9b)](d);
        if (!g)
            throw new AppError_1[(q(0xa6))](f[r(0x91)], 0x55b + -0x18 + -0x3af);
        return g;
    };
exports[o(0xa6)] = GetQueueService;