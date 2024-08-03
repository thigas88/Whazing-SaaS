'use strict';
const r = b, s = b;
function a() {
    const w = [
        's/logger',
        'error',
        'NT_MESSAGE',
        'url',
        'applicatio',
        '__importDe',
        '87316VItqxJ',
        'post',
        'rs/AppErro',
        'fault',
        'erty',
        'ClBKb',
        '82eSaxAl',
        '../../erro',
        'rcLCF',
        '32471956Ptysql',
        '/v1/messag',
        'Content-Ty',
        'API_URL_36',
        '7412418rLeQJS',
        'defineProp',
        '19914vqULeh',
        '225lYKWiT',
        'data',
        '12170DfkXKo',
        '5708339AnmpNc',
        'value',
        '360_NOT_SE',
        '51AmgZCv',
        'default',
        'headers',
        'env',
        'n/json',
        '__esModule',
        'D360-API-K',
        '578672ERTFNZ',
        'logger',
        '20Xvvmco',
        'method',
        '../../util',
        'axios'
    ];
    a = function () {
        return w;
    };
    return a();
}
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0x142)) / (-0x2 * 0x13 + 0x1 * 0x183b + -0x1814) * (parseInt(q(0x136)) / (-0x1688 + -0x82 * 0x34 + -0x166 * -0x23)) + -parseInt(p(0x11d)) / (-0x6f1 * -0x1 + -0x952 * -0x1 + -0x82 * 0x20) * (parseInt(q(0x130)) / (0x1f01 * 0x1 + -0xd6e + 0x383 * -0x5)) + -parseInt(q(0x140)) / (0x6dc * 0x5 + -0x1a * -0x170 + -0x47a7) * (-parseInt(p(0x13f)) / (0x3 * 0x2e9 + -0x1 * 0x17ae + 0xef9 * 0x1)) + -parseInt(p(0x143)) / (0x3a5 * -0x5 + 0x16cb + -0x48b) + parseInt(p(0x124)) / (-0x10e4 + -0x18b * -0xa + 0x17e) + -parseInt(q(0x13d)) / (-0xaca * 0x1 + -0x900 + 0x13d3) * (parseInt(q(0x126)) / (-0x1fd2 + -0x5 * 0x3f5 + 0x33a5)) + parseInt(q(0x139)) / (-0x20fa + 0x1cf + -0x11 * -0x1d6);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x3f1 * 0x2e9 + 0x3 * -0x370b7 + 0xba6ad));
var __importDefault = this && this[r(0x12f) + r(0x133)] || function (c) {
    const t = s;
    return c && c[t(0x122)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x5 * 0x496 + -0x1 * 0x1fef + -0x1 * -0xa1d);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[s(0x144)] = !![], Object[r(0x13e) + r(0x134)](exports, r(0x122), k);
const axios_1 = __importDefault(require(s(0x129))), AppError_1 = __importDefault(require(r(0x137) + s(0x132) + 'r')), logger_1 = require(s(0x128) + s(0x12a)), SentMessage = async ({
        message: f,
        apiKey: g
    }) => {
        const u = s, v = r, h = {};
        h[u(0x138)] = v(0x131), h[v(0x135)] = u(0x12e) + v(0x121);
        const i = h, j = process[u(0x120)][u(0x13c) + '0'] + (u(0x13a) + 'es');
        try {
            const l = { ...f }, m = {};
            m[v(0x127)] = i[u(0x138)], m[v(0x12d)] = j, m[v(0x141)] = l, m[v(0x11f)] = {}, m[v(0x11f)][v(0x123) + 'EY'] = g, m[v(0x11f)][v(0x13b) + 'pe'] = i[u(0x135)];
            const n = await (-0x1 * 0xd06 + -0x565 + 0x126b, axios_1[u(0x11e)])(m);
            return n[u(0x141)];
        } catch (o) {
            logger_1[u(0x125)][u(0x12b)](o);
            throw new AppError_1[(v(0x11e))](u(0x11c) + u(0x12c) + ':\x20' + o);
        }
    };
exports[r(0x11e)] = SentMessage;