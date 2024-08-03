'use strict';
function a() {
    const w = [
        'rs/AppErro',
        '../../erro',
        'BIDFb',
        '3347953nYcPtR',
        '../../util',
        'logger',
        'defineProp',
        'value',
        'file',
        'method',
        'LOAD_MEDIA',
        'data',
        'LnFLy',
        '11ANEccs',
        'url',
        '/v1/media',
        '__esModule',
        'erty',
        'env',
        'Content-Ty',
        '4320084mAfuKc',
        'default',
        '__importDe',
        'axios',
        '2284740TaSVZY',
        '1886840jLVOun',
        'multipart/',
        'form-data',
        'headers',
        'post',
        '747771QtQcMM',
        '360_NOT_UP',
        's/logger',
        'error',
        'D360-API-K',
        'API_URL_36',
        '1187973MfCqWe',
        '38QRfNGd',
        '6oSiCKp',
        '8nfwvVB',
        '19543wHAdsm',
        'fault',
        '4zkoDbl'
    ];
    a = function () {
        return w;
    };
    return a();
}
const r = b, s = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x15c7 + 0x1c37 + -0x4e3);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0x19b)) / (0xc15 + -0x1295 + 0x25 * 0x2d) * (parseInt(q(0x198)) / (0xbb * -0xb + -0x91e + 0x1129)) + -parseInt(p(0x191)) / (-0x1abc + -0x232f * -0x1 + -0x870) * (-parseInt(p(0x19d)) / (0x1ec8 + 0x1ac8 + -0x398c)) + parseInt(p(0x1b6)) / (0xacc + -0x4d * -0x3d + -0x1d20) * (parseInt(q(0x199)) / (-0x137 * 0x1 + -0xe5 * 0x5 + 0x5b6)) + -parseInt(p(0x1a1)) / (-0xdea + -0x1a8f + 0x2880) * (parseInt(q(0x19a)) / (-0x8f9 + -0xdd * -0x9 + 0x13c)) + -parseInt(q(0x197)) / (0x533 * 0x2 + 0xc39 + -0x1696) + parseInt(q(0x1b7)) / (-0x1 * -0x2227 + 0xa67 + -0x2c84) + -parseInt(p(0x1ab)) / (-0x1 * -0xb42 + 0x2216 * 0x1 + -0x2d4d) * (-parseInt(q(0x1b2)) / (0xa12 * -0x1 + -0xc15 + -0x1 * -0x1633));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1525 * -0x6 + -0x23cb + -0xf421 * -0x4));
var __importDefault = this && this[r(0x1b4) + r(0x19c)] || function (c) {
    const t = s;
    return c && c[t(0x1ae)] ? c : { 'default': c };
};
const k = {};
k[s(0x1a5)] = !![], Object[s(0x1a4) + r(0x1af)](exports, s(0x1ae), k);
const axios_1 = __importDefault(require(r(0x1b5))), AppError_1 = __importDefault(require(r(0x19f) + s(0x19e) + 'r')), logger_1 = require(r(0x1a2) + r(0x193)), UploadMedia = async ({
        file: f,
        apiKey: g
    }) => {
        const u = r, v = r, h = {};
        h[u(0x1a0)] = v(0x190), h[v(0x1aa)] = u(0x18d) + v(0x18e);
        const i = h, j = process[u(0x1b0)][v(0x196) + '0'] + v(0x1ad);
        try {
            const l = {};
            l[u(0x1a6)] = f;
            const m = {};
            m[v(0x1a7)] = i[u(0x1a0)], m[v(0x1ac)] = j, m[v(0x1a9)] = l, m[u(0x18f)] = {}, m[u(0x18f)][u(0x195) + 'EY'] = g, m[u(0x18f)][v(0x1b1) + 'pe'] = i[u(0x1aa)];
            const n = await (0x4 * 0x611 + -0x3 * 0x1fe + 0x2 * -0x925, axios_1[v(0x1b3)])(m);
            return n[u(0x1a9)];
        } catch (o) {
            logger_1[v(0x1a3)][v(0x194)](o);
            throw new AppError_1[(v(0x1b3))](v(0x192) + u(0x1a8) + ':\x20' + o);
        }
    };
exports[s(0x1b3)] = UploadMedia;