'use strict';
const r = b, s = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x251e + 0x13 * 0x1df + 0x2ab);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0x133)) / (0x1b5c + 0x1 * -0x2606 + 0xaab * 0x1) * (-parseInt(p(0x130)) / (0x99 * -0x9 + -0x1 * 0xe0a + 0x1 * 0x136d)) + parseInt(q(0x11c)) / (0x137e + -0x2b * -0xdc + -0x386f) + parseInt(p(0x12f)) / (-0x1c * 0x86 + 0x1f8d + -0x10e1) * (parseInt(p(0x123)) / (0xb94 + -0x1 * -0x139 + -0xcc8)) + parseInt(q(0x128)) / (0x266e * -0x1 + 0x249f + 0x1d5) + parseInt(q(0x11d)) / (-0xba * -0x11 + -0x19 * -0xc1 + 0x3c * -0x85) + parseInt(q(0x11a)) / (0x1bfa * -0x1 + -0x1bde + 0x37e0) * (-parseInt(p(0x12e)) / (-0x63a * -0x3 + 0x67f * -0x4 + 0x757 * 0x1)) + -parseInt(p(0x136)) / (0x19ab * -0x1 + -0x1f58 + 0x390d);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x6ddb7 + -0x7c81 * 0x15 + 0x1 * 0x9e057));
function a() {
    const w = [
        '1839114aVWZeY',
        'key',
        'value',
        'tenantId',
        'default',
        'findOne',
        '180351cOWtZu',
        '4ElPQMt',
        '36xmwujp',
        'Setting',
        'fault',
        '32729MKwqlJ',
        'TING_FOUND',
        'TswAu',
        '2872350qgCrJN',
        '208tlGXla',
        'where',
        '1804464qecYxl',
        '2969190AUsNVR',
        'AppError',
        '__esModule',
        '../errors/',
        'erty',
        'NLtig',
        '2465455odIJYi',
        'ERR_NO_SET',
        '__importDe',
        '../models/',
        'defineProp'
    ];
    a = function () {
        return w;
    };
    return a();
}
var __importDefault = this && this[r(0x125) + s(0x132)] || function (c) {
    const t = s;
    return c && c[t(0x11f)] ? c : { 'default': c };
};
const k = {};
k[s(0x12a)] = !![], Object[r(0x127) + s(0x121)](exports, r(0x11f), k);
const Setting_1 = __importDefault(require(r(0x126) + r(0x131))), AppError_1 = __importDefault(require(r(0x120) + s(0x11e))), CheckSettingstenant1 = async (f, g = null) => {
        const u = s, v = r, h = {};
        h[u(0x122)] = function (n, o) {
            return n && o;
        }, h[u(0x135)] = v(0x124) + u(0x134);
        const i = h, j = {};
        j[v(0x12b)] = 0x1, j[u(0x129)] = f;
        const l = {};
        l[v(0x11b)] = j;
        const m = await Setting_1[v(0x12c)][v(0x12d)](l);
        if (i[v(0x122)](!m, !g))
            throw new AppError_1[(v(0x12c))](i[u(0x135)], -0xf * 0x97 + -0x342 + 0xdaf);
        return m?.[v(0x12a)] || g;
    };
exports[s(0x12c)] = CheckSettingstenant1;