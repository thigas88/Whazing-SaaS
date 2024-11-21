'use strict';
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(o(0x1fb)) / (0x188a + 0x1 * -0x4d9 + 0x690 * -0x3) * (parseInt(o(0x1f7)) / (0x6 * 0x4de + -0x1254 + -0x1a * 0x6b)) + -parseInt(o(0x202)) / (0x7e1 * 0x3 + -0x1672 + -0x1 * 0x12e) + parseInt(o(0x1fa)) / (0x14a6 + -0x2ef * -0x4 + -0x205e) + parseInt(p(0x1f3)) / (0x579 + 0xc7 * -0xe + 0x2 * 0x2b7) + parseInt(o(0x1ee)) / (-0x110 * -0x6 + -0x41 * 0x1c + -0x1 * -0xc2) * (-parseInt(o(0x1fe)) / (0x1 * 0x10ed + -0x18 * 0x188 + -0x69e * -0x3)) + parseInt(o(0x1e7)) / (-0x2 * -0xae4 + 0x2 * 0x107c + -0x36b8) + -parseInt(o(0x1f0)) / (0xd45 + -0x1f03 + 0x3 * 0x5ed) * (-parseInt(p(0x208)) / (0x12af + 0xa96 + -0x1d3b));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x92abe + -0x98a51 + 0x32e9 * 0x82));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x10a + -0x4 * 0x6df + 0x1c59);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[q(0x201) + q(0x1fd)] || function (c) {
    const s = r;
    return c && c[s(0x206)] ? c : { 'default': c };
};
const k = {};
function a() {
    const v = [
        'error',
        '4WcnLXe',
        'gs/profile',
        '../../erro',
        '2726040LMfCvI',
        '20697CUkqaa',
        'value',
        'fault',
        '14FoxXcX',
        'post',
        '/v1/settin',
        '__importDe',
        '2452848uLTYAl',
        'multipart/',
        'erty',
        'logger',
        '__esModule',
        '/photo',
        '289460RFKVMI',
        'Content-Ty',
        'D360-API-K',
        '../../util',
        'method',
        's/logger',
        'headers',
        'default',
        'qKELO',
        'defineProp',
        '2292288sqlpaT',
        'axios',
        'env',
        '360_NOT_SE',
        'url',
        'form-data',
        'mIsuy',
        '1216062Dylqca',
        'file',
        '45DnIIyh',
        'rs/AppErro',
        'data',
        '2685455amdViy',
        'API_URL_36',
        'T_PHOTO:\x20'
    ];
    a = function () {
        return v;
    };
    return a();
}
k[q(0x1fc)] = !![], Object[r(0x211) + q(0x204)](exports, q(0x206), k);
const axios_1 = __importDefault(require(r(0x1e8))), AppError_1 = __importDefault(require(r(0x1f9) + q(0x1f1) + 'r')), logger_1 = require(r(0x20b) + r(0x20d)), SetPhotoProfileInfo = async ({
        file: f,
        apiKey: g
    }) => {
        const t = r, u = q, h = {};
        h[t(0x1ed)] = u(0x1ff), h[t(0x210)] = t(0x203) + t(0x1ec);
        const i = h, j = process[u(0x1e9)][t(0x1f4) + '0'] + (u(0x200) + u(0x1f8) + u(0x207));
        try {
            const l = {};
            l[u(0x1ef)] = f;
            const m = {};
            return m[t(0x20c)] = i[u(0x1ed)], m[u(0x1eb)] = j, m[u(0x1f2)] = l, m[t(0x20e)] = {}, m[t(0x20e)][u(0x20a) + 'EY'] = g, m[t(0x20e)][u(0x209) + 'pe'] = i[t(0x210)], await (0xf02 * -0x2 + -0x1696 + -0x1 * -0x349a, axios_1[u(0x20f)])(m), !![];
        } catch (n) {
            logger_1[u(0x205)][t(0x1f6)](n);
            throw new AppError_1[(u(0x20f))](t(0x1ea) + t(0x1f5) + n);
        }
    };
exports[q(0x20f)] = SetPhotoProfileInfo;