'use strict';
const q = b, r = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x4 * -0x44b + -0x209 * -0x12 + 0x3 * -0x1154);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const v = [
        'method',
        '72450sGrQBi',
        'error',
        's/logger',
        'url',
        'EQJae',
        'post',
        'env',
        '360_NOT_SE',
        'applicatio',
        'headers',
        'fault',
        '87142ghVFiT',
        '../../util',
        'value',
        '6HdtNuL',
        'rs/AppErro',
        'Content-Ty',
        '623110UkKtrr',
        's/webhook',
        '824XDwxsa',
        '__importDe',
        '../../erro',
        'default',
        'T_WEBHOOK:',
        '1552290kUztcc',
        'logger',
        '1895208dvRhAv',
        '4AgAWxf',
        'D360-API-K',
        '7030lpfmQg',
        'n/json',
        'axios',
        '__esModule',
        'Qionr',
        'data',
        '20133gnrXTW',
        '/v1/config',
        'defineProp',
        'erty',
        'API_URL_36'
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
            const f = parseInt(o(0x1e1)) / (0x1c69 * 0x1 + 0x231d + -0x3f85) + -parseInt(o(0x1f3)) / (-0x1 * -0xe56 + 0x1 * -0x794 + 0x1b * -0x40) * (parseInt(p(0x1e4)) / (0x3 * -0x5fb + 0xc6f + 0x9d * 0x9)) + parseInt(o(0x1f1)) / (0x1 * 0x2524 + 0x1e5b * -0x1 + 0x1 * -0x6c5) * (-parseInt(p(0x1e7)) / (-0x1471 * 0x1 + 0x1ec5 + 0x179 * -0x7)) + parseInt(p(0x1ee)) / (-0x8dd + 0x85 * -0x27 + 0x1d26) + -parseInt(o(0x1f0)) / (0x23 * -0x61 + 0x2513 + -0x17c9) + -parseInt(p(0x1e9)) / (-0xb * 0xf1 + 0x16a4 + -0xc41) * (-parseInt(o(0x1f9)) / (-0x612 * 0x2 + 0x3c8 + -0x7 * -0x133)) + -parseInt(p(0x1d6)) / (0x152d + -0x88d + 0x12 * -0xb3);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x288fe + 0x8 * -0x3fa0 + -0x917 * -0xc7));
var __importDefault = this && this[q(0x1ea) + q(0x1e0)] || function (c) {
    const s = q;
    return c && c[s(0x1f6)] ? c : { 'default': c };
};
const k = {};
k[r(0x1e3)] = !![], Object[r(0x1d2) + r(0x1d3)](exports, q(0x1f6), k);
const axios_1 = __importDefault(require(r(0x1f5))), AppError_1 = __importDefault(require(q(0x1eb) + r(0x1e5) + 'r')), logger_1 = require(r(0x1e2) + q(0x1d8)), SetWebHookUrl = async ({
        url: f,
        apiKey: g
    }) => {
        const t = r, u = r, h = {};
        h[t(0x1da)] = t(0x1db), h[u(0x1f7)] = t(0x1de) + t(0x1f4);
        const i = h, j = process[t(0x1dc)][u(0x1d4) + '0'] + (u(0x1fa) + u(0x1e8));
        try {
            const l = {};
            l[t(0x1d9)] = f;
            const m = {};
            return m[u(0x1d5)] = i[t(0x1da)], m[t(0x1d9)] = j, m[u(0x1f8)] = l, m[u(0x1df)] = {}, m[u(0x1df)][t(0x1f2) + 'EY'] = g, m[u(0x1df)][t(0x1e6) + 'pe'] = i[u(0x1f7)], await (0x47 * -0x56 + 0x9d6 + 0x34 * 0x45, axios_1[t(0x1ec)])(m), !![];
        } catch (n) {
            logger_1[t(0x1ef)][u(0x1d7)](n);
            throw new AppError_1[(u(0x1ec))](t(0x1dd) + u(0x1ed) + '\x20' + n);
        }
    };
exports[q(0x1ec)] = SetWebHookUrl;