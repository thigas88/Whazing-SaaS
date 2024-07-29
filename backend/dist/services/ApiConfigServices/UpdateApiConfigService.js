'use strict';
const z = b, A = b;
(function (c, d) {
    const x = b, y = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(x(0x196)) / (0x1aef + -0x215a + 0x66c) + parseInt(y(0x1af)) / (-0x2 * 0x766 + -0xbf * -0xe + 0x6 * 0xba) * (parseInt(x(0x19b)) / (-0x3d7 * 0x9 + 0x3 * 0x1ca + -0x10b * -0x1c)) + parseInt(x(0x1a0)) / (-0x1b3c + 0x563 + -0x1 * -0x15dd) + -parseInt(y(0x19e)) / (0x2405 + 0x14b9 + -0x38b9) + -parseInt(y(0x1a6)) / (0xaf9 + 0xd0c + -0x17ff) * (-parseInt(x(0x1a7)) / (-0x1753 * -0x1 + 0x129b + -0x29e7 * 0x1)) + parseInt(y(0x1ac)) / (-0x3 * 0xc67 + 0x1555 + -0x1fd * -0x8) * (parseInt(x(0x1b7)) / (-0x13f * 0x1f + -0x1 * 0x20f5 + -0xc1 * -0x5f)) + parseInt(x(0x198)) / (0x4 * -0x667 + 0x7 * -0x235 + 0x2919) * (-parseInt(x(0x194)) / (-0x493 + -0x1 * -0x2066 + -0x1bc8));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x3 * -0x26875 + -0x5a * -0xdfe + 0x1 * -0x7db9c));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1b4d * -0x1 + -0x208f + 0x6d6);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[z(0x19f) + z(0x1ae)] || function (c) {
    const B = z;
    return c && c[B(0x1b6)] ? c : { 'default': c };
};
const k = {};
k[A(0x1a8)] = !![], Object[z(0x1b4) + A(0x1b3)](exports, z(0x1b6), k);
const AppError_1 = __importDefault(require(A(0x1b5) + z(0x1b2) + 'r')), ApiConfig_1 = __importDefault(require(A(0x1b8) + z(0x1ad) + 'ig')), UpdateApiConfigService = async ({
        apiData: g,
        apiId: h,
        tenantId: i
    }) => {
        const C = z, D = A, j = {};
        j[C(0x1b9)] = C(0x195) + D(0x197) + C(0x1a2);
        const l = j, m = {};
        m['id'] = h, m[D(0x1a5)] = i;
        const n = {};
        n[C(0x1ab)] = m;
        const o = await ApiConfig_1[D(0x1a9)][D(0x1b0)](n);
        if (!o)
            throw new AppError_1[(C(0x1a9))](l[C(0x1b9)], -0x1334 * -0x2 + -0xd54 * -0x1 + -0x3228);
        const {
                name: p,
                sessionId: q,
                urlServiceStatus: r,
                urlMessageStatus: s,
                userId: t,
                authToken: u,
                isActive: v
            } = g, w = {};
        return w[C(0x1aa)] = p, w[D(0x1a3)] = q, w[C(0x19a) + D(0x1ba)] = r, w[D(0x19c) + D(0x1ba)] = s, w[C(0x1a1)] = t, w[C(0x1b1)] = u, w[D(0x199)] = v, await o[D(0x1a4)](w), await o[D(0x19d)](), o;
    };
function a() {
    const E = [
        '1262840bdPAwH',
        'userId',
        'OUND',
        'sessionId',
        'update',
        'tenantId',
        '47442eHGNZC',
        '343DuCdNF',
        'value',
        'default',
        'name',
        'where',
        '1864NTpxou',
        'ls/ApiConf',
        'fault',
        '310092ESRNoC',
        'findOne',
        'authToken',
        'rs/AppErro',
        'erty',
        'defineProp',
        '../../erro',
        '__esModule',
        '2943VGITLG',
        '../../mode',
        'PLOPZ',
        'Status',
        '517847KIiZIE',
        'ERR_API_CO',
        '305484CzcTji',
        'NFIG_NOT_F',
        '40fjmYRQ',
        'isActive',
        'urlService',
        '9nRUTwP',
        'urlMessage',
        'reload',
        '2349215qVxxzn',
        '__importDe'
    ];
    a = function () {
        return E;
    };
    return a();
}
exports[A(0x1a9)] = UpdateApiConfigService;