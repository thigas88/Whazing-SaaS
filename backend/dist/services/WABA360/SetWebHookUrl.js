'use strict';
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(o(0x8e)) / (-0x3fb * -0x7 + 0x1 * 0x2215 + -0x3df1) * (parseInt(p(0x8b)) / (0x2522 + -0x1b37 + -0x1 * 0x9e9)) + -parseInt(p(0x91)) / (-0x2a1 * -0x7 + -0x2de * 0x5 + -0x40e) * (-parseInt(p(0x87)) / (0x1f * 0xf7 + -0x1124 + -0xcc1)) + parseInt(o(0x9a)) / (0x11af * 0x2 + -0x19da + -0x8f * 0x11) * (-parseInt(p(0x95)) / (0x1b7d + -0x9a3 * 0x2 + -0x831)) + -parseInt(o(0xa0)) / (-0x17ea + 0x20e7 + 0x25 * -0x3e) * (-parseInt(o(0x84)) / (-0x381 + 0xd45 * 0x1 + -0x9bc)) + -parseInt(o(0xa5)) / (0x1df7 + 0x2f9 + 0x20e7 * -0x1) + -parseInt(p(0x92)) / (-0x1 * 0x2048 + 0x734 + -0xc8f * -0x2) + -parseInt(p(0x81)) / (0x4a4 + 0x8b6 + -0xd4f) * (-parseInt(o(0x94)) / (-0x180c + 0x4 * 0x6f1 + 0xa * -0x5e));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x5 * -0xbcf5 + -0xad * 0xfd3 + -0x1 * -0x19715b));
var __importDefault = this && this[q(0x7e) + q(0x86)] || function (c) {
    const s = q;
    return c && c[s(0xa7)] ? c : { 'default': c };
};
const k = {};
k[q(0x9f)] = !![], Object[q(0x90) + r(0x97)](exports, q(0xa7), k);
const axios_1 = __importDefault(require(r(0xa6))), AppError_1 = __importDefault(require(q(0x96) + r(0x8f) + 'r')), logger_1 = require(r(0xa2) + q(0x82)), SetWebHookUrl = async ({
        url: f,
        apiKey: g
    }) => {
        const t = q, u = q, h = {};
        h[t(0x85)] = t(0xa1), h[t(0x93)] = u(0x7f) + t(0x98);
        const i = h, j = process[u(0x8a)][t(0x9d) + '0'] + (t(0x99) + u(0xa4));
        try {
            const l = {};
            l[t(0x9c)] = f;
            const m = {};
            return m[t(0x88)] = i[u(0x85)], m[u(0x9c)] = j, m[u(0x80)] = l, m[t(0x83)] = {}, m[t(0x83)][t(0xa8) + 'EY'] = g, m[t(0x83)][t(0xa3) + 'pe'] = i[u(0x93)], await (-0x191d + -0xa61 * 0x3 + 0x10 * 0x384, axios_1[t(0x8c)])(m), !![];
        } catch (n) {
            logger_1[u(0x9b)][t(0x89)](n);
            throw new AppError_1[(u(0x8c))](u(0x9e) + u(0x8d) + '\x20' + n);
        }
    };
function a() {
    const v = [
        '../../erro',
        'erty',
        'n/json',
        '/v1/config',
        '5ZfYJWS',
        'logger',
        'url',
        'API_URL_36',
        '360_NOT_SE',
        'value',
        '3717KACHuR',
        'post',
        '../../util',
        'Content-Ty',
        's/webhook',
        '975726VgNpMZ',
        'axios',
        '__esModule',
        'D360-API-K',
        '__importDe',
        'applicatio',
        'data',
        '10087nbPQKl',
        's/logger',
        'headers',
        '8152KPRhLi',
        'lEsdG',
        'fault',
        '60AxNaXj',
        'method',
        'error',
        'env',
        '972676ynAhZM',
        'default',
        'T_WEBHOOK:',
        '2QnCgGD',
        'rs/AppErro',
        'defineProp',
        '174297zuNkJd',
        '11950450QmdSEv',
        'cDWag',
        '1812AsvyrB',
        '2973162SaqlJG'
    ];
    a = function () {
        return v;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x213a + -0xc59 * 0x2 + -0x126 * 0x7);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[r(0x8c)] = SetWebHookUrl;