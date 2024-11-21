const s = b, v = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x3 * 0x6b1 + 0x2 * -0xa6 + 0x11f2 * -0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const q = b, r = b, e = c();
    while (!![]) {
        try {
            const g = parseInt(q(0xdf)) / (-0x1c9 * -0x11 + 0x60f + -0x2467) + parseInt(q(0xd9)) / (0x1 * 0x509 + -0x2fe * 0x9 + 0x1 * 0x15e7) + -parseInt(r(0xe3)) / (0x23fd + -0x1678 + -0xd82) * (-parseInt(r(0xe4)) / (0x1d78 + 0x1083 + -0x2df7)) + parseInt(r(0xef)) / (-0x58f * 0x1 + -0x9b0 + -0x4 * -0x3d1) * (parseInt(r(0xea)) / (-0x112d + 0x2 * -0xfc5 + -0x3 * -0x103f)) + -parseInt(q(0xd5)) / (0x3 * 0x6be + 0x3 * -0xd3 + 0x11ba * -0x1) * (parseInt(r(0xe9)) / (0x12ed + -0x12a5 + 0x20 * -0x2)) + parseInt(q(0xe1)) / (0x3 * -0xcdf + 0x21 * -0x117 + 0x4a9d * 0x1) + -parseInt(r(0xde)) / (-0x4e * 0x7b + 0x1610 + -0xac * -0x17);
            if (g === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, 0x105a43 * 0x1 + 0x1 * -0x10c6df + 0xa51a0));
function a() {
    const w = [
        'autenticar',
        '5776227NBSbQo',
        'env',
        '1001241LIMahD',
        '8qhYzZb',
        'tenticação',
        'status',
        'password',
        'axios',
        '3264504cPrTKS',
        '1122762mguCgv',
        'post',
        'body',
        'error',
        'SENHA_API',
        '20jGGEKw',
        '7mZFNqu',
        'USUARIO_AP',
        'exports',
        'username',
        '1149204oTCPQv',
        'lUbqu',
        'Erro\x20na\x20au',
        'data',
        'json',
        '25740170EcDTdv',
        '998125SmMdiv'
    ];
    a = function () {
        return w;
    };
    return a();
}
const axios = require(s(0xe8));
async function autenticar(g, h) {
    const t = s, u = s, i = {};
    i[t(0xda)] = u(0xdb) + u(0xe5);
    const j = i, {
            username: k,
            password: l
        } = g[t(0xec)];
    try {
        const m = {};
        m[u(0xd8)] = process[t(0xe2)][u(0xd6) + 'I'], m[u(0xe7)] = process[u(0xe2)][t(0xee)];
        const n = await axios[u(0xeb)](m);
        h[u(0xdd)](n[u(0xdc)]);
    } catch (o) {
        const p = {};
        p[t(0xed)] = j[t(0xda)], h[u(0xe6)](0x6 * -0x391 + -0xea7 + -0x439 * -0x9)[u(0xdd)](p);
    }
}
const f = {};
f[v(0xe0)] = autenticar, module[v(0xd7)] = f;