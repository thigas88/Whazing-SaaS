'use strict';
const r = b, s = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x20bd + 0x1ff1 + -0x3fc4);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0xf8)) / (0xe51 * 0x1 + 0x2f5 * 0x1 + -0x1145 * 0x1) * (-parseInt(q(0x10d)) / (-0x6f5 + 0xc61 * 0x2 + -0x38f * 0x5)) + -parseInt(p(0x104)) / (0x177 * -0x15 + -0x755 * 0x2 + 0x2d70) * (-parseInt(p(0x103)) / (-0x1 * -0x2231 + -0x19f6 + 0x3 * -0x2bd)) + parseInt(q(0xf7)) / (0x79f + -0x21a * 0xb + 0xf84) + -parseInt(p(0xf5)) / (-0x18f3 * 0x1 + -0x5a2 * -0x4 + 0x271) + -parseInt(p(0xec)) / (0x151e + 0x66 * -0x58 + 0x7 * 0x1ff) + parseInt(p(0x112)) / (-0x8ea + -0x265 + 0xb57) + parseInt(q(0x10c)) / (0xfb * -0x21 + 0x4b * 0x2 + 0x162 * 0x17) * (parseInt(q(0xf4)) / (0x7 * 0x26b + -0xb3a * -0x2 + 0x3 * -0xd1d));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x3ef18 + 0x5eb25 * 0x1 + -0x3 * -0x25f7e));
function a() {
    const w = [
        'data',
        'env',
        '18348090maYFlL',
        '6666084WWHqVu',
        '__importDe',
        '1339240OSplAg',
        '3823VkoOnW',
        'LOAD_MEDIA',
        '../../util',
        'fault',
        'value',
        '360_NOT_UP',
        'API_URL_36',
        's/logger',
        'url',
        'axios',
        '__esModule',
        '56372NTPYCA',
        '81JKRsYq',
        'multipart/',
        'zZjCl',
        'D360-API-K',
        'logger',
        '../../erro',
        'rs/AppErro',
        'post',
        '9wXumZj',
        '192JtdJjy',
        'Content-Ty',
        '/v1/media',
        'headers',
        'erty',
        '1298544doYCNP',
        'defineProp',
        'error',
        '3995943jlfhdl',
        'method',
        'default',
        'MEqQw',
        'form-data',
        'file'
    ];
    a = function () {
        return w;
    };
    return a();
}
var __importDefault = this && this[r(0xf6) + s(0xfb)] || function (c) {
    const t = s;
    return c && c[t(0x102)] ? c : { 'default': c };
};
const k = {};
k[s(0xfc)] = !![], Object[r(0xea) + r(0x111)](exports, r(0x102), k);
const axios_1 = __importDefault(require(s(0x101))), AppError_1 = __importDefault(require(s(0x109) + s(0x10a) + 'r')), logger_1 = require(r(0xfa) + s(0xff)), UploadMedia = async ({
        file: f,
        apiKey: g
    }) => {
        const u = r, v = s, h = {};
        h[u(0xef)] = v(0x10b), h[u(0x106)] = u(0x105) + v(0xf0);
        const i = h, j = process[u(0xf3)][v(0xfe) + '0'] + u(0x10f);
        try {
            const l = {};
            l[v(0xf1)] = f;
            const m = {};
            m[v(0xed)] = i[v(0xef)], m[u(0x100)] = j, m[u(0xf2)] = l, m[v(0x110)] = {}, m[v(0x110)][u(0x107) + 'EY'] = g, m[v(0x110)][v(0x10e) + 'pe'] = i[u(0x106)];
            const n = await (-0x1924 + 0x35 * -0x82 + 0x340e, axios_1[v(0xee)])(m);
            return n[u(0xf2)];
        } catch (o) {
            logger_1[v(0x108)][u(0xeb)](o);
            throw new AppError_1[(u(0xee))](v(0xfd) + u(0xf9) + ':\x20' + o);
        }
    };
exports[r(0xee)] = UploadMedia;