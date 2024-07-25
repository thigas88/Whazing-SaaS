'use strict';
function a() {
    const v = [
        '../../util',
        'T_ABOUT:\x20',
        'gs/profile',
        '__importDe',
        '/about',
        'data',
        'method',
        'text',
        '757428MOtocn',
        '1180365JZeaHs',
        'D360-API-K',
        '1319376CPwllL',
        '__esModule',
        's/logger',
        'default',
        'API_URL_36',
        '/v1/settin',
        'BlCCw',
        'url',
        '../../erro',
        'axios',
        'erty',
        '1576992UyDPUh',
        'fault',
        '2739429wQaEyf',
        'defineProp',
        'n/json',
        'Content-Ty',
        '360_NOT_SE',
        'rs/AppErro',
        'logger',
        'env',
        'patch',
        'error',
        '58791IOFzhr',
        '1014772jEYvyR',
        '6RzwCIg',
        'applicatio',
        'XCDQm',
        'headers',
        'value'
    ];
    a = function () {
        return v;
    };
    return a();
}
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(o(0x1c7)) / (-0x917 + -0x1 * 0x16a7 + 0x1fbf) + -parseInt(p(0x1ad)) / (-0x1416 + -0xbfb + 0x15 * 0x187) + parseInt(p(0x1b0)) / (0x1 * -0x80d + 0x14b + 0x6c5 * 0x1) + -parseInt(p(0x1c8)) / (-0x1662 + -0x8 * 0x1d3 + 0x5 * 0x766) + parseInt(p(0x1ae)) / (-0x13 * 0x56 + 0x5 * -0x6c9 + 0x2854) + parseInt(o(0x1c9)) / (-0x1 * 0x216 + 0x16f * 0x5 + -0x50f) * (parseInt(o(0x1bd)) / (0x16c + -0xa6 * 0x1a + 0xf77)) + -parseInt(o(0x1bb)) / (-0x1 * -0x2327 + -0x13 * 0x5 + -0x22c0);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x4e83e + 0x541 * 0x1 + -0x101 * 0x67));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xc6 * -0x26 + 0xc96 + 0x1c1 * -0x17);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[q(0x1a8) + q(0x1bc)] || function (c) {
    const s = q;
    return c && c[s(0x1b1)] ? c : { 'default': c };
};
const k = {};
k[q(0x1a4)] = !![], Object[r(0x1be) + r(0x1ba)](exports, q(0x1b1), k);
const axios_1 = __importDefault(require(q(0x1b9))), AppError_1 = __importDefault(require(q(0x1b8) + r(0x1c2) + 'r')), logger_1 = require(r(0x1a5) + q(0x1b2)), SetAboutProfileInfo = async ({
        text: f,
        apiKey: g
    }) => {
        const t = q, u = r, h = {};
        h[t(0x1cb)] = t(0x1c5), h[t(0x1b6)] = u(0x1ca) + t(0x1bf);
        const i = h, j = process[t(0x1c4)][t(0x1b4) + '0'] + (u(0x1b5) + t(0x1a7) + t(0x1a9));
        try {
            const l = {};
            l[t(0x1ac)] = f;
            const m = {};
            return m[u(0x1ab)] = i[u(0x1cb)], m[u(0x1b7)] = j, m[t(0x1aa)] = l, m[u(0x1a3)] = {}, m[u(0x1a3)][u(0x1af) + 'EY'] = g, m[u(0x1a3)][u(0x1c0) + 'pe'] = i[u(0x1b6)], await (-0x2 * -0xde4 + 0xd1c + 0x1 * -0x28e4, axios_1[u(0x1b3)])(m), !![];
        } catch (n) {
            logger_1[u(0x1c3)][t(0x1c6)](n);
            throw new AppError_1[(u(0x1b3))](u(0x1c1) + t(0x1a6) + n);
        }
    };
exports[r(0x1b3)] = SetAboutProfileInfo;