'use strict';
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(l(0x1fb)) / (0x21de + 0x35 * -0x3e + 0x1507 * -0x1) * (-parseInt(l(0x203)) / (0x1a2 * 0x7 + -0x4fb + 0x11 * -0x61)) + parseInt(l(0x205)) / (-0x1bf7 * 0x1 + -0x10da * -0x2 + -0x5ba) + parseInt(m(0x1f9)) / (-0x5fe + -0x1f60 + -0x63b * -0x6) * (parseInt(l(0x200)) / (0x415 * 0x4 + 0x1 * -0xb05 + -0x2a5 * 0x2)) + -parseInt(l(0x208)) / (-0x1ed2 + -0x3b * 0x9b + -0x4291 * -0x1) * (parseInt(m(0x1fe)) / (0x1 * 0x1105 + -0x4d6 + -0xc28)) + parseInt(l(0x1f4)) / (0xfc5 * 0x1 + 0x24e4 + 0x1 * -0x34a1) * (-parseInt(m(0x1fd)) / (-0x2 * 0x5a + -0x2 * -0x3a1 + -0x685)) + -parseInt(l(0x1f6)) / (0x2 * -0xe2f + -0x2453 + -0xe3 * -0x49) * (-parseInt(l(0x1f7)) / (-0xb03 + 0x53 * -0xd + 0x517 * 0x3)) + parseInt(m(0x206)) / (0x1 * -0x8c3 + -0x27 * 0xbc + 0x2573);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x308 + 0x1349c4 + -0xa * 0xbe11));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1e9 + -0xb * -0x53 + -0x388);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const s = [
        '32995zJFnpW',
        'erty',
        'fault',
        '2XbNINk',
        'default',
        '1246407PaGZcD',
        '9519828OncfAm',
        'value',
        '3000wgTbLC',
        'update',
        'defineProp',
        'ls/Help',
        'ERR_NO_HEL',
        '../../erro',
        'findByPk',
        'P_FOUND',
        '152srFSCk',
        '../../mode',
        '344150tbsHvi',
        '319xMyzWe',
        'rs/AppErro',
        '20eLTsmQ',
        '__esModule',
        '250259NZQrHa',
        'YVgzk',
        '508635QpRqQy',
        '1925DiiBuY',
        '__importDe'
    ];
    a = function () {
        return s;
    };
    return a();
}
var __importDefault = this && this[n(0x1ff) + n(0x202)] || function (c) {
    const p = n;
    return c && c[p(0x1fa)] ? c : { 'default': c };
};
const k = {};
k[n(0x207)] = !![], Object[o(0x20a) + o(0x201)](exports, o(0x1fa), k);
const AppError_1 = __importDefault(require(o(0x20d) + n(0x1f8) + 'r')), Help_1 = __importDefault(require(n(0x1f5) + n(0x20b))), UpdateService = async d => {
        const q = n, r = o, e = {};
        e[q(0x1fc)] = q(0x20c) + r(0x1f3);
        const f = e, {id: g} = d, h = await Help_1[q(0x204)][q(0x1f2)](g);
        if (!h)
            throw new AppError_1[(q(0x204))](f[r(0x1fc)], 0x1 * -0x1f85 + 0x1 * 0x2047 + 0xd2);
        return await h[q(0x209)](d), h;
    };
exports[o(0x204)] = UpdateService;