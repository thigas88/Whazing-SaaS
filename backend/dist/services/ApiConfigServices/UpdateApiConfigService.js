'use strict';
function a() {
    const E = [
        '4701fTKpul',
        'findOne',
        '__esModule',
        '11nkZFIq',
        'NFIG_NOT_F',
        'erty',
        'isActive',
        'RgHVg',
        '36eifldY',
        '1056585PxyiZv',
        'tenantId',
        'defineProp',
        '65386WZyYGt',
        'update',
        '208aUGdRE',
        '299752LscEdg',
        'default',
        'value',
        '../../mode',
        'ls/ApiConf',
        'urlMessage',
        '../../erro',
        'authToken',
        'where',
        'rs/AppErro',
        'OUND',
        '12JTEbqe',
        'Status',
        '275MWdbKC',
        'urlService',
        '4051762nNYOah',
        'reload',
        '147290WLOzqY',
        'userId',
        'fault',
        '__importDe',
        'sessionId',
        '14514rNCgID',
        'ERR_API_CO',
        'name',
        '693LqjHQd'
    ];
    a = function () {
        return E;
    };
    return a();
}
const z = b, A = b;
(function (c, d) {
    const x = b, y = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(x(0x200)) / (-0x169 * -0xb + -0xa2f * -0x3 + -0x2e0f) * (-parseInt(x(0x209)) / (0xc73 + -0x55a * -0x2 + -0x1725)) + parseInt(y(0x1fd)) / (-0x13 * -0x1dd + 0x41 * 0x41 + 0x33e5 * -0x1) * (parseInt(y(0x20b)) / (-0xdc1 + 0x10be * 0x1 + -0x1 * 0x2f9)) + -parseInt(x(0x206)) / (-0x2445 + -0x1f91 + -0x257 * -0x1d) + parseInt(x(0x1f9)) / (0xa + 0x12a0 + -0x12a4) * (parseInt(x(0x1fc)) / (0x803 + -0xe1c + -0x4 * -0x188)) + parseInt(y(0x1e3)) / (-0x1490 + 0x15cc + -0x134) * (-parseInt(x(0x205)) / (-0x1784 + -0xbca + 0x2357)) + parseInt(x(0x1f4)) / (-0x54a + -0x2563 + 0x2ab7) * (-parseInt(x(0x1f0)) / (0x2 * -0x2e8 + -0x129 * -0x1 + 0x4b2)) + parseInt(x(0x1ee)) / (-0x4a8 * 0x4 + 0x150c + 0x2 * -0x130) * (parseInt(x(0x1f2)) / (0x99 * -0x3 + -0x19e5 + -0x1bbd * -0x1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x38ccc + 0x56055 + -0x22f33 * -0x1));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * -0x1fe7 + 0x2 * 0x367 + -0x274 * -0xb);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[z(0x1f7) + A(0x1f6)] || function (c) {
    const B = A;
    return c && c[B(0x1ff)] ? c : { 'default': c };
};
const k = {};
k[z(0x1e5)] = !![], Object[A(0x208) + z(0x202)](exports, A(0x1ff), k);
const AppError_1 = __importDefault(require(z(0x1e9) + z(0x1ec) + 'r')), ApiConfig_1 = __importDefault(require(A(0x1e6) + z(0x1e7) + 'ig')), UpdateApiConfigService = async ({
        apiData: g,
        apiId: h,
        tenantId: i
    }) => {
        const C = A, D = A, j = {};
        j[C(0x204)] = D(0x1fa) + C(0x201) + D(0x1ed);
        const l = j, m = {};
        m['id'] = h, m[C(0x207)] = i;
        const n = {};
        n[D(0x1eb)] = m;
        const o = await ApiConfig_1[C(0x1e4)][D(0x1fe)](n);
        if (!o)
            throw new AppError_1[(D(0x1e4))](l[C(0x204)], 0x19db + 0x367 * 0x5 + -0x294a);
        const {
                name: p,
                sessionId: q,
                urlServiceStatus: r,
                urlMessageStatus: s,
                userId: t,
                authToken: u,
                isActive: v
            } = g, w = {};
        return w[D(0x1fb)] = p, w[C(0x1f8)] = q, w[C(0x1f1) + D(0x1ef)] = r, w[C(0x1e8) + D(0x1ef)] = s, w[C(0x1f5)] = t, w[D(0x1ea)] = u, w[D(0x203)] = v, await o[D(0x20a)](w), await o[C(0x1f3)](), o;
    };
exports[z(0x1e4)] = UpdateApiConfigService;