'use strict';
const q = b, r = b;
function a() {
    const v = [
        'method',
        '../../util',
        'url',
        '21040juxHfH',
        '3535RQOYtG',
        '1067YKpRBr',
        '19651IHjwPi',
        'error',
        's/logger',
        'data',
        'ABLJl',
        '__importDe',
        '68urrrmi',
        'rs/AppErro',
        'logger',
        'sXJpq',
        '../../erro',
        'env',
        'multipart/',
        '2140580ZDJDRt',
        'default',
        '13756959NdYEZs',
        'value',
        'file',
        '360_NOT_SE',
        'post',
        '8FsQMAz',
        '865RJQWwJ',
        'D360-API-K',
        '19596wXIwit',
        'API_URL_36',
        'gs/profile',
        'T_PHOTO:\x20',
        'headers',
        '79944SDMuuS',
        '/v1/settin',
        '/photo',
        'form-data',
        '__esModule',
        'axios',
        'fault',
        'defineProp',
        'erty',
        '1936962rWJYrg',
        'Content-Ty'
    ];
    a = function () {
        return v;
    };
    return a();
}
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(o(0x133)) / (0x1d47 + -0x253c + -0x2 * -0x3fb) * (parseInt(o(0x139)) / (-0x311 * -0xa + 0xd * 0x297 + -0x3 * 0x1571)) + parseInt(o(0x12b)) / (-0x1901 + 0x2652 + -0xd4e) * (-parseInt(p(0x11a)) / (-0xa * 0x83 + 0xe3c + 0x5 * -0x1d2)) + -parseInt(o(0x11b)) / (-0x8f7 + -0x2171 + 0x2a6d) * (parseInt(o(0x11d)) / (0x1e60 + 0x5 * -0x3c4 + -0xb86)) + -parseInt(p(0x131)) / (0x6d * 0x23 + -0x1 * -0xbf6 + -0xe5 * 0x1e) * (-parseInt(o(0x130)) / (-0x3 * -0xe + -0x2140 * -0x1 + -0x2162)) + parseInt(p(0x115)) / (-0xe0d + -0x7 * -0x266 + -0x2b4) + -parseInt(o(0x113)) / (-0x1ae7 * -0x1 + -0x1c9f + 0x1c2) + parseInt(p(0x132)) / (0x1 * -0x135b + -0x4 * -0x37c + 0x576) * (-parseInt(p(0x122)) / (0x1d28 + 0x1a2 + -0xf5f * 0x2));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x35 * 0x5281 + -0x266b7 + 0x1fd099));
var __importDefault = this && this[q(0x138) + r(0x128)] || function (c) {
    const s = r;
    return c && c[s(0x126)] ? c : { 'default': c };
};
const k = {};
k[q(0x116)] = !![], Object[q(0x129) + r(0x12a)](exports, q(0x126), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x34 * 0x35 + -0x1045 + 0x694);
        let h = e[f];
        return h;
    }, b(c, d);
}
const axios_1 = __importDefault(require(q(0x127))), AppError_1 = __importDefault(require(q(0x13d) + q(0x13a) + 'r')), logger_1 = require(q(0x12e) + q(0x135)), SetPhotoProfileInfo = async ({
        file: f,
        apiKey: g
    }) => {
        const t = q, u = q, h = {};
        h[t(0x137)] = u(0x119), h[t(0x13c)] = u(0x13f) + t(0x125);
        const i = h, j = process[u(0x13e)][t(0x11e) + '0'] + (u(0x123) + u(0x11f) + t(0x124));
        try {
            const l = {};
            l[t(0x117)] = f;
            const m = {};
            return m[u(0x12d)] = i[u(0x137)], m[t(0x12f)] = j, m[u(0x136)] = l, m[u(0x121)] = {}, m[u(0x121)][t(0x11c) + 'EY'] = g, m[u(0x121)][t(0x12c) + 'pe'] = i[t(0x13c)], await (0x110 + -0x25b + -0x1 * -0x14b, axios_1[u(0x114)])(m), !![];
        } catch (n) {
            logger_1[t(0x13b)][u(0x134)](n);
            throw new AppError_1[(t(0x114))](t(0x118) + t(0x120) + n);
        }
    };
exports[q(0x114)] = SetPhotoProfileInfo;