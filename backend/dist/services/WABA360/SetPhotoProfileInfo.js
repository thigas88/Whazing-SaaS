'use strict';
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(o(0x94)) / (0x1 * 0x2b3 + 0x2b * 0xda + -0x4ea * 0x8) + -parseInt(o(0x7f)) / (0x1dde + -0x8 * -0xda + -0x24ac) * (-parseInt(p(0xa6)) / (0x2493 * -0x1 + 0x2252 + 0xa * 0x3a)) + parseInt(p(0x91)) / (0x649 + 0x901 * 0x2 + 0x4db * -0x5) * (parseInt(p(0xa2)) / (-0x81 * -0x37 + 0xa50 + 0x116 * -0x23)) + -parseInt(p(0xa9)) / (-0xd * 0x2ef + 0x2df + 0x234a) * (parseInt(o(0x85)) / (-0x118 * -0x8 + -0x475 * 0x3 + -0x46 * -0x11)) + -parseInt(o(0x9e)) / (-0x7b * 0x9 + -0xa * 0x167 + -0x5 * -0x3ad) + parseInt(o(0x8b)) / (-0x25 * 0x96 + -0x1aaa * -0x1 + 0x1 * -0x4f3) * (-parseInt(p(0x8c)) / (0xa7 * -0x7 + 0x148 * -0x18 + 0x235b)) + -parseInt(p(0x99)) / (-0x1bad + -0x8 * -0x7c + 0x6d * 0x38) * (-parseInt(o(0x87)) / (-0x260e + -0x3d * 0x9a + 0x2 * 0x2566));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xf1 * -0x9ef + -0x35b4 * 0x2 + -0x28a67 * 0x1));
var __importDefault = this && this[q(0xa5) + q(0x9a)] || function (c) {
    const s = q;
    return c && c[s(0x8e)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2 * 0x12e3 + 0x1cb9 * 0x1 + -0x4201);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const v = [
        'env',
        '3777320IgIiUT',
        'url',
        '/v1/settin',
        '/photo',
        '32335eiqLJl',
        'gs/profile',
        'logger',
        '__importDe',
        '36402ChCmBg',
        'post',
        '../../util',
        '207606sHHrks',
        'data',
        'D360-API-K',
        '30UeWrOt',
        '../../erro',
        'error',
        'rs/AppErro',
        'multipart/',
        'method',
        '35RPDyOB',
        'API_URL_36',
        '3539076fVelYJ',
        'file',
        'erty',
        'defineProp',
        '9IxHeJG',
        '2377420gqlYZi',
        'default',
        '__esModule',
        '360_NOT_SE',
        'headers',
        '272tVZdXa',
        'ngaVQ',
        'value',
        '90164qXEwfD',
        'T_PHOTO:\x20',
        'noOjm',
        'axios',
        's/logger',
        '22vNYCBj',
        'fault',
        'form-data',
        'Content-Ty'
    ];
    a = function () {
        return v;
    };
    return a();
}
const k = {};
k[q(0x93)] = !![], Object[q(0x8a) + r(0x89)](exports, q(0x8e), k);
const axios_1 = __importDefault(require(q(0x97))), AppError_1 = __importDefault(require(r(0x80) + q(0x82) + 'r')), logger_1 = require(r(0xa8) + r(0x98)), SetPhotoProfileInfo = async ({
        file: f,
        apiKey: g
    }) => {
        const t = q, u = r, h = {};
        h[t(0x92)] = t(0xa7), h[t(0x96)] = u(0x83) + t(0x9b);
        const i = h, j = process[t(0x9d)][u(0x86) + '0'] + (u(0xa0) + t(0xa3) + t(0xa1));
        try {
            const l = {};
            l[u(0x88)] = f;
            const m = {};
            return m[t(0x84)] = i[u(0x92)], m[t(0x9f)] = j, m[t(0xaa)] = l, m[t(0x90)] = {}, m[t(0x90)][t(0x7e) + 'EY'] = g, m[t(0x90)][u(0x9c) + 'pe'] = i[t(0x96)], await (-0x954 + 0x138a + -0xa36, axios_1[t(0x8d)])(m), !![];
        } catch (n) {
            logger_1[u(0xa4)][u(0x81)](n);
            throw new AppError_1[(t(0x8d))](u(0x8f) + u(0x95) + n);
        }
    };
exports[q(0x8d)] = SetPhotoProfileInfo;