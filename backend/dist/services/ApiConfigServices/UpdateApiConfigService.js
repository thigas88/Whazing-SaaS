'use strict';
const z = b, A = b;
(function (c, d) {
    const x = b, y = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(x(0x19a)) / (0x5cf * 0x2 + 0xb * 0xfb + -0x1666 * 0x1) + -parseInt(y(0x1a0)) / (0xf31 + -0xfe5 + 0x7 * 0x1a) * (-parseInt(y(0x195)) / (-0x1fe * 0x2 + -0x137b + 0xbbd * 0x2)) + -parseInt(x(0x1b1)) / (-0x2a8 + -0x3e * 0x6f + 0x1d8e) * (parseInt(y(0x1b9)) / (0x11 * -0xc1 + -0xb4 * 0x2f + -0x7 * -0x68e)) + -parseInt(x(0x1ad)) / (0x2153 + 0x204d + -0x419a) + -parseInt(y(0x1ac)) / (-0x14dc + 0x2f * 0x40 + 0x923) * (-parseInt(y(0x194)) / (0x1 * 0x509 + -0xef0 + 0x9ef)) + parseInt(x(0x198)) / (-0x1383 + 0x1 * -0x1b59 + -0x5 * -0x961) * (parseInt(x(0x1b6)) / (-0x74b + 0x1d63 + -0x160e)) + parseInt(x(0x19c)) / (0x1912 + -0x2 * 0x2c4 + -0x137f);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x7b983 + 0x4a43 * 0x21 + 0x8a4a6));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x107 * -0x8 + -0x511 * 0x1 + -0x193);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const E = [
        '687vtSySK',
        'findOne',
        'reload',
        '18iFetHw',
        'name',
        '1145713sUePMq',
        'rs/AppErro',
        '8242597zrJsFn',
        'value',
        'urlMessage',
        'defineProp',
        '6884salkrB',
        'default',
        'fault',
        'userId',
        'ERR_API_CO',
        '__importDe',
        'sessionId',
        'ls/ApiConf',
        '../../mode',
        'authToken',
        'update',
        'NFIG_NOT_F',
        '6293077AtjuFy',
        '2628720ARpnnm',
        'isActive',
        '../../erro',
        'erty',
        '679132yiWYbW',
        'where',
        'urlService',
        'OUND',
        '__esModule',
        '23090UeEyBe',
        'tenantId',
        'Status',
        '5GiXJrU',
        'xUQjr',
        '8GiamQB'
    ];
    a = function () {
        return E;
    };
    return a();
}
var __importDefault = this && this[z(0x1a5) + A(0x1a2)] || function (c) {
    const B = A;
    return c && c[B(0x1b5)] ? c : { 'default': c };
};
const k = {};
k[z(0x19d)] = !![], Object[A(0x19f) + A(0x1b0)](exports, z(0x1b5), k);
const AppError_1 = __importDefault(require(A(0x1af) + A(0x19b) + 'r')), ApiConfig_1 = __importDefault(require(z(0x1a8) + z(0x1a7) + 'ig')), UpdateApiConfigService = async ({
        apiData: g,
        apiId: h,
        tenantId: i
    }) => {
        const C = z, D = z, j = {};
        j[C(0x1ba)] = D(0x1a4) + D(0x1ab) + C(0x1b4);
        const l = j, m = {};
        m['id'] = h, m[C(0x1b7)] = i;
        const n = {};
        n[C(0x1b2)] = m;
        const o = await ApiConfig_1[C(0x1a1)][C(0x196)](n);
        if (!o)
            throw new AppError_1[(D(0x1a1))](l[C(0x1ba)], 0x1 * 0x176d + -0x3 * 0xb57 + 0x1 * 0xc2c);
        const {
                name: p,
                sessionId: q,
                urlServiceStatus: r,
                urlMessageStatus: s,
                userId: t,
                authToken: u,
                isActive: v
            } = g, w = {};
        return w[D(0x199)] = p, w[D(0x1a6)] = q, w[C(0x1b3) + C(0x1b8)] = r, w[C(0x19e) + D(0x1b8)] = s, w[C(0x1a3)] = t, w[D(0x1a9)] = u, w[D(0x1ae)] = v, await o[D(0x1aa)](w), await o[C(0x197)](), o;
    };
exports[z(0x1a1)] = UpdateApiConfigService;