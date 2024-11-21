'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0x17b)) / (0x647 * -0x3 + -0x741 * -0x3 + -0x6b * 0x7) * (-parseInt(q(0x177)) / (-0x119 * 0x16 + -0x23ea + -0xb * -0x576)) + parseInt(p(0x16d)) / (0x937 * 0x1 + 0x2 * 0x32 + -0x998) + parseInt(q(0x16c)) / (-0x1df1 + 0x17cf + 0x626) + parseInt(p(0x183)) / (-0x6d * -0x33 + -0x2704 + 0x1152) + parseInt(q(0x16e)) / (-0x1 * 0xee3 + -0x6 * -0x209 + 0x2b3) + -parseInt(q(0x16f)) / (0x1 * 0x4a + -0x679 + -0x6 * -0x109) * (-parseInt(p(0x172)) / (-0x20c * -0x1 + 0x10f + -0x313 * 0x1)) + -parseInt(p(0x185)) / (-0x11 * -0x178 + 0x16d4 + -0x2fc3);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x945 + 0xfc54c + -0x1c1b9 * 0x1));
var __importDefault = this && this[r(0x186) + s(0x182)] || function (c) {
    const t = s;
    return c && c[t(0x179)] ? c : { 'default': c };
};
const k = {};
k[s(0x173)] = !![], Object[s(0x162) + r(0x170)](exports, s(0x179), k);
const axios_1 = __importDefault(require(r(0x166))), AppError_1 = __importDefault(require(r(0x17a) + r(0x184) + 'r')), logger_1 = require(r(0x164) + s(0x16a)), UploadMedia = async ({
        file: f,
        apiKey: g
    }) => {
        const u = r, v = s, h = {};
        h[u(0x176)] = v(0x168), h[u(0x17c)] = u(0x178) + u(0x165);
        const i = h, j = process[u(0x17d)][v(0x171) + '0'] + v(0x17f);
        try {
            const l = {};
            l[u(0x175)] = f;
            const m = {};
            m[v(0x188)] = i[v(0x176)], m[u(0x180)] = j, m[u(0x174)] = l, m[u(0x167)] = {}, m[u(0x167)][v(0x161) + 'EY'] = g, m[u(0x167)][u(0x16b) + 'pe'] = i[v(0x17c)];
            const n = await (0xe50 + -0x43 * 0x32 + -0x13a, axios_1[v(0x163)])(m);
            return n[v(0x174)];
        } catch (o) {
            logger_1[v(0x187)][v(0x169)](o);
            throw new AppError_1[(u(0x163))](v(0x17e) + u(0x181) + ':\x20' + o);
        }
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xf43 + -0x4 * -0x1e8 + -0x1582);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const w = [
        'API_URL_36',
        '8pUUHBI',
        'value',
        'data',
        'file',
        'woHeU',
        '2IwPwVS',
        'multipart/',
        '__esModule',
        '../../erro',
        '1814502LAFZzp',
        'opRCI',
        'env',
        '360_NOT_UP',
        '/v1/media',
        'url',
        'LOAD_MEDIA',
        'fault',
        '7043815cKwVqi',
        'rs/AppErro',
        '73115199DRPRsu',
        '__importDe',
        'logger',
        'method',
        'D360-API-K',
        'defineProp',
        'default',
        '../../util',
        'form-data',
        'axios',
        'headers',
        'post',
        'error',
        's/logger',
        'Content-Ty',
        '2488904fXsyCI',
        '5400024IddxUO',
        '10300350jGKJxR',
        '11777353MXZlyD',
        'erty'
    ];
    a = function () {
        return w;
    };
    return a();
}
exports[r(0x163)] = UploadMedia;