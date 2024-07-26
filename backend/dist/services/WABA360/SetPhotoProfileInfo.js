'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2f6 * 0x3 + 0x1054 + -0x1749);
        let h = e[f];
        return h;
    }, b(c, d);
}
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(o(0x213)) / (0x4 * 0x97c + -0x1a * 0xf7 + 0x1 * -0xcd9) + parseInt(p(0x205)) / (0x1f25 + -0x98a + -0x1599) + -parseInt(p(0x1ee)) / (0x2142 + 0x1fb0 + -0x40ef) + parseInt(p(0x215)) / (0x1 * -0xb3f + 0x230 * 0xd + 0x1 * -0x112d) + parseInt(o(0x1f3)) / (-0x2 * -0xb3b + 0x6a * -0x47 + 0x6f5) * (-parseInt(o(0x20e)) / (0x5 * 0x1c5 + -0x2305 + 0x2 * 0xd19)) + -parseInt(p(0x1f1)) / (-0x19d8 + 0x9ee + 0xff1) * (-parseInt(p(0x1fb)) / (0xb3 * -0x35 + 0x1199 + 0x137e)) + parseInt(p(0x20b)) / (-0x1098 + 0x43 * 0x17 + 0x2 * 0x54e);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xc53b0 + 0xbbab * -0x1 + -0x2 * -0xca8f1));
var __importDefault = this && this[q(0x204) + q(0x1ff)] || function (c) {
    const s = r;
    return c && c[s(0x206)] ? c : { 'default': c };
};
function a() {
    const v = [
        'file',
        'iLots',
        'rs/AppErro',
        'error',
        'erty',
        '../../util',
        '16pzyNXu',
        'API_URL_36',
        'value',
        'defineProp',
        'fault',
        'url',
        '/v1/settin',
        'default',
        's/logger',
        '__importDe',
        '2735912uOhzvU',
        '__esModule',
        'data',
        'gs/profile',
        'post',
        'multipart/',
        '6213087jQZiae',
        'env',
        'headers',
        '26424HYjbby',
        'method',
        'Content-Ty',
        '../../erro',
        'form-data',
        '671517nxqisx',
        'axios',
        '24568klGbWf',
        '/photo',
        'D360-API-K',
        '2234841knsKzY',
        'T_PHOTO:\x20',
        '360_NOT_SE',
        '2702161LUOeHm',
        'logger',
        '700JvDFgG',
        'OKihu'
    ];
    a = function () {
        return v;
    };
    return a();
}
const k = {};
k[q(0x1fd)] = !![], Object[r(0x1fe) + q(0x1f9)](exports, r(0x206), k);
const axios_1 = __importDefault(require(r(0x214))), AppError_1 = __importDefault(require(r(0x211) + q(0x1f7) + 'r')), logger_1 = require(q(0x1fa) + q(0x203)), SetPhotoProfileInfo = async ({
        file: f,
        apiKey: g
    }) => {
        const t = q, u = r, h = {};
        h[t(0x1f6)] = t(0x209), h[t(0x1f4)] = u(0x20a) + t(0x212);
        const i = h, j = process[t(0x20c)][t(0x1fc) + '0'] + (t(0x201) + t(0x208) + t(0x216));
        try {
            const l = {};
            l[u(0x1f5)] = f;
            const m = {};
            return m[u(0x20f)] = i[t(0x1f6)], m[u(0x200)] = j, m[t(0x207)] = l, m[u(0x20d)] = {}, m[u(0x20d)][u(0x1ed) + 'EY'] = g, m[u(0x20d)][u(0x210) + 'pe'] = i[t(0x1f4)], await (0x24e2 + 0x77 * -0x32 + -0xda4, axios_1[t(0x202)])(m), !![];
        } catch (n) {
            logger_1[u(0x1f2)][t(0x1f8)](n);
            throw new AppError_1[(t(0x202))](u(0x1f0) + u(0x1ef) + n);
        }
    };
exports[r(0x202)] = SetPhotoProfileInfo;