'use strict';
function a() {
    const G = [
        '6uSCRWs',
        'message',
        '32055ptBHHk',
        '\x20Error\x20in\x20',
        '58210GZgMbM',
        '2486006NRVyWj',
        'value',
        'HUB_TOKEN_',
        'info',
        '3372mEaHZm',
        'stringify',
        'ers/ShowHu',
        'ListChanne',
        '3466888kBsLQr',
        'default',
        'notificame',
        '156cvKbDB',
        'NOT_FOUND',
        '__esModule',
        'An\x20unknown',
        '57499PdxSZP',
        '../../help',
        'logger',
        'ls:\x20',
        'warn',
        '\x20error\x20occ',
        '8128714XqiSFk',
        'urred:\x20',
        '1jmVrgV',
        'defineProp',
        'showHubTok',
        's/logger',
        'NOTIFICAME',
        'FHCsp',
        '14SPhJYn',
        'erty',
        'dotenv',
        '../../util',
        'Client',
        'hubsdk',
        'WRoPX',
        'config',
        'TPWOv',
        'bToken',
        '261bAIMun',
        'listChanne',
        '3960035KxDmTU'
    ];
    a = function () {
        return G;
    };
    return a();
}
const C = b, D = b;
(function (c, d) {
    const A = b, B = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(A(0x1f2)) / (-0x11ff + 0x11d7 * 0x2 + -0x11ae) * (parseInt(B(0x1db)) / (-0x4d1 * 0x3 + -0x25a5 + 0x341a)) + parseInt(B(0x1d8)) / (0x7 * 0xa4 + -0x43 * 0x15 + 0x106) * (-parseInt(A(0x1e6)) / (0x1a6b + 0x1e5 + -0x1c4c)) + parseInt(A(0x1d5)) / (0xb29 * -0x3 + 0x2 * 0x7c4 + 0x11f8) * (parseInt(B(0x1d6)) / (-0x20d1 + -0xd53 + 0x1715 * 0x2)) + -parseInt(A(0x1f8)) / (0x1b56 + 0x359 * -0x9 + 0x2d2) * (-parseInt(A(0x1e3)) / (0x47a + 0x272 * 0x8 + -0x1802)) + parseInt(B(0x1d3)) / (0xf4 * -0x1c + 0x1596 + 0x107 * 0x5) * (parseInt(B(0x1da)) / (0x6aa + -0x1440 + 0xda * 0x10)) + -parseInt(A(0x1f0)) / (-0xd3f * 0x2 + 0x1 * -0x249c + 0x3f25) + -parseInt(B(0x1df)) / (0x2306 + -0xf1 * 0x20 + 0x8a * -0x9) * (-parseInt(A(0x1ea)) / (-0x10 * 0x193 + -0x1152 + 0x2a8f));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x15 * 0x24fb + 0x139987 * -0x1 + 0x20e1fb));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x26ee + 0x513 + -0x2a34);
        let h = e[f];
        return h;
    }, b(c, d);
}
const z = {};
z[C(0x1dc)] = !![], Object[C(0x1f3) + C(0x1f9)](exports, D(0x1e8), z);
const notificamehubsdk_1 = require(C(0x1e5) + D(0x1ce)), ShowHubToken_1 = require(C(0x1eb) + C(0x1e1) + D(0x1d2)), logger_1 = require(D(0x1fb) + C(0x1f5));
require(D(0x1fa))[D(0x1d0)]();
const ListChannels = async d => {
    const E = D, F = C, e = {};
    e[E(0x1cf)] = E(0x1f6) + F(0x1dd) + F(0x1e7), e[E(0x1d1)] = F(0x1d9) + F(0x1e2) + E(0x1ed), e[E(0x1f7)] = function (g, h) {
        return g instanceof h;
    };
    const f = e;
    try {
        const g = await (-0x26c1 + 0x74b * -0x5 + 0xe8 * 0x53, ShowHubToken_1[E(0x1f4) + 'en'])(d);
        if (!g)
            throw new Error(f[F(0x1cf)]);
        const h = new notificamehubsdk_1[(E(0x1cd))](g), i = await h[E(0x1d4) + 'ls']();
        return logger_1[E(0x1ec)][E(0x1de)]('' + JSON[E(0x1e0)](i)), i;
    } catch (j) {
        logger_1[E(0x1ec)][E(0x1ee)](f[E(0x1d1)], j);
        if (f[E(0x1f7)](j, Error))
            throw new Error(j[F(0x1d7)]);
        else
            throw new Error(E(0x1e9) + E(0x1ef) + E(0x1f1) + JSON[F(0x1e0)](j));
    }
};
exports[D(0x1e4)] = ListChannels;